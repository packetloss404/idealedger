# XPRIZE Focus-Group Synthesis — 2026-08-10

**Method and limitation:** This was a simulated research round, not recruited human research. The focus groups are hypothetical persona composites used to generate and attack hypotheses; no claim is made that single mothers, single fathers, seniors, adult entertainers, or any age cohort actually endorsed these concepts. The findings require compensated interviews and paid tests before product decisions.

## Brief

Demographic synthesis covered single mothers, single fathers, seniors/caregivers, adult entertainers, four hypothetical 18–24 groups, and four hypothetical 25–30 groups. Specialist reviews also covered trades, creator businesses, accessibility, family care, finance, and XPRIZE evidence requirements. The groups converged on urgent pains but also reproduced the Ledger's strongest failure patterns: fragmented third-party state, two-sided adoption, generic AI organization, safety overclaims, and weak recurring use.

The XPRIZE bar is not a polished demo. A credible 90-day entry needs unaffiliated customers, real payment, an AI-native operating workflow, product telemetry/logs, a defensible Google Cloud use, and category impact. The exact Devpost page should remain the source of truth for submission details: https://xprize.devpost.com/.

## Official category framing and fit

The hackathon's five categories are:

- **Education & Human Potential** — transforming how people learn, grow, and achieve their best.
- **Entrepreneurship & Job Creation** — fueling tools that help new founders and economies thrive.
- **Small Business Services** — powering everyday businesses with tools to compete and win.
- **Money & Financial Access** — breaking down barriers to banking, capital, and financial freedom.
- **Professional Services Access** — connecting everyday people with expert guidance.

The strongest current fit is **Small Business Services**: LotMatch, WeedCheck, and DoorHold all have a business payer, a narrow operational moment, and a path to revenue evidence. **CaptionGap** is best framed under **Professional Services Access** only if the app-owned session helps people participate in a service or expert interaction; it should not be presented as a general captioning replacement. **DeferralGap** belongs under **Money & Financial Access**, but remains a concierge experiment because supplied records do not establish settlement truth. Parent, caregiver, senior, and young-adult concepts could touch Education, Money, or Professional Services, but none currently clears the evidence bar.

Category selection should follow the paying customer and measurable impact, not the demographic that surfaced the pain. A category claim is not validation: each finalist still needs customer payment, repeat use, safe AI behavior, and an auditable experiment.


## Official judging rubric applied

The supplied judging criteria change the decision standard. We must not confuse a cheap validation experiment with a likely finalist.

| Criterion | What must be true in the 90-day window | Evidence required |
|---|---|---|
| **Business Viability** | A real business launches, acquires real users, earns real revenue, and has a sustainable model beyond the event | Unaffiliated paying customers, revenue by date, retention/repeat use, acquisition channel and cost, support cost, gross-margin path |
| **AI-Native Operations** | AI is live in production and executes key operating decisions | Production decision logs, model/version telemetry, abstention and human-review path, overrides, error outcomes, inference and review cost |
| **Category Impact** | The product fundamentally redefines a workflow or has a credible path to widespread adoption | Measurable outcome in the chosen category, adoption/distribution evidence, and a credible scale story—not merely a polished demo |

### Re-ranking under the official criteria

1. **LotMatch** — best overall finalist candidate. It has a real business payer and a bounded AI decision (`MATCH`, `DIFFERENT`, or `UNREADABLE`) at a costly operational moment. It still needs real paid customers, production telemetry, reviewer operations, and evidence that the workflow can spread beyond a handful of flooring crews.
2. **WeedCheck** — strongest AI-visible demonstration. Computer vision can execute the `HOLD` decision, but the supported material scope and seller adoption must be broad enough to make Category Impact credible.
3. **CaptionGap** — conditional Professional Services Access candidate. It could demonstrate AI-native monitoring and meaningful accessibility impact, but only after DHH/HoH-led co-design, paid demand, and zero false-healthy states. It is not currently a business.
4. **DoorHold** — viable small-business experiment, weak finalist under this rubric. Its core value is a timer, signed link, and response event; adding AI would be ornamental unless AI genuinely selects and manages a bounded next action in production.
5. **CrashTape** — technically impressive reserve, but the core differentiator is systems reliability rather than AI and the strongest feature may need to remain free.
6. **DeferralGap** — Money & Financial Access concierge research, not yet a sustainable or scalable AI-native business.

**Current conclusion:** no candidate has yet met the official judging criteria. LotMatch is the recommended first build only if its paid test proves demand and the production plan makes AI operationally central. WeedCheck is the best alternate if its real-world eligibility and adoption are wider than the fixture. Do not submit DoorHold merely because it is cheap to test; it risks failing AI-Native Operations and Category Impact.

### 1. LotMatch — keep as commercial lead

Flooring and tile crews repeatedly face irreversible mixed-lot errors. The buyer is a business owner, the phone observes labels at the physical decision point, and field-level OCR comparison can abstain rather than invent compatibility. The existing Ledger gate remains binding: 300 real labels across 10 brands, over 99% accepted-token accuracy, zero false matches, and over 90% live-carton adoption. Test prepaid founder access with installers before building.

### 2. WeedCheck — keep as visual/hackathon lead

Small apparel and craft sellers lose material and shipping time when weeding misses vinyl. The strongest demo is a constrained image comparison with an explicit hold state, not a general design assistant. The existing 100-piece blind test, recall, false-hold, latency, and paid-use gates remain binding. Recruit sellers and collect prepayments; do not infer demand from creator enthusiasm.

### 3. DoorHold — keep as cheapest service-business test

Solo mobile providers can create value with a client-side no-app link for a missed appointment: access, paid waiting, or reschedule. The product records a bounded response event and must not claim the client was contacted, present, or safe. Test manually with locksmiths, cleaners, mobile groomers, or repair businesses and charge before automating.

### 4. CaptionGap — mission-led validation only

A narrow app-owned two-person session may improve live caption confirmation, but it requires compensated Deaf/HoH co-design and a separate paid-demand test. It is not a generic caption replacement and must not be built from assumptions about accessibility users.

## Struck proposals and why

- **Single-parent school/admin inbox, PickupProof, and co-parenting coordination:** fragmented school and custody systems, incumbent products, adversarial safety needs, and two-party adoption. A one-parent document helper could be researched later, but no simulated enthusiasm clears the evidence bar.
- **Caregiver Loop, senior daily check-in, and medication/appointment assistant:** crowded coordination market, high trust and medical liability, and false reassurance from a phone event. Family Caregiving Coordinator and DailyOkay are already recorded failures in the Ledger.
- **Adult-entertainer blacklist, client-screening network, and venue safety monitor:** the need is real, but a shared blacklist creates retaliation, defamation, privacy, and worker-safety risks; a venue network creates cold start. Adult Creator Compliance is already passed_market because exact compliance products and sensitive identity storage make the wedge unattractive. A worker-controlled, sponsor-funded safety study could reopen this area, but not a surveillance product.
- **Gig payout calendar, gig resume, and generic invoice/scope assistant:** platforms and bank records are not authoritative through screenshots, existing products cover the workflow, and a freelancer will not pay repeatedly for a feature inside a broader accounting system. GigDeposit and adjacent scope tools are already in the kill set.
- **Young-adult benefits navigator, rent/debt coach, creator growth copilot, relationship advice, and job-application autofill:** broad AI wrappers, financial/legal risk, low retention, or incumbent platform distribution. Resume Reuse remains raw rather than promoted.
- **CareCreditCheck / medical-bill auditor:** real savings pain but high-stakes accuracy, exact competitors, and unsafe confidence. The existing Medical Bill and EOB Auditor remains passed_market.

## Segment-specific signals

Single parents valued time recovery, predictable handoffs, and one-person utility more than another social network. Seniors valued human escalation, scam resistance, and dignity; they rejected surveillance disguised as safety. Adult entertainers emphasized privacy, control over data, income volatility, and protection from venue retaliation; any product must be worker-governed. Ages 18–24 emphasized cash-flow volatility and scope creep but had low tolerance for subscriptions. Ages 25–30 emphasized small-business operations, childcare, benefits, and caring for parents; they would pay businesses before paying for another consumer organizer.

These are hypotheses, not demographic truths. Sampling, accessibility, compensation, and participant safety must be designed before treating them as evidence.

## Decision and next loop

Do not broaden mining. Run paid experiments for LotMatch, WeedCheck, and DoorHold; run compensated co-design for CaptionGap. Keep all rejected concepts visible in the database with resurrection triggers. The next research artifact should report outreach, payments, usage, false-positive/false-negative results, and customer quotes—not more simulated ideation.
