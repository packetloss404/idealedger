import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';

import Ajv2020 from 'ajv/dist/2020.js';
import addFormats from 'ajv-formats';
import writeFileAtomic from 'write-file-atomic';

import { stableJson } from './stable-json.mjs';
import { buildArtifacts, OUTPUT_DIRECTORY, OUTPUT_FILES, verifySnapshotUnchanged } from './build.mjs';
import { ValidationError } from './validate.mjs';

const PUBLICATION_SCHEMA_PATH = 'schemas/idea-ledger/trove-publication-v1.schema.json';
const SOURCE_SCHEMA_PATH = 'schemas/idea-ledger/source-v1.schema.json';
const SOURCE_PATH = 'docs/idea-database.json';
const RECEIPT_PATH = 'docs/imports/trove-publication-receipts.json';

function publicationPayload(envelope) {
  return {
    schemaVersion: envelope.schemaVersion,
    source: envelope.source,
    records: envelope.records,
  };
}

export function publicationContentHash(envelope) {
  return `sha256:${crypto.createHash('sha256').update(stableJson(publicationPayload(envelope))).digest('hex')}`;
}

function formatAjvErrors(errors = []) {
  return errors.map((error) => `publication${error.instancePath || '/'} ${error.message}`);
}

export async function validateTrovePublication(repoRoot, envelope) {
  const sourceSchema = JSON.parse(
    await fs.readFile(path.resolve(repoRoot, SOURCE_SCHEMA_PATH), 'utf8')
  );
  const publicationSchema = JSON.parse(
    await fs.readFile(path.resolve(repoRoot, PUBLICATION_SCHEMA_PATH), 'utf8')
  );
  const ajv = new Ajv2020({ allErrors: true, strict: true });
  addFormats(ajv);
  ajv.addSchema(sourceSchema);
  const validate = ajv.compile(publicationSchema);
  const errors = validate(envelope) ? [] : formatAjvErrors(validate.errors);

  const expectedHash = publicationContentHash(envelope);
  if (envelope.contentHash !== expectedHash) {
    errors.push(`publication/contentHash does not match reviewed payload: expected ${expectedHash}`);
  }

  const ids = new Set();
  for (const [index, record] of (envelope.records ?? []).entries()) {
    if (ids.has(record.idea.id)) errors.push(`publication/records/${index}/idea/id is duplicated`);
    ids.add(record.idea.id);
    if (record.review.id !== envelope.source.reviewId) {
      errors.push(`publication/records/${index}/review/id does not match source.reviewId`);
    }
    if (record.review.reviewedAt !== envelope.source.reviewedAt) {
      errors.push(`publication/records/${index}/review/reviewedAt does not match source.reviewedAt`);
    }
    if (record.review.reviewedBy !== envelope.source.reviewedBy) {
      errors.push(`publication/records/${index}/review/reviewedBy does not match source.reviewedBy`);
    }
  }

  if (errors.length > 0) throw new ValidationError(errors);
  return { expectedHash, ideaIds: [...ids].sort() };
}

function mergeIdeas(source, envelope) {
  const published = new Map(envelope.records.map((record) => [record.idea.id, record.idea]));
  const merged = source.ideas.map((idea) => published.get(idea.id) ?? idea);
  const existingIds = new Set(source.ideas.map((idea) => idea.id));
  const created = [...published.values()]
    .filter((idea) => !existingIds.has(idea.id))
    .sort((left, right) => left.id.localeCompare(right.id));
  return {
    ...source,
    updated_at: [source.updated_at, envelope.source.reviewedAt.slice(0, 10)].sort().at(-1),
    ideas: [...merged, ...created],
  };
}

async function readReceipts(repoRoot) {
  try {
    const parsed = JSON.parse(await fs.readFile(path.resolve(repoRoot, RECEIPT_PATH), 'utf8'));
    if (parsed.schemaVersion !== 1 || !Array.isArray(parsed.publications)) {
      throw new Error(`${RECEIPT_PATH} has an unsupported shape`);
    }
    return parsed;
  } catch (error) {
    if (error.code === 'ENOENT') return { schemaVersion: 1, publications: [] };
    throw error;
  }
}

function mergeReceipt(receipts, envelope, ideaIds) {
  const next = receipts.publications.filter((receipt) => receipt.reviewId !== envelope.source.reviewId);
  next.push({
    reviewId: envelope.source.reviewId,
    reviewedAt: envelope.source.reviewedAt,
    reviewedBy: envelope.source.reviewedBy,
    contentHash: envelope.contentHash,
    ideaIds,
  });
  next.sort((left, right) => left.reviewId.localeCompare(right.reviewId));
  return { schemaVersion: 1, publications: next };
}

async function writeGeneratedArtifacts(repoRoot, result) {
  await verifySnapshotUnchanged(repoRoot, result.snapshot);
  const outputDirectory = path.resolve(repoRoot, OUTPUT_DIRECTORY);
  await fs.mkdir(outputDirectory, { recursive: true });
  for (const filename of OUTPUT_FILES) {
    await writeFileAtomic(path.join(outputDirectory, filename), result.outputBytes[filename]);
  }
}

export async function planTroveImport(repoRoot, envelope) {
  const { ideaIds } = await validateTrovePublication(repoRoot, envelope);
  const source = JSON.parse(await fs.readFile(path.resolve(repoRoot, SOURCE_PATH), 'utf8'));
  const mergedSource = mergeIdeas(source, envelope);
  const currentById = new Map(source.ideas.map((idea) => [idea.id, stableJson(idea)]));
  const changes = envelope.records.map((record) => ({
    id: record.idea.id,
    action: currentById.has(record.idea.id) ?
      currentById.get(record.idea.id) === stableJson(record.idea) ? 'unchanged' : 'updated' :
      'created',
  }));

  const missingResearch = [];
  for (const record of envelope.records) {
    for (const relativePath of record.idea.research) {
      try {
        await fs.access(path.resolve(repoRoot, relativePath));
      } catch {
        missingResearch.push(`${record.idea.id}: ${relativePath}`);
      }
    }
  }
  if (missingResearch.length > 0) {
    throw new ValidationError(missingResearch.map((item) => `publication references a missing public dossier: ${item}`));
  }

  return { source, mergedSource, ideaIds, changes };
}

export async function applyTroveImport(repoRoot, envelope) {
  const plan = await planTroveImport(repoRoot, envelope);
  const sourcePath = path.resolve(repoRoot, SOURCE_PATH);
  const receipts = await readReceipts(repoRoot);
  const nextReceipts = mergeReceipt(receipts, envelope, plan.ideaIds);
  const previousSource = await fs.readFile(sourcePath);
  let previousReceipts = null;
  try {
    previousReceipts = await fs.readFile(path.resolve(repoRoot, RECEIPT_PATH));
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }

  try {
    await writeFileAtomic(sourcePath, stableJson(plan.mergedSource));
    const result = await buildArtifacts(repoRoot);
    await writeGeneratedArtifacts(repoRoot, result);
    await fs.mkdir(path.dirname(path.resolve(repoRoot, RECEIPT_PATH)), { recursive: true });
    await writeFileAtomic(path.resolve(repoRoot, RECEIPT_PATH), stableJson(nextReceipts));
    return { ...plan, result };
  } catch (error) {
    await writeFileAtomic(sourcePath, previousSource);
    if (previousReceipts) {
      await writeFileAtomic(path.resolve(repoRoot, RECEIPT_PATH), previousReceipts);
    } else {
      await fs.rm(path.resolve(repoRoot, RECEIPT_PATH), { force: true });
    }
    try {
      const restored = await buildArtifacts(repoRoot);
      await writeGeneratedArtifacts(repoRoot, restored);
    } catch (restoreError) {
      error.message = `${error.message}\nRollback warning: generated artifacts could not be restored: ${restoreError.message}`;
    }
    throw error;
  }
}
