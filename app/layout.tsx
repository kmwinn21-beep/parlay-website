import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

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
  title: "Parlay — From Conversations to Follow-Through",
  description:
    "The conference relationship platform that turns every card scan, conversation, and follow-up into business results.",
  metadataBase: new URL("https://useparlay.app"),
  openGraph: {
    title: "Parlay — From Conversations to Follow-Through",
    description:
      "The conference relationship platform that turns every card scan, conversation, and follow-up into business results.",
    url: "https://useparlay.app",
    siteName: "Parlay",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
