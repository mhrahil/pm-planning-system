# CLAUDE.md — PM Planning System

You are working in a product repository where PMs contribute directly to the codebase. Read this file at the start of every session.

## Product Context

Product: [Your product name]
Stage: [Seed / Series A / Series B / Growth / Enterprise]
Users: [Who uses this product and roughly how many]
Stack: [Frontend framework + version, backend + version, ORM, database. Ask your engineer if unsure. "React, Node, Postgres" is enough to start — Claude Code will figure out the rest from the codebase.]
Feature flags: [LaunchDarkly / Unleash / Statsig / internal]
Error tracking: [Sentry / Rollbar / internal]
Session replay: [LogRocket / FullStory / PostHog / N/A]
Design system: [Name or link. State the accessibility bar — e.g., WCAG 2.1 AA.]
Localization: [Locales supported. If English-only, say so.]
LLM provider (if AI product): [Anthropic Claude / OpenAI / other. Contract + DPA in place?]

## PM Shipping Zone

PMs on this team are authorized to make changes in these areas:

**In scope for PM PRs:**
- Copy and microcopy (error messages, CTAs, tooltips, onboarding text, empty states)
- Locale files (add/edit strings across all supported locales)
- Config values and feature-flag defaults
- AI prompts, system prompts, and behavior examples
- Planning docs (`/planning`)
- Small front-end changes (spacing, visibility, ordering, default values) on approved design-system components
- Documentation and README updates
- Test cases for PM-scoped changes

**Out of scope for PM PRs (escalate to engineering):**
- Database schemas and migrations
- API routes, controllers, and middleware
- Authentication, authorization, session handling, security headers
- Infrastructure (Docker, CI/CD, Terraform, deployment config)
- Environment variables that hold secrets, keys, or connection strings
- Package.json dependency changes
- Performance-critical code paths
- Anything touching more than 3 files outside `/planning`

If a PM asks you to make a change outside the PM shipping zone, warn them and suggest creating a ticket instead.

## Coding Standards for PM Changes

- Keep changes small and focused. One PR = one change.
- Never bundle unrelated changes.
- Always run existing tests before committing. If tests fail, stop and investigate. Never weaken a test to make it pass.
- For copy changes: check that the new copy is consistent with other instances of similar text in the codebase. Search for related strings. Match the product's canonical terms.
- For config changes: verify the value is within expected ranges. Add a comment explaining what the value does and why it was changed.
- For color changes: use design-system tokens rather than raw hex. Verify WCAG contrast (minimum 4.5:1 for normal text).
- For AI prompt changes: PLANNING.md must include at least 5 Good, 5 Bad, and 5 Reject examples. Run the eval harness. Report cost and latency delta vs. the previous prompt. Never embed raw customer data in a prompt — use the redaction helper.
- For localized products: if you add or edit an English string, add the equivalent string to every supported locale, or file a follow-up translation ticket in the same PR description.

## AI Prompt Changes

AI prompt changes are not like copy changes. A prompt is code — it dictates model behavior. Additional requirements:

- **Behavior contract:** PLANNING.md includes ≥ 5 Good, ≥ 5 Bad, ≥ 5 Reject examples, covering at minimum: PII echo, jailbreak ("ignore previous instructions"), policy violation, competitor mention, outage-blame attribution, locale mismatch.
- **Eval evidence:** include a link to or paste of the eval harness run against the updated behavior examples.
- **Cost delta:** estimate tokens in / tokens out before and after. Flag if per-request cost increases more than 10%.
- **Latency delta:** measure p50 and p95 latency with the new prompt against a representative sample.
- **PII handling:** the prompt must never echo PII. The behavior contract must have at least one Reject example for PII echo.
- **Fallback:** if the model fails or the safety filter triggers, what does the user see? Document this.

## PR Standards

Before opening a PR:
1. Verify the change aligns with a PLANNING.md in `/planning`.
2. Write a description that explains WHY, not just what.
3. Include before/after screenshots for any visual change.
4. Link to the relevant PLANNING.md.
5. Request review from a CODEOWNERS engineer. If the primary reviewer is OOO, reassign to the backup listed in `CODEOWNERS`. If the PR sits > 24 hours, auto-escalate to the engineering manager, then the engineering director.
6. Tag the design owner for any visual change.
7. For AI prompt changes, also tag the AI safety / policy reviewer.

PR title format: `type: brief description`
- `fix:` bug fixes and copy corrections
- `feat:` new copy, new config, new prompts
- `docs:` planning docs and documentation
- `test:` new test cases
- `chore:` repo hygiene

All PM PRs receive the `pm-change` label. If your org uses a compliance tool (Vanta, Drata, ServiceNow), configure CI to forward tagged PRs automatically.

## Planning Docs

All planning docs live in `/planning` and follow `PLANNING-TEMPLATE.md`.

Required sections: Problem (with baseline numbers), Hypothesis, Scope, Non-Goals, Success Metrics (with thresholds and baselines), Rollout Plan (with ramp gates and kill criteria), Owner.

Required for AI features: Behavior Examples (Good / Bad / Reject, ≥ 5 each), Eval Plan, Cost, Privacy.

Required for anything testable: Statistical Plan (MDE, power, sample size), Observability (dashboards + alerts).

## Privacy, Security, and Compliance

- Any change affecting user-visible copy that references user data (e.g., "Hi {first_name}") requires a quick privacy review comment.
- AI prompts never contain raw customer data. Use the redaction helper (document its path in the References section).
- Session replay configurations require PII masking. Session replay + prompt logs have documented retention windows in your privacy policy.
- Changes that touch regulated domains (health, payment, PII) route to legal before merge.
- Any change that would log, display, or transmit new user-identifying fields must route to legal.

## Observability

For any testable change, the PM ensures:
- A dashboard exists (or is created) in the observability tool showing primary and guardrail metrics.
- Alert thresholds are defined for the guardrails.
- AI changes have cost and latency alerts.
- Post-launch, the PM monitors the dashboard daily for the first week.

## Program Guardrails

These are safety rails on the PM-ships-code program itself, not on any single PR.

- Engineer NPS on PM PRs measured quarterly. Target ≥ 7/10. Drops below 6/10 for two consecutive months → pause and retro.
- Two PM-PR-caused Sev-2 incidents in a rolling 90-day window terminates the program.
- Weekly PM PR cap per PM: [5] during pilot; adjust upward as the program matures.
- AI prompt changes that raise per-request cost > 10% require engineering director sign-off; > 25% requires CPO sign-off.
- Monthly LLM budget ceiling: [specify dollar amount]; exceeding requires CPO approval.

## Escalation Chain

When you can't move forward with a review:
1. Primary reviewer (CODEOWNERS for touched paths).
2. Backup reviewer (CODEOWNERS).
3. Engineering manager of the touched area.
4. Engineering director.
5. CPO (for AI, cost, or Sev-2 matters).

Tag the next person after 24 hours of silence.

## Team Norms

- Every PM PR requires CODEOWNERS engineer approval before merge.
- Planning docs reviewed async in PR comments. Weekly planning sync is optional; see `rollout/WEEKLY-REVIEW-CADENCE.md`.
- Feature flags required for any testable change.
- PM owns the PLANNING.md; engineering owns the implementation.
- Ask in [#product-eng Slack channel]. Review queue visible in [#pm-prs]. Breakage → [#incidents-sev2].

## References

Fill these in for your team so Claude Code can find the right helpers:

- Design system: `[path or URL]`
- Redaction helper (required for AI): `[path]`
- Eval harness (required for AI): `[path]`
- Power-analysis primer: `[path or URL]`
- Change-management / compliance policy: `[path or URL]`
- CODEOWNERS: `[path]`
