import Link from "next/link";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/marketing/ProblemSection";
import VsCrmSection from "@/components/marketing/VsCrmSection";
import SolutionLoopSection from "@/components/marketing/SolutionLoopSection";
import FeaturePillarsSection from "@/components/marketing/FeaturePillarsSection";
import CardScanSection from "@/components/marketing/CardScanSection";
import CommandCenterSection from "@/components/marketing/CommandCenterSection";
import RelationshipIntelSection from "@/components/marketing/RelationshipIntelSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <ProblemSection />
      <VsCrmSection />
      <SolutionLoopSection />
      <FeaturePillarsSection />
      <CardScanSection />
      <CommandCenterSection />
      <RelationshipIntelSection />
      <section id="pricing" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-inter text-lg text-brand-steel mb-6">
            Plans starting at $299/month. No per-seat pricing. Ever.
          </p>
          <Link
            href="/pricing"
            className="font-inter font-semibold text-base px-8 py-3 rounded-lg border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-colors duration-200 inline-block"
          >
            See pricing →
          </Link>
        </div>
      </section>
      <CtaBanner />
      <Footer />
    </main>
  );
}
