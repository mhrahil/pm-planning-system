# PLANNING: AI-Powered Product Search

## Problem
Users with compound queries ("blue dress for a summer wedding under $200") get poor results from keyword search. 62% of multi-attribute searches result in zero clicks on page 1. Users revert to the filter sidebar, which requires 4+ clicks to set up the same constraints.

## Hypothesis
Semantic search that understands compound queries will reduce search-to-purchase time by 15%+ for multi-attribute queries while maintaining conversion rate for simple queries.

## Scope
- Replace keyword search with semantic search for the main search bar
- Parse compound queries into structured attributes (color, occasion, price range, size)
- Display parsed attributes as editable filter chips below the search bar
- Maintain the existing filter sidebar as a fallback
- Log all queries and parsed attributes for analysis

## Non-Goals
- Visual search (upload a photo) — separate initiative
- Conversational search ("What's the occasion?") — evaluated in prototyping, killed for interaction cost
- Recommendations engine — different team, different model

## Success Metrics
- **Primary:** P50 search-to-purchase time drops ≥15% vs control for multi-attribute queries
- **Guardrail:** overall search conversion rate doesn't drop by >1%
- **Guardrail:** cart abandonment rate doesn't increase by >2%
- **Secondary:** filter sidebar usage decreases (indicates semantic search is absorbing the workload)

## Behavior Examples

### Good
- Query: "blue dress for summer wedding under $200" → Parsed: color=blue, category=dress, occasion=wedding, season=summer, price=<$200. Filter chips shown. Results sorted by relevance.
- Query: "running shoes size 10 wide" → Parsed: category=running shoes, size=10, width=wide. Width correctly interpreted as shoe width, not style descriptor.
- Query: "red" → Simple query. Returns red items across categories. No over-parsing.
- Query: "gift for mom" → Parsed: occasion=gift. Shows curated gift categories. Does not assume gender, age, or price range.
- Query: "nike air max 90 white" → Brand search. Returns exact product matches first, similar styles second. Does not show non-Nike alternatives unless no exact matches.

### Bad
- Query: "blue dress for summer wedding under $200" → Returns blue items that aren't dresses (blue shoes, blue bags). The category filter failed.
- Query: "running shoes size 10 wide" → "Wide" parsed as style tag, returns wide-leg pants alongside shoes. Width attribute misclassified.
- Query: "cheap nice jacket" → Returns only the cheapest items regardless of quality. "Nice" ignored entirely. Should balance price and rating.
- Query: "" (empty) → Returns an error. Should show trending/popular items.
- Query: "something for date night" → Returns only one category (dresses). Should show across categories (shoes, accessories, outfits).

### Reject
- Any query → Results include out-of-stock items without clear "out of stock" label
- Any query → Results from a different country/currency without conversion
- Query mentioning a size → Results ignore the size constraint (the most common complaint in user research)
- Any query → Auto-redirect to a single product page without showing alternatives
- Any query → Display competitor product names or prices in search suggestions

## Rollout Plan
- **Exposure:** 5% of users (search is high-traffic; start conservative)
- **Duration:** 3 weeks (need adequate sample for conversion metrics)
- **Randomization:** user-level, stratified by search frequency (heavy searchers and light searchers both represented)
- **Ramp gates:** search-to-purchase improves ≥10% AND guardrails hold → expand to 25%
- **Kill criteria:** if conversion drops >1% at any point, pause and investigate immediately. If search-to-purchase doesn't improve ≥5% after 3 weeks, roll back.

## Dependencies
- Catalog data quality: 30% of products have incomplete attributes (missing color, size, material). Data enrichment must reach ≥85% completeness before rollout. (Ticket: DATA-892)
- Embedding model API: cost estimate at production traffic is $12K/month. Finance approved. (Approval: FIN-2024-Q2-047)
- Search analytics pipeline must be instrumented to log parsed attributes alongside queries. (Ticket: ENG-3301)

## Owner
@aakash — PM, Search & Discovery
