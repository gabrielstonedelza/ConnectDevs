"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./profile.module.css";

export default function Profile() {
  return (
    <div className={styles.page}>
      <div className="grid-bg" />

      {/* ── Home Button ── */}
      <Link href="/" className={styles.homeBtn}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Home
      </Link>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroInner}>
          <div className={styles.avatarWrap}>
            <div className={styles.avatarRing}>
              <Image
                src="/gabriel.png"
                alt="Gabriel Akwasi Asare"
                width={200}
                height={200}
                priority
                className={styles.avatar}
              />
            </div>
            <div className={styles.statusDot} />
          </div>

          <div className={styles.heroText}>
            <h1 className={styles.heroName}>
              GABRIEL{" "}
              <span className={styles.heroNameAccent}>AKWASI ASARE</span>
            </h1>

            <div className={styles.heroRoles}>
              <span className={styles.roleTagDev}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
                Founder, ConnectDevs
              </span>
              <span className={styles.roleTagSec}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                Security Engineer
              </span>
              <span className={styles.roleTagCert}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                CompTIA Security+
              </span>
            </div>

            <p className={styles.heroBio}>
              Founder of ConnectDevs — a security-focused development studio
              shipping products across encrypted communications, security
              tooling, and mobile apps. I build with Django, Next.js, and
              Flutter, with a deep focus on applied cryptography and
              zero-trust architecture. Security is a foundation, not a feature.
            </p>

            <div className={styles.heroLinks}>
              <a
                href="https://github.com/gabrielstonedelza"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.heroLink}
                aria-label="GitHub"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.heroLink}
                aria-label="LinkedIn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:gabrielstonedelza@gmail.com"
                className={styles.heroLink}
                aria-label="Email"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 7l-10 7L2 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.sectionInner}>
        <div className={styles.divider} />
      </div>

      {/* ── Skills ── */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <p className={styles.sectionLabel}>// what i build with</p>
          <h2 className={styles.sectionTitle}>TECHNICAL SKILLS</h2>

          <div className={styles.skillsGrid}>
            <div className={styles.skillCategory}>
              <div className={styles.skillCategoryIconBlue}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <h3 className={styles.skillCategoryTitle}>Frameworks & Languages</h3>
              <div className={styles.skillTags}>
                {["Next.js", "Django", "Flutter", "React", "TypeScript", "Python", "Dart"].map((s) => (
                  <span key={s} className={styles.skillTag}>{s}</span>
                ))}
              </div>
            </div>

            <div className={styles.skillCategory}>
              <div className={styles.skillCategoryIconGreen}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className={styles.skillCategoryTitle}>Security & Cryptography</h3>
              <div className={styles.skillTags}>
                {["Zero-Trust Architecture", "Applied Cryptography", "Zero-Knowledge Proofs", "Biometric Auth", "Threat Analysis", "Penetration Testing"].map((s) => (
                  <span key={s} className={styles.skillTag}>{s}</span>
                ))}
              </div>
            </div>

            <div className={styles.skillCategory}>
              <div className={styles.skillCategoryIconOrange}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3 className={styles.skillCategoryTitle}>Backend & Infrastructure</h3>
              <div className={styles.skillTags}>
                {["PostgreSQL", "REST APIs", "Firebase", "Docker", "Linux", "AWS"].map((s) => (
                  <span key={s} className={styles.skillTag}>{s}</span>
                ))}
              </div>
            </div>

            <div className={styles.skillCategory}>
              <div className={styles.skillCategoryIconCyan}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
                </svg>
              </div>
              <h3 className={styles.skillCategoryTitle}>Tools & Platforms</h3>
              <div className={styles.skillTags}>
                {["Git", "TradingView Pine Script", "Wireshark", "Burp Suite", "Static Analysis", "CI/CD"].map((s) => (
                  <span key={s} className={styles.skillTag}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.sectionInner}>
        <div className={styles.divider} />
      </div>

      {/* ── Projects ── */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <p className={styles.sectionLabel}>// what i&apos;ve shipped</p>
          <h2 className={styles.sectionTitle}>PRODUCTS</h2>

          <div className={styles.projectsGrid}>
            {/* IronSeal */}
            <div className={styles.projectCard}>
              <div className={styles.projectHeader}>
                <div className={styles.projectIconGreen}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0110 0v4" />
                  </svg>
                </div>
                <span className={styles.projectBadgeLive}>Live</span>
              </div>
              <h3 className={styles.projectTitle}>IronSeal</h3>
              <p className={styles.projectDesc}>
                Zero-knowledge encrypted messaging platform with
                biometric-gated decryption and tamper-triggered message
                destruction. End-to-end privacy by design.
              </p>
              <div className={styles.projectTech}>
                {["Zero-Knowledge", "Biometric Auth", "E2E Encryption", "Django"].map((t) => (
                  <span key={t} className={styles.projectTechTag}>{t}</span>
                ))}
              </div>
              <span className={styles.projectLink} style={{ color: "var(--accent-green)" }}>
                Shipped
              </span>
            </div>

            {/* Convora */}
            <div className={styles.projectCard}>
              <div className={styles.projectHeader}>
                <div className={styles.projectIconOrange}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                  </svg>
                </div>
                <span className={styles.projectBadgeLive}>Live on App Store</span>
              </div>
              <h3 className={styles.projectTitle}>Convora</h3>
              <p className={styles.projectDesc}>
                A 28-day communication mastery app. Designed to help users
                level up their interpersonal and professional communication
                skills through daily practice.
              </p>
              <div className={styles.projectTech}>
                {["Flutter", "Mobile", "UX Design"].map((t) => (
                  <span key={t} className={styles.projectTechTag}>{t}</span>
                ))}
              </div>
              <span className={styles.projectLink} style={{ color: "var(--accent-green)" }}>
                Live on App Store
              </span>
            </div>

            {/* Snag */}
            <div className={styles.projectCard}>
              <div className={styles.projectHeader}>
                <div className={styles.projectIconCyan}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                  </svg>
                </div>
                <span className={styles.projectBadgeBuilding}>In Development</span>
              </div>
              <h3 className={styles.projectTitle}>Snag</h3>
              <p className={styles.projectDesc}>
                AI-powered static analysis code review tool. Catches
                vulnerabilities, anti-patterns, and security issues before
                they reach production.
              </p>
              <div className={styles.projectTech}>
                {["AI/ML", "Static Analysis", "Code Review", "Python"].map((t) => (
                  <span key={t} className={styles.projectTechTag}>{t}</span>
                ))}
              </div>
              <a
                href="https://github.com/gabrielstonedelza"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                View on GitHub
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Apex Strike */}
            <div className={styles.projectCard}>
              <div className={styles.projectHeader}>
                <div className={styles.projectIconBlue}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                </div>
                <span className={styles.projectBadgeLive}>Live</span>
              </div>
              <h3 className={styles.projectTitle}>Apex Strike</h3>
              <p className={styles.projectDesc}>
                Precision 4-phase futures trading indicator for TradingView.
                Volume-confirmed entries with ATR-based risk management.
                No repaint, just precision.
              </p>
              <div className={styles.projectTech}>
                {["Pine Script", "TradingView", "Technical Analysis"].map((t) => (
                  <span key={t} className={styles.projectTechTag}>{t}</span>
                ))}
              </div>
              <Link href="/apex-strike" className={styles.projectLink}>
                View Project
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.sectionInner}>
        <div className={styles.divider} />
      </div>

      {/* ── Beyond Code ── */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <p className={styles.sectionLabel}>// beyond the code</p>
          <h2 className={styles.sectionTitle}>THE OTHER SIDE</h2>

          <div className={styles.beyondCard}>
            <div className={styles.beyondIcon}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18V5l12-2v13" />
                <circle cx="6" cy="18" r="3" />
                <circle cx="18" cy="16" r="3" />
              </svg>
            </div>
            <p className={styles.beyondText}>
              Also a musician with a wide vocal range. Creativity and
              engineering aren&apos;t separate skills — they&apos;re the same
              muscle applied differently.
            </p>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className={styles.footer}>
        <p className={styles.footerText}>
          &copy; {new Date().getFullYear()} ConnectDevs. Built by Gabriel Akwasi Asare.
        </p>
      </footer>
    </div>
  );
}
