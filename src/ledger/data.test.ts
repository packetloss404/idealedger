import { describe, expect, it } from 'vitest';

import {
  getIdeaById,
  getResearchMapping,
  getResearchMetadataForIdea,
  getResearchProvenance,
  getResearchReferenceProvenance,
  ideas,
  ledgerCounts,
  loadResearchRepository,
  researchMetadata,
  researchProvenance,
  tagOptions,
} from './index';

describe('generated ledger repository', () => {
  it('exposes the committed corpus without losing records', () => {
    expect(ideas).toHaveLength(152);
    expect(researchMetadata).toHaveLength(12);
    expect(ledgerCounts).toEqual({
      dossiers: 12,
      ideas: 152,
      researchEdges: 145,
      searchDocuments: 164,
    });
    expect(new Set(ideas.map((idea) => idea.id)).size).toBe(ideas.length);
    expect(researchProvenance).toHaveLength(ideas.length);
    expect(
      researchProvenance.reduce((count, provenance) => count + provenance.references.length, 0),
    ).toBe(ledgerCounts.researchEdges);
  });

  it('keeps evidence mapping honest', () => {
    expect(getResearchMapping('lot-match')).toBe('heading');
    expect(getResearchMapping('allergy-readback-handshake')).toBe('mention');
    expect(getResearchMapping('warranty-return-tracker')).toBe('unmapped');
    expect(getResearchMapping('afterglow')).toBe('none');
    expect(getResearchProvenance('afterglow')).toMatchObject({
      ideaId: 'afterglow',
      quality: 'none',
      references: [],
    });
    expect(getResearchMetadataForIdea('afterglow')).toEqual([]);
    expect(getResearchMetadataForIdea('lot-match').map((document) => document.slug)).toEqual([
      'idea-mining-loop-2026-08-09',
    ]);
  });

  it('loads full Markdown research only through the async repository', async () => {
    const repository = await loadResearchRepository();
    expect(repository.documents).toHaveLength(12);
    expect(repository.getBySlug('idea-mining-loop-2026-08-09')?.markdown).toContain('LotMatch');
    expect(repository.getForIdea('afterglow')).toEqual([]);
  });

  it.each([
    ['crash-recoverable-field-recorder', 'conditional-survivor-crashtape'],
    ['weed-check', '2-weedcheck--strongest-shipaton-candidate'],
    ['lot-match', '1-lotmatch--strongest-business-candidate'],
    ['fabric-bolt-job-gate', 'fresh-survivor-cutbolt'],
  ])('exposes a generator-owned heading anchor for %s', (ideaId, expectedAnchor) => {
    const provenance = getResearchProvenance(ideaId);
    expect(provenance?.quality).toBe('heading');
    expect(provenance?.references).toHaveLength(1);
    expect(provenance?.references[0]?.heading?.anchor).toBe(expectedAnchor);
  });

  it('does not collapse quality across a multi-dossier idea', () => {
    const provenance = getResearchProvenance('micro-help-network');
    expect(provenance?.quality).toBe('heading');
    expect(provenance?.references.map(({ dossierSlug, quality }) => [dossierSlug, quality])).toEqual([
      ['social-app-opportunity-research', 'unmapped'],
      ['untitled-micro-help-network', 'heading'],
    ]);
    expect(
      getResearchReferenceProvenance('micro-help-network', 'social-app-opportunity-research')
        ?.quality,
    ).toBe('unmapped');
  });

  it('provides stable lookup and tag facets', () => {
    expect(getIdeaById('crash-recoverable-field-recorder')?.name).toBe('CrashTape');
    expect(getIdeaById('not-an-idea')).toBeUndefined();
    expect(tagOptions[0]?.count).toBeGreaterThanOrEqual(tagOptions.at(-1)?.count ?? 0);
    expect(tagOptions).toHaveLength(417);
  });
});
