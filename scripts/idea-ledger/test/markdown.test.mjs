import assert from 'node:assert/strict';
import test from 'node:test';

import { buildArtifacts } from '../lib/build.mjs';
import { withFixture } from './helpers.mjs';

test('Markdown extraction preserves searchable content and deterministic heading anchors', async () => {
  await withFixture(async (root) => {
    const result = await buildArtifacts(root);
    const document = result.artifacts['research-documents.json'].documents[0];
    assert.deepEqual(
      document.headings.map((heading) => heading.anchor),
      ['fixture-idea-research', 'details', 'details-1']
    );
    assert.match(document.plainText, /Nested item/);
    assert.match(document.plainText, /Stable/);
    assert.equal(document.links.find((link) => link.url === '#details').kind, 'local');
    assert.equal(document.links.find((link) => link.url === 'https://example.com/docs').kind, 'external');
  });
});
