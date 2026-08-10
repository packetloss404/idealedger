# Idea Ledger

Idea Ledger is a read-only decision archive for searching product ideas, reviewing why they survived or died, and comparing their existing validation gates. It keeps rejected ideas visible so old work compounds instead of disappearing into an archive.

Live site: https://packetloss404.github.io/idealedger/

The current corpus contains 245 ideas and 16 research dossiers. `docs/idea-database.json` and the linked Markdown dossiers are canonical; deterministic build artifacts under `src/generated/idea-ledger/` are disposable and must never be edited by hand.

## Stack

- Vite 8, React 19, and React Router 7
- Static, responsive web deployment
- Deterministic Node-based validation and artifact generation
- Vitest for domain tests and Playwright for browser acceptance tests

Expo 57 was evaluated during Phase 0 and rejected for this frontend. The product is a keyboard-heavy, desktop-first ledger with dense comparisons and semantic Markdown, and it does not use a native mobile primitive. Responsive web is the smaller and more direct implementation.

## Run locally

```bash
npm ci
npm run dev
```

The local server prints its URL in the terminal.

## Validate and test

```bash
npm run check
npm run test:e2e
```

`npm run check` validates the canonical corpus, runs the deterministic generator tests, verifies that committed generated artifacts are current, runs the domain suite, type-checks, and lints.

To regenerate artifacts after an intentional corpus change:

```bash
npm run ideas:generate
npm run ideas:check
```

## Build

```bash
npm run build:web
npm run check:export -- dist
```

Set `VITE_BASE_PATH` when building for a project subpath such as GitHub Pages:

```bash
VITE_BASE_PATH=/idealedger/ npm run build:web
```

On PowerShell:

```powershell
$env:VITE_BASE_PATH='/idealedger/'
npm run build:web
```

## Architecture

- `docs/idea-database.json` — canonical structured records
- `docs/*.md` — canonical research dossiers
- `scripts/idea-ledger/` — schema validation, deterministic generation, and export checks
- `src/generated/idea-ledger/` — committed generated catalog, routes, provenance, and search documents
- `src/ledger/` — typed search, facets, URL state, comparison, and provenance domain
- `src/web/` — responsive application UI
- `tests/e2e/` — browser retrieval, routing, comparison, accessibility, and responsive acceptance tests

Phase 1 is intentionally read-only. It does not infer confidence, evidence quality, active queues, or historical decisions that the v1 schema cannot support.

## Release

Every push to `main` runs the full validation and browser suite, scans the public export, records release evidence, and deploys the exact verified artifact to GitHub Pages. Manual releases remain available and require an explicitly approved 40-character commit SHA.
