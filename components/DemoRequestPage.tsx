"use client";

import { useState } from "react";
import Link from "next/link";

// ── Types ─────────────────────────────────────────────────────

interface FormFields {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  jobTitle: string;
  conferenceCount: string;
  teamSize: string;
  specificInterests: string;
}

type FieldErrors = Partial<Record<keyof FormFields, string>>;

const EMPTY: FormFields = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  jobTitle: "",
  conferenceCount: "",
  teamSize: "",
  specificInterests: "",
};

const CONFERENCE_OPTIONS = ["1–5", "6–15", "16–30", "30+"];
const TEAM_SIZE_OPTIONS = ["1–5 reps", "6–20 reps", "21–50 reps", "50+ reps"];

function validate(f: FormFields): FieldErrors {
  const errs: FieldErrors = {};
  if (!f.firstName.trim()) errs.firstName = "This field is required";
  if (!f.lastName.trim()) errs.lastName = "This field is required";
  if (!f.email.trim()) {
    errs.email = "This field is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) {
    errs.email = "Please enter a valid email address";
  }
  if (!f.company.trim()) errs.company = "This field is required";
  if (!f.jobTitle.trim()) errs.jobTitle = "This field is required";
  if (!f.conferenceCount) errs.conferenceCount = "Please select an option";
  if (!f.teamSize) errs.teamSize = "Please select an option";
  return errs;
}

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

// ── Form ─────────────────────────────────────────────────────

function FormSection() {
  const [fields, setFields] = useState<FormFields>(EMPTY);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  function set(key: keyof FormFields) {
    return (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      setFields((f) => ({ ...f, [key]: e.target.value }));
      if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
    };
  }

  function setPill(key: "conferenceCount" | "teamSize", value: string) {
    setFields((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    const errs = validate(fields);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("https://formspree.io/f/mdavkqgz", {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: fields.firstName,
          lastName: fields.lastName,
          email: fields.email,
          company: fields.company,
          jobTitle: fields.jobTitle,
          conferenceCount: fields.conferenceCount,
          teamSize: fields.teamSize,
          specificInterests: fields.specificInterests,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setSubmitError(
          "Something went wrong. Please try again or email us directly at hello@useparlay.app."
        );
      }
    } catch {
      setSubmitError(
        "Something went wrong. Please try again or email us directly at hello@useparlay.app."
      );
    }
    setSubmitting(false);
  };

  // ── Success state ────────────────────────────────────────────
  if (submitted) {
    return (
      <div style={{ textAlign: "center", padding: "32px 0" }}>
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            background: "rgba(110,231,183,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 20px",
          }}
        >
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
            <path
              d="M6 15l7 7L24 8"
              stroke="#6EE7B7"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h2
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: 28,
            fontWeight: 700,
            color: "#fff",
            margin: "0 0 10px",
          }}
        >
          Demo requested
        </h2>
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: 15,
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.6,
            margin: "0 0 28px",
            maxWidth: 340,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Thanks for your interest in Parlay. We&apos;ll be in touch within one business day to schedule your walkthrough.
        </p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap", gap: 20 }}>
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 14,
              color: "rgba(255,255,255,0.5)",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
          >
            ← Back to useparlay.app
          </Link>
          <a
            href="https://www.useparlay.app/?demo=true"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 14,
              fontWeight: 600,
              color: "#6EE7B7",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
            onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
          >
            Explore on your own →
          </a>
        </div>
      </div>
    );
  }

  // ── Form ─────────────────────────────────────────────────────
  return (
    <form onSubmit={handleSubmit} noValidate>

      {/* First + Last name */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
        <Field label="First name" error={errors.firstName}>
          <input
            type="text"
            value={fields.firstName}
            onChange={set("firstName")}
            style={inputStyle(!!errors.firstName)}
          />
        </Field>
        <Field label="Last name" error={errors.lastName}>
          <input
            type="text"
            value={fields.lastName}
            onChange={set("lastName")}
            style={inputStyle(!!errors.lastName)}
          />
        </Field>
      </div>

      {/* Work email */}
      <Field label="Work email" error={errors.email} style={{ marginBottom: 14 }}>
        <input
          type="email"
          value={fields.email}
          onChange={set("email")}
          style={inputStyle(!!errors.email)}
        />
      </Field>

      {/* Company */}
      <Field label="Company" error={errors.company} style={{ marginBottom: 14 }}>
        <input
          type="text"
          value={fields.company}
          onChange={set("company")}
          style={inputStyle(!!errors.company)}
        />
      </Field>

      {/* Job title */}
      <Field
        label="Job title"
        error={errors.jobTitle}
        helper="e.g. VP of Sales, Head of Events, Revenue Operations"
        style={{ marginBottom: 14 }}
      >
        <input
          type="text"
          value={fields.jobTitle}
          onChange={set("jobTitle")}
          style={inputStyle(!!errors.jobTitle)}
        />
      </Field>

      {/* Conference count pills */}
      <div style={{ marginBottom: 14 }}>
        <label style={labelStyle}>
          Conferences per year?
        </label>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 6 }}>
          {CONFERENCE_OPTIONS.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => setPill("conferenceCount", opt)}
              style={pillStyle(fields.conferenceCount === opt)}
            >
              {opt}
            </button>
          ))}
        </div>
        {errors.conferenceCount && (
          <p style={errorTextStyle}>{errors.conferenceCount}</p>
        )}
      </div>

      {/* Team size pills */}
      <div style={{ marginBottom: 14 }}>
        <label style={labelStyle}>
          Team size
        </label>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 6 }}>
          {TEAM_SIZE_OPTIONS.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => setPill("teamSize", opt)}
              style={pillStyle(fields.teamSize === opt)}
            >
              {opt}
            </button>
          ))}
        </div>
        {errors.teamSize && (
          <p style={errorTextStyle}>{errors.teamSize}</p>
        )}
      </div>

      {/* Specific interests */}
      <Field label="Anything specific you want to see?" style={{ marginBottom: 24 }}>
        <textarea
          rows={3}
          value={fields.specificInterests}
          onChange={set("specificInterests")}
          placeholder="Pre-conference scoring, rep performance tracking, ROI analysis..."
          style={{ ...inputStyle(false), resize: "vertical", minHeight: 80 }}
        />
      </Field>

      {/* Submit error */}
      {submitError && (
        <p style={{ fontFamily: "var(--font-inter)", fontSize: 13, color: "#E24B4A", marginBottom: 16, lineHeight: 1.5 }}>
          {submitError}
        </p>
      )}

      {/* Submit button */}
      <button
        type="submit"
        disabled={submitting}
        style={{
          width: "100%",
          fontFamily: "var(--font-inter)",
          fontSize: 15,
          fontWeight: 600,
          color: "#fff",
          background: submitting ? "#0a5242" : "#0F6E56",
          border: "none",
          borderRadius: 10,
          padding: "13px",
          cursor: submitting ? "not-allowed" : "pointer",
          transition: "background 150ms",
          marginBottom: 12,
        }}
        onMouseEnter={(e) => !submitting && (e.currentTarget.style.background = "#0d5e49")}
        onMouseLeave={(e) => !submitting && (e.currentTarget.style.background = "#0F6E56")}
      >
        {submitting ? "Requesting..." : "Request my demo"}
      </button>

      <p style={{ fontFamily: "var(--font-inter)", fontSize: 12, color: "rgba(255,255,255,0.35)", textAlign: "center", margin: 0 }}>
        No commitment. We&apos;ll reach out within one business day to schedule.
      </p>
    </form>
  );
}

// ── Field wrapper ─────────────────────────────────────────────

function Field({
  label,
  error,
  helper,
  children,
  style,
}: {
  label: string;
  error?: string;
  helper?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div style={style}>
      <label style={labelStyle}>{label}</label>
      {children}
      {helper && !error && (
        <p style={{ fontFamily: "var(--font-inter)", fontSize: 11, color: "rgba(255,255,255,0.35)", margin: "4px 0 0" }}>
          {helper}
        </p>
      )}
      {error && <p style={errorTextStyle}>{error}</p>}
    </div>
  );
}

// ── Shared styles ─────────────────────────────────────────────

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-inter)",
  fontSize: 12,
  fontWeight: 600,
  color: "rgba(255,255,255,0.6)",
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  marginBottom: 6,
};

const errorTextStyle: React.CSSProperties = {
  fontFamily: "var(--font-inter)",
  fontSize: 12,
  color: "#E24B4A",
  margin: "5px 0 0",
};

function inputStyle(hasError: boolean): React.CSSProperties {
  return {
    width: "100%",
    fontFamily: "var(--font-inter)",
    fontSize: 14,
    color: "#fff",
    background: "rgba(255,255,255,0.07)",
    border: `1.5px solid ${hasError ? "#E24B4A" : "rgba(255,255,255,0.15)"}`,
    borderRadius: 8,
    padding: "10px 12px",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 150ms",
  };
}

function pillStyle(selected: boolean): React.CSSProperties {
  return {
    fontFamily: "var(--font-inter)",
    fontSize: 13,
    fontWeight: selected ? 600 : 400,
    color: selected ? "#6EE7B7" : "rgba(255,255,255,0.45)",
    background: selected ? "rgba(15,110,86,0.15)" : "rgba(255,255,255,0.05)",
    border: `1.5px solid ${selected ? "rgba(15,110,86,0.25)" : "rgba(255,255,255,0.12)"}`,
    borderRadius: 20,
    padding: "6px 16px",
    cursor: "pointer",
    transition: "all 150ms",
    outline: "none",
  };
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
