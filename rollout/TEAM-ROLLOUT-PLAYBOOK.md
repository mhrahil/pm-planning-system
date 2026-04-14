# Team Rollout Playbook

How to deploy the PM Planning System across your product team. This is for product directors and VPs rolling out PM shipping to their org.

## Prerequisites

Before you start:
- [ ] You have at least one PM willing to pilot
- [ ] You have an engineering director counterpart who's open to PM PRs (use the "Make the Case" pitch doc if needed)
- [ ] Your team uses GitHub (or equivalent git platform)
- [ ] At least one PM has Claude Code installed, or is willing to install it

## Phase 1: Setup (Day 1-2)

### Fork the repo
Fork or copy this planning system into your product repo. You can add it as a top-level `/planning` directory or keep it as a separate repo linked from your main project.

### Customize CLAUDE.md
Edit every section marked `<!-- EDIT THIS SECTION -->`:
- Product context (name, stage, users, stack)
- Team norms (review cadence, Slack channels, flag requirements)
- PM shipping zone boundaries (adjust for your org — some teams may want to be more or less restrictive)

### Pick your pilot PM
Choose someone who:
- Is motivated (they volunteered, not voluntold)
- Has an upcoming small feature or change
- Works closely with a supportive engineer
- Is comfortable with ambiguity
- Has 30-60 minutes of slack per week to learn (don't pick your busiest PM)
- Is mid-level or above (don't pick your most junior PM for the first pilot — they'll need too much support and the results won't convince skeptics)
- Has a good working relationship with at least one engineer who can review their PRs

### Pick your pilot change
Ideal first PR characteristics:
- Copy change or config change (low blast radius)
- Clearly within the PM shipping zone
- Has a PLANNING.md already written
- Can be tested or measured

Bad first PR characteristics:
- Multi-file front-end change
- Anything touching business logic
- Anything without a planning doc

## Phase 2: Pilot (1 Sprint)

### The pilot PM does this:
1. Writes a PLANNING.md for their change using the template
2. Gets async feedback on the planning doc from eng
3. Makes the change using Claude Code
4. Runs the PM PR skill file
5. Opens a PR with proper description, before/after screenshots, PLANNING.md link
6. Gets engineer review
7. Merges (with engineer approval)

### You (the director) do this:
1. Observe. Don't intervene unless something is about to break.
2. Track the metrics in PILOT-MEASUREMENT.md
3. Get qualitative feedback from both the PM and the reviewing engineer
4. Note any friction, confusion, or near-misses

### The engineer does this:
1. Reviews the PR as they would any other
2. Provides honest feedback on PR quality
3. Flags if the PM touched anything they shouldn't have
4. Shares whether the skill file caught issues before they saw the PR

## Phase 3: Evaluate (End of Sprint)

Use PILOT-MEASUREMENT.md to review:

**Quantitative:**
- Cycle time for the pilot change (old process vs new)
- Number of review rounds needed
- Any production incidents (should be zero)

**Qualitative:**
- PM confidence level (1-5 before and after)
- Engineer satisfaction with PR quality (1-5)
- Would the engineer want more PMs doing this? (yes/no/conditional)

### Decision criteria:
- **Expand** if: cycle time improved, no incidents, engineer gives ≥3/5 on quality and says yes to more PMs
- **Iterate** if: cycle time improved but PR quality needs work. Run another sprint with the same PM.
- **Pause** if: any production incident, or engineer says the PM PRs are creating more work than they save

## Phase 4: Scale (Sprint 2+)

If the pilot succeeded:
1. Add 1-2 more PMs
2. Start the weekly review cadence (WEEKLY-REVIEW-CADENCE.md)
3. Build a shared log of PM PRs and their outcomes
4. Iterate on CLAUDE.md based on what you're learning
5. Consider making the PM PR skill file part of your CI pipeline

## Common Failure Modes

**PMs shipping outside the zone.** The skill file catches most of this. If it keeps happening, tighten the zone definition in CLAUDE.md and have a direct conversation.

**Engineers rejecting everything.** Usually means the engineer wasn't involved in defining the PM shipping zone. Go back to Phase 1 and align on boundaries together.

**PMs skipping the planning doc.** The excitement of shipping directly is intoxicating. Enforce: no PLANNING.md, no PR. The skill file checks for this.

**Nobody measuring anything.** If you don't track cycle time before/after, you can't prove the system works. The pilot measurement template makes this easy.

**Director not observing.** If you delegate the pilot completely and don't observe, you miss the friction that needs fixing. Be present for at least the first 2-3 PM PRs.
