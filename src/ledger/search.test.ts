import { describe, expect, it } from 'vitest';

import { filterIdeas, ideas, normalizeSearch, searchIdeas, searchResearch } from './index';

describe('weighted idea search', () => {
  it.each([
    ['Afterglow', 'afterglow'],
    ['CardSafe', 'media-card-custody'],
    ['CrashTape', 'crash-recoverable-field-recorder'],
    ['LotMatch', 'lot-match'],
  ])('ranks the canonical idea first for %s', (query, expectedId) => {
    expect(searchIdeas({ query })[0]?.idea.id).toBe(expectedId);
  });

  it('finds a decision-only phrase and reports the decisive field', () => {
    const [result] = searchIdeas({ query: 'two seconds terminal loss' });
    expect(result?.idea.id).toBe('crash-recoverable-field-recorder');
    expect(result?.matchedFields).toContain('resurrection');
    expect(normalizeSearch(result?.snippet?.matchedText ?? '')).toBe('two');
    expect(normalizeSearch(result?.snippet?.text ?? '')).toContain(
      'two seconds of terminal loss',
    );
  });

  it('ranks contiguous phrase hits above scattered token collisions', () => {
    const results = searchIdeas({ query: 'second app' });
    expect(results.slice(0, 3).map((result) => result.idea.id).sort()).toEqual(
      ['barn-shift-baton', 'creator-portability', 'grooming-scope-approval'].sort(),
    );
    for (const result of results.slice(0, 3)) {
      expect(result.snippet?.field).toBe('decision');
      expect(normalizeSearch(result.snippet?.matchedText ?? '')).toBe('second app');
      expect(normalizeSearch(result.snippet?.text ?? '')).toContain('second app');
    }
    expect(
      results.some(
        (result) => normalizeSearch(result.snippet?.matchedText ?? '') !== 'second app',
      ),
    ).toBe(true);
  });

  it('requires every query token and keeps dossier text out of canonical idea results', () => {
    const results = searchIdeas({ query: '4x6 label' });
    expect(results[0]?.idea.id).toBe('amazon-label-handoff');
    expect(results[0]?.matchedFields).toContain('alias');
    expect(results.every((result) => result.score > 0)).toBe(true);
  });

  it('does not fan a unique idea name across every idea linked to the same dossier', () => {
    const results = searchIdeas({ query: 'CardReceipt' });
    expect(results.map((result) => result.idea.id)).toEqual(['gift-card-receipt-match']);
  });

  it('combines facets as AND across groups and OR within a group', () => {
    const filtered = filterIdeas(ideas, {
      hackathonFits: ['high'],
      researchMappings: ['heading'],
      statuses: ['validating', 'raw'],
    });
    expect(filtered.length).toBeGreaterThan(0);
    expect(
      filtered.every(
        (idea) =>
          idea.hackathon_fit === 'high' && ['validating', 'raw'].includes(idea.status),
      ),
    ).toBe(true);
  });

  it('returns stable ties and applies a hard result limit', () => {
    const first = searchIdeas({ query: 'mobile', limit: 5 }).map((result) => result.idea.id);
    const second = searchIdeas({ query: 'mobile', limit: 5 }).map((result) => result.idea.id);
    expect(first).toEqual(second);
    expect(first).toHaveLength(5);
  });

  it('searches dossiers as a separate, lazy-loaded result type', async () => {
    const results = await searchResearch('Dinner Decision');
    expect(results[0]?.document.slug).toBe('dinner-decision-deep-dive');
    expect(results[0]?.matchedFields).toContain('title');
  });

  it('centers a research snippet on the complete matched phrase', async () => {
    const [result] = await searchResearch('Media Hash List');
    expect(result?.matchedText).toBe('Media Hash List');
    expect(result?.snippet).toContain('Media Hash List');
  });
});
