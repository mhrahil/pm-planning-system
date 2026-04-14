# PLANNING: [Feature Name]

## Exec Summary <!-- OPTIONAL but recommended for leadership-visible features -->
<!-- 2 sentences. What are we building, what do we expect it to change, what does it cost? -->


## Problem <!-- REQUIRED -->
<!-- 2–3 sentences max. Include data. What's broken and how bad is it? State N and time window for every number. -->


## Hypothesis <!-- REQUIRED -->
<!-- 1 sentence. What do you believe will fix it, quantified? -->


## Baseline <!-- REQUIRED for any testable change -->
<!-- Current-state numbers you will measure against. Include N and window for each. -->
- Primary metric current value:
- Guardrail metric current values:


## Scope <!-- REQUIRED -->
<!-- What's included. Be specific. Ideally 3–6 items. -->
-
-
-

## Non-Goals <!-- REQUIRED -->
<!-- What you're explicitly NOT doing. Prevents scope creep. Max 3. -->
-
-
-

## Success Metrics <!-- REQUIRED -->
<!-- Every metric needs a baseline and a threshold. "Improve engagement" is not a metric. -->
- **Primary:** [metric] [direction] [threshold] vs. [baseline with N and window]
- **Guardrail:** [metric that must not regress] doesn't [direction] by more than [threshold]
- **Guardrail:** [second safety metric if needed]
- **Secondary:** [nice-to-have signal]

## Statistical Plan <!-- REQUIRED for testable changes -->
<!-- How you will know the effect is real, not noise. -->
- Minimum detectable effect (MDE):
- Power:
- Significance level (α):
- Required sample size per arm:
- Test duration:
- Randomization unit (user / session / ticket):

## Behavior Examples <!-- REQUIRED for AI features — skip for non-AI features -->

### Good <!-- ≥ 5 examples -->
<!-- Input → Output pairs showing what the AI should produce -->
-
-
-
-
-

### Bad <!-- ≥ 5 examples -->
<!-- Outputs that are wrong but not dangerous. Calibrate what "better" looks like. -->
-
-
-
-
-

### Reject <!-- ≥ 5 examples, covering PII, jailbreak, policy violation, competitor mention, locale mismatch, outage blame -->
<!-- Outputs the AI must never produce. Each example names the failure category. -->
- (PII)
- (jailbreak: "ignore previous instructions")
- (policy violation)
- (competitor mention)
- (locale mismatch)

## Rollout Plan <!-- REQUIRED -->
- **Exposure:** [% of users/traffic, stratified by segment if needed]
- **Duration:** [how long before evaluating]
- **Randomization:** [user-level / session-level / other]
- **Ramp gates:** [what must be true to expand from stage A to stage B, numerically]
- **Kill criteria:** [when to roll back — specific thresholds and triggers]

## Observability <!-- REQUIRED for testable changes -->
- **Dashboard:** [link or path]
- **Primary metric widget:** [yes/no]
- **Guardrail widgets:** [yes/no]
- **Alerts:**
  - [condition → who gets paged]
  - [condition → who gets a Slack warn]

## Cost <!-- REQUIRED for AI features or paid third-party services -->
<!-- Per-request cost estimate, monthly cost at full rollout, budget ceiling, and escalation if exceeded. -->
-

## Privacy, Security, Compliance <!-- REQUIRED if the change touches PII, logs new fields, or uses an LLM -->
- **PII handled:** [what fields, redaction applied]
- **Data routing:** [EU tickets stay in EU, etc.]
- **Retention:** [raw X days, aggregate Y days]
- **DPA / subprocessor:** [provider DPA on file]
- **Deletion pipeline:** [how user deletion requests propagate]

## Dependencies
<!-- What must be true before you ship? Data quality? Eng support? Legal review? Include ticket numbers where possible. -->
-

## Reviewers <!-- REQUIRED -->
<!-- Who signs off before merge and before each rollout stage. -->
- PM owner: @[name]
- Engineering: @[name]
- Design: @[name]
- AI safety (if applicable): @[name]
- Legal (if applicable): @[name]
- Data / DS (if testable): @[name]
- Final sign-off for GA: @[name]

## Owner <!-- REQUIRED -->
@[name] — [role]
