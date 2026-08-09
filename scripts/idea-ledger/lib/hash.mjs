import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';

export function hashBuffer(buffer) {
  return `sha256:${crypto.createHash('sha256').update(buffer).digest('hex')}`;
}

export async function readSourceSnapshot(repoRoot, relativePaths) {
  const paths = [...new Set(relativePaths)].sort();
  const buffers = new Map();
  const sourceFiles = [];
  const aggregate = crypto.createHash('sha256');

  for (const relativePath of paths) {
    const buffer = await fs.readFile(path.resolve(repoRoot, relativePath));
    const sha256 = hashBuffer(buffer);
    buffers.set(relativePath, buffer);
    sourceFiles.push({ path: relativePath, sha256, bytes: buffer.byteLength });
    aggregate.update(relativePath, 'utf8');
    aggregate.update('\0');
    aggregate.update(sha256, 'utf8');
    aggregate.update('\0');
  }

  return {
    buffers,
    sourceFiles,
    sourceHash: `sha256:${aggregate.digest('hex')}`,
  };
}
