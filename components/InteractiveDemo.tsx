"use client";

import { useState, useEffect, useCallback } from "react";

type Step = 0 | 1 | 2;

const STEPS = [
  { label: "Scan Card", shortLabel: "Scan" },
  { label: "Match Contact", shortLabel: "Match" },
  { label: "Confirm & Save", shortLabel: "Confirm" },
];

const AUTO_ADVANCE_MS = 3500;

// ── Step 0: Card scan screen ──────────────────────────────────────────────────
function ScanScreen({ active }: { active: boolean }) {
  return (
    <div className={`transition-all duration-500 ${active ? "opacity-100" : "opacity-0 absolute inset-0"}`}>
      <div className="p-4">
        <p className="font-inter text-xs text-white/60 mb-4 text-center tracking-wide">
          POINT CAMERA AT CARD
        </p>

        {/* Viewfinder */}
        <div className="relative rounded-xl overflow-hidden bg-brand-charcoal/60 aspect-[3/2] flex items-center justify-center">
          {/* Corner marks */}
          {["top-2 left-2", "top-2 right-2", "bottom-2 left-2", "bottom-2 right-2"].map((pos, i) => (
            <div key={i} className={`absolute ${pos} w-5 h-5 border-brand-teal border-2 rounded-sm`} />
          ))}

          {/* Simulated business card */}
          <div className="w-[85%] bg-white rounded-lg shadow-xl p-3 relative">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center text-white font-playfair font-bold text-sm shrink-0">
                SJ
              </div>
              <div>
                <p className="font-inter font-bold text-brand-charcoal text-sm">Sarah Johnson</p>
                <p className="font-inter text-brand-steel text-xs">VP of Sales · Acme Corp</p>
                <p className="font-inter text-brand-steel text-xs mt-1">sarah@acmecorp.com</p>
                <p className="font-inter text-brand-steel text-xs">+1 (415) 555-0192</p>
              </div>
            </div>
          </div>

          {/* Scanning line animation */}
          <div
            className="absolute left-4 right-4 h-0.5 bg-brand-teal/70"
            style={{
              animation: "scanLine 2s ease-in-out infinite",
              top: "50%",
            }}
          />
        </div>

        <style>{`
          @keyframes scanLine {
            0%, 100% { top: 25%; opacity: 0.9; }
            50% { top: 75%; opacity: 0.6; }
          }
        `}</style>

        <div className="mt-4 flex items-center justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
          <p className="font-inter text-xs text-white/70">Scanning…</p>
        </div>
      </div>
    </div>
  );
}

// ── Step 1: Match screen ──────────────────────────────────────────────────────
function MatchScreen({ active }: { active: boolean }) {
  return (
    <div className={`transition-all duration-500 ${active ? "opacity-100" : "opacity-0 absolute inset-0"}`}>
      <div className="p-4">
        <p className="font-inter text-xs text-white/60 mb-4 text-center tracking-wide">
          CONTACT DETECTED
        </p>

        {/* Extracted data card */}
        <div className="bg-white/10 rounded-xl p-4 border border-white/20">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-full bg-brand-primary border-2 border-brand-teal flex items-center justify-center text-white font-playfair font-bold">
              SJ
            </div>
            <div>
              <p className="font-inter font-semibold text-white">Sarah Johnson</p>
              <p className="font-inter text-xs text-brand-glow">VP of Sales · Acme Corp</p>
            </div>
            <div className="ml-auto">
              <span className="font-inter text-xs bg-brand-teal/20 text-brand-teal px-2 py-1 rounded-full border border-brand-teal/30">
                ✓ Matched
              </span>
            </div>
          </div>

          <div className="space-y-2 border-t border-white/10 pt-3">
            {[
              { label: "Email", value: "sarah@acmecorp.com" },
              { label: "Phone", value: "+1 (415) 555-0192" },
              { label: "LinkedIn", value: "linkedin.com/in/sarah-j" },
            ].map((row) => (
              <div key={row.label} className="flex items-center gap-2">
                <p className="font-inter text-xs text-white/50 w-14">{row.label}</p>
                <p className="font-inter text-xs text-white/90">{row.value}</p>
                <div className="ml-auto w-3 h-3 rounded-full bg-brand-teal/60 flex items-center justify-center">
                  <svg width="6" height="6" viewBox="0 0 6 6" fill="none">
                    <path d="M1 3l1.5 1.5L5 1.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 text-center">
          <p className="font-inter text-xs text-brand-glow/80">
            3 mutual connections found
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Step 2: Confirm & save screen ─────────────────────────────────────────────
function ConfirmScreen({ active }: { active: boolean }) {
  return (
    <div className={`transition-all duration-500 ${active ? "opacity-100" : "opacity-0 absolute inset-0"}`}>
      <div className="p-4">
        <p className="font-inter text-xs text-white/60 mb-4 text-center tracking-wide">
          ADD TO YOUR NETWORK
        </p>

        <div className="bg-white/10 rounded-xl p-4 border border-white/20 space-y-3">
          {/* Contact preview */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-primary border-2 border-brand-teal flex items-center justify-center text-white font-playfair font-bold text-sm">
              SJ
            </div>
            <div>
              <p className="font-inter font-semibold text-white text-sm">Sarah Johnson</p>
              <p className="font-inter text-xs text-brand-glow">Acme Corp</p>
            </div>
          </div>

          {/* Notes field */}
          <div className="bg-white/5 rounded-lg p-3 border border-white/10">
            <p className="font-inter text-xs text-white/50 mb-1">Conversation note</p>
            <p className="font-inter text-xs text-white/80 leading-relaxed">
              Met at SaaStr booth B12. Interested in team plan. Follow up after her board meeting.
            </p>
          </div>

          {/* Follow-up reminder */}
          <div className="flex items-center justify-between bg-brand-teal/10 rounded-lg p-3 border border-brand-teal/20">
            <div className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6" stroke="#34D399" strokeWidth="1.2" />
                <path d="M7 4v3l2 2" stroke="#34D399" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              <p className="font-inter text-xs text-brand-teal">Follow-up in 3 days</p>
            </div>
            <button className="font-inter text-xs text-white/50 hover:text-white/80">Edit</button>
          </div>

          {/* Save button */}
          <button className="w-full bg-brand-teal text-brand-charcoal font-inter font-semibold text-sm py-2.5 rounded-lg hover:bg-brand-glow transition-colors">
            Save to Parlay ✓
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Main demo component ────────────────────────────────────────────────────────
export default function InteractiveDemo() {
  const [step, setStep] = useState<Step>(0);
  const [paused, setPaused] = useState(false);

  const advance = useCallback(() => {
    setStep((s) => ((s + 1) % 3) as Step);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setTimeout(advance, AUTO_ADVANCE_MS);
    return () => clearTimeout(id);
  }, [step, paused, advance]);

  return (
    <section className="bg-brand-light py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: copy */}
          <div>
            <p className="font-inter text-sm font-semibold tracking-widest uppercase text-brand-teal mb-3">
              See It In Action
            </p>
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-brand-primary mb-6">
              Card to contact in under 5 seconds
            </h2>
            <p className="font-inter text-lg text-brand-steel leading-relaxed mb-8">
              Parlay&apos;s scanning flow is designed for speed. No app-switching, no manual entry. Scan, confirm, and you&apos;re back in conversation before the moment passes.
            </p>

            {/* Step indicators */}
            <div className="space-y-4">
              {STEPS.map((s, i) => (
                <button
                  key={s.label}
                  onClick={() => { setStep(i as Step); setPaused(true); }}
                  className={`flex items-center gap-4 w-full text-left p-3 rounded-xl transition-all duration-200 ${
                    step === i
                      ? "bg-white shadow-sm border border-brand-teal/30"
                      : "hover:bg-white/60"
                  }`}
                >
                  <span
                    className={`flex items-center justify-center w-8 h-8 rounded-full font-inter font-bold text-sm shrink-0 transition-colors ${
                      step === i
                        ? "bg-brand-teal text-brand-charcoal"
                        : "bg-brand-primary/10 text-brand-primary"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span
                    className={`font-inter font-medium transition-colors ${
                      step === i ? "text-brand-primary" : "text-brand-steel"
                    }`}
                  >
                    {s.label}
                  </span>
                </button>
              ))}
            </div>

            <button
              onClick={() => setPaused((p) => !p)}
              className="mt-6 font-inter text-sm text-brand-steel hover:text-brand-primary transition-colors flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                {paused ? (
                  <path d="M5 3l8 5-8 5V3z" fill="currentColor" />
                ) : (
                  <>
                    <rect x="3" y="3" width="3" height="10" rx="1" fill="currentColor" />
                    <rect x="10" y="3" width="3" height="10" rx="1" fill="currentColor" />
                  </>
                )}
              </svg>
              {paused ? "Resume auto-play" : "Pause auto-play"}
            </button>
          </div>

          {/* Right: phone mockup */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Phone shell */}
              <div className="w-64 bg-brand-charcoal rounded-[2.5rem] p-3 shadow-2xl ring-1 ring-white/10">
                {/* Notch */}
                <div className="w-20 h-5 bg-brand-charcoal rounded-b-xl mx-auto mb-1 relative z-10" />

                {/* Screen */}
                <div className="bg-brand-secondary rounded-[2rem] overflow-hidden min-h-[420px] relative">
                  {/* Status bar */}
                  <div className="flex items-center justify-between px-4 pt-3 pb-2">
                    <p className="font-inter text-xs text-white/60">9:41</p>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-2 border border-white/40 rounded-sm">
                        <div className="w-2 h-1 bg-brand-teal rounded-sm" />
                      </div>
                    </div>
                  </div>

                  {/* App header */}
                  <div className="px-4 pb-3 border-b border-white/10 flex items-center justify-between">
                    <p className="font-playfair text-white font-bold">Parlay</p>
                    <div className="w-6 h-6 rounded-full bg-brand-teal/20 flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <circle cx="6" cy="4" r="2" fill="#34D399" />
                        <path d="M2 10c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke="#34D399" strokeWidth="1.2" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>

                  {/* Step content — stacked, toggled by opacity */}
                  <div className="relative" style={{ minHeight: "340px" }}>
                    {step === 0 && <ScanScreen active={true} />}
                    {step === 1 && <MatchScreen active={true} />}
                    {step === 2 && <ConfirmScreen active={true} />}
                  </div>
                </div>
              </div>

              {/* Progress dots */}
              <div className="flex justify-center gap-2 mt-4">
                {STEPS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setStep(i as Step); setPaused(true); }}
                    className={`rounded-full transition-all duration-300 ${
                      step === i ? "w-6 h-2 bg-brand-teal" : "w-2 h-2 bg-brand-primary/30"
                    }`}
                    aria-label={`Go to step ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
