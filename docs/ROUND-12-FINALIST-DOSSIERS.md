# Round 12 Finalist Dossiers — RevenueCat Shipaton 2026

> **Post-commit correction (2026-08-11):** the primary-source re-check found that photo-backed invoicing and completed-but-unbilled detection are crowded across SimplyWise and newer contractor suites. SnapInvoice remains a validation record only for the narrower no-suite forwarding behavior; its governing novelty estimate is now at most 40/100 and its first step is paid-demand Gate G0 in `ROUND-12-SNAPINVOICE-FALSIFICATION.md`.

Research date 2026-08-10 (Round 12). Both finalists are `VALIDATE FIRST` — neither is approved for a build. Each dossier follows the full format: name, one sentence, user, trigger, existing pain, current solution, product mechanic, phone advantage, aha moment, why now, competitive landscape, novelty claim, monetization, retention, growth loop, build in public, Shipaton categories, MVP, demo, technical architecture, biggest risk, falsification test, score, verdict.

---

## Finalist 1 — SnapInvoice

### Name

SnapInvoice (working name only).

### One Sentence

For solo tradespeople and micro field-service ops, when a week of job photos and paper slips pile up, SnapInvoice turns them into sendable invoice lines and flags any job that never got billed, so they stop losing money to forgotten paperwork.

### User

Solo and 1–3-person field-service operators in high-paperwork trades: dumpster/tonnage haulers, landscapers, pool-service, cleaning, handymen, small HVAC/plumbing/electrical. The bookkeeper or spouse who does the books at night is the second user. Primary user is the owner who currently re-enters Excel from photos and weigh slips at 1 AM.

### Trigger

Weekly: the end of the work week, when job photos and paper slips have accumulated. Also daily, when a customer asks "can you send me an invoice?"

### Existing Pain

- First-person r/sweatystartup accounts: "I'm losing money daily on tonnage fees that I forget to invoice because the paperwork circulates physically and gets lost somewhere in the truck's cabin"; a whiteboard as system-of-record wiped mid-dispatch; a bookkeeper photographing coffee-stained weigh slips. (FACT, https://www.reddit.com/r/sweatystartup/comments/1uimeb0/)
- Micro-ops skip the paid suites: Jobber starts at $29/mo and scales to $529/mo with +$29/user/mo and card processing fees; small operators report "calls, texts, a whiteboard, or a shared spreadsheet... once you hit 5-10 technicians things get chaotic" (FACT, https://getjobber.com/pricing/, https://www.reddit.com/r/sweatystartup/comments/1trufyw/).
- The phone is already the job camera; photos already flow by text/WhatsApp to the owner or bookkeeper. The bookkeeping step is manual reconstruction. (FACT/INFERENCE from the same threads.)

### Current Solution

Texts and WhatsApp photos to the owner, a whiteboard or paper weigh slips in the truck cab, and a Saturday/Sunday evening of re-entering line items into Excel, Square, or QuickBooks — with work silently dropped when paper is lost. Or paying $30+/mo for a full field-service suite (Jobber/ServiceTitan/Housecall Pro) that requires opening the app, creating a job, entering customer data, and managing dispatch — all overhead a 1–2 person op refuses.

### Product Mechanic

- Share-sheet / forwarding intake: tech shares a job photo or a slip photo to SnapInvoice; it auto-stamps time/geo and drops into a per-customer job timeline. No new app-opening ritual.
- Photo→line-item structuring: on-device OCR/vision extracts readable line items from slips, receipts, and handwritten notes; anything unreadable is labeled `unreadable` for manual entry (never a false green).
- Un-invoiced work detector: "7 job photos, 3 have no invoice" — the money-left-on-the-table flag, computed as jobs with photos but no sent invoice.
- One-thumb invoice: approve lines, add labor rate, send a branded PDF/text invoice from the phone; mark as billed.
- RevenueCat paywall: free tier (3 invoices/mo, detector teaser), paid tier $12–19/mo.

### Phone Advantage

Photos originate on the phone; the owner approves and texts invoices from the phone; the tech is in a basement/garage with no signal — so on-device processing matters. The intake ritual is "share the photo," which the user already performs for the owner/bookkeeper; SnapInvoice just becomes where those photos land.

### Aha Moment

The week-end screen: "You forgot to bill 3 jobs. $640 not invoiced." Instantly understood, and the visual is shareable.

### Why Now

On-device and cheap model inference (Apple Foundation Models on PCC at effectively $0 marginal cost for indie apps; LLM/OCR token prices down ~100–600x) makes photo→line structuring practical at ~zero marginal cost. iOS/Android share sheets and widgets make the no-new-ritual intake possible. The 2025–26 competitor wave (SimplyWise, FieldQuote, Jobber mobile) has proven demand for photo-native trade tools but none builds the un-invoiced detector or the share-sheet intake.

### Competitive Landscape

- Direct: none found. Jobber/ServiceM8/ServiceTitan are full suites that capture photos inside the app but do not auto-build invoice lines from photos or detect un-invoiced work, and their price/complexity is exactly what micro-ops skip.
- Partial: Invoice ASAP and receipt-scanning invoice tools build lines from a single receipt, not from a week of job photos; SimplyWise Cost Estimator does photo→estimate (quoting, not invoicing).
- Adjacent: Square/QuickBooks invoicing (manual entry), text/WhatsApp (the current system-of-record).
- Novelty classification: PARTIAL (the market has suites; the auto-build + un-invoiced-detector + share-sheet intake wedge is open). Novelty confidence ~55/100.

### Novelty Claim (careful wording)

"No direct competitor was found that (a) auto-builds invoice lines from a batch of job photos and slips, (b) flags jobs with photos but no invoice, and (c) uses share-sheet/forwarding intake to avoid a new ritual — after searching the App Store, Google Play, r/sweatystartup, trade threads, and the field-service suite feature lists. The suite incumbents could add photo→line extraction as a feature, but not at the price and behavior contract micro-ops accept."

### Monetization

Free: 3 invoices/mo + the un-invoiced detector flag. Paid: $12–19/mo via RevenueCat subscription, 7-day trial, crafted paywall. The value math is native: one recovered unbilled job covers a year. HAMM-friendly: subscription + trial + experiments (RC Offerings) on price and invoice-count limits.

### Retention

Every job generates photos → the weekly invoice build becomes a habit. The un-invoiced detector is a recurring, time-sensitive reason to open the app (it gets worse the longer you ignore it).

### Growth Loop

The "found money" output is intrinsically shareable: an owner texts a screenshot ("found $640 of unbilled work this week") to a partner or a trade group. r/sweatystartup is a high-signal acquisition channel with demonstrated appetite for exactly this problem; dumpster/tonnage and landscaping Facebook groups are next. ASO on "invoice from photos."

### Build in Public

The corpus is perfect content: "I asked 10 dumpster haulers to send me their week of job photos — here's what they forget to bill." Real numbers from the validation fixture, screenshots of flagged unbilled jobs, and the un-invoiced dollar total are all BuildInPublic-ready and map to Shipaton's #BuildInPublic award (audience size does not matter, only the journey and lessons).

### Shipaton Categories

Grand Prize (real paying users + revenue within the window if validation passes), HAMM (crafted subscription monetization), OneSignal Keep Them Coming Back (weekly invoice-reminder and un-invoiced nudges are a natural, value-adding campaign), #BuildInPublic, Replit Idea-to-Income (week-over-week revenue growth), Layers (focused growth experiment on free→paid conversion).

### MVP

iOS-first (Expo): share-sheet intake, per-job photo timeline, on-device photo→line structuring for common slip types with explicit `unreadable`, an invoice builder with branded PDF/text export, the un-invoiced detector, RevenueCat paywall (free 3/mo vs paid). Android after validation.

### Demo (two minutes)

0:00–0:15 — open the week's inbox: six job photos already shared in. 0:15–0:40 — the app structures lines from the readable slips, marks one `unreadable`, shows a "3 jobs not billed, $640" flag. 0:40–1:00 — one thumb approves, a branded invoice leaves by text. 1:00–1:20 — the detector ticks the billed job off. 1:20–2:00 — the numbers story: what 10 real ops reported forgetting, and the $/job economics.

### Technical Architecture

Expo (TypeScript), on-device OCR + structured extraction (Apple Vision / Core ML or Apple Foundation Models on PCC; labels `readable`/`unreadable`), local-first storage with sync, RevenueCat for entitlements, optional Stripe web checkout for Funnel Vision. No scheduling/dispatch module in 1.0 (the suite-differentiating line).

### Biggest Risk

Extraction accuracy and user behavior. If photo→line structuring is wrong more than ~10% of the time, the "builds itself" promise dies; if micro-ops won't route their photos through the share sheet, the product becomes a manual invoice tool facing Square. Both are testable cheaply before any build.

### Falsification Test

Run a fixture first: collect ~100 real photos/slips from 10 micro field-service ops. Pass gates: ≥90% of extractable line items correct; ≥7 of 10 ops route ≥80% of real job photos through the share sheet for 3 weeks; ≥4 of 10 prepay. Any false green on an unreadable slip is an immediate stop.

### Score

Pain 9 / Frequency 7 / Behavior fit 7 / Phone-native 8 / Truth 7 / Novelty 6 / Monetization 8 / Distribution 7 / Retention 5 / Demo 4 / Shipaton feasibility 4 / RevenueCat leverage 4 = **76**.

### Verdict

**VALIDATE FIRST.** The pain is real and first-person-documented, the payer is a business that pays within days, the ritual already exists, and no 2025–26 competitor occupies the wedge. But extraction accuracy, real usage adherence, and prepay are unproven — run the fixture and the 10-op study before engineering. This is the strongest candidate of Round 12.

---

## Finalist 2 — ReturnShield

### Name

ReturnShield (working name only).

### One Sentence

For online resellers and small sellers, when a return or "not as described" claim arrives, ReturnShield photographs and documents the item at intake and packages dispute-ready evidence, so sellers stop losing refunds they could have defended.

### User

Active online resellers (eBay/Poshmark/Mercari/FB Marketplace sellers) and micro-retailers who process returns and receive "item not as described" (INAD) claims. Primary user is the seller at the counter receiving a returned item.

### Trigger

Every return or claim event: the package arrives, the seller must decide restock/refurbish/refuse, and must be able to prove condition later in a dispute.

### Existing Pain

- Return fraud is $103B/yr; 15.14% of returns are fraudulent; wardrobing alone occurs at 60% of retailers (FACT, https://www.losspreventionmedia.com/research-shows-fraudulent-returns-and-claims-cost-retailers-103b-in-2024/, NRF).
- Sellers already photograph returns defensively as a protect-oneself ritual; there is no tool that structures that ritual into dispute-ready evidence (INFERENCE from r/Flipping culture and the novelty search finding no micro-seller evidence tool).
- Damage claims denied without photos; a six-photo damage checklist is known carrier practice (FACT, https://www.underpriced.app/blog/how-to-ship-large-items-complete-guide).

### Current Solution

Manual photo-taking into the phone's camera roll (untagged, unorganized, hard to find 60 days later), screenshots of the claim, and hope. The marketplace decides with whatever the seller can produce.

### Product Mechanic

- Intake flow: photo the returned item (paired-arrival photos), tag condition (new/open-box/used/damaged/empty box), assign a cause code, choose disposition (restock/refurbish/refuse/charity).
- Evidence pack: one-tap builds a timestamped, organized bundle (photos + condition tags + carrier receipt + claim context) to attach to the marketplace case.
- Return log: per-item RMA, disposition, refund status — the seller's own truth across every marketplace.
- RevenueCat paywall: free tier (5 returns/mo) vs paid ($9–19/mo).

### Phone Advantage

The phone is at the counter where the return is opened; the camera captures condition at the exact moment that matters; the evidence pack is produced and shared from the same device.

### Aha Moment

A one-tap "evidence pack" that a seller can attach to a pending INAD dispute in under a minute — versus the current 20-minute scramble through the camera roll.

### Why Now

The $103B return-fraud economy and marketplace dispute volume are growing; on-device structuring makes intake cheap; resellers are already a phone-first, tool-buying prosumer segment (they pay for Inventory Lab, Crosslisting tools, and repricing services).

### Competitive Landscape

- Direct: none found at the micro-reseller level. Loop Returns / ReturnPro / Happy Returns serve mid-market retailers, not individual sellers; RealProof is tiny and buyer-side.
- Functional substitute: the marketplace's own photo-evidence fields in its case system (partial — the marketplace owns adjudication; the seller still needs to produce the evidence).
- Adjacent: carrier damage-claim tools, reseller inventory tools.
- Novelty classification: PARTIAL. Novelty confidence ~55/100.

### Novelty Claim (careful wording)

"No tool was found that structures a small seller's existing defensive return-photography ritual into a one-tap, marketplace-ready evidence pack with disposition tracking, after searching App Store/Play, r/Flipping, r/eBaySellerAdvice, and return-platform feature lists. The evidence helps the seller; it never decides the case — the marketplace owns the outcome."

### Monetization

Free: 5 returns/mo. Paid: $9–19/mo via RevenueCat subscription. The seller's willingness to pay is the main open question (resellers are price-sensitive); the evidence-pack value must be demonstrated in real disputes before the price is set.

### Retention

Every return or claim event. Active resellers process returns weekly; the return log becomes the seller's own truth they keep coming back to.

### Growth Loop

Dispute-win stories ("won the INAD case with the evidence pack") are shareable in r/Flipping and reseller communities; the log itself generates "returned item → outcome" content for BuildInPublic.

### Build in Public

"30 days of returns across 20 resellers — what the evidence packs did to dispute outcomes." Real numbers, real screenshots.

### Shipaton Categories

HAMM (subscription monetization), Grand Prize (if reseller prepay is real), #BuildInPublic, Replit Idea-to-Income, Layers (focused experiment: does an evidence pack change dispute outcomes?).

### MVP

iOS-first (Expo): return intake (photo + condition + cause + disposition), evidence-pack export (PDF/image bundle), per-item return log, RevenueCat paywall. No marketplace integrations in 1.0.

### Demo (two minutes)

0:00–0:20 — a returned box arrives; the seller photographs it. 0:20–0:50 — tags condition, picks disposition, one tap. 0:50–1:10 — the evidence pack builds itself. 1:10–1:40 — attach to the pending INAD dispute. 1:40–2:00 — the numbers story: return fraud scale and what resellers lose without evidence.

### Technical Architecture

Expo (TypeScript), local-first photo + metadata store, on-device image processing, RevenueCat entitlements, PDF/image bundle export. No backend dependency in 1.0.

### Biggest Risk

Willingness to pay and marketplace adjudication limits. If sellers won't pay for evidence that doesn't guarantee a win, the product dies; the evidence pack must demonstrably move outcomes.

### Falsification Test

20 active resellers for 30 days: track dispute outcomes with and without evidence packs; pass gates — ≥4 of 20 prepay, ≥50% of sellers report the pack changed a dispute outcome, median pack build time under 90 seconds, retention above two returns per week.

### Score

Pain 8 / Frequency 6 / Behavior fit 7 / Phone-native 8 / Truth 6 / Novelty 6 / Monetization 6 / Distribution 6 / Retention 4 / Demo 3 / Shipaton feasibility 4 / RevenueCat leverage 3 = **67**.

### Verdict

**VALIDATE FIRST.** The pain is large and the ritual exists, but reseller willingness to pay and the strength of evidence against marketplace adjudication are unproven. Run the 20-seller study before any build. Secondary to SnapInvoice.

---

## Holds (reopening conditions)

- **NetCheck** (1099-K gross-vs-deposits reconciliation, novelty ~70): reopen in tax season (Jan–Apr) or with evidence gig workers pay year-round for deduction prep; two-record invariant must be demonstrated on real statements.
- **ShipKit** (sell-to-ship for large items, novelty ~50): reopen if the bundle (camera measurement + freight-class + damage-photo workflow) demonstrates weekly retention and prepay versus uShip/FreightSizer components.

## Strongest rejected idea of the round

**Photo-to-Quote Instant Estimator** (photo + voice → branded estimate for trades) — a 4.8-star, ~31k-rating direct competitor (SimplyWise Cost Estimator) plus 2025 clones (FieldQuote, Billio) means the wedge is occupied at scale. It remains the strongest *idea*; the market simply moved first. Reopening condition: a channel the incumbents do not serve (inbound text/WhatsApp) shows real adoption.

## Most surprising factual discovery

The 2025–2026 clone wave: every "obvious" mobile pain now has one or more direct apps launched in the last 18 months — WageWatch (paystub diff), DepositProof/MoveProof/DepositGenie (deposit evidence), TrueStatus (repair status), SimplyWise (photo→quote), Gallerina (proofing seam), Odobook (portable car record), Nursys e-Notify (license watch). Two years ago most of these cells were empty.

## Most important assumption disproven

That a fresh "documentation at dispute time" or "verification" product would be novel. The novelty gauntlet showed the entire evidence/documentation vertical is now saturated with 2025–26 movers; the remaining open cells are open for economic reasons, not oversight.

## Most interesting cross-domain transfer

Aviation minimum-equipment-list (MEL) practice → a "broken but tolerated with a hard deadline" log for deferred home/car repairs: a mechanism completely normal in aviation that has no consumer equivalent, though it needs a host repair product to attach to (parked as `aviation-mel-deferred-repairs`).
