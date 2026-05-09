import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PricingPage from "@/components/PricingPage";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pricing — Parlay",
  description: "Unlimited users, unlimited conferences, unlimited attendees on every plan. Find the right depth of intelligence for your conference program.",
};

export default function Page() {
  return (
    <main>
      <Nav />
      <PricingPage />
      <Footer />
    </main>
  );
}
