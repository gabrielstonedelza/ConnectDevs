"use client";

import {
  Navbar, Hero, FrameworkMarquee, LanguageShowcase,
  Curriculum, Features, TestimonialsSection, PrivacyBanner,
  PricingSection, FaqSection, FinalCta, Footer,
} from "@/components/convora/Sections";
import styles from "@/components/convora/convora.module.css";

export default function ConvoraPage() {
  return (
    <main className={`${styles.page} ${styles.grain}`}>
      <Navbar />
      <Hero />
      <FrameworkMarquee />
      <LanguageShowcase />
      <Curriculum />
      <Features />
      <TestimonialsSection />
      <PrivacyBanner />
      <PricingSection />
      <FaqSection />
      <FinalCta />
      <Footer />
    </main>
  );
}
