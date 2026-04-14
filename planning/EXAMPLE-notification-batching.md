# PLANNING: Smart Notification Batching

## Problem
Users receive 12+ notifications per day from our platform. Support tickets about "notification fatigue" increased 34% last quarter. 8% of users have muted all notifications entirely, which correlates with 2.3x higher churn rate.

## Hypothesis
Batching low-priority notifications into a single daily digest will reduce notification mute rates by 15%+ while maintaining engagement with high-priority alerts.

## Scope
- Batch non-urgent notifications into a daily digest email sent at 10am user local time
- Keep real-time delivery for: direct messages, security alerts, payment confirmations, time-sensitive approvals
- Add user preference toggle: "Instant" / "Daily digest" / "Weekly digest"
- Default new users to "Daily digest"; existing users keep current setting

## Non-Goals
- Redesigning the notification center UI (separate project, Q3)
- Push notification changes (mobile team owns this)
- Notification content/copy improvements (next quarter)

## Success Metrics
- **Primary:** notification mute rate drops ≥15% vs control group
- **Guardrail:** click-through rate on high-priority notifications doesn't drop by >2%
- **Guardrail:** daily active usage doesn't decrease by >1%
- **Secondary:** support tickets mentioning "notifications" or "alerts" decrease ≥10%

## Rollout Plan
- **Exposure:** 10% of users
- **Duration:** 2 weeks before first evaluation
- **Randomization:** user-level (consistent experience across sessions)
- **Ramp gates:** mute rate improves ≥10% AND guardrails hold → expand to 50%
- **Kill criteria:** if mute rate doesn't improve by ≥5% after 2 weeks, roll back entirely

## Dependencies
- Email service must support scheduled delivery by timezone (confirmed with eng: ready)
- Analytics event for "digest opened" needs to be instrumented (ticket: PROD-4521)

## Owner
@sarah — Senior PM, Engagement
