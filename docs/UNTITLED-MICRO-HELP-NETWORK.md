# Untitled micro-help network

**Status:** Parked for later exploration  
**Naming:** Intentionally unresolved. Do not reuse the rejected working names without revisiting the brand direction.

## One-line concept

A mobile social feed where every post is a tiny real-world problem and every interaction gives another person a useful piece of human judgment.

> TikTok made everyone a broadcaster. This would make everyone a sensor, critic, or five-second consultant.

## Product thesis

Most social feeds turn attention into passive engagement. This product turns the same low-effort scrolling behavior into answers for other people.

Every post is a structured **micro-ask** that should take roughly five seconds to answer. It is broader than a polling app: the response mechanic changes to fit the question.

Example asks:

- Pick the stronger of two photographs.
- Circle the distracting element in an image.
- Rank three logo directions.
- Identify an object or location.
- Flag which sentence does not support a headline.
- Explain a confusing clause in one sentence.
- Select the clothing size that fit in another brand.
- Record a ten-second reaction.

## Core experience

1. A person posts a small problem using a photo, screenshot, short recording, link, or text.
2. They choose a response tool: pick, rank, highlight, circle, identify, verify, or explain.
3. The system routes it to people likely to answer well.
4. Respondents contribute without opening a comment thread or composing a public post.
5. The asker receives a useful result: consensus, clusters, highlighted regions, the strongest explanation, and meaningful disagreement.

The output should not merely say "68% chose A." It should help the asker understand **why**, whether the crowd was qualified, and where opinions split.

## Reciprocity and business model

The free loop is reciprocal:

> Help people to earn asks. Spend asks when you need the crowd.

Potential RevenueCat entitlements:

- Ask without earning credits first.
- Route asks to relevant interests, professions, locations, or experience levels.
- Keep an ask private or invite a trusted panel.
- Receive faster responses.
- Compare audience segments.
- Save a searchable decision history.

The subscription cannot sell "unlimited polls." It must sell faster, better-targeted human input.

## Why it is not just another poll app

The basic crowd-opinion concept is proven but not new:

- [Thumb](https://www.engadget.com/2012-06-07-thumb-draws-opinions-from-the-cloud-enhances-iphone-app.html) offered photo questions and rapid crowd votes more than a decade ago.
- [Second Opinion](https://apps.apple.com/us/app/second-opinion-instant-polls/id6748265537) currently offers photo polls, anonymous voting, private groups, and a scrolling dilemma feed.
- [Pollaroo](https://pollarooapp.com/) and [Thumbly](https://thumbly.me/) occupy similar instant-opinion territory.

The defensible version therefore needs all four of these:

1. Multiple structured response tools beyond A/B voting.
2. Matching based on demonstrated usefulness, not merely demographics or follower count.
3. Synthesis that turns raw responses into an actionable result.
4. Reciprocity that makes helping entertaining enough to supply the network.

## MVP worth building

A convincing prototype needs only five pieces:

1. A vertical feed containing three different response mechanics.
2. Immediate tactile feedback and a visible contribution counter.
3. A create flow that demonstrates how an ask selects its response tool.
4. A results screen with consensus, disagreement, and respondent context.
5. A lightweight credit meter plus a RevenueCat upgrade moment.

Use mocked network activity initially. Do not build messaging, public profiles, follower graphs, or an open comment system for the first demonstration.

## Primary risks

- **Cold start:** an unanswered ask destroys the promise immediately.
- **Quality:** a large unqualified crowd can produce confident nonsense.
- **Moderation:** anonymous judgment can become harassment, especially around appearance and relationships.
- **Privacy:** screenshots, faces, contracts, and personal situations may contain sensitive information.
- **Commodity pressure:** polls and generic AI summaries are easy to reproduce.
- **Retention:** answering must be enjoyable even when the user does not currently need help.

Public scoring of identifiable people should be prohibited. Sensitive decisions involving health, law, personal safety, or finance require strong boundaries and escalation rather than a crowd verdict.

## Fast validation test

Before committing to the full network, give 10 people a prototype and ask each to submit one real question they would normally send to a group chat. Then recruit a separate group to answer the feed.

Continue only if:

- People submit real problems rather than novelty polls.
- The median response takes under ten seconds.
- Askers say the aggregate result changed or clarified their decision.
- Respondents voluntarily answer more than the minimum required for credits.

The key metric is not votes or time spent. It is **asks that produced a useful decision**.
