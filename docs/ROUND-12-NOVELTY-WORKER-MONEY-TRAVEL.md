# Competitor Hunt — Batch 3: Worker Money & Travel (10 candidates)

Method note: DuckDuckGo/Bing(HTML)/Google/Ecosia/Brave/SearXNG were all captcha/JS-blocked from this network; B2B search was carried out via the Apple iTunes Search API (iOS listings incl. full descriptions), Google Play store HTML (app ids), GitHub Search API, HN Algolia, Marginalia, and direct site fetches. Graveyard checks via dead-domain/HTTP checks and HN/archival hits.

---

## B2 — Paystub-vs-schedule diff for hourly workers

**Search log**
- "app compare hours worked vs hours paid paycheck", "app check paycheck against schedule wage theft", "worker app verify paystub", "is there an app to check if my paycheck is correct", "wage theft app" (iTunes/Play), "paystub verify"/"paycheck hours worked"/"timesheet paystub audit" (GitHub), HN "paycheck wrong hours", "paystub app", "wage theft".
- Notable hits: **WageWatch App** (iOS); Google Play Slates Wage Tracker, WageBook, WageClock; GitHub vacchiano/Wage-Theft-App (2016); DataKind-SF wage-theft datadive; HN/NYT **Jornalero** app; HN beta **TrackMyTips** (dead domain).

**Closest existing product**: **WageWatch App** — wagewatchapp.com (iOS id6744068979, Joseph Bonomo, released 2025-04, still updated 2026-04, 5 ratings). "Compares your entered schedule and pay rate with what you were actually paid. The app flags underpayments, missed overtime, and unpaid breaks — and connects you with legal help." Uploads paycheck photos, logs tips/bonuses, group/class-action claims with coworkers. Manual-entry based (not photo-OCR diff), but the concept is the same.

**Classification**: DIRECT (active, early-stage direct competitor). The exact "photo schedule + photo paystub → automated diff → dated evidence package" is not implemented by anyone, but WageWatch owns the worker-side "is my pay right?" job.

**Graveyard check**
- vacchiano/Wage-Theft-App (2016, PHP, addhours.php/addhpaystub.php = schedule+paystub logging for evidence) — 0 stars, dead.
- **Jornalero** (Make the Road New York, NYT 2016): day-laborer app logging hours/wages, photo evidence, employer ratings; never scaled, quiet death.
- **TrackMyTips** (2022 HN "beta app that helps catch wage theft" for tipped workers) — domain now dead (HTTP 000).
- DataKind-SF wage-theft hackathon app (2016) — never shipped.
- Pattern: every worker-side wage-theft evidence app died. Employer side (7shifts, Deputy, When I Work, Homebase, Nowsta) owns schedule+pay data and has no worker-side comparison feature.

**Novelty Confidence: 25/100.** Concept is being actively executed (WageWatch, 2025 launch). Novelty survives only in the specific "photo → OCR diff → evidence package" implementation, not in the product.

**Why-doesn't-this-exist**: Real pain (wage theft is billions/yr; shorted hours are ubiquitous) but the payoff is adversarial: the app can't fix the paycheck — the worker still has to fight HR or file a complaint. Historical attempts were small, underfunded, and distribution-starved.

**Kill risk**: HIGH. Host-owns-correction (app flags but cannot correct; worker faces retaliation risk); two-party adoption cold start (automation needs employer/payroll data — photo-OCR dodges this but is high-friction); low willingness to pay (underpaid hourly workers); commodity-AI-wrapper risk (OCR+diff is trivial to clone, WageWatch already exists); recurring "is it true?" legal liability.

---

## B3 — 1099-vs-bank reconciliation for gig workers

**Search log**
- "1099 reconciliation" (iTunes/Play), "gig income bank reconciliation", "1099 vs bank deposits", "1099 match bank deposits"; GitHub "1099 reconcile deposits"; HN "1099-K", "1099-K deposits", "1099 gross income".
- Notable hits: **1099 Hub** (iOS), FlyFin, Keeper, QuickBooks Self-Employed, Hurdlr, Found, TaxCaddy, TaxDome; HN cluster on 1099-K $600-threshold chaos and gross-vs-deposits confusion.

**Closest existing product**: **1099 Hub** (Go 1099 Pro, iOS id6747369577, rel 2025-08, updated 2026-08) — 1099-worker suite (shift scheduling → auto-invoices, mileage, expenses, invoice/payment tracking, credentials). It is a gig admin suite, NOT a "compare 1099 summary vs actual bank deposits and flag mismatches" tool. **QuickBooks Self-Employed** / **Hurdlr** / **Keeper** / **Found** ingest bank income + estimate taxes but none perform 1099-vs-deposits reconciliation as a job.

**Classification**: NO OBVIOUS MATCH. Functional substitutes exist at the data layer (Plaid-connected income trackers), but the explicit "import platform annual summary (gross/fees/net) → reconcile against actual deposits → flag mismatches" product is unoccupied.

**Graveyard check**: None for this exact product (it hasn't been tried at scale). Adjacent graveyard: 1099-K confusion is evergreen (IRS repeatedly delayed the $600 threshold; "IRS coming for your Venmo" panic every year). No dead direct competitor found — the space is open, not failed.

**Novelty Confidence: 70/100.** No direct product found after multi-angle search; pain is well-documented (platform 1099-K gross ≠ deposits due to fees/returns/cash-payments is a constant Reddit/HN complaint). Reconcile-against-imports is a textbook single-user utility with clear money stakes.

**Why-doesn't-this-exist**: Assessment: opportunity. It's a genuine gap, likely because (a) it's "only" a reconciliation feature incumbents (QBO/Hurdlr) could bolt on, (b) it's seasonally spiky (Jan/Feb when 1099s arrive), and (c) the money is small vs the accounting stacks that already hold the data. Warning: this is the definition of a feature looking for a product; differentiation must be the "mismatch flagging + paper trail" not the importing.

**Kill risk**: MODERATE. Commodity-AI-wrapper (an agent can do this in an afternoon); incumbent feature-add (QBO/Hurdlr/Keeper hold bank+platform data already); seasonality; free incumbents (Stride) anchor price at $0. No two-party cold start though, and frequency is annual (1099 season).

---

## B7 — Owed-vs-received truth board for freelancers

**Search log**
- "invoice payment tracker freelancer" / "unpaid invoice reminder" (iTunes), "unpaid invoices tracker" / "invoice payment reminder dunning" (Play), "invoice payment chasing" / "invoice follow-up reminder" (GitHub), "chasing unpaid invoices" / "invoice reminder tool" (HN).
- Notable hits: FreshBooks, Harvest, Zoho Invoice, Square Invoices, Invoice2go, Invoice Simple, Invoice Fly, Tiny Invoice (invoicers with payment tracking + aging + reminders); **Chaser** (AR automation SaaS); HN **"Unpaid – AI payment reminders"**, **InvoiceNudge**, **Uaryn** ("smart invoicing that learns when your clients pay"), **Just Following Up** (open-source freelancer reminder app); GitHub swarm of invoice-nudge clones (0 stars).

**Closest existing product**: The category itself — any of FreshBooks / Zoho Invoice / Harvest / Square Invoices (payment status + aging + automated reminders), plus dedicated dunning tools **Chaser** (chaser.io) and open-source **Just Following Up** for the one-tap polite follow-up specifically.

**Classification**: DIRECT / FUNCTIONAL SUBSTITUTE. "Import/photo invoices, aging per client, one-tap follow-up drafts" is exactly the payment-tracking+reminder layer inside every invoicer and every dunning tool. Not an invoicer ≠ a moat when every invoicer already includes this for free.

**Graveyard check**: The pure "reminder/dunning" category is crowded and commoditized; most indie invoice-nudge repos (GitHub) sit at 0 stars. Freelancer invoicing is a red ocean; no failed "truth board only" product stands out because the wedge is too thin to fund.

**Novelty Confidence: 10/100.**

**Why-doesn't-this-exist**: It does exist — as a feature. The only sliver: a non-invoicing aggregator for freelancers who invoice from many places (PayPal, Stripe, email) and want one aging board. Thin, and the aggregator still has to parse PDFs/emails — the hard 80% that the invoicers get for free because they generate the invoices.

**Kill risk**: HIGH. Native substitute (every invoicer ships reminders; Chaser owns AR automation); consumer-won't-pay (free tools abound); low differentiation; two-party friction only if you try to verify "received" from banks.

---

## B4 — Trip-purpose tagging from phone

**Search log**
- "mileage classify business personal", "automatic trip detection" (iTunes), "mileage auto classify", "automatic mileage tracking" (Play), HN "MileIQ", "automatic mileage tracking app".
- Notable hits: **MileIQ** (swipe-to-classify business/personal = the exact B4 UX), **Everlance**, **Stride**, **Driversnote**, **TripLog**, **Hurdlr**, **MileageWise**, **SimplyWise**, **Tripbook**, plus a long tail.

**Closest existing product**: **MileIQ** (mileiq.com, Microsoft) — automatic trip detection + day-end swipe-to-classify business/personal is literally the B4 proposal. Everlance and Stride are equivalent.

**Classification**: DIRECT. Saturated incumbent space with 10+ mature apps doing auto-detection + classification.

**Graveyard check**: MileIQ was acquired by Microsoft (2015), then Microsoft laid off the "Modern Life Experiences" team that included it (Aug 2022, Business Insider); the app survived as a subscription. The category is consolidating under a handful of apps — not a graveyard, a red ocean.

**Novelty Confidence: 5/100.**

**Why-doesn't-this-exist**: It exists, at scale. No wedge available; "swipe business/personal at day's end" is MileIQ's headline feature.

**Kill risk**: HIGH. Native substitute — this IS the incumbent product. Nothing left to differentiate.

---

## K2 — Quarterly tax set-aside sidecar

**Search log**
- "quarterly tax set aside", "self employed tax sidecar", "set aside money taxes freelancer" (iTunes), "quarterly taxes", "tax sidecar gig worker" (Play), "quarterly estimated tax app", "set aside taxes freelancer" (GitHub), HN "quarterly estimated taxes", "SetAside", "tax savings account freelancer".
- Notable hits: **Found** ("See your tax estimate and auto-save for taxes" — built-in pocket), **QuickBooks Self-Employed** (quarterly tax estimate/planning), **Hurdlr** (quarterly tax accounting), **Keeper**, **FlyFin**; GitHub alextarra/EstimatedTaxCalculator, j3fflan3/1099-quarterly-tax-estimator, TaxAlong, freelancer-tax-estimator, sideledger; GigTax rebranded to **BossTax**; HN "Ask HN: Software for calculating estimated quarterly taxes" (2011) + "How do you file estimated quarterly taxes" (2021).

**Closest existing product**: **Found** (found.com) auto-computes the tax estimate and auto-saves a set-aside from income — the closest functional equivalent. QuickBooks Self-Employed and Hurdlr cover the quarterly-estimate math. No standalone "percent-of-cash set-aside + 4 IRS dates + underpayment math" sidecar app exists as a dedicated product.

**Classification**: FUNCTIONAL SUBSTITUTE (features bundled into Found/QBSE/Hurdlr/Keeper). The pure standalone sidecar form is not directly occupied.

**Graveyard check**: Set-aside has historically shipped as a *feature* of business banking and bookkeeping, not a standalone app. GigTax (dedicated gig-tax app) rebranded away (now BossTax). The dedicated niche is thin — evidence the standalone wedge is hard to sustain.

**Novelty Confidence: 45/100.** The math+calendar sidecar is genuinely unsold as a standalone, and the demand signal is real (repeated Ask-HN threads, 2011→2021). But every incumbent can and does bundle it.

**Why-doesn't-this-exist**: Assessment: opportunity (real pain, simple, single-user, no cold start) tempered by warning (4 engagement events/year, tiny price point, and QBSE/Found ship it free). A pure sidecar likely tops out as an indie hit, not a company.

**Kill risk**: MODERATE-HIGH. Native substitute (Found/QBO/Hurdlr bundle it); low frequency (4x/year); consumer-won't-pay; commodity AI wrapper. Defensible only on the "underpayment penalty avoidance + dead-simple" angle.

---

## D1 — Move-in walkthrough condition report

**Search log**
- "move in walkthrough inspection", "rental condition report" (iTunes), "move in inspection apartment", "security deposit tenant" (Play), "move-in inspection rental app" (GitHub), HN "security deposit app".
- Notable hits: **DepositProof** (2 apps), **MoveProof**, **door.lease**, **Walk Thru**, **RentCheck**, **Property Inspection Report**, TurboTenant/Avail/Innago inspection features, GitHub TenantVault + walkthrough-app.

**Closest existing product**: **DepositProof** (depositproof.com; iOS id6744071134 rel Jan-2025 + "DepositProof: Rental Report" id6786717492) — move-in/move-out photo+video capture, secure cloud, PDF report, mediation support for deposit deductions. Equally direct: **MoveProof** (CommFaro, iOS, rel 2026-03) — room-by-room move-in baseline, linked move-out comparison, PDF export. Also **door.lease: Rental Inspection** and **Walk Thru** (speak-room-by-room → PDF).

**Classification**: DIRECT. This space exploded in 2025-2026 with at least 4-5 new tenant-facing launches.

**Graveyard check**: Rental-inspection apps have a structural problem — the tenant user isn't the payer, usage is ~1-2x per lease, and the landlord-side tooling (TurboTenant/Avail/Innago, Spectora-class inspection software) is entrenched. The recent wave (DepositProof, MoveProof, Walk Thru, door.lease) is new and unproven; older inspection-only apps faded.

**Novelty Confidence: 10/100.** Multiple DIRECT products launched within the last 18 months.

**Why-doesn't-this-exist**: It exists, aggressively. This is the moment of maximum competition, not a gap.

**Kill risk**: HIGH. Two-party dynamics (landlord/tenant split incentives), low frequency, consumer-won't-pay, incumbent property-management suites, and 4+ freshly-funded direct competitors.

---

## D2 — Deposit-recovery dispute packet

**Search log**
- "security deposit dispute tenant" (iTunes), "deposit dispute landlord tenant" (Play), "security deposit dispute tenant" (GitHub), HN "DepositGenie", "security deposit app".
- Notable hits: **DepositGenie: Renters Shield** (Show HN Nov-2025), **DepositProof** (mediation), **DepositsBack** tenant app (Dignite Studios, Play), TurboTenant/Avail renter apps, GitHub TenantVault.

**Closest existing product**: **DepositGenie: Renters Shield** (Dreamsmith LLC, iOS id6753661067, rel 2025-10, Show HN "stop unfair deductions with photos and AI reports"). **DepositsBack** (Dignite Studios) — tenant app for recovering deposits. **DepositProof**'s mediation feature covers the move-out-challenge use case too.

**Classification**: DIRECT.

**Graveyard check**: The concept has been attempted repeatedly (deposit-photo apps come and go) because of the same structural issue as D1 — once-per-lease frequency, tenant not the payer, and the app can't force the landlord to refund (host-owns-correction). DepositGenie is new (Oct-2025) and unproven.

**Novelty Confidence: 10/100.**

**Why-doesn't-this-exist**: It exists. The space is actively flooding (DepositGenie, DepositProof, DepositsBack, MoveProof all 2025-2026).

**Kill risk**: HIGH. Adversarial/legal resolution (app can't litigate — state-law deadline cheat sheets are content, not product); low frequency; consumer-won't-pay exactly when money is being withheld; incumbent renter platforms; 3+ direct competitors.

---

## D6 — Mail-forwarding forensics

**Search log**
- "change of address mail forwarding", "mail envelope scanner sender", "informed delivery" (iTunes), "change of address", "mail tracking envelope", "mail forwarding" (Play), Marginalia "scan mail change of address you forgot to update", "moving checklist change of address" (iTunes).
- Notable hits: **USPS Informed Delivery** (official app — shows scanned mail images), virtual-mailbox services (iPostal1, PostScan Mail, Earth Class Mail, LZ Virtual Mail), **Updater** (mover app with COA utilities), moving-checklist apps (MoveAdvisor, Moving Organizer, Home Stretch) with COA checklists.

**Closest existing product**: **USPS Informed Delivery** (usps.com/informeddelivery) — gives you the scanned images of incoming mail (the data source for this idea) but does nothing to derive "you forgot to update X". **Updater** (updater.com) is the change-of-address mover incumbent. No product photo-OCR's forwarded envelopes into a "you forgot to update X" list.

**Classification**: NO OBVIOUS MATCH. Adjacent: Informed Delivery (data), Updater (COA), checklist apps (manual COA lists).

**Graveyard check**: No direct product has existed to fail. Adjacent graveyard: generic "mail/COA" consumer utilities are monetization-hostile; USPS owns the mail data and gates access (screenshots/OCR of envelopes is legally gray-ish and technically fragile).

**Novelty Confidence: 75/100.** After extensive multi-engine searching, no direct product found.

**Why-doesn't-this-exist**: Assessment: mostly a warning. Real annoyance (forwarded mail from your bank/insurance after a move), but (a) frequency is ~once every 3-7 years (moves), (b) the usable window is the 12-month forwarding period, (c) the high-value detection list is short and static (bank, insurance, DMV, taxes), (d) consumers won't pay for a short-lived checklist assistant, and (e) Informed Delivery + a 5-item checklist is the free native substitute. Novel, but the economics are bad.

**Kill risk**: HIGH on low-frequency + consumer-won't-pay + native substitute (Informed Delivery + checklists); LOW on competition. Fine as a portfolio novelty/PR piece, not a business.

---

## J2 — DMV/passport appointment slot alerter

**Search log**
- "DMV appointment", "passport appointment", "appointment slot alert" (iTunes), "DMV appointment", "passport appointment" (Play), "passport appointment bot", "DMV slot notifier" (GitHub), HN "passport appointment".
- Notable hits: **DMV NC Appointment**, **Visa Appointment Alerts**, **Check US Visa Slots**, **Appointment Trader**, and a large GitHub OSS bot ecosystem.

**Closest existing product**: **DMV NC Appointment** (iOS, Kostiantyn Bohonos, rel 2021, live) — NC DMV slot search. **Visa Appointment Alerts** (Toromedia LLC, iOS, rel 2026-02) — community US-visa slot alerts. **Check US Visa Slots** (TWiPPY, rel 2022). Plus ~15 GitHub bots (kalkih/passport-appointment-bot 24★, tstromberg/ncdmv-appointment-notifier, asherif0/dmv-appointment-notifier, DMVWatcher…).

**Classification**: DIRECT for the DMV niche (NC app exists) / FUNCTIONAL SUBSTITUTE overall — a long tail of single-state apps and hobby bots; no dominant US-wide multi-agency product.

**Graveyard check**: This category is a graveyard of hobby bots — they die when portals change layout/API/ToS, when the acute scarcity ends (2021-23 passport/visa backlog has eased), and because usage is one-and-done per user. No venture-scale winner has emerged from repeated waves of demand.

**Novelty Confidence: 20/100** for the concept (repeatedly built); ~60/100 for a polished US-wide multi-agency version (which nobody has productized well).

**Why-doesn't-this-exist**: The 80% exists as shards; the 20% (polished, maintained, multi-state alerter) doesn't because scraping gov portals is brittle, ToS-hostile, and demand is episodic (spikes with backlogs, then evaporates).

**Kill risk**: HIGH. False certainty (works until the portal changes); scraping fragility; single-use lifecycle; low willingness to pay for a convenience that only matters during scarcity windows; Apple review friction for personal-data/scraping apps.

---

## S1 — Traveler incident workspace

**Search log**
- "flight compensation claim", "travel disruption claim", "passenger rights flight" (iTunes), "flight compensation", "passenger rights claim" (Play), "flight delay compensation app" (GitHub), HN "flight compensation", "AirHelp".
- Notable hits: **FlightRights**, **RefundMe AI travel claims**, **AirHelp**, **PlaneClaim**, ClaimJet, EU players (Fairplane dormant, Reclamio, ClaimCompass), flight trackers (Flighty, FlightAware), Faye travel insurance.

**Closest existing product**: **FlightRights** (iOS, rel 2026-04) — "Airline apps tell you what happened. FlightRights helps you decide what to do next." Disruption guidance (delays, cancellations, missed connections, overnight, refunds, rebooking, passenger rights) + flight tracking — this is S1's decision-support/entitlement-reference core. **RefundMe AI** (TwoChi, rel 2025-06) checks disruption against regulations and builds the claim. **AirHelp** (YC W14) is the incumbent claims layer.

**Classification**: PARTIAL — the entitlement reference + claim-building is occupied (FlightRights, RefundMe, AirHelp, PlaneClaim, EU players); the specific "screenshot-append evidence pack + receipt trail + family status page" workspace is not directly built, but the moment of disruption is owned by Flighty/airline apps, and the claims layer is owned by AirHelp-class players.

**Graveyard check**: EU flight-compensation claims startups have churned hard (Fairplane dormant, multiple exits/quiet deaths); AirHelp has struggled to stay profitable; the US (no EC261) lacks the regulatory tailwind that powered the EU category. Claim-assistant products repeatedly die on CAC and regulation-dependence.

**Novelty Confidence: 30/100** overall; ~65/100 for the evidence-pack + family-status-page workspace specifically.

**Why-doesn't-this-exist**: Opportunity (every traveler has a disruption story; the evidence-gathering and family-updating is genuinely manual) but warning: (a) the highest-value action (claim $) is taken by AirHelp-class players who do the work for you, (b) US travelers lack the EU compensation hook so willingness to pay collapses, (c) it's a commodity-AI-wrapper target (RefundMe-class agents already emerge), and (d) travel insurance apps (Faye) are absorbing the proactive-disruption UX.

**Kill risk**: HIGH. Commodity AI wrapper; native substitute (Flighty + airline apps + Faye); consumer-won't-pay at the moment of maximum stress; two-party friction only if claims are outsourced (regulatory); EU-only economics.

---

## Cross-candidate summary

| # | Candidate | Closest product | Classification | Novelty |
|---|-----------|-----------------|----------------|---------|
| B2 | Paystub-vs-schedule diff | WageWatch (wagewatchapp.com) | DIRECT | 25 |
| B3 | 1099-vs-bank reconciliation | 1099 Hub / QuickBooks Self-Employed | NO OBVIOUS MATCH | 70 |
| B7 | Owed-vs-received truth board | FreshBooks/Zoho Invoice + Chaser | DIRECT | 10 |
| B4 | Trip-purpose tagging | MileIQ / Everlance | DIRECT | 5 |
| K2 | Quarterly tax set-aside | Found / QBSE (bundled feature) | FUNCTIONAL SUBSTITUTE | 45 |
| D1 | Move-in walkthrough | DepositProof / MoveProof | DIRECT | 10 |
| D2 | Deposit-recovery packet | DepositGenie / DepositsBack | DIRECT | 10 |
| D6 | Mail-forwarding forensics | USPS Informed Delivery (adjacent) | NO OBVIOUS MATCH | 75 |
| J2 | DMV/passport slot alerter | DMV NC Appointment / Visa Appointment Alerts | DIRECT (niche) | 20 |
| S1 | Traveler incident workspace | FlightRights / RefundMe / AirHelp | PARTIAL | 30 |

Single most important finding: **the "worker money" candidates (B2, B4, B7, D1, D2) are all occupied — several by brands launched within the last 18 months (WageWatch 2025, DepositProof 2025, DepositGenie 2025, MoveProof 2026)** — while the genuinely open space is B3 (1099-vs-deposits reconciliation, real pain, no direct product) and D6 (mail-forwarding forensics, novel but bad unit economics). The graveyard pattern across B2/K2/J2/S1 is consistent: worker/consumer "justice-adjacent" utilities die because the app cannot itself correct the problem (host-owns-correction), frequency is too low, and the user is the least able to pay.
