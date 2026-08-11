# SnapInvoice — Round 12 Harder Competitor Sweep + Falsification Experiment Design

Research date: 2026-08-11. Author: Competitor Hunter + Experiment Designer for SnapInvoice (Round-12 top candidate, score 76, VALIDATE FIRST).

## Final decision — PASS (market/acquisition), 2026-08-11

The acquisition gate failed before the planned experiment: outreach could not recruit even three eligible micro field-service operators. Without target access, the team cannot measure suite rejection, collect deposits or real fixtures, test repeated forwarding, or establish a credible low-cost distribution channel. SnapInvoice is therefore **passed_market** and should not be built. Reopen only with a concrete channel or partner able to supply ten eligible operators and four refundable deposits before technical work.

## Post-commit live competitor correction — 2026-08-11

The original sweep found no exact standalone product for “forward the job photos or slips already on the phone, draft invoice lines, then keep the job visibly unbilled until an invoice is sent.” A same-day primary-source review found a much denser outcome-level market than the dossier originally conveyed:

- **SimplyWise** turns a job photo into line-item estimates and includes invoicing in a $29.99/month contractor suite: https://www.simplywise.com/blog/llm-info/ (retrieved 2026-08-11).
- **BldrOS** turns photos, voice notes, and text into line-item estimates and explicitly sells against unbilled work: https://www.bldros.com/ (retrieved 2026-08-11).
- **PeakPro** surfaces completed jobs without invoices, missing billing photos, and overdue invoices: https://www.peakproapp.com/ (retrieved 2026-08-11).
- **PlanMyCrew** generates field invoices from labor, materials, photos, and signatures while promising zero unbilled jobs: https://planmycrew.com/contractor-invoicing-software (retrieved 2026-08-11).
- **SodaDesk** pulls parts, labor, and job photos into invoices and markets against unbilled work: https://www.sodadesk.com/hvac-quotes-and-invoices-software (retrieved 2026-08-11).
- **TidyShift** combines group-chat photos, invoicing, and unbilled-extra detection for cleaning operators: https://tidyshift.com/ (retrieved 2026-08-11).

**Correction:** the exact no-suite, inbound-share behavior still appears unoccupied, but the desired outcome is crowded and inexpensive incumbents are close. Novelty confidence is therefore **at most 40/100**, not 58/100. SnapInvoice is now a behavior/distribution hypothesis, not a product-gap claim.

### Gate G0 — reject the suite, buy the behavior

Before the extraction fixture or native implementation, recruit ten eligible 1–3-person operators who currently lose billable work in photos, texts, or paper. Show them SimplyWise and one relevant full-suite alternative. Continue only if at least seven demonstrate why those products do not fit their actual workflow and at least four place a refundable $20 deposit for the narrower forward-to-invoice service. Otherwise kill SnapInvoice without building it.

**Exact wedge under test:** (a) auto-build invoice lines from a batch of job photos and paper slips (weigh tickets, handwritten notes, receipts, job photos), (b) the un-invoiced work detector (jobs with photos but no sent invoice), (c) share-sheet/forwarding intake so the tech keeps the existing "text the photo to the owner" ritual. Payer: solo/1-3-tech field-service ops. Price: $12-19/mo.

---

## PART A — SECOND, HARDER COMPETITOR SWEEP

### A.1 Method

- App Store (iTunes Search API, US storefront, 40 terms × 30-40 apps): `invoice from photos`, `photo to invoice`, `job photos invoice`, `receipt scanner invoice`, `ai invoice builder`, `photo invoice`, `estimate from photo`, `whatsapp invoice`, `receipt to invoice`, `field service photo`, `invoice from receipt`, `forgot to invoice`, `unbilled`, `weigh ticket`, `scale ticket`, `tonnage invoice`, `dumpster invoice`, `scrap metal`, `scrap yard app`, `junk removal invoice`, `dumpster rental software`, `missed invoice`, `jobs photos billing`.
- Google Play (search + per-app detail pages for the suspicious hits): `invoice from photos`, `photo to invoice`, `receipt scanner invoice`, `bill scanner invoice`, `photo invoice maker`, `invoice photo scanner`, `job card invoice`, `weigh ticket app`.
- Web (Bing search — Google/DuckDuckGo/Brave all challenge/block scripted access; negative evidence noted): `"invoice from photos" app`, `photo to invoice app`, `AI turn photo into invoice`, `unbilled work missed invoice app`, `site:producthunt.com invoice from photos`, trade-specific terms.
- Direct verification of Round-11 named competitors (Jobber, ServiceM8, InvoiceASAP, SimplyWise) plus every 2025-26 AI-invoice app surfaced (Invoo, Invoicely AI, WinPal, InvoiceCraft, Invoice Manager/cubebooks), the scale-ticket operators (MyTruckScales/TruckPay, Fast Weigh, CAT Scale), and the scrap-side apps (ScrapValue, Scrap Science, iScrap).
- Reddit r/sweatystartup search API blocked (403) — relied on the first-person citations already in the Round-11 dossier (FACT, cited there: `r/sweatystartup/comments/1uimeb0/`, `getjobber.com/pricing`, `r/sweatystartup/comments/1trufyw/`).

**Honest search limitation (FACT/INFERENCE):** Google, DuckDuckGo, Brave, Bing web all serve captchas to scripted access; Play Store detail pages render minimal description server-side; Product Hunt is JS-walled. The storefront APIs (iTunes, Play search) are authoritative for "is there an app that does X in the US stores" and that is where a direct competitor would have to live. Web-side product-hunt searches are the weakest cell of this sweep.

### A.2 The wedge terms — DIRECT result: NO OBVIOUS MATCH

Searches for the exact wedge mechanics returned **zero apps** that do any one of (a) batch-photo→invoice-lines, (b) un-invoiced detector, or (c) share-sheet intake. The App Store "invoice from photos" / "photo to invoice" surfaces only generic invoice makers (Invoice Fly 4.76★/98k, Invoice Simple 4.87★/123k, Invoice2go 4.85★/55k, Tiny Invoice, Zoho, Square Invoices 4.83★/93k, Freebie, FreeMaker, Invoice Maker Tofu 4.83★/36k, Billdu, Docly, SPK, InvoiceBase — all manual line-entry builders). None reads a photo and proposes lines. The "forgot to invoice" / "unbilled" terms return only accounting-definition pages and the same generic invoice makers.

The closest photo-mechanic apps found on the US storefronts are single-receipt scanners (see A.4/A.5) — none batch, none detect un-invoiced work, none use the share sheet.

**Verdict for the exact wedge: NO OBVIOUS MATCH on US App Store + Google Play + English web, with a genuinely un-dug cell (see graveyard, A.6).** Not "empty because everyone died there"; empty because no one has built it.

### A.3 The 2025-26 AI-invoice wave (PARTIAL — same user, different mechanic)

This is the closest-in-time competition and it is converging on SnapInvoice's *user*, not its *wedge*:

| App | Released | Ratings | Mechanic | Verdict vs SnapInvoice |
|---|---|---|---|---|
| **Invoo: AI Estimates & Invoices** (SYNCWAVE LTD) `apps.apple.com/us/app/id6758149782` | 2026-01 | 4.40★ (518) | Type "describe the job", AI suggests pricing → estimate/invoice | PARTIAL. Prompt→invoice. No photos, no batch, no detector, no share-sheet. |
| **Invoicely AI: Invoice Maker** (GENIUS AI LABS PTE. LTD) `apps.apple.com/us/app/id6767138733` | 2026-05 | 4.58★ (99) | **Voice** → structured invoice lines+PDF; explicitly "for plumbers, electricians, landscapers, cleaners" | PARTIAL. Same buyer persona, voice not photo. Confirms demand for "builds itself" invoicing; not the photo batch. |
| **Invoice Manager / cubebooks.ai** (iCubemedia) `apps.apple.com/us/app/id586658256` | 2026 update | 4.33★ (9) | "Speak naturally and watch AI create" invoices | PARTIAL. Voice AI. |
| **InvoiceCraft - Easy Generator** (Metasoon) `apps.apple.com/us/app/id6755140565` | 2025-11 | 4.09★ (80) | Template invoicing + "AI" | ADJACENT. |
| **Invoice Maker ~ AI Generator** (Triple It) `apps.apple.com/us/app/id6744431329` | 2025-05 | 5.00★ (18) | Generic AI invoice maker | ADJACENT. |

**The photo→estimate movers (closest structural neighbors — the "photo to structured business document" mechanic is proven and in-market):**

- **SimplyWise Cost Estimator** (SimplyWise, NY) `apps.apple.com/us/app/id6670619664`, Play `com.simplywise.costestimator` — "turns job site photos into detailed, professional estimates in seconds… material and labor costs" (FACT, Bing snippet of App Store listing, 2026-08-11). SimplyWise also ships **Receipts→expenses** (`com.simplywise.mobile`), mileage, and an AI receptionist (FACT, simplywise.com). Their own pricing page says "Joist is the closest on price ($8-32/mo) but doesn't have AI-powered estimating" (FACT, simplywise.com/blog/pricing). ~48k Facebook likes (FACT, facebook.com/SimplyWiseInc). **This is the single biggest "feature-ship-away" risk: they already own photo→estimate + receipt→structure for the same contractor audience.**
- **WinPal: Estimate Invoice Maker** (Hubflo) `apps.apple.com/us/app/id6763926138`, rel 2026-05, 4.60★ (149) — "Take a photo, add a short brief, and generate a precise, professional estimate using project measurements and local labor and material pricing" (FACT, App Store description). Photo→**estimate**, requires an added brief, no invoice-from-photos, no batch, no detector.
- **FieldQuote / Billio** (Round-11 findings) — same photo→quote wedge. (INFERENCE from dossier; no re-verification possible this pass.)

None of the above does **invoice lines from a batch of job photos**, none detects **un-invoiced work**, none uses **share-sheet intake**. The 2026 movers went voice/text; the photo movers went estimates. The photo→invoice-from-week-batch combination is open.

### A.4 Trade-specific angle — scale/weigh-ticket, scrap, trucking, junk

The genuinely interesting cell to check was whether weigh/scale-ticket apps already own the "slip → line item" job. They do NOT — they are all **operator-side (yard/scale operator or driver), not the micro-op's outbound invoicing**:

- **MyTruckScales / TruckPay** (TruckPay Inc) `apps.apple.com/us/app/id1439861326`, 4.35★ (79) — "first NTEP-certified… mobile cloud E-Ticket, truck scale management system that eliminates the need for physical kiosks" (FACT). Sells to **scale operators/yard owners**. NTEP certification means it can't be a consumer share-sheet tool.
- **Fast Weigh Mobile / Fast Weigh Management** (TAC Insight) — "used by material producers, haulers, and contractors to create load tickets" (FACT). Yard/scale side.
- **Weigh My Truck** (CAT Scale) `apps.apple.com/us/app/id934521459`, 2.94★ (163) — driver-side truck weighing, no invoicing.
- **ScrapValue** (PETER GOODALE) `apps.apple.com/us/app/id6761292433`, rel 2026-03, 5.00★ (4) — "helps hobby scrappers, contractors, recyclers… estimate loads, compare yard offers, **organize receipts**, and understand the difference between an estimate and the final payout" (FACT). Tiny (4 ratings), receipt-*organizing* for the scrapping side, not client invoicing, no detector.
- **Scrap Science** (TY International) — AI scrap-identification for recyclers (FACT). **Doctor Scrap** — scrap recognition + trading. **iScrap** 2.34★ — scrap prices. All price/yard-side.
- **ScrapYardPro / ScrapRight SRX / ReSpark Driver App** — yard-management/dispatch for scrap yards (FACT, App Store). Operator-side.
- **JunkGuru** (Junk In The Truck LLC) `apps.apple.com/us/app/id1618806147`, 5.00★ (6) — marketplace routing approved contractors to junk jobs (FACT). Not invoicing.

**Verdict:** the weigh/scale-ticket wedge is operator-side software sold to yards and scale owners (NTEP-certified, kiosk-grade); the micro-op who *receives* the slips and must turn them into customer invoices is exactly the unserved side. This is the strongest piece of negative evidence for the wedge: nobody has approached it from the hauling op's side.

### A.5 Adjacent (functional substitutes)

- **Single-receipt→invoice scanners:** "Receipt Scanner: Invoice Maker" (Play `com.receiptscannr.receiptscannr`, 4.7★) — AI receipt scanner + invoice maker; "Invoice Maker: AI Bill Scanner" (Play `com.quantum.invoicemaker.reciept.bills`, 3.6★); "AI Invoice Maker & Receipt App" (Play `com.invoice.maker.estimate.billingapp`, 4.0★); **InvoiceASAP** (iOS `id451228846`, rel 2011, upd 2026-07, 4.12★/275) — "Attach Photos — unlimited photos can be attached to invoices and estimates" (FACT, invoiceasap.com) but no auto-build from the photos; **Dext/Smart Receipts/SnapBill/Categorizr** — receipt→**expense** (inbound), not client invoicing. All single-document, all manual-approve, no un-invoiced detection.
- **Field-service suites:** Jobber ($29-529/mo), ServiceM8, ServiceTitan/Housecall Pro (field-service photos live inside job records; invoice lines still typed). **Breezeworks** — verified LIVE in 2026 (FACT, breezeworks.com: "Trusted by 10,000+ service businesses," Solo plan $31.99/mo, "Professional invoicing… including photos showing completed work"). Note: I came in expecting Breezeworks to be dead (2019 shutdown memory) — it is alive; include this as a *disproven* graveyard hypothesis, not a data point. Full-suite pricing $30+/mo is exactly the SkipForYou threshold the micro-op refuses (FACT, dossier Jobber pricing citations).
- **India WhatsApp-invoice suites (ADJACENT, geographically):** **Vyapar** (vyaparapp.in) and **myBillBook** (mybillbook.in) — GST billing + WhatsApp invoices + inventory, huge in India (FACT). They prove WhatsApp-native billing at scale but serve GST retail/SME, not the US photo-slip micro-op, and neither auto-builds lines from a week of job photos nor flags un-invoiced work.
- **Manual reconstructors:** Google Photos "Documents sorted into albums, like screenshots, receipts, notes" (FACT, photos.google.com) and generic PDF scanners (Adobe Scan, CamScanner, Genius Scan) — OCR to text, no line structuring, no billing state. Square/QuickBooks — manual entry.

### A.6 Graveyard checks

- **Photo→invoice startups that died: NONE FOUND.** Searches for "AI invoicing app shut down," "receipt scanner startup dead/acquired," "photo invoice startup shut down" surfaced only dictionary/template noise. The cell appears **un-dug, not abandoned** — the opposite of the evidence/documentation vertical (DepositProof, WageWatch, TrueStatus graveyard trend from Round 12), where movers already colonized the cells.
- **Adjacent consolidation (the survivorship pattern that matters):** the "scan a receipt" mechanic did NOT die as a startup niche — it consolidated *up* into bookkeeping platforms that are all alive: Dext (ex-Receipt Bank, acquired), Expensify, Wave, Shoeboxed, Smart Receipts (4.76★/13k). **Reading:** OCR-a-structure is a proven-demand, platform-absorbed mechanic; it becomes a feature of whoever owns the surrounding workflow. SnapInvoice's risk is the same absorption, not market rejection.
- **Disproven graves:** Breezeworks (alive, $31.99/mo), Cashboard (alive), FieldEdge/Housecall Pro/Servosity → folded into ServiceTitan/Clio via acquisition (acquired ≠ dead). Mint (Intuit) killed 2024 — adjacent finance, not invoice-from-photos.
- **Zombie signal:** dozens of tiny invoice apps (rel 2023-25, no updates since) — the generic-invoice cell is saturated with zombies, which is *why* the wedge must not be another manual invoice maker; manual is the red ocean, photo-batch is not.

### A.7 Novelty confidence for the exact wedge: ~58/100 (up from Round-11's 55)

Reasoning:
- **UP:** Harder sweep (US stores + web + trade apps + graveyard) confirms no US app occupies the combination of batch-photo→lines + un-invoiced detector + share-sheet intake; the weigh/scale-ticket side is operator-side software; the 2026 AI movers chose voice/text; no graveyard of failed photo→invoice startups.
- **DOWN:** the *mechanic* (photo→structured business doc) is proven and in-market (SimplyWise estimates, WinPal estimates, receipt scanners, Dext). SimplyWise in particular is one "add an Invoice button" away from the exact user and capability, and their marketing is actively aware of the contractor-tool competitive set. The wedge's defensibility rests entirely on the **behavior contract** (no new app-opening ritual; share-sheet routing; un-invoiced detector as the killer output), which none of the movers has — and which is cheap to copy once proven.
- Caveat: verified against US storefronts + English web; India's Vyapar/myBillBook prove WhatsApp-native invoicing at scale but don't occupy the US photo-slip cell.

**PART A VERDICT: NO OBVIOUS MATCH for the exact wedge; PARTIAL adjacency from the 2025-26 AI-invoice wave (voice/text, same user) and the photo→estimate movers (same capability, different output). Novelty confidence 58/100 — structurally open today, temporally exposed to a SimplyWise feature ship.**

---

## PART B — FALSIFICATION EXPERIMENT DESIGN (the decisive, cheapest experiment)

Everything below can run **inside the ~50-day Shipaton window** and decides GO/NO-GO before any native build. Total cost: <$150 (Telegram bot on a free/cheap host, LLM vision API for the fixture, Stripe for the prepay, one researcher's hours). It tests the three real risks in order: **accuracy** (can photos become correct lines?), **behavior** (will ops route photos through a share sheet?), **willingness to pay** (prepay).

### B.1 Fixture spec (accuracy gate)

**What to collect — 100-150 photos, 10 ops × ~12 photos each:**
- 30 dumpster/roll-off/tonnage: scale/weigh tickets, tonnage slips, yard paper invoices, handwritten "drop-off × size × customer" notes.
- 25 landscaping: handwritten job sheets, mulch/stone/material receipts, maintenance checklists, written quotes.
- 15 pool/cleaning: recurring route sheets, handwritten service notes.
- 15 handyman/repair: handwritten estimates, parts receipts, job notes.
- 15 deliberate distractors: fuel receipts, supply receipts, whiteboard notes, blurry shots, wallet-crumpled slips, wet slips (tests the `unreadable` path, not the happy path).
- Ask each op to photograph their **last 2-4 weeks of backlog paper** from the truck cab — this is free ground truth the op already has, and it doubles as the "what's really in the pile" audit.

**Labeling protocol:**
- Ground truth produced by the **owner who wrote/collected the slip** (they know the job), then reconciled by one independent labeler. A 20-photo sub-sample is double-labeled to measure inter-labeler agreement — if labelers disagree >5% of the time, the fixture is ambiguous, not the model.
- Per photo, capture: `id`, `trade`, `slip_type` (weigh-ticket / handwritten-note / printed-receipt / job-photo / whiteboard / other), `customer` (or `unknown`), `expected_lines` = list of `{qty, unit, description, rate, amount}`, `expected_total`, `readable` (bool), `notes`.
- Redact customer names/addresses before any external processing; written consent for any screenshot use.

**Accuracy metric (the pass gate is G1 in B.3):**
- **Per-line**: a line is correct iff qty AND description AND rate AND line-amount all match ground truth (rate within $0.01; description by normalized token overlap ≥0.9; numerics exact).
  - precision = correct extracted ÷ total extracted
  - recall = correct extracted ÷ total ground-truth lines
  - **Report both; the gate is on recall weighted over `readable` lines ("extractable-line-item accuracy ≥90%").**
- **Total agreement**: extracted total within $0.50 of slip total on ≥90% of readable slips (owners trust the total).
- **`unreadable` handling (the false-green kill switch):** every photo labeled `readable` must be human-verifiable; ≥95% of labeler-`unreadable` photos must be flagged `unreadable`, and the model must emit **zero** line items for an `unreadable` photo. One fabricated line on an unreadable slip = automatic FAIL (durable-truth rule: a false green is an instant kill).

### B.2 The 10-op study (behavior + WTP gate)

**Recruitment message** (post to r/sweatystartup + FB groups + Instagram DMs; angle is "help me audit how much money your industry leaves on the table", NOT "buy my app"):

> "I'm a founder studying how solo tradespeople actually bill. I'll pay for your honesty: if you run a 1-3 person op in dumpsters/hauling, landscaping, pool, cleaning, or handyman work and you invoice by hand from photos/slips, I want 10 of you to let me watch how a week of job photos becomes an invoice. You forward your normal job photos to a simple bot for 3 weeks; a human turns them into invoice lines and flags anything you forgot to bill. You keep the draft invoices. You get a $50 gift card + a free year if it ships. Who's in?" — This is honest: the study IS a week-of-photos-to-invoice service run by hand. **Do not** claim OCR/AI exists yet.

**Screening (must pass all):** 1-3 tech ops; invoices created by hand from photos/slips today (Excel/Square/nothing); ≥8 jobs/week; tech uses a phone at the job; owner agrees to the 3-week forwarding protocol. Recruit 13-15, run 10.

**3-week usage protocol:**
- Week 0: 15-min onboarding call. Ritual defined in one sentence: **"Every time you'd text a job photo to your owner/bookkeeper — or take a photo for your own invoice pile — forward it to the bot instead."** We reply within ~24h with per-job line items + a copy-paste invoice draft.
- Weeks 1-3: ops forward; we structure, draft, and **tick off billed jobs**, then surface the un-invoiced list every Sunday.
- **What "80% of real job photos routed through the share sheet" means operationally (it's unobservable directly, so it's a two-part cross-check):** (1) self-report — each Monday the op answers 3 questions: jobs this week, jobs invoiced this week, photos forwarded vs photos taken; (2) **confirmation check** — we send the Sunday un-invoiced list and the op must confirm or correct it; the confirmed-correct rate is the detector's recall on *their own real data*. The gate uses BOTH: ≥80% of jobs have ≥1 photo forwarded (self-report) AND ≥7/10 ops confirm the un-invoiced list is right (the detector works on live data).
- **Weekly check-in** (15-min call or 5-question async): what broke, did the un-invoiced number sting, would you pay, what's the one thing you'd change.

**Prepay mechanic (the WTP gate — collect real money via Stripe):**
- Offered at the **end of week 1** (after the first invoice-draft payoff lands), randomized 50/50:
  - **Arm A — Founder's Year: $29 one-time, refundable** until the end of the study, converts to 1 year at $12/mo-equivalent (i.e., "prepay your first year's worth at a founder price").
  - **Arm B — First month now: $12/mo subscription, cancel anytime, first month billed now.**
- Refund honored unconditionally for non-converts. Also capture Van Westendorp WTP ($5/$12/$19/$29) in the exit interview to sanity-check the $12-19 price against the $29 arm.
- Gate: **≥4 of 10 prepay** (across arms). This is deliberately the Round-11 spec: 4 real dollars out of 10 ops.

**Exit interview (day ~35):** did the un-invoiced detector change a behavior you can name ("I billed X that I would have forgotten"); did you invoice a dollar amount you can state; what breaks at 10 jobs/week vs 40; WTP.

**Ethics/compliance:** photos contain customer addresses/PII → anonymize, host privately, written consent before any BuildInPublic screenshot; refund terms in writing; the service is invoicing-assistance, not tax/legal advice.

### B.3 Pass gates (ALL must clear)

1. **G1 — Accuracy (fixture, scored in week 1):** ≥90% extractable-line recall on `readable` slips + ≥90% total-amount agreement + ≥95% of `unreadable` slips correctly flagged + **zero fabricated line items on any `unreadable` photo** (one false green = immediate stop).
2. **G2 — Behavior (weeks 1-3):** ≥7 of 10 ops forward ≥80% of real job photos through the bot for all 3 weeks (self-report + Sunday-confirmation cross-check).
3. **G3 — WTP (week 1-3):** ≥4 of 10 prepay (founder-year or $12/mo), real money via Stripe.
4. **G4 — Detector truth on live data:** the Sunday un-invoiced list is confirmed-correct by ≥7/10 ops (no "you forgot to bill X" false alarm on a billed job; no unreadable slip silently counted as billed). (G4 collapses into G2's confirmation check; stated separately because a false red is as deadly as a false green for trust.)

**GO/NO-GO rule:** GO on native build only if G1 AND G2 AND G3 AND G4 all pass by day 35, leaving ~15 days to ship an MVP. The study is a gate, not a demo.

### B.4 The no-code/MVP path — test the detector WITHOUT building the OCR

The entire study above runs with **no native app and no on-device OCR**:

- **Telegram bot (primary, ~half a day to build):** a single `python-telegram-bot` script on a $5/mo VPS or a free-tier Cloudflare Worker. Ops share/forward photos to it exactly like they'd share to WhatsApp. It stores photos grouped by day/customer, and the line-structuring is done by (1) a cheap LLM vision API (e.g., $0.01-0.05/photo — the fixture in B.1 already told us whether this path hits 90%) OR (2) the researcher by hand for a 3-week pilot. The bot owns the loop that matters: reply with lines + draft invoice, tick billed jobs, Sunday "3 jobs un-invoiced, $640" nudge, confirm buttons.
- **WhatsApp alternative:** WhatsApp Business/Cloud API (per-message fees, longer approval) — only if a recruited op refuses Telegram; the ritual is identical. **Telegram first because it's free, fast, and the share sheet already works.**
- **1-page web form (fallback):** Cloudflare Pages form → Airtable/Sheets backend; ops email or text photos to a number. Slowest ritual — use only if the op has neither Telegram nor WhatsApp workflow.
- **Why this is decisive:** it separates the *behavior* question (will the share-sheet ritual stick?) from the *technology* question (can photos become lines?). If ops won't route photos even when a human does 100% of the work, the product dies on behavior and the OCR build is wasted money. If they will, the fixture already answered whether extraction can be automated at 90%.

### B.5 Timeline (day-by-day, first 21 days) — mapped to Shipaton (deadline 2026-09-30, ~50 days from today)

| Day | Action |
|---|---|
| 1 | Post r/sweatystartup ("help me audit what solo ops forget to bill"); DM 20 FB trade-group owners; stand up Telegram bot skeleton. |
| 2 | Post to 3-5 FB trade groups (dumpster haulers, landscaping biz, pool/cleaning); launch the "photograph your backlog" fixture request. |
| 3 | Screen replies (eligibility call); sign first 5 ops; begin fixture collection from ops' backlog paper. |
| 4 | Sign remaining 5-7 ops (oversubscribe to 13); fixture collection continues. |
| 5 | First draft of labeling protocol; 20-photo double-label pilot. |
| 6-7 | Onboarding calls (15 min each) for cohort 1; fixture grows to ~60 photos; start LLM-vision benchmark on labeled subset. |
| 8-9 | Label the full fixture (2 labelers); run the extraction benchmark; compute precision/recall/unreadable stats. |
| 10 | **G1 scored.** Cohort 1 begins the 3-week forwarding protocol (stagger cohorts to keep the human-in-the-loop reply SLA at <24h). |
| 11-12 | Cohort 2 onboards; daily reply loop (lines + drafts + billed-tick); fixture closed at ~120 photos; G1 confirmed with full set. |
| 13-14 | First Sunday un-invoiced list for cohort 1 (nudge #1); Monday self-report #1; mid-study health check (adherence early-warning). |
| 15-17 | Prepay offer goes live for cohort 1 (end of week 1); Telegram bot grows "tick billed" + confirm buttons; build the exit-questionnaire template. |
| 18-19 | Cohort 2's prepay offer; weekly check-ins #1 complete for both cohorts; **early-stop check #1** (B.6). |
| 20-21 | Monday self-report #2; Sunday un-invoiced list #2; log all friction; **early-stop check #2.** |

Days 22-32: weeks 2-3 of forwarding, weekly check-ins #2-3, exit interviews. Day 33-35: score G2/G3/G4, **GO/NO-GO**. Days 36-50: if GO — Expo MVP (share sheet + timeline + LLM/on-device extraction + `unreadable` + invoice PDF + RevenueCat paywall) targeting a Sept 20-25 release, judges' promo code live.

### B.6 The single most likely reason the experiment fails + pre-committed stop rules

**Most likely failure: adherence collapse, not technology.** The op already has a working ritual (text/WhatsApp the photo to the owner, or a photo pile for Saturday). Forwarding to a bot is one extra step with **zero payoff on the day it's taken** — the payoff is the Sunday list. In week 1 curiosity carries it; by week 2 the novelty is gone, mid-September is the dumpster/landscape season ramp, and the bot's reply (even at 24h) is slower than the owner already is. This is exactly the "empty cells are empty for behavioral reasons" failure mode, and it is why the fixture (accuracy) must not be allowed to mask the behavior gate.

**Pre-committed stop rules (each is sufficient; decided now, not at the data):**
- **S1 — false green:** any fabricated line item on an `unreadable` slip in the fixture → STOP, no build (durable-truth rule).
- **S2 — adherence collapse:** if at the day-18 or day-21 check ≥4 of the 10 ops are below 50% forwarding (or fewer than 6 ops remain active) → STOP the study, do not extend, do not collect more data to "see if it turns around."
- **S3 — no money:** if <4 of 10 prepay by day 33 → NO-GO on native build even if G1 and G2 passed; a behavior people won't pay for is a hobby.

### B.7 Distribution reality check — is 10 ops + 4 prepays feasible in 50 days?

**Reach (the easy part):**
- **r/sweatystartup:** high-signal, active subreddit whose membership is precisely this persona; Round-11 already pulled multiple first-person threads on this exact pain (FACT, dossier citations). One well-crafted post → realistically 20-60 genuine DMs/comment replies; two posts over the window → 40-120 interested. Screening converts maybe 25-40% to eligible ops. **Feasible: 10 signed, with oversubscription, from r/sweatystartup alone.**
- **Facebook trade groups:** dumpster/roll-off hauling, landscaping business, pool service, cleaning groups run 1k-50k members. Direct-message outreach at 2-5% reply → 20-60 conversations; 10-20 eligible. Slow-burn but real.
- **Instagram:** #sweatystartup / #dumpsterrental / #landscapingbusiness follow-and-DM of local owners → 5-15 interested. A bonus, not a dependency.
- **ASO:** irrelevant in the window (no app exists yet); it is the post-build channel, not the study channel.
- **Total:** reach ~300-800 targeted operators across 3 channels → ~40-80 qualified leads → 13-15 signed, 10 run. **Recruiting 10 is comfortably feasible.**

**The real bet (the hard part):** 80%-adherence for 3 weeks + 4 prepays from 10. The op is busy, seasonally mid-peak in Sept, and already has a working system; the counterweights are the Sunday un-invoiced nudge (self-interest — it names dollars being left on the table) and the draft-invoice payoff (the bot does the 1-2h Saturday-night job). **Verdict: reach is not the binding constraint; adherence is. 10 ops is ~80% likely to be reachable; ≥7/10 at ≥80% forwarding is ~50-60%; ≥4 prepays is ~50-60% conditional on adherence holding.** This is a winnable bet, not a lock — which is exactly what an experiment is for.

---

## Strongest raw signals

1. **NO OBVIOUS MATCH on the exact wedge after a harder sweep (US stores + web + trade apps + graveyard).** The scale/weigh-ticket cell is operator-side (NTEP-certified yard software); the 2026 AI-invoice movers (Invoo, Invoicely AI, Invoice Manager) chose voice/text for the same persona; the photo movers (SimplyWise, WinPal) chose estimates. Nobody does batch job-photos → invoice lines + un-invoiced detector + share-sheet intake. Novelty confidence for the combination: 58/100.
2. **The graveyard check flipped from fear to finding:** there is no graveyard of "photo→invoice" startups (un-dug cell, not abandoned), while the "scan a receipt" mechanic demonstrably consolidates up into bookkeeping platforms — the warning is absorption-by-SimplyWise, not market rejection. SimplyWise (photo→estimate + receipts, same audience) is the feature-ship-away risk.
3. **The decisive experiment is cheap and behavior-first:** ~$150, a Telegram bot with a human (or cheap LLM vision API) in the loop, a 100-150-photo fixture scored in week 1, a 3-week forwarding protocol with a Sunday un-invoiced confirmation check, and a refundable $29 founder-year vs $12/mo A/B prepay. Four pass gates: ≥90% extractable-line accuracy; ≥7/10 ops at ≥80% forwarding; ≥4/10 prepay; zero false green on unreadable slips. Stop rules: any false green, adherence collapse by day 18-21, or <4 prepays.
4. **The single biggest doubt: adherence.** Mid-September season ramp + an existing working ritual + a payoff that arrives on Sunday, not on the day the photo is forwarded. If the 10-op study dies, it dies on behavior, not on OCR — and the experiment is designed to find that out before any native build.
