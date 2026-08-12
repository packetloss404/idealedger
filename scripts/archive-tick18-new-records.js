// tick18-new-records.js — append 3 climate/energy/EV consumer pain ideas
// Idempotent: only runs once per id set (re-running with the same ids will no-op).

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
    id: 'rebatestacker',
    name: 'RebateStacker',
    aliases: [
      'OBBBA Repeal Rebate Calculator',
      'Residential Electrification Rebate Stacker',
    ],
    status: 'raw',
    hackathon_fit: 'high',
    one_liner:
      "Type your ZIP, project, and panel amperage - get every federal, state, utility, and OEM rebate you can still claim in 2026 with stack rules, expiration dates, and reservation deadlines.",
    decision_reason:
      "Synthesis-loop tick 18 (2026-08-12) surfaced this from the climate/energy/EV focus group. The OBBBA signed July 4 2025 terminated the 25C $2K/yr heat-pump credit and 25D 30% residential solar + battery ITC for property placed in service after Dec 31 2025; Section 30C EV-charger 30%/$1K ends June 30 2026; HOMES ($8K) and HEAR ($14K LMI) state-administered rebate money remains appropriated but slow to flow and is allocated state-by-state with no federal restoration bill through Aug 2026. The convergent pain: a homeowner doing a $10K-$30K heat-pump / panel-upgrade / solar / EV-charger project in 2026 cannot stack-claim the dead 25C + dying 30C + active HOMES/HEAR + state rebates + utility rebates + OEM rebates + ITC carryforward in one place, and contractors routinely mis-stack. Hard data from this tick's ingest: electrifyatlas.com (25C/25D terminated for placements after 12/31/25, 25D geothermal survives through 2032); watt-wallet.com (30C EV-charger ends 6/30/26, HOMES/HEAR still active but state-by-state); 4-8 week 'silent gap' heat-pump equipment lead times per r/hvacadvice; 200A panel upgrade $1,500-$4,000 nationally and 320/400A $3,500-$8,000 per estimationpro.ai. The closest existing corpus records are two-source-solar-check (raw, 2-source solar panel truthfulness) and breaker-panel-atlas (raw, breaker/panel identification) - both are point-lookups, neither is cross-domain rebate stacking with stack-rule logic. Saturated adjacent cells (EnergySage, Rewiring America, Google Project Sunroof, Angi solar calculators) are pre-OBBBA design; no consumer tool owns the post-OBBBA stack-rules + expiration-deadline + reservation-cutoff wedge. Dominant kill risk: Rewiring America or EnergySage ships a 2026 OBBBA-aware stack-rules + expiration-deadline calculator as a free feature within 90 days, or a state (CA, NY, MA) ships a unified consumer-facing rebate stacker.",
    resurrection_trigger:
      "Open if 5,000 US homeowners (or their contractors) install RebateStacker, enter their ZIP + project + panel amperage, and at least 500 of them report an 'I claimed a federal or state rebate I would have missed' or 'I caught a stack-rule violation' or 'I made a $1,000+ project decision based on the stack' outcome in the first 90 days, with at least 100 reported stacked-claim wins; close if Rewiring America or EnergySage ships a 2026 OBBBA-aware stack-rules + expiration-deadline calculator as a free feature, or a state (CA, NY, MA) ships a unified consumer-facing rebate stacker within 90 days.",
    tags: [
      'rebate',
      'obbb',
      '25c',
      '25d',
      '30c',
      'homes',
      'hear',
      'electrification',
      'heat-pump',
      'solar',
      'ev-charger',
      'panel-upgrade',
      'b2c',
      'contractor-lookup',
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
    id: 'energysheet',
    name: 'EnergySheet',
    aliases: [
      'Utility Bill Decoder',
      'PJM Capacity Bill Explainer',
    ],
    status: 'raw',
    hackathon_fit: 'high',
    one_liner:
      'Upload your monthly utility bill + ZIP - get a line-by-line decode of capacity, transmission, generation, and distribution charges, with the AI data-center share called out in dollars and a 6-month forecast.',
    decision_reason:
      "Synthesis-loop tick 18 (2026-08-12) surfaced this from the climate/energy/EV focus group. The convergent pain: 65M Americans in the PJM 13-state footprint (PA, NJ, MD, VA, OH, IL, IN, MI, WV, NC, DC, DE, KY) hit a $329.17/MW-day 2026/27 PJM capacity auction result (up 22% YoY from $269.92 and 9x from $28.92 in 2024/25), driving an estimated 1.5%-5% monthly residential-bill increase starting June 2026, with cumulative PJM families now paying ~$70/mo more than 3 years ago, and AI data-center load cited as the primary driver but invisible on the bill. Hard data from this tick's ingest: electricityrates.com (PJM 2026/27 $329.17, 22% YoY, 9x since 2024/25); vicinityenergy.us ($163B more total / $70/mo extra per household over 3 years; 3 back-to-back auctions $329.17 / $333.44 / pending Dec 2026 suggest high prices through 2030; 2025/26 auction already added ~9% to DC residential bills = $10/mo). The convergent pain: a residential utility bill is unreadable - the 'capacity charge' line, the 'transmission' line, the 'distribution' line, the 'generation' line, the 'supply' line, the 'rider' lines all blend into a single dollar figure, and no consumer-facing tool maps the AI-data-center share to a specific dollar amount on a specific line. The closest existing corpus records are billdr (hospital bill dispute, tick 12) and surchargescope (insurance bill decoder, tick 10) - both are *bill decoder* products but for hospital and insurance bills, not utility bills. Saturated adjacent cells (Genability, UtilityAPI, Arcadia Power) are B2B utility-data APIs; no consumer-facing PJM/utility-bill decoder exists. Dominant kill risk: a regional PJM utility (ComEd, PSEG, BGE, Pepco, Dominion, Duquesne, FirstEnergy) ships a bill-decode + AI-data-center-attribution feature in their app within 90 days, or Arcadia Power ships a consumer-facing bill-decode product.",
    resurrection_trigger:
      "Open if 5,000 US utility customers install EnergySheet, upload their monthly bill + ZIP, and at least 1,000 of them report an 'I learned what the capacity charge is paying for' or 'I switched to a time-of-use rate' or 'I disputed a bill line' or 'I contacted my utility about a charge I now understand' outcome in the first 90 days, with at least 300 reported understanding-gain or bill-line-dispute outcomes; close if a regional PJM utility (ComEd, PSEG, BGE, Pepco, Dominion, Duquesne, FirstEnergy) ships a bill-decode + AI-data-center-attribution feature in their app within 90 days, or Arcadia Power ships a consumer-facing bill-decode product.",
    tags: [
      'utility-bill',
      'pjm',
      'capacity-charge',
      'data-center',
      'ai-load',
      'transmission',
      'distribution',
      'time-of-use',
      'b2c',
      'rate-case',
      'ratepayer',
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
    id: 'floodratereview',
    name: 'FloodRateReview',
    aliases: [
      'FEMA NFIP Risk Rating 2.0 Appeal Copilot',
      'Flood Insurance Decision Support',
    ],
    status: 'raw',
    hackathon_fit: 'high',
    one_liner:
      'Upload your FEMA NFIP renewal notice + property class - get a Risk Rating 2.0 appeal playbook for your flood zone, a mitigation-cost-vs-premium-discount calculator, and a stay-or-drop decision tree with state comparators.',
    decision_reason:
      "Synthesis-loop tick 18 (2026-08-12) surfaced this from the climate/energy/EV focus group. The convergent pain: FEMA Risk Rating 2.0 (RR2.0) caused an 11-39% decline in new NFIP policies and 5-13% decline in existing policies per a Dec 2025 peer-reviewed Journal of Catastrophe Risk and Resilience study; Louisiana 2023 premiums jumped 234% forcing 52,000 residents out of the program; ~77% of all US NFIP policies now pay more than pre-RR2.0; Texas had 26,300 NFIP policy lapses in 12 months with 86% of TX policyholders seeing monthly premium increases in 2025; premiums rise 18%/year (statutory cap) until reaching FEMA 'full-risk' rate. Hard data from this tick's ingest: hydesmith.senate.gov (Feb 3 2026 bipartisan Senate follow-up letter with peer-reviewed RR2.0 policy-collapse stats); cornyn.senate.gov (June 2025 Senate letter documenting TX 26,300 lapses, 86% increase, 18%/yr statutory cap). The convergent pain: a property owner with a 2026 NFIP renewal notice has no working 'should I appeal, mitigate, or drop?' decision support - the FEMA actuarial model is proprietary, the appeal process is opaque, the mitigation discount catalog varies by community, and the private flood-insurance market (Wright, Neptune, Aon) is fragmented. The closest existing corpus records are denialpilot (insurance denial appeal, tick 10), priorauthpilot (PA filing, tick 12), and billdr (hospital bill dispute, tick 12) - all are *appeal/dispute* products but for insurance, healthcare, and hospital bills, not for FEMA flood-insurance RR2.0. Saturated adjacent cells (FEMA NFIP appeals private sector, Wright Insurance, Neptune Flood) are pre-RR2.0 with no integrated appeal + mitigation + drop-out decision tree. Dominant kill risk: FEMA releases the RR2.0 actuarial model or ships a public appeal-status portal within 90 days, or Wright / Neptune Flood ships a consumer-facing RR2.0 appeal + mitigation + drop-out decision tree.",
    resurrection_trigger:
      "Open if 1,000 US NFIP policyholders (or their agents) install FloodRateReview, upload their renewal notice + property class, and at least 200 of them report an 'I appealed and won a reduction' or 'I mitigated and locked in a discount' or 'I switched to private flood and saved $X' or 'I dropped the policy and made a risk-informed decision' outcome in the first 90 days, with at least 50 reported appeal-wins or mitigation-locks or private-switch savings; close if FEMA releases the RR2.0 actuarial model or ships a public appeal-status portal within 90 days, or Wright / Neptune Flood ships a consumer-facing RR2.0 appeal + mitigation + drop-out decision tree.",
    tags: [
      'flood-insurance',
      'nfip',
      'fema',
      'risk-rating-2',
      'rr20',
      'appeal',
      'mitigation',
      'elevation-certificate',
      'b2c',
      'coastal',
      'hurricane',
      'flood-zone',
      'revenuecat',
      'annual-ritual',
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
];

const toAdd = newRecords.filter((r) => !existing.has(r.id));
if (toAdd.length === 0) {
  console.log('All 3 tick 18 records already in corpus, no-op.');
  process.exit(0);
}

db.ideas = db.ideas.concat(toAdd);
db.updated_at = '2026-08-12';
writeFileSync(dbPath, JSON.stringify(db, null, 2) + '\n', 'utf8');
console.log(`Added ${toAdd.length} new ideas:`);
toAdd.forEach((r) => console.log(`  + ${r.id} (${r.name})`));
console.log(`Total ideas: ${db.ideas.length}`);
