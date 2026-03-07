"use client";

import Link from "next/link";
import styles from "../apex-strike.module.css";

const WHOP_URL = "https://whop.com/apex-strike-pro/";

const NAV_ITEMS = [
  { label: "The Engine", href: "#engine" },
  { label: "Features", href: "#features" },
  { label: "Markets", href: "#markets" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className="container">
        <div className={styles.navInner}>
          <Link href="/apex-strike" className={styles.navBrand}>
            APEX STRIKE PRO
          </Link>
          <div className={styles.navLinks}>
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} className={styles.navLink}>
                {item.label}
              </a>
            ))}
            <a
              href={WHOP_URL}
              className={`${styles.navLink} ${styles.navCta}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Access →
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
