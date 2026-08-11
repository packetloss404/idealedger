# Simulated Focus Groups FG13–FG18 — Shipaton 2026 Research Notes

Status: SIMULATED. These are persona-hypothesis generators, NOT real interviews. No persona language is quoted as real. Every claim is labeled FACT (URL-verified this session), INFERENCE, HYPOTHESIS, or SYNTHETIC FEEDBACK. Simulated reactions are always marked SYNTHETIC FEEDBACK.

Common killing-pattern flags used below: **two-party adoption** (network cold start), **false certainty** (pretending an inference is proof), **host-owns-correction** (the incumbent system owns the fix; a phone checker is a feature), **native substitute** (OS/incumbent already ships it), **commodity** ("make a better X" in a well-served category).

---

## FG13 — LOCAL SERVICE BUSINESSES
Room: owner, dispatcher, technician, customer, bookkeeper, supplier. Workflow held together with calls, texts, photos, memory.

### A. Participants & incentives
- **Owner**: maximize billable hours, get every job invoiced, keep customers from defecting. Incentive: money and reputation.
- **Dispatcher**: keep trucks busy, resolve same-day emergencies, keep owner from calling every hour. Incentive: peace, not owning the blame.
- **Technician**: finish jobs, not re-drive, get the right part the first time. Incentive: paycheck + not catching grief from a customer who waited.
- **Customer**: "when do you show up" + honest pricing. Incentive: certainty, no surprise invoices.
- **Bookkeeper**: turn the week's paper (weigh slips, photos, texts) into invoices + payroll. Incentive: accuracy, closing books on time.
- **Supplier**: move parts, avoid returns. Incentive: volume, but only if the order is right.

### B. Current workflow (today)
- Customer calls or texts the owner; owner forwards to dispatcher; dispatcher texts techs and asks "who's closest".
- Tech confirms by text, drives, takes photos with personal camera roll, texts the owner a garbled summary, sometimes emails.
- Parts: tech calls supplier from the job site, supplier emails a quote, owner approves by text from dinner; part arrives tomorrow → second trip.
- End of week: bookkeeper reconstructs invoices from weigh slips, phone screenshots, group texts, and memory. Some work never gets invoiced because the paper was lost in the truck.
- SYNTHETIC FEEDBACK (consensus mood): "the software we're 'supposed' to use costs more than our van; so we run it on texts and a whiteboard."

### C. Complaints (≥5 distinct)
1. **Callback loops** — verifying a tech received the job requires text→call→text; nobody has one truth of "who is going where when."
2. **Emergency schedule scramble** — an after-hours call-out re-shuffles a full day by phone, and customer ETAs are re-promised off the cuff.
3. **Parts/supplier round-trips** — tech is at the site, part is at the shop; ordering, approval, and delivery are three unlinked steps → second visit (the single biggest cost leak).
4. **Work not invoiced** — paperwork circulates physically (truck cab, glovebox) and fees customers were already charged for get forgotten; bookkeeper "discovers" missing revenue at close.
5. **Dispute reconstruction** — months later a customer disputes hours/parts; nobody has a timestamped record, so the owner eats the cost.
6. **Whiteboard as system of record** — a wiped whiteboard or a coffee-stained weigh slip silently destroys the week's dispatch.
7. **Bookkeeper archaeology** — converting photos, texts, and memory into books is night work, not bookkeeping.

### D. Contradictions
- **Owner vs tech on "logging work"**: owner wants every job documented; tech sees logging as unpaid admin and only half-does it.
- **Dispatcher vs owner on customer ETAs**: dispatcher wants to promise conservative times; owner promises aggressive times to win the job.
- **Customer vs owner on pricing**: customer believes the verbal quote is the final price; owner believes it was an estimate; dispute is resolved by whoever shouts loudest.
- **Supplier vs tech**: supplier wants a firm PO before shipping; tech just needs "the part," owner wants approval before cost hits.

### E. Incentive misalignment (who profits from the friction staying)
- **The owner's own laziness** — the "system of record" is their memory; switching tools threatens their control of information.
- **The tech** — untracked work means un-invoiced, untaxed, off-the-books revenue; ambiguity is mildly profitable and never audited.
- **The incumbent SaaS** — Jobber/ServiceTitan/Housecall Pro profit from the "you'll outgrow chaos" fear (see K).
- **The supplier** — opaque ordering means more expedite fees and emergency orders.

### F. Expensive friction (money spent because coordination is poor)
- **Second visits for parts** (fuel + labor) — parts, approval, and delivery are unlinked.
- **Un-invoiced revenue** — FACT-anchored: a dumpster owner says he loses money daily on tonnage fees he forgets to invoice because the paperwork "gets lost somewhere in the truck's cabin" and stays up to 1 AM re-entering Excel from a coffee-stained weigh slip (https://www.reddit.com/r/sweatystartup/comments/1uimeb0/ — retrieved via Arctic Shift archive 2026-08-10).
- **Write-offs on disputes** — no timestamped evidence → owner eats it.
- **Bookkeeper overtime** — reconstruction is night work.

### G. Phone opportunity (unique observe/capture/coordinate)
- The phone is already the tech's camera and the owner's second brain. It can capture: job-site photos with geotime stamps, weigh slips in one shot, arrival/departure timestamps via location, part photos at the supplier counter.
- It can *coordinate*: one live object per job (who's assigned, ETA, parts status, signed-off photos) that every party reads — without anyone adopting a whole scheduling suite.
- It can *attach to* the parts/quote/slip flow that today lives in texts.

### H. Existing behavior to attach to
- Techs already photograph everything on the job; owners already forward texts; the bookkeeper already screenshots weigh slips. "Sending a photo" is the existing ritual — an app only has to structure what people already send.
- SYNTHETIC FEEDBACK: "I already send him the photo; if it remembered the address and date I'd use it."

### I. Potential value moment
- The week-end invoice that *builds itself* from the photos/slips already exchanged, so the bookkeeper finds nothing "lost." Second candidate: the tech never makes a second trip because the part order was attached to the job.

### J. Idea seeds (unpolished)
1. **Job-photo-based job record**: forward/tap photos into a timeline per job; auto-stamp time/location; bookkeeper exports the week as invoice lines. (No scheduling module.)
2. **"Where's the part" board**: per-job parts request → supplier photo-quote → owner thumb-approve → delivery ETA, all in one thread; flags jobs waiting on parts so dispatch stops double-booking the site.
3. **Paper→invoice scanner**: point at weigh slip / invoice / signed receipt → line item into an export, matched against the job's photo set, so un-invoiced work surfaces instead of vanishing.
4. **Second-trip detector**: when a job gets a follow-up visit, surface "was this a parts/coordination failure?" as a cost line the owner can price into estimates.
5. **Dispute evidence pack**: on demand, one timestamped bundle (photos, slips, arrival GPS) to text the customer.

### K. External validation (strongest 2 pains)
1. **Pain: micro field-service ops run dispatch/invoicing on calls, texts, whiteboards, and paper; paid suites are skipped because they're too expensive/complex.**
   - FACT — r/sweatystartup, "Field service businesses - what do you use for scheduling/dispatch?": "Pen and paper / whiteboards?", "Google Calendar?", "I hear a lot about ServiceTitan being too expensive for smaller operations" (https://www.reddit.com/r/sweatystartup/comments/1pv2fnx/ — via Arctic Shift).
   - FACT — r/sweatystartup, "How are small HVAC/plumbing teams handling dispatch once spreadsheets get messy?": indie researcher reports trade businesses start on "calls, texts, a whiteboard, or a shared spreadsheet... once you hit 5-10 technicians, things seem to get chaotic," naming callback loops, schedule scramble, and customer ETA updates as the hard parts (https://www.reddit.com/r/sweatystartup/comments/1trufyw/ — via Arctic Shift).
   - FACT — Jobber pricing: Core $29/mo, Plus up to $529/mo, +$29/user/mo, card processing 2.9%+30¢ (https://getjobber.com/pricing/ — retrieved 2026-08-10). INFERENCE: for a 1–3 person op this is a real recurring cost vs. the free "texts and a whiteboard" status quo.
2. **Pain: revenue literally leaks because paperwork/evidence is lost between job site and books.**
   - FACT — r/sweatystartup dumpster thread: "I'm losing money daily on tonnage fees that I forget to invoice customers for because the paperwork circulates physically and gets lost somewhere in the truck's cabin"; 1 AM Excel entry from a coffee-stained weigh slip; whiteboard wiped mid-dispatch (https://www.reddit.com/r/sweatystartup/comments/1uimeb0/ — via Arctic Shift).

### L. Contradictory evidence (problem smaller than it looks)
- **The category is well-served** — Jobber has 20k+ pros in its own community and a $499/mo plan tier, ServiceTitan is a scaled public company; many small operators *are* happy paying because the ROI is proven (https://getjobber.com/pricing/). Any "better Jobber" is commodity.
- **"It's fine at our size"** — the HVAC thread itself says calls/texts/whiteboard "work great when you have 2-3 techs"; a large share of micro-ops are exactly that size and will never pay.
- **Incumbents already solve the photo/document part** — Jobber ships job photos, notes, time tracking, GPS, and QuickBooks sync on the mobile app (https://getjobber.com/pricing/ features list). The un-addressed wedge is *smaller* and *cheaper* than Jobber, not *better*.

### M. Research verdict — **promising (single-party, business pays, revenue-leakage anchor)**
Reason: single business owns all the data (no two-party cold start); the phone is already the tech's camera (no new ritual); the anchor pain (un-invoiced work, second trips) is money-losing and owned by a buyer who pays within days. Killers to watch: pricing must undercut Jobber's floor dramatically, and "photo job record" alone is a Jobber feature — the product must be the *revenue/parts* outcome, not the log.

---

## FG14 — IT / ON-CALL / TECHNICAL OPERATIONS
Room: sysadmin, support engineer, manager, end user, security engineer, vendor. BEYOND monitoring dashboards: handoffs, context loss, ownership, recurring incidents, access, reconstruction.

### A. Participants & incentives
- **Sysadmin (on-call)**: get paged, triage, get back to sleep. Incentive: resolution with minimal context-hunting.
- **Support engineer**: answer the ticket before the SLO. Incentive: not escalating to a groggy on-call at 3 AM.
- **Manager**: keep the schedule fair, keep incidents under budget. Incentive: fewer human hours per incident.
- **End user**: "is it broken, when will it be fixed." Incentive: a status answer, not a ticket number.
- **Security engineer**: verify nothing was compromised. Incentive: evidence + access controls, second to everything else.
- **Vendor**: sell the alerting/orchestration platform. Incentive: seat count and lock-in.

### B. Current workflow (today)
- Alert fires; on-call acks on the phone; but the fix lives on a laptop, behind VPN, in runbooks buried in Confluence.
- On-call reads the alert, finds the runbook stale, checks "who owns this service" in a wiki that's outdated, messages a teammate, waits.
- Incident chat happens in Slack; statuses get updated in two or three tools; the handoff summary at shift end is rewritten from scratch by the departing engineer.
- Recurring incidents get solved differently each rotation because the fix never made it back to the runbook.

### C. Complaints (≥5 distinct)
1. **Runbooks are stale** — the document says the old way; trust in it is gone, so every incident is re-investigated.
2. **Ownership unknown** — alert from "another team's service" and nobody reliable to ping; escalation is guesswork.
3. **Handoff is re-derived** — end-of-rotation summary written from memory; context dies when the author leaves.
4. **Phone ack ≠ phone fix** — the page is answered on the phone but the actual work needs a laptop + VPN; being "on call" means carrying a laptop everywhere.
5. **Recurring incidents re-solve themselves** — the fix from last month never reached the runbook, so the same P1 replays.
6. **Statuses scattered** — notes and status live in three systems; the manager assembles the timeline by hand afterward.
7. **No "what changed" signal** — on-call can't see if a recent deploy caused the alert without a separate archaeology session.

### D. Contradictions
- **Manager vs engineer on on-call cost**: manager counts "ack time"; engineer counts total context-hunting + disrupted evenings (carrying the laptop to dinner).
- **End user vs on-call**: user wants a status now; on-call refuses to say "fixed" until verified — information-asymmetry tension.
- **Security vs availability**: security wants the incident documented and access-logged before anything; on-call wants to stop the bleeding first.

### E. Incentive misalignment (who profits from friction staying)
- **The vendor** — more seats, more alerting volume, more dashboard SKUs; a "calm" shop buys less.
- **The stale-runbook author** — writing docs is unrewarded; being the only one who "knows" the service is job security.
- **The manager (mildly)** — undocumented tribal knowledge makes the team harder to leave.

### F. Expensive friction (money spent because coordination/context is poor)
- **MTTR from context-hunting** — every stale runbook and unknown owner adds engineer-hours (salary) per incident.
- **Re-remediation of recurring incidents** — the same fix done twice.
- **Post-incident reconstruction** — building the timeline from three tools costs senior time after the fact.
- **Handoff transcription** — rewriting the rotation summary is paid time that duplicates what was already typed.

### G. Phone opportunity (unique observe/capture/coordinate)
- The phone *is* the pager — it already acks. It can capture the incident timeline at the point of truth (who said what, screenshots of the error, timestamps) and, crucially, it is the device that's with the engineer when they're off the laptop.
- A phone-native *incident context card* (error text from the alert, recent deploys, owner list, one-tap "previous fix for this alert" lookup) attacks exactly the "no context at 3 AM" pain.

### H. Existing behavior to attach to
- Engineers already ack on the phone; they already screenshot dashboards; they already type "who owns this?" into Slack from their phone. Attach to the ack + screenshot ritual.

### I. Potential value moment
- The alert notification that arrives *already carrying* the previous fix for the same alert ID, so the 3 AM page becomes a 3:05 AM resolution. Second: the handoff doc that writes itself from the incident thread.

### J. Idea seeds (unpolished)
1. **Phone-native incident context card**: on page, show alert text + last-3 occurrences + the fix that worked last time + owner's current status; nothing else. (Aggregates what PagerDuty + Confluence already know.)
2. **Self-writing handoff**: from the on-call's own chat/screenshot stream, draft the rotation summary; engineer edits, doesn't transcribe.
3. **"Who owns this" resolver**: learned from past escalations, returns the current owner instead of a stale wiki.
4. **Recurrence watchdog**: when the same alert fires twice, flag "runbook not updated since last fix" and nag the fix author.
5. **What-changed digest**: on page, show "deploys touching this service in the last 24h" without a separate archaeology session.

### K. External validation (strongest 2 pains)
1. **Pain: on-call context loss — stale runbooks, unknown ownership, handoff docs re-written from memory.**
   - FACT — HN "On-call problems – here are mine. Do you feel the same way?" (2023): runbooks "not up to date," "I don't know whom to reach out to if this alert is from other team," "I have to summarize all the details again as a part of on-call handoff summary doc," "I have to go to multiple systems to update the statuses" (https://news.ycombinator.com/item?id=36426851 — via HN Algolia API, retrieved 2026-08-10).
   - FACT — Rootly Launch HN (2022) describes runbooks "buried away... on Confluence/Google Docs... hard to find, difficult to follow accurately, slow" and confirms the toolchain is the same 6 tools everywhere (https://news.ycombinator.com/item?id=31653985 — via HN Algolia).
2. **Pain: phone ack is shallow — real on-call work requires a laptop, so "on call" means carrying one.**
   - FACT — HN comment, "Breaking Up with On-Call" (2025): "We want to ack within five minutes, and be at a laptop within 30. So long as I'm within mobile signal... an ack is a button press on a push notification. And I can stay within 30 minutes of my laptop... by carrying said laptop and my phone" (https://news.ycombinator.com/item?id=43400055 — via HN Algolia).
   - FACT — HN comment, "What I tell people new to on-call" (2024): on-call pages teammates but they may be "on airplanes or go camping... he would probably have his phone (not laptop)" (https://news.ycombinator.com/item?id=41677572 — via HN Algolia).

### L. Contradictory evidence (problem smaller than it looks)
- **The space is aggressively served and host-owned** — PagerDuty, Opsgenie, incident.io, Rootly all sell exactly this, and Rootly reports "98% of our customers use PagerDuty" alongside them (https://news.ycombinator.com/item?id=31653985). Any phone app here is a *feature* of a platform the enterprise already owns — **host-owns-correction**.
- **People live with it** — the same HN thread's tone is "this is how on-call is," not "someone please fix the tooling."
- **SaaS revenue in this category is enterprise seat-based**; a consumer-priced mobile app would be out-bundled and out-sold.

### M. Research verdict — **weak for a standalone mobile product (well-served + host-owned); strong as a *feature***
Reason: every seed lands inside a platform the company already pays for (PagerDuty/Rootly/Slack). The "make a better incident tool" angle is commodity and requires enterprise sales in 6 weeks. The genuinely underexploited phone asset — context at the moment of the page — is real, but it's a feature, not a product. Killers: host-owns-correction, commodity.

---

## FG15 — CAREGIVING LOGISTICS
Room: older adult, adult child, family caregiver, professional caregiver, transportation provider, administrator. NOT diagnosis or medical decisions; coordination, logistics, records, communication, daily life.

### A. Participants & incentives
- **Older adult**: keep routine, don't be a burden, stay out of the hospital. Incentive: dignity + stability.
- **Adult child (remote)**: know what's happening without being there. Incentive: guilt reduction, avoiding a crisis call.
- **Family caregiver (local)**: run the meds/meals/appointments. Incentive: not dropping a ball; burnout relief.
- **Professional caregiver**: deliver care on someone else's schedule and standards. Incentive: doing the job right, documented so it counts.
- **Transportation provider**: shuttle to appointments. Incentive: on-time pickup, no missed connection.
- **Administrator**: keep the facility/home-care paperwork audit-clean. Incentive: compliance, staff hours, reputation.

### B. Current workflow (today)
- Meds: schedules live in the family's head, a sticky note on the fridge, and a pill organizer filled weekly by whoever remembers.
- Appointments: adult child books remotely, local caregiver takes the parent, driver waits; the note "she saw Dr. X" never makes it to the list of medications, which changes.
- Between professional and family caregivers: a paper handoff log, phone calls, or group texts; the family hears about missed doses days later, if at all.
- During a hospital/facility stay, the family's primary job becomes watching that the right things happen (see K evidence).

### C. Complaints (≥5 distinct)
1. **Medication schedule is tribal knowledge** — stored in heads and sticky notes; every handoff risks a missed or doubled dose.
2. **Shift-change information loss** — professional caregivers log in a paper book or group text; the family can't see today's reality from across town.
3. **Remote adult child runs on anxiety** — daily check-in calls to the parent to verify meds/meals/wellness; each call is a small surveillance ritual.
4. **Records scattered across providers** — transport, home care, facility, pharmacy each keep their own copy; nobody has one file.
5. **Emergency discovery too late** — the family learns of a fall or a missed appointment hours after the fact, by rumor.
6. **Appointment logistics cascades** — pickup, wheelchair, records, pharmacy refill each renegotiated by phone per event.
7. **Facility-level med errors the family has to police** — family sits at the bedside to ensure correct dosage, because the facility's own staff admit errors are routine (K).

### D. Contradictions
- **Adult child vs older adult**: child wants tracking/verification; parent resents being "monitored."
- **Family vs professional caregiver**: family wants documentation; caregiver wants to be trusted, not surveilled ("the camera in the room" tension).
- **Local vs remote family**: local caregiver resents doing the work the remote sibling "manages" from afar.
- **Administrator vs family**: the facility controls the record; the family wants the record — access fights.

### E. Incentive misalignment (who profits from friction staying)
- **The facility/agency** — opaque logs minimize their liability surface; a family-readable record exposes gaps (see the "small medication errors are made ALL the time" quote pattern).
- **The local caregiver** — fuzzy records keep their indispensable role irreplaceable.
- **The pharmacy/medical system** — reconciliation is someone else's problem.

### F. Expensive friction (money spent because coordination/records are poor)
- **Hospital readmissions from missed/doubled meds** at home transitions (a well-documented, expensive failure mode).
- **Transport no-shows / missed appointments** — each missed specialist visit is a paid slot gone.
- **The remote child's productivity** — hours on the phone verifying basics instead of working.
- **Private-duty watch** — families paying someone (or flying in) just to be a second pair of eyes.

### G. Phone opportunity (unique observe/capture/coordinate)
- The phone is the only device present at the moment of administration — it can timestamp "given/refused/skipped" with one tap or a photo of the organizer.
- It is the remote child's eyes: an ambient "today, so far" feed (meds given, meals, transport done) that answers the check-in question *without a call*.
- It can carry the care file (provider list, med list, transport contacts) across the facility→home boundary that no hospital system crosses.

### H. Existing behavior to attach to
- Family caregivers already photograph pill organizers and food; they already send "gave her meds at 8" texts; the adult child already calls daily to verify. Attach to the *existing confirmation text* and turn it into a timestamped log. SYNTHETIC FEEDBACK: "I already text my sister 'meds done'; if that became a record instead of a text I'd stop re-asking."

### I. Potential value moment
- The remote child's evening anxiety is answered by a passive "here's today's care timeline" instead of a call that wakes the parent. Second: the handoff between a paid caregiver and the family that needs zero re-explaining.

### J. Idea seeds (unpolished)
1. **One-tap "care tick" log**: the family/caregiver confirms each scheduled task (meds, meal, transport) with one thumb; remote family gets a digest instead of phoning. (Explicitly NOT medical advice — a record of what happened.)
2. **The handoff that re-explains itself**: at shift change, a machine-drafted "since you were last here" note from the tick log — kills the paper book and the 6 PM phone call.
3. **Care file on the phone**: med list + providers + transport + emergency contacts as a shareable one-pager for ER/facility/adult-child use (records portability, not diagnosis).
4. **Appointment logistics thread**: transport pickup + records + med refill for one appointment in one thread; no re-negotiation per event.
5. **"Who's covering Sunday" roster** for family shifts, so nobody silently assumes someone else did it.

### K. External validation (strongest 2 pains)
1. **Pain: family caregivers end up executing and policing medical logistics (including meds) because the "system" is unreliable.**
   - FACT — r/CaregiverSupport (2026): family member sits at the bedside daily because the facility gives "wrong dosage and/or medications"; the nursing supervisor says "small medication errors are made ALL the time and it's not a big deal"; staff "unaware" of why the patient was admitted (https://www.reddit.com/r/CaregiverSupport/comments/1vk2in8/this_nursing_home_is_horrible/ — via Arctic Shift).
   - FACT — r/CaregiverSupport (2026): a 20-year-old performs her mother's IV antibiotics at home while the mother's husband "absolutely refused to learn how to do her iv medication" (https://www.reddit.com/r/CaregiverSupport/comments/1vis0eh/breaking_cycles_are_important/ — via Arctic Shift).
   - FACT — NAC/AARP "Caregiving in the US 2025": 63 million Americans, 1 in 4 adults, are family caregivers; +20M since 2015; report adds a "Caregiving Complexity Index" (https://www.caregiving.org/research/caregiving-in-the-us/ — retrieved 2026-08-10).
2. **Pain: remote adult children coordinate daily life from a distance by surveillance phone calls.**
   - FACT — r/CaregiverSupport (2026): long-distance caregiver "monitoring all her bills and calendar to remind her of things," daily calls, and a local trusted helper who "was able to be subtle enough to 'play the game' to help my mom with things like her meds" because the parent refused help (https://www.reddit.com/r/CaregiverSupport/comments/1vj7wgt/i_guess_im_done_surreal_is_about_the_only_word_i/ — via Arctic Shift).

### L. Contradictory evidence (problem smaller than it looks)
- **Med-reminder apps are a graveyard** — r/CaregiverSupport even hosts indie devs self-promoting "free medication reminder app: Docsage" (removed post, https://www.reddit.com/r/CaregiverSupport/comments/1vjpdf5/i_created_a_free_medication_reminder_app_docsage/); the OS Reminders app is free. **Commodity / false-certainty** risk: a "medication app" that claims adherence is a false green; it can only be a log.
- **Family coordination generalists are defeated** — the shared ledger already killed family calendar/coordination apps for two-party adoption; a "care log" shared with a parent who won't touch a phone dies the same death unless the *professional caregiver* is the data entry point.
- **The professional's incentive is against it** — agencies prefer their own opaque system; families don't pay agencies, so the payer (family) doesn't control the record-holder (agency). **Host-owns-correction** risk.

### M. Research verdict — **uncertain (real, huge, evidence-backed pain; adoption and ownership unsolved)**
Reason: the pain is real and enormous (63M caregivers; real posts of families policing med errors). But the surviving wedge must avoid (a) med "reminder" false-certainty, (b) two-party family adoption, and (c) agency control of records. The most promising sliver is the *paid professional caregiver* as data-entry point with the *family* as reader — a two-sided commercial arrangement where the agency is the customer and the family gets the reading layer. That is a bigger deal than a 6-week app.

---

## FG16 — ACCESSIBILITY & INDEPENDENT LIVING
Room: mobility, vision, hearing, dexterity, cognitive accessibility needs + caregivers, businesses, transportation providers, accessibility specialists.

### A. Participants & incentives
- **Vision user**: get through apps, menus, transit that were never built accessibly. Incentive: do a normal task without a workaround.
- **Hearing user**: captions where none exist; announcements that aren't audible. Incentive: not missing a train/boarding/gate change.
- **Mobility user**: know the elevator/ramp/door actually works before leaving. Incentive: not burning a trip on a broken elevator.
- **Dexterity user**: one-handed/zero-hand input. Incentive: finish the task without pain.
- **Cognitive user + caregiver**: simplify what's overwhelming. Incentive: a task that doesn't fall apart at step 3.
- **Business**: comply, not get sued. Incentive: litigation avoidance (a different budget from "help people").
- **Accessibility specialist**: bridge between user and builder. Incentive: audits, testing contracts.

### B. Current workflow (today)
- Apps are tried, fail, and get deleted; the user keeps a mental list of "which apps work with VoiceOver/TalkBack."
- For a menu, a receipt, a sign: point the camera at it with Magnifier/OCR — the OS handles most of it.
- Transit: check the elevator status by phoning or by reading reviews, because the app is a wall of unlabeled buttons.
- Hearing: rely on apps/videos with captions; live environments (boarding calls, counter conversations) are missed.

### C. Complaints (≥5 distinct)
1. **"Does the app work with my screen reader" is the first question** — and the answer is often no; users maintain workaround lists.
2. **Third-party apps are the weak point, not the OS** — the OS tools (VoiceOver, Magnifier, Live Captions) are excellent; the ecosystem isn't.
3. **Broken infrastructure is discovered too late** — the elevator/ramp/accessible door is discovered broken at the destination.
4. **Live announcements aren't accessible** — transit and airport intercoms have no text; captioning stops at the station door.
5. **Every task is a multi-step workaround** — a grocery order, a doctor's portal, a parking payment: each is a separate accessibility gamble.
6. **"Accessible" versions are slower** — the accessible checkout flow is 4x the taps, when it exists at all.

### D. Contradictions
- **User vs business**: user wants the business to fix its app; business sees a compliance cost with no revenue line.
- **Specialist vs user**: specialists want standards compliance; users want "just make the thing I do daily work."
- **Advocacy vs product**: advocates push for regulation/OS-level fixes; a fast product bet says "the OS is fine, the ecosystem isn't" — and monetizing other companies' failures is a different model.

### E. Incentive misalignment (who profits from friction staying)
- **The litigation-avoidance industry** — ADA lawsuits and remediation shops profit from broken apps.
- **Businesses** — an accessible app costs money and doesn't show up on their P&L.
- **The platform vendors** — every "accessibility gap" is a reason to buy the next enterprise compliance tool.

### F. Expensive friction (money spent because coordination/information is poor)
- **ADA web/app litigation and settlements** — businesses pay large sums reactively (well-documented class of cost; the money is spent after failure, not on prevention).
- **Transport provider costs of missed/aborted trips** — a trip aborted at a broken elevator or a missed accessible van is a paid slot wasted.
- **Caregiver labor** — human readers/drivers/helpers hired to bridge gaps the software could close.

### G. Phone opportunity (unique observe/capture/coordinate)
- The phone *is* the assistive device: camera OCR, TTS, captions, haptics. It can *observe* the physical world (a menu, a sign, an elevator door) and the digital world (an app's accessibility) and *report* what it found.
- A phone can *coordinate* "before you leave" facts: elevator status, ramp, accessible checkout, transit line — answers that today require a call or a guess.
- Phone-only superpowers: offline OCR, live caption of a counter conversation, one-handed input mapping.

### H. Existing behavior to attach to
- Users already screenshot the screen reader's failure and send it to a friend; they already point the camera at menus/receipts; they already check accessibility reviews before buying. Attach to the *existing photo + "does it work?" ritual*.

### I. Potential value moment
- Point the camera at a menu → hear it read in the right order, once, with no app setup. Or: "I checked the elevator status, the accessible entrance, and ordered the groceries in 90 seconds without a workaround."

### J. Idea seeds (unpolished)
1. **"Does this app/task work" field guide**: community-voted accessibility verdicts per popular app/task, surfaced at the moment of need (like a Wikipedia of "how to actually do X with a screen reader").
2. **Before-you-leave accessibility check**: for a destination (store, clinic, station): elevator status, ramp, and accessible-service availability as a one-screen answer — crowd-updated.
3. **Live-caption companion**: a camera-overlay live captions layer for counters/classrooms/intercoms (attaches to the existing "point camera at it" ritual).
4. **Accessibility report card for a business**: the accessibility specialist's audit turned into a shareable consumer-facing score — monetized by the specialist, used by the user.
5. **One-tap structured photo task**: "photograph this receipt/menu/letter → get the text, the amounts, the due date spoken" as a single task, not a toolkit.

### K. External validation (strongest 2 pains)
1. **Pain: the phone is already the accessibility device, but third-party apps are the weak point — the ecosystem, not the tool.**
   - FACT — WebAIM Screen Reader User Survey #9 (2021): 90% of screen reader users use a screen reader on mobile; 71.9% primary platform iOS; users slightly prefer apps (51.8%) over web for daily tasks; 42.3% say web content accessibility "has not changed," 18.5% say it got worse (https://webaim.org/projects/screenreadersurvey9/ — retrieved 2026-08-10). INFERENCE: the OS stack is adopted at scale; the complaint surface is the third-party experience.
   - FACT — same survey: 64.6% of respondents are "very satisfied" with their primary screen reader (https://webaim.org/projects/screenreadersurvey9/). INFERENCE: don't build a screen reader; the tool is loved. The unmet part is task-level accessibility.
2. **Pain: the free native substitute is complete and aggressive.**
   - FACT — Apple ships Magnifier, Live Captions, Live Listen, Eye Tracking, Assistive Access, Personal Voice, and FDA-cleared Hearing Aid features built into the OS (https://www.apple.com/accessibility/ — retrieved 2026-08-10). Any "accessibility utility" that overlaps these is dead on arrival — **native substitute**.

### L. Contradictory evidence (problem smaller than it looks)
- **The native substitute covers the basics** — Apple/Android OS-level tools already handle OCR, magnification, captions, eye tracking, and hearing aid pairing for free (https://www.apple.com/accessibility/). The *highest-frequency* tasks are already served.
- **Monetization is structurally hard** — screen-reader users have low employment (37.6% of disabled respondents employed full-time vs 83.2% non-disabled, WebAIM survey #9) and the satisfied-tool data suggests the tool gap is small; the *business* payer (compliance/litigation) buys audits, not consumer apps.
- **Reddit search limitation**: no convincing r/Blind or r/deaf operational-pain thread retrieved this session (searches 422/throttled); the strongest evidence here is survey- and platform-level, not community-anecdote level. State as a gap, not proof of absence.

### M. Research verdict — **weak-to-uncertain (huge human need, brutal native substitute, no clean payer)**
Reason: the phone's own accessibility stack is world-class and free (native substitute); the residual pain is "third-party tasks are inaccessible," which no consumer app can fix at scale (the app being fixed belongs to someone else — **host-owns-correction**), and the people most affected are the hardest to monetize. The one defensible angle is B2B (compliance/audit/specialist tooling) — which is not a 6-week consumer app.

---

## FG17 — PET OWNERSHIP
Room: pet owner, veterinarian, groomer, boarding provider, sitter, breeder/rescue. BEYOND another pet medical-record app.

### A. Participants & incentives
- **Pet owner**: enjoy the trip, know the pet is fine. Incentive: reassurance.
- **Veterinarian**: accurate history at the moment of need. Incentive: correct treatment, reduced liability.
- **Groomer/boarding provider**: know the dog's temperament, meds, and feeding in one place. Incentive: no incidents, no call-backs.
- **Sitter**: instructions that are current and findable at 6 AM. Incentive: do the job without a late-night call.
- **Breeder/rescue**: keep multi-animal schedules and transfer paperwork straight. Incentive: compliance, foster→adopter continuity.

### B. Current workflow (today)
- Owner writes feeding/medication instructions on a sticky note for the sitter/boarding; calls to check in; sitter sends a photo.
- Groomer and boarding intake asks the same questions every visit ("food allergies? medication? reacts to other dogs?") from scratch.
- Vet history lives in the clinic's system; neither the sitter, the groomer, nor the boarding provider can see it.
- Breeders/rescues track litters, worming schedules, and vet records in spreadsheets and paper.

### C. Complaints (≥5 distinct)
1. **Instructions re-typed every visit** — grooming/boarding intake re-asks food, meds, temperament each time.
2. **"Did you feed/give meds" confirmation** — the owner's reassurance comes from text/photo pestering, not a record.
3. **Vet history doesn't travel** — the sitter can't know the dog is on a drug that interacts with what they'd feed; the groomer can't know about heart conditions.
4. **Boarding/grooming incident ambiguity** — "your dog had a rough day" with no timeline; the owner can't tell fact from reassurance.
5. **Multi-pet operations are manual** — litter/foster/boarding schedules for several animals at once live in one person's head.

### D. Contradictions
- **Owner vs sitter on updates**: owner wants frequent photo updates; sitter wants to be trusted and not treated like a camera feed.
- **Owner vs vet**: owner expects the vet to share records freely; the clinic treats records as its asset.
- **Boarding vs owner**: boarding wants signed liability waivers and minimal information; owner wants maximum visibility into the facility.

### E. Incentive misalignment (who profits from friction staying)
- **The vet clinic** — its system is the record-of-truth; a portable record that bypasses it is a threat (**host-owns-correction**).
- **The boarding/grooming provider** — re-asking questions each visit is their liability ritual; owning the intake form is their process.
- **The platform (Rover)** — the marketplace owns the sitter-owner relationship and monetizes exactly the reassurance the owner wants.

### F. Expensive friction (money spent because coordination/information is poor)
- **Second vet opinions with no history** — records re-created because they don't travel (tests repeated).
- **Emergency vet bills on top of non-transferable records** — the $2,000 ER tab with a clinic that has no history (see K).
- **Missed medication during boarding stays** — real but hard to quantify; the boarding facility's own records are the only defense.

### G. Phone opportunity (unique observe/capture/coordinate)
- The phone can capture: feeding/medication confirmations at the moment they happen, a video of "how my dog eats" (some dogs need soaked food, food puzzles), and a photo timeline of the stay for the owner.
- It can coordinate: the intake form as a fill-once, share-anywhere pet profile (sitter, groomer, boarding, breeder), attached to the pet, not to a provider.

### H. Existing behavior to attach to
- Owners already photograph the bowl and the meds; sitters already send "walks done" photos; groomers already ask the intake questions. Attach to the *existing photo + intake-answer ritual*.

### I. Potential value moment
- "I dropped off the dog, the boarding place already had his feeding routine and meds without me writing it again" — the first no-sticky-note boarding drop-off. Second: the owner's "is he okay" answered by a timestamped photo timeline instead of a phone call.

### J. Idea seeds (unpolished)
1. **The shareable pet care profile**: one intake answer (feeding, meds, temperament, vet contacts, microchip) that the owner taps "share" at any groomer/boarding/sitter; provider reads it, no re-typing.
2. **Boarding stay photo timeline**: sitter/boarding posts timestamped photos to a private stay feed; owner gets passive reassurance without pestering.
3. **Feeding/meds confirmation log**: one-tap "given" per scheduled item during a stay; the boarding/sitter's record doubles as the owner's reassurance and the provider's liability proof.
4. **Foster→adopter continuity kit**: rescue logs care (worming, shots, feeding) in a shareable handoff for the adopter instead of a paper folder.

### K. External validation (strongest 2 pains)
1. **Pain: the native substitute (Rover) already owns the owner↔sitter reassurance relationship.**
   - FACT — Rover.com sells boarding, house sitting, drop-ins, day care, walking; "You get photo updates and can rest easy"; sitter messaging, background checks, $25k vet-care guarantee, 12+ countries (https://www.rover.com/ — retrieved 2026-08-10). INFERENCE: any owner↔sitter "peace of mind" app competes with a funded, entrenched marketplace — **native substitute** + **two-party adoption**.
2. **Pain: vet records don't travel, and pet-care emergencies are cost-shocking.**
   - FACT — r/dogs (2023): owner called "about twenty vets" with no openings, ended at an ER, ~$2,000 of tests due upfront, felt forced to decline some (https://www.reddit.com/r/dogs/comments/14zwc52/i_am_feeling_so_guilty_and_like_i_have_no_place/ — via Arctic Shift).
   - FACT — r/FosterAnimals (2026): multi-cat foster episode where med protocols, quarantine, and cross-household coordination all run on phone calls and judgment; "spent a combined thousands of dollars" (https://www.reddit.com/r/FosterAnimals/comments/1vhglks/guidance_for_coccidia_hell/ — via Arctic Shift).

### L. Contradictory evidence (problem smaller than it looks)
- **Boarding customers accept opaqueness** — a r/dogs thread about boarding notes "They don't have cameras, but it doesn't seem like he has the same problems at the boarding place," i.e., the owner was fine with the lack of live visibility (https://www.reddit.com/r/dogs/comments/1t4vnjw/golden_barks_when_we_try_to_relax/ — via Arctic Shift).
- **Vet-record portability is a graveyard** — the shared ledger already records "pet microchip registry (no sanctioned API)" and "another pet medical-record app" as rejected; clinics are the host and won't be disintermediated.
- **Groomers/boarding run intake on their own forms** — their process is the system; a consumer profile is a nice-to-have, not a payment event.

### M. Research verdict — **weak (native substitute + two-party + host-owns-correction all present)**
Reason: the most valuable owner↔sitter reassurance loop is owned by Rover; vet-record access is owned by clinics; and the residual "boarding sticky note" is small-dollar and two-sided. The only mildly interesting surface is *rescue/foster prosumer* coordination (multi-animal, admin-heavy, has a business buyer), but rescues already run Shelterluv/PetPoint and are the host. Verdict: deprioritize.

---

## FG18 — TRAVEL DISRUPTIONS
Room: traveler, airline employee, hotel worker, travel agent, family member, travel insurer. What happens when the plan stops matching reality.

### A. Participants & incentives
- **Traveler**: get home / get to the meeting. Incentive: least total damage, now.
- **Airline employee**: process the rebooking flood. Incentive: get the line to move, hit the call-metrics.
- **Hotel worker**: absorb stranded guests. Incentive: fill rooms at rack rate, manage overflow.
- **Travel agent**: rescue the client's whole itinerary. Incentive: commission + not losing the account.
- **Family member**: know they're safe / pick them up. Incentive: an ETA they can trust.
- **Travel insurer**: adjudicate claims. Incentive: verify the disruption happened, avoid false claims.

### B. Current workflow (today)
- The airline's app says "on time" until it doesn't; then a text/call storm: cancel, rebook, hotel, rental, work, family, luggage.
- Traveler calls the airline (hold), tries the app (rebooking queue), calls the hotel, texts the family, and re-arranges the plan five ways — often while the app's "status" is still wrong.
- Receipts accumulate across the day (hotel, taxi, meals) with no structure; the insurer/agent asks for them weeks later.
- The airline employee works a queue of identical sob stories; the traveler retells theirs to every agent.

### C. Complaints (≥5 distinct)
1. **Status truth lags reality** — flights show "on time" until minutes before; the traveler could have stayed home (and often wanted to).
2. **Self-rebooking under pressure** — when hundreds are rebooking, the system's rebooking means days later; the savvy traveler must find alternatives themselves and ask for them by flight number.
3. **The story gets retold endlessly** — airline agent, hotel, insurer, employer each need the same disruption narrative.
4. **Receipt chaos for claims** — the disruption generates receipts (hotel/taxi/meals) that the insurer wants itemized weeks later.
5. **Family coordination on phone** — pickups, hotel sharing, "are you safe" all churn over SMS groups.
6. **No-phone / no-app airlines** — some airlines literally have no app and no text updates; passengers wait 8 hours at the gate (K).
7. **Weather ≠ compensation** — travelers don't know that weather-related delays are largely uncompensated and rebooking may be days out; expectations vs. rules collide.

### D. Contradictions
- **Traveler vs airline on status** — airline keeps the schedule "optimistic" (to avoid waiving change fees and absorbing rebooking cost); traveler wants the truth to act on.
- **Traveler vs insurer** — traveler wants coverage of everything; insurer wants provable, weather-vs-airline attribution (the system owns the cause).
- **Airline employee vs traveler** — employee wants the traveler off the queue; traveler wants the full menu of options.

### E. Incentive misalignment (who profits from friction staying)
- **The airline** — late status posting and restrictive change-fee policy keep passengers in the system and reduce rebooking cost; an "honest status" tool cuts against that.
- **The insurer** — attribution ambiguity lets them decline weather claims (they own the "cause" determination — **host-owns-correction**).
- **The hotel** — surge pricing on stranded guests.

### F. Expensive friction (money spent because coordination/information is poor)
- **Last-minute rebooking at inflated prices** — stranded travelers buy the $9k ticket or the $400 hotel room because coordination failed (K).
- **Self-funding then chasing** — traveler fronts hotel/taxi/meals, then fights for refund/claim months later.
- **Airline workforce costs** — call queues and gate chaos during a mass disruption are pure cost.

### G. Phone opportunity (unique observe/capture/coordinate)
- The phone is the only device present through the whole incident: it can *capture* the timeline (screenshots of status, gate changes, the cancellation text) and the receipts (photos) as they happen — the exact artifact a claim/refund needs.
- It can *coordinate* the traveler's own little system: family ETA, hotel sharing, work notification, alternate flights — without the airline's permission.
- It can *observe* nothing about the flight itself (the airline owns truth), so the product must own the *traveler's incident*, not the flight.

### H. Existing behavior to attach to
- Travelers already screenshot the delay notification and send it to family; they already photograph receipts at the counter; they already text "we're delayed, pick me up at 9." Attach to the *existing screenshot + receipt-photo ritual*.

### I. Potential value moment
- "I got the compensation claim and the insurance receipt bundle together from the screenshots I already took, instead of reconstructing last week." Or: the family ETA that everyone trusts because it's the same incident thread, not five different texts.

### J. Idea seeds (unpolished)
1. **Disruption evidence pack**: traveler taps once per event (delay, cancel, gate change) to screenshot-append; the app assembles a timestamped, receipt-matched claim/refund bundle the insurer/agent/airline will actually accept.
2. **My-incident status page**: one URL/thread the traveler shares with family+work+hotel that says current plan, ETA, hotel — replacing the five-group-text storm.
3. **What-am-I-actually-entitled-to** checker with the *rules* (weather vs airline fault) clearly separated from guesswork, so the traveler stops over- and under-claiming. (False-certainty guard: it's a reference, not a promise.)
4. **Alternate-route planner for the gate**: given the delay, list *verifiable* alternate flights/options the traveler can name to an agent by flight number (the DFW PSA's advice, productized).
5. **Receipt-timer**: from the first disruption screenshot, track the delay/cancel clock and the receipt trail for the claim window.

### K. External validation (strongest 2 pains)
1. **Pain: travelers must self-plan alternatives during disruption while the airline's status lags reality.**
   - FACT — r/travel (2024) DFW winter-weather PSA (advice written by travelers for travelers): "if 100s of people are also trying to get rebooked, it may be several days later"; "Make a plan for what alternate routes and flights you might want to ask for... it is often helpful if you know exactly what flight numbers and times... so that you can tell the agent"; weather = no compensation or hotel (https://www.reddit.com/r/travel/comments/1939nku/psa_winter_weather_in_dfw_this_week/ — via Arctic Shift).
   - FACT — r/travel (2015): passenger knew the weather was collapsing (75% of destination flights delayed/canceled), but the airline kept the flight "on time" to avoid waiving the change fee; he was forced to drive to the airport; the app only notified after check-in; flight left 4 hours late (https://www.reddit.com/r/travel/comments/2xwigy/why_do_airlines_wait_until_the_last_minute_to/ — via Arctic Shift).
   - FACT — r/travel (2024): airline with no app and no text updates left passengers waiting 8 hours with stale monitors; no staff or ticket counter at its hub; forced $9k last-minute rebooking (https://www.reddit.com/r/travel/comments/1d1sc6r/la_compagnie_poor_customer_service_and_delays/ — via Arctic Shift).
2. **Pain: the compensation/claim trail is reconstructed later from nothing.**
   - INFERENCE anchored in the La Compagnie thread: the traveler "is still waiting to hear how their refund options will work" with no structured evidence captured at the moment (https://www.reddit.com/r/travel/comments/1d1sc6r/la_compagnie_poor_customer_service_and_delays/). An entire industry (AirHelp-style claim agencies) exists to monetize this reconstruction gap — evidence the claim trail is painful enough to outsource.

### L. Contradictory evidence (problem smaller than it looks)
- **Airlines auto-rebook** — the same DFW PSA says "The airline will rebook you on the next available flight" (https://www.reddit.com/r/travel/comments/1939nku/); a "rebooking app" is partially defeated by automatic rebooking and by airline apps themselves (**native substitute**).
- **Free substitutes exist** — Google Flights, FlightAware, and airline apps already track status; the pain is *truth timing* and *claim evidence*, not tracking.
- **The airline owns the truth** — the 2015 thread shows even the airline's own system is misleading until the gate; no third-party app can out-observe the airline. **Host-owns-correction** applies to anything claiming to "fix" the flight.
- **Disruption is episodic** — a travel incident happens a few times a year; retention on a disruption-only utility is a genuine question.

### M. Research verdict — **uncertain-to-promising for the *incident workspace*, weak for anything claiming to fix flights**
Reason: the airline side is native-substitute + host-owned. But the *traveler's own incident* (evidence capture, receipt trail, family/coordination page, entitlement reference) is single-party, phone-native, and attaches to existing screenshot/receipt behavior. Monetization is thin for consumers and slow for insurers (two-party), and usage is episodic — but it scores well on "phone uniquely captures" (timestamped evidence at the moment of truth). The false-certainty guard is essential: the product must never pretend to know flight status or entitlements as fact.

---

## STRONGEST RAW SIGNALS (max 8, pain + real evidence + URL)
1. **Micro field-service businesses run dispatch on texts/whiteboards/paper and silently leak revenue** — owner up at 1 AM re-entering Excel from a coffee-stained weigh slip; tonnage fees never invoiced because paperwork is lost in the truck cab; dispatch wiped off the whiteboard by a sleeve. FACT. https://www.reddit.com/r/sweatystartup/comments/1uimeb0/ (via Arctic Shift)
2. **Small trade teams (5–10 techs) hit dispatch chaos — callback loops, emergency rescheduling, stale customer ETAs — and skip the paid suites as too pricey** (Jobber starts at $29/mo + $29/user; ServiceTitan called "too expensive for smaller operations"). FACT. https://www.reddit.com/r/sweatystartup/comments/1trufyw/ and https://getjobber.com/pricing/
3. **On-call context loss is the pain, not alerting** — stale runbooks, unknown service ownership, handoff summaries rewritten from memory, statuses scattered across tools. FACT. https://news.ycombinator.com/item?id=36426851
4. **Phone ack ≠ phone fix: "ack within 5 minutes, at a laptop within 30"** — on-call means carrying the laptop everywhere; the page is answered on the phone, the work isn't. FACT. https://news.ycombinator.com/item?id=43400055
5. **Family caregivers execute and police medical logistics** — a 20-year-old runs her mother's IV antibiotics at home; a daughter camps at the bedside because the facility's supervisor admits "small medication errors are made ALL the time"; 63M Americans (1 in 4 adults) are family caregivers. FACT. https://www.reddit.com/r/CaregiverSupport/comments/1vis0eh/ and https://www.caregiving.org/research/caregiving-in-the-us/
6. **Remote adult children run daily-life care from afar via surveillance calls** — bills/calendar monitored remotely, trusted local helper plays along with medication refusals. FACT. https://www.reddit.com/r/CaregiverSupport/comments/1vj7wgt/
7. **Screen-reader users are 90% mobile and slightly prefer apps, but the ecosystem (not the OS) is the weak point** — 42% say web accessibility is unchanged, 18.5% say worse, while 65% are "very satisfied" with their screen reader itself; Apple ships the entire toolkit free (Magnifier/Live Captions/Eye Tracking/Hearing Aid). FACT. https://webaim.org/projects/screenreadersurvey9/ and https://www.apple.com/accessibility/
8. **Travelers must self-plan alternatives while the airline's status lags reality** — the airline kept a doomed flight "on time" to avoid waiving the change fee; the traveler's own PSA advice is to arrive knowing alternate flight numbers to feed the agent; weather rebooking can be days out; claims reconstructed from nothing afterward. FACT. https://www.reddit.com/r/travel/comments/2xwigy/ and https://www.reddit.com/r/travel/comments/1939nku/

Killer-pattern flags recorded in groups: FG14 = host-owns-correction/commodity (incident tooling is a platform feature); FG15 = two-party + host-owns-correction (agency owns records; family doesn't pay); FG16 = native substitute (OS accessibility stack) + weak payer; FG17 = native substitute (Rover) + two-party + host-owns-correction (clinics); FG18 = native substitute (airline apps + auto-rebook) + host owns truth, but the traveler's own incident workspace escapes all three. FG13 is the only group whose strongest pains are single-party, phone-native, and owned by a business payer.
