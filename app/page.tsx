import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "32px",
        fontFamily: "'Outfit', sans-serif",
      }}
    >
      <div className="grid-bg" />
      <Image
        src="/connectdevs-logo.jpg"
        alt="ConnectDevs"
        width={400}
        height={267}
        priority
        style={{ borderRadius: "12px" }}
      />
      <p style={{ color: "#7D8BA3", fontSize: "1.1rem", marginTop: "-12px" }}>
        Developer &amp; Trading Tools
      </p>
      <Link
        href="/apex-strike"
        style={{
          background: "linear-gradient(135deg, #3B8EF5, #2E7AD9)",
          color: "#fff",
          padding: "14px 32px",
          borderRadius: "8px",
          fontWeight: 700,
          textDecoration: "none",
          fontSize: "0.95rem",
          boxShadow: "0 4px 20px rgba(59,142,245,0.3)",
        }}
      >
        Apex Strike Pro →
      </Link>
    </div>
  );
}
