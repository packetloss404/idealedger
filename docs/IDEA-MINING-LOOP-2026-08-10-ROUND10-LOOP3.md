# Round 10, Loop 3 — Owned Event Streams and Distribution

**Research date:** 2026-08-10

**Method:** Three independent lanes searched passive exception detection, phone-owned event streams, and transaction-timed distribution. Apparent leads were cross-attacked for native or exact incumbents, authoritative-state limits, pre-failure acquisition, repeated behavior, and $7.99 willingness to pay.

**Starting archive:** 223 ideas and 15 research dossiers.

## Executive summary

Loop 3 investigated 29 serious candidates and promoted zero builds. Twenty-two concepts add new decision records; seven are evidence merges into prior decisions. Health Sync Canary is parked for one paid four-week behavior test; it is not a build recommendation.

The most technically truthful loops—durable HTTP requests, Git pushes, video compression, PDF field reopening, and HealthKit source inspection—were already exact products or features of the host that owns the activity. RepairSerial had a stable identifier but no authority over legitimate replacement terms. CommuterLoad Pair had repeated monetary pain but no stable invariant across payroll, benefits-provider, and transit-card systems.

## Research statistics

- Serious candidates: 29
- New Ledger decisions: 22
- Evidence merges: 7
- Paid validation candidates: 1
- Build recommendations: 0

## Meta-analysis after Loop 3

### New failure patterns

1. **An owned event stream is necessary but still not sufficient.** The activity's host usually has the best recovery surface and distribution.
2. **Transport acknowledgment is not applied state.** HTTP response, BLE write response, MIDI send, share completion, and print completion all stop short of the user's intended effect.
3. **A stable identifier can still lack contractual meaning.** A different repair serial may be legitimate; a matching enclosure says nothing about internal parts or data.
4. **Three-stage reconciliation is usually a timeline, not an invariant.** Payroll, benefit orders, and transit loads can each be correct on different calendars.
5. **Independent verification must actually be independent.** PDFKit checking a PDF produced and rendered through the same stack cannot guarantee recipient rendering.
6. **The best phone-first transaction surfaces are already valuable enough to attract focused indies.** Several exact incumbents cost $0.99–$14.99 lifetime, often below the target price.

### Directions to stop mining

- Generic Safari position recovery, batch media export recovery, file type diagnostics, and import wrappers.
- Consumer replicas of repair, storage, locker, benefit, or transit operator workflows.
- Reconciliation based on physically invalid equality, such as charger kWh versus battery-state delta.

### Directions still worth exploring

- A state transition whose host does not expose recovery or history and cannot trivially add it.
- A sanctioned acknowledgment that crosses organizational boundaries rather than a private parallel record.
- A frequent consumer process with an authoritative locally owned artifact and no existing host app.

## Health Sync Canary

**Concept:** Observe newly authorized HealthKit samples and show overlapping records or newly contributing source identifiers without diagnosing, deleting, or choosing the correct sample.

Current users report duplicate Wahoo, Fitbit, and Polar data. HealthKit supports [background observer delivery](https://developer.apple.com/documentation/healthkit/executing-observer-queries), but Apple Health already exposes sources, source priority, and deletion. [Athalyze](https://apps.apple.com/nl/app/athalyze/id6471852530) merges multi-device workouts at €9.99/month or €99.99/year, and third-party apps cannot delete another app's workouts.

**Fatal boundary:** Overlap is not duplicate truth; multiple devices may contribute legitimate complementary samples. The app may report exact source identifiers and timestamps, but never label a sample duplicate, wrong, or medically anomalous.

**Verdict:** `parked` for a paid behavior test, not build. Recruit 15 multi-device Health users during a new integration, require at least four $7.99 prepayments, at least ten users to keep alerts enabled for four weeks, and at least five alerts to cause a concrete source/settings investigation. Seeded records must always report exact source identifiers and timestamps, never duplicate or wrongness labels, while observed background latency is measured and disclosed.

## PDF Form Reopen

**Concept:** Share a completed PDF, reopen the exact bytes, enumerate populated AcroForm fields, annotations, and signatures, render locally, and optionally export a flattened copy.

PDFKit exposes [widget annotations and field content](https://developer.apple.com/documentation/pdfkit/pdfannotationtextwidget), but cannot guarantee recipient renderer behavior or semantic completeness. Free [Adobe Acrobat mobile](https://helpx.adobe.com/acrobat/mobile/e-sign-documents/fill-sign.html) and [PDF Expert](https://apps.apple.com/us/app/pdf-expert-edit-and-sign-pdf/id1055273043?mt=12) already fill, sign, and flatten forms. PDFKit checking a PDF through the same rendering family is not independent validation.

**Verdict:** `passed_market`. Reopen only if an independent parser catches every planted lost-field case across 40 real forms with zero false passes and real prepayment.

## Chronology Patch

**Concept:** Compare PhotoKit creation date with embedded EXIF or filename date and preview a deterministic batch offset.

Photos already supports date, time, and location adjustment with revert in [Apple's guide](https://support.apple.com/en-in/guide/iphone/iph0edb9c18f/ios). [ExifSmith](https://apps.apple.com/us/app/exifsmith-batch-exif-editor/id6754808526) and a large metadata-utility market cover the job. Missing original metadata leaves no authoritative date, and migration use is burst-like.

**Verdict:** `passed_market`.

## ICS Import Gate

**Concept:** Share an ICS file, preview exact event count, UID, timezone, and conflicts, then selectively import to EventKit.

[CalAction](https://www.reddit.com/r/IMadeThis/comments/1u11hmv/calaction_importing_ics_files_on_iphone_made_easy/) already includes share import and conflict handling, [ICSKit](https://apps.apple.com/us/app/import-ics-files-icskit/id6475810320) validates and imports, and [ICS2Calendar](https://apps.apple.com/us/app/ics2calendar/id6742157560) costs $0.99.

**Verdict:** `passed_market`.

## Soundtrack Check

**Concept:** Inspect a selected video for an audio track and measurable audio samples immediately after capture.

The phone can authoritatively inspect a selected file, but [PhotoKit change observation](https://developer.apple.com/documentation/photos/phphotolibrarychangeobserver) is not a reliable immediate background wake after native Camera capture. Manual checking occurs after the irreplaceable moment. Free [MediaInfo](https://apps.apple.com/us/app/mediainfo/id1448983823) already enumerates tracks and codecs.

**Verdict:** `passed_scope`. Reopen only with a sanctioned native-camera completion trigger or by becoming a full camera app.

## Calendar Loop Triage

**Concept:** Cluster visually duplicated calendar or reminder records and show source and recurrence metadata before any deletion.

Native account controls and [Dedupify](https://apps.apple.com/us/app/storage-cleaner-dedupify/id1381180115) already exist. [EventKit identifiers](https://developer.apple.com/documentation/eventkit/ekcalendaritem/calendaritemexternalidentifier) do not reveal whether a visual duplicate is a provider sync loop, Reminder presentation, legitimate recurrence, or multiple subscriptions; a third-party cleaner cannot authoritatively choose deletion.

**Verdict:** `passed_market`.

## Vault CSV Audit

**Concept:** Locally inspect a password-manager CSV for target-schema columns, empty values, duplicate account keys, and malformed rows.

Apple already supports CSV/ZIP import and warns that the files are plaintext, while iOS offers direct credential exchange through [`ASCredentialImportManager`](https://developer.apple.com/documentation/AuthenticationServices/ASCredentialImportManager). The audit cannot detect fields omitted by the exporter, is a one-off migration, and carries an extreme trust burden.

**Verdict:** `passed_market`.

## FileKind Probe

**Concept:** Compare a shared file's extension, UTI, magic bytes, container parse, and Quick Look result.

Apple's [UTType](https://developer.apple.com/documentation/uniformtypeidentifiers/) and [Quick Look](https://developer.apple.com/documentation/quicklook) own the platform surface; a free [File Type identifier](https://apps.apple.com/in/app/file-type/id6767763814), MediaInfo, archive tools, and viewers already exist. The diagnostic cannot repair system-wide Quick Look failures or proprietary formats.

**Verdict:** `passed_market`.

## RequestOutbox

**Concept:** An App Intent durably queues an HTTP request for later attempt and records transport outcome, status, headers, and body without claiming the business effect occurred.

Background transfers and App Intents make a narrow queue feasible, but at-least-once retry is unsafe for arbitrary non-idempotent requests and a timeout can leave remote outcome unknown. [PocketHook](https://apps.apple.com/us/app/pockethook/id6761634641) already combines arbitrary HTTPS, App Intents, an offline queue, and automatic retry for free; Pro is $14.99 lifetime for other features. [Pushcut](https://apps.apple.com/us/app/pushcut-shortcuts-automation/id1450936447) owns adjacent background HTTP actions.

**Verdict:** `passed_market`.

## CueLedger

**Concept:** Journal selected MIDI show cues and dispatch state, then expose the last cue sent and an explicit resend after reconnect.

MIDI send or BLE write acknowledgment does not prove a rig applied or retained a patch. [MIDI Set Lister](https://apps.apple.com/us/app/midi-set-lister/id6759030523), [Set List Maker](https://apps.apple.com/us/app/set-list-maker/id410496349), and [Setlist MIDI](https://apps.apple.com/us/app/setlist-midi/id6760603790) already own song or section cues, MIDI commands, and reconnection workflows.

**Verdict:** `passed_market`.

## ShellResume

**Concept:** Journal typed SSH commands and received output, then show `response complete` or `remote outcome unknown` after reconnect.

A disconnect after bytes leave the phone cannot reveal whether a non-idempotent remote command completed, so automatic replay is unsafe. [Blink](https://apps.apple.com/us/app/blink-shell-build-code/id1594898306) uses Mosh for durable network changes, while [Termius](https://apps.apple.com/us/app/termius-modern-ssh-client/id549039908) owns Mosh, command history, and session logs.

**Verdict:** `passed_market`.

## PrintOutbox

**Concept:** Stage a printable item and retain it through AirPrint errors with bounded prepared, submitted, platform-completed, error, or unknown states.

UIKit completion does not prove physical pages emerged correctly, and native [Print Center](https://support.apple.com/en-nz/guide/iphone/iph92628b8f/26/ios/26) already displays and cancels the system queue.

**Verdict:** `passed_market`. Reopen only with a printer-vendor job ID and terminal page/consumable status.

## RenderResume

**Concept:** Persist a media transform recipe and segmented output so a compression/export queue can reconcile or resume after interruption.

[Squeeze](https://apps.apple.com/us/app/squeeze-video-compressor/id6761681524) costs exactly $7.99 lifetime and already supports batch compression, app switches, calls, lock-screen progress, and interrupted-job resume. [iVideo](https://apps.apple.com/us/app/ivideo-video-editor-toolbox/id6779898770) also has a background export queue.

**Verdict:** `passed_market`.

## ScrollAnchor

**Concept:** A per-site Safari extension stores URL, scroll ratio, nearby text quote, and DOM path, then restores the best supported anchor after reload.

[Glida](https://apps.apple.com/us/app/auto-scroll-for-safari-glida/id1661878047) already offers per-site Remember Position at $2.99/week or $9.99/year. Dynamic pagination, ads, personalization, virtual lists, shadow DOM, and frames limit semantic restoration.

**Verdict:** `passed_market`.

## PushTape

**Concept:** Persist a local Git commit and queued push, then fetch the remote ref and report whether it equals the commit.

Git object IDs provide unusually strong authority, but [Working Copy](https://apps.apple.com/us/app/git-client-working-copy/id896694807) already commits offline, pushes, exposes Shortcuts actions, continues background operations, and records transfer logs. [GitSync](https://apps.apple.com/us/app/gitsync/id6744980427) adds network-return retry.

**Verdict:** `passed_market`.

## RepairSerial

**Concept:** At repair intake and return, compare the visible device serial with the provider ticket and report same, different, or unreadable plus any explicit same-unit promise.

The serial identifies an enclosure or device, not whether replacement was allowed or internal parts and data were preserved. A different serial may be a legitimate whole-unit or logic-board replacement. Apple's [Parts and Service History](https://support.apple.com/en-us/102658) and [My Support repair records](https://support.apple.com/en-ca/102424) expose provider-owned context, while [RepairOps](https://repairshop.app/) and [RepairShopr](https://www.repairshopr.com/pricing) own tickets and handoffs.

**Verdict:** `passed_market`. Reopen only through provider distribution with explicit old-to-replacement serial mapping and real prepayment before intake.

## CommuterLoad Pair

**Concept:** On payday or monthly load day, compare payroll deduction, benefits-provider order or balance, and transit-card load to identify which visible stage has not advanced.

This is three systems with different calendars, aggregation, reversals, migrations, and identifier rules—not a stable invariant. [WageWorks](https://www.wageworks.com/employees/support-center/support-and-faq/mobile-app/mobile-app/), [HealthEquity](https://help.healthequity.com/en/articles/5691346-healthequity-mobile-apps), [Clipper](https://www.clippercard.com/clipper-app.html), and [OMNY](https://omny.info/trip-history) already expose the authoritative fragments. Repeated screenshots honestly produce only a private timeline.

**Verdict:** `passed_market`. Reopen only when one provider/transit pair exposes sanctioned dated events and documented settlement semantics, with at least 90% automatic matching and real prepayment.

## StorageClose Ack

**Concept:** Capture an empty unlocked storage unit and ask the facility to acknowledge that the rental is closed.

The facility's property-management account and closure receipt are authoritative. [Modern Storage](https://www.modernstorage.com/move-out-guide) and [Summit](https://www.summitselfstorage.com/move-out) already describe verification and emailed confirmation; operator platforms put move-out in the host system. A third-party app cannot close the account or compel acknowledgment.

**Verdict:** `passed_market`.

## PickupModel Gate

**Concept:** Compare an electronics order's model or SKU with the exterior box label before leaving pickup.

Retailer SKU, UPC, manufacturer model, serial, and contents are different namespaces. A correct exterior label can conceal a swapped product or even rocks, so a green match creates false confidence. The retailer's host workflow—such as [Best Buy pickup](https://www.bestbuy.com/site/help-topics/store-pickup/pcmcat204400050014.c?id=pcmcat204400050014%2F)—plus opening the box with an associate is stronger.

**Verdict:** `passed_market`.

## EV Session Pair

**Concept:** Compare charger session kWh and cost with vehicle state-of-charge delta at unplug.

The invariant is physically invalid because delivered energy includes charging loss, conditioning, and estimation. Charger meter/session records are authoritative for billing, and [ChargePoint](https://www.chargepoint.com/drivers/support/faqs/can-i-get-invoice-or-receipt-my-charging-session) already provides receipts and notifications. Session-still-running alerts belong in the network app.

**Verdict:** `passed_market`.

## ATM Dispense Witness

**Concept:** Record ATM terminal, time, screen outcome, cash received, and bank debit after cash fails to dispense.

ATM journals, cash reconciliation, and operator evidence are authoritative. The product is discovered after failure, risks recording sensitive context, and adds little beyond receipt, Notes, and an existing [ATM dispute form](https://www.jccb.co.in/admin/pages/images/application_forms/ATM%20Dispute%20Form%203.0.pdf).

**Verdict:** `passed_scope`. Reopen only through a bank or operator partnership.

## ParcelPickup Pair

**Concept:** Compare expected tracking ID with a parcel label during access-point collection.

Label equality identifies the parcel, but carrier scans and locker-release state establish custody. [UPS pickup state](https://www.ups.com/us/en/support/tracking-support/where-is-my-package/how-to-use-infonotice.page) and [Amazon Locker](https://www.aboutamazon.com/news/operations/how-to-use-amazon-locker) already own the code or barcode handshake. The app cannot help when staff cannot find the parcel and is redundant when they can.

**Verdict:** `passed_market`.

## Evidence merges

### UploadTxn and CaptureOutbox → ShareShelf

Durable local staging can report `saved locally` and a target-returned ID, but not safe delivery without a target query. [S3 Files](https://s3files.app/) and current destination-specific upload or capture tools already own durable queues. Merge the variants into ShareShelf; the same evidence reinforces the existing CopyFence and ResumeDrop decisions without adding new provenance edges to them.

### CalendarTxn → Calendar Lifeboat

EventKit can batch and locally commit supported changes, not prove provider propagation or invitation receipt. Apple documents [calendar export](https://support.apple.com/en-lamr/108306), while [Seamless Calendar](https://apps.apple.com/us/app/seamless-calendar/id1252243876) and other calendar tools already expose history or restore surfaces.

### MetadataTxn → PhotoCleanup Undo Map

PhotoKit can refetch supported fields the app changed, but not promise full EXIF identity or iCloud propagation. [Metapho](https://apps.apple.com/us/app/metapho/id914457352) and the [$6.99 Batch Metadata Editor](https://apps.apple.com/us/app/batch-metadata-editor/id6757622687) already provide batch change or reversible versions.

### RefundTender Readback → Warranty and Return Tracker

The merchant receipt and bank app already contain the authoritative initiation and settlement states. [ReturnTrack](https://apps.apple.com/gb/app/returntrack-refund-tracker/id6754392016) and current merchant help own tracking; this adds evidence to the existing return-tracker rejection.

### Payday Deposit Bridge → PaystubPair

Payroll statement and bank deposit are asynchronously authoritative, with split accounts, reversals, early-pay policies, and fallback checks. Preserve this as another timing boundary in PaystubPair.

### Rental Odo Readback → FillItRight

Dashboard observations can document odometer and fuel but cannot make unattended return state authoritative. [Proofr](https://proofr.app/) and [door.lease](https://door.lease/) occupy guided rental evidence; merge into the existing rental-fuel/evidence decision.

## Loop 3 decision

- **Build:** none
- **Paid validation:** Health Sync Canary only
- **New rejection records:** 22
- **Evidence merges:** 7

The next loop should leave generic recovery, import, diagnostic, and operator-portal companions behind. It must search for a repeated state transition whose host does not already own the recovery or acknowledgment surface.
