import fs from 'node:fs';
import path from 'node:path';

import { normalizeSearch, toPosixPath } from './normalize.mjs';

export const SOURCE_PATH = 'docs/idea-database.json';
export const FOCUS_GROUPS_PATH = 'docs/focus-groups.json';

function parseJson(buffer, relativePath) {
  try {
    return JSON.parse(buffer.toString('utf8'));
  } catch (error) {
    throw new Error(`Cannot parse ${relativePath}: ${error.message}`);
  }
}

export function parseSourceJson(buffer) {
  return parseJson(buffer, SOURCE_PATH);
}

export function parseFocusGroupsJson(buffer) {
  return parseJson(buffer, FOCUS_GROUPS_PATH);
}

export function collectSourcePaths(source, focusGroups) {
  return [
    SOURCE_PATH,
    FOCUS_GROUPS_PATH,
    ...new Set([
      ...source.ideas.flatMap((idea) => idea.research),
      ...focusGroups.studies.map((study) => study.dossier),
    ]),
  ].sort();
}

function isWithin(parent, child) {
  const relative = path.relative(parent, child);
  return relative === '' || (!relative.startsWith('..') && !path.isAbsolute(relative));
}

function classifyPathCase(repoRoot, relativePath) {
  let current = repoRoot;
  for (const segment of toPosixPath(relativePath).split('/')) {
    let entries;
    try {
      entries = fs.readdirSync(current);
    } catch {
      return 'missing';
    }
    if (!entries.includes(segment)) {
      const foldedSegment = segment.toLowerCase();
      if (entries.some((entry) => entry.toLowerCase() === foldedSegment)) return 'mismatch';
      return 'missing';
    }
    current = path.join(current, segment);
  }
  return 'exact';
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
      const pathCase = classifyPathCase(repoRoot, posixPath);
      if (pathCase === 'mismatch') {
        errors.push(`${label}.research: path case does not match disk: ${relativePath}`);
        continue;
      }
      if (pathCase === 'missing' || !fs.existsSync(resolved)) {
        errors.push(`${label}.research: missing file: ${relativePath}`);
        continue;
      }
      const realPath = fs.realpathSync.native(resolved);
      if (!isWithin(realDocsRoot, realPath)) {
        errors.push(`${label}.research: symlink target escapes docs/: ${relativePath}`);
      }
    }
  }

  return { errors, warnings };
}

export function validateFocusGroupSemantics(repoRoot, focusGroups, source) {
  const errors = [];
  const warnings = [];
  const ideaIds = new Set(source.ideas.map((idea) => idea.id));
  const studyIds = new Set();
  const docsRoot = path.resolve(repoRoot, 'docs');
  const realDocsRoot = fs.realpathSync.native(docsRoot);

  for (const [studyIndex, study] of focusGroups.studies.entries()) {
    const label = `focusGroups.studies[${studyIndex}] (${study.id})`;
    if (studyIds.has(study.id)) errors.push(`${label}: duplicate id`);
    studyIds.add(study.id);

    const segmentIds = new Set();
    for (const segment of study.segments) {
      if (segmentIds.has(segment.id)) errors.push(`${label}.segments: duplicate id ${segment.id}`);
      segmentIds.add(segment.id);
    }

    for (const outcome of study.outcomes) {
      for (const ideaId of outcome.idea_ids) {
        if (!ideaIds.has(ideaId)) {
          errors.push(`${label}.outcomes: unknown idea id ${ideaId}`);
        }
      }
    }

    const resolved = path.resolve(repoRoot, toPosixPath(study.dossier));
    if (!isWithin(docsRoot, resolved)) {
      errors.push(`${label}.dossier: path escapes docs/: ${study.dossier}`);
      continue;
    }
    const pathCase = classifyPathCase(repoRoot, study.dossier);
    if (pathCase === 'mismatch') {
      errors.push(`${label}.dossier: path case does not match disk: ${study.dossier}`);
      continue;
    }
    if (pathCase === 'missing' || !fs.existsSync(resolved)) {
      errors.push(`${label}.dossier: missing file: ${study.dossier}`);
      continue;
    }
    const realPath = fs.realpathSync.native(resolved);
    if (!isWithin(realDocsRoot, realPath)) {
      errors.push(`${label}.dossier: symlink target escapes docs/: ${study.dossier}`);
    }

    if (study.method === 'simulated_persona' && !/simulat|synthetic|hypoth/i.test(study.limitation)) {
      warnings.push(`${label}: simulated study limitation should explicitly describe its hypothetical status`);
    }
  }

  return { errors, warnings };
}
