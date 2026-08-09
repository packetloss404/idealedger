import assert from 'node:assert/strict';
import test from 'node:test';

import { buildArtifacts } from '../lib/build.mjs';
import { repoRoot } from './helpers.mjs';

test('current canonical corpus produces the expected Phase 0 inventory', async () => {
  const result = await buildArtifacts(repoRoot);
  const counts = result.artifacts['manifest.json'].counts;
  const quality = result.artifacts['quality-report.json'];
  assert.deepEqual(counts, {
    ideas: 152,
    dossiers: 12,
    researchEdges: 145,
    searchDocuments: 164,
  });
  assert.equal(quality.counts.headingMatchedIdeas, 50);
  assert.equal(quality.counts.mentionOnlyIdeas, 80);
  assert.equal(quality.counts.dossierRefsWithoutMention, 13);
  assert.equal(quality.counts.ideasWithoutResearch, 11);
  assert.equal(quality.counts.headingReferences, 51);
  assert.equal(quality.counts.mentionReferences, 81);
  assert.equal(quality.counts.unmappedReferences, 13);
  assert.equal(quality.tagStats.assignments, 671);
  assert.equal(quality.tagStats.unique, 417);
  assert.equal(result.snapshot.sourceFiles.length, 13);

  const provenanceByIdea = new Map(
    quality.researchProvenance.map((provenance) => [provenance.ideaId, provenance])
  );
  for (const [ideaId, anchor] of [
    ['crash-recoverable-field-recorder', 'conditional-survivor-crashtape'],
    ['weed-check', '2-weedcheck--strongest-shipaton-candidate'],
    ['lot-match', '1-lotmatch--strongest-business-candidate'],
    ['fabric-bolt-job-gate', 'fresh-survivor-cutbolt'],
  ]) {
    const provenance = provenanceByIdea.get(ideaId);
    assert.equal(provenance.quality, 'heading');
    assert.equal(provenance.references.length, 1);
    assert.equal(provenance.references[0].quality, 'heading');
    assert.equal(provenance.references[0].heading.anchor, anchor);
  }

  const multiReference = provenanceByIdea.get('micro-help-network');
  assert.equal(multiReference.quality, 'heading');
  assert.deepEqual(
    multiReference.references.map((reference) => [reference.dossierSlug, reference.quality]),
    [
      ['social-app-opportunity-research', 'unmapped'],
      ['untitled-micro-help-network', 'heading'],
    ]
  );
});
