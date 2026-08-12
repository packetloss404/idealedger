# Mechanism Taxonomy — 2026-08-12

This taxonomy consolidates the reusable mechanisms extracted from rejected ideas and the 2026-08-12 regulated-handoff research. It is intentionally organized by mechanism rather than product name.

| Mechanism | Used in / source domains | What survives | Failure conditions | Promising transfers |
|---|---|---|---|---|
| M1 Un-invoiced-work detector | SnapInvoice, field service | Finds a money leak owned by the payer | Suite already owns jobs and billing; no target channel | High-volume informal field work only |
| M2 Schedule-photo diff | Worker schedule, restaurant labor | Compares visible versions without claiming employer truth | Worker payer weak; host owns schedule | Owner-side paper schedules with budget invariant |
| M3 Two-record diff | Paystub, freight, lab records | Useful when identifiers and timing are stable | Aggregation/settlement differences make a false mismatch | Broker or lab audit with authoritative IDs |
| M4 Paired handoff evidence | Rental, returns, custody transfer | Captures both sides at a physical transition | Second party will not sign; causation remains unknown | Business-mandated rental or lab intake |
| M5 Share/photo intake | SnapInvoice, JobNote, lab forms | Attaches to an existing capture ritual | Extra forwarding step has delayed payoff | Broker mailbox, lab pre-check, field intake |
| M6 Entitlement/rule reference | Consumer rights, cottage rules | Cited rule can guide an action | Content is free; jurisdiction changes; no payer | B2B rule action tied to a paid filing |
| M7 Evidence packet | Claims, customs, rental | Source-linked export reduces reconstruction time | Receiving party ignores packet; event too rare | Broker review, paid rental recovery |
| M8 Escalation nudger | Quotes, receivables, certifier chase | Routes a pending action to a named owner | Existing CRM/invoicer owns object; user cannot enforce correction | Narrow exception queue with business payer |
| M9 Deadline state machine | Process tracker, funeral, compliance | Makes owner, clock, and expected next step explicit | No authoritative event; consumer anxiety has no payer | B2B regulated exceptions |
| M10 Disposition decision flow | Returns, waste, rental | Turns intake into a bounded next action and audit | Adjudicator/host owns decision; liability | Internal lab or rental exceptions |
| M11 Credential wall | Licenses, COIs, event vendors | Finds missing/expired artifact before a deadline | Official lookup free; enterprise tools own buyer | Small vertical with mandated buyer workflow |
| M12 Measurement-to-quote | Freight, equipment | Camera measurement can reduce manual quoting | Carrier API/platform owns quote; accuracy liability | Paid pro-shipping only if channel exists |
| M13 Wallet/certificate output | Service proof, compliance | Persistent shareable artifact can support retention | Certificate overclaims completion or authority | Business-issued evidence pass |
| M14 Price registrar | Repairs, services | Recorded prices can expose opacity | Cold start and heterogeneous cases make “normal” unsafe | Do not pursue without owned transaction data |
| M15 Silent-leak flag | Subscriptions, SaaS overlap | Read-side anomaly can reveal recoverable spend | Data access and correction belong to host | Owner-side expense audit with supplied statements |
| M16 Change digest | Schedules, policies, vendor terms | Diffing reduces missed changes | Notification aggregation is commodity | Contract/policy change with action owner |
| M17 One-time-entry reuse | Forms, profiles, case records | Structured source data reduces repeated re-entry | Destination schema/legal owner changes | OEM or vertical forms infrastructure |
| M18 Status page/log feed | Repair, service, process tracker | Shareable state reduces “is it done?” calls | Consumer payer weak; host can ship it | Host-buys-transparency only with distribution |
| M19 Multi-form synthesis | Funeral, customs, MoCRA, permits | One source record can draft jurisdiction-specific outputs | Template maintenance and legal review dominate | API/OEM service for incumbent systems |
| M20 External-party routing | Funeral certifiers, customs suppliers, lab senders | Sends precise missing-field requests to the right party | Consent, privacy, response and identity remain external | Broker/lab concierge below final decision |
| M21 Per-state rules database | Funeral, cottage food, licensing | Cited versioned rules can narrow ambiguity | Maintenance cost exceeds payer value; rules are not authority | B2B filing workflow with update fee |
| M22 Exception-to-recovery | Rental damage, lab rejection, customs hold | Connects an exception to money/time recovered | Evidence does not change collection or turnaround | Paid recovery desk, not a generic tracker |
| M23 Field-level provenance | Customs, death records, lab COC | Every extracted value points to source page/line/photo | Source conflicts require human adjudication | Broker packets, regulated form drafts |
| M24 Accepted-handoff state | Rental, lab receipt, EPA manifest | Distinguishes captured from accepted/received | Receiving system does not ingest sidecar state | Integrations or business-mandated handoff |
| M25 Authority boundary | All regulated workflows | Labels observed, reported, inferred, accepted, and unknown states | Marketing turns draft/evidence into “verified” | Trustworthy enterprise workflows with explicit abstention |

## Cross-Mechanism Pattern

The strongest current bundle is:

`M5 capture -> M23 provenance -> M9 deadline/exception -> M20 routing -> M24 accepted handoff -> M22 recovery`

The bundle is promising only when the buyer owns the correction and the downstream system accepts the handoff. Otherwise it becomes a well-designed feature inside an incumbent.

## Mechanisms That Repeatedly Fail

- Generic M7 evidence packet for consumers, where the host owns adjudication.
- M9 status tracking for consumers, where no one pays for self-entered state.
- M14 price registries without a transaction source or stable comparison unit.
- M19 form synthesis sold directly to a small operator without a distribution partner.
- M13 certificates that imply quality, identity, causality, or completion the phone cannot observe.

## Current Transfer Queue

1. Sample-acceptance exception queue: test M5 + M20 + M22 inside one lab; do not build a neutral LIMS.
2. Customs broker chase: test M20 + M23 inside a broker-owned mailbox; do not classify or file.
3. Rental return recovery: test M4 + M22 + M24 on high-value equipment; do not sell a generic evidence camera.
