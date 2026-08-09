import fs from 'node:fs';
import path from 'node:path';

import GithubSlugger from 'github-slugger';
import { toString } from 'mdast-util-to-string';
import { unified } from 'unified';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';

import { dossierSlug, normalizeLineEndings, toPosixPath } from './normalize.mjs';

const processor = unified().use(remarkParse).use(remarkGfm);

function walk(node, visitor) {
  visitor(node);
  if (Array.isArray(node.children)) {
    for (const child of node.children) walk(child, visitor);
  }
}

function classifyUrl(url) {
  if (/^[a-z][a-z0-9+.-]*:/i.test(url)) {
    const scheme = url.slice(0, url.indexOf(':')).toLowerCase();
    if (scheme !== 'http' && scheme !== 'https') return { kind: 'unsafe', scheme };
    return { kind: 'external' };
  }
  return { kind: 'local' };
}

export function parseMarkdownDocument(relativePath, rawMarkdown, sha256, linkedIdeaIds) {
  const markdown = normalizeLineEndings(rawMarkdown);
  const tree = processor.parse(markdown);
  const slugger = new GithubSlugger();
  const headings = [];
  const definitions = new Map();
  const pendingLinks = [];
  const htmlNodes = [];

  walk(tree, (node) => {
    if (node.type === 'definition') definitions.set(node.identifier, node.url);
    if (node.type === 'heading') {
      const text = toString(node).trim();
      headings.push({ depth: node.depth, text, anchor: slugger.slug(text) });
    }
    if (node.type === 'link') pendingLinks.push({ url: node.url, text: toString(node).trim() });
    if (node.type === 'linkReference') {
      pendingLinks.push({ identifier: node.identifier, text: toString(node).trim() });
    }
    if (node.type === 'html') htmlNodes.push(node.value);
  });

  const linkCounts = new Map();
  for (const pending of pendingLinks) {
    const url = pending.url ?? definitions.get(pending.identifier);
    if (!url) continue;
    const classification = classifyUrl(url);
    const key = `${classification.kind}\0${url}\0${pending.text}`;
    const previous = linkCounts.get(key);
    linkCounts.set(key, {
      url,
      text: pending.text,
      kind: classification.kind,
      scheme: classification.scheme,
      occurrences: (previous?.occurrences ?? 0) + 1,
    });
  }

  const links = [...linkCounts.values()].sort((a, b) => {
    const left = `${a.url}\0${a.text}`;
    const right = `${b.url}\0${b.text}`;
    return left < right ? -1 : left > right ? 1 : 0;
  });
  const title = headings.find((heading) => heading.depth === 1)?.text ??
    path.posix.basename(relativePath, '.md').replace(/[-_]+/g, ' ');
  const plainText = tree.children.map((node) => toString(node).trim()).filter(Boolean).join('\n');
  const slug = dossierSlug(relativePath);

  return {
    document: {
      slug,
      path: relativePath,
      route: `/research/${slug}`,
      title,
      markdown,
      plainText,
      headings,
      links: links
        .filter((link) => link.kind !== 'unsafe')
        .map(({ url, text, kind, occurrences }) => ({ url, text, kind, occurrences })),
      linkedIdeaIds: [...linkedIdeaIds].sort(),
      sha256,
    },
    unsafeLinks: links.filter((link) => link.kind === 'unsafe'),
    htmlNodes,
  };
}

function isWithin(parent, child) {
  const relative = path.relative(parent, child);
  return relative === '' || (!relative.startsWith('..') && !path.isAbsolute(relative));
}

export function validateMarkdownDocuments(repoRoot, parsedDocuments) {
  const errors = [];
  const warnings = [];
  const byPath = new Map(parsedDocuments.map((parsed) => [parsed.document.path, parsed.document]));
  const docsRoot = path.resolve(repoRoot, 'docs');

  for (const parsed of parsedDocuments) {
    const document = parsed.document;
    for (const unsafe of parsed.unsafeLinks) {
      errors.push(`${document.path}: unsafe link scheme ${unsafe.scheme}: ${unsafe.url}`);
    }
    if (parsed.htmlNodes.length > 0) {
      warnings.push(`${document.path}: contains ${parsed.htmlNodes.length} raw HTML node(s); raw Markdown is preserved`);
    }
    for (const link of document.links.filter((candidate) => candidate.kind === 'local')) {
      const [rawTarget, rawFragment] = link.url.split('#', 2);
      const targetPath = rawTarget
        ? toPosixPath(path.posix.normalize(path.posix.join(path.posix.dirname(document.path), rawTarget)))
        : document.path;
      const resolved = path.resolve(repoRoot, targetPath);
      if (!isWithin(docsRoot, resolved)) {
        errors.push(`${document.path}: local link escapes docs/: ${link.url}`);
        continue;
      }
      if (rawTarget && !fs.existsSync(resolved)) {
        errors.push(`${document.path}: missing local link target: ${link.url}`);
        continue;
      }
      if (rawFragment && byPath.has(targetPath)) {
        const anchors = new Set(byPath.get(targetPath).headings.map((heading) => heading.anchor));
        if (!anchors.has(decodeURIComponent(rawFragment))) {
          errors.push(`${document.path}: missing Markdown anchor: ${link.url}`);
        }
      }
    }
  }

  return { errors, warnings };
}
