import type { CSSProperties } from "react";

type ChipType = "H" | "W" | "R";

function Chip({ type, label }: { type: ChipType; label?: string }) {
  const S = {
    H: { background: "rgba(52,211,153,0.12)", color: "#34D399" },
    W: { background: "rgba(234,179,8,0.15)",  color: "#fbbf24" },
    R: { background: "rgba(239,68,68,0.15)",  color: "#f87171" },
  }[type];
  const chip = (
    <span style={{
      display: "inline-block", width: 22, height: 17, borderRadius: 4,
      fontSize: 8, fontWeight: 700, lineHeight: "17px", textAlign: "center", ...S,
    }}>{type}</span>
  );
  if (!label) return chip;
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
      {chip}
      <span style={{ fontSize: 9, color: "rgba(255,255,255,0.3)" }}>{label}</span>
    </span>
  );
}

const LABEL: CSSProperties = {
  fontSize: 9, fontWeight: 600, textTransform: "uppercase",
  letterSpacing: "0.08em", color: "rgba(255,255,255,0.35)",
};

const SCORE_CARDS = [
  { value: "54",         label: "Conference\nEffectiveness Score", color: "#FCD34D",              border: "rgba(251,191,36,0.25)",  small: false, spanMobile: false },
  { value: "68",         label: "Sales Execution\nScore",          color: "#FCD34D",              border: "rgba(255,255,255,0.1)",  small: false, spanMobile: false },
  { value: "11",         label: "Audience &\nMessaging Score",     color: "#fca5a5",              border: "rgba(239,68,68,0.2)",    small: false, spanMobile: false },
  { value: "74",         label: "Cost Efficiency\nScore",          color: "#6EE7B7",              border: "rgba(52,211,153,0.2)",   small: false, spanMobile: false },
  { value: "$2,316,979", label: "Pipeline\nInfluence",             color: "rgba(255,255,255,0.9)", border: "rgba(255,255,255,0.1)", small: true,  spanMobile: true  },
];

const COMPONENT_ROWS = [
  { name: "Meeting Execution",  pct: "25%", score: 65, tier: "Acceptable", color: "#FCD34D" },
  { name: "Followup Execution", pct: "20%", score: 84, tier: "Strong",     color: "#60A5FA" },
  { name: "Pipeline Influence", pct: "25%", score: 75, tier: "Strong",     color: "#60A5FA" },
  { name: "Target Acct. Exec.", pct: "15%", score: 33, tier: "Weak",       color: "#f87171" },
  { name: "Rep Productivity",   pct: "15%", score: 75, tier: "Acceptable", color: "#FCD34D" },
];

const REP_TABLE = [
  { name: "Lloyd Christmas", mtg: 100, fu: 100, pi: 100, tgt: 5,  score: 77, tier: "Strong",  color: "#60A5FA" },
  { name: "Wayne Campbell",  mtg: 71,  fu: 100, pi: 80,  tgt: 10, score: 74, tier: "Accept.", color: "#FCD34D" },
  { name: "Ron Burgundy",    mtg: 75,  fu: 94,  pi: 58,  tgt: 29, score: 71, tier: "Accept.", color: "#FCD34D" },
  { name: "Happy Gilmore",   mtg: 67,  fu: 100, pi: 92,  tgt: 0,  score: 71, tier: "Accept.", color: "#FCD34D" },
  { name: "Fletcher Reede",  mtg: 50,  fu: 100, pi: 100, tgt: 0,  score: 63, tier: "Accept.", color: "#FCD34D" },
  { name: "Billy Madison",   mtg: 50,  fu: 100, pi: 55,  tgt: 5,  score: 62, tier: "Accept.", color: "#FCD34D" },
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
  { initials: "RB", left: "76%", top: "20%", bg: "#223A5E" },
  { initials: "WC", left: "61%", top: "37%", bg: "#1e3354" },
  { initials: "LC", left: "54%", top: "53%", bg: "#1a2d47" },
  { initials: "HG", left: "35%", top: "63%", bg: "#162438" },
  { initials: "FR", left: "27%", top: "74%", bg: "#111e2e" },
  { initials: "BM", left: "42%", top: "81%", bg: "#111e2e" },
];

const HEATMAP_DATA: { name: string; hold: ChipType; fu: ChipType; target: ChipType; pipe: ChipType; activity: ChipType }[] = [
  { name: "F. Reede",    hold: "W", fu: "H", target: "R", pipe: "H", activity: "R" },
  { name: "L. Christmas",hold: "H", fu: "H", target: "R", pipe: "H", activity: "R" },
  { name: "B. Madison",  hold: "W", fu: "H", target: "R", pipe: "W", activity: "H" },
  { name: "W. Campbell", hold: "H", fu: "H", target: "R", pipe: "W", activity: "H" },
  { name: "R. Burgundy", hold: "H", fu: "H", target: "R", pipe: "W", activity: "H" },
  { name: "H. Gilmore",  hold: "H", fu: "H", target: "R", pipe: "H", activity: "W" },
];

export default function EffectivenessHeroMock() {
  return (
    <div style={{
      background: "#111c2e",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: "12px 12px 0 0",
      borderBottom: "none",
      overflow: "hidden",
      textAlign: "left",
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
          work.useparlay.app/conferences/9 — Conference Details
        </div>
      </div>

      {/* Modal header */}
      <div style={{ background: "#1e3354", padding: "12px 20px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.4)", marginBottom: 4 }}>
          CONFERENCE EFFECTIVENESS
        </p>
        <p style={{ fontSize: 17, fontWeight: 600, color: "white", letterSpacing: "-0.01em" }}>
          Conference Expo 2026
        </p>
        <p style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", marginTop: 3 }}>
          Mar 30, 2026 – Apr 1, 2026 · Nashville, TN
        </p>
      </div>

      {/* Score cards */}
      <div
        className="grid grid-cols-2 sm:grid-cols-5"
        style={{ gap: 10, padding: "12px 20px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        {SCORE_CARDS.map((card) => (
          <div
            key={card.label}
            className={card.spanMobile ? "col-span-2 sm:col-span-1" : ""}
            style={{
              background: "rgba(255,255,255,0.06)",
              border: `1px solid ${card.border}`,
              borderRadius: 10,
              padding: "10px 18px",
              textAlign: "center",
            }}
          >
            <p style={{ fontSize: card.small ? 17 : 22, fontWeight: 700, color: card.color, lineHeight: "1", paddingTop: card.small ? 3 : 0 }}>
              {card.value}
            </p>
            <p style={{ fontSize: 9, color: "rgba(255,255,255,0.35)", lineHeight: 1.3, marginTop: 4, whiteSpace: "pre-line" }}>
              {card.label}
            </p>
          </div>
        ))}
      </div>

      {/* Tab bar */}
      <div style={{
        display: "flex",
        gap: 20,
        padding: "0 20px",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        overflowX: "auto",
      }}>
        {["Summary", "Sales Execution", "Audience & Messaging", "Cost Efficiency", "Definitions"].map((tab) => {
          const active = tab === "Sales Execution";
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

      {/* Metric pills */}
      <div style={{ display: "flex", gap: 10, padding: "12px 20px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        {[
          { label: "Meeting Hold Rate",    value: "65%"      },
          { label: "Follow-up Completion", value: "84%"      },
          { label: "Pipeline / Meeting",   value: "$105,317" },
        ].map((pill) => (
          <div key={pill.label} style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 8,
            padding: "9px 16px",
            flex: 1,
          }}>
            <p style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", marginBottom: 3 }}>{pill.label}</p>
            <p style={{ fontSize: 18, fontWeight: 600, color: "white", letterSpacing: "-0.02em" }}>{pill.value}</p>
          </div>
        ))}
      </div>

      {/* Main body grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-[220px_140px_1fr]"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        {/* Col 1 — Sales Effectiveness Score */}
        <div style={{ padding: "16px 18px", borderRight: "1px solid rgba(255,255,255,0.06)" }}>
          <p style={{ ...LABEL, marginBottom: 10 }}>SALES EFFECTIVENESS SCORE</p>
          <div style={{ display: "flex", alignItems: "baseline", gap: 3, marginBottom: 2 }}>
            <span style={{ fontSize: 44, fontWeight: 700, color: "#FCD34D", letterSpacing: "-0.04em", lineHeight: 1 }}>68</span>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.3)" }}>/100</span>
          </div>
          <p style={{ fontSize: 11, fontWeight: 600, color: "#FCD34D", marginBottom: 10 }}>Acceptable Execution</p>
          <p style={{ fontSize: 9, color: "rgba(255,255,255,0.25)", lineHeight: 1.5, textAlign: "right", marginBottom: 10 }}>
            Conference Strategy: Pipeline Generation<br />
            Strategy-adjusted weights applied ⓘ
          </p>
          <div style={{ height: 1, background: "rgba(255,255,255,0.07)", margin: "8px 0" }} />
          {COMPONENT_ROWS.map((row) => (
            <div key={row.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 5 }}>
              <span style={{ fontSize: 10, color: "rgba(255,255,255,0.4)" }}>
                {row.name} <span style={{ color: "rgba(255,255,255,0.2)" }}>({row.pct})</span>
              </span>
              <span style={{ fontSize: 10, fontWeight: 600, color: row.color }}>{row.score} · {row.tier}</span>
            </div>
          ))}
        </div>

        {/* Col 2 — Rank Card */}
        <div style={{
          padding: "16px 14px",
          borderRight: "1px solid rgba(255,255,255,0.06)",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center",
        }}>
          <p style={{ ...LABEL, marginBottom: 8 }}>SALES EXECUTION RANK</p>
          <p style={{ fontSize: 40, fontWeight: 700, color: "white", letterSpacing: "-0.04em", lineHeight: 1 }}>#3</p>
          <p style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", marginTop: 5 }}>of 12 conferences attended</p>
          <p style={{ fontSize: 10, color: "rgba(52,211,153,0.7)", fontWeight: 500, marginTop: 10 }}>View all →</p>
        </div>

        {/* Col 3 — Rep Table */}
        <div style={{ padding: 0 }}>
          <div style={{ padding: "12px 16px 6px" }}>
            <p style={{ ...LABEL, marginBottom: 2 }}>SALES EXECUTION SCORE BY REP</p>
            <p style={{ fontSize: 9, color: "rgba(255,255,255,0.25)" }}>Rep-level sales execution component scores</p>
          </div>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11 }}>
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                {["Rep", "Mtg", "FU", "PI", "Tgt", "Score"].map((h, i) => (
                  <th key={h} style={{
                    textAlign: i === 0 ? "left" : "right",
                    fontSize: 9, fontWeight: 600, textTransform: "uppercase",
                    letterSpacing: "0.07em", color: "rgba(255,255,255,0.3)",
                    padding: i === 0 ? "6px 16px" : "6px 10px",
                  }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {REP_TABLE.map((rep, i) => (
                <tr key={rep.name} style={{ borderBottom: i < REP_TABLE.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                  <td style={{ textAlign: "left", fontSize: 11, fontWeight: 500, color: "rgba(255,255,255,0.75)", padding: "7px 16px" }}>{rep.name}</td>
                  <td style={{ textAlign: "right", color: "rgba(255,255,255,0.45)", fontSize: 11, padding: "7px 10px" }}>{rep.mtg}</td>
                  <td style={{ textAlign: "right", color: "rgba(255,255,255,0.45)", fontSize: 11, padding: "7px 10px" }}>{rep.fu}</td>
                  <td style={{ textAlign: "right", color: "rgba(255,255,255,0.45)", fontSize: 11, padding: "7px 10px" }}>{rep.pi}</td>
                  <td style={{ textAlign: "right", color: "rgba(255,255,255,0.45)", fontSize: 11, padding: "7px 10px" }}>{rep.tgt}</td>
                  <td style={{ textAlign: "right", padding: "7px 10px" }}>
                    <span style={{ fontWeight: 700, fontSize: 11, color: rep.color }}>{rep.score}</span>
                    <span style={{ fontSize: 9, color: "rgba(255,255,255,0.3)", marginLeft: 4 }}>· {rep.tier}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom three-panel row — hidden below lg */}
      <div
        className="hidden lg:grid"
        style={{ gridTemplateColumns: "1fr 1.15fr 1fr", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        {/* Panel 1 — Rep Execution Quadrant */}
        <div style={{ padding: "16px 18px" }}>
          <p style={{ ...LABEL, marginBottom: 3 }}>REP EXECUTION QUADRANT</p>
          <p style={{ fontSize: 9, color: "rgba(255,255,255,0.25)", marginBottom: 10 }}>Sales activity vs. pipeline influence</p>
          <div style={{
            position: "relative",
            width: "100%",
            aspectRatio: "1.1",
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 8,
            overflow: "hidden",
            marginTop: 5,
          }}>
            <span style={{ position: "absolute", top: 6, left: 6, fontSize: 7.5, color: "rgba(255,255,255,0.2)", fontWeight: 500, lineHeight: 1.3 }}>Strategic,<br />Under-Leveraged</span>
            <span style={{ position: "absolute", top: 6, right: 6, fontSize: 7.5, color: "rgba(255,255,255,0.2)", fontWeight: 500, lineHeight: 1.3, textAlign: "right" }}>Top<br />Performer</span>
            <span style={{ position: "absolute", bottom: 6, left: 6, fontSize: 7.5, color: "rgba(255,255,255,0.2)", fontWeight: 500, lineHeight: 1.3 }}>Low<br />Impact</span>
            <span style={{ position: "absolute", bottom: 6, right: 6, fontSize: 7.5, color: "rgba(255,255,255,0.2)", fontWeight: 500, lineHeight: 1.3, textAlign: "right" }}>Busy,<br />Low Yield</span>
            <div style={{ position: "absolute", left: "50%", top: "12%", bottom: "12%", width: 1, background: "rgba(255,255,255,0.07)" }} />
            <div style={{ position: "absolute", top: "50%", left: "12%", right: "12%", height: 1, background: "rgba(255,255,255,0.07)" }} />
            {QUADRANT_DOTS.map((dot) => (
              <div key={dot.initials} style={{
                position: "absolute",
                left: dot.left, top: dot.top,
                transform: "translate(-50%, -50%)",
                width: 22, height: 22, borderRadius: "50%",
                background: dot.bg,
                border: "2px solid rgba(255,255,255,0.15)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 7, fontWeight: 700, color: "rgba(255,255,255,0.9)",
              }}>{dot.initials}</div>
            ))}
          </div>
        </div>

        {/* Panel 2 — Pipeline Influence by Rep */}
        <div style={{ padding: "16px 18px", borderLeft: "1px solid rgba(255,255,255,0.06)" }}>
          <p style={{ ...LABEL, marginBottom: 3 }}>PIPELINE INFLUENCE BY REP</p>
          <p style={{ fontSize: 9, color: "rgba(255,255,255,0.25)", marginBottom: 10 }}>Directional pipeline attributed to each rep</p>
          {PIPELINE_BARS.map((rep) => (
            <div key={rep.name} style={{ marginBottom: 7 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                <span style={{ fontSize: 10, fontWeight: 500, color: "rgba(255,255,255,0.65)" }}>{rep.name}</span>
                <span style={{ fontSize: 10, color: "rgba(255,255,255,0.3)" }}>{rep.value} · {rep.pct}</span>
              </div>
              <div style={{ height: 5, background: "rgba(255,255,255,0.06)", borderRadius: 3, overflow: "hidden" }}>
                <div style={{ width: rep.width, height: "100%", background: "#223A5E", borderRadius: 3 }} />
              </div>
            </div>
          ))}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 10 }}>
            <p style={{ fontSize: 9, color: "rgba(255,255,255,0.3)" }}>Influenced Pipeline vs Goal</p>
            <p style={{ fontSize: 10, color: "rgba(255,255,255,0.6)" }}>$2,316,979 actual</p>
            <p style={{ fontSize: 9, color: "rgba(255,255,255,0.3)" }}>$3,071,250 goal</p>
            <div style={{ height: 5, background: "rgba(255,255,255,0.06)", borderRadius: 3, overflow: "hidden", margin: "5px 0 3px" }}>
              <div style={{ width: "75.4%", height: "100%", background: "#ef4444", borderRadius: 3 }} />
            </div>
            <p style={{ fontSize: 9, color: "#f87171", fontWeight: 500 }}>75.4% of goal</p>
          </div>
        </div>

        {/* Panel 3 — Sales Execution Risk Heatmap */}
        <div style={{ padding: "16px 18px", borderLeft: "1px solid rgba(255,255,255,0.06)" }}>
          <p style={{ ...LABEL, marginBottom: 3 }}>SALES EXECUTION RISK HEATMAP</p>
          <p style={{ fontSize: 9, color: "rgba(255,255,255,0.25)", marginBottom: 10 }}>Rep-level coaching risks</p>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                {["Rep", "Hold", "F/U", "Target", "Pipe", "Activity"].map((h, i) => (
                  <th key={h} style={{
                    textAlign: i === 0 ? "left" : "center",
                    fontSize: 8, fontWeight: 600, textTransform: "uppercase",
                    letterSpacing: "0.06em", color: "rgba(255,255,255,0.25)",
                    padding: "4px 0 6px",
                  }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {HEATMAP_DATA.map((rep, i) => (
                <tr key={rep.name} style={{ borderBottom: i < HEATMAP_DATA.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                  <td style={{ textAlign: "left", fontSize: 10, color: "rgba(255,255,255,0.6)", padding: "5px 0" }}>{rep.name}</td>
                  {([rep.hold, rep.fu, rep.target, rep.pipe, rep.activity] as ChipType[]).map((chip, j) => (
                    <td key={j} style={{ textAlign: "center", padding: "5px 0" }}><Chip type={chip} /></td>
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
          <p style={{ fontSize: 9, color: "rgba(255,255,255,0.2)", marginTop: 6 }}>
            2 reps show follow-up or activity risk.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div style={{ padding: "10px 20px", borderTop: "1px solid rgba(255,255,255,0.06)", textAlign: "right" }}>
        <span style={{ fontSize: 9, color: "rgba(255,255,255,0.25)" }}>Conference Effectiveness Score: </span>
        <span style={{ fontSize: 9, fontWeight: 600, color: "#34D399" }}>54/100</span>
        <span style={{ fontSize: 9, color: "rgba(255,255,255,0.25)" }}>{" · Acceptable performance — see Summary tab for full breakdown"}</span>
      </div>

    </div>
  );
}
