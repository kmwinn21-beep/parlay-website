"use client";

import Link from "next/link";

export default function DemoRequestPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">

      {/* Hero */}
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        {/* Pill badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(15,110,86,0.15)",
            border: "1px solid rgba(15,110,86,0.25)",
            borderRadius: 20,
            padding: "6px 14px",
            marginBottom: 20,
          }}
        >
          <CalendarIcon />
          <span
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 13,
              fontWeight: 600,
              color: "#6EE7B7",
            }}
          >
            30-minute live walkthrough
          </span>
        </div>

        <h1
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1.15,
            margin: "0 auto 16px",
            maxWidth: 560,
          }}
        >
          See Parlay in action
        </h1>
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: 16,
            color: "rgba(255,255,255,0.6)",
            maxWidth: 520,
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          We&apos;ll walk through your conference program, show you how the scoring engines work, and answer your questions live.
        </p>
      </div>

      {/* Two-column layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 32,
          alignItems: "start",
        }}
      >
        {/* Left — Form */}
        <div
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 16,
            padding: "36px",
          }}
        >
          <FormSection />
        </div>

        {/* Right — Two stacked panels */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

          {/* Panel 1 — What you'll see */}
          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 16,
              padding: "28px",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                margin: "0 0 20px",
              }}
            >
              What you&apos;ll see
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <FeatureRow
                icon={<TargetIcon />}
                title="Pre-conference scoring"
                description="ICP matching, buying committee presence, and saturation scores before you spend a dollar."
              />
              <FeatureRow
                icon={<ChartBarIcon />}
                title="Conference Effectiveness Score"
                description="Seven-dimension scoring across meeting execution, pipeline influence, and rep performance."
              />
              <FeatureRow
                icon={<UsersIcon />}
                title="Rep accountability"
                description="Individual execution scores, floor coverage, and follow-through tracking per rep."
              />
              <FeatureRow
                icon={<TrendingUpIcon />}
                title="Multi-year program analytics"
                description="Saturation trends, relationship trajectories, and ROI comparison across conference instances."
              />
            </div>
          </div>

          {/* Panel 2 — What happens next */}
          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 16,
              padding: "28px",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                margin: "0 0 20px",
              }}
            >
              What happens next
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <StepRow
                num={1}
                title="We reach out within 24 hours"
                description="To schedule a time that works for you."
              />
              <StepRow
                num={2}
                title="30-minute live walkthrough"
                description="Tailored to your conference program and team structure."
              />
              <StepRow
                num={3}
                title="Start your free trial"
                description="No credit card required. Import your first conference list same day."
              />
            </div>

            <div
              style={{
                height: 1,
                background: "rgba(255,255,255,0.1)",
                margin: "20px 0",
              }}
            />

            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 13,
                color: "rgba(255,255,255,0.45)",
                margin: 0,
              }}
            >
              Prefer to explore on your own?{" "}
              <a
                href="https://www.useparlay.app/?demo=true"
                style={{
                  color: "#6EE7B7",
                  textDecoration: "none",
                  fontWeight: 500,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
              >
                Try the self-guided demo →
              </a>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

// ── Placeholder form (replaced in Section 3) ──────────────────

function FormSection() {
  return (
    <p
      style={{
        fontFamily: "var(--font-inter)",
        fontSize: 15,
        color: "rgba(255,255,255,0.3)",
        textAlign: "center",
        padding: "48px 0",
        margin: 0,
      }}
    >
      Form coming in Section 3
    </p>
  );
}

// ── Panel sub-components ──────────────────────────────────────

function FeatureRow({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: 8,
          background: "rgba(15,110,86,0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          color: "#6EE7B7",
        }}
      >
        {icon}
      </div>
      <div>
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: 14,
            fontWeight: 600,
            color: "#fff",
            margin: "0 0 3px",
          }}
        >
          {title}
        </p>
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: 13,
            color: "rgba(255,255,255,0.55)",
            margin: 0,
            lineHeight: 1.6,
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

function StepRow({
  num,
  title,
  description,
}: {
  num: number;
  title: string;
  description: string;
}) {
  return (
    <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
      <div
        style={{
          width: 28,
          height: 28,
          borderRadius: "50%",
          background: "#0F6E56",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          fontFamily: "var(--font-inter)",
          fontSize: 13,
          fontWeight: 700,
          color: "#fff",
        }}
      >
        {num}
      </div>
      <div>
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: 14,
            fontWeight: 600,
            color: "#fff",
            margin: "0 0 2px",
          }}
        >
          {title}
        </p>
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: 13,
            color: "rgba(255,255,255,0.55)",
            margin: 0,
            lineHeight: 1.6,
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

// ── Icons ─────────────────────────────────────────────────────

function CalendarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <rect x="1" y="2.5" width="12" height="10" rx="2" stroke="#6EE7B7" strokeWidth="1.3" />
      <path d="M1 5.5h12" stroke="#6EE7B7" strokeWidth="1.3" />
      <path d="M4.5 1v3M9.5 1v3" stroke="#6EE7B7" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="7" stroke="#6EE7B7" strokeWidth="1.4" />
      <circle cx="9" cy="9" r="4" stroke="#6EE7B7" strokeWidth="1.4" />
      <circle cx="9" cy="9" r="1.5" fill="#6EE7B7" />
    </svg>
  );
}

function ChartBarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M2 14h14" stroke="#6EE7B7" strokeWidth="1.4" strokeLinecap="round" />
      <rect x="3" y="8" width="3" height="6" rx="1" fill="#6EE7B7" fillOpacity="0.4" stroke="#6EE7B7" strokeWidth="1.2" />
      <rect x="7.5" y="5" width="3" height="9" rx="1" fill="#6EE7B7" fillOpacity="0.4" stroke="#6EE7B7" strokeWidth="1.2" />
      <rect x="12" y="2" width="3" height="12" rx="1" fill="#6EE7B7" fillOpacity="0.4" stroke="#6EE7B7" strokeWidth="1.2" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="7" cy="6" r="3" stroke="#6EE7B7" strokeWidth="1.4" />
      <path d="M1.5 15c0-3 2.5-5 5.5-5s5.5 2 5.5 5" stroke="#6EE7B7" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M12 4a3 3 0 0 1 0 4" stroke="#6EE7B7" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M14.5 15c0-1.5-.7-2.8-1.5-3.5" stroke="#6EE7B7" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function TrendingUpIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M2 13l5-5 3 3 6-7" stroke="#6EE7B7" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 4h4v4" stroke="#6EE7B7" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
