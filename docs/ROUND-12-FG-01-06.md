# Focus Groups FG01–FG06 — Simulated Focus Group Research Notes

Round 12 Shipaton research. These are **simulated** focus groups: they generate hypotheses and surface pains, NOT real interviews. All participant speech below is **SYNTHETIC FEEDBACK** (persona reactions, invented for this exercise). External validation in sections K/L uses real, cited web evidence.

Every claim is labeled: **FACT** (cited source), **INFERENCE** (interpretation of facts), **HYPOTHESIS** (plausible, not established), **SYNTHETIC FEEDBACK** (generated persona reaction).

Guard terms used: **cold start** = two-party adoption problem; **false certainty** = value depends on pretending an inference is proof; **host-owns-correction** = the counterparty's system owns the fix step; **native substitute** = free commodity already handles the job.

---

## FG01 HOME REPAIR — discovery → diagnosis → quoting → scheduling → documenting → approving → performing → paying → warranting → remembering

### A. Participants (incentives)
- **Homeowner** — protect largest asset; avoid being ripped off; keep warranty/insurance alive; time-poor, DIY-curious.
- **Renter** — call landlord, rarely hires pros; wants zero liability.
- **Handyman** — wants steady small jobs, hates unpaid quoting time and no-shows by customers.
- **Licensed contractor** — wants big jobs, hates tire-kickers and "cheapest quote" shoppers; margin on materials.
- **Landlord** — wants repairs cheap, fast, documented for tax/deposit reasons.
- **Property manager** — coordinator between owners/tenants/contractors; profit is management fee, so admin hours matter.
- **Home-warranty company** — sells service contracts; pays contracted techs; profits when claims are denied or techs underpay.

**SYNTHETIC FEEDBACK:** homeowner: "The hard part isn't finding a name, it's getting three people to actually show up and quote." Contractor: "I stop returning quotes from people who I know will nickel-and-dime me." Warranty company: "Most 'breakdowns' are pre-existing or lack maintenance records — that's the policy."

### B. Current Workflow
1. Failure noticed (noise, leak, sticker on furnace, water in basement).
2. Homeowner self-diagnoses via YouTube/Nextdoor/Reddit, then posts on Nextdoor/Angi/Thumbtack or calls the same "guy" from before. Multiple quotes requested by phone/email.
3. Pros show (or not), write hand-written quotes; often ask for photos; scheduling slips; homeowner waits for callbacks.
4. Hire based on price/trust/avail; deposit paid; work performed; cash/check/card; paper receipt or nothing.
5. Warranty claims (home warranty, appliance manufacturer warranty) require receipts, dates, maintenance proof — usually missing.
6. Everything forgotten until next failure; prior contractor's work quality never revisited.

### C. Complaints (≥5 distinct frictions)
1. **Contractor no-show & silence after quote** — pervasive, documented (K).
2. **Diagnosis asymmetry** — owner can't validate the diagnosis or quote; the pro owns the answer.
3. **No paperwork trail** — receipts lost, warranty void claims, no proof for insurance/tax.
4. **Scheduling ping-pong** — "I'll be there 9–11" means waiting all day; job-dependent handoffs between subs.
5. **Warranty claim denial admin** — appeals require installation proofs, maintenance records, receipts (K).
6. **Deposit/take-the-money-and-run fraud** — Angi publishes guidance on contractor deposit fraud (K).
7. **Trust is tribal** — 83%-style referral loops (per FG02 evidence); no portable record of a contractor's actual history.

### D. Contradictions
- Homeowner wants cheap + trustworthy; contractor wants profitable + serious clients — conflict over "which quotes deserve a response."
- Landlord/PM want it done fast & documented; contractor wants to schedule around bigger jobs.
- Warranty company claims "peace of mind"; owner experiences denial. Warranty firm wants maintenance proof; nobody keeps it.
- Homeowner says "pros overcharge"; pros say "DIY and 'cheapest price' owners waste our time and then blame us."

### E. Incentive Misalignment (who benefits from friction persisting)
- **Warranty companies** benefit from denial-and-obsolescence; their tech network profits per-call.
- **Contractors** benefit from opaque pricing and low comparability; no-shows cost them nothing.
- **Aggregators (Angi/Thumbtack)** profit from lead generation regardless of outcome — paid leads, not outcomes.
- **Property managers** charge % fees; billable admin is not a cost to them.

### F. Expensive Friction (money spent on bad coordination/info/admin)
- Multiple wasted quotes and no-shows = lost homeowner time; job costs inflated ~20–40% from 3-bid shopping and fear-buying. (INFERENCE)
- Warranty appeals paid out of pocket because records missing (consumeraffairs lists documentation as the appeal lever).
- $1,755–$2,000/yr contracts with first-claim denials (App Store reviews, K).
- Contractor deposit fraud (Angi guidance) — six-to-five-figure losses (HYPOTHESIS on frequency; FACT that guidance content exists).

### G. Phone Opportunity (what a phone uniquely observes/captures/coordinates)
- Photo/video/audio of the failure + model/serial tags; timestamped condition log; photo of old receipt/manual; capture the tech's own photo evidence during the visit; location-based geo evidence; voice-note of the verbal quote (the "trust" object).
- Coordinating arrival (proof of arrival/departure) — but see guard: acknowledgment ≠ quality of work.

### H. Existing Behavior (rituals an app could attach to)
- People already photograph the problem to send to pros/PMs; already keep a shoebox of manuals/receipts; already text friends "who did your roof?"; already post to Nextdoor.

### I. Potential Value Moment
- The "I actually have the receipt, date, and photo of what he said he'd fix" moment when a warranty/insurance claim or callback happens.

### J. Idea Seeds (raw, unpollished)
1. **Repair dossier per home**: photo + receipt + tech name per job, auto-scanned from paper; used for warranty/insurance claims. (Hits "rejected: camera+PDF/photo→report" pattern — needs a *stable invariant* like a claim number to matter.)
2. **"Warranty claim forensics"**: guided photo/timebox capture during a breakdown + auto checklist of what the denial letter will demand. (Host-owns-correction: appeal decision is the warranty company's.)
3. **Quote-follow-up nudger for pros**: tracks quotes that went silent; seller-side tool, pros pay. (Business payer; but pros are fragmented and won't adopt a new network → cold start.)

### K. External Validation (strongest 2 pains)
**Pain 1 — Home warranty claim denials / admin burden:**
- FACT — Choice Home Warranty iOS app rated **2.02★** (156 ratings); user reviews include "I paid $1,755. And my very first claim was denied," "Correspondence is almost impossible… offered a low ball offer… Lowe's gift card," "My AC went out… they canceled my service request without talking to me." URL: https://apps.apple.com/us/app/choice-home-warranty/id1545174683 (reviews via iTunes RSS feed, retrieved 2026-08-10)
- FACT — ConsumerAffairs: appeals require "proof of appliance or system installation, maintenance records, purchase receipts" and "maintain proper documentation." URL: https://www.consumeraffairs.com/homeowners/what-to-do-when-your-home-warranty-claim-is-denied.html
- FACT — NerdWallet scan of Reddit: "most complain about denied claims and overpriced coverage." URL: https://www.nerdwallet.com/home-ownership/home-warranty/learn/is-reddit-right-about-home-warranties
- INFERENCE — the documentation-gathering step is the consumer-side admin choke point.

**Pain 2 — Contractor reliability (no-shows, silent quotes):**
- FACT — Reddit r/homeowners threads: "Why are all the contractors no-showing me?" (https://www.reddit.com/r/homeowners/comments/hxrqkh/) and "why contractors are always late or no show?" (https://www.reddit.com/r/homeowners/comments/na0jdt/). Reddit blocks automated fetch (403) — titles/snippets retrieved via DDG index 2026-08-10.
- FACT — Angi publishes "What to Do When Scammed by a Contractor" (deposit-and-run): https://www.angi.com/articles/what-can-you-do-when-contractor-takes-your-deposit-and-runs.htm
- INFERENCE — no-show is common enough to be a category of complaint; prevalence unknown → HYPOTHESIS that it's a 30%+ of-quote-requests phenomenon.

### L. Contradictory Evidence
- FACT — **Thumbtack: Home Service Pros** has **457,544 ratings, 4.89★**; TaskRabbit 45,549 ratings 4.72★; discovery/marketplace is heavily served. URLs: https://apps.apple.com/us/app/thumbtack-home-service-pros/id852703300 ; https://apps.apple.com/us/app/taskrabbit-handyman-more/id374165361 (iTunes API, 2026-08-10)
- FACT — AHS (home warranty incumbent) app rated **4.86★** (53,694 ratings) — many users are satisfied: https://apps.apple.com/us/app/ahs-american-home-shield/id6499445456
- FACT — DIY substitution: free YouTube/Nextdoor content replaces much paid "advice" (INFERENCE, no direct stat collected).
- INFERENCE — the no-show pain is partly caused by *pro-side labor shortage and weak demand quality*, not fixable by a homeowner app.

### M. Research Verdict — **UNCERTAIN**
Real pains, but every angle dies on a guard: discovery = native substitute (Thumbtack/TaskRabbit); warranty = host-owns-correction; "record everything" = the rejected photo→report/camera+PDF family. Only a pro-side tool avoids the cold-start but pros are fragmented. Verdict: uncertain, weak as a consumer product.

---

## FG02 AUTOMOTIVE OWNERSHIP & REPAIR — the information asymmetry of ownership

### A. Participants (incentives)
- **Vehicle owner** — wants cheap, honest, convenient service; can't verify work; resale value in history.
- **Mechanic** — flat-rate pay; selling diagnosis + labor; incentives misalign with verification.
- **Service adviser** — sells upsell menu (cabin filters, "flushes"); bonus-linked.
- **Dealership** — OEM-branded service revenue; warranty work reimbursed by OEM; owns your data.
- **Independent shop** — competes on trust/price; may not report to any central system.
- **Parts supplier** — sells parts; profits on markup; OEM-parts-or-nothing pressure.
- **Insurer** — pays repair claims; wants low-cost repair, and dislikes aftermarket parts disputes; uses its own adjuster truth.

### B. Current Workflow
1. Owner drives with symptom or dashboard light → drops car at shop/dealer.
2. Tech diagnoses, adviser phones owner with estimate + upsells; owner approves blind or calls a friend for a "second opinion" (very common — see K).
3. Work performed; receipt lists labor hours + parts; owner cannot verify parts installed or work done.
4. Records fragmented: dealer keeps some in its CRM; independents keep paper; Carfax shows only *reported* service; owner's shoebox or CARFAX Car Care app holds scraps.
5. Warranty/recall issues: OEM/dealer system is authoritative; owner cannot dispute without records.
6. Resale: buyer checks Carfax; unreported damage/repairs invisible → price discovery broken.

### C. Complaints (≥5)
1. **Can't verify the work or parts** — the "did they actually change it?" problem.
2. **Distrust**: 78% of drivers don't always trust mechanics; 80% felt overcharged; only 17% always fairly priced (K).
3. **Diagnosis can't be challenged** — no portable, interpretable record of what was found.
4. **Upsell pressure** at the counter; owner can't check the manual's actual interval (K advice from ConsumerAffairs panel).
5. **Fragmented history** — dealer/indy/shoebox/Carfax never reconcile; resale and warranty lose value.
6. **Price opacity** — labor-rate + parts markup invisible until the bill; no stable quote document.
7. **Estimated vs final bill creep** ("unforeseen complications").

### D. Contradictions
- Owner wants proof; mechanic flat-rate means time spent documenting is unpaid.
- Adviser wants upsell volume; owner wants only required work.
- Dealer says "OEM parts or void warranty"; federal law (Magnuson-Moss) says that's false (L).
- Insurer and owner both distrust each other's truth.

### E. Incentive Misalignment
- Service advisers/dealerships profit from the information gap (upsell, captive parts).
- Insurers benefit from ambiguity (deny/underpay) — not from owner verification.
- **Nobody benefits from a portable verified record** except the owner at resale time — which is why the ecosystem resists it.

### F. Expensive Friction
- **Wrong/unnecessary repairs bought under information asymmetry** (owner pays; the "overcharge" gap = 80% who felt overcharged, K).
- **Resale discount for undocumented history** — buyers discount cars without proof (INFERENCE).
- **Warranty-claim denials over record gaps** — but see L: the fear is legally overstated.
- **Second-opinion phone calls** — 83% of drivers already run this informal loop (K); that's paid time.

### G. Phone Opportunity
- Phone captures the OBD-II codes (via dongle), photos of parts/part numbers before/after, the written quote, the adviser's voice, receipts. It can time-stamp arrival/departure, photo the old part, and even record a "work complete" inspection video (brake pad thickness, fluid color).
- Phone can produce the **portable verified file** the owner owns — but it cannot *prove* the shop did the work (false certainty trap if it claims to).

### H. Existing Behavior
- People already photograph the part/quote; already text photos to friends; already "ask dad/friend" before approving (83%, K); already keep paper receipts in the glovebox; already run Carfax before buying.

### I. Potential Value Moment
- When a shop quotes $1,200 and the owner can pull up last year's similar quote + part number + a friend's verified opinion before approving.

### J. Idea Seeds
1. **"Second opinion" file builder**: capture the written estimate + photos of the part/area → template text to a trusted friend/indy to sanity-check. (Attaches to the 83% existing ritual; single-user; low cold start. Weakness: second opinion still human.)
2. **Owner-owned repair ledger with photo proof**: part-before/part-after + receipt, exported as a shareable PDF for resale/warranty. (Portability is the moat; but CARFAX Car Care is free and big → native substitute.)
3. **Quote/estimate registrar with price history** per VIN+part (post-repair real prices, crowdsourced) so owners can see "that's a normal $X." (Network data; cold start; monetization unclear.)

### K. External Validation (strongest 2 pains)
**Pain 1 — Mechanic distrust / overcharge / second-opinion loop:**
- FACT — ConsumerAffairs Mechanic Trust Survey (n=1,000, Pollfish, Aug 2023): **78% don't always trust mechanics**; **80% felt overcharged**; only 17% always fairly priced; **83% sometimes/always ask someone they know to double-check a mechanic's recommendation** (28% always); 9% never trust. URL: https://www.consumeraffairs.com/automotive/auto-mechanics-trust-issues.html
- FACT — Reddit threads "Did my mechanic lie to me?" / "Why are so many independent mechanics pieces of shit?" (snippets via DDG index; reddit blocks fetch): https://www.reddit.com/r/AskAMechanic/comments/15qbak8/ ; https://www.reddit.com/r/AskMenOver30/comments/15iwc4o/
- FACT — mass content industry exists on the fear ("7 Signs Your Mechanic Is Charging You for Work They Didn't Do"): https://www.cleverdude.com/content/7-signs-your-mechanic-is-charging-you-for-work-they-didnt-do/

**Pain 2 — Fragmented, non-portable maintenance records:**
- FACT — CARFAX Car Care app (free, 125,773 ratings, 4.84★) is the incumbent "maintenance tracker"; user reviews complain: "All my info and services … are gone"; "can't open any records on either of my cars… Spent a lot of time transferring these records"; "make it so I can share the maintenance tracking… with someone"; "nice to print the service history records." URL: https://apps.apple.com/us/app/carfax-car-care/id552472249 (reviews via iTunes RSS, 2026-08-10)
- FACT — CARFAX reports include "A vehicle's service history" only where reported to data sources; 151,000 data sources, 35B records (from listing): https://apps.apple.com/us/app/carfax-new-used-cars/id479267592
- INFERENCE — the *free incumbent owns the tracker*; the open pain is portability/ownership/verification, not reminding.

### L. Contradictory Evidence
- FACT — **CARFAX Car Care is free and beloved** (4.84★, 125K ratings) and CARFAX main app 4.85★ (368K ratings): a "better maintenance tracker" is already beaten. URLs: https://apps.apple.com/us/app/carfax-car-care/id552472249 ; https://apps.apple.com/us/app/carfax-new-used-cars/id479267592
- FACT — **The warranty-fear is legally weak**: Magnuson-Moss Warranty Act (15 U.S.C. §2301–2312, 1975) prohibits voiding a warranty for using independent shops or aftermarket parts; dealership-required-service is a myth. URLs: https://automotiveaftermarket.org/magnuson-moss/magnuson-moss-warranty-act/ ; https://ginsburglawgroup.com/2026/07/can-using-an-independent-mechanic-void-my-car-warranty-separating-fact-from-fiction/ ; also https://garageguide.blog/oil-change-void-warranty
- INFERENCE — a seed pitched as "protect your warranty by logging DIY maintenance" is **false certainty** (the law already protects you); a seed pitched as "prove the shop did the work" claims an un-provable inference.

### M. Research Verdict — **PROMISING (with a sharpened target) / uncertain for the obvious variants**
The distrust + second-opinion loop is real, mass, and has an existing ritual (83% ask someone). But the obvious product (maintenance tracker/reminder) is owned by a free native substitute (CARFAX Car Care). The unowned angle is **the verification/portability/second-opinion layer around the actual repair event**, which the incumbents explicitly do not do (see Car Care review complaints). Strong signal; needs a single-user, event-capture wedge.

---

## FG03 INSURANCE ADMINISTRATION — administrative friction, not coverage/legal disputes

### A. Participants (incentives)
- **Policyholder** — wants fast claims, no paperwork archaeology.
- **Agent** — wants to sell; claim-time is a service liability.
- **Adjuster** — cost control; needs documentation to settle.
- **Contractor** — wants the insurer's repair scope/approval; gets paid on supplements.
- **Consumer advocate** — wants consumers paid what's owed (UPhelp does this).
- **Insurer** — wants low claims costs and manageable documentation; the admin burden is its negotiation leverage.

### B. Current Workflow
1. Loss (water, fire, theft) → file claim → adjuster assigns; policyholder digs for policy docs, receipts, purchase dates.
2. Contents claims demand an **itemized inventory with values and proof**; most households have none (K).
3. Adjuster's system owns the truth; policyholder communicates by phone/portal; status is a black box.
4. Disputes resolved by appeals, DOI complaints, or public adjusters (a paid middleman industry).
5. Whole process reruns per claim; the "home inventory" never exists until the fire.

### C. Complaints (≥5)
1. **No inventory exists when needed** — contents claims lose value without receipts/photos.
2. **Claim status black box** — "we're waiting on X" loops; #1 complaint reason is claims handling (K).
3. **Policy documents unreadable** — coverage language can't be searched by a layperson at claim time.
4. **Prove-your-loss** burden: adjuster demands proof; consumer can't produce it (asymmetry).
5. **Claims denied/underpaid on documentation grounds** (K: 43% figure is vendor-sourced → HYPOTHESIS, but denial tables exist).
6. **Underinsurance**: ~1 in 5 homeowners self-report underinsurance (K) → admin (valuing your stuff) never happens.

### D. Contradictions
- Policyholder wants maximum payout; insurer wants minimum + airtight documentation; adjuster sits between.
- Advocate (UPhelp) says "document every item"; insurers' own apps rarely make this easy pre-loss.
- Consumer "trusts the policy" vs insurer expects proof.

### E. Incentive Misalignment
- Insurer profits from the documentation asymmetry (denial/underpayment on missing proof).
- Public adjusters and claim-consultant industry profits from the same friction (their fees are a direct tax on it).
- **Nobody but the consumer wants the inventory to exist** — and the consumer won't build one until it's too late (the "host owns correction" of claims is the insurer).

### F. Expensive Friction
- **Lost contents value on claims** (inventory-less households recover a fraction — INFERENCE).
- **Public-adjuster fees** (~10–20% of payout) as a market response to admin failure (HYPOTHESIS on average fee; FACT that the industry exists).
- **$15,000 out-of-pocket average denied claim** (vendor-sourced claim — label HYPOTHESIS): https://myhomeplatform.com/guide/insurance-claims-documentation
- **Insurer operations** spend on claims admin; consumers bear the time.

### G. Phone Opportunity
- Phone can **continuously, cheaply photograph the home** (walkthrough videos, room scans) so the inventory exists before the loss — the single strongest "phone-observes-truth" play in all six groups. Receipt scanning; serial plates; model numbers.
- But: phone cannot prove value; and the denied-claim decision is the insurer's (host-owns-correction).

### H. Existing Behavior
- People take listing/before-purchase walkthrough videos of homes/apartments already (moving/rental); people photograph receipts; people photograph damage post-loss (very common). Attach to the walkthrough video ritual.

### I. Potential Value Moment
- "Here's the video of every room from move-in day" produced *after* the fire — the moment an adjuster asks for proof you can't produce.

### J. Idea Seeds
1. **Move-in day room-video vault** (one-and-done capture ritual) with a clear "this is insurance evidence" export. (Single-user; low cold start; monetize at claim time as a service layer. Watch: "photo→report" rejection pattern.)
2. **Claim-time evidence kit**: guided photo/timebox capture of damage + auto-generated contents list from the vault; sells the export PDF to the consumer at the exact moment of need. (High urgency moment; the correction is still insurer-owned.)
3. **Coverage-language explainer**: paste your policy PDF → plain-language searchable claims checklist for your event type. (Info tool; commodity risk; the ledger already rejected "generic document summarizer." Keep as feature, not product.)

### K. External Validation (strongest 2 pains)
**Pain 1 — Claims-handling admin is the #1 complaint in insurance:**
- FACT — ValuePenguin analysis of NAIC data: "Claim handling was by far the top reason for insurance complaints in 2024." URL: https://www.valuepenguin.com/most-common-insurance-complaints
- FACT — Insurify/NAIC: complaints up ~7% in 2025; **only 37% of Americans trust their insurer will help after an incident** (2025 Guardian survey cited). URL: https://insurify.com/homeowners-insurance/news/rising-consumer-complaints-in-2025/
- FACT — NAIC publishes aggregated complaint-by-reason data: https://content.naic.org/cis_agg_reason.htm ; NAIC first-of-its-kind homeowners market-conduct analysis (2026): https://content.naic.org/article/naic-releases-first-its-kind-national-analysis-homeowners-insurance-market-trends

**Pain 2 — No home inventory / documentation for contents claims:**
- FACT — United Policyholders (nonprofit consumer advocate): contents-claim strategy is to "Document/list and value every item. Produce available receipts, photographs and other evidence." URL: https://uphelp.org/claim-guidance-publications/home-inventory-and-contents-claim-tips/
- FACT — Kin Insurance survey: "Nearly 1 in 5 homeowners don't have enough coverage to fully replace or repair their home." URL: https://www.kin.com/blog/2025-underinsurance-survey/
- FACT — Incumbents exist but small: "Under My Roof" (App Store Editors' Choice, 501 ratings) — note a 1★ review: "Free for 10 items is a joke… subscription for apps like this should be a one-time purchase" (monetization friction). URL: https://apps.apple.com/us/app/under-my-roof-home-inventory/id1524335878

### L. Contradictory Evidence
- FACT — **Lemonade** makes claims feel easy and is loved: 4.85★, 85,946 ratings ("simplest and easiest insurance"). https://apps.apple.com/us/app/lemonade-insurance/id1055653645 — INFERENCE: a large cohort believes the insurer's own app is fine; the pain concentrates in big-catastrophe/complex claims.
- FACT — The "43% denied/underpaid due to poor documentation" figure comes from a vendor (myhomeplatform) — unverified; treat as HYPOTHESIS, not established. https://myhomeplatform.com/guide/insurance-claims-documentation
- INFERENCE — Most policyholders file zero claims in a decade; a pre-loss inventory app's demand is theoretical until the fire — recurrence problem for consumer monetization.

### M. Research Verdict — **UNCERTAIN**
Huge real admin pain (NAIC #1 complaint) and a phone-unique asset (continuous room video). But the correction step (claims decision) is owned by the insurer; monetization timing is awful (consumers need it once per disaster); and the "photo→report" family is on the rejected list. The strongest sub-wedge is **claim-time evidence capture sold as a service at the moment of loss**, not a pre-loss vault.

---

## FG04 RENTING & SECURITY DEPOSITS — full move-in → move-out lifecycle

### A. Participants (incentives)
- **Tenant** — wants the deposit back; has no power at move-in.
- **Landlord** — wants the unit restored; deposit is their only leverage.
- **Property manager** — executes walkthroughs, sets cleaning standards, disputes at move-out.
- **Cleaner** — sells "move-out cleaning" certified against the landlord's standard.
- **Maintenance worker** — fixes move-in defects; timing pressure.
- **Leasing agent** — move-in paperwork, condition reports (often skipped or 3-minute walkthroughs).

### B. Current Workflow
1. Move-in: keys + a 2-page condition report; tenant rushes through, photos on their phone "for their records" (never organized, never timestamped against the report).
2. Lifecycle: landlord does repairs, some documented, most not; cleaning standards unstated.
3. Move-out: landlord/professional cleaner arrives; their camera is authoritative; tenant isn't there or didn't clean to spec.
4. Deposit withheld against cleaning/damage; tenant disputes by memory; state law requires itemized list within 14–45 days; tenant rarely fights because effort/amounts are small.
5. Result: ~59% of renters don't even expect a full refund (K).

### C. Complaints (≥5)
1. **No neutral condition baseline** — the walkthrough is rushed, and both sides' memories differ.
2. **Cleaning-standard ambiguity** — "professionally cleaned" undefined; cleaner vs landlord standard conflicts.
3. **Deposit accounting opacity** — itemized lists from landlords: only 29% provide them (K).
4. **Documentation asymmetry at dispute time** — landlord has their camera; tenant has nothing timestamped.
5. **Communications failure** — 51% say refund terms were never well-communicated (K).
6. **Payment logistics** — 18% of renters literally lose/throw out the refund check (K).

### D. Contradictions
- Tenant: "normal wear shouldn't cost me." Landlord: "paint touch-ups and carpet cleaning ARE damage."
- PM wants zero-friction move-out; tenant wants transparent itemization.
- Cleaner says "that's the landlord's standard, not ours" — who owns the standard is contested.

### E. Incentive Misalignment
- Landlord/PM benefit from deposit retention and ambiguity (no cost to them to be vague).
- Cleaners benefit from the certification game (their "move-out clean" is a paid ritual).
- Tenant alone wants a neutral record; tenant alone is too weak to demand one.

### F. Expensive Friction
- **Deposits lost** (typical = one month's rent; ~$1,300–$2,000 median two-bedroom — K cites $1,320 median gross two-bed rent).
- **Disputed cleaning/painting** charged at full price against an absent baseline.
- **Lost checks** = cash leakage (18%).
- **Legal/claim time** for the rare fight (small-claims costs).

### G. Phone Opportunity
- The phone is the **neutral evidence device**: timestamped move-in walkthrough video aligned to the condition report; move-out video; geolocation; AR/room layout; the "bathroom before the landlord repainted" record.
- Phone can generate the tenant's itemized condition report at move-in in 10 minutes — before the power imbalance sets in.

### H. Existing Behavior
- Tenants *already* take move-in/move-out photos on their phones (informally, every mover does); attach to that ritual and give it a legal frame. Landlords already photograph for their records.

### I. Potential Value Moment
- Move-out day: the app produces the side-by-side move-in/move-out comparison the landlord's camera used to be the only one to have.

### J. Idea Seeds
1. **Timed move-in walkthrough → condition report** (room-by-room video + damage tags) stored with lease metadata; export a clean PDF to hand the landlord. (Single-user, existing ritual, low cold start.)
2. **Deposit-recovery helper**: at move-out, generate the itemized dispute packet (comparison clips + state-law deadline cheat sheet) for the exact 40% who get challenged charges. (K: 40% challenge; 18% lose checks.)
3. **Landlord-side condition tool** (PMs pay): standardized walkthrough + itemized deduction builder that keeps landlords out of statutory trouble. (Business payer; but TurboTenant/avail ecosystems already bundle condition reports → host-owns-correction risk.)

### K. External Validation (strongest 2 pains)
**Pain 1 — Deposit loss / dispute frequency:**
- FACT — Roost 2023 renter survey: **59% of renters don't expect a full refund**; **40% challenge move-out damage charges**; **51% say refund terms were not well-communicated**; only **29% of landlords provide an itemized cost list**; **18% accidentally threw out a reimbursement check** (31% among 18–24). URL: https://www.joinroost.com/post/security-deposit-statistics-research-roost
- FACT — Median gross rent, two-bedroom ≈ $1,320 (Roost/Joint Center housing data, same page) → deposit stakes are real money.

**Pain 2 — Condition documentation (both sides' truth problem):**
- FACT — Only nascent apps exist: "DepositGenie: Renters Shield" has **1 rating** (5★), launched 2025 — the tenant-side condition-recording space is essentially unoccupied. URL: https://apps.apple.com/us/app/depositgenie-renters-shield/id6753661067
- FACT — TurboTenant (free landlord software, 10,921 ratings) bundles condition reports/leases for landlords — the landlord side has a free incumbent. URL: https://apps.apple.com/us/app/turbotenant-for-landlords/id1632249196
- FACT — State-law complexity (deadlines, penalties, interest on deposits in 14 states) documented: https://ipropertymanagement.com/laws/security-deposits

### L. Contradictory Evidence
- FACT — 68% of renters called their deposit amount "reasonable" (Roost, same page) — the *deposit size* is not the pain.
- FACT — TurboTenant renter app: 4.82★ (11,946 ratings), "Most convenient way to handle rent" — rent-payment logistics are well-served. https://apps.apple.com/us/app/turbotenant-for-renters/id6476510444
- INFERENCE — deposit disputes are **one-shot events every 1–3 years**; recurrence/retention for a consumer app is weak, and most deposits (even if not 100%) are returned — the 59%-don't-expect-full-refund number reflects *expectation*, not actual loss rate (HYPOTHESIS: actual partial-loss is lower).

### M. Research Verdict — **UNCERTAIN, leaning promising-wedge / weak-as-standalone**
Real, frequent, money-backed pain with a *perfect* phone-native ritual (move-in walkthrough) and a wide-open tenant-side niche (DepositGenie = 1 rating). But: low recurrence, consumer monetization timing, and the correction (deposit decision) is landlord/state-owned. Strongest as an **acquisition wedge inside FG05's moving product** (every mover is a tenant).

---

## FG05 MOVING — the absurd number of independent state transitions

### A. Participants (incentives)
- **Renter/homeowner (mover)** — wants one coordinated change of everything; is the only integrator.
- **Moving company** — sells labor+truck; profit from add-ons, protection, stairs.
- **Utility provider** — wants service continuity + fees (transfer/cancellation fees, deposits).
- **Property manager** — schedules access; enforces move-in/out rules.
- **Family member helping** — free labor; burns goodwill.

### B. Current Workflow
1. Decide to move → book mover → USPS change of address ($1.10 identity fee) → then manually update each of 20–50+ entities: banks, credit cards, DMV (legal deadline varies), voter registration, IRS, employer, insurance, subscriptions, utilities at BOTH addresses, schools, vet, doctors, gym.
2. USPS forwards first-class mail 12 months; does NOT update banks/DMV/IRS or forward government/financial mail.
3. Utilities: cancel/transfer at old place + set up new place; each has deposits, appointments, outages.
4. Move day: mover quote vs actual (hostage-load disputes, FMCSA-regulated); delivery windows; damaged/lost goods claims (FMCSA won't arbitrate).
5. Post-move: straggler mail, missed bills → late fees; DMV fine for missed address update (state-dependent).

### C. Complaints (≥5)
1. **The update list is long and manual** — 20–50+ entities, no single workflow (K).
2. **USPS forwarding is incomplete** — doesn't reach banks/DMV/IRS (K).
3. **Mover quote→bill creep & hostage loads** — FMCSA exists largely because of this (K).
4. **Utility double-transition** — close one, open another, deposits, appointment windows.
5. **Government identity requirements** — DMV/IRS want *you* to act, on deadlines; missed = fines (INFERENCE, state-dependent).
6. **Family/network burden** — the move is a social coordination event.
7. **Damage/loss claims** — mover's liability fine print; FMCSA won't resolve claims (K).

### D. Contradictions
- Mover wants the quote to move up (volume/weight); customer wants it to hold.
- PM wants move-in/out windows; tenant wants flexibility; cleaner/maintenance want access.
- Family says "glad to help"; everyone quietly resents it.

### E. Incentive Misalignment
- **USPS benefits** from COA being the only sanctioned mechanism; banks/DMV have zero incentive to sync.
- **Moving companies** profit from estimate creep and protection plans; fraudsters profit from hostage loads.
- **Utilities** monetize the switch (fees/deposits).
- Nobody is incentivized to coordinate the consumer's state transitions — the consumer is the unpaid integrator.

### F. Expensive Friction
- **Late fees/missed bills** from undelivered financial mail (real money; HYPOTHESIS on average, FACT that the forwarding gap exists).
- **DMV/voter/IRS deadlines** → fines (state-dependent).
- **Hostage loads** (thousands of dollars paid to release goods) — FMCSA's reason for existence (K).
- **Utility deposits + transfer fees** at both ends.
- **Mover claims** unrecoverable via FMCSA (K) → legal/arbitration costs.

### G. Phone Opportunity
- Phone can **photograph the mail you receive** (forwarded envelopes reveal the senders you forgot to update) — the definitive "who still doesn't know" signal.
- Phone already holds address-bearing accounts: bank/utility/apps you can *see* in your phone; emails from utilities; subscription emails at the old address.
- Phone coordinates the physical move day (mover arrival, walkthrough, box inventory).

### H. Existing Behavior
- People already photograph/envelope-scan "who is this from?"; already do a USPS COA; already email/update accounts one-by-one; already keep a manual checklist (Bogleheads thread). Attach to the COA + mail-photo ritual.

### I. Potential Value Moment
- Three weeks in: the app says "these 9 senders still mail to the old address — here's one-tap guidance for each."

### J. Idea Seeds
1. **Mail-forwarding forensics**: photo each forwarded envelope → OCR the sender → generate the "you forgot to update X" list + direct update links. (Single-user; phone-native; uses the sanctioned USPS signal as the trigger. Weakness: the update itself is a manual login per entity — no sanctioned API = aggregator-without-API trap.)
2. **Moving state-machine**: one timeline of every required transition (DMV deadline, utility closes, subscription address swaps), generated from a few inputs. (Commodity checklist content is free everywhere → native substitute risk.)
3. **Mover-arrival proof + quote-lock log**: photo of the signed binding/non-binding estimate and 110%-rule reminder at move day. (Attaches to FMCSA consumer protection; business angle: mover onboarding.)

### K. External Validation (strongest 2 pains)
**Pain 1 — USPS COA doesn't propagate to banks/DMV/IRS; manual list required:**
- FACT — "No — updating your address with USPS only forwards your physical mail. It doesn't update your address with banks, credit card companies, insurance providers, or government agencies like the DMV or IRS. After filing with USPS, make a checklist of places to update your address manually." URL: https://todayshomeowner.com/moving/guides/how-to-update-or-cancel-your-change-of-address/
- FACT — USPS forwards some mail classes only and won't forward certain government/financial mail: https://mangoful.com/usps-forward-all-types-of-mail/
- FACT — Real user ritual: "I always keep a list of companies I need to change my address with after a move … including credit cards" (Bogleheads forum thread, which also notes USPS never auto-triggers company updates). URL: https://www.bogleheads.org/forum/viewtopic.php?t=327261
- FACT — Change-of-address checklists (free content) enumerate DMV, IRS, voter registration, banks, subscriptions: https://moving-calculator.net/change-of-address-checklist

**Pain 2 — Moving company fraud / hostage loads / claims gaps:**
- FACT — FMCSA: "Every year, 35 million Americans move"; federal agency runs a consumer-protection program ("Protect Your Move", "Operation Protect Your Move" enforcement) because "thousands of Americans report experiencing moving fraud each year." URLs: https://www.fmcsa.dot.gov/protect-your-move ; https://www.fmcsa.dot.gov/protect-your-move/moving-fraud
- FACT — FMCSA: "FMCSA does not have the authority to resolve claims against a moving company." URL: https://www.fmcsa.dot.gov/protect-your-move

### L. Contradictory Evidence
- FACT — **USPS Mobile app is huge (1,740,886 ratings, 4.77★)** and offers COA + Informed Delivery; the sanctioned COA channel is owned: https://apps.apple.com/us/app/usps-mobile/id339597578
- FACT — Free checklist content saturates the "what to update" advice space (moving-calculator.net, todayshomeowner, etc.) — the *advice* is a commodity; only *automation* has value, and automation is blocked by per-entity logins (no sanctioned API).
- FACT — Most moves are local (rent-to-rent within a metro) with few high-stakes entities — the "50+ places" checklist overstates the median case (INFERENCE).
- INFERENCE — Moving is a **once-every-few-years event**; retention is weak; the money to be made is at move time (business payers: movers, utilities, PMs) not from the mover.

### M. Research Verdict — **UNCERTAIN**
The state-transition mess is real, painful, and phone-observable (mail forensics). But every implementation hits a hard wall: per-entity logins (no sanctioned API — the exact "aggregator of third-party state" rejection), a free incumbent for the sanctioned step (USPS), and commodity checklist content. The strongest real wedge is the **forwarded-mail-forensics signal** (photo mail → "you forgot X"), which no incumbent does and which is genuinely phone-native.

---

## FG06 HOUSEHOLD ADMINISTRATION — the invisible administrative work that keeps a household running

### A. Participants (incentives)
- **Busy parent** — owns the cognitive load; wants it offloaded.
- **Single adult** — wants zero-maintenance systems.
- **Couple** — division of invisible labor; one "project manager" usually.
- **Roommate** — chore/bill accountability; low trust, high vigilance.
- **Household organizer** — hobbyist/consultant; sells systems.
- **Service provider** (cleaner, lawn, repair) — recurring revenue; wants reminders to sell.

### B. Current Workflow
1. One person (usually mother) holds the "mental list": bills, appointments, school forms, subscriptions, warranties, supplies, chores, renewals, who-does-what.
2. Tools: shared calendar, paper lists, notes apps, texts, whatever each member uses. Nothing is the household's canonical state.
3. Renewals/subscriptions auto-charge; warranties lapse; chores get done by whoever notices.
4. Service providers call with "it's time for X" (they hold the reminder state).
5. Nobody has a stable answer to "what do we own, and what's due?" — the inventory and schedule live in one person's head.

### C. Complaints (≥5)
1. **The mental load is real, gendered, and documented** (K) — planning/remembering is the tax.
2. **No shared canonical state** — schedules/bills/chores fragmented across apps; "who forgot X" fights.
3. **Renewals/warranties lapse silently** — auto-renew vs missed renewals both cost money.
4. **Chore/bill accountability** in roommates/couples — passive aggressiveness instead of a system.
5. **Service-provider nagging** — the provider's CRM is the only reminder; the household is the product.
6. **Onboarding is eternal** — every new member/app duplicates the mental list; no portable household profile.

### D. Contradictions
- Busy parent wants shared systems; partner/roommate won't adopt a second app ("two-party adoption").
- Couple: "it's all in my head" vs "just tell me what to do" — the work is invisible to the person who doesn't do it.
- Roommates want accountability but won't trust a ledger they must maintain.
- Organizer sells systems; nobody wants to run them.

### E. Incentive Misalignment
- Service providers profit from holding reminder state (their CRM = your FOMO).
- The person carrying the load benefits from a fix; everyone else has near-zero incentive to adopt (cold start).
- App makers profit from the *organizer* (business), not the household.

### F. Expensive Friction
- **Silent renewal / lapse costs** (auto-renew and missed renewals) — real cash, unmeasured (HYPOTHESIS).
- **Late fees / duplicated purchases** from lost tracking.
- **Service-provider upsells** built on their reminder state.
- **The load itself** correlates with maternal mental-health costs (K — academic).

### G. Phone Opportunity
- Phone sees the household's **digital shadow**: subscriptions (bank push notifications, App Store subs), appointments (calendar), delivery/shopping emails, utility bills (email), and the physical home (photos). It can *aggregate what the phone already holds* — but the phone cannot access bills from outside apps without user email access (permission-heavy).

### H. Existing Behavior
- People already screenshot bills/renewal emails; already pay from phone; already share Google calendars; already take chore-rotation photos (whiteboards). Attach to screenshots-of-bills and the shared calendar.

### I. Potential Value Moment
- "Your renter's insurance renews in 6 days at 40% higher" — the caught-a-renewal moment (but native Calendar/Reminders already attempts this; ledger rejected subscription-tracker).

### J. Idea Seeds
1. **Bill/renewal screendump scanner**: forward/screenshot a renewal email → tracked with a "decide: renew/cancel/shop" state. (Rejected-pattern risk: subscription tracker, native substitute.)
2. **Chore/bill accountability ledger for roommates** (who paid, who did) with photo proof. (Cold start: everyone must adopt; ledger rejected "two-record reconciliation without stable invariant.")
3. **Provider-side renewal reminder desk** (cleaner/HVAC/salon businesses pay to manage their customers' repeat work). (Business payer; attaches to the provider's existing CRM incentive.)

### K. External Validation (strongest 2 pains)
**Pain 1 — Cognitive/invisible household labor:**
- FACT — Peer-reviewed: cognitive household labor (planning, anticipating, delegating) is a distinct, gendered burden; mothers' load persists regardless of resources. URLs: https://link.springer.com/article/10.1007/s00737-024-01490-w ; https://pmc.ncbi.nlm.nih.gov/articles/PMC11761833/ ; press summary: https://www.bath.ac.uk/announcements/successful-career-women-still-shoulder-the-majority-of-the-mental-load-at-home-new-research/
- FACT — Arxiv 2505.11426: mental load spills into work ("employed women are more likely to report thinking about household management during work hours"). URL: https://arxiv.org/abs/2505.11426

**Pain 2 — Household chores/coordination already served by existing apps:**
- FACT — Tody (10,583 ratings, 4.83★) and Sweepy (10,339 ratings, 4.72★) own chore tracking; Under My Roof owns the home-records angle (App Store Editors' Choice). URLs: https://apps.apple.com/us/app/tody/id595339588 ; https://apps.apple.com/us/app/sweepy-home-cleaning-schedule/id1498897320 ; https://apps.apple.com/us/app/under-my-roof-home-inventory/id1524335878
- INFERENCE — the "household organizer" vertical is occupied by niche apps that are loved but small — the problem isn't demand, it's **aggregation across household members** (adoption).

### L. Contradictory Evidence
- FACT — The ledger's prior rounds already recorded: family calendar, chores, subscription tracker, "family coordination generalists" all **rejected as defeated by two-party adoption or native substitutes** (shared context). Existing apps confirm it: Tody/Sweepy are single-user by design.
- FACT — Household-service reminders are already free inside providers' own ecosystems (scheduling apps for cleaners/HVAC), so a consumer-side "reminder" adds little (INFERENCE).
- INFERENCE — The pain is real but diffuse: "invisible admin" maps to no single owned state the phone can capture without deep email/bank permissions, and every well-defined slice (chores, subscriptions, calendar) already has a free incumbent.

### M. Research Verdict — **WEAK**
Well-documented pain, but it is the definition of the already-rejected cluster (family coordination, subscription tracking, reminders, chore apps) plus a **two-party adoption cold start** (partner/roommate must adopt) and **no phone-ownable state** without invasive permissions. The one business-y exception (provider-side renewal/reminder desk) is a B2B tool, not a consumer app. Weak.

---

## STRONGEST RAW SIGNALS (max 8)

1. **Mechanic distrust + the informal second-opinion loop (FG02).** 78% of drivers don't always trust mechanics; 80% felt overcharged; only 17% always fairly priced; 83% already ask someone they know to check a recommendation. — FACT, ConsumerAffairs n=1,000 survey. https://www.consumeraffairs.com/automotive/auto-mechanics-trust-issues.html

2. **Repair records aren't portable or verifiable even in the free incumbent (FG02).** CARFAX Car Care (4.84★, 125K ratings) users complain: can't print/export history, can't share a vehicle, and full data loss wiped records they'd manually rebuilt. — FACT, App Store reviews via iTunes RSS. https://apps.apple.com/us/app/carfax-car-care/id552472249

3. **Home-warranty claims are denied and the appeals need paperwork people don't keep (FG01).** Choice Home Warranty app 2.02★; reviews: "paid $1,755… first claim denied," "correspondence almost impossible." Appeals legally hinge on maintenance records + receipts. — FACT. https://apps.apple.com/us/app/choice-home-warranty/id1545174683 ; https://www.consumeraffairs.com/homeowners/what-to-do-when-your-home-warranty-claim-is-denied.html

4. **Contractor no-show / silent quotes (FG01).** Pervasive Reddit threads ("Why are all the contractors no-showing me?"); Angi publishes deposit-fraud guidance. — FACT (thread existence/titles; prevalence = INFERENCE). https://www.reddit.com/r/homeowners/comments/hxrqkh/ ; https://www.angi.com/articles/what-can-you-do-when-contractor-takes-your-deposit-and-runs.htm

5. **Deposit loss/disputes are frequent and under-documented (FG04).** 59% of renters don't expect full refund; 40% challenge move-out charges; only 29% of landlords give itemized lists; 18% throw out refund checks; the tenant-side app niche has exactly 1 rating (DepositGenie). — FACT, Roost survey + App Store. https://www.joinroost.com/post/security-deposit-statistics-research-roost ; https://apps.apple.com/us/app/depositgenie-renters-shield/id6753661067

6. **USPS COA doesn't propagate; the update list is manual and long (FG05).** USPS forwards mail only; banks/DMV/IRS each need manual updates; real users keep manual lists (Bogleheads). — FACT. https://todayshomeowner.com/moving/guides/how-to-update-or-cancel-your-change-of-address/ ; https://www.bogleheads.org/forum/viewtopic.php?t=327261

7. **Claims handling is the #1 insurance complaint; trust is 37% (FG03).** NAIC 2024 data; complaints up 7% in 2025; contents claims require inventories that don't exist (UPhelp). — FACT. https://www.valuepenguin.com/most-common-insurance-complaints ; https://uphelp.org/claim-guidance-publications/home-inventory-and-contents-claim-tips/

8. **Moving-fraud/hostage loads are chronic enough for a federal program (FG05).** FMCSA "Protect Your Move" + "Operation Protect Your Move"; 35M moves/yr; FMCSA explicitly cannot resolve consumer claims. — FACT. https://www.fmcsa.dot.gov/protect-your-move

---

### Cross-group note (guards hit)
- Cold start: FG06 (roommate/couples), any two-sided repair/auto marketplace.
- Native substitute: FG01 discovery (Thumbtack 457K★4.89, TaskRabbit), FG02 tracker (CARFAX Car Care free), FG04 rent payment (TurboTenant), FG05 USPS + free checklists.
- Host-owns-correction: FG01 warranty appeals, FG03 claims decisions, FG04 deposit decisions.
- False certainty: FG02 "prove the shop did the work" and "protect your warranty" (Magnuson-Moss already protects DIY).
