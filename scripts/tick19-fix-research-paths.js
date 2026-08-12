// tick19-fix-research-paths.js — fix research paths in the 2 new tick-19 records
// (remove non-docs/ paths that fail schema validation).

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const dbPath = join(root, 'docs', 'idea-database.json');

const db = JSON.parse(readFileSync(dbPath, 'utf8'));
let updated = 0;
for (const idea of db.ideas) {
  if (idea.id === 'pet-fairquote' || idea.id === 'pet-farewell-kit') {
    idea.research = ['docs/RESEARCH-MARATHON-2026-08-11.md', 'docs/RESEARCH-MARATHON-2026-08-11-TRACKER.md'];
    updated++;
  }
}
db.updated_at = '2026-08-12';
writeFileSync(dbPath, JSON.stringify(db, null, 2) + '\n', 'utf8');
console.log(`Updated ${updated} records to docs/-only research paths.`);
