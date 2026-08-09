# Idea Mining Loop — 2026-08-09

This round deliberately moved away from generic AI wrappers, trackers, reminders, and broad creator CRMs. The useful pattern that emerged was **last-step verification before an irreversible physical action**. Three independently mined ideas converged on it: checking weeded vinyl before a heat press, checking material lots before installation, and checking replacement-part labels before installation. Adversarial review retained two narrow versions.

## Current result

### 1. LotMatch — strongest business candidate

**Positioning:** Catch the wrong carton before it becomes the wrong floor.

A tile or flooring installer scans one carton to establish a job baseline, explicitly confirms the manufacturer, product/SKU, dye lot, shade, and caliber fields, then scans every later carton at the natural moment before it is opened. The app returns only `MATCH`, `DIFFERENT`, or `UNREADABLE`, with the exact token highlighted. It never says that material is aesthetically compatible or safe to install.

The failure is expensive and current. A July 2026 tile installer described removing a finished installation and repairing the substrate after discovering a different dye lot: <https://www.reddit.com/r/Tile/comments/1vbabms/tiles_changing_colors_what_to_do/>. Other 2026 jobs show mixed batches producing visible rejected work and installers being blamed for failing to check labels: <https://www.reddit.com/r/Flooring/comments/1rgujk5/am_i_right_to_ask_for_a_reinstall/> and <https://www.reddit.com/r/Tile/comments/1quoxw5/mistake/>. Industry guidance explicitly says every carton must match on shade and caliber before installation: <https://www.stoneworld.com/articles/95185-are-your-boxes-of-ceramic-tile-compatible-what-to-look-for-on-the-label>.

No exact installer-side carton comparator surfaced. Flooring systems such as MeasureSquare and inventory platforms can track allocated lots, but that is not the last-inch field check against the physical carton. The dominant substitute is a foreman visually sorting labels.

**Truthful MVP:** tile only; two manufacturer label templates; barcode when useful, still-photo OCR otherwise; the installer confirms baseline fields; offline exact-token comparison; unreadable never becomes a match; optional timestamped job report. No product catalog, visual shade judgment, compatibility advice, or claims that every carton was scanned.

**Technical gate:** collect at least 300 real dusty, glossy, creased labels across ten brands before generalization. Accepted-token accuracy must exceed 99%, false matches must be zero, and median scan time must stay below four seconds. A two-brand MVP is feasible in the hackathon window; a universal label engine is not.

**Behavior/payment gate:** ten crews must scan more than 90% of cartons across five live jobs, and at least three must prepay. Pricing hypothesis: one active job and ten cartons free, then approximately $39.99/year solo or $99/year crew for unlimited jobs, shared baselines, reports, and history.

**Hackathon fit:** good business and monetization story, honest 20-second demo, but limited consumer virality. Strongest angle is HAMM/Idea to Income rather than the broad growth prize.

### 2. WeedCheck — strongest Shipaton candidate

**Positioning:** Find the vinyl you missed before the press makes it permanent.

A Cricut, Silhouette, or Siser garment seller imports a flattened monochrome SVG/PNG, places the weeded opaque heat-transfer vinyl on a simple four-fiducial alignment mat, and photographs it. The app registers the camera image to the intended geometry, highlights material that should have been removed or retained, and lets the seller fix and rescan before pressing the garment.

The mistake is real and difficult to reverse. Users describe forgetting the outside or an internal piece and then heating, picking, and covering residue to rescue the shirt: <https://www.reddit.com/r/cricut/comments/1foaypu> and <https://www.reddit.com/r/cricut/comments/17q8nr0>. Current heat-press guidance identifies incomplete weeding as material that permanently transfers as unwanted shapes: <https://www.palmgear.com/how-to-fix-heat-press-mistakes/>.

No exact consumer/mobile QA product surfaced. Cricut/Silhouette products help design, cut, align, and weed; industrial machine-vision systems inspect production, but no current phone product was found that compares the weeded physical transfer to the source geometry before pressing. The strongest substitute is a light pad plus human inspection.

The reachable market is large and already subscription-trained: Cricut reported just over 3.09 million paid Access subscribers at the end of 2025, and its official monthly price is currently $9.99: <https://investor.cricut.com/static-files/c78f4ae5-d656-4b65-8e69-3b547ea9a656> and <https://help.cricut.com/hc/en-us/articles/360009503713-How-do-I-purchase-Cricut-Access>.

**Truthful MVP:** 12×12 inches maximum; opaque, non-glitter, non-holographic HTV; flat carrier; outlined monochrome designs; printed high-contrast fiducial mat; still capture rather than live video; no guarantee of perfection. Native OpenCV or an equivalent local image-processing module handles homography, segmentation, and the diff mask.

**Technical gate:** on a blind 100-piece set with seeded misses, achieve at least 95% recall for errors larger than 3 mm, less than 5% false holds, and reliable registration within roughly 1 mm. Median check must stay under ten seconds. If manual alignment is routinely required, kill it.

**Behavior/payment gate:** recruit 20 small paid-garment sellers; at least 15 must voluntarily use it on more than 70% of eligible paid orders. Test five free checks, then approximately $29.99/year for unlimited checks, saved designs, batch mode, and production history.

**Hackathon fit:** the strongest fresh entry for the RevenueCat Design, #BuildInPublic, and Most Viral awards. The two-minute story is immediately visible: seed a missed vinyl island, scan red, weed it, scan green, then press. The recurring build-in-public format is equally clear: increasingly difficult real designs and honest failure cases.

## Existing leaders re-ranked

Media Card Custody/CardSafe is now **passed for this hackathon**, not the presumed leader. Plain MHL proves file hashes, not independent physical destinations. ASC MHL is stronger but current chain verification is incomplete, and current ShotPut can generate reports for arbitrary volumes outside a copy job. More importantly, a phone QR identifies an app record or wallet slot while the ingest report sees filenames, hashes, and mutable volume names. Honest machine binding needs the same per-cycle nonce written onto the physical source card before ingest and carried into the reports. That requires a desktop helper, ingest-vendor integration, or an extra card-reader ceremony; without it, the product is custody logging plus unattached evidence.

Confirmed Spoken Details/Confirm remains the strongest Peace Prize path, but it requires Deaf and hard-of-hearing co-design plus a successful native iOS speech spike. It is not displaced by LotMatch or WeedCheck because it competes on social impact rather than simple build confidence.

## Ideas killed or demoted in this round

| Idea | Decision | Why |
|---|---|---|
| FillGap / Rx Remainder | Passed — market | Pharmacy ground truth is missing from the label, rules vary, and refill/runway apps own the adjacent habit. |
| PartPair | Passed — market | Legitimate replacement parts often differ; exact comparison is noisy while compatibility judgment is a much harder incumbent-controlled product. |
| BoothCheck | Passed — scope | Rekordbox formats and booth compatibility are proprietary/versioned; adjacent readers and testers already exist. |
| SoloLight | Parked | Useful one-person trailer test, but OEM sequences/Camera Remote substitute and camera reliability plus annual WTP are unproven. |
| Recoverable-depreciation claim tracker | Passed — market | Wardkeep Recovery, ClaimEase, HomeGuard, and others already track line items, receipts, ALE, and withheld depreciation. |
| Creator privacy preflight | Passed — market | SafeToPost, PrivaShield, Ghost Scrubber, ShareWipe, and an active 2026 swarm already detect/redact faces, text, metadata, and identifiers. |
| Hourly paycheck audit | Passed — market | OverPay now scans pay stubs and audits hours/overtime; WageWatch, DOL Timesheet, and many trackers occupy the workflow. |
| Clothing size translator revisit | Passed — market for current implementation | WhatSize, FitPrint, FitCheck, Size Passport, Butter, and others now provide cross-brand or product-link recommendations; trustworthy SKU data remains the hard part. |
| Senior paper-mail action helper | Passed — market | UrMorning, Clarify, Plainly, Lttr, Mimi Care, and Second Read are already exact or near-exact. |
| Creator sponsorship proof packet | Passed — market | InfluenceKit automatically preserves metrics and creates sponsor reports; many 2026 creator CRMs track deliverables, proof, and payment. |
| Tattoo/custom-work approval | Passed — market | InkApprove and Proof Approve already provide mobile proof review, signed approval, and history. |
| GapCheck | Passed — market | Calendar travel-time and field-service schedulers already cover the feature; missing locations and route uncertainty remain. |
| QueueWatch | Passed — scope | Real accessibility need, but camera-propping and display variance make venue-side visual/SMS queues the stronger intervention. |
| Pet Food Runway | Passed — market | PawLife, FurNote, Pawtion, retailer subscriptions, and connected scales already occupy the loop. |
| BrineCam | Passed — market | Opening the tank already reveals the level and hardware monitors do the passive job better. |
| Campaign Snap Window | Passed — market | InfluenceKit, Provve, Pillar, and PostRaq already preserve creator metrics and generate reports. |
| ScopeTap | Passed — market | Exact low-priced scope trackers exist; enforcement, not capture, is the hard problem. |
| DialBack | Parked | Camera comparison of analog pedal settings is plausible, but tape/photo substitutes and stage-light accuracy need proof. |
| StencilCheck | Passed — scope | Curved skin, pose change, liability, and consented fixture needs make it much harder than WeedCheck. |
| PlateMirror | Passed — market | Two-sided capture loses to counting and existing camera plate-recognition products. |
| ThreadGate | Passed — market | Palette setup and unstable spool identifiers lose to machine displays and organized racks. |
| ResetFrame | Raw — next attack | Promising before/after control-panel state diff, but it needs one repeated field-service vertical and competitor/pain evidence. |
| RideTrace | Passed — scope | Background motion capture, mount variance, and safety inference exceed the current validation window. |
| ChairClock | Passed — market | Technically easy Live Activities, but salon platforms already include timers and standalone paid pain is unproven. |

## Current decision

For a real narrow trade business, validate **LotMatch** first. For the strongest Shipaton demo and build-in-public growth surface, validate **WeedCheck** first. Do not start implementation until each has its real-world fixture set; the fixture collection is the cheapest way to kill either before code hardens around a false promise.
