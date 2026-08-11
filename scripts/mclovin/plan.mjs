#!/usr/bin/env node

import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('../..', import.meta.url));
const OUTPUT_ROOT = path.join(ROOT, 'research-runs', 'mclovin');
const VERSION = 1;

const lanes = [
  ['world-scan', 'Investigate overlooked workflows, complaints, service disruption, and information asymmetry without proposing solutions first.'],
  ['home-and-property', 'Study repairs, renting, moving, household administration, and warranties.'],
  ['work-and-income', 'Study shift workers, gig workers, freelancers, local services, licensing, and small-business operations.'],
  ['care-and-access', 'Study caregiving, accessibility, independent living, pets, and professional-service access.'],
  ['mobility-and-travel', 'Study automotive ownership, commuting, travel disruption, RV/outdoor travel, and handoffs.'],
  ['commerce-and-consumption', 'Study subscriptions, returns, secondhand commerce, collectors, and ownership records.'],
  ['creators-and-games', 'Study creators, gaming, communities, civic participation, and behavior around entertainment.'],
  ['privacy-and-security', 'Study personal digital security, privacy, identity, credentials, and data ownership.'],
  ['app-economy', 'Study indie developers, acquisition, activation, retention, pricing, monetization, and RevenueCat-native opportunities.'],
  ['new-capabilities', 'Study newly practical mobile capabilities and products enabled by on-device AI, vision, speech, sensors, OS surfaces, and payments.'],
  ['competitor-killer', 'Search direct competitors, substitutes, failed companies, incumbent incentives, and contradictory evidence for claims from other lanes.'],
  ['truth-and-safety', 'Audit phone-observable state, false certainty, privacy, abuse, regulated boundaries, and hard kill gates.'],
];

function parseArgs(argv) {
  const args = argv.slice(2).reduce((result, value, index, values) => {
    if (!value.startsWith('--')) return result;
    const [key, inline] = value.slice(2).split('=', 2);
    const next = inline ?? values[index + 1];
    result[key] = inline ?? (next?.startsWith('--') ? true : next);
    return result;
  }, {});
  const hours = Number(args.hours ?? 8);
  const laneCount = Number(args.lanes ?? lanes.length);
  if (!Number.isFinite(hours) || hours <= 0 || hours > 24) throw new Error('--hours must be > 0 and <= 24');
  if (!Number.isInteger(laneCount) || laneCount < 1 || laneCount > lanes.length) throw new Error(`--lanes must be an integer from 1 to ${lanes.length}`);
  return { hours, laneCount };
}

function stamp(date) {
  return date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z');
}

function packet(id, role, objective, dependsOn = []) {
  return { id, role, objective, dependsOn, status: 'pending', output: null };
}

const { hours, laneCount } = parseArgs(process.argv);
const started = new Date();
const deadline = new Date(started.getTime() + hours * 60 * 60 * 1000);
const runId = `mclovin-${stamp(started)}`;
const runDir = path.join(OUTPUT_ROOT, runId);
const selected = lanes.slice(0, laneCount);
const packets = selected.map(([role, objective], index) => packet(`lane-${String(index + 1).padStart(2, '0')}-${role}`, role, objective));
const reviewPackets = [
  packet('review-deduplication', 'deduplication', 'Compare every serious concept with the canonical Ledger, previous runs, titles, descriptions, and problem mechanisms.', packets.map((item) => item.id)),
  packet('review-competitors', 'competitor-killer', 'Search the strongest surviving concepts from independent lanes across direct products, substitutes, failed attempts, and platform features.', packets.map((item) => item.id)),
  packet('review-tournament', 'adversarial-tournament', 'Run founder, customer, skeptic, competitor, behavioral, mobile, engineering, trust, growth, monetization, judge, copycat, and platform reviews.', ['review-deduplication', 'review-competitors']),
  packet('persist-round', 'persistence', 'Write the round dossier, proposed idea changes, evidence provenance, rejected concepts, reopening conditions, and research debt. Validate before any canonical merge.', ['review-tournament']),
];
const manifest = {
  schemaVersion: VERSION,
  runId,
  startedAt: started.toISOString(),
  deadlineAt: deadline.toISOString(),
  durationHours: hours,
  purpose: 'Bounded, provenance-preserving autonomous MCLOVIN research loop',
  activeProject: 'BackPocket.help / Build with Gemini XPRIZE',
  independenceRule: 'Independent lanes must settle before convergence packets can be claimed; failed lanes remain explicit research debt.',
  epistemicRule: 'Synthetic feedback is never customer evidence; every claim is FACT, INFERENCE, HYPOTHESIS, or SYNTHETIC_FEEDBACK.',
  stopConditions: ['deadline reached', 'operator cancellation'],
  packets: [...packets, ...reviewPackets],
};
const status = `# ${runId}\n\n- Started: ${manifest.startedAt}\n- Deadline: ${manifest.deadlineAt}\n- Duration: ${hours} hours\n- Packets: ${manifest.packets.length}\n- Completed: 0\n- Current phase: independent discovery\n- Stop conditions: deadline, operator cancellation\n\n## Operator protocol\n\n1. Claim one pending packet by changing its status to claimed and record the agent identity.\n2. Write the output to outputs/<packet-id>.md with sources and epistemic labels.\n3. Mark the packet complete only after the output exists.\n4. Do not claim review packets until all dependencies are settled; failed dependencies must be listed as research debt.\n5. Run the Ledger validation/generation commands after persistence.\n`;

await fs.mkdir(path.join(runDir, 'outputs'), { recursive: true });
await fs.writeFile(path.join(runDir, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`);
await fs.writeFile(path.join(runDir, 'STATUS.md'), status);
await fs.writeFile(path.join(runDir, 'STARTING-STATE.md'), '# Starting State\n\nRun `npm run ideas:validate` and record the output here before agents begin. Load the canonical Ledger, prior round dossiers, rejection reasons, active-project context, and current official rules.\n');
await fs.writeFile(path.join(runDir, 'README.md'), `# ${runId}\n\nThis run is bounded to ${hours} hours and contains ${manifest.packets.length} packets. Outputs are research artifacts until reviewed and merged deliberately.\n\nSee manifest.json, STATUS.md, and outputs/.\n`);
console.log(`Created ${path.relative(ROOT, runDir)}`);
console.log(`Deadline: ${manifest.deadlineAt}`);
console.log(`Packets: ${manifest.packets.length} (${packets.length} independent, ${reviewPackets.length} dependent)`);
