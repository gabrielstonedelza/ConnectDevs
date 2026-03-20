import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", display: "swap" });

export const metadata = {
  title: "Convora — Master Communication in 28 Days | ConnectDevs",
  description: "Transform your communication skills with Convora. 28 days, 18+ proven frameworks, audio lessons in 5 languages, daily practice. Week 1 free. No sign-up. No data collection.",
  keywords: ["communication skills", "public speaking", "confidence", "leadership", "soft skills", "presentation skills", "negotiation", "social skills", "convora", "connectdevs"],
  openGraph: {
    title: "Convora — Master Communication in 28 Days",
    description: "18+ professional frameworks, audio in 5 languages, daily practice. Week 1 free. No accounts needed.",
    url: "https://connectdevs.dev/convora",
    siteName: "ConnectDevs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convora — Master Communication in 28 Days",
    description: "18+ frameworks, 5-language audio, daily practice. Week 1 free.",
  },
};

export default function ConvoraLayout({ children }) {
  return (
    <div className={outfit.variable}>
      <style dangerouslySetInnerHTML={{
        __html: `@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,600;9..144,800&display=swap');`,
      }} />
      {children}
    </div>
  );
}
