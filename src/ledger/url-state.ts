import { hasIdea, tagOptions } from './data';
import type { HackathonFit, IdeaStatus, LedgerSort, LedgerUrlState, ResearchMapping } from './types';
import { HACKATHON_FITS, IDEA_STATUSES, LEDGER_SORTS, RESEARCH_MAPPINGS } from './types';

const knownTags = new Set(tagOptions.map((option) => option.value));

export function routerBasename(baseUrl: string): string {
  if (!baseUrl || baseUrl === '/' || baseUrl === './') return '/';
  return `/${baseUrl.replace(/^\/+|\/+$/g, '')}`;
}

function valuesFor(params: URLSearchParams, key: string): string[] {
  return [...new Set(params.getAll(key).flatMap((value) => value.split(',')).map((value) => value.trim()).filter(Boolean))];
}

function allowedValues<T extends string>(values: readonly string[], allowed: readonly T[]): T[] {
  const allowedSet = new Set<string>(allowed);
  return values.filter((value): value is T => allowedSet.has(value));
}

function asParams(input: string | URLSearchParams): URLSearchParams {
  if (input instanceof URLSearchParams) return new URLSearchParams(input);
  return new URLSearchParams(input.startsWith('?') ? input.slice(1) : input);
}

export function parseLedgerSearchParams(input: string | URLSearchParams): LedgerUrlState {
  const params = asParams(input);
  const sort = params.get('sort');
  return {
    query: params.get('q')?.trim() ?? '',
    sort: LEDGER_SORTS.includes(sort as LedgerSort) ? (sort as LedgerSort) : 'relevance',
    statuses: allowedValues<IdeaStatus>(valuesFor(params, 'status'), IDEA_STATUSES),
    hackathonFits: allowedValues<HackathonFit>(valuesFor(params, 'fit'), HACKATHON_FITS),
    researchMappings: allowedValues<ResearchMapping>(
      valuesFor(params, 'research'),
      RESEARCH_MAPPINGS,
    ),
    tags: valuesFor(params, 'tag').filter((tag) => knownTags.has(tag)),
  };
}

function appendSorted(params: URLSearchParams, key: string, values: readonly string[] | undefined): void {
  for (const value of [...new Set(values ?? [])].sort()) params.append(key, value);
}

export function serializeLedgerSearchParams(state: Partial<LedgerUrlState>): URLSearchParams {
  const params = new URLSearchParams();
  const query = state.query?.trim();
  if (query) params.set('q', query);
  appendSorted(params, 'status', state.statuses);
  appendSorted(params, 'fit', state.hackathonFits);
  appendSorted(params, 'research', state.researchMappings);
  appendSorted(params, 'tag', state.tags?.filter((tag) => knownTags.has(tag)));
  if (state.sort && state.sort !== 'relevance') params.set('sort', state.sort);
  return params;
}

export function parseCompareIds(input: string | URLSearchParams, limit = 4): string[] {
  const params = asParams(input);
  const boundedLimit = Math.min(4, Math.max(0, limit));
  return valuesFor(params, 'ids')
    .filter(hasIdea)
    .slice(0, boundedLimit);
}

export function serializeCompareIds(ids: readonly string[], limit = 4): URLSearchParams {
  const boundedLimit = Math.min(4, Math.max(0, limit));
  const canonical = [...new Set(ids.map((id) => id.trim()).filter(hasIdea))].slice(0, boundedLimit);
  const params = new URLSearchParams();
  if (canonical.length) params.set('ids', canonical.join(','));
  return params;
}
