// tick22-new-records.js — append 3 civic/government consumer pain ideas
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
    id: 'irsnotice-decoder',
    name: 'IRSNotice Decoder',
    aliases: [
      'IRS Notice + Appeal Letter Generator',
      'CP2000 / CP504 / CP90 + CDP + Tax Court Petition Copilot',
    ],
    status: 'raw',
    hackathon_fit: 'high',
    one_liner:
      'Photo your IRS notice (CP2000, CP504, CP90, CP3219A, Letter 1058) - get a deadline-aware form-filler for the right appeal track (CDP hearing, Equivalent Hearing, or Tax Court petition) with a one-tap letter generator.',
    decision_reason:
      "Synthesis-loop tick 22 (2026-08-12) surfaced this from the civic/government focus group. The convergent pain: IRS 2025 workforce fell from ~103K to 76K (28% RIF) per Brookings; 2026 filing season Level of Service dropped from 70% to 56%; paper return processing time jumped from 27 to 36 days, with paper-returns-awaiting-processing up 5x. TIGTA FY2026 Major Management Challenges cites 25% IRS workforce reduction, 27% tax-examiner loss, 26% revenue-agent loss, 18% RICS loss (~$360M fraudulent-refund gap), 20% FY2026 budget cut proposed + $11.66B IRA rescission. The convergent pain: 100M+ taxpayer calls/year go unanswered (1M+ taxpayer-hours wasted on hold), and the IRS notice + appeal system has 3 different deadline clocks (30-day for Collection Due Process Form 12153 from CP90/CP504/LT11/Letter 1058, 90-day for Tax Court petition from CP3219A 90-day letter, 150-day if outside the US, $60 filing fee) with no equitable tolling. A taxpayer who misses the 30-day CDP deadline forfeits Tax Court review. The closest existing corpus records are fafsadecoder (tick 15, financial aid letter decoder) and 1099quarter (tick 20, quarterly tax copilot) - both *tax-adjacent* products but for student aid and self-employment quarterly, not for IRS notice + appeal. Saturated adjacent cells (TaxAct, H&R Block, TurboTax) are filing-led and do not provide a notice-decoder + deadline-aware appeal-letter workflow. Dominant kill risk: IRS restores workforce to 2024 levels and ships a public notice-decoder + appeal-letter generator within 90 days, or a state (CA, NY, TX) launches a free consumer-side IRS appeal helper within 90 days.",
    resurrection_trigger:
      "Open if 5,000 US taxpayers install IRSNotice Decoder, snap an IRS notice, and at least 1,500 of them report a 'I caught the right 30/90/150-day deadline' or 'I filed the right appeal (CDP/EH/Tax Court) on time' or 'I avoided a default judgment' or 'I learned the difference between CDP and Equivalent Hearing' outcome in the first 90 days, with at least 300 reported deadline-catches or appeal-filed-on-time or default-judgment-avoidance outcomes; close if IRS restores workforce to 2024 levels and ships a public notice-decoder + appeal-letter generator, or a state (CA, NY, TX) launches a free consumer-side IRS appeal helper within 90 days.",
    tags: [
      'irs',
      'notice',
      'cp2000',
      'cp504',
      'cp90',
      'cdp',
      'tax-court',
      'collection',
      'appeal',
      'b2c',
      'taxpayer',
      'revenuecat',
      'monthly-ritual',
      'shareable',
      'm1-ritual-digest',
      'm7-regulated-handle-conversion',
      'm9-counterparty-routing',
      'm19-multi-form-synthesization',
      'm20-external-party-routing',
      'm22-exception-to-recovery',
      'm23-field-level-provenance',
      'm25-authority-boundary',
    ],
    research: [
      'docs/RESEARCH-MARATHON-2026-08-11.md',
      'docs/RESEARCH-MARATHON-2026-08-11-TRACKER.md',
    ],
  },
  {
    id: 'proptax-appeal',
    name: 'PropTax Appeal',
    aliases: [
      'Property Tax Assessment Appeal Copilot',
      'Comparable-Sales Evidence Letter Generator',
    ],
    status: 'raw',
    hackathon_fit: 'high',
    one_liner:
      'Type your address + parcel - get the comparable-sales evidence packet for your county + a 1-page appeal letter for the Board of Equalization (or ARB/SOAH/district court) + deadline calendar by state.',
    decision_reason:
      "Synthesis-loop tick 22 (2026-08-12) surfaced this from the civic/government focus group. The convergent pain: $20-30B in successful property-tax appeals annually per local-government estimates, and most homeowners never protest because they don't know the comparable-sales method. Hard data from this tick's ingest: in 2025, 60-80% of Texas property-tax protests resulted in value reduction; Dallas County informal-stage 84% success rate; average homeowner saved $1,945/yr statewide; Collin County average reduction $25,624; 91.8% of TX winners used comparable sales as primary evidence. Texas property-tax protest deadline is May 15 or 30 days after the Notice of Appraised Value is mailed (whichever is later) — for 2026 that means May 15, 2026. Appeals proceed through informal review → ARB → SOAH (>$1M value, $1,500 deposit) or district court within 60 days of ARB order. The convergent pain: a US homeowner who just received the Notice of Appraised Value has (a) no working tool to identify the right comparable sales in their county, (b) no form-letter generator for the informal-review or ARB step, (c) no deadline calendar by state, and (d) no shareable side-by-side for the spouse or refinance-decision context. The closest existing corpus records are closinglens (tick 14, closing disclosure decoder) and homepulse-operator-score (tick 4, consumer-side operator trust) - both are *home-purchase* or *operator-trust* products but for closings and contractor trust, not for property tax protest. Saturated adjacent cells (Texas Tax Protest, Property Tax Pros, local law firms) are filing-led and do not provide a self-serve comparable-sales evidence generator + deadline calendar. Dominant kill risk: a state (TX, CA, FL, NY) launches a free public property-tax protest app within 90 days, or a county appraisal district (Harris, Dallas, Los Angeles, Cook) ships a free in-portal comparable-sales evidence tool within 90 days.",
    resurrection_trigger:
      "Open if 5,000 US homeowners install PropTax Appeal, enter their address + parcel, and at least 2,000 of them report a 'I found 3+ comparable sales below my assessment' or 'I filed a protest and got a $X reduction' or 'I learned the state deadline was X' or 'I shared the side-by-side with my spouse' outcome in the first 90 days, with at least 500 reported value-reductions or protest-filed or deadline-learned outcomes; close if a state (TX, CA, FL, NY) launches a free public property-tax protest app, or a county appraisal district (Harris, Dallas, Los Angeles, Cook) ships a free in-portal comparable-sales evidence tool within 90 days.",
    tags: [
      'property-tax',
      'appeal',
      'comparable-sales',
      'board-of-equalization',
      'arb',
      'appraisal',
      'homeowner',
      'b2c',
      'revenuecat',
      'annual-ritual',
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
  {
    id: 'govform-50state',
    name: 'GovForm 50State',
    aliases: [
      '50-State Government Form Decoder + Appeal Generator',
      'Traffic / FOIA / Voter / DMV 50-State Navigator',
    ],
    status: 'raw',
    hackathon_fit: 'high',
    one_liner:
      'Type your state + form (traffic, FOIA, voter reg, DMV REAL ID, state tax) - get a deadline-aware form-filler, a state-specific appeal-letter generator, and a printable share-ready filing packet.',
    decision_reason:
      "Synthesis-loop tick 22 (2026-08-12) surfaced this from the civic/government focus group. The convergent pain: 50-state government-form fragmentation is the single largest unresolved consumer-form pain. Hard data from this tick's ingest: Alabama's Online Traffic Resolution (OTR) system offers 9 options (A-I) — pay, traffic school, deferral, contest — entirely online; ~38 US states offer some form of online defensive-driving dismissal, but each state has a different portal, fee, and 5-12 month eligibility window. For the Nov 3, 2026 general election, 22 states + DC offer same-day registration; 42 states + DC offer online registration; 8 states (AR, ME, MS, MT, NH, ND, SD, WY) have no full online registration; deadlines range from Oct 4 (SC) to Oct 27 (CT, NV). Federal agencies hit a record FOIA backlog of ~340,000 overdue requests as of Sep 30, 2025, average wait 240+ days despite the statutory 20-day deadline; agencies increasingly issue 3-5-7 day 'scope-narrowing' letters that close requests if the requester doesn't respond. The convergent pain: a US consumer who needs to resolve a traffic ticket, register to vote, file a FOIA request, or renew a state professional license has (a) no working tool to identify the right state portal, (b) no form-filler that adapts to the 50-state-by-50-state deadline / fee / eligibility variations, (c) no appeal-letter generator for traffic + FOIA + state-license scenarios, and (d) no shareable filing packet for the spouse or co-counsel. The closest existing corpus records are dmv-passport-slot-alerter (raw, DMV+passport slot alert - ticket-finding wedge, not form-filling), 311-shadow-receipt (raw, 311 reporting), and parking-evidence-appeal (raw, parking ticket appeal) - all are *civic-adjacent* products but for slot alerts, 311 reporting, and parking-only, not for general 50-state form decoder. Saturated adjacent cells (TurboVote, Rock the Vote, individual state portals) are voter-registration-only or single-state-only. Dominant kill risk: TurboVote or Rock the Vote expands to 50-state form-decoder + appeal-letter generator as a free feature, or a state (CA, NY, TX) launches a free 50-state government form portal within 90 days.",
    resurrection_trigger:
      "Open if 10,000 US consumers install GovForm 50State, enter their state + form, and at least 3,000 of them report a 'I learned the right state deadline was X' or 'I filed the right appeal on time' or 'I caught a 5-day scope-narrowing letter' or 'I shared the filing packet with my spouse' outcome in the first 90 days, with at least 500 reported deadline-catches or appeal-filed-on-time or scope-letter-catches; close if TurboVote or Rock the Vote expands to 50-state form-decoder + appeal-letter generator as a free feature, or a state (CA, NY, TX) launches a free 50-state government form portal within 90 days.",
    tags: [
      'government',
      '50-state',
      'traffic',
      'foia',
      'voter-registration',
      'dmv',
      'form-decoder',
      'appeal',
      'b2c',
      'revenuecat',
      'weekly-ritual',
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
  console.log('All 3 tick 22 records already in corpus, no-op.');
  process.exit(0);
}

db.ideas = db.ideas.concat(toAdd);
db.updated_at = '2026-08-12';
writeFileSync(dbPath, JSON.stringify(db, null, 2) + '\n', 'utf8');
console.log(`Added ${toAdd.length} new ideas:`);
toAdd.forEach((r) => console.log(`  + ${r.id} (${r.name})`));
console.log(`Total ideas: ${db.ideas.length}`);
