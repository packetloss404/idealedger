# Idea Mining Loop — 2026-08-09, Round 4

## Verdict

Round four did not produce a new leader.

- **Best Shipaton concept:** WeedCheck.
- **Best narrow business:** LotMatch.
- **Only fresh conditional survivor:** CutBolt.
- **Discovery only:** LoadIn Scout.
- **Killed after deeper attack:** ResetFrame, CakeRide, CoatMatch, RollGate, ResinGate, RodGate, FormulaGate, FluidGate, StockGate, Signal Rehearsal, and HardOut.

The most reusable finding was not an idea. It was a product test:

> A last-irreversible-inch gate is only useful when the phone can obtain a trusted intended state without inventing a new setup ritual.

LotMatch remains strong because the user confirms a real first carton as the baseline. CutBolt, CoatMatch, RollGate, ResinGate, FluidGate, and StockGate all need a job token, external system, compatibility database, or manual setup before they can compare anything. That source-of-truth burden is usually the product killer.

## Ranking

### Shipaton

1. WeedCheck
2. LotMatch
3. CutBolt
4. LoadIn Scout

### Business

1. LotMatch
2. CutBolt
3. WeedCheck

Technical risk and hackathon-demo quality point in different directions. WeedCheck is the clearest two-minute transformation, while LotMatch has the cleaner business ritual and more defensible payer.

## Fresh survivor: CutBolt

### Thesis

Immediately before the first cut on an upholstery, drapery, or custom-sewing job, the operator scans the approved job token and the physical fabric-bolt label. The app compares only printed supplier, pattern/SKU, color, dye lot, and width and returns `MATCH`, `DIFFERENT`, or `UNREADABLE`. It never says the fabric is visually acceptable or safe to cut.

### Why the moment exists

Fabric suppliers commonly refuse returns after material has been cut. That moves the risk to the workroom at a natural, irreversible checkpoint. Supplier policies and disclaimers explicitly tell customers to inspect fabric before cutting:

- https://www.fabricdirect.com/returns-and-refunds/
- https://cortexfabrics.com/disclaimers
- https://www.blockshoptextiles.com/pages/fabric-faq

### Why it is weaker than LotMatch

- LotMatch can establish truth from a confirmed physical first carton. CutBolt must create or import a job token.
- Bolt labels are inconsistent and may omit dye lot or usable width.
- Shops with existing roll-trace software already connect purchase orders, rolls, cuts, and inventory. Adjacent systems include Kolay Perde and TintTally:
  - https://workomni.com/en/perde-yazilimi-ozellikleri/stok-takip-modulu
  - https://app.tinttally.tech/
- A work order plus a human label check remains a fast substitute.

### RevenueCat layer

- Free: one active job and a small number of first-cut checks.
- Pro hypothesis: $39–79/year for unlimited jobs, saved supplier templates, offline history, and crew audit.

### Kill test

Interview five workrooms before building. Kill if:

- they report fewer than one wrong-bolt near miss per 100 jobs;
- required fields are absent on common labels;
- accepted-token exactness cannot exceed 99% with zero false matches;
- median scan exceeds four seconds; or
- crews complete fewer than 90% of first-cut checks.

## Discovery candidate: LoadIn Scout

### Thesis

An event vendor walks the real dock-to-room route during a venue scout. The app records elapsed time, step count, and relative elevation while the vendor manually taps elevator wait, stairs, door, surface, and hold checkpoints. It produces a route card for the quote and crew handoff.

### Honest technical boundary

Expo Pedometer and Barometer can provide step count and relative altitude where available. Indoor GPS cannot create a trustworthy route. Door width, elevator wait, surface, cartability, repeated trips, booking rules, and clearances remain manual. A distance based on step length must be labeled an estimate.

### Evidence and competition

Difficult-access fees show that the route can affect the quote: vendors publish hourly difficult-access charges, stair charges, and per-flight fees.

- https://losgatoseventrentals.com/delivery/
- https://nyvibesentertainment.com/info

But Planning Hub already provides loading-area directions, elevator and door dimensions, loading timelines, fleet coordination, and equipment-fit checks. EventLab provides mobile/offline event maps and live routes:

- https://planninghub.io/vendor/
- https://planninghub.io/pricing/
- https://play.google.com/store/apps/details?id=io.eventlab.eventlabapp

The remaining wedge is therefore only a measured quote input, not a venue directory or navigation product.

### RevenueCat layer

- Free: two route cards.
- Pro hypothesis: about $49/year for unlimited venue cards, templates, quote scenarios, history, and exports.

### Kill test

Run 10 event vendors through 30 real scouts. Kill if:

- actual later load-in time differs from the route card by more than 20% on average;
- capture takes more than three minutes of added work;
- fewer than half of the cards are reused in a quote or crew handoff; or
- fewer than three of ten vendors prepay $49/year.

## ResetFrame: no-go standalone

### Best vertical found

Pool-service equipment-pad closeout produced current, consequential examples: technicians leave automation in service mode, waste/backwash settings remain active, or valve changes cause loss of water or poor circulation.

- https://www.reddit.com/r/pools/comments/1rtpct3/
- https://www.reddit.com/r/pools/comments/1uttrft/
- https://www.reddit.com/r/pools/comments/1m34bg0/

### Why it still fails

- The correct post-service state may intentionally differ from the pre-service state.
- The pre-service state may itself be wrong.
- Visual sameness cannot prove internal, electrical, hydraulic, or mechanical state.
- Equipment pads are three-dimensional, reflective, partially occluded, and exposed to sunlight, hoses, gauge movement, and actuator movement.
- Four fiducials plus two photos add a ceremony technicians can skip.
- Generic alignment/difference apps already exist. TamperCheck aligns photos and highlights changes; SiteAlign Pro supplies overlay-guided, aligned before/after capture.
  - https://play.google.com/store/apps/details?id=com.tampercheck.app
  - https://apps.apple.com/us/app/sitealign-pro/id6754368289
- Pool-service platforms already require checklist and photo closeout. Skimmer starts around $49/month and owns the technician route workflow:
  - https://www.getskimmer.com/product/backoffice
  - https://www.getskimmer.com/pricing

### Only resurrection path

Use an approved reference on a non-safety planar control surface, not an arbitrary before photo, and ship the comparison inside an incumbent field-service closeout workflow. A standalone App Store subscription is not recommended.

## CakeRide: no-go

The app would have to keep the driver's main phone rigidly mounted beside the cake or floral cargo, awake, and unavailable for navigation. Cab mounting measures the cab rather than the cargo deck. Vehicle, suspension, mount, packing, and cargo construction make shared thresholds misleading. The trace can show motion but cannot prove damage or cause.

Cheap physical indicators and dedicated loggers already serve shock workflows. A ShockWatch QR indicator is listed around $2.69:

- https://shop.spotsee.io/impact_indicators/logistics_indicators/shockwatch2qr

Only revisit as a fleet-training tool when the fleet already provides a dedicated mounted device and accepts vehicle-specific calibration.

## Other last-inch gates

### CoatMatch — passed market

Compare room/job requirements with a paint-can mix label before opening or pouring. Current wrong-color repaint pain is real, but PaintSight already stores approved color, code, sheen, and surface, while PaintScan inventories can labels. Printed label equality also cannot prove what was actually tinted.

- https://www.paintsight.com/
- https://paintscan.app/

### RollGate — passed market

Compare a queued wide-format print job with the physical media roll. The trusted job state lives in the RIP; roll labels may contain only supplier SKU; printer panels and media presets already intermediate the workflow. A useful version requires RIP and inventory integrations.

### ResinGate — passed market

Compare a resin bottle with the selected 3D-print profile before filling the vat. Industrial printers already scan and validate resin containers; consumer profile mapping is proprietary and vendor-copyable.

### RodGate — passed market

Compare a welding procedure with filler rod or spool batch. Kemppi WeldEye already supports WPS selection and filler-batch barcode scanning. The remaining workflow is enterprise traceability, not a consumer App Store entitlement.

- https://userdoc.kemppi.com/om/dcm-weldeye/en/content/topics/c_operation/using-weldeyeapp.htm

### FormulaGate — passed market

Compare a saved hair-color formula with the shade tube and developer. ColorLab Pro already scans shade and developer barcodes; formula platforms own the client state.

- https://www.colorlabproapp.com/

### FluidGate — passed market

Compare a vehicle with a proposed fluid container. Without an authoritative required-specification source this becomes a high-liability compatibility database; manufacturer selectors already serve the need.

### StockGate — passed market

Compare analog film stock with production/camera setup immediately before loading. FilmFridge already barcode-populates stock, ISO, and format; Flimos tracks loaded cameras and active rolls. The remaining pre-load gate is small and manually configured.

- https://filmfridge.app/
- https://flimos.app/

## Other technical screens

- **Signal Rehearsal:** a foreground connectivity walk can report historical endpoint reachability, not event-day coverage. Speedtest plus notes is a strong substitute; likely an event-ops feature.
- **HardOut:** a staged venue teardown Live Activity is easy to build, but ordinary timers and run sheets own the job. Feature unless field interviews show repeated coordination failures.
- **RoomEcho:** killed by current RT60/room-analysis apps.
- **NearKey:** killed by an exact arrival-based door-code product.
- **RigAngle:** killed by SpeakerAngle and unreliable compass behavior near metal and speakers.

## Unrelated paid-pain checks

### Sold Sweep — passed market

High-volume resellers do lose money when cross-marketplace delisting fails and an already-sold item remains live. Vendoo documents failed-delisting causes and warns about listings that remain active, but it also already sells cross-listing and auto-delisting from $14.99/month and claims more than 40,000 resellers. A manual, policy-safer share-sheet checklist is weaker than the incumbent automation.

- https://help.vendoo.co/en/articles/6760310-why-is-my-sold-item-still-listed
- https://www.vendoo.co/pricing

Only revisit for sellers who deliberately refuse automation. Require at least 80% sale-capture compliance and real $30/year prepayment.

### RotaDiff — passed market

Workers currently report schedules changing without clear notice, but WorkRota already imports rota screenshots or text, shows recognition confidence, and displays the exact difference before saving. It has a live Android product and RevenueCat Pro purchases.

- https://play.google.com/store/apps/details?id=com.workrota.app
- https://www.reddit.com/r/u_workrotaapp/comments/1uw6i8f/how_workrota_turns_a_rota_screenshot_into_a/

### Medication Room-Temperature Clock — passed market

Insulin and GLP-1 room-temperature windows cause real confusion, but Stash Diabetes already tracks these products and sends room-temperature expiration alerts for free. Exact manufacturer rules vary by formulation and country, while a phone cannot know the real temperature history. The combination of an exact free feature and medical ambiguity kills the standalone product.

- https://apps.apple.com/us/app/stash-diabetes/id6759133478

### Replacement Part Vault — passed market

The simple wish to remember the exact household filter, bulb, or replacement part is now covered almost verbatim by Parts & Filter Vault, alongside existing barcode-memory and inventory products.

- https://apps.apple.com/us/app/parts-filter-vault/id6772313223

## Re-attack of the leaders

### WeedCheck

The printed fiducial mat should become the normal weeding surface, and capture should auto-fire when all four markers are visible. Saved designs amortize import across repeated batches. Target dense or layered paid garments; simple text is faster to inspect by eye.

Critical friction:

- Cricut Design Space may not provide a clean export for Access designs.
- A screenshot is not a stable geometry source.
- Every manually weeded copy can contain a different defect, so every eligible transfer must be checked.
- The user's phone may already be running Design Space.
- Clear glossy carrier, glare, mirrored HTV, gloves, and recapture can destroy the habit.

Kill if source import exceeds 15 seconds, the total check exceeds 8–10 seconds, manual alignment is common, or sellers scan fewer than 70% of eligible paid transfers after week one.

Cheapest fixture spike:

1. Spend roughly $15–40 on real smooth opaque HTV in four colors.
2. Print black/white four-fiducial mats.
3. Cut one torture design with counters and seed 2, 3, and 5 mm missing/excess defects.
4. Capture 30 fixtures under flat/wrinkled carrier, window light, overhead glare, and two phones.
5. Before app code, test manual perspective warp and mask difference in ImageJ, Photopea, or a disposable OpenCV notebook.
6. Continue only if 3 mm defects reach at least 95% recall, correct fixtures create at most 5% false holds, and reprojection is under 1 mm.

### LotMatch

The real checkpoint may be pallet receiving or breakdown, not carton opening. Crews already move and sort labels there. Field discovery must choose one moment rather than assume per-carton install scans.

Critical friction:

- A bad first-carton baseline poisons the whole job, so it must be user-confirmed or confirmed from two cartons.
- Intentional multi-lot rooms require a per-zone baseline.
- Dust, torn labels, gloves, and inward-facing labels create skips.
- Token equality does not prove visual shade or defects. The honest result is `label tokens match — visual inspection still required.`

Cheapest fixture spike:

1. Obtain 30 real dusty, glossy, oblique labels from each of two candidate brands.
2. Manually transcribe product, SKU, lot, shade, and caliber as ground truth.
3. Scan barcodes first to determine whether lot/shade/caliber are encoded.
4. Use iPhone Live Text or an Extract Text shortcut with guided crops; do not write app code.
5. Kill if required fields are absent, full-token extraction is below 95% in the small sample, any unequal labels falsely match, or median capture/recapture exceeds four seconds.
6. Only then build a 100+ blind fixture corpus and native OCR spike. Production remains gated at over 99% accepted-token accuracy, zero false matches, and at least 90% crew compliance.

## Next loop

Round five should move away from camera/OCR verification gates. The pattern has now been mined hard enough to show its ceiling. Search for phone-native products whose moat comes from temporal coordination, on-device data, live activities, communication rituals, or a paid professional handoff rather than another scan-and-compare wrapper.
