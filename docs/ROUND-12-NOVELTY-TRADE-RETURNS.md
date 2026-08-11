# Competitor Hunt — Batch 1: Trade / Field-Service / Returns / Payments

Round: shipaton11 · Date: 2026-08-10
Method: iTunes Search API + Google Play (curled), GitHub API, HN Algolia, Product Hunt (fetched), Mojeek/Bing/DuckDuckGo (mostly bot-blocked; Mojeek gave partial results), direct site verification. Search engines (DDG/Bing/Google/Brave/Qwant) actively block bots this round; app-store + GitHub + HN + PH channels were the reliable data sources.

---

## CANDIDATE 1 — A1+A2 "Instant photo+voice → branded quote/estimate for solo tradespeople"

**Search log**
- iTunes/Play: "estimate tradespeople", "voice estimate", "text to quote", "photo invoice", "estimate app tradesperson photo", "voice to estimate contractor"
- GitHub: "photo estimate construction" · HN: "photo estimate contractor" · Mojeek: "photo estimate app tradespeople"
- Hits: **SimplyWise Cost Estimator** (photo→estimate, 4.8★, 30,863 ratings, "10,000+ contractors"); **FieldQuote** ("Snap photos, add basic details, get a complete estimate … AI-powered pricing"); **Billio: AI Voice to Invoice** ("turn your voice into a ready-to-send invoice/estimate in seconds"); **VoiceEstimate** (voice notes→visit records for plumbers/electricians); **Contractor+** ("AI estimator"); incumbents Jobber / Housecall Pro / ServiceTitan / Fergus / TradeTab (all ship photo capture + quotes); HN "Show HN: DIY AI that estimates home improvement costs from a video".

**Closest existing product:** SimplyWise Cost Estimator — https://apps.apple.com/us/app/simplywise-cost-estimator/id6670619664 (runner-up: FieldQuote — https://apps.apple.com/us/app/estimate-invoice-fieldquote/id6755937048 ; voice wedge: Billio — https://apps.apple.com/us/app/billio-ai-voice-to-invoice/id6739887355)

**Classification:** DIRECT. Same core job (photo → AI-priced → branded estimate PDF, mobile sub, solo trades) already sold at scale. The only unoccupied slivers are the *inbound* channel (customer texts the photo) and *dictate-don't-type* (Billio covers voice→invoice; VoiceEstimate covers voice→visit notes).

**Graveyard check:** The field-service estimate/invoice app layer is heavily churned (dozens of generic "Estimate Maker" apps with thin differentiation); the money consolidated into suites (ServiceTitan IPO Dec 2024 ~$8.9B; Jobber/Housecall Pro well-funded). AI photo-estimators are a 2025-26 gold rush — SimplyWise and FieldQuote are both recent releases, so this wedge is being actively fought over right now, not abandoned.

**Novelty Confidence:** 15/100 — the headline mechanic exists at scale (30k+ ratings) and 2+ direct clones launched in the last year.

**Why-doesn't-this-exist assessment:** N/A — it exists. The remaining "text-in photo + voice" wedge is an opportunity only as UX differentiation; every suite will absorb it within 18 months.

**Kill risk:** COMMODITY AI WRAPPER (photo→estimate is now an LLM/VLM call — SimplyWise proves it and it will be copied) · NATIVE SUBSTITUTE (Jobber/Housecall Pro/ServiceTitan own the workflow and CRM) · low differentiation.

---

## CANDIDATE 2 — A3+A8 "Photo→invoice auto-build for micro field-service ops; catches un-invoiced work"

**Search log**
- iTunes/Play: "photo invoice", "field service invoice", "AI invoice", "uninvoiced", "AI job invoice field", "AI invoice contractor"
- GitHub: "field service invoice photo", "photo invoice" · Bing RSS: "invoice from photo app field service"
- Hits: full-suite incumbents Jobber / Housecall Pro / Workiz / **ServiceM8** / **Invoice ASAP** (field service invoicing, 2010-era) / Invoice2go / Invoice Simple — all let you *attach* photos to an invoice; none auto-build invoice line-items from job photos, and none market "catch jobs completed but never invoiced." The photo→*estimate* tools (SimplyWise, FieldQuote) don't do invoices.

**Closest existing product:** Jobber — https://www.getjobber.com (or ServiceM8 https://www.servicem8.com ; Invoice ASAP https://invoiceasap.com ). No product found doing the *auto-build-from-photos + uninvoiced-catch* pair.

**Classification:** PARTIAL — surrounding workflow (jobs → photos → invoice) is fully occupied by suites at every price point; the two specific differentiators (AI photo→line-items, un-invoiced-work flag) are open.

**Graveyard check:** The 1-3 person field-service invoice space is brutally consolidated (Invoice2go→BILL, Invoice Simple, Invoice ASAP surviving; many small apps churn). Nothing specifically died over "photo→invoice" — it was simply never a standalone wedge; it has always been a suite feature request.

**Novelty Confidence:** 55/100 for the *combination*; ~20/100 for the general job→invoice job.

**Why-doesn't-this-exist assessment:** Partial absence. Photo→invoice auto-build is technically trivial today (OCR/VLM), so the absence = incumbents haven't shipped it yet, not that it can't be built. That's an opportunity window, not a warning — but the window closes when Jobber/ServiceM8 fold it in.

**Kill risk:** COMMODITY AI WRAPPER · NATIVE SUBSTITUTE (suite features) · consumer-won't-pay a 3rd subscription next to an existing Jobber/ServiceM8 plan.

---

## CANDIDATE 3 — A4 "Parts board" (per-job parts request → supplier quote → owner approve → ETA thread; flags jobs stalled on parts)

**Search log**
- iTunes/Play: "parts ordering", "parts request", "parts inventory app technician", "parts ordering contractor"
- GitHub: "partcycle", "tradesafe" · Wikipedia (ServiceTitan acquisitions) · Bing/Mojeek: "parts request approval software technician"
- Hits: app stores return only parts *retail* apps (AutoZone, Parts Town, Advance Auto, PartsGeek) — nothing for the request/approval workflow. Parts are handled as *modules* inside field-service suites (ServiceTitan parts/P.O. flow, Fergus parts on quotes, Jobber integrations). **PartCycle** (GitHub org 2015-2018, parts-marketplace/checkout code) — partcycle.com is now dead. "TradeSafe" = unrelated South-African KYC company.

**Closest existing product:** ServiceTitan parts module — https://www.servicetitan.com (parts ordering/P.O. inside the suite); no standalone "parts board" app found.

**Classification:** PARTIAL via suite modules; NO OBVIOUS MATCH as a standalone mobile product for the owner-approval + ETA-thread mechanic.

**Graveyard check:** The only parts-specific startup surfaced (PartCycle) is effectively dead — standalone parts logistics for home services folded; the incumbent suite (ServiceTitan) absorbed the job.

**Novelty Confidence:** 40/100 as a standalone; the board UX (per-job approval thread + stalled-job flag) is genuinely unusual.

**Why-doesn't-this-exist assessment:** Warning. In a 1-3 person op the "owner" is usually the same person as the tech who requests the part — the two-party approval loop is a *false problem* for the target market. Real parts complexity lives in bigger shops that already run ServiceTitan. The absence reflects no demand at the target size, not a gap.

**Kill risk:** FALSE CERTAINTY (owner≈requester at micro scale) · two-party adoption cold start (needs suppliers + owners) · low frequency (parts-only jobs) · feature-not-product (Jobber/ServiceTitan module).

---

## CANDIDATE 4 — I1 "Return intake evidence for small sellers / online resellers" (photo condition + cause code + disposition: restock/refurb/refuse/charity, dispute-ready)

**Search log**
- iTunes/Play: "returns seller", "returns for sellers", "return evidence", "damage photos", "returns seller evidence"
- Direct: loopreturns.com · HN: "Returnly"
- Hits: mid-market returns *platforms*: **Loop Returns** (5,000 brands, returns/exchanges/tracking/fraud — Shopify-first), ReturnGo, AfterShip Returns, Happy Returns (acquired by PayPal), ZigZag, ReturnLogic. Evidence-angle apps are tiny and *buyer-side*: **RealProof: Return Evidence** and "Return Evidence Folder 2026" (consumer evidence folders). Returnly: raised $3.2M seed, **acquired by Affirm (2021) and the standalone returns product was shut down** — classic consolidation graveyard.

**Closest existing product:** Loop Returns — https://loopreturns.com (for brands, not micro resellers). For micro-seller dispute evidence: nothing meaningful found.

**Classification:** PARTIAL — returns *operations* (incl. fraud) exist at mid-market; the micro-reseller phone-intake + disposition + evidence-to-dispute workflow is not occupied.

**Graveyard check:** Returns software is a graveyard-by-acquisition (Returnly→Affirm, Happy Returns→PayPal) — monetization/pricing pressure is brutal; platforms consolidate and squeeze margins. The micro-segment is served by marketplaces themselves (eBay/Poshmark/Amazon adjudicate their own returns).

**Novelty Confidence:** 55/100.

**Why-doesn't-this-exist assessment:** Mixed. The absence at micro scale is partly a warning: marketplace-owned adjudication means a reseller's "dispute-ready evidence" rarely has an audience — eBay/Poshmark decide, and they rarely accept seller photo evidence. Low frequency + marketplace-owns-adjudication are structural.

**Kill risk:** HOST-OWNS-CORRECTION (marketplaces adjudicate returns; evidence doesn't win) · low frequency · consumer-won't-pay (resellers are price-sensitive) · crowded adjacents (Loop/ReturnGo) at the size that *can* pay.

---

## CANDIDATE 5 — I4 "Sell-to-ship kit for large items" (camera measure → freight class → live quotes → mandatory damage photos, for resellers shipping furniture/large items)

**Search log**
- iTunes/Play: "freight class", "measure furniture shipping", "freightos", "uship", "shippo", "measure dimensions shipping box"
- Hits: **FreightSizer: 3D Dimensions AI** — https://apps.apple.com/us/app/freightsizer-3d-dimensions-ai/id6738141881 (camera dimensioning + density + NMFC freight class, "updated NMFC LTL classification standards"); **uShip** — https://apps.apple.com/us/app/uship/id457045275 (live carrier quotes for cars/furniture/moves — the quote side); Freightos Book / Uber Freight / DAT (broker/load-board, not reseller); Shippo/Easyship/Rollo (parcel labels, not LTL); AR measure apps (Tape Measure, meesure — measure only).

**Closest existing product:** uShip (https://www.uship.com) for live quotes + FreightSizer for measure/class. No single product assembles measure→class→quote→damage-photo for resellers.

**Classification:** PARTIAL — every component exists (uShip, FreightSizer, generic AR measure, Shippo); the *bundled reseller kit* with mandatory damage-photo capture is unoccupied.

**Graveyard check:** No dedicated "reseller large-item shipping kit" found to have failed — the space instead fragmented into platforms (uShip, Freightos) and measurement utilities. uShip/Freightos are alive and well-funded, so the quote side is platform-owned.

**Novelty Confidence:** 50/100 — novel bundle, no novel component.

**Why-doesn't-this-exist assessment:** Mostly a warning. Live quotes require carrier/API integration that uShip and Freightos already own (two-sided + platform owns). Camera-measure accuracy is a tech limit for freight-classing (fees if wrong). Resellers sell big items infrequently (low frequency).

**Kill risk:** two-party adoption cold start · PLATFORM OWNS (uShip/Freightos/ebay shipping own quotes) · tech limits (measurement accuracy) · low frequency.

---

## CANDIDATE 6 — I8 "Local marketplace auto-reprice-to-deadline" (FB/Craigslist; eBay has auto-reprice, local doesn't)

**Search log**
- iTunes/Play: "repricer", "price tracker marketplace", "price drop facebook marketplace", "seller app facebook marketplace"
- Product Hunt: "facebook marketplace" · GitHub/HN: "repricer"
- Hits: centralized-marketplace repricers exist and are proven — **ProfitProtectorPro** (mobile repricer for Amazon FBA), AWW (Kaspi marketplace repricer), Repricer.com / InkFrog / Sellbrite (eBay/Amazon), and eBay's native auto-reprice. For local: **Hero: Sell, Price & List Fast** (AI identify→price→list on eBay *and* FB Marketplace, 1M+ scans — but no auto-drop-to-deadline); **Scout: Marketplace Alerts** (buyer-side); **Seller by Facebook** (Meta's official seller app); FB Marketplace native auto-renew/boost.

**Closest existing product:** Hero — https://apps.apple.com/us/app/hero-sell-price-list-fast/id6479718293 (adjacent: AI pricing/listing for FB) ; native substitute: Meta's Seller app.

**Classification:** ADJACENT (Hero, Scout) / NO OBVIOUS MATCH for the specific reprice-to-deadline automation on local marketplaces.

**Graveyard check:** Repricing as a business model thrives *only where an API exists* (eBay/Amazon). No local repricer was found to have failed — because the mechanic was never buildable: FB/Craigslist have no listing-edit API and block automation (TOS); FB already auto-renews listings natively.

**Novelty Confidence:** 80/100 as a mechanic (nothing does this for local) — but this is the "false certainty" pattern.

**Why-doesn't-this-exist assessment:** Warning dressed as opportunity. The absence is structural: no platform API → fragile scraping → TOS-ban risk → FB's own renewal does 80% of the job → listings expire in ~7 days (low frequency). "It doesn't exist on local because it can't legally/technically exist, and the platform already half-owns it."

**Kill risk:** HOST-OWNS-CORRECTION (FB/Craigslist control listings + native renewal) · low frequency (7-day listing cycles) · platform TOS.

---

## CANDIDATE 7 — H2 "Subscription intake with easy-cancel for small subscription businesses" (FTC-aware sign-up + pre-wired cancel to cut chargebacks)

**Search log**
- iTunes/Play: "subscription billing small business", "recurring billing", "subscription manager" · HN: "click to cancel"
- Hits: billing platforms already ship self-serve cancel portals — Stripe Billing Customer Portal, Recurly, Chargebee, Paddle, ReCharge, Lemon Squeezy (acquired by Stripe); chargeback-defense cos (Chargeflow, ChargebackStop) already fight negative-option disputes. The *consumer* side is crowded and inverted (Rocket Money/Truebill, Subee cancel subscriptions *for* consumers). FTC signal: the FTC "click-to-cancel" rule was **vacated by the 8th Circuit in July 2025** (HN 44504699) — the regulatory tailwind is currently muted (state bills + card networks still push).

**Closest existing product:** Stripe Billing Customer Portal — https://stripe.com/billing (or Recurly https://recurly.com / Chargebee https://www.chargebee.com self-serve portals).

**Classification:** PARTIAL — the payment processors/merchant-of-record already own the cancel UX and the dispute workflow; an overlay app is squeezed between billing-platform features and consumer cancel apps.

**Graveyard check:** The FTC rule that would have created the compliance pull was struck down; the merchant side has consolidated to Stripe/Paddle/Recurly/Chargebee, and consumer cancel apps (Truebill→Rocket Money) consolidated/raised big. Little room for a merchant-side third party.

**Novelty Confidence:** 30/100.

**Why-doesn't-this-exist assessment:** It exists in pieces owned by platforms. Absence of a standalone product = warning: host-owns-correction (the processor owns the merchant's cancel page) and there's no standalone regulatory stick currently.

**Kill risk:** PLATFORM OWNS (processors/merchant-of-record) · host-owns-correction · commodity · consumer-won't-pay a separate subscription for the privilege.

---

## CANDIDATE 8 — H3 "Chargeback-evidence packager for micro merchants" (one-tap export of cancel proof for the response window)

**Search log**
- iTunes: "chargeback" · Product Hunt: "chargeback" · HN: "chargebacks911"
- Hits: full stack of chargeback tools (desktop/mid-market): **Chargeflow** (PH: "Prevent, Recover and Deflect Chargebacks on Autopilot"), **ByeDispute** ("prevent disputes before getting banned from Stripe"), ChargebackStop, Chargebacks911, Justt, Midigator, Verifi (Visa), Ethoca (Mastercard), ClearSale. Platform-native: Stripe/Shopify/PayPal dispute UIs now include evidence submission, and processors increasingly auto-fight on behalf of merchants.

**Closest existing product:** Chargeflow — https://www.producthunt.com/products/chargeflow (or ByeDispute; or Stripe's built-in dispute management https://stripe.com/payments/payment-methods/stripe-disputes).

**Classification:** PARTIAL — evidence gathering/defense exists as web tools and inside payment platforms; the *micro-merchant one-tap mobile* niche is thin but the surrounding capability is owned.

**Graveyard check:** Chargeback sector is consolidating into processors (Visa/Mastercard network tools, Stripe native) — classic platform-absorb-the-startup dynamic; standalone chargeback cos survive only at enterprise/mid-market.

**Novelty Confidence:** 45/100 — mobile/one-tap packaging is fresh, the underlying job is not.

**Why-doesn't-this-exist assessment:** Warning-ish. Micro merchants have too few chargebacks for a standalone tool (low frequency), the response window is inside the processor's dashboard (host-owns), and Stripe/Shopify keep absorbing the UI. Opportunity only if it rides a specific high-volume micro segment (e.g., subscription apps with negative-option disputes).

**Kill risk:** HOST-OWNS-CORRECTION (processor owns the dispute UI + window) · low frequency · consumer-won't-pay · platform absorbs.

---

## Related-candidates note (1 & 2 share a market)

Same market (solo/micro field service), different wedges. Both sit *inside* the incumbent suite layer (Jobber / Housecall Pro / ServiceM8 / ServiceTitan) that already does jobs + photos + estimates + invoices. C1's wedge (photo→AI estimate) is now **heavily occupied** by SimplyWise/FieldQuote; C2's wedge (photo→invoice auto-build + catch-uninvoiced) is **less occupied** but equally suite-vulnerable. Any entry should assume the suite will ship the AI feature, not that it won't.

---

## Most important finding

C1 — the flagship "photo → instant estimate" wedge — already has a **direct, scaled competitor**: **SimplyWise Cost Estimator** (4.8★, ~31k ratings, "10,000+ contractors", photo→material+labor breakdown→branded bid, mobile subscription), plus a 2025 clone (FieldQuote) and voice-side coverage (Billio), all sitting on top of the Jobber/Housecall Pro/ServiceTitan suite. The "instant photo→quote for solo trades" idea is a **commodity AI wrapper with ~15/100 novelty** — the only genuinely un-occupied slivers are the *inbound-text/WhatsApp photo channel* and the *dictate-only flow*. If any candidate deserves a pivot, C1 is it (toward C2's auto-build/uninvoiced-catch angle or the inbound-text wedge). The most novel mechanic on the board, C6 (local auto-reprice-to-deadline, ~80/100), is the *most structurally hostile*: no platform API, TOS-ban risk, FB's native renewal, and 7-day listing cycles — a textbook false-certainty pattern.
