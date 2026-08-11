# Technological Capability Research — "What is now possible that wasn't ~3 years ago?"
Round 12 Shipaton research | Researcher: TECHNOLOGICAL-CAPABILITY | 2026-08-10

Method: verify current (2026) status of each capability via primary docs, then for each ask: **"What product would have been annoying, expensive, inaccurate, or impossible 3 years ago but is practical now?"** Products must survive removing "AI" from the pitch — AI is an implementation mechanism, not the value proposition. Every claim is labeled FACT (verified this session via URL), FACT-T (publicly documented, from pre-trained knowledge, not re-fetched), INFERENCE (interpretation), or HYPOTHESIS.

---

## Cross-cutting finding: two cost/capability collapses define this window

**FACT (this session):** Token prices collapsed ~100–600x in three years.
- GPT-4 (launch 2023): $30/M input, $60/M output → gpt-4o-mini (2024): $0.15/$0.60 → gpt-5-mini (2025): $0.25/$2.00 → gpt-5-nano: $0.05/$0.40 → gpt-5.6-luna: $0.20/$1.20, batch $0.10/$0.60. (https://developers.openai.com/api/docs/pricing)
- Haiku 4.5: $1/M in, $5/M out; Sonnet 5: $2/$10. (https://www.anthropic.com/pricing)
- Transcription: gpt-transcribe ~$0.0045/min, gpt-4o-mini-transcribe ~$0.003/min; live transcribe ~$0.017/min. Embeddings text-embedding-3-small $0.02/M tokens. (https://developers.openai.com/api/docs/pricing)
- **Meaning:** anything that "turns unstructured capture (photo, voice, paper, noise) into structured records" dropped from ~dollars to ~fractions of a cent per unit. That is the mechanism; the product is whatever the structured record is worth to someone.

**FACT (this session):** Apple now gives indie apps **free** server-side LLM inference.
- Foundation Models framework: native Swift API, on-device + Private Cloud Compute (PCC), multimodal, on-device Vision tools, any LLM provider via the Language Model protocol. Small Business Program apps with <2M first-time downloads get Apple Foundation Models on PCC at **no cloud API cost**. (https://developer.apple.com/apple-intelligence/)
- Google's on-device stack is production-ready: Google AI Edge / LiteRT (formerly TFLite), LiteRT-LM (run LLMs on-device on Android/iOS/web), MediaPipe task APIs; on-device small language models with multimodality, RAG, function calling (May 2025); Gemini Nano on Android. (https://ai.google.dev/edge)

**INFERENCE:** For a Shipaton app, the "no-cloud-cost Apple Foundation Models (PCC)" + "on-device Foundation Models" combo means an iOS-first app can run AI features at essentially zero marginal inference cost and zero privacy blowback — while Android users can fall back to cheap API models (gpt-5-mini-class).

---

## Capability-by-capability

### 1. On-device AI / small local LLMs
- **(a) Now possible:** Apple Foundation Models on-device + PCC, multimodal prompts, Vision tools (FACT, https://developer.apple.com/apple-intelligence/). Google LiteRT-LM runs LLMs on Android/iOS with RAG + function calling on-device (FACT, https://ai.google.dev/edge). Gemini Nano on flagship Androids (FACT-T).
- **(b) Product hypotheses:** (1) A field "voice+photo → structured log" tool that runs the structuring model on-device so records never leave the phone (works in basements/garages with no signal — where tradespeople actually work). (2) A private "describe this machine/part/serial plate by speaking" lookup for technicians.
- **(c) Who pays:** Business/prosumer (trades, facilities, inspectors) — they pay in days; also the offline angle matters because job sites have no signal.
- **(d) Phone-native advantage:** the camera, mic, GPS, and NFC tag reader are all on the same device as the model.
- **(e) Evidence:** FACT for platform existence; HYPOTHESIS that it materially improves field-capture products.

### 2. Inexpensive inference (LLM API price drops)
- **(a) Now possible:** 100–600x price collapse (above). Batch and caching cut another 50–90%. A structured-extraction task that cost ~$0.10 in 2023 costs <$0.001 now; wholesale transcription of a 1-hour job-site meeting ≈ $0.27 (gpt-4o-transcribe $0.006/min).
- **(b) Product hypotheses:** (1) Voice-dictated job tickets/estimates for trades — real-time ASR + structuring on every spoken intake, no human dispatcher. (2) Photo → line-item estimate/quote for small contractors (vision + structured output); the AI is invisible plumbing; the product is "a quote you can send in 4 minutes."
- **(c) Who pays:** small businesses whose time is billable (trades, service desks, agencies).
- **(d) Phone-native advantage:** the phone is the on-site capture device; no desktop step.
- **(e) Evidence:** FACT pricing (https://developers.openai.com/api/docs/pricing; https://www.anthropic.com/pricing).

### 3. Multimodal models
- **(a) Now possible:** One model takes photo+text+audio together: Apple Foundation Models framework (multimodal prompts, on-device image reasoning) (FACT, https://developer.apple.com/apple-intelligence/); Image Playground API for in-app photorealistic image generation on PCC (FACT, same URL); gpt-image-1-mini $2.50/$8 for image gen. GPT-5-class models read a photo of a damaged fender or a hand-drawn sketch and produce structured, correct output.
- **(b) Product hypotheses:** (1) "Snap → structured damage/condition report" for insurers, landlords, rental yards (before/after evidence the business actually uses). (2) Photo of a worn part/serial plate → the correct replacement part number + where to buy it (retail/discontinued-parts angle).
- **(c) Who pays:** businesses that currently pay humans to transcribe photos (inspection, claims, intake) or pay for field trips.
- **(d) Phone-native advantage:** camera + cellular + location in one pocket = the intake device already exists.
- **(e) Evidence:** FACT (Apple page); INFERENCE for unit economics at these prices.

### 4. Speech (recognition + synthesis + real-time)
- **(a) Now possible:** Streaming ASR at $0.017/min (gpt-realtime-whisper), $0.006/min batch; real-time conversational audio (gpt-realtime-mini audio $10/M ≈ ~$0.03–0.06/min) (FACT, pricing URL). On-device Speech framework + free Apple models on PCC. VOSK/Whisper.cpp run offline on phones (FACT-T).
- **(b) Product hypotheses:** (1) Voice-first structured intake for service desks / front desks (dictate, not type). (2) Job-site "say it, it's logged" daily log that auto-fills the inspection form fields. Both are products about *records*, not about "talking to AI."
- **(c) Who pays:** businesses whose staff type less when they talk (field service, intake, sales/estimating).
- **(d) Phone-native advantage:** the mic is in everyone's pocket; dictation on a laptop is awkward, on a phone it's natural.
- **(e) Evidence:** FACT pricing; HYPOTHESIS on workflow fit.

### 5. Vision / OCR
- **(a) Now possible:** On-device Vision framework OCR (VNRecognizeTextRequest) since iOS 13, Live Text camera feed since iOS 16, Apple Foundation Models vision tools (FACT-T + FACT, https://developer.apple.com/apple-intelligence/). ML Kit text/barcode recognition on Android (FACT-T). OCR quality on phone photos of plates, gauges, receipts, and nameplates is now good enough that a "photo → structured field value" pipeline works without a document scanner.
- **(b) Product hypotheses:** (1) NFC-tap + photo capture of serial plates/asset tags that auto-logs the ID into a maintenance/asset record. (2) Gauge/odometer/readout photo logging for compliance records (the photo is the proof; OCR is the convenience).
- **(c) Who pays:** asset-heavy businesses (facilities, rentals, labs) and compliance-driven industries.
- **(d) Phone-native advantage:** camera + NFC + geo together create a tamper-evident capture primitive.
- **(e) Evidence:** FACT (frameworks exist); INFERENCE (fits maintenance/compliance workflows).

### 6. Embeddings + local semantic search
- **(a) Now possible:** Embeddings at $0.02/M tokens (FACT, pricing URL). On-device vector search in iOS 18+ (NaturalLanguage + Core ML on-device embeddings) and expo-sqlite with vector columns (FACT-T, https://docs.expo.dev/versions/latest/sdk/sqlite/). Spotlight semantic index via App Intents entity schemas (FACT, https://developer.apple.com/apple-intelligence/).
- **(b) Product hypotheses:** (1) "Search your own job site photos by what's in them" for contractors (semantic, on-device, private). (2) Local semantic search over a technician's past repair notes ("when did we fix this valve model last?"). Note: generic "search your documents" was rejected by the ledger — differentiate by domain records + phone capture, not by files.
- **(c) Who pays:** prosumers/businesses with a growing corpus of their own photos/notes (the phone is where that corpus is created).
- **(d) Phone-native advantage:** the corpus is born on the phone (camera), so on-device search beats cloud sync for privacy and cost.
- **(e) Evidence:** FACT (pricing, expo-sqlite, App Intents); HYPOTHESIS on demand.

### 7. Notification infrastructure
- **(a) Now possible:** Standard push, rich notifications, scheduled/local notifications, OneSignal (a Shipaton prize partner) — all routine in Expo (expo-notifications) (FACT-T, https://docs.expo.dev/versions/latest/sdk/notifications/). The cost/ops burden of sending personalized, timely push collapsed with managed services.
- **(b) Product hypotheses:** (1) Availability alerters: watch government/utility portals (DMV/passport appointments, permit slots, vehicle registration) and push the instant a slot opens. (2) Compliance "due" reminders for recurring field checks (oil, filter, inspection dates) driven by calendar + push. Retention engine = the notifications themselves.
- **(c) Who pays:** consumers pay late (month 6) — this is a retention-prize play (OneSignal $25K) more than a revenue play.
- **(d) Phone-native advantage:** push is the one channel that reaches the user without an open app; the phone is also where the reminder becomes an action (open, call, tap-to-schedule).
- **(e) Evidence:** FACT (Expo docs); INFERENCE (alert products are single-user, low cold-start).

### 8. Widgets
- **(a) Now possible:** `expo-widgets` (SDK 57) — home-screen widgets + Lock Screen accessory widgets written in TypeScript/SwiftUI components, no native code, with timelines, interactive widgets, deep links (FACT, https://docs.expo.dev/versions/latest/sdk/widgets/). iOS 26 Liquid Glass rendering (FACT, https://developer.apple.com/news/). Android widgets still need native (react-native-widgetkit is iOS; Android Glance is native) — **iOS-only advantage for Expo teams** (INFERENCE).
- **(b) Product hypotheses:** (1) Field crew dashboard widget: today's assigned checks/jobs at a glance, tap to open. (2) "Next due" maintenance widget for home/business equipment.
- **(c) Who pays:** same as the app it serves — widget is retention/distribution, not the product.
- **(d) Phone-native advantage:** the lock/home screen is real estate only a phone app owns.
- **(e) Evidence:** FACT (expo-widgets API).

### 9. Live Activities / Dynamic Island
- **(a) Now possible:** Live Activities (iOS 16.1, 2022) + push-to-start remote updates + per-activity push tokens + push-to-start tokens, all now supported in `expo-widgets` (FACT, https://docs.expo.dev/versions/latest/sdk/widgets/). New "Accessory Live Activities" framework for accessories (March 2026 PLCA note) (FACT, https://developer.apple.com/news/). ActivityKit has a 8-hour (12 with explicit user interaction) wall-clock limit and power budget — a constraint, not a blocker (FACT-T).
- **(b) Product hypotheses:** (1) Long-running *personal* process status on the lock screen: "waiting for the coffee machine's descale cycle," "gym class waitlist position," "laundry at the laundromat," "parking spot countdown" — the phone becomes a glanceable status board. (2) Field-job timer: Live Activity keeps the current inspection/checklist visible and arms the "end of 8-hour limit" handoff.
- **(c) Who pays:** consumer (retention) mostly; some prosumer angle (keeping a job visible while your hands are full).
- **(d) Phone-native advantage:** Dynamic Island + Lock Screen is exclusive to the phone; no web/desktop equivalent.
- **(e) Evidence:** FACT (API + Expo support); INFERENCE that general-purpose "status" Live Activities are underserved (deliveries/rides already taken by incumbents).

### 10. App Intents / Siri AI / Visual Intelligence / Shortcuts
- **(a) Now possible:** App Intents entity + intent schemas make app content discoverable in Spotlight's semantic index and actionable via natural-language Siri; View Annotations give on-screen awareness; Visual Intelligence surfaces apps from Camera; Shortcuts assemble automations from natural-language descriptions (all FACT, https://developer.apple.com/apple-intelligence/). iOS 18+ Control Center controls via App Intents (FACT-T). Caveat: **no first-class Expo wrapper yet** — App Intents need a custom native module/config plugin (INFERENCE from the SDK 57 package list: no app-intents package present, https://docs.expo.dev/versions/latest/).
- **(b) Product hypotheses:** (1) "Siri, log the fuel reading on the generator" — voice-invoked field logging where the intent is the UI. (2) Widget + Siri + Shortcuts glue for a checklist/evidence workflow that hands control to the system.
- **(c) Who pays:** the host app's payers; App Intents raise retention and distribution ("works with Siri" is a store-listing differentiator).
- **(d) Phone-native advantage:** deep system integration is the moat vs. web.
- **(e) Evidence:** FACT (Apple docs); INFERENCE (build cost in Expo for a 6-week hackathon is non-trivial — budget native time).

### 11. Share sheets / document intake
- **(a) Now possible:** Share extensions + App Intents for Siri-driven handoff; expo-sharing; iOS document picker. Mostly mature, not the bottleneck. **Verdict: enabling, not differentiating** (INFERENCE).
- **(b) Product hypothesis:** "Send photos to your job log from any app" as friction-free capture into a structured field record.
- **(e) Evidence:** FACT-T (ShareLink, share extensions).

### 12. Camera APIs
- **(a) Now possible:** expo-camera/expo-imagepicker, Live Text camera feed (iOS 16), VisionKit document scanning, ARKit/RoomPlan 3D room scans (iOS 16), depth capture. Camera is a solved substrate — the differentiator is what happens to the capture (INFERENCE).
- **(b) Product hypothesis:** Measurement/survey from photos (RoomPlan for pre-move-in walkthroughs) — but the durable truth is the photo evidence, not the inference (rule 13).

### 13. NFC (Core NFC + Secure Element)
- **(a) Now possible:** NDEF tag read since iOS 11 (2017); background tag reading; ISO 7816 reader mode; iOS 18+ (2024) opened the **NFC Secure Element to third-party apps** (payments, keys, credentials) — initially EU DMA markets, expanded to more regions through 2025–26 (FACT-T, program well documented; see https://developer.apple.com/documentation/corenfc). Android Host Card Emulation has allowed SE-style apps for years (FACT-T). NFC tags cost ~$0.10–0.50 each and can be read by any iPhone by tapping (no pairing) — a zero-friction "identify the physical thing" primitive.
- **(b) Product hypotheses:** (1) **NFC-tap asset/unit identity** in field logging: tap the tag on the generator/vehicle/room → opens that unit's log → photo + voice entry appended with identity, time, geo. (2) Tap-to-verify for compliance ("I checked this extinguisher; here's the photo") — the tap replaces typing a serial number. SE-based payments/keys are real but involve entitlement + regulatory friction; NDEF tag products have none.
- **(c) Who pays:** businesses with physical assets and compliance duties (facilities, rentals, contractors, labs).
- **(d) Phone-native advantage:** NFC reader + camera + GPS in one device = a physical-world audit trail generator.
- **(e) Evidence:** FACT-T for Core NFC/SE access program; INFERENCE for tag-based product fit; note mDL (ISO 18013-5) reading is supported on both wallets (FACT-T).

### 14. Bluetooth / BLE / Nearby Interaction (UWB)
- **(a) Now possible:** BLE background operation (read/write/scan + iBeacon-style ranging); UWB Nearby Interaction since iPhone 11 (2020); accessory notifications + Accessory Live Activities (2026) for real accessory-to-phone experiences (FACT, https://developer.apple.com/news/). UWB needs hardware (newer iPhones) — fine for 2026 but a reach-restrictor (INFERENCE).
- **(b) Product hypothesis:** Tag-your-tools/keys with cheap BLE beacons and get "left behind" alerts — commodity, already played. UWB "find my stuff in the garage" is Apple's own game. **Verdict: weak standalone, strong as a component** (e.g., beacon identifies which unit you're logging in a dark equipment room).
- **(e) Evidence:** FACT-T (CoreBluetooth/NearbyInteraction), FACT (Accessory Live Activities).

### 15. Location / geofencing / visit monitoring
- **(a) Now possible:** Background location, region monitoring, iBeacon/BeaconRegion, significant-change + visit monitoring; expo-location; Always location with justification. Mature and cheap. The phone is the only device that silently knows where the work happens (INFERENCE).
- **(b) Product hypotheses:** (1) Auto-locate each field log entry to the site (evidence records need a where). (2) Geofenced reminders that fire only when a worker is on site ("while at 45 Acme St, remind me to photograph the roof") — rule 7: prove the ritual first, but the geo-trigger is the hook.
- **(e) Evidence:** FACT-T (Core Location), INFERENCE.

### 16. QR codes
- **(a) Now possible:** Scannable from any phone camera (no app needed); app-linking via universal links; App Clips for QR/NFC-launched mini-apps (FACT-T). QR is the "internet for physical places" primitive — zero-install handoff to web paywalls (ties into RevenueCat Funnels/web-to-app, FACT, https://www.revenuecat.com/blog/growth/web-to-app-funnels).
- **(b) Product hypothesis:** QR-on-asset → web-to-app funnel: a contractor scans the QR on a unit, lands on the web form, and is upsold the app (web purchase button path). QR is distribution, not product.

### 17. Wallets / digital credentials / mDL / passkeys
- **(a) Now possible:** Apple Wallet passes (PKPass) generated programmatically; pass auto-locking and location triggers (iOS 17); digital IDs in Wallet from 8+ states and accepted at TSA checkpoints at many airports (FACT-T, https://www.apple.com/wallet/); Google Wallet IDs similarly; mDL ISO 18013-5 NFC read by third-party verifier apps (FACT-T). Passkeys: 53% of people enabled passkeys on ≥1 account (2024 FIDO survey); 22% on every account; Google reports 4x sign-in success; CVS reports 98% reduction in mobile ATO fraud (FACT, https://fidoalliance.org/passkeys/). iOS 26 "Passwords" app normalizes passkey UX (FACT, https://developer.apple.com/news/).
- **(b) Product hypotheses:** (1) Passkey-first accounts for a field/business app (friction-free, phishing-resistant, "no passwords to forget" for older prosumer users). (2) Wallet pass as the "receipt" of a completed service/check (tap → shows the pass with the evidence summary) — the wallet is a persistent, system-trusted surface. (3) Verifier apps for mDL age/identity are legally thorny (rule 13) — avoid pretending to prove identity.
- **(c) Who pays:** businesses, as the pass/passkey removes account-recovery support cost (FIDO: 81% reduction in login help-desk incidents — FACT, https://fidoalliance.org/passkeys/).
- **(d) Phone-native advantage:** passkeys + Wallet are phone-exclusive; a web competitor literally cannot do them natively.
- **(e) Evidence:** FACT (FIDO stats), FACT-T (Wallet/mDL).

### 18. Background processing
- **(a) Now possible:** expo-background-task / background-fetch; iOS BGAppRefreshTask/BGProcessingTask (time-budgeted, opportunistic); Android WorkManager; APNs + Live Activity push-to-start for "wake the UI" without running code (FACT-T + FACT, https://docs.expo.dev/versions/latest/sdk/background-task/ and https://docs.expo.dev/versions/latest/sdk/widgets/).
- **(b) Product hypothesis:** Background refresh of availability/alert products (DMV slots, inventory) + push — the classic "watch the web for you" product is now cheap to operate.
- **(c) Who pays:** consumer (retention) — same caveat as §7.
- **(e) Evidence:** FACT (Expo docs); INFERENCE on iOS budget constraints for continuous background work (avoid promising real-time in background).

### 19. Accessibility APIs
- **(a) Now possible:** VoiceOver, Voice Control, Dynamic Type, switch control; Apple's HIG for accessibility; Android TalkBack. Accessibility is a distribution lever (Apple features accessible apps) and a niche payer (seniors, disabled users pay for specialized tools) (INFERENCE).
- **(b) Product hypothesis:** A voice-first field log naturally serves one-handed/no-look work (hands covered in grease) — accessibility-by-design, not accessibility-as-product.

### 20. Mobile payments
- **(a) Now possible:** Apple Pay/Google Pay web + in-app; Tap to Pay (merchant acceptance, iOS 15.4+); RevenueCat Billing for web (Apple Pay/Google Pay domain registration on web paywalls — FACT, https://www.revenuecat.com/docs/tools/funnels). For a Shipaton app the practical shape is: **web purchase button + Funnels with Stripe/Paddle/RC Billing** (2–6% web fees vs 15–30% stores; faster payouts; Epic ruling legalized web-paywall links in US) (FACT, https://www.revenuecat.com/blog/growth/web-to-app-funnels).
- **(b) Product hypothesis:** B2B field-tool priced on the web (employer pays / expense-able) with IAP as the consumer fallback — exactly the RevenueCat "web purchase + Stripe funnel volume" prize shape.
- **(e) Evidence:** FACT (RevenueCat docs/blog).

### 21. RevenueCat stack (the Shipaton dependency)
- **(a) Now possible (verified):** Funnels — hosted multi-step web onboarding/survey/checkout with branching, UTM attribution, analytics integrations, remote config, included in Pro (FACT, https://www.revenuecat.com/docs/tools/funnels). Payment providers: RevenueCat Billing, Stripe, Paddle. Web-to-app playbook + web purchase button (Epic ruling, US) + RC Capital next-day payouts (FACT, https://www.revenuecat.com/blog/growth/web-to-app-funnels). Experiments/offerings/targeting/paywalls (FACT, docs nav). RC Ads exists (FACT-T). Web subscribers renew at higher rates than store subscribers; ~15% audience overlap between app and web on Meta (FACT, RC blog).
- **(b) Product implication:** an explain-first B2B/prosumer product is the best fit for both the Stripe Funnel Vision prize (web volume) and the grand prize (revenue quality); Funnels make the web side a non-developer, remote-config surface.
- **(e) Evidence:** FACT (primary RevenueCat docs + blog).

### 22. Cross-platform frameworks
- **(a) Now possible:** **Expo SDK 57** (RN 0.86, React 19.2, iOS 16.4+/Android 7+; new-stores min SDK = iOS 26 SDK from Apr 2026) (FACT, https://docs.expo.dev/versions/latest/). expo-widgets (widgets + Live Activities), expo-sqlite, camera, audio, speech, notifications, background tasks — TS-only for the whole OS-integration surface *except* App Intents/NFC (native module needed). **Kotlin Multiplatform 2.4 + Compose Multiplatform stable for Android/iOS/desktop; KMP presence in top-10K apps doubled YoY; production users: Duolingo, McDonald's, Sony, Google Docs, Netflix** (FACT, https://www.jetbrains.com/kotlin-multiplatform/).
- **(b) Product implication:** a single team can now ship iOS widgets/Live Activities (Expo), plus optionally a native-code escape hatch; or ship fully-native-feel shared UI (KMP/CMP). For a 6-week iOS-first hackathon, Expo 57 is the leverage choice; KMP is the "Android-native feel matters" choice.
- **(e) Evidence:** FACT (both primary docs).

---

## Highest-value now-possible products (top 8)

Each survives "remove AI from the pitch" and maps to durable-truth rules (owned/sanctioned state, no false green, single-party adoption, business pays).

1. **NFC-tap field evidence log for contractors/rental yards** — tap the asset tag, speak + photograph, get a timestamped/geo-located structured record that resolves deposit/dispute claims. NOW: Core NFC reading is standard, NFC tags cost ~$0.10–0.50, cheap structuring makes the log searchable, and the phone is already the site worker's tool. (B2B pays.)
2. **Voice → structured job ticket intake for trade/service desks** — a dispatcher or site tech dictates a ticket and it lands structured (customer, unit, fault, action) without typing. NOW: realtime ASR ~$0.02/min + LLM structuring <$0.001/ticket; phone is the dispatch device. (B2B pays; retention via repeat workflow.)
3. **Photo + voice → line-item quote for small trades** — photograph the damage/job, speak scope, get a branded itemized estimate/PDF to send in minutes. NOW: vision + structured-output models and the 600x price drop make the economics work at small-job price points. (B2B pays.)
4. **NFC-tap compliance/checklist logger (extinguishers, equipment, labs)** — tap → run checklist → photo proof → export-ready compliance record. NOW: Core NFC + background + push + Wallet pass as the "certificate"; the photo is the truth, the log is the product. (B2B pays; recurring subscription.)
5. **Availability/slot alerter (appointments, permits, registrations)** — watch the portal, push the instant a slot opens; web-watch + push is now trivial and cheap to operate. NOW: notifications infra + background fetch are managed services; single-user (no cold-start). (Consumer; retention/OneSignal prize, not grand prize.)
6. **Real-estate agent voice → CRM/listing notes** — dictate listing notes in the car, get structured fields + follow-ups routed. NOW: ASR + structuring at near-zero cost; agents already pay for tools monthly. (Prosumer B2B pays; expense-able.)
7. **Pre-move-in / handover inspection reports for landlords & insurers** — tenant + landlord both photo/video the unit; the app is the shared evidence record that decides the deposit. NOW: structured capture + cheap processing make full walkthrough reports practical; one party (landlord/insurer) mandates it, so adoption is single-organization. (B2B pays.)
8. **Wallet-pass service/compliance certificates** — completed check/service emits a Wallet pass with the evidence summary, tap-able and system-persistent. NOW: PKPass generation + pass auto-lock/location features + the Wallet as a trusted surface are all mature; the pass is the "owned state" the phone holds. (B2B pays; retention moat.)

## Strongest raw signals (pain points with real-world evidence)
1. Web subscribers renew at higher rates than store subscribers; web funnel volume is a named prize (Stripe Funnel Vision) and RC makes web paywalls legal/simple post-Epic — the monetization rail exists (https://www.revenuecat.com/blog/growth/web-to-app-funnels).
2. AI is now near-free as a mechanism: GPT-4-era $30/$60 → $0.25/$2 (gpt-5-mini) → $0.05/$0.40 (gpt-5-nano); transcription $0.006/min (https://developers.openai.com/api/docs/pricing).
3. Apple gives indie apps free PCC inference (<2M downloads, Small Business Program) + on-device Foundation Models — AI cost is effectively zero for an iOS-first entry (https://developer.apple.com/apple-intelligence/).
4. `expo-widgets` makes iOS widgets + Live Activities + push-to-start a TypeScript-only build for the first time (https://docs.expo.dev/versions/latest/sdk/widgets/).
5. Passkeys reached mainstream: 53% of people enabled ≥1, 22% on every account; 81% cut in login help-desk incidents for enterprises (https://fidoalliance.org/passkeys/).
6. Core NFC + cheap tags make "tap the physical thing" a zero-friction identity primitive; NFC SE access is open to apps in expanding markets (https://developer.apple.com/documentation/corenfc).
7. KMP/CMP went production-grade (Duolingo, McDonald's, Netflix, Google) — a real second path to native-feel cross-platform if Expo's native gaps (App Intents, NFC) bite (https://www.jetbrains.com/kotlin-multiplatform/).
8. App Store reality check (2026): iOS 27-era, Liquid Glass, Accessory Live Activities, monthly-with-12-month-commitment subscriptions, richer monetization analytics — the store rewards polished system-integrated apps, not AI-wrapper chat (https://developer.apple.com/news/).

## Notes / caveats
- Facts from pre-trained knowledge are labeled FACT-T; core platform facts were re-verified this session with primary URLs.
- Rule 13 compliance: none of the top-8 products sell an inference as proof — the photo/tap is the proof, the structured record is the product.
- Rule 11 compliance: no two-party cold-start — where a second party exists (rentals, inspections), a single paying business mandates adoption.
- No convincing public adoption stat for general-purpose Live Activity apps was found in this session; the API/Expo support is verified, demand is INFERENCE.
