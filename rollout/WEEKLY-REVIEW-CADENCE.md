# Weekly Planning Review Cadence

A lightweight weekly ritual for teams using the PM planning system. 30 minutes. Keeps planning docs alive and PM shipping on track.

## When
Pick a consistent day. Tuesday or Wednesday works best (Monday is too early to have data from the prior week; Friday energy is low).

## Who
- All PMs who are shipping PRs
- One engineering representative. Keep this person consistent for the first month so they build context on PM PR patterns and quality trends. Rotate quarterly after the system is established.
- Product director (optional after the first month, but attend monthly)

## Agenda (30 minutes)

### 1. Last Week's Shipping Log (10 min)

Quick round-robin. Each PM shares:
- What PRs they merged last week
- Any issues flagged by the skill file or eng review
- Any production impact (positive or negative)
- One thing they learned

Keep this fast. 2 minutes per PM max. If there's a deeper discussion needed, take it offline.

### 2. Active Planning Docs (10 min)

Review planning docs that are in progress:
- New PLANNING.md files that need feedback before work starts
- Existing docs that need updates based on what shipped
- Any docs where metrics need to be checked (is the experiment done? Do we have results?)

### 3. PM Shipping Zone Check (5 min)

Quick calibration:
- Did any PM PRs get flagged as out-of-zone last week?
- Does the zone need adjustment? (Too restrictive = PMs filing tickets for things they could ship. Too loose = PMs touching things that caused issues.)
- Any new lint rules to add based on recurring review comments?

### 4. Next Week Preview (5 min)

Each PM: one sentence on what they plan to ship next week. This isn't a commitment. It's awareness so eng knows what PRs are coming.

## After the Meeting

- Update PLANNING.md files with any decisions made
- Close out completed planning docs (add results, link to the shipped PR)
- Add any new lint rules or CLAUDE.md updates

## Quarterly Review (Every 12 weeks)

Zoom out:
- Total PM PRs merged this quarter
- Average cycle time vs baseline
- Production incidents (should still be zero)
- Engineer satisfaction trend
- Zone boundary adjustments needed
- Planning doc quality trend (are they getting sharper?)

This data goes into the next quarterly product review. It's how you prove the system works at the org level.
