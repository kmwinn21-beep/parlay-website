import type { CSSProperties } from "react";

const OUTER: CSSProperties = {
  background: "white",
  border: "1px solid rgba(34,58,94,0.1)",
  borderRadius: "12px 12px 0 0",
  boxShadow: "0 4px 24px rgba(34,58,94,0.1)",
  overflow: "hidden",
  width: "100%",
};

const SEC: CSSProperties = {
  fontSize: 9, fontWeight: 600, textTransform: "uppercase",
  letterSpacing: "0.08em", color: "#94a3b8",
};

const SEC_HDG: CSSProperties = {
  fontSize: 10, fontWeight: 700, color: "#223A5E",
  textTransform: "uppercase", letterSpacing: "0.05em",
  marginBottom: 14,
};

const SCORE_CARDS = [
  { value: "54",         label: "Conference\nEffectiveness Score", color: "#D97706", small: false },
  { value: "68",         label: "Sales Execution\nScore",          color: "#D97706", small: false },
  { value: "11",         label: "Audience &\nMessaging Score",     color: "#ef4444", small: false },
  { value: "74",         label: "Cost Efficiency\nScore",          color: "#059669", small: false },
  { value: "$2,316,979", label: "Pipeline\nInfluence",             color: "#223A5E", small: true  },
];

const BREAKDOWN_ROWS = [
  { label: "ICP & Target Quality",     pct: "20%", score: 26, width: "26%", color: "#3b82f6" },
  { label: "Meeting Execution",        pct: "20%", score: 51, width: "51%", color: "#34D399" },
  { label: "Pipeline Influence Index", pct: "30%", score: 75, width: "75%", color: "#8b5cf6" },
  { label: "Engagement Breadth",       pct: "5%",  score: 4,  width: "4%",  color: "#06b6d4" },
  { label: "Cost Efficiency",          pct: "10%", score: 74, width: "74%", color: "#f59e0b" },
  { label: "Follow-up Execution",      pct: "10%", score: 84, width: "84%", color: "#f59e0b" },
  { label: "Net-New Engaged",          pct: "5%",  score: 0,  width: "1%",  color: "#94a3b8" },
];

const REP_TABLE = [
  { name: "Ron Burgundy",   icp: 18, mtg: 71, pi: 100, brd: 1, cost: 79, fu: 94,  nn: 13, score: 66, tier: "Acceptable",  scoreColor: "#D97706" },
  { name: "Wayne Campbell", icp: 5,  mtg: 66, pi: 86,  brd: 1, cost: 78, fu: 100, nn: 0,  score: 58, tier: "Weak",        scoreColor: "#D97706" },
  { name: "Lloyd Christmas",icp: 1,  mtg: 25, pi: 76,  brd: 1, cost: 71, fu: 100, nn: 0,  score: 45, tier: "Inefficient", scoreColor: "#ef4444" },
  { name: "Happy Gilmore",  icp: 6,  mtg: 33, pi: 67,  brd: 1, cost: 78, fu: 100, nn: 11, score: 46, tier: "Inefficient", scoreColor: "#ef4444" },
  { name: "Fletcher Reede", icp: 15, mtg: 35, pi: 50,  brd: 1, cost: 80, fu: 100, nn: 18, score: 44, tier: "Inefficient", scoreColor: "#ef4444" },
  { name: "Billy Madison",  icp: 1,  mtg: 50, pi: 38,  brd: 0, cost: 68, fu: 100, nn: 50, score: 41, tier: "Inefficient", scoreColor: "#ef4444" },
];

const PIPELINE_ITEMS = [
  { value: "$2,316,979", color: "#223A5E", label: "Total" },
  { value: "$2,205,055", color: "#34D399",  label: "95% of total\nICP" },
  { value: "$0",         color: "#223A5E", label: "0% of total\nNet-New" },
  { value: "$452,826",   color: "#223A5E", label: "20% of total\nMulti-Touch" },
];

export default function EffectivenessSummaryMock() {
  return (
    <div style={OUTER}>

      {/* Browser chrome */}
      <div style={{
        background: "#f8fafc",
        padding: "10px 14px",
        display: "flex",
        alignItems: "center",
        gap: 6,
        borderBottom: "1px solid #e2e8f0",
      }}>
        {(["#ef4444", "#f59e0b", "#34D399"] as const).map((c) => (
          <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c, flexShrink: 0 }} />
        ))}
        <div style={{
          flex: 1,
          margin: "0 8px",
          background: "white",
          border: "1px solid #e2e8f0",
          borderRadius: 5,
          padding: "3px 10px",
          fontFamily: "monospace",
          fontSize: 10,
          color: "#94a3b8",
          textAlign: "center",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}>
          work.useparlay.app/conferences/9 — Conference Details
        </div>
      </div>

      {/* Modal header — green gradient */}
      <div style={{
        background: "linear-gradient(135deg, #2ECC8E 0%, #25B87E 45%, #1C9E6B 100%)",
        padding: "14px 20px 0",
      }}>
        {/* Top row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
          <div>
            <p style={{ fontSize: 9, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.6)", marginBottom: 3 }}>
              CONFERENCE EFFECTIVENESS
            </p>
            <p style={{ fontSize: 18, fontWeight: 700, color: "white", letterSpacing: "-0.02em" }}>
              Conference Expo 2026
            </p>
            <p style={{ fontSize: 10, color: "rgba(255,255,255,0.55)", marginTop: 3 }}>
              Mar 30, 2026 – Apr 1, 2026 · Nashville, TN
            </p>
          </div>
          <div style={{
            width: 24, height: 24, borderRadius: "50%",
            background: "rgba(255,255,255,0.15)",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0, color: "rgba(255,255,255,0.75)", fontSize: 12,
          }}>✕</div>
        </div>

        {/* Score cards — 3 cols mobile, 5 sm+ */}
        <div className="grid grid-cols-3 sm:grid-cols-5" style={{ gap: 8 }}>
          {SCORE_CARDS.map((card) => (
            <div key={card.label} style={{
              background: "white",
              border: "1px solid rgba(34,58,94,0.15)",
              borderRadius: 8,
              padding: 10,
              textAlign: "center",
            }}>
              <p style={{
                fontSize: card.small ? 16 : 22,
                fontWeight: 800,
                color: card.color,
                letterSpacing: "-0.03em",
                lineHeight: "1",
                marginBottom: 3,
                paddingTop: card.small ? 3 : 0,
              }}>
                {card.value}
              </p>
              <p style={{ fontSize: 9, fontWeight: 500, color: "#64748b", lineHeight: 1.3, whiteSpace: "pre-line" }}>
                {card.label}
              </p>
            </div>
          ))}
        </div>

        {/* Tab bar */}
        <div style={{
          display: "flex",
          marginTop: 10,
          borderBottom: "1px solid rgba(255,255,255,0.15)",
          padding: "0 2px",
          overflow: "hidden",
        }}>
          {["Summary", "Sales Execution", "Audience & Messaging", "Cost Efficiency", "Definitions"].map((tab) => {
            const active = tab === "Summary";
            return (
              <span key={tab} style={{
                fontSize: 11,
                fontWeight: active ? 600 : 400,
                color: active ? "white" : "rgba(255,255,255,0.5)",
                padding: "7px 14px",
                borderBottom: `2px solid ${active ? "white" : "transparent"}`,
                marginBottom: -1,
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}>{tab}</span>
            );
          })}
        </div>
      </div>

      {/* Modal body */}
      <div style={{ background: "white", padding: 20 }}>

        {/* Top 2-column grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: 14, marginBottom: 20 }}
        >
          {/* CES Score card */}
          <div style={{
            background: "#f8fafc",
            border: "1px solid #e2e8f0",
            borderRadius: 10,
            padding: 16,
            borderLeft: "4px solid #D97706",
          }}>
            <p style={{ ...SEC, marginBottom: 10 }}>CONFERENCE EFFECTIVENESS SCORE</p>
            <div style={{ display: "flex", alignItems: "baseline", gap: 3, marginBottom: 8 }}>
              <span style={{ fontSize: 52, fontWeight: 800, color: "#D97706", letterSpacing: "-0.04em", lineHeight: 1 }}>54</span>
              <span style={{ fontSize: 16, color: "#94a3b8" }}>/100</span>
            </div>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#D97706", marginBottom: 12 }}>Acceptable performance</p>
            <p style={{ fontSize: 9, color: "#94a3b8", lineHeight: 1.5, textAlign: "right" }}>
              Conference Strategy: Pipeline Generation<br />
              Strategy-adjusted weights applied ⓘ
            </p>
          </div>

          {/* Pipeline Influence Summary */}
          <div style={{
            background: "#f8fafc",
            border: "1px solid #e2e8f0",
            borderRadius: 10,
            padding: 16,
          }}>
            <p style={{ ...SEC, marginBottom: 12 }}>PIPELINE INFLUENCE SUMMARY</p>
            <div style={{ display: "grid", gap: 8 }} className="grid-cols-2 sm:grid-cols-4">
              {PIPELINE_ITEMS.map((item, i) => (
                <div
                  key={i}
                  className={i >= 2 ? "hidden sm:block" : ""}
                  style={i > 0 ? { borderLeft: "1px solid #e2e8f0", paddingLeft: 8 } : {}}
                >
                  <p style={{ fontSize: 16, fontWeight: 700, color: item.color, letterSpacing: "-0.02em", lineHeight: 1 }}>
                    {item.value}
                  </p>
                  <p style={{ fontSize: 9, color: "#94a3b8", marginTop: 4, lineHeight: 1.4, whiteSpace: "pre-line" }}>
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom 2-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 14 }}>

          {/* CES Score Breakdown */}
          <div>
            <p style={SEC_HDG}>CONFERENCE EFFECTIVENESS SCORE BREAKDOWN</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {BREAKDOWN_ROWS.map((row) => (
                <div key={row.label}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 4 }}>
                    <span style={{ fontSize: 12, color: "#475569" }}>
                      {row.label}{" "}
                      <span style={{ fontSize: 11, color: "#94a3b8" }}>{row.pct}</span>
                    </span>
                    <span style={{ fontSize: 13, fontWeight: 700, color: "#223A5E" }}>{row.score}</span>
                  </div>
                  <div style={{ height: 6, background: "#e2e8f0", borderRadius: 3, overflow: "hidden" }}>
                    <div style={{ width: row.width, height: "100%", background: row.color, borderRadius: 3 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Effectiveness Score by Rep */}
          <div>
            <p style={SEC_HDG}>EFFECTIVENESS SCORE BY REP</p>
            <div style={{ overflow: "hidden", borderRadius: 8, border: "1px solid #e2e8f0" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11 }}>
                <thead>
                  <tr style={{ background: "#f8fafc", borderBottom: "1px solid #e2e8f0" }}>
                    {["Rep", "ICP", "Mtg", "PI", "Brd", "Cost", "FU", "NN", "Score"].map((h, i) => (
                      <th key={h} style={{
                        textAlign: i === 0 ? "left" : "right",
                        fontSize: 9, fontWeight: 600, textTransform: "uppercase",
                        letterSpacing: "0.07em", color: "#94a3b8",
                        padding: i === 0 || i === 8 ? "7px 10px" : "7px 6px",
                      }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {REP_TABLE.map((rep, i) => (
                    <tr key={rep.name} style={{ borderBottom: i < REP_TABLE.length - 1 ? "1px solid #f1f5f9" : "none" }}>
                      <td style={{ fontWeight: 600, color: "#223A5E", fontSize: 11, padding: "7px 10px", textAlign: "left" }}>
                        {rep.name}
                      </td>
                      {[rep.icp, rep.mtg, rep.pi, rep.brd, rep.cost, rep.fu, rep.nn].map((v, j) => (
                        <td key={j} style={{ textAlign: "right", color: "#64748b", fontSize: 11, padding: "7px 6px" }}>{v}</td>
                      ))}
                      <td style={{ textAlign: "right", padding: "7px 10px", whiteSpace: "nowrap" }}>
                        <span style={{ fontSize: 13, fontWeight: 700, color: rep.scoreColor }}>{rep.score}</span>
                        <span style={{ fontSize: 9, color: "#94a3b8", marginLeft: 4 }}>· {rep.tier}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div style={{
                padding: "8px 10px",
                background: "#f8fafc",
                borderTop: "1px solid #e2e8f0",
                fontSize: 9,
                color: "#94a3b8",
                lineHeight: 1.5,
              }}>
                ICP = ICP &amp; Target Quality · Mtg = Meeting Execution · PI = Pipeline Influence · Brd = Breadth · Cost = Cost Efficiency · FU = Follow-up · NN = Net-New
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
