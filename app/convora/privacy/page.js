import Link from "next/link";

export const metadata = { title: "Privacy Policy — Convora | ConnectDevs" };

const S = { page: { fontFamily: "'Outfit',sans-serif", background: "#0B1622", color: "#F0ECE3", minHeight: "100vh", padding: "80px 24px 60px" }, wrap: { maxWidth: 700, margin: "0 auto" }, back: { color: "#8A9BB5", fontSize: 14, textDecoration: "none" }, h1: { fontFamily: "'Fraunces',serif", fontSize: 36, fontWeight: 800, marginTop: 24, marginBottom: 32 }, body: { fontSize: 15, lineHeight: 1.8, color: "#8A9BB5" }, h2: { fontSize: 20, fontWeight: 700, color: "#F0ECE3", marginTop: 32, marginBottom: 12 }, p: { marginBottom: 16 }, strong: { color: "#F0ECE3" }, link: { color: "#E8A838" } };

export default function ConvoraPrivacy() {
  return (
    <main style={S.page}><div style={S.wrap}>
      <Link href="/convora" style={S.back}>← Back to Convora</Link>
      <h1 style={S.h1}>Privacy Policy</h1>
      <div style={S.body}>
        <p style={S.p}><strong style={S.strong}>Last updated:</strong> March 2026</p>
        <h2 style={S.h2}>What We Collect</h2>
        <p style={S.p}>Nothing. Convora stores your lesson progress and language preference locally on your device using SharedPreferences. We do not collect, transmit, or store any personal information on external servers.</p>
        <h2 style={S.h2}>What We Do NOT Collect</h2>
        <p style={S.p}>We do not collect your name, email address, location, contacts, photos, usage analytics, or any other personal data. We do not use third-party analytics, tracking, or advertising services. We do not display ads.</p>
        <h2 style={S.h2}>Accounts &amp; Sign-Up</h2>
        <p style={S.p}>Convora does not require any account creation, sign-up, or login. There is no authentication system. The app works immediately after download.</p>
        <h2 style={S.h2}>Audio / Text-to-Speech</h2>
        <p style={S.p}>Convora uses your device&apos;s built-in Text-to-Speech engine to narrate lessons in your chosen language. All audio processing happens entirely on your device. No audio data is sent to any server.</p>
        <h2 style={S.h2}>Notifications</h2>
        <p style={S.p}>Daily lesson reminders are scheduled locally on your device using the system notification scheduler. No notification data is sent to any external server. You can disable notifications at any time in the app settings or your device settings.</p>
        <h2 style={S.h2}>In-App Purchases</h2>
        <p style={S.p}>All payment processing is handled entirely by Apple (App Store) or Google (Google Play). We do not have access to your payment information, credit card details, or billing address.</p>
        <h2 style={S.h2}>Children&apos;s Privacy</h2>
        <p style={S.p}>Convora does not knowingly collect any data from anyone, including children under 13. Since we collect no data at all, we are compliant with COPPA and similar regulations.</p>
        <h2 style={S.h2}>Changes to This Policy</h2>
        <p style={S.p}>If we ever change our privacy practices, we will update this page. Since we don&apos;t collect data now and have no plans to, changes are unlikely.</p>
        <h2 style={S.h2}>Contact</h2>
        <p style={S.p}>Privacy questions? Contact <a href="mailto:support@connectdevs.dev" style={S.link}>support@connectdevs.dev</a></p>
      </div>
    </div></main>
  );
}
