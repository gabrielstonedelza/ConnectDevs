import styles from "../apex-strike.module.css";

const WHOP_URL = "https://whop.com/apex-strike-pro/apex-strike-pro-97/";

const STEPS = [
  {
    num: "01",
    icon: "🛒",
    title: "Purchase on Whop",
    desc: "Choose your plan and complete checkout securely on Whop. Instant access — no waiting.",
  },
  {
    num: "02",
    icon: "📂",
    title: "Download the Script",
    desc: "After purchase, head to your Whop dashboard. The Pine Script file (.txt) is available for immediate download.",
  },
  {
    num: "03",
    icon: "📋",
    title: "Open TradingView & Pine Editor",
    desc: 'Open TradingView (free account works). Click "Pine Editor" at the bottom of your chart, then clear any default code.',
  },
  {
    num: "04",
    icon: "🚀",
    title: "Paste & Add to Chart",
    desc: 'Paste the full script into Pine Editor, click "Add to Chart", and Apex Strike Pro is live on your chart. Done.',
  },
];

export default function SetupGuide() {
  return (
    <section id="setup" className={styles.section}>
      <div className="container">
        <div className={styles.sectionLabel}>// SETUP</div>
        <div className={styles.sectionTitle}>
          GET STARTED IN{" "}
          <span className={styles.heroAccent}>4 STEPS</span>
        </div>
        <p className={styles.sectionDesc}>
          No TradingView premium required. Works on any free TradingView
          account. Purchase, download, paste — you&apos;re live in under 2
          minutes.
        </p>

        <div className={styles.setupGrid}>
          {STEPS.map((step) => (
            <div key={step.num} className={styles.setupCard}>
              <div className={styles.setupNum}>{step.num}</div>
              <div className={styles.setupIcon}>{step.icon}</div>
              <div className={styles.setupTitle}>{step.title}</div>
              <div className={styles.setupDesc}>{step.desc}</div>
            </div>
          ))}
        </div>

        <div className={styles.setupCta}>
          <a
            href={WHOP_URL}
            className={styles.btnPrimary}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Apex Strike Pro Now ⚡
          </a>
        </div>
      </div>
    </section>
  );
}
