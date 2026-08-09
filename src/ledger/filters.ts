import { getResearchMapping, hackathonFitOptions, statusOptions } from './data';
import { compareSearchText, humanize } from './normalize';
import type { FacetCounts, FacetOption, HackathonFit, Idea, IdeaStatus, LedgerFilters, ResearchMapping } from './types';
import { HACKATHON_FITS, IDEA_STATUSES, RESEARCH_MAPPINGS } from './types';

function includes<T>(selected: readonly T[] | undefined, value: T): boolean {
  return !selected?.length || selected.includes(value);
}

export function matchesFilters(idea: Idea, filters: LedgerFilters = {}): boolean {
  if (!includes(filters.statuses, idea.status)) return false;
  if (!includes(filters.hackathonFits, idea.hackathon_fit)) return false;
  if (!includes(filters.researchMappings, getResearchMapping(idea.id))) return false;
  if (filters.tags?.length && !filters.tags.some((tag) => idea.tags.includes(tag))) return false;
  return true;
}

export function filterIdeas(source: readonly Idea[], filters: LedgerFilters = {}): Idea[] {
  return source.filter((idea) => matchesFilters(idea, filters));
}

function optionsFor<T extends string>(
  order: readonly T[],
  values: readonly T[],
  labels?: ReadonlyMap<T, string>,
): FacetOption<T>[] {
  const counts = new Map<T, number>();
  for (const value of values) counts.set(value, (counts.get(value) ?? 0) + 1);
  return order.map((value) => ({
    count: counts.get(value) ?? 0,
    label: labels?.get(value) ?? humanize(value),
    value,
  }));
}

export function getFacetCounts(source: readonly Idea[]): FacetCounts {
  const statusLabels = new Map(statusOptions.map((option) => [option.value, option.label]));
  const fitLabels = new Map(hackathonFitOptions.map((option) => [option.value, option.label]));
  const tagCounts = new Map<string, number>();
  for (const tag of source.flatMap((idea) => idea.tags)) {
    tagCounts.set(tag, (tagCounts.get(tag) ?? 0) + 1);
  }

  return {
    statuses: optionsFor<IdeaStatus>(IDEA_STATUSES, source.map((idea) => idea.status), statusLabels),
    hackathonFits: optionsFor<HackathonFit>(
      HACKATHON_FITS,
      source.map((idea) => idea.hackathon_fit),
      fitLabels,
    ),
    researchMappings: optionsFor<ResearchMapping>(
      RESEARCH_MAPPINGS,
      source.map((idea) => getResearchMapping(idea.id)),
    ),
    tags: [...tagCounts]
      .map(([value, count]) => ({ count, label: value, value }))
      .sort((left, right) => right.count - left.count || compareSearchText(left.value, right.value)),
  };
}
