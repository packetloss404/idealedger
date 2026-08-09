# Idea Mining Loop — 2026-08-09, Round 8

## Verdict

**One conditional Shipaton engineering spike: CrashTape. No unconditional product promotion.**

Round eight mined current low-star reviews from established paid apps, then attacked each complaint for platform access, authoritative state, incumbent ownership, user habit, and RevenueCat fit. Most painful complaints were trapped inside the incumbent: a companion app could neither read the state nor repair it. CrashTape survived because it owns the microphone, local files, recovery journal, and visible proof loop itself.

This does **not** make CrashTape the strongest validated business. It makes it the strongest immediate week-one technical experiment and one of the clearest two-minute demos found so far.

## Conditional survivor: CrashTape

### Product thesis

A reliability-first iPhone field recorder that commits audio in short journaled segments. If the app is terminated or the audio session is interrupted, reopening the app verifies and reconstructs every committed segment. The interface never claims a take is saved until the output has been reopened and its size, sample count, and duration have been verified.

Atomic demo:

1. Start a consequential interview or continuous timecode recording.
2. Force-terminate the app.
3. Relaunch.
4. Recover the committed recording, display any explicit interruption gap, and play the verified output.

Truthful state language is `Recording` → `Finalizing` → `Verified`, or `Recovered — final 0–2 seconds may be missing`. It must never claim `crash-proof`, `zero loss`, call recording, or continuous capture while iOS has revoked the audio session.

### Why the pain is real

- Goodnotes officially says audio is unrecoverable if the app crashes before the user stops recording and recommends manually splitting long recordings: https://support.goodnotes.com/hc/en-us/articles/7352714477967-My-app-crashed-mid-Audio-Recording-Can-I-recover-this-Audio-Recording
- Current reviews of a recorder with roughly 510,000 Android reviews describe recording stopping after lock or app switching: https://play.google.com/store/apps/details?id=vr.audio.voicerecorder
- Other current recorder reviews describe important recordings disappearing or interview capture beginning late: https://play.google.com/store/apps/details?id=voicerecorder.audiorecorder.voice and https://play.google.com/store/apps/details?id=com.dreamcups.voicerecorder
- Current journalism discussions treat missing or unusable recordings as an occupational nightmare: https://www.reddit.com/r/Journalism/comments/1sk8itv/student_video_crisis/ and https://www.reddit.com/r/Journalism/comments/1u7qth7/possibly_dumb_question/

### Existing market and competition

The recorder market has visible paid behavior, but modest pricing:

- Just Press Record is about $6.99 one-time: https://apps.apple.com/us/app/just-press-record/id1033342465
- Tape It shows products around $15/year and $30 lifetime: https://apps.apple.com/us/app/tape-it-pro-audio-recorder/id1576341885
- Voice Recorder & Audio Editor has roughly 448,000 iOS ratings: https://apps.apple.com/us/app/voice-recorder-audio-editor/id685310398

The mechanism is not novel. DictationPilot already advertises crash-safe continuous saving, but has little visible traction and bundles transcription: https://apps.apple.com/us/app/dictationpilot-voice-to-text/id6751737265 . MedicalScribe describes a custom crash-resistant audio writer inside a medical vertical: https://shukant.com/posts/medicalscribe-ios-app-custom-audio-engine . Mature recorder substitutes remain strong.

The remaining wedge is making **kill the app and recover the take** the primary, testable promise rather than a hidden implementation detail.

### Technical truth line

Expo 57 provides live PCM through `expo-audio` and persistent byte appends through `expo-file-system`, but the documentation does not promise that live PCM callbacks continue in the background, and the JavaScript file handle exposes no documented `fsync`/synchronize operation:

- https://docs.expo.dev/versions/v57.0.0/sdk/audio/
- https://docs.expo.dev/versions/v57.0.0/sdk/filesystem/

The week-one pure-Expo spike should record 16 kHz mono `int16` PCM into two-second raw segments, serialize all writes, journal committed byte counts, and rebuild a valid WAV on relaunch. Raw PCM is about 115 MB/hour.

A trustworthy production implementation will probably require a small Swift Expo module: `AVAudioEngine` input tap → native serial writer → raw segment → `FileHandle.synchronize()`/fsync → atomic journal commit. JavaScript should receive levels and state, not own the durable audio write path.

### RevenueCat layer

The custody layer stays free: recording durability, recovery, background continuation, playback of existing takes, and export of one standard WAV. Do not paywall the reason the app is trusted.

`recorder_pro` can test $19.99/year or $29.99 lifetime for validated higher-quality formats, external-input profiles, folders, tags, markers, batch export, redundant-copy options, and advanced route diagnostics. RevenueCatUI appears only when a user invokes a Pro action; Customer Center handles management and restore. A subscription lapse can never interrupt or lock an active take.

This is weaker RevenueCat coupling than WeedCheck or LotMatch because the central differentiated feature must be free.

### Hard falsification gates

Kill or demote unless all pass:

1. 100/100 forced-termination, lock/background, incoming-call/Siri, audio-route-change, low-storage, thermal, and long-session fixtures preserve every earlier committed segment.
2. Unexpected terminal loss is no more than two seconds beyond an explicitly logged OS interruption.
3. Segment boundaries introduce no audible click or drop and no more than 100 ms discontinuity under continuous timecode.
4. No duplicated or reordered buffers and no false `Verified` state.
5. The same behavior works across at least three current iPhone generations/iOS versions.
6. Benchmark ten leading recorder apps; if five already pass the same force-kill recovery test, the wedge is positioning only.
7. At least 10 of 20 students, oral historians, researchers, or field interviewers voluntarily use it as their primary recorder for two weeks.

Engineering sequence: week one pure-Expo durability probe; week two native writer if required; weeks three through seven interruption hardening, local library/export, RevenueCat, privacy, device matrix, field trial, and App Store/demo polish. If the native writer cannot pass the matrix by the end of week two, kill it.

## Product and platform kills

| Idea | Complaint or loop | Why it dies |
|---|---|---|
| **AudioPin** | Preserve Audible title/chapter/offset outside Audible. | iOS exposes no sanctioned cross-app playback-position API; Audible already has Listen Log, Clips, and Bookmarks. |
| **Offline Ready** | Verify Libby, Gaia, or AllTrails assets before leaving Wi-Fi. | iOS sandboxing prevents verification of another app's DRM, cache, and license state; airplane-mode rehearsal is the honest workaround. |
| **AirReady** | Verify a travel eSIM is installed, enabled, and selected before departure. | Consumer apps cannot authoritatively read or control that carrier state on iOS or Android. |
| **ParkAbort** | Confirm plate, zone, and location before starting ParkMobile. | Only the operator can amend or cancel a session; the companion adds a checklist without closing the loss. |
| **TripClaim** | Claim a forwarded/PDF itinerary and create a lock-screen trip. | It becomes another high-correctness itinerary parser; TripIt added PDF/photo import and Flighty, Tripsy, and Wanderlog crowd the workflow. |
| **ClearPair** | Find YNAB transaction combinations equal to a reconciliation difference. | Toolkit Assisted Clear already did it, YNAB added mobile reconciliation, a matching sum is not proof, and new OAuth apps begin at 25 external users. |
| **FoodTile** | One-tap repeat-meal logging after MyFitnessPal added friction. | FoodNoms already provides widgets, Siri, Watch, and fast favorites; without MFP write access this becomes another nutrition tracker. |
| **ShiftMirror** | Maintain an independent Jobber punch and compare later. | A second manual clock creates another discrepancy and is not authoritative to the employer; exact time trackers are abundant. |
| **LabelRelay** | Crop, rotate, and print Amazon Seller labels as 4×6. | Label Expert and a large commodity utility category already do the exact job. |
| **RoomDial** | Restore Sonos rooms, groups, and relative volume from a widget. | Soro and Orto already occupy it, while Sonos is actively repairing and expanding its own controls. |
| **SafeChannel** | Keep selected communication apps available when Qustodio limits expire. | One parental controller cannot override another; building the controller is a separate high-trust product already covered by Screen Time and Family Link. |
| **StageScroll** | Import owned charts/PDFs for offline setlists, auto-scroll, and pedal control. | SongbookPro, MobileSheets, and BandHelper are mature exact products, and licensed Ultimate Guitar content cannot be imported. |
| **QueueLock** | Snapshot and restore Pocket Casts Up Next. | Pocket Casts exposes no sanctioned queue API; OPML exports subscriptions only, so the companion cannot access authoritative queue state. |
| **TagSafe** | Edit MP3 metadata while proving audio frames did not change. | Evertag, Kid3, and other editors own the task; unchanged audio is an implementation invariant, not a paid standalone loop. |
| **CodeLifeboat** | Verify an encrypted TOTP backup can be reimported and produces the same codes. | Core recovery cannot ethically be paid, 2FAS already provides free encrypted backup, and unaudited crypto is unacceptable. |
| **FontProof** | Verify glyph coverage and font installation. | The app can prove rendering only inside itself, not that a font profile installed or that another app accepts it; this belongs in iFont. |
| **CleanShare** | Losslessly remove EXIF/GPS and verify the output. | MetaClean and Vantre already provide local lossless verification and batch/HEIC support. |
| **LugLine** | Compare drum-lug hit consistency from microphone input. | Drumtune PRO and iDrumTune own lug/overtone modes, and same-position pitch readings remain physically ambiguous. |
| **ResumeDrop** | Resumable phone-to-browser local file transfer. | It requires native local networking or a relay, is fragile under iOS suspension, and LocalSend/PairDrop/Send Anywhere already own it. |
| **BlockCanary** | Diagnose whether an app blocker is actually enforcing rules. | FamilyControls requires native extensions and Apple approval; an app can observe only its own controller state and exact incumbents can add diagnostics. |

## Round conclusion

Round eight moves **CrashTape** into `validating` as the best immediate engineering spike, not the best proven business. The preserved shortlist is now:

1. **CrashTape** — strongest week-one technical spike and two-minute trust demo.
2. **WeedCheck** — strongest Design/Most Viral thesis.
3. **LotMatch** — strongest narrow paid-business thesis.
4. **Confirmed Spoken Details** — strongest Peace Prize thesis.
5. **CutBolt** — conditional irreversible-workflow thesis.
6. **Two-Source Solar Check** — narrow two-source reconciliation thesis.

The reusable screening rule from Round 8:

> Pain inside another app is not enough. The new app must own or be sanctioned to read the authoritative state and must be able to close the loop itself.

