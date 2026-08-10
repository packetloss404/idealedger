import { ideas } from './data';
import { matchesFilters } from './filters';
import { containsToken, createSearchSnippet, relationScore } from './match';
import { compareSearchText, normalizeSearch, queryTokens } from './normalize';
import type {
  Idea,
  IdeaSearchResult,
  LedgerSearchOptions,
  SearchMatchField,
} from './types';

const STATUS_ORDER = new Map([
  ['validating', 0],
  ['raw', 1],
  ['needs_reconstruction', 2],
  ['parked', 3],
  ['passed_scope', 4],
  ['passed_market', 5],
]);
const FIT_ORDER = new Map([
  ['high', 0],
  ['medium', 1],
  ['low', 2],
  ['unknown', 3],
]);

interface WeightedField {
  field: SearchMatchField;
  original: string;
  value: string;
  weight: number;
}

function phraseBoost(field: WeightedField, query: string): number {
  if (!query || !field.value.includes(query)) return 0;
  if (field.value === query) return field.weight * 1_000;
  if (field.value.startsWith(`${query} `) || field.value.startsWith(query)) {
    return field.weight * 750;
  }
  return field.weight * 500;
}

function buildFields(idea: Idea): WeightedField[] {
  const fields: WeightedField[] = [
    { field: 'name', original: idea.name, value: normalizeSearch(idea.name), weight: 100 },
    ...idea.aliases.map((alias) => ({
      field: 'alias' as const,
      original: alias,
      value: normalizeSearch(alias),
      weight: 75,
    })),
    ...idea.tags.map((tag) => ({
      field: 'tag' as const,
      original: tag,
      value: normalizeSearch(tag),
      weight: 48,
    })),
    { field: 'thesis', original: idea.one_liner, value: normalizeSearch(idea.one_liner), weight: 30 },
    {
      field: 'decision',
      original: idea.decision_reason,
      value: normalizeSearch(idea.decision_reason),
      weight: 20,
    },
    {
      field: 'resurrection',
      original: idea.resurrection_trigger,
      value: normalizeSearch(idea.resurrection_trigger),
      weight: 16,
    },
  ];

  return fields;
}

const fieldsByIdeaId = new Map(ideas.map((idea) => [idea.id, buildFields(idea)]));

function scoreIdea(idea: Idea, query: string): IdeaSearchResult | undefined {
  const normalizedQuery = normalizeSearch(query);
  const tokens = queryTokens(normalizedQuery);
  if (!tokens.length) return { idea, matchedFields: [], score: 0 };

  const fields = fieldsByIdeaId.get(idea.id) ?? [];
  if (!tokens.every((token) => fields.some((field) => containsToken(field.value, token)))) {
    return undefined;
  }

  const scores = fields
    .map((field) => ({
      field,
      phraseBoost: phraseBoost(field, normalizedQuery),
      score: field.weight * relationScore(field.value, normalizedQuery, tokens),
    }))
    .filter(({ score }) => score > 0)
    .sort(
      (left, right) =>
        right.score - left.score || compareSearchText(left.field.field, right.field.field),
    );
  const matchedFields = [...new Set(scores.map(({ field }) => field.field))];
  const best = scores[0];
  const bestPhrase = scores
    .filter((item) => item.phraseBoost > 0)
    .sort((left, right) => right.phraseBoost - left.phraseBoost)[0];
  const snippetField = bestPhrase?.field ?? best?.field;
  const snippetValue = snippetField
    ? createSearchSnippet(snippetField.original, normalizedQuery)
    : undefined;
  return {
    idea,
    matchedFields,
    score:
      scores.reduce((total, item) => total + item.score, 0) +
      (bestPhrase?.phraseBoost ?? 0),
    snippet: snippetField && snippetValue
      ? { field: snippetField.field, ...snippetValue }
      : undefined,
  };
}

function ideaTieBreak(left: Idea, right: Idea): number {
  return compareSearchText(left.name, right.name) || compareSearchText(left.id, right.id);
}

export function searchIdeas(options: LedgerSearchOptions = {}): IdeaSearchResult[] {
  const query = options.query?.trim() ?? '';
  const results = ideas
    .filter((idea) => matchesFilters(idea, options))
    .map((idea) => scoreIdea(idea, query))
    .filter((result): result is IdeaSearchResult => result !== undefined);

  results.sort((left, right) => {
    switch (options.sort ?? 'relevance') {
      case 'name':
        return ideaTieBreak(left.idea, right.idea);
      case 'status':
        return (
          (STATUS_ORDER.get(left.idea.status) ?? 99) - (STATUS_ORDER.get(right.idea.status) ?? 99) ||
          ideaTieBreak(left.idea, right.idea)
        );
      case 'fit':
        return (
          (FIT_ORDER.get(left.idea.hackathon_fit) ?? 99) -
            (FIT_ORDER.get(right.idea.hackathon_fit) ?? 99) || ideaTieBreak(left.idea, right.idea)
        );
      case 'relevance':
        return query
          ? right.score - left.score || ideaTieBreak(left.idea, right.idea)
          : (STATUS_ORDER.get(left.idea.status) ?? 99) -
              (STATUS_ORDER.get(right.idea.status) ?? 99) || ideaTieBreak(left.idea, right.idea);
    }
  });

  return options.limit === undefined ? results : results.slice(0, Math.max(0, options.limit));
}
