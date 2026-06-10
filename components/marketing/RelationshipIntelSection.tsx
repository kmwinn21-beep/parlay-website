const BULLETS = [
  {
    title: "A Conference Effectiveness Score, not a vibe check",
    sub: "Seven execution dimensions scored and weighted: ICP quality, meeting hold rate, follow-up completion, pipeline influence, and cost efficiency.",
  },
  {
    title: "Missed opportunity, quantified",
    sub: "Every ICP company that was in the room but never engaged is surfaced with an estimated pipeline value, so leadership knows exactly what was left on the floor.",
  },
  {
    title: "A go/no-go recommendation with a proposed budget",
    sub: "Attend, reduce footprint, or cut entirely. The rationale is built from your data, and the proposed budget for next year is ready to drop into the approval process.",
  },
  {
    title: "One click to PDF, ready for the CFO",
    sub: "The Executive Brief exports as a clean three-page PDF covering investment, return, and recommendation. Built for the budget conversation, not the team debrief.",
  },
];

function SectionLabel({ label }: { label: string }) {
  return (
    <div style={{ fontSize: 9, textTransform: "uppercase", fontWeight: 600, color: "#94a3b8", letterSpacing: "0.6px", marginBottom: 8 }}>
      {label}
    </div>
  );
}

function Divider() {
  return <div style={{ height: 1, background: "#f1f5f9", margin: "14px 0" }} />;
}

function ExecBriefMockup() {
  return (
    <div style={{
      background: "#fff",
      border: "1px solid rgba(34,58,94,0.1)",
      borderRadius: 14,
      boxShadow: "0 2px 12px rgba(34,58,94,0.08)",
      padding: 20,
    }}>

      {/* Drawer header */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 38, height: 38, borderRadius: 10,
            background: "rgba(34,58,94,0.08)", color: "#223A5E",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
          }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <rect x="2" y="9" width="3" height="7" rx="1" fill="#223A5E" opacity="0.5" />
              <rect x="7.5" y="5" width="3" height="11" rx="1" fill="#223A5E" opacity="0.75" />
              <rect x="13" y="2" width="3" height="14" rx="1" fill="#223A5E" />
            </svg>
          </div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#1e293b", lineHeight: 1.2 }}>Executive brief</div>
            <div style={{ fontSize: 11, color: "#64748b", marginTop: 2 }}>Conference Expo · Mar 30 – Apr 1, 2026</div>
          </div>
        </div>
        <div style={{
          display: "flex", alignItems: "center", gap: 5,
          fontSize: 11, fontWeight: 600, color: "#223A5E",
          background: "rgba(34,58,94,0.06)", border: "1px solid rgba(34,58,94,0.15)",
          borderRadius: 6, padding: "5px 9px", flexShrink: 0,
        }}>
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
            <path d="M5.5 1v6M3 5l2.5 2.5L8 5M1.5 9.5h8" stroke="#223A5E" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Save to PDF
        </div>
      </div>

      {/* 01 — Investment */}
      <SectionLabel label="01 — Investment" />
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 10 }}>
        <span style={{ fontSize: 10, fontWeight: 500, borderRadius: 20, padding: "2px 8px", background: "rgba(245,158,11,0.08)", color: "#b45309", border: "1px solid rgba(245,158,11,0.25)" }}>Trade show</span>
        <span style={{ fontSize: 10, fontWeight: 500, borderRadius: 20, padding: "2px 8px", background: "rgba(59,130,246,0.08)", color: "#2563eb", border: "1px solid rgba(59,130,246,0.25)" }}>Pipeline generation</span>
        <span style={{ fontSize: 10, fontWeight: 500, borderRadius: 20, padding: "2px 8px", background: "rgba(52,211,153,0.1)", color: "#059669", border: "1px solid rgba(52,211,153,0.3)" }}>Platinum</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}>
        {[
          { label: "Total spend", value: "$42,010", sub: "budget $44,800", green: false },
          { label: "Variance", value: "−$2,790", sub: "under budget", green: true },
          { label: "Cost / meeting", value: "$1,400", sub: "30 meetings held", green: false },
        ].map((s) => (
          <div key={s.label} style={{ background: "#f8fafc", border: "1px solid rgba(34,58,94,0.07)", borderRadius: 8, padding: "8px 6px", textAlign: "center" }}>
            <div style={{ fontSize: 8, textTransform: "uppercase", fontWeight: 600, color: "#94a3b8", marginBottom: 3, letterSpacing: "0.5px" }}>{s.label}</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: s.green ? "#059669" : "#223A5E" }}>{s.value}</div>
            <div style={{ fontSize: 9, color: "#94a3b8", marginTop: 2 }}>{s.sub}</div>
          </div>
        ))}
      </div>

      <Divider />

      {/* 02 — Return */}
      <SectionLabel label="02 — Return" />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 8 }}>
        <div style={{ background: "rgba(59,130,246,0.05)", border: "1px solid rgba(59,130,246,0.2)", borderRadius: 8, padding: "10px 10px 8px" }}>
          <div style={{ fontSize: 8, textTransform: "uppercase", fontWeight: 600, color: "#94a3b8", letterSpacing: "0.5px", marginBottom: 4 }}>Effectiveness</div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 3 }}>
            <span style={{ fontSize: 22, fontWeight: 700, color: "#2563eb" }}>77</span>
            <span style={{ fontSize: 11, color: "#94a3b8" }}>/100</span>
          </div>
          <span style={{ fontSize: 10, fontWeight: 600, color: "#2563eb", background: "rgba(59,130,246,0.1)", borderRadius: 4, padding: "1px 6px", display: "inline-block", marginTop: 4 }}>Strong</span>
        </div>
        <div style={{ background: "rgba(52,211,153,0.05)", border: "1px solid rgba(52,211,153,0.25)", borderRadius: 8, padding: "10px 10px 8px" }}>
          <div style={{ fontSize: 8, textTransform: "uppercase", fontWeight: 600, color: "#94a3b8", letterSpacing: "0.5px", marginBottom: 4 }}>Cost efficiency</div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 3 }}>
            <span style={{ fontSize: 22, fontWeight: 700, color: "#059669" }}>79</span>
            <span style={{ fontSize: 11, color: "#94a3b8" }}>/100</span>
          </div>
          <span style={{ fontSize: 10, fontWeight: 600, color: "#059669", background: "rgba(52,211,153,0.1)", borderRadius: 4, padding: "1px 6px", display: "inline-block", marginTop: 4 }}>Strong</span>
        </div>
      </div>
      <div style={{ background: "#f8fafc", border: "1px solid rgba(34,58,94,0.07)", borderRadius: 8, padding: "10px 12px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontSize: 8, textTransform: "uppercase", fontWeight: 600, color: "#94a3b8", letterSpacing: "0.5px", marginBottom: 3 }}>Total pipeline influenced</div>
          <div style={{ fontSize: 16, fontWeight: 700, color: "#223A5E" }}>$4,226,350</div>
        </div>
        <span style={{ fontSize: 10, fontWeight: 700, color: "#059669", background: "rgba(52,211,153,0.12)", border: "1px solid rgba(52,211,153,0.3)", borderRadius: 20, padding: "3px 9px", flexShrink: 0 }}>898% of required</span>
      </div>

      <Divider />

      {/* 04 — Missed opportunity */}
      <SectionLabel label="04 — Missed opportunity" />
      <div style={{ background: "rgba(245,158,11,0.07)", border: "1px solid rgba(245,158,11,0.3)", borderRadius: 8, padding: "10px 12px", marginBottom: 8 }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: "#92400e", lineHeight: 1.4 }}>
          50 ICP companies not engaged. Est. $9.2M addressable pipeline untouched.
        </div>
      </div>
      <div style={{ background: "#f8fafc", border: "1px solid rgba(34,58,94,0.07)", borderRadius: 8, padding: "10px 12px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
          <div style={{ fontSize: 11, fontWeight: 500, color: "#1e293b" }}>Engaged</div>
          <div style={{ fontSize: 11, color: "#64748b" }}>23 (32%) of 73 total ICP</div>
        </div>
        <div style={{ height: 6, borderRadius: 3, background: "#e2e8f0", overflow: "hidden" }}>
          <div style={{ width: "32%", height: "100%", borderRadius: 3, background: "#223A5E" }} />
        </div>
      </div>

      <Divider />

      {/* 06 — Recommendation */}
      <SectionLabel label="06 — Recommendation" />
      <div style={{ background: "rgba(52,211,153,0.07)", border: "1.5px solid rgba(52,211,153,0.35)", borderRadius: 8, padding: "10px 12px", marginBottom: 8 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: "#059669", marginBottom: 5 }}>Attend Conference Expo in 2027</div>
        <div style={{ fontSize: 11, color: "#064e3b", lineHeight: 1.5 }}>
          CES 77 (Strong). 23 of 73 ICP companies engaged. $9.2M untouched pipeline. Proposed budget $44,111.
        </div>
      </div>
      <div style={{ fontSize: 10, color: "#94a3b8", textAlign: "center" }}>
        Snapshot taken yesterday. Generated by Parlay.
      </div>
    </div>
  );
}

export default function RelationshipIntelSection() {
  return (
    <section className="bg-brand-light py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left column — Executive Brief mockup */}
          <div className="order-2 md:order-1">
            <ExecBriefMockup />
          </div>

          {/* Right column — copy */}
          <div className="order-1 md:order-2">
            <p className="font-inter text-sm font-semibold tracking-widest uppercase text-brand-teal mb-4">
              Conference ROI
            </p>
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-brand-primary mb-6">
              Stop defending the budget. Start proving it.
            </h2>
            <p className="font-inter text-lg text-brand-steel mb-10 leading-relaxed">
              The CFO doesn&apos;t want a debrief deck. They want a number, a recommendation, and a proposed budget for next year. Parlay gives you all three before you leave the room.
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
