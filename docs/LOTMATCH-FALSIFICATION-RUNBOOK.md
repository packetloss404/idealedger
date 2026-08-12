# LotMatch — Falsification Runbook (2026-08-11)

**Purpose:** Hand-off document for the next person (or agent) who runs the LotMatch operator-recruitment gate. Reduces the cost of the next pass by 60-80% by packaging the recruitment script, fixture spec, success/fail thresholds, and decision rule in one page.

**Status:** LotMatch (idea id `lot-match`) is the Round 12 survivor and top of the funded-experiment queue after SnapInvoice was passed_market on 2026-08-11 (recruitment gate failed). See `docs/IDEA-MINING-LOOP-2026-08-10-ROUND12-BUILD-OUT.md` for the full Round 12 context.

---

## 1. Target operator profile

- **Industry segment:** US tile and flooring installers (residential kitchen/bath remodels, light-commercial buildouts). 1-15 person crews.
- **Job type:** tile (ceramic, porcelain, natural stone) or LVT/LVP/glue-down vinyl. NOT carpet, NOT hardwood refinishing, NOT polished concrete.
- **Frequency:** at least 3 tile/flooring installations per month (enough volume that a wrong dye-lot or wrong caliber creates a meaningful weekly cost).
- **Geography:** one US state, English-speaking, no licensing gate (we are documenting a software adoption, not a regulatory wedge).
- **Channel that reaches them:** local flooring distributors, tile showrooms, the Pro Installer / Floor Covering Installer / NTCA reader community, r/Tile, r/Flooring, and the Floor Covering Installation Contractors Association (FCICA) directory.
- **Anti-targets:** big-box stores (Lowe's, Home Depot installation arms — they have central QC), wholesale-only operations, pure carpet installers (different workflow).

## 2. Opener script (one-question)

> "Hey — quick one. When your crew opens a tile or LVT carton and it's a different shade, dye lot, or caliber than the rest of the floor already laid, what happens? How much time/money does that cost you per occurrence?"

**Listen for:** the word "expensive" or "wasted" or "client complaint" or specific dollar/time estimates. Anyone who answers with "happens maybe twice a year, no big deal" is not the right target — they will not pay. Anyone who describes a specific incident ("we had a $1,800 redo last month because the dye lot shifted") is high-priority.

**If they describe a cost:** continue. If not, thank them and move on. Do NOT pitch the product in the first 60 seconds.

## 3. Concierge pilot fixture

For a high-priority operator who agrees to a 30-day pilot:

1. **Pre-pilot (Day -2 to 0):** ask for the next 3 jobs in queue, get carton SKUs, product codes, lot numbers from the work order. Document the "expected" lot per carton.
2. **Day 0:** ship a single 5-by-7 laminated scan card (a printed QR code tied to a web app) and a 60-second Loom-style video. Phone is fine; no app required for the pilot.
3. **Day 1-30:** the operator scans each carton before opening. The web app compares the photo + SKU to the expected lot and surfaces "MATCH / WRONG LOT / WRONG SHADE / WRONG CALIBER" before the tile is cut.
4. **Day 30:** review the scan log with the operator. Count: (a) cartons scanned, (b) correct catches, (c) false flags, (d) time saved.
5. **Decision:** paid conversion at $19/mo or $39/mo per active operator.

## 4. Success / fail thresholds (the falsification gate)

- **Falsification PASSES (idea is buildable):** at least 7 of 10 operators scan ≥80% of cartons in the pilot, and at least 4 cite a specific incident where the scan prevented a wrong-lot install.
- **Falsification FAILS (tombstone idea):** fewer than 5 of 10 operators scan ≥50% of cartons, OR none reports a prevented incident, OR the false-flag rate exceeds 15% (operators stop trusting the system).
- **Recruitment gate fails (no signal at all):** fewer than 3 operators can be recruited for the pilot within 4 weeks. **This is what killed SnapInvoice on 2026-08-11** — the exact same gate, exact same failure mode. The resurrection_trigger for `lot-match` requires a concrete channel or partner with 10+ operator relationships pre-existing.

## 5. What to do if the gate fails

- If the recruitment gate fails: tombstone `lot-match` as `passed_market` with a `decision_reason` that explicitly names the channel/partner needed. Do not re-propose the idea in a future round without the channel.
- If the operator-side gate fails: the cell is either too narrow (3 of 10 is a real number; mobile scanning in this segment may be too high-friction) or the wrong vertical (try LVT-only or natural-stone-only). Update the `resurrection_trigger` to point at the new vertical and re-queue.
- If the OCR / SKU-matching gate fails: the model is wrong, the SKU data is sparse, or the carton-photo capture is too inconsistent. Document the failure mode precisely so the next agent can either (a) find a better SKU data source, (b) redesign the capture flow, or (c) tombstone the idea entirely.

## 6. Hand-off note

- **Whoever runs the next pass:** read the Round 12 build spec at `docs/ROUND-12-SNAPINVOICE-BUILD-SPEC.md` for the original LotMatch design. The product design has not changed. What changed is the recruitment reality: 1-3-person operator outreach is genuinely hard, and you should expect to spend 8-12 hours on cold outreach before you have 3 pilot candidates. Budget accordingly. If a recruiter, agency, or industry-association partner is available, use them — the $1,000-2,000 cost is cheaper than the 12-hour time-sink.
- **What success looks like:** the falsification gate passes, you have a paid pilot customer, and you can write a 1-page case study with their before/after numbers. The case study is the input to the next round's Gate G0 (paid rejection of suites).
- **What failure looks like:** a tombstone record. The corpus expects you to record it, not hide it. Failed experiments are inputs to the next experiment.

## 7. Open questions for the next pass

- Is the FCICA directory open enough that 50 cold outreach messages reach real installers, or is it a closed network requiring an intro?
- Does the Floor Covering Installer magazine accept a 1-page sponsored run-of-content placement (~$300-500) that doubles as a recruitment channel?
- Is there a Tile Council of North America (TCNA) member directory that reaches 100+ installers in one place?
- What is the actual mobile-camera SKU-detection accuracy on real carton photos (vs the lab accuracy in the Round 12 spec)? A 5-carton A/B test with a friendly installer would settle this in 30 minutes.

---

*Generated 2026-08-11 by research-matrix-loop tick 1 (research-synthesis-loop tick 2 surfaced LotMatch as the top of the funded-experiment queue; the matrix loop produced this runbook to make the next recruitment pass cheaper).*
