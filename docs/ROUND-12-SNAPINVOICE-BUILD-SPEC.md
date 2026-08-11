# SnapInvoice — Build-Ready Spec — Shipaton 2026 (Six-Week Plan)

Status: **DO NOT BUILD — acquisition gate failed on 2026-08-11.** This specification is retained as historical decision evidence. Outreach could not recruit even three eligible target operators, so the team could not run deposits, fixture collection, or repeated-use validation. Reopen only through the explicit channel gate in the canonical record.

> Per AGENTS.md, Expo SDK 57 and RevenueCat APIs must be re-verified against the versioned docs before any code is written. This spec is the plan, not the implementation.

Run **Gate G0** from `ROUND-12-SNAPINVOICE-FALSIFICATION.md` first. If ten eligible operators do not reject the relevant suites for demonstrated workflow reasons and four do not place refundable deposits for the narrower forwarding behavior, stop before the extraction fixture.

## 0. The one sentence

For solo tradespeople and micro field-service ops who already text job photos to their owner or bookkeeper, SnapInvoice turns a week of those photos and paper slips into sendable invoice lines and flags any job that never got billed — so they stop losing money to forgotten paperwork.

## 1. Why this survives (evidence recap)

- First-person un-invoiced-revenue accounts in r/sweatystartup (tonnage fees lost in the truck cab; whiteboard system-of-record wiped).
- Micro-ops (1–3 techs) skip Jobber/ServiceTitan on price ($29–529/mo + $29/user) and complexity; they run on calls, texts, whiteboard, paper.
- The phone is already the job camera and the photo already flows by text/WhatsApp — the product attaches to an existing ritual; it does not demand a new one.
- The Round-12 sweep found no app doing the exact batch job-photos → invoice lines + un-invoiced detector + inbound-share intake as a standalone. The post-commit check found SimplyWise, BldrOS, PeakPro, PlanMyCrew, SodaDesk, and TidyShift close on the outcome, including photo-backed invoicing and unbilled-work detection. **Only the no-suite forwarding behavior remains plausibly open; this is not a broad product-gap claim.**
- The mechanism map's core finding: the dead concepts' mechanisms were fine; the payer assignment was the bug. SnapInvoice's payer (the owner of the money flow) and correction step (the invoice the owner controls) are both on the right side of that lesson.

## 2. The risk that must be killed first (falsification before build)

The whole build rests on three unproven claims. Kill or confirm each for under $150 and ~21 days, **before writing any native app**:

| Gate | Claim | Test | Stop rule |
|---|---|---|---|
| G0 | Operators reject the suites but will buy the narrower behavior | Show SimplyWise and one relevant full-suite alternative to ten eligible ops; observe their real current workflow and offer a refundable $20 deposit | <7/10 demonstrate a concrete suite-fit failure OR <4/10 deposit |
| G1 | Photo→line extraction is good enough | 100–150 real slips/receipts/job notes scored in week 1 (human labels = ground truth); measure per-line recall, total-amount agreement, fabricated-line rate | <90% line recall OR <90% amount agreement OR **any fabricated line on an unreadable slip** (false green = instant stop) |
| G2 | Ops will route real photos through the tool | 10 ops, 3 weeks, a Telegram bot (human/cheap-LLM in the loop returns line items + a Sunday "un-invoiced list" the op must confirm/correct — the correction doubles as the detector-truth check) | <7/10 ops forward ≥80% of real job photos |
| G3 | Ops will pay | At day 15–17, offer refundable $29 founder-year vs $12/mo (Stripe, A/B); require ≥4/10 prepay | <4 prepays |

Recruiting 10 ops is ~80% feasible via r/sweatystartup + Facebook trade groups + Instagram DMs. The likeliest failure is G2 (adherence — September is dumpster/landscape season ramp; the payoff lands Sunday, not on the day the photo is forwarded). That is precisely what the experiment measures before any build.

## 3. Six-week calendar (Aug 11 → Sep 30)

- **Days 1–2:** recruit 10–15 ops (r/sweatystartup post, 5 trade FB groups, 20 IG DMs) and run G0 before standing up the Telegram bot.
- **Days 3–9:** only if G0 clears, stand up the Telegram bot and run fixture scoring (G1) — ops forward past photos/slips; human + LLM transcribe; score against labels.
- **Days 10–14:** forwarding study live (G2). Weekly check-ins; refine bot prompts on real slips.
- **Days 15–17:** prepay offer (G3).
- **Days 18–21:** continue; apply stop rules; interim report.
- **Days 22–35:** GO/NO-GO decision. If GO: build MVP (scope below). If NO: ship the Telegram bot as-is to the market anyway (a $12/mo bot is a viable submission and a real product; decide at day 21).
- **Days 36–50:** MVP build + App Review submission (submit early; App Review can take multiple days).
- **Day ~47–52:** store listing live; begin the growth sprint.
- **Sep 30 11:45pm PDT:** submission deadline. Demo video ≤2 min, 1024×1024 icon, 1179×2556 screenshot, free trial or promo code, US-accessible.

## 4. MVP scope (if GO)

**Include (the differentiation):**
- Share-sheet / forwarding intake → per-customer job timeline with time/geo stamp (the existing ritual, productized).
- Photo→line structuring with `readable`/`unreadable` labels (on-device VisionKit/CoreML or a cheap LLM API — the bot experiment decides which accuracy bar is met).
- **The un-invoiced work detector:** "3 jobs have photos, no invoice — $640 not billed."
- One-thumb invoice builder: approve lines, labor rate, branded PDF/text export, mark billed.
- RevenueCat paywall: free tier (3 invoices/mo, detector visible), paid $12/mo, 7-day trial.
- Voice intake (the R12 weirdness-round differentiator): say "cleanout run, 4 tons, 2 stops" → the same line builder, hands-free from the cab.

**Exclude (the suite-differentiating line):** scheduling, dispatch, GPS fleet tracking, parts/PO boards, client portal, multi-user roles, QuickBooks sync. Square/QuickBooks export is a PDF/CSV, not a live API, in 1.0.

## 5. RevenueCat monetization design (HAMM)

- Entitlement `pro`; product: monthly `$11.99` (or the G3-validated price), plus a `founder_year` non-consumable-style annual at the tested price. 7-day free trial via RC Offering, with RC Experiments to A/B trial length and price once >50 conversions.
- Paywall craft: the single hero line is the detector ("3 jobs, $640 unbilled") above the price; the paywall is shown when the detector fires, not on first open — monetization appears at the moment of demonstrated value (a HAMM-relevant pattern: paywall tied to the product's own finding).
- Free tier value before paywall: intake + detection works free for up to 3 invoices/mo so the un-invoiced nudge is always visible; conversion is the act of sending invoice #4.
- RevenueCat dashboard is the growth telemetry for the Grand Prize story.

## 6. Two-minute demo storyboard

0:00–0:15 — the week's inbox: six job photos already shared in from the cab.
0:15–0:40 — app structures lines from readable slips, marks one `unreadable`, shows "3 jobs not billed, $640."
0:40–1:00 — one thumb approves; a branded invoice leaves by text.
1:00–1:20 — the detector ticks the billed job off; "unbilled total now $215."
1:20–2:00 — the numbers story: what 10 real haulers/landscapers forgot to bill, and the dollars/job economics from the live experiment. (Real data from the falsification study is the demo's spine.)

## 7. Grand-Prize revenue math and category strategy

- If 200 paying ops × $12/mo = $2,400/mo in-window MRR; 400 ops = $4,800/mo. Modest but real, and the Grand Prize is shortlisted by RevenueCat revenue then judged on **growth quality and sustainability** — the story is "validated, paid, recurring business-payer demand with a documented experiment," not a viral download spike.
- Award matrix: **Grand Prize** (paid recurring revenue + documented growth experiments) · **HAMM** (paywall tied to product-found value; trial + Experiments) · **OneSignal Keep Them Coming Back** (two genuinely value-adding campaigns: the weekly "un-invoiced" nudge and the invoice-ready reminder — a retention use that is not spam) · **#BuildInPublic** (the 10-hauler falsification study is inherently content-rich; audience size doesn't matter, lessons do) · **Replit Idea-to-Income** (week-over-week revenue trajectory if built with Replit) · **Layers** (the G3 prepay A/B is a clean, measured growth experiment).

## 8. Acquisition playbook (first 25 → 100 → 1,000)

- First 25: the 10 study ops + referrals from r/sweatystartup and the dumpster/tonnage + landscaping FB groups that the study surfaced (exact threads documented in the R11/R12 dossiers).
- First 100: the study's "found money" screenshots distributed as shareable cards; ASO on "invoice from photos" and "job invoice app"; Instagram reels of the detector firing; a "what did you forget to bill" content loop (ops are happy to show off recovered dollars).
- First 1,000: the share loop is intrinsic — the detector output is a brag-able, money-visual artifact. Trade YouTube (the trades content niche is underserved and high-trust). Skip paid ads in the window.
- Growth experiments for Layers: free→paid conversion (3-invoice cap), price A/B, trial-length A/B.

## 9. Failure pre-mortem (Oct 2027)

**It failed completely — five most likely reasons:** (1) G2 failed — ops wouldn't route photos through a new surface despite the existing ritual (adherence, the known risk); (2) G1 failed — real-world slips (handwriting, folded receipts, coffee) defeated extraction and the "builds itself" promise broke trust; (3) a suite (Jobber/SimplyWise) shipped photo→invoice as a feature, absorbing the wedge at the price floor; (4) the Sunday-payoff latency killed daily habit — ops didn't open the app mid-week and the detector went stale; (5) the micro-ops that lose money are too small/too few to fund a real business — "it's fine at our size" was the accurate majority view.

**It became a $1M/yr business — five most likely reasons:** (1) the un-invoiced detector proved to be a sticky money-hook with churn-proofed weekly ritual; (2) share-sheet intake won the behavior contract against suites that demand open-app-create-job; (3) the voice intake made it usable from the cab, widening from hauling/landscaping to plumbing/electrical service ops; (4) the falsification study's real numbers made the launch story credible and the BuildInPublic audience pre-sold the first 1,000; (5) trade verticals (tonnage, pool, cleaning) each have concentrated communities → efficient paid-trial acquisition.

Compare: the pre-mortem's reason 1 and the success path's reason 1 are the same variable (adherence/ritual). That is why G2 is gate #2, tested before a single line of the app is written.

## 10. Decision Audit — most important answers

- **Strongest evidence problem exists:** first-person un-invoiced-tonnage and lost-paperwork accounts (FACT, URLs in dossier).
- **Strongest evidence we may be exaggerating:** "it's fine at our size" threads; many micro-ops bill fine with text + Square; Jobber's happy paid base.
- **What must come from the user:** the photos/slips themselves and the invoice-line verification (approve = the truth event).
- **What the phone observes authoritatively:** time/geo of intake, the pixels of the photo/slip, the `unreadable` label. **Never inferred:** that the work was done correctly, that the price is fair, that the slip is authentic.
- **Who does not care:** ops with no paper problem, and any op happy paying for a full suite.
- **Why hasn't someone built it:** the cell is un-dug (no graveyard), and the 2026 AI-invoice wave went voice/text-prompt instead of photo-batch; the suite incumbents capture photos but don't auto-build or detect un-invoiced work at a micro-ops price/complexity.
- **Can it be cloned in a weekend:** the extraction, yes (~60%). The share-sheet behavior contract + detector + trade templates, no — those need the weekly habit and trust that only the ritual provides.

## 11. Technical architecture (verify Expo 57 APIs before code)

Expo (TypeScript). iOS share-sheet extension → app inbox; on-device OCR + structured extraction (VisionKit/CoreML, or the G1-validated LLM API); SQLite local-first with later sync; RevenueCat SDK for entitlements/offerings/experiments; OneSignal for the two campaigns; optional Stripe web checkout for Funnel Vision. No backend in 1.0 (the bot experiment tells us whether the LLM must be server-side).

## 12. Immediate next actions

1. Day 1: post the study-recruit to r/sweatystartup; stand up the Telegram bot.
2. Run G1/G2/G3. Apply stop rules honestly.
3. GO → build MVP to scope; NO → ship the bot and pivot the landing page to "voice+photo invoice from the cab."
4. Whatever the outcome, the experiment IS the BuildInPublic content and the Grand-Prize "growth by numbers" story.
