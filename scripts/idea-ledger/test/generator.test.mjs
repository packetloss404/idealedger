import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';

import { buildArtifacts, verifySnapshotUnchanged } from '../lib/build.mjs';
import { ValidationError } from '../lib/validate.mjs';
import { withFixture } from './helpers.mjs';

test('two builds are byte-identical and contain no wall-clock field', async () => {
  await withFixture(async (root) => {
    const first = await buildArtifacts(root);
    const second = await buildArtifacts(root);
    assert.deepEqual(first.outputBytes, second.outputBytes);
    assert.equal('generatedAt' in first.artifacts['manifest.json'], false);
  });
});

test('source mutation changes the aggregate hash and invalidates a prior snapshot', async () => {
  await withFixture(async (root) => {
    const first = await buildArtifacts(root);
    await fs.appendFile(path.join(root, 'docs/RESEARCH.md'), '\nA material source change.\n');
    const second = await buildArtifacts(root);
    assert.notEqual(first.snapshot.sourceHash, second.snapshot.sourceHash);
    await assert.rejects(() => verifySnapshotUnchanged(root, first.snapshot), ValidationError);
  });
});

test('idea and dossier search documents remain separate', async () => {
  await withFixture(async (root) => {
    const result = await buildArtifacts(root);
    const documents = result.artifacts['search-documents.json'].documents;
    const idea = documents.find((document) => document.type === 'idea');
    const research = documents.find((document) => document.type === 'research');
    assert.deepEqual(Object.keys(idea.fields).sort(), [
      'aliases',
      'decisionReason',
      'name',
      'oneLiner',
      'resurrectionTrigger',
      'tags',
    ]);
    assert.deepEqual(Object.keys(research.fields).sort(), ['body', 'headings', 'title']);
  });
});
