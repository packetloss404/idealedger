import fs from 'node:fs/promises';
import path from 'node:path';

import { readSourceSnapshot } from './hash.mjs';
import { parseMarkdownDocument, validateMarkdownDocuments } from './markdown.mjs';
import { dossierSlug, normalizeSearch } from './normalize.mjs';
import {
  collectSourcePaths,
  FOCUS_GROUPS_PATH,
  parseFocusGroupsJson,
  parseSourceJson,
  SOURCE_PATH,
  validateFocusGroupSemantics,
  validateSourceSemantics,
} from './source.mjs';
import { stableJson } from './stable-json.mjs';
import {
  ValidationError,
  validateFocusGroupsSchema,
  validateGeneratedArtifacts,
  validateSourceSchema,
} from './validate.mjs';

export const OUTPUT_DIRECTORY = 'src/generated/idea-ledger';
export const OUTPUT_FILES = [
  'catalog.json',
  'focus-groups.json',
  'manifest.json',
  'quality-report.json',
  'research-documents.json',
  'research-metadata.json',
  'routes.json',
  'search-documents.json',
];

function sorted(values) {
  return [...values].sort();
}

const RESEARCH_QUALITY_ORDER = new Map([
  ['none', 0],
  ['unmapped', 1],
  ['mention', 2],
  ['heading', 3],
]);

function matchesReviewedHeadingRule(normalizedHeading, candidate) {
  return normalizedHeading.includes(candidate) || candidate.includes(normalizedHeading);
}

function buildResearchReferenceProvenance(idea, document) {
  const candidates = [idea.name, ...idea.aliases].map(normalizeSearch).filter(Boolean);
  const heading = document.headings.find((candidateHeading) => {
    const normalizedHeading = normalizeSearch(candidateHeading.text);
    return candidates.some((candidate) => matchesReviewedHeadingRule(normalizedHeading, candidate));
  });

  if (heading) {
    return {
      dossierSlug: document.slug,
      path: document.path,
      quality: 'heading',
      heading: {
        anchor: heading.anchor,
        depth: heading.depth,
        text: heading.text,
      },
    };
  }

  const normalizedMarkdown = normalizeSearch(document.markdown);
  if (candidates.some((candidate) => normalizedMarkdown.includes(candidate))) {
    return {
      dossierSlug: document.slug,
      path: document.path,
      quality: 'mention',
      heading: null,
    };
  }

  return {
    dossierSlug: document.slug,
    path: document.path,
    quality: 'unmapped',
    heading: null,
  };
}

function buildQualityReport(source, researchDocuments, sourceHash) {
  const documentsByPath = new Map(researchDocuments.map((document) => [document.path, document]));
  const researchProvenance = source.ideas
    .map((idea) => {
      const references = idea.research
        .map((relativePath) => buildResearchReferenceProvenance(idea, documentsByPath.get(relativePath)))
        .sort((left, right) => (left.path < right.path ? -1 : left.path > right.path ? 1 : 0));
      const quality = references.reduce(
        (best, reference) =>
          RESEARCH_QUALITY_ORDER.get(reference.quality) > RESEARCH_QUALITY_ORDER.get(best)
            ? reference.quality
            : best,
        'none'
      );
      return { ideaId: idea.id, quality, references };
    })
    .sort((left, right) => (left.ideaId < right.ideaId ? -1 : left.ideaId > right.ideaId ? 1 : 0));

  const ideaQualityCounts = new Map();
  const referenceQualityCounts = new Map();
  for (const provenance of researchProvenance) {
    ideaQualityCounts.set(provenance.quality, (ideaQualityCounts.get(provenance.quality) ?? 0) + 1);
    for (const reference of provenance.references) {
      referenceQualityCounts.set(
        reference.quality,
        (referenceQualityCounts.get(reference.quality) ?? 0) + 1
      );
    }
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
      ideasWithoutResearch: ideaQualityCounts.get('none') ?? 0,
      headingMatchedIdeas: ideaQualityCounts.get('heading') ?? 0,
      mentionOnlyIdeas: ideaQualityCounts.get('mention') ?? 0,
      dossierRefsWithoutMention: referenceQualityCounts.get('unmapped') ?? 0,
      multiRefIdeas: source.ideas.filter((idea) => idea.research.length > 1).length,
      headingReferences: referenceQualityCounts.get('heading') ?? 0,
      mentionReferences: referenceQualityCounts.get('mention') ?? 0,
      unmappedReferences: referenceQualityCounts.get('unmapped') ?? 0,
    },
    researchProvenance,
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

function buildResearchMetadata(researchDocuments, sourceHash) {
  return {
    sourceHash,
    documents: researchDocuments.map(
      ({ headings, linkedIdeaIds, path: documentPath, route, sha256, slug, title }) => ({
        headings,
        linkedIdeaIds,
        path: documentPath,
        route,
        sha256,
        slug,
        title,
      })
    ),
  };
}

function buildFocusGroups(focusGroups, researchDocuments, sourceHash) {
  const documentsByPath = new Map(researchDocuments.map((document) => [document.path, document]));
  const errors = [];
  const studies = focusGroups.studies.map((study) => {
    const document = documentsByPath.get(study.dossier);
    if (!document) {
      errors.push(`Focus-group study ${study.id} has no generated dossier for ${study.dossier}`);
      return null;
    }
    if (study.anchor && !document.headings.some((heading) => heading.anchor === study.anchor)) {
      errors.push(
        `Focus-group study ${study.id} references missing heading #${study.anchor} in ${study.dossier}`
      );
    }
    return {
      ...study,
        route: `/focus-groups/${study.id}`,
      dossierSlug: document.slug,
      dossierRoute: `${document.route}${study.anchor ? `#${study.anchor}` : ''}`,
      linkedIdeaIds: sorted(new Set(study.outcomes.flatMap((outcome) => outcome.idea_ids))),
    };
  });
  if (errors.length > 0) throw new ValidationError(errors);

  const linkedIdeaIds = new Set(studies.flatMap((study) => study.linkedIdeaIds));
  return {
    sourceHash,
    updatedAt: focusGroups.updated_at,
    counts: {
      studies: studies.length,
      segments: studies.reduce((total, study) => total + study.segments.length, 0),
      simulatedStudies: studies.filter((study) => study.method === 'simulated_persona').length,
      recruitedStudies: studies.filter((study) => study.method === 'recruited_participants').length,
      linkedIdeas: linkedIdeaIds.size,
    },
    studies,
  };
}

export async function buildArtifacts(repoRoot) {
  const initialSourceBuffer = await fs.readFile(path.resolve(repoRoot, SOURCE_PATH));
  const initialFocusGroupsBuffer = await fs.readFile(path.resolve(repoRoot, FOCUS_GROUPS_PATH));
  const initialSource = parseSourceJson(initialSourceBuffer);
  const initialFocusGroups = parseFocusGroupsJson(initialFocusGroupsBuffer);
  const sourceSchemaErrors = validateSourceSchema(repoRoot, initialSource);
  const focusGroupSchemaErrors = validateFocusGroupsSchema(repoRoot, initialFocusGroups);
  if (sourceSchemaErrors.length + focusGroupSchemaErrors.length > 0) {
    throw new ValidationError([...sourceSchemaErrors, ...focusGroupSchemaErrors]);
  }

  const semantic = validateSourceSemantics(repoRoot, initialSource);
  const focusGroupSemantic = validateFocusGroupSemantics(repoRoot, initialFocusGroups, initialSource);
  if (semantic.errors.length + focusGroupSemantic.errors.length > 0) {
    throw new ValidationError(
      [...semantic.errors, ...focusGroupSemantic.errors],
      [...semantic.warnings, ...focusGroupSemantic.warnings]
    );
  }

  const sourcePaths = collectSourcePaths(initialSource, initialFocusGroups);
  const snapshot = await readSourceSnapshot(repoRoot, sourcePaths);
  if (!initialSourceBuffer.equals(snapshot.buffers.get(SOURCE_PATH))) {
    throw new ValidationError([`${SOURCE_PATH} changed while the generator was reading inputs`]);
  }
  if (!initialFocusGroupsBuffer.equals(snapshot.buffers.get(FOCUS_GROUPS_PATH))) {
    throw new ValidationError([`${FOCUS_GROUPS_PATH} changed while the generator was reading inputs`]);
  }
  const source = parseSourceJson(snapshot.buffers.get(SOURCE_PATH));
  const focusGroups = parseFocusGroupsJson(snapshot.buffers.get(FOCUS_GROUPS_PATH));

  const linkedIdeasByPath = new Map();
  for (const idea of source.ideas) {
    for (const relativePath of idea.research) {
      if (!linkedIdeasByPath.has(relativePath)) linkedIdeasByPath.set(relativePath, []);
      linkedIdeasByPath.get(relativePath).push(idea.id);
    }
  }

  const parsedDocuments = [];
  const seenSlugs = new Map();
  for (const relativePath of sourcePaths.filter(
    (candidate) => candidate !== SOURCE_PATH && candidate !== FOCUS_GROUPS_PATH
  )) {
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
  const warnings = [
    ...semantic.warnings,
    ...focusGroupSemantic.warnings,
    ...markdownValidation.warnings,
  ];
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
  const researchMetadata = buildResearchMetadata(researchDocuments, snapshot.sourceHash);
  const routes = buildRoutes(source, researchDocuments, snapshot.sourceHash);
  routes.focusGroupRoutes = [
    '/focus-groups',
    ...focusGroups.studies.map((study) => `/focus-groups/${study.id}`),
  ].sort();
  const qualityReport = buildQualityReport(source, researchDocuments, snapshot.sourceHash);
  const focusGroupArtifact = buildFocusGroups(focusGroups, researchDocuments, snapshot.sourceHash);
  const manifest = {
      generatorVersion: 4,
    sourceSchemaVersion: 1,
    sourceUpdatedAt: source.updated_at,
    sourceHash: snapshot.sourceHash,
    sourceFiles: snapshot.sourceFiles,
    counts: {
      ideas: source.ideas.length,
      dossiers: researchDocuments.length,
      researchEdges: source.ideas.reduce((total, idea) => total + idea.research.length, 0),
      searchDocuments: searchDocuments.documents.length,
      focusGroupStudies: focusGroupArtifact.counts.studies,
    },
  };
  const artifacts = {
    'catalog.json': catalog,
    'focus-groups.json': focusGroupArtifact,
    'manifest.json': manifest,
    'quality-report.json': qualityReport,
    'research-documents.json': { sourceHash: snapshot.sourceHash, documents: researchDocuments },
    'research-metadata.json': researchMetadata,
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
