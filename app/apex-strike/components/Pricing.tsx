"use client";

import { useRef } from "react";
import { useScrollReveal } from "./useScrollReveal";
import styles from "../apex-strike.module.css";

const WHOP_URL_LITE = "https://whop.com/apex-strike-pro/apex-strike-pro-97/";
const WHOP_URL_PRO = "https://whop.com/apex-strike-pro/apex-strike-pro-f4";

//https://whop.com/apex-strike-pro/apex-strike-pro-97/
//https://whop.com/apex-strike-pro/apex-strike-pro-f4/

interface PriceTier {
  tier: string;
  amount: string;
  suffix: string;
  period: string;
  featured: boolean;
  badge?: string;
  features: string[];
  btnLabel: string;
}

const TIERS: PriceTier[] = [
  {
    tier: "Apex Strike Lite",
    amount: "$49",
    suffix: "",
    period: "One-time payment. No subscriptions.",
    featured: false,
    features: [
      "4-phase engine (trend → bounce → entry)",
      "LONG/SHORT signal arrows",
      "SMA line & phase background colors",
      "MACD confirmation + bounce dots",
      "2 alerts (LONG/SHORT)",
      "Basic 4-row info panel",
      "Works on free TradingView",
    ],
    btnLabel: "Get Lite →",
  },
  {
    tier: "Apex Strike Pro",
    amount: "$99",
    suffix: "",
    period: "One-time payment. Lifetime updates included.",
    featured: true,
    badge: "BEST VALUE",
    features: [
      "Everything in Lite",
      "Auto TP/SL levels on chart",
      "Volume surge & session filters",
      "4 timeframe presets + bounce tracking",
      "Full 12-row dashboard with R:R & ATR",
      "6 alerts (setup, bounce, MACD, volume)",
      "All future indicator updates",
      "Private community access",
    ],
    btnLabel: "Get Pro ⚡",
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
          <div className={styles.sectionTitle}>ONE PRICE. YOURS FOREVER.</div>
          <div className={styles.sectionDesc} style={{ margin: "0 auto" }}>
            No subscriptions. No recurring fees. Pay once and it&apos;s yours forever.
            Choose Lite for the core engine or Pro for the full trading suite.
          </div>
        </div>

        <div ref={gridRef} className={`${styles.pricingGridTwo} animate-in`}>
          {TIERS.map((tier) => (
            <div
              key={tier.tier}
              className={tier.featured ? styles.priceCardFeatured : styles.priceCard}
            >
              {tier.badge && (
                <div className={styles.priceCardBadge}>{tier.badge}</div>
              )}
              <div className={styles.priceTier}>{tier.tier}</div>
              <div className={styles.priceAmount}>
                {tier.amount}
                {tier.suffix && <span>{tier.suffix}</span>}
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
                href={ tier.featured ? WHOP_URL_PRO : WHOP_URL_LITE}
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
