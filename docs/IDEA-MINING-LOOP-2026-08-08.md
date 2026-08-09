# Idea Mining Loop — 2026-08-08

This dossier records the two-round research and adversarial review performed after the dinner-decision concept was passed. The objective was not to maximize the number of ideas. It was to find mobile-native paid products whose core loop changes a real-world state, then kill anything that was merely an AI document wrapper, a reminder with manual upkeep, a thin feature for an incumbent, or an exact 2026 clone.

## Result

### 1. Media Card Custody — conditional go

**Positioning:** The chain of custody between camera and verified backup.

A professional photo/video crew gives each memory-card wallet slot an opaque QR identity. Each use creates a new immutable cycle:

`NOT CLEARED → LOADED → EXPOSED → CUSTODY HANDOFF → REPORT PARTIAL → EVIDENCE MATCHED → CLEARANCE PENDING → CLEARED UNDER POLICY → FORMAT RECORDED → new NOT CLEARED cycle`

The product is not a card inventory or a manual red/green toggle. A green state is machine-gated by ingest evidence. The first supported evidence must be a current multi-destination job report with explicit source/cycle and destination fields, or a validated ASC MHL chain/seal. A plain MHL is an open XML hash manifest, but it does **not** prove that two independent physical destinations exist or bind itself to a physical card. Two ordinary matching MHL files therefore remain amber (`manifests agree; destination independence attested`) rather than turning green. A second operator attests only after the selected policy's machine evidence passes. A manual exception remains amber and is never represented as machine-verified.

Current catastrophic-loss reports show the pain is still live, including a May 2026 graduation shoot where half the work was lost after the wrong card/folder was treated as copied: <https://www.reddit.com/r/photography/comments/1tr879z/made_a_costly_mistake_with_a_clients_grad_photos/>. The professional market already pays for checksum ingest software: ShotPut Pro is $169 and ShotPut Studio is $299; the vendor reports more than 50,000 users for Studio: <https://www.imagineproducts.com/product/shotput-pro/mac> and <https://www.imagineproducts.com/news/press-release/imagine-products-releases-shotput-studio-2-1-with-automated-workflow-pipelines/>. The open Media Hash List specification is documented at <https://mediahashlist.org/mhl-specification/>.

No exact mobile product was found that connects the physical handoff before ingest to the machine evidence created after ingest. The dominant substitute is a red/green wallet, flipped cards, and gaffer tape. That substitute is fast and brutally effective, so the app survives only if its machine-gated crew trail changes the trust model.

**Truthful MVP:**

- QR on a card case or wallet slot, never adhesive on SD contacts or a surface that enters a camera.
- One real current report parser—prefer a verified ShotPut CSV/TXT fixture or ASC MHL chain data; no vendor-PDF parsing in v1.
- Local parsing and raw-report deletion by default because paths can leak client and computer names.
- Hard report-to-cycle binding by source/roll label or an embedded cycle token; never silently match on filenames alone.
- Append-only events and explicit revocation/correction records.
- Wording is `CLEARED UNDER POLICY`, not `backup exists`, because a report proves what the ingest tool observed at that time, not that a drive still exists now.
- The app never formats media.

**75-second hackathon demo:** scan wallet QR and create a red cycle; record a crew handoff; attempt a premature clearance and show it blocked; import one genuine current multi-destination report or ASC MHL chain fixture; show the source/cycle binding and verified evidence; have operator two confirm through a one-time QR; turn the cycle green under the selected policy; record the later format and immediately open a new red cycle. If only two plain MHL fixtures are available, the honest demo must stop at amber.

**RevenueCat hypothesis:** free for one project/two cards and a complete safety loop. Creator Pro unlocks unlimited cards/projects, more report adapters, crew confirmations, history, and export. Test roughly $39.99/year solo and $99/year crew; lifetime can be offered to solo users. Never interrupt an active clearance with a paywall.

**Kill gates:**

- A real report cannot be reliably bound to the physical card/cycle or does not establish the destination evidence required by the selected policy.
- The product requires PDF parsing, NFC, or automatic card detection to feel valuable.
- Three real event crews complete fewer than 90% of required transitions across three shoots.
- A red/green wallet is consistently faster and operators do not value the machine trail.

### 2. Confirmed Spoken Details — conditional co-design test

**Positioning:** Turn a fragile spoken detail into something both people explicitly confirmed.

This is not another caption app. During a consensual in-person conversation, live transcription identifies fragile tokens—dates, times, amounts, phone numbers, addresses, and alphanumeric codes—and presents them as large, focused cards. The current speaker taps `Confirm` or `Edit` on the same phone. The record says `speaker confirmed`; it never claims that speech recognition was objectively accurate.

Caption willingness to pay is proven by products such as Ava ($9.99–$14.99/month) and Hearing Buddy ($9.99/month or $59.99/year), but no exact two-person confirmation handshake surfaced: <https://www.ava.me/pricing> and <https://apps.apple.com/us/app/hearing-buddy-speech-to-text/id6747363502>. The remaining white space is the ritual, not transcription quality.

The core product must be co-designed with Deaf and hard-of-hearing users. It is iOS-first and requires a custom Swift module over Apple's Speech framework; Expo does not expose live speech-to-text. Dates, times, currency, phones, and addresses should use deterministic detectors/regex. Names remain weak and should be user-highlightable. No diarization is needed because the physical tap identifies the confirming speaker.

**Truthful MVP boundaries:** no saved audio by default; explicit consent and visible microphone state; unsupported device/locale is a hard stop; no medical, legal, financial, or emergency positioning; no claim that a confirmation is legally binding.

**RevenueCat hypothesis:** the confirmation loop remains free. Pro can unlock saved history, templates, export, and expanded languages. Lifetime is more credible than a large recurring fee.

**Kill gates:** 8–12 DHH co-design participants; at least 90% usable token capture across 100 representative utterances; median card latency under 1.2 seconds; at least 60% say the ritual is less awkward/faster than their current caption workflow; at least 50% reuse in week two.

### 3. Two-Source Solar Check — narrow conditional

**Positioning:** Reconcile what the solar system observed with what the utility meter billed over the same window.

The user supplies an Enphase report and one supported utility bill/export. The app aligns dates and compares energy quantities across the correct measurement boundary, returning one auditable exception or `not comparable`. It must not assume panel production equals utility net import/export: self-consumption, batteries, conversion losses, time zones, billing boundaries, and missing consumption CTs make that false.

Current owners repeatedly struggle with the comparison, and Enphase itself teaches users to compare the two sources manually: <https://enphase.com/learn/home-energy/explore-your-system/utility-bill-and-enphase-app>. BillGuard already audits a single utility bill for $2.99 and publishes a NEM-credit workflow, so the only surviving wedge is the second-source reconciliation: <https://billguardapp.com/en/blog/solar-net-metering-credit-not-showing-how-to-fix>.

**Truthful MVP:** Enphase plus one named utility; CSV/manual-confirmed dates and kWh; energy quantities only; no universal PDF extraction, Tesla dependency, dollar-credit accusation, or national tariff engine.

**Monetization hypothesis:** first check free, then approximately $2.99–$3.99 per check. An installer support/white-label product is more credible than a broad consumer subscription.

**Kill gates:** 20–30 real paired reports; more than 90% expert agreement on `normal`, `not comparable`, or `actionable exception`; median setup under three minutes; support burden under five minutes per report; at least 20% pay $3.99 after a free first check.

## Ideas killed or demoted in this loop

| Idea | Decision | Why |
|---|---|---|
| Todoist Task-Debt Reset | Parked/feature-risk | Real post-illness/new-parent backlog pain and a writable API, but episodic value, native bulk rescheduling, and easy incumbent copying. |
| TipCheck | Passed — market | Restaurant charge alteration is too rare; every use requires a second manual bank check days later; iOS cannot read bank-app notifications. |
| Deposit Receipt | Passed — market | Lower frequency than TipCheck and deposits/tax/tips/nonrefundable fees make automatic conclusions unsafe. |
| Toll Window | Passed — market | GoToll/neoRide already support rental plates and timed removal; a rules directory has maintenance cost and little recurring WTP. |
| BasketCheck | Passed — market | Sundria already combines Kroger coupon reminders and receipt audit; clipped-coupon/purchase APIs are gated and receipt-to-coupon matching is fragile. |
| TradeProof | Passed — market | QH8 Asset Passport and Return Proof already capture device/package evidence; carriers/platforms may still ignore it. |
| ParkProof | Passed — market | An exact current app with the same name plus TicketPlea and WheresCar already cover ticket evidence/appeal workflows. |
| Reconnect | Passed — market | iCable, CableCanvas, and Dis/Assemble occupy cable/photo/reassembly; rare use loses to a photo and masking tape. |
| Timer Lens | Passed — market | Camera-to-timer is a good demo, but Siri is faster for sighted users and a laundry-specific camera timer already exists; accessibility requires difficult seven-segment OCR. |
| Gaugekeeper | Passed — market | MeterPix and Meter Usage already provide photo/OCR, confirmation, history, graphs, and exports at a very low price. |
| ClassPass Credit Rescue | Passed — market | No consumer balance/pricing API; recurring screenshots and inaccessible live inventory reduce it to a thin reminder. |
| Spotify Playlist Time Machine | Passed — market | PlaylistHistory is exact; Spotify development mode is capped at five allowlisted users and broader quota access requires a large established organization. |
| Right Refill | Passed — market | Exact/adjacent barcode-memory and photo-shopping-list apps exist; likely a low-priced lifetime utility, not a recurring business. |
| ShipCheck | Passed — market | Address Alert is an exact current warning extension; screenshot/share behavior is too much friction. |
| HoldWatch | Passed — market | Without bank data it cannot verify a release and becomes Notes plus Reminders; banks increasingly show expected pending dates themselves. |
| ManualLens | Passed — market | Exact model-plate/manual/error-code apps are launching; official revision coverage and safety are the product. |
| Local TOU Rate Truth Meter | Passed — market | PG&E Toolkit and utility calculators already compare plans; every territory adds tariff/version operations. |
| Prior-Auth Clock | Passed — market | ClearPath and insurer trackers already cover authorization deadlines, expiry, visits, and appeals. |
| Youth-Sports Change Catcher | Passed — market | Sammi already integrates the major team systems and catches changes/conflicts. |
| Pet Medication Handoff | Passed — market | DoseHandoff and a current exact swarm already solve caregiver dose conflicts. |
| Aircraft/Seat Change Watchdog | Passed — market | Flighty/ExpertFlyer own the alerts, while universal reservation/seat access is unavailable. |

## Decision

If choosing a build from this loop today, Media Card Custody is the only one that earns a product-spec sprint. Confirm earns a co-design prototype, not an implementation commitment. Solar earns a data-validation notebook with one installer/utility, not a broad app build.
