# Idea Mining Loop — 2026-08-09, Round 7

## Verdict

**Promote zero.** Round seven deliberately searched outside the recent event, photography, camera/OCR-comparison, generic-reminder, and Live-Activity-timer families. It found real $100–$100,000 consequences, but no new standalone paid app survived.

The round exposed a reusable rejection rule:

> A costly moment plus a manual phone ceremony is not a product. The phone needs authoritative state it can observe automatically, or the ritual will be skipped and a green state will create false confidence.

The active shortlist is unchanged:

1. **WeedCheck** — strongest Shipaton Design/Most Viral hypothesis.
2. **LotMatch** — strongest narrow business hypothesis.
3. **Confirmed Spoken Details** — strongest Peace Prize hypothesis.
4. **CutBolt** — conditional workroom verification hypothesis.
5. **Two-Source Solar Check** — narrow reconciliation hypothesis.

RateReplay was a rediscovery of the Round-2 Local TOU Rate Truth Meter, not a new idea. The new evidence reinforced its prior commodity/maintenance verdict.

## Cross-team graveyard

### PayeeLatch — vendor payment-detail change gate

**Loop:** A solo business owner shares an invoice or payment-change message immediately before ACH/wire payment. The app compares the vendor and bank token against a locally stored baseline and returns only `UNCHANGED`, `CHANGED—CALL A KNOWN NUMBER`, or `UNKNOWN`.

**Why the pain is real:** Current businesses describe familiar-looking vendor invoices whose bank details changed after email compromise. Current bank and fraud guidance recommends verifying any change through a known secondary channel:

- https://www.reddit.com/r/smallbusiness/comments/1qbmy2g/almost_sent_payment_to_the_wrong_bank_account/
- https://www.commercebank.com/business/trends-and-insights/2026/accounts-payable-fraud

**Why it dies:** The first invoice may already be compromised, so the app must ask the owner to establish a trusted baseline—the exact manual control people skip. An unchanged token does not prove account ownership. Many small businesses pay by card or check, so no bank token appears on many invoices. The category is also filling rapidly:

- Vantirs fingerprints QuickBooks vendor history: https://www.vantirs.com/
- PayGurd checks inbox, sender, vendor, and payment history: https://paygurd.com/
- PaySentinel accepts pasted text and PDFs: https://paysentinelhq.com/
- CallbackProof formalizes known-number callback, including solo overrides: https://callbackproof.com/

Local, mobile, and cheap are lower-end positioning—not a differentiated workflow. **Pass.**

### RateReplay — utility tariff replay

**Loop:** Import Green Button interval data for one utility and deterministically replay current tariffs to show what the customer would have paid.

**Why the pain is real:** One EV owner reports paying roughly $1,600 instead of about $330 after missing an off-peak plan; another manually modeled two years of Green Button data:

- https://www.reddit.com/r/BoltEV/comments/1rsbvgi/something_i_learned_a_year_too_late_peak_rates/
- https://www.reddit.com/r/evcharging/comments/1tyxas5/has_anyone_actually_compared_all_of_their/

**Why it remains passed:** This is the prior Local TOU Rate Truth Meter. PG&E Toolkit Pro and free utility comparators already exist. More importantly, the hard product is not parsing 35,000 interval rows; it is maintaining tariff versions, eligibility rules, tiers, demand charges, minimums, CCA generation, taxes, solar true-up, DST, multiple meters, missing intervals, and utility-specific CSV semantics. A bundled tariff silently becomes stale. A one-utility component-only calculator is feasible but does not truthfully promise the best available plan. **Duplicate/pass.**

### PrintGate — phone-side G-code preflight

**Loop:** Share a `.gcode` file to the phone and compare explicit bounds, units, temperature, nozzle, and profile tokens against a user-confirmed printer profile. Output `MATCHES`, `DIFFERS`, or `UNSUPPORTED`, never `safe to print`.

**Why it dies:** G-code is modal and dialect-specific, while start/end macros and slicer comments vary. The phone profile can become stale immediately after a nozzle or hardware swap. Prusa firmware already compares model/nozzle/firmware with G-code, and AskTheNozzle/FixMyPrint/preFlight occupy analysis. The authoritative checkpoint belongs in the slicer, controller, or printer with current hardware state:

- https://help.prusa3d.com/article/hw-setup-mk2-5-s-mk3-s-_1943
- https://askthenozzle.com/diagnose

**Pass.**

### PrintFlight — mobile PDF preflight

**Loop:** Share a print-ready PDF and report objective page boxes, dimensions, font embedding, and output-intent facts against a saved shop preset.

**Why it dies:** Acrobat, PitStop/Enfocus, Fiery, RIPs, and a free browser-tool swarm already own preflight. A phone cannot model the shop's stock, finishing, RIP, and job exceptions, while limited JavaScript PDF parsers risk false passes on font/color objects:

- https://maratool.com/pdf-preflight/
- https://www.printpress.app/

**Pass.**

### Other technical primitives

| Idea | Phone primitive | Why it passed out |
|---|---|---|
| **TorqueAngle** | Foreground DeviceMotion while the phone is rigidly attached to a wrench/handle. | Mount slip, drift, device differences, and safety interpretation are severe; FastenIQ already measures and logs torque-angle. |
| **TactileBridge** | A tiny trained vocabulary of fixed haptic patterns for DeafBlind communication. | Expo haptics can be suppressed by device state and cannot guarantee custom language-quality patterns. The core should be free, needs DeafBlind co-design, and existing apps/hardware occupy the job. |
| **CompassNest** | Sample relative magnetometer readings around a proposed marine-electronics installation point. | MagSafe, cases, self-field, orientation, and model variance make phone thresholds unreliable. Apple says Compass is basic assistance; Garmin specifies a handheld compass for interference tests. |

Platform and incumbent references:

- Expo 57 incoming sharing: https://docs.expo.dev/versions/v57.0.0/sdk/sharing/
- Expo 57 DeviceMotion: https://docs.expo.dev/versions/v57.0.0/sdk/devicemotion/
- FastenIQ: https://apps.apple.com/us/app/fasteniq/id6758679320
- Expo 57 Haptics: https://docs.expo.dev/versions/v57.0.0/sdk/haptics/
- TouchReader: https://forthebettergood.org/
- xTactor: https://xtactor.com/
- Expo 57 Magnetometer: https://docs.expo.dev/versions/v57.0.0/sdk/magnetometer/
- Apple Compass warning: https://support.apple.com/en-gb/guide/iphone/iph1ac0b663/ios
- Garmin interference test: https://support.garmin.com/en-US/marine/faq/gXH34Kpklu7BC81c9g32OA

## Market-mined candidates

| Idea | Atomic job | Why it passed out |
|---|---|---|
| **FillItRight** | Decide prepaid fuel versus self-refill at rental pickup. | GasCap and RentRight FillItRight already provide free exact calculators. The expensive remaining problem is a disputed post-return charge, which becomes an episodic evidence workflow. |
| **Seller NetLock** | Reverse-calculate the listing/offer floor needed to preserve a reseller's target net. | Seller Profit Calculator, FeePilot, FlipLedger and a dense calculator market already exist; fee tables require constant maintenance and the phone adds no moat. |
| **GroomScope / ShaveCall** | When matting forces a different cut or price, obtain an owner decision before clippers proceed. | Groomfiy, Formfy and Tuft already own the exact consent/price-change workflow inside grooming systems. A second app delays the occupied grooming table. |
| **RideOffer Net** | Include probable empty return miles before a driver accepts a rideshare offer. | Mystro, Para, Maxymo and related tools already filter dollars per hour/mile/destination; screen/notification access remains fragile. |
| **NetworkDoubleCheck** | Confirm provider, NPI/TIN, facility, and plan network status before a medical visit. | The consumer app lacks authoritative plan-contract/TIN/facility data. A two-call script cannot promise verification and adds sensitive-health-data risk. |
| **SprayMix Final Tank** | Compute a partial-tank pesticide/herbicide mix from label rate, remaining volume, and area. | Tank Mix Calculator, SprayCalc Pro, and AGSIST already exist; label-version maintenance and safety liability are substantial. |
| **TowMargin** | Combine vehicle limits with actual passengers, cargo, trailer, tongue, and scale weights. | Towing Limit Pro, GVWR, TowCalc, RigIQ and SteadyTow saturate the category; estimates create unsafe conclusions without hardware/authoritative VIN data. |

Representative evidence and incumbent references:

- Rental fuel dispute: https://www.reddit.com/r/HertzRentals/comments/1vgdvkd/fuel_charges/
- RentRight FillItRight: https://myrentright.com/fill-it-right
- Seller fee misunderstanding: https://www.reddit.com/r/eBaySellers/comments/1shdgy9/i_completely_misunderstood_the_final_fee_system/
- Seller Profit Calculator: https://apps.apple.com/us/app/seller-profit-calculator/id6448756151
- Grooming refund/commission loss: https://www.reddit.com/r/doggrooming/comments/1tl53e9/groom_refunded_groomer_not_paid_for_groom/
- Groomfiy: https://www.groomfiy.com/
- Rideshare deadhead complaint: https://www.reddit.com/r/uberdrivers/comments/1tohs1f/uber_is_robbing_us_broad_daylight/
- Mystro: https://play.google.com/store/apps/details?id=com.mystrodriver
- Network-status billing failure: https://www.reddit.com/r/HealthInsurance/comments/1tcf4zs/provider_innetwork_but_they_bill_as_outofnetwork/
- Spray-mix damage: https://www.reddit.com/r/lawncare/comments/1sye9qin/how_screwed_am_i/
- Tank Mix Calculator: https://play.google.com/store/apps/details?id=air.com.taplogic.tankmixcalculator
- Towing-load failure: https://www.reddit.com/r/GoRVing/comments/1veivyf/need_help_with_payload_capacity/
- Towing Limit Pro: https://apps.apple.com/us/app/towing-limit-pro/id6753998534

## Product-mined candidates

| Idea | Atomic job | Why it passed out |
|---|---|---|
| **PlugLatch** | Tap a transom NFC/QR tag when installing/removing a boat drain plug; hold state on Lock Screen. | A tap proves proximity, not plug state. The $12.95 PlugKeyper physically traps the ignition key with the removed plug and is a stronger battery-free forcing function. |
| **TypeLock** | Customer types and approves the exact engraving/monogram/memorial inscription on the shop phone. | Retyping creates another transcription version. ProofHawk, Proof Approve, Ternvia, engraving systems, POS notes, and paper already own approval. |
| **BidCap** | Show auction buyer premium, tax, currency, and private all-in ceiling while bidding. | BidMate and free auction calculators are exact; manipulating a second phone while bidding is worse than platform state. |
| **OTD Lock** | Hold a car-buyer's walk-away out-the-door ceiling through each revised dealer offer. | A Notes number and willingness to walk are the behavior; purchases are years apart and DealDrive, CharmDeal, Cartego and CarEdge already cover the workflow. |
| **Allergy Readback** | Server reads back an allergy/modification state on the diner's phone before ordering. | A tap cannot verify kitchen process or cross-contact and may create dangerous confidence; staff may refuse a personal phone. Existing allergy-card apps and official guidance still require direct conversation. |
| **MoveScope** | Freeze original versus revised moving price before loading begins. | Bad actors will refuse; honest movers already have change-order tools. The consumer uses it once per decade and the product collapses into legal/document evidence. |

Representative evidence and incumbent references:

- PlugKeyper: https://plugkeyper.com/
- Proof Approve: https://proofapprove.com/
- BidMate: https://www.mybidmate.com/
- Car-buying add-on surprise: https://www.reddit.com/r/carbuying/comments/1uc9658/
- DealDrive: https://www.carwhere.com/dealdrive
- Food Allergy App: https://thefoodallergyapp.com/
- Official allergy guidance: https://www.food.gov.uk/print/pdf/node/5906
- Moving price escalation: https://www.reddit.com/r/moving/comments/1sxb1db/
- ChangeSnap: https://www.changesnap.app/

## The new negative pattern

Round seven added a rule to future screening:

1. Identify the exact authoritative state.
2. Prove the phone can observe it without a user-created baseline that can be stale, fraudulent, or skipped.
3. If the phone only records a tap, checkbox, timer, or assertion, compare it against a physical forcing function and the incumbent system of record.
4. Reject any green state that users could interpret as safety, compatibility, ownership, authorization, or correctness when the app merely observed proximity or historical equality.
5. Require the workflow to occur naturally on the phone; do not pull a desktop, printer, POS, CRM, accounting, or field-service job into a second mobile app for demo convenience.

## Final decision

Round seven promotes no new candidate. All serious concepts are archived, and Round eight shifts to repeated gaps found in current one- and two-star reviews of established paid apps rather than founder-idea posts.
