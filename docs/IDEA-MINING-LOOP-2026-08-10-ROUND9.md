# Idea Mining Loop — Round 9

**Date:** 2026-08-10

**Question:** Which ordinary, modern first-world problem is painful enough to justify a $7.99 phone purchase under the Idea Ledger product rules?

**Pricing assumption:** Prefer $7.99 lifetime. Use $7.99/year only when recurring value is real; do not disguise a one-event utility as a subscription.

## Outcome

Three independent research teams mined current consumer complaints, transaction-time mistakes, and paid utility categories. They then cross-reviewed the two provisional finalists.

**Final verdict: no validation winner and no build recommendation.**

- **CardReceipt** was the cleanest deterministic demo, but it fails logically: a barcode-over-sticker gift-card attack can make the visible card identifier and receipt identifier agree while the buyer's funds go to an attacker. Honest wording collapses the paid value to a visual last-four comparison.
- **PathWitness** can make a truthful organized before/after delivery record, but it is already surrounded by $2.99–$9.99 photo-proof tools, the official signed delivery document matters more, and discovery must happen before a rare delivery. It is worth only a no-code payment test if a retailer or installer can distribute it.
- The remaining candidates were exact incumbents, Ledger duplicates, host-state problems, manual evidence filing, thin OS utilities, or safety/truth failures.

The result is useful negative knowledge: “expensive mistake + camera + reminder + PDF” is now a commodity template. A new product needs an authoritative transaction-time handoff, a natural distribution channel, or a deterministic phone-only capability.

## Product rules applied

A candidate survived only while it had all of the following:

1. One clear user, trigger, action, and payoff.
2. A source of truth the phone can actually read or own.
3. A natural existing behavior, not a second-app ritual people will skip.
4. A useful output that does not imply safety, legal force, custody, compatibility, or eventual outcome.
5. Immediate one-person value without a network or unavailable host API.
6. A credible $7.99 purchase boundary and enough functionality for App Store review.
7. A crisp phone-native demonstration and a plausible seven-week build.

## Cross-reviewed finalists

### CardReceipt — physical gift card ↔ activation receipt

**Atomic loop:** Before leaving checkout, scan the gift card's visible exterior serial or barcode, scan the activation receipt, and return only `visible identifiers match`, `different`, or `unreadable`. Never capture the redemption PIN.

**Why it initially survived:** The physical card and receipt are naturally present, activation receipts often expose a masked card identifier, the consequence can be $25–$500, and the comparison makes a strong 30-second demo. The [FTC](https://consumer.ftc.gov/consumer-alerts/2024/12/check-out-gift-cards-you-buy-them), [Apple](https://support.apple.com/en-us/108285), and [Google](https://support.google.com/googleplay/answer/11564359) all tell buyers to retain the card and receipt when activation fails. Michigan's [gift-card guidance](https://www.michigan.gov/consumerprotection/protect-yourself/consumer-alerts/shopping/gift-cards-and-gift-certificates) explicitly recommends comparing the receipt number with the returned card.

**Fatal truth failure:** The [FBI's barcode warning](https://www.fbi.gov/contact-us/field-offices/elpaso/news/fbi-tech-tuesday-protecting-yourself-from-fake-barcodes-on-gift-cards) describes an attacker covering a real card barcode with a fake one. The cashier scans the fake visible barcode and the receipt prints that same attacker-controlled identifier. CardReceipt would truthfully report a match while the purchase is compromised. A green result would be read as “safe”; the fully honest message—“these two visible strings agree, but this does not verify the card, balance, activation, or tampering”—is not worth $7.99.

**Market pressure:** Free products such as [Cartava](https://apps.apple.com/us/app/cartava-gift-card-wallet/id6768470304) already scan and retain gift cards, while [QuickScope](https://apps.apple.com/us/app/quickscope-ocr-gift-scanner/id6749918722) scans gift-card codes and receipts. POS providers already own the authoritative activation event; [Toast](https://updates.toasttab.com/announcements/new-gift-card-activation-receipts) prints useful activation-receipt details.

**Decision:** Passed — market/truth. Do not code.

**Resurrection condition:** An issuer or POS supplies an authenticated activation/balance signal or tamper-aware token that cannot be defeated by a visible barcode overlay. Seeded overlay attacks must produce zero positive results.

### PathWitness — large-delivery route record

**Atomic loop:** The evening before a refrigerator, washer, sofa, safe, or fitness-equipment delivery, capture a short guided baseline of floors, walls, stairs, and doorframes. Before the crew leaves, replay the same viewpoints, mark items for review, capture the delivery document, and export an organized personal record.

**Why it initially survived:** The damage can be expensive. One 2025 homeowner described roughly $8,000 of flooring and doorframe damage followed by a denied claim. A phone can truthfully own the user's before/after images, notes, viewpoint pairing, and exported record. [Best Buy's current delivery guide](https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt331db39e81ce0100/68c1afdcba6f810650c2fd88/bby-shipping-large-item-en.pdf) already tells customers to inspect the item and delivery path and record damage on the delivery document before signing.

**Fatal product pressure:** The signed retailer document remains the mandatory handoff and matters more than a private photo packet. The app cannot establish causation, complete route coverage, liability, or claim success. Current tools already sell most of the mechanism: [DisputeCam](https://apps.apple.com/us/app/disputecam/id6771466464), [DwellTrack](https://apps.apple.com/us/app/dwelltrack-home-photos/id6761666535), [SiteProof](https://site-proof-app.com/), [Timemark](https://apps.apple.com/au/app/timemark-photo-proof-for-work/id6446071834), [Timestamp It](https://apps.apple.com/gb/app/timestamp-it-proof-camera/id327756085), [SnapProof](https://getsnapproof.com/), and [Fairspark](https://apps.apple.com/de/app/fairspark/id6762053271). Sparse ratings across several new entrants are a weak-demand warning, not whitespace.

**Distribution failure:** Search intent arrives after damage, when a baseline is impossible. App Store acquisition cannot support a low-LTV one-event pass. A retailer, appliance reviewer, inspector, installer, insurer, or delivery-booking flow must place it in front of the buyer before delivery.

**Decision:** Passed — market. No build. Allow only a no-code payment test if a real pre-delivery channel is available.

**No-code test:** Recruit 20 people with a real large-item delivery scheduled within 14 days. Offer a real $7.99 concierge service before delivery. Send a five-view guide, pair the returned before/after images, attach the signed delivery document, and return a local-download PDF. Continue only if at least 5 pay before the event, 16 complete the baseline, 14 complete the exit capture before the crew leaves, median baseline time is under three minutes, at least half change what they inspect or write before signing, and one repeatable channel acquires customers below roughly $2 or agrees to distribute the flow.

**Resurrection condition:** A retailer, installer, insurer, or marketplace embeds the flow in the scheduled-delivery message and accepts the resulting packet inside its official claim workflow.

## Candidate graveyard

| Candidate | Atomic phone loop | Why it died | Resurrection trigger |
|---|---|---|---|
| **TagReceipt / CouponProof** | Capture a sale tag or offer and the receipt; show a possible mismatch. | It is the existing BasketCheck thesis. Sundria is near-exact, while receipt abbreviations, weights, loyalty identity, exclusions, and stacking make pairing ambiguous. Replacing unavailable retailer state with per-item screenshots adds ceremony. | A retailer exposes the exact offer token on both display and receipt, or a 30-basket blind test exceeds 95% correct matching with zero false accusations and real prepayment. |
| **WaterCard** | Save the water/gas shutoff location, route, tool, and a printable card. | A $4.99 Home Maintenance Tracker already stores shutoff locations; a physical label is stronger during a power/phone failure. The app cannot verify the valve is correct or operable. | Plumber/inspector/insurer distribution plus strong placement, recall-drill, and payment behavior. |
| **ReturnClock** | Scan a receipt and remind the shopper before the return deadline. | KACHNG, Return Hero, Return Tracker, ReturnO'Clock, Proof, ReturnTrack, and retailer apps already occupy the category. The retailer remains authoritative about exceptions and refund state. | Retailer-authorized eligibility and refund-state APIs. |
| **RentalProof / RentalFuel Diff** | Guided pickup/return vehicle and gauge capture. | Not My Dent, Snap&Drive, RentalGuard, and rental-platform workflows already own the loop. | A card issuer, insurer, or rental agency accepts the record directly. |
| **BreakerAtlas** | Photograph and map a breaker panel; print/search circuit labels. | Breaker Map already provides mapping, AR overlays, trip logs, and QR access. | A new authoritative circuit-testing primitive unavailable to the incumbent. |
| **DoorFit** | Enter furniture/package and route dimensions to predict delivery fit. | Roomspan already sells this at $12.99 and models turns, doors, halls, elevators, removable parts, and safety margins. A phone-side model can create false confidence. | Retailer-provided packaging geometry plus a validated model with explicit uncertainty. |
| **DateAlarm** | Schedule one alarm for a future date. | AlarmKit triggered a swarm of exact utilities, and iOS 26.2 added alarms to Reminders. The alarm alone is too thin. | A narrow workflow where the alarm is only the final payoff. |
| **CancelReceipt / QuitProof** | Preserve cancellation evidence and alert if another charge appears. | RenewalWatcher, subscription trackers, Rocket Money, email, and bank dispute flows cover it. The app cannot authoritatively cancel or prove billing stopped. | Provider or transaction integration that proves cancellation and charge state. |
| **DepositProof** | Guided move-in/move-out evidence capture. | Existing Security Deposit Evidence thesis; door.lease, Deposit Shield, Tenant Inspect, and others are exact. | A tenant organization or jurisdiction mandates and accepts the format. |
| **PatternBlock** | Block phone-number ranges or wildcard patterns. | Number Shield, Phone Pattern Blocker, Call Ranger, WideProtect, and native call screening already occupy it. | A new sanctioned OS capability not used by incumbents. |
| **DropMatch** | Compare a prepaid parcel label tracking ID with the counter receipt ID. | USPS Rapid Drop, Whatnot, ReturnProof, and retailer return flows own pieces of it. Consolidated QR, final-mile, merchant, and tracking IDs can legitimately differ; matching proves neither contents nor custody. | A named high-value return flow with a documented identifier invariant and at least 80% directly comparable real fixtures. |
| **KeyCopy Diff** | Compare original and freshly duplicated key silhouettes before leaving. | WhatKey, MyKeyFinder, and KeyMe are adjacent. A side image cannot prove the blank/keyway geometry or that the copy turns the lock; $7.99 may exceed the copy price. | A hardware capture fixture or retailer partnership that validates function, not silhouette. |
| **FuelPair** | Compare an unfamiliar vehicle fuel label with the pump label. | Standardized symbols and direct visual comparison are faster. A false pass can cause expensive property damage, and phone use at the pump is awkward. | An OEM or rental partner supplies authoritative vehicle/fuel state and assumes the workflow. |
| **BagTag Pair** | Compare boarding-pass itinerary with outbound bag tag. | Multi-leg, interline, customs-recheck, and destination semantics make differences ambiguous; BagSnap and airline scanners are adjacent. | Airline-sanctioned itinerary and baggage-routing data. |
| **PackMatch** | Scan an order, each item, and the label before sealing a shipment. | Shopify Scan to Verify, ScanKar, Scanpacker, ShipStation, and warehouse systems own the authoritative order workflow. | A platform partner exposes an underserved seller segment and order state. |
| **Laundry Gate** | Decode a garment care label before washing. | iPhone Visual Look Up, Laundry Lens, GINETEX, and free symbol apps already do it. | A costly professional textile workflow with authoritative care data not covered by current tools. |
| **GearReturn Pair** | Compare modem/equipment serials with the provider return receipt. | ItemProof, ReturnProof, provider flows, and the existing Trade-In Proof thesis cover the event. The receipt does not prove eventual provider credit. | A provider accepts the pair directly and exposes credit state. |
| **DryClean Count** | Capture garments/ticket at drop-off and compare returned items. | Bags hide garments, visual appearance changes after cleaning, and manual counting is a ritual. Cleaner systems already use garment-level barcodes. | Cleaner-side integration with garment IDs and customer-visible reconciliation. |
| **InviteMatch** | Compare personalized inserts with addressed envelopes while stuffing invitations. | Many invitations have no personalized inner object; industrial mail matching already exists, and careful stack order is faster. | A high-volume consumer personalization workflow with machine-readable names on both objects. |
| **Takeout Count** | Compare receipt items with visible containers before leaving. | One item maps to zero, one, or several containers, sealed bags hide state, and delivery platforms already own refunds. | Restaurant-issued package/item identifiers or an order system integration. |
| **Travel-credit sentinel** | Import a voucher, surface its amount/code/expiry, and remind the traveler. | AwardWallet already has paid traction and manual voucher support; Cartava is free. The app cannot verify balance, expiry changes, or redemption state. | Airline-authorized credit state or a travel partner. |
| **Flight-disruption claim companion** | Capture boarding pass, notices, and receipts into a claim packet. | AirHelp offers free tracking and claim initiation; rules vary by jurisdiction and airline, while DOT refunds are authoritative. | A named jurisdiction/airline partner supplying authoritative disruption and claim state. |
| **Chargeback evidence packer** | Organize merchant correspondence and receipts into an issuer-sized bundle. | Bank apps already accept and track disputes; this repeats Consumer Case Agent and adds sensitive financial data without authority over the outcome. | An issuer endorses a structured import format. |
| **Hard-mode focus blocker** | Apply stronger friction to distracting-app overrides. | Opal, one sec, Freedom, AppBlock, and native Screen Time dominate; Apple entitlement approval is required. | A new platform capability or measured intervention incumbents do not provide. |
| **Medication read-and-remind** | Scan a prescription label into reminders and caregiver alerts. | Apple Health and Medisafe already provide mature medication scheduling/sharing. OCR errors are health-critical and the pharmacy remains authoritative. | Pharmacy/EHR integration and independently validated near-perfect extraction. |
| **Plant crisis triage** | Photograph a distressed plant and receive likely-care guidance. | PictureThis, Planta, and mature databases own the category. Diagnosis is not authoritative and bad advice can kill the plant. | A narrow expensive collection or professional workflow with proprietary observations. |

## Paid-category evidence

The round did find real willingness to pay in adjacent categories, but mostly for mature or recurring products:

- [Opal](https://opalapp.com/pricing) charges roughly $99.99/year for focus blocking and reports a large ratings base.
- [AwardWallet](https://awardwallet.com/pricing) charges $49.99/year and reports more than 25,000 paid travelers.
- [Medisafe](https://apps.apple.com/us/app/medisafe-medication-management/id573916946) charges roughly $39.99/year.
- [Not My Dent](https://apps.apple.com/us/app/not-my-dent-rental-damage/id6759535570) launched at $9.99 lifetime, but has very few ratings.
- [Fairspark](https://apps.apple.com/de/app/fairspark/id6762053271) asks €7.99/month for delivery complaints but lacks enough ratings to establish traction.
- [ReturnTrack](https://apps.apple.com/gb/app/returntrack-refund-tracker/id6754392016) asks £6.99/month or £39.99/year but also lacks meaningful visible traction.

Founder-set prices prove that the same opportunity is visible, not that buyers convert. For a $7.99 utility, real prepayment during an actual event is the required evidence.

## Reusable decision rules

1. **A visible equality check is not a product when the attack can control both visible values.** CardReceipt is the clearest example.
2. **Replacing unavailable authoritative state with screenshots works only when capture is already natural and the comparison becomes deterministic.** Otherwise it is manual evidence filing with OCR risk.
3. **The signed or platform-owned handoff outranks a private packet.** An app may help the user complete that handoff, but should not imply that its export has equivalent authority.
4. **Rare preventive utilities have a discovery-timing problem.** Search usually happens after the loss, when the required baseline cannot be created.
5. **“Expensive mistake + camera + reminder + PDF” is a commodity template in 2026.** A durable wedge needs transaction-timed distribution, authoritative data, or a capability competitors cannot copy as a template.
6. **Zero promotions is a valid research outcome.** The Ledger compounds when it prevents attractive demos from becoming misleading products.
