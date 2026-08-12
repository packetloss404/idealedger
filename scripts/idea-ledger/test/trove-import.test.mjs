import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';

import { stableJson } from '../lib/stable-json.mjs';
import { applyTroveImport, planTroveImport } from '../lib/trove-import.mjs';
import { ValidationError } from '../lib/validate.mjs';
import { readFixtureSource, withFixture } from './helpers.mjs';

function hash(envelope) {
  const payload = {
    schemaVersion: envelope.schemaVersion,
    source: envelope.source,
    records: envelope.records,
  };
  return `sha256:${crypto.createHash('sha256').update(stableJson(payload)).digest('hex')}`;
}

function publication(idea) {
  const reviewedAt = '2026-08-12T20:00:00.000Z';
  const envelope = {
    schemaVersion: 1,
    generatedAt: '2026-08-12T20:01:00.000Z',
    source: {
      workspace: 'trove',
      reviewId: 'review-1',
      reviewedAt,
      reviewedBy: 'Ian',
    },
    records: [{
      idea,
      review: { id: 'review-1', state: 'APPROVED', reviewedAt, reviewedBy: 'Ian' },
    }],
  };
  envelope.contentHash = hash(envelope);
  return envelope;
}

async function withImportFixture(callback) {
  return withFixture(async (root) => {
    await fs.mkdir(path.join(root, 'scripts/idea-ledger/lib'), { recursive: true });
    await fs.cp(path.resolve('scripts/idea-ledger/lib'), path.join(root, 'scripts/idea-ledger/lib'), { recursive: true });
    return callback(root);
  });
}

test('dry run validates a reviewed publication without writing', async () => {
  await withImportFixture(async (root) => {
    const { sourcePath, source } = await readFixtureSource(root);
    const before = await fs.readFile(sourcePath, 'utf8');
    const envelope = publication({ ...source.ideas[0], one_liner: 'Reviewed public wording.' });
    const plan = await planTroveImport(root, envelope);
    assert.deepEqual(plan.changes, [{ id: source.ideas[0].id, action: 'updated' }]);
    assert.equal(await fs.readFile(sourcePath, 'utf8'), before);
  });
});

test('tampered publication is rejected', async () => {
  await withImportFixture(async (root) => {
    const { source } = await readFixtureSource(root);
    const envelope = publication(source.ideas[0]);
    envelope.records[0].idea.one_liner = 'Changed after approval';
    await assert.rejects(() => planTroveImport(root, envelope), (error) => {
      assert.ok(error instanceof ValidationError);
      assert.match(error.errors.join('\n'), /contentHash does not match/);
      return true;
    });
  });
});

test('unapproved publication is rejected', async () => {
  await withImportFixture(async (root) => {
    const { source } = await readFixtureSource(root);
    const envelope = publication(source.ideas[0]);
    envelope.records[0].review.state = 'DRAFT';
    envelope.contentHash = hash(envelope);
    await assert.rejects(() => planTroveImport(root, envelope), ValidationError);
  });
});

test('apply updates canonical source, generated artifacts, and public receipt', async () => {
  await withImportFixture(async (root) => {
    const { sourcePath, source } = await readFixtureSource(root);
    const envelope = publication({ ...source.ideas[0], decision_reason: 'A newly reviewed decision.' });
    const result = await applyTroveImport(root, envelope);
    assert.equal(result.changes[0].action, 'updated');
    const updated = JSON.parse(await fs.readFile(sourcePath, 'utf8'));
    assert.equal(updated.ideas[0].decision_reason, 'A newly reviewed decision.');
    const receipt = JSON.parse(await fs.readFile(path.join(root, 'docs/imports/trove-publication-receipts.json'), 'utf8'));
    assert.equal(receipt.publications[0].reviewId, 'review-1');
    assert.ok(await fs.stat(path.join(root, 'src/generated/idea-ledger/manifest.json')));
  });
});

test('apply preserves existing canonical idea order and appends new records', async () => {
  await withImportFixture(async (root) => {
    const { sourcePath, source } = await readFixtureSource(root);
    const second = { ...structuredClone(source.ideas[0]), id: 'zeta-idea', name: 'Zeta Idea' };
    source.ideas.push(second);
    await fs.writeFile(sourcePath, stableJson(source));
    const created = { ...structuredClone(source.ideas[0]), id: 'alpha-new', name: 'Alpha New' };
    await applyTroveImport(root, publication(created));
    const updated = JSON.parse(await fs.readFile(sourcePath, 'utf8'));
    assert.deepEqual(updated.ideas.map((idea) => idea.id), [source.ideas[0].id, 'zeta-idea', 'alpha-new']);
  });
});
