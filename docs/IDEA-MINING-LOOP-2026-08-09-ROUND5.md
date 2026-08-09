# Idea Mining Loop — 2026-08-09, Round 5

## Verdict

Round five intentionally left camera/OCR verification and mined temporal coordination, same-device communication rituals, Live Activities, local personal data, and professional handoffs.

It produced the first concept that may displace WeedCheck as the recommended hackathon build:

1. **Encore** — conditional go and best current 7-week Shipaton build candidate.
2. **WeedCheck** — still the strongest Design/Most Viral bet, but materially higher technical and behavioral risk.
3. **LotMatch** — still the strongest narrow business, but requires trade access and a real label corpus.
4. **Confirmed Spoken Details** — strongest Peace Prize path, with native speech and DHH co-design risk.
5. **DoorHold** — conditional paid niche; backend and second-workflow friction.
6. **CancelBy** — clean local utility; weak subscription and brutal free substitute.

Only Encore survived all three attacks as a clean, no-backend, two-minute-demo product. It remains validation-first, not approved for implementation.

## Encore

### Precise positioning

> **Resolve the extra-time decision before contracted event coverage expires.**

Encore is not an overtime tracker, invoice app, CRM, e-signature product, or payment processor.

The event vendor starts a coverage clock. Fifteen minutes before the contracted end, a Live Activity turns the abstract boundary into a decision. The photographer, videographer, DJ, band, bartender, or other event professional shows one exact offer to the predesignated client or planner:

- end on time;
- add 30 minutes for the already-agreed price; or
- add 60 minutes for the already-agreed price.

The authorized person approves or declines on the vendor's phone. Encore timestamps the local acknowledgment, extends the clock if approved, and produces a recap for the later invoice.

### Why this moment is real

Current photographers describe carrying a paper addendum and asking for a signature roughly 30 minutes before leaving. Others rely on a verbal day-of agreement and later face clients who refuse to pay for the extra hour while still demanding those photographs.

- https://www.reddit.com/r/WeddingPhotography/comments/1c0xkl7/
- https://www.reddit.com/r/WeddingPhotography/comments/1o9f3xd/

Current event contracts explicitly state overtime rates and allow the client or a designated decision-maker to authorize additional time. Published rates can be hundreds of dollars per hour:

- https://www.imagery.life/weddingterms
- https://altared.app/blog/four-contract-lines-rewrite

The pain is not that professionals cannot calculate hours. It is that the decision is often vague at the exact moment the package ends.

### Competitive boundary

Adjacent products own surrounding jobs:

- HoneyBook tracks time, adds services, updates invoices, and supplies contracts, with current monthly plans around $29, $49, and $109:
  - https://help.honeybook.com/en/articles/2209234-track-and-bill-your-hours/
- ShowTrack calculates event overtime and creates invoices:
  - https://showtrackapp.com/
- CrewShift handles production time, overtime rules, approvals, and invoicing:
  - https://crewshift.app/
- ChangeDesk creates link-based change orders for contractors:
  - https://changedesk.byalif.app/
- Pixieset and Maroo sell extra coverage as booking add-ons:
  - https://blog.pixieset.com/blog/booking-add-ons/
  - https://www.maroo.us/solutions/wedding-photographers

No exact current product surfaced that makes the last-15-minute, event-floor extension decision the complete atomic product.

That is the only wedge. Broadening into contracts, invoicing, general time tracking, payments, or a photographer CRM would immediately put Encore inside mature incumbent markets.

### Honest trust boundary

Encore must not claim any of the following:

- verified identity;
- legal enforceability;
- a contract amendment;
- e-signature compliance;
- payment or payment authorization;
- independent timestamping;
- immutable or tamper-proof evidence.

The original contract must already define the overtime rate, billing increment, and who may authorize extra coverage. Encore records the day-of ceremony as a **local event record**.

The approval card should display:

- original coverage end;
- exact extension duration;
- exact new end time;
- exact later-invoice amount;
- the predesignated role or name;
- `Approve for later invoice` and `Decline`;
- a disclosure that this device records the response locally.

Typing name and role or entering a pre-agreed PIN records the ritual but does not prove identity. A PIN is optional and must not be presented as authentication.

### Product loop

1. Vendor creates event: contract start/end, rate, allowed increments, designated approver, and optional contract-clause reference.
2. Local notification fires before the final hour so long events can start the Live Activity within Apple's duration limit.
3. At T-15, the Live Activity becomes amber and offers `End on time`, `Ask +30`, or `Ask +60`.
4. Vendor chooses one offer and passes or shows the phone to the designated person.
5. Person sees only the exact decision, types name/role or PIN if configured, and approves or declines.
6. Approved extension updates the end time and Live Activity. Decline locks the scheduled end.
7. Event history records the displayed terms, response, device time, and later vendor notes.
8. Vendor exports or shares a recap with the invoice.

### Technical MVP

Expo 57 supports the required local stack without a custom native module or backend:

- Expo SQLite for local event and transition records;
- Expo Notifications for the final-hour, T-15, and end alerts;
- Expo Widgets and `@expo/ui` SwiftUI `Text.timerInterval` for a countdown that updates without background JavaScript;
- Expo Crypto for a local hash chain used only to detect accidental in-app record corruption;
- Expo Print and Sharing for a recap PDF.

Official references:

- https://docs.expo.dev/versions/v57.0.0/sdk/widgets/
- https://docs.expo.dev/versions/v57.0.0/sdk/ui/swift-ui/text/
- https://docs.expo.dev/versions/v57.0.0/sdk/notifications/
- https://developer.apple.com/documentation/activitykit/displaying-live-data-with-live-activities

Apple limits a Live Activity to eight active hours. A 10–12-hour wedding therefore cannot begin the activity at coverage start and assume it remains alive. The honest design schedules a local notification near the final hour; the vendor taps it to start the Live Activity then. The ordinary in-app clock can still track the full event.

The paywall must gate creating future events, templates, and history depth. It must never block resolving or exporting an active event if entitlement expires mid-event.

### RevenueCat layer

Free:

- two complete events;
- one default extension increment;
- local recap.

`Coverage Pro` hypothesis: $29.99/year.

- unlimited events;
- custom 15/30/60-minute increments and rates;
- saved authorized-person and clause templates;
- vendor branding;
- searchable history and recap exports;
- optional iCloud sync later.

Show the paywall only after the first successful end/extend decision demonstrates value. Use Customer Center for annual-plan management.

### 90-second demo

1. Open a prepared event with 45 seconds of coverage left.
2. Show lock-screen Live Activity switching to amber.
3. Tap `Ask +15 min · $75`.
4. Pass the phone to the staged planner.
5. Planner sees `9:00 → 9:15 PM · $75 added to later invoice`, types name/role, and approves.
6. Haptic confirmation; Live Activity turns green and extends.
7. Open event record and share the one-page recap.
8. Show RevenueCat paywall for creating the next Pro event, never during the live resolution.

### Falsification gate

Interview 30 active event vendors before production implementation. Require:

- at least 30% had two or more real day-of extension requests in the prior year;
- at least 80% already put the rate, increment, and authorized decision-maker in their contract;
- at least six make a refundable $29.99 preorder;
- eight of ten staged authorized people complete the card without explanation in under 20 seconds;
- vendors say they would activate it for at least 70% of eligible events.

Then shadow 20 real events. Kill if:

- fewer than 70% of real extension decisions resolve before the contracted end;
- more than 20% of approvers refuse the same-phone interaction;
- the vendor's phone is too busy with camera/control duties to present the card;
- more than 20% of target events require an unattended Live Activity longer than eight hours; or
- asking through the phone is consistently more awkward than the current verbal or paper flow.

### Shipaton category fit

- **HAMM / Idea-to-Income:** one saved $300–$700 extension can justify several years of Pro.
- **Design:** native lock-screen countdown, state transition, same-device handoff, and haptics.
- **#BuildInPublic:** the honest boundary between a local acknowledgment and legal proof is a strong product lesson.
- **Growth Loop:** every live approval exposes the product to a planner/client who works with other vendors, though this is weaker than WeedCheck's social-content loop.

Encore is not naturally the Most Viral candidate; WeedCheck remains stronger there.

## DoorHold

### Thesis

A solo mobile groomer, cleaner, or beauty provider reaches a locked or inaccessible appointment. They tap `No access`; an agreed 10–15-minute grace clock starts. The absent client receives a no-install capability link with explicit choices:

- opening now, with ETA;
- authorize one paid waiting increment;
- cannot provide access and accept the pre-agreed lockout/reschedule outcome.

The product resolves `wait, leave, or charge` before more time is lost. It is not GPS proof.

Mobile-service policies currently describe 10–15-minute waits followed by $50, half-price, full-price, or reschedule fees:

- https://www.raisethewuffdoggrooming.com/cancellation-policy
- https://callingallpaws.biz/policies/
- https://www.sundogmobilegrooming.com/_files/ugd/efda56_38944701fad3456b9577ba493cc1b8e2.pdf

Jobber and Housecall Pro already own on-my-way messages, client hubs, timers, routing, and two-way communication:

- https://help.getjobber.com/hc/en-us/articles/7448087796631-On-My-Way-Text-Messages-in-the-Jobber-App
- https://help.housecallpro.com/en/articles/357613-customer-notifications-overview

The only remaining target is the solo provider priced out of a roughly $49+/month field-service suite.

### Architecture and boundary

Unlike Encore, DoorHold requires a backend and no-install web response:

- provider authentication;
- signed 128-bit capability link with TTL and one response;
- minimal appointment state;
- provider push notification;
- native SMS/share composer to avoid Twilio and A2P dependency in the MVP.

The response proves only possession of the link. It is not verified identity, a fee charge, e-signature, or location proof.

### Monetization and gate

Free: two incidents per month. Pro hypothesis: $19.99–29.99/year for templates, unlimited links, custom grace periods, incident history, and branding.

Proceed only if 20 solo providers report at least one no-access incident per 100 appointments; 80% use the flow in simulation; 60% of staged clients respond inside the grace period; median response is under five minutes; and four prepay $24.99.

## CancelBy

### Thesis

The user selects a recurring therapy, PT, lesson, or other fee-bearing Calendar series once and records the provider's 24/48-hour policy, fee, and cancellation URL. Each occurrence and moved exception recomputes automatically. A widget states, for example, `$180 becomes non-refundable in 2h`, with `Keep`, `Open Cancel`, and `Rescheduled` actions.

No exact cross-provider consumer app surfaced. Provider systems expose the fragmentation: cancellation windows commonly differ by provider, portals may disable cancellation inside the window, and the fees are often uninsured.

- https://help.headway.co/hc/en-us/articles/4428462506388-Cancellations-and-rescheduling
- https://help.growtherapy.com/clients/en/articles/12270262-cancel-an-appointment-in-the-ios-mobile-app

Adjacent substitutes are decisive:

- Due persistent reminders;
- countdown widgets;
- TrialBell's subscription cancel-by clock;
- an ordinary recurring Calendar alert;
- iOS 26 urgent Reminders, which can fire even in Silent and Focus modes:
  - https://support.apple.com/en-gb/102484

The app can open the provider URL but can never claim the appointment was canceled. The user marks it resolved.

Honest monetization is a $9.99–19.99 lifetime unlock, not a strong annual subscription. Proceed only if 30% of 20 weekly appointment users paid a late fee in the prior year, half prefer the money-at-risk card to a recurring 49-hour alert, setup completes in under one minute, and four prepay $14.99.

## BatchBaton

Transfer an active fermentation or proof batch, stage, timer, and next action to an incoming baker who explicitly accepts responsibility. The loop is clear, but the product is not.

Crown QMS, Diced OS, BakeHead, GatesaFlow, BakeOnyx, and other bakery systems already treat batch stages and shifts as shared production state:

- https://www.crownqms.com/help/production/starting-a-batch
- https://dicedos.com/blog/bakery-shift-handoff-checklist
- https://taphead.co/bakery/
- https://gatesaflow.com/en

Cross-device truth needs authentication, authoritative server state, push, offline conflict rules, and an organization entitlement. A same-tablet version loses the handoff differentiator. The app also must never claim fermentation readiness or food-safety compliance. No-go unless at least ten two-shift microbakeries report monthly loss specifically at handoff and complete 90% of batons in a concierge test.

## Exact-market kills

### Contact Sentinel

Local contact mutation history and selective undo are already in Contacts+; Contacts Mover previews changes and keeps extensive sync history. Apple's own restoration covers whole archives.

- https://support.contactsplus.com/hc/en-us/articles/4407327017115-Activity-History-Section-Viewing-Restoring-Unmerging-and-Undeleting
- https://apps.apple.com/us/app/contact-mover-account-sync/id582605968

### Creator Rights Clock

RightsTracker, RightsClock, RightsWatch, and RightsOS already track usage terms and expiry. The missing hard product is detecting continued ad usage, not storing another manual deadline.

- https://apps.apple.com/us/app/rightstracker-ugc-rights/id6756125692
- https://rightsclock.com/
- https://rightswatch.frevex.com/
- https://www.rightsos.app/

### Sequential Waitlist Fill

Zenoti, Tattoo Artist Helper, Spot Squid, TattooWaitList, Appointify, WaitQ, and SnapFill already offer timed sequential slot promotion. The category is dense and requires booking/calendar integration.

- https://www.zenoti.com/platform/waitlist-management
- https://spotsquid.com/
- https://tattoowaitlist.com/
- https://snapfill.app/

### Call-Sheet Delta Acknowledgment

SetHero, Epitome, Prod.AI, Callsheet Pro, and CallSheet: Crew Calls already distribute changes, track versions, and collect delivery/confirmation state.

- https://sethero.com/
- https://www.withepitome.com/
- https://prodai.co.uk/

### DrawerDuo / CashClose Witness

Blind cash counts, employee drawers, and reconciliation already live in Cash Count, RevenueRegister, and POS systems. Same-phone repeated entry does not verify two people and lacks the authoritative expected total.

### DwellAck

The trucking detention market is saturated with Detention Timer, PayDwell, RigProof, HaulClaim, GetDockPay, Detention Defender, and others. Facility acknowledgment adds network friction without guaranteeing payment.

- https://paydwell.app/
- https://www.rigproofapp.com/
- https://www.haulclaim.com/

### ScopeTap revisited

Same-device change orders are already offered by ScopeProof, Scopit, and SiteSign. This reinforces the existing passed-market decision.

- https://scopeproofapp.com/
- https://www.sitesign.app/

### Runner Relay

Zelos, CrewDash, Dispatch, and festival operations systems already dispatch temporary crew tasks; radios and texts beat a new event-only install.

### ReadBack

Closed-loop instruction readback is valuable behavior, but its natural settings are high-stakes radio/in-person workflows. A phone is slower, creates compliance expectations, and requires every team member. No non-safety paid beachhead survived.

### BreakLedger

LiveShift and shift/pay trackers already cover personal break timing. The only motivated payer anticipates a labor dispute, pushing the product into evidence and jurisdiction-specific compliance.

### RunSheet Pocket

Prelude already puts wedding timelines on the Lock Screen and Watch, while Wedding Computer records live drift. A standalone personal run sheet lacks the authoritative shared schedule.

- https://apps.apple.com/gb/app/prelude-for-weddings/id6761266077
- https://help.wedding.computer/weddings/run-sheets

### CuePulse

Cadence already supplies phase cues, while Expo haptics cannot reliably schedule arbitrary locked/background patterns or control Apple Watch haptics.

- https://cadence-interval-timer.app/
- https://docs.expo.dev/versions/v57.0.0/sdk/haptics/

### SoundLatch

Apple already lets users train custom alarm, appliance, and doorbell sounds. A third-party background microphone adds battery, privacy, interruption, and App Review risk.

- https://support.apple.com/en-ie/guide/iphone/iphf2dc33312/ios

## Round-five lesson

The strongest mobile product was not the one with the richest automation. It was the one that turned an existing awkward human ritual into one bounded decision on a phone already present.

Encore wins this round because:

- it needs no privileged API;
- it needs no backend or second app;
- one success can be worth hundreds of dollars;
- the original contract already supplies the intended commercial state;
- the product does not need to infer correctness;
- the Live Activity is functional rather than decorative; and
- the demo shows a visible before/decision/after state in under two minutes.

The next step is not production code. It is a 30-vendor interview/preorder sprint and a same-phone clickable prototype tested with planners, photographers, videographers, and DJs.
