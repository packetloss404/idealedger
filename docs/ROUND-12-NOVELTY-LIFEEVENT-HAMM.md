# Novelty Hunt — Batch 4: Life-Event & Home/HAMM Candidates

Method: DuckDuckGo HTML via r.jina.ai (decoded), Google Play scraping, iTunes Search API, GitHub API, plus direct site fetches. Search engines directly captcha-blocked this agent; all findings below come from the channels that worked.

---

## 1. G1+G2 — Executor's Death-Admin Ledger (US "Tell-Us-Once")

**Search log:** `executor probate software EstateExec alternative`; fetched swiftprobate.com "10 Best Probate & Estate Settlement Apps for Executors (2026)"; iTunes `death admin executor`; Play `executor probate checklist`; `Everplans acquired 2024 2025`; `death tech startups shut down Lantern After.io Cake`. Hits: SwiftProbate, EstateExec, Empathy, Atticus, EverSettled, Settled, Trust & Will (Probate), Estateably, Executor.org, Legacy Logix, ClearEstate, Alix; apps HeirList, Executor Hub, Afterword, Executor Kit, Death-Call, RIP VIP.

**Closest existing product:** Empathy — https://www.empathy.com (care plan, care managers, they make the calls/emails to close the loved one's accounts, probate library); EstateExec — https://www.estateexec.com ($199 executor accounting); SwiftProbate — https://www.swiftprobate.com ($39 AI county-level checklist).

**Classification:** DIRECT. Every element (notify orgs, doc scans, deadlines, probate to-do) is shipped by Empathy/EverSettled (account cancellations by humans) and EstateExec/SwiftProbate (to-do + deadlines + docs). The US government-notification layer genuinely does not exist because there is no US Tell-Us-Once.

**Graveyard check:** Yes. Lantern shut down (acquired by Wellthy); Everplans acquired by Precoa (July 2025) after years of struggle; HeirList is effectively dead (5 App Store ratings); After.io/Cake pivoted to funeral planning. End-of-life startups keep consolidating into insurance/employer distribution.

**Novelty Confidence: 10.** UK Tell-Us-Once is a government service backed by legal authority to pass a death record to agencies; a private US app cannot replicate it, and the private notify-orgs half is fully occupied by Empathy and EverSettled — which win because their CAC is ~$0 (distributed via life insurers and employers) and estates have money.

**Why doesn't this exist:** It exists, just not as a consumer app. The US gap is structural (no federal death-notification protocol; 50 state probate regimes), and consumer-direct death admin has failed repeatedly because it is a one-time, grief-time purchase with no recurring value and competing free/insurance-funded rivals.

**Kill risk:** consumer-won't-pay HIGH (one-time event, grief, free B2B2C substitutes) · low frequency HIGH · commodity AI-wrapper HIGH (SwiftProbate already sells a $39 AI checklist) · two-party n/a · host-owns-correction n/a · native substitute (insurer-distributed Empathy) HIGH.

---

## 2. M1 — "Paywall Doctor" for Indie Devs

**Search log:** `paywall optimization analysis tool app store reviews AI`; `RevenueCat paywall audit report service indie developers`; `paywall A/B test hypothesis generator RevenueCat experiments`; GitHub search `paywall analy/audit`; iTunes `paywall optimization`; Play `paywall optimization subscription`. Hits: GitHub `Nikolai-Iakubovskii/app-paywall-pilot`, Superwall AI (paywallexperiments.com), Experiwall, stormy.ai, ReviewGrabber, RevenueCat Paywalls + Experiments, Adapty. App stores: only RevenueCat Mobile; nothing consumer-facing.

**Closest existing product:** `Nikolai-Iakubovskii/app-paywall-pilot` — https://github.com/Nikolai-Iakubovskii/app-paywall-pilot (LLM skill + 79-benchmark knowledge base + LTV tool that critiques paywalls; 36 stars); Superwall AI — https://superwall.com (AI-generated paywall experiments); stormy.ai paywall-optimization service.

**Classification:** PARTIAL. The "ranked one hypothesis per week" recurring-digest packaging is unfilled, but every analysis layer is occupied: Superwall AI auto-generates paywall experiments, paywall-pilot is an LLM critiquer, and agencies do audit-as-a-service.

**Graveyard check:** No failures; the opposite — the category is being absorbed into the platforms (RevenueCat Experiments, Superwall AI), which is the bigger threat.

**Novelty Confidence: 30.** Novel as a recurring "doctor's visit" loop, zero moat as an analysis product. The data (paywall views/conv, review themes) lives in RevenueCat/App Store, which can ship this as a one-click feature.

**Why doesn't this exist:** Indie devs are price-sensitive ($10–50/mo); advice with diffuse ROI loses to running an A/B test directly in RC Experiments; those with budget hire agencies. The platforms that own the data have every incentive to add it (host-owns-correction).

**Kill risk:** commodity AI-wrapper HIGH · host-owns-correction HIGH (RevenueCat/Superwall) · native substitute (RC Experiments, Superwall AI) HIGH · two-party n/a · consumer-won't-pay n/a.

---

## 3. M3 — Weekly Retention Cockpit for Indie Devs

**Search log:** `subscription churn analytics why users churn app tool indie`; `AI churn report personalized recommendation app subscription digest`; iTunes `churn analytics subscription`; Play `subscription churn analytics`. Hits: Submetrics, Appflow, ChurnIQ (Cleeng), churned.io, ChurnGuard AI, churnhalt; app stores only Google Analytics / Zoho / consumer subscription managers.

**Closest existing product:** Submetrics — https://submetrics.net (subscription analytics explicitly "for indie founders"); ChurnIQ by Cleeng — https://cleeng.com; RevenueCat's own charts/Experiments dashboard.

**Classification:** FUNCTIONAL SUBSTITUTE. Churn-rate/MRR/LTV views exist in Submetrics, RC, Amplitude, Mixpanel; the only novelty is the "plain-language why-users-churn digest," which is an LLM summary of the same numbers.

**Graveyard check:** None — this is consolidation risk, not market death: the platforms keep absorbing analytics features.

**Novelty Confidence: 15.** An AI wrapper on top of dashboards the dev already pays for. RC can add "explain this churn in plain English" as a feature tomorrow.

**Why doesn't this exist:** Honest "why users churn" needs event-level + exit-survey data that RC/OneSignal expose poorly; LLM summaries of sparse indie metrics read as confident noise. Low perceived value → no one pays a third party for it.

**Kill risk:** commodity AI-wrapper HIGH · host-owns-correction HIGH (RC/Amplitude) · native substitute HIGH · two-party n/a · consumer-won't-pay n/a (but dev-won't-pay-for-summary medium).

---

## 4. N4 — Accessibility Report Card for Businesses

**Search log:** `website accessibility scorecard public rating consumers shareable score`; `AccessiBe UserWay controversy lawsuit FTC`; `WebAIM Million accessibility rankings`. Hits: Silktide Index, accessalyze.com public reports, scoreboard.a11ypulse, WebAIM Million (top-1M homepages), accessscore leaderboard, GitHub `ryuno2525/web-accessibility-report-2026`; FTC $1M fine on AccessiBe, UserWay overlay class actions advancing 2026.

**Closest existing product:** Silktide Index — https://index.silktide.com (public league table of web accessibility for major sites); accessalyze.com — https://accessalyze.com/reports (public WCAG score reports for scanned sites).

**Classification:** ADJACENT/PARTIAL. Public machine-scored rankings exist, but only for famous sites via free automated scans. The "specialist audit → consumer-shareable per-business badge/score" is unoccupied — and that vacancy is the problem, not the opportunity.

**Graveyard check:** Yes and loud. AccessiBe was fined $1M by the FTC (2025) for deceptive automated accessibility claims; UserWay faces advancing class actions (2026); overlay-widget vendors are being sued by small businesses. Public self-certified accessibility claims are legally radioactive. WebAIM's own research: automated tools catch ~30–40% of WCAG failures, so machine scores overclaim.

**Novelty Confidence: 40.** The format is genuinely unfilled, but novelty is dangerous here — the reason it doesn't exist is liability and conflict of interest (host-owns-correction: the same company that audits also issues the score).

**Why doesn't this exist:** Anyone grading a business's accessibility publicly must survive ADA litigation scrutiny — the incumbents who tried (overlay/self-certification) got fined and sued. Consumers don't search for accessibility scores (no demand pull), and businesses won't pay to display a bad score.

**Kill risk:** host-owns-correction HIGH (audit + grade = conflict, litigation magnet) · false certainty HIGH (automated scores legally meaningless) · two-party adoption (business opts in + consumer looks — both weak) · consumer-won't-pay.

---

## 5. O1 — License-Watch

**Search log:** `professional license renewal reminder app track certifications expiration`; `verify nursing license board lookup alert status Nursys`; iTunes `license tracker renewal`; Play `license renewal reminder`. Hits: Nursys e-Notify (NCSBN, free status-change alerts for nurses), remindcal, Expiration Reminder, RenewalTracker, renewops, WhenDoIExpire, CredTrack, Briely; a 2026 wave of tiny tracker apps (OnTrack CE, CertPro, CertKeeper, Tenure, Certolino, Expirify, PermitVault, Guard License Reminder) all with 0–1 ratings.

**Closest existing product:** Nursys e-Notify — https://www.nursys.com (free official license-status-change alerts for nurses); RenewalTracker — https://www.renewaltracker.com (date-based license renewal tracking); Briely — https://briely.ai (AI credential tracking, employer-side).

**Classification:** PARTIAL. For the largest professional cohort (nurses) the official free product already does status monitoring — the photo-the-license + re-check-any-board combo for contractors/multi-state pros does not exist as a consumer app.

**Graveyard check:** Mild but telling — the 2026 glut of 0–1-rating tracker apps signals an overcrowded category where individuals won't pay and nobody wins. State-board lookup APIs are fragmented across 50+ agencies, some captcha-gated — which is precisely why nobody has built the general re-checker.

**Novelty Confidence: 35** (general case); ~5 for nurses. Renewal reminders are a commodity; status-drop alerting is a data-integration grind with a small paying audience.

**Why doesn't this exist:** The data layer is hostile (50+ heterogeneous board lookups, no unified API), renewal reminders are free/cheap commodities, and status-monitoring is the employer's compliance problem (Certemy, Nursys), not the individual's. Individuals check a license 1–2×/year.

**Kill risk:** native substitute (free Nursys e-Notify) HIGH · commodity wrapper (reminders) · low frequency HIGH · consumer-won't-pay medium · two-party n/a.

---

## 6. O3 — Credential Wall for Small Employers

**Search log:** `Certemy competitors license verification tracking software small business`; `IntelliCred primary source verification credentialing software`; `employee license tracking software`. Hits: Certemy, IntelliCred, symplr CVO, CredentialStream, MedTrainer, HealthStream, ComplyRight; Guideflow "7 best license compliance software"; Capterra license-management category; HRIS (Paycom/ADP) license modules.

**Closest existing product:** Certemy — https://certemy.com (shared staff-license tracker, scheduled Primary Source Verification against official boards, audit-ready exports — literally the entire feature set); IntelliCred — https://intellicred.com; symplr CVO — https://www.symplr.com.

**Classification:** DIRECT/FUNCTIONAL SUBSTITUTE. There is no feature gap; the only whitespace is sub-50-employee pricing/simplicity.

**Graveyard check:** None — incumbents are healthy and the healthcare/staffing compliance market is mature. This is an incumbent-wall warning, not a graveyard.

**Novelty Confidence: 12.** It's a re-price/simplify play into an established compliance category. The SMB slice that genuinely uses spreadsheets has low audit risk, so they don't pay.

**Why doesn't this exist at SMB level:** Small employers rarely get audited on license lapses, so spreadsheet "good enough" wins; the buyers who pay (healthcare, staffing agencies, property managers) already buy Certemy/IntelliCred. Board-lookup scraping also breaks without contracts (false certainty).

**Kill risk:** direct incumbents HIGH · false certainty (scraped lookups) · native substitute (HRIS modules, spreadsheets) · two-party adoption (employer enrolls staff + boards must be scrapeable) medium.

---

## 7. P1 — SMB Account-Exit Checklist

**Search log:** `employee offboarding tool revoke SaaS access check accounts checklist`; `offboarding automation platform SaaS access Torii BetterCloud`; `offboarding software small business leavers access revocation`; iTunes/Play `offboarding`. Hits: Torii, BetterCloud, AccessVerity (leaver access control), MangoApps, Zimyo, FirstHR, plus dozens of blog checklist templates; no consumer-facing app.

**Closest existing product:** Torii — https://www.toriihq.com and BetterCloud — https://www.bettercloud.com (SaaS access lifecycle: automated offboarding, deprovisioning, admin/access review); the checklists themselves are commodity blog content.

**Classification:** PARTIAL / FUNCTIONAL SUBSTITUTE. For IT-admin SMBs the tools exist (mid-market); the "guide the owner through every account with passkey/2FA/admin flags" bit is a guided checklist whose data (what the SMB even uses) must be entered by hand.

**Graveyard check:** n/a — no product failure, but no consumer/SMB winner either; ITAM/SSO platforms own the space.

**Novelty Confidence: 22.** The novel slice (passkeys/2FA/admin still tied to the leaver) is a feature Torii/BetterCloud already track for customers who integrate. A checklist-only product has no moat.

**Why doesn't this exist:** The real value is automated deprovisioning, which needs OAuth to every SaaS the SMB uses (integration cold start); without that it's a list, and SMBs won't pay for a list. SSO/ITAM incumbents own the data layer.

**Kill risk:** native substitute (SSO/ITAM offboarding) HIGH · two-party adoption (needs SaaS integrations) HIGH · commodity checklist · low willingness to pay.

---

## 8. Q1 — Home Inventory for Insurance Claims

**Search log:** Play `home inventory insurance` (StuffKeeper, InvenDo, Home Inventory Tracker, "Home Inventory for Insurance", Itemtopia, NAIC Home Inventory); web `best home inventory app insurance claim export 2026` (clubofthings, vorby, homeguard.ai, getkept, saveor, realestateledger, maintfolio — a huge buyer's-guide ecosystem); iTunes `home inventory`.

**Closest existing product:** "Home Inventory for Insurance" (Google Play); NAIC Home Inventory — https://www.naic.org (free, insurer-commission-endorsed); Sortly — https://www.sortly.com; Encircle — https://www.encircleapp.com (field-adjuster pro).

**Classification:** DIRECT. Room-by-room guided capture with insurance-grade export is table stakes; every app claims it.

**Graveyard check:** Yes in aggregate — the category is a graveyard of dozens of 5-year-old zombie apps with single-digit ratings; free insurer/NAIC apps and cheap tools dominate; paid apps starve.

**Novelty Confidence: 5.** Fully commoditized, including the "insurance-grade export" hook.

**Why doesn't this exist (as a paid win):** It exists many times over; retention is catastrophic (people inventory once, never return); insurers give it away free because it saves them claims dollars (native substitute).

**Kill risk:** native substitute (insurer apps, NAIC free) HIGH · consumer-won't-pay HIGH · low frequency/retention HIGH · commodity wrapper.

---

## 9. Q2 — Home Warranty Claim Forensics

**Search log:** `home warranty claim denied checklist documentation evidence app`; `home warranty claim documentation`; iTunes `home warranty claim`; Play `home warranty claim`. Hits: only articles/guides (warrantyist.com, homewarrantyresearch.com, consumeraffairs, firsthomestartguide) and generic claim-documentation templates (realestateledger.io, coskip); app stores show only the warranty companies' own apps (AHS, Choice, Liberty, ServicePlus, HWA, Select) plus adjacent home-management (Homer, Hippo Home).

**Closest existing product:** No app. The Warrantyist — https://warrantyist.com (denial-fighting content); Real Estate Ledger home-warranty documentation checklists — https://realestateledger.io; the warranty carriers' own claim apps (e.g., AHS app) which file claims but do no forensics.

**Classification:** NO OBVIOUS MATCH FOUND as a product; ADJACENT content/templates only.

**Graveyard check:** Nothing has died because nothing launched — the absence is demand, not failure.

**Novelty Confidence: 60.** Genuinely unfilled as an app — and this is a warning. The premise is shaky: most home-warranty denials are contractual *exclusions*, not lack of evidence, so "forensics" rarely changes outcomes. Claims are low-stakes (~$100–800 typical) and low-frequency (once per incident); the homeowner churns after one claim.

**Why doesn't this exist:** Tiny TAM, one-time use, low payout = nobody pays; the warranty carrier owns the relationship and will never integrate a hostile third party; the actionable content is a free blog checklist.

**Kill risk:** low frequency HIGH · consumer-won't-pay HIGH · two-party adoption (hostile to carrier) · small TAM · false certainty (denials are exclusions, not evidence gaps).

---

## 10. Q4 — Contractor Deposit-Risk Tool

**Search log:** `contractor deposit protection homeowner escrow evidence app`; `RenovaFi construction deposit protection escrow`; `HomePay renovation escrow app`; `contractor payment protection platform`; iTunes/Play `contractor deposit`. Hits: RenovaFi (renovafi.io), HomePay (homepay.sg — escrow app for renovation payments), BuildSafeEscrow, ContractorsEscrow, GCSC Smart Contractor, Reality Ledger (realityledger.app — tamper-proof evidence platform), "7 Best Contractor Payment Protection Tools" (First Choice Lien). App stores: only contractor invoicing tools (Joist, Contractor+, Hearth).

**Closest existing product:** HomePay — https://www.homepay.sg (escrow app for renovation payments, homeowner + contractor); RenovaFi — https://renovafi.io; Reality Ledger — https://realityledger.app (general tamper-proof evidence/capture).

**Classification:** PARTIAL/ADJACENT. The "don't hand over deposits blindly" job is occupied by escrow products (which require contractor participation); a homeowner-only evidence kit (photos/timeline/contract/payments → dispute file) is not a product today.

**Graveyard check:** Category too young to have a graveyard; escrow products' struggle to gain contractor adoption is the live signal.

**Novelty Confidence: 48.** The evidence-kit format is unfilled, but the escrow angle is taken and the two-party problem is structural.

**Why doesn't this exist:** Two-party cold start — contractors demand upfront deposits and will not adopt an app that presumes mistrust. State law already caps deposits (e.g., NY 10%, MD ⅓), so the cheapest actionable fix is legal rules + one-page advice, not an app. Disputes settle small-claims-DIY; Angi/Thumbtack vetting and licensing boards are the real deterrents homeowners use.

**Kill risk:** two-party adoption HIGH (contractor won't play) · low frequency (per-project) · consumer-won't-pay · native substitute (escrow + state deposit caps + review platforms).

---

## Cross-cutting finding

Across all ten, two failure modes recur: (a) the incumbent that owns the data ships the feature as a platform update — RevenueCat (paywall/retention), Torii/BetterCloud (offboarding), Certemy/IntelliCred (credentialing), insurer/NAIC apps (home inventory), Nursys (license monitoring); (b) the concept is a legal/regulatory artifact, not an app — US Tell-Us-Once needs government authority, accessibility scores got the overlay vendors fined/sued, contractor-deposit protection is state law, home-warranty denials are contractual exclusions. The two genuinely empty cells (home-warranty forensics, consumer accessibility score) are empty because demand is thin and liability is high — not because nobody thought of them.
