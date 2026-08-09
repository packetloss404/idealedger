import { useEffect, useId, useRef, useState } from 'react';

import type {
  FacetCounts,
  HackathonFit,
  IdeaStatus,
  LedgerSort,
  LedgerUrlState,
  ResearchMapping,
} from '../../ledger';
import {
  allTags,
  fitLabels,
  fitOrder,
  mappingLabels,
  mappingOrder,
  statusLabels,
  statusOrder,
} from '../ledger-adapter';
import { Icon } from '../ui/Icon';
import { useMediaQuery } from '../ui/useMediaQuery';

const sortLabels: Record<LedgerSort, string> = {
  relevance: 'Relevance',
  name: 'Name',
  status: 'Decision state',
  fit: 'Hackathon fit',
};

function countFor<T extends string>(
  options: readonly { count: number; value: T }[],
  value: T,
) {
  return options.find((option) => option.value === value)?.count ?? 0;
}

export function Filters({
  counts,
  filters,
  onChange,
  onClear,
}: {
  counts: FacetCounts;
  filters: LedgerUrlState;
  onChange: (filters: LedgerUrlState) => void;
  onClear: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [tagDraft, setTagDraft] = useState('');
  const filterId = useId();
  const filterHeadingId = `${filterId}-heading`;
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const isMobile = useMediaQuery('(max-width: 767px)');
  const activeCount =
    (filters.statuses?.length ?? 0) +
    (filters.hackathonFits?.length ?? 0) +
    (filters.researchMappings?.length ?? 0) +
    (filters.tags?.length ?? 0) +
    Number(filters.sort !== 'relevance');

  useEffect(() => {
    if (!open || !isMobile || !panelRef.current) return;
    const panel = panelRef.current;
    const trigger = triggerRef.current;
    const previouslyFocused = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : undefined;
    const page = panel.closest('.page');
    const shell = panel.closest('.app-shell');
    const outside = new Set<HTMLElement>();
    shell?.querySelectorAll<HTMLElement>(
      ':scope > .app-sidebar, :scope > .app-topbar, :scope > .mobile-navigation, :scope > .compare-tray',
    ).forEach((element) => outside.add(element));
    page?.querySelectorAll<HTMLElement>(':scope > *').forEach((element) => {
      if (!element.contains(panel)) outside.add(element);
    });
    panel.closest('.filter-region')?.querySelector<HTMLElement>('.filter-toolbar')?.setAttribute(
      'inert',
      '',
    );
    outside.forEach((element) => {
      element.inert = true;
    });
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    function focusableElements() {
      return [...panel.querySelectorAll<HTMLElement>(
        'button:not([disabled]), input:not([disabled]), select:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
      )].filter((element) => !element.hidden);
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault();
        setOpen(false);
        return;
      }
      if (event.key !== 'Tab') return;
      const focusable = focusableElements();
      const first = focusable[0];
      const last = focusable.at(-1);
      if (!first || !last) {
        event.preventDefault();
        return;
      }
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    panel.addEventListener('keydown', onKeyDown);
    const focusFrame = requestAnimationFrame(() => closeRef.current?.focus());
    return () => {
      cancelAnimationFrame(focusFrame);
      panel.removeEventListener('keydown', onKeyDown);
      outside.forEach((element) => {
        element.inert = false;
      });
      panel.closest('.filter-region')?.querySelector<HTMLElement>('.filter-toolbar')?.removeAttribute(
        'inert',
      );
      document.body.style.overflow = previousOverflow;
      const returnTarget = trigger ?? previouslyFocused;
      if (returnTarget && returnTarget.offsetParent !== null) returnTarget.focus();
    };
  }, [isMobile, open]);

  function toggleStatus(status: IdeaStatus) {
    const selected = filters.statuses ?? [];
    onChange({
      ...filters,
      statuses: selected.includes(status)
        ? selected.filter((value) => value !== status)
        : [...selected, status],
    });
  }

  function toggleFit(fit: HackathonFit) {
    const selected = filters.hackathonFits ?? [];
    onChange({
      ...filters,
      hackathonFits: selected.includes(fit)
        ? selected.filter((value) => value !== fit)
        : [...selected, fit],
    });
  }

  function toggleMapping(mapping: ResearchMapping) {
    const selected = filters.researchMappings ?? [];
    onChange({
      ...filters,
      researchMappings: selected.includes(mapping)
        ? selected.filter((value) => value !== mapping)
        : [...selected, mapping],
    });
  }

  function applyLens(
    next: Pick<LedgerUrlState, 'hackathonFits' | 'researchMappings' | 'statuses' | 'tags'>,
  ) {
    onChange({ ...filters, ...next, sort: 'relevance' });
  }

  function addTag() {
    const value = allTags.find((tag) => tag.toLowerCase() === tagDraft.trim().toLowerCase());
    const selected = filters.tags ?? [];
    if (!value || selected.includes(value)) return;
    onChange({ ...filters, tags: [...selected, value] });
    setTagDraft('');
  }

  return (
    <section className="filter-region" aria-label="Idea filters">
      <div className="filter-toolbar">
        <button
          aria-controls={filterId}
          aria-expanded={open}
          className="button button-secondary mobile-filter-button"
          onClick={() => setOpen((current) => !current)}
          ref={triggerRef}
          type="button">
          <Icon name="filter" />
          Filters {activeCount ? <span className="button-count">{activeCount}</span> : null}
        </button>
        <div className="filter-presets" aria-label="Saved lenses">
          <button
            className="text-button"
            onClick={() => applyLens({ hackathonFits: [], researchMappings: [], statuses: ['validating'], tags: [] })}
            type="button">
            Validating
          </button>
          <button
            className="text-button"
            onClick={() => applyLens({ hackathonFits: [], researchMappings: [], statuses: ['raw', 'needs_reconstruction'], tags: [] })}
            type="button">
            Unresolved
          </button>
          <button
            className="text-button"
            onClick={() => applyLens({ hackathonFits: ['high'], researchMappings: [], statuses: ['passed_market', 'passed_scope'], tags: [] })}
            type="button">
            High-fit passed
          </button>
          <button
            className="text-button"
            onClick={() => applyLens({ hackathonFits: [], researchMappings: ['none'], statuses: [], tags: [] })}
            type="button">
            No research
          </button>
        </div>
        {activeCount ? (
          <button className="text-button clear-filters" onClick={onClear} type="button">
            Clear filters
          </button>
        ) : null}
      </div>

      <div
        aria-labelledby={isMobile ? filterHeadingId : undefined}
        aria-modal={isMobile ? true : undefined}
        className={`filter-panel ${open ? 'filter-panel-open' : ''}`}
        hidden={isMobile && !open}
        id={filterId}
        ref={panelRef}
        role={isMobile ? 'dialog' : undefined}>
        <div className="filter-panel-heading">
          <strong id={filterHeadingId}>Refine the ledger</strong>
          <button
            aria-label="Close filters"
            className="icon-button mobile-only"
            onClick={() => setOpen(false)}
            ref={closeRef}
            type="button">
            <Icon name="x" />
          </button>
        </div>
        <fieldset>
          <legend>Status</legend>
          <div className="filter-options">
            {statusOrder.map((status) => (
              <label key={status}>
                <input
                  checked={(filters.statuses ?? []).includes(status)}
                  onChange={() => toggleStatus(status)}
                  type="checkbox"
                />
                <span>{statusLabels[status]}</span>
                <span className="filter-count">{countFor(counts.statuses, status)}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend>Hackathon fit</legend>
          <div className="filter-options">
            {fitOrder.map((fit) => (
              <label key={fit}>
                <input
                  checked={(filters.hackathonFits ?? []).includes(fit)}
                  onChange={() => toggleFit(fit)}
                  type="checkbox"
                />
                <span>{fitLabels[fit]}</span>
                <span className="filter-count">{countFor(counts.hackathonFits, fit)}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend>Provenance</legend>
          <div className="filter-options filter-options-single">
            {mappingOrder.map((mapping) => (
              <label key={mapping}>
                <input
                  checked={(filters.researchMappings ?? []).includes(mapping)}
                  onChange={() => toggleMapping(mapping)}
                  type="checkbox"
                />
                <span>{mappingLabels[mapping]}</span>
                <span className="filter-count">{countFor(counts.researchMappings, mapping)}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend>Sort and tag</legend>
          <label className="stacked-field">
            <span>Sort ideas</span>
            <select
              onChange={(event) => onChange({ ...filters, sort: event.target.value as LedgerSort })}
              value={filters.sort}>
              {(Object.keys(sortLabels) as LedgerSort[]).map((sort) => (
                <option key={sort} value={sort}>{sortLabels[sort]}</option>
              ))}
            </select>
          </label>
          <div className="tag-filter-input">
            <label className="sr-only" htmlFor={`${filterId}-tag`}>Add a tag filter</label>
            <input
              id={`${filterId}-tag`}
              list={`${filterId}-tags`}
              onChange={(event) => setTagDraft(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  event.preventDefault();
                  addTag();
                }
              }}
              placeholder="Type a tag…"
              value={tagDraft}
            />
            <datalist id={`${filterId}-tags`}>
              {allTags.map((tag) => <option key={tag} value={tag} />)}
            </datalist>
            <button className="button button-secondary" disabled={!tagDraft.trim()} onClick={addTag} type="button">
              Add
            </button>
          </div>
          {(filters.tags?.length ?? 0) > 0 ? (
            <div className="active-tags" aria-label="Active tag filters">
              {filters.tags?.map((tag) => (
                <button
                  className="filter-chip"
                  key={tag}
                  onClick={() => onChange({ ...filters, tags: filters.tags?.filter((value) => value !== tag) })}
                  type="button">
                  {tag} <Icon name="x" />
                </button>
              ))}
            </div>
          ) : null}
        </fieldset>
      </div>
      {open ? <div aria-hidden="true" className="filter-scrim" onClick={() => setOpen(false)} /> : null}
    </section>
  );
}
