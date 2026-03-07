import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ConnectDevs — Developer & Trading Tools",
  description:
    "Professional developer tools and trading indicators by ConnectDevs.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
