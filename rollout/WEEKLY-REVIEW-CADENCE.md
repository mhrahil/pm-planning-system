# Weekly Planning Review Cadence

A lightweight weekly ritual for teams using the PM planning system. 30 minutes. Keeps planning docs alive and PM shipping on track.

## Sync vs. Async

Default to **async** for distributed teams. Sync only when discussion requires it.

- **Async mode:** a Slack thread (or GitHub Discussion) posted each week with the same agenda. Each PM replies in-thread. Director reads on a rolling basis. Discussion escalates to a 15-minute sync only for items that stall in-thread.
- **Sync mode:** 30-minute meeting. Same agenda. Use when the team is co-located or in close timezones.

Pick one and stick with it for a quarter so patterns emerge.

## When (Sync Mode)

Pick a consistent day. Tuesday or Wednesday works best (Monday is too early to have data from the prior week; Friday energy is low). For distributed teams, pick a time that overlaps US + EU working hours, or run twice (one US/EU, one US/APAC).

## Who

- All PMs shipping PRs.
- One engineering representative. Keep this person consistent for the first month so they build context on PM PR patterns. Rotate quarterly after.
- Product director (optional after the first month; attend monthly).
- For AI-heavy teams: AI safety or policy rep attends monthly.

## Agenda (30 min, or equivalent async thread)

### 1. Last Week's Shipping Log (10 min)

Round-robin. Each PM shares:
- Merged PRs last week.
- Issues flagged by the skill file or eng review.
- Production impact (positive or negative).
- One thing learned.

Keep it fast — 2 min per PM max. Deep dives go offline.

### 2. Active Planning Docs (10 min)

Review in-progress planning docs:
- New PLANNING.md files needing feedback before work starts.
- Existing docs needing updates based on what shipped.
- Docs where metrics need a check (is the experiment done? do we have results?).
- Docs older than 30 days with no update — archive or refresh.

### 3. PM Shipping Zone Check (5 min)

Calibration:
- Any PM PRs flagged out-of-zone last week?
- Does the zone need adjustment? Too restrictive = PMs filing tickets for things they could ship. Too loose = PMs touching things that caused issues.
- Any new lint rules to add based on recurring review comments?

### 4. Next Week Preview (5 min)

Each PM: one sentence on what they plan to ship next week. Not a commitment — awareness so eng knows what PRs are coming.

## Outputs (capture in the thread or meeting doc)

- Decisions made (and why).
- New lint rules or CLAUDE.md edits to file.
- Planning docs marked complete with results linked.
- Stale docs archived.
- Escalations for stuck PRs.

## Timezone Coverage for Distributed Teams

If the team spans >6 time zones, run the agenda async in the shared channel with a 48-hour response window. Director reads the thread end-to-end on a fixed day (e.g., every Thursday morning local). Sync-only items route to a standing 15-min optional call.

## After the Meeting (or End of Thread)

- Update PLANNING.md files with any decisions.
- Close out completed planning docs (add results, link to shipped PRs).
- Add any new lint rules or CLAUDE.md updates.
- Post a short summary in `#pm-prs` so absent team members have the signal.

## Quarterly Review (Every 12 Weeks)

Zoom out:
- Total PM PRs merged this quarter.
- Average cycle time vs. baseline.
- Production incidents (should still be zero).
- Engineer NPS trend.
- Zone boundary adjustments needed.
- Planning doc quality trend (sharper over time?).
- Skill-file false-positive rate.
- LLM cost delta (for AI teams).

This data feeds the next quarterly product review. It's how you prove the system works at the org level.
