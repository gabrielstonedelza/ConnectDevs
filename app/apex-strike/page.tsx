import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TickerStrip from "./components/TickerStrip";
import PhaseEngine from "./components/PhaseEngine";
import Features from "./components/Features";
import DashboardPreview from "./components/DashboardPreview";
import Markets from "./components/Markets";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import styles from "./apex-strike.module.css";

const WHOP_URL = "https://whop.com/apex-strike-pro/";

export default function ApexStrikePage() {
  return (
    <>
      <div className="grid-bg" />
      <Navbar />
      <Hero />
      <TickerStrip />
      <PhaseEngine />
      <Features />
      <DashboardPreview />
      <Markets />
      <Pricing />
      <FAQ />

      {/* ═══ FINAL CTA ═══ */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.sectionTitle}>
            READY TO TRADE
            <br />
            WITH <span className={styles.heroAccent}>PRECISION?</span>
          </div>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "1.1rem",
              marginBottom: "40px",
              fontWeight: 300,
            }}
          >
            Join traders using the 4-phase engine to find high-probability entries.
          </p>
          <a
            href={WHOP_URL}
            className={styles.btnPrimary}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "1.1rem", padding: "18px 48px" }}
          >
            Get Apex Strike Pro ⚡
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
