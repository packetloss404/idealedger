# SERVICE DISRUPTION HUNTER — Half 2 (Q16–Q30)
Round 12 Shipaton research. Every claim labeled FACT / INFERENCE / HYPOTHESIS. URLs retrieved 2026-08-10 via web fetch.

---

## 16. Where is cancelling harder than purchasing?

**Gym memberships — strongest documented case.**
- FACT: FTC finalized "Click-to-Cancel" rule Oct 16, 2024 requiring sellers to make cancel "as easy as" signup; FTC cited ~70 negative-option complaints/day in 2024, up from 42/day in 2021; 16,000+ public comments. https://www.ftc.gov/news-events/news/press-releases/2024/10/federal-trade-commission-announces-final-click-cancel-rule-making-it-easier-consumers-end-recurring
- FACT: The rule was **voided by the Eighth Circuit in July 2025** (procedural defect), so the pain is currently unregulated at the federal level. https://www.consumerfinancemonitor.com/2025/07/23/eighth-circuit-voids-ftc-click-to-cancel-rule/ ; revived attempt May 2026: https://www.jonesday.com/en/insights/2026/05/ftc-revives-clicktocancel-rule-new-risks-for-subscription-businesses
- FACT: NYC Dept. of Consumer Protection issued a "subscription trap" compliance warning to **~187-200 gyms** (Feb 2026) — municipal enforcement of exactly this pain. https://www.nyc.gov ; https://patch.com (NYC Targets Gyms Over Subscription Traps, 2/19/2026)
- FACT: Consumer press in 2026 still publishing "how to cancel X gym chain" guides and viral stories (LA man "moves to escape Equinox"; PA woman asked for odd proof to cancel Planet Fitness). https://brobible.com ; https://health.yahoo.com (6/23/2026)
- NEGATIVE evidence: FTC rule, NY state, California AB 2863 (7/1/2025) and NYC all try to fix this — so government agrees it is broken; but federal fix vacated.
- INFERENCE: "Cancel button" is the classic dark pattern; the gap is **discovery + enforcement** (knowing which subscriptions you have and whether each still auto-renews) — but the ledger already rejects generic subscription trackers; a winner must own a correction step, not just awareness.

## 17. Where is switching providers harder than it should be?

**Residential internet (ISPs).**
- FACT: ILSR: "Most Americans Have No Real Choice in Internet Providers" (2020). https://ilsr.org
- FACT: Ars Technica: "50 million US homes have only one 25Mbps provider or none at all" (2017, cited widely). https://arstechnica.com
- FACT: The Markup documented that incumbent ISPs price-discriminate and bury good deals (inertia pricing). https://themarkup.org
- INFERENCE: In a 2-provider market the "switch" is a monopsony-vs-consumer power game (install fees, router fees, admin fees on the exit bill) — switching is hard largely because competition is thin. This is a **structural** pain, not a software-solvable one.
- HYPOTHESIS (weaker): health insurance / Medicare plan switching is high-friction, but ACA exchanges and Medicare Plan Finder already exist → already partly solved.

## 18. Where does the provider own information that logically belongs to the consumer?

**Medical records (HIPAA Right of Access).**
- FACT: HHS Office for Civil Rights continues its "Right of Access Initiative" enforcement — settled with Concentra (Dec 2025) over failure to provide records promptly/cheaply; OCR has done a decade of these cases because providers stall or over-charge for your own records. https://www.hhs.gov (OCR Right of Access enforcement news, 12/16/2025)
- FACT: Banking blacklists: **ChexSystems** is used by ~80% of US banks to screen checking-account applicants; a consumer can only get a free report once a year; consumers find out they're flagged only when a bank denies them. https://en.wikipedia.org/wiki/ChexSystems
- FACT: Telematics/UBI insurers collect your driving data and you cannot easily see or export what they scored you on. Consumer Reports: "What You're Giving Up When You Let Your Car Insurer Track You In Exchange for Discounts" (Oct 2021). https://www.consumerreports.org
- INFERENCE: All three are "your data, their file" — the consumer is the last to know what's on it, and there is no consumer-friendly live view. Credit bureaus were fixed by law (free annual reports + freezes); medical-record and bank-data access are still broken.
- NEGATIVE: credit scores/freezes now consumer-friendly (see Q23) — proving the pattern CAN be fixed by software/regulation once the state is sanctioned.

## 19. What important status has no consumer-friendly representation?

**Widow(er)/survivor benefit status; disability claim status — both "black box until months later."**
- FACT: The 19th: "Widows are waiting months for the benefits meant to help them after loss" (Mar 2026). https://19thnews.org
- FACT: DREDF 2025 qualitative report: barriers to disability benefits have "gotten a lot worse"; applicants describe opaque status and long waits. https://dredf.org
- FACT: SSA disability backlog widely reported (30% cut in 2026 still leaves hundreds of thousands waiting). https://www.washingtonexaminer.com / https://www.al.com (Mar 2026)
- NEGATIVE (statuses ALREADY solved): IRS "Where's My Refund"; package tracking (UPS/FedEx/Amazon); flight status (FlightAware); rental background checks (Checkr candidate portal); USCIS case tracker. These prove the status-parity category is proven when a sanctioned source exists.
- INFERENCE: SSA has no real-time, consumer-grade status API; the phone cannot observe the truth → per durable-truth rule #1 this is **not** a clean phone-native opportunity unless the user self-tracks (input side).
- HYPOTHESIS: The genuinely unsolved "status" is *restoration/arrival* status (power outage ETA, service-technician arrival) — see Q28.

## 20. What tedious process starts because of a predictable life event?

**Bereavement admin (after a death).** Also moving, birth, divorce.
- FACT: UK gov acknowledges the load — Tell Us Once exists so families don't have to notify every government dept; it explicitly says you *still* must separately contact banks, employers, pension providers, utilities. https://www.gov.uk/after-a-death
- FACT: UK consumer org Which? publishes "What financial admin do families face after a bereavement?" as standing advice (May 2026) — evidence the burden is a recognized lifecycle task. https://www.which.co.uk
- FACT: MoneySavingExpert: "New service lets you tell several banks about a death with one form" (2018) — even the *fix* was newsworthy because the default is one-by-one. https://www.moneysavingexpert.com
- FACT: Good Housekeeping: "Death notification services: How to tell companies and organisations when someone dies" — the advice industry exists to coach this manual slog. https://www.goodhousekeeping.com
- INFERENCE: This is the canonical "predictable-life-event tedium" — high emotional weight + dozens of orgs + zero US equivalent of Tell Us Once. Phone-native potential is real (checklist + per-org scripts + document safe), but it is not an "owned state" play unless the app IS the executor's ledger.

## 21. What process forces a person to contact five organizations separately?

**Reporting a death in the US (no Tell Us Once equivalent): SSA, banks, credit bureaus, DMV, insurers, utilities, subscriptions, payroll/HR.** Also **moving** (USPS COA is single-org only; utilities, insurance, DMV, banks, gyms each separately) and **name change after marriage/divorce**.
- FACT: gov.uk explicitly lists the orgs you still must contact yourself even after Tell Us Once (banks, employers, pension providers, utilities). https://www.gov.uk/after-a-death
- FACT: Economic Times: "Money tasks after death in family: How to close accounts, transfer investments, make claims and more" — the checklist is a genre of content, proving the many-orgs manual flow. https://m.economictimes.com
- FACT: The which.co.uk and moneysavingexpert pieces above document the "5+ orgs separately" default.
- INFERENCE: Cross-org notification is unownable state (no sanctioned API per org) → per ledger rule, a "notify everyone" aggregator is dead; the survivable wedge is a **personal record keeper** where the *user* enters the data (death cert scans, account list, scripts), i.e., user-entered owned state. Weak-phone-native, strong-demand.

## 22. Where are people purchasing "peace of mind" but receiving little measurable value?

**Identity-theft protection (LifeLock), extended/home warranties, credit monitoring.**
- FACT: FTC: LifeLock paid **$100M to settle contempt charges** for false claims that it protected consumers "with the same high-level safeguards used by financial institutions" and alerts "as soon as" misuse occurs (Dec 2015; $68M of it to consumers). https://www.ftc.gov/news-events/news/press-releases/2015/12/lifelock-pay-100-million-consumers-settle-ftc-charges-it-violated-2010-order
- FACT: FTC: credit freezes have been **free nationwide since Sept 21, 2018** and are "the most effective way to prevent new-account identity theft" — undercutting paid monitoring products. https://www.ftc.gov/news-events/news/press-releases/2018/09/starting-today-new-federal-law-allows-consumers-place-free-credit-freezes-yearlong-fraud-alerts
- FACT: Home-warranty complaints persist (e.g., American Home Shield class-action coverage 2026). https://lawfold.com
- INFERENCE: The FTC repeatedly tells consumers the *free* action (credit freeze) is superior to the paid one — the strongest evidence that a whole "peace of mind" product category monetizes fear, not outcome.
- NEGATIVE: FTC's own consumer guidance on identity-theft-protection services. http://www.consumer.ftc.gov/articles/0235-identity-theft-protection-services

## 23. What common fee is really an information fee?

**Cell-phone "administrative / telco recovery charge"; balance-inquiry ATM fees; medical-records copy fees.**
- FACT: Verizon was sued over its admin fee and settled a class action (Jan 2024); 2025 settlements total **$100M**; press: "Verizon is paying $100 million in settlements — here's how to check" (Yahoo, Oct 2025); PCMag: "Verizon Quietly Hikes Its Hidden Fee" (Dec 2024). https://www.yahoo.com / https://www.pcmag.com / https://www.mobileworldlive.com
- FACT: HHS HIPAA right-of-access enforcement targets providers charging unreasonable copy fees for your own records (see Q18).
- INFERENCE: These are charges for *telling you something / storing your data* — pure information rent. The consumer has no cheap way to see "what the admin fee is and how to avoid it," and no consumer tool audits bills for these line items.
- HYPOTHESIS: A bill-audit tool is a "read the PDF" data problem — user-entered owned state, but OCR of statements is weak owned state (user can photograph their own bill) → phone-native plausible, monetization thin.

## 24. What common fee is really a convenience fee?

**Live-event ticketing (Ticketmaster); also ATM fees, dynamic currency conversion, restaurant POS service charges.**
- FACT: DOJ + states sued Live Nation/Ticketmaster for monopolizing live events and forcing fees; in 2026 a **jury found Ticketmaster/Live Nation operated an illegal monopoly** and DOJ settled (states continue). https://www.ticketnews.com (8/7/2026); https://www.pbs.org (3/16/2026); https://www.nytimes.com/…/4mxnWtz (DOJ settlement coverage)
- FACT: Consumers complain fees make up a large share of ticket price; the federal government spent years attacking the practice.
- INFERENCE: The "convenience fee" is the strongest example of a fee with no cost-of-service relationship; it persists only because of market power. A phone app can't fix fee opacity on someone else's marketplace (rule #8: host owns the correction step) → weak phone-native, strong evidence of the pattern.

## 25. What service could become dramatically cheaper if the user did 20% of the work with good software?

**Auto insurance via telematics (UBI) — proven, quantified.** Also tax prep DIY.
- FACT: Insurers sell substantial discounts in exchange for 20% user effort (drive with app/dongle): CNBC "Are safe driving discounts worth it?" (2024); WSJ "What Is Usage-Based Car Insurance?" (Feb 2026); CR quantifies the privacy tradeoff (Oct 2021). https://www.cnbc.com / https://www.wsj.com / https://www.consumerreports.org
- FACT: Telematics discounts are routinely marketed at 20–40% for safe drivers by Progressive (Snapshot), Allstate (Drivewise), Nationwide (SmartRide). https://www.valuepenguin.com / https://www.nerdwallet.com
- INFERENCE: The user does "the 20%" (drive, self-report, enable tracking) and the software does the rest — this is the exact pattern of "cheaper if user did 20% of the work." It is **already solved** by the carriers' own apps (negative evidence for a new entrant), but proves the model.

## 26. What professional workflow hasn't been redesigned since smartphones became ubiquitous?

**Bereavement/death-care admin (estate executor workflows, funeral-home handoffs).** Honest negative: most obvious trade workflows ARE redesigned.
- FACT: See Q20/Q21: the executor workflow (death cert → green form → funeral → probate → notify N orgs → transfer accounts) is still manual; gov.uk built a government-side service but the private side is unredesigned. https://www.gov.uk/after-a-death
- NEGATIVE evidence (already solved): field-service/dispatch (ServiceTitan, Jobber), home inspection (Spectora, HomeGauge — mobile reports), salon/barber scheduling (Square/Schedulicity), trucker logbooks (ELD mandate), notary (Notarize), property management (Buildium).
- INFERENCE: The un-redesigned workflows are the *low-ARPU, emotional, credential-heavy* ones: death care, small-shop insurance claims (Which?: "Consumer harm in the insurance claims process", 7/2024, https://www.which.co.uk), and the consumer-facing side of trade appointments (see Q28). These are gaps *because* they are low-volume per user and high-friction to digitize, not because tech hasn't touched them.

## 27. What activity became possible only because modern phones now have a certain sensor/API/capability?

**Room/space measurement via LiDAR + RoomPlan API (iPhone/iPad).** Also UWB (digital car keys), NFC (transit/hotel keys), GNSS geofencing.
- FACT: Apple shipped RoomPlan (iOS 16, 2022): point your phone, get a parametric 3D floor plan — "fastest way to create a floor plan." https://9to5mac.com (6/15/2022); SketchUp/Engineering.com "scan a space with an iPad" (5/2024). https://www.engineering.com
- FACT: Used for Scan-to-BIM and design workflows; ZDNET documents consumer uses of LiDAR on iPhone (11/2025). https://www.geoweeknews.com / https://www.zdnet.com
- INFERENCE: Pre-smartphone this required a $10k laser scanner + trained surveyor; now a consumer can measure any room to ~1-2% accuracy in seconds. Strong phone-native moat (hardware API no web app can fake).
- HYPOTHESIS: Uses beyond CAD: moving quotes, furniture-fit validation, rental-deposit walkthroughs (before/after LiDAR scan as evidence), painting/tiling/flooring material estimates — where the phone captures *owned* geometric truth.

## 28. What happens every day millions of times but has almost no dedicated software?

**"Waiting on a service-technician / install appointment window"** (cable, HVAC, appliance, utility) — plus the *verification* side: "did the work actually get done."
- FACT: The Verge: "Comcast Confessions: why the cable guy is always late" — the 4-hour/all-day window is a standing complaint. https://www.theverge.com
- FACT: NYC/AAA and utility consumer guidance constantly coaches people how to handle no-show windows; the pain is cross-industry (cable, plumbing, HVAC, moving, furniture delivery).
- NEGATIVE evidence (already solved, same category): store hours (Google Maps), package ETA (carrier apps), restaurant wait (Google/Yelp), school bus (Here Comes the Bus), prescription-ready (CVS/Walgreens apps), gas prices (GasBuddy).
- INFERENCE: The pattern "status that millions want, daily, with no consumer-grade software" is real, but every instance that has a sanctioned source got an app. The residue (technician arrival, outage ETA, laundromat/line waits) is exactly the places where **no sanctioned API exists** → only the *user* can enter the truth, which caps the product (rule #1/#2). Honest assessment: weak-to-medium phone-native opportunity, strong pain.

## 29. What consumer task has excellent enterprise software but terrible individual software?

**Personal money management / household bookkeeping.**
- FACT: Intuit **shut down Mint** (announced Nov 2023, closed Mar 2024) and shoved users to Credit Karma; hundreds of thousands of users displaced; "Migrating from Mint to Credit Karma: It Was Not Good." https://www.cnbc.com (11/7/2023); https://www.bloomberg.com (11/2/2023); https://wallethacks.com (3/27/2024)
- FACT: Post-Mint coverage repeatedly notes NO consumer app replicated Mint's free aggregation — the individual gap is wider than ever. https://www.usatoday.com (5/14/2026); https://www.bgr.com (12/16/2025)
- INFERENCE: Enterprise bookkeeping is mature (QuickBooks/Xero), but the *individual/family* layer is a graveyard (Mint dead, personal-capital pivoted). Evidence that "individual software for a task with great enterprise software" is a real pattern; also a caution: consumer budgeting is a documented churn graveyard (ledger agrees).
- HYPOTHESIS (weaker but phone-native): home/reno project management and family "asset ledger" remain enterprise-grade-feature/consumer-absent.

## 30. What "small" frustration appears across several unrelated industries?

**The "Annoyance Economy": phone-tree/hold, junk fees, re-entering info, opacity of cancellation.** Documented as a *named, quantified* phenomenon in 2026.
- FACT: Groundwork Collaborative: "Taking on the Annoyance Economy" (Feb 2026) — a policy report naming fees + wasted time as an economic category. https://groundworkcollaborative.org
- FACT: Investopedia: "How the 'Annoyance Economy' Is Costing Americans Billions in Hidden Fees and Wasted Time" (May 2026). https://www.investopedia.com
- FACT: FTC's own data: complaints about negative-option subscriptions hit ~70/day (2024), doubling in 3 years (see Q16). https://www.ftc.gov
- FACT: Hold-time/phone-tree frustration is quantified in consumer research (NBC: "worst offender for hold time frustration is… Apple", 2016). https://www.nbcnews.com
- INFERENCE: The genuinely cross-industry residue (hold → callback loops, "why are you asking what I already told you", login/wallet re-entry) is a *channel* problem: each industry's fix lives inside its own app, so no cross-industry software exists. Phone-native candidate would have to hold user-entered state (statements, accounts, IDs) to auto-fill — same owned-state constraint as Q23.

---

## Strongest disruption signals (max 8 bullets)

1. **Gym/subscription cancellation is a government-certified failure**: FTC rule (vacated July 2025, revived 2026), 70 complaints/day, 16k comments, NYC warning to ~187 gyms in Feb 2026. Proof of durable demand and a regulatory tailwind for a compliant tool. https://www.ftc.gov/news-events/news/press-releases/2024/10/federal-trade-commission-announces-final-click-cancel-rule-making-it-easier-consumers-end-recurring ; https://patch.com (NYC gyms 2/19/2026)
2. **Bereavement admin is the largest un-automated life event in the US**: gov.uk admits even Tell Us Once leaves banks/employers/utilities/pension manual; Which? and MSE treat "notify everyone" as standing advice. US has no equivalent → wide-open, user-entered-state phone wedge (executor ledger + scripts + doc safe). https://www.gov.uk/after-a-death ; https://www.which.co.uk
3. **"Peace of mind" products are repeatedly proven near-worthless**: LifeLock $100M FTC settlement + free-credit-freeze-since-2018 means the FTC itself says the free action beats the paid product. https://www.ftc.gov/news-events/news/press-releases/2015/12/lifelock-pay-100-million-consumers-settle-ftc-charges-it-violated-2010-order
4. **"Your data, their file" is widespread and user-hostile**: HIPAA Right-of-Access enforcement still necessary in 2025; ChexSystems blacklists ~80% of banking with a once-a-year report. https://en.wikipedia.org/wiki/ChexSystems ; https://www.hhs.gov
5. **Hidden "administrative/information" fees are a $100M-class problem**: Verizon alone paid $100M in admin-fee settlements; PCMag covers the "quiet hike." Consumers have no audit tool. https://www.yahoo.com (10/2025) ; https://www.pcmag.com (12/2024)
6. **Ticketmaster fee structure = judged illegal monopoly (2026 jury verdict)**: the canonical convenience fee with no cost basis. https://www.ticketnews.com (8/7/2026)
7. **Individual money software is demonstrably worse than the enterprise layer — Mint is dead and nothing replaced it.** https://www.cnbc.com (11/7/2023) ; https://www.bloomberg.com (11/2/2023)
8. **Phone-only sensing (LiDAR/RoomPlan) already turns a $10k surveyor task into a consumer scan** — a genuine hardware-moat pattern with uses (quotes, deposit evidence, estimates) that are phone-native. https://9to5mac.com (6/15/2022) ; https://www.engineering.com (5/2024)

Honest caveats: the highest-pain signals (bereavement, status tracking, technician arrival) are all **user-entered-state** plays or **host-owned** (fee/monopoly) plays — neither is a sanctioned-API slam dunk. Per the durable-truth rules, the promising builds own the *user's* ledger (documents, accounts, checks) and monetize organization/coordination, not fake verification.
