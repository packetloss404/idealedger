import type {
  HackathonFit,
  Idea,
  IdeaSearchResult,
  IdeaStatus,
  LedgerUrlState,
  ResearchDocument,
  ResearchDocumentMetadata,
  ResearchHeading,
  ResearchMapping,
  ResearchRepository,
  ResearchSearchResult,
  SearchMatchField,
} from '../ledger';

export type {
  HackathonFit,
  IdeaSearchResult,
  IdeaStatus,
  LedgerUrlState,
  ResearchDocument,
  ResearchDocumentMetadata,
  ResearchHeading,
  ResearchRepository,
  ResearchSearchResult,
  SearchMatchField,
};

export type IdeaRecord = Idea;
export type MappingQuality = ResearchMapping;

export interface ResearchReference {
  anchor?: string;
  document?: ResearchDocumentMetadata;
  excerpt?: string;
  quality: MappingQuality;
  slug?: string;
  sourcePath?: string;
}
