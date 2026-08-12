import json
import sys

path = r'D:\projects\revenuecat\research\synth-tick-22-civic-government-2026-08-12.json'
with open(path, 'r', encoding='utf-8') as f:
    data = json.load(f)

# Add wishlist to persona 2 (Dee Washington)
persona2_wishlist = (
    "A single app that (1) accepts a phone photo of the VA Form 21-0958 decision letter + the C&P examiner's report + his VA treatment records from myHealtheVet, "
    "(2) scores his record for completeness on a 0-100 scale per lane (Supplemental Claim 92/100 because he has new evidence, Higher-Level Review 64/100 because he has new evidence that HLR cannot accept, Board Appeal Direct docket 18/100 because the BVA cannot consider his new evidence, Board Appeal Evidence Submission 71/100, Board Appeal Hearing 53/100 because the wait is 870 days), "
    "(3) surfaces the 1-year effective-date cliff under 38 CFR 3.2500 (183 days remaining as of Aug 12 2026, with a 90-day + 60-day + 30-day + 14-day + 7-day + 1-day + same-day reminder), "
    "(4) generates a printable VA Form 20-0995 (Supplemental Claim) packet with a 3-page 'reasons for new evidence' letter + a private DBQ request template + a buddy statement template + a lay statement template, "
    "(5) gives him a 'submitted + acknowledged' timestamp when the VA.gov Decision Reviews portal confirms receipt, "
    "(6) shares a 'my VA decision review' link with Sasha (the spouse + caregiver) so she can see the same countdown and the same packet, "
    "and (7) tells him the next-round deadlines — the 60-day CAVC window after the BVA decision, the 60-day docket-switch window from BVA receipt, and the 90-day evidence-submission window after NOD. "
    "The current workaround is 11 hours of weekend googling + a free VSO who is hard to reach + a 6-week attorney intake + a 20% retroactive-benefits fee + a 1-year effective-date cliff, with no shareable family view and no deadline-clock on the 183-day window."
)
data['personas'][1]['wishlist'] = persona2_wishlist

# Verify one_liners are <= 140 chars
for i, idea in enumerate(data['idea_hypotheses']):
    ol = idea['one_liner']
    print(f"idea {i+1} one_liner ({len(ol)} chars): {ol}")
    if len(ol) > 140:
        print(f"  WARNING: exceeds 140 chars")
    else:
        print(f"  OK")

# Write back
with open(path, 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

print("Done. Persona 2 keys now:", list(data['personas'][1].keys()))
print("Idea 1 one_liner length:", len(data['idea_hypotheses'][0]['one_liner']))
print("Idea 2 one_liner length:", len(data['idea_hypotheses'][1]['one_liner']))
print("File size:", len(json.dumps(data, ensure_ascii=False)), "bytes (compact)")
