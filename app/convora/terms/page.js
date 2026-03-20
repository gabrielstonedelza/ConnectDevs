import Link from "next/link";

export const metadata = { title: "Terms of Service — Convora | ConnectDevs" };

const S = { page: { fontFamily: "'Outfit',sans-serif", background: "#0B1622", color: "#F0ECE3", minHeight: "100vh", padding: "80px 24px 60px" }, wrap: { maxWidth: 700, margin: "0 auto" }, back: { color: "#8A9BB5", fontSize: 14, textDecoration: "none" }, h1: { fontFamily: "'Fraunces',serif", fontSize: 36, fontWeight: 800, marginTop: 24, marginBottom: 32 }, body: { fontSize: 15, lineHeight: 1.8, color: "#8A9BB5" }, h2: { fontSize: 20, fontWeight: 700, color: "#F0ECE3", marginTop: 32, marginBottom: 12 }, p: { marginBottom: 16 }, link: { color: "#E8A838" } };

export default function ConvoraTerms() {
  return (
    <main style={S.page}><div style={S.wrap}>
      <Link href="/convora" style={S.back}>← Back to Convora</Link>
      <h1 style={S.h1}>Terms of Service</h1>
      <div style={S.body}>
        <p style={S.p}><strong style={{ color: "#F0ECE3" }}>Last updated:</strong> March 2026</p>
        <h2 style={S.h2}>Acceptance of Terms</h2>
        <p style={S.p}>By downloading, installing, or using Convora (&quot;the App&quot;), you agree to these Terms. If you do not agree, do not use the App.</p>
        <h2 style={S.h2}>License</h2>
        <p style={S.p}>We grant you a limited, non-exclusive, non-transferable, revocable license to use the App for personal, non-commercial purposes. You may not copy, modify, distribute, sell, or lease any part of the App or its content.</p>
        <h2 style={S.h2}>Subscriptions &amp; Purchases</h2>
        <p style={S.p}>Convora offers in-app purchases: monthly subscriptions ($6.99/mo), annual subscriptions ($39.99/yr), and a lifetime purchase ($79.99). All payments are processed by Apple or Google. Subscriptions auto-renew unless canceled at least 24 hours before the end of the current billing period. Manage and cancel subscriptions in your device&apos;s App Store or Play Store settings.</p>
        <h2 style={S.h2}>Free Content</h2>
        <p style={S.p}>Week 1 (Days 1-7) is permanently free with no restrictions. No credit card or account is required to access free content.</p>
        <h2 style={S.h2}>Intellectual Property</h2>
        <p style={S.p}>All lesson content, frameworks, exercises, and materials in Convora are the intellectual property of ConnectDevs. You may not reproduce, distribute, or create derivative works without written permission.</p>
        <h2 style={S.h2}>Disclaimer</h2>
        <p style={S.p}>Convora is an educational tool. Results vary based on individual effort and practice. The App is provided &quot;as is&quot; without warranties of any kind, express or implied.</p>
        <h2 style={S.h2}>Limitation of Liability</h2>
        <p style={S.p}>ConnectDevs shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the App.</p>
        <h2 style={S.h2}>Contact</h2>
        <p style={S.p}>Questions? Contact <a href="mailto:support@connectdevs.dev" style={S.link}>support@connectdevs.dev</a></p>
      </div>
    </div></main>
  );
}
