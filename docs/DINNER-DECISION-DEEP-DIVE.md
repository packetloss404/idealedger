# Dinner Decision: Deep-Dive and Adversarial Review

**Research date:** 2026-08-08  
**Decision:** Passed on 2026-08-08 after research. Preserve the narrower commitment protocol for possible future validation.  
**Broad concept verdict:** No-go  
**Narrow concept verdict:** Interesting but insufficient for the current hackathon; archive unless new evidence justifies a concierge test

## Executive verdict

The pain is real. The obvious app is not original.

Households regularly struggle with dinner because the decision arrives when energy is low and because the question hides several jobs: remembering preferences, knowing what is available, managing cost and time, choosing who will cook or collect the food, and absorbing complaints. Academic family-meal research supports the broader mental-load problem.

However, the product category is experiencing an extraordinary 2026 indie-app swarm. Current products already offer nearly every obvious combination of:

- solo recommendations;
- household swiping or voting;
- vetoes and super-votes;
- cook, order, or go-out modes;
- pantry and receipt scanning;
- leftovers;
- recipe import;
- shared shopping lists;
- cook rotation;
- one opinionated answer;
- two-minute timers;
- restaurant deep links;
- household subscriptions.

Most of these products show little visible traction. This is not proof that nobody uses them, because store ratings and download thresholds are incomplete measures. It is nevertheless a consistent warning: many builders recognize the frustration, produce a polished solution, and fail to create a retained standalone habit.

The broad pitch—**“help households decide what is for dinner”**—therefore fails the differentiation test.

One narrower behavior may remain worth testing:

> **Before the hungry-hour debate begins, the household receives one executable default. Silence accepts it. A veto must come with a feasible replacement or ownership of dinner. At the deadline, the plan locks.**

This is not recipe discovery or dinner democracy. It is a **lazy-consensus commitment protocol** intended to close the loop and assign the next action.

The recommendation is to test that protocol manually for 10–14 days before building. The Shipaton deadline is September 30, 2026, leaving enough time to collect behavioral evidence rather than betting immediately on a crowded feature set. [RevenueCat Shipaton overview](https://revenuecat-shipaton-2026.devpost.com/)

## The thesis we tested

Initial promise:

> Get a solo user, couple, family, or household from “what's for dinner?” to one accepted cook, leftovers, pickup, delivery, or eat-out decision in under two minutes.

Initial assumptions:

1. The problem happens often enough to form a habit.
2. A household-specific decision mechanism is better than search, chat, or a generic AI assistant.
3. Multiple people will participate quickly enough to reduce rather than add friction.
4. The application can offer truthful, executable options across home food and restaurants.
5. The decision layer can support a paid household subscription.
6. Existing products focus on recipes or meal planning, leaving tonight's commitment underserved.

Research rejected assumption 6 and materially weakened assumptions 3, 4, and 5.

## Pain: real, frequent, and broader than choosing food

### Strongest evidence

A 2024 peer-reviewed family-meal study based on interviews and design sessions with 18 Midwestern U.S. families describes meals as coordination across planning, shopping, preparing, and cleaning, with complicated preferences, emotional needs, schedules, and unequal care work. The authors specifically warn against simplistic technology interventions that treat family meals as an optimization problem. [“The struggle is a part of the experience”](https://arxiv.org/abs/2409.06627)

The study supports several important product truths:

- the main burden is often carried by one primary preparer;
- “what should we eat?” is entangled with who performs the work;
- family members have different nutritional, emotional, cultural, and sensory needs;
- automating decisions can reduce agency or ignore meaningful household practices;
- a voting feature does not inherently redistribute planning, shopping, cooking, or cleanup.

Research on meal-kit use also reports that families value reduced food-related decision fatigue and reduced maternal mental load. That validates willingness to pay for the **complete removal of work**, but a meal kit supplies food and logistics in addition to a recommendation. [Meal-kit family study](https://www.sciencedirect.com/science/article/pii/S0195666321007236)

Recent community discussions repeatedly use the language of exhaustion, repetitive rotations, wasted groceries, panic takeout, and meal planning becoming another application to manage. These discussions are useful qualitative signals, not population estimates. [Meal-planning-app discussion](https://www.reddit.com/r/mealprep/comments/12zdo68/why_are_people_not_using_meal_prepmeal_planning/) [Dinner-every-night discussion](https://www.reddit.com/r/Adulting/comments/1tc8jwt/you_have_to_plan_dinner_every_single_night/)

### What the actual job includes

The painful question is rarely just:

> Which meal looks best?

It is closer to:

> Given who is home, how tired we are, what we own, what will spoil, how much time and money we have, what everybody will tolerate, and who must execute it, what are we actually doing tonight?

This distinction matters because a beautiful swipe deck can add work:

1. Someone must populate or approve the options.
2. Someone must invite or remind the household.
3. Everyone must open the application.
4. The group must wait for responses.
5. Ties and universal vetoes require another decision.
6. One person still has to cook, collect, pay, or place the order.

An app that reduces “choosing” while increasing food administration has failed.

## Competitive map

### Exact household dinner products

| Product | Current promise | Monetization / visible traction | Why it matters |
|---|---|---|---|
| [SomeYum](https://apps.apple.com/us/app/someyum-what-to-eat-tonight/id6748638722) | AI meal cards, solo choice, partner link, swipe-to-match, recipe or nearby exact dish, fridge/menu scanning, taste learning | $4.99/month or $29.99/year; too few ratings for a score | Closest direct product and actively updating |
| [PlatePoll](https://platepoll.com/) | Household votes across cook-in and eat-out, solo mode, recipes and nearby restaurants | Advertises $14.99/month or $79/year; still a launch waitlist | Occupies the broad multimode household pitch; listed price is not WTP evidence |
| [Chowy](https://www.chowy.app/) | Household dinner voting, recipe imports, receipt/barcode pantry, shared lists, expiry, planning, cook rotation | $4.99/month or $39.99/year; 10+ Google Play downloads and insufficient iOS ratings when checked | Strong feature breadth with almost no visible adoption yet |
| [Supper](https://play.google.com/store/apps/details?id=com.nabustudio.supper) | Household votes on cook, order, or go out; recipe import, pantry, planning, grocery list | Premium tier; launched in 2026 | Exact three-mode overlap |
| [What's For Dinner?!](https://www.whatsfordinner.uk/) | Household swipe/match, weekly plan and shopping list | Early-stage; iOS link returned unavailable when checked | Near-verbatim problem and mental-load framing |
| [Dinna](https://getdinna.app/) | Household voting, pantry camera, weekly schedule, shopping list, cook-duty mechanics | Free beta with August 2026 launch announced | Occupies voting plus mental-load redistribution |
| [DinnerLogic](https://getdinnerlogic.com/) | One clear household answer based on pantry, preferences, repetition and context | Waitlist / pre-beta | Occupies the “one answer, not a list” wedge |
| [Munchd](https://apps.apple.com/us/app/munchd-ai-dinner-decider/id6761441647) | Anti-choice dinner app: one pantry-aware answer based on family, energy and time | Free; 1 rating when checked | Directly rejects choice and weekly-planner complexity |
| [HelloMealio](https://www.hellomealio.com/) | Two-person weekly plan, partner vote, shared list, who-cooks assignment, Tonight widget and reminders | $3.99/month or $19.99/year; 2 iOS ratings and 5+ Google Play downloads when checked | Exact household price and mental-load layer proposed in early ideation |
| [Tea Board](https://teaboard.app/) | Household meal bank, voting, scheduling, shopping and meal history | £2.99/month, £19.99/year, or lifetime offer | Household rotation and paid tier already exist |
| [Dinners](https://apps.apple.com/us/app/dinners/id6476162177) | Couples/households swipe recipes and match | One-time $1.99 filters; 23 ratings after roughly two years | Older evidence that a polished exact mechanic has stayed small |
| [What's for Dinner Tonight?](https://apps.apple.com/us/app/whats-for-dinner-tonight/id6763809850) | Household swipes, super-likes, vetoes, custom meals and winner history | $1.99 premium upgrade; 4 ratings when checked | The simplest proposed mechanic is already a low-price utility |

Ratings and Google Play download bands are directional observations, not verified active-user counts. New applications have had little time to accumulate either. The important pattern is not that each product has failed; it is that many products independently converged on the same idea and none provides public evidence of breakout demand.

### Restaurant decision products

Restaurant selection is even more saturated:

- [tastemate](https://apps.apple.com/us/app/tastemate-food-with-friends/id6756938394) explicitly promises group restaurant decisions in under two minutes.
- [Tonight's Bite](https://apps.apple.com/us/app/tonights-bite-dinner-decider/id6757810400) uses shared restaurant swiping and group matches.
- [TableVote](https://tablevote.app/) offers no-download group restaurant voting using Google Places.
- [Restaurant Roulette](https://apps.apple.com/us/app/restaurant-roulette/id1431314346) is a mature randomizer benchmark with roughly 1,700 ratings when checked.
- [Cobble](https://apps.apple.com/us/app/cobble-ai-group-planner/id1472811526) handles broader group planning, voting, date/time coordination and booking handoff.

“Tinder for restaurants,” voting, blind voting, roulette, group links, vetoes, timers, and deterministic tie-breaking are not defensible wedges.

### Scaled adjacent incumbents

Products with visible scale monetize more than the final decision:

- [Mealime](https://apps.apple.com/us/app/mealime-meal-plans-recipes/id1079999103) combines personalized planning, recipes, lists and grocery handoff; it has tens of thousands of ratings and more than one million Google Play downloads.
- [AnyList](https://www.anylist.com/complete) charges $14.99/year for a household plan covering shared lists, recipes and meal planning.
- [Samsung Food+](https://samsungfood.com/food-plus/) charges $6.99/month or $59.99/year for planning, nutrition, personalization, pantry functions and a large recipe catalog.
- Meal kits remove choice by bundling the ingredients, delivery and instructions, which is a materially stronger fulfillment promise than software-only recommendation.
- DoorDash and Uber own transaction history, live restaurant availability, checkout, prices, delivery estimates and group-order mechanics.
- ChatGPT, Gemini and other general assistants can already give a solo user an opinionated answer from stated constraints.

The likely copycats are therefore not limited to dinner startups. A Tonight button is a small feature for a meal planner, delivery application, map, grocery application, or general assistant.

## Why the category looks like an app graveyard

### 1. Universal complaint, weak installation event

“What's for dinner?” is relatable, but people already resolve it somehow. Common defaults—repeat meals, cereal, frozen food, takeout, partner choice—are imperfect but immediate. A new application must beat a zero-install workaround while the user is already hungry.

### 2. Multi-user activation before value

Household voting produces its best demo only after a second person installs or opens a link, understands the mechanic, enters preferences, and responds. The person with the most pain must recruit the person who may care least.

### 3. The interaction recreates the problem

Showing five attractive cards, allowing multiple vetoes, or waiting for perfect agreement can consume more time than one person making a unilateral choice. Swiping is engagement, not necessarily relief.

### 4. State becomes stale immediately

Preferences persist, but dinner feasibility changes every evening:

- ingredients are consumed without being logged;
- leftovers expire;
- schedules move;
- a child changes their mind;
- restaurant hours, menus and delivery status change;
- the household's energy is not knowable until that day.

Full pantry tracking attempts to solve state accuracy by imposing constant bookkeeping. Receipt scanning reduces entry but does not reliably know quantities, consumption, spoilage or unrecorded purchases.

### 5. Recommendation quality is judged harshly

One wrong allergen implication, impossible recipe, unavailable restaurant, stale leftover, missing ingredient, or unrealistic preparation time damages trust. A user who rejects the first answer is now making the dinner decision again.

### 6. The paid value is bundled elsewhere

Consumers demonstrably pay for meal kits, recipe expertise, nutrition, grocery workflow and delivery membership. The market does not yet demonstrate that the decision protocol alone supports a durable household subscription.

### 7. Search and store differentiation are terrible

“What's for dinner,” “dinner decider,” “meal vote,” “restaurant roulette,” and “swipe to eat” are saturated with current apps, recipe sites and low-cost utilities. Apple also warns against applications that are limited or indistinguishable from already crowded categories. [App Review Guidelines 4.2 and 4.3](https://developer.apple.com/app-store/review/guidelines/)

### 8. The software has almost no technical moat

The core vote, timer, shortlist and result can be copied quickly. Household outcome history may improve recommendations, but that advantage takes weeks to develop and remains easy for a better-distributed incumbent to reproduce.

## What survived: the lazy-consensus commitment protocol

The surviving product should not ask:

> What does everyone want?

It should say:

> **This is the plan unless someone takes responsibility for changing it.**

### The proposed loop

1. **Earlier than hunger:** At a household-selected time—perhaps 4:15—the application proposes one plan.
2. **Executable default:** The plan is from the household's own small set of known meals, named leftovers, or saved restaurant orders. It includes time, estimated cost band and owner.
3. **Lazy acceptance:** Nobody must vote yes. Silence accepts the plan.
4. **Bounded veto:** A member can veto once, but must either select a feasible replacement or claim responsibility for dinner.
5. **Deadline:** At 4:30 or another set time, the result locks.
6. **Action handoff:** The owner sees “start rice at 5:40,” “reheat chili,” “collect the usual order,” or a Maps/provider handoff.
7. **Outcome:** The household confirms what happened, creates a leftover when relevant, and records who carried the work.

### Why this is materially different

- It needs no simultaneous swiping.
- A nonresponsive person cannot block dinner.
- The unhappy person bears the cost of changing the plan.
- The default appears before decision fatigue peaks.
- It closes with an owner and next action, not just a winning image.
- It learns from real household outcomes rather than from aspirational recipe likes.
- The application contains the household's **actual rotation**, not a generic recipe catalog.

### Why it may still fail

- Veto ownership can feel punitive or cause relationship conflict.
- The primary meal manager may still perform all setup and data maintenance.
- Silence is ambiguous; a household member may not have seen the notification.
- Saved pickup and delivery orders become stale.
- A default meal roster may be adequately handled by a paper list, calendar or recurring text.
- Some households value negotiation and spontaneous choice.
- The mechanism is copyable if it shows traction.

The wedge is therefore a behavioral hypothesis, not a moat.

## Best initial customer

The only segment with a plausible payer is:

> Dual-income couples or parents who make dinner at home three to five nights per week, use pickup or delivery one to three nights, and currently have one person carrying most of the planning burden.

Why this segment:

- the pain is frequent;
- the household has repeated meals and saved restaurants;
- coordination occurs between a stable small group;
- avoiding one panic order may create perceived savings;
- the person carrying the mental load has a reason to adopt and pay.

Do not begin with:

- solo users, because generic assistants and randomizers are enough;
- friend groups, because use is occasional and restaurant tools are saturated;
- medical diets, because the trust and liability bar is higher;
- large families, because children, schedules and permissions complicate the initial behavior test;
- food enthusiasts, because they may enjoy discovery and reject a forced default.

## Smallest truthful MVP

If the concierge test passes, the first application should contain:

1. Two-person household with one invite link.
2. A roster of 8–12 meals the household already eats.
3. Named leftovers entered manually with an expiry date.
4. Five saved restaurant/order descriptions with Maps or provider links.
5. A daily energy, time and budget state.
6. One proposed default, one replacement, one emergency fallback.
7. Silence-accepts deadline and one accountable veto.
8. Locked decision with an owner and next action.
9. “What actually happened?” confirmation.
10. Short household history used to avoid repetition and balance ownership.

The demo should show two phones:

```text
4:15 PM
Tonight: leftover chili at 6:15
Ian reheats; Alex handles dishes
No response needed

[Can't tonight]

Alex vetoes and chooses:
Pick up the usual Thai order
Alex owns pickup

4:30 PM
Locked: Thai pickup, Alex, 6:00 PM
```

### Explicitly omit

- AI-generated recipes;
- a public recipe feed;
- nutrition or calorie coaching;
- allergy-safety claims;
- full pantry inventory;
- grocery checkout;
- live delivery prices or estimates;
- exact restaurant menus;
- cross-provider cart creation;
- friend-group restaurant roulette;
- weekly calendar planning;
- chores, chat and family-organizer expansion.

## Technical feasibility

The narrow protocol is feasible in the existing Expo 57 project.

Suggested stack:

- Expo 57 native client;
- Supabase Auth, Postgres, row-level security and Realtime;
- SQLite for the local meal roster and cached decision state;
- Expo notifications for a nudge, never as the authoritative session state;
- RevenueCat Purchases and `household_pro` entitlement;
- RevenueCatUI Paywalls and Customer Center;
- optional Google Places lookup for saved restaurant identity, with a manual fallback.

The authoritative state can remain small:

```text
DRAFT → PROPOSED → VETO_WINDOW → LOCKED → ACTIONED → CONFIRMED
```

Critical technical truth:

- public restaurant APIs do not provide a universal consumer ordering catalog;
- exact menus, current prices, inventory, delivery fees and ETAs are not reliably available across providers;
- Uber Eats and DoorDash public developer programs primarily serve merchants, POS partners or approved integrations;
- Instacart production approval is not a week-one dependency;
- Google Places content has attribution, billing and storage restrictions.

The MVP must call saved restaurant/order descriptions **shortcuts**, not live executable carts. [Google Places policies](https://developers.google.com/maps/documentation/places/web-service/policies) [Uber Eats developer introduction](https://developer.uber.com/docs/eats/introduction) [Instacart developer overview](https://docs.instacart.com/developer_platform_api/get_started/overview)

RevenueCat fits naturally if the application earns a paid tier: the owner buys, the server caches the owner's entitlement, and household limits are enforced server-side. Client state alone must not authorize paid household features. [RevenueCat Expo guide](https://www.revenuecat.com/docs/getting-started/installation/expo)

## Monetization verdict

### Subscription

Do not price the decision layer as though it were a full food platform.

Current anchors:

- AnyList household: $14.99/year for a mature list, recipe and planning suite.
- HelloMealio: $19.99/year for the household workflow.
- SomeYum: $29.99/year, without public traction proof.
- Mealime: $2.99/month for a much broader planning/cooking product.
- PlatePoll: $79/year, but it is a waitlist price rather than demonstrated purchases.

Test:

- **Free:** one two-person household, a small rotation, limited weekly commitments and short history.
- **Household Pro:** $19.99/year or $2.99/month for automated daily defaults, unlimited commitments, more members, deeper history, household rules and saved shortcuts.

This is a hypothesis, not a recommended launch forecast.

### Affiliate revenue

Use **$0** in the base business model.

- Uber's public affiliate program focuses on a new user's first trip/order rather than recurring mature-household orders. [Uber affiliate program](https://www.uber.com/us/en/affiliate-program/)
- Instacart commissions require approval and private commercial terms. [Instacart conversions and payments](https://docs.instacart.com/developer_platform_api/guide/concepts/launch_activities/conversions_and_payments/)
- DoorDash does not publish a dependable general recurring consumer-order affiliate schedule.
- Deep-link clicks are not revenue until attribution, eligible repeat orders and actual payouts are verified.

Sponsored restaurant placement would also compromise the product's core promise that the default is selected for the household rather than for an advertiser.

## Shipaton fit

### Advantages

- Native notification timing is part of the behavior, not decoration.
- Two-phone state produces a clear live demo.
- RevenueCat household entitlement, paywall and Customer Center are natural.
- The daily loop could support OneSignal's retention category.
- The “silent acceptance / accountable veto / lock” interaction can be visually polished for the Design Award.
- The nutrition-and-healthy-eating influencer category explicitly values practical real-life meal help without calorie counting or restrictive plans.

### Disadvantages

- The app gallery will likely contain other dinner and meal-planning projects.
- A recipe generator, swipe deck or randomizer will look generic immediately.
- The Grand Prize emphasizes actual user traction and growth momentum, making a multi-user cold start dangerous.
- A bare decision utility may face App Store minimum-functionality or saturated-category scrutiny.
- The first public store release must occur during the August 1–September 30 window, and the submission requires a live store URL. [Shipaton requirements](https://revenuecat-shipaton-2026.devpost.com/)

This is a plausible **Design / OneSignal / nutrition-category prototype**, but not currently a credible Grand Prize growth bet.

## Falsification plan before code

### Test 1: 10–14 day concierge pilot

Recruit 20–30 target households. Do not ask if they like the idea. Operate the protocol through SMS or a lightweight web form at their chosen time.

Before day one, collect:

- 8–12 accepted household meals;
- five saved pickup/delivery defaults;
- normal dinner time;
- budget bands;
- who normally cooks or collects;
- dietary hard constraints;
- current leftovers each day.

Send one default and one explicit deadline. Silence accepts; a veto must nominate a replacement or claim ownership.

Pass thresholds:

- at least 70% of initiated sessions lock a decision within two minutes of household interaction;
- at least 50% of locked plans are confirmed as actually executed;
- median target household uses the protocol at least three times per week;
- at least 40% of households remain active in week two;
- fewer than 40% of proposals are rejected because the household state is wrong;
- fewer than 10% of action links or shortcuts fail.

Miss two thresholds: kill or redesign before code.

### Test 2: head-to-head

Give half the households SomeYum or another exact competitor for one week. Compare:

- time to commitment;
- confirmed follow-through;
- number of prompts/actions required;
- perceived mental load of the primary meal manager;
- repeat use;
- partner satisfaction.

If the lazy-consensus protocol does not materially outperform the existing product, there is no product reason to build it.

### Test 3: mechanism comparison

Randomize households across:

1. one default with silent acceptance;
2. three-card swipe;
3. explicit household vote;
4. rotating unilateral chooser.

The surviving mechanism must win on speed **and** primary-manager burden. Fast decisions that still leave one person doing every task do not pass.

### Test 4: real payment

After repeated use, offer the retained household a refundable $19.99 annual founder plan. Charge now.

Pass threshold:

- at least 20% of retained pilot households pay.

“Would probably pay,” paywall taps, and email signups do not count.

### Test 5: lane truth

Measure accepted outcome by lane:

- known home meal;
- leftovers;
- pickup;
- delivery/eat out.

If one lane exceeds 70% of outcomes, collapse the product to that job and reassess its direct competitors. The cross-mode story is unjustified if households do not actually use it.

### Test 6: acquisition

Run a small paid acquisition test after the product passes behavior and payment tests. On a $19.99 annual plan, first-year net revenue before support and infrastructure is approximately $17 after a typical store commission. Customer acquisition materially above that cannot be supported without higher retention, renewal or another proven revenue stream.

## Final decision

### Kill

- recipe discovery;
- Tinder for meals;
- household dinner voting;
- restaurant roulette;
- AI pantry dinner generation;
- “one answer” as the only differentiator;
- affiliate-funded forecasts.

### Preserve for validation

> **One household default, proposed before hunger, silently accepted, with a bounded accountable veto and a locked owner/action.**

### Recommendation

Do not begin the production app yet. Run the concierge pilot first.

If the protocol reaches the behavioral, retention and real-payment thresholds, build the seven-feature native vertical slice and compete on design, notification timing, household accountability and observed follow-through. If it does not, archive the idea with confidence: the pain was genuine, but the application was not the missing intervention.
