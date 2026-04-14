# PLANNING: [Feature Name]

## Problem <!-- REQUIRED -->
<!-- 2 sentences max. Include data. What's broken and how bad is it? -->


## Hypothesis <!-- REQUIRED -->
<!-- 1 sentence. What do you believe will fix it? -->


## Scope <!-- REQUIRED -->
<!-- What's included in this change. Be specific. -->
-
-
-

## Non-Goals <!-- REQUIRED -->
<!-- What you're explicitly NOT doing. Prevents scope creep. Max 3. -->
-
-
-

## Success Metrics <!-- REQUIRED -->
<!-- Every metric needs a specific threshold. "Improve engagement" is not a metric. -->
- **Primary:** [metric] [direction] [threshold] vs [baseline]
- **Guardrail:** [metric that must NOT get worse] doesn't [direction] by more than [threshold]
- **Guardrail:** [second safety metric if needed]

## Behavior Examples <!-- REQUIRED for AI features only — skip for non-AI features -->

### Good
<!-- What the AI should produce -->
-
-
-

### Bad
<!-- What the AI might produce that's wrong but not dangerous -->
-
-
-

### Reject
<!-- What the AI must never produce -->
-
-
-

## Rollout Plan <!-- REQUIRED -->
- **Exposure:** [% of users/traffic]
- **Duration:** [how long before evaluating]
- **Randomization:** [user-level / session-level / other]
- **Ramp gates:** [what must be true to expand]
- **Kill criteria:** [when to roll back — be specific]

## Dependencies
<!-- What must be true before you ship? Data quality? Eng support? Legal review? -->
-

## Owner <!-- REQUIRED -->
<!-- Who is accountable -->
@[name] — [role]
