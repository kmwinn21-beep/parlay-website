import AnimatedWord from "./AnimatedWord";

export default function Hero() {
  return (
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
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 lg:gap-10 mb-8">
            <h1 className="font-playfair text-6xl sm:text-7xl lg:text-8xl font-bold text-white leading-none tracking-tight">
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

            <div className="font-playfair text-6xl sm:text-7xl lg:text-8xl leading-none tracking-tight">
              <AnimatedWord />
            </div>
          </div>

          {/* Subhead */}
          <p className="font-inter text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            The conference relationship platform that turns every card scan,
            conversation, and follow-up into business results.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="https://app.useparlay.app/signup"
              className="w-full sm:w-auto font-inter font-semibold text-lg px-8 py-4 rounded-lg bg-brand-teal text-brand-charcoal hover:bg-brand-glow transition-colors duration-200"
            >
              Start Free Trial →
            </a>
            <a
              href="#how-it-works"
              className="w-full sm:w-auto font-inter font-medium text-lg px-8 py-4 rounded-lg border border-white/30 text-white hover:border-white/60 hover:bg-white/10 transition-colors duration-200"
            >
              See How It Works
            </a>
          </div>

          {/* Tagline */}
          <p className="font-inter text-sm text-white/40 tracking-widest uppercase">
            From Conversations to Follow-Through
          </p>
        </div>
      </div>

      {/* Gradient fade to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-light to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
}
