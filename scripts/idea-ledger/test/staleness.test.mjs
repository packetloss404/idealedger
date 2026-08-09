import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';

import { OUTPUT_DIRECTORY } from '../lib/build.mjs';
import { cliPath, withFixture } from './helpers.mjs';

function runCli(root, command) {
  return spawnSync(process.execPath, [cliPath, command], { cwd: root, encoding: 'utf8' });
}

async function readGenerated(root) {
  const directory = path.join(root, OUTPUT_DIRECTORY);
  const files = (await fs.readdir(directory)).sort();
  return Object.fromEntries(
    await Promise.all(files.map(async (file) => [file, await fs.readFile(path.join(directory, file))]))
  );
}

test('check is zero-write and reports stale generated files', async () => {
  await withFixture(async (root) => {
    assert.equal(runCli(root, 'generate').status, 0);
    const before = await readGenerated(root);
    await fs.appendFile(path.join(root, 'docs/RESEARCH.md'), '\nChanged after generation.\n');
    const check = runCli(root, 'check');
    assert.equal(check.status, 1);
    assert.match(check.stderr, /stale/i);
    const after = await readGenerated(root);
    assert.deepEqual(after, before);
  });
});
