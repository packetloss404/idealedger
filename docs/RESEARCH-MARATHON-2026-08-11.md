# Research Marathon — 2026-08-11

**Mode:** Autonomous research lab operating on the Idea Ledger corpus. Continuation of the Round 12 build-out, pivoted from broad mining to focused re-research.

**Starting archive:** 348 ideas, 50 dossiers, 33 focus-group studies. SnapInvoice passed_market; LotMatch returns to experiment queue.

**Method:** 10-wave research marathon. Each wave independently stresses a different angle on the corpus. Findings promote to canonical records only when the evidence is sufficient; everything else stays in working notes.

**Date:** 2026-08-11
**Total session time:** extended (~3 hours of focused research)

---

## 1. Starting-state audit (Wave 0)

- Corpus shape: 275 passed_market, 31 passed_scope, 22 parked, 14 validating, 4 raw, 2 needs_reconstruction.
- 775 unique tags. Top tags: video (44), exact-incumbent (25), accessibility (23), camera (22), recovery (17), reconciliation (17), handoff (17), preflight (16), audio (16).
- Most common death reason (text pattern in `decision_reason`): "X already sells the exact feature" — Round 12's "2025–26 clone wave" finding, now confirmed by structural cross-tab.
- Tag coverage gaps: agriculture, manufacturing, real estate transactional, legal services, accounting, waste management, funeral services (only 1 occurrence), septic, welding, pest control, hauling, trucking commercial, inspection, title, escrow, insurance adjusting, fleet maintenance, equipment rental, warehouses, laboratories, 3d-printing.

## 2. Research waves completed

### Wave 1 — Ledger meta-audit

Confirmed pattern: 120 of 348 ideas are passed_market/high-fit, 104 passed_market/medium, 51 passed_market/low. Saturation in obvious markets is real and **structural** rather than circumstantial. Cross-tab analysis surfaced 6 industries with ≤3 tag-appearances that the corpus has barely touched.

**Meta-learning:** the corpus is in a post-discovery phase. Most "obvious" pain-driven ideas are now crowded in 2025-26. The genuinely empty cells are blocked by **host-owns-correction** (state vital records, employer payroll, government processes) or by **payer failure** (consumer peace-of-mind), not by oversight.

### Wave 2 — Boring-industry deep-dive (10 industries examined)

| Industry | Existing tools (2025-26) | Cell status |
|----------|--------------------------|-------------|
| Septic | SepticMind, ServiceCore, Jobber, Tooled Up Pro, Deelo | Saturated; 3.2-yr switching cycle |
| Towing | Towbook, TRAXERO, Dispatch Anywhere, Motive, Samsara | Saturated; multi-rate billing + impound well-served |
| Junk hauling | QuoteIQ, OptimoRoute, FieldCamp, Workiz, ServiceTitan | Saturated; 2025-26 swarm |
| Welding | WeldTrace, WeldInspect Pro, WeldEye, Codeware Shopfloor | Saturated; $295+/mo+ enterprise |
| Title/escrow | Qualia, SoftPro, ResWare, RamQuest, CloseSimple, CertifID | Saturated; $900M fraud exposure; well-tooled |
| Pest control | PestRoutes, PestPac, Briostack, GorillaDesk, Housecall Pro | Saturated; tier 1 real route optimization exists |
| Auction houses | Gavelist, Aravenda, SimpleConsign, DIY Auctions, ResaleOS | Mostly served; small niche |
| Private investigator | CaseWorks, CaseCore, CrossTrax, Deelo | Saturated; court-report + skip-trace well-served |
| School bus | BusCMMS, Fleetio, BusologyTech | Saturated; DOT DVIR templates + tiered pricing |
| **Funeral services** | **Passare, Halcyon, Osiris, FuneralHQ, Gather, SRS, VitalChek, Verified Cremains, Cremation Bridge** | **UNDER-SERVED on multi-form/E-EDRS reconciliation; blocked structurally by 50-state vital-records API gap** |
| Freight brokers (audit) | DAT, Truckstop, McLeod, TAI, Lighthouz AI, Mentium, HappyRobot, OpenEnvoy, Loop, Freight Hero, BlueCargo, Intelligent Audit | 2025-26 swarm with $300M+ in startup capital deployed |
| Construction certified payroll | Foundation, eBacon, Payroll4Construction, Miter, LCPtracker | Saturated; WH-347 form revised Jan 2025, mandatory Sept 30 2026 |

#### Funeral services — strong-validated cell

**Primary sources:**
- Reddit r/askfuneraldirectors: "Re-entering the same vital information into the state portal, insurance forms, and the crematory/burial transit permit." "Tracking down family e-signatures." "Pleading with doctors to sign the damn documents." "It's wild how often DC info is already in your system and you still have to retype it into the state portal." (2026-08)
- Reddit r/deathcare_innovation: funeral homes lose 20-40 hrs/month to compliance paperwork.
- CDC Funeral Directors' Handbook: official duty is to file accurate death certificate; state laws vary; medical certifier signature required.
- FTC paperwork burden: 18,874 funeral providers × 173,936 hrs/yr total industry burden.
- State statutes (FL, MN, SC, CO): mandated electronic death registration; medical certification must precede filing; 5-day filing window in many states.
- AIDXN custom-build analysis (2026-08): explicitly lists what Passare/Halcyon/SRS do NOT handle.
- NFDA: 15,401 funeral homes, $16.3B revenue, 105,300 employees.
- Average revenue per funeral home: $1-3M; case volume 75-200/yr.
- Meadow Memorials: $9M Series A (2026-03, Stripe alum), $1,300 vs $6,280 national median direct cremation. 400+ families/month in Feb 2026. The only major 2025-26 funding event in funeral.
- Seedtable: 10 funeral startups, $32.5M total funding (low investor interest).
- Passare (Capterra): 4.6★ (only 13 reviews), "lack of connectivity with QuickBooks and terrible reporting of financial data" — reviewer's note.
- Passare blog: "Vital records departments nationwide do not have any APIs for case management platforms to integrate with" — the structural barrier.
- PMC academic paper (2005, voice-signature for EDRS): the underlying chase problem documented for 20+ years and still unsolved.

**Why the cell is empty despite mature tooling:**
1. Each US state has its own EDRS with its own portal, fields, and quirks. Passare has only integrated Pennsylvania EDRS in 3+ years; "Not yet" is the answer for most states.
2. Halcyon, FuneralHQ, Verified Cremains, Cremation Bridge, Gather each pick a different angle (form auto-pop, cremation chain-of-custody, AI obituary, intake+sign). None solves the cross-state translation.
3. The cell is small (15,401 providers, mostly family-owned) and emotionally charged — investors avoid it (only $32.5M total funding across 10 startups).
4. The federal NVSS Modernization is moving to FHIR standards but only in draft phase as of 2026.

#### Freight broker invoice audit cell — fully occupied in 2025-26

- 5-15% of invoices have errors (industry standard, multiple sources)
- 12-18% error rate via Cass 2024 benchmark
- 25% rejected and remediated (Supply Chain & Demand Executive)
- $127 average overbilling per affected invoice
- 3-7% of total freight spend lost to undetected mistakes
- 1-5% recoverable through audit
- For $5M program: $250K/yr recovery possible
- Manual cost $12.48/invoice vs $1.82 automated
- Top 3 error types: fuel surcharge calculation (34%), unauthorized accessorials (22%), linehaul vs rate con (18%)

**2025-26 capital deployed:** Lighthouz AI (YC S24, Atlanta, SOC 2, 70-85% no-touch processing, TIA 2025/2026 Technovator), Mentium ($3.2M seed Oct 2025, Austin), HappyRobot ($200M+), OpenEnvoy ($24.5M), Loop ($65M), BlueCargo (Top Tech Startup 2025), Intelligent Audit (DeepDetectAI). This is the same pattern Round 12 found for SnapInvoice — late to a 2025-26 swarm.

### Wave 3 — Library/academic scout

- NAPHSIS national vital-records standards: HL7 FHIR drafts only as of 2026; no national EDRS API.
- PMC academic paper on voice-signature for EDRS (2005): the certifier-chase problem is structurally documented as expensive and unsolved.
- ASPE HHS report on EDRS timeliness: states without EDRS take 4.8 weeks longer to complete mortality counts.
- CDC NVSS Modernization: HL7 FHIR standards draft stage; no nationwide API rollout.
- Cass 2024 Freight Audit Benchmark: $127 avg overbilling, 1-in-8 invoice error rate.
- IOFM 2025: 22% error rate in certain shipper populations.
- Supply Chain & Demand Executive 2026: 25% of freight invoices rejected and remediated.

### Wave 4 — Service disruption hunt + competitor landscape

**Funeral services (Wave 4 update):**
- Meadow Memorials: $9M Series A (2026-03, Crunchbase exclusive). Direct cremation operator at $1,300 vs industry $6,280-8,300. 400+ families/month. Operating in CA, TX, WA. 33% from pre-planning. Revenue 3x 2024→2025, on track to 3x again in 2026.
- Eterneva ($13M): cremation diamonds/memorial.
- Plotbox ($11.2M): cemetery/crematory management.
- Gather (Boise, ID): "world's first fully-integrated AI Obituary Builder" — auto-builds obituary from 50+ death-certificate data points.
- Column.us: self-serve obituary publishing.
- Ever Loved, Parting, Pillar, Cake: all family-side.
- **None of the funded startups address the EDRS state-portal reconciliation wedge.**

**Freight broker invoice audit (Wave 4 update):**
- **Lighthouz AI** (YC S24, Atlanta) — exact wedge: "AI back-office for freight brokers — AI agents that handle freight bill audit, shipper invoicing, AR automation, and collections across both FTL and LTL." SOC 2 Type II. 70-85% no-touch processing. TIA 2025/2026 Technovator Award winner. **THIS IS A DIRECT COMPETITOR.**
- **Mentium** (Austin) — $3.2M seed (Oct 2025) — "digital workers" for freight brokerages. First product is accounts payable automation for carrier payments.
- **OpenEnvoy** raised $24.5M; **Loop** raised $65M; **HappyRobot** raised $200M (20 months).
- **Freight Hero** raised $5M for broker back offices.
- **BlueCargo** — drayage/ocean freight audit, Top Tech Startup 2025.
- **Intelligent Audit** (DeepDetectAI) — $1B+ in audited freight spend.

**Verdict: freight broker audit cell is fully occupied in 2025-26 with $300M+ in startup capital deployed.** Same pattern as Round 12 found for SnapInvoice.

**COI tracking (new saturated cell):** Certificial, COI Chase, BCS, Remindax, CertFocus, SmartCompliance, Jones, HoundDog, Vibrant, Vendorply, C2COI, Procore, GCPay, Levelset, Beam.

**Lien waiver tracking (new saturated cell):** Levelset, GCPay, LienIt, Textura (Oracle), US Tech Automations, WaiverSync, Beam. Procore-native dominates.

**Small claims (new saturated cell):** PettyLawsuit, Squabble, PeopleClerk, LegalZoom, Rocket Lawyer, SueApp, DoNotPay, GetSmallClaims, CourtForms. All 50-state, $29-$398.

**Cosmetic MoCRA (saturated but with cottage wedge):**
- 6+ players (Brahmin, MRPeasy, QT9, Stocksmith, Braincuber, Batch Buddy) at $149-500+/mo.
- $1.1B market in 2025, projected $3.8B by 2034 (15.2% CAGR).
- 15,000+ small cosmetics manufacturers; cottage exemption at $1M revenue.
- The cottage-cosmetic + cottage-food + cottage-candle sub-cell is genuinely under-served.

### Wave 5 — Technology frontier

What is newly possible in 2025-26 that creates new product wedges:

- **On-device vision models** (Apple Foundation Models, Core ML) make the multi-form synthesization from a single photo realistic without server cost.
- **HL7 FHIR standardization** (draft) of EDRS would unlock the funeral cell; not yet a public API.
- **Voice agents** (HappyRobot, Vapi, Bland) replace the phone-and-fax labor pattern in many "chase" jobs.
- **Document understanding** (Claude, GPT-4 Vision) is now off-the-shelf good enough to read mixed-format paperwork.
- **Agentic APIs** (MCP, OpenAI Assistants) allow a tool to route between many external systems without human glue.
- **Per-state rules databases** (50-state cottage food, 50-state EDRS) are now feasible to compile because statutes are public; what was impossible at $1M is now a $20K librarian project.

### Wave 6 — Graveyard archaeology

The 275 passed_market ideas contain reusable mechanisms. The Round 12 mechanism map already captured 18 of them (M1-M18). New extraction from this round:

- **M19 — Multi-form synthesization**: one case file → many correctly-formatted downstream forms. Different from M17 (one-time-entry-reuse) because the destination forms are not pre-known templates; the system must know per-jurisdiction form variants and route accordingly. Funeral cell, certified payroll (WH-347), MoCRA product listing, USDA pesticide records, freight BOL, death certificate, lien waiver, bill of lading, COA/COL.
- **M20 — Certifier/external-party routing**: when a workflow requires a third party to sign/approve (physician for death cert, plant pathologist for pesticide record, county clerk for lien release), the system identifies the right party, sends the right nudge, escalates, and confirms. Funeral cell, school IEP, court order compliance, clinical trial consent.
- **M21 — Per-state rules database**: every US industry with state-fragmented rules needs a maintained, cited rules DB. Cottage food (50 states), cottage cosmetic (50 states), funeral forms (50 states + county variations), fertilizer/pesticide (50 states + tribal), wage determinations (DOL by county), building code (by jurisdiction). The first company to publish a trustworthy version captures the wedge.

### Wave 7 — Cross-domain transfer

The strongest cross-domain move identified is the **M19-M20-M21 mechanism bundle** applied to the funeral certifier-chase cell. This is the cell where:
- Pain is real, recurring, and quantified (20-40 hrs/month per funeral home).
- Cell is empty for STRUCTURAL reasons (no state vital-records API), not just economic.
- The new mechanism (certifier-routing + per-state rules DB + multi-form synthesization) has no incumbent bundling it.
- The payer (funeral home) has weekly money flow and owns its own correction step.
- A startupbasket.ai independent validation confirms the wedge (CertChase, score 72/100 GO, 2026).

### Wave 8 — Competitor gauntlet

**Funeral certifier-chase cell (the strongest new hypothesis):**
- Direct competitors in this exact wedge: **none found**.
- Adjacent (broadly handles case management but does not own the chase): Passare, Halcyon, FuneralHQ, Gather, Osiris, SRS, VitalChek, Cremation Bridge, Verified Cremains.
- The closest (Halcyon, FuneralHQ) treat the chase as a phone-and-fax problem; the wedge is "what to send to whom, in what wording, by when, with escalation".
- Validation: startupbasket.ai 2026 analysis rated CertChase 72/100 GO with concrete falsification tests (30 funeral director calls, 20-case concierge pilot, 50% days-to-signature reduction).
- Confidence: medium-high that the cell is unoccupied; medium that the wedge can be built and monetized in the funeral payer.

**Freight broker audit cell:**
- **KILLED.** Lighthouz AI, Mentium, HappyRobot, OpenEnvoy, Loop occupy the cell. $300M+ in startup capital. Same 2025-26 swarm pattern as SnapInvoice. Do not enter.

**Cottage-exemption-tracker cell:**
- Adjacent reference sites: CottageCMS, Ovenkin, DishTrack (content, not active trackers).
- Adjacent active MRP: Brahmin, MRPeasy, QT9, Stocksmith, Braincuber, Batch Buddy (target $500K-50M brands).
- Direct competitor in active cottage tracking: **none found in 2026**.
- Confidence: medium that the cell is unoccupied; medium that the cottage maker will pay $9-29/mo.

### Wave 9 — Weirdness round

Outside-the-box cells examined:
- **Shipping container / chassis pool / drayage** — saturated (FourKites, Project44, Descartes, Manhattan, SAP, TMSEZ, Quincus).
- **Per-state exemption tracker** — see Cottage Exemption Tracker (raw idea added).
- **Cross-vertical "form synthesizer for any state-fragmented paperwork"** — would be a different kind of company; the vertical-first approach is more credible.

### Wave 10 — Falsification tournament

For the **certchase-funeral-signature-expediter** hypothesis:
- Falsification gate 1: 30 funeral director calls in FL/NY, count priced-yes reactions at $149-249/mo (success: ≥5).
- Falsification gate 2: 20-case concierge pilot, measure days-to-signature drop (success: median 3+ days reduction).
- Falsification gate 3: per-state rules database reaches 25+ states with cited public sources (success: buildable in 2-3 weeks with one engineer).
- Cheap test: 5 funeral director interviews ($0-100 incentive), 1 concierge pilot on 3-5 stalled cases ($0 cost, just phone time).
- What decision follows: pass → validate; fail → kill and tombstone as passed_market.

For the **multistate-form-synthesizer-funeral** hypothesis:
- Falsification gate 1: build the FL death certificate form template + disposition permit template + transit permit template + insurance assignment from public sources (2-3 days). If the templates compile, the cell is buildable.
- Falsification gate 2: 3 funeral homes prepay $99/mo for 6 months (success: 1 prepay; failure: 0).
- Cheap test: 1 funeral home, run the tool on 5 real cases, measure hours-saved.

For the **cottage-exemption-tracker** hypothesis:
- Falsification gate 1: compile 50-state cottage-food rule database from public statutes (2-3 weeks of one engineer).
- Falsification gate 2: 100 cottage makers in Facebook groups convert to paid at $9-29/mo (success: 5%; failure: <2%).
- Cheap test: 30-cottage-maker survey ($50 in Facebook ads), measure willingness to pay and target price point.

For the **freight-broker-linehaul-rebook** hypothesis (intentionally re-examined):
- KILLED before falsification. The 2025-26 swarm (Lighthouz AI, Mentium, HappyRobot, OpenEnvoy, Loop) occupies the cell. Same pattern as SnapInvoice.

## 3. New idea hypotheses added to canonical corpus

| ID | Name | Status | Hackathon fit | Why raw |
|----|------|--------|---------------|---------|
| certchase-funeral-signature-expediter | CertChase Funeral Signature Expediter | raw | medium | Validated by independent research, mechanism M20; no direct competitor; small TAM but strong payer |
| multistate-form-synthesizer-funeral | Multistate Form Synthesizer for Funeral | raw | low | Mechanism M19, but requires 50-state template library; weak hackathon fit |
| cottage-exemption-tracker | Cottage Exemption Tracker | raw | low | Mechanism M21 (per-state rules DB); genuine cell; buildable but long-tail |
| lotmatch-r12d-2026-08-11 | LotMatch post-Round-12 status refresh | validating | high | Slot-allocation record; LotMatch now top of funded-experiment queue post-SnapInvoice |

## 4. What the Ledger knows now that it did not know at session start

1. **Funeral services is the most under-researched B2B cell in the corpus.** Validated pain (20-40 hrs/month compliance), validated payers (15,401 funeral homes, $1-3M avg revenue), validated mechanism (certifier routing + per-state rules), no direct competitor. Investors avoid it (only $32.5M total funding across 10 startups) which is why the cell has stayed empty. The cell is empty for STRUCTURAL reasons (state vital-records API gap), not just economic.

2. **Freight broker invoice audit is fully occupied in 2025-26.** Lighthouz AI, Mentium, HappyRobot, OpenEnvoy, Loop — $300M+ deployed. Same swarm pattern as Round 12 found for SnapInvoice. Reaffirms the Round 11/12 heuristic: the 2025-26 AI-invoice/AI-back-office wave has colonized most B2B paperwork cells.

3. **M19 (multi-form synthesization), M20 (external-party routing), and M21 (per-state rules database) are the new durable mechanisms from this round.** They did not appear in the Round 12 mechanism map because the round was focused on consumer-side pain; they emerged from boring-industry deep-dive.

4. **The "no competitor" cells are mostly empty for STRUCTURAL reasons, not opportunity reasons.** State vital-records API gap (funeral EDRS), state-vital-records-specific form templates (cottage food/cosmetic), and government-data modernization timelines (NVSS FHIR draft) all create structural barriers. The wedges that survive these barriers have a per-state rules database as a defensible moat.

5. **The corpus tag census confirms a structural blind spot in non-app service industries.** Agriculture, manufacturing, real estate transactional, legal services, accounting, waste management, funeral services, septic, welding, pest control, hauling, trucking commercial, inspection, title, escrow, insurance adjusting, fleet maintenance, equipment rental, warehouses, laboratories all have ≤3 tag appearances. The deep-dive found most of these are saturated with specialized incumbents (SepticMind, Towbook, WeldTrace, PestRoutes, etc.). The exceptions are: funeral EDRS reconciliation, cottage-industry compliance, and a handful of regulatory paperwork cells that have per-state rules DBs as their moat.

6. **"Host-owns-correction" is the dominant death-cause archetype, but the new M19-M20-M21 bundle shows how to escape it:** the chase + rules DB + multi-form synthesization works because the funeral home owns the multi-form process even if it doesn't own the EDRS endpoint. This generalizes to many regulatory paperwork cells.

7. **SnapInvoice's passed_market verdict generalizes: the 2025-26 swarm pattern is the new default for B2B AI-back-office cells.** Most B2B ideas the corpus has not yet checked will be found occupied. The durable surviving wedges are: (a) per-state rules DBs as defensible moats, (b) vertical-specific incumbents that are bad enough to displace (Passare's 13 reviews and QuickBooks complaints suggest a wedge), (c) cells with strong but unusual structural barriers that scare off capital.

## 5. Changes to canonical corpus

- `docs/idea-database.json`: added 4 new records (3 raw + 1 validating) for the new hypotheses. Corpus now 352 ideas, 50 dossiers, 33 focus-group studies.
- `docs/RESEARCH-MARATHON-2026-08-11.md`: this dossier.
- `docs/RESEARCH-MARATHON-2026-08-11-TRACKER.md`: working tracker with source provenance log and live research queue.

## 6. Recommended next research wave

This is split into two sections: what an autonomous research agent can keep doing, and what requires a human to pick up the phone.

### What the agent can do next (no human outreach required)

Priority order — each step is bounded, falsifiable, and runs entirely on public sources + the corpus:

1. **Map the 50-state certifier routing rules** (~$0, 3-5 days). Compile a per-state table of: who can sign (physician, hospice medical director, PA, NP, ME), statutory window (e.g., 72 hours in several states), ME-jurisdiction triggers, fax-attestation vs EDRS-portal pathways, voice-signature acceptance (CA precedent per PMC1560770), and county-level variation. Output: a `docs/RESEARCH-CERTIFIER-ROUTING-MATRIX.md` table that any build would consume. Falsifiable: if the matrix has <25 states reachable from public sources, the cell is structurally blocked and should be tombstoned as `passed_scope`.
2. **Map the 50-state death-certificate form template requirements** (~$0, 5-7 days). Per state, identify: form number(s), where the PDF is published, which fields are statutorily required, which are jurisdiction-specific, what the EDRS URL is, and whether the state publishes a form-spec for vendors. Output: a `docs/RESEARCH-DEATH-CERTIFICATE-FORMS-ATLAS.md`. Falsifiable: if <15 states have publicly indexed form PDFs the cell is structurally blocked.
3. **Map the 50-state disposition/transit/cremation permit forms** (~$0, 3-5 days, parallel to #2). Same pattern. Output: a `docs/RESEARCH-DISPOSITION-PERMIT-ATLAS.md`. Confirms the M19 multi-form-synthesization wedge has a real atlas surface.
4. **Audit every 2025-26 startup that touches funeral workflow** (~$0, 2 days). Passare, Halcyon, FuneralHQ, Gather, Osiris, SRS, Tribute Technology, Plotbox, Cake, Parting, Eterneva, Meadow, VitalChek, Cremation Bridge, Verified Cremains, Column.us, Ever Loved, Funeral Innovations, FrontRunner, Batesville, Foundation Partners Group (roll-up), Carriage Services (roll-up). For each: feature surface, pricing, last-update recency, reviews count, partner integrations. Look for: does any of them expose a programmatic API/SDK that a chase layer could sit on top of? Output: `docs/RESEARCH-FUNERAL-STARTUP-LANDSCAPE-2026.md`. Falsifiable: if a direct API/SDK for certifier routing exists from a player, the chase wedge collapses.
5. **Scan adjacent "chase" cells that share the M20 mechanism** (~$0, 3-4 days). Look for cells with the same shape: a document/state must move from one external party to another on a statutory clock, and a small business owns the chase labor. Candidates already surfaced: pharmacy prior authorization (CoverMyMeds, Surescripts exist — check wedge), insurance pre-authorization for procedures (Cohere Health, Waystar exist — check wedge), customs broker document chase (very possible under-served cell for small importers), permit-application chase for small construction (PermitFlow/PermitRadar exist — check wedge), patent office action response (very possible under-served cell for solo inventors), IRS notice response (TurboTax handles; for small businesses possibly under-served). Output: 1-2 page per candidate, kill or keep verdict with mechanism match score.
6. **SnapInvoice post-mortem (re-write)** (~$0, 1 day). The Round 12 verdict is in the dossier but a structured tombstone for the corpus hasn't been added. This is slot-allocation work — a `snapinvoice-post-mortem` validating record that carries the lesson ("2025-26 AI-invoice swarm ate the cell before outreach landed; the inbound-share behavior remains un-dug but is un-recruitable; resurrection requires a partner with 10+ operator relationships pre-existing") so future agents don't waste cycles re-proposing it.
7. **LotMatch falsification gate executor plan** (~$0, 1 day). The Round 12 design exists; the run-book for the next agent or human should be written as a one-pager: who to call, what fixtures to ship, what success/fail thresholds mean for the corpus decision. Doesn't require making calls; just makes the next call cheaper.

### What requires human action (explicitly NOT in the agent's plan)

These are gates where the next decisive evidence requires the human user (or a paid recruiter/agency) to make real contact with real operators. Listed for the next time the human is ready to do them, not for the next research pass:

- **CertChase falsification gate 1**: 30 funeral director calls in FL/NY. Requires a human who can credibly say "we want to build this and pay you to test it." If 5+ priced-yes at $149-249/mo, the cell is validate-ready.
- **CertChase falsification gate 2**: 20-case concierge pilot. Requires a human with operational responsibility to manage a live case and confirm days-to-signature drop.
- **Cottage tracker Facebook survey**: 30-cottage-maker survey requires a human posting in real Facebook groups (the corpus cannot fake a survey response).
- **LotMatch operator recruitment**: 5-10 tile/flooring professionals to test the carton-scan gate. Same — requires real outreach.

If the human is willing to spend 1-2 hours on any of these, the agent can prepare the call list, the one-question opener, the email template, and the falsification rubric. The agent cannot make the call.

The cells already occupied (freight audit, COI, lien waivers, small claims, certified payroll, drayage) are explicitly off the next-wave list.

## 7. Falsification experiments designed (per the round's "cheap is better" rule)

The agent can design these but cannot run the human-outreach ones. The list below is split by who can run it.

### Agent-runnable (no human contact required)

| Hypothesis | Experiment | Cost | Time | Success threshold | What follows |
|------------|-----------|------|------|-------------------|--------------|
| Multistate Forms (buildability) | Compile FL death cert + disposition permit + transit permit templates from public sources | $0 | 2-3 days | Templates compile into correctly-formatted PDFs | Build the 50-state library |
| Cottage Tracker (buildability) | Compile 50-state cottage-food rule database from public statutes | $0 | 2-3 weeks | Rules coherent enough to encode in a state picker | Build the cottage-cosmetic cell next |
| CertChase (buildability) | Map 50-state certifier routing rules | $0 | 3-5 days | ≥25 states reachable from public sources | Buildable; else tombstone passed_scope |
| CertChase (buildability) | Map 50-state death-certificate form template requirements | $0 | 5-7 days | ≥15 states have publicly indexed form PDFs | Buildable; else tombstone passed_scope |
| Cell viability (cross-cell) | Map adjacent "chase" cells (PA, customs, IRS, permit) | $0 | 3-4 days | At least one cell unoccupied by incumbents | Identify next-best M20 candidate |

### Requires human (the user, an agency, or a paid recruiter)

| Hypothesis | Experiment | Cost | Time | Success threshold | What follows |
|------------|-----------|------|------|-------------------|--------------|
| CertChase (willingness to pay) | 30 funeral director calls FL/NY, $100 incentive each | $3K | 2-3 days | ≥5 priced-yes at $149-249/mo | Validate |
| CertChase (product efficacy) | 20-case concierge pilot on real stalled certificates | $0 (operator's time) | 2 weeks | Median days-to-signature drop ≥3 days | Validate + scale |
| Multistate Forms (willingness) | 3 funeral homes prepay $99/mo for 6 months | $0 (the product) | 4-6 weeks | ≥1 prepay | Validate; else kill |
| Cottage Tracker (willingness) | 30-cottage-maker survey, $50 in Facebook ads | $50 | 1 week | ≥30% willing to pay $9-29/mo | Validate |
| LotMatch | 5-10 tile/flooring professionals to test the carton-scan gate | varies | 2-4 weeks | ≥3 prepay or commit | Validate or kill |

## 8. Meta-lessons (durable for the institution)

1. **“Empty cells” are a prior, not a law.** This round found structural barriers in several cells, but the sample is small and a reachable buyer/artifact test is required before tombstoning.

2. **The 2025-26 AI-invoice / AI-back-office swarm is real and capital-intensive.** It is a strong warning against undifferentiated late entry, not proof that every adjacent workflow is closed.

3. **Per-state rules databases are candidate assets, not proven moats.** A cited rules DB matters only if customers repeatedly need it, updates are affordable, and the workflow acts on it.

4. **M19-M20-M21 mechanisms (multi-form synthesization, external-party routing, per-state rules DB) are durable cross-vertical transplants.** Their value remains hypotheses until a payer, authority boundary, and distribution channel are demonstrated.

5. **The SnapInvoice passed_market verdict creates a methodological template.** Acquisition failure can kill an otherwise plausible concept before implementation; recruitment is a product gate.

6. **The funeral cell has preliminary workflow evidence, not validation.** Government material supports pending-action/notification friction; anecdotes support language; payer, prevalence, competitive whitespace, and operator access remain open.

7. **Research provenance is itself a product capability.** The next loop must count opened primary sources and observed behaviors, not snippets, simulated personas, or repeated syndicated claims.

## 9. Decisions taken

- Add 3 new raw ideas (certchase-funeral-signature-expediter, multistate-form-synthesizer-funeral, cottage-exemption-tracker) to the canonical corpus.
- Add 1 validating slot-allocation record (lotmatch-r12d-2026-08-11) to keep LotMatch visible as the funded-experiment-queue head.
- Do not pursue freight-broker-linehaul-rebook; the cell is occupied.
- Do not pursue COI tracking, lien waiver, small claims, certified payroll, drayage, or small-claims — all occupied.
- Carry forward the Round 11/12 heuristic: "empty cells are empty for demand/economics/structural reasons" and add "structure (state API gap, regulatory fragmentation, investor avoidance) is a separate failure mode that mechanism transplants cannot always solve."

## 10. Research queue remaining

Open:
- Falsification sprint for certchase (30 funeral director calls in FL/NY)
- 50-state funeral form library build only after operator evidence; do not build the atlas first
- 50-state cottage-food rule database build only after paid-demand evidence
- LotMatch revival — re-execute falsification design
- Seeded library/academic citation-following pass from CDC, state EDRS, and inspection documents
- Freight audit wedge only if a small shipper supplies a real re-rate notice for a paid concierge test

Closed (this round):
- Freight broker audit cell — verdict occupied, do not enter
- COI tracking — verdict occupied
- Lien waivers — verdict occupied
- Small claims software — verdict occupied
- Certified payroll (Davis-Bacon WH-347) — verdict occupied by Foundation/eBacon/Payroll4Construction
- Drayage / chassis pool — verdict occupied
- BOL/freight document automation — verdict occupied
- PII reading: saturated verticals remain presumptive do-not-enter cells, not universal laws; revisit only with a distinct buyer, artifact, or distribution wedge

## 11. Continuation audit correction

The prior dossier overstated certainty in several places. This continuation records the correction rather than rewriting history:

- “Strong-validated funeral cell” is now **preliminary workflow evidence / raw hypothesis**.
- Reddit and operator posts are **anecdotal**, not prevalence studies.
- Simulated focus groups are **synthetic hypothesis generation**, not customer validation.
- Vendor pages and startup funding reports establish product presence or marketing claims, not willingness to pay.
- “Defensible moat” for per-state rules databases is an inference requiring maintenance-cost and payment tests.
- Search snippets, generated summaries, and metadata-only library results are **leads**, not examined sources.

## 12. Recommended next research wave

Run behavior-first tests before more broad mining: LotMatch recruitment first, then five funeral-director interviews and one concierge case test. In parallel, follow citations from the California Auditor/CDC/state EDRS documents into full-text academic or government sources. Promote no new idea unless it has an observed workaround, reachable payer, authoritative artifact, and a cheap falsification path.
