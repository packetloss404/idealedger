# Mechanism Map — Cross-Pollinating the Losers (Round 12)

Source corpus: `/tmp/opencode/shipaton11/raw-ideas/raw-concepts.md` (~140 concepts, IDs A1–W10) and `/tmp/opencode/shipaton11/synthesis/pain-point-map.md` (163 pains, 15 clusters). Method: for each dead concept, ask (1) bad problem or bad solution? (2) bad timing? (3) bad business model? (4) wrong interface? (5) bad distribution? (6) one valuable mechanism inside? (7) can that mechanism solve a different problem with better payer/economics? Then extract reusable mechanisms and score transplants.

Evidence labels: FACT/INFERENCE/HYPOTHESIS. Reddit/app-store URLs in the pain map were re-fetched in Round 12; search engines throttled this pass (DuckDuckGo/Bing/Mojeek all bot-walled) so competitor checks rely on the DDG results captured before throttling + direct site fetches. Anything unverified is flagged.

---

## 1. The pattern behind the deaths

Reading all ~140 concepts through the 7 questions, the death causes cluster into four, and only one is usually fatal:

1. **No payer / wrong payer** (most common): worker-side pay proof (B1, B2), consumer dispute tools (D2, C1, I5), peace-of-mind (F7, J4). The user is anxious but won't pay; the counterparty owns the correction.
2. **Host owns the correction** (kill-rule violation): anything whose "truth" lives with the employer/airline/landlord/insurer/board and where the app can't fix it. B1/B2 (employer payroll), C6 (dealer status), G1 (no sanctioned API), S1–S3 (airline owns status).
3. **Cold start / two-party adoption**: D4, I5, E4, L4, J4 — every one needs a second party to join before it's useful.
4. **Incumbent owns the cell** (the 2025–26 clone wave): field-service CRMs (Jobber/ServiceTitan), worker scheduling (7shifts/Homebase/Deputy), proof-of-service verticals (PoolProof/Provvio/Lawnly), credential walls (Certemy/Nursys), COI/insurance tech (TrustLayer/Binder), pet-care (Gingr/MoeGo).

**Key synthesis: the mechanisms were almost never wrong — the payer assignment was.** The camera-evidence, photo-OCR, deadline-clock, and reconciliation mechanisms all work. The failed products pointed them at consumers and at counterparties who own the truth. The winning move is to point the same mechanism at (a) a business that already has a weekly money flow and (b) a correction step the business itself owns.

---

## 2. Mechanism Map

Each mechanism: source ideas → problem actually solved → why the original product died (Q1–Q7 condensed) → transplants (domain, payer, frequency, phone-native, shareable).

### M1. Un-invoiced-work / revenue-leak detector
- **Source:** A10, A3, A8, A6 (also B7). Photo/paper evidence of work → reconcile against invoices → flag gaps ("money you did the work for but never billed").
- **Solves:** the "work never invoiced, paperwork lost in the truck cab" leak (FG13 first-person FACT, pain #81) and bookkeeper-archaeology (pain #84).
- **Died because:** solution fine, payer fine (shop owner) — but incumbents (Jobber/ServiceTitan) own the software-adopting minority, and micro-ops say "fine at our size" (pain #85, #5 in evidence table). Q1/Q2 no; Q5 distribution is the real blocker in the original field-service domain.
- **Transplants:**
  - **Dog groomers / vet clinics** — photo each dog/treatment slip at intake → auto-reconcile against booked services/invoice lines → flag the forgotten demat/add-on/lab charge. Payer: owner. Weekly: yes (weekend-heavy). Phone-native: yes. **Killed by check:** Gingr/MoeGo full platforms crowd this vertical — see §4.3.
  - **Cleaning companies** — photo rooms/checklist → reconcile vs. booked hours. Payer: owner. Weekly: yes.
  - **Salon/barber booth-rent reconciliation** — photo the daily booking sheet → auto-sum each renter's gross vs. the rent/commission due. Payer: salon owner. Weekly: yes (rent is weekly). Phone-native: yes.
- **Kill-rule check:** invariant = each work record maps to an invoice line; the owner owns the correction (it's their money). Clean.

### M2. Schedule-photo OCR diff
- **Source:** B1, L2, L1, M2-ish. Photo a posted paper/whiteboard schedule → OCR → diff against prior snapshot → "what changed" alert.
- **Solves:** silent last-minute schedule changes (pain #61, strong) and "live on the rosters page" (FG10).
- **Died because:** assigned to the worker (won't pay); the employer hosts the schedule (host-owns-correction for the worker). Q3 wrong payer; Q4 fine; Q5 fine.
- **Transplants:**
  - **Small-restaurant owner labor-cost watchdog** — photo the paper schedule Sunday → OCR hours → labor $/day vs. sales budget → flag overstaffing before the week starts. Payer: owner (labor ≈ 30% of revenue). Weekly: yes. Phone-native: yes. **Competitor:** Homebase/7shifts/Toast free tiers serve the software-adopting minority; the photo-OCR wedge is for the no-software paper-schedule segment. Flagged §4.4.
  - **Market/event organizers** — photo/collect vendor staffing rosters, diff for coverage gaps. Payer: organizer. Weekly-ish: yes.
  - **Home-health supervisors** — photo posted caregiver schedules vs. actual visits. Payer: agency. Weekly: yes.
- **Kill-rule check:** invariant = OCR'd hours vs. budgeted hours; unknown = unparseable schedule shown as unknown, never a green. Clean.

### M3. Two-record diff with a stable invariant
- **Source:** B2 (schedule photo vs paystub, hours-worked vs hours-paid), B9 (swap confirmations).
- **Solves:** paycheck short-pay caught only by the employee (pain #1, strong, real dollars) and swap commitments that silently vanish (pain #63).
- **Died because:** assigned to the worker (won't pay); error rate unquantified; ADP/HR incumbents own payroll data. Q3 + Q5.
- **Transplants:**
  - **Staffing-agency hours/I-9 compliance self-audit** — agency-side "scheduled vs. punched vs. invoiced to client" reconciliation. Payer: agency (avoids wage lawsuits + client billing disputes). Weekly: yes (payroll weekly). Phone-native: medium.
  - **Salon commission vs. booking record** — owner-side. Payer: owner. Weekly: yes.
  - **Commercial property manager** — service invoices vs. service logs for a building. Payer: PM. Weekly: yes.

### M4. Paired-handoff / two-party evidence
- **Source:** D4, I5, C7, T5 (QR-linked simultaneous capture by both parties).
- **Solves:** documentation asymmetry at dispute time (theme #7 — whoever has the timestamped camera wins); "it worked when I sold it" (pain #125).
- **Died because:** two-party cold start (both sides must adopt); consumer dispute frequency too low to pay. Q1 no, Q3 + Q5.
- **Transplants:**
  - **Equipment/tool rental** — QR-linked condition snapshot at pickup AND return. Payer: rental company (fewer damage disputes = direct P&L). Weekly: yes (contractors rent weekly). Phone-native: yes (both parties have phones). Low competition in the niche.
  - **Doggy-daycare / boarding dropoff-pickup condition** — Payer: facility. Weekly: yes. (Gingr has report cards but not paired-condition-proof.)
  - **Valet / car-service handoff** — Payer: garage. Weekly: yes.
- **Kill-rule check:** both records are user-owned evidence; no correctness claim; unknown shown when a side is missing. Clean.

### M5. Share-sheet / photo intake → structured record
- **Source:** A1, A2, A5, C3, T9 (voice+photo lands as a structured job ticket/estimate/invoice line).
- **Solves:** paper & whiteboard as system of record (theme #4); re-typing; loss when paper is lost.
- **Died because:** in field-service the incumbent CRMs already capture this; trades "fine at our size." Q5.
- **Transplants:**
  - **Rehab/PT clinics** — patient progress photos + voice note → structured weekly progress record. Payer: clinic (better billing/outcomes). Weekly: yes (PT is weekly). Phone-native: yes.
  - **Property managers** — tenant photo → structured maintenance request. Payer: PM. Weekly: yes. (Buildium/AppFolio crowd the adopting segment.)
  - **Insurance agents** — client damage photos → structured claim intake. Payer: agent/carrier. Weekly: yes.

### M6. Entitlement reference
- **Source:** S2, D2, H1, D7, C4, B7. Rules/law separated from guesswork — "here is exactly what you're entitled to."
- **Solves:** weather-vs-airline-fault guesswork (pain #106); state-law deadline cheat sheets for deposits (pain #32).
- **Died because:** the airline/landlord owns the correction; content is cheap to commoditize; consumer won't pay. Q1 no, Q3 + Q5.
- **Transplants:**
  - **LTL freight receivers** — "what is claimable vs. carrier liability" reference for small businesses. Payer: receiver (B2B). Frequency: per-shipment. Phone-native: yes.
  - **Warranty departments / HR benefits help desk** — internal entitlement reference. Payer: employer. Weekly: yes (questions weekly).

### M7. Evidence-pack builder
- **Source:** A7, D2, I3, H3, Q2, S1, C8, B2. One timestamped bundle (photos, slips, GPS) exported for a dispute.
- **Solves:** prove-your-loss burden (pain #21); dispute reconstruction with no record (pain #83); claim-time evidence (pain #122).
- **Died because:** consumer dispute frequency too low to pay; "horizontal evidence camera" is commodity (Round-11 finding); insurer/carrier owns the decision. Q1 + Q3.
- **Transplants:**
  - **B2B small-freight claims** — receiver-side LTL claim kit. Payer: receiver. Frequency: claim events. Phone-native: yes.
  - **Equipment-rental damage disputes** — pairs with M4. Payer: rental company. Weekly: yes.
  - **Small-claims for micro field-service** — paired with M8's evidence log. Payer: owner.

### M8. Escalation nudger / quote-silence detector
- **Source:** Q3, A4, B7, E5, W1. Track a quote/receivable that went silent → polite auto-nudge sequence with escalating pressure + evidence trail.
- **Solves:** contractor quote-silence (pain #1); freelancer late payment (pain #73, 85% late sometimes); album-approval stall (pain #140).
- **Died because:** seller-side micro-ops "fine at our size"; invoicing incumbents (QuickBooks/FreshBooks) own the object; dunning-into-receivables is bank-adjacent. Q5 + Q3.
- **Transplants:**
  - **Micro field-service quote follow-up** — phone-native "your quote from 3 days is silent → nudge" with the quote+evidence attached. Payer: owner. Weekly: yes. No-CRM wedge is real.
  - **Small-supplier B2B past-due chasing** — escalation texts with proof of delivery/acceptance. Payer: supplier. Weekly: yes.
  - **Gyms/studios chasing lapsed renewals** — owner-side. Payer: owner. Weekly: yes.

### M9. Approval-deadline clock / deadline state machine
- **Source:** E5, J1, C9, I8, D5, S3, G1. Every step of a multi-party process gets an expected next step + deadline; stall is a state, not a feeling.
- **Solves:** "client never approves" (pain #140); "what happens next" status polling (pain #107, the most convergent consumer cluster); RV warranty-approval stalls (42% of WOs, pain #14).
- **Died because:** photographer-side: client won't pay and the "if you don't pick, I pick" contract is unenforceable fantasy; consumer-side: no sanctioned API. Q3 + host-owns-correction.
- **Transplants:**
  - **Staffing-agency onboarding windows** — I-9, background check, drug-test deadlines as a state machine; a stalled candidate is an unknown, not a silent delay. Payer: agency. Weekly: yes (they onboard weekly). Phone-native: yes (worker on phone).
  - **Warranty-parts approval tracking for small repair shops** — RV/car shops with parts-on-approval stalls. Payer: shop owner. Weekly: yes.
  - **Real-estate option-period deadlines** — agent-side clock. Payer: agent. Frequency: monthly-ish.

### M10. Disposition decision flow
- **Source:** I1, I2, S7. Intake → condition assessment → cause code → decision (repair/return/refund/keep) with an audit trail.
- **Solves:** returns admin (pain #120, $685–890B surface) and return-fraud policy abuse (pain #119, $103B).
- **Died because:** small sellers' return frequency too low; Riskified/Appriss own the top; consumers love returnless refunds. Q1 + Q3.
- **Transplants:**
  - **Self-storage operators** — delinquent-unit lien/disposition flow with photo inventory (state-law deadlines). Payer: operator. Weekly: yes (liens accrue weekly). (Storable/SiteLink crowd the adopting segment.)
  - **Pawn shops** — unredeemed-item disposition. Payer: pawn shop. Weekly: yes.
  - **Flea-market/resale vendors** — weekly intake → price/dispose decision. Payer: vendor. Weekly: yes.

### M11. Credential re-check / cert wall
- **Source:** O1, O2, O3, L5, P3. Photo a license/cert → re-check an authoritative lookup → alert on status drop or renewal window; employer-side wall with expiry clocks.
- **Solves:** lapsing is catastrophic (Kansas nurse, pain #133); employers track certs in spreadsheets, audit dread (pain #134).
- **Died because:** the board provides free lookup (worker won't pay); Certemy/Nursys/CredSimple already own the employer-side wall. Q3 + Q5 (in the original domain).
- **Transplants:**
  - **Market / event organizers** — collect vendor COI + health/liability certs into a wall before Saturday's market; "who's missing what" dashboard. Payer: organizer. Weekly-ish: yes (during season). Phone-native: yes (vendors photo their certs). See §4.3.
  - **Childcare / summer-camp directors** — staff cert + background-check wall before licensing audit. Payer: director. Frequency: seasonal-weekly.
  - **Restaurants** — food-handler cert wall + renewal clock (health-dept fines). Payer: restaurant. Frequency: annual/multi-year (weak weekly).

### M12. Freight-class-from-photo
- **Source:** T2, T8, I4, T9. Photo the box → dims + freight class + dimensional weight + live quotes + packing checklist + 6-damage-photo capture.
- **Solves:** large-item shipping cost > item value (pain #126); DIM-weight skill gap (pain #126); freight misclassification billbacks.
- **Died because:** assigned to consumer/reseller with low per-user frequency and shipping cost often < item value; single-use. Q1 no, Q3 (frequency-based) + Q5.
- **Transplants:**
  - **Auction houses / estate liquidators** — ship weekly, many items, misclassification eats margin. Payer: the dealer. Weekly: yes. Phone-native: yes.
  - **Furniture dealers / resellers** — same. Weekly: yes.
  - **Art galleries / fine-art shippers** — specialized packing + claim evidence. Weekly: yes.
- **Kill-rule check:** invariant = measured dims (stable) vs. carrier re-measure; quote anchored to a real carrier API. Clean. See §4.1.

### M13. Wallet-pass certificate / compliance log
- **Source:** O5, O4, T4, R1, F7, C6. Completed check/visit emits a Wallet pass or shareable certificate with the evidence summary.
- **Solves:** proving a compliance check or service visit happened, with shareable proof (the "card people text each other").
- **Died because:** fire-extinguisher monthly logs → SafetyCulture/iAuditor owns checklist compliance; small-business owner won't pay for proof of nothing in particular. Q1 + Q3.
- **Transplants:**
  - **Weekly proof-of-service card for field-service micro-ops** — pool/lawn/cleaning/HVAC-filter solo techs: one tap at the visit → GPS+photo+checklist → branded "your pool this week" card texted/emailed to the customer; scheduled-but-no-proof shows UNKNOWN. Payer: the service company (retention, disputes, upsell). Weekly: yes. Shareable: yes. **Competitor:** PoolProof/Provvio/Lawnly verified — see §4.2.
  - **Grease-trap / septic service certificates for restaurants** — the local jurisdiction requires documented cleanout logs; the service company's completed log is the restaurant's compliance file. Payer: service company (differentiation) or restaurant. Frequency: monthly/quarterly (weak weekly).
  - **Equipment-rental return certificate** — pairs with M4. Weekly: yes.

### M14. Quote-price registrar
- **Source:** C3, U8, L5. Record actual paid prices → normalize → "is that a normal price?" reference.
- **Solves:** price opacity for services (pains #13, #158 — funerals, repairs).
- **Died because:** price-data cold start; Thumbtack/Angi/RepairPal own discovery; consumers won't pay for a lookup. Q1 + Q3 + Q5. The one mechanism where the mechanism itself is weak (cold start is intrinsic).
- **Transplants (all weak — cold-start binds everywhere):**
  - Commercial-maintenance quote benchmarks for property managers.
  - Freight lane-price history for small shippers.
  - **Recommendation: do NOT transplant.** Kill-rule: a false "normal price" green is an instant kill.

### M15. "Found money" / silent-leak flag
- **Source:** H4, H5, B3, B6, Q6, L3. Read-side detection of payments/charges/expenses the user is making without need.
- **Solves:** subscription sludge (pain #113–115); card-updater keeps charging a "cancelled" card (pain #116); membership benefits unused.
- **Died because:** consumer-side, no payer; H5 is aggregation-dependent (kill rule); FTC Click-to-Cancel vacated removed the tailwind (pain #4 evidence table). Q3 + Q1.
- **Transplants:**
  - **SMB SaaS-overlap audit** — screenshot monthly software bills → flag duplicate/overlapping tools + overlap graph. Payer: founder/ops. Frequency: monthly (weak weekly). Vendr/Zylo serve enterprise; small-SMB segment open.
  - **Field-service owner** — duplicate subscriptions/parts programs. Monthly.
  - **Franchisee fee audit** — monthly.

### M16. "What changed" digest / auto-diff
- **Source:** L1, W6, Q6, R4, N1. Snapshot a source (email/ICS/screendump/portal), diff against prior, emit one "what changed" push.
- **Solves:** school-app sprawl + missed last-minute changes (pains #47, #51, strong); renewal screenshots (pain #44).
- **Died because:** read-side only; the host (school/district) owns truth; notification aggregation is commodity/free. Q3 + Q5.
- **Transplants:**
  - **Franchise / multi-unit owner** — weekly "what changed in your SOPs/policies/vendor terms" digest from pasted documents. Payer: franchisee network/owner. Weekly: yes. Shareable: yes (forward to GM).
  - **HOA / property boards** — policy/insurance/rule-change digest. Payer: HOA mgmt co. Monthly.
  - **Restaurant vendors** — weekly invoice/price-sheet diff. Weekly: yes.

### M17. One-time-entry reuse
- **Source:** L6, F6, F3, G3, L8, D8. Enter data once; generate every repeated form/profile from it.
- **Solves:** re-typing (pain #98, #109); annual forms repeat (pain #55).
- **Died because:** delight, not pain — re-typing is friction people live with; no urgency, no payer. Q1 + Q3.
- **Transplants:**
  - **Rehab clinics** — repeat intake prefilled from stored patient profile. Payer: clinic. Weekly: yes.
  - **Daycare re-enrollment** — annual packet. Frequency: annual.
  - **Construction prequal forms** — B2B. Monthly.

### M18. Status page / one-tap log feed
- **Source:** J4, S1, F1, F7, C6, T10, F8. One URL/feed of proof + status for a process, shareable to family/customer/team.
- **Solves:** status black boxes (pain #22, #107); remote-family surveillance calls (pain #92); "is the work done?" (pain #17).
- **Died because:** consumer peace-of-mind has no payer; remote surveillance is free phone calls. Q3.
- **Transplants:**
  - **Weekly proof-of-service card** — folded into M13 candidate #1 (this is the shareable output that carries the whole loop).
  - **Commercial building PM** — status feed for tenant fit-outs. Payer: PM.
  - **Equipment-rental status** — live tile. Weekly: yes.

---

## 3. Transplant scoring

Axes (1–5): **E** = evidence of new-domain pain, **P** = business payer, **W** = weekly frequency, **N** = phone-native, **K** = no hard kill-rule violation. Bonus flags: **S** = shareable output, **C** = competition (higher = less crowded).

| # | Transplant candidate | Mech | E | P | W | N | K | S | C | Notes |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Photo freight-class/quote for weekly pro-shippers (auction/estate/furniture) | M12 | 4 | 4 | 4 | 5 | 5 | 3 | 4 | Pain strong (FG22/23); no phone-native photo→class→quote→claim kit found |
| 2 | Weekly proof-of-service card for field-service solo techs | M13/M18 | 4 | 5 | 5 | 5 | 4 | 5 | 1 | Rubric-perfect + shareable/weekly; verticals saturated (PoolProof/Provvio/Lawnly) |
| 3 | Vendor cert/COI wall for market & event organizers | M11 | 3 | 4 | 3 | 5 | 4 | 3 | 4 | Corporate COI exists (TrustLayer/Binder); small-market organizer version not verified occupied |
| 4 | Paper-schedule labor watchdog for small restaurants | M2/M3 | 4 | 4 | 5 | 5 | 5 | 3 | 2 | Homebase/7shifts free tiers crowd; OCR wedge for no-software segment |
| 5 | Paired-handoff condition log for equipment rental | M4/M13 | 3 | 4 | 4 | 5 | 5 | 2 | 4 | Niche; rental software doesn't do two-party QR condition snapshots |
| 6 | Staffing-agency onboarding/I-9 deadline state machine | M9/M1 | 4 | 5 | 5 | 4 | 5 | 2 | 2 | Real compliance pain; ShiftPixy/Gusto serve adopting segment |
| 7 | Quote-follow-up nudger + evidence log (no-CRM micro field-service) | M8/M7 | 4 | 4 | 4 | 5 | 5 | 2 | 3 | Invoice incumbents own the object; phone-native wedge real |
| 8 | Un-invoiced-work detector → salon booth-rent weekly reconciliation | M1 | 3 | 4 | 5 | 5 | 5 | 1 | 3 | Salon software crowded (Boulevard/Vagaro) but booth-rent photo wedge open |

Scoring rubric verdict: **#1 and #2 are a genuine trade.** #2 wins every axis the task told me to rank on (shareable + weekly + payer) but fails the Round-11 hard truth that "the clone wave already owns the obvious cells" — and my competitor check proves it owns this one. #1 wins on the combination of strong pain evidence + an actually-empty phone-native cell.

---

## 4. Competitor checks (top 3)

Search engines throttled after three queries this pass; #1/#2 checks use captured DuckDuckGo results (pre-throttle), #3 uses direct fetches. Coverage flagged where thin.

### 4.1 #1 — Photo freight-class → quote for weekly pro-shippers
- **Classification:** B2B pro-shipper utility — camera measurement → NMFC class → dimensional weight → live LTL/parcel quotes → packing checklist → claim-evidence capture.
- **Closest products:**
  - FreightSnap Image Station — freightsnap.com/image-station — photos + key freight info, but hardware/warehouse-grade, not a phone app for dealers.
  - scaleforgram.com/measure-package — free web "measure box from photo" toy; no class, no quotes, no claim kit.
  - FedEx/InchCalculator freight-class calculators — manual dimension entry, web only.
  - vmeasure.ai, MobileDemand — enterprise dimensional scanners (hardware).
- **Novelty confidence: MEDIUM-HIGH.** No phone-native photo→class→quote→packing→claim-claim kit found for the pro-shipper (auction/estate/furniture) segment. Caveat: post-throttle searches were not possible; a 2025–26 launch could exist unverified. Building blocks (Shippo/EasyPost APIs + on-device measurement) are cheap.
- **Weekly + shareable:** pros ship every week; the output quote card is textable to the customer/consignee. Business payer: the dealer.

### 4.2 #2 — Weekly proof-of-service card
- **Classification:** field-service proof-of-service for solo techs (GPS check-in + photos + branded customer report).
- **Closest products (VERIFIED, this is a 2025–26 occupied cell):**
  - Provvio — provvio.com/proof-of-service-software/pool-service-proof-app — "GPS-verified visits, before-and-after photos, automatic branded reports for homeowners."
  - PoolProof — poolproofapp.com / poolproof.com — "Pool service proof in 15 seconds. Log readings, photos, notes, time and location — then send your customer a clean visit report."
  - PoolTrac, Simpool, Dip, PoolService.Software, PayThePoolMan — pool vertical CRMs.
  - Lawnly (lawnly.com — "GPS check-ins and before/after photos — proof of work without a phone call"), LawnPro, Mowstack, TurfHop, FieldSnapp, Lawnbook.
- **Novelty confidence: LOW as a pure "proof card."** The only defensible wedge: (a) cross-trade (one app for pool + lawn + cleaning + filter swaps, no vertical lock), (b) the **UNKNOWN-first-class visit ledger** (scheduled-but-no-proof is shown as a red unknown, not hidden — kill-rule-safe), (c) weekly digest auto-card, (d) deliberately NOT a CRM (PoolProof already has routing/scheduling).
- **Weekly + shareable:** the single best fit for the Shipaton growth/retention prizes (weekly ritual + customers text the card). The problem is distribution, not the mechanism.

### 4.3 #3 — Vendor cert/COI wall for market & event organizers
- **Classification:** small-market certificate-of-insurance + vendor-cert compliance collection wall (organizer-side), with phone-photo intake from vendors.
- **Closest products:** Corporate COI trackers exist (TrustLayer, Binder, enterprise myCOI-class tools). Gingr's "PreCheck" (gingrapp.com — vaccination/wavier verification before drop-off) proves the cert-wall pattern monetizes in small-business verticals. No dominant small-market/organizer-side phone product verified this pass (searches throttled).
- **Novelty confidence: MEDIUM.** The organizer-side "who's missing what before Saturday" dashboard for farmers markets / street-fair / vendor events is unverified as occupied; corporate COI tools are priced/positioned for enterprises.

---

## 5. Shareable-output × weekly-ritual shortlist (Shipaton prizes)

The task asked to find a mechanism that attaches to **a shareable output + a weekly ritual**. Ranked:

1. **Weekly proof-of-service card** (M13/M18) — the customers text the card; the tech's ritual is one tap per visit. Saturated vertically — the differentiation must be UNKNOWN-first-class + cross-trade + not-a-CRM.
2. **Freight quote/claim card** (M12) — pros ship weekly; the quote card with measured dims + class is textable to the consignee; the same capture builds the claim-evidence pack for the 1-in-N damage event.
3. **"What changed" weekly digest** (M16) — franchise/SOP/vendor-term digest shared to the GM/partners; weekly ritual = paste the week's docs.
4. **Booth-rent weekly reconciliation summary** (M1) — the owner texts each renter "here's your week" — shareable but low social virality.

---

## 6. Strongest raw signals

1. **The losers' mechanisms are sound; the payer assignment was the bug.** Across all ~140 concepts, the camera-evidence, photo-OCR, deadline-clock, and reconciliation mechanisms repeatedly worked and repeatedly died on "who pays / who owns the correction," not on mechanism quality. The winning pattern is: **point a working mechanism at a business that already has a weekly money flow and owns its own correction step.** (INFERENCE, high confidence from corpus-wide pattern.)
2. **Photo→money-record is the family to bet on.** The most convergent single-payer cluster in Round 12 was C1 (field-service ops; un-invoiced work = first-person FACT), and its mechanism (M1) plus the freight photo-class (M12) both convert the camera into a money-recovery instrument for the person already holding the money. Weekly, business-payer, phone-native, no kill-rule violation. (FACT for pain #81/#5, INFERENCE for the rest.)
3. **The empty cells are where the clones aren't, not where the pain is.** Proof-of-service for pool/lawn is *verified* occupied (PoolProof/Provvio/Lawnly — all 2025-26-class launches). Freight photo→class→quote for auction/estate/furniture pro-shippers came back empty in this pass. Where pain is strong and phones-native, check for the clone before believing the pain. (FACT from this pass's searches.)
4. **The "UNKNOWN-first-class" rule is the product differentiator, not a constraint.** Every saturated proof-of-service product claims a green check. A visit ledger that renders "scheduled but no proof captured" as an explicit unknown is both kill-rule-safe and a real wedge against PoolProof-class incumbents. (INFERENCE.)
5. **Negative evidence to respect:** grooming (Gingr/MoeGo full platforms, even with report cards + PreCheck), restaurant scheduling (Homebase/7shifts free tiers), pool/lawn proof (PoolProof/Provvio), consumer dispute packs (commodity), price registrars (intrinsic cold start). (FACT from direct fetches / Round-11 clone list.)
6. **Search throttling this pass** (DuckDuckGo/Bing/Mojeek bot-walled mid-session) means #3's market is **unverified-occupied, not verified-empty**; a re-check before any BUILD is mandatory.
