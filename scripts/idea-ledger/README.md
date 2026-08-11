# Idea Ledger generator

`docs/idea-database.json`, `docs/focus-groups.json`, and their referenced Markdown files are canonical. Files under
`src/generated/idea-ledger/` are deterministic, disposable build artifacts and must never be
edited by hand.

Commands:

- `npm run ideas:validate` validates source structure, paths, and Markdown without writing.
- `npm run ideas:generate` validates and atomically writes generated artifacts.
- `npm run ideas:check` performs a zero-write staleness check.
- `npm run ideas:test` runs isolated fixture and current-corpus tests.

The generator intentionally does not check external URLs over the network, infer schema v2
fields, or attribute a dossier URL to an individual idea claim. Those operations require
review and are not deterministic build steps.
