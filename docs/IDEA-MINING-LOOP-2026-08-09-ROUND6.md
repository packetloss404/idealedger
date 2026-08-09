# Idea Mining Loop — 2026-08-09, Round 6

## Verdict

Round six was an adversarial audit of **Encore**, the round-five leader, plus a control search for unrelated mobile primitives.

The result is a deliberate demotion:

- **Encore is technically feasible and demo-friendly.**
- **Encore is not strong enough as a standalone paid product.**
- Keep the interaction as a possible event-CRM feature or polished Shipaton fallback, but do not make it the primary business bet.

The active order returns to:

1. **WeedCheck** — strongest Shipaton Design/Most Viral hypothesis, pending a real HTV optical spike and seller-compliance test.
2. **LotMatch** — strongest narrow business hypothesis, pending a real label corpus and field-compliance test.
3. **Confirmed Spoken Details** — strongest Peace Prize hypothesis, pending DHH co-design and native speech accuracy.
4. **CutBolt** — conditional last-irreversible-inch trade concept, weaker source-of-truth than LotMatch.
5. **Two-Source Solar Check** — credible reconciliation gap, but heavy data/rules burden.

No new round-six control beat those survivors.

## Why Encore was demoted

### The moment is real

Mike Staff Productions explicitly lets wedding photography and DJ clients extend coverage during the reception. Its vendors carry an authorization form; the parties sign it and handle payment later. This is unusually direct evidence that the exact day-of decision exists:

- https://intercom.help/mike-staff-productions/en/articles/2952880-how-much-is-extra-time-for-wedding-photography
- https://intercom.help/mike-staff-productions/en/articles/2952539-what-is-the-overtime-fee-for-my-wedding-dj

A current DJ agreement independently states that extra time is billed in 30-minute increments and must be approved and paid before overtime begins:

- https://form.jotform.com/221148287544055

Current photographers also describe warning the couple 10–30 minutes before coverage ends, naming the agreed overtime rate, and either wrapping or staying. Published rates in the discussion range from roughly $450 to $750 per hour:

- https://www.reddit.com/r/WeddingPhotography/comments/1l9l9uf/
- https://www.reddit.com/r/WeddingPhotography/comments/1nz4h44/

One current dispute shows the expensive failure case: a couple approved an extra hour on the wedding day, then refused to pay while still demanding the photographs from that hour:

- https://www.reddit.com/r/WeddingPhotography/comments/1o9f3xd/

### The standalone product is weak

The same evidence that validates the moment also exposes the substitute: a printed form, a contract clause, a verbal reminder, a text, Venmo, or the event professional's existing CRM.

Check Cherry already gives event professionals mobile contracts, e-signatures, add-ons, invoices, client accounts, and payments. Its entry plan is $29 per month and it says thousands of event professionals use it:

- https://www.checkcherry.com/pricing
- https://www.checkcherry.com/invoicing

HoneyBook, Goodshuffle, FrameFlow, VowFolio, and other event-business systems own the surrounding booking, contract, add-on, invoice, and payment state. A T-minus-15-minute prompt is an easy feature for an incumbent:

- https://www.honeybook.com/ai-information
- https://pro.goodshuffle.com/pricing
- https://www.theframeflow.com/
- https://apps.apple.com/us/app/vowfolio/id6761425565

The remaining novelty is the countdown ceremony. That is good interaction design, but not a standalone moat.

### Frequency and habit are the fatal risks

Public evidence supports an occasional expensive incident, not a frequent recurring workflow. In one current discussion, photographers explicitly say day-of extension requests are rare or generally resolved before the wedding day:

- https://www.reddit.com/r/WeddingPhotography/comments/1nz4h44/

The behavioral failure is predictable:

1. the vendor forgets to start a second app because most events do not extend;
2. the delayed moment worth photographing is happening exactly when the prompt appears;
3. the vendor's phone is in a bag, controlling another device, or otherwise unavailable;
4. the couple or authorized person is difficult to reach, emotional, or intoxicated;
5. presenting a priced countdown card feels more transactional or coercive than a short verbal check-in;
6. many professionals deliberately gift 10–30 minutes for goodwill.

Therefore Encore cannot rely on rare dispute prevention. It would need vendors to start the coverage boundary on most paid events, yet no evidence proves that habit.

### Pricing and reach

Whole-business event CRMs justify $29–$59 per month because they run booking, contracts, payments, staff, and communication. Encore replaces a paper form for an infrequent event.

The honest standalone price is closer to **$9.99–$19.99 lifetime** or a small event pack, not $29.99 per year. RevenueCat can support that entitlement, but the recurring-subscription thesis is weak.

The addressable audience is also narrow. The US WeDJ directory contains roughly 30,000 DJ, photographer, videographer, and photo-booth listings, but listings are not unique active businesses or qualified payers:

- https://wedj.com/

Without a CRM, association, studio, or contract-template distribution partner, the realistically reachable early audience is more likely hundreds than tens of thousands.

### Trust boundary

The original agreement must already state:

- the overtime rate;
- the billing increment;
- who may authorize the extension; and
- the accepted approval method.

A tap on the vendor's phone does not establish signer identity, authority, enforceability, payment, independent timestamping, or an immutable record. Federal E-SIGN rules prevent a record from being rejected solely because it is electronic, but they do not cure those attribution and authority problems:

- https://www.govinfo.gov/content/pkg/USCODE-2022-title15/pdf/USCODE-2022-title15-chap96.pdf

Honest language is **recorded authorization on this device**. Never claim verified signer, e-signature compliance, legally binding amendment, guaranteed payment, immutable proof, or tamper-proof evidence.

### Name collision

`Encore` is unusable beyond a working prototype:

- Encore Global is a major event-production brand: https://www.encoreglobal.com/
- Encore.photo is a current working-photographer platform: https://www.encore.photo/
- Encore Mobile Workforce already covers timekeeping and field forms: https://apps.apple.com/us/app/encore-mobile-workforce/id1201780601

## Technical truth table

There is no fatal Expo 57 or iOS blocker for a deliberately narrow prototype:

- Expo Widgets can start, update, and end a Live Activity while the app is running.
- SwiftUI timer text continues to render without background JavaScript.
- Local notifications can be scheduled and may arrive when the app is dead, but users, Focus, and notification settings can suppress them.
- SQLite can remain the canonical local record through app restarts and device reboots, but not uninstall.
- PDF/share output can be regenerated from canonical local data; a completed share sheet does not prove delivery.
- RevenueCat should gate creation of future events, never resolution or export of an already-started event.

Current official platform references:

- https://docs.expo.dev/versions/v57.0.0/sdk/widgets/
- https://docs.expo.dev/versions/v57.0.0/sdk/ui/swift-ui/text/
- https://docs.expo.dev/versions/v57.0.0/sdk/notifications/
- https://developer.apple.com/documentation/activitykit/displaying-live-data-with-live-activities

Apple limits an active Live Activity to eight hours. A local-only app cannot silently start the final-hour activity after termination. For longer weddings, it must schedule a reminder and require the vendor to tap it, or exclude those sessions from the prototype.

The same-device confirmation is the hard truth boundary. iOS supplies no safe client kiosk or identity-verification mode. The vendor should keep possession of the phone while the client reviews and taps; the record can only say that a response was recorded on that device.

## Cheap falsification before any resurrection

Encore should stay passed unless a no-code test clears all of these gates:

1. Code 200–300 current community search results for `overtime`, `stay late`, `extra hour`, `end time`, and `coverage extension`; require at least ten unique day-of authorization incidents.
2. Compare against a Check Cherry free trial; if an extra-time add-on can be sent, approved, and paid in under 60 seconds, permanently classify Encore as a CRM feature.
3. On a passive landing page, require at least 30% of qualified vendors to report an extension in their last ten events.
4. Require at least 20% of qualified respondents to choose a real $19.99 lifetime purchase rather than free.
5. In staged tests, require at least 80% of authorized decision-makers to complete the same-phone card without explanation in under 20 seconds.
6. In a shadow test, require vendors to activate the boundary on at least 70% of eligible events and produce a decision before the contracted end on at least 70% of actual extension cases.

Until those gates pass, building Encore would optimize for a good two-minute demo rather than a credible product.

## Round-six controls

The control search intentionally left events and camera/OCR comparison. None displaced the active shortlist.

| Control | Atomic loop | Decision |
|---|---|---|
| **PotLife Pro** | Tap when epoxy/composite is mixed; show nominal workability/discard window in a Live Activity. | Kill. Temperature, chemistry, mass, and geometry materially change the result; manufacturer guidance and PourCast-type tools already own material-specific estimates. |
| **ChargeTurn** | Assign charging handoffs in a two-EV, one-charger household from departure and minimum-range needs. | Kill. Manual state and two-user ritual are fragile; Charge HQ, Wallbox, Stekker and vehicle/charger systems already manage priorities. |
| **AuctionCue** | Queue watched lots across auction houses and surface the approaching lot. | Kill. Auction platforms already alert; no dependable sanctioned cross-house live-position feed exists. |
| **BarnBaton** | Incoming barn worker accepts unresolved horse-care exceptions. | Kill. BarnBeacon and BarnOps already combine handoffs with authoritative feed, medication, and care records; safety expectations are high. |
| **TurnReady** | Cleaner marks a rental ready; inspector accepts before guest arrival. | Kill. Turno, CleanTrack and Properly already own turnover and inspection coordination. |
| **TapeMark** | Drop tactile chapter/bad-take markers while recording audio. | Kill. Markr and production recorders already provide offline markers and export. |
| **BufferFence** | Apply preparation and wrap buffers around local calendar events. | Kill. Scheduling products already provide buffers; local manual reconciliation is a feature. |
| **BorrowTag** | Tap NFC/QR to lend and return an item. | Kill. Additem.to already provides NFC, QR, barcode lending, and activity history. |
| **SpinBalance** | Compare relative appliance vibration before and after adjustment. | Kill. Seismo already targets appliance FFT/history/export; phone placement and load changes defeat diagnostic claims. |
| **CallPromise** | Attach a promised follow-up to a contact after a call. | Kill. iOS supplies no general call trigger; Contacts Journal and Reminders cover the manual workflow. |
| **LeaveClean** | Trigger a closeout checklist after leaving a service location. | Kill. Always-location permission is excessive and field-service suites own job checklists. |
| **RoundTable** | Pass one phone between timed speakers with tactile warnings. | Kill. Meetinged, OnlyT and ordinary shared timers are sufficient; same-phone passing is awkward. |

Supporting incumbent/product references:

- Pot-life guidance: https://www.westsystem.com.au/wp-content/uploads/2024/03/EW_58_web.pdf
- PourCast: https://apps.apple.com/us/app/pourcast-resin-cure-guide/id6761698552
- Multi-EV Charge HQ: https://chargehq.net/kb/using-charge-hq-with-multiple-evs
- LiveAuctioneers: https://play.google.com/store/apps/details?id=com.liveauctioneers.and
- BarnBeacon: https://barnbeacon.com/staff-shift-management
- BarnOps: https://www.barnops.com/
- Turno: https://turno.com/
- CleanTrack: https://www.cleantrackapp.com/
- Properly: https://getproperly.com/vacation-rental-inspection-software
- Markr: https://play.google.com/store/apps/details?id=com.daniel.lindey.markrrebuild
- Calendly buffers: https://calendly.com/help/how-to-use-buffers
- Additem.to: https://additem.to/
- Seismo: https://apps.apple.com/na/app/seismo-vibration-meter/id6787096570
- Contacts Journal: https://contactsjournal.com/
- Jobber checklists: https://help.getjobber.com/hc/en-us/articles/115009740048-Checklists
- Meetinged: https://meetinged.com/
- OnlyT: https://www.onlyt.app/

## Final decision

**Pass Encore as a standalone paid app.** Preserve it as:

- a future feature for an event CRM;
- a distribution-partner concept for a multi-photographer studio; or
- a technically safe Shipaton fallback if validation data unexpectedly proves frequent use.

Round seven continues with unrelated paid-market mining.
