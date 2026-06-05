import type { Metadata } from "next";
import Nav from "@/components/Nav";
import ContactPage from "@/components/ContactPage";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact — Parlay",
  description:
    "Get in touch with the Parlay team. Questions about the product, pricing, or enterprise options.",
};

export default function Page() {
  return (
    <main style={{ position: "relative", background: "#223A5E", minHeight: "100vh" }}>
      {/* Network graph background — fixed so it stays visible while scrolling */}
      <svg
        aria-hidden="true"
        style={{ position: "fixed", inset: 0, width: "100%", height: "100%", opacity: 0.07, pointerEvents: "none", zIndex: 0 }}
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <line x1="200" y1="150" x2="450" y2="300" stroke="white" strokeWidth="1" />
        <line x1="450" y1="300" x2="700" y2="200" stroke="white" strokeWidth="1" />
        <line x1="700" y1="200" x2="900" y2="350" stroke="white" strokeWidth="1" />
        <line x1="450" y1="300" x2="350" y2="550" stroke="white" strokeWidth="1" />
        <line x1="350" y1="550" x2="600" y2="620" stroke="white" strokeWidth="1" />
        <line x1="600" y1="620" x2="850" y2="500" stroke="white" strokeWidth="1" />
        <line x1="900" y1="350" x2="850" y2="500" stroke="white" strokeWidth="1" />
        <line x1="700" y1="200" x2="600" y2="620" stroke="white" strokeWidth="0.5" />
        <line x1="100" y1="400" x2="350" y2="550" stroke="white" strokeWidth="1" />
        <line x1="100" y1="400" x2="200" y2="150" stroke="white" strokeWidth="0.5" />
        <line x1="1050" y1="200" x2="900" y2="350" stroke="white" strokeWidth="1" />
        <line x1="1050" y1="200" x2="1100" y2="500" stroke="white" strokeWidth="1" />
        <line x1="1100" y1="500" x2="850" y2="500" stroke="white" strokeWidth="1" />
        <line x1="150" y1="680" x2="350" y2="550" stroke="white" strokeWidth="1" />
        <line x1="150" y1="680" x2="600" y2="620" stroke="white" strokeWidth="0.5" />
        <circle cx="200" cy="150" r="5" fill="white" />
        <circle cx="450" cy="300" r="7" fill="white" />
        <circle cx="700" cy="200" r="6" fill="white" />
        <circle cx="900" cy="350" r="8" fill="white" />
        <circle cx="350" cy="550" r="6" fill="white" />
        <circle cx="600" cy="620" r="7" fill="white" />
        <circle cx="850" cy="500" r="5" fill="white" />
        <circle cx="100" cy="400" r="4" fill="white" />
        <circle cx="1050" cy="200" r="5" fill="white" />
        <circle cx="1100" cy="500" r="6" fill="white" />
        <circle cx="150" cy="680" r="4" fill="white" />
      </svg>

      <div style={{ position: "relative", zIndex: 1 }}>
        <Nav />
        <ContactPage />
        <Footer />
      </div>
    </main>
  );
}
