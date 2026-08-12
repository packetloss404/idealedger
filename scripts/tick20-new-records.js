// tick20-new-records.js — append 3 SMB banking/lending consumer pain ideas
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
    id: 'mcadecoder',
    name: 'MCADecoder',
    aliases: [
      'Merchant Cash Advance Stack Analyzer',
      'MCA Factor Rate → Effective APR Decoder',
    ],
    status: 'raw',
    hackathon_fit: 'high',
    one_liner:
      'Upload your MCA contracts - get factor-rate to effective-APR conversion, payoff timeline projection, consolidation vs settlement comparison, and class-action eligibility check.',
    decision_reason:
      "Synthesis-loop tick 20 (2026-08-12) surfaced this from the SMB banking/lending focus group. The convergent pain: MCA debt trap is the highest-density SMB credit pain in 2025-26. Hard data from this tick's ingest: Federal Reserve 2025 Small Business Credit Survey - MCA application share rose to 12% in 2025 from 9% in 2024, effective APRs 50-100%, factor rate range 1.1-1.5; one owner borrowed $950K in three MCAs to cover tariff costs and owed $1.2M after fees. CFPB Section 1071 final rule (May 1 2026) extended tier-1 compliance to Jan 1 2028 and explicitly excluded MCAs from covered credit transactions - meaning the federal disclosure mandate does NOT cover MCAs through 2027. NY AG Yellowstone Capital settlement (Mar 2024) is the largest MCA action on record at ~$1B total debt relief with $534M merchant debt automatically canceled. NY Commercial Finance Disclosure Law (Aug 1 2023 full effect) mandates APR-style disclosure on MCAs of $2.5M or less with $2,000 per-violation civil penalties. r/smallbusiness 'Stuck in MCA debt spiral' (Nov 2025) draws the standard playbook - refinance into a term loan or LOC, merge multiple MCAs into a single product, negotiate a payoff, or settle for 40-60 cents on the dollar. r/loansforsmallbusiness warns 'you can no longer obtain an SBA loan if you have an MCA history' - the regulatory gap that locks victims out of the cheaper term-loan rescue path. The convergent pain: an SMB owner with 2-3 stacked MCAs at 50-100% effective APR has no working tool to (a) decode the factor rate into effective APR, (b) project the payoff timeline with daily-withholding, (c) compare the consolidation vs settlement vs bankruptcy options, (d) check class-action eligibility (the Yellowstone + RCG Advances + Kopa Lending + Yellowstone $9.8M Sept 2024 + online cash-advance $17M Mar 2025 settlements created a real class-action market), or (e) surface the SBA loan exclusion risk. The closest existing corpus records are denialpilot (insurance denial appeal, tick 10), priorauthpilot (PA filing, tick 12), and billdr (hospital bill dispute, tick 12) - all are *appeal/dispute* products but for insurance, healthcare, and hospital bills, not for MCA contracts. Saturated adjacent cells (MCA settlement companies, Factor Fox, Greenbox Capital, Yellowstone class-action counsel) are fragmented and post-default only; no consumer-side pre-default factor-rate decoder + consolidation comparator exists. Dominant kill risk: a top-3 fintech (Kabbage, OnDeck, Bluevine) ships an in-app factor-rate → APR decoder + consolidation navigator as a free feature, or a state (NY, CA, FL) extends CFDL-style APR disclosure to MCAs >$2.5M within 90 days.",
    resurrection_trigger:
      "Open if 2,000 US SMB owners with 1+ active MCAs install MCADecoder, upload their contracts, and at least 400 of them report a 'I learned my effective APR is 50-100%' or 'I consolidated 2-3 MCAs into 1 term loan' or 'I qualified for a class action' or 'I avoided default by 30+ days' outcome in the first 90 days, with at least 100 reported consolidation or class-action-qualification or default-avoidance outcomes; close if a top-3 fintech (Kabbage, OnDeck, Bluevine) ships an in-app factor-rate → APR decoder + consolidation navigator as a free feature, or a state (NY, CA, FL) extends CFDL-style APR disclosure to MCAs >$2.5M within 90 days.",
    tags: [
      'mca',
      'merchant-cash-advance',
      'factor-rate',
      'effective-apr',
      'consolidation',
      'class-action',
      'small-business',
      'b2b',
      'b2c',
      'cfpb-1071',
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
    id: '1099quarter',
    name: '1099Quarter',
    aliases: [
      '1099 / Sole-Prop Quarterly Estimated Tax Copilot',
      '1040-ES Auto-Calc + Auto-File',
    ],
    status: 'raw',
    hackathon_fit: 'high',
    one_liner:
      'Connect your Stripe / PayPal / Square / Venmo / Etsy - get quarterly estimated tax auto-calculated by state, auto-filed 1040-ES, year-end 1099-NEC reconciliation included.',
    decision_reason:
      "Synthesis-loop tick 20 (2026-08-12) surfaced this from the SMB banking/lending focus group. The convergent pain: 1-1.5M new 1099 workers/yr in the US, and quarterly estimated tax is the #1 SMB-side tax pain. Hard data from this tick's ingest: Found Plus ($35/mo) pays 1.5% APY on balances up to $20K plus in-app Schedule C quarterly tax payments; Found Pro ($80/mo) pays 2.5% APY uncapped with 1% cashback; Found customers who signed up after Nov 1 2025 need $5K/mo debit spend for the 2.0% headline rate. Existing quarterly-tax tools (Keeper, Bonsai, QuickBooks Self-Employed, Found Tax) are fragmented and most lack direct ACH debit for the 1040-ES quarterly payment. The convergent pain: a sole-prop / freelancer with $80K-$200K/yr in 1099 income has to (a) pull a YTD P&L from each platform, (b) apply the correct state + federal marginal tax rate, (c) calculate the safe-harbor amount, (d) file Form 1040-ES by April 15 / June 15 / Sept 15 / Jan 15, (e) make the payment via IRS Direct Pay or EFTPS, (f) reconcile year-end 1099-NEC vs their books, and (g) handle TIN-mismatch IRS B-Notice (B-Notice is the penalty notice the IRS sends when a 1099 filer has the wrong TIN for a payee). The closest existing corpus records are job-note-structurer (job notes for service-business recap, tick 1), brief-case-onboarding (client intake for professional services, tick 5), and practice-pulse (PMS reminder, tick 5) - all are *SMB workflow* products but for job notes, client intake, and PMS, not for tax. Saturated adjacent cells (Found Tax, Keeper, Bonsai, QuickBooks Self-Employed) are either expensive ($80/mo Found Pro) or lack direct-ACH auto-file. Dominant kill risk: Found or Keeper ships direct-ACH 1040-ES auto-file as a free feature, or the IRS ships a native 'quarterly tax auto-calc from connected accounts' tool in IRS Direct Pay within 90 days.",
    resurrection_trigger:
      "Open if 5,000 US sole-props / 1099 workers / freelancers install 1099Quarter, connect their Stripe / PayPal / Square, and at least 1,500 of them report a 'I auto-filed 1040-ES for the first time without penalties' or 'I caught a 1099-NEC TIN mismatch' or 'I had a clean year-end 1099-NEC reconciliation' or 'I switched from Keeper / Found Tax' outcome in the first 90 days, with at least 300 reported auto-file or TIN-mismatch-catch or year-end-reconciliation outcomes; close if Found or Keeper ships direct-ACH 1040-ES auto-file as a free feature, or the IRS ships a native 'quarterly tax auto-calc from connected accounts' tool in IRS Direct Pay within 90 days.",
    tags: [
      '1099',
      'sole-prop',
      'freelancer',
      'quarterly-tax',
      '1040-es',
      'schedule-c',
      'tin-mismatch',
      'b-notice',
      'stripe',
      'paypal',
      'square',
      'b2c',
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
  {
    id: 'supplierswitch',
    name: 'SupplierSwitch',
    aliases: [
      'Restaurant SMB Supplier Switching + Par-Level Automation',
      'Restaurant COGS Comparator',
    ],
    status: 'raw',
    hackathon_fit: 'high',
    one_liner:
      'Connect your POS + invoices - get a 90-day COGS benchmark, a par-level forecast, a 3-supplier price compare per SKU, and a one-tap switch request to a lower-cost vendor.',
    decision_reason:
      "Synthesis-loop tick 20 (2026-08-12) surfaced this from the SMB banking/lending focus group. The convergent pain: restaurant SMB supplier switching + par-level automation is the #1 restaurant operations waste. Hard data from this tick's ingest: MarketMan 2025 Restaurant Procurement Survey - 80% of independent restaurants experience a menu-item stockout at least once per week, costing ~$320 each; combined annual procurement waste runs $101K-$187K per single location; 78% of stockouts stem from internal ordering errors (par-level miscalc 42%, seasonal demand misses 19%, kitchen/purchasing miscommunication 17%). Toast Capital Loans are $1K-$300K per location, WebBank-issued, target 90/270/360 day terms, with daily card-volume-based repayment; restaurants that take a Toast working-capital loan subsequently process 12% more transactions on Toast (vertical SaaS lock-in). The convergent pain: an independent restaurant owner with $1.2M/yr revenue has 3-5 food vendors (sysco.com, US Foods, local produce, Restaurant Depot, butcher), 80+/wk stockouts at $320 each = $25,600/yr lost margin, and no working tool to (a) compare unit prices across vendors per SKU, (b) forecast par levels based on 90-day sales velocity, (c) auto-reorder to a preferred vendor, or (d) capture the 78% internal-error share as a margin recovery line. The closest existing corpus records are homepulse-operator-score (consumer-side operator trust, tick 4) and taponly-card-directory (operator card directory, tick 4) - both are *operator accountability* products but for the consumer side, not the SMB operator side. Saturated adjacent cells (Blue Apricot, Restaurant365, MarketMan, Galley, Cut+Dry, BlueCart) are enterprise-restaurant tiered at $500+/mo with implementation costs. Dominant kill risk: MarketMan or Blue Apricot ships a par-level-automation + 3-supplier price compare for sub-$200/mo, or Toast Capital ships a supplier switching recommendation as a free in-app feature within 90 days.",
    resurrection_trigger:
      "Open if 2,000 US independent restaurant operators install SupplierSwitch, connect their POS + invoices, and at least 500 of them report a 'I switched vendors and saved $X/yr' or 'I caught a 78% internal-error stockout pattern' or 'I automated my par-level reorder' or 'I recovered $X/yr in margin' outcome in the first 90 days, with at least 100 reported vendor-switches or stockout-recoveries or par-level-automations; close if MarketMan or Blue Apricot ships a par-level-automation + 3-supplier price compare for sub-$200/mo, or Toast Capital ships a supplier switching recommendation as a free in-app feature within 90 days.",
    tags: [
      'restaurant',
      'smb',
      'supplier',
      'cogs',
      'par-level',
      'inventory',
      'stockout',
      'toast',
      'marketman',
      'b2b',
      'b2c',
      'revenuecat',
      'monthly-ritual',
      'shareable',
      'm1-ritual-digest',
      'm9-counterparty-routing',
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
];

const toAdd = newRecords.filter((r) => !existing.has(r.id));
if (toAdd.length === 0) {
  console.log('All 3 tick 20 records already in corpus, no-op.');
  process.exit(0);
}

db.ideas = db.ideas.concat(toAdd);
db.updated_at = '2026-08-12';
writeFileSync(dbPath, JSON.stringify(db, null, 2) + '\n', 'utf8');
console.log(`Added ${toAdd.length} new ideas:`);
toAdd.forEach((r) => console.log(`  + ${r.id} (${r.name})`));
console.log(`Total ideas: ${db.ideas.length}`);
