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
  assert.equal(quality.counts.dossierRefsWithoutMention, 11);
  assert.equal(quality.counts.ideasWithoutResearch, 11);
  assert.equal(quality.tagStats.assignments, 671);
  assert.equal(quality.tagStats.unique, 417);
  assert.equal(result.snapshot.sourceFiles.length, 13);
});
