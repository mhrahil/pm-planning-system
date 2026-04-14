# Planning Review Skill

Review a PLANNING.md file and flag gaps before the PM shares it with the team. This is a quality gate for planning docs.

## When to Use

Run this skill:
- Before sharing any PLANNING.md for the first time.
- After significant edits to an existing planning doc.
- Before kicking off engineering work against a plan.
- Before expanding rollout to the next stage (e.g., 10% → 50%).

Invoke with: "Review my PLANNING.md using the planning review skill."

## Workflow

**Step 1: Read the full document.**

**Step 2: Check every required section exists and has substance.**

Required (all must be present and non-empty):
- Problem (with data, not opinion)
- Hypothesis (one testable sentence)
- Baseline (current-state numbers with N and window)
- Scope (specific deliverables)
- Non-Goals (≥ 1 explicit exclusion)
- Success Metrics (specific thresholds)
- Statistical Plan (MDE, power, sample size — required if the change is testable)
- Rollout Plan (exposure %, duration, ramp gates, kill criteria)
- Observability (dashboards + alerts, required for testable)
- Owner (named person)
- Reviewers (list of sign-offs required)

Required for AI features:
- Behavior Examples: Good / Bad / Reject, ≥ 5 each
- Reject covers: PII, jailbreak, policy violation, competitor mention, locale mismatch (at minimum)
- Cost section (per-request, monthly, budget ceiling)
- Privacy section (PII handling, DPA, retention, deletion pipeline)
- Eval plan

**Step 3: Check for common planning-doc failures.**

Flag each of these if found:

| Failure | What it looks like | Fix |
|---|---|---|
| Vibes-based metrics | "Improve engagement" / "Reduce churn" | Add a specific number: "≥ 15% reduction" with baseline. |
| Missing baseline | Threshold exists but no current baseline with N | Add: "Current mute rate 8% (N = 186k, 30-day window). Target: ≤ 6.8%." |
| Fantasy rollout | "Start small then ramp" with no specifics | Add %, duration, ramp gates, kill criteria. |
| Missing kill criteria | Rollout exists, no rollback triggers | Add: "Roll back if [metric] doesn't improve ≥ [threshold] after [duration]." |
| Scope creep signals | Scope has 8+ items or phrases like "and more" / "etc" | Trim to 3–6; move the rest to a follow-up. |
| No non-goals | Non-goals empty or missing | Add ≥ 1 explicit exclusion. Prevents scope creep during build. |
| Solution before problem | Jumps to "what we're building" without the why | Rewrite Problem with data. Problem should be painful enough that the reader already wants a solution. |
| Unspecified AI behavior | AI feature with no behavior contract | Add Good / Bad / Reject. Without these, engineering doesn't know what "good" looks like. |
| Missing dependencies | Feature requires external things (data, API, legal) but Dependencies is empty | List what must be true before shipping. Include ticket numbers. |
| Stale planning doc | Not updated in 30+ days and rollout indicates active experiment | Flag: update with results or archive. |
| Missing design alignment | Includes visual/copy changes, no design review mention | Flag: "Has the designer reviewed this approach?" |
| No observability | Testable change with no dashboard or alerts | Add dashboard link and alert thresholds. |
| No cost plan | AI / third-party service with no cost estimate | Add per-request cost, monthly cost at full rollout, budget ceiling. |
| No privacy plan | Touches PII / user data / LLM with no privacy section | Add redaction approach, retention, deletion-pipeline coverage. |
| No reject coverage | AI feature with < 5 Reject examples or missing categories | Expand to cover PII, jailbreak, policy, competitor, locale, outage-blame. |
| Underpowered test | Testable change with no MDE, power, or sample size | Add statistical plan. Link to power-analysis notebook. |
| Missing ramp gates | Rollout has stages but no numeric gate to advance | Add: "Expand from 10% to 50% when [metric] ≥ [threshold] AND guardrails hold." |
| No reviewer list | No named sign-offs | Add PM / eng / design / AI-safety / legal / data / GA sign-off. |

**Step 4: Output a structured review.**

```
Planning Doc Review: [Feature Name]

Completeness: [X/11 required sections present]
  (+ [Y/4 AI-only sections] if applicable)

Issues Found:
⚠️ [Issue 1]: [Description]. Fix: [specific suggestion].
⚠️ [Issue 2]: [Description]. Fix: [specific suggestion].

Strengths:
✅ [Something the doc does well — always include at least one.]

Readiness: [Ready for review / Needs revisions / Major gaps]

Second-opinion trigger: [Yes, if ≥ 5 issues or AI feature with no behavior contract]
```

**Step 5: If the PM asks you to fix the issues**, make edits directly. Show the diff. Don't rewrite the entire doc — patch the specific gaps.

## Calibration Examples

### A+ planning doc (ready for review)

- Problem with baseline numbers (N + window).
- Hypothesis testable in one sentence.
- Scope 3–6 items, Non-Goals ≥ 3.
- Metrics with baselines and thresholds.
- Statistical plan with MDE and sample size.
- Rollout with ramp gates and kill criteria.
- Observability dashboard linked.
- AI features: ≥ 5/5/5 behavior examples, Reject covering 6 categories, cost + privacy sections.
- Reviewers named across eng / design / safety / legal / data.

### Borderline planning doc (needs revisions)

- Problem with data but no N.
- Metrics have thresholds but no baselines.
- Rollout has %s but no ramp gates.
- AI behavior contract has 3 each (spec says 5).
- No cost section.
- Reviewers listed but AI-safety reviewer missing for AI feature.

Action: patch the 5 gaps, re-review.

### Major-gaps planning doc (do not share yet)

- Problem is aspirational, no data.
- Hypothesis missing.
- Metrics are vibes ("improve engagement").
- No rollout plan.
- AI feature with no behavior examples.
- No owner, no reviewers.

Action: rewrite from the template. Don't share until at least 8 of 11 required sections are populated with substance.

## Escalation

If the planning doc describes a high-stakes change (AI feature, regulated domain, cost > $10k/month, >10k users exposed), the review output automatically adds: "High-stakes: recommend a 2nd reviewer from [AI safety / legal / eng director / data] before kickoff."
