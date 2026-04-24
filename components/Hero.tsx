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
            Capture conversations in the moment, know exactly who talked to who, and
            turn conference interactions into real follow-through—without CRM drag.
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
          <p className="font-inter text-sm text-white/40 tracking-widest uppercase mb-10">
            From Conversations to Follow-Through
          </p>

          {/* Dashboard teaser */}
          <div className="relative mx-auto" style={{ maxWidth: "860px" }}>
            {/* Fade overlay cropping the bottom edge */}
            <div
              className="absolute bottom-0 left-0 right-0 pointer-events-none"
              style={{
                height: "120px",
                background: "linear-gradient(to bottom, transparent, #223A5E)",
                zIndex: 2,
              }}
              aria-hidden="true"
            />

            {/* Mock card */}
            <div
              style={{
                background: "#0f2035",
                borderRadius: "12px 12px 0 0",
                borderTop: "1px solid rgba(255,255,255,0.12)",
                borderLeft: "1px solid rgba(255,255,255,0.12)",
                borderRight: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              {/* Window bar */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5" aria-hidden="true">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <p className="font-inter text-white/60 text-xs">
                    NIC Spring 2026 — Nashville, TN
                  </p>
                </div>
                <span
                  className="font-inter text-xs text-brand-teal px-2.5 py-1 rounded-full"
                  style={{ background: "rgba(52,211,153,0.15)" }}
                >
                  9 reps · live
                </span>
              </div>

              {/* Tab row */}
              <div className="flex gap-5 px-5 pt-3 pb-0 border-b border-white/10 overflow-x-auto">
                {[
                  { label: "Attendees", active: true },
                  { label: "Companies", active: false },
                  { label: "Meetings (36)", active: false },
                  { label: "Follow Ups", active: false },
                  { label: "Social", active: false },
                  { label: "Insights", active: false },
                ].map((tab) => (
                  <span
                    key={tab.label}
                    className={`font-inter text-xs whitespace-nowrap pb-3 ${
                      tab.active
                        ? "text-brand-teal border-b-2 border-brand-teal"
                        : "text-white/50"
                    }`}
                  >
                    {tab.label}
                  </span>
                ))}
              </div>

              {/* Stat row */}
              <div className="grid grid-cols-3 border-b border-white/10">
                {[
                  { value: "2,324", label: "Attendees" },
                  { value: "61", label: "ICP companies" },
                  { value: "36", label: "Meetings booked" },
                ].map((stat, i) => (
                  <div
                    key={stat.label}
                    className={`px-5 py-4 ${i < 2 ? "border-r border-white/10" : ""}`}
                  >
                    <p className="font-inter text-white font-semibold text-lg text-left">
                      {stat.value}
                    </p>
                    <p className="font-inter text-white/40 text-xs mt-0.5 text-left">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Attendee rows */}
              <div>
                {[
                  {
                    initials: "CB",
                    name: "Cameron Bell",
                    role: "VP of Investments",
                    company: "NHI",
                    type: "Capital",
                    status: "Meeting held",
                    statusClass: "text-brand-teal",
                    statusBg: "rgba(52,211,153,0.15)",
                  },
                  {
                    initials: "SO",
                    name: "Sarah Okonkwo",
                    role: "Director of Ops",
                    company: "Sunrise Senior Living",
                    type: "Own/Op",
                    status: "Follow-up due",
                    statusClass: "text-amber-400",
                    statusBg: "rgba(251,191,36,0.15)",
                  },
                  {
                    initials: "JM",
                    name: "James Mullen",
                    role: "President & CEO",
                    company: "Sabra Health Care REIT",
                    type: "Capital",
                    status: "New contact",
                    statusClass: "text-brand-teal",
                    statusBg: "rgba(52,211,153,0.15)",
                  },
                ].map((row) => (
                  <div
                    key={row.name}
                    className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06] last:border-b-0"
                  >
                    <div className="flex items-center gap-3 text-left">
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: "#3A506B" }}
                      >
                        <span className="font-inter text-xs text-white font-semibold">
                          {row.initials}
                        </span>
                      </div>
                      <div>
                        <p className="font-inter text-white text-sm font-semibold">
                          {row.name}
                        </p>
                        <p className="font-inter text-white/45 text-xs">
                          {row.role} · {row.company}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="font-inter text-xs text-white/40 px-2 py-0.5 border border-white/10 rounded">
                        {row.type}
                      </span>
                      <span
                        className={`font-inter text-xs px-2.5 py-1 rounded-full ${row.statusClass}`}
                        style={{ background: row.statusBg }}
                      >
                        {row.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
