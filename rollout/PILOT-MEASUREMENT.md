# Pilot Measurement Template

Use this to track the first sprint of PM shipping. Fill in before and after data. Share with your eng director at the end-of-sprint review.

## Pilot Details

- **PM:** [name]
- **Engineer reviewer:** [name]
- **Repo:** [repo name]
- **Sprint dates:** [start] to [end]
- **Number of PM PRs:** [count]
- **Scope of PRs:** [copy only / copy + config / copy + prompts / etc.]

## Targets (agreed upfront)

| Metric | Target | Result | Hit? |
|---|---|---|---|
| Cycle time reduction for pilot-scope changes | ≥ 50% vs. baseline | | ☐ |
| Production incidents caused by PM PRs | 0 | | ☐ |
| Engineer NPS on PM PRs | ≥ 7/10 | | ☐ |
| Average review rounds per PR | ≤ 1.5 | | ☐ |
| Engineer review time per PM PR | ≤ 10 min avg | | ☐ |
| Out-of-zone changes attempted | 0 (warns OK if skill caught them) | | ☐ |
| PM PR skill file false-positive rate | ≤ 15% | | ☐ |

All seven targets must hit for "Expand" decision.

## Cycle Time Comparison

For each change the PM shipped, compare old process vs. new.

**How to estimate old-process time:** ask your PM: "When was the last time you needed a copy fix or config change? When was the ticket created? When did it actually ship?" The gap is your baseline. If you don't have historical data, ask 2–3 engineers to estimate. Most teams are shocked at the real number.

| Change | Old Process Time | New Process Time | Delta |
|---|---|---|---|
| [e.g., "Update error message on checkout"] | [e.g., "~8 days"] | [e.g., "~3 hours"] | [e.g., "−7.6 days"] |
| | | | |
| | | | |
| | | | |

**Average cycle time reduction:** ___

## Quality Metrics

| Metric | Result |
|---|---|
| Production incidents caused by PM PRs | [should be 0] |
| PM PRs rejected on first review | [count] |
| Average review rounds per PR | [count] |
| PM PR skill flags caught before eng review | [count] |
| Skill-file false positives (flags eng disagreed with) | [count] |
| Out-of-zone changes attempted | [count] |

## Qualitative Feedback

### PM (fill in after pilot)

- Confidence level before pilot (1–5): ___
- Confidence level after pilot (1–5): ___
- Biggest friction point: ___
- What worked well: ___
- Would you do this again? ___

### Engineer NPS Survey (fill in after pilot)

Three questions per reviewing engineer:

1. On a scale of 1–10, how satisfied are you with the PM PR process this sprint? ___
2. Did PM PRs save you time, cost you time, or neither? ___
3. Anything we should change? ___

Aggregate NPS (mean of question 1 across all reviewers): ___

### Engineer Reviewer Long-form

- PR quality score (1–5): ___
- Did PM PRs create extra review burden? (yes/no): ___
- Did the skill file catch issues before you saw them? (yes/no): ___
- Would you want more PMs doing this? (yes/no/conditional): ___
- What would make PM PRs better? ___

## Decision

Based on data above:

- [ ] **Expand:** all 7 targets hit. Add more PMs.
- [ ] **Iterate:** cycle time improved but one or more targets missed. Run another sprint.
- [ ] **Pause:** production incident OR engineer NPS < 6. Revisit boundaries.

**Notes for the eng-director review:**

___
