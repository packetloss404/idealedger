# Handoff — Research Agent A (this worker) — 2026-08-11

Status: paused mid-marathon so the three agents' work can be converged. This note is the resume point; safe to delete once the convergence commit lands.

## What this agent shipped (all uncommitted in the working tree)

Two full research rounds targeting the **RevenueCat Shipaton 2026** track:

- **Round 11 (MCLOVIN):** 30 simulated focus groups, 30-question service-disruption hunt, 30 cross-domain transfers, tech-capability scan, ~140 raw concepts, 40-concept novelty gauntlet (4 hunter agents), 6-candidate tournament. Result: **no BUILD**; finalists **SnapInvoice** (photo→invoice un-invoiced detector for micro trades, 76/100, VALIDATE FIRST) and **ReturnShield** (return-intake evidence for resellers, 67/100, VALIDATE FIRST).
- **Round 12 (From Research to Revenue):** Weirdness Round (42 ideas), mechanism map (18 mechanisms), process-tracker deep-dive (FALSIFIED — empty cell is economically dead), second harder SnapInvoice competitor sweep (**no direct match, novelty 58, cell un-dug not abandoned**), and a **six-week build spec** with three falsification gates runnable in-window for <$150.

## Corpus now: 348 ideas, 49 dossiers, 33 focus-group studies (validated)

> **Renumbering (2026-08-11):** the committed sibling dossier `docs/SHIPATON-MCLOVIN-ROUND-11-2026-08-10.md` owns "Round 11"; this agent's full MCLOVIN dossier is `docs/IDEA-MINING-LOOP-2026-08-10-ROUND12.md` and its build-out is `docs/IDEA-MINING-LOOP-2026-08-10-ROUND12-BUILD-OUT.md`; all content dossiers were renamed `ROUND-11-*` → `ROUND-12-*`; the focus-group study is `round12-mclovin-sweep`. Today's work should be **Round 13**.

- `docs/idea-database.json`: +32 ideas from this agent (R11: 28, R12: 4). Two `validating` (SnapInvoice, ReturnShield), rest parked/passed_market/passed_scope/raw. No duplicate IDs. Every rejection has evidence + reopening condition.
- `docs/focus-groups.json`: +1 study (`round12-mclovin-sweep`).
- New dossiers: `docs/IDEA-MINING-LOOP-2026-08-10-ROUND12.md` (full MCLOVIN, renamed from Round 11 so the committed sibling dossier owns "Round 11"), `docs/IDEA-MINING-LOOP-2026-08-10-ROUND12-BUILD-OUT.md`, `RESEARCH-ROUND-12-STARTING-STATE.md`, `SHIPATON-2026-OFFICIAL-RULES-VERIFIED-2026-08-10.md`, `ROUND-12-*` (content dossiers; originally `ROUND-11-*`, renamed for consistency), `ROUND-12-FINALIST-DOSSIERS.md`.
- Tests updated for the new counts (integration, ledger data, e2e ×4 files). All green: ideas:test 20, vitest 28, tsc, eslint, build, export (426 routes), e2e 33/33. Playwright headless Chromium was installed (was missing).

## Reconciling with the other two agents (convergence notes)

- **Committed in HEAD already (not mine):** sibling's MCLOVIN round (commit 18eb34a + 4dd31d8) added 30 focus-group studies (`round-11-focus-group-01..30`), 9 ideas (`backpocket-help`, `did-it-fix-it`, `change-impact-relay`, `client-decision-debt-clock`, `repair-relay`, `departure-baton`, `used-gear-passport`, `civic-311-shadow-receipt`, `monetization-canary`), `docs/SHIPATON-MCLOVIN-ROUND-11-2026-08-10.md`, `docs/FOCUS-GROUPS-01-15/16-30-2026-08-10.md`, `scripts/mclovin/`, and a DashboardPage.
- **Working tree, not mine, not committed:** `package.json` mclovin scripts (+2 lines); `docs/IDEA-DATABASE.md` (contains a "Round 12 XPRIZE audit" paragraph from a third agent — does NOT yet list this agent's 32 ideas); `docs/XPRIZE-BACKPOCKET-OPPORTUNITY-AUDIT-2026-08-11.md`; untracked `research/`, `research-runs/`, `scripts/mclovin/`.
- **Both R11s agree** (independent convergence, worth calling out): no BUILD; 2025–26 clone wave saturates obvious cells; indie-dev monetization tooling is host-absorbed; repair verification is occupied. This agent's unique survivors (SnapInvoice, ReturnShield) are NOT in the sibling set.
- **Two "Round 11" dossiers exist** (`IDEA-MINING-LOOP-...ROUND11.md` mine, `SHIPATON-MCLOVIN-ROUND-11...md` sibling). Consider renaming one to Round 12/13 for a clean sequence, or merge.
- **Cleanup done:** removed two stray 0-byte files (`node`, `idea-ledger@1.0.0`) at repo root. `eslint.config.js` gained an ignore for `research/*` and `research-runs/*` (the sibling's scratch dirs broke the lint scan). `dist/` is gitignored.

## One decision the convergence must make

**Whether to ship SnapInvoice or not.** My recommendation, after two rounds of hostile examination: run the falsification (Telegram bot, G1/G2/G3, <$150, ~21 days — spec in `docs/ROUND-12-SNAPINVOICE-BUILD-SPEC.md`) before any native build. If GO, the MVP calendar lands a Sept 20–25 App Store submission, in-window for Shipaton. If NO, the honest fallback is the two holds (NetCheck in tax season; Freight-Line Pro after a proper competitor check).

## When work resumes

Read `docs/RESEARCH-ROUND-11-STARTING-STATE.md` and `docs/RESEARCH-ROUND-12-STARTING-STATE.md`, then the two round dossiers, then the build spec. The next step is the falsification experiment, not another mining round.
