#!/usr/bin/env node

import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const MAX_SCANNABLE_TEXT_BYTES = 15 * 1024 * 1024;
const TEXT_EXTENSIONS = new Set([
  '.cjs',
  '.css',
  '.csv',
  '.htm',
  '.html',
  '.js',
  '.jsx',
  '.json',
  '.map',
  '.md',
  '.mjs',
  '.svg',
  '.ts',
  '.tsx',
  '.txt',
  '.webmanifest',
  '.xml',
  '.yaml',
  '.yml',
]);
const ALLOWLISTED_BINARY_EXTENSIONS = new Set([
  '.avif',
  '.eot',
  '.gif',
  '.ico',
  '.jpeg',
  '.jpg',
  '.mp3',
  '.mp4',
  '.ogg',
  '.otf',
  '.pdf',
  '.png',
  '.ttf',
  '.wasm',
  '.wav',
  '.webm',
  '.webp',
  '.woff',
  '.woff2',
]);
const FORBIDDEN_ROOT_ROUTES = ['handoff', 'join', 'new', 'pro'];
const FORBIDDEN_FILE_NAMES = new Set([
  '.env',
  '.env.local',
  '.env.production',
  '.npmrc',
  'id_rsa',
  'id_ed25519',
]);
const SECRET_PATTERNS = [
  { label: 'private key', pattern: /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/u },
  { label: 'GitHub token', pattern: /\bgh[opusr]_[A-Za-z0-9]{20,}\b/u },
  { label: 'OpenAI-style secret key', pattern: /\bsk-(?:proj-)?[A-Za-z0-9_-]{20,}\b/u },
  { label: 'AWS access key', pattern: /\bAKIA[0-9A-Z]{16}\b/u },
  { label: 'Google API key', pattern: /\bAIza[0-9A-Za-z_-]{35}\b/u },
  { label: 'npm access token', pattern: /\bnpm_[A-Za-z0-9]{30,}\b/u },
  { label: 'Slack token', pattern: /\bxox[baprs]-[A-Za-z0-9-]{20,}\b/u },
  { label: 'Stripe live secret', pattern: /\b(?:sk|rk)_live_[A-Za-z0-9]{16,}\b/u },
  {
    label: 'deployment token assignment',
    pattern:
      /\b(?:EXPO_TOKEN|GITHUB_TOKEN|CLOUDFLARE_API_TOKEN|NETLIFY_AUTH_TOKEN|VERCEL_TOKEN)\s*[:=]\s*["']?[A-Za-z0-9._-]{20,}/iu,
  },
];

function parseArguments(argv) {
  const options = {
    exportDirectory: 'dist',
    base: process.env.PUBLIC_BASE_PATH ?? '/',
    routesFile: 'src/generated/idea-ledger/routes.json',
  };
  const positional = [];

  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];
    if (argument === '--base') options.base = argv[++index];
    else if (argument.startsWith('--base=')) options.base = argument.slice('--base='.length);
    else if (argument === '--routes') options.routesFile = argv[++index];
    else if (argument.startsWith('--routes=')) options.routesFile = argument.slice('--routes='.length);
    else if (argument === '--help' || argument === '-h') options.help = true;
    else if (argument.startsWith('-')) throw new Error(`Unknown option: ${argument}`);
    else positional.push(argument);
  }

  if (positional.length > 1) throw new Error('Only one export directory may be supplied');
  if (positional[0]) options.exportDirectory = positional[0];
  return options;
}

function normalizeBase(value) {
  if (!value || value === '/') return '/';
  const withLeadingSlash = value.startsWith('/') ? value : `/${value}`;
  return `${withLeadingSlash.replace(/\/+$/u, '')}/`;
}

function toPosix(value) {
  return value.split(path.sep).join('/');
}

async function walkFiles(directory) {
  const files = [];
  async function visit(currentDirectory) {
    const entries = await fs.readdir(currentDirectory, { withFileTypes: true });
    entries.sort((left, right) => left.name.localeCompare(right.name, 'en'));
    for (const entry of entries) {
      const absolutePath = path.join(currentDirectory, entry.name);
      if (entry.isDirectory()) await visit(absolutePath);
      else if (entry.isFile()) files.push(absolutePath);
    }
  }
  await visit(directory);
  return files;
}

function stripUrlSuffix(value) {
  return value.split('#', 1)[0].split('?', 1)[0];
}

function isExternalUrl(value) {
  return /^(?:[a-z][a-z0-9+.-]*:|\/\/)/iu.test(value);
}

function resolveExportReference(reference, htmlRelativePath, base) {
  const cleanReference = stripUrlSuffix(reference.trim());
  if (!cleanReference || cleanReference.startsWith('#') || isExternalUrl(cleanReference)) return null;

  let relativeReference;
  if (cleanReference.startsWith('/')) {
    if (base !== '/' && !cleanReference.startsWith(base)) {
      return { error: `root-relative URL escapes configured base ${base}: ${cleanReference}` };
    }
    relativeReference = base === '/' ? cleanReference.slice(1) : cleanReference.slice(base.length);
  } else {
    relativeReference = path.posix.join(path.posix.dirname(htmlRelativePath), cleanReference);
  }

  const normalized = path.posix.normalize(relativeReference).replace(/^\.\//u, '');
  if (normalized === '..' || normalized.startsWith('../')) {
    return { error: `URL escapes export directory: ${reference}` };
  }
  return { relativePath: normalized };
}

function extractHtmlReferences(html) {
  const references = [];
  const attributePattern = /\b(?:href|src)\s*=\s*["']([^"']+)["']/giu;
  for (const match of html.matchAll(attributePattern)) references.push(match[1]);
  return references;
}

function extractCssReferences(css) {
  const references = [];
  const urlPattern = /url\(\s*["']?([^"')]+)["']?\s*\)/giu;
  for (const match of css.matchAll(urlPattern)) references.push(match[1]);
  return references;
}

function routeCandidates(route) {
  const relativeRoute = route.replace(/^\/+|\/+$/gu, '');
  if (!relativeRoute) return ['index.html'];
  return [`${relativeRoute}.html`, `${relativeRoute}/index.html`];
}

function scriptReferences(html, htmlRelativePath, base) {
  return extractHtmlReferences(html)
    .filter((reference) => /\.m?js(?:[?#]|$)/iu.test(reference))
    .map((reference) => resolveExportReference(reference, htmlRelativePath, base))
    .filter((result) => result?.relativePath)
    .map((result) => result.relativePath)
    .sort();
}

async function readJson(filePath) {
  return JSON.parse(await fs.readFile(filePath, 'utf8'));
}

async function main() {
  const options = parseArguments(process.argv.slice(2));
  if (options.help) {
    console.log(
      'Usage: node scripts/idea-ledger/check-export.mjs [dist] [--base=/repo/] ' +
        '[--routes=src/generated/idea-ledger/routes.json]'
    );
    return;
  }

  const repoRoot = process.cwd();
  const exportRoot = path.resolve(repoRoot, options.exportDirectory);
  const base = normalizeBase(options.base);
  const routesPath = path.resolve(repoRoot, options.routesFile);
  const errors = [];
  const warnings = [];

  let files;
  try {
    files = await walkFiles(exportRoot);
  } catch (error) {
    if (error.code === 'ENOENT') throw new Error(`Export directory does not exist: ${exportRoot}`);
    throw error;
  }

  const relativeFiles = files.map((file) => toPosix(path.relative(exportRoot, file)));
  const fileSet = new Set(relativeFiles);
  if (!fileSet.has('index.html')) errors.push('index.html is missing');

  for (const rootRoute of FORBIDDEN_ROOT_ROUTES) {
    for (const candidate of [`${rootRoute}.html`, `${rootRoute}/index.html`]) {
      if (fileSet.has(candidate)) errors.push(`stale root route is present: /${candidate}`);
    }
  }

  for (const relativePath of relativeFiles) {
    const basename = path.posix.basename(relativePath).toLowerCase();
    if (FORBIDDEN_FILE_NAMES.has(basename)) errors.push(`forbidden public file: ${relativePath}`);
    if (relativePath.endsWith('.map')) errors.push(`source map must not be public: ${relativePath}`);
    if (/\.(?:pem|p8|p12|key|mobileprovision)$/iu.test(relativePath)) {
      errors.push(`credential-like file must not be public: ${relativePath}`);
    }
  }

  const textByPath = new Map();
  for (let index = 0; index < files.length; index += 1) {
    const absolutePath = files[index];
    const relativePath = relativeFiles[index];
    const extension = path.extname(relativePath).toLowerCase();
    if (ALLOWLISTED_BINARY_EXTENSIONS.has(extension)) continue;
    const stat = await fs.stat(absolutePath);
    if (stat.size > MAX_SCANNABLE_TEXT_BYTES) {
      errors.push(`unscanned public file exceeds 15 MiB text limit: ${relativePath}`);
      continue;
    }
    const buffer = await fs.readFile(absolutePath);
    if (!TEXT_EXTENSIONS.has(extension)) {
      if (buffer.includes(0) || buffer.toString('utf8').includes('\uFFFD')) {
        errors.push(`unallowlisted binary public file type: ${relativePath || '(unknown)'}`);
        continue;
      }
    }
    const text = buffer.toString('utf8');
    textByPath.set(relativePath, text);
    if (/(?:[A-Za-z]:\\(?:Users|projects)\\|file:\/\/\/(?:[A-Za-z]:\/|Users\/|home\/))/u.test(text)) {
      errors.push(`local filesystem path leaked in ${relativePath}`);
    }
    for (const { label, pattern } of SECRET_PATTERNS) {
      if (pattern.test(text)) errors.push(`${label} pattern found in ${relativePath}`);
    }
  }

  const indexHtml = textByPath.get('index.html') ?? '';
  if (indexHtml && !/Idea Ledger/iu.test(indexHtml)) {
    errors.push('index.html does not identify the product as Idea Ledger');
  }
  if (/Welcome to Expo|Expo Starter/iu.test(indexHtml)) {
    errors.push('index.html still contains Expo starter content');
  }

  for (const [relativePath, text] of textByPath) {
    const extension = path.extname(relativePath).toLowerCase();
    const references = extension === '.html' ? extractHtmlReferences(text) : extension === '.css' ? extractCssReferences(text) : [];
    for (const reference of references) {
      const resolved = resolveExportReference(reference, relativePath, base);
      if (!resolved) continue;
      if (resolved.error) {
        errors.push(`${relativePath}: ${resolved.error}`);
        continue;
      }
      const target = resolved.relativePath;
      if (!target || target.endsWith('/')) continue;
      const hasFile = fileSet.has(target);
      const looksLikeAsset = /\.[A-Za-z0-9]{1,8}$/u.test(path.posix.basename(target));
      if (looksLikeAsset && !hasFile) errors.push(`${relativePath}: missing local asset ${reference}`);
    }
  }

  const routes = await readJson(routesPath);
  const expectedRoutes = [
    ...(routes.ideaRoutes ?? []),
    ...(routes.researchRoutes ?? []),
    ...(routes.focusGroupRoutes ?? []),
  ];
  const missingStaticRoutes = expectedRoutes.filter(
    (route) => !routeCandidates(route).some((candidate) => fileSet.has(candidate))
  );
  if (missingStaticRoutes.length > 0) {
    if (!fileSet.has('404.html')) {
      errors.push(
        `${missingStaticRoutes.length} generated routes have no static file and 404.html SPA fallback is missing`
      );
    } else {
      const fallbackHtml = textByPath.get('404.html') ?? '';
      const indexScripts = scriptReferences(indexHtml, 'index.html', base);
      const fallbackScripts = scriptReferences(fallbackHtml, '404.html', base);
      if (JSON.stringify(indexScripts) !== JSON.stringify(fallbackScripts)) {
        errors.push('404.html does not load the same application scripts as index.html');
      } else {
        warnings.push(
          `${missingStaticRoutes.length} generated routes rely on the GitHub Pages 404 SPA fallback`
        );
      }
    }
  }

  const sourceHash = routes.sourceHash;
  if (sourceHash) {
    const exportContainsSourceHash = [...textByPath.values()].some((text) => text.includes(sourceHash));
    if (!exportContainsSourceHash) {
      errors.push(`export does not contain the generated corpus source hash ${sourceHash}`);
    }
  } else {
    errors.push('generated route manifest has no sourceHash');
  }

  const totalBytes = (
    await Promise.all(files.map(async (file) => (await fs.stat(file)).size))
  ).reduce((total, bytes) => total + bytes, 0);

  if (warnings.length > 0) {
    console.warn('Export warnings:');
    for (const warning of warnings) console.warn(`- ${warning}`);
  }
  if (errors.length > 0) {
    console.error('Export check failed:');
    for (const error of errors) console.error(`- ${error}`);
    process.exitCode = 1;
    return;
  }

  console.log(
    `Export checked: ${relativeFiles.length} files, ${expectedRoutes.length} generated routes, ` +
      `${totalBytes} bytes, base ${base}`
  );
}

try {
  await main();
} catch (error) {
  console.error(error.stack ?? error.message);
  process.exitCode = 2;
}
