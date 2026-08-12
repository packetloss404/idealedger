#!/usr/bin/env node

import fs from 'node:fs/promises';
import path from 'node:path';

import { applyTroveImport, planTroveImport } from './lib/trove-import.mjs';
import { ValidationError } from './lib/validate.mjs';

function usage() {
  console.error('Usage: node scripts/idea-ledger/import-trove.mjs <publication.json> [--apply]');
}

async function main() {
  const args = process.argv.slice(2);
  const apply = args.includes('--apply');
  const positional = args.filter((arg) => arg !== '--apply');
  if (positional.length !== 1) {
    usage();
    process.exitCode = 2;
    return;
  }

  const repoRoot = process.cwd();
  const publicationPath = path.resolve(repoRoot, positional[0]);
  const envelope = JSON.parse(await fs.readFile(publicationPath, 'utf8'));
  const result = apply ?
    await applyTroveImport(repoRoot, envelope) :
    await planTroveImport(repoRoot, envelope);

  console.log(`Trove publication ${apply ? 'applied' : 'validated (dry run)'}: ${result.ideaIds.length} idea(s)`);
  for (const change of result.changes) console.log(`- ${change.action}: ${change.id}`);
  if (!apply) console.log('No files changed. Pass --apply after reviewing this plan.');
}

try {
  await main();
} catch (error) {
  if (error instanceof ValidationError) {
    console.error(error.message);
    for (const detail of error.errors) console.error(`- ${detail}`);
    process.exitCode = 1;
  } else {
    console.error(error.stack ?? error.message);
    process.exitCode = 2;
  }
}

