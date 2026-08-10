# Idea Mining Round 10 — Autonomous Loop 1

**Research date:** 2026-08-10

**Method:** Three independent research lanes, a fourth integration lane, exact-product and platform searches, then reciprocal cross-review.

**Starting archive:** 173 ideas and 13 research dossiers.
**Outcome:** 27 serious candidates investigated, 26 new pass decisions, one duplicate merged into SpinBalance, one feature merged into CrashTape, and zero promotions.

## Executive summary

Loop 1 deliberately searched away from the archive's saturated `camera + reminder + PDF` pattern. Consumer Friction mined repeated household and device complaints. Physical/Digital Boundary looked for files, sensors, NFC, Bluetooth, interruption recovery, and real-world sequences the phone could observe directly. Workflow Failure/WTP examined recurring prosumer reconciliation and handoff jobs with existing paid behavior.

The result was not a shortage of real pain. Smoke-alarm chirps, water leaks, charging failures, lost media, Etsy payout confusion, missed Shortcuts automations, rental-kit discrepancies, and COI renewal all have credible current complaints or paid categories. The failure was product ownership: a mature utility already performed the exact loop, the operating system withheld the state needed to make the conclusion, or the authoritative record belonged to the platform, vendor, relying party, or vertical SaaS.

The strongest provisional lead, Automation Canary, was technically sound but commercially dead. A final background App Intent can record its own callback and re-arm a local deadline notification, but [Automation Control](https://apps.apple.com/us/app/automation-control/id6737158540) already logs Shortcuts automations and includes a `did not run in the last` condition, while [Pushcut](https://www.pushcut.io/support/notifications) already exposes identified schedule/cancel notification actions and [Healthchecks.io](https://healthchecks.io/pricing/) provides free heartbeat monitors. The honest remaining difference was setup convenience.

## Loop statistics

- Three independent discovery lanes plus one integration/red-team lane.
- About 70 current complaint, product, platform, support, and pricing sources inspected.
- 27 candidates received a truth, authority, frequency, natural-behavior, demo, feasibility, and market test.
- 26 new ideas added to the rejection ledger.
- One existing record, SpinBalance, absorbed the duplicate WasherVibe research.
- CrashTape gained an external-input route-loss fixture; RouteLatch was not cloned into a separate idea.
- Zero finalists, paid-validation promotions, or build recommendations.

## Reusable decision rules

1. **Authoritative observation is necessary, not sufficient.** CopyFence can compare bytes and Automation Canary can record its callback, but exact utilities already sell those truths cheaply.
2. **A crisis-time search channel rewards instant tools and incumbents.** ChirpHunt, MeterStill, and ChargeWiggle are discovered during the problem, when a free web guide or established $1–$3 utility wins.
3. **A phone testing itself may still observe the wrong endpoint.** A BLE sensor seen by the phone may still be unavailable to the bike computer; a security key authenticating to one relying party says nothing about another.
4. **The paying party usually buys the system of record.** Rental houses buy equipment custody, contractors buy job-photo systems, galleries buy consignment ledgers, and bookkeepers buy settlement reconciliation.
5. **Local-first and deterministic are no longer enough differentiation.** Current browser utilities already process sensitive CSVs locally, explain uncertainty, and charge little or nothing.
6. **A feature merge is a valid research result.** Route-change observability strengthens CrashTape, but does not create a new payer or product.

## Consumer Friction lane

## ChirpHunt

**Concept:** Sample an intermittent smoke/CO-style chirp at several positions and rank recordings by strength to help locate the device.

**Why it looked promising:** Current users report searching for mystery chirps for hours or months, and the trigger is immediate. The phone directly owns microphone samples and the demonstration is excellent.

**What killed it:** [WhichBeep](https://whichbeep.com/) already provides a free browser room-sampling flow, while [ChirpHound](https://apps.apple.com/nl/app/chirphound/id6777020126?l=en-GB) provides warmer/colder guidance, calibration, pattern presets, intervals, and multi-microphone features at a low one-time price. Reflections and automatic gain mean dBFS is not reliable distance or bearing, and Apple warns not to rely on Sound Recognition for high-risk alarms. The only safe claim is that a matching tone was recorded more strongly at one position.

**Reopen when:** Blind multi-home tests materially beat both incumbents without diagnosing alarm type or safety state.

**Verdict:** `passed_market` — exact incumbent, safety-adjacent authority boundary, and one-session retention.

## LipSync Lens

**Concept:** Use the phone camera and microphone to measure the offset between a flash and beep from a television or soundbar test clip.

**What killed it:** [SynQR](https://synqr.app/), [AV Sync](https://play.google.com/store/apps/details?id=com.stevedenheyer.avsync), [LipSync Test Tool](https://apps.apple.com/sg/app/lipsync-test-tool/id6761455176), and [FixMySync](https://apps.apple.com/us/app/fixmysync/id6762895285) already implement the primitive; Apple TV also has [Wireless Audio Sync](https://support.apple.com/en-kw/guide/tv/atvb228b7711/tvos). The phone's own capture pipelines add latency, and a measured offset does not identify which source, television, eARC path, or soundbar setting should change.

**Reopen when:** A target-device integration reads and writes the delay setting and demonstrates closed-loop convergence.

**Verdict:** `passed_market` — exact swarm and non-authoritative correction.

## MeterStill

**Concept:** Photograph a water meter before and after a no-use interval and calculate implied flow and cost.

**What killed it:** The current free [Fluvo](https://apps.apple.com/us/app/water-meter-leak-fluvo/id6775553069) already provides the guided interval, optional photos, leak rate, history, reminders, multi-property support, and projections. Utilities publish the same manual flow test for free. Meter movement is real, but it cannot locate a leak or exclude unnoticed use.

**Reopen when:** A utility or insurer distributes an authoritative meter/account integration that adds a workflow Fluvo cannot provide.

**Verdict:** `passed_market` — exact free incumbent.

## CabinSizer

**Concept:** Scan a carry-on or personal item with AR and compare its approximate envelope with a selected airline limit.

**What killed it:** [Go Carry-On](https://apps.apple.com/us/app/go-carry-on/id6771162196), [Hand Luggage](https://apps.apple.com/us/app/hand-luggage-carry-on-size/id1045184136), and [CabinFit](https://getcabinfit.com/) already cover the loop. AR is not the boarding authority; compression, pockets, wheels, weight, fare, operating carrier, and agent enforcement remain outside the scan.

**Reopen when:** An airline supplies accepted calibration or contractually recognizes the result.

**Verdict:** `passed_market` — free exact products and false-pass risk.

## ShareSweep

**Concept:** At the share moment, highlight likely personal information in a screenshot and export a user-confirmed redacted copy.

**What killed it:** [Screenshot Editor Blur Text](https://apps.apple.com/us/app/screenshot-editor-blur-text/id6757922494), [MaskShot](https://play.google.com/store/apps/details?id=com.cdev.maskshot), [Scrub](https://scrub.software/), [ShareWipe](https://sharewipe.com/en), and other 2025–2026 entrants form a dense exact swarm. `Nothing detected` can never mean `safe to share`; sensitive visual context may contain no recognizable text.

**Reopen when:** A sanctioned pre-share interception surface or a narrow validated sensitive pattern is unavailable in current tools.

**Verdict:** `passed_market` — commodity and dangerous false-negative semantics.

## ZonePreview

**Concept:** Render upcoming Calendar events as if the phone were already in a destination timezone so a traveler can inspect shifts before departure.

**What killed it:** Apple already provides [Calendar Time Zone Override](https://support.apple.com/en-gb/guide/iphone/iph69525c028/ios), Google documents provider behavior, and mature world-clock/calendar products cover previewing. A companion cannot control external providers, invitation changes, or other participants' interpretations.

**Reopen when:** A deterministic dry run across actual providers exposes failures native calendars cannot show.

**Verdict:** `passed_market` — OS-native and crowded.

## AppBurner

**Concept:** Mark a temporary retailer, parking, ticket, or restaurant app for permission review and deletion after a short period.

**What killed it:** An ordinary iOS app cannot enumerate arbitrary installed apps, observe installation time, revoke their permissions, or uninstall them. Apple exposes installed-app inventory through device management, while the consumer can already use Offload, App Library, Reminders, and Settings.

**Reopen when:** Apple exposes sanctioned consumer installed-app and permission-management APIs.

**Verdict:** `passed_scope` — the core action is unavailable.

## ChargeWiggle

**Concept:** During cable/brick/port swaps and a timed wiggle test, log the phone's charging-to-unplugged state transitions.

**What killed it:** iOS exposes only coarse battery state and level, not negotiated wattage, current, cable identity, or port condition. A transition cannot isolate the cable, adapter, port, contamination, temperature, or software. Free [Battery and charger test](https://apps.apple.com/us/app/battery-and-charger-test/id1442110910) and the $2.99 [Amperes 4](https://apps.apple.com/us/app/amperes-4-battery-charge-info/id1245475416) already own the weaker inference.

**Reopen when:** Apple exposes negotiated power plus stable accessory identity, or repair technicians pay for the transition log alone.

**Verdict:** `passed_market` — insufficient state and cheap incumbents.

## EarFlip

**Concept:** Play controlled left/right/mono signals, swap earbuds between ears, and structure the user's observations about whether an imbalance follows the device or ear.

**What killed it:** The test cannot separate hearing, seal, earwax, adaptive audio, source balance, Bluetooth state, or driver output. [Headphone Sound Check](https://apps.apple.com/us/app/headphone-sound-check/id6771039438), [Headphone Check](https://apps.apple.com/us/app/headphone-check/id418445917), [Mimi Hearing Test](https://apps.apple.com/us/app/mimi-hearing-test/id932496645), and Apple's balance, Custom Audio Setup, and Ear Tip Fit Test already occupy the surface.

**Reopen when:** A manufacturer exposes calibrated per-bud acoustic self-test data or service centers accept a standardized protocol.

**Verdict:** `passed_market` — exact/native substitutes and non-localizable cause.

## SpinBalance

**Round-10 duplicate:** WasherVibe proposed a phone-on-washer accelerometer/audio comparison across spin cycles. The existing SpinBalance record already captured this product shape.

**New evidence:** `CMSensorRecorder` makes long background accelerometer capture technically possible, but the phone measures only its own acceleration at one placement. Load distribution, cycle stage, spin speed, flooring, case, pedestal, and mounting dominate the result. [ApplianceDoc](https://apps.apple.com/us/app/appliancedoc/id6779322946) now sells exact phone-on-appliance vibration/acoustic analysis, while generic vibration tools are cheaper.

**Reopen when:** A manufacturer specifies the fixture, load, cycle, placement, and model thresholds and accepts the result in service.

**Verdict:** Existing `passed_market` record reinforced; no duplicate created.

## Physical/Digital Boundary lane

## CopyFence

**Concept:** Copy selected iPhone Photos or Files to an attached SSD, reopen and hash both sides, and offer source deletion only after the bytes read by the phone match.

**Why it looked promising:** Both endpoints and the irreversible delete boundary live on the phone, making the observation unusually authoritative and the behavior natural.

**What killed it:** [CCC Mobile Backup](https://bombich.com/ccc-mobile-backup) already copies, verifies, and conditionally removes source files for a few dollars; [OWC Copy That Mobile](https://apps.apple.com/gb/app/owc-copy-that-mobile/id1536830655) and [USB Backup](https://usbbackup.app/) occupy the same offload job. Equality at verification time also does not prove durable media health, complete Photos semantics, or sufficient backup redundancy.

**Reopen when:** A blind head-to-head proves materially stronger handling of iCloud-optimized assets, Live Photos, interruptions, metadata, and large libraries, and 5/20 users prepay despite CCC.

**Verdict:** `passed_market` — exact low-cost incumbent.

## ChargeDrop

**Concept:** Arm when the phone starts charging below a target and alarm if iOS later reports unplugged before that target.

**What killed it:** Exact battery-alarm apps and Shortcuts already occupy the job, while iOS suspension prevents a consumer app from promising an immediate sleeping-state alarm. It can observe `unplugged`, not the reason for it.

**Reopen when:** A sanctioned persistent battery-transition trigger works under suspension and 4/20 users prepay despite existing alarms.

**Verdict:** `passed_market` — exact incumbent and platform reliability.

## TagRun

**Concept:** Import intended NFC payload rows, write the next tag, reread it, and advance only when the readback bytes match.

**What killed it:** [NFC Studio](https://nfcstudio.app/) already markets batch writing, placeholders, write validation, and run validation, while [NFC Check](https://play.google.com/store/apps/details?id=joerikros.nfcchecker) has mass-market bulk writing and history. A readback still cannot prove correct physical placement or authenticity.

**Reopen when:** A vertical asset system supplies a placement invariant unsupported by existing batch tools and distributes the workflow.

**Verdict:** `passed_market` — exact current incumbent.

## WedgeCheck

**Concept:** Scan a known barcode through a Bluetooth HID scanner and show exact received characters, timing, suffix, and terminator.

**What killed it:** Mintsoft's 2026 Scanner Test and Star's Quick Setup Utility already perform the diagnostic, and scanning into Notes is a three-second free substitute. The phone still cannot promise how a different POS host will interpret the scanner.

**Reopen when:** A scanner-fleet provider requests a branded cross-model commissioning tool and supplies distribution.

**Verdict:** `passed_market` — native substitute and incumbent-owned workflow.

## DisplayProof

**Concept:** Detect an external display, show the negotiated mode, and render grid, color, motion, and audio fixtures from the phone.

**What killed it:** [AV Aid](https://apps.apple.com/us/app/av-aid-toolkit/id660072020) and [ProMapper](https://projectionmapping.app/) already cover detection and test patterns. If the event's actual source is a laptop, the phone also tests the wrong signal chain.

**Reopen when:** The phone is the actual event source and a workflow unavailable in current test tools is identified.

**Verdict:** `passed_market` — exact incumbent and source mismatch.

## RentalPurge

**Concept:** Guide a renter through model-specific infotainment deletion before vehicle return.

**What killed it:** The phone cannot inspect or erase data retained by a generic vehicle head unit. The [FTC](https://consumer.ftc.gov/articles/renting-car) already advises renters to delete the device from vehicle settings, and [Privacy4Cars](https://privacy4cars.com/aboutus/) owns model-specific deletion procedures. A checklist cannot truthfully say the vehicle was purged.

**Reopen when:** An OEM or rental-company integration exposes retained-data inventory and an authenticated wipe result.

**Verdict:** `passed_market` — false authority and exact incumbent.

## SensorReady

**Concept:** Wake BLE cycling/running sensors and show whether the phone received live heart-rate, cadence, speed, power, or battery data.

**What killed it:** Wahoo and free BLE tools already display this state. More importantly, a phone connection is not the target head unit's connection and may consume the sensor's only slot.

**Reopen when:** A sanctioned head-unit integration exposes the actual target connection state.

**Verdict:** `passed_market` — host-state mismatch and vendor feature.

## KeyDrill

**Concept:** Test whether a hardware security key can complete a WebAuthn challenge from the phone before the user depends on it for recovery.

**What killed it:** A key authenticating to this app's relying-party identifier says nothing about enrollment at Apple, Google, Microsoft, or an employer. Free WebAuthn test sites and vendor utilities already test transport and key state, while the actual account must be tested in its authoritative system.

**Reopen when:** An identity-provider integration supplies per-account enrollment and test state, with an audited employer-paid implementation.

**Verdict:** `passed_market` — wrong relying party and security authority.

## CrashTape

**Feature merge:** Add external-input route loss to CrashTape's interruption matrix. Apple exposes previous/current audio routes and change reasons. On input loss, the recorder should immediately segment or pause and log an exact marker such as `USB microphone unavailable at 12:43:08; input changed to built-in microphone`.

This strengthens CrashTape's existing truth boundary; it does not create a separate product or payer. The route event cannot prove the transmitter, subject microphone, or captured quality remained healthy.

## Workflow Failure / WTP lane

## Automation Canary

**Concept:** Put a final background App Intent in a recurring Shortcut. Each callback records completion and re-arms the next local missed-check-in notification.

**Why it looked promising:** The loop is local, phone-owned, recurrent, technically feasible, and has a strong 60-second disable-and-alert demo.

**What killed it:** Automation Control already logs automations and implements a `did not run in the last` condition. Pushcut already exposes schedule/cancel notification primitives, and Healthchecks offers free heartbeats. The safe claim is only `No Canary callback was recorded by the deadline, or monitoring could not re-arm`; it cannot verify previous side effects or guarantee notification delivery.

**Reopen when:** Automation Control cannot provide independent missed-run alerts, Pushcut users reject its recipe, 4/20 qualified users prepay $7.99, and a 100-run physical-device matrix produces zero false-healthy states.

**Verdict:** `passed_market` — exact host feature and free substitutes.

## Etsy PayoutLens

**Concept:** Share Etsy statement/order CSVs, select a bank deposit, and deterministically bridge sales, fees, refunds, reserves, and availability into matched, review, and unexplained rows.

**What killed it:** Etsy publishes a [free reconciliation procedure](https://help.etsy.com/hc/en-us/articles/360016389113-How-to-Calculate-Your-Etsy-Payments-Deposit-Amount), [Seller Profit Guard](https://sellerprofitguard.com/) now performs the exact workflow locally in a free browser tool, [Reconcile Locally](https://usereconly.com/etsy-payout-reconciliation/) offers local files and inexpensive paid reconciliation, and connected accounting products own automation. Etsy is also changing the Payment Account, creating ongoing schema maintenance.

**Reopen when:** Ten sellers prepay after using the exact free tools and the parser matches 100 real regional/reserve/refund deposits without a false match.

**Verdict:** `passed_market` — exact free product and platform remediation.

## Mileage Exception Inbox

**Concept:** Compare exported mileage-tracker trips with Calendar events and flag missing, duplicate, overlapping, or fragmented candidates.

**What killed it:** The two sources are incomplete; their absence cannot reconstruct a drive, distance, path, or business purpose. MileIQ and Everlance already charge for capture, manual repair, classification, and reports and can absorb the comparison.

**Reopen when:** A tracker exposes signed raw location evidence or an accountant/employer adopts the exception report as a normal review artifact.

**Verdict:** `passed_market` — non-authoritative reconciliation.

## MarketClose

**Concept:** At craft-market close, reconcile opening/closing cash with entered Square, Venmo, PayPal, Zelle, and expense totals.

**What killed it:** [FairPulse](https://fairpulse.app/), Market, Evnt, and Square already cover offline sales, tenders, expenses, inventory, and event recaps at free or low monthly prices. Without direct imports, the product adds double entry and still cannot detect an unlogged sale.

**Reopen when:** Automatic multi-rail imports become available and current market-vendor products still lack variance closeout.

**Verdict:** `passed_market` — exact vertical apps.

## BatchTrace Lite

**Concept:** Scan ingredient lots into a cottage-food, soap, or cosmetics production batch and export the recorded trace chain.

**What killed it:** [CottageBatch](https://cottagebatch.com/) already includes package scanning, ingredient lots, expiry, batch logs, labels, and recall reports; [Craftybase](https://craftybase.com/) owns broader maker inventory and traceability. A stripped local ledger carries nearly the same safety/compliance implication with less authority.

**Reopen when:** Three paid producers complete 50 real batches with strong scan accuracy and explicitly prefer records-only software to the incumbents.

**Verdict:** `passed_market` — exact products and compliance risk.

## KitManifest

**Concept:** Import a rental-equipment manifest, check every accessory at pickup and return, and show unmatched items before leaving the counter.

**What killed it:** [Cheqroom](https://www.cheqroom.com/pricing/), [Sortly](https://www.sortly.com/pricing/), and [MyGearVault](https://mygearvault.com/) already cover kits, scanning, custody, and check-in/out. The rental house owns the authoritative issued/accepted state; a renter's private checklist cannot prevent a charge.

**Reopen when:** A rental partner supplies manifests and acknowledges the completed return in its own system.

**Verdict:** `passed_market` — system-of-record mismatch.

## COI Pocket

**Concept:** Extract vendor and expiry fields from Certificates of Insurance and show documents expiring before upcoming jobs.

**What killed it:** [TrustLayer](https://www.trustlayer.io/plans) already provides expirations, renewals, messaging, reports, and document collection free for up to 50 vendors. A certificate states what a PDF says; it does not prove current coverage, endorsements, carrier standing, or contractual sufficiency.

**Reopen when:** Carrier or broker access verifies live policy state with an insurance-backed authority boundary.

**Verdict:** `passed_market` — exact free incumbent and liability boundary.

## FieldShot Gate

**Concept:** Require one photo in each trade-specific shot-template slot before a solo contractor closes or leaves a job.

**What killed it:** [CompanyCam](https://apps.apple.com/us/app/companycam/id960043499) already combines time/location photos, checklists, templates, reports, and integrations with large paid traction; field-form products provide the same pattern. Filling a slot does not prove the photo satisfies a payer or inspector.

**Reopen when:** A payer, franchise, or trade association mandates a narrow template and accepts the artifact.

**Verdict:** `passed_market` — incumbent feature.

## ConsignDiff

**Concept:** Compare a mutually accepted consignment intake with later sales, returns, commission, and payout to flag missing units and settlement differences.

**What killed it:** [Consigna](https://consigna.app/) already provides shared transfer acceptance, sales, returns, and locked closeout ledgers; [Cerno](https://cernostudio.com/) and other consignment systems own the workflow. A one-sided artist record lacks the authority that makes the comparison useful.

**Reopen when:** A gallery, market, or retailer supplies a signed export/API and distributes the product to consignors.

**Verdict:** `passed_market` — exact two-sided products and cold start.

## Cross-review disposition

The reciprocal attack confirmed zero validation survivors:

- **Automation Canary** ranked least dead because the technical state is real, but all three teams ultimately classified it as a host-feature/market pass after the Automation Control evidence.
- **CopyFence** had the strongest natural irreversible boundary, but CCC already implements the same verification-and-delete loop below $7.99.
- **ChirpHunt** had the best crisis-time discovery, but that channel favors WhichBeep's no-install browser tool and ChirpHound's low one-time price.
- **ChargeWiggle** and **SpinBalance** can record real sensor transitions while still being unable to support the diagnosis users would buy.

## Next-loop directions

1. Naturally occurring two-party acknowledgments where neither side already owns a full vertical system.
2. Phone-authored local state transitions with a recurring trigger, but only after exact utility searches.
3. Interruption recovery outside recording, especially processes whose journal can be owned locally.
4. Reconciliation based on two authoritative exports, provided the phone has a genuine capture/distribution advantage.
5. Exception detection in hobbies and prosumer tools where the final target, not a proxy, is directly measurable.
6. Accessibility workflows in which the user controls the truth boundary and co-design can replace inference.
7. Small-device and accessory workflows newly enabled by current OS triggers, while treating native absorption as the default threat.

## Build recommendation

None. Loop 1 improved the decision archive but did not produce a product that remained compelling after exact-product, authority, behavior, price, and cross-team attacks.
