import Link from "next/link";

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
          Your competitors are at the same conferences you are.
        </h2>
        <p className="font-inter text-lg text-white/70 mb-10 leading-relaxed">
          The question isn&apos;t whether to attend. It&apos;s whether your team arrives with a targeting strategy, executes with accountability, and leaves knowing what worked — and what didn&apos;t. Most teams don&apos;t. Start your free trial and find out what your conference program is actually worth.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/signup?plan=professional"
            className="w-full sm:w-auto font-inter font-semibold text-lg px-10 py-4 rounded-lg bg-brand-teal text-brand-charcoal hover:bg-brand-glow transition-colors duration-200"
          >
            Start Free Trial →
          </Link>
          <a
            href="https://app.useparlay.app/demo"
            className="w-full sm:w-auto font-inter font-medium text-lg px-10 py-4 rounded-lg border border-white/30 text-white hover:border-white/60 hover:bg-white/10 transition-colors duration-200"
          >
            Book a Demo
          </a>
        </div>

        <p className="mt-8 font-inter text-sm text-white/40">
          From Conversations to Follow-Through
        </p>
      </div>
    </section>
  );
}
