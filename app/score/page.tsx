import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScoreApp from "@/components/score/ScoreApp";

export const metadata: Metadata = {
  title: "Conference Audience Scorer — Parlay",
  description:
    "Upload your conference attendee list and find out how well the audience matches your ICP. Free, no account required.",
  openGraph: {
    title: "Conference Audience Scorer — Parlay",
    description:
      "Upload your conference attendee list and find out how well the audience matches your ICP. Free, no account required.",
    url: "https://useparlay.app/score",
    siteName: "Parlay",
    type: "website",
  },
};

export default function ScorePage() {
  return (
    <main className="min-h-screen bg-brand-light">
      <Nav />
      <ScoreApp />
      <Footer />
    </main>
  );
}
