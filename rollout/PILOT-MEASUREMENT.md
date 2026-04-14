# Pilot Measurement Template

Use this to track the first sprint of PM shipping. Fill in before and after data. Share with your eng director at the end-of-sprint review.

## Pilot Details

- **PM:** [name]
- **Engineer reviewer:** [name]
- **Repo:** [repo name]
- **Sprint dates:** [start] to [end]
- **Number of PM PRs:** [count]

## Cycle Time Comparison

For each change the PM shipped, compare old process vs new.

**How to estimate old process time:** Ask your PM: "When was the last time you needed a copy fix or config change? When was the ticket created? When did it actually ship?" The gap is your baseline. If you don't have historical data, ask 2-3 engineers to estimate how long a typical "PM files a copy change ticket" takes from filing to production. Most teams are shocked at the real number.

| Change | Old Process Time | New Process Time | Delta |
|--------|-----------------|------------------|-------|
| [e.g. "Update error message on checkout"] | [e.g. "~8 days (ticket → sprint → build → review → deploy)"] | [e.g. "~3 hours (write → PR → review → merge)"] | [e.g. "-7.6 days"] |
| | | | |
| | | | |
| | | | |

**Average cycle time reduction:** ___

## Quality Metrics

| Metric | Result |
|--------|--------|
| Production incidents caused by PM PRs | [should be 0] |
| PM PRs rejected on first review | [count] |
| Average review rounds per PR | [count] |
| PM PR skill file flags caught before eng review | [count] |
| Out-of-zone changes attempted | [count] |

## Qualitative Feedback

### From the PM (fill in after pilot)
- Confidence level before pilot (1-5): ___
- Confidence level after pilot (1-5): ___
- Biggest friction point: ___
- What worked well: ___
- Would you do this again? ___

### From the engineer reviewer (fill in after pilot)
- PR quality score (1-5): ___
- Did PM PRs create extra review burden? (yes/no): ___
- Did the skill file catch issues before you saw them? (yes/no): ___
- Would you want more PMs doing this? (yes/no/conditional): ___
- What would make PM PRs better? ___

## Decision

Based on the data above:

- [ ] **Expand:** Add more PMs to the pilot. Cycle time improved, no incidents, eng satisfied.
- [ ] **Iterate:** Run another sprint with the same PM. Quality needs improvement.
- [ ] **Pause:** Incident occurred or eng burden increased. Revisit boundaries.

**Notes for the eng director review:**

___
