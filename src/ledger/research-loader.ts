import { getIdeaById, ledgerManifest } from './data';
import { containsToken, createSearchSnippet, relationScore } from './match';
import { compareSearchText, normalizeSearch, queryTokens } from './normalize';
import type {
  ResearchDocument,
  ResearchRepository,
  ResearchSearchResult,
} from './types';

interface ResearchArtifact {
  documents: ResearchDocument[];
  sourceHash: string;
}

interface ResearchFields {
  body: string;
  headings: string[];
  title: string;
}

function scoreResearch(
  document: ResearchDocument,
  fields: ResearchFields,
  query: string,
): ResearchSearchResult | undefined {
  const normalizedQuery = normalizeSearch(query);
  const tokens = queryTokens(normalizedQuery);
  if (!tokens.length) return undefined;
  const { body, headings, title } = fields;
  if (
    !tokens.every((token) =>
      [title, ...headings, body].some((value) => containsToken(value, token)),
    )
  ) {
    return undefined;
  }

  const titleScore = 100 * relationScore(title, normalizedQuery, tokens);
  const headingScore = Math.max(
    0,
    ...headings.map((value) => 40 * relationScore(value, normalizedQuery, tokens)),
  );
  const bodyScore = 2 * relationScore(body, normalizedQuery, tokens);
  const matchedFields: ResearchSearchResult['matchedFields'] = [];
  if (titleScore) matchedFields.push('title');
  if (headingScore) matchedFields.push('heading');
  if (bodyScore) matchedFields.push('body');
  const snippet = createSearchSnippet(document.plainText, normalizedQuery);
  return {
    document,
    matchedFields,
    matchedText: snippet.matchedText,
    score: titleScore + headingScore + bodyScore,
    snippet: snippet.text,
  };
}

function createRepository(artifact: ResearchArtifact): ResearchRepository {
  if (artifact.sourceHash !== ledgerManifest.sourceHash) {
    throw new Error('Idea Ledger research was built from a different source snapshot.');
  }

  const documents: readonly ResearchDocument[] = artifact.documents;
  const bySlug = new Map(documents.map((document) => [document.slug, document]));
  const fieldsBySlug = new Map(
    documents.map((document) => [
      document.slug,
      {
        body: normalizeSearch(document.plainText),
        headings: document.headings.map((heading) => normalizeSearch(heading.text)),
        title: normalizeSearch(document.title),
      },
    ]),
  );

  return {
    documents,
    getBySlug(slug) {
      return slug ? bySlug.get(slug) : undefined;
    },
    getForIdea(id) {
      const idea = getIdeaById(id);
      if (!idea) return [];
      return idea.dossierSlugs
        .map((slug) => bySlug.get(slug))
        .filter((document): document is ResearchDocument => document !== undefined);
    },
    search(query, limit = 8) {
      return documents
        .map((document) => {
          const fields = fieldsBySlug.get(document.slug);
          return fields ? scoreResearch(document, fields, query) : undefined;
        })
        .filter((result): result is ResearchSearchResult => result !== undefined)
        .sort(
          (left, right) =>
            right.score - left.score ||
            compareSearchText(left.document.title, right.document.title),
        )
        .slice(0, Math.max(0, limit));
    },
  };
}

let repositoryPromise: Promise<ResearchRepository> | undefined;

export function loadResearchRepository(): Promise<ResearchRepository> {
  repositoryPromise ??= import('../generated/idea-ledger/research-documents.json').then(
    (module) => createRepository(module.default as unknown as ResearchArtifact),
  );
  return repositoryPromise;
}

export async function getResearchBySlug(
  slug: string | undefined,
): Promise<ResearchDocument | undefined> {
  return (await loadResearchRepository()).getBySlug(slug);
}

export async function getResearchForIdea(id: string): Promise<ResearchDocument[]> {
  return (await loadResearchRepository()).getForIdea(id);
}

export async function searchResearch(
  query: string,
  limit = 8,
): Promise<ResearchSearchResult[]> {
  return (await loadResearchRepository()).search(query, limit);
}
