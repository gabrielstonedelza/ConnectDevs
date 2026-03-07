import styles from "../apex-strike.module.css";

const WHOP_URL = "https://whop.com/apex-strike-pro/";

const STATS = [
  { value: "4-PHASE", label: "Signal Engine" },
  { value: "6 ALERTS", label: "Conditions Built-In" },
  { value: "0 REPAINT", label: "Signals Are Final" },
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`${styles.orb} ${styles.orbBlue}`} />
      <div className={`${styles.orb} ${styles.orbOrange}`} />
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <span className={styles.pulse} />
            TradingView Indicator — Pine Script v5
          </div>

          <h1 className={styles.heroTitle}>
            STOP GUESSING.
            <br />
            START <span className={styles.heroAccent}>STRIKING.</span>
          </h1>

          <p className={styles.heroSub}>
            Apex Strike Pro is a 4-phase trend continuation engine built for
            futures traders. Volume-confirmed entries. ATR-based risk
            management. No repaint. No noise. Just precision.
          </p>

          <div className={styles.heroActions}>
            <a
              href={WHOP_URL}
              className={styles.btnPrimary}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Access Now ⚡
            </a>
            <a href="#engine" className={styles.btnOutline}>
              See How It Works ↓
            </a>
          </div>

          <div className={styles.heroStats}>
            {STATS.map((stat) => (
              <div key={stat.label} className={styles.statItem}>
                <div className={styles.statVal}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
