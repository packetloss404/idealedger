import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';

import { buildArtifacts } from '../lib/build.mjs';
import { ValidationError } from '../lib/validate.mjs';
import { readFixtureSource, withFixture, writeFixtureSource } from './helpers.mjs';

async function expectValidationError(action, pattern) {
  await assert.rejects(action, (error) => {
    assert.ok(error instanceof ValidationError);
    assert.match(error.errors.join('\n'), pattern);
    return true;
  });
}

test('valid fixture builds', async () => {
  await withFixture(async (root) => {
    const result = await buildArtifacts(root);
    assert.equal(result.artifacts['manifest.json'].counts.ideas, 1);
    assert.equal(result.artifacts['manifest.json'].counts.dossiers, 1);
  });
});

test('duplicate IDs fail semantic validation', async () => {
  await withFixture(async (root) => {
    const { sourcePath, source } = await readFixtureSource(root);
    source.ideas.push(structuredClone(source.ideas[0]));
    await writeFixtureSource(sourcePath, source);
    await expectValidationError(() => buildArtifacts(root), /duplicate id/i);
  });
});

test('invalid status fails source schema validation', async () => {
  await withFixture(async (root) => {
    const { sourcePath, source } = await readFixtureSource(root);
    source.ideas[0].status = 'maybe';
    await writeFixtureSource(sourcePath, source);
    await expectValidationError(() => buildArtifacts(root), /must be equal to one of the allowed values/i);
  });
});

test('missing and case-mismatched references fail', async (t) => {
  await t.test('missing', async () => {
    await withFixture(async (root) => {
      const { sourcePath, source } = await readFixtureSource(root);
      source.ideas[0].research = ['docs/MISSING.md'];
      await writeFixtureSource(sourcePath, source);
      await expectValidationError(() => buildArtifacts(root), /missing file/i);
    });
  });
  await t.test('case mismatch', async () => {
    await withFixture(async (root) => {
      const { sourcePath, source } = await readFixtureSource(root);
      source.ideas[0].research = ['docs/research.md'];
      await writeFixtureSource(sourcePath, source);
      await expectValidationError(() => buildArtifacts(root), /path case does not match disk/i);
    });
  });
});

test('path traversal and unsafe URL schemes fail', async (t) => {
  await t.test('path traversal', async () => {
    await withFixture(async (root) => {
      const { sourcePath, source } = await readFixtureSource(root);
      source.ideas[0].research = ['docs/../outside.md'];
      await writeFixtureSource(sourcePath, source);
      await expectValidationError(() => buildArtifacts(root), /must match pattern/i);
    });
  });
  await t.test('unsafe URL', async () => {
    await withFixture(async (root) => {
      await fs.appendFile(path.join(root, 'docs/RESEARCH.md'), '\n[unsafe](javascript:alert(1))\n');
      await expectValidationError(() => buildArtifacts(root), /unsafe link scheme/i);
    });
  });
});
