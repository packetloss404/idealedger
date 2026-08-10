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
    expect(ideas).toHaveLength(307);
    expect(researchMetadata).toHaveLength(19);
    expect(ledgerCounts).toEqual({
      dossiers: 19,
      ideas: 307,
      researchEdges: 343,
      searchDocuments: 326,
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
    expect(getResearchMapping('american-tiktok-alternative')).toBe('mention');
    expect(getResearchMapping('afterglow')).toBe('none');
    expect(getResearchProvenance('afterglow')).toMatchObject({
      ideaId: 'afterglow',
      quality: 'none',
      references: [],
    });
    expect(getResearchMetadataForIdea('afterglow')).toEqual([]);
    expect(getResearchMetadataForIdea('lot-match').map((document) => document.slug)).toEqual([
      'idea-mining-loop-2026-08-09',
      'hackathon-research-synthesis-2026-08-10',
    ]);
  });

  it('loads full Markdown research only through the async repository', async () => {
    const repository = await loadResearchRepository();
    expect(repository.documents).toHaveLength(19);
    expect(repository.getBySlug('idea-mining-loop-2026-08-09')?.markdown).toContain('LotMatch');
    expect(repository.getForIdea('afterglow')).toEqual([]);
  });

  it.each([
    ['crash-recoverable-field-recorder', 'conditional-survivor-crashtape', 4],
    ['weed-check', '2-weedcheck--strongest-shipaton-candidate', 2],
    ['lot-match', '1-lotmatch--strongest-business-candidate', 2],
    ['fabric-bolt-job-gate', 'fresh-survivor-cutbolt', 1],
    ['spin-loop', 'spinloop', 1],
  ])('exposes a generator-owned heading anchor for %s', (ideaId, expectedAnchor, count) => {
    const provenance = getResearchProvenance(ideaId);
    expect(provenance?.quality).toBe('heading');
    expect(provenance?.references).toHaveLength(count);
    expect(
      provenance?.references.some((reference) => reference.heading?.anchor === expectedAnchor),
    ).toBe(true);
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
    expect(tagOptions).toHaveLength(711);
  });
});
