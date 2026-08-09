import {
  createContext,
  type PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from 'react';
import { useLocation } from 'react-router-dom';

import { parseCompareIds } from '../../ledger';
import { canonicalIdeaIds } from '../ledger-adapter';
import type { IdeaRecord } from '../types';

interface CompareContextValue {
  clear: () => void;
  isSelected: (id: string) => boolean;
  remove: (id: string) => void;
  replace: (ids: string[]) => void;
  selected: IdeaRecord[];
  toggle: (id: string) => { added: boolean; limitReached: boolean };
}

const CompareContext = createContext<CompareContextValue | undefined>(undefined);
const storageKey = 'idea-ledger:compare';
const compareLimit = 4;
const emptyIds: string[] = [];
const storeListeners = new Set<() => void>();
let storedIdsSnapshot: string[] | undefined;

function canonicalIds(values: readonly unknown[]): string[] {
  return canonicalIdeaIds(values).ideas.map((idea) => idea.id).slice(0, compareLimit);
}

function readStoredIds(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const parsed: unknown = JSON.parse(window.sessionStorage.getItem(storageKey) ?? '[]');
    if (!Array.isArray(parsed)) return [];
    return canonicalIds(parsed.filter((value): value is string => typeof value === 'string'));
  } catch {
    return [];
  }
}

function writeStoredIds(ids: readonly string[]) {
  try {
    window.sessionStorage.setItem(storageKey, JSON.stringify(ids));
  } catch {
    // Comparison remains available for this session even when storage is unavailable.
  }
}

function getStoredIdsSnapshot(): string[] {
  storedIdsSnapshot ??= readStoredIds();
  return storedIdsSnapshot;
}

function subscribeToStoredIds(listener: () => void) {
  storeListeners.add(listener);
  return () => storeListeners.delete(listener);
}

function replaceStoredIds(values: readonly unknown[]) {
  const next = canonicalIds(values);
  storedIdsSnapshot = next;
  writeStoredIds(next);
  storeListeners.forEach((listener) => listener());
}

export function CompareProvider({ children }: PropsWithChildren) {
  const location = useLocation();
  const sessionIds = useSyncExternalStore(
    subscribeToStoredIds,
    getStoredIdsSnapshot,
    () => emptyIds,
  );
  const isCompareRoute = location.pathname === '/compare';
  const hasRouteIds = isCompareRoute && new URLSearchParams(location.search).has('ids');
  const routeIds = useMemo(
    () => (hasRouteIds ? parseCompareIds(location.search, compareLimit) : []),
    [hasRouteIds, location.search],
  );

  useEffect(() => {
    if (hasRouteIds) replaceStoredIds(routeIds);
  }, [hasRouteIds, routeIds]);

  const effectiveIds = hasRouteIds ? routeIds : sessionIds;
  const selected = useMemo(() => canonicalIdeaIds(effectiveIds).ideas, [effectiveIds]);
  const isSelected = useCallback((id: string) => effectiveIds.includes(id), [effectiveIds]);

  const replace = useCallback((nextIds: string[]) => {
    replaceStoredIds(nextIds);
  }, []);

  const clear = useCallback(() => replace([]), [replace]);
  const remove = useCallback(
    (id: string) => replace(effectiveIds.filter((item) => item !== id)),
    [effectiveIds, replace],
  );
  const toggle = useCallback(
    (id: string) => {
      if (effectiveIds.includes(id)) {
        replace(effectiveIds.filter((item) => item !== id));
        return { added: false, limitReached: false };
      }
      const selectionLimit = window.matchMedia('(max-width: 767px)').matches ? 2 : compareLimit;
      if (effectiveIds.length >= selectionLimit) return { added: false, limitReached: true };
      replace([...effectiveIds, id]);
      return { added: true, limitReached: false };
    },
    [effectiveIds, replace],
  );

  const value = useMemo(
    () => ({ clear, isSelected, remove, replace, selected, toggle }),
    [clear, isSelected, remove, replace, selected, toggle],
  );

  return <CompareContext.Provider value={value}>{children}</CompareContext.Provider>;
}

export function useCompare() {
  const context = useContext(CompareContext);
  if (!context) throw new Error('useCompare must be used inside CompareProvider');
  return context;
}
