import type { CSSProperties } from "react";

const SEC: CSSProperties = {
  fontSize: 9, fontWeight: 600, textTransform: "uppercase",
  letterSpacing: "0.1em", color: "rgba(255,255,255,0.35)",
  marginBottom: 8,
};

const CARD: CSSProperties = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: 10,
  padding: 16,
};

const DIM_CARD: CSSProperties = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 10,
  padding: 14,
};

const STRATEGY_ROWS = [
  { name: "ICP Opportunity",       pct: "20%", score: 84,  tier: "Strong", color: "#60A5FA" },
  { name: "Target Account Opp.",   pct: "20%", score: 93,  tier: "Strong", color: "#60A5FA" },
  { name: "Buyer Access",          pct: "15%", score: 100, tier: "Strong", color: "#60A5FA" },
  { name: "Relationship Leverage", pct: "15%", score: 27,  tier: "Weak",   color: "#f87171" },
  { name: "Customer Presence",     pct: "10%", score: 8,   tier: "Weak",   color: "#f87171" },
  { name: "Pipeline Potential",    pct: "15%", score: 100, tier: "Strong", color: "#60A5FA" },
  { name: "Event Economics",       pct: "5%",  score: 100, tier: "Strong", color: "#60A5FA" },
];

const TABS = [
  "Landscape",
  "Target Recommendations",
  "Meetings",
  "Social Events",
  "Relationships",
  "Conference Targets",
  "Parlay Recommendations",
];

export default function PreConferenceHeroMock() {
  return (
    <>
      <style>{`.pcr-tabs::-webkit-scrollbar { display: none }`}</style>
      <div style={{
        background: "#111c2e",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "12px 12px 0 0",
        borderBottom: "none",
        overflow: "hidden",
        width: "100%",
      }}>

        {/* Browser chrome */}
        <div style={{
          background: "#0d1828",
          padding: "10px 14px",
          display: "flex",
          alignItems: "center",
          gap: 7,
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}>
          {(["#ef4444", "#f59e0b", "#34D399"] as const).map((c) => (
            <div key={c} style={{ width: 11, height: 11, borderRadius: "50%", background: c, flexShrink: 0 }} />
          ))}
          <div style={{
            flex: 1,
            margin: "0 8px",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 5,
            padding: "3px 10px",
            fontFamily: "monospace",
            fontSize: 10,
            color: "rgba(255,255,255,0.25)",
            textAlign: "center",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}>
            work.useparlay.app/conferences/9 — Pre-Conference Review
          </div>
        </div>

        {/* Modal header */}
        <div style={{
          background: "#1e3354",
          padding: "12px 20px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}>
          <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.4)", marginBottom: 4 }}>
            PRE-CONFERENCE REVIEW
          </p>
          <p style={{ fontSize: 17, fontWeight: 600, color: "white", letterSpacing: "-0.01em" }}>
            Conference Expo 2026
          </p>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", marginTop: 3 }}>
            Mar 30, 2026 – Apr 1, 2026 · Nashville, TN
          </p>
        </div>

        {/* Tab bar — scrollbar hidden via pcr-tabs class */}
        <div
          className="pcr-tabs"
          style={{
            display: "flex",
            gap: 20,
            padding: "0 20px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            overflowX: "auto",
            scrollbarWidth: "none",
          } as CSSProperties}
        >
          {TABS.map((tab) => {
            const active = tab === "Landscape";
            return (
              <span key={tab} style={{
                fontSize: 12,
                fontWeight: active ? 500 : 400,
                color: active ? "#34D399" : "rgba(255,255,255,0.4)",
                padding: "10px 0",
                borderBottom: `2px solid ${active ? "#34D399" : "transparent"}`,
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}>{tab}</span>
            );
          })}
        </div>

        {/* Main content */}
        <div style={{ padding: "16px 20px 20px" }}>

          {/* Top 3-column grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-[260px_1fr_1fr]"
            style={{ gap: 12, marginBottom: 12 }}
          >
            {/* Col 1 — Strategy Score */}
            <div style={{
              background: "rgba(52,211,153,0.05)",
              border: "1px solid rgba(52,211,153,0.2)",
              borderRadius: 10,
              padding: 16,
            }}>
              <p style={{ ...SEC }}>PRE-CONFERENCE STRATEGY SCORE</p>
              <div style={{ display: "flex", alignItems: "baseline", gap: 3, marginBottom: 2 }}>
                <span style={{ fontSize: 52, fontWeight: 800, color: "#34D399", letterSpacing: "-0.04em", lineHeight: 1 }}>75</span>
                <span style={{ fontSize: 16, color: "rgba(255,255,255,0.3)" }}>/100</span>
              </div>
              <p style={{ fontSize: 12, fontWeight: 600, color: "#34D399", marginBottom: 14 }}>Strong Fit</p>
              {STRATEGY_ROWS.map((row, i) => (
                <div key={row.name} style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  marginBottom: i < STRATEGY_ROWS.length - 1 ? 6 : 0,
                }}>
                  <span style={{ fontSize: 10, color: "rgba(255,255,255,0.4)" }}>
                    {row.name}{" "}
                    <span style={{ color: "rgba(255,255,255,0.2)" }}>({row.pct})</span>
                  </span>
                  <span style={{ fontSize: 10, fontWeight: 600, color: row.color, flexShrink: 0, marginLeft: 6 }}>
                    {row.score} · {row.tier}
                  </span>
                </div>
              ))}
            </div>

            {/* Col 2 — Recommended Strategy */}
            <div style={CARD}>
              <p style={{ ...SEC, color: "rgba(52,211,153,0.7)" }}>RECOMMENDED STRATEGY</p>
              <p style={{ fontSize: 14, fontWeight: 700, color: "white", marginBottom: 14, letterSpacing: "-0.01em" }}>
                Pipeline Generation
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  "185 ICP companies attending",
                  "161 high-priority target companies identified",
                  "Realistic pipeline goal: $10.0M (100.0% of required)",
                ].map((text) => (
                  <div key={text} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#34D399", flexShrink: 0, marginTop: 5 }} />
                    <p style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Col 3 — Secondary Strategy */}
            <div style={CARD}>
              <p style={{ ...SEC }}>SECONDARY STRATEGY</p>
              <p style={{ fontSize: 14, fontWeight: 700, color: "white", marginBottom: 14, letterSpacing: "-0.01em", lineHeight: 1.2 }}>
                Strategic Account Relationship Building
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  "84 must-target companies attending",
                  "77 high-priority companies attending",
                  "Strong relationship leverage with 6 known accounts",
                ].map((text) => (
                  <div key={text} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <div style={{ width: 5, height: 5, borderRadius: "50%", background: "rgba(255,255,255,0.3)", flexShrink: 0, marginTop: 5 }} />
                    <p style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", lineHeight: 1.5 }}>{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom 4-column grid — hidden below lg */}
          <div
            className="hidden lg:grid"
            style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 12 }}
          >
            {/* Card 1 — Pipeline Reality */}
            <div style={DIM_CARD}>
              <p style={{ ...SEC }}>PIPELINE REALITY</p>
              {[
                { label: "Realistic Goal", value: "$10.0M", color: "white" },
                { label: "Required",       value: "$3.1M",  color: "white" },
                { label: "Coverage",       value: "100.0%", color: "#34D399" },
              ].map((row, i) => (
                <div key={row.label}>
                  {i > 0 && <div style={{ height: 1, background: "rgba(255,255,255,0.06)", margin: "8px 0" }} />}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 10, color: "rgba(255,255,255,0.4)" }}>{row.label}</span>
                    <span style={{ fontSize: 13, fontWeight: 700, color: row.color }}>{row.value}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Card 2 — Hosted Event */}
            <div style={DIM_CARD}>
              <p style={{ ...SEC }}>HOSTED EVENT</p>
              <p style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.8)", marginBottom: 10 }}>
                Host Prospect Reception
              </p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 6 }}>
                <span style={{ fontSize: 10, color: "rgba(255,255,255,0.4)" }}>Fit Score</span>
                <span style={{ fontSize: 20, fontWeight: 800, color: "#34D399", letterSpacing: "-0.02em" }}>89</span>
              </div>
              <div style={{ height: 4, background: "rgba(255,255,255,0.06)", borderRadius: 2, overflow: "hidden" }}>
                <div style={{ width: "89%", height: "100%", background: "#34D399" }} />
              </div>
            </div>

            {/* Card 3 — Sponsorship */}
            <div style={DIM_CARD}>
              <p style={{ ...SEC }}>SPONSORSHIP</p>
              <p style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.8)", marginBottom: 10 }}>
                Strong sponsorship fit
              </p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 6 }}>
                <span style={{ fontSize: 10, color: "rgba(255,255,255,0.4)" }}>Fit Score</span>
                <span style={{ fontSize: 20, fontWeight: 800, color: "#60A5FA", letterSpacing: "-0.02em" }}>76</span>
              </div>
              <div style={{ height: 4, background: "rgba(255,255,255,0.06)", borderRadius: 2, overflow: "hidden" }}>
                <div style={{ width: "76%", height: "100%", background: "#60A5FA" }} />
              </div>
            </div>

            {/* Card 4 — Staffing */}
            <div style={DIM_CARD}>
              <p style={{ ...SEC }}>STAFFING</p>
              <p style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.8)", marginBottom: 4 }}>
                8–9 reps recommended
              </p>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", marginBottom: 8 }}>Current: 3 reps</p>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                background: "rgba(245,158,11,0.1)",
                border: "1px solid rgba(245,158,11,0.25)",
                borderRadius: 6,
                padding: "5px 10px",
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" fill="#f59e0b" />
                  <line x1="12" y1="9" x2="12" y2="13" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <line x1="12" y1="17" x2="12.01" y2="17" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span style={{ fontSize: 11, fontWeight: 600, color: "#f59e0b" }}>Coverage gap: add 5–6 more</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
