import assert from 'node:assert/strict';
import test from 'node:test';

import { buildArtifacts } from '../lib/build.mjs';
import { repoRoot } from './helpers.mjs';

test('current canonical corpus produces the expected Phase 0 inventory', async () => {
  const result = await buildArtifacts(repoRoot);
  const counts = result.artifacts['manifest.json'].counts;
  const quality = result.artifacts['quality-report.json'];
  assert.deepEqual(counts, {
    ideas: 245,
    dossiers: 16,
    researchEdges: 257,
    searchDocuments: 261,
  });
  assert.equal(quality.counts.headingMatchedIdeas, 131);
  assert.equal(quality.counts.mentionOnlyIdeas, 96);
  assert.equal(quality.counts.dossierRefsWithoutMention, 16);
  assert.equal(quality.counts.ideasWithoutResearch, 11);
  assert.equal(quality.counts.headingReferences, 138);
  assert.equal(quality.counts.mentionReferences, 103);
  assert.equal(quality.counts.unmappedReferences, 16);
  assert.equal(quality.tagStats.assignments, 1148);
  assert.equal(quality.tagStats.unique, 611);
  assert.equal(result.snapshot.sourceFiles.length, 17);

  const provenanceByIdea = new Map(
    quality.researchProvenance.map((provenance) => [provenance.ideaId, provenance])
  );
  for (const [ideaId, anchor, referenceCount] of [
    ['crash-recoverable-field-recorder', 'conditional-survivor-crashtape', 3],
    ['weed-check', '2-weedcheck--strongest-shipaton-candidate', 1],
    ['lot-match', '1-lotmatch--strongest-business-candidate', 1],
    ['fabric-bolt-job-gate', 'fresh-survivor-cutbolt', 1],
  ]) {
    const provenance = provenanceByIdea.get(ideaId);
    assert.equal(provenance.quality, 'heading');
    assert.equal(provenance.references.length, referenceCount);
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
