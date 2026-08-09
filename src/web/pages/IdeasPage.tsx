import { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import {
  parseLedgerSearchParams,
  serializeLedgerSearchParams,
} from '../../ledger';
import type { LedgerUrlState, ResearchSearchResult } from '../../ledger';
import {
  getContextualFacets,
  searchIdeas,
  searchResearch,
} from '../ledger-adapter';
import { EmptyState } from '../components/EmptyState';
import { Filters } from '../components/Filters';
import { IdeaLedger } from '../components/IdeaLedger';
import { PageHeader } from '../components/PageHeader';
import { Icon } from '../ui/Icon';

const researchFieldLabels = {
  title: 'Dossier title',
  heading: 'Dossier heading',
  body: 'Dossier body',
} as const;

export function IdeasPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const filters = useMemo(() => parseLedgerSearchParams(searchParams), [searchParams]);
  const results = useMemo(() => searchIdeas(filters), [filters]);
  const counts = useMemo(() => getContextualFacets(filters), [filters]);
  const [researchState, setResearchState] = useState<{
    error?: boolean;
    query: string;
    results: ResearchSearchResult[];
  }>({ query: '', results: [] });

  useEffect(() => {
    if (!filters.query) return;
    let current = true;
    searchResearch(filters.query).then(
      (matches) => {
        if (current) setResearchState({ query: filters.query, results: matches });
      },
      () => {
        if (current) setResearchState({ error: true, query: filters.query, results: [] });
      },
    );
    return () => {
      current = false;
    };
  }, [filters.query]);

  const activeResearch = researchState.query === filters.query ? researchState : undefined;
  const researchMatches = activeResearch?.results ?? [];
  const researchLoading = Boolean(filters.query) && !activeResearch;

  function updateFilters(nextFilters: LedgerUrlState) {
    setSearchParams(serializeLedgerSearchParams(nextFilters), { replace: true });
  }

  function clearFilters() {
    const clean: LedgerUrlState = {
      query: filters.query,
      sort: 'relevance',
      statuses: [],
      hackathonFits: [],
      researchMappings: [],
      tags: [],
    };
    setSearchParams(serializeLedgerSearchParams(clean), { replace: true });
  }

  const activeFilters =
    (filters.statuses?.length ?? 0) +
    (filters.hackathonFits?.length ?? 0) +
    (filters.researchMappings?.length ?? 0) +
    (filters.tags?.length ?? 0) +
    Number(filters.sort !== 'relevance');

  return (
    <div className="page page-ideas">
      <PageHeader
        eyebrow="All decisions"
        intro={<p>Search the archive before generating another idea. Passed ideas stay visible by default because rejection memory is the product.</p>}
        title="Idea ledger"
      />

      <Filters counts={counts} filters={filters} onChange={updateFilters} onClear={clearFilters} />

      <div className="results-heading">
        <div aria-live="polite" aria-atomic="true">
          <strong>{results.length}</strong> {results.length === 1 ? 'idea' : 'ideas'}
          {filters.query ? <> matching <q>{filters.query}</q></> : null}
        </div>
        <span>{activeFilters ? 'Filtered view' : 'Every status included'}</span>
      </div>

      {results.length ? (
        <IdeaLedger results={results} />
      ) : (
        <EmptyState
          action={<button className="button button-primary" onClick={clearFilters} type="button">Clear filters</button>}
          description={<>Nothing matched {filters.query ? <q>{filters.query}</q> : 'this view'} across canonical ideas and their mapped research.</>}
          title="No ideas found"
        />
      )}

      {filters.query && (researchLoading || activeResearch?.error || researchMatches.length) ? (
        <section className="research-matches" aria-labelledby="research-matches-heading">
          <div className="section-heading-row">
            <div>
              <div className="section-kicker">Separate dossier results</div>
              <h2 id="research-matches-heading">Research matches</h2>
            </div>
          </div>
          <div className="research-match-list">
            {researchMatches.map((result) => {
              const { document } = result;
              const primaryField = result.matchedFields[0] ?? 'body';
              return (
                <Link key={document.slug} to={document.route}>
                  <span className="research-match-source">{researchFieldLabels[primaryField]}</span>
                  <strong>{document.title}</strong>
                  <p>{result.snippet}</p>
                  <Icon name="arrow-left" className="source-arrow" />
                </Link>
              );
            })}
          </div>
          {researchLoading ? <div className="research-load-state" role="status">Searching dossier text…</div> : null}
          {activeResearch?.error ? (
            <div className="inline-warning research-load-state" role="alert">
              Dossier text search is unavailable. Canonical idea results remain complete.
            </div>
          ) : null}
        </section>
      ) : null}
    </div>
  );
}
