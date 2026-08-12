# Research Playbook — Idea Ledger

**Updated:** 2026-08-12

## Durable operating lessons

1. **Treat “validated” as a behavioral claim, not a research adjective.** Government workflow documents can prove a required process exists; vendor pages can prove a feature exists; anecdotes can reveal language and workarounds. None proves prevalence, willingness to pay, or competitive whitespace. Keep those claims separate until operators pay or repeatedly adopt a concierge workflow.
2. **Search-result summaries are leads, not evidence.** Web search often returns plausible but weakly sourced synthesis. For important claims, open the primary government document, paper, product documentation, or customer artifact and record retrieval date, access level, and source class.
3. **The strongest modern search lane is “workflow + failure + artifact,” not “AI startup + industry.”** Queries combining the moment, the failure, and the document/record produced better leads: `signature delay notification`, `re-rate dispute evidence`, `condition report photos`, `manual reconciliation`, and `work queue pending action`.
4. **Library/academic search needs a known vocabulary seed.** Broad OpenAlex/Google Books queries mostly returned catalog/API noise. Start from an observed industry term or government form, then follow citations, authors, reports, and bibliographies. A failed broad query is a strategy signal, not evidence that the problem is absent.
5. **Historical sources are most useful for mechanism discovery.** The research value is often the old workflow—queues, exception handling, certification, handoff, reconciliation—not the obsolete market itself. Transfer the mechanism only after checking who owns authoritative state and who pays for correction.
6. **“No obvious match found” is the only safe novelty conclusion.** Competitor searches surfaced adjacent tools in nearly every apparently empty cell. Classify exact, direct, partial, adjacent, substitute, host-absorbable, dead/abandoned, or no obvious match found.
7. **Acquisition is a first-class falsification gate.** SnapInvoice failed before product testing because no eligible operator channel could be recruited. A hypothesis with no reachable first-user channel is not validation-ready, regardless of technical appeal.
8. **Rules databases are potential assets, not automatic moats.** A cited 50-state table is valuable only if customers repeatedly need it, updates are affordable, and the workflow can act on it. Test paid access and update frequency before building the atlas.
9. **Phone authority must be explicit.** Photos, local documents, GPS, scans, and user-submitted records are observable. Completion, approval, compliance, or quality often remain external-party state and need a human-confirmed handoff.
10. **When agents converge on the same pattern, commission independent dissent before adding ideas.** At least three lanes should investigate pain, competition, and historical/academic evidence without reading one another’s conclusions.
11. **A current exception queue is not automatically an empty product cell.** Funeral PMS, LIMS, customs platforms, rental systems, and voice platforms commonly expose missing/pending work inside the host. Search for `pending`, `rejected`, `exception`, `returned`, `accepted`, and `correction` in the incumbent before claiming a chase layer is new.
12. **The receiving system is part of the product boundary.** A photo, QR/NFC tag, signed PDF, or evidence packet has value only if the buyer or downstream authority accepts it. Capture alone is not authority.
13. **Recovery dollars beat documentation claims.** For rental, lab, customs, or claims workflows, measure recovered money, avoided retest/rework, time-to-accepted packet, or reduced touches. Do not count a prettier report as an outcome.
14. **Model cost collapse is an implementation change, not demand evidence.** On-device and cheap API inference can reopen privacy/offline margins, but every proposal still needs a payer, repeated trigger, distribution channel, and truth boundary.
15. **Historical workflow continuity is a challenge, not validation.** If a problem is documented from 1960, 1998, and 2026, that proves persistence. It may also prove that authority, liability, and incentives resisted prior technical fixes.

## Query patterns that worked

- `[workflow] pending action notification government PDF`
- `[artifact] dispute evidence deadline`
- `[industry] manual reconciliation spreadsheet workaround`
- `[industry term] failure rate study`
- `[product category] negative reviews damage/return/re-rate`
- `site:gov [form/process] user guide`
- `site:openalex.org/works [specific terminology]`
- `[artifact] rejected OR returned OR pending OR accepted [industry] study`
- `[incumbent] exception queue missing documents correction workflow`
- `[artifact] recovery dollars retest rework turnaround time`
- `[industry] negative review upload camera signature offline`

## Query patterns that underperformed

- Broad `OpenAlex + industry + workflow inefficiency` searches (catalog noise).
- Broad Open Library searches without a title/author/subject seed.
- Generic `AI agent for [industry]` searches (clone-wave and marketing noise).
- Treating search snippets or generated result summaries as opened sources.
- Exact phrase searches for a mechanism without the host's terminology (`chase layer`, `exception desk`, `evidence ledger`).

## Source handling rules

For each promoted claim record: title, publisher/author, URL, publication date if available, retrieval date, source type, access level (full/partial/metadata), claim supported, and uncertainty. Count syndicated press releases once. Mark Reddit/forum evidence as anecdotal and simulated focus groups as synthetic.

## Current neglected lanes

- Funeral workflow: government evidence supports pending-action/notification friction, but payer, prevalence, and competitive whitespace remain unvalidated.
- Small freight re-rate disputes: official carrier rules and government inspection standards support the evidence-artifact mechanism; product opportunity remains crowded/uncertain.
- Equipment rental condition handoff: direct and adjacent products exist; only a narrow operator/channel test can distinguish a wedge from a feature.
- Cottage manufacturing/compliance: rules fragmentation is plausible, but demand and update economics need paid tests.
- Laboratory sample acceptance: repeated, measurable workflow; incumbent LIMS ownership is the central gate.
- Customs broker document chase: frequent and deadline-linked, but broker licensing and CargoWise/KlearNow absorption require a paid shadow pilot.
- Rental damage recovery: high-value recovery may support a service, but generic evidence capture is occupied.

## Next-wave selection rule

Prefer one lane with (a) a reachable operator channel, (b) money or deadline exposure, (c) authoritative artifacts available to the user, (d) a receiving system that accepts the output, and (e) a one-week paid concierge test. Stop if three independent lanes produce only vendor claims, no reachable buyer, no accepted artifact, or no measurable repeated behavior.
