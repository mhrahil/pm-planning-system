import { describe, it, expect } from "vitest";
import { pricingCopy } from "./pricing";

describe("Pricing page copy", () => {
  it("has a headline", () => {
    expect(pricingCopy.headline).toBeDefined();
    expect(pricingCopy.headline.length).toBeGreaterThan(0);
  });

  it("has a subheadline", () => {
    expect(pricingCopy.subheadline).toBeDefined();
    expect(pricingCopy.subheadline.length).toBeGreaterThan(0);
  });

  it("has a primary CTA with an action verb", () => {
    const actionVerbs = ["Start", "Get", "Try", "Begin", "Launch", "Create"];
    const hasActionVerb = actionVerbs.some((verb) =>
      pricingCopy.cta.primary.startsWith(verb)
    );
    expect(hasActionVerb).toBe(true);
  });

  it("has all three plan tiers defined", () => {
    expect(pricingCopy.plans.starter).toBeDefined();
    expect(pricingCopy.plans.pro).toBeDefined();
    expect(pricingCopy.plans.enterprise).toBeDefined();
  });

  it("uses capitalized plan names", () => {
    const plans = Object.values(pricingCopy.plans);
    plans.forEach((plan) => {
      expect(plan.name[0]).toBe(plan.name[0].toUpperCase());
    });
  });

  it("has numeric prices for non-enterprise plans", () => {
    expect(typeof pricingCopy.plans.starter.price).toBe("number");
    expect(typeof pricingCopy.plans.pro.price).toBe("number");
  });

  it("starter plan is free", () => {
    expect(pricingCopy.plans.starter.price).toBe(0);
  });

  it("has a money-back guarantee", () => {
    expect(pricingCopy.guarantee).toBeDefined();
    expect(pricingCopy.guarantee.toLowerCase()).toContain("guarantee");
  });

  it("has FAQ entries", () => {
    expect(pricingCopy.faq.length).toBeGreaterThanOrEqual(3);
  });

  it("FAQ entries have both question and answer", () => {
    pricingCopy.faq.forEach((entry) => {
      expect(entry.question).toBeDefined();
      expect(entry.answer).toBeDefined();
      expect(entry.question.length).toBeGreaterThan(0);
      expect(entry.answer.length).toBeGreaterThan(0);
    });
  });

  it("does not use banned words in headline or subheadline", () => {
    const banned = ["synergy", "leverage", "robust", "streamline", "delve"];
    const combined = `${pricingCopy.headline} ${pricingCopy.subheadline}`.toLowerCase();
    banned.forEach((word) => {
      expect(combined).not.toContain(word);
    });
  });

  it("headline is under 60 characters", () => {
    expect(pricingCopy.headline.length).toBeLessThanOrEqual(60);
  });

  it("subheadline is under 100 characters", () => {
    expect(pricingCopy.subheadline.length).toBeLessThanOrEqual(100);
  });

  it("each plan has a CTA", () => {
    Object.values(pricingCopy.plans).forEach((plan) => {
      expect(plan.cta).toBeDefined();
      expect(plan.cta.length).toBeGreaterThan(0);
    });
  });
});
