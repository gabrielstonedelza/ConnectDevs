"use client";

import { useRef } from "react";
import { useScrollReveal } from "./useScrollReveal";
import styles from "../apex-strike.module.css";

const WHOP_URL = "https://whop.com/apex-strike-pro/";

interface PriceTier {
  tier: string;
  amount: string;
  suffix: string;
  period: string;
  featured: boolean;
  features: string[];
  btnLabel: string;
}

const TIERS: PriceTier[] = [
  {
    tier: "Monthly",
    amount: "$29",
    suffix: "/mo",
    period: "Billed monthly. Cancel anytime.",
    featured: false,
    features: [
      "Full Apex Strike Pro indicator",
      "All 4 timeframe presets",
      "Live dashboard panel",
      "6 alert conditions",
      "Discord community access",
      "Setup guides & documentation",
    ],
    btnLabel: "Start Monthly →",
  },
  {
    tier: "Quarterly",
    amount: "$69",
    suffix: "/3mo",
    period: "Save 21% vs monthly. Billed every 3 months.",
    featured: true,
    features: [
      "Everything in Monthly",
      "Priority support",
      "Early access to new features",
      "Weekly market analysis posts",
      "Strategy video walkthroughs",
      "Best value per month",
    ],
    btnLabel: "Get Quarterly ⚡",
  },
  {
    tier: "Lifetime",
    amount: "$249",
    suffix: " once",
    period: "One payment. Yours forever. All future updates.",
    featured: false,
    features: [
      "Everything in Quarterly",
      "Lifetime access — no renewals",
      "All future indicator updates",
      "Private lifetime members chat",
      "Direct support channel",
      "Input on future features",
    ],
    btnLabel: "Go Lifetime →",
  },
];

export default function Pricing() {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  useScrollReveal(headerRef);
  useScrollReveal(gridRef);

  return (
    <section id="pricing" className={styles.section}>
      <div className="container">
        <div ref={headerRef} className="animate-in" style={{ textAlign: "center" }}>
          <div className={styles.sectionLabel} style={{ textAlign: "center" }}>
            {"// Pricing"}
          </div>
          <div className={styles.sectionTitle}>CHOOSE YOUR PLAN</div>
          <div className={styles.sectionDesc} style={{ margin: "0 auto" }}>
            One indicator. Multiple timeframe presets. Full dashboard. All alerts.
          </div>
        </div>

        <div ref={gridRef} className={`${styles.pricingGrid} animate-in`}>
          {TIERS.map((tier) => (
            <div
              key={tier.tier}
              className={tier.featured ? styles.priceCardFeatured : styles.priceCard}
            >
              {tier.featured && (
                <div className={styles.priceCardBadge}>MOST POPULAR</div>
              )}
              <div className={styles.priceTier}>{tier.tier}</div>
              <div className={styles.priceAmount}>
                {tier.amount}
                <span>{tier.suffix}</span>
              </div>
              <div className={styles.pricePeriod}>{tier.period}</div>
              <ul className={styles.priceFeatures}>
                {tier.features.map((feature) => (
                  <li key={feature}>
                    <span className={styles.check}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={WHOP_URL}
                className={tier.featured ? styles.priceBtnPrimary : styles.priceBtnSecondary}
                target="_blank"
                rel="noopener noreferrer"
              >
                {tier.btnLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
