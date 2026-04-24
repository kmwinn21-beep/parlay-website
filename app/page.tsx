import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/marketing/ProblemSection";
import VsCrmSection from "@/components/marketing/VsCrmSection";
import SolutionLoopSection from "@/components/marketing/SolutionLoopSection";
import HowItWorks from "@/components/HowItWorks";
import FeaturePillarsSection from "@/components/marketing/FeaturePillarsSection";
import CardScanSection from "@/components/marketing/CardScanSection";
import CommandCenterSection from "@/components/marketing/CommandCenterSection";
import RelationshipIntelSection from "@/components/marketing/RelationshipIntelSection";
import Pricing from "@/components/Pricing";
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
      <HowItWorks />
      <FeaturePillarsSection />
      <CardScanSection />
      <CommandCenterSection />
      <RelationshipIntelSection />
      <Pricing />
      <CtaBanner />
      <Footer />
    </main>
  );
}
