import styles from "../apex-strike.module.css";

const WHOP_URL = "https://whop.com/apex-strike-pro/apex-strike-pro-97/";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>APEX STRIKE PRO</div>
          <div className={styles.footerLinks}>
            <a href="#engine" className={styles.footerLink}>How It Works</a>
            <a href="#features" className={styles.footerLink}>Features</a>
            <a href="#pricing" className={styles.footerLink}>Pricing</a>
            <a
              href={WHOP_URL}
              className={styles.footerLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Whop
            </a>
          </div>
        </div>
        <div className={styles.footerCopy}>
          © {new Date().getFullYear()} Apex Strike Pro by ConnectDevs. All rights reserved.
        </div>
        <div className={styles.footerDisclaimer}>
          Trading futures involves substantial risk of loss and is not suitable for all investors.
          Past performance is not indicative of future results. Apex Strike Pro is a technical
          analysis tool and does not constitute financial advice, investment recommendations, or a
          solicitation to trade. Always conduct your own research and consult a licensed financial
          advisor before making trading decisions. You are solely responsible for your trading activity.
        </div>
      </div>
    </footer>
  );
}
