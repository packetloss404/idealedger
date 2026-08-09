import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const testDirectory = path.dirname(fileURLToPath(import.meta.url));
export const repoRoot = path.resolve(testDirectory, '../../..');
export const cliPath = path.resolve(repoRoot, 'scripts/idea-ledger/cli.mjs');

export async function withFixture(callback) {
  const temporaryRoot = await fs.mkdtemp(path.join(os.tmpdir(), 'idea-ledger-'));
  try {
    await fs.mkdir(path.join(temporaryRoot, 'schemas/idea-ledger'), { recursive: true });
    await fs.cp(
      path.join(repoRoot, 'schemas/idea-ledger'),
      path.join(temporaryRoot, 'schemas/idea-ledger'),
      { recursive: true }
    );
    await fs.cp(
      path.join(testDirectory, 'fixtures/valid/docs'),
      path.join(temporaryRoot, 'docs'),
      { recursive: true }
    );
    return await callback(temporaryRoot);
  } finally {
    await fs.rm(temporaryRoot, { recursive: true, force: true });
  }
}

export async function readFixtureSource(temporaryRoot) {
  const sourcePath = path.join(temporaryRoot, 'docs/idea-database.json');
  return { sourcePath, source: JSON.parse(await fs.readFile(sourcePath, 'utf8')) };
}

export async function writeFixtureSource(sourcePath, source) {
  await fs.writeFile(sourcePath, `${JSON.stringify(source, null, 2)}\n`);
}
