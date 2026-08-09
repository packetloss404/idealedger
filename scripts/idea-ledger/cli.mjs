#!/usr/bin/env node

import fs from 'node:fs/promises';
import path from 'node:path';

import writeFileAtomic from 'write-file-atomic';

import {
  buildArtifacts,
  OUTPUT_DIRECTORY,
  OUTPUT_FILES,
  verifySnapshotUnchanged,
} from './lib/build.mjs';
import { ValidationError } from './lib/validate.mjs';

function printSummary(result, action) {
  const counts = result.artifacts['manifest.json'].counts;
  const quality = result.artifacts['quality-report.json'].counts;
  console.log(
    `Idea Ledger ${action}: ${counts.ideas} ideas, ${counts.dossiers} dossiers, ` +
      `${counts.researchEdges} research edges, ${counts.searchDocuments} search documents`
  );
  console.log(`Source hash: ${result.snapshot.sourceHash}`);
  console.log(
    `Quality: ${quality.headingMatchedIdeas} heading matches, ${quality.mentionOnlyIdeas} mention-only, ` +
      `${quality.dossierRefsWithoutMention} unmatched refs, ${quality.ideasWithoutResearch} without research`
  );
  if (result.warnings.length > 0) console.log(`Warnings: ${result.warnings.length} (see quality-report.json)`);
}

async function generate(repoRoot, result) {
  await verifySnapshotUnchanged(repoRoot, result.snapshot);
  const outputDirectory = path.resolve(repoRoot, OUTPUT_DIRECTORY);
  await fs.mkdir(outputDirectory, { recursive: true });
  for (const filename of OUTPUT_FILES) {
    await writeFileAtomic(path.join(outputDirectory, filename), result.outputBytes[filename]);
  }
}

async function check(repoRoot, result) {
  await verifySnapshotUnchanged(repoRoot, result.snapshot);
  const outputDirectory = path.resolve(repoRoot, OUTPUT_DIRECTORY);
  let actualFiles;
  try {
    actualFiles = (await fs.readdir(outputDirectory)).sort();
  } catch (error) {
    if (error.code === 'ENOENT') throw new ValidationError([`${OUTPUT_DIRECTORY} does not exist; run ideas:generate`]);
    throw error;
  }
  const errors = [];
  for (const filename of OUTPUT_FILES) {
    try {
      const actual = await fs.readFile(path.join(outputDirectory, filename));
      if (!actual.equals(result.outputBytes[filename])) errors.push(`${filename} is stale`);
    } catch (error) {
      if (error.code === 'ENOENT') errors.push(`${filename} is missing`);
      else throw error;
    }
  }
  for (const filename of actualFiles.filter((candidate) => !OUTPUT_FILES.includes(candidate))) {
    errors.push(`${filename} is an unexpected generated file`);
  }
  if (errors.length > 0) throw new ValidationError(errors, result.warnings);
}

async function main() {
  const command = process.argv[2];
  if (!['validate', 'generate', 'check'].includes(command)) {
    console.error('Usage: node scripts/idea-ledger/cli.mjs <validate|generate|check>');
    process.exitCode = 2;
    return;
  }

  const repoRoot = process.cwd();
  const result = await buildArtifacts(repoRoot);
  if (command === 'generate') await generate(repoRoot, result);
  if (command === 'check') await check(repoRoot, result);
  printSummary(result, command === 'validate' ? 'validated' : command === 'generate' ? 'generated' : 'checked');
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
