import {
  getFacetCounts,
  getIdeaById,
  getResearchMetadataBySlug,
  getResearchProvenance,
  hackathonFitOptions,
  focusGroupCounts,
  focusGroupStudies,
  focusGroupsUpdatedAt,
  ideas,
  ledgerManifest,
  loadResearchRepository,
  normalizeSearch,
  researchMetadata,
  researchMappingOptions,
  searchIdeas,
  searchResearch,
  statusOptions,
  tagOptions,
} from '../ledger';
import type {
  FacetCounts,
  HackathonFit,
  Idea,
  IdeaStatus,
  LedgerUrlState,
  ResearchDocument,
  ResearchDocumentMetadata,
  ResearchHeading,
  ResearchMapping,
  ResearchRepository,
} from '../ledger';

import type { ResearchReference } from './types';

export {
  focusGroupCounts,
  focusGroupStudies,
  focusGroupsUpdatedAt,
  ideas,
  loadResearchRepository,
  normalizeSearch,
  researchMetadata,
  searchIdeas,
  searchResearch,
};

export const sourceMeta = {
  hash: ledgerManifest.sourceHash,
  schemaVersion: ledgerManifest.sourceSchemaVersion,
  updatedAt: ledgerManifest.sourceUpdatedAt,
};

export const statusOrder: IdeaStatus[] = [
  'validating',
  'raw',
  'needs_reconstruction',
  'parked',
  'passed_scope',
  'passed_market',
];

export const fitOrder: HackathonFit[] = ['high', 'medium', 'low', 'unknown'];
export const mappingOrder: ResearchMapping[] = ['heading', 'mention', 'unmapped', 'none'];

export const statusLabels = Object.fromEntries(
  statusOptions.map(({ label, value }) => [value, label]),
) as Record<IdeaStatus, string>;

export const fitLabels = Object.fromEntries(
  hackathonFitOptions.map(({ label, value }) => [value, label]),
) as Record<HackathonFit, string>;

export const mappingLabels: Record<ResearchMapping, string> = {
  heading: 'Exact section match',
  mention: 'Mention found',
  unmapped: 'Reference not safely mapped',
  none: 'No linked research',
};

export const allTags = tagOptions.map(({ value }) => value);
export const mappingOptions = researchMappingOptions;

export function getIdea(id: string | undefined): Idea | undefined {
  return getIdeaById(id);
}

export function getResearchMetadata(
  slug: string | undefined,
): ResearchDocumentMetadata | undefined {
  return getResearchMetadataBySlug(slug);
}

export function getStatusCounts(): Record<IdeaStatus, number> {
  return Object.fromEntries(
    statusOptions.map(({ count, value }) => [value, count]),
  ) as Record<IdeaStatus, number>;
}

export function getContextualFacets(state: LedgerUrlState): FacetCounts {
  function ideasWithout<K extends 'hackathonFits' | 'researchMappings' | 'statuses' | 'tags'>(
    key: K,
  ): Idea[] {
    const results = searchIdeas({ ...state, [key]: [] });
    return results.map(({ idea }) => idea);
  }

  const statusFacets = getFacetCounts(ideasWithout('statuses')).statuses;
  const fitFacets = getFacetCounts(ideasWithout('hackathonFits')).hackathonFits;
  const mappingFacets = getFacetCounts(ideasWithout('researchMappings')).researchMappings;
  const tagFacets = getFacetCounts(ideasWithout('tags')).tags;
  return {
    statuses: statusFacets,
    hackathonFits: fitFacets,
    researchMappings: mappingFacets,
    tags: tagFacets,
  };
}

function extractHeadingSection(
  document: ResearchDocument,
  heading: ResearchHeading,
): string | undefined {
  const lines = document.markdown.split(/\r?\n/);
  const headingIndex = lines.findIndex((line) => {
    const match = /^(#{1,6})\s+(.+)$/.exec(line.trim());
    return match &&
      Number(match[1].length) === heading.depth &&
      normalizeSearch(match[2]) === normalizeSearch(heading.text);
  });
  if (headingIndex < 0) return undefined;
  let end = lines.length;
  for (let index = headingIndex + 1; index < lines.length; index += 1) {
    const match = /^(#{1,6})\s+/.exec(lines[index].trim());
    if (match && match[1].length <= heading.depth) {
      end = index;
      break;
    }
  }
  return lines.slice(headingIndex, end).join('\n').trim();
}

// Map authoritative per-reference provenance into the excerpt presentation model.
// Heading sections are extracted only after the domain supplies the exact trusted heading.
export function getResearchReferences(
  idea: Idea,
  repository?: ResearchRepository,
): ResearchReference[] {
  const provenance = getResearchProvenance(idea.id);
  if (!provenance || provenance.quality === 'none' || !provenance.references.length) {
    return [{ quality: 'none' }];
  }
  return provenance.references.map((reference) => {
    const document = repository?.getBySlug(reference.dossierSlug) ??
      getResearchMetadataBySlug(reference.dossierSlug);
    const base: ResearchReference = {
      anchor: reference.heading?.anchor,
      document,
      quality: reference.quality,
      slug: reference.dossierSlug,
      sourcePath: reference.path,
    };
    return reference.quality === 'heading' && repository
      ? withTrustedHeadingExcerpt(base, reference.heading)
      : base;
  });
}

export function withTrustedHeadingExcerpt(
  reference: ResearchReference,
  heading: ResearchHeading | null | undefined,
): ResearchReference {
  if (!reference.document || !heading || !('markdown' in reference.document)) return reference;
  return {
    ...reference,
    anchor: heading.anchor,
    excerpt: extractHeadingSection(reference.document as ResearchDocument, heading),
  };
}

export function resolveResearchHref(href: string): string {
  if (/^https?:\/\//i.test(href) || href.startsWith('#')) return href;
  if (/^[a-z][a-z0-9+.-]*:/i.test(href)) return '#';
  const [pathPart, hashPart] = href.split('#', 2);
  const normalizedPath = pathPart
    .replace(/^\.\//, '')
    .replace(/^docs\//, '')
    .replace(/\.md$/i, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  const document = researchMetadata.find(
    ({ path, slug }) =>
      slug === normalizedPath ||
      path.toLowerCase().replace(/^docs\//, '').replace(/\.md$/i, '') === pathPart.toLowerCase().replace(/^docs\//, '').replace(/\.md$/i, ''),
  );
  return document ? `${document.route}${hashPart ? `#${hashPart}` : ''}` : href;
}

export function canonicalIdeaIds(values: readonly unknown[]): {
  ideas: Idea[];
  invalid: string[];
} {
  const seen = new Set<string>();
  const invalid: string[] = [];
  const valid: Idea[] = [];
  for (const value of values) {
    if (typeof value !== 'string') continue;
    const id = value.trim();
    if (!id || seen.has(id)) continue;
    seen.add(id);
    const idea = getIdeaById(id);
    if (idea) valid.push(idea);
    else invalid.push(id);
  }
  return { ideas: valid, invalid };
}
