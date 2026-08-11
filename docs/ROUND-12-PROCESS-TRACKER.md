# USER-INSTRUMENTABLE PROCESS TRACKER — Round 12 Deep Dive

**Hypothesis under test:** a consumer app where the USER logs their own steps, documents, deadlines, and evidence across ANY multi-provider process (repair, claim, mortgage, permit/renovation, benefits/immigration, school), and the app maintains "what has happened / what should happen next / what I'm waiting on / what I must do by when" from the user's OWN inputs + phone-captured evidence + calendar math. The product never claims to know the provider's internal state.

Research date: 2026-08-11. Evidence labels: **FACT** (cited) / **INFERENCE** / **HYPOTHESIS** / **SYNTHETIC**. Reddit threads verified at title/snippet level via search index (full-thread fetch 403-blocked this pass, same method as Round 12). Product Hunt search was bot-walled (CAPTCHA) — App Store version histories used as the 2026-launch proxy instead.

---

## A. Who needs this and how often — five+ process categories with evidence

**Convergence check:** Round 12 cluster C11 (D-Q3/Q15/Q19/Q28 + FG03/FG18/FG10 = 7 paths) flagged "what happens next" as the most-convergent consumer-facing cluster. This round independently re-confirmed the pain per category. What changed vs. Round 12: for every category I found that either (a) a provider-side portal/aggregator already owns the *status* half, or (b) a 2025–26 B2B tool makes the provider publish status free to the consumer.

### A1. Home repair / renovation ($427B US spending) — frequency: every few years, high stakes
- FACT: US home renovation spending ~$427B, kitchen & bath lead (https://buildermuse.com/residential/home-renovation-spending-hits-427-billion-/). Houzz & Home Study is the category research base (https://www.houzz.com/magazine/2026-u-s-houzz-and-home-study-renovation-trends-stsetivw-vs~185090855).
- FACT: contractor silence/ghosting is a named, recurring pain with its own advice genre: r/Renovations "Keep getting ghosted by the contractors" (https://www.reddit.com/r/Renovations/comments/17g6rjb/), r/HomeImprovement "Why do contractors keep ghosting us??" (https://www.reddit.com/r/HomeImprovement/comments/txva2z/), "Need help, contractor is ghosting me!" (https://www.reddit.com/r/HomeImprovement/comments/1jy6rsg/), plus Forbes (https://www.forbes.com/home-improvement/contractor/what-to-do-when-contractor-ghosts-you/) and GreatBuildz (https://www.greatbuildz.com/blog/contractor-ghosted-you-heres-what-to-do/). This is Round-11 pain #1/#17 resurfacing.
- FACT: kitchen remodel is a 6–10-week (trades) to multi-month process with a step order (https://www.fixr.com/articles/how-long-does-a-kitchen-remodel-take, https://realestate.usnews.com/real-estate/articles/how-long-does-a-kitchen-remodel-take) — i.e., a long enough window for a tracker, and it is THE canonical "what happens next" process.
- INFERENCE: the highest-urgency sub-pain is *silence between updates*, not the checklist. Every "ghosted" thread is a status problem.

### A2. Insurance claim — frequency: occasional but catastrophic when it happens
- FACT: claims handling is the #1 insurance complaint; trust in insurers ~37% (Round-11 verified: https://www.valuepenguin.com/most-common-insurance-complaints, https://insurify.com/homeowners-insurance/news/rising-consumer-complaints-in-2025/).
- FACT: "status black box" threads: r/homeowners "Filed a home insurance claim months ago and am still waiting..." (https://www.reddit.com/r/homeowners/comments/ehva5a/), r/Insurance "claims adjuster not responding to my calls" (https://www.reddit.com/r/Insurance/comments/1k2ck0h/), "Homeowners claim—adjuster won't respond to supplement" (https://www.reddit.com/r/Insurance/comments/nqb76k/), "State Farm taking over a week to respond" (https://www.reddit.com/r/Insurance/comments/15ku2sb/). The dominant question is "what's happening / what's next / am I being ignored".
- FACT: the proof-the-loss documentation burden is the second half of the pain (Round-11: https://uphelp.org/claim-guidance-publications/home-inventory-and-contents-claim-tips/).

### A3. Mortgage / refinance — frequency: rare per person, highest-stakes single process
- FACT: consumer-side status anxiety is heavily documented: r/Mortgages "Loan Application to Underwriting - What's Next?" (https://www.reddit.com/r/Mortgages/comments/978p5h/), r/FirstTimeHomeBuyer "Underwriting has me so stressed!" (https://www.reddit.com/r/FirstTimeHomeBuyer/comments/16bpar6/), "Closing within a week. Underwriter has been silent." (https://www.reddit.com/r/FirstTimeHomeBuyer/comments/1dwc362/), "I'm in escrow and I'm having the worst anxiety of my life" (https://www.reddit.com/r/FirstTimeHomeBuyer/comments/q6a60w/), "Appraisal Anxiety" (https://www.reddit.com/r/FirstTimeHomeBuyer/comments/1bzsz7g/).
- FACT: the status half is already owned **per-lender** by provider portals: PNC "Home Insight Tracker" (https://www.pnc.com/en/personal-banking/borrowing/home-lending/Campaigns/tracker.html), BofA "Home Loan Navigator" (https://www.bankofamerica.com/mortgage/home-loan-navigator/), Regions loan status, SeeMyLoanStatus. No cross-provider or user-owned version exists (see B).
- INFERENCE: the residual consumer pain is *multi-provider coordination* (lender + escrow/title + appraisal + home insurance + HOA docs + city records) — a genuinely multi-party process the lender portal can't show.

### A4. Permit + renovation inspection — frequency: tied to projects; months-long waits
- FACT: wait pain is documented: r/HomeImprovement "Can I start building/fixing the house while waiting for the permit?" (https://www.reddit.com/r/HomeImprovement/comments/rwzxdo/), r/Homebuilding "Can the permit process actually take YEARS?" (https://www.reddit.com/r/Homebuilding/comments/t5vgou/), city-by-city permit times are a content genre (https://www.angi.com/articles/how-long-to-get-building-permit.htm, https://www.permittable.ai/insights/building-permit-times-by-city).
- FACT: the B2B permit cell is owned (PermitFlow, PermitRadar, viapermit, PermitTracker for contractors); consumer-facing permit status is per-municipality portals. No consumer multi-step tracker exists.

### A5. Benefits & immigration — frequency: rare per person, long windows, highest anxiety
- FACT: immigration waiting anxiety is a self-named genre with polling-frequency evidence: r/USCIS "waiting anxiety" (https://www.reddit.com/r/USCIS/comments/12ky7wb/), "It's the uncertainty and not how long it takes" (https://www.reddit.com/r/USCIS/comments/11f91zg/), "How often you check status?" (https://www.reddit.com/r/USCIS/comments/199robh/), "How often y'all check case status?" (https://www.reddit.com/r/USCIS/comments/s7x2xt/).
- FACT: the aggregator cell is already huge and monetized — Lawfully reports "6M+ registered cases," 4.8★, premium subscription (App Store listing via https://appstoreprice.org/en/apps/1435063223); plus Case Tracker for USCIS & NVC (https://apps.apple.com/us/app/case-tracker-for-uscis-nvc/id921827126), uscistracker.app, mycaseshub. These work because USCIS status IS a sanctioned public endpoint (egov.uscis.gov) — exactly the aggregation the hypothesis excludes.
- FACT: SSDI/SSA same shape: r/SSDI "Waiting...waiting...waiting..." (https://www.reddit.com/r/SSDI/comments/vn4jtn/), "Called this morning and they told me they made a decision but..." (https://www.reddit.com/r/SSDI/comments/1dft6ms/), and the status/timeline content genre (https://www.ssa.gov/apply/check-application-or-appeal-status).

### A6. School applications (bonus category — where the cell is provably commodity)
- FACT: college application trackers are a crowded consumer cell (admitlist.org, uniapptrack.com, applytracker.io, applynudge.com, Admitto, AppTrack). This is the **canary**: a process tracker for a high-stakes, deadline-driven consumer process where the tracker is free/browser and the provider (college) never pushes status. The cell exists, is small-revenue, and no one has won it. (INFERENCE: because it is commoditizable.)

**Frequency summary:** mortgage/immigration ≈ once-per-decade; renovation ≈ every 5–10 years; claims ≈ occasionally; permits ride on renovations. No category is continuous. This is the retention problem in section E.

---

## B. Competitor landscape — classification

Searches run (~25 query angles): "status tracker app", "process tracker app", "life admin app", "application tracker", "case tracker", "renovation tracker", "mortgage tracker", "insurance claim tracker", "permit tracker", "home repair tracker", "what happens next", "personal status page", "homeowner portal", "contractor client portal", plus App Store/Play store searches for the same terms.

### NO OBVIOUS MATCH — the exact hypothesis cell
A consumer-owned, multi-provider, user-instrumented process tracker (user logs everything, app computes next steps, never claims provider state) was **not found** across all search/store angles. The cell is genuinely empty. But Round 12's mechanism map explains the emptiness: **M9 (approval-deadline state machine) and M18 (status page / one-tap log feed) both died on "consumer peace-of-mind has no payer," not on mechanism quality** (https://github.com/…/mechanism-map.md — M9 "no sanctioned API", M18 "consumer peace-of-mind has no payer"; reproduced in /tmp/opencode/shipaton12/mechanisms/mechanism-map.md lines 100–108, 182–185). Empty ≠ opportunity (Round-11 rule).

### DIRECT / PARTIAL — consumer-side category verticals (the two-sided race)
| Product | What it is | Price (FACT) | Class |
|---|---|---|---|
| **Pilt** (pilt.app) | Renovation PM for homeowners+pros: budget, docs, tasks, photo timeline, AI redesign | Free 1 project; Pro $16.25/mo ($194.99/yr) | **PARTIAL — closest to the hypothesis**; renovation-only, and sharing is with *your contractor*, not across providers |
| **HomeNest** (apps.apple.com/us/app/homenest-renovation-tracker/id6756124583) | 2026 solo-dev launch: renovation stages/budget/tasks/contractors + client portal for contractors | Free | PARTIAL (same cell, free = price pressure) |
| **PlanMyReno / RenovoTrack / Renovise / Storypole / Raíz / Home Stories / Pilt / HomeRenoTracker** | 2026 renovation-tracker wave (AI receipt scan, budgets, rooms) | mostly free or cheap tiers | PARTIAL — the cell is being probed hard in 2026 (clone-wave signal) |
| **Manage** (manageapp.co) | Life admin for families: appointments, docs, pets, reminders | web free; iOS one-time **$9.99 purchase**, "no subscription, ever" | **PARTIAL — signals the payer lesson: episodic life admin → one-time price, not subscription** |
| **Life Admin: Family Organizer** (apps.apple.com/us/app/life-admin-family-organizer/id6769830767) | 2026 launch: household command centre, doc vault, subscription tracker, reminders | Premium $2.99/mo or $24.99/yr | ADJACENT (records/expiry, not process state) |
| **DOQIT / Choreganized / LifeAdmin / Life Admin 365 / Adulting** | life-admin organizers | — | ADJACENT (documents/tasks, not "what happens next") |
| **admitlist / UniAppTrack / ApplyTracker / ApplyNudge / Admitto** | college application trackers | free/browser | **DIRECT in one vertical** — proves consumer process-tracker demand exists AND is commoditized |

### Status AGGREGATORS (excluded by hypothesis, but define the real willingness-to-pay)
- **Lawfully** (lawfully.com) — USCIS/NVC/EOIR aggregator on the sanctioned public endpoint; 6M+ registered cases, premium sub (FACT, App Store).
- **IRS2Go / "Where's My Refundo? WMR+"** (https://apps.apple.com/us/app/wheres-my-refundo-wmr/id1075979933) — tax refund aggregators on the public IRS tool.
- **Case Tracker for USCIS & NVC** (id921827126), uscistracker.app, mycaseshub — same.
- **Trajector** (trajectordisability.com) — SSDI status + attorney funnel.
- **Lesson (FACT): consumers demonstrably pay $/month for *actual* provider status.** The hypothesis refuses to provide actual status — so it must justify why consumers pay for *their own* record instead. This is the crux of section D.

### PARTIAL (business side) — the "provider publishes status, consumer watches" direction
This is the strongest structural competitor and the 2025–26 growth cell:
- **TrueStatus** (truestatus.net) — "Stop 'Is It Done Yet?'" client project tracker for auto repair/body shops, home builders, law firms; free 1 project, Pro/Enterprise monthly; client views via link, no login. **This is the shareable status page mechanism, business-paid, consumer-free.**
- **BuildStatus** (buildstatus.co) — status pages for contractors: free 1 project, $15/mo unlimited, custom branding. Same mechanism, cheapest price yet.
- **SiteUpdate** (siteupdate.app), **BuildStory** (buildstoryapp.com), **BuilderWell**, **WorkPhotos**, **HBApp**, **RevCore Homeowner Portal** (revcorepro.com), **Jobber Client Hub** (getjobber.com), **Handoff.ai** ($119–$299/mo all-in-one with AI Client Portal; handoff.ai/pricing), **Buildertrend** (homeowner app), CoConstruct.
- **Classification: PARTIAL on the business side.** These own "the counterparty posts progress; the consumer reads it for free." The hypothesis's user-side status page is *pre-empted*: in renovation/repair, the contractor is increasingly expected to hand the homeowner a free link.

### ADJACENT (commodity / B2B)
- General task/project trackers: ClickUp, Notion (personal life-dashboard/tracker templates, Notion Marketplace), Todoist, Microsoft To Do, Craft process-tracker template — the "fancy checklist" that the killer-question must beat.
- B2B case/claims/permit management: Clio/Lawtrac (legal), claims-management suites (Capterra/SoftwareAdvice categories), PermitFlow/PermitRadar/viapermit (permits), Procore/ServiceTitan/Jobber (field service).
- Wedding-planning (adjacent **business-payer proof**): Zola — free to couples; vendors pay-to-connect + Unlimited subscription plans (https://www.zola.com/faq/360002891772-What-does-it-cost-to-be-listed-on-Zola-); The Knot, Loverly, Zennvue, HoneyBook. **This is the proof-of-concept that a consumer-facing process platform monetizes via the business side, not the consumer.**

**Top-3 closest products:** (1) **Pilt** (pilt.app) — consumer process tracker, renovation vertical, $16.25/mo; (2) **TrueStatus** (truestatus.net) — the status-page mechanism, business-paid, consumer-free viewer; (3) **BuildStatus** (buildstatus.co) — same mechanism at $15/mo, minimal. Plus Lawfully as the willingness-to-pay control for actual status.

---

## C. The truth/integrity test — is "the user's own truth" defensible?

**What the phone can observe authoritatively (FACT, technical):** the user's own artifacts — timestamped photos/videos (EXIF), documents & receipts (OCR-able but "document exists" ≠ "document accepted"), screenshots the user took, calendar/reminder state, timestamps, location. **Constraint from Round 12:** "photo proves only the photo" — an artifact proves an artifact existed at a time, never the underlying process state.

**What the user MUST enter (FACT):** every provider interaction — what the agent said, portal statuses read, phone-call outcomes, "waiting on X", received decisions/letters, RFEs. These are attestations, unverifiable by the app.

**What is merely inferred:** expected next steps and windows from *public rules/templates* (permit step order, kitchen-remodel durations, statutory response windows), and **stall = absence of observed update**, computed from calendar math. Two rules keep it defensible:
1. **Three truth-classes, visually distinct:** OBSERVED-BY-ME (photos/receipts/logs) / SAID-BY-THEM (provider attestations) / EXPECTED-FROM-RULES (public templates, labeled with their source). A "green" may only be derived from class 1 (user-attested artifact), never from silence.
2. **Staleness is UNKNOWN, not "delayed."** "No update in 3 weeks" = "UNKNOWN: no evidence of X yet" + a nudge to follow up — never "your process is behind."

**Verdict: defensible against the no-false-certainty rule, at real product cost.** The same discipline is what separates it from Lawfully's "big-data prediction of approval/RFE probability" (the false-certainty trap; Lawfully gets away with it because its raw input IS provider state). The integrity twist is actually the hypothesis's best asset: it's the only design where "I don't know" is the honest, first-class output. But it also caps the value: the app cannot answer the user's actual question ("what does the *provider* think?"), and section D shows that is where the money is.

---

## D. Monetization — who pays, when, how much

**Evidence on willingness to pay:**
- Consumers pay *for actual status*: Lawfully premium (subscription; US price ~$4–6/mo tier), WMR+ refund trackers, IRS2Go. FACT.
- Consumers do **not** demonstrably pay for *their own record* of a process: the closest life-admin products either price a one-time $9.99 (Manage — explicitly "no subscription, ever") or $2.99/mo with no traction yet (Life Admin Family Organizer, 2026 launch, no ratings). Pilt (the direct analog) charges $16.25/mo but is renovation-vertical with a business-facing "company" tier. INFERENCE.
- Businesses DO pay for the status-page mechanism: TrueStatus/BuildStatus free→$15/mo; Handoff $119–299/mo; Buildertrend $349–599/mo; Zola vendors pay to connect with couples. FACT.

**Moment-of-anxiety vs subscription (FACT, RevenueCat-native):** RevenueCat natively supports auto-renewing subscriptions, non-renewing subscriptions, consumables & non-consumables (one-time IAP), paywalls, promotional offers, offer codes, free trials + win-back, grace periods, web purchases via Stripe (RevenueCat Billing), and RevenueCat Ads (docs.revenuecat.com; per rules I verified capability from the Shipaton brief rather than re-fetching docs). So both archetypes are buildable:
- **Moment-of-anxiety one-time IAP:** e.g., $4.99 per active process (unlocks tracker + status page + next-step engine for one process), plus a $9.99/yr "vault" for archived processes/home documents. Aligns price with episodic intensity; LTV per user bounded by process count.
- **Subscription:** $2.99–4.99/mo benchmarked to Life Admin / Lawfully; but LTV fails if the app dies between processes (section E).

**Recommendation for this hypothesis:** moment-based one-time IAPs (a non-renewing "process pack") as primary, subscription as optional vault — the opposite of the Shipaton "crafted subscription" ideal. The strongest payer by far is the **business side** (contractor/repair shop/builder), which is exactly why the market has been building that direction (section B/G).

---

## E. Retention — when is a process active enough to be weekly? Does the app survive between processes?

**Active windows (FACT, category evidence):** kitchen remodel ~6–10 weeks of trades / whole-remodel 3–8 months (https://www.fixr.com/articles/how-long-does-a-kitchen-remodel-take); home claim 2–6 months, SSDI initial 3–8 months, appeals >12 (https://benefitsusa.org/en/blog/ssdi-processing-time-by-state); mortgage 30–90 days; permit 2–8 weeks; immigration 6–24 months (USCIS processing-time pages).

**During-process frequency:** high. USCIS users openly ask "how often do you check status" and describe daily/hourly polling (threads in A5); renovation is weekly-by-default (contractor progress + payments); claims are weekly check-ins. So a weekly ritual is real *inside* an active process. FACT.

**Between processes:** the app dies. Processes are episodic by definition — 0–2 active processes per household-year. Survival requires the tracker to become a *vault* (documents, warranties, expiries, provider contacts, receipts carried into the next process) — which collapses the product into the crowded life-admin/document cell (Life Admin, Manage, DOQIT, HomeZada, Legible Home). INFERENCE, and exactly the Round-11 "cluster C11 weakness": the retention axis of the Shipaton brief ("weekly ritual that survives") is the hypothesis's structural weak point.

---

## F. The killer question — is this just a fancy checklist + calendar? What is the non-commodity mechanism?

**Yes in its naive form.** Checklist + deadlines + photo folder = Notion template, Pilt, HomeNest, Todoist. The tracker's one genuinely non-commodity mechanism is a **per-process state machine fed by user attestations**:

1. **The "what should happen next" engine** — a template state machine per process type (permit, claim, mortgage, renovation, immigration) that computes, from what the user *logged*, the ordered next steps, who owns each, and the expected window per public rule. Its defensible output is not certainty but **dependency reasoning** ("you can't schedule the inspection before the permit — you logged permit submitted, expected next is X") and **stall detection** ("expected step X has no observed completion within its window → UNKNOWN + nudge to follow up"). This is mechanism M9 from Round 12's map, transplanted to the user-instrumented design so it never needs the sanctioned API.
2. **Evidence-anchored transitions** — every step completion requires a captured artifact (photo/receipt/screenshot/call note); one-tap capture at the moment. This is what makes the record a *record*, not a to-do list, and it is the only part of the product with genuine "user's own truth" integrity.
3. **The shareable status page** — but the consumer-built version is pre-empted: TrueStatus/BuildStatus/SiteUpdate/Handoff already give the *provider*-built page free to the consumer (section B). A consumer building their own page about a process their contractor already pages is redundant.

**Net:** the state-machine + evidence-anchoring is real and non-commodity *in principle*; the shareable page is commoditized from the business side; and the mechanism map's verdict stands — the mechanism was never the problem, the **payer** was (M9/M18 both died on "consumer peace-of-mind has no payer").

---

## G. Shipaton fit — could a focused single-process version launch in 6 weeks with a business payer?

**Build feasibility: 6 weeks, yes.** A single-vertical consumer tracker (e.g., "renovation tracker": stages, photo log, next-step engine, one status-page share, one IAP) is a realistic 6-week Expo build (per AGENTS.md, Expo SDK 57 docs apply).

**Business-side payer test (the hypothesis's own question G):**
- The scenario is real and *already happening*: contractors send homeowners status pages today via TrueStatus ($0→Pro), BuildStatus ($15/mo), SiteUpdate, Handoff ($119+/mo), Jobber/Buildertrend. FACT.
- A business payer would solve cold start (the contractor pulls in the homeowner free), and it is the only payer with a weekly money flow. **But the product is no longer the hypothesis** — it becomes a B2B "client status page" tool, and that cell is a 2025–26 growth wave that Round 12's mechanism map already flagged as "rubric-perfect but saturated" (#2 shortlist; "vertical is being attacked"). BuildStatus at $15/mo is the price floor to beat; Handoff owns the top.
- **Consumer-payer version:** cold start is low (single-user, no network), but revenue per user is small and episodic, the market is already free (HomeNest/Pilt free tiers), and the honest-unknown design deliberately withholds the one thing consumers demonstrably pay for (actual status). The 6-week revenue shortlist ("business/prosumer payer within days + weekly ritual + shareable output + crafted subscription") is not met on any axis except shareable output.

**VERDICT: WEAK-to-UNCERTAIN for a 6-week Shipaton build as hypothesized (consumer, user-instrumented, multi-provider).** The honest-unknown consumer tracker is a real, empty cell with a defensible integrity design — but it has no demonstrated consumer payer, dies between processes, and its best mechanism (status page) is being commoditized from the business side at $0–15/mo. The one commercially coherent variant is the business-side status-page tool, which (a) is not the hypothesis, and (b) is a crowded 2025–26 cell with price pressure. **Recommendation: do not build; if forced to salvage, build the contractor-side status page (TrueStatus/BuildStatus wedge) and treat the consumer tracker as the free viewer — and expect a margin fight.**

---

## Strongest raw signals
1. **The "what happens next" pain is real and convergent across ≥5 categories** (repair/ghosting, claims, mortgage, permit, immigration, SSDI) — Round 12's C11 (7 paths) is not a fluke; this round re-found the pain independently in every category.
2. **The consumer pays for *actual status* but not (yet) for their *own record*:** Lawfully 6M users / premium subs vs. a 2026 wave of tiny free-or-one-time tracker apps (HomeNest free, Manage $9.99 one-time, Life Admin $2.99/mo with zero traction). Pricing experiments across the tracker cells cluster at one-time or $3–16/mo, not $25+ subs.
3. **The shareable-status-page mechanism is already monetized — by the business side, at $15–299/mo** (BuildStatus, TrueStatus, SiteUpdate, Handoff, Buildertrend), with the consumer side free. The consumer-built status page is structurally pre-empted.
4. **The literal hypothesis cell (consumer-owned multi-provider user-instrumented tracker) is empty** — but Round 12's mechanism map explains the emptiness as payer failure (M9/M18: "consumer peace-of-mind has no payer"), not oversight.
5. **Payer-control signal:** SimplyWise — a consumer receipt/AI app — visibly pivoted to "AI Tools for Contractors" (simplywise.com), the same consumer→business-payer migration the data predicts for any consumer process/evidence tool.

---

*Sources: Round 12 pain-point-map.md (C11, pains #107–108, #22, #17, #61); Round 12 mechanism-map.md (M9, M18); searches run 2026-08-11 via DDG/Mojeek/App Store + direct site fetches; Reddit verified at search-snippet level (direct fetch 403-blocked). Product Hunt search bot-walled; 2026-launch evidence taken from App Store version histories (HomeNest id6756124583, Pilt id6755160667, Life Admin Family Organizer id6769830767).*
