# Regulated Handoffs Research — 2026-08-12

This is the focused continuation dossier for the 2026-08-12 research marathon. It records the independent boring-workflow, library/academic, technology, competitor, and adversarial lanes that followed the previous marathon's correction of overconfident funeral and SnapInvoice conclusions.

## Scope And Evidence Boundary

The goal was not to generate another broad list. It was to test whether recurring physical or regulated handoffs create a defensible product boundary after the Ledger's existing rules are applied.

Evidence classes used:

- **PRIMARY/GOVERNMENT:** statutes, EPA/CBP/Apple/Google/Expo/RevenueCat/NIST documents.
- **ACADEMIC:** peer-reviewed papers and technical proceedings with full text opened where marked.
- **TRADE/ASSOCIATION:** ARA, Lab Manager, RER, NCBFAA, and industry bodies.
- **PRODUCT/MARKETING:** vendor feature pages and case studies; establishes capability, not demand.
- **USER/OPERATOR:** reviews, forums, or practitioner material; anecdotal unless independently quantified.
- **INFERENCE:** synthesis from multiple sources.

No customer interviews, operator calls, paid pilots, or prepays were run. No simulated persona was treated as validation.

## Independent Research Waves

### Wave 1 — Boring pain and service disruption

The pain miner opened 26 public pages across funeral intake, cottage manufacturing, rental handoffs, lab chain of custody, and hazardous waste. The strongest recurring observations were:

1. Funeral first-call and transfer packets still mix paper, fax, phone, signatures, custody labels, and re-entry, but case-management vendors own much of the surrounding record.
2. Small-batch makers use spreadsheets and paper batch records for lot traceability; the artifact is real, but demand and regulatory frequency vary sharply by product.
3. Rental pickup/return inspections happen at a high-frequency physical moment. Serial numbers, hour meters, photos, signatures, contracts, and billback records create an authoritative-enough business workflow, but the category is already occupied by rental-management and inspection vendors.
4. Laboratory sample acceptance has a clear exception vocabulary: label, container, preservation, temperature, volume, holding time, custody, and paperwork. The lab owns the acceptance decision, but the sender often bears recollection and retest costs.
5. Hazardous-waste manifests have a real regulatory and fee surface, but EPA's e-Manifest system is the authoritative host and is actively moving toward a paper sunset.

The recommended second check from this lane was equipment rental. The second check killed a generic evidence app and narrowed the only plausible experiment to a paid recovery desk for high-value, serial-numbered equipment.

### Wave 2 — Library and academic deep dive

The library scout began with seeded terms from CDC/state EDRS materials rather than broad “industry inefficiency” queries. This produced a useful citation chain:

`1960 paper death workflow -> 1998 national EDRS design -> 2005 voice attestation -> 2017/2020 error audits -> 2026 historical retrospective`

The most important full-text findings were:

- Simon (2026) shows that digitizing death registration moved work into data entry, maintenance, pick-list design, rollout, and exception handling; it did not remove the distributed human chain.
- Hogarth et al. (2005) describes a California voice-signature workflow with time-limited access numbers and remote physician attestation. It proves technical/legal feasibility in one context, not broad adoption.
- Schuppener et al. (2020) found at least one error in 85% of 179 autopsy-reviewed certificates, including severe errors in 23%.
- McGivern et al. (2017) found errors in 53% of 601 Vermont EDRS certificates, major errors in 51%, and underlying-cause code changes in 60%. The study also shows why aggregate data can look plausible while record-level data remains wrong.
- Florida, South Carolina, and California statutes expose materially different deadlines, actors, temporary certificates, amendments, and filing obligations. A national “rules engine” is therefore a maintained legal data product, not a simple checklist.
- NIST, FAA, and OMB materials converge on the same mature mechanism: visible pending work, named owner, rejection route, corrective action, milestone, and audit trail.

The library lane did not validate a funeral business. It validated a reusable mechanism family and weakened the claim that a new app can own medical or registrar truth.

### Wave 3 — Current technology frontier

Official 2026 documentation confirmed several meaningful enablers:

- Apple Foundation Models supports image understanding, guided structured output, tool calling, dynamic profiles, and Private Cloud Compute.
- Google ML Kit GenAI runs supported workloads locally through AICore with no per-call server cost, but device support, quotas, foreground-only use, and model-version differences are material constraints.
- Expo SDK 57 `expo-widgets` supports iOS widgets and Live Activities through development builds, not Expo Go.
- RevenueCat Web supports web purchases, shared entitlements, redemption links, funnels, and web-first pre-sales, but its own RevenueCat Billing path does not support B2B sales.
- Cloudflare/OpenAI/Anthropic tool primitives reduce integration cost, but tool output still requires schema validation, approval, idempotency, and permission boundaries.

These changes reopen three implementation assumptions, not three markets:

1. Offline/private multimodal intake can be economically practical for narrow B2B workflows.
2. Voice-to-draft work orders can be low-latency and approval-gated.
3. Web-first/no-install purchase and redemption can remove transaction friction.

They do not overturn the existing rules that model output is not evidence, background execution is not reliable scheduling, and an AI wrapper without a payer or distribution mechanism is not a product.

### Wave 4 — Competitor and graveyard gauntlet

Independent competitor research attacked funeral, cottage, rental, lab, customs, and frontier candidates by mechanism and buyer rather than exact name.

Key classifications:

| Hypothesis | Classification | Corrected conclusion |
|---|---|---|
| Funeral certifier exception queue | DIRECT/PARTIAL, host-absorbable | FuneralOS, CaseNX, FuneralHQ, Passare, Halcyon, and state EDRS systems already own much of the queue/document surface. A neutral exception layer remains a paid-pilot question, not an empty cell. |
| Multistate funeral form synthesizer | DIRECT inside incumbents / host-absorbable | Form libraries and one-time entry exist in incumbent funeral platforms. A standalone national form engine is not the right default. |
| Cottage compliance passport | NO OBVIOUS MATCH for the exact US food/cosmetic niche, but weak recurrence | Official state rules and templates prove fragmentation; they do not prove a subscription payer. The earlier WTP and TAM language was too strong. |
| Equipment rental evidence app | DIRECT/PARTIAL | Point of Rental, Record360, Quipli, Booqable, EZRentOut, Trackunit, Cheqroom, and generic inspection tools occupy the workflow. Only a high-value recovery service merits a paid concierge test. |
| Lab sample acceptance exception desk | DIRECT/HOST-ABSORBABLE | LabWare, CrelioHealth, LabVantage, STARLIMS, and LIMS receiving modules already own the record. A one-week lab-specific service may still prove savings, but no standalone whitespace claim is allowed. |
| Hazardous-waste manifest sidecar | DIRECT/HOST-ABSORBABLE | EPA RCRAInfo/e-Manifest, Wastebits, Cority, and EHS suites own the authoritative record and integrations. Kill as a neutral app. |
| Customs broker document chase | DIRECT/HOST-ABSORBABLE | KlearNow, CargoWise, Magaya, Descartes, e2open, and broker service models already cover document intake and exceptions. Any future test must be broker-owned and below filing decisions. |
| VoiceDesk Lite | DIRECT/HOST-ABSORBABLE | ServiceTitan, Jobber, Housecall Pro, VoiceDesk, RingCentral, and human answering services own the adjacent workflow. Only a vertical shadow pilot can justify further work. |
| WeatherWindow Ops | DIRECT/PARTIAL | NWS is authoritative for alerts, not safety decisions; DTN, Onsite360, Construction Weather, Procore, and existing safety procedures occupy the buyer surface. Reject broad product. |
| FieldProof Ledger | DIRECT/HOST-ABSORBABLE | Encircle, CompanyCam, Timemark, SafetyCulture, and domain systems already combine offline capture, photos, timestamps, and reports. QR/NFC is an input primitive, not a moat. |

The graveyard pattern was not “all these products failed.” It was more important: many tools were acquired, bundled, or absorbed, which is negative evidence against a new horizontal sidecar even when the workflow pain is real.

### Wave 5 — Cross-domain transfer

The strongest transfer from aviation, public-sector controls, laboratory quality, and customs is not form filling. It is:

`source artifact -> rule/jurisdiction selection -> field-level provenance -> exception queue -> named owner -> external-party route -> authorized acceptance -> correction/audit record`

This bundle transfers to funeral, lab, customs, permit, insurance, rental, and regulated maintenance workflows. The transfer succeeds only where one buyer owns the operational correction and the receiving system accepts the resulting artifact.

### Wave 6 — Adversarial tournament

Three independent attack lanes produced genuine disagreement:

- The bootstrapper ranked broker-side customs chase first on repeatability and measurable labor savings, rental recovery second, lab sample acceptance third, funeral fourth, and cottage compliance fifth.
- The technology/product lane ranked a narrow approval-gated voice intake first, a non-safety weather acknowledgement audit second, and rejected FieldProof as a standalone company.
- The hostile competitor lane selected **no standalone survivor**. It identified sample acceptance and weather as cheap experiments only, not investment candidates.

The director accepts the hostile result. The disagreement is preserved because the customs ranking is a useful future concierge question, but it does not clear the Ledger's distribution and host-ownership bar.

## Primary And Serious Sources Examined

### Library, academic, and historical

- Sara M. B. Simon, “Reengineering” U.S. death data collection, *Medical History*, 2026, Cambridge University Press, full text via [DOI](https://doi.org/10.1017/mdh.2026.10071).
- Michael Hogarth et al., “A Novel Voice Signature Method for Electronic Death Registration Systems,” AMIA, 2005, full text via [PMC1560770](https://pmc.ncbi.nlm.nih.gov/articles/PMC1560770/).
- Leah Schuppener et al., “Death Certification: Errors and Interventions,” *Clinical Medicine & Research*, 2020, full text via [PMC7153801](https://pmc.ncbi.nlm.nih.gov/articles/PMC7153801/).
- Lauri McGivern et al., “Death Certification Errors and the Effect on Mortality Statistics,” *Public Health Reports*, 2017, full text via [PMC5692167](https://pmc.ncbi.nlm.nih.gov/articles/PMC5692167/).
- Janet Rosenbaum et al., “Timeliness of provisional United States mortality data releases,” 2021, full text via [PMC8564267](https://pmc.ncbi.nlm.nih.gov/articles/PMC8564267/).
- K. A. Myers and D. R. Farquhar, “Improving the accuracy of death certification,” 1998, full text via [PMC1229326](https://pmc.ncbi.nlm.nih.gov/articles/PMC1229326/).
- Don de Savigny et al., community verbal-autopsy/CRVS integration, 2017, full text via [PMC5328373](https://pmc.ncbi.nlm.nih.gov/articles/PMC5328373/).
- Christopher Murray et al., PHMRC gold-standard verbal-autopsy validation, 2011, full text via [PMC3160920](https://pmc.ncbi.nlm.nih.gov/articles/PMC3160920/).
- Svetlana Lowry et al., NIST clinical workflow and exception handling report, 2015, full text via [NIST IR 8095](https://doi.org/10.6028/NIST.IR.8095).
- FAA AC 43.9-1G repair-record guidance, full text via [FAA PDF](https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_43.9-1G.pdf).
- OMB Circular A-123 M-16-17, exception and corrective-action controls, full text via [OMB PDF](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/memoranda/2016/m-16-17.pdf).
- U.S. National Office of Vital Statistics, *First Things and Last*, 1960, Google Books partial access via [catalog record](https://books.google.com/books?id=S7dQAQAAMAAJ); metadata/snippets only, not claimed as full reading.
- NCHS/CDC, *Proceedings of the Public Health Conference on Records and Statistics*, 1991, Google Books partial access via [catalog record](https://books.google.com/books?id=31PyNKerEB8C); searchable pages examined, not a full unrestricted edition.

### Primary government and official technical sources

- [Florida Statutes 382.008](https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0382/Sections/0382.008.html), current 2025 code, full text.
- [South Carolina Code 44-63-74](https://www.scstatehouse.gov/code/t44c063.php), current code, full text.
- [California HSC 102775](https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=102775.&lawCode=HSC), current code, full text.
- [EPA e-Manifest](https://www.epa.gov/e-manifest), updated July 31, 2026, full page.
- [EPA e-Manifest fees](https://www.epa.gov/e-manifest/e-manifest-user-fees-and-payment-information), FY2026–27 fee table, full page.
- [EPA e-Manifest rulemakings](https://www.epa.gov/e-manifest/e-manifest-rulemakings-and-policies), March 5, 2026 paper-sunset proposal, full page.
- [CBP ACE](https://www.cbp.gov/trade/automated), updated July 20, 2026, full page.
- [CBP entry summary process](https://www.cbp.gov/trade/programs-administration/entry-summary), updated January 6, 2026, full page.
- [CBP ISF 10+2](https://www.cbp.gov/border-security/ports-entry/cargo-security/importer-security-filing-102), full page.
- [CBP post-summary correction](https://www.cbp.gov/trade/programs-administration/entry-summary/post-summary-correction), updated August 6, 2026, full page.
- [Apple Foundation Models](https://developer.apple.com/tutorials/data/documentation/foundationmodels.md), current 2026 documentation, full page.
- [Google ML Kit GenAI](https://developers.google.com/ml-kit/genai), updated August 7, 2026, full page.
- [Expo SDK 57 widgets](https://docs.expo.dev/versions/v57.0.0/sdk/widgets/), current versioned docs, full page.
- [RevenueCat Web](https://www.revenuecat.com/docs/web/overview), current docs, full page.
- [NWS API](https://www.weather.gov/documentation/services-web-api), official documentation was independently inspected by the technology lane; direct fetch from this environment returned a 403, so the result remains source-reported rather than independently re-read here.

### Product, trade, and operational sources

- [FuneralOS](https://funeralos.net/en/), [CaseNX](https://www.casenx.com/), [FuneralHQ](https://www.funeralhq.com/product/case-management), [Passare](https://www.passare.com/), [Halcyon](https://www.halcyondcms.com/).
- [ARA industry intelligence](https://ararental.org/Industry-Intelligence-Resources), [Quipli](https://www.quipli.com/), [Point of Rental Inspection App](https://www.point-of-rental.com/products/inspection-app/), [Record360 recovery](https://record360.com/solutions/damage-detection-and-recovery-documentation/), [Booqable](https://booqable.com/features/), [EZRentOut](https://ezo.io/ezrentout/features/), [Cheqroom](https://www.cheqroom.com/features/equipment-checkout-software/).
- [LabWare](https://www.labware.com/blog/how-does-a-lims-work), [CrelioHealth](https://creliohealth.com/lims/lab-sample-management/specimen-tracking-software), [EMSL COC](https://www.emsl.com/ChainOfCustody.aspx), [STARLIMS Environmental Sciences](https://www.starlims.com/environmental-sciences/), [Wastebits](https://wastebits.com/products/waste-manifest-software), [Cority](https://www.cority.com/solutions/environmental/).
- [KlearNow](https://klearnow.ai/), [CargoWise Customs](https://www.cargowise.com/solutions/cargowise-customs/), [Magaya Customs](https://www.magaya.com/acelynk-abi-software/), [Descartes Customs](https://www.descartes.com/solutions/broker-and-forwarder-enterprise-systems/customs-compliance), [NCBFAA](https://www.ncbfaa.org/).
- [ServiceTitan AI virtual agent](https://www.servicetitan.com/features/pro/voice-agent), [Housecall Pro CSR AI](https://www.housecallpro.com/features/ai-team/csr-ai/), [Jobber AI receptionist](https://www.getjobber.com/features/ai-receptionist/), [VoiceDesk](https://www.voicedesk.org/).
- [Encircle field documentation](https://www.getencircle.com/solutions/field-documentation/), [CompanyCam](https://www.companycam.com/features), [Timemark](https://www.timemark.com/features/capture-photo-proof), [DTN outdoor safety](https://www.dtn.com/weather/outdoor-safety/), [Onsite360 weather scheduling](https://onsite360.co/blog/weather-aware-scheduling).

## Contradictions

1. **Customs versus lab economics:** the bootstrapper ranks customs first because shipments are frequent and labor savings are measurable; the competitor lane rejects it because KlearNow/CargoWise already own the workflow. Resolution: a broker-paid shadow pilot is the only valid next evidence. No software build.
2. **Funeral “empty cell” versus current products:** earlier research saw a missing chase layer; current products show missing/pending document queues inside funeral PMS. Resolution: separate “the queue exists” from “a neutral external-party escalation layer is valuable.”
3. **Rental evidence marketing versus acceptance reality:** vendors claim strong recovery, while reviews show upload/camera failures and contracts do not automatically prove causal responsibility. Resolution: test paid recovered dollars and signed acceptance, not report generation.
4. **On-device AI availability versus device coverage:** Apple and Google reduce marginal cost, but Apple requires Apple Intelligence-capable devices and Google documents device lists, quotas, foreground-only inference, and model-version differences. Resolution: benchmark supported devices and keep abstention/fallback paths.
5. **Digital regulation versus actual authority:** EPA and CBP provide digital systems, but the receiver, broker, registrar, or lab still owns acceptance. A sidecar can prepare, route, and audit; it cannot silently certify.

## Durable Decision

No new standalone product clears the tournament. Three narrow paid concierge experiments remain scientifically useful:

1. **Lab sample-acceptance desk:** one lab, 100 rejected/near-miss samples, five working days, measure preventable defects, staff time, recollection/retest, turnaround, and a paid continuation.
2. **Broker document chase:** one customs broker, 20 live ocean shipments, shared mailbox/spreadsheet, no filing authority, measure touches and time-to-broker-ready packet, require payment before continuation.
3. **Rental return recovery:** three independent high-value equipment yards, 20 units each, pickup/return evidence and billback packets, charge setup plus per-return fee, require recovered money and continuation payment.

These are human experiments, not agent-runnable validation. If none can recruit a real operator or collect payment, the correct result is further portfolio shrinkage, not another round of idea generation.
