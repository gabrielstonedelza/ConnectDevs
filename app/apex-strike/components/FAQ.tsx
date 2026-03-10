"use client";

import { useRef } from "react";
import { useScrollReveal } from "./useScrollReveal";
import styles from "../apex-strike.module.css";

const FAQS = [
  {
    q: "What TradingView plan do I need?",
    a: "Apex Strike Pro works on any TradingView plan, including free accounts. You don't need a paid TradingView subscription to use invite-only indicators.",
  },
  {
    q: "How do I get the script after purchasing?",
    a: "After completing your one-time purchase on Whop, head to your Whop dashboard where the Pine Script file (.txt) is available for immediate download. Paste it into TradingView's Pine Editor and you're live.",
  },
  {
    q: "Does it repaint?",
    a: "No. All signals are calculated on confirmed (closed) bars. What you see on historical charts is exactly what fired in real-time. No repainting, no look-ahead bias.",
  },
  {
    q: "What markets does it work on?",
    a: "It's optimized for futures — ES, NQ, CL, GC, RTY, YM, and more. It also works on forex pairs and crypto, though the volume filter is most effective on instruments with real exchange volume.",
  },
  {
    q: "What timeframes work best?",
    a: "The built-in presets cover Scalp (1-5m), Intraday (15m), Swing (1H), and Position (4H). You can also use Manual mode to customize everything for any timeframe you prefer.",
  },
  {
    q: "Is this a guaranteed profit system?",
    a: "No indicator can guarantee profits. Apex Strike Pro is a precision tool that gives you high-probability setups with built-in risk management, but trading always involves risk. Use proper position sizing and never risk more than you can afford to lose.",
  },
  {
    q: "Is this a one-time payment?",
    a: "Yes. Both Apex Strike Lite and Pro are one-time purchases — no subscriptions, no recurring fees. You pay once and the script is yours forever. Pro also includes all future updates.",
  },
];

export default function FAQ() {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  useScrollReveal(headerRef);
  useScrollReveal(gridRef);

  return (
    <section id="faq" className={styles.section}>
      <div className="container">
        <div ref={headerRef} className="animate-in">
          <div className={styles.sectionLabel}>{"// FAQ"}</div>
          <div className={styles.sectionTitle}>COMMON QUESTIONS</div>
        </div>
        <div ref={gridRef} className={`${styles.faqGrid} animate-in`}>
          {FAQS.map((faq) => (
            <div key={faq.q} className={styles.faqItem}>
              <div className={styles.faqQ}>{faq.q}</div>
              <div className={styles.faqA}>{faq.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
