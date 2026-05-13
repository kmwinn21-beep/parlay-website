import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import TrialModalRoot from "@/components/TrialModalRoot";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Parlay - Conference Operating System for Revenue Teams",
  description:
    "Four scoring engines that give revenue leaders real visibility into whether their conference program is working — and exactly what to do about it. Built for events, sales, and marketing leadership.",
  metadataBase: new URL("https://useparlay.app"),
  openGraph: {
    title: "Parlay — Know Which Conferences Are Worth It. Before and After.",
    description:
      "Four scoring engines that give revenue leaders real visibility into whether their conference program is working — and exactly what to do about it. Built for events, sales, and marketing leadership.",
    url: "https://useparlay.app",
    siteName: "Parlay",
    type: "website",
  },
  twitter: {
    title: "Parlay — Know Which Conferences Are Worth It. Before and After.",
    description:
      "Four scoring engines that give revenue leaders real visibility into whether their conference program is working — and exactly what to do about it. Built for events, sales, and marketing leadership.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        {children}
        <TrialModalRoot />
      </body>
    </html>
  );
}
