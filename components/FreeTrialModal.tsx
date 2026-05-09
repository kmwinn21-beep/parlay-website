"use client";

import { useState, useEffect, type FormEvent, type ChangeEvent, type CSSProperties, type MouseEvent, type ReactNode } from "react";

// ── Constants ─────────────────────────────────────────────────────────────────
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

const TEAM_SIZES = ["Just me", "2 - 5", "6 - 10", "11 - 25", "26 - 50", "51 - 100", "100+"];

const CONF_COUNTS = ["1 - 2", "3 - 5", "6 - 10", "11 - 20", "20+"];

const TRIAL_PLANS = [
  {
    id: "essentials" as const,
    name: "Essentials",
    desc: "For teams getting started with conference management",
    annual: 239,
    monthly: 299,
    featured: false,
  },
  {
    id: "professional" as const,
    name: "Professional",
    desc: "For active conference programs that need intelligence",
    annual: 559,
    monthly: 699,
    featured: true,
  },
  {
    id: "enterprise" as const,
    name: "Enterprise",
    desc: "For organizations running a full conference program",
    annual: 1119,
    monthly: 1399,
    featured: false,
  },
];

// ── Types ─────────────────────────────────────────────────────────────────────
type TrialPlanId = "essentials" | "professional" | "enterprise" | "custom";

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
  email: "", role: "", industry: "", teamSize: "", confCount: "",
};

// ── Helpers ───────────────────────────────────────────────────────────────────
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

// ── Sub-components ────────────────────────────────────────────────────────────
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

// ── Plan card (displayed in sticky header) ────────────────────────────────────
function PlanCard({
  eyebrow, price, billing, desc, featured, selectable, onClick,
}: {
  eyebrow: string;
  price: number;
  billing: "annual" | "monthly";
  desc: string;
  featured: boolean;
  selectable?: boolean;
  onClick?: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const border = featured
    ? "2px solid #34D399"
    : `1.5px solid ${hovered && selectable ? "rgba(52,211,153,0.4)" : "rgba(34,58,94,0.15)"}`;

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => selectable && setHovered(true)}
      onMouseLeave={() => selectable && setHovered(false)}
      style={{
        background: featured ? "rgba(52,211,153,0.04)" : "white",
        border,
        borderRadius: 12,
        padding: "14px 16px",
        cursor: selectable ? "pointer" : "default",
        transition: "border-color 150ms, box-shadow 150ms",
        boxShadow: featured
          ? "0 4px 16px rgba(52,211,153,0.12)"
          : hovered && selectable
            ? "0 2px 10px rgba(34,58,94,0.1)"
            : "none",
        flex: selectable ? "1 1 0" : undefined,
        minWidth: 0,
      }}
    >
      <p style={{
        fontSize: 10, fontWeight: 700, textTransform: "uppercase",
        letterSpacing: "0.09em", color: "#94a3b8", marginBottom: 6, lineHeight: 1,
      }}>
        {eyebrow}
      </p>
      <div style={{ display: "flex", alignItems: "baseline", gap: 2, marginBottom: 6 }}>
        <span style={{ fontSize: 26, fontWeight: 800, color: "#223A5E", letterSpacing: "-0.03em", lineHeight: 1 }}>
          ${price}
        </span>
        <span style={{ fontSize: 12, color: "#94a3b8" }}>/mo</span>
        {billing === "annual" && (
          <span style={{ fontSize: 10, color: "#94a3b8", marginLeft: 2 }}>annual</span>
        )}
      </div>
      <p style={{ fontSize: 11, color: "#64748b", lineHeight: 1.4 }}>{desc}</p>
      {selectable && (
        <p style={{ fontSize: 11, color: featured ? "#34D399" : "#94a3b8", marginTop: 8, fontWeight: 500 }}>
          Select →
        </p>
      )}
    </div>
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
      <div style={{ maxWidth: 600, textAlign: "center" }}>
        <p style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(20px, 4vw, 32px)",
          fontWeight: 700,
          color: "white",
          lineHeight: 1.35,
          letterSpacing: "-0.02em",
          margin: 0,
        }}>
          Setting up your Parlay account.
          <br />
          <span style={{ color: "#34D399" }}>Your 14-day trial starts now.</span>
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

// ── Main export ───────────────────────────────────────────────────────────────
export interface FreeTrialModalProps {
  initialPlan: TrialPlanId | null;
  customPrice?: number;
  billing: "annual" | "monthly";
  onClose: () => void;
}

export default function FreeTrialModal({ initialPlan, customPrice, billing, onClose }: FreeTrialModalProps) {
  const [pickedPlan, setPickedPlan] = useState<TrialPlanId | null>(null);
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [emailTouched, setEmailTouched] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  // The active plan — either passed in or picked interactively
  const activePlan: TrialPlanId | null = initialPlan ?? pickedPlan;
  const isCustom = activePlan === "custom";

  // Resolve display info for the active plan card
  const activePlanInfo = isCustom
    ? null
    : TRIAL_PLANS.find((p) => p.id === activePlan) ?? null;

  const activePrice = isCustom
    ? (customPrice ?? 0)
    : activePlanInfo
      ? activePlanInfo[billing]
      : 0;

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

    fetch("https://formspree.io/f/xdabwpwl", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        formType: "free-trial",
        plan: activePlan,
        planPrice: activePrice,
        billing,
        firstName: form.firstName,
        lastName: form.lastName,
        title: form.title,
        company: form.company,
        email: form.email,
        role: form.role,
        industry: form.industry,
        teamSize: form.teamSize || undefined,
        conferencesPerYear: form.confCount || undefined,
      }),
    }).catch((err) => console.error("FormSpree error:", err));

    setShowOverlay(true);
    setTimeout(() => {
      window.location.href = "https://app.useparlay.app";
    }, 2500);
  }

  function handleBackdropClick(e: MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget && !showOverlay) onClose();
  }

  function handleBuildOwn() {
    onClose();
    if (window.location.pathname === "/pricing") {
      setTimeout(() => {
        const el = document.getElementById("bundle-builder");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else {
      window.location.href = "/pricing#bundle-builder";
    }
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape" && !showOverlay) onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose, showOverlay]);

  // Determine whether user still needs to pick a plan
  const needsPlanPick = !activePlan;

  return (
    <>
      <style>{`
        .parlay-trial-modal option { color: #223A5E; }
        .parlay-trial-scroll {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .parlay-trial-scroll::-webkit-scrollbar { display: none; }
        @media (max-width: 767px) {
          .parlay-trial-modal input,
          .parlay-trial-modal select {
            font-size: 16px !important;
          }
          .parlay-trial-grid-2 {
            grid-template-columns: 1fr !important;
          }
          .parlay-trial-plan-row {
            flex-direction: column !important;
          }
        }
      `}</style>

      {/* Backdrop */}
      <div
        onClick={handleBackdropClick}
        style={{
          position: "fixed", inset: 0, zIndex: 1000,
          background: "rgba(17,28,46,0.72)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "24px 16px",
          overflowY: "auto",
          scrollbarWidth: "none",
        }}
      >
        {/* Modal card */}
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Free 14-day trial"
          className="parlay-trial-modal"
          style={{
            background: "white",
            borderRadius: 16,
            boxShadow: "0 24px 80px rgba(0,0,0,0.3)",
            width: "100%",
            maxWidth: 620,
            display: "flex",
            flexDirection: "column",
            maxHeight: "calc(100vh - 48px)",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {/* ── Sticky top: gradient header + package card ─────────────── */}
          <div style={{ flexShrink: 0 }}>

            {/* Gradient header */}
            <div style={{
              background: "linear-gradient(135deg, #223A5E 0%, #1a2f4d 100%)",
              padding: "24px 28px 22px",
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

              <p style={{
                fontSize: 11, fontWeight: 700, letterSpacing: "0.12em",
                textTransform: "uppercase", color: "#34D399", marginBottom: 10,
              }}>
                Free 14 Day Trial
              </p>
              <h2 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(18px, 3vw, 22px)",
                fontWeight: 700,
                color: "white",
                lineHeight: 1.3,
                margin: "0 0 10px",
                maxWidth: 480,
              }}>
                14 days. Full access. No credit card.
              </h2>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.55, margin: 0, maxWidth: 500 }}>
                Got a conference coming up? Upload your attendee list and arrive with a targeting strategy. <em style={{ color: "rgba(255,255,255,0.5)" }}>Planning next year&apos;s calendar? Upload past conference lists and let the scoring engines tell you which events are worth going back to.</em>
              </p>
            </div>

            {/* Package card area */}
            <div style={{ padding: "18px 28px 0", background: "white" }}>

              {/* CASE 1: Active plan is known → show single card */}
              {activePlan && (
                <div>
                  <p style={{
                    fontSize: 11, fontWeight: 600, color: "#94a3b8",
                    textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10,
                  }}>
                    Your selected plan
                  </p>
                  <PlanCard
                    eyebrow={isCustom ? "Custom Bundle" : (activePlanInfo?.name ?? activePlan)}
                    price={activePrice}
                    billing={billing}
                    desc={
                      isCustom
                        ? "Your selected feature add-ons"
                        : (activePlanInfo?.desc ?? "")
                    }
                    featured={!isCustom && (activePlanInfo?.featured ?? false)}
                    selectable={false}
                  />
                </div>
              )}

              {/* CASE 2: No plan yet → 3-card picker */}
              {!activePlan && (
                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                    <p style={{
                      fontSize: 11, fontWeight: 600, color: "#94a3b8",
                      textTransform: "uppercase", letterSpacing: "0.08em", margin: 0,
                    }}>
                      Select a plan to get started
                    </p>
                    <button
                      onClick={handleBuildOwn}
                      style={{
                        fontSize: 12, fontWeight: 500,
                        color: "rgb(34,58,94)",
                        background: "none", border: "none",
                        padding: "0", cursor: "pointer",
                      }}
                    >
                      Customize
                    </button>
                  </div>
                  <div
                    className="parlay-trial-plan-row"
                    style={{ display: "flex", gap: 10 }}
                  >
                    {TRIAL_PLANS.map((p) => (
                      <PlanCard
                        key={p.id}
                        eyebrow={p.name}
                        price={p[billing]}
                        billing={billing}
                        desc={p.desc}
                        featured={p.featured}
                        selectable
                        onClick={() => setPickedPlan(p.id)}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Divider beneath card area */}
              <div style={{ height: 1, background: "#f1f5f9", marginTop: 18 }} />
            </div>
          </div>

          {/* ── Scrollable form body ───────────────────────────────────── */}
          <div
            className="parlay-trial-scroll"
            style={{ flex: 1, overflowY: "auto", padding: "20px 28px 28px" }}
          >
            <form onSubmit={handleSubmit} noValidate>
              {/* Name row */}
              <div
                className="parlay-trial-grid-2"
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}
              >
                <Field label="First Name" required error={errors.firstName}>
                  <TextInput value={form.firstName} onChange={set("firstName")} error={!!errors.firstName} />
                </Field>
                <Field label="Last Name" required error={errors.lastName}>
                  <TextInput value={form.lastName} onChange={set("lastName")} error={!!errors.lastName} />
                </Field>
              </div>

              {/* Title / Company row */}
              <div
                className="parlay-trial-grid-2"
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}
              >
                <Field label="Title" required error={errors.title}>
                  <TextInput value={form.title} onChange={set("title")} error={!!errors.title} />
                </Field>
                <Field label="Company Name" required error={errors.company}>
                  <TextInput value={form.company} onChange={set("company")} error={!!errors.company} />
                </Field>
              </div>

              {/* Work Email */}
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
                  <SelectInput
                    value={form.role}
                    onChange={set("role")}
                    options={ROLES}
                    placeholder="Select a role"
                    error={!!errors.role}
                  />
                </Field>
              </div>

              {/* Industry */}
              <div style={{ marginBottom: 14 }}>
                <Field label="Select Your Industry" required error={errors.industry}>
                  <SelectInput
                    value={form.industry}
                    onChange={set("industry")}
                    options={INDUSTRIES}
                    placeholder="Select an industry"
                    error={!!errors.industry}
                  />
                </Field>
              </div>

              {/* Divider */}
              <div style={{ borderTop: "1px solid #f1f5f9", margin: "18px 0 16px" }} />

              {/* Team size / Conferences per year row */}
              <div
                className="parlay-trial-grid-2"
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 24 }}
              >
                <Field label="Size of Revenue Team">
                  <SelectInput
                    value={form.teamSize}
                    onChange={set("teamSize")}
                    options={TEAM_SIZES}
                    placeholder="Select"
                  />
                </Field>
                <Field label="Conferences Attended / yr">
                  <SelectInput
                    value={form.confCount}
                    onChange={set("confCount")}
                    options={CONF_COUNTS}
                    placeholder="Select"
                  />
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
                    whiteSpace: "nowrap",
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={needsPlanPick}
                  style={{
                    padding: "11px 20px",
                    fontSize: 14, fontWeight: 600,
                    fontFamily: "Inter, sans-serif",
                    border: "none", borderRadius: 8,
                    background: needsPlanPick ? "#94a3b8" : "#34D399",
                    color: needsPlanPick ? "white" : "#0f2d1f",
                    cursor: needsPlanPick ? "default" : "pointer",
                    whiteSpace: "nowrap",
                    transition: "background 150ms",
                  }}
                >
                  Create Parlay Account &amp; Start Trial →
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {showOverlay && <TransitionOverlay />}
    </>
  );
}
