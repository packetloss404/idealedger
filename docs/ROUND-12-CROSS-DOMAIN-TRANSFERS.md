# Cross-Domain Transfer Scan — Shipaton 2026

Researcher: CROSS-DOMAIN TRANSFER. Method: repeatedly ask **"What mechanism is completely normal in Industry A but strangely absent from Industry B?"** 30 distinct transfers below, each with (a) mechanism, (b) source industry, (c) destination, (d) product hypothesis, (e) phone-surface verdict, (f) evidence label + URL, plus risk notes against the known killers (two-party cold start, false certainty, host-owns-correction, native substitute, low frequency).

## Evidence honesty note

- All search engines (DuckDuckGo, Bing web, Mojeek, Startpage, Bing RSS) returned bot-challenges or garbage this session; evidence below was gathered by fetching primary-source URLs directly. **FACT-VERIFIED** = page fetched and read this session. **HIGH-CONFIDENCE** = widely-known stable URL, not fetched (404/403'd on guessed deep paths). `—` = no convincing URL found after trying (name the attempts).
- 11 transfers carry a URL backing the destination-side pain (counted in each entry). Only 8 pages were confirmed live by fetch; the FTC + Freelancers Union pages (entries 8, 10, 11, 12) were fetched successfully, giving 10 live-verified destination-pain URLs.

---

## The 30 transfers

### 1. HACCP temperature + corrective-action logs → small independent restaurants
- (a) **HACCP CCP logs**: continuous monitoring of critical control points with critical limits and a written corrective-action record. (b) Food service (regulatory, FDA Food Code). (c) Independent restaurant owners (1–3 walk-ins/line fridges).
- (d) Product: wireless probe(s) + phone hub that auto-logs open/close temps, flags breaches, and records the corrective action ("chick to the window at 11:04; moved to ice bath"). Paper log is legally required; app replaces it with zero-friction evidence.
- (e) **Phone right? Yes** — the phone is the hub/alarm surface; probes are cheap; owner already carries it. Daily multi-use (open/close/final).
- (f) FACT: FDA Food Code mandates time/temp control + date marking — https://www.fda.gov/food/retail-food-protection/fda-food-code ; FACT (mechanism): https://en.wikipedia.org/wiki/Hazard_Analysis_Critical_Control_Point (HACCP principles incl. monitoring + corrective actions).
- Risks: **host-owns-correction** (health inspector owns the verdict; but the *owner* owns the corrective action — low risk), native substitute (paper + $20 probe thermometer; POS add-ons), false certainty (must keep "unlogged = unknown" states, never auto-claim compliance). **B2B, prosumer, pays fast** — best monetization profile of the list.

### 2. HACCP-for-building-water (Legionella control) → aging buildings / home water systems
- (a) Risk-based water safety monitoring (flush schedules, temp checks, verification logs). (b) Healthcare/building engineering (NSF cert programs; adapted HACCP). (c) Property managers of older buildings; homes with tanks/point-of-use heaters.
- (d) Product: per-system flush/test schedule with time-stamped log and a "verification due" clock; surfaces unknowns rather than verdicts.
- (e) Phone right? Partial — reminder+log is fine, but the *authoritative* temp/chlorine reading is a physical sample. Phone is secondary.
- (f) FACT (mechanism): HACCP adapted to building water systems, Legionella/Pseudomonas focus — https://en.wikipedia.org/wiki/Hazard_Analysis_Critical_Control_Point . Destination pain: INFERENCE (CDC Legionella page 403'd on fetch; no direct URL confirmed).
- Risks: **low frequency** (semi-annual), false certainty (no measuring on phone), host-owns-correction (facility engineer). Weak — listed for breadth.

### 3. MEL (minimum equipment list) deferral → deferred home/car repairs
- (a) **Legal deferral list**: catalog of "broken but tolerable now" items, each with a hard correction deadline and monitoring interval. (b) Aviation (FAA MMEL/MEL). (c) Homeowner/vehicle owner who lives with known defects.
- (d) Product: a "defer board" — photo a defect, tag it "deferred until X date because Y," phone nags as the deadline approaches, distinguishes *deferred* from *forgotten* from *untriaged*. The insight: aviation's rigor ("you may fly with it only until 10 cycles/5 days, then it must be fixed") is absent from households where broken things rot for years.
- (e) Phone right? **Yes** — capture happens at the thing (attic, garage, under sink); nags are push.
- (f) FACT (mechanism): deferrals allowed only with time/cycle limits + monitoring intervals — https://en.wikipedia.org/wiki/Master_minimum_equipment_list . Destination pain: INFERENCE (no verified URL; deferred-repair burden is common knowledge, unquantified here).
- Risks: low frequency per item (but *many* items per household → aggregate recurring), native substitute (Notes/Reminders), single-user ✓, no false certainty ✓. Distinctive, defensible mechanism.

### 4. NOTAM-structured route hazard notices → daily commute hazard digest
- (a) **NOTAM**: machine-read structured, dated hazard bulletins for a route/location that users must check before departure. (b) Aviation (ICAO/FAA). (c) Commuters (closures, construction, events, disabled signals on their daily route).
- (d) Product: subscribe to "NOTAMs for my 3 regular routes" — a reformatted, deduped, expiring digest (start/end times in B/C fields, the modern version of "the whole reason this exists is that raw notices are garbage").
- (e) Phone right? **Yes** — notification-first, checked at departure.
- (f) FACT: NTSB chair 2018: NOTAMs are "a bunch of garbage that nobody pays any attention to"; NTSB said they were unintelligible and ignored; 2023 FAA NOTAM outage grounded all US flights; a 2023 law + FAA modernization followed — https://en.wikipedia.org/wiki/NOTAM . Destination pain: INFERENCE (commuter closures unverified — no search engine).
- Risks: **host-owns-correction** (DOT/511 own closure data), **native substitute** (Google Maps live closures, Waze), two-party ✓ (single-user). This transfer's *surprise value* is high; product moat is low.

### 5. Expiry/lot dating (pharma + retail) → home medicine cabinet
- (a) Universal expiration dating + disposal routing. (b) Pharma/retail. (c) Home meds (Rx + OTC), pet meds.
- (d) Product: photo bottle → parse EXP → shelf-life-aware inventory with correct disposal instruction (FDA flush list vs take-back vs trash).
- (e) Phone right? **Yes** — camera + disposal location lookup (DEA).
- (f) FACT: FDA: expired meds can be less effective/risky; 36,564 ED visits in 2020 among ≤5yo for unsupervised medication exposure; DEA take-back search — https://www.fda.gov/drugs/safe-disposal-medicines/dont-be-tempted-use-expired-medicines .
- Risks: low frequency (scan-once), native substitute (Calendar/Reminders — the ledger already killed "subscription reminders" for this reason), false certainty (EXP≠safety; storage matters). Weak alone; survives only inside a bigger med/care product.

### 6. Beyond-use date after opening (pharmacy compounding) → opened meds / formula / OTC
- (a) **BUD**: once a container is opened/reconstituted its useful life shrinks from the label EXP. (b) Pharmacy. (c) Parents (infant formula), caregivers, campers.
- (d) Product: "opened-on" stamping → valid-until recomputation per item class.
- (e) Phone? Yes (capture), but trivial.
- (f) FACT (mechanism concept): FDA notes improper storage degrades pre-EXP products — same URL as #5. BUD specifics: INFERENCE (pharmacy compounding rules not fetched).
- Risks: false certainty (degradation is a probability, not binary), low frequency, native substitute (Sharpie). Weak — included for breadth.

### 7. Demand response / Flex Alert (grid) → home energy-shift coach
- (a) **Demand response**: operator broadcasts "avoid heavy load now" windows; households shift appliance use. (b) Utilities/grid operators. (c) Households on TOU plans / EV owners.
- (d) Product: appliance-sequencing advisor — "run the dryer before 4 pm; precool now; delay EV charge to 11 pm" — mapped to *your* schedule and *your* rate.
- (e) Phone? **Yes** — real-time alerts + smart-plug control.
- (f) FACT: California ISO Flex Alerts exist, with explicit pre/during actions (precool, delay major appliances, AC to 78°) — https://www.flexalert.org/ . FACT/CAUTION: consumer demand-response app OhmConnect is **closing after 10 years** — https://www.ohmconnect.com/ . OhmConnect's closure is strong NEGATIVE evidence for standalone consumer energy apps.
- Risks: **native substitute** (utility apps, smart-thermostat Eco+, OhmConnect's death), **host-owns-correction** (meter/utility owns truth), false certainty (savings claims), frequency moderate. Include with a big warning.

### 8. Structured dunning / collections escalation (billing) → freelance and small-service receivables
- (a) **Dunning**: polite, timed, escalating payment nudges with a paper trail, rather than one awkward ask. (b) Billing/credit & collections. (c) Freelancers, contractors, tutors who invoice informally (email/text, no FreshBooks).
- (d) Product: "dunning agent" — at invoice creation it schedules a cadence (day 7 soft ping, day 14 firmer, day 21 with late-fee note), all texts, with a proof-of-sent log for disputes.
- (e) Phone? **Yes** — texts are the nudge channel; the freelancer lives in the phone.
- (f) FACT: Freelancers Union runs a "World's Longest Invoice" tracker showing **$13,691,374+ in unpaid bills** and "Stiffed by a Client? Add Your Name" — https://www.freelancersunion.org/ ; FACT: "Freelance Isn't Free" laws (NYC-style, now multi-state) give written-contract + payment-timeline rights — https://www.freelancersunion.org/freelancing-in-america/ .
- Risks: **host-owns-correction** (payment happens in the client's bank, not your app), **native substitute** (FreshBooks/QuickBooks/HoneyBook ship dunning), two-party ✓ (single-user), false certainty ✓ (a nudge is not a claim). Frequency: monthly-recurring for active freelancers. **Top-3 candidate overall.**

### 9. Airline yield/revenue management → local-marketplace sellers
- (a) **Yield management**: price adjusts as time-to-deadline shrinks (load × time-to-departure). (b) Airlines. (c) FB Marketplace / Craigslist / Nextdoor sellers (furniture, cars, gear).
- (d) Product: set "price now," "price-to-move-by date," and a floor → app auto-reprices and re-shares on a cadence ("day 5: −10%, day 10: −25%"), with a no-show-aware meetup playbook.
- (e) Phone? **Yes** — listings are phone-native; reposting is a manual phone chore today.
- (f) FACT (mechanism): airline yield management is textbook — `—` (no URL fetched; search engines blocked). Destination pain: INFERENCE (no verified URL; r/FacebookMarketplace is the natural evidence, Reddit is login-walled here — attempted old.reddit.com, returned auth wall).
- Risks: **native substitute** (eBay has built-in auto-markdown; FB does *not*, which is the gap), two-party ✓ (buyers don't install anything), false certainty ✓ (price is the seller's), frequency: moderate-high for active sellers. Solid single-user B2C; medium evidence.

### 10. Construction punch list / final walk → rental move-in/move-out inspection
- (a) **Punch list**: a bounded, dated, itemized defect list with evidence before sign-off. (b) Construction/GC. (c) Renters moving in/out; security-deposit disputes.
- (d) Product: room-by-room timestamped photo/notes walk → a tidy evidence dossier you can hand the landlord (or a judge); never a "verdict," always a log.
- (e) Phone? **Yes** — camera + checklist is the whole job.
- (f) FACT: FTC runs a 1,408-alert consumer-advice hub covering renting/moving and car topics (fake rental listings alert, e.g., military moves) — https://consumer.ftc.gov/consumer-alerts . Deposit-deduction disputes: INFERENCE (Nolo security-deposit page 404'd on fetch; no URL confirmed).
- Risks: **two-party adoption** (landlord won't co-sign — but value is single-user evidence), low frequency (~1/yr per mover, but *every* move), false certainty (must not present a log as proof-of-safety — it's evidence, and evidence is honest). Native substitute: none dominant. Solid but event-driven.

### 11. Chain-of-custody evidence handling (forensics/legal) → consumer warranty & return claims
- (a) **Chain of custody**: dated, attributable record of every piece of evidence from first observation to submission. (b) Forensics/legal. (c) Consumers pursuing warranty/return/chargeback claims.
- (d) Product: one "claim dossier" per item — photos, unboxing video, chats with support, order receipt, all in a dated timeline, exportable as a PDF for the manufacturer.
- (e) Phone? **Yes** — camera-first.
- (f) FACT (destination pain context): FTC consumer-alerts hub is full of dispute/denial-adjacent advice — https://consumer.ftc.gov/consumer-alerts . Warranty-denial-for-missing-docs: INFERENCE (Magnuson-Moss/consumer.ftc.gov deep pages 404'd/403'd; no URL confirmed).
- Risks: low frequency, **host-owns-correction** (manufacturer decides), false certainty (organizing evidence ≠ winning the claim — keep it neutral). Weak standalone; good as a module.

### 12. Title search / lien check (real estate closing) → private-party used-car deals
- (a) **Title/lien diligence + closing checklist** before money moves. (b) Real estate/title insurance. (c) Private-party car buyers; small used-car dealers (prosumer).
- (d) Product: buyer-side dossier — title status check, odometer consistency across service photos, seller identity cross-check, staged payment advice; explicitly marks "cannot verify" states.
- (e) Phone? **Yes** — photos at the meetup; dealers do 20+ deals/month.
- (f) FACT: FTC consumer hub has a dedicated "Buying and Owning a Car" topic — https://consumer.ftc.gov/shopping-and-donating/buying-and-owning-car ; odometer fraud is a known NHTSA enforcement area (URL 403'd on fetch; listed HIGH-CONFIDENCE).
- Risks: **false certainty** (verifying documents ≠ verifying the car — must surface unknowns), native substitute (Carfax/VINCheck cover the *history* but not the *deal process*), frequency: low for consumers, **recurring for small dealers** → pivot to prosumer/B2B. Medium-strong.

### 13. Weight & balance / load planning (aviation, maritime) → moving trucks / trailers / roof racks
- (a) Pre-departure load distribution planning with a stability check. (b) Aviation/maritime. (c) DIY movers, trailer/boat/RV owners.
- (d) Product: tell the app your truck + items → load-order and axle-weight advice + a pre-departure checklist.
- (e) Phone? Yes (camera + checklist), but a scale is the real sensor.
- (f) `—` no convincing URL found (searched: NHTA/HAZMAT and moving-gov sources returned 403/404). Destination pain: HYPOTHESIS.
- Risks: **low frequency**, false certainty (weight estimation is guesswork without a scale), shallow. Breadth pick.

### 14. N+1 redundancy planning (data centers) → household critical-single-point-of-failure audit
- (a) **N+1**: you run one spare for anything that kills you if it fails (fuel, battery, pump, contact). (b) Data centers/power. (c) Households with freezers, sump pumps, meds-needing-fridge, EV commuters.
- (d) Product: "what's your N+1?" audit + battery/battery-test schedule + a per-item runbook for a failure.
- (e) Phone? Partial — sensor hub + reminders.
- (f) FACT (destination pain): FEMA/Ready: fridge stays cold ~4 h, full freezer ~48 h, toss at ≥40 °F, monitor with a thermometer, keep battery-backup CO detectors — https://www.ready.gov/power-outages .
- Risks: low frequency, native substitute (smart plugs/sensors), shallow. Weak alone; pairs with #15.

### 15. Power-outage food disposition decision table (USDA/FDA) → freezer/fridge "what do I toss" app
- (a) A stable, rules-based disposition table keyed to measured temperature and time. (b) USDA/FDA/emergency management. (c) Households during outages.
- (d) Product: on outage-start, tap once → app tracks elapsed time + lets you log fridge/freezer temp → per-item toss/keep verdicts with the 40 °F / 2-hour rule.
- (e) Phone? **Yes** — timer + decision tree at the fridge.
- (f) FACT: Ready.gov power-outage guidance: throw out food exposed to ≥40 °F for 2+ hours; "when in doubt, throw it out"; monitor temps with a thermometer — https://www.ready.gov/power-outages .
- Risks: **low frequency** (2–3 outages/yr), false certainty (item-level judgment needs human sniff-check; the *rule* is the invariant, not the verdict — durable-truth rule #6 actually favors this one). Nice stable-invariant demo, weak recurring demand.

### 16. Scheduled maintenance/test cycles (aviation, rail, CO-detector guidance) → home appliance & safety-device care
- (a) Interval-based inspection/testing with procedure steps and recertification dates. (b) Aviation/rail/OSHA. (c) Home HVAC, sump pumps, CO/smoke detectors, water heaters.
- (d) Product: per-appliance maintenance calendar with test-procedure videos and "certified by whom" notes; nags on cadence.
- (e) Phone? Yes (nags + video).
- (f) FACT (related): Ready.gov insists on working battery-backup CO detectors every level — https://www.ready.gov/power-outages . Appliance-maintenance pain: INFERENCE, no URL confirmed.
- Risks: **native substitute** (Calendar/Reminders — same killer as subscription reminders), low frequency per item, host-owns-correction (manual says it; the *owner* executes). Weak.

### 17. On-call rotation + escalation ladder (IT/healthcare) → household "who's on call" (school pickup, elderly parent, pet)
- (a) On-call schedule with defined escalation if the primary doesn't answer. (b) IT ops/medicine. (c) Families with elderly parents, kids' pickup, pet care.
- (d) Product: rotating on-call calendar + escalate-to-backup.
- (e) Phone? Yes (SMS), but...
- (f) `—` no URL (Reddit/forums login-walled; search engines blocked). Destination pain: INFERENCE.
- Risks: **two-party adoption cold start** (all members must adopt — the ledger already killed family-coordination generalists and check-in taps). Listed as a *dead by two-party* exemplar.

### 18. Blameless incident postmortem (SRE) → family/household "what went wrong" review
- (a) Post-incident blameless analysis with an action list. (b) SRE/incident management. (c) Households.
- (d) Product: after a disaster (missed deadline, flooded basement, kid sent to school on a holiday), run a 5-question postmortem.
- (e) Phone? Yes but optional.
- (f) `—` no URL. Pain: HYPOTHESIS.
- Risks: **low frequency**, fake ritual (nobody postmortems Thanksgiving), journal-like (prior ledger killed journal). Dead.

### 19. Construction change-order management → renovation disputes with contractors
- (a) Formalized change requests vs. original scope/quote, with approval. (b) Construction. (c) Homeowners renovating.
- (d) Product: log every change ("move this outlet") with cost impact and approval status; time-stamped.
- (e) Phone? Yes (photo + capture).
- (f) `—` no URL (contractor-review sources not fetched). Pain: INFERENCE.
- Risks: **two-party adoption** (contractor must accept the tool or the log is one-sided), **host-owns-correction** (contractor's shop owns the work). Medium-quality mechanism, dead adoption curve for consumers; would need the GC as the paying customer (B2B flip).

### 20. Factory/clinical shift-handover log → nanny / part-time caregiver handover
- (a) Structured end-of-shift handover (what happened, what's pending, what to watch). (b) Manufacturing/healthcare. (c) Nannies, home-health aides, pet sitters.
- (d) Product: a 3-field handover the caregiver fills at swap; parent reviews.
- (e) Phone? Yes (chat-like).
- (f) `—` no URL. Pain: INFERENCE.
- Risks: **two-party adoption** (caregiver must adopt; paid caregiver *might*, but the ledger already flagged caregiver handoff + family coordination as defeated). Dead unless the agency pays (B2B).

### 21. Hotel housekeeping status board → Airbnb / STR host turnover
- (a) Room-status board (vacant/occupied/cleaning) + per-room inspection checklist. (b) Hospitality. (c) Airbnb/short-term-rental hosts and their cleaners.
- (d) Product: turnover checklist per reservation with photo proof of cleaning; "room status" for multi-unit hosts.
- (e) Phone? **Yes** — cleaners work phone-first.
- (f) `—` no URL (hosting-forum sources not reached). Pain: INFERENCE.
- Risks: two-party (cleaner must use it), native substitute (Airbnb co-host checklists), frequency recurring for active hosts (prosumer). Pivot: sell to *cleaning crews*, not hosts.

### 22. Minimum fuel reserves + alternate planning (aviation) → EV road-trip range planning
- (a) Mandated fuel reserve + preplanned alternates before dispatch. (b) Aviation. (c) EV owners on trips.
- (d) Product: trip planner that bakes in a reserve margin and a pre-checked alternate charger per leg, nudges "your reserve is gone."
- (e) Phone? **Yes** — in-car phone is the nav.
- (f) `—` no URL (AAA/EV range stats not fetched; search engines blocked). Pain: INFERENCE.
- Risks: **native substitute** (ABRP, PlugShare, Tesla/Google nav all do reserves), false certainty (range is weather-dependent; must show unknowns). Include as breadth; the mechanism is real but the seat is taken.

### 23. Voyage plan + float plan (maritime) → recreational boaters/sailors
- (a) Filed voyage plan + float plan (who to notify, when, and what to do if overdue). (b) Commercial maritime. (c) Sail/power boaters.
- (d) Product: pre-departure plan (weather window, fuel, gear, "notify X by Y"), auto-shared to a contact, overdue escalation.
- (e) Phone? **Yes** — offshore sat/marine phones, but for coastal, phone is fine.
- (f) `—` no URL (USCG aux sources not fetched). Pain: INFERENCE.
- Risks: **two-party adoption** (the notify-contact must act — but low-effort), low frequency (weekends seasonally), native substitute (paper + VHF radio culture), false certainty (weather). Niche; include for breadth.

### 24. Emergency Medical Dispatch triage scripts (911/EMS) → home first-aid decision trees
- (a) Scripted interrogation to triage severity before dispatch. (b) 911/EMS. (c) Households.
- (d) Product: "talk me through it" first-aid flow (e.g., is the airway clear? breathing? pulse?).
- (e) Phone? Yes, but...
- (f) `—` no URL. Pain: INFERENCE.
- Risks: **false certainty** (a consumer triage that says "green" is exactly the kill rule — never turn uncertainty green; also liable), **host-owns-correction** (EMS/doctors own the decision). Listed as *dead by false certainty* exemplar.

### 25. Pharmacist drug-interaction & dose verification (pharmacy) → OTC/supplement combos at home
- (a) Interaction/dose double-check before dispensing. (b) Pharmacy. (c) Elderly/polypharmacy households, supplement-stack users.
- (d) Product: scan bottles → interaction check + "ask a pharmacist" flag.
- (e) Phone? Yes (camera).
- (f) `—` no URL (interaction DBs are licensed/proprietary). Pain: INFERENCE.
- Risks: **false certainty** (medical/legal truth — the ledger's hard no for pretending inference is proof), **host-owns-correction** (pharmacist/MD). Dead unless it only escalates to a human (then it's a wrapper).

### 26. "Danger zone" food timing (food service) → parties, picnics, BBQs
- (a) The 40–140 °F danger zone + 2-hour cumulative rule. (b) Food service (ServSafe). (c) Hosts at cookouts/parties.
- (d) Product: per-dish countdown timers ("potato salad out 3 h 10 m — move or toss"), with a guest-count planning assist.
- (e) Phone? **Yes** — it's a timer at the table.
- (f) FACT: 40 °F / 2-hour rule stated as federal guidance — https://www.ready.gov/power-outages . ServSafe source: HIGH-CONFIDENCE (fsis.usda.gov 403'd on fetch).
- Risks: low stakes (a bad potato salad is not a fine), low frequency (seasonal weekends), shallow, native substitute (kitchen timers + common sense). Fun demo; weak product. No false certainty ✓, single-user ✓.

### 27. FIFO stock rotation (grocery/retail) → home pantry & fridge
- (a) First-in-first-out rotation with use-by visibility. (b) Retail/grocery. (c) Households.
- (d) Product: pantry rotation + "eat this first" list.
- (e) Phone? Yes (photo).
- (f) `—` no URL (see #5's FDA URL for the underlying expiry problem — counts as shared evidence).
- Risks: **already-defeated in the ledger** (receipt scanner, photo→AI→save report, pantry organizers all rejected), native substitute (visible shelves), low frequency. Dead.

### 28. Instrument calibration schedules (laboratories) → home measurement devices
- (a) Due-date-based recalibration registers with traceable stickers. (b) Labs/QC. (c) Home BP cuffs, kitchen scales, tire gauges, CO detectors.
- (d) Product: register your devices → "recalibrate/test by date" reminders with how-to.
- (e) Phone? Yes (nags), trivial capture.
- (f) FACT (adjacent): CO detectors need working batteries — Ready.gov — https://www.ready.gov/power-outages . Calibration pain: INFERENCE, no URL confirmed.
- Risks: low frequency, **native substitute** (Calendar/Reminders), false certainty (a "calibrated" label on a cuff is a claim). Weak.

### 29. Alarm annunciator panel (power plants, vessels) → home safety-alarm aggregation
- (a) One panel listing every active alarm with severity, not a wall of unrelated beeps. (b) Power/process plants, vessels. (c) Smart homes with smoke/CO/water-leak/garage sensors.
- (d) Product: unified "what is actually alarming right now" view + who to call per alarm.
- (e) Phone? **Yes** — replaces fragmented vendor apps.
- (f) `—` no URL. Pain: INFERENCE (smart-home fragmentation is common knowledge; HomeKit/Alexa partially solve it).
- Risks: **native substitute** (HomeKit, Alexa, Hubitat, Google Home all own the hub role — a phone checker here is a feature, not a product, per rule 8), low frequency. Dead as standalone.

### 30. FOD (foreign object debris) sweep (aviation) → pre-event kid-safe home sweep
- (a) Systematic pre-movement walkdown for hazards. (b) Aviation ramp ops. (c) Parents before playdates/babysitters leave; hosts before parties.
- (d) Product: 5-minute "FOD sweep" checklist with a timer and a clean-latex-glove finish photo.
- (e) Phone? Yes (timer+checklist), but trivial.
- (f) `—` no URL. Pain: HYPOTHESIS.
- Risks: **low frequency**, fake ritual, shallow, no real invariant. Breadth/fun pick — the mechanism is a fun metaphor but the "problem" is not a real cost center. Include to show range.

---

## Highest-value transfers (top 8, ranked)

Ranking = pain evidence (URL-backed) + phone-native advantage + single-user feasibility + no false certainty; bonus for business/prosumer payers per ledger rule 12.

1. **#8 Dunning → freelance receivables.** Pain is *quantified* ($13,691,374+ unpaid across the union's tracker, https://www.freelancersunion.org/ ), phone-native (SMS nudges), single-user, no false certainty (a nudge is not a claim), monthly-recurring, freelance = business-like payer. Watch: FreshBooks/QuickBooks already own integrated dunning — win on the *informal-invoice* segment and on the evidence log.
2. **#1 HACCP temp logs → small restaurants.** Legally required log (FDA Food Code URL), daily multi-use, single-user (owner), B2B-paying, no false certainty if unknown-state-first. Watch: paper + probe thermometers are the incumbent; POS add-ons own the counter.
3. **#9 Yield management → local-marketplace repricing.** The gap is real (FB/Craigslist have no auto-markdown; eBay does), single-user, phone-native listing workflow, price is yours (no false certainty). Watch: platform may ship the feature; two-party not an issue.
4. **#12 Title/lien dossier → used cars.** FTC has a dedicated car-buying topic (URL verified); odometer fraud is real; phone-native meetup workflow; single-user; unknown-states-first keeps it honest. Watch: Carfax owns the *history* — own the *deal process*, and pivot to small dealers (monthly frequency + B2B).
5. **#10 Punch list → move-in/move-out evidence.** FTC renting/moving alerts verified; camera-first; single-user evidence log (no false certainty as long as it's evidence, not verdict); every mover is a customer, ~yearly. Watch: low frequency per user; landlord won't adopt.
6. **#3 MEL deferral → deferred repairs.** The mechanism is genuinely foreign to households (aviation says: defer *with a deadline*); capture-at-the-thing is phone-native; single-user; deferral honesty = no false certainty. Watch: frequency per item is low; native substitute is a Notes file.
7. **#26 Danger-zone timers → party/BBQ food.** Federal 2-hour/40 °F rule is URL-backed and a clean invariant; phone-native timers; single-user; no false certainty. Watch: low stakes and shallow depth — it's a demo magnet, not a revenue engine.
8. **#4 NOTAM digest → commute hazards.** The "bunch of garbage" quote (NTSB chair, verified via Wikipedia/NOTAM) is the exact disease, and the FAA's own modernization (2023 outage → law → new service) proves demand for *fixing raw notice dumps*. Phone-native, single-user. Watch: Google Maps/Waze own closures; data lives with DOT → host-owns-correction risk is the binding constraint.

Runners-up that missed the top 8: #7 demand response (real evidence but OhmConnect just died → category warning), #15 power-outage toss/keep (best invariant on the list, worst frequency), #5/#6 meds (native-substitute + low frequency).

## Strongest raw signals (max 8, each with a URL)

- Freelance non-payment is quantified and organized (a running $13.7 M+ unpaid-bills ledger + Freelance Isn't Free laws) — the informal-invoice segment has no dunning. https://www.freelancersunion.org/
- Federal government *actively runs* consumer education for exactly the disputes a dossier tool would serve (1,408 alerts; car-buying and rental/moving topics). https://consumer.ftc.gov/consumer-alerts
- Aviation's own regulator says its hazard-notice system is "a bunch of garbage that nobody pays any attention to" (2018 NTSB), then 2023's NOTAM outage grounded US flights and forced a modernization law — raw notice dumps fail; reformatted, dated, deduplicated notices win. https://en.wikipedia.org/wiki/NOTAM
- FDA: expired meds are risky and disposal routing is confusing (DEA take-back vs flush list); 36,564 ≤5yo ED visits/yr for unsupervised exposure. https://www.fda.gov/drugs/safe-disposal-medicines/dont-be-tempted-use-expired-medicines
- FEMA/Ready publishes precise, simple disposition rules (fridge 4 h, full freezer 48 h, toss ≥40 °F / 2 h) that households must execute manually under stress — a stable invariant with no app owning it. https://www.ready.gov/power-outages
- HACCP-style monitoring+corrective-action logging is *legally mandatory* for retail food yet the log remains paper/probe in most small restaurants. https://www.fda.gov/food/retail-food-protection/fda-food-code
- Grid operators broadcast "shift your load" windows (Flex Alert) and a consumer DR app still died after 10 years — demand-response demand is real but standalone consumer energy apps are a graveyard. https://www.flexalert.org/ + https://www.ohmconnect.com/
- MEL shows an entire safety culture that says "you may run broken, but only until X, then it must be fixed" — no consumer equivalent exists for deferred home/car repairs. https://en.wikipedia.org/wiki/Master_minimum_equipment_list

## Surprising factual discovery (for the coordinator)

The NTSB chairman publicly called NOTAMs "a bunch of garbage that nobody pays any attention to" in 2018; five years later the NOTAM system *failed and grounded every US flight*, and Congress passed a modernization law. The single most safety-critical notice channel in the world was drowning in low-signal noise — which is the exact condition ordinary commuters live in every morning with road-closure feeds, and why "reformatted, dated, deduplicated route notices" (transfer #4) is the most surprising of the 30 even though its moat is weak.
