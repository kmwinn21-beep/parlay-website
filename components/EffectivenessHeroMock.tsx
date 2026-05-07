type ChipType = "H" | "W" | "R";

function Chip({ type, label }: { type: ChipType; label?: string }) {
  const S = {
    H: { bg: "#DCFCE7", color: "#059669" },
    W: { bg: "#FEF9C3", color: "#B45309" },
    R: { bg: "#FEE2E2", color: "#DC2626" },
  }[type];
  const chip = (
    <span style={{
      display: "inline-block", width: 22, height: 18, borderRadius: 4,
      background: S.bg, color: S.color,
      fontSize: 8, fontWeight: 700, lineHeight: "18px", textAlign: "center",
    }}>{type}</span>
  );
  if (!label) return chip;
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
      {chip}
      <span style={{ fontSize: 9, color: "#64748b" }}>{label}</span>
    </span>
  );
}

const SCORE_CARDS = [
  { value: "54",         label: "Conference Effectiveness Score", color: "#FCD34D", active: true,  small: false, spanMobile: false },
  { value: "68",         label: "Sales Execution Score",          color: "#FCD34D", active: false, small: false, spanMobile: false },
  { value: "11",         label: "Audience & Messaging Score",     color: "#FCA5A5", active: false, small: false, spanMobile: false },
  { value: "74",         label: "Cost Efficiency Score",          color: "#6EE7B7", active: false, small: false, spanMobile: false },
  { value: "$2,316,979", label: "Pipeline Influence",             color: "#ffffff", active: false, small: true,  spanMobile: true  },
];

const COMPONENT_ROWS = [
  { name: "Meeting Execution",    pct: "25%", score: 65, tier: "Acceptable", color: "#D97706" },
  { name: "Followup Execution",   pct: "20%", score: 84, tier: "Strong",     color: "#1B76BC" },
  { name: "Pipeline Influence",   pct: "25%", score: 75, tier: "Strong",     color: "#1B76BC" },
  { name: "Target Account Exec.", pct: "15%", score: 33, tier: "Weak",       color: "#DC2626" },
  { name: "Rep Productivity",     pct: "15%", score: 75, tier: "Acceptable", color: "#D97706" },
];

const REP_TABLE = [
  { name: "Lloyd Christmas", mtg: 100, fu: 100, pi: 100, tgt: 5,  score: 77, tier: "Strong",  color: "#1B76BC" },
  { name: "Wayne Campbell",  mtg: 71,  fu: 100, pi: 80,  tgt: 10, score: 74, tier: "Accept.", color: "#D97706" },
  { name: "Ron Burgundy",    mtg: 75,  fu: 94,  pi: 58,  tgt: 29, score: 71, tier: "Accept.", color: "#D97706" },
  { name: "Happy Gilmore",   mtg: 67,  fu: 100, pi: 92,  tgt: 0,  score: 71, tier: "Accept.", color: "#D97706" },
  { name: "Fletcher Reede",  mtg: 50,  fu: 100, pi: 100, tgt: 0,  score: 63, tier: "Accept.", color: "#D97706" },
  { name: "Billy Madison",   mtg: 50,  fu: 100, pi: 55,  tgt: 5,  score: 62, tier: "Accept.", color: "#D97706" },
];

const PIPELINE_BARS = [
  { name: "Ron Burgundy",    value: "$645,539", pct: "28%", width: "100%" },
  { name: "Wayne Campbell",  value: "$442,101", pct: "20%", width: "68%"  },
  { name: "Fletcher Reede",  value: "$388,289", pct: "17%", width: "60%"  },
  { name: "Happy Gilmore",   value: "$341,385", pct: "15%", width: "53%"  },
  { name: "Billy Madison",   value: "$256,121", pct: "11%", width: "40%"  },
  { name: "Lloyd Christmas", value: "$192,918", pct: "9%",  width: "30%"  },
];

const QUADRANT_DOTS = [
  { initials: "RB", left: "78%", top: "22%", bg: "#223A5E" },
  { initials: "WC", left: "62%", top: "38%", bg: "#3A506B" },
  { initials: "LC", left: "55%", top: "55%", bg: "#475569" },
  { initials: "HG", left: "35%", top: "65%", bg: "#64748b" },
  { initials: "FR", left: "28%", top: "75%", bg: "#94a3b8" },
  { initials: "BM", left: "42%", top: "80%", bg: "#94a3b8" },
];

const HEATMAP_DATA: { name: string; hold: ChipType; fu: ChipType; target: ChipType; pipe: ChipType; activity: ChipType }[] = [
  { name: "Fletcher Reede",  hold: "W", fu: "H", target: "R", pipe: "H", activity: "R" },
  { name: "Lloyd Christmas", hold: "H", fu: "H", target: "R", pipe: "H", activity: "R" },
  { name: "Billy Madison",   hold: "W", fu: "H", target: "R", pipe: "W", activity: "H" },
  { name: "Wayne Campbell",  hold: "H", fu: "H", target: "R", pipe: "W", activity: "H" },
  { name: "Ron Burgundy",    hold: "H", fu: "H", target: "R", pipe: "W", activity: "H" },
  { name: "Happy Gilmore",   hold: "H", fu: "H", target: "R", pipe: "H", activity: "W" },
];

function SalesEffectivenessCard() {
  return (
    <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 10, padding: 14 }}>
      <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#64748b", marginBottom: 10 }}>
        SALES EFFECTIVENESS SCORE
      </p>
      <div style={{ display: "flex", alignItems: "baseline", gap: 3, marginBottom: 2 }}>
        <span style={{ fontSize: 48, fontWeight: 800, color: "#D97706", lineHeight: 1 }}>68</span>
        <span style={{ fontSize: 14, color: "#64748b" }}>/100</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
        <p style={{ fontSize: 12, fontWeight: 600, color: "#D97706" }}>Acceptable Execution</p>
        <p style={{ fontSize: 9, color: "#64748b", lineHeight: 1.4, textAlign: "right" }}>
          Conference Strategy: Pipeline Generation<br />
          Strategy-adjusted weights applied ⓘ
        </p>
      </div>
      <div style={{ height: 1, background: "#E2E8F0", margin: "8px 0" }} />
      {COMPONENT_ROWS.map((row) => (
        <div key={row.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 5 }}>
          <span style={{ fontSize: 10, color: "#64748b" }}>
            {row.name} <span style={{ color: "#94a3b8" }}>({row.pct})</span>
          </span>
          <span style={{ fontSize: 10, fontWeight: 600, color: row.color }}>{row.score} · {row.tier}</span>
        </div>
      ))}
    </div>
  );
}

export default function EffectivenessHeroMock() {
  return (
    <div style={{
      borderRadius: 14,
      overflow: "hidden",
      boxShadow: "0 40px 80px rgba(0,0,0,0.6), 0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.06)",
      width: "100%",
    }}>

      {/* ── Browser bar ── */}
      <div style={{
        background: "#1e2535",
        padding: "10px 16px",
        display: "flex",
        alignItems: "center",
        gap: 10,
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}>
        <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
          {(["#FF5F56", "#FFBD2E", "#27C93F"] as const).map((c) => (
            <div key={c} style={{ width: 11, height: 11, borderRadius: "50%", background: c }} />
          ))}
        </div>
        <div style={{
          flex: 1,
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 6,
          padding: "5px 12px",
          fontFamily: "monospace",
          fontSize: 11,
          color: "rgba(255,255,255,0.4)",
          textAlign: "center",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}>
          work.useparlay.app/conferences/9 — Conference Details
        </div>
      </div>

      {/* ── Modal ── */}
      <div style={{ background: "white", borderRadius: 12, boxShadow: "0 24px 60px rgba(0,0,0,0.25)", overflow: "hidden" }}>

        {/* ── Modal header ── */}
        <div style={{
          background: "linear-gradient(135deg, #2ECC8E 0%, #27B97F 40%, #1FA572 100%)",
          padding: "16px 20px 0",
        }}>
          {/* Top row */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
            <div>
              <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.65)", marginBottom: 3 }}>
                CONFERENCE EFFECTIVENESS
              </p>
              <p style={{ fontSize: 20, fontWeight: 700, color: "white", letterSpacing: "-0.02em" }}>
                Conference Expo 2026
              </p>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", marginTop: 3 }}>
                Mar 30, 2026 – Apr 1, 2026 · Nashville, TN
              </p>
            </div>
            <div style={{
              width: 26, height: 26, borderRadius: "50%",
              background: "rgba(255,255,255,0.15)",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 14, lineHeight: "1" }}>✕</span>
            </div>
          </div>

          {/* Score cards — 2 cols mobile, 5 cols sm+ */}
          <div className="grid grid-cols-2 sm:grid-cols-5" style={{ gap: 10 }}>
            {SCORE_CARDS.map((card) => (
              <div
                key={card.label}
                className={card.spanMobile ? "col-span-2 sm:col-span-1" : ""}
                style={{
                  background: card.active ? "rgba(255,255,255,0.22)" : "rgba(255,255,255,0.12)",
                  border: `1px solid ${card.active ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.18)"}`,
                  borderRadius: 8,
                  padding: "11px 12px",
                  textAlign: "center",
                }}
              >
                <p style={{ fontSize: card.small ? 18 : 26, fontWeight: 800, color: card.color, lineHeight: "1", paddingTop: card.small ? 4 : 0 }}>
                  {card.value}
                </p>
                <p style={{ fontSize: 10, fontWeight: 500, color: "rgba(255,255,255,0.65)", marginTop: 4 }}>{card.label}</p>
              </div>
            ))}
          </div>

          {/* Tab bar — negative margins to span full header width */}
          <div style={{
            display: "flex",
            borderBottom: "1px solid rgba(255,255,255,0.15)",
            marginTop: 10,
            marginLeft: -20,
            marginRight: -20,
            paddingLeft: 20,
            paddingRight: 20,
            overflowX: "auto",
          }}>
            {["Summary", "Sales Execution", "Audience & Messaging", "Cost Efficiency", "Definitions"].map((tab) => {
              const active = tab === "Sales Execution";
              return (
                <span key={tab} style={{
                  fontSize: 12,
                  fontWeight: active ? 600 : 500,
                  color: active ? "white" : "rgba(255,255,255,0.6)",
                  padding: "8px 14px",
                  borderBottom: active ? "2px solid white" : "2px solid transparent",
                  marginBottom: -1,
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}>{tab}</span>
              );
            })}
          </div>
        </div>

        {/* ── Modal body ── */}
        <div style={{ background: "#f8fafc", padding: "18px 20px" }}>

          {/* Metric pills */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, marginBottom: 14 }}>
            {[
              { label: "Meeting Hold Rate",    value: "65%"      },
              { label: "Follow-up Completion", value: "84%"      },
              { label: "Pipeline / Meeting",   value: "$105,317" },
            ].map((pill) => (
              <div key={pill.label} style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 8, padding: "10px 12px" }}>
                <p style={{ fontSize: 9, color: "#64748b", marginBottom: 3 }}>{pill.label}</p>
                <p style={{ fontSize: 18, fontWeight: 700, color: "#223A5E", lineHeight: "1" }}>{pill.value}</p>
              </div>
            ))}
          </div>

          {/* Top grid — 3 cols on md+, hidden on mobile */}
          <div className="hidden md:grid" style={{ gridTemplateColumns: "300px 1fr 1fr", gap: 14, marginBottom: 14 }}>

            {/* Col 1 — Sales Effectiveness Score */}
            <SalesEffectivenessCard />

            {/* Col 2 — Rank */}
            <div style={{
              background: "white", border: "1px solid #E2E8F0", borderRadius: 10, padding: 14,
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center",
            }}>
              <p style={{ fontSize: 10, color: "#64748b", marginBottom: 4 }}>Sales Execution Rank</p>
              <p style={{ fontSize: 40, fontWeight: 800, color: "#223A5E", letterSpacing: "-0.04em", lineHeight: "1" }}>#3</p>
              <p style={{ fontSize: 10, color: "#64748b", marginTop: 2 }}>of 12 conferences attended</p>
              <p style={{ fontSize: 9, color: "#223A5E", fontWeight: 500, marginTop: 6 }}>View all →</p>
            </div>

            {/* Col 3 — Rep table */}
            <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 10, overflow: "hidden" }}>
              <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#64748b", padding: "10px 10px 0" }}>
                Sales Execution Score by Rep
              </p>
              <p style={{ fontSize: 9, color: "#64748b", padding: "2px 10px 6px" }}>
                Rep-level sales execution component scores
              </p>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11 }}>
                <thead>
                  <tr style={{ background: "#f8fafc", borderBottom: "1px solid #E2E8F0" }}>
                    {["Rep", "Mtg", "FU", "PI", "Tgt", "Score"].map((h, i) => (
                      <th key={h} style={{
                        textAlign: i === 0 ? "left" : "right",
                        fontSize: 9, fontWeight: 700, textTransform: "uppercase",
                        letterSpacing: "0.07em", color: "#64748b",
                        padding: "7px 10px",
                      }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {REP_TABLE.map((rep, i) => (
                    <tr key={rep.name} style={{
                      background: i % 2 === 0 ? "white" : "#f8fafc",
                      borderBottom: i < REP_TABLE.length - 1 ? "1px solid #f1f5f9" : "none",
                    }}>
                      <td style={{ textAlign: "left", fontWeight: 500, padding: "6px 10px", fontSize: 11 }}>{rep.name}</td>
                      <td style={{ textAlign: "right", padding: "6px 10px" }}>{rep.mtg}</td>
                      <td style={{ textAlign: "right", padding: "6px 10px" }}>{rep.fu}</td>
                      <td style={{ textAlign: "right", padding: "6px 10px" }}>{rep.pi}</td>
                      <td style={{ textAlign: "right", padding: "6px 10px" }}>{rep.tgt}</td>
                      <td style={{ textAlign: "right", padding: "6px 10px" }}>
                        <span style={{ fontWeight: 700, fontSize: 12, color: rep.color }}>{rep.score}</span>
                        <span style={{ fontSize: 9, color: "#64748b" }}>{" · "}{rep.tier}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile — show only the Score card */}
          <div className="block md:hidden" style={{ marginBottom: 14 }}>
            <SalesEffectivenessCard />
          </div>

          {/* Bottom grid — hidden on < lg */}
          <div className="hidden lg:grid" style={{ gridTemplateColumns: "1fr 1fr 1fr", gap: 14 }}>

            {/* Bottom Card 1 — Rep Execution Quadrant */}
            <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 10, padding: 14 }}>
              <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#64748b", marginBottom: 2 }}>
                REP EXECUTION QUADRANT
              </p>
              <p style={{ fontSize: 9, color: "#64748b", marginBottom: 8 }}>Sales activity vs. pipeline influence</p>
              <div style={{
                aspectRatio: "1",
                border: "1px solid #E2E8F0",
                borderRadius: 8,
                background: "#fafbfc",
                position: "relative",
                overflow: "hidden",
              }}>
                <span style={{ position: "absolute", top: 6, left: 6, fontSize: 8, color: "#c7d0de", fontWeight: 500, lineHeight: 1.3 }}>Strategic,<br />Under-Leveraged</span>
                <span style={{ position: "absolute", top: 6, right: 6, fontSize: 8, color: "#c7d0de", fontWeight: 500, lineHeight: 1.3, textAlign: "right" }}>Top<br />Performer</span>
                <span style={{ position: "absolute", bottom: 6, left: 6, fontSize: 8, color: "#c7d0de", fontWeight: 500, lineHeight: 1.3 }}>Low<br />Impact</span>
                <span style={{ position: "absolute", bottom: 6, right: 6, fontSize: 8, color: "#c7d0de", fontWeight: 500, lineHeight: 1.3, textAlign: "right" }}>Busy,<br />Low Yield</span>
                <div style={{ position: "absolute", left: "50%", top: 8, bottom: 8, width: 1, background: "#E2E8F0" }} />
                <div style={{ position: "absolute", top: "50%", left: 8, right: 8, height: 1, background: "#E2E8F0" }} />
                {QUADRANT_DOTS.map((dot) => (
                  <div key={dot.initials} style={{
                    position: "absolute",
                    left: dot.left, top: dot.top,
                    transform: "translate(-50%, -50%)",
                    width: 22, height: 22, borderRadius: "50%",
                    background: dot.bg,
                    border: "2px solid white",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 8, fontWeight: 700, color: "white",
                  }}>{dot.initials}</div>
                ))}
              </div>
            </div>

            {/* Bottom Card 2 — Pipeline Influence by Rep */}
            <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 10, padding: 14 }}>
              <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#64748b", marginBottom: 2 }}>
                PIPELINE INFLUENCE BY REP
              </p>
              <p style={{ fontSize: 9, color: "#64748b", marginBottom: 10 }}>Directional pipeline attributed to each rep</p>
              {PIPELINE_BARS.map((rep) => (
                <div key={rep.name} style={{ marginBottom: 7 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                    <span style={{ fontSize: 10, fontWeight: 500 }}>{rep.name}</span>
                    <span style={{ fontSize: 10, color: "#64748b" }}>{rep.value} · {rep.pct}</span>
                  </div>
                  <div style={{ height: 5, background: "#F1F5F9", borderRadius: 3, overflow: "hidden" }}>
                    <div style={{ width: rep.width, height: "100%", background: "#223A5E", borderRadius: 3 }} />
                  </div>
                </div>
              ))}
              <div style={{ marginTop: 10, paddingTop: 8, borderTop: "1px solid #E2E8F0" }}>
                <p style={{ fontSize: 9, color: "#64748b", marginBottom: 4 }}>Influenced Pipeline vs Goal</p>
                <p style={{ fontSize: 9, color: "#1e293b" }}>$2,316,979 actual</p>
                <p style={{ fontSize: 9, color: "#64748b" }}>$3,071,250 goal</p>
                <div style={{ height: 5, background: "#F1F5F9", borderRadius: 3, overflow: "hidden", marginTop: 5 }}>
                  <div style={{ width: "75.4%", height: "100%", background: "#EF4444", borderRadius: 3 }} />
                </div>
                <p style={{ fontSize: 9, color: "#DC2626", marginTop: 3 }}>75.4% of goal</p>
              </div>
            </div>

            {/* Bottom Card 3 — Risk Heatmap */}
            <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 10, padding: 14 }}>
              <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#64748b", marginBottom: 2 }}>
                SALES EXECUTION RISK HEATMAP
              </p>
              <p style={{ fontSize: 9, color: "#64748b", marginBottom: 8 }}>Rep-level coaching risks</p>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 10 }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid #E2E8F0" }}>
                    {["Rep", "Hold", "F/U", "Target", "Pipe", "Activity"].map((h, i) => (
                      <th key={h} style={{
                        textAlign: i === 0 ? "left" : "center",
                        fontSize: 8, fontWeight: 700, textTransform: "uppercase",
                        letterSpacing: "0.05em", color: "#64748b",
                        padding: "4px 6px",
                      }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {HEATMAP_DATA.map((rep, i) => (
                    <tr key={rep.name} style={{ borderBottom: i < HEATMAP_DATA.length - 1 ? "1px solid #f1f5f9" : "none" }}>
                      <td style={{ textAlign: "left", fontSize: 10, fontWeight: 500, color: "#1e293b", padding: "4px 6px" }}>
                        {rep.name}
                      </td>
                      {([rep.hold, rep.fu, rep.target, rep.pipe, rep.activity] as ChipType[]).map((chip, j) => (
                        <td key={j} style={{ textAlign: "center", padding: "4px 6px" }}>
                          <Chip type={chip} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
                <Chip type="H" label="Healthy" />
                <Chip type="W" label="Watch" />
                <Chip type="R" label="Risk" />
              </div>
              <p style={{ fontSize: 9, color: "#64748b", marginTop: 6 }}>
                2 reps show follow-up or activity risk.
              </p>
            </div>
          </div>
        </div>

        {/* ── Modal footer ── */}
        <div style={{
          background: "#f8fafc",
          borderTop: "1px solid #E2E8F0",
          padding: "10px 20px 14px",
          textAlign: "right",
          fontSize: 10,
          color: "#64748b",
        }}>
          Conference Effectiveness Score:{" "}
          <span style={{ fontWeight: 600, color: "#059669" }}>54/100</span>
          {" · Acceptable performance — see Summary tab for full breakdown"}
        </div>
      </div>
    </div>
  );
}
