# Team Rollout Playbook

How to deploy the PM Planning System across your product team. This is for product directors and VPs rolling out PM shipping to their org.

## Prerequisites

Before you start:
- [ ] At least one PM willing to pilot (see selection criteria below).
- [ ] An engineering-director counterpart who is open to PM PRs (use the "Make the Case" pitch doc if needed).
- [ ] Your team uses GitHub (or equivalent git platform with branch protection + CODEOWNERS).
- [ ] At least one PM has Claude Code installed, or is willing to install it.
- [ ] A defined PM shipping zone, reviewed with eng leadership.

## Phase 1: Setup (Day 1–2)

### Fork the repo

Fork or copy this planning system into your product repo. Add it as a top-level `/planning` directory or keep it as a separate repo linked from your main project.

### Customize CLAUDE.md

Fill in every bracketed placeholder:
- Product context (name, stage, users, stack, tooling, design system, localization, LLM provider).
- PM shipping-zone boundaries (adjust for your org's risk tolerance).
- Team norms (review cadence, Slack channels, flag requirements, escalation chain).
- Program guardrails (engineer NPS target, incident-termination threshold, weekly PM-PR cap, LLM budget ceiling).
- References (paths to design system, redaction helper, eval harness, CODEOWNERS).

### Pilot PM Selection Criteria

Not every PM is the right first PM. Score candidates against these five:

| Criterion | Why it matters |
|---|---|
| Written ≥ 1 PRD that engineering called unusually clear | Signal of spec-writing discipline. |
| Comfortable with at least one technical tool beyond docs (git, SQL, terminal, Jira API) | The learning curve for Claude Code is lower. |
| Low ego; accepts PR rejections without drama | PRs will be rejected; the PM has to iterate. |
| Works closely with a patient, supportive engineer | The engineer's first impression makes or breaks the program. |
| Has a bounded, well-scoped feature on their plate | Greenfield architecture is wrong for a pilot. |

A PM needs to hit ≥ 4 of 5 to qualify. If no one in your org hits 4, train before piloting.

### Pick your pilot change

Ideal first PR:
- Copy change or config change (low blast radius).
- Clearly inside the PM shipping zone.
- Has a PLANNING.md already written.
- Can be tested or measured.

Bad first PR:
- Multi-file front-end change.
- Anything touching business logic or shared infra.
- Anything without a planning doc.

## Phase 2: Pilot (1 Sprint)

### The pilot PM does

1. Writes a PLANNING.md for their change using the template.
2. Gets async feedback on the planning doc from eng.
3. Makes the change using Claude Code.
4. Runs the PM PR skill file.
5. Opens a PR with description, before/after screenshots, PLANNING.md link.
6. Gets engineer review.
7. Merges with engineer approval.

### You (the director) do

1. Observe. Don't intervene unless something is about to break.
2. Track metrics in `PILOT-MEASUREMENT.md`.
3. Get qualitative feedback from both the PM and the reviewing engineer.
4. Note friction, confusion, or near-misses.
5. Attend at least the first 2–3 PM PRs end-to-end — the early friction surfaces only if you're present.

### The engineer does

1. Reviews the PR as they would any other.
2. Provides honest feedback on PR quality.
3. Flags if the PM touched anything outside zone.
4. Shares whether the skill file caught issues before they saw the PR.
5. Completes the engineer NPS survey at sprint end.

## Phase 3: Evaluate (End of Sprint)

Use `PILOT-MEASUREMENT.md`. Decision targets:
- Cycle time for pilot-scope changes drops ≥ 50% vs. baseline.
- Zero production incidents caused by PM PRs.
- Engineer NPS on PM PRs ≥ 7/10.
- ≤ 1.5 average review rounds per PR.
- ≤ 10 min average engineer review time per PM PR.

### Decision

- **Expand:** all five targets hit.
- **Iterate:** cycle time improved but engineer NPS < 7 or review rounds > 1.5 — run another sprint with the same PM.
- **Pause:** any production incident, or engineer says PM PRs create more work than they save.

## Phase 4: Scale (Sprint 2+)

If the pilot succeeded:
1. Add 1–2 more PMs (re-run selection criteria).
2. Start the weekly review cadence (`WEEKLY-REVIEW-CADENCE.md`).
3. Build a shared log of PM PRs and their outcomes.
4. Iterate on CLAUDE.md based on what you're learning.
5. Consider making the PM PR skill file part of your CI pipeline.

## Objection Handling

| Objection | Answer |
|---|---|
| "Engineers already review. What's faster?" | The author becomes the PM. Engineer spends 10 min reviewing instead of 45 min context-switching. Context cost is the bottleneck, not typing speed. |
| "What if a PM PR takes down prod?" | Same safety bar as every PR — CI + engineer review + feature flag. Blast radius of a copy change doesn't get bigger because a PM wrote it. |
| "This is scope creep. PMs should focus on strategy." | Shipping sharpens strategy. A PM who sees how the sausage is made writes better specs. |
| "Our codebase is too complex for this." | Start in one repo, one surface, one PM. Expand only if it works. A genuinely incompatible codebase fails cheaply. |
| "Engineers will feel threatened." | Engineer NPS is a measured metric. Drop triggers a pause. In practice, engineers report more satisfaction because their small-fix backlog disappears. |
| "PMs will cut corners and skip review." | Every PR requires engineer approval to merge — enforced by branch protection, not trust. |

## Risks and Mitigations

| Risk | Mitigation |
|---|---|
| PM ships a typo that becomes a meme | Pre-merge skill check + engineer review; rollback in < 5 min via flag or git revert. |
| PM makes a change outside zone | Skill file flags; PR cannot merge until resolved. |
| Engineers resent reviewing "small" PRs | Engineer NPS tracked; volume capped during pilot. |
| PR stuck because reviewer is OOO | CODEOWNERS routes to backup; 24-hour SLA escalates to eng manager, then director. |
| PM becomes "fix-everything PM" and stops thinking strategically | Director reviews PM cycle time on strategic work quarterly; rebalance if slipping. |
| Bad PM PR slips past a rushed reviewer | Skill file's "second opinion" trigger auto-tags a second reviewer when warnings accumulate. |

## 30 / 60 / 90-Day Checkpoints

- **Day 30:** pilot recap with eng director and PM. Decide expand / hold / kill.
- **Day 60:** if expanded, measure cycle time and engineer NPS delta. Onboard a third PM only if both metrics are green.
- **Day 90:** formalize or kill. Document the program and expand, or shut down cleanly with a retro.

## Kill Criteria

End the program if any of these happens:
- Two production incidents caused by PM PRs in a rolling 90-day window.
- Engineer NPS on PM PRs drops below 6/10 for two consecutive months.
- PM cycle time for strategic work (specs, research) increases more than 20% — program is absorbing attention it shouldn't.
- Eng director withdraws support.

A documented exit path makes stakeholders more willing to approve the entry.

## Common Failure Modes

**PMs shipping outside the zone.** The skill file catches most of this. If it keeps happening, tighten the zone definition in CLAUDE.md and have a direct conversation.

**Engineers rejecting everything.** Usually means the engineer wasn't involved in defining the PM shipping zone. Go back to Phase 1 and align on boundaries together.

**PMs skipping the planning doc.** The excitement of shipping directly is intoxicating. Enforce: no PLANNING.md, no PR. The skill file checks for this.

**Nobody measuring anything.** If you don't track cycle time before / after, you can't prove the system works. The pilot measurement template makes this easy.

**Director not observing.** If you delegate the pilot completely, you miss the friction that needs fixing. Be present for at least the first 2–3 PM PRs.

**Reviewer burn-out on a single engineer.** Rotate the primary reviewer quarterly once the program is established.
