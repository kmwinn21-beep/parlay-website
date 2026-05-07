const BULLETS = [
  {
    title: "Conference-by-conference trajectory, not last activity",
    sub: "A full history of how the relationship has moved across every event — building, plateauing, or fading",
  },
  {
    title: "Health scores built from behavioral signals, not self-reporting",
    sub: "Meetings held, notes written, follow-ups completed. Not what reps say happened. What the system knows happened.",
  },
  {
    title: "Ghost penalties that reflect reality",
    sub: "If your team was in the room and didn't engage, the score drops. No false positives in the relationship data.",
  },
  {
    title: "Cross-conference attribution that compounds",
    sub: "Understand which conferences are actually deepening key relationships — and which ones are just maintaining presence.",
  },
];

const HISTORY_NODES = [
  { score: 77, date: "Nov 25", conf: "SHN Build Brain", active: false },
  { score: 78, date: "Jan 26", conf: "ASHA Annual Meeting", active: false },
  { score: 80, date: "Feb 26", conf: "Interface West", active: false },
  { score: 55, date: "Mar 26", conf: "SL 100 2026", active: false },
  { score: 70, date: "Mar 26", conf: "Expo 2026", active: true },
];

const FOLLOWUPS = ["Nurture", "Coffee", "Booth Stop"];

export default function RelationshipIntelSection() {
  return (
    <section className="bg-brand-light py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left column — relationship health card */}
          <div className="order-2 md:order-1" style={{
            background: "#fff",
            border: "1px solid rgba(34,58,94,0.1)",
            borderRadius: 14,
            boxShadow: "0 2px 12px rgba(34,58,94,0.08)",
            padding: 20,
          }}>

            {/* Section 1 — Contact header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{
                  width: 38, height: 38, borderRadius: 10,
                  background: "rgba(239,68,68,0.1)", color: "#ef4444",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 16, fontWeight: 700, flexShrink: 0,
                }}>R</div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: "#1e293b", lineHeight: 1.2 }}>Ron Burgundy</div>
                  <div style={{ fontSize: 11, color: "#64748b", marginTop: 2 }}>Anchorman · KVWN Channel 4 News</div>
                </div>
              </div>
              <svg width="52" height="52" viewBox="0 0 52 52" style={{ flexShrink: 0 }}>
                <circle cx="26" cy="26" r="20" fill="none" stroke="#f1f5f9" strokeWidth="5" />
                <circle cx="26" cy="26" r="20" fill="none" stroke="#ef4444" strokeWidth="5"
                  strokeDasharray="88 127" strokeLinecap="round"
                  transform="rotate(-90 26 26)" />
                <text x="26" y="30" textAnchor="middle" fontSize="13" fontWeight="700" fill="#1e293b">72</text>
                <text x="26" y="40" textAnchor="middle" fontSize="7" fill="#94a3b8" letterSpacing="0.5">HLTH</text>
              </svg>
            </div>

            {/* Section 2 — Status pills */}
            <div style={{ display: "flex", gap: 6, marginBottom: 14 }}>
              <span style={{ fontSize: 11, fontWeight: 500, borderRadius: 20, padding: "3px 10px", background: "rgba(245,158,11,0.08)", color: "#b45309", border: "1px solid rgba(245,158,11,0.25)" }}>Warm</span>
              <span style={{ fontSize: 11, fontWeight: 500, borderRadius: 20, padding: "3px 10px", background: "rgba(52,211,153,0.1)", color: "#059669", border: "1px solid rgba(52,211,153,0.3)" }}>ICP</span>
              <span style={{ fontSize: 11, fontWeight: 500, borderRadius: 20, padding: "3px 10px", background: "rgba(148,163,184,0.1)", color: "#475569", border: "1px solid rgba(148,163,184,0.25)" }}>Nurturing</span>
            </div>

            {/* Section 3 — Stat boxes */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, marginBottom: 16 }}>
              {[
                { label: "CONFERENCES", value: "5" },
                { label: "TOUCHPOINTS", value: "9" },
                { label: "FOLLOW-UPS", value: "82%" },
              ].map((stat) => (
                <div key={stat.label} style={{ background: "#f8fafc", border: "1px solid rgba(34,58,94,0.07)", borderRadius: 8, padding: "8px 6px", textAlign: "center" }}>
                  <div style={{ fontSize: 9, textTransform: "uppercase", fontWeight: 600, color: "#94a3b8", marginBottom: 4, letterSpacing: "0.5px" }}>{stat.label}</div>
                  <div style={{ fontSize: 18, fontWeight: 600, color: "#223A5E" }}>{stat.value}</div>
                </div>
              ))}
            </div>

            {/* Section 4 — Conference history */}
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 10, textTransform: "uppercase", fontWeight: 600, color: "#94a3b8", letterSpacing: "0.5px", marginBottom: 10 }}>CONFERENCE HISTORY</div>
              <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{ position: "absolute", top: 20, left: 20, right: 20, height: 1, background: "#e2e8f0", zIndex: 0 }} />
                {HISTORY_NODES.map((node, idx) => (
                  <div key={idx} style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: "50%",
                      border: node.active ? "2px solid #f59e0b" : "2px solid #e2e8f0",
                      background: node.active ? "rgba(245,158,11,0.06)" : "#fff",
                      boxShadow: node.active ? "0 0 0 3px rgba(245,158,11,0.12)" : "none",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 13, fontWeight: 600,
                      color: node.active ? "#f59e0b" : "#475569",
                    }}>{node.score}</div>
                    <div style={{ fontSize: 9, color: "#94a3b8", textAlign: "center", marginTop: 4, lineHeight: 1.3 }}>
                      <div>{node.date}</div>
                      <div>{node.conf}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 5 — Conference detail panel */}
            <div style={{ background: "#f8fafc", border: "1px solid rgba(34,58,94,0.08)", borderRadius: 10, padding: 14 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: "#1e293b" }}>Conference Expo 2026</span>
                <span style={{ fontSize: 11, fontWeight: 600, borderRadius: 20, padding: "2px 8px", background: "rgba(245,158,11,0.08)", color: "#b45309", border: "1px solid rgba(245,158,11,0.25)" }}>70</span>
              </div>
              <div style={{ fontSize: 11, color: "#94a3b8", marginBottom: 12 }}>Nashville, TN · Mar 26</div>

              <div style={{ fontSize: 9, textTransform: "uppercase", fontWeight: 600, color: "#94a3b8", letterSpacing: "0.5px", marginBottom: 6 }}>MEETINGS</div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#223A5E", flexShrink: 0 }} />
                <span style={{ fontSize: 12, fontWeight: 500, color: "#1e293b" }}>Pre-Scheduled</span>
                <span style={{ fontSize: 12, color: "#94a3b8" }}>— Held</span>
              </div>

              <div style={{ fontSize: 9, textTransform: "uppercase", fontWeight: 600, color: "#94a3b8", letterSpacing: "0.5px", marginBottom: 6 }}>FOLLOW-UPS</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {FOLLOWUPS.map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 16, height: 16, borderRadius: 4, background: "rgba(52,211,153,0.15)", border: "1px solid #34D399", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ color: "#059669", fontSize: 10, fontWeight: 700, lineHeight: 1 }}>✓</span>
                    </div>
                    <span style={{ fontSize: 12, color: "#94a3b8", textDecoration: "line-through" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column — unchanged */}
          <div className="order-1 md:order-2">
            <p className="font-inter text-sm font-semibold tracking-widest uppercase text-brand-teal mb-4">
              Relationship intelligence
            </p>
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-brand-primary mb-6">
              Relationship depth, measured. Not assumed.
            </h2>
            <p className="font-inter text-lg text-brand-steel mb-10 leading-relaxed">
              Most sales leaders assume relationships are building at conferences. Parlay measures it — and surfaces where they&apos;re actually stalling.
            </p>
            <ul className="space-y-6">
              {BULLETS.map((b) => (
                <li key={b.title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-brand-primary mt-1.5" />
                  <div>
                    <p className="font-inter text-brand-primary font-semibold leading-snug mb-1">
                      {b.title}
                    </p>
                    <p className="font-inter text-brand-steel text-sm leading-relaxed">{b.sub}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
