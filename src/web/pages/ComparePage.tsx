import { type ReactNode, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import {
  canonicalIdeaIds,
  getResearchReferences,
  mappingLabels,
  normalizeSearch,
} from '../ledger-adapter';
import type { IdeaRecord } from '../types';
import { useCompare } from '../components/CompareContext';
import { EmptyState } from '../components/EmptyState';
import { PageHeader } from '../components/PageHeader';
import { FitLabel, StatusLabel } from '../components/StatusLabels';
import { Icon } from '../ui/Icon';
import { useMediaQuery } from '../ui/useMediaQuery';

interface CompareRow {
  key: string;
  label: string;
  value: (idea: IdeaRecord) => ReactNode;
  raw: (idea: IdeaRecord) => string;
}

const rows: CompareRow[] = [
  {
    key: 'status',
    label: 'Decision state',
    raw: (idea) => `${idea.status}:${idea.hackathon_fit}`,
    value: (idea) => <div className="compare-status"><StatusLabel status={idea.status} /><FitLabel fit={idea.hackathon_fit} /></div>,
  },
  { key: 'promise', label: 'Promise', raw: (idea) => idea.one_liner, value: (idea) => idea.one_liner },
  { key: 'decision', label: 'Why this status', raw: (idea) => idea.decision_reason, value: (idea) => idea.decision_reason },
  { key: 'resurrection', label: 'What changes the decision', raw: (idea) => idea.resurrection_trigger, value: (idea) => idea.resurrection_trigger },
  { key: 'tags', label: 'Search vocabulary', raw: (idea) => idea.tags.join('|'), value: (idea) => <div className="tag-list static-tags">{idea.tags.map((tag) => <span key={tag}>{tag}</span>)}</div> },
  {
    key: 'research',
    label: 'Research provenance',
    raw: (idea) => getResearchReferences(idea)
      .map((reference) => `${reference.quality}:${reference.slug ?? 'none'}`)
      .join('|'),
    value: (idea) => {
      const references = getResearchReferences(idea);
      return (
        <div className="compare-provenance">
          {references.map((reference, index) => (
            <div key={`${reference.slug ?? 'none'}-${index}`}>
              <strong>{mappingLabels[reference.quality]}</strong>
              {reference.document ? (
                <Link to={`${reference.document.route}${reference.anchor ? `#${reference.anchor}` : ''}`}>
                  {reference.document.title}
                </Link>
              ) : null}
            </div>
          ))}
        </div>
      );
    },
  },
];

function rowsMatch(row: CompareRow, ideas: IdeaRecord[]) {
  const values = ideas.map((idea) => normalizeSearch(row.raw(idea)));
  return values.length > 1 && values.every((value) => value === values[0]);
}

export function ComparePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const compare = useCompare();
  const isMobile = useMediaQuery('(max-width: 767px)');
  const idsParam = searchParams.get('ids') ?? '';
  const queryIds = useMemo(() => idsParam.split(',').filter(Boolean), [idsParam]);
  const parsed = useMemo(() => canonicalIdeaIds(queryIds), [queryIds]);
  const overflowCount = Math.max(0, parsed.ideas.length - 4);
  const sourceIdeas = queryIds.length ? parsed.ideas.slice(0, 4) : compare.selected.slice(0, 4);
  const [mobilePair, setMobilePair] = useState<string[]>([]);
  const [showMatching, setShowMatching] = useState(false);
  const [copied, setCopied] = useState(false);

  const resolvedMobilePair = useMemo(() => {
    const valid = mobilePair.filter((id) => sourceIdeas.some((idea) => idea.id === id));
    const additions = sourceIdeas
      .filter((idea) => !valid.includes(idea.id))
      .slice(0, 2 - valid.length)
      .map((idea) => idea.id);
    return [...valid, ...additions];
  }, [mobilePair, sourceIdeas]);

  const displayed = isMobile
    ? sourceIdeas.filter((idea) => resolvedMobilePair.includes(idea.id)).slice(0, 2)
    : sourceIdeas;
  const visibleRows = rows.filter((row) => showMatching || !rowsMatch(row, displayed));

  function updateIdeas(next: IdeaRecord[]) {
    compare.replace(next.map((idea) => idea.id));
    const nextParams = new URLSearchParams(searchParams);
    if (next.length) nextParams.set('ids', next.map((idea) => idea.id).join(','));
    else nextParams.delete('ids');
    setSearchParams(nextParams, { replace: true });
  }

  function toggleMobileIdea(id: string) {
    setMobilePair(() => {
      const current = resolvedMobilePair;
      if (current.includes(id)) return current.length > 1 ? current.filter((value) => value !== id) : current;
      return current.length >= 2 ? [current[1], id] : [...current, id];
    });
  }

  async function copyLink() {
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('ids', sourceIdeas.map((idea) => idea.id).join(','));
      await navigator.clipboard.writeText(url.toString());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  if (sourceIdeas.length < 2) {
    return (
      <div className="page page-compare">
        <PageHeader eyebrow="Decision comparison" title="Compare ideas" intro={<p>Put decisions, resurrection conditions, and provenance side by side—without collapsing unlike strengths into a score.</p>} />
        <EmptyState
          action={<Link className="button button-primary" to="/ideas">Choose ideas from the ledger</Link>}
          description={sourceIdeas.length ? <><strong>{sourceIdeas[0].name}</strong> is selected. Add one more idea to compare.</> : 'Choose two to four ideas. Passed ideas are welcome here.'}
          title={sourceIdeas.length ? 'One more idea needed' : 'No comparison yet'}
        />
      </div>
    );
  }

  return (
    <div className="page page-compare">
      <PageHeader
        actions={<div className="page-actions-row"><button className="button button-secondary" onClick={copyLink} type="button">{copied ? 'Link copied' : 'Copy link'}</button><Link className="button button-secondary" to="/ideas">Add ideas</Link></div>}
        eyebrow="Decision comparison"
        intro={<p>Only canonical v1 facts are shown. No composite score, inferred payer, or invented technical confidence.</p>}
        title="Compare ideas"
      />

      {parsed.invalid.length ? (
        <div className="inline-warning" role="status">
          Unknown IDs were ignored: <code>{parsed.invalid.join(', ')}</code>
        </div>
      ) : null}

      {overflowCount ? (
        <div className="inline-warning" role="status">
          Comparison is capped at four ideas. {overflowCount} additional canonical {overflowCount === 1 ? 'ID was' : 'IDs were'} ignored.
        </div>
      ) : null}

      {isMobile && sourceIdeas.length > 2 ? (
        <fieldset className="mobile-pair-picker">
          <legend>Choose two ideas to view</legend>
          <div>
            {sourceIdeas.map((idea) => (
              <label key={idea.id}>
                <input checked={resolvedMobilePair.includes(idea.id)} onChange={() => toggleMobileIdea(idea.id)} type="checkbox" />
                <span>{idea.name}</span>
              </label>
            ))}
          </div>
        </fieldset>
      ) : null}

      <div className="compare-controls">
        <label><input checked={showMatching} onChange={(event) => setShowMatching(event.target.checked)} type="checkbox" /> Show matching fields</label>
        <span aria-live="polite">Showing {visibleRows.length} of {rows.length} fields</span>
      </div>

      <div className="compare-table-wrap" tabIndex={0}>
        <table className="compare-table">
          <caption className="sr-only">Side-by-side idea decision comparison</caption>
          <thead>
            <tr>
              <th scope="col">Decision field</th>
              {displayed.map((idea) => (
                <th key={idea.id} scope="col">
                  <div className="compare-column-header">
                    <Link to={idea.route}>{idea.name}</Link>
                    <button aria-label={`Remove ${idea.name} from comparison`} onClick={() => updateIdeas(sourceIdeas.filter((value) => value.id !== idea.id))} type="button"><Icon name="x" /></button>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {visibleRows.map((row) => (
              <tr key={row.key}>
                <th scope="row">{row.label}</th>
                {displayed.map((idea) => <td key={idea.id}>{row.value(idea)}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="compare-footer-actions">
        <button className="text-button" onClick={() => updateIdeas([])} type="button">Clear comparison</button>
        <small>Search vocabulary is shown as source data, not a product taxonomy.</small>
      </div>
    </div>
  );
}
