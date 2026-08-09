import fs from 'node:fs';
import path from 'node:path';

import { normalizeSearch, toPosixPath } from './normalize.mjs';

export const SOURCE_PATH = 'docs/idea-database.json';

export function parseSourceJson(buffer) {
  try {
    return JSON.parse(buffer.toString('utf8'));
  } catch (error) {
    throw new Error(`Cannot parse ${SOURCE_PATH}: ${error.message}`);
  }
}

export function collectSourcePaths(source) {
  return [SOURCE_PATH, ...new Set(source.ideas.flatMap((idea) => idea.research))].sort();
}

function isWithin(parent, child) {
  const relative = path.relative(parent, child);
  return relative === '' || (!relative.startsWith('..') && !path.isAbsolute(relative));
}

function hasExactCase(repoRoot, relativePath) {
  let current = repoRoot;
  for (const segment of toPosixPath(relativePath).split('/')) {
    const entries = fs.readdirSync(current);
    if (!entries.includes(segment)) return false;
    current = path.join(current, segment);
  }
  return true;
}

export function validateSourceSemantics(repoRoot, source) {
  const errors = [];
  const warnings = [];
  const seenIds = new Set();
  const docsRoot = path.resolve(repoRoot, 'docs');
  const realDocsRoot = fs.realpathSync.native(docsRoot);

  for (const [index, idea] of source.ideas.entries()) {
    const label = `ideas[${index}] (${idea.id})`;
    if (seenIds.has(idea.id)) errors.push(`${label}: duplicate id`);
    seenIds.add(idea.id);

    for (const [field, values] of [
      ['aliases', idea.aliases],
      ['tags', idea.tags],
      ['research', idea.research],
    ]) {
      const seen = new Set();
      for (const value of values) {
        if (value !== value.trim()) errors.push(`${label}.${field}: value has surrounding whitespace: ${value}`);
        const normalized = field === 'research' ? value : normalizeSearch(value);
        if (seen.has(normalized)) errors.push(`${label}.${field}: duplicate normalized value: ${value}`);
        seen.add(normalized);
      }
    }

    const normalizedName = normalizeSearch(idea.name);
    for (const alias of idea.aliases) {
      if (normalizeSearch(alias) === normalizedName) {
        errors.push(`${label}.aliases: alias duplicates the name: ${alias}`);
      }
    }

    if (idea.research.length === 0) warnings.push(`${label}: no linked research`);
    for (const relativePath of idea.research) {
      const posixPath = toPosixPath(relativePath);
      const resolved = path.resolve(repoRoot, posixPath);
      if (!isWithin(docsRoot, resolved)) {
        errors.push(`${label}.research: path escapes docs/: ${relativePath}`);
        continue;
      }
      if (!fs.existsSync(resolved)) {
        errors.push(`${label}.research: missing file: ${relativePath}`);
        continue;
      }
      if (!hasExactCase(repoRoot, posixPath)) {
        errors.push(`${label}.research: path case does not match disk: ${relativePath}`);
      }
      const realPath = fs.realpathSync.native(resolved);
      if (!isWithin(realDocsRoot, realPath)) {
        errors.push(`${label}.research: symlink target escapes docs/: ${relativePath}`);
      }
    }
  }

  return { errors, warnings };
}
