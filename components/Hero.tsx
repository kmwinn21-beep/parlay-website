import Link from "next/link";
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
            Four scoring engines that give events, sales, and marketing leaders something they&apos;ve never had before: real visibility into whether your conference program is working — and exactly what to do about it. The intelligence is what leaders buy. The ease of use is what makes it real.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="/signup?plan=professional"
              className="w-full sm:w-auto font-inter font-semibold text-lg px-8 py-4 rounded-lg bg-brand-teal text-brand-charcoal hover:bg-brand-glow transition-colors duration-200"
            >
              Start Free Trial →
            </Link>
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

          {/* Dashboard teaser — desktop */}
          <div className="hidden md:block">
          <div className="relative mx-auto" style={{ maxWidth: "900px" }}>
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

            {/* Card */}
            <div
              style={{
                background: "#111c2e",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "12px 12px 0 0",
                borderBottom: "none",
                overflow: "hidden",
                textAlign: "left",
              }}
            >
              {/* Layer 1 — Window chrome */}
              <div
                style={{
                  background: "#0d1828",
                  padding: "10px 14px",
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#ef4444", flexShrink: 0 }} />
                <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#f59e0b", flexShrink: 0 }} />
                <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#34D399", flexShrink: 0 }} />
              </div>

              {/* Layer 2 — Pre-conference review header */}
              <div
                style={{
                  background: "#1e3354",
                  padding: "12px 20px",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.4)", marginBottom: 4 }}>
                  PRE-CONFERENCE REVIEW
                </p>
                <p style={{ fontSize: 17, fontWeight: 600, color: "white", letterSpacing: "-0.01em" }}>
                  Conference Expo 2026
                </p>
              </div>

              {/* Layer 3 — Stat pills */}
              <div style={{ display: "flex", gap: 10, padding: "12px 20px", overflowX: "auto" }}>
                {[
                  { value: "2323", label: "Attendees" },
                  { value: "1062", label: "Companies" },
                  { value: "186",  label: "ICP" },
                  { value: "20",   label: "Targets" },
                  { value: "40",   label: "Meetings" },
                  { value: "21",   label: "Open Follow-ups" },
                ].map((pill) => (
                  <div
                    key={pill.label}
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: 10,
                      padding: "10px 18px",
                      textAlign: "center",
                      flexShrink: 0,
                    }}
                  >
                    <p style={{ fontSize: 20, fontWeight: 600, color: "white", lineHeight: 1 }}>{pill.value}</p>
                    <p style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", marginTop: 4 }}>{pill.label}</p>
                  </div>
                ))}
              </div>

              {/* Layer 4 — Tab navigation */}
              <div
                style={{
                  display: "flex",
                  gap: 20,
                  padding: "0 20px",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                  overflowX: "auto",
                }}
              >
                {["Landscape", "ICP Companies", "Meetings", "Social Events", "By Rep", "Relationships", "Conference Targets"].map((tab) => (
                  <span
                    key={tab}
                    style={{
                      fontSize: 12,
                      fontWeight: tab === "Landscape" ? 500 : 400,
                      color: tab === "Landscape" ? "#34D399" : "rgba(255,255,255,0.4)",
                      padding: "10px 0",
                      borderBottom: tab === "Landscape" ? "2px solid #34D399" : "2px solid transparent",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}
                  >
                    {tab}
                  </span>
                ))}
              </div>

              {/* Layer 5 — Landscape body: 3-column grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "160px 1fr 200px",
                  minHeight: 260,
                }}
              >
                {/* Left — summary stats */}
                <div
                  style={{
                    padding: "20px 16px",
                    borderRight: "1px solid rgba(255,255,255,0.06)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 24,
                  }}
                >
                  {[
                    { value: "2323", label: "Total Attendees" },
                    { value: "1062", label: "Companies" },
                    { value: "186",  label: "ICP Companies" },
                  ].map((s) => (
                    <div key={s.label}>
                      <p style={{ fontSize: 28, fontWeight: 600, color: "white", lineHeight: 1 }}>{s.value}</p>
                      <p style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", marginTop: 4 }}>{s.label}</p>
                    </div>
                  ))}
                </div>

                {/* Center — breakdown bars */}
                <div
                  style={{
                    padding: "16px 20px",
                    borderRight: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 10 }}>
                    Company Type Breakdown
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 7, marginBottom: 20 }}>
                    {[
                      { label: "Capital",     pct: 65 },
                      { label: "Operator",    pct: 51 },
                      { label: "Vendor",      pct: 37 },
                      { label: "Other",       pct: 35 },
                      { label: "Unknown",     pct: 28 },
                      { label: "Association", pct: 2  },
                    ].map((row) => (
                      <div key={row.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", minWidth: 72 }}>{row.label}</span>
                        <div style={{ flex: 1, height: 5, background: "rgba(255,255,255,0.07)", borderRadius: 3, overflow: "hidden" }}>
                          <div style={{ width: `${row.pct}%`, height: "100%", background: "#223A5E", borderRadius: 3 }} />
                        </div>
                      </div>
                    ))}
                  </div>

                  <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 10 }}>
                    Seniority Breakdown
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                    {[
                      { label: "Manager",  pct: 100, opacity: 1    },
                      { label: "VP/SVP",   pct: 77,  opacity: 0.8  },
                      { label: "C-Suite",  pct: 38,  opacity: 0.65 },
                      { label: "Director", pct: 20,  opacity: 0.5  },
                    ].map((row) => (
                      <div key={row.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", minWidth: 72 }}>{row.label}</span>
                        <div style={{ flex: 1, height: 8, background: "rgba(255,255,255,0.06)", borderRadius: 4, overflow: "hidden" }}>
                          <div style={{ width: `${row.pct}%`, height: "100%", background: "linear-gradient(90deg, #34D399, #6EE7B7)", borderRadius: 4, opacity: row.opacity }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right — client attendees */}
                <div style={{ padding: "16px 14px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                    <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      Client Attendees
                    </p>
                    <span style={{ fontSize: 11, color: "rgba(255,255,255,0.5)" }}>9</span>
                  </div>
                  {[
                    { company: "Cable Guy, Inc.",          count: 18 },
                    { company: "Cornerstone Management",   count: 3  },
                    { company: "Bay Harbor Freight",       count: 2  },
                    { company: "Good Living",              count: 2  },
                    { company: "Health Group Partners",    count: 2  },
                    { company: "SilverCrest",              count: 2  },
                    { company: "Universal Studios",        count: 2  },
                    { company: "American Fortress",        count: 1  },
                  ].map((row) => (
                    <div
                      key={row.company}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "7px 0",
                        borderBottom: "1px solid rgba(255,255,255,0.05)",
                      }}
                    >
                      <span style={{ fontSize: 11, color: "rgba(255,255,255,0.7)" }}>{row.company}</span>
                      <span style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>{row.count} ∨</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Layer 6 — Prior Conference Overlap */}
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "14px 20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <p style={{ fontSize: 11, textTransform: "uppercase", color: "rgba(255,255,255,0.4)", letterSpacing: "0.05em" }}>
                    Prior Conference Overlap
                  </p>
                  <span
                    style={{
                      fontSize: 11,
                      color: "#34D399",
                      background: "rgba(52,211,153,0.12)",
                      padding: "2px 8px",
                      borderRadius: 20,
                    }}
                  >
                    105 Operator&apos;s
                  </span>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
                  {[
                    { initials: "AA", name: "Colleen Adkins",  company: "Westminister Abby, Inc.", parentConf: "HJ SIMS",            conf: "HJ SIMS",            rep: "John Baker"   },
                    { initials: "BA", name: "Lloyd Christmas", company: "Warner Brothers",          parentConf: "SL 100 2026",         conf: "SL 100 2026",         rep: "Mary Swanson" },
                    { initials: "LA", name: "Ace Ventura",     company: "Laces Out, LLC",           parentConf: "ASHA Annual Meeting", conf: "ASHA Annual Meeting", rep: "Ray Finkle"   },
                    { initials: "BA", name: "Truman Burbank",  company: "Seaside Vending",          parentConf: "SL 100 2026",         conf: "SL 100 2026",         rep: "Meryl Burbank"},
                  ].map((card) => (
                    <div
                      key={card.name}
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.06)",
                        borderRadius: 8,
                        padding: "10px 12px",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
                        <div
                          style={{
                            width: 26,
                            height: 26,
                            borderRadius: "50%",
                            background: "rgba(34,58,94,0.6)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          <span style={{ fontSize: 9, fontWeight: 600, color: "white" }}>{card.initials}</span>
                        </div>
                        <span
                          style={{
                            fontSize: 11,
                            fontWeight: 500,
                            color: "rgba(255,255,255,0.75)",
                            flex: 1,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {card.name}
                        </span>
                        <div
                          style={{
                            width: 14,
                            height: 14,
                            borderRadius: "50%",
                            border: "1px solid rgba(255,255,255,0.25)",
                            flexShrink: 0,
                          }}
                        />
                      </div>
                      <p
                        style={{
                          fontSize: 10,
                          color: "rgba(255,255,255,0.35)",
                          marginBottom: 2,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {card.company} ({card.parentConf})
                      </p>
                      <p style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", marginBottom: 6 }}>
                        {card.conf}
                      </p>
                      <div
                        style={{
                          background: "rgba(255,255,255,0.06)",
                          borderRadius: 20,
                          padding: "3px 8px",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 5,
                        }}
                      >
                        <div style={{ width: 5, height: 5, borderRadius: "50%", background: "rgba(255,255,255,0.4)", flexShrink: 0 }} />
                        <span style={{ fontSize: 10, color: "rgba(255,255,255,0.5)" }}>{card.rep}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          </div>

          {/* Dashboard teaser — mobile */}
          <div className="block md:hidden">
          <div className="relative mx-auto" style={{ maxWidth: "100%" }}>
            {/* Fade overlay */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "100px",
                background: "linear-gradient(to bottom, transparent, #223A5E)",
                zIndex: 3,
                pointerEvents: "none",
              }}
            />

            {/* Mobile card */}
            <div
              style={{
                background: "#111c2e",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "12px 12px 0 0",
                borderBottom: "none",
                overflow: "hidden",
                textAlign: "left",
              }}
            >
              {/* Layer 1 — Window chrome */}
              <div
                style={{
                  background: "#0d1828",
                  padding: "10px 14px",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ef4444", flexShrink: 0 }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#f59e0b", flexShrink: 0 }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#34D399", flexShrink: 0 }} />
              </div>

              {/* Layer 2 — PCR header */}
              <div
                style={{
                  background: "#1e3354",
                  padding: "12px 16px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <p style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.4)", marginBottom: 4 }}>
                    PRE-CONFERENCE REVIEW
                  </p>
                  <p style={{ fontSize: 16, fontWeight: 700, color: "white" }}>Conference Expo 2026</p>
                </div>
                <div style={{ display: "flex", gap: 10, color: "rgba(255,255,255,0.4)", fontSize: 14 }}>
                  <span>∨</span>
                  <span>✕</span>
                </div>
              </div>

              {/* Layer 3 — 2×3 stat grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 8,
                  padding: 12,
                }}
              >
                {[
                  { value: "2324", label: "Attendees" },
                  { value: "1063", label: "Companies" },
                  { value: "186",  label: "ICP" },
                  { value: "25",   label: "Targets" },
                  { value: "40",   label: "Meetings" },
                  { value: "8",    label: "Open Follow-ups" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: 10,
                      padding: "10px 12px",
                    }}
                  >
                    <p style={{ fontSize: 20, fontWeight: 700, color: "white", lineHeight: 1 }}>{stat.value}</p>
                    <p style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", marginTop: 4 }}>{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Layer 4 — Tab navigation */}
              <div
                style={{
                  display: "flex",
                  gap: 16,
                  padding: "0 16px",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                  overflowX: "auto",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                } as React.CSSProperties}
              >
                {["Meetings", "Social Events", "By Rep", "Relationships", "Conference Targets"].map((tab) => (
                  <span
                    key={tab}
                    style={{
                      fontSize: 12,
                      fontWeight: tab === "Conference Targets" ? 600 : 400,
                      color: tab === "Conference Targets" ? "#34D399" : "rgba(255,255,255,0.4)",
                      padding: "10px 0",
                      borderBottom: tab === "Conference Targets" ? "2px solid #34D399" : "2px solid transparent",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}
                  >
                    {tab}
                  </span>
                ))}
              </div>

              {/* Layer 5 — Targets stat + seniority breakdown */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1px 1fr",
                  padding: "14px 16px",
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                {/* Left — large target stat */}
                <div style={{ paddingRight: 14 }}>
                  <p style={{ fontSize: 32, fontWeight: 700, color: "white", lineHeight: 1 }}>25</p>
                  <p style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginTop: 4 }}>Targets</p>
                </div>

                {/* Vertical divider */}
                <div style={{ background: "rgba(255,255,255,0.07)" }} />

                {/* Right — seniority breakdown */}
                <div style={{ paddingLeft: 14 }}>
                  <p style={{ fontSize: 9, textTransform: "uppercase", fontWeight: 600, color: "rgba(255,255,255,0.4)", letterSpacing: "0.05em", marginBottom: 8 }}>
                    SENIORITY BREAKDOWN
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    {[
                      { label: "C-Suite",  pct: 100, color: "#8b5cf6" },
                      { label: "Director", pct: 10,  color: "#34D399"  },
                      { label: "VP/SVP",   pct: 10,  color: "#3b82f6"  },
                    ].map((row) => (
                      <div key={row.label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <span style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", minWidth: 48 }}>{row.label}</span>
                        <div style={{ flex: 1, height: 5, background: "rgba(255,255,255,0.07)", borderRadius: 3, overflow: "hidden" }}>
                          <div style={{ width: `${row.pct}%`, height: "100%", background: row.color, borderRadius: 3 }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Layer 6 — Conference Targets list */}
              <div style={{ padding: "12px 16px" }}>
                <p style={{ fontSize: 12, fontWeight: 700, color: "white", marginBottom: 10 }}>
                  Conference Expo 2026 Targets
                </p>
                {/* Tier card */}
                <div
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 8,
                  }}
                >
                  {/* Tier header */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "8px 12px",
                      borderBottom: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <span style={{ fontSize: 11, fontWeight: 700, color: "#ef4444" }}>TIER 1</span>
                    <span style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>9</span>
                  </div>

                  {/* Contact 1 — Peter Gibbons */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      padding: "10px 12px",
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <div style={{ flex: 1, marginRight: 8 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 2, overflow: "hidden" }}>
                        <span style={{ fontSize: 12, fontWeight: 600, color: "white", flexShrink: 0 }}>Peter Gibbons</span>
                        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>Director Strategic Growth</span>
                      </div>
                      <p style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginBottom: 6 }}>Initech</p>
                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                        <span
                          style={{
                            fontSize: 10, color: "rgba(255,255,255,0.6)",
                            background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)",
                            borderRadius: 20, padding: "2px 8px",
                          }}
                        >
                          Director
                        </span>
                        <span
                          style={{
                            fontSize: 10, color: "rgba(255,255,255,0.5)",
                            background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)",
                            borderRadius: 20, padding: "2px 8px",
                            display: "inline-flex", alignItems: "center", gap: 4,
                          }}
                        >
                          <span style={{ width: 5, height: 5, borderRadius: "50%", background: "rgba(255,255,255,0.4)", display: "inline-block", flexShrink: 0 }} />
                          Bill Lumbergh
                        </span>
                      </div>
                    </div>
                    <div
                      style={{
                        width: 18, height: 18, borderRadius: "50%",
                        border: "1.5px solid rgba(239,68,68,0.5)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0, marginTop: 2,
                      }}
                    >
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(239,68,68,0.6)" }} />
                    </div>
                  </div>

                  {/* Contact 2 — Milton Waddams */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      padding: "10px 12px",
                    }}
                  >
                    <div style={{ flex: 1, marginRight: 8 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 2, overflow: "hidden" }}>
                        <span style={{ fontSize: 12, fontWeight: 600, color: "white", flexShrink: 0 }}>Milton Waddams</span>
                        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>Vice President, Operational Exce...</span>
                      </div>
                      <p style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginBottom: 6 }}>Swinline</p>
                      <div style={{ display: "flex", gap: 6 }}>
                        <span
                          style={{
                            fontSize: 10, color: "rgba(255,255,255,0.6)",
                            background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)",
                            borderRadius: 20, padding: "2px 8px",
                          }}
                        >
                          VP/SVP
                        </span>
                      </div>
                    </div>
                    <div
                      style={{
                        width: 18, height: 18, borderRadius: "50%",
                        border: "1.5px solid rgba(239,68,68,0.5)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0, marginTop: 2,
                      }}
                    >
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(239,68,68,0.6)" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>

        </div>
      </div>
    </section>
  );
}
