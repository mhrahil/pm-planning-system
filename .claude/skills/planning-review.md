# Planning Review Skill

Review a PLANNING.md file and flag gaps before the PM shares it with the team. This is a quality gate for planning docs.

## Workflow

When a PM asks you to review their planning doc:

**Step 1: Read the full document.**

**Step 2: Check every required section exists and has substance.**

Required sections (all must be present and non-empty):
- Problem (must include data, not just opinion)
- Hypothesis (must be one testable sentence)
- Scope (must list specific deliverables)
- Non-Goals (must list at least 1 explicit exclusion)
- Success Metrics (must include specific thresholds, not "improve X")
- Rollout Plan (must include exposure %, duration, and kill criteria)
- Owner (must name a specific person)

For AI features, also required:
- Behavior Examples with Good, Bad, and Reject categories
- At least 5 examples per category

**Step 3: Check for common planning doc failures.**

Flag each of these if found:

| Failure | What it looks like | Fix |
|---------|-------------------|-----|
| Vibes-based metrics | "Improve engagement" / "Reduce churn" / "Increase satisfaction" | Add a specific number: "≥15% reduction" or "doesn't drop by >2%" |
| Missing baseline | Metric threshold exists but no current baseline stated | Add: "Current mute rate is 8%. Target: ≤6.8% (15% reduction)" |
| Fantasy rollout | "Start small then ramp" with no specifics | Add: % exposure, duration, ramp gates, kill criteria |
| Missing kill criteria | Rollout plan exists but no conditions for rolling back | Add: "Roll back if [metric] doesn't improve by ≥[threshold] after [duration]" |
| Scope creep signals | Scope section has 8+ items or includes phrases like "and more" / "etc" | Trim to 3-5 items. Move the rest to a follow-up planning doc. |
| No non-goals | Non-goals section is empty or missing | Add at least 1 thing explicitly excluded. Prevents scope creep during build. |
| Solution before problem | The doc jumps to "what we're building" without establishing why | Rewrite Problem section with data. The problem should be painful enough that the reader already wants a solution before reaching Hypothesis. |
| Unspecified AI behavior | AI feature with no behavior examples | Add Good/Bad/Reject examples. Without these, engineering doesn't know what "good" looks like. |
| Missing dependencies | The feature requires something external (data quality, API access, legal review) but Dependencies section is empty | List what must be true before shipping. Include ticket numbers where possible. |
| Stale planning doc | The PLANNING.md hasn't been updated in 30+ days and the Rollout section indicates an active experiment or in-progress work | Flag: "This planning doc may be stale. Has the experiment concluded? Update with results or archive." |
| Missing design alignment | Scope includes visual or copy changes but doesn't mention design review or alignment with the design system | Flag: "This plan includes visual changes. Has the designer reviewed the approach?" |

**Step 4: Output a structured review.**

Format:

```
Planning Doc Review: [Feature Name]

Completeness: [X/9 required sections present] (or X/10 for AI features)

Issues Found:
⚠️ [Issue 1]: [Description]. Fix: [Specific suggestion]
⚠️ [Issue 2]: [Description]. Fix: [Specific suggestion]

Strengths:
✅ [What the doc does well — always include at least one]

Readiness: [Ready for review / Needs revisions / Major gaps]
```

**Step 5: If the PM asks you to fix the issues**, make the edits directly in the file. Show the diff. Don't rewrite the entire doc — patch the specific gaps.
