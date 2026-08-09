import fs from 'node:fs/promises';
import path from 'node:path';

import { readSourceSnapshot } from './hash.mjs';
import { parseMarkdownDocument, validateMarkdownDocuments } from './markdown.mjs';
import { dossierSlug, normalizeSearch } from './normalize.mjs';
import { collectSourcePaths, parseSourceJson, SOURCE_PATH, validateSourceSemantics } from './source.mjs';
import { stableJson } from './stable-json.mjs';
import { ValidationError, validateGeneratedArtifacts, validateSourceSchema } from './validate.mjs';

export const OUTPUT_DIRECTORY = 'src/generated/idea-ledger';
export const OUTPUT_FILES = [
  'catalog.json',
  'manifest.json',
  'quality-report.json',
  'research-documents.json',
  'routes.json',
  'search-documents.json',
];

function sorted(values) {
  return [...values].sort();
}

function buildQualityReport(source, researchDocuments, sourceHash) {
  const documentsByPath = new Map(researchDocuments.map((document) => [document.path, document]));
  const headingMatchedIdeas = [];
  const mentionOnlyIdeas = [];
  const dossierRefsWithoutMention = [];
  const ideasWithoutResearch = [];
  const multiRefIdeas = [];

  for (const idea of source.ideas) {
    if (idea.research.length === 0) {
      ideasWithoutResearch.push(idea.id);
      continue;
    }
    if (idea.research.length > 1) multiRefIdeas.push(idea.id);

    const candidates = [idea.name, ...idea.aliases].map(normalizeSearch).filter(Boolean);
    const documents = idea.research.map((relativePath) => documentsByPath.get(relativePath));
    const headingMatch = documents.some((document) =>
      document.headings.some((heading) => {
        const normalizedHeading = normalizeSearch(heading.text);
        return candidates.some(
          (candidate) => normalizedHeading.includes(candidate) || candidate.includes(normalizedHeading)
        );
      })
    );
    const normalizedMarkdown = normalizeSearch(documents.map((document) => document.markdown).join('\n'));
    const mentionMatch = candidates.some((candidate) => normalizedMarkdown.includes(candidate));

    if (headingMatch) headingMatchedIdeas.push(idea.id);
    else if (mentionMatch) mentionOnlyIdeas.push(idea.id);
    else dossierRefsWithoutMention.push(idea.id);
  }

  const tagCounts = new Map();
  for (const tag of source.ideas.flatMap((idea) => idea.tags)) {
    tagCounts.set(tag, (tagCounts.get(tag) ?? 0) + 1);
  }
  const singletonTags = sorted([...tagCounts].filter(([, count]) => count === 1).map(([tag]) => tag));

  return {
    sourceHash,
    counts: {
      ideas: source.ideas.length,
      dossiers: researchDocuments.length,
      researchEdges: source.ideas.reduce((total, idea) => total + idea.research.length, 0),
      ideasWithoutResearch: ideasWithoutResearch.length,
      headingMatchedIdeas: headingMatchedIdeas.length,
      mentionOnlyIdeas: mentionOnlyIdeas.length,
      dossierRefsWithoutMention: dossierRefsWithoutMention.length,
      multiRefIdeas: multiRefIdeas.length,
    },
    ideasWithoutResearch: sorted(ideasWithoutResearch),
    headingMatchedIdeas: sorted(headingMatchedIdeas),
    mentionOnlyIdeas: sorted(mentionOnlyIdeas),
    dossierRefsWithoutMention: sorted(dossierRefsWithoutMention),
    multiRefIdeas: sorted(multiRefIdeas),
    tagStats: {
      assignments: source.ideas.reduce((total, idea) => total + idea.tags.length, 0),
      unique: tagCounts.size,
      singletons: singletonTags.length,
      doubletons: [...tagCounts.values()].filter((count) => count === 2).length,
    },
    singletonTags,
  };
}

function buildSearchDocuments(source, researchDocuments, sourceHash) {
  const ideaDocuments = source.ideas.map((idea) => ({
    key: `idea:${idea.id}`,
    type: 'idea',
    route: `/ideas/${idea.id}`,
    title: idea.name,
    fields: {
      name: normalizeSearch(idea.name),
      aliases: idea.aliases.map(normalizeSearch),
      tags: idea.tags.map(normalizeSearch),
      oneLiner: normalizeSearch(idea.one_liner),
      decisionReason: normalizeSearch(idea.decision_reason),
      resurrectionTrigger: normalizeSearch(idea.resurrection_trigger),
    },
  }));
  const dossierDocuments = researchDocuments.map((document) => ({
    key: `research:${document.slug}`,
    type: 'research',
    route: document.route,
    title: document.title,
    fields: {
      title: normalizeSearch(document.title),
      headings: document.headings.map((heading) => normalizeSearch(heading.text)),
      body: normalizeSearch(document.plainText),
    },
  }));

  return {
    sourceHash,
    normalizationVersion: 1,
    documents: [...ideaDocuments, ...dossierDocuments].sort((a, b) =>
      a.key < b.key ? -1 : a.key > b.key ? 1 : 0
    ),
  };
}

function buildRoutes(source, researchDocuments, sourceHash) {
  const ideaIds = sorted(source.ideas.map((idea) => idea.id));
  const researchSlugs = sorted(researchDocuments.map((document) => document.slug));
  return {
    sourceHash,
    ideaIds,
    researchSlugs,
    ideaRoutes: ideaIds.map((id) => `/ideas/${id}`),
    researchRoutes: researchSlugs.map((slug) => `/research/${slug}`),
  };
}

export async function buildArtifacts(repoRoot) {
  const initialSourceBuffer = await fs.readFile(path.resolve(repoRoot, SOURCE_PATH));
  const initialSource = parseSourceJson(initialSourceBuffer);
  const sourceSchemaErrors = validateSourceSchema(repoRoot, initialSource);
  if (sourceSchemaErrors.length > 0) throw new ValidationError(sourceSchemaErrors);

  const semantic = validateSourceSemantics(repoRoot, initialSource);
  if (semantic.errors.length > 0) throw new ValidationError(semantic.errors, semantic.warnings);

  const sourcePaths = collectSourcePaths(initialSource);
  const snapshot = await readSourceSnapshot(repoRoot, sourcePaths);
  if (!initialSourceBuffer.equals(snapshot.buffers.get(SOURCE_PATH))) {
    throw new ValidationError([`${SOURCE_PATH} changed while the generator was reading inputs`]);
  }
  const source = parseSourceJson(snapshot.buffers.get(SOURCE_PATH));

  const linkedIdeasByPath = new Map();
  for (const idea of source.ideas) {
    for (const relativePath of idea.research) {
      if (!linkedIdeasByPath.has(relativePath)) linkedIdeasByPath.set(relativePath, []);
      linkedIdeasByPath.get(relativePath).push(idea.id);
    }
  }

  const parsedDocuments = [];
  const seenSlugs = new Map();
  for (const relativePath of sourcePaths.filter((candidate) => candidate !== SOURCE_PATH)) {
    const slug = dossierSlug(relativePath);
    if (seenSlugs.has(slug)) {
      throw new ValidationError([
        `Dossier slug collision: ${relativePath} and ${seenSlugs.get(slug)} both become ${slug}`,
      ]);
    }
    seenSlugs.set(slug, relativePath);
    const sourceFile = snapshot.sourceFiles.find((file) => file.path === relativePath);
    parsedDocuments.push(
      parseMarkdownDocument(
        relativePath,
        snapshot.buffers.get(relativePath).toString('utf8'),
        sourceFile.sha256,
        linkedIdeasByPath.get(relativePath) ?? []
      )
    );
  }

  const markdownValidation = validateMarkdownDocuments(repoRoot, parsedDocuments);
  const warnings = [...semantic.warnings, ...markdownValidation.warnings];
  if (markdownValidation.errors.length > 0) {
    throw new ValidationError(markdownValidation.errors, warnings);
  }

  const researchDocuments = parsedDocuments
    .map((parsed) => parsed.document)
    .sort((a, b) => (a.path < b.path ? -1 : a.path > b.path ? 1 : 0));
  const catalog = {
    sourceSchemaVersion: 1,
    sourceHash: snapshot.sourceHash,
    statusDefinitions: source.status_definitions,
    ideas: source.ideas.map((idea) => ({
      ...idea,
      route: `/ideas/${idea.id}`,
      dossierSlugs: idea.research.map(dossierSlug),
    })),
  };
  const searchDocuments = buildSearchDocuments(source, researchDocuments, snapshot.sourceHash);
  const routes = buildRoutes(source, researchDocuments, snapshot.sourceHash);
  const qualityReport = buildQualityReport(source, researchDocuments, snapshot.sourceHash);
  const manifest = {
    generatorVersion: 1,
    sourceSchemaVersion: 1,
    sourceUpdatedAt: source.updated_at,
    sourceHash: snapshot.sourceHash,
    sourceFiles: snapshot.sourceFiles,
    counts: {
      ideas: source.ideas.length,
      dossiers: researchDocuments.length,
      researchEdges: source.ideas.reduce((total, idea) => total + idea.research.length, 0),
      searchDocuments: searchDocuments.documents.length,
    },
  };
  const artifacts = {
    'catalog.json': catalog,
    'manifest.json': manifest,
    'quality-report.json': qualityReport,
    'research-documents.json': { sourceHash: snapshot.sourceHash, documents: researchDocuments },
    'routes.json': routes,
    'search-documents.json': searchDocuments,
  };
  const generatedErrors = validateGeneratedArtifacts(repoRoot, artifacts);
  if (generatedErrors.length > 0) throw new ValidationError(generatedErrors, warnings);

  return {
    source,
    snapshot,
    warnings,
    artifacts,
    outputBytes: Object.fromEntries(
      Object.entries(artifacts).map(([filename, value]) => [filename, Buffer.from(stableJson(value))])
    ),
  };
}

export async function verifySnapshotUnchanged(repoRoot, snapshot) {
  const current = await readSourceSnapshot(
    repoRoot,
    snapshot.sourceFiles.map((file) => file.path)
  );
  if (current.sourceHash !== snapshot.sourceHash) {
    throw new ValidationError([
      `Canonical inputs changed during generation: expected ${snapshot.sourceHash}, found ${current.sourceHash}`,
    ]);
  }
}
