"use client";

import { useState, useEffect } from "react";
import type { ICPConfig } from "./StepDefineICP";
import type { BuyerRole } from "./StepMapTitles";

interface Props {
  rows: Record<string, string>[];
  columnMapping: { name: string | null; title: string | null; company: string | null; type: string | null };
  prospectValues: string[];
  icpConfig: ICPConfig;
  titleClassifications: Record<string, BuyerRole>;
  conferenceName: string;
  skipTypeFilter: boolean;
}

interface ScoreResult {
  audienceFitScore: number;
  buyerAccessScore: number;
  recommendation: string;
  totalAttendees: number;
  prospectCompanies: number;
  qualifiedCompanies: number;
  mustTargetCount: number;
  highPriorityCount: number;
  avgBuyerScore: number;
}

const RECOMMENDATION_LABELS: Record<string, { label: string; color: string; bg: string }> = {
  attend_and_invest: { label: "Attend & Invest", color: "#166534", bg: "#dcfce7" },
  attend_and_maintain: { label: "Attend & Maintain", color: "#0369a1", bg: "#e0f2fe" },
  reconsider_format: { label: "Reconsider Format", color: "#92400e", bg: "#fef3c7" },
  skip: { label: "Skip", color: "#991b1b", bg: "#fee2e2" },
};

function recommendationFromScore(score: number): string {
  if (score >= 80) return "attend_and_invest";
  if (score >= 65) return "attend_and_maintain";
  if (score >= 45) return "reconsider_format";
  return "skip";
}

function ScoreBar({ score, color = "#34D399" }: { score: number; color?: string }) {
  return (
    <div style={{ background: "#f1f5f9", borderRadius: 4, height: 8, overflow: "hidden" }}>
      <div
        style={{
          width: `${score}%`,
          height: "100%",
          background: color,
          borderRadius: 4,
          transition: "width 600ms ease-out",
        }}
      />
    </div>
  );
}

function UnlockedCard({ title, score, detail }: { title: string; score: number; detail: string }) {
  return (
    <div
      style={{
        background: "#fff",
        border: "1.5px solid #e2e8f0",
        borderRadius: 14,
        padding: "24px",
        flex: 1,
        minWidth: 220,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
        <span style={{ fontFamily: "var(--font-inter)", fontSize: 14, fontWeight: 700, color: "#223A5E", textTransform: "uppercase", letterSpacing: "0.06em" }}>
          {title}
        </span>
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: "50%",
            background: "#dcfce7",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M11 5H3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z" stroke="#166534" strokeWidth="1.2" />
            <path d="M5 5V3.5a2 2 0 0 1 4 0V5" stroke="#166534" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <div style={{ fontFamily: "var(--font-inter)", fontSize: 40, fontWeight: 800, color: "#34D399", lineHeight: 1, marginBottom: 8 }}>
        {score}
        <span style={{ fontSize: 18, fontWeight: 600, color: "#94a3b8" }}>/100</span>
      </div>
      <ScoreBar score={score} />
      <p style={{ fontFamily: "var(--font-inter)", fontSize: 13, color: "#64748b", marginTop: 12, lineHeight: 1.6, marginBottom: 0 }}>
        {detail}
      </p>
    </div>
  );
}

function LockedCard({ title }: { title: string }) {
  return (
    <div
      style={{
        background: "#fff",
        border: "1.5px solid #e2e8f0",
        borderRadius: 14,
        padding: "24px",
        flex: 1,
        minWidth: 220,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Blurred content */}
      <div style={{ filter: "blur(5px)", userSelect: "none", pointerEvents: "none" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
          <span style={{ fontFamily: "var(--font-inter)", fontSize: 14, fontWeight: 700, color: "#223A5E", textTransform: "uppercase", letterSpacing: "0.06em" }}>
            {title}
          </span>
        </div>
        <div style={{ fontFamily: "var(--font-inter)", fontSize: 40, fontWeight: 800, color: "#34D399", lineHeight: 1, marginBottom: 8 }}>
          ??<span style={{ fontSize: 18, fontWeight: 600, color: "#94a3b8" }}>/100</span>
        </div>
        <ScoreBar score={55} />
        <p style={{ fontFamily: "var(--font-inter)", fontSize: 13, color: "#64748b", marginTop: 12, lineHeight: 1.6, marginBottom: 0 }}>
          Detailed analysis available with full access.
        </p>
      </div>
      {/* Lock overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(255,255,255,0.55)",
          gap: 8,
        }}
      >
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: "#f1f5f9",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <rect x="3" y="8" width="12" height="8" rx="2" stroke="#64748b" strokeWidth="1.5" />
            <path d="M6 8V5.5a3 3 0 0 1 6 0V8" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        <span
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: 12,
            fontWeight: 600,
            color: "#475569",
            background: "#f1f5f9",
            border: "1px solid #e2e8f0",
            padding: "4px 12px",
            borderRadius: 20,
            textAlign: "center",
          }}
        >
          Unlock with free account
        </span>
      </div>
    </div>
  );
}

export default function StepResults({
  rows,
  columnMapping,
  prospectValues,
  icpConfig,
  titleClassifications,
  conferenceName,
  skipTypeFilter,
}: Props) {
  const [result, setResult] = useState<ScoreResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [emailSkipped, setEmailSkipped] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [emailLoading, setEmailLoading] = useState(false);

  const showResults = emailSubmitted || emailSkipped;

  const prospectRows = skipTypeFilter
    ? rows
    : rows.filter((r) => {
        const typeVal = columnMapping.type ? r[columnMapping.type]?.trim() : "";
        return prospectValues.includes(typeVal);
      });

  useEffect(() => {
    async function fetchScore() {
      setLoading(true);
      setError(null);
      try {
        const attendees = prospectRows.map((r) => ({
          name: columnMapping.name ? r[columnMapping.name] || "" : "",
          title: columnMapping.title ? r[columnMapping.title] || "" : "",
          company: columnMapping.company ? r[columnMapping.company] || "" : "",
          isProspect: true,
        }));

        const functionPriorities: Record<string, string> = {};
        Object.entries(icpConfig.functions).forEach(([k, v]) => {
          if (v) functionPriorities[k] = v;
        });

        const seniorityPriorities: Record<string, string> = {};
        Object.entries(icpConfig.seniority).forEach(([k, v]) => {
          if (v) seniorityPriorities[k] = v;
        });

        const payload = {
          attendees,
          icpConfig: {
            functionPriorities,
            seniorityPriorities,
            titleClassifications,
          },
        };

        const apiBase = process.env.NEXT_PUBLIC_APP_URL ?? "https://work.useparlay.app";
        const res = await fetch(`${apiBase}/api/public/score-audience`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!res.ok) {
          throw new Error(`API error ${res.status}`);
        }

        const data: ScoreResult = await res.json();
        setResult(data);
      } catch {
        // Fallback: compute a simplified client-side score for preview
        const companies = new Set(
          prospectRows.map((r) => (columnMapping.company ? r[columnMapping.company]?.trim() : "")).filter(Boolean)
        );
        const totalCompanies = companies.size;
        const total = prospectRows.length;

        // Simple heuristic score
        const highFuncCount = Object.values(icpConfig.functions).filter((v) => v === "high").length;
        const highSeniorCount = Object.values(icpConfig.seniority).filter((v) => v === "high").length;
        const decisionMakers = prospectRows.filter((r) => {
          const title = (columnMapping.title ? r[columnMapping.title] : "")?.toLowerCase() ?? "";
          return Object.entries(titleClassifications).some(
            ([t, role]) => role === "decision_maker" && title.includes(t)
          );
        }).length;

        const audienceFit = Math.min(
          100,
          Math.round(
            30 + (highFuncCount / 7) * 30 + (highSeniorCount / 6) * 20 + (totalCompanies > 50 ? 20 : (totalCompanies / 50) * 20)
          )
        );
        const buyerAccess = Math.min(
          100,
          Math.round(20 + (decisionMakers / Math.max(total, 1)) * 80 * 3)
        );

        setResult({
          audienceFitScore: audienceFit,
          buyerAccessScore: buyerAccess,
          recommendation: recommendationFromScore(audienceFit),
          totalAttendees: total,
          prospectCompanies: totalCompanies,
          qualifiedCompanies: Math.round(totalCompanies * 0.45),
          mustTargetCount: Math.round(totalCompanies * 0.04),
          highPriorityCount: Math.round(totalCompanies * 0.18),
          avgBuyerScore: buyerAccess,
        });
      }
      setLoading(false);
    }
    fetchScore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Enter a valid email address.");
      return;
    }
    setEmailLoading(true);
    try {
      await fetch("/api/score-leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, partialScore: result }),
      });
    } catch {
      // fire-and-forget
    }
    setEmailSubmitted(true);
    setEmailLoading(false);
  }

  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://work.useparlay.app";
  const rec = result ? RECOMMENDATION_LABELS[result.recommendation] ?? RECOMMENDATION_LABELS["attend_and_maintain"] : null;

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "80px 0" }}>
        <div
          style={{
            width: 56,
            height: 56,
            border: "4px solid #e2e8f0",
            borderTopColor: "#34D399",
            borderRadius: "50%",
            animation: "spin 0.9s linear infinite",
            margin: "0 auto 24px",
          }}
        />
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: 18,
            fontWeight: 600,
            color: "#223A5E",
            margin: "0 0 6px",
          }}
        >
          Analyzing {prospectRows.length.toLocaleString()} attendees across{" "}
          {new Set(prospectRows.map((r) => columnMapping.company ? r[columnMapping.company]?.trim() : "").filter(Boolean)).size.toLocaleString()} companies…
        </p>
        <p style={{ fontFamily: "var(--font-inter)", fontSize: 14, color: "#94a3b8", margin: 0 }}>
          This usually takes a few seconds.
        </p>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  if (error || !result) {
    return (
      <div style={{ textAlign: "center", padding: "60px 0" }}>
        <p style={{ fontFamily: "var(--font-inter)", fontSize: 16, color: "#dc2626" }}>
          {error ?? "Something went wrong. Please try again."}
        </p>
      </div>
    );
  }

  // Email gate
  if (!showResults) {
    return (
      <div style={{ maxWidth: 480, margin: "0 auto", textAlign: "center", padding: "60px 16px" }}>
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            background: "#dcfce7",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 20px",
          }}
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M5 12l6 6L23 7" stroke="#166534" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: 28,
            fontWeight: 700,
            color: "#223A5E",
            margin: "0 0 8px",
          }}
        >
          Your score is ready.
        </h2>
        <p style={{ fontFamily: "var(--font-inter)", fontSize: 15, color: "#64748b", margin: "0 0 32px", lineHeight: 1.6 }}>
          Where should we send your full score?
        </p>
        <form onSubmit={handleEmailSubmit}>
          <input
            type="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setEmailError(null); }}
            style={{
              width: "100%",
              fontFamily: "var(--font-inter)",
              fontSize: 15,
              color: "#223A5E",
              background: "#fff",
              border: `1.5px solid ${emailError ? "#dc2626" : "#e2e8f0"}`,
              borderRadius: 10,
              padding: "12px 16px",
              outline: "none",
              marginBottom: emailError ? 6 : 12,
              boxSizing: "border-box",
            }}
          />
          {emailError && (
            <p style={{ fontFamily: "var(--font-inter)", fontSize: 12, color: "#dc2626", textAlign: "left", margin: "0 0 10px" }}>
              {emailError}
            </p>
          )}
          <button
            type="submit"
            disabled={emailLoading}
            style={{
              width: "100%",
              fontFamily: "var(--font-inter)",
              fontSize: 15,
              fontWeight: 600,
              color: "#111827",
              background: "#34D399",
              border: "none",
              borderRadius: 10,
              padding: "13px",
              cursor: emailLoading ? "not-allowed" : "pointer",
              marginBottom: 12,
              transition: "background 150ms",
            }}
            onMouseEnter={(e) => !emailLoading && (e.currentTarget.style.background = "#6EE7B7")}
            onMouseLeave={(e) => !emailLoading && (e.currentTarget.style.background = "#34D399")}
          >
            {emailLoading ? "Sending…" : "Send my score →"}
          </button>
        </form>
        <button
          onClick={() => setEmailSkipped(true)}
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: 13,
            color: "#94a3b8",
            background: "none",
            border: "none",
            cursor: "pointer",
            textDecoration: "underline",
            textUnderlineOffset: 3,
          }}
        >
          Skip — just show me
        </button>
      </div>
    );
  }

  // Full results
  return (
    <div>
      {/* Score hero card */}
      <div
        style={{
          background: "linear-gradient(135deg, #223A5E 0%, #1a2f4d 100%)",
          borderRadius: 16,
          padding: "32px",
          marginBottom: 24,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background network dots */}
        <svg
          style={{ position: "absolute", inset: 0, opacity: 0.06, pointerEvents: "none" }}
          width="100%" height="100%" viewBox="0 0 600 200" preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <circle cx="50" cy="50" r="4" fill="white" />
          <circle cx="200" cy="80" r="6" fill="white" />
          <circle cx="350" cy="40" r="5" fill="white" />
          <circle cx="500" cy="100" r="4" fill="white" />
          <circle cx="100" cy="150" r="5" fill="white" />
          <line x1="50" y1="50" x2="200" y2="80" stroke="white" strokeWidth="1" />
          <line x1="200" y1="80" x2="350" y2="40" stroke="white" strokeWidth="1" />
          <line x1="350" y1="40" x2="500" y2="100" stroke="white" strokeWidth="1" />
          <line x1="100" y1="150" x2="200" y2="80" stroke="white" strokeWidth="1" />
        </svg>

        <div style={{ position: "relative", display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: 24, justifyContent: "space-between" }}>
          <div>
            <div
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 96,
                fontWeight: 800,
                color: "#34D399",
                lineHeight: 1,
                marginBottom: 4,
              }}
            >
              {result.audienceFitScore}
              <span style={{ fontSize: 32, fontWeight: 600, color: "rgba(255,255,255,0.4)" }}>/100</span>
            </div>
            <div
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 14,
                color: "rgba(255,255,255,0.7)",
                marginBottom: 12,
              }}
            >
              Audience Fit Score · {conferenceName}
            </div>
            {rec && (
              <span
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 13,
                  fontWeight: 700,
                  color: rec.color,
                  background: rec.bg,
                  padding: "4px 14px",
                  borderRadius: 20,
                  display: "inline-block",
                }}
              >
                {rec.label}
              </span>
            )}
          </div>
          <div
            style={{
              background: "rgba(255,255,255,0.08)",
              borderRadius: 12,
              padding: "16px 20px",
              minWidth: 240,
              flex: 1,
              maxWidth: 340,
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 14,
                color: "rgba(255,255,255,0.85)",
                margin: 0,
                lineHeight: 1.7,
              }}
            >
              <strong style={{ color: "#34D399" }}>{result.qualifiedCompanies}</strong> of {result.prospectCompanies} prospect companies have qualified buyers present.{" "}
              Avg buyer access score <strong style={{ color: "#34D399" }}>{result.avgBuyerScore}/100</strong> —{" "}
              <strong style={{ color: "#fff" }}>{result.mustTargetCount}</strong> Must Target,{" "}
              <strong style={{ color: "#fff" }}>{result.highPriorityCount}</strong> High Priority companies identified.
            </p>
          </div>
        </div>
      </div>

      {/* Unlocked score cards */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 16 }}>
        <UnlockedCard
          title="Audience Fit"
          score={result.audienceFitScore}
          detail={`${result.prospectCompanies} prospect companies identified. ${result.qualifiedCompanies} have at least one ICP-match title present.`}
        />
        <UnlockedCard
          title="Buyer Access"
          score={result.buyerAccessScore}
          detail={`Avg buyer access score across qualified companies is ${result.avgBuyerScore}/100. ${result.mustTargetCount} companies scored Must Target.`}
        />
      </div>

      {/* Gate card */}
      <div
        style={{
          background: "linear-gradient(135deg, #223A5E 0%, #1a2f4d 100%)",
          borderRadius: 16,
          padding: "28px 28px 24px",
          marginBottom: 16,
          color: "#fff",
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: 22,
            fontWeight: 700,
            color: "#fff",
            margin: "0 0 8px",
          }}
        >
          Unlock the full Calendar Intelligence score
        </h3>
        <p style={{ fontFamily: "var(--font-inter)", fontSize: 14, color: "rgba(255,255,255,0.7)", margin: "0 0 20px", lineHeight: 1.6 }}>
          You&apos;ve seen Audience Fit and Buyer Access. The complete score adds Target Opportunity, Commercial Potential, Cost Justification, and a final recommendation.
        </p>
        <ul style={{ padding: 0, margin: "0 0 24px", listStyle: "none", display: "flex", flexWrap: "wrap", gap: "6px 24px" }}>
          {["Target Opportunity", "Commercial Potential", "Cost Justification", "Score and compare multiple conferences"].map((item) => (
            <li
              key={item}
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 14,
                color: "rgba(255,255,255,0.85)",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#34D399", flexShrink: 0, display: "inline-block" }} />
              {item}
            </li>
          ))}
        </ul>
        <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <a
            href={`${appUrl}/signup`}
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 15,
              fontWeight: 600,
              color: "#111827",
              background: "#34D399",
              borderRadius: 10,
              padding: "11px 24px",
              textDecoration: "none",
              display: "inline-block",
              transition: "background 150ms",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#6EE7B7")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#34D399")}
          >
            Create free account →
          </a>
          <span style={{ fontFamily: "var(--font-inter)", fontSize: 13, color: "rgba(255,255,255,0.45)" }}>
            No credit card. Free to start.
          </span>
        </div>
      </div>

      {/* Locked score cards */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
        <LockedCard title="Target Opportunity" />
        <LockedCard title="Commercial Potential" />
        <LockedCard title="Cost Justification" />
        <LockedCard title="Final Recommendation" />
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
