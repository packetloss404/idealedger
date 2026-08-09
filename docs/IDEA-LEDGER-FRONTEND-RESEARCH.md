# Idea Ledger — Frontend Research and Product Brief

**Date:** 2026-08-09  
**Decision:** Build a thin custom, local-first decision cockpit over the existing JSON and Markdown. Do not build another generic database, roadmap, voting tool, or collaboration platform.

## Product promise

> Never forget an idea, never forget why it died, and never confuse an active idea with an actionable test.

The corpus is mostly negative knowledge: 115 of 152 ideas are `passed_market`, 14 are `passed_scope`, and only 8 are `validating`. The valuable interface is therefore not a gallery of pitches. It is a searchable decision ledger that makes rejection memory compound into better future decisions.

Working product name: **Idea Ledger**.

## Build-versus-buy verdict

Build the thin frontend because the desired workflow is unusual:

1. Search **why ideas died**, not only names and categories.
2. Keep a conditional graveyard with explicit resurrection triggers.
3. Compare new candidates against prior blockers and counterexamples.
4. Surface stale evidence and unresolved research.
5. Maintain one current falsification action and at most two actions queued behind it.
6. Preserve decisions append-only instead of silently rewriting history.

Do not build a custom database, WYSIWYG editor, authentication system, comments, roadmap, voting system, or team collaboration layer.

If cloud collaboration becomes mandatory, **Fibery** is the strongest buy fallback because it supports relations, evidence snippets, custom databases, formulas and reports: https://fibery.com/product-management and https://fibery.com/pricing . If a temporary local view is needed before the custom interface exists, **Obsidian Bases** is the best lightweight interim, although converting one JSON catalog into per-note metadata creates synchronization work: https://obsidian.md/changelog/page/4/

Airtable and Notion can display the records but would create a second source of truth without solving rejection-pattern review. Jira Product Discovery, Productboard and ProdPad optimize ideas toward roadmaps. Dovetail, Condens and Vistaly are strongest when raw interviews and research sessions are the primary objects, not rejected product decisions.

Useful patterns to borrow:

- Jira Product Discovery: saved filtered views and comparison surfaces: https://www.atlassian.com/software/jira/product-discovery/guides/views/overview
- Dovetail: exact evidence highlights that remain linked to source material: https://docs.dovetail.com/help/highlights
- Productboard: evidence-to-feature traceability: https://support.productboard.com/hc/en-us/articles/360058147693-What-is-Productboard
- IdeaScale: a `Reserve` state instead of deletion: https://help.ideascale.com/overview-stages
- Notion: verification expiry and responsible ownership: https://www.notion.com/en-gb/help/wikis-and-verified-pages
- ADRs: decisions are superseded or deprecated rather than erased: https://backstage.io/docs/architecture-decisions/

## Information architecture

Use four primary destinations with global search always available.

### 1. Now

The landing page answers: **What is the single cheapest useful thing to do next?**

- One current test with explicit method and pass/fail threshold.
- At most two `Up next` tests.
- Review inboxes for validating, raw, reconstruction, resurrection-due and evidence-stale ideas.
- Recently closed decisions with the reason, not celebratory counts.

An idea cannot enter `Current test` without a bounded action and falsification condition. `Build the MVP` is not a valid action; `test 100 HTV fixtures and kill below 95% recall` is.

### 2. Ideas

Use a dense ledger, not cards. Each row shows:

- name, status and hackathon fit;
- one-line thesis;
- first sentence of the current decision reason;
- next gate or resurrection condition;
- research round or dossier.

Search names, aliases, tags, thesis, decision reason, resurrection trigger and linked Markdown. Passed ideas remain visible by default so a search prevents reinvention.

Primary facets:

- status;
- hackathon fit;
- controlled domain and phone primitive;
- confirmed blocker pattern;
- research round;
- authoritative-state posture;
- next-action type;
- evidence state and freshness.

Useful saved lenses: `Active gates`, `High-fit ideas we killed`, `Platform blocked`, `Manual second-app ritual`, `No linked research`, `Evidence stale`, and `Unresolved`.

### 3. Patterns

The graveyard becomes a reusable failure-pattern library. Seed these confirmed patterns:

1. exact incumbent or saturated market;
2. platform or API blocked;
3. authoritative state unavailable;
4. manual ritual or second-app friction;
5. false confidence, safety, or truth boundary;
6. weak economics or wrong payer;
7. source-of-truth/setup burden;
8. host feature or easy copy;
9. scope, operations, regulation, or ongoing data maintenance.

Every pattern opens the actual ideas and decision excerpts. Machine suggestions remain visibly unconfirmed until reviewed. Counts are descriptive, not confidence scores.

### 4. Activity

Use an append-only timeline for status changes, test results, new evidence, stale-evidence checks, resurrection and superseding decisions. The original reason is never overwritten.

Comparison is a persistent tray rather than a primary destination.

## Idea detail

Order the detail screen around a decision, not a pitch:

1. **Promise:** name, aliases, thesis, status, fit and controlled facets.
2. **Decision strip:** why it might work, why it is in its current state, and what would change the decision.
3. **Truth checks:** authoritative state, natural behavior, market whitespace, technical feasibility, payer/economics and seven-week demo. Each is `supported`, `hypothesis`, `failed` or `unknown`, with evidence.
4. **Next action:** method, sample, pass threshold, fail threshold and result.
5. **Evidence and history:** exact dossier excerpts, outbound sources and append-only decision events.

Status actions are `Validate`, `Park`, `Pass — market`, `Pass — scope`, and `Resurrect`. Passing requires a reason, blocker pattern and resurrection condition. Resurrecting requires new evidence or a changed constraint plus a next action.

## Comparison

Compare two to four ideas on desktop and two on mobile. Default to `Show decisive differences and unknowns`.

Rows:

- exact user and trigger;
- atomic phone loop;
- authoritative-state owner;
- existing behavior versus added ritual;
- consequence and frequency;
- payer and pricing evidence;
- strongest incumbent or free substitute;
- trust and safety boundary;
- technical truth and seven-week feasibility;
- demo clarity;
- RevenueCat fit;
- cheapest falsification action;
- current decision and resurrection condition.

Do not calculate an aggregate score. WeedCheck can win visual demo, LotMatch can win natural paid workflow, and CrashTape can win control of authoritative state without pretending those truths collapse into one number. The final action is `Make this the next test`, not `Crown winner`.

## Current data audit

The v1 schema is consistent and preserves conclusions well, but it cannot yet support the full workbench honestly.

- 152 records, all with the same ten fields and nonempty identity, status, fit, thesis, decision reason, resurrection trigger and tags.
- 671 tag assignments but 417 unique tags. 298 tags occur once and 64 occur twice; 86.8% of the vocabulary is therefore poor as a corpus-wide facet.
- 141 ideas have dossier references; 11 have none.
- Only 50 of 141 referenced ideas have a reliable heading match in Markdown. Another 80 are mentioned without a direct heading, and 11 cannot be mapped safely by name or alias.
- The dossiers contain 317 unique external URLs but the JSON has no claim-level source attribution.
- No structured blocker, freshness, technical feasibility, monetization, confidence, relation or decision-history fields exist.
- Every idea has resurrection prose, but only 38 of 152 resemble an actionable test. All eight validating ideas do contain numerical gates.

Do not show precise evidence badges until references are anchored. A link to a 30 KB dossier containing dozens of URLs is not claim-level provenance.

## Minimal schema v2

Preserve every v1 string verbatim. Add only the structures needed by the workbench; unknown values stay unknown.

Required concepts:

- `facets: { domains: string[], primitives: string[] }`
- `decision: { reason, blocker_codes[], confidence }`
- `technical_state: feasible | conditional | blocked | unknown`
- `next_test: { trigger, method, pass_criteria }`
- `origin: { recorded_at, round, dossier, anchor, inferred }`
- `last_researched_at`
- `sources[]: { kind, uri, anchor, title, checked_at, supports }`
- `relations[]: { type, idea_id }`
- `decision_history[]`

Use eight controlled blocker codes initially: `competition`, `weak_economics`, `workflow_adoption`, `platform_access`, `data_authority`, `safety_truth`, `scope_operations`, and `feature_not_product`.

Optional only when relevant:

- claim-level `evidence[]`;
- structured monetization and WTP;
- target user and usage frequency;
- competitor metadata.

Keep all 417 original tags as free search keywords. Introduce controlled domains and phone primitives rather than forcing the existing tags into one taxonomy.

## Technical architecture

Extend the existing Expo 57 universal app as a **read-only viewer over build-generated artifacts**.

Canonical inputs:

- `docs/idea-database.json` for structured decisions;
- linked `docs/*.md` dossiers for narrative evidence.

A Node prebuild validator/generator should:

1. validate schema and enums;
2. enforce unique IDs and relation targets;
3. verify local references;
4. parse and sanitize Markdown;
5. generate normalized catalog, search documents, dossier blocks and route manifests under `src/generated/`;
6. fail when generated outputs are stale.

Routes:

- `/ideas`
- `/ideas/[id]`
- `/compare?ids=a,b,c`
- `/research/[slug]`

The corpus is only a few hundred kilobytes, so deterministic in-memory search is correct. Rank exact/prefix names above aliases, controlled facets, tags, thesis, decision reasons and resurrection triggers. Dossier full text should be a separate result type or heavily down-weighted so long research files do not swamp canonical ideas.

Do not use SQLite now. Expo 57 web SQLite is alpha and requires WASM and cross-origin isolation headers: https://docs.expo.dev/versions/v57.0.0/sdk/sqlite/ . Do not use embeddings or AI search before deterministic search and exact provenance work. Expo Router static generation can enumerate all idea and dossier routes: https://docs.expo.dev/router/web/static-rendering/

The deployed static app cannot safely write repository files. V1 should be read-only with URL/local saved views. Later, reviews may export a JSON Patch for a local validated tool to apply. If direct authoring becomes mandatory, build a separate loopback-only Node service with schema validation, file locking, atomic writes and Git diff—not a second canonical database.

## Enrichment plan

1. **Protect the corpus first:** the entire `docs/` directory is currently untracked in Git. Version it before frontend work.
2. Generate a candidate v2 file without overwriting v1.
3. Copy all existing prose and tags exactly.
4. Mechanically infer round/date only when certain and mark inference.
5. Add reviewed heading anchors for the 50 direct matches; assist but manually confirm the 80 mention-only mappings; resolve the 11 mismatches and 11 no-ref records explicitly.
6. Suggest controlled facets and blocker codes, but require human confirmation.
7. Add one honest `snapshot_import` history event per record; do not fabricate historical dates.
8. Publish v2 only after record-by-record diff and validation.

### New web research now

- Two high-fit unresearched records: Local Coffee Discovery and Resume Reuse.
- Narrow volatile refreshes for Confirmed Spoken Details, Two-Source Solar Check, DoorHold, CancelBy and CrashTape.
- Citation backfill for Handoff, Creator Portability, Screenshot Inbox and Legalese Translator if their existing decisions need to be defensible in the UI.

### Experiments instead of more web research

- LotMatch needs a real multi-brand carton-label corpus and field compliance.
- WeedCheck needs physical HTV fixtures and blind optical testing.
- CutBolt needs real bolt labels and workroom interviews.
- Confirmed Spoken Details additionally needs Deaf and hard-of-hearing co-design.

Do not re-research all 115 passed-market ideas. Mechanically enrich them and reopen research only when a resurrection condition changes or evidence becomes stale.

## MVP sequence

0. Version the corpus; add validator, source hash and deterministic generator.
1. Dense ledger with weighted search, snippets, status/fit/controlled facets and saved URL state.
2. Idea detail, exact dossier routing and compare tray.
3. `Now` queue with one active action and two queued actions.
4. Seed confirmed blocker patterns and resurrection/freshness inboxes.
5. Add schema-v2 anchors, structured tests and append-only history through reviewed source changes.
6. Static-export web and smoke-test iOS/Android.

Defer AI-generated ideas, semantic Q&A, automatic scoring, charts, collaboration, comments, notifications, kanban, generic editing and polished visual theater.

## Seventy-five-second product walkthrough

1. Open `Now`: CrashTape is the current technical test; WeedCheck and LotMatch are up next.
2. Before proposing another shipping-label utility, search `4×6 label`; LabelRelay appears with the exact incumbent and resurrection condition.
3. Open WeedCheck; see the promise, reason it still survives, optical/setup risks and 100-piece gate above the fold.
4. Compare WeedCheck, LotMatch and CrashTape. The view exposes different strengths and unknowns without an aggregate score.
5. Select WeedCheck and set its fixture experiment as the sole current action.
6. If it fails, the decision records the result, blocker pattern and resurrection condition while preserving the prior validating decision.

That workflow makes the archive productive instead of merely searchable.

