# MCLOVIN Overnight Loop

This directory contains the durable control plane for repeated research rounds. It creates work packets and checkpoints; it does not pretend that simulated focus groups are real customers and it does not call an LLM provider by itself.

## Create an eight-hour run plan

```bash
npm run mclovin:plan -- --hours 8 --lanes 12
```

The command writes a timestamped run under `research-runs/mclovin/` containing:

- a run manifest and stop deadline;
- independent lane packets with different domains and roles;
- convergence/reviewer packets that must wait for lane outputs;
- a persistence and validation checklist;
- a `STATUS.md` checkpoint file.

An external agent runner can claim packets, write outputs, and advance checkpoints. Do not run the same packet twice. Never merge unreviewed generated text directly into the canonical database.

## Run with persistent workers

Create a bounded plan, then launch the supervisor. It opens a live Cream-themed terminal dashboard with a cow logo, animated spinner, packet board, progress bar, elapsed/remaining time, active workers, completions, and failures. The dashboard renders automatically when attached to a terminal; redirected output falls back to normal logs.

```bash
npm run mclovin:plan -- --hours 8 --lanes 12
npm run mclovin:run -- --run research-runs/mclovin/<run-id> --concurrency 3 --engines cream
```

Use the exact run ID printed by the plan command. Monitor it from another terminal:

```bash
watch -n 5 'cat research-runs/mclovin/<run-id>/manifest.json'
tail -f research-runs/mclovin/<run-id>/logs/*.log
```

On PowerShell, use `Get-Content research-runs/mclovin/<run-id>/manifest.json` for a snapshot and `Get-Content research-runs/mclovin/<run-id>/logs/*.log -Wait` to follow worker logs.

- The supervisor repeats the full packet graph as new numbered rounds until the deadline; a fast round does not end the eight-hour run.
- The supervisor also injects `CREAM-HANDOFF.md` into every worker prompt. This is the bridge between Cream's conversation context and terminal workers; update that file when the strategy or active project changes.



1. Load the starting snapshot and prior rejection ledger.
2. Run independent discovery lanes without sharing favorites.
3. Run evidence and contradiction lanes.
4. Deduplicate against the canonical database and prior run manifests.
5. Run competitor, phone-truth, monetization, and kill-gate review.
6. Converge only after independent outputs exist.
7. Persist a round dossier and proposed changes.
8. Validate, regenerate, and checkpoint before the next cycle.
9. Repeat the packet graph with fresh worker context until the configured deadline, or stop on operator cancellation. Failed packets remain explicit in the manifest and the next round continues; the supervisor does not silently promote their output.

The loop is intentionally bounded. “All night” means a configured eight-hour deadline, not an unkillable process.
