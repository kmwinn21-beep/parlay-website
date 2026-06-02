"use client";

export default function CtaBanner() {
  return (
    <section className="bg-brand-primary py-24 relative overflow-hidden">
      {/* Subtle teal glow */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-brand-teal/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-6">
          Don&apos;t just run your next conference. Execute it.
        </h2>
        <p className="font-inter text-lg text-white/70 mb-10 leading-relaxed">
          Parlay gives your team the structure to plan smarter, execute better, and <span className="text-brand-teal font-semibold">MEASURE</span> what actually moved the needle.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event("parlay:open-trial"))}
            className="w-full sm:w-auto font-inter font-semibold text-lg px-10 py-4 rounded-lg bg-brand-teal text-brand-charcoal hover:bg-brand-glow transition-colors duration-200"
          >
            Start Free Trial →
          </button>
          <a
            href="/pricing"
            className="w-full sm:w-auto font-inter font-medium text-lg px-10 py-4 rounded-lg border border-white/30 text-white hover:border-white/60 hover:bg-white/10 transition-colors duration-200"
          >
            See Pricing
          </a>
        </div>

        <p className="mt-8 font-inter text-sm text-white/40">
          From Conversations to Follow-Through
        </p>
      </div>
    </section>
  );
}
