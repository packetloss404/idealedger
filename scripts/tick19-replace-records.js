// tick19-replace-records.js — fix tick 19 dedupe: drop petinsure-pulse + vethelp24
// (overlap with denialpilot + saturated vet telehealth), add pet-fairquote +
// pet-farewell-kit (synthesizer's ad-hoc ingest found these as the 2 surviving
// ideas after the 2-sub-agent parallel-spawn forced it to do its own research).
// Idempotent.

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const dbPath = join(root, 'docs', 'idea-database.json');

const db = JSON.parse(readFileSync(dbPath, 'utf8'));
const existing = new Set(db.ideas.map((i) => i.id));

// Drop the 2 colliding records (post-dedupe audit per synthesizer's
// research/synth-tick-19-pet-care-2026-08-12.json):
// - petinsure-pulse: >70% name/one_liner overlap with denialpilot
//   (denialpilot persona Priya explicitly covers the $3,400 pet urinary
//   blockage denial)
// - vethelp24: saturated vet telehealth cell (Vetster, Dutch, WhiskerDocs,
//   PetCoach, AskVet, VetChat) per the same synthesizer's saturated_cells_observed
const toDrop = ['petinsure-pulse', 'vethelp24'];
const beforeCount = db.ideas.length;
db.ideas = db.ideas.filter((i) => !toDrop.includes(i.id));
const dropped = beforeCount - db.ideas.length;

// Add the 2 stronger records from the synthesizer's research
const newRecords = [
  {
    id: 'pet-fairquote',
    name: 'PetFairQuote',
    aliases: [
      'Vet Estimate Compare + Lower-Cost Paths',
      'Pet Vertical Price Registrar',
    ],
    status: 'raw',
    hackathon_fit: 'high',
    one_liner:
      'Snap a vet estimate - get the local median for that procedure in your ZIP + 3 lower-cost paths (humane society, hospice, BNPL) in 60 seconds. Sunday pet-cost digest included.',
    decision_reason:
      "Synthesis-loop tick 19 (2026-08-12) surfaced this from the pet-care focus group, refined by the parallel-spawn synthesizer's ad-hoc ingest. The convergent pain: vet estimate opacity + 6-day decision window with no consumer-side comparator. Hard data from this tick's ingest: ValuePenguin 2025 - 76% of US pet owners would go into debt to save their pet, 53% cannot cover a $1K emergency without borrowing; Canine Journal 1,000-respondent survey - 48% would consider euthanasia at $2,500; Covetrus - vet costs +38.5% since 2019; UK CMA March 2026 final report mandates itemized bills + written estimates for estimates > £500 with a 9-12 month compliance window (US has no equivalent federal mandate); NAPHIA 2026 SOI - $5.7B GWP, 7.6M pets insured, 4.27% US dog/cat penetration, 95.73% still uninsured. The convergent pain: a US pet owner who has just been handed a $3,200-$8,000 vet estimate has no working tool to (a) compare it to the local median for that procedure in their ZIP, (b) find a lower-cost alternative (humane society, hospice, BNPL, AAHA-accredited price-publishers), (c) get a printable shareable 'here are the 4 options' card for the spouse / co-decider, or (d) get a Sunday digest so the next time something happens they don't start from zero. The closest existing corpus records are quote-comparison (passed_market — 'Commit to one trade or repair category and validate the comparison schema') which is a passed_market cell where vertical-narrow into pet is the cited resurrection trigger; vetbill-decoder (raw, post-bill line-item decode + financing) is a sibling lifecycle moment (post-bill vs pre-bill); denialpilot (insurance denial appeal, tick 10) is explicitly a different cell (denial vs estimate). Saturated adjacent cells: CareCredit, Scratchpay, VetBilling, Pawprint at the financing level; Lap of Love, CodaPet, humane societies at the EOL level; Vetster, Dutch, WhiskerDocs at the vet telehealth level; Trupanion, Embrace, Healthy Paws, Lemonade Pet at the pet insurance level. Dominant kill risk: <50 partner-clinic price-list commitments OR <1,000 crowd-sourced estimate submissions within 60 days of launch.",
    resurrection_trigger:
      "Open if 5,000 US pet owners install PetFairQuote, snap a vet estimate, and at least 1,000 of them report a 'I learned the local median for my procedure' or 'I switched to a lower-cost path' or 'I made a $1,000+ decision based on the compare' or 'I shared the side-by-side with my spouse' outcome in the first 90 days, with at least 300 reported median-learning or lower-cost-switch or shareable-decision outcomes; close if fewer than 50 partner-clinic price-list commitments OR fewer than 1,000 crowd-sourced estimate submissions are received within 60 days of launch, OR a top-3 pet insurance carrier (Trupanion, Lemonade, Embrace) ships a public pet-estimate compare as a free policy feature within 90 days.",
    tags: [
      'pet',
      'vet-estimate',
      'price-compare',
      'local-median',
      'humane-society',
      'hospice',
      'bnpl',
      'carecredit',
      'b2c',
      'pet-owner',
      'revenuecat',
      'weekly-ritual',
      'shareable',
      'm1-ritual-digest',
      'm6-entitlement-reference',
      'm14-quote-price-registrar',
      'm19-multi-form-synthesization',
      'm20-external-party-routing',
      'm22-exception-to-recovery',
      'm25-authority-boundary',
    ],
    research: [
      'docs/RESEARCH-MARATHON-2026-08-11.md',
      'docs/RESEARCH-MARATHON-2026-08-11-TRACKER.md',
    ],
  },
  {
    id: 'pet-farewell-kit',
    name: 'PetFarewell Kit',
    aliases: [
      'Pet End-of-Life Companion',
      'Shared Senior-Pet QoL Log + EOL Service Compare',
    ],
    status: 'raw',
    hackathon_fit: 'high',
    one_liner:
      'A shared last-days care log for your senior or terminally-ill pet - HHHHHMM diary, family-shared with spouse / adult children / in-home sitter, Lap of Love vs CodaPet vs humane-society compare in your ZIP. $2.99/mo.',
    decision_reason:
      "Synthesis-loop tick 19 (2026-08-12) surfaced this from the pet-care focus group, refined by the parallel-spawn synthesizer's ad-hoc ingest. The convergent pain: pet end-of-life is a 3-5% of US pet households / ~5M pets/yr wedge weighted to dogs >10 yrs and cats >14 yrs; the consumer-side coordination is fragmented across Lap of Love (37 states, 350+ vets), CodaPet (450+ vets, 50 states), humane societies ($35-$120), and ASPCA Pet Loss Hotline with no cross-provider compare and no family-shared QoL log. Hard data from this tick's ingest: marketintelo 2025 - in-home pet euthanasia $0.4B 2025 → $0.8B 2034 at 8.5% CAGR, Lap of Love $500-$1,200 standard pricing, 92% same-day-or-next-day appointments; AVMA HHHHHMM Quality of Life Scale is the standard QoL instrument; petclaim.org denial database documents that the EOL procedure is the most common insurance-disputed category because carriers classify humane-euthanasia as 'owner-elected'. The convergent pain: a family with a terminally-ill senior pet has no working tool to (a) share the daily QoL log with the spouse / adult children / in-home sitter, (b) compare Lap of Love vs CodaPet vs humane-society prices + same-day availability in their ZIP, (c) get a printable QoL summary for the vet at the next appointment, or (d) route directly to ASPCA Pet Loss Hotline with the pet's profile pre-filled. The closest existing corpus records are modmatch (aging-in-place contractor marketplace, tick 17) and carecedar (long-distance caregiver dashboard, tick 17) - both are *caregiver coordination* products but for senior home mods and long-distance human caregiver, not for pet EOL. Saturated adjacent cells: Ralph QoL (free, single-user, diary only); Lap of Love QoL assessment (free, single-user); ASPCA Pet Loss Hotline (free, no app); Care.com / Lap of Love grief support. Dominant kill risk: <500 paying subscribers in 90 days, or Ralph ships a family-shared tier at the same price within 90 days.",
    resurrection_trigger:
      "Open if 2,000 US pet owners with a senior or terminally-ill pet install PetFarewell Kit, log a QoL entry, and at least 500 of them report a 'I shared the QoL log with my family' or 'I switched from Lap of Love to CodaPet (or vice versa) based on the compare' or 'I made a $200+ decision based on the aftercare prices' or 'I used the ASPCA Pet Loss Hotline routing' outcome in the first 90 days, with at least 100 reported family-shared or provider-switched or ASPCA-routed outcomes; close if fewer than 500 paying subscribers are obtained in 90 days, or Ralph QoL ships a family-shared tier at the same $2.99/mo or $24/yr price within 90 days.",
    tags: [
      'pet',
      'end-of-life',
      'euthanasia',
      'hospice',
      'qol-diary',
      'hhhhhmm',
      'family-shared',
      'lap-of-love',
      'codapet',
      'aspca',
      'b2c',
      'pet-owner',
      'revenuecat',
      'weekly-ritual',
      'shareable',
      'm1-ritual-digest',
      'm5-share-sheet-photo-intake',
      'm9-approval-deadline-clock',
      'm20-external-party-routing',
      'm22-exception-to-recovery',
      'm24-accepted-handoff-state',
      'm25-authority-boundary',
    ],
    research: [
      'docs/RESEARCH-MARATHON-2026-08-11.md',
      'docs/RESEARCH-MARATHON-2026-08-11-TRACKER.md',
    ],
  },
];

const toAdd = newRecords.filter((r) => !existing.has(r.id));
if (dropped === 0 && toAdd.length === 0) {
  console.log('No-op: 2 records to drop and 2 to add, neither pending.');
  process.exit(0);
}

db.ideas = db.ideas.concat(toAdd);
db.updated_at = '2026-08-12';
writeFileSync(dbPath, JSON.stringify(db, null, 2) + '\n', 'utf8');
console.log(`Dropped ${dropped} records: ${toDrop.join(', ')}`);
console.log(`Added ${toAdd.length} records:`);
toAdd.forEach((r) => console.log(`  + ${r.id} (${r.name})`));
console.log(`Total ideas: ${db.ideas.length} (was ${beforeCount})`);
