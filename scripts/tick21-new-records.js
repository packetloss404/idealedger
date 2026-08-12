// tick21-new-records.js — append 3 food/grocery/SNAP consumer pain ideas
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
    id: 'ebtshield',
    name: 'EBTShield',
    aliases: [
      'SNAP EBT Card Skimming Detection + Stolen-Benefit Recovery',
      'EBT Chip-Card Migration Tracker',
    ],
    status: 'raw',
    hackathon_fit: 'high',
    one_liner:
      'Link your EBT card - get a real-time skimming-alert push, a stolen-benefit replacement claim generator, and a state-aware chip-card migration tracker so you know when your card gets a free upgrade.',
    decision_reason:
      "Synthesis-loop tick 21 (2026-08-12) surfaced this from the food/grocery/SNAP focus group. The convergent pain: 41.7M Americans on SNAP (USDA FY2024) are exposed to magnetic-stripe EBT card skimming - PA reported 5,100 EBT skimming cases in the first 5 months of 2026 alone totaling $2.5M in stolen SNAP benefits; NJ launched a 4-week chip-card pilot in July 2026; PA budgeted $14M (combined state + federal) to complete transition by Jan 1 2028. USDA FNA confirms 7 states (CA, OK, AL, NJ, MA, MD, MI) have already issued chip EBT cards in 2025-2026, with NY, OR, VA, AR in progress. A bipartisan federal bill would require states to issue chip SNAP cards within 2 years, stop issuing magstripe within 4, and reissue all remaining as chip-only within 5, fully USDA-funded. The convergent pain: a SNAP recipient whose magstripe EBT card is skimmed at an ATM or POS terminal has (a) no real-time alert, (b) no clear path to file a stolen-benefit replacement claim, (c) no visibility into when their state will issue a free chip-card upgrade, and (d) often a 30-60 day wait for replacement benefits while the family goes hungry. The closest existing corpus records are pet-recall-match (raw, pet food recall watch) - similar pattern (recalls + per-user matching) but for pet food not SNAP. Saturated adjacent cells (state EBT card issuers, USDA FNA modernization, card-issuer fraud teams) are reactive only; no consumer-side pre-theft alert + post-theft claim generator exists. Dominant kill risk: a state (CA, NY, PA) ships a free in-app EBT skimming alert + stolen-benefit replacement workflow within 90 days, or the federal bipartisan chip-mandate bill passes with mandatory state-side consumer app funding within 90 days.",
    resurrection_trigger:
      "Open if 10,000 US SNAP households install EBTShield, link their EBT card, and at least 2,000 of them report a 'I caught a skimming attempt in real-time' or 'I recovered stolen benefits' or 'I learned my state issued a chip upgrade' or 'I avoided a 30-60 day benefits wait' outcome in the first 90 days, with at least 500 reported skimming-catches or benefit-recoveries; close if a state (CA, NY, PA) ships a free in-app EBT skimming alert + stolen-benefit replacement workflow within 90 days, or the federal bipartisan chip-mandate bill passes with mandatory state-side consumer app funding within 90 days.",
    tags: [
      'snap',
      'ebt',
      'skimming',
      'chip-card',
      'usda',
      'food-stamps',
      'stolen-benefits',
      'replacement',
      'b2c',
      'b2b',
      'low-income',
      'revenuecat',
      'weekly-ritual',
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
    id: 'pricebench',
    name: 'PriceBench',
    aliases: [
      'Household Meal-Cost Inflation Index',
      'Itemized SKU Inflation Tracker + SNAP Substitute Swaps',
    ],
    status: 'raw',
    hackathon_fit: 'high',
    one_liner:
      'Scan your grocery receipt - get a household-specific meal-cost index vs USDA ERS regional CPI, an itemized SKU inflation tracker, and a SNAP-eligible store-brand substitute swap list.',
    decision_reason:
      "Synthesis-loop tick 21 (2026-08-12) surfaced this from the food/grocery/SNAP focus group. The convergent pain: 41.7M SNAP households and ~60M US food-insecure households are absorbing the highest food-at-home CPI in 3 years. Hard data from this tick's ingest: April 2026 CPI - food-at-home +0.7% MoM (biggest jump since Aug 2022) and +2.9% YoY (worst since Aug 2023); ground beef $6.90/lb (+18.9% YoY, +78% since Jan 2020); ground roast coffee $9.72/lb (+29% YoY). USDA ERS April 2026 - fresh vegetables +3.1% MoM, beef & veal +3.1% MoM, sugar & sweets +6.3% YoY, nonalcoholic beverages +5.1% YoY. CouponFollow Feb 2024 to Feb 2026 - 14 of 25 staples rose in price (coffee +55%, lettuce +39%, ground beef +31%, sirloin +21%, OJ +15%); 'taco night' for a family of four now ~$25 vs $17.50 six years ago. Consumer Reports May 2025 investigation - Kroger builds an 'income predictor' and 'loyalty' shopper profile from loyalty data; inaccurate profiles result in lower-income shoppers getting fewer of Kroger's best discounts, plus some 'discounted' items silently charged at full price. The convergent pain: a US household that has been told 'inflation is cooling' since 2024 is experiencing record grocery bills because (a) generic CPI understates the items they actually buy, (b) loyalty-card price personalization can charge them MORE than the shelf price, (c) SNAP-eligible store-brand substitutes are not surfaced at the point of purchase, and (d) the USDA ERS regional CPI doesn't match their actual purchase mix. The closest existing corpus records are local-marketplace-reprice (raw, marketplace auto-reprice) and supplierswitch (tick 20, restaurant supplier switching) - both are *price-comparison* products but for marketplace listings and restaurant procurement, not for household groceries. Saturated adjacent cells (Kroger Boost, Walmart+, Ibotta, Fetch, CouponFollow, Capital One Shopping) are loyalty-discount-led and do not provide a household-specific inflation index. Dominant kill risk: Kroger or Walmart ships a household-inflation-index + itemized SKU tracker as a free loyalty-app feature, or a state (CA, NY, TX) mandates a real-time grocery-price-transparency app within 90 days.",
    resurrection_trigger:
      "Open if 5,000 US households install PriceBench, scan 3+ grocery receipts, and at least 1,500 of them report a 'I learned my real inflation this year is X%' or 'I switched to store-brand and saved $Y/yr' or 'I caught a loyalty-card price-personalization overcharge' or 'I shared my meal-cost index with my spouse' outcome in the first 90 days, with at least 300 reported real-inflation-learning or store-brand-switches or loyalty-overcharge-catches; close if Kroger or Walmart ships a household-inflation-index + itemized SKU tracker as a free loyalty-app feature, or a state (CA, NY, TX) mandates a real-time grocery-price-transparency app within 90 days.",
    tags: [
      'grocery',
      'food-inflation',
      'meal-cost',
      'sku-tracker',
      'snap',
      'low-income',
      'store-brand',
      'substitute',
      'b2c',
      'household',
      'revenuecat',
      'weekly-ritual',
      'shareable',
      'm1-ritual-digest',
      'm14-quote-price-registrar',
      'm16-change-digest',
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
    id: 'feebust',
    name: 'FeeBust',
    aliases: [
      'Delivery App Fee Auditor + Direct-Order Router',
      'DoorDash / Uber Eats / Instacart Fee Decomposer',
    ],
    status: 'raw',
    hackathon_fit: 'high',
    one_liner:
      'Paste a delivery app receipt - get a line-by-line fee decode, a tip-bait arbitration claim generator, and a one-tap restaurant-direct-order router that bypasses the app fee stack.',
    decision_reason:
      "Synthesis-loop tick 21 (2026-08-12) surfaced this from the food/grocery/SNAP focus group. The convergent pain: delivery-app fee opacity is at a 2026 peak. Hard data from this tick's ingest: viral Jan 1 2026 r/confession post alleging DoorDash 'Priority Fee' and 'Driver Benefit Fee' go 100% to the company hit 80,000+ upvotes; existing threads show DoorDash's $5 'long-distance' charge jumped from $1.99 to $4.99 in weeks. Instacart 'Straight to Me' priority fee complaint - customer paid a priority fee, was told it only 'prioritized the order in the queue' (not guaranteed delivery time), refund denied; user filed with Washington AG and FTC. Capital One to acquire Brex in $5.15B cash-and-stock transaction Jan 2026 (B2B card context but mirrors the B2C fee pressure). The convergent pain: a US consumer who orders DoorDash / Uber Eats / Instacart sees a $24.50 receipt for a $14.50 subtotal and cannot tell which line is the restaurant, which is the driver, which is the platform, which is the 'priority fee', and which is the 'driver benefit fee'. Tip-baiting - the driver gets a 1-star rating if the customer does not tip - is a documented industry pattern; the FTC has received 1,200+ complaints in 2025. The closest existing corpus records are otddecoder (tick 16, auto OTD price sticker decoder), surchargescope (tick 10, insurance bill decoder), and vetbill-decoder (tick 19, vet bill decoder) - all *bill decoder* products but for auto, insurance, and vet bills, not for delivery app fees. Saturated adjacent cells (Capital One Shopping, Ibotta, Fetch Rewards) are coupon / cashback-led and do not provide a fee-decode + tip-bait arbitration + direct-order routing workflow. Dominant kill risk: DoorDash or Uber Eats ships a transparent fee-breakdown + tip-protection workflow as a free app feature within 90 days, or a state (CA, NY, WA) mandates delivery-app fee transparency within 90 days.",
    resurrection_trigger:
      "Open if 5,000 US delivery-app users install FeeBust, paste 1+ delivery app receipt, and at least 1,500 of them report a 'I caught a hidden fee' or 'I recovered a tip-bait charge' or 'I switched to a restaurant-direct-order' or 'I shared the fee decode with my partner' outcome in the first 90 days, with at least 300 reported hidden-fee-catches or tip-bait-recoveries or direct-order-switches; close if DoorDash or Uber Eats ships a transparent fee-breakdown + tip-protection workflow as a free app feature, or a state (CA, NY, WA) mandates delivery-app fee transparency within 90 days.",
    tags: [
      'delivery',
      'doordash',
      'uber-eats',
      'instacart',
      'fee',
      'tip-bait',
      'restaurant-direct',
      'b2c',
      'consumer',
      'revenuecat',
      'weekly-ritual',
      'shareable',
      'm1-ritual-digest',
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
  console.log('All 3 tick 21 records already in corpus, no-op.');
  process.exit(0);
}

db.ideas = db.ideas.concat(toAdd);
db.updated_at = '2026-08-12';
writeFileSync(dbPath, JSON.stringify(db, null, 2) + '\n', 'utf8');
console.log(`Added ${toAdd.length} new ideas:`);
toAdd.forEach((r) => console.log(`  + ${r.id} (${r.name})`));
console.log(`Total ideas: ${db.ideas.length}`);
