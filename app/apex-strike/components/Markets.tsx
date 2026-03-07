"use client";

import { useRef } from "react";
import { useScrollReveal } from "./useScrollReveal";
import styles from "../apex-strike.module.css";

const MARKETS = [
  "ES — S&P 500",
  "NQ — Nasdaq 100",
  "CL — Crude Oil",
  "GC — Gold",
  "RTY — Russell 2000",
  "YM — Dow Jones",
  "6E — Euro FX",
  "ZB — T-Bonds",
  "SI — Silver",
  "NG — Natural Gas",
];

export default function Markets() {
  const headerRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  useScrollReveal(headerRef);
  useScrollReveal(rowRef);

  return (
    <section id="markets" className={styles.section}>
      <div className="container">
        <div ref={headerRef} className="animate-in">
          <div className={styles.sectionLabel}>{"// Markets"}</div>
          <div className={styles.sectionTitle}>WORKS WHERE YOU TRADE</div>
          <div className={styles.sectionDesc}>
            Apex Strike Pro adapts to any futures contract on TradingView. The
            ATR-based zones automatically calibrate to each instrument&apos;s
            volatility profile.
          </div>
        </div>
        <div ref={rowRef} className={`${styles.marketsRow} animate-in`}>
          {MARKETS.map((market) => (
            <div key={market} className={styles.marketTag}>
              <span className={styles.dot} />
              {market}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
