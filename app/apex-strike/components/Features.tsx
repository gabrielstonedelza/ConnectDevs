"use client";

import { useRef } from "react";
import { useScrollReveal } from "./useScrollReveal";
import styles from "../apex-strike.module.css";

const FEATURES = [
  {
    icon: "🔊",
    name: "Volume Confirmation",
    desc: "Signals require above-average volume. Futures have real volume data — we use it to filter fake moves and trap setups.",
  },
  {
    icon: "🎯",
    name: "ATR-Based TP/SL",
    desc: "Automatic stop loss and two take-profit levels drawn on every signal. Adapts to each instrument's volatility. Real risk management, not guesswork.",
  },
  {
    icon: "⚙️",
    name: "Timeframe Presets",
    desc: "One dropdown: Scalp, Intraday, Swing, or Position. All parameters auto-tune to match your trading style. Or go Manual for full control.",
  },
  {
    icon: "🕐",
    name: "Session Awareness",
    desc: "Filter signals to RTH only, ETH, or London+NY overlap. Stop taking trades during dead overnight sessions that go nowhere.",
  },
  {
    icon: "📋",
    name: "Live Dashboard",
    desc: "Real-time panel showing all 4 phase statuses, MACD state, volume condition, session filter, current ATR, and risk-reward ratio at a glance.",
  },
  {
    icon: "🔔",
    name: "6 Alert Conditions",
    desc: "LONG, SHORT, Setup Forming, Bounce Limit, MACD Cross, Volume Surge. Set them in TradingView and get notified on your phone.",
  },
];

export default function Features() {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  useScrollReveal(headerRef);
  useScrollReveal(gridRef);

  return (
    <section id="features" className={styles.section}>
      <div className="container">
        <div ref={headerRef} className="animate-in">
          <div className={styles.sectionLabel}>{"// Features"}</div>
          <div className={styles.sectionTitle}>BUILT FOR SERIOUS TRADERS</div>
          <div className={styles.sectionDesc}>
            Not another generic indicator. Every feature exists because futures
            traders need it.
          </div>
        </div>

        <div ref={gridRef} className={`${styles.featuresGrid} animate-in`}>
          {FEATURES.map((f) => (
            <div key={f.name} className={styles.featureCard}>
              <div className={styles.featureIcon}>{f.icon}</div>
              <div className={styles.featureName}>{f.name}</div>
              <div className={styles.featureDesc}>{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
