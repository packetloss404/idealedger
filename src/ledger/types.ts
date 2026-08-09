export const IDEA_STATUSES = [
  'raw',
  'validating',
  'parked',
  'passed_scope',
  'passed_market',
  'needs_reconstruction',
] as const;

export const HACKATHON_FITS = ['high', 'medium', 'low', 'unknown'] as const;
export const RESEARCH_MAPPINGS = ['heading', 'mention', 'unmapped', 'none'] as const;
export const LEDGER_SORTS = ['relevance', 'name', 'status', 'fit'] as const;

export type IdeaStatus = (typeof IDEA_STATUSES)[number];
export type HackathonFit = (typeof HACKATHON_FITS)[number];
export type ResearchMapping = (typeof RESEARCH_MAPPINGS)[number];
export type LedgerSort = (typeof LEDGER_SORTS)[number];

export interface Idea {
  aliases: string[];
  decision_reason: string;
  dossierSlugs: string[];
  hackathon_fit: HackathonFit;
  id: string;
  name: string;
  one_liner: string;
  research: string[];
  resurrection_trigger: string;
  route: string;
  status: IdeaStatus;
  tags: string[];
}

export interface ResearchHeading {
  anchor: string;
  depth: number;
  text: string;
}

export interface ResearchLink {
  kind: 'external' | 'local';
  occurrences: number;
  text: string;
  url: string;
}

export interface ResearchDocumentMetadata {
  headings: ResearchHeading[];
  linkedIdeaIds: string[];
  path: string;
  route: string;
  sha256: string;
  slug: string;
  title: string;
}

export interface ResearchDocument extends ResearchDocumentMetadata {
  links: ResearchLink[];
  markdown: string;
  plainText: string;
}

export interface ResearchReferenceProvenance {
  dossierSlug: string;
  heading: ResearchHeading | null;
  path: string;
  quality: Exclude<ResearchMapping, 'none'>;
}

export interface IdeaResearchProvenance {
  ideaId: string;
  quality: ResearchMapping;
  references: ResearchReferenceProvenance[];
}

export interface LedgerManifest {
  counts: {
    dossiers: number;
    ideas: number;
    researchEdges: number;
    searchDocuments: number;
  };
  generatorVersion: number;
  sourceHash: string;
  sourceSchemaVersion: number;
  sourceUpdatedAt: string;
}

export interface QualityReport {
  counts: Record<string, number>;
  researchProvenance: IdeaResearchProvenance[];
  sourceHash: string;
  singletonTags: string[];
  tagStats: {
    assignments: number;
    doubletons: number;
    singletons: number;
    unique: number;
  };
}

export interface FacetOption<T extends string = string> {
  count: number;
  label: string;
  value: T;
}

export interface LedgerFilters {
  hackathonFits?: readonly HackathonFit[];
  researchMappings?: readonly ResearchMapping[];
  statuses?: readonly IdeaStatus[];
  tags?: readonly string[];
}

export type SearchMatchField =
  | 'name'
  | 'alias'
  | 'tag'
  | 'thesis'
  | 'decision'
  | 'resurrection'
  | 'researchTitle'
  | 'researchHeading'
  | 'researchBody';

export interface IdeaSearchResult {
  idea: Idea;
  matchedFields: SearchMatchField[];
  score: number;
  snippet?: {
    field: SearchMatchField;
    matchedText: string;
    text: string;
  };
}

export interface ResearchSearchResult {
  document: ResearchDocument;
  matchedFields: ('title' | 'heading' | 'body')[];
  matchedText: string;
  score: number;
  snippet: string;
}

export interface ResearchRepository {
  documents: readonly ResearchDocument[];
  getBySlug(slug: string | undefined): ResearchDocument | undefined;
  getForIdea(id: string): ResearchDocument[];
  search(query: string, limit?: number): ResearchSearchResult[];
}

export interface LedgerSearchOptions extends LedgerFilters {
  limit?: number;
  query?: string;
  sort?: LedgerSort;
}

export interface LedgerUrlState extends LedgerFilters {
  query: string;
  sort: LedgerSort;
}

export interface FacetCounts {
  hackathonFits: FacetOption<HackathonFit>[];
  researchMappings: FacetOption<ResearchMapping>[];
  statuses: FacetOption<IdeaStatus>[];
  tags: FacetOption[];
}
