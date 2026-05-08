"use client";

import { useState } from "react";
import Link from "next/link";
import AnimatedWord from "./AnimatedWord";
import EffectivenessHeroMock from "./EffectivenessHeroMock";
import DemoModal from "./DemoModal";

export default function Hero() {
  const [showDemoModal, setShowDemoModal] = useState(false);

  return (
    <>
    <section className="relative min-h-screen bg-brand-primary flex items-center overflow-hidden">
      {/* Network graph background */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {/* Connection lines */}
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
        {/* Node circles */}
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

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40">
        <div className="text-center">
          {/* Split headline */}
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-0 mb-8 md:w-fit md:mx-auto">
            <h1 className="font-playfair text-6xl sm:text-7xl lg:text-8xl font-bold text-white leading-none tracking-tight md:pr-8 lg:pr-12">
              Parlay
            </h1>

            {/* Vertical divider — desktop only */}
            <div
              className="hidden md:block self-stretch w-px bg-white/30"
              aria-hidden="true"
            />
            {/* Horizontal divider — mobile */}
            <div
              className="md:hidden w-16 h-px bg-white/30"
              aria-hidden="true"
            />

            <div className="font-playfair text-6xl sm:text-7xl lg:text-8xl leading-none tracking-tight md:pl-8 lg:pl-12">
              <div style={{ position: "relative" }} className="text-center md:text-left">
                <span aria-hidden="true" style={{ visibility: "hidden", userSelect: "none", display: "block" }}>
                  Conversations
                </span>
                <AnimatedWord />
              </div>
            </div>
          </div>

          {/* Subhead */}
          <p className="font-inter text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
           The conference execution and intelligence platform built for revenue teams, by revenue teams. Real scoring. Real accountability. Real visibility into what&apos;s working...and what&apos;s not.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="/signup?plan=professional"
              className="w-full sm:w-auto font-inter font-semibold text-lg px-8 py-4 rounded-lg bg-brand-teal text-brand-charcoal hover:bg-brand-glow transition-colors duration-200"
            >
              Start Free Trial →
            </Link>
            <button
              type="button"
              onClick={() => setShowDemoModal(true)}
              className="w-full sm:w-auto font-inter font-medium text-lg px-8 py-4 rounded-lg border border-white/30 text-white hover:border-white/60 hover:bg-white/10 transition-colors duration-200"
            >
              Explore a Live Demo
            </button>
          </div>

          {/* Tagline */}
          <p className="font-inter text-sm text-white/40 tracking-widest uppercase mb-10">
            From Conversations to Follow-Through
          </p>

          {/* Dashboard teaser */}
          <div className="relative mx-auto" style={{ maxWidth: "1100px" }}>
            {/* Fade overlay — crops bottom of card */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "110px",
                background: "linear-gradient(to bottom, transparent, #223A5E)",
                zIndex: 3,
                pointerEvents: "none",
              }}
            />
            <EffectivenessHeroMock />
          </div>

        </div>
      </div>
    </section>

    {showDemoModal && <DemoModal onClose={() => setShowDemoModal(false)} />}
    </>
  );
}
