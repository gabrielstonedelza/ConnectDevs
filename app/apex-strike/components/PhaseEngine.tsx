"use client";

import { useRef } from "react";
import { useScrollReveal } from "./useScrollReveal";
import styles from "../apex-strike.module.css";

const PHASES = [
  {
    num: "01",
    icon: "📐",
    iconClass: "phaseIconBlue",
    name: "Trend Lock",
    desc: "Heikin-Ashi candle alignment + SMA slope agreement confirms a legitimate trend direction. No signal fires in choppy, directionless markets.",
  },
  {
    num: "02",
    icon: "↩️",
    iconClass: "phaseIconOrange",
    name: "Pullback",
    desc: "Price retraces to the dynamic SMA zone within a defined bar window. ATR-based touch zones auto-adapt to each instrument's volatility.",
  },
  {
    num: "03",
    icon: "🎯",
    iconClass: "phaseIconCyan",
    name: "Bounce Setup",
    desc: "Price rejects from the SMA — wick tests the level, body closes in trend direction. Bounce counting tracks setup degradation.",
  },
  {
    num: "04",
    icon: "⚡",
    iconClass: "phaseIconGreen",
    name: "STRIKE",
    desc: "All conditions align: trend + pullback + bounce + MACD confirmation + volume surge. The signal fires. No ambiguity. Enter with confidence.",
  },
];

export default function PhaseEngine() {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  useScrollReveal(headerRef);
  useScrollReveal(gridRef);

  return (
    <section id="engine" className={styles.section}>
      <div className="container">
        <div ref={headerRef} className="animate-in">
          <div className={styles.sectionLabel}>{"// The Engine"}</div>
          <div className={styles.sectionTitle}>4 PHASES. ZERO GUESSWORK.</div>
          <div className={styles.sectionDesc}>
            Every signal goes through a strict 4-phase validation pipeline. If
            any phase fails, no signal fires. Period.
          </div>
        </div>

        <div ref={gridRef} className={`${styles.phasesGrid} animate-in`}>
          {PHASES.map((phase) => (
            <div key={phase.num} className={styles.phaseCard}>
              <div className={styles.phaseNum}>{phase.num}</div>
              <div className={`${styles.phaseIcon} ${styles[phase.iconClass]}`}>
                {phase.icon}
              </div>
              <div className={styles.phaseName}>{phase.name}</div>
              <div className={styles.phaseDesc}>{phase.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
