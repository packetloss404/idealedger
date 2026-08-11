import catalogJson from '../generated/idea-ledger/catalog.json';
import focusGroupsJson from '../generated/idea-ledger/focus-groups.json';
import manifestJson from '../generated/idea-ledger/manifest.json';
import qualityJson from '../generated/idea-ledger/quality-report.json';
import researchMetadataJson from '../generated/idea-ledger/research-metadata.json';

import { compareSearchText, humanize } from './normalize';
import type {
  FacetOption,
  FocusGroupCounts,
  FocusGroupStudy,
  HackathonFit,
  Idea,
  IdeaResearchProvenance,
  IdeaStatus,
  LedgerManifest,
  QualityReport,
  ResearchDocumentMetadata,
  ResearchMapping,
  ResearchReferenceProvenance,
} from './types';
import { HACKATHON_FITS, IDEA_STATUSES, RESEARCH_MAPPINGS } from './types';

interface CatalogArtifact {
  ideas: Idea[];
  sourceHash: string;
  sourceSchemaVersion: number;
  statusDefinitions: Record<IdeaStatus, string>;
}

interface ResearchMetadataArtifact {
  documents: ResearchDocumentMetadata[];
  sourceHash: string;
}

interface FocusGroupArtifact {
  counts: FocusGroupCounts;
  sourceHash: string;
  studies: FocusGroupStudy[];
  updatedAt: string;
}

const catalog = catalogJson as unknown as CatalogArtifact;
const metadata = researchMetadataJson as unknown as ResearchMetadataArtifact;
const focusGroups = focusGroupsJson as unknown as FocusGroupArtifact;

export const ledgerManifest = manifestJson as unknown as LedgerManifest;
export const qualityReport = qualityJson as unknown as QualityReport;

const sourceHashes = new Set([
  catalog.sourceHash,
  focusGroups.sourceHash,
  metadata.sourceHash,
  ledgerManifest.sourceHash,
  qualityReport.sourceHash,
]);
if (sourceHashes.size !== 1) {
  throw new Error('Idea Ledger generated artifacts were built from different source snapshots.');
}

export const ideas: readonly Idea[] = catalog.ideas;
export const researchMetadata: readonly ResearchDocumentMetadata[] = metadata.documents;
export const focusGroupStudies: readonly FocusGroupStudy[] = focusGroups.studies;
export const focusGroupCounts: Readonly<FocusGroupCounts> = focusGroups.counts;
export const focusGroupsUpdatedAt = focusGroups.updatedAt;
export const researchProvenance: readonly IdeaResearchProvenance[] =
  qualityReport.researchProvenance;
export const statusDefinitions: Readonly<Record<IdeaStatus, string>> = catalog.statusDefinitions;
export const ledgerCounts = ledgerManifest.counts;

const ideasById = new Map(ideas.map((idea) => [idea.id, idea]));
const focusGroupStudiesById = new Map(focusGroupStudies.map((study) => [study.id, study]));
const researchMetadataBySlug = new Map(
  researchMetadata.map((document) => [document.slug, document]),
);
const provenanceByIdeaId = new Map(researchProvenance.map((entry) => [entry.ideaId, entry]));

export function getIdeaById(id: string | undefined): Idea | undefined {
  return id ? ideasById.get(id) : undefined;
}

export function getFocusGroupStudyById(id: string | undefined): FocusGroupStudy | undefined {
  return id ? focusGroupStudiesById.get(id) : undefined;
}

export function getResearchMetadataBySlug(
  slug: string | undefined,
): ResearchDocumentMetadata | undefined {
  return slug ? researchMetadataBySlug.get(slug) : undefined;
}

export function getResearchMetadataForIdea(id: string): ResearchDocumentMetadata[] {
  const idea = ideasById.get(id);
  if (!idea) return [];
  return idea.dossierSlugs
    .map((slug) => researchMetadataBySlug.get(slug))
    .filter((document): document is ResearchDocumentMetadata => document !== undefined);
}

export function getResearchMapping(id: string): ResearchMapping {
  return provenanceByIdeaId.get(id)?.quality ?? 'none';
}

export function getResearchProvenance(id: string): IdeaResearchProvenance | undefined {
  return provenanceByIdeaId.get(id);
}

export function getResearchReferenceProvenance(
  ideaId: string,
  dossierSlug: string,
): ResearchReferenceProvenance | undefined {
  return provenanceByIdeaId
    .get(ideaId)
    ?.references.find((reference) => reference.dossierSlug === dossierSlug);
}

function countBy<T extends string>(values: readonly T[]): Map<T, number> {
  const counts = new Map<T, number>();
  for (const value of values) counts.set(value, (counts.get(value) ?? 0) + 1);
  return counts;
}

const statusCounts = countBy(ideas.map((idea) => idea.status));
const fitCounts = countBy(ideas.map((idea) => idea.hackathon_fit));
const mappingCounts = countBy(ideas.map((idea) => getResearchMapping(idea.id)));
const tagCounts = countBy(ideas.flatMap((idea) => idea.tags));

export const statusOptions: readonly FacetOption<IdeaStatus>[] = IDEA_STATUSES.map((value) => ({
  count: statusCounts.get(value) ?? 0,
  label: humanize(value),
  value,
}));

export const hackathonFitOptions: readonly FacetOption<HackathonFit>[] = HACKATHON_FITS.map(
  (value) => ({ count: fitCounts.get(value) ?? 0, label: humanize(value), value }),
);

export const researchMappingOptions: readonly FacetOption<ResearchMapping>[] = RESEARCH_MAPPINGS.map(
  (value) => ({ count: mappingCounts.get(value) ?? 0, label: humanize(value), value }),
);

export const tagOptions: readonly FacetOption[] = [...tagCounts]
  .map(([value, count]) => ({ count, label: value, value }))
  .sort((left, right) => right.count - left.count || compareSearchText(left.value, right.value));

export function hasIdea(id: string): boolean {
  return ideasById.has(id);
}
