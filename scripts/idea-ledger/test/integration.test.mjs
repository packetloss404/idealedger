import assert from 'node:assert/strict';
import test from 'node:test';

import { buildArtifacts } from '../lib/build.mjs';
import { repoRoot } from './helpers.mjs';

test('current canonical corpus produces the expected Phase 0 inventory', async () => {
  const result = await buildArtifacts(repoRoot);
  const counts = result.artifacts['manifest.json'].counts;
  const quality = result.artifacts['quality-report.json'];
  assert.deepEqual(counts, {
    ideas: 348,
    dossiers: 49,
    focusGroupStudies: 33,
    researchEdges: 500,
    searchDocuments: 397,
  });
  assert.equal(quality.counts.headingMatchedIdeas, 211);
  assert.equal(quality.counts.mentionOnlyIdeas, 117);
  assert.equal(quality.counts.dossierRefsWithoutMention, 80);
  assert.equal(quality.counts.ideasWithoutResearch, 9);
  assert.equal(quality.counts.headingReferences, 253);
  assert.equal(quality.counts.mentionReferences, 167);
  assert.equal(quality.counts.unmappedReferences, 80);
  assert.equal(quality.tagStats.assignments, 1655);
  assert.equal(quality.tagStats.unique, 775);
  assert.equal(result.snapshot.sourceFiles.length, 51);

  const focusGroups = result.artifacts['focus-groups.json'];
  assert.equal(focusGroups.counts.studies, 33);
  assert.equal(focusGroups.counts.segments, 169);
  assert.equal(focusGroups.counts.recruitedStudies, 0);
  assert.equal(focusGroups.counts.simulatedStudies, 33);
  assert.deepEqual(result.artifacts['routes.json'].focusGroupRoutes, [
    '/focus-groups',
    '/focus-groups/loop-social-synthetic-panel',
    '/focus-groups/round-11-focus-group-01',
    '/focus-groups/round-11-focus-group-02',
    '/focus-groups/round-11-focus-group-03',
    '/focus-groups/round-11-focus-group-04',
    '/focus-groups/round-11-focus-group-05',
    '/focus-groups/round-11-focus-group-06',
    '/focus-groups/round-11-focus-group-07',
    '/focus-groups/round-11-focus-group-08',
    '/focus-groups/round-11-focus-group-09',
    '/focus-groups/round-11-focus-group-10',
    '/focus-groups/round-11-focus-group-11',
    '/focus-groups/round-11-focus-group-12',
    '/focus-groups/round-11-focus-group-13',
    '/focus-groups/round-11-focus-group-14',
    '/focus-groups/round-11-focus-group-15',
    '/focus-groups/round-11-focus-group-16',
    '/focus-groups/round-11-focus-group-17',
    '/focus-groups/round-11-focus-group-18',
    '/focus-groups/round-11-focus-group-19',
    '/focus-groups/round-11-focus-group-20',
    '/focus-groups/round-11-focus-group-21',
    '/focus-groups/round-11-focus-group-22',
    '/focus-groups/round-11-focus-group-23',
    '/focus-groups/round-11-focus-group-24',
    '/focus-groups/round-11-focus-group-25',
    '/focus-groups/round-11-focus-group-26',
    '/focus-groups/round-11-focus-group-27',
    '/focus-groups/round-11-focus-group-28',
    '/focus-groups/round-11-focus-group-29',
    '/focus-groups/round-11-focus-group-30',
    '/focus-groups/round12-mclovin-sweep',
    '/focus-groups/xprize-persona-synthesis',
  ]);
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
    ['weed-check', '2-weedcheck--strongest-shipaton-candidate', 4],
    ['lot-match', '1-lotmatch--strongest-business-candidate', 4],
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
