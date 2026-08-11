import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { normalizeSearch } from '../../ledger';
import type { FocusGroupMethod, FocusGroupStudy } from '../../ledger';
import { FocusGroupMethodLabel } from '../components/FocusGroupStudy';
import { PageHeader } from '../components/PageHeader';

import {
  focusGroupCounts,
  focusGroupStudies,
  focusGroupsUpdatedAt,
} from '../ledger-adapter';

type MethodFilter = 'all' | FocusGroupMethod;

const methodFilters: { label: string; value: MethodFilter }[] = [
  { label: 'All studies', value: 'all' },
  { label: 'Recruited', value: 'recruited_participants' },
  { label: 'Simulated', value: 'simulated_persona' },
];

function methodCount(method: MethodFilter): number {
  if (method === 'all') return focusGroupCounts.studies;
  return method === 'recruited_participants'
    ? focusGroupCounts.recruitedStudies
    : focusGroupCounts.simulatedStudies;
}

function studySearchText(study: FocusGroupStudy): string {
  return normalizeSearch([
    study.title,
    study.sample_label,
    study.summary,
    study.segments.flatMap((segment) => [
      segment.label,
      segment.primary_job,
      segment.signal,
      segment.objection,
    ]).join(' '),
  ].join(' '));
}

function StudyDashboardCard({ study, number }: { number: number; study: FocusGroupStudy }) {
  const outcomeCounts = Object.fromEntries(
    ['advanced', 'bounded', 'struck'].map((disposition) => [
      disposition,
      study.outcomes
        .filter((outcome) => outcome.disposition === disposition)
        .reduce((total, outcome) => total + outcome.idea_ids.length, 0),
    ]),
  ) as Record<'advanced' | 'bounded' | 'struck', number>;

  return (
    <article className="focus-dashboard-card" id={study.id}>
      <header>
        <span className="focus-study-number">Study {String(number).padStart(2, '0')}</span>
        <FocusGroupMethodLabel study={study} />
        <time dateTime={study.conducted_at}>{study.conducted_at}</time>
      </header>
      <div className="focus-dashboard-card-copy">
        <h3><Link to={study.route}>{study.title}</Link></h3>
        <p>{study.sample_label}</p>
      </div>
      <dl className="focus-dashboard-card-stats">
        <div><dt>{study.segments.length}</dt><dd>Perspectives</dd></div>
        <div><dt>{study.linkedIdeaIds.length}</dt><dd>Ideas linked</dd></div>
        <div><dt>{study.outcomes.length}</dt><dd>Decision lanes</dd></div>
      </dl>
      <div className="focus-dashboard-dispositions" aria-label="Linked idea outcomes in this study">
        <span><b>{outcomeCounts.advanced}</b> advanced</span>
        <span><b>{outcomeCounts.bounded}</b> bounded</span>
        <span><b>{outcomeCounts.struck}</b> struck</span>
      </div>
      <div className="focus-dashboard-segments" aria-label="Study segments">
        {study.segments.map((segment) => <span key={segment.id}>{segment.label}</span>)}
      </div>
      <footer>
        <Link className="button button-primary" to={study.route}>Open study room</Link>
        <Link className="button button-secondary" to={study.dossierRoute}>Source dossier</Link>
      </footer>
    </article>
  );
}

export function FocusGroupsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q')?.trim() ?? '';
  const requestedMethod = searchParams.get('method');
  const method: MethodFilter = requestedMethod === 'recruited_participants'
    || requestedMethod === 'simulated_persona'
    ? requestedMethod
    : 'all';
  const normalizedQuery = normalizeSearch(query);

  const studies = useMemo(() => [...focusGroupStudies].sort((left, right) => (
    right.conducted_at.localeCompare(left.conducted_at) || left.title.localeCompare(right.title)
  )), []);
  const visibleStudies = studies.filter((study) => (
    (method === 'all' || study.method === method)
    && (!normalizedQuery || studySearchText(study).includes(normalizedQuery))
  ));

  function updateFilters(next: { method?: MethodFilter; query?: string }) {
    const nextMethod = next.method ?? method;
    const nextQuery = next.query ?? query;
    const params = new URLSearchParams();
    if (nextQuery.trim()) params.set('q', nextQuery.trim());
    if (nextMethod !== 'all') params.set('method', nextMethod);
    setSearchParams(params, { replace: true });
  }

  return (
    <div className="page page-focus-groups">
      <PageHeader
        eyebrow={<><span className="eyebrow-dot" /> Research room · updated {focusGroupsUpdatedAt}</>}
        intro={<p>Each study is its own durable room. Search the whole collection, inspect its method and segment perspectives, then follow the exact ideas and research gates it changed.</p>}
        title="Focus groups"
      />

      <section className="focus-boundary" aria-labelledby="focus-boundary-heading">
        <div>
          <div className="section-kicker">Evidence integrity</div>
          <h2 id="focus-boundary-heading">A hypothesis lab, not a wall of fake customer quotes.</h2>
          <p>Every study declares its method. Simulated personas can expose blind spots and prioritize recruitment; only recruited behavior, payment, and attributable evidence can validate demand.</p>
        </div>
        <dl className="focus-stats">
          <div><dt>{focusGroupCounts.studies}</dt><dd>Structured studies</dd></div>
          <div><dt>{focusGroupCounts.segments}</dt><dd>Segment perspectives</dd></div>
          <div><dt>{focusGroupCounts.recruitedStudies}</dt><dd>Recruited studies</dd></div>
          <div><dt>{focusGroupCounts.linkedIdeas}</dt><dd>Canonical ideas linked</dd></div>
        </dl>
      </section>

      <section className="focus-dashboard" aria-labelledby="focus-dashboard-heading">
        <div className="section-heading-row focus-dashboard-heading">
          <div>
            <div className="section-kicker">Study dashboard</div>
            <h2 id="focus-dashboard-heading">Every group, broken out and addressable</h2>
            <p>Cards and study rooms are generated directly from <code>focus-groups.json</code>. Add a valid study, regenerate, and it appears here automatically.</p>
          </div>
        </div>

        <div className="focus-dashboard-controls">
          <form onSubmit={(event) => event.preventDefault()} role="search">
            <label htmlFor="focus-group-search">Search studies and segments</label>
            <input
              autoComplete="off"
              id="focus-group-search"
              onChange={(event) => updateFilters({ query: event.currentTarget.value })}
              placeholder="Search a group, job, signal, or objection…"
              type="search"
              value={query}
            />
          </form>
          <div className="focus-method-filters" aria-label="Filter studies by method">
            {methodFilters.map((filter) => (
              <button
                aria-pressed={method === filter.value}
                key={filter.value}
                onClick={() => updateFilters({ method: filter.value })}
                type="button">
                {filter.label} <span>{methodCount(filter.value)}</span>
              </button>
            ))}
          </div>
        </div>

        <div aria-live="polite" className="focus-dashboard-results" role="status">
          Showing {visibleStudies.length} of {focusGroupCounts.studies} studies
        </div>

        {visibleStudies.length ? (
          <div className="focus-dashboard-grid">
            {visibleStudies.map((study) => (
              <StudyDashboardCard
                key={study.id}
                number={studies.findIndex((candidate) => candidate.id === study.id) + 1}
                study={study}
              />
            ))}
          </div>
        ) : (
          <div className="focus-dashboard-empty">
            <h3>No studies match this lens</h3>
            <p>Clear the search or include another research method. The canonical study data remains unchanged.</p>
            <button className="button button-secondary" onClick={() => updateFilters({ method: 'all', query: '' })} type="button">Clear filters</button>
          </div>
        )}
      </section>
    </div>
  );
}
