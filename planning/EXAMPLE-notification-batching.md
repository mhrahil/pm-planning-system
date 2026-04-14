# PLANNING: Smart Notification Batching

## Exec Summary
Batch non-urgent notifications into a daily digest. Projected: mute rate drops 15%+, reducing churn exposure without cost to engagement.

## Problem
Users receive 12+ notifications per day from our platform. Support tickets about "notification fatigue" increased 34% last quarter (N = 1,240 tickets). 8% of users have muted all notifications entirely (N = 186k users), which correlates with 2.3× higher churn rate.

## Hypothesis
Batching low-priority notifications into a single daily digest will reduce notification mute rates by ≥ 15% while maintaining engagement with high-priority alerts.

## Baseline
- Notification mute rate: 8.0% (N = 186k / 2.3M, 30-day window).
- CTR on high-priority notifications: 24% (N = 4.1M sends, 30-day window).
- Daily active usage: 62% (N = 2.3M, 30-day window).
- Support tickets mentioning "notifications" or "alerts": 1,240 last quarter.

## Scope
- Batch non-urgent notifications into a daily digest email sent at 10am user local time.
- Keep real-time delivery for: direct messages, security alerts, payment confirmations, time-sensitive approvals.
- Add user preference toggle: "Instant" / "Daily digest" / "Weekly digest".
- Default new users to "Daily digest"; existing users keep current setting.

## Non-Goals
- Redesigning the notification center UI (separate project, Q3).
- Push notification changes (mobile team owns this).
- Notification content/copy improvements (next quarter).

## Success Metrics
- **Primary:** notification mute rate drops ≥ 15% vs. control (baseline 8.0%).
- **Guardrail:** click-through rate on high-priority notifications doesn't drop > 2 pp.
- **Guardrail:** daily active usage doesn't decrease > 1 pp.
- **Guardrail:** user complaints about missed notifications (measured via tagged support tickets) don't increase > 20%.
- **Secondary:** support tickets mentioning "notifications" or "alerts" decrease ≥ 10%.

## Statistical Plan
- MDE: 10% relative reduction in mute rate.
- Power: 80%; α: 0.05.
- Randomization: user-level.
- Sample size: ~94k users per arm.
- Duration: 2 weeks at 10% exposure → ramp.

## Rollout Plan
- **Exposure:** 10% of users.
- **Duration:** 2 weeks before first evaluation.
- **Randomization:** user-level (consistent across sessions).
- **Ramp gates:** mute rate improves ≥ 10% AND guardrails hold → expand to 50%.
- **Kill criteria:** if mute rate doesn't improve by ≥ 5% after 2 weeks, roll back entirely.

## Observability
- **Dashboard:** `grafana.internal/d/notifications`.
- **Widgets:** mute rate per cohort, digest open rate, per-locale digest delivery success, complaints-tagged ticket count.
- **Alerts:**
  - Digest send failure > 1% → page.
  - Mute rate in treatment exceeds control by > 2 pp → Slack warn.

## Cost
- Email sending: existing infrastructure, marginal.
- Scheduler jobs: within existing cron capacity, no new cost.

## Privacy, Security, Compliance
- No new user-identifying fields logged.
- Digest content is user's own notification feed, no cross-user data.
- Deletion pipeline: existing notification deletion includes digest records.

## Dependencies
- Email service supports scheduled delivery by timezone (confirmed with eng: ready).
- Analytics event "digest opened" needs to be instrumented (PROD-4521).

## Reviewers
- PM owner: @sarah
- Engineering: @martin
- Design: @elena
- Data / DS: @kwame
- Final sign-off for GA: @vpproduct

## Owner
@sarah — Senior PM, Engagement
