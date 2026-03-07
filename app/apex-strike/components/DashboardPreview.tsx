"use client";

import { useRef } from "react";
import { useScrollReveal } from "./useScrollReveal";
import styles from "../apex-strike.module.css";

const DASH_ITEMS = [
  { check: "✅", label: "Phase 1 — Trend", value: "BULL ▲", cls: "bull" },
  { check: "✅", label: "Phase 2 — Pullback", value: "3/5 bars", cls: "blueVal" },
  { check: "✅", label: "Phase 3 — Bounce", value: "Bounce #1", cls: "orangeVal" },
  { check: "✅", label: "Phase 4 — STRIKE", value: "⚡ LONG", cls: "orangeVal" },
  { check: "✅", label: "MACD", value: "Bullish", cls: "bull" },
  { check: "✅", label: "Volume", value: "SURGE ▲", cls: "bull" },
  { check: "✅", label: "Session", value: "Active ✓", cls: "bull" },
  { check: "📊", label: "R:R (TP1)", value: "2.00 : 1", cls: "blueVal" },
];

export default function DashboardPreview() {
  const headerRef = useRef<HTMLDivElement>(null);
  const dashRef = useRef<HTMLDivElement>(null);
  useScrollReveal(headerRef);
  useScrollReveal(dashRef);

  return (
    <section className={styles.section}>
      <div className="container">
        <div ref={headerRef} className="animate-in">
          <div className={styles.sectionLabel}>{"// Live Dashboard Preview"}</div>
          <div className={styles.sectionTitle}>EVERYTHING AT A GLANCE</div>
        </div>

        <div ref={dashRef} className={`${styles.dashboardSection} animate-in`}>
          <div className={styles.dashTitle}>APEX STRIKE PRO</div>
          <div className={styles.dashSubtitle}>Real-time phase engine status panel</div>
          <div className={styles.dashGrid}>
            {DASH_ITEMS.map((item) => (
              <div key={item.label} className={styles.dashItem}>
                <div className={styles.dashItemLeft}>
                  <span className={styles.dashCheck}>{item.check}</span>
                  <span className={styles.dashLabel}>{item.label}</span>
                </div>
                <span className={`${styles.dashVal} ${styles[item.cls]}`}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
