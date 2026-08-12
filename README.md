# Idea Ledger

Idea Ledger is a read-only decision archive for searching product ideas, reviewing why they survived or died, and comparing their existing validation gates. It keeps rejected ideas visible so old work compounds instead of disappearing into an archive.

Live site: https://packetloss404.github.io/idealedger/

The current corpus contains 407 ideas, 52 research dossiers, and 33 method-labeled focus-group studies. The Ledger is a durable, cross-hackathon think tank-not a strategy archive for one contest. `docs/idea-database.json`, `docs/focus-groups.json`, and their linked Markdown dossiers are canonical; deterministic build artifacts under `src/generated/idea-ledger/` are disposable and must never be edited by hand.

**Current active build:** [BackPocket.help](https://backpocket.help/) is an AI-operated, human-finished local rescue-service prototype for the [Build with Gemini XPRIZE](https://xprize.devpost.com/). At the August 10 verification point, the XPRIZE deadline was August 17, 2026 at 1:00pm PDT—about one week away, not 51 days. See [`ACTIVE-HACKATHON-CONTEXT-BACKPOCKET-2026-08-10.md`](docs/ACTIVE-HACKATHON-CONTEXT-BACKPOCKET-2026-08-10.md). RevenueCat Shipaton is the separate ~51-day research track.

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
- `docs/focus-groups.json` — canonical method-labeled focus-group studies and idea outcomes
- `docs/*.md` — canonical research dossiers
- `docs/RESEARCH-LOOP-RUNBOOK.md` — protocol for the autonomous research loop (queue-driven, self-falsifying, self-persisting)
- `research/loop-queue.json` — live hypothesis queue with falsifiable gates and kill conditions
- `research/loop-state.json` — per-tick runtime state for resumption across sessions
- `research/loop-log.jsonl` — append-only tick log for retrospective analysis
- `scripts/idea-ledger/` — schema validation, deterministic generation, and export checks
- `src/generated/idea-ledger/` — committed generated catalog, routes, provenance, and search documents
- `src/ledger/` — typed search, facets, URL state, comparison, and provenance domain
- `src/web/` — responsive application UI
- `tests/e2e/` — browser retrieval, routing, comparison, accessibility, and responsive acceptance tests

## Autonomous research loop

The corpus runs an overnight-style research loop per `docs/RESEARCH-LOOP-RUNBOOK.md`. The loop:

- Reads the queue (`research/loop-queue.json`) and picks the lowest-priority `pending` entry.
- Runs a six-step tick protocol with a per-tick budget (20 web searches, 12 page fetches, 1 output write).
- Self-falsifies against the entry's gate and kill conditions.
- Persists findings to the canonical corpus on success, tombstones on kill.
- Self-terminates when the queue empties, three consecutive low-information-gain ticks fire, or a kill file is created at `research/loop-kill`.
- Re-schedules itself every 30 minutes via `mavis cron self` for unattended all-night runs.

The agent cannot make outreach calls to real operators; entries that require human contact are marked `needs_human` and skipped.

Phase 1 is intentionally read-only. It does not infer confidence, evidence quality, active queues, or historical decisions that the v1 schema cannot support.

## Release

Every push to `main` runs the full validation and browser suite, scans the public export, records release evidence, and deploys the exact verified artifact to GitHub Pages. Manual releases remain available and require an explicitly approved 40-character commit SHA.
