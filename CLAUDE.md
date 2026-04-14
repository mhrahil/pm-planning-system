# CLAUDE.md — PM Planning System

You are working in a product repository where PMs contribute directly to the codebase. Read this file at the start of every session.

## Product Context

<!-- EDIT THIS SECTION for your product -->

Product: [Your product name]
Stage: [Seed / Series A / Series B / Growth / Enterprise]
Users: [Who uses this product and roughly how many]
Stack: [Frontend framework, backend, database — high level. Ask your engineer if unsure. Something like "React, Node, PostgreSQL" is enough. If you don't know, leave blank and Claude Code will figure it out from the codebase.]
Design system: [Name or link if you have one]

## PM Shipping Zone

PMs on this team are authorized to make changes in these areas:

**In scope for PM PRs:**
- Copy and microcopy (error messages, CTAs, tooltips, onboarding text, empty states)
- Config values and feature flags
- AI prompts, system prompts, and behavior examples
- Planning docs (PLANNING.md files in /planning)
- Small front-end changes (spacing, visibility, element ordering, default values)
- Documentation and README updates
- Test cases for PM-scoped changes

**Out of scope for PM PRs (escalate to engineering):**
- Database schemas and migrations
- API routes and backend logic
- Authentication, authorization, and security
- Infrastructure, CI/CD, and deployment config
- Performance optimization
- Any change touching more than 3 files outside /planning

If a PM asks you to make a change outside the PM shipping zone, warn them and suggest creating a ticket instead.

## Coding Standards for PM Changes

- Keep changes small and focused. One PR = one change.
- Never bundle unrelated changes.
- Always run existing tests before committing. If tests fail, stop and investigate.
- For copy changes: check that the new copy is consistent with other instances of similar text in the codebase. Search for related strings.
- For config changes: verify the value is within expected ranges. Check for comments explaining the current value.
- For color changes: verify WCAG contrast ratio compliance (minimum 4.5:1 for normal text). Claude Code can check this automatically.
- For AI prompt changes: include at least 3 behavior examples (good/bad/reject) in the PLANNING.md.

## PR Standards

Before opening a PR:
1. Verify the change aligns with a PLANNING.md in /planning
2. Write a description that explains WHY, not just what
3. Include before/after screenshots for any visual change
4. Link to the relevant PLANNING.md
5. Request review from an engineer
6. For visual changes (copy, spacing, layout, colors, component ordering): tag the relevant designer for review alongside the engineer

PR title format: `type: brief description`
- `fix:` for bug fixes and copy corrections
- `feat:` for new copy, new config, new prompts
- `docs:` for planning docs and documentation
- `test:` for new test cases

## Planning Docs

All planning docs live in `/planning` and follow the PLANNING-TEMPLATE.md format.

Required sections: Problem, Hypothesis, Scope, Non-Goals, Success Metrics (with thresholds), Rollout Plan (with kill criteria).

For AI features: also include Behavior Examples (good/bad/reject) with at least 5 examples per category.

## Team Norms

<!-- EDIT THIS SECTION for your team -->

- Every PM PR requires engineer review before merge
- Planning docs are reviewed in [weekly planning meeting / async in PR comments]
- Feature flags are required for any testable change
- The PM owns the PLANNING.md; engineering owns the implementation
- When in doubt, ask in [#product-eng Slack channel]
