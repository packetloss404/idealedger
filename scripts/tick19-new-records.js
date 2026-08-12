// tick19-new-records.js — append 3 pet-care consumer pain ideas (tick 19)
// Idempotent: only runs once per id set.

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const dbPath = join(root, 'docs', 'idea-database.json');

const db = JSON.parse(readFileSync(dbPath, 'utf8'));
const existing = new Set(db.ideas.map((i) => i.id));

const newRecords = [
  {
    id: 'vetbill-decoder',
    name: 'VetBill Decoder',
    aliases: [
      'Vet Bill Line-Item Decoder',
      'Vet Cost Compare + Financing Copilot',
    ],
    status: 'raw',
    hackathon_fit: 'high',
    one_liner:
      'Photo your vet estimate or bill - get every line item decoded, benchmarked against other clinics in your ZIP, and routed to CareCredit / Scratchpay / clinic-side payment plans.',
    decision_reason:
      "Synthesis-loop tick 19 (2026-08-12) surfaced this from the pet-care focus group. The convergent pain: vet bills are now a 2026 top-3 US consumer-finance stress point - 53% of US pet owners cannot cover a $1,000 pet emergency without taking on debt (Rover 2026); emergency vet visits run $300-$4,000 once diagnostics + overnight stay are added; specialty surgeries run $5,000-$8,000+. Hard data from this tick's ingest: Rover 2026 emergency-cost report; BBC 2024-25 UK reporting on economic-euthanasia case volume; r/VetTech 2024 case of $4,000 final-mile vet bill after $15,000 already spent (economic euthanasia). The convergent pain: a pet owner who has just been handed a $3,000-$8,000 estimate has no working tool to (a) decode the line items, (b) compare to other clinics in their ZIP, (c) find financing that doesn't trap them in 30% APR, or (d) detect overcharging patterns. The closest existing corpus records are billdr (hospital bill dispute, tick 12), surchargescope (insurance bill decoder, tick 10), and otddecoder (auto OTD price sticker, tick 16) - all are *bill decoder* products but for human hospital, insurance, and auto bills, not vet bills. Saturated adjacent cells (CareCredit, Scratchpay, VetBilling, Pawprint) are financing-led with no decode + compare layer; corporate vet consolidation (Mars Petcare 75% specialty / 25% general per Warren-Blumenthal 2024 letter) is driving price inflation, not consumer choice. Dominant kill risk: Mars Petcare or VCA/Antech ships a transparent-price-list API + line-item decode as a free app feature, or CareCredit ships a vet-bill-decode + cost-compare as a free in-app feature within 90 days.",
    resurrection_trigger:
      "Open if 5,000 US pet owners install VetBill Decoder, upload their vet estimate or bill, and at least 1,000 of them report a 'I caught an overcharge' or 'I switched clinics and saved $X' or 'I avoided a 30% APR financing trap' or 'I negotiated a 20%+ discount' outcome in the first 90 days, with at least 300 reported overcharge-catches or clinic-switches or financing-savings; close if Mars Petcare or VCA/Antech ships a transparent-price-list API + line-item decode as a free app feature, or CareCredit ships a vet-bill-decode + cost-compare as a free in-app feature within 90 days.",
    tags: [
      'vet',
      'vet-bill',
      'pet-emergency',
      'economic-euthanasia',
      'cost-compare',
      'carecredit',
      'financing',
      'b2c',
      'pet-owner',
      'revenuecat',
      'monthly-ritual',
      'shareable',
      'm1-ritual-digest',
      'm19-multi-form-synthesization',
      'm22-exception-to-recovery',
      'm25-authority-boundary',
    ],
    research: [
      'docs/RESEARCH-MARATHON-2026-08-11.md',
      'docs/RESEARCH-MARATHON-2026-08-11-TRACKER.md',
    ],
  },
  {
    id: 'petinsure-pulse',
    name: 'PetInsure Pulse',
    aliases: [
      'Pet Insurance Pre-Existing Navigator',
      'Pet Claim Denial + State-Statute Copilot',
    ],
    status: 'raw',
    hackathon_fit: 'high',
    one_liner:
      'Type your pet + policy + ZIP - get a pre-existing risk score, a state-statute check, a claim tracker, and a one-tap appeal generator for denials.',
    decision_reason:
      "Synthesis-loop tick 19 (2026-08-12) surfaced this from the pet-care focus group. The convergent pain: pet insurance is the fastest-growing US insurance line (NAPHIA June 2026: 7.6M pets insured at YE 2025, $4.8B GWP +20% YoY, <4% dog/cat penetration), but the pre-existing-exclusion pattern is the #1 named consumer pain. Trupanion led the market in 2025 at $1.22B direct premiums written (+11.7% YoY) at a 69.8% loss ratio; Lemonade surged +54.7% to $441.2M; JAB Holdings +79.9% (S&P Global Apr 2026). Trupanion denial pattern documented on r/petinsurancereviews: 2022 vomiting retroactively classified as pre-existing for a 2025 'brand new and unrelated' claim. NAIC Pet Insurance Model Act #633 (Summer 2022) requires insurer burden of proof for pre-existing exclusions, 15-day free look, 30-day max waiting period for illness, no waiting period for accidents, and standardized statutory definitions - but only 13 of 50 states have adopted it as of June 2026 (DE, HI, LA, ME, MD, MS, NE, NH, NJ 1/1/2027, OH, PA, VT, WA), with 29 states + DC having no pet-insurance statute, including TX (4th-largest market) and NY (governor twice vetoed). The convergent pain: a pet owner who has just been denied a claim has no working tool to (a) check whether the insurer met the NAIC Model Act burden-of-proof requirement, (b) determine whether the state has adopted the Model Act, (c) generate the appeal letter, or (d) detect retroactive pre-existing classification patterns. The closest existing corpus records are denialpilot (insurance denial appeal, tick 10), priorauthpilot (PA filing, tick 12), and billdr (hospital bill dispute, tick 12) - all are *appeal/dispute* products but for human insurance, healthcare, and hospital bills, not for pet insurance. Saturated adjacent cells (Trupanion, Embrace, Healthy Paws, Lemonade Pet, Spot, ASPCA, MetLife, Pets Best) are insurers with no third-party pre-existing navigator. Dominant kill risk: a top-3 pet insurer (Trupanion, Lemonade, Embrace) ships an in-app pre-existing-risk-score + appeal-generator as a free feature within 90 days, or a state (NY, TX, CA, FL) adopts the NAIC Model Act and ships a public appeal-status portal within 90 days.",
    resurrection_trigger:
      "Open if 2,000 US pet owners install PetInsure Pulse, enter their pet + policy + ZIP, and at least 400 of them report a 'I caught a pre-existing mis-classification' or 'I appealed and won a reversal' or 'I switched insurers to avoid the pattern' or 'I learned my state has a statute I can cite' outcome in the first 90 days, with at least 100 reported appeal-wins or insurer-switches or statute-citation outcomes; close if a top-3 pet insurer (Trupanion, Lemonade, Embrace) ships an in-app pre-existing-risk-score + appeal-generator as a free feature within 90 days, or a state (NY, TX, CA, FL) adopts the NAIC Model Act and ships a public appeal-status portal within 90 days.",
    tags: [
      'pet-insurance',
      'pre-existing',
      'claim-denial',
      'naic-model-act',
      'state-statute',
      'appeal',
      'b2c',
      'pet-owner',
      'revenuecat',
      'monthly-ritual',
      'shareable',
      'm1-ritual-digest',
      'm7-regulated-handle-conversion',
      'm19-multi-form-synthesization',
      'm22-exception-to-recovery',
      'm25-authority-boundary',
    ],
    research: [
      'docs/RESEARCH-MARATHON-2026-08-11.md',
      'docs/RESEARCH-MARATHON-2026-08-11-TRACKER.md',
    ],
  },
  {
    id: 'vethelp24',
    name: 'VetHelp24',
    aliases: [
      '24/7 Vet Telehealth + Emergency Triage',
      'Pet ER Locator + Cost Pre-Estimate',
    ],
    status: 'raw',
    hackathon_fit: 'high',
    one_liner:
      'Type your symptoms - get a 30-second triage + the nearest 24/7 ER with current wait time + a cost pre-estimate + a one-tap telehealth visit with a licensed vet in your state.',
    decision_reason:
      "Synthesis-loop tick 19 (2026-08-12) surfaced this from the pet-care focus group. The convergent pain: vet supply is collapsing - 2025 cross-national Frontiers in Vet Science study shows vet suicide rate is 2x other medical professions and 4x general population; 7% of US vets had suicidal thoughts in past 12 months; 29.6% of surveyed vets personally know a colleague who died by suicide. Rural vet scarcity is acute; emergency vet clinics are clustered in metro areas and have 2-6 hour wait times. Existing telehealth options (Vetster, WhiskerDocs, PetCoach, AskVet, VetChat) are sub-scale or state-licensed only. The convergent pain: a pet owner whose dog is vomiting blood at 11pm on a Sunday has no working tool to (a) triage the urgency (vs. wait until morning), (b) locate the nearest 24/7 ER with current wait time, (c) pre-estimate the cost, (d) get a state-licensed vet on video within 15 minutes, or (e) pre-auth the eventual ER visit with the pet insurer. The closest existing corpus records are firstsession (mental health first-session prep, tick 13) and waitlistrelay (therapist waitlist AI-voice, tick 13) - both are *consumer-side care-access* products but for human mental health, not for vet. Saturated adjacent cells (Vetster, WhiskerDocs, PetCoach, AskVet, VetChat) are point-solutions with no integrated triage + ER-locator + cost-pre-estimate + insurance pre-auth in one workflow; corporate vet consolidation (Mars Petcare 75% specialty / 25% general per Warren-Blumenthal 2024 letter) is reducing price-shopping friction by reducing clinic choice. Dominant kill risk: Mars Petcare or VCA/Antech ships a 24/7 vet telehealth + ER-locator + cost-pre-estimate as a free app feature within 90 days, or a top-3 pet insurer (Trupanion, Lemonade, Embrace) ships a vet telehealth + ER-pre-auth as a free policy feature within 90 days.",
    resurrection_trigger:
      "Open if 5,000 US pet owners install VetHelp24, enter their symptoms, and at least 1,500 of them report a 'I avoided a $1,000+ ER visit that wasn't needed' or 'I caught an emergency that was heading toward economic euthanasia' or 'I pre-authed my insurance before the ER visit' or 'I reached a state-licensed vet within 15 minutes' outcome in the first 90 days, with at least 300 reported triage-savings or ER-cost-savings or pre-auth-wins; close if Mars Petcare or VCA/Antech ships a 24/7 vet telehealth + ER-locator + cost-pre-estimate as a free app feature, or a top-3 pet insurer (Trupanion, Lemonade, Embrace) ships a vet telehealth + ER-pre-auth as a free policy feature within 90 days.",
    tags: [
      'vet',
      'telehealth',
      'triage',
      'emergency',
      'er-locator',
      'cost-pre-estimate',
      'pre-auth',
      'vet-supply',
      'b2c',
      'pet-owner',
      'revenuecat',
      'monthly-ritual',
      'shareable',
      'm1-ritual-digest',
      'm7-regulated-handle-conversion',
      'm9-counterparty-routing',
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
];

const toAdd = newRecords.filter((r) => !existing.has(r.id));
if (toAdd.length === 0) {
  console.log('All 3 tick 19 records already in corpus, no-op.');
  process.exit(0);
}

db.ideas = db.ideas.concat(toAdd);
db.updated_at = '2026-08-12';
writeFileSync(dbPath, JSON.stringify(db, null, 2) + '\n', 'utf8');
console.log(`Added ${toAdd.length} new ideas:`);
toAdd.forEach((r) => console.log(`  + ${r.id} (${r.name})`));
console.log(`Total ideas: ${db.ideas.length}`);
