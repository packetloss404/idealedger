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

## Reviewed Trove publications

Trove remains the private research-and-decision workspace. This repository accepts only a
minimal reviewed projection containing canonical public idea fields and approval metadata. It
does not accept raw sources, passages, private review notes, agent logs, or unfinished research.

Preview an approved publication without writing:

```bash
npm run ideas:import-trove -- /absolute/path/to/publication.json
```

After reviewing the plan, apply it and regenerate the public archive atomically:

```bash
npm run ideas:import-trove -- /absolute/path/to/publication.json --apply
```

The importer validates the v1 envelope, recomputes its reviewed-content hash, requires every
record to be `APPROVED`, rejects duplicate IDs and missing public dossiers, updates the canonical
database, regenerates deterministic artifacts, and records a public-safe receipt. Commit, push,
and Pages deployment are orchestrated from Trove only when its explicit publication command is
given those separate flags; importing never grants approval by itself.
