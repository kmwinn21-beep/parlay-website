"use client";

import { useState, useEffect, type FormEvent, type ChangeEvent, type CSSProperties, type MouseEvent, type ReactNode } from "react";

// ── Blocked personal/disposable email domains ────────────────────────────────
const BLOCKED_DOMAINS = new Set([
  "gmail.com","yahoo.com","hotmail.com","outlook.com","icloud.com","me.com",
  "mac.com","aol.com","msn.com","live.com","googlemail.com","ymail.com",
  "yahoo.co.uk","yahoo.com.au","yahoo.ca","yahoo.fr","yahoo.de",
  "hotmail.co.uk","hotmail.fr","hotmail.de","live.co.uk","live.com.au",
  "outlook.com.au","protonmail.com","proton.me","pm.me","tutanota.com",
  "tutamail.com","zoho.com","mail.com","email.com","inbox.com","gmx.com",
  "gmx.net","gmx.de","yandex.com","yandex.ru","guerrillamail.com",
  "mailinator.com","tempmail.com","throwam.com","sharklasers.com",
  "dispostable.com","trashmail.com",
]);

const ROLES = [
  "C-Suite / Executive (CEO, COO, President)",
  "Chief Revenue Officer (CRO)",
  "Chief Marketing Officer (CMO) / VP of Marketing",
  "VP of Sales / Sales Director",
  "Sales Manager",
  "Sales Representative",
  "Revenue Operations (RevOps)",
  "Marketing Manager / Marketing Coordinator",
  "Events / Conference Coordinator",
  "Business Development",
  "Founder / Owner",
  "Other",
];

const INDUSTRIES = [
  "Senior Housing & Care",
  "Healthcare & Life Sciences",
  "Financial Services & Banking",
  "Real Estate & Property Management",
  "Technology & SaaS",
  "Professional Services & Consulting",
  "Insurance",
  "Private Equity & Investment",
  "Manufacturing & Industrial",
  "Construction & Engineering",
  "Hospitality & Travel",
  "Education & EdTech",
  "Nonprofit & Association",
  "Media & Events",
  "Retail & Consumer Goods",
  "Government & Public Sector",
  "Other",
];

const TEAM_SIZES = ["Just me","2 - 5","6 - 10","11 - 25","26 - 50","51 - 100","100+"];

const CONF_COUNTS = ["1 - 2","3 - 5","6 - 10","11 - 20","20+"];

const CONF_GOALS = [
  "Pipeline Generation",
  "Account Retention & Relationship Deepening",
  "Brand Awareness & Market Presence",
  "Partner & Channel Development",
  "Competitive Intelligence",
  "Recruiting & Talent",
  "Multiple goals — depends on the conference",
];

const CONF_TOOLS = [
  "Spreadsheets / Manual tracking",
  "CRM only (HubSpot, Salesforce, or similar)",
  "Notion / Wiki-based tracking",
  "A mix of several tools — nothing centralized",
  "We don't currently track conferences formally",
  "Other",
];

// ── Types ────────────────────────────────────────────────────────────────────
interface FormState {
  firstName: string;
  lastName: string;
  title: string;
  company: string;
  email: string;
  role: string;
  industry: string;
  teamSize: string;
  confCount: string;
  confGoal: string;
  confTool: string;
}

interface Errors {
  firstName?: string;
  lastName?: string;
  title?: string;
  company?: string;
  email?: string;
  role?: string;
  industry?: string;
}

const EMPTY: FormState = {
  firstName: "", lastName: "", title: "", company: "",
  email: "", role: "", industry: "",
  teamSize: "", confCount: "", confGoal: "", confTool: "",
};

// ── Sub-components ───────────────────────────────────────────────────────────
function Field({
  label, required, error, children,
}: { label: string; required?: boolean; error?: string; children: ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <label style={{ fontSize: 14, fontWeight: 600, color: "#223A5E", letterSpacing: "0.02em" }}>
        {label}{required && <span style={{ color: "#ef4444", marginLeft: 2 }}>*</span>}
      </label>
      {children}
      {error && <span style={{ fontSize: 11, color: "#ef4444" }}>{error}</span>}
    </div>
  );
}

const INPUT_STYLE: CSSProperties = {
  width: "100%",
  padding: "9px 12px",
  fontSize: 14,
  fontFamily: "Inter, sans-serif",
  border: "1px solid #cbd5e1",
  borderRadius: 8,
  outline: "none",
  color: "#1e293b",
  background: "white",
  boxSizing: "border-box",
};

const SELECT_STYLE: CSSProperties = {
  ...INPUT_STYLE,
  appearance: "none",
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2394a3b8' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 12px center",
  paddingRight: 36,
  cursor: "pointer",
};

function TextInput({
  value, onChange, onBlur, placeholder, type = "text", error,
}: {
  value: string;
  onChange: (v: string) => void;
  onBlur?: () => void;
  placeholder?: string;
  type?: string;
  error?: boolean;
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
      onBlur={onBlur}
      placeholder={placeholder}
      style={{ ...INPUT_STYLE, borderColor: error ? "#ef4444" : "#cbd5e1" }}
    />
  );
}

function SelectInput({
  value, onChange, options, placeholder, error,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder: string;
  error?: boolean;
}) {
  return (
    <select
      value={value}
      onChange={(e: ChangeEvent<HTMLSelectElement>) => onChange(e.target.value)}
      style={{ ...SELECT_STYLE, borderColor: error ? "#ef4444" : "#cbd5e1", color: value ? "#1e293b" : "#94a3b8" }}
    >
      <option value="" disabled>{placeholder}</option>
      {options.map((o) => <option key={o} value={o}>{o}</option>)}
    </select>
  );
}

// ── Transition overlay ────────────────────────────────────────────────────────
function TransitionOverlay() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999,
      background: "rgba(17, 28, 46, 0.92)",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: 24,
      opacity: visible ? 1 : 0,
      transition: "opacity 300ms ease",
    }}>
      <div style={{ maxWidth: 640, textAlign: "center" }}>
        <p style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(22px, 4vw, 36px)",
          fontWeight: 700,
          color: "white",
          lineHeight: 1.35,
          letterSpacing: "-0.02em",
          margin: 0,
        }}>
          The most expensive part of a conference isn&apos;t the sponsorship fee.
          <br />
          It&apos;s the pipeline that was almost created.
        </p>
        <div style={{ marginTop: 24, height: 2, maxWidth: 200, margin: "24px auto 0", borderRadius: 2, background: "#1e3a5f", overflow: "hidden" }}>
          <div style={{
            height: "100%",
            background: "#34D399",
            borderRadius: 2,
            animation: "parlayProgress 2.4s linear forwards",
          }} />
        </div>
      </div>
      <style>{`
        @keyframes parlayProgress {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  );
}

// ── Helpers ──────────────────────────────────────────────────────────────────
function getEmailError(email: string): string | null {
  if (!email) return "Work email is required.";
  const parts = email.split("@");
  if (parts.length !== 2 || !parts[0] || !parts[1]) return "Please enter a valid email address.";
  if (BLOCKED_DOMAINS.has(parts[1].toLowerCase())) return "Please use your work email address.";
  return null;
}

function validate(form: FormState): Errors {
  const e: Errors = {};
  if (!form.firstName.trim()) e.firstName = "First name is required.";
  if (!form.lastName.trim()) e.lastName = "Last name is required.";
  if (!form.title.trim()) e.title = "Title is required.";
  if (!form.company.trim()) e.company = "Company name is required.";
  const emailErr = getEmailError(form.email);
  if (emailErr) e.email = emailErr;
  if (!form.role) e.role = "Please select your role.";
  if (!form.industry) e.industry = "Please select your industry.";
  return e;
}

// ── Main modal ───────────────────────────────────────────────────────────────
export default function DemoModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [emailTouched, setEmailTouched] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  function set(key: keyof FormState) {
    return (v: string) => setForm((f: FormState) => ({ ...f, [key]: v }));
  }

  function handleEmailBlur() {
    setEmailTouched(true);
    const err = getEmailError(form.email);
    setErrors((e: Errors) => ({ ...e, email: err ?? undefined }));
  }

  async function handleSubmit(evt: FormEvent) {
    evt.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      setEmailTouched(true);
      return;
    }

    // Fire-and-forget FormSpree submission
    fetch("https://formspree.io/f/meenlpyl", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        firstName: form.firstName,
        lastName: form.lastName,
        title: form.title,
        company: form.company,
        email: form.email,
        role: form.role,
        industry: form.industry,
        teamSize: form.teamSize || undefined,
        conferencesPerYear: form.confCount || undefined,
        primaryGoal: form.confGoal || undefined,
        currentTool: form.confTool || undefined,
      }),
    }).catch((err) => console.error("FormSpree error:", err));

    // Show overlay immediately, navigate after 2500ms
    setShowOverlay(true);
    setTimeout(() => {
      window.location.href = "https://demo.useparlay.app";
    }, 2500);
  }

  // Close on backdrop click (only when overlay not showing)
  function handleBackdropClick(e: MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget && !showOverlay) onClose();
  }

  // Close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape" && !showOverlay) onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose, showOverlay]);

  return (
    <>
      <style>{`
        .parlay-demo-modal option { color: #223A5E; }
        @media (max-width: 767px) {
          .parlay-demo-modal input,
          .parlay-demo-modal select {
            font-size: 16px !important;
          }
        }
      `}</style>
      {/* Backdrop */}
      <div
        onClick={handleBackdropClick}
        style={{
          position: "fixed", inset: 0, zIndex: 1000,
          background: "rgba(17,28,46,0.7)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "24px 16px",
          overflowY: "auto",
        }}
      >
        {/* Modal card */}
        <div
          role="dialog"
          aria-modal="true"
          className="parlay-demo-modal"
          style={{
            background: "white",
            borderRadius: 16,
            boxShadow: "0 24px 80px rgba(0,0,0,0.3)",
            width: "100%",
            maxWidth: 600,
            maxHeight: "90vh",
            overflowY: "auto",
            position: "relative",
            flexShrink: 0,
          }}
        >
          {/* Header */}
          <div style={{
            background: "linear-gradient(135deg, #223A5E 0%, #1a2f4d 100%)",
            padding: "28px 28px 24px",
            borderRadius: "16px 16px 0 0",
            position: "relative",
          }}>
            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Close"
              style={{
                position: "absolute", top: 16, right: 16,
                width: 28, height: 28, borderRadius: "50%",
                background: "rgba(255,255,255,0.12)",
                border: "none", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "rgba(255,255,255,0.7)", fontSize: 14, lineHeight: 1,
              }}
            >✕</button>
            <p style={{ fontSize: 13, fontWeight: 600, color: "#34D399", marginBottom: 10 }}>
              Explore Parlay at your own pace
            </p>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(18px, 3vw, 24px)",
              fontWeight: 700,
              color: "white",
              lineHeight: 1.35,
              margin: 0,
              maxWidth: 500,
            }}>
              This is the real thing. A live Parlay instance you can click through on your own time. No guided tour. No sales rep.
            </h2>
          </div>

          {/* Form body */}
          <form onSubmit={handleSubmit} noValidate style={{ padding: "24px 28px 28px" }}>
            {/* Name row */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
              <Field label="First Name" required error={errors.firstName}>
                <TextInput value={form.firstName} onChange={set("firstName")} error={!!errors.firstName} />
              </Field>
              <Field label="Last Name" required error={errors.lastName}>
                <TextInput value={form.lastName} onChange={set("lastName")} error={!!errors.lastName} />
              </Field>
            </div>

            {/* Title / Company row */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
              <Field label="Title" required error={errors.title}>
                <TextInput value={form.title} onChange={set("title")} error={!!errors.title} />
              </Field>
              <Field label="Company Name" required error={errors.company}>
                <TextInput value={form.company} onChange={set("company")} error={!!errors.company} />
              </Field>
            </div>

            {/* Work email */}
            <div style={{ marginBottom: 14 }}>
              <Field label="Work Email" required error={emailTouched ? errors.email : undefined}>
                <TextInput
                  type="email"
                  value={form.email}
                  onChange={(v) => {
                    set("email")(v);
                    if (emailTouched) {
                      const err = getEmailError(v);
                      setErrors((e: Errors) => ({ ...e, email: err ?? undefined }));
                    }
                  }}
                  onBlur={handleEmailBlur}
                  error={emailTouched && !!errors.email}
                />
              </Field>
            </div>

            {/* Role */}
            <div style={{ marginBottom: 14 }}>
              <Field label="Select Your Role" required error={errors.role}>
                <SelectInput value={form.role} onChange={set("role")} options={ROLES} placeholder="Select a role" error={!!errors.role} />
              </Field>
            </div>

            {/* Industry */}
            <div style={{ marginBottom: 14 }}>
              <Field label="Select Your Industry" required error={errors.industry}>
                <SelectInput value={form.industry} onChange={set("industry")} options={INDUSTRIES} placeholder="Select an industry" error={!!errors.industry} />
              </Field>
            </div>

            {/* Divider */}
            <div style={{ borderTop: "1px solid #f1f5f9", margin: "18px 0 16px" }} />

            {/* Team size / Conf count */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
              <Field label="Size of Revenue Team">
                <SelectInput value={form.teamSize} onChange={set("teamSize")} options={TEAM_SIZES} placeholder="Select" />
              </Field>
              <Field label="Conferences Attended / yr">
                <SelectInput value={form.confCount} onChange={set("confCount")} options={CONF_COUNTS} placeholder="Select" />
              </Field>
            </div>

            {/* Goal */}
            <div style={{ marginBottom: 14 }}>
              <Field label="Primary Goal when Attending Conferences">
                <SelectInput value={form.confGoal} onChange={set("confGoal")} options={CONF_GOALS} placeholder="Select a goal" />
              </Field>
            </div>

            {/* Tool */}
            <div style={{ marginBottom: 24 }}>
              <Field label="Current Conference Management Tool">
                <SelectInput value={form.confTool} onChange={set("confTool")} options={CONF_TOOLS} placeholder="Select a tool" />
              </Field>
            </div>

            {/* Action buttons */}
            <div style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}>
              <button
                type="button"
                onClick={onClose}
                style={{
                  padding: "11px 20px",
                  fontSize: 14, fontWeight: 500,
                  fontFamily: "Inter, sans-serif",
                  border: "1px solid #e2e8f0",
                  borderRadius: 8, background: "white",
                  color: "#64748b", cursor: "pointer",
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                style={{
                  padding: "11px 22px",
                  fontSize: 14, fontWeight: 600,
                  fontFamily: "Inter, sans-serif",
                  border: "none", borderRadius: 8,
                  background: "#34D399",
                  color: "#111827",
                  cursor: "pointer",
                }}
              >
                Begin Exploring Parlay →
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Transition overlay — rendered on top of everything */}
      {showOverlay && <TransitionOverlay />}
    </>
  );
}
