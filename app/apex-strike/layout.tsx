import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apex Strike Pro — Precision Futures Trading Indicator | TradingView",
  description:
    "Professional 4-phase trend continuation indicator for futures trading on TradingView. Volume-confirmed entries with ATR-based risk management on ES, NQ, CL, GC.",
  keywords: [
    "futures trading indicator",
    "TradingView indicator",
    "ES futures",
    "NQ futures",
    "trading signals",
    "Pine Script",
    "trend continuation",
    "volume confirmation",
  ],
  openGraph: {
    title: "Apex Strike Pro — Precision Futures Indicator",
    description:
      "4-phase trend continuation engine with volume confirmation. Built for ES, NQ, CL, GC futures on TradingView.",
    type: "website",
    url: "https://connectdevs.dev/apex-strike",
  },
};

export default function ApexStrikeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
