# Research Loop Runbook — 2026-08-11

**Purpose:** Enable autonomous research runs that continue across sessions, with the agent as the loop body and the user as the loop owner. The loop self-directs (picks the next question), self-falsifies (kills hypotheses with evidence), self-persists (writes to the canonical corpus), and self-terminates (stops when the queue is empty or information gain is low).

**Session model:** Each session is ~2-4 hours of useful agent work before context fills. The loop must therefore checkpoint to disk every tick and be resumable. The user (or a cron) re-triggers the agent between sessions; the agent reads the loop state and continues.

---

## 0. Loop approach (Round 13 update)

The loop's primary job is **ingestion + synthesis + database update**, not matrix-building. Each tick:

1. **Ingests** 5-10 fresh sources (web search, articles, news, Reddit, HN, industry sites) on consumer pain, B2B friction, regulatory changes, emerging tech.
2. **Synthesizes** the new data via a 3-sub-agent brain trust (research ingestor, focus-group / mock-hackathon synthesizer, database updater).
3. **Generates** 1-3 idea hypotheses that survive dedupe against the 352-idea corpus.
4. **Persists** surviving ideas as new `raw` or `validating` records in `docs/idea-database.json` and regenerates the catalog.
5. **Re-schedules** the cron for 45 minutes.

The previous approach (certifier routing matrix, form atlases) is documented in the deferred section of `research/loop-queue.json` and is not actively pursued unless the user revives it.

**Why this approach:** the corpus is in a post-discovery phase where most cells are saturated. The marginal value of new research comes from FRESH data (newly launched competitors, new regulations, new consumer complaints) rather than from re-verifying known cells. The synthesis loop surfaces new signals as the internet surfaces them.

---

## 1. Files

| File | Owner | Purpose |
|------|-------|---------|
| `research/loop-queue.json` | Loop (writable) | The hypothesis queue with priorities, gates, kill conditions, statuses. The loop's working memory. |
| `research/loop-state.json` | Loop (writable) | Per-tick runtime state: current hypothesis, phase, time spent, sources examined, findings, next action. |
| `research/loop-log.jsonl` | Loop (append-only) | Append-only tick log: each line is a finished tick's summary for retrospective analysis. |
| `docs/RESEARCH-LOOP-RUNBOOK.md` | This file | The protocol the agent follows. |
| `docs/RESEARCH-MARATHON-2026-08-11.md` | Read-only | Source of truth for what we found and what's queued. |
| `docs/RESEARCH-MARATHON-2026-08-11-TRACKER.md` | Append-only | Live tracker with source provenance and decisions. |

## 2. Queue entry schema

```json
{
  "id": "certroute-fl-or-ny",
  "hypothesis": "The 50-state certifier routing rules can be mapped from public sources to per-state who-can-sign tables.",
  "gate": "At least 25 states reachable from public statutes or vital-records-office publications.",
  "output": "docs/RESEARCH-CERTIFIER-ROUTING-MATRIX.md",
  "kill_conditions": [
    "Fewer than 15 states reachable",
    "Statutes reference forms we cannot read",
    "All routing rules are state-internal administrative code with no public index"
  ],
  "expected_time_minutes": 120,
  "priority": 1,
  "status": "pending",
  "result": null,
  "started_at": null,
  "completed_at": null,
  "sources_examined": [],
  "findings_summary": null,
  "resurrection_signal": "A new federal HHS rule, FHIR standard, or NAPHSIS public-API rollout"
}
```

Statuses: `pending` → `in_progress` → `validated` | `killed` | `parked` | `needs_human`.

`needs_human` is for entries that turn out to require human contact during the tick (e.g., we discover the only authoritative source is a state association directory that requires login).

## 3. The tick protocol (what the agent does in one tick)

For each tick, the agent runs the following six steps. Each step writes a small record to `loop-state.json` so an interrupted tick can resume.

### Step 1 — Load state
- Read `research/loop-state.json` and `research/loop-queue.json`.
- If a tick is in progress, decide whether to resume or abandon (default: resume if the last write is < 30 min old; else abandon and re-pick the next pending entry).
- Read `docs/RESEARCH-MARATHON-2026-08-11-TRACKER.md` for the latest context.

### Step 2 — Pick the next entry
- Among `pending` entries, pick the lowest-numbered `priority`.
- If two entries have the same priority, pick the one whose `gate` is most likely to be falsifiable in this tick (smallest expected time first).
- If the queue is empty, terminate the loop and write a final summary.

### Step 3 — Pre-flight kill check
- Before doing research, run a quick kill check (one or two search queries at most) to see if the hypothesis is already falsifiable by something the corpus has not yet recorded.
- If the pre-flight returns `killed`, mark the entry, move to the next.
- If the pre-flight is unclear, proceed to research.

### Step 4 — Research
- Run searches using the multi-angle formula (problem, software, app, spreadsheet, reddit, workaround, manual, expensive, mistakes, complaints, industry, filetype:pdf, report, study, book, patent, GitHub, desired outcome, buyer workflow, industry term).
- For each promising source, fetch and extract the relevant claim, preserving URL + retrieval date + quote length ≤ 200 chars.
- After every 3-5 sources, update `loop-state.json` with the running findings summary.
- Hard cap per tick: 20 web searches and 12 page fetches. If the gate is not in reach by then, kill the entry as `needs_more_research` and move to the next.

### Step 5 — Decide
- Compare findings to the gate. If met: mark `validated`, persist the output document, update the canonical corpus if a new idea record is warranted.
- If kill condition triggered: mark `killed`, write a one-paragraph tombstone to the tracker.
- If neither: mark `parked` with the unverified gap clearly named, and add a follow-up entry to the queue if the gap is concrete.

### Step 6 — Persist + advance
- Append a one-line summary to `research/loop-log.jsonl`: `{ts, id, decision, output_path, sources_count, findings_count, time_minutes}`.
- Update the entry's `result` field in `loop-queue.json` with a short summary.
- Update `docs/RESEARCH-MARATHON-2026-08-11-TRACKER.md` with the decision and a 2-3 line source citation.
- If a new idea record is justified, add it to `docs/idea-database.json` (a new raw entry) and run `npm run ideas:generate` to refresh the catalog.
- Clear `loop-state.json` for the next tick.
- Move to Step 2.

## 4. Self-termination conditions

The loop stops when any of the following is true:

- Queue empty (all entries `validated`, `killed`, `parked`, or `needs_human`).
- Three consecutive ticks return `low information gain` (defined: < 3 new sources per tick, or no new finding category).
- Corpus warnings exceed 5% of idea records.
- Token budget for the session is exhausted (estimated: 30 ticks, ~150 web searches, ~50 page fetches, ~10 file writes).
- The user explicitly terminates via a kill file at `research/loop-kill` (presence of the file stops the loop on next tick start).

On termination, the loop writes a final summary to `research/loop-log.jsonl` with `event: "terminated"` and a reason.

## 5. Information-gain guard

Every 5 ticks, the agent runs a self-check: how many NEW source categories have we hit? If the rate of new categories is < 1 per tick, the loop is plateauing. Plateau triggers a "switch lane" action:

- The agent reads the queue for parked entries, picks the one with the highest expected information gain (most different cell, most under-researched), and promotes it to the front of the queue.
- If no parked entries exist, the agent drafts 1-2 NEW entries based on what's been learned, adds them at priority 100, and runs them next.

This is the loop's version of the "do not let search engines define the world" instruction. It is also the mechanism for serendipity: a finding in one cell often suggests a parallel cell worth checking.

## 6. Cron schedule (Mavis-native)

The loop is triggered by `mavis cron self` so the agent resumes at intervals. The recommended pattern:

- **First tick** runs immediately when the loop is initialized.
- **Subsequent ticks** trigger every ~30 minutes, which gives the agent time to do real work and to checkpoint.
- The cron auto-reschedules itself until the loop hits a self-termination condition and emits a termination event.

Concretely:

```
mavis({ command: "cron self", args: { cron_name: "research-loop-tick", every: "30m", prompt: "<tick-prompt>" } })
```

The tick prompt is a fixed string that the agent recognizes:

```
Resume the Idea Ledger research loop. Read research/loop-state.json and research/loop-queue.json. If queue has pending entries, run the next tick per docs/RESEARCH-LOOP-RUNBOOK.md. If queue is empty or a kill file exists at research/loop-kill, terminate and write a final summary. Always end by setting a fresh self-reminder for 30m so the loop continues.
```

The user (or the agent) can kill the loop by creating `research/loop-kill` (a file with any content) or by deleting the cron entry.

## 7. Resumption across sessions

When the agent re-loads after a session boundary, it should:

- Read `loop-state.json`. If `current_entry_id` is set, decide whether to resume or abandon that tick (rule: resume if `last_heartbeat` is < 60 min old AND fewer than 20 web searches logged for this tick; else abandon).
- If abandoning, reset that entry to `pending` and move to the next.
- If resuming, continue from the last recorded step.

This makes the loop crash-safe and session-safe.

## 8. What the agent should NOT do

Per the system instructions and prior rounds, the agent must NOT:

- Make outreach calls to real operators (funeral directors, small-business owners, regulators). The corpus explicitly excludes this from the agent plan. If a tick's gate requires a call, mark the entry `needs_human` and stop.
- Spend more than 20 web searches or 12 page fetches on a single tick. The information-gain guard catches the rest.
- Re-propose the inbound-share photo→invoice wedge (SnapInvoice). If a tick uncovers it, write a `snapinvoice-post-mortem` validating record instead, and continue.
- Re-propose ideas already in the corpus. The pre-flight kill check (Step 3) catches this.
- Bypass `npm run check`. Every corpus change must pass validation.

## 9. Per-tick cost budget (recommended)

- 20 web searches at ~2K tokens each = 40K tokens
- 12 page fetches at ~3K tokens each = 36K tokens
- 1 file write (the output document) at ~2K tokens = 2K tokens
- 1 file write (loop-state.json) at ~1K tokens = 1K tokens
- 1 file write (corpus update, if any) at ~2K tokens = 2K tokens
- Reasoning + planning at ~10K tokens = 10K tokens
- **Per-tick total: ~90K tokens.** At ~150K useful tokens per session, the agent can comfortably run ~1.5 ticks per session. The cron will trigger another session in 30 minutes for the next tick.

This is the budget that makes "all night" viable: ~16 sessions × 1.5 ticks = ~24 ticks per night, or roughly the 7 initial high-value entries + 17 follow-up discoveries, which is the right pace for real research, not reckless.

## 10. Quick-start (for the user)

1. Confirm `research/loop-queue.json` has the 7 initial entries (this runbook pre-populates them).
2. Run the agent once with this prompt: "Run the research loop per `docs/RESEARCH-LOOP-RUNBOOK.md`. Pick the first pending entry and execute one tick. End by setting a 30m self-reminder."
3. Each time the agent re-triggers, it reads the queue, runs the next tick, and re-schedules.
4. To stop, create the file `research/loop-kill` or delete the cron entry.
5. To inspect progress, read `research/loop-log.jsonl` and `docs/RESEARCH-MARATHON-2026-08-11-TRACKER.md`.

## 11. First 7 entries (initial queue, in priority order)

1. **certifier-routing-matrix-50state** — Map who-can-sign + statutory window + ME triggers for 50 states. Gate: ≥25 states. Output: `docs/RESEARCH-CERTIFIER-ROUTING-MATRIX.md`. P1.
2. **death-certificate-forms-atlas-50state** — Map form numbers + public PDFs + required fields for 50 states. Gate: ≥15 states have publicly indexed form PDFs. Output: `docs/RESEARCH-DEATH-CERTIFICATE-FORMS-ATLAS.md`. P2.
3. **disposition-permit-atlas-50state** — Map disposition/transit/cremation permit forms. Gate: ≥15 states. Output: `docs/RESEARCH-DISPOSITION-PERMIT-ATLAS.md`. P3.
4. **funeral-startup-landscape-2026** — Audit 15+ 2025-26 funeral-workflow startups for an API/SDK a chase layer could sit on. Gate: catalog complete, no direct chase-layer API found. Output: `docs/RESEARCH-FUNERAL-STARTUP-LANDSCAPE-2026.md`. P4.
5. **adjacent-chase-cells-scan** — Scan pharmacy PA, customs broker, IRS notice, permit-application for the M20 mechanism transplant. Gate: identify ≥1 unoccupied cell OR confirm all occupied. Output: 1-2 page per candidate. P5.
6. **snapinvoice-post-mortem-record** — Write a validating record capturing the Round 12 SnapInvoice failure so future agents don't re-propose the inbound-share wedge. Gate: record persists, validation passes. Output: new `snapinvoice-post-mortem` idea in `idea-database.json`. P6.
7. **lotmatch-falsification-runbook** — One-pager: who to call, what fixtures to ship, what success/fail thresholds mean. Gate: human-ready document. Output: `docs/LOTMATCH-FALSIFICATION-RUNBOOK.md`. P7.

After each tick, the agent decides whether to add follow-up entries based on findings. The information-gain guard prevents the loop from running the same type of search repeatedly.

## 12. What success looks like at session end

A successful overnight run produces, in addition to the loop state files:

- 1-3 new validating or raw idea records in `docs/idea-database.json`
- 3-5 new research dossiers in `docs/`
- A populated `docs/RESEARCH-CERTIFIER-ROUTING-MATRIX.md` (the highest-leverage single deliverable, since the cell's structural viability depends on it)
- Updated `docs/RESEARCH-MARATHON-2026-08-11-TRACKER.md` with the new findings
- A final session summary in `research/loop-log.jsonl`

A successful run is NOT 30 idea records. It is 1-3 deeply-evidenced records that survive the corpus's own quality bar.
