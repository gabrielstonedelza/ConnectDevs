"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FadeIn, useScrollY } from "./animations";
import {
  CONVORA_THEME as t,
  WEEKS, FRAMEWORKS, LANGUAGES, FEATURES,
  TESTIMONIALS, PRICING, FAQS, STORE_LINKS,
} from "./constants";
import styles from "./convora.module.css";

// ═══════════════════════════════════════
//  NAVBAR
// ═══════════════════════════════════════
export function Navbar() {
  const scrollY = useScrollY();
  const scrolled = scrollY > 50;
  const [menuOpen, setMenuOpen] = useState(false);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className={styles.nav} style={{
      background: scrolled || menuOpen ? `${t.bg}EE` : "transparent",
      backdropFilter: scrolled || menuOpen ? "blur(20px)" : "none",
      borderBottom: scrolled ? `1px solid ${t.surfaceLight}` : "none",
    }}>
      <div className={styles.navInner}>
        <a href="/convora" className={styles.logo}>
          <div className={styles.logoIcon}>C</div>
          <span className={styles.logoText}>Conv<span style={{ color: t.accent }}>ora</span></span>
        </a>
        <div className={styles.navLinks}>
          {["Curriculum", "Features", "Pricing"].map(s => (
            <a key={s} href={`#${s.toLowerCase()}`} className={styles.navLink}>{s}</a>
          ))}
          <a href="#pricing" className={`${styles.ctaBtn} ${styles.ctaPrimary} ${styles.ctaSmall}`}>Download Free</a>
        </div>
        <button className={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={styles.menuBar} style={{ transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
          <span className={styles.menuBar} style={{ opacity: menuOpen ? 0 : 1 }} />
          <span className={styles.menuBar} style={{ transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
        </button>
      </div>
      <div className={styles.mobileMenu} style={{ maxHeight: menuOpen ? "300px" : "0", opacity: menuOpen ? 1 : 0 }}>
        {["Curriculum", "Features", "Pricing"].map(s => (
          <a key={s} href={`#${s.toLowerCase()}`} className={styles.mobileLink} onClick={handleLinkClick}>{s}</a>
        ))}
        <a href="#pricing" className={`${styles.ctaBtn} ${styles.ctaPrimary} ${styles.ctaSmall} ${styles.mobileCtaBtn}`} onClick={handleLinkClick}>Download Free</a>
      </div>
    </nav>
  );
}

// ═══════════════════════════════════════
//  HERO
// ═══════════════════════════════════════
export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroGlow} />
      <div className={styles.heroOrbit1} />
      <div className={styles.heroOrbit2} />

      <FadeIn>
        <div className={styles.heroBadge}>
          <span className={styles.heroBadgeDot} />
          Week 1 completely free · No sign-up required
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h1 className={styles.heroTitle}>
          Speak with<br />
          <span className={styles.heroAccent}>confidence.</span><br />
          Lead with clarity.
        </h1>
      </FadeIn>

      <FadeIn delay={0.2}>
        <p className={styles.heroSub}>
          Master communication in 28 days with 18+ professional frameworks,
          audio lessons in 5 languages, and daily practice. No accounts. No data collection.
        </p>
      </FadeIn>

      <FadeIn delay={0.3}>
        <div className={styles.heroCtas}>
          <a href={STORE_LINKS.appStore} className={`${styles.ctaBtn} ${styles.ctaPrimary}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            App Store
          </a>
          <a href={STORE_LINKS.playStore} className={`${styles.ctaBtn} ${styles.ctaPrimary}`}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302-2.302 2.302-2.698-2.302 2.698-2.302zM5.864 2.658L16.8 9.49l-2.302 2.302-8.634-8.634z"/></svg>
            Google Play
          </a>
          <a href="#curriculum" className={`${styles.ctaBtn} ${styles.ctaSecondary}`}>See curriculum</a>
        </div>
      </FadeIn>

      <FadeIn delay={0.5}>
        <div className={styles.heroStats}>
          {[["28", "Daily Lessons"], ["18+", "Frameworks"], ["5", "Languages"], ["0", "Data Collected"]].map(([v, l]) => (
            <div key={l} className={styles.heroStat}>
              <div className={styles.heroStatVal}>{v}</div>
              <div className={styles.heroStatLbl}>{l}</div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

// ═══════════════════════════════════════
//  FRAMEWORK MARQUEE
// ═══════════════════════════════════════
export function FrameworkMarquee() {
  const d = [...FRAMEWORKS, ...FRAMEWORKS];
  return (
    <div className={styles.marqueeWrap}>
      <div className={styles.marqueeTrack}>
        {d.map((f, i) => <span key={i} className={styles.marqueeChip}>{f}</span>)}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════
//  LANGUAGE SHOWCASE (NEW)
// ═══════════════════════════════════════
export function LanguageShowcase() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive(p => (p + 1) % LANGUAGES.length), 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.section} style={{ paddingBottom: 60 }}>
      <FadeIn>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionLabel}>Global by Default</div>
          <h2 className={styles.sectionTitle}>
            Listen in your language.
          </h2>
          <p className={styles.sectionSub}>
            Every lesson narrated in 5 languages. Preview each voice, switch anytime. All on-device — zero data leaves your phone.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className={styles.langShowcase}>
          {/* Animated language cards */}
          <div className={styles.langCards}>
            {LANGUAGES.map((lang, i) => (
              <div
                key={i}
                className={styles.langCard}
                onClick={() => setActive(i)}
                style={{
                  background: i === active ? `${t.accent}12` : t.surface,
                  borderColor: i === active ? `${t.accent}40` : t.surfaceLight,
                  transform: i === active ? "scale(1.05)" : "scale(1)",
                }}
              >
                <span className={styles.langFlag}>{lang.flag}</span>
                <div>
                  <div className={styles.langName} style={{ color: i === active ? t.accent : t.text1 }}>{lang.name}</div>
                  <div className={styles.langNative}>{lang.native}</div>
                </div>
                {i === active && (
                  <div className={styles.langPlaying}>
                    <span /><span /><span />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mock audio player */}
          <div className={styles.langPlayer}>
            <div className={styles.langPlayerBtn}>▶</div>
            <div className={styles.langPlayerInfo}>
              <div className={styles.langPlayerTitle}>Day 1: The Power of First Impressions</div>
              <div className={styles.langPlayerMeta}>{LANGUAGES[active].flag} {LANGUAGES[active].name} · 12 min</div>
            </div>
            <div className={styles.langPlayerSwitch}>{LANGUAGES[active].flag} ▾</div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

// ═══════════════════════════════════════
//  CURRICULUM
// ═══════════════════════════════════════
export function Curriculum() {
  const [hovered, setHovered] = useState(null);
  return (
    <section id="curriculum" className={styles.section}>
      <FadeIn>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionLabel}>The Curriculum</div>
          <h2 className={styles.sectionTitle}>4 weeks. 28 days.<br />Complete transformation.</h2>
        </div>
      </FadeIn>
      <div className={styles.weekGrid}>
        {WEEKS.map((w, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className={styles.weekCard}
              onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}
              style={{
                background: hovered === i ? `${w.color}12` : t.surface,
                borderColor: hovered === i ? `${w.color}40` : t.surfaceLight,
                transform: hovered === i ? "translateY(-6px)" : "none",
              }}>
              {w.free && <div className={styles.weekBadge} style={{ background: `${w.color}20`, color: w.color }}>FREE</div>}
              <div className={styles.weekNum} style={{ background: `${w.color}15`, borderColor: `${w.color}25`, color: w.color }}>{w.num}</div>
              <h3 className={styles.weekTitle}>{w.title}</h3>
              <p className={styles.weekDesc}>{w.desc}</p>
              <div className={styles.weekMeta}>7 lessons · ~14 min each</div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

// ═══════════════════════════════════════
//  FEATURES
// ═══════════════════════════════════════
export function Features() {
  return (
    <section id="features" className={styles.section}>
      <FadeIn>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionLabel}>Built Different</div>
          <h2 className={styles.sectionTitle}>Not another generic &ldquo;tips&rdquo; app.</h2>
        </div>
      </FadeIn>
      <div className={styles.featureGrid}>
        {FEATURES.map((f, i) => (
          <FadeIn key={i} delay={i * 0.08}>
            <div className={styles.featureCard}>
              <span className={styles.featureIcon}>{f.icon}</span>
              <h3 className={styles.featureTitle}>{f.title}</h3>
              <p className={styles.featureDesc}>{f.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

// ═══════════════════════════════════════
//  TESTIMONIALS
// ═══════════════════════════════════════
export function TestimonialsSection() {
  return (
    <section className={styles.section}>
      <FadeIn>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionLabel}>Real Results</div>
          <h2 className={styles.sectionTitle}>People are already transforming.</h2>
        </div>
      </FadeIn>
      <div className={styles.testimonialGrid}>
        {TESTIMONIALS.map((item, i) => (
          <FadeIn key={i} delay={i * 0.12}>
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialQuote}>&ldquo;</div>
              <p className={styles.testimonialText}>{item.text}</p>
              <div>
                <div className={styles.testimonialName}>{item.name}</div>
                <div className={styles.testimonialRole}>{item.role}</div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

// ═══════════════════════════════════════
//  PRIVACY BANNER (NEW — builds trust)
// ═══════════════════════════════════════
export function PrivacyBanner() {
  return (
    <section className={styles.section} style={{ paddingTop: 20, paddingBottom: 40 }}>
      <FadeIn>
        <div className={styles.privacyBanner}>
          <div className={styles.privacyIcon}>🔒</div>
          <div>
            <div className={styles.privacyTitle}>Zero data collection. Seriously.</div>
            <div className={styles.privacyDesc}>
              No accounts. No sign-up. No email. No tracking. No analytics. Your progress stays on your device.
              Payments handled by Apple &amp; Google. We never see your information.
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

// ═══════════════════════════════════════
//  PRICING
// ═══════════════════════════════════════
export function PricingSection() {
  return (
    <section id="pricing" className={styles.section} style={{ maxWidth: 900 }}>
      <FadeIn>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionLabel}>Simple Pricing</div>
          <h2 className={styles.sectionTitle}>Start free. Upgrade when ready.</h2>
          <p className={styles.sectionSub}>Week 1 is on us. No credit card. No account.</p>
        </div>
      </FadeIn>
      <div className={styles.pricingGrid}>
        {PRICING.map((p, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className={styles.pricingCard} style={{
              background: p.highlight ? `linear-gradient(160deg, ${t.accent}15, ${t.surface})` : t.surface,
              borderColor: p.highlight ? `${t.accent}40` : t.surfaceLight,
              boxShadow: p.highlight ? `0 12px 40px ${t.accent}15` : "none",
            }}>
              {p.badge && <div className={styles.pricingBadge}>{p.badge}</div>}
              <div className={styles.pricingName}>{p.name}</div>
              <div className={styles.pricingPrice}>
                <span className={styles.pricingAmount}>{p.price}</span>
                <span className={styles.pricingPeriod}>{p.period}</span>
              </div>
              {p.features.map((f, j) => (
                <div key={j} className={styles.pricingFeature}>
                  <div className={styles.pricingCheck} style={{
                    background: p.highlight ? `${t.accent}20` : t.surfaceLight,
                    color: p.highlight ? t.accent : t.text2,
                  }}>✓</div>
                  <span>{f}</span>
                </div>
              ))}
              <a href={STORE_LINKS.appStore} className={`${styles.ctaBtn} ${p.highlight ? styles.ctaPrimary : styles.ctaSecondary} ${styles.ctaFull}`}>
                {p.cta}
              </a>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

// ═══════════════════════════════════════
//  FAQ
// ═══════════════════════════════════════
export function FaqSection() {
  const [open, setOpen] = useState(null);
  return (
    <section className={styles.section} style={{ maxWidth: 700 }}>
      <FadeIn><h2 className={styles.sectionTitle} style={{ textAlign: "center", marginBottom: 40 }}>Questions?</h2></FadeIn>
      {FAQS.map((item, i) => (
        <FadeIn key={i} delay={i * 0.05}>
          <div className={styles.faqItem} onClick={() => setOpen(open === i ? null : i)}>
            <div className={styles.faqHeader}>
              <span className={styles.faqQuestion} style={{ color: open === i ? t.accent : t.text1 }}>{item.q}</span>
              <span className={styles.faqToggle} style={{ transform: open === i ? "rotate(45deg)" : "none" }}>+</span>
            </div>
            <div className={styles.faqAnswer} style={{ maxHeight: open === i ? 300 : 0 }}>
              <p className={styles.faqText}>{item.a}</p>
            </div>
          </div>
        </FadeIn>
      ))}
    </section>
  );
}

// ═══════════════════════════════════════
//  FINAL CTA
// ═══════════════════════════════════════
export function FinalCta() {
  return (
    <section className={styles.finalCta}>
      <FadeIn>
        <h2 className={styles.finalCtaTitle}>
          Your aura starts<br /><span style={{ color: t.accent }}>with your words.</span>
        </h2>
        <p className={styles.finalCtaSub}>28 days from now, you&apos;ll wish you started today.</p>
        <div className={styles.heroCtas}>
          <a href={STORE_LINKS.appStore} className={`${styles.ctaBtn} ${styles.ctaPrimary}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            App Store
          </a>
          <a href={STORE_LINKS.playStore} className={`${styles.ctaBtn} ${styles.ctaPrimary}`}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302-2.302 2.302-2.698-2.302 2.698-2.302zM5.864 2.658L16.8 9.49l-2.302 2.302-8.634-8.634z"/></svg>
            Google Play
          </a>
        </div>
      </FadeIn>
    </section>
  );
}

// ═══════════════════════════════════════
//  FOOTER
// ═══════════════════════════════════════
export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerBrand}>
          <div className={styles.footerLogoIcon}>C</div>
          <span className={styles.footerLogoText}>Convora</span>
          <span className={styles.footerBy}>by ConnectDevs</span>
        </div>
        <div className={styles.footerLinks}>
          <Link href="/convora/privacy">Privacy</Link>
          <Link href="/convora/terms">Terms</Link>
          <a href="mailto:support@connectdevs.dev">Support</a>
          <span>&copy; {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
