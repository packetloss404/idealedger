import assert from 'node:assert/strict';
import test from 'node:test';

import { buildArtifacts } from '../lib/build.mjs';
import { repoRoot } from './helpers.mjs';

test('current canonical corpus produces the expected Phase 0 inventory', async () => {
  const result = await buildArtifacts(repoRoot);
  const counts = result.artifacts['manifest.json'].counts;
  const quality = result.artifacts['quality-report.json'];
  assert.deepEqual(counts, {
    focusGroupStudies: 2,
    ideas: 307,
    dossiers: 20,
    focusGroupStudies: 2,
    researchEdges: 354,
    searchDocuments: 327,
  });
  assert.equal(quality.counts.headingMatchedIdeas, 183);
  assert.equal(quality.counts.mentionOnlyIdeas, 110);
  assert.equal(quality.counts.dossierRefsWithoutMention, 16);
  assert.equal(quality.counts.ideasWithoutResearch, 9);
  assert.equal(quality.counts.headingReferences, 213);
  assert.equal(quality.counts.mentionReferences, 125);
  assert.equal(quality.counts.unmappedReferences, 16);
  assert.equal(quality.tagStats.assignments, 1461);
  assert.equal(quality.tagStats.unique, 711);
  assert.equal(result.snapshot.sourceFiles.length, 22);

  const focusGroups = result.artifacts['focus-groups.json'];
  assert.equal(focusGroups.counts.studies, 2);
  assert.equal(focusGroups.counts.segments, 13);
  assert.equal(focusGroups.counts.recruitedStudies, 0);
  assert.equal(focusGroups.counts.simulatedStudies, 2);
  assert.ok(
    focusGroups.studies
      .find((study) => study.id === 'xprize-persona-synthesis')
      .linkedIdeaIds.includes('lot-match')
  );

  const provenanceByIdea = new Map(
    quality.researchProvenance.map((provenance) => [provenance.ideaId, provenance])
  );
  for (const [ideaId, anchor, referenceCount] of [
    ['crash-recoverable-field-recorder', 'conditional-survivor-crashtape', 4],
    ['weed-check', '2-weedcheck--strongest-shipaton-candidate', 3],
    ['lot-match', '1-lotmatch--strongest-business-candidate', 3],
    ['fabric-bolt-job-gate', 'fresh-survivor-cutbolt', 1],
    ['spin-loop', 'spinloop', 1],
  ]) {
    const provenance = provenanceByIdea.get(ideaId);
    assert.equal(provenance.quality, 'heading');
    assert.equal(provenance.references.length, referenceCount);
    assert.ok(
      provenance.references.some(
        (reference) => reference.quality === 'heading' && reference.heading?.anchor === anchor
      )
    );
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
