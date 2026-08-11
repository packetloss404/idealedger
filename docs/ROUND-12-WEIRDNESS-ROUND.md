# Round 12 — Weirdness Round — RevenueCat Shipaton 2026

Research date: 2026-08-11. Inputs: `SHARED-CONTEXT.md`, 20 researched pain points (trusted as evidence), Round-11 pain map + finalist dossiers, verified Shipaton 2026 rules.

Method: 10 divergent lenses × the 20 pain points → **42 distinct ideas** (≥3 per lens, no lens reuses a pain point). Each idea screened against the Shipaton revenue-window tests (business payer within days / weekly ritual / shareable result / craftable subscription) and the durable truth rules (no owned/sanctioned state, no false green, no host-owns-correction-as-product, no two-party cold start, acknowledgment ≠ fact, two records need a stable invariant, unknown is first-class). Weirdness was not an excuse to skip the gates.

Evidence labels: FACT (cited source + URL) / INFERENCE / HYPOTHESIS. Search-engine web queries were bot-blocked (DuckDuckGo, Bing, Mojeek); app-store competitor sweeps ran on the live iTunes Search API (FACT, from App Store listings).

---

## Part 1 — 42 ideas by lens

Pain-point numbers match the brief (1–20).

### Lens (a) — What would a game designer do?
- **A1 — Life Quest Log** (Pain 13, "what happens next"). Every opaque wait (IRS, claim, renewal, shop) is a quest; the progress bar is fed ONLY by the user's own logged evidence and expected-next-step notes; "unknown" is a first-class state, never a fake green. *Phone:* screenshots-as-quest-items, push timers, camera intake. *Who pays:* power-consumer pro tier (weak). *Kill risk:* consumer-won't-pay; low-frequency events. *Note:* this is the user-instrumentable process-tracker the round deep-dives elsewhere — A1 is its gamified skin.
- **A2 — Disruption Boss Battle** (Pain 12, travel). Offline "rebooking loadout" prepped from your itinerary: alternate flights, hotels, comp-rules as cards you swipe into an agent script. *Phone:* everything prepped offline on device; boarding pass = quest item. *Who pays:* consumer (weak). *Kill risk:* low frequency; host owns the correction (airline); consumer-won't-pay.
- **A3 — Freight Pokédex** (Pain 16, large-item shipping). Snap any large item → freight class, dim weight, and a shippable price; "collect" every item you've sold. *Phone:* camera → class/price in one shot. *Who pays:* reseller / pro seller. *Kill risk:* commodity AI wrapper; ShipKit hold overlaps.
- **A4 — No-Show Necromancer** (Pain 19, contractor no-shows). Getting a reply is the quest: auto-escalating follow-ups with escalating tone + a personal "ghosting scoreboard." *Phone:* log the follow-up call right after the no-show. *Who pays:* homeowner (weak) or pro (B2B, see H3). *Kill risk:* two-party cold start; consumer-won't-pay.

### Lens (b) — What would a logistics engineer do?
- **B1 — School Exception Router** (Pain 18, school app sprawl). Forwarded school texts/emails are parsed into a MUST-ACT vs read-only feed; "pickup changed" rises above "pizza Friday." *Phone:* forwarding/share-sheet intake. *Who pays:* PTA/district (B2B) or parents (weak). *Kill risk:* host owns the schedule (district); two-party cold start.
- **B2 — Receivables Pickup Route** (Pain 20, freelancers paid late). A scheduled weekly "collections run": templated, escalating nudges fire automatically + an owed-vs-received truth board (invariant: invoice − payments = outstanding). *Phone:* the run is a phone ritual. *Who pays:* freelancer (prosumer). *Kill risk:* invoice incumbents own the object — **confirmed DIRECT (see Part 4)**.
- **B3 — Payout Manifest** (Pain 4, 1099-K gross vs deposits). Weekly auto-flag: platform-reported gross vs bank deposits net, per platform. *Phone:* deposit screenshots as intake. *Who pays:* gig worker (weak). *Kill risk:* NetCheck HOLD (seasonal); consumer-won't-pay.
- **B4 — Claim-Ready Install Record** (Pain 14, home-warranty denials). The **installer** captures serial + install date + photo at the moment of install; months/years later, one tap builds a claim-ready packet — so the warranty company's "no records" denial can't happen. *Phone:* serial-photo is already taken at install by techs; the camera is at origin. *Who pays:* install/service business (B2B, pays within days). *Kill risk:* host owns correction (warranty co decides) — *inverted*: the customer is the installer, not the claimant; PARTIAL incumbent (see Part 4).

### Lens (c) — What would an investigative journalist do?
- **C1 — The Cancel Bureau** (Pain 9, gym/cancel sludge). Personal cancel-attempt log (the trail) + aggregate "sludge league tables" of cancel-hostile companies; your attempt log is your evidence file. *Phone:* log each call/visit as it happens. *Who pays:* none / advocacy licensing (weak). *Kill risk:* host owns cancel; FTC rule in flux; consumer-won't-pay.
- **C2 — The Deposit Beat** (Pain 6, deposit disputes). Move-in/out evidence dossier + landlord-behavior scorecards pooled from user data. *Phone:* camera at walkthrough. *Who pays:* tenant (weak). *Kill risk:* native substitutes (DepositProof/MoveProof/DepositGenie); false certainty (photo proves only the photo).
- **C3 — The Offboarding Beat** (Pain 17, ex-employee access). "Who still has keys" audit runbook for SMB owners. *Phone:* phone as authenticator/vault. *Who pays:* SMB owner. *Kill risk:* low frequency; host owns revocation; "dashboard for data that already exists."
- **C4 — The Warranty Dossier** (Pain 14). Consumer-side dispute-ready appeal packet + denial-pattern reporting. *Phone:* receipt/serial capture. *Who pays:* homeowner (weak). *Kill risk:* host owns correction; consumer-won't-pay documentation. *Contrast:* C4 (consumer side) dies; B4 (installer side) survives — same pain, different party.
- **C5 — The Care Handoff Notebook** (Pain 11, caregivers). One-tap shift log (meds/meals/status) with a remote-family feed. *Phone:* the tick is a thumb. *Who pays:* family (weak). *Kill risk:* med-app graveyard; consumer-won't-pay.

### Lens (d) — What would a security engineer do?
- **D1 — Tamper-Evident Timesheet** (Pain 3, hourly pay mismatch). Worker's own schedule/paystub screenshots anchored (hash + time + device), diff of hours-you-logged vs hours-paid. *Phone:* the screenshot ritual already exists. *Who pays:* worker (weak). *Kill risk:* WageWatch occupies; employer owns correction; consumer-won't-pay.
- **D2 — Dead-Man's Switch for SMB** (Pain 17). Access inventory + a revocation drill that fires when someone leaves. *Phone:* vault + rotation prompts. *Who pays:* SMB owner. *Kill risk:* host owns revocation; low frequency.
- **D3 — Chain-of-Custody Condition Record** (Pain 6). Move-in/out photos hashed at capture. *Phone:* camera + on-device hash. *Who pays:* tenant (weak). *Kill risk:* native substitutes; false certainty (a hash proves only the photo).
- **D4 — Official-Channel Timebox** (Pain 13). Vault of official phone numbers + reference IDs so re-polling only hits sanctioned channels; an anti-spam-call shield. *Phone:* the vault lives on the phone. *Who pays:* consumer (weak). *Kill risk:* consumer-won't-pay; dashboard-for-existing-data.

### Lens (e) — What would a behavioral economist do?
- **E1 — Estimate Sanity Check** (Pain 2, mechanic distrust; 83% already ask someone). Photo the estimate → structured second-opinion ritual that never asserts a price verdict. *Phone:* camera intake of the estimate. *Who pays:* consumer (weak). *Kill risk:* false certainty (no benchmark exists); consumer-won't-pay; SimplyWise occupies the adjacent estimator.
- **E2 — Awkwardness Insurance** (Pain 20). Pre-committed, scheduled, auto-escalating nudge sequence so the freelancer never manually "chases." *Phone:* it fires from the phone. *Who pays:* freelancer. *Kill risk:* incumbents (DIRECT).
- **E3 — The Auto-Pick Contract** (Pain 5, creator gallery seam). Proof link whose default is "if you don't pick by X, the photographer's picks apply"; selections flow back to the catalog. *Phone:* client picks on the phone. *Who pays:* photographer. *Kill risk:* Gallerina/Picflow occupy; low frequency per client.
- **E4 — Commitment-Deposit Renewal** (Pain 15, license/CE lapses). Loss-aversion streaks/pre-commitments so a lapse becomes costly to ignore. *Phone:* push at the deadline. *Who pays:* licensed worker (weak). *Kill risk:* Nursys official free substitute; consumer-won't-pay.

### Lens (f) — What would a teenager do?
- **F1 — "Bro they changed my shift"** (Pain 3). Screenshot the roster → auto-diff → auto-drafted text to the manager. *Phone:* screenshots + send. *Who pays:* worker (weak). *Kill risk:* WageWatch; consumer-won't-pay.
- **F2 — "Free flight in 3 taps"** (Pain 12). Compensation-owed calculator + script generator. *Phone:* sends it. *Who pays:* consumer (weak). *Kill risk:* AirHelp/FlightRights occupy; low frequency.
- **F3 — Squad Sync** (Pain 18). A shared "the plan" feed; a change fans out with a "who's in?" poll. *Phone:* native to teens. *Who pays:* none. *Kill risk:* two-party cold start; TeamSnap.
- **F4 — The Money Phone** (Pain 4). Gross-vs-net explained in slang + "set aside this much for taxes." *Phone:* payout screenshots. *Who pays:* worker (weak). *Kill risk:* NetCheck HOLD; seasonal; consumer-won't-pay.

### Lens (g) — What would a retiree do?
- **G1 — The Family Clipboard** (Pain 11). One big button med/meal log + remote feed for adult children. *Phone:* one thumb. *Who pays:* family (weak). *Kill risk:* med-app graveyard; consumer-won't-pay.
- **G2 — The Renewal Shoebox** (Pain 15). Photo each CE certificate; one screen: "where you stand vs deadline." *Phone:* the shoebox is the camera roll. *Who pays:* licensed worker (weak). *Kill risk:* Nursys official free; consumer-won't-pay.
- **G3 — The Executor's Box** (Pain 8, bereavement admin). A ledger of who you've notified, what each org needs, what they said. *Phone:* photo the death cert once. *Who pays:* executor (one-shot). *Kill risk:* low frequency; Empathy/EstateExec occupy.
- **G4 — Certified-Mail Cancellation Kit** (Pain 9). Draft the letter, mail-from-phone, track delivery. *Phone:* USPS send-from-phone. *Who pays:* consumer (weak). *Kill risk:* USPS native; low frequency; host owns cancel.

### Lens (h) — What would a field technician do?
- **H1 — The Tech's Word Is the Invoice** (Pain 1, un-invoiced work). Hands-free voice job log → auto ticket + invoice lines (readable/unreadable always labeled). *Phone:* it's the tech's on-site device; works in dead-zone garages. *Who pays:* micro field-service op (B2B, days). *Kill risk:* overlaps SnapInvoice — the round's finalist; **validates it, not new** (voice intake is the differentiator to test).
- **H2 — Done ≠ Confirmed** (Pain 10, repair black box). **Sell the black-box owner the transparency tool:** the shop buys a verified-done feed (tech photos + sign-off) it sends customers — kills "is it done?" calls, disputes, and chargebacks, and differentiates the shop. *Phone:* the tech's phone holds the done-photo. *Who pays:* service business (B2B). *Kill risk:* host-owns-correction is *inverted* (the host is the customer); PARTIAL incumbent (see Part 4).
- **H3 — Lead-Conversion Logger** (Pain 19, silent quotes / lost pros' revenue). Pros log every quote + follow-up; close-rate and ghosting computed from the pro's OWN data. *Phone:* log the follow-up call at the truck. *Who pays:* pro (B2B). *Kill risk:* two-party cold start avoidable (single-user start); **DIRECT incumbent (see Part 4)**.
- **H4 — Truck-Measure First Time** (Pain 16). Measure + photo → freight class before accepting the load. *Phone:* camera at the curb. *Who pays:* hauler/pro. *Kill risk:* commodity wrapper; ShipKit overlap.

### Lens (i) — No knowledge of existing apps
- **I1 — "Show me what I actually made"** (Pain 4). Payout screenshots → plain "you made X, owe ~Y." *Phone:* screenshots. *Who pays:* worker (weak). *Kill risk:* NetCheck HOLD; seasonal; consumer-won't-pay.
- **I2 — "Is this fair?"** (Pain 2). Plain-English estimate reviewer. *Phone:* photo the estimate. *Who pays:* consumer (weak). *Kill risk:* false certainty; occupied.
- **I3 — "Did it get done today?"** (Pain 11). One-question daily care check that becomes a record. *Phone:* one thumb daily. *Who pays:* family (weak). *Kill risk:* graveyard.
- **I4 — "When will this be done?"** (Pain 13). Plain, user-filled step tracker for any process. *Phone:* screenshots + push. *Who pays:* consumer (weak). *Kill risk:* consumer-won't-pay; low frequency; *feeds the round's process-tracker deep-dive.*

### Lens (j) — Strangest legitimate solution
- **J1 — Two-Phone Return Witness** (Pain 7, return fraud). QR co-sign: two phones, one moment — a timestamped condition record when a high-value item changes hands. *Phone:* two cameras, NFC/QR. *Who pays:* seller (weak) / marketplace. *Kill risk:* two-party cold start.
- **J2 — The Move-Out Stamp** (Pain 6). Both parties "stamp" the walkthrough record like a passport. *Phone:* two phones. *Who pays:* none. *Kill risk:* two-party cold start; native substitutes.
- **J3 — The Public Quote Wall** (Pain 19). Homeowners post the quote they got; pros reply publicly; the market rate becomes visible. *Phone:* photo the quote. *Who pays:* pro (B2B, ads). *Kill risk:* marketplace cold start; two-party.
- **J4 — Cancel-by-Human** (Pain 9). Subscribe to a service that dispatches a person (mail/agent) to cancel for you. *Phone:* the request is a tap. *Who pays:* consumer. *Kill risk:* consumer-won't-pay; DoNotPay precedent (FTC settlement); host owns cancel.
- **J5 — Crowdsourced Status Truth** (Pain 13). Pooled status screenshots → "how long is everyone waiting on X?" *Phone:* screenshots auto-donate. *Who pays:* none. *Kill risk:* privacy; consumer-won't-pay; dashboard-for-existing-data.

---

## Part 2 — Screening (Shipaton revenue tests × truth rules)

Pass (+) / Fail (–). "Kill" = hard gate. All 42 screened; only survivors are detailed.

| Idea | Business payer in days | Weekly ritual | Shareable result | Crafted sub | Truth rules | Outcome |
|---|---|---|---|---|---|---|
| A1 | – consumer | – event-driven | + | ~ | + (user-owned state) | **SURVIVE** (weak payer) |
| A2 | – | – | + | ~ | + but host owns fix | KILL low-frequency |
| A3 | + reseller | + listing | + | + | + | **SURVIVE** (commodity risk) |
| A4 | – homeowner | – | + | ~ | + | KILL two-party |
| B1 | ~ PTA | + school-year | + | + | + | KILL host-owns schedule |
| B2 | + freelancer | + weekly run | + owed-truth board | + | + (invariant holds) | **SURVIVE** (then weakened by incumbent sweep) |
| B3 | – | + weekly | + | ~ | + | KILL consumer-won't-pay |
| B4 | + installer | + every install | + claim packet | + | + (record, not verdict) | **SURVIVE** (top 2) |
| C1 | – | – | + league table | ~ | + | KILL consumer/host |
| C2 | – | – | + | ~ | – false certainty | KILL |
| C3 | + SMB | – departures | + | + | + | KILL low-frequency/dashboard |
| C4 | – | – | + | ~ | + | KILL host-owns-correction |
| C5 | – | + daily | + | ~ | + | KILL graveyard |
| D1 | – | + | + | ~ | + | KILL WageWatch/employer |
| D2 | + SMB | – | + | + | + | KILL low-frequency/host |
| D3 | – | – | + | ~ | – false certainty | KILL |
| D4 | – | – | ~ | ~ | + | KILL consumer-won't-pay |
| E1 | – | + (car event) | + | ~ | – benchmark trap | KILL |
| E2 | + freelancer | + | + | + | + | SURVIVE but = B2 (DIRECT) |
| E3 | + photographer | – per client | + | + | + | KILL Gallerina |
| E4 | – | – | ~ | ~ | + | KILL Nursys free |
| F1 | – | + | + | ~ | + | KILL WageWatch |
| F2 | – | – | + | ~ | + | KILL occupied/low-freq |
| F3 | – | + | + | ~ | + | KILL two-party |
| F4 | – | + | + | ~ | + | KILL NetCheck/seasonal |
| G1 | – | + | + | ~ | + | KILL graveyard |
| G2 | – | – | ~ | ~ | + | KILL Nursys free |
| G3 | – | – | + | – one-shot | + | KILL low-frequency |
| G4 | – | – | + | ~ | + | KILL USPS native |
| H1 | + op | + | + | + | + (never false green) | SURVIVE (validates SnapInvoice) |
| H2 | + shop | + every job | + done-feed | + | + (host's own evidence) | **SURVIVE (top 2)** |
| H3 | + pro | + every quote | + close-rate | + | + (own data only) | SURVIVE (then DIRECT incumbent) |
| H4 | + hauler | + | + | + | + | SURVIVE but commodity (≈A3) |
| I1–I4 | – | ~ | ~ | ~ | mixed | all KILL consumer-won't-pay |
| J1 | ~ | – | + | ~ | + | KILL two-party cold start |
| J2 | – | – | + | ~ | + | KILL two-party/cold |
| J3 | + pro | – | + | ~ | + | KILL marketplace cold start |
| J4 | – | – | ~ | + | + | KILL DoNotPay precedent |
| J5 | – | – | + | – | – privacy | KILL |

Survivors after evidence gates: **A1, A3, B2, B4, H1, H2, H3, H4** (8). Then the competitor sweep (Part 4) removes B2/H3 as DIRECT and flags A3/H4 as commodity-adjacent, leaving the ranked top 6 below.

---

## Part 3 — Weirdness survivors (top 6, ranked)

Ranked by evidence of pain + phone advantage + monetization + absence of a hard kill (competitor exposure counts).

1. **H2 — Done ≠ Confirmed** (Pain 10). *Novel one-liner:* "Sell the repair shop the transparency tool — the shop pays to send verified-done proof (tech photos + sign-off) that kills 'is it done?' calls and disputes." Survives truth rules by inverting host-owns-correction: the host is the customer. Competitor: PARTIAL (see Part 4).
2. **B4 — Claim-Ready Install Record** (Pain 14). *Novel one-liner:* "The fix for home-warranty 'no records' denials isn't a homeowner shoebox — it's the installer's claim-ready record (serial + date + photo) built at origin and sold to the installer." B2B payer, every-install ritual, shareable claim packet. Competitor: PARTIAL.
3. **B2 — Receivables Pickup Route** (Pain 20). *Novel one-liner:* "Freelancers run a scheduled weekly collections run — automated escalating nudges plus an owed-vs-received board — so nobody ever 'chases' again." Weakened by DIRECT invoice incumbents; survives as the round's strongest mechanism transplant.
4. **H3 — Lead-Conversion Logger** (Pain 19). *Novel one-liner:* "Pros log every quote + follow-up from the truck; the app computes close-rate and ghosting from the pro's own data." DIRECT incumbent (QuotePulse, Feb 2026) — record as a corroborating signal, not a build.
5. **A3 — Freight Pokédex** (Pain 16). *Novel one-liner:* "Snap the couch, get the freight class and the shippable price, and collect every item you've sold — the seller's own shipping-price Pokédex." Reseller payer; commodity-wrapper risk and ShipKit overlap keep it below the top 2.
6. **A1 — Life Quest Log** (Pain 13). *Novel one-liner:* "Your opaque wait (IRS, claim, renewal) is a quest whose progress bar is fed only by your own logged evidence — unknown is a first-class state." Weak payer, but truth-clean; it is the skin over the round's primary deep-dive bet (user-instrumentable process tracker).

*H1 (voice job log) is excluded from the survivor ranking as it re-derives the round's existing finalist SnapInvoice rather than being new — it is recorded as validation evidence for SnapInvoice's voice-intake differentiator.*

---

## Part 4 — Competitor search (top 2) + extra sweeps

Method: live iTunes Search API (App Store), entity=software, country=us. Web engines (DuckDuckGo/Bing/Mojeek) bot-blocked; Product Hunt not directly queryable. All results FACT from App Store listings (retrieved 2026-08-11).

### H2 — Done ≠ Confirmed (proof-of-work feed) → **PARTIAL / saturating**
- **CompanyCam** (28,888 ratings, 4.80★) — GPS+timestamped job-photo documentation, checklists, photo reports, 50+ CRM/FSM integrations; explicitly marketed to contractors ("cover your butt"). Covers the "shop documents its own work" core. URL: https://apps.apple.com/us/app/companycam/id960043499
- **Timemark: Photo Proof for Work** (13,811 ratings, 4.79★, launched 2023) — the closest named match to "photo proof for work." URL: https://apps.apple.com/us/app/timemark-photo-proof-for-work/id6446071834
- **RelayCam: Job Photo App** (36 ratings) — job photos by project, GPS/timestamp, sharable gallery. URL: https://apps.apple.com/us/app/relaycam-job-photo-app/id6498888511
- **ProofDoc: Work Proof & Pay** (2026, 1 rating) — proof records + estimates + invoices. URL: https://apps.apple.com/us/app/proofdoc-work-proof-pay/id6761447866
- Classification: **PARTIAL.** The "photo proof for work" cell is occupied at scale; the surviving wedge is specifically *customer-facing verified-done + sign-off* packaged for solo shops (none of the above is a standalone trust/transparency product aimed at the customer relationship). Novelty confidence low (~30/100) — the honest read is that H2 is a feature wedge against CompanyCam, not an empty cell.

### B4 — Claim-Ready Install Record → **PARTIAL (host-side absorbs it)**
- **Liberty Home Guard** (4.06★, 234 ratings) — home-warranty app with a **technician mode**: work-order management, "upload required information," technician signing packets. The warranty company already hosts installer-side evidence capture. URL: https://apps.apple.com/us/app/liberty-home-guard/id1631964576
- **AHS: American Home Shield** (4.86★, 53,759 ratings) — newest release adds **"capture model numbers with your camera."** URL: https://apps.apple.com/us/app/ahs-american-home-shield/id6499445456
- **CompanyCam** (28,888 ratings) — general field-photo documentation covers serial/install photos for the same micro-contractor customer. URL as above.
- Also observed in sweep: Warranty Service (furniture protection plan, 4.70★), Choice Home Warranty, SquareTrade, Select Home Warranty — all consumer-claim side, not installer side.
- Classification: **PARTIAL.** The vendor-neutral, claim-ready install file (serial + date + photo bound to the contractor, portable across warranty companies) is not directly served; but both CompanyCam (general) and the warranty companies' own technician apps (host-owned) bracket the wedge. Novelty confidence ~35/100.

### Extra sweeps (B2, H3 — needed because Part 2 ranking put them in the survivor set) → **DIRECT**
- **B2 (collections/dunning):** Invoice2go (55,486 ratings) — overdue tracking + automatic payment reminders; Billdu (25,820) — payment status, reminders; FreshBooks (10,971) — automated payment reminders; Tiny Invoice (10,406) — due-date reminders + payment status; Harvest (2,658). Classification: **DIRECT** — the collections-run is a feature of every invoice incumbent. URL: https://apps.apple.com/us/app/invoice2go-easy-invoice-maker/id540236748
- **H3 (quote/lead logger):** **QuotePulse Contractor Tracker** (launched Feb 2026, 5★, 4 ratings, $9.99/mo, "free up to 5 active quotes") — near-exact mirror: quote tracking, follow-up reminders, close-rate dashboard, "78% of buyers choose the first company that responds." Plus **QuoteIQ: Contractor CRM** (3,264 ratings, 4.72★) — estimates, follow-ups, close ratio, lost leads. Classification: **DIRECT.** URL: https://apps.apple.com/us/app/quotepulse-contractor-tracker/id6759159987 and https://apps.apple.com/us/app/quoteiq-contractor-crm/id1635217093

Bottom line: **no new BUILD emerged.** Every B2B/prosumer money-hook idea the weirdness round produced maps to an at-scale incumbent or a 2026 launch — the Round-11 clone-wave finding now re-confirmed on the B2B side.

---

## Part 5 — Strongest raw signals

1. **The clone wave extends to B2B/prosumer money-hooks.** Proof-of-work (CompanyCam 28.9k★, Timemark 13.8k★), quote/lead tracking (QuotePulse Feb 2026, QuoteIQ), and invoice+dunning (Invoice2go 55k★) all occupy cells the weirdness round independently re-derived. (FACT, App Store listings above.)
2. **The "host-buys-transparency" inversion (H2/B4) is the round's most interesting structural discovery.** It is the first mechanism found this program that *survives* the host-owns-correction kill rule by making the host the customer. It is not novel enough to build on its own — but it is the strongest reusable *mechanism* for any future wedge ("sell the party who owns the state the tool that makes their state visible").
3. **Two genuinely open micro-wedges remain, both thin:** (a) customer-facing verified-done + sign-off as a standalone solo-shop trust product (H2, PARTIAL vs CompanyCam); (b) vendor-neutral claim-ready install files (B4, PARTIAL vs warranty-co technician apps). Both are "feature vs suite" fights, not empty cells.
4. **The user-instrumentable process tracker (A1/I4) is truth-clean but consumer-won't-pay** — it stays alive only as the round's process-tracker deep-dive, not as a Shipaton build. Consistent with Round-12's H1 hypothesis.
5. **Negative confirmation, high confidence:** we produced 42 divergent ideas across 10 deliberately alien lenses and every monetizable one died on an incumbent or a truth rule. Weirdness did not find the cell Round-11 missed — reinforcing that Round-11's SnapInvoice (76/100) is the best surviving money-hook and should absorb the H1 voice-intake differentiator rather than be displaced.

---

*The single strangest idea that survived screening: **B4** — the fix for home-warranty denials is not the homeowner's shoebox; it is selling the contractor a claim-ready install record built at origin, so the warranty company's "no records" denial physically cannot be made.*
