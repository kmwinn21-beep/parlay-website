"use client";

import { useState, type ChangeEvent, type CSSProperties, type FormEvent, type ReactNode } from "react";

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

type FormState = {
  firstName: string;
  lastName: string;
  title: string;
  company: string;
  email: string;
  role: string;
  industry: string;
  teamSize: string;
  confCount: string;
};

const EMPTY: FormState = {
  firstName: "", lastName: "", title: "", company: "", email: "",
  role: "", industry: "", teamSize: "", confCount: "",
};

function Field({ label, required, children }: { label: string; required?: boolean; children: ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label style={{ fontSize: 14, fontWeight: 600, color: "#223A5E", letterSpacing: "0.02em" }}>
        {label}{required && <span style={{ color: "#ef4444", marginLeft: 2 }}>*</span>}
      </label>
      {children}
    </div>
  );
}

const INPUT_STYLE: CSSProperties = {
  width: "100%", padding: "10px 12px", fontSize: 14, fontFamily: "Inter, sans-serif",
  border: "1px solid #cbd5e1", borderRadius: 8, color: "#1e293b", background: "white", boxSizing: "border-box",
};

const SELECT_STYLE: CSSProperties = {
  ...INPUT_STYLE,
  appearance: "none",
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2394a3b8' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 12px center",
  paddingRight: 36,
};

export default function SignupPage() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const res = await fetch("https://formspree.io/f/maqlwynq", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(form),
    });

    setIsSubmitting(false);
    if (res.ok) {
      setIsSuccess(true);
      setForm(EMPTY);
    }
  };

  return (
    <main style={{ position: "relative", background: "#223A5E", minHeight: "100vh", padding: "48px 16px" }}>
      <svg aria-hidden="true" style={{ position: "fixed", inset: 0, width: "100%", height: "100%", opacity: 0.07, pointerEvents: "none", zIndex: 0 }} viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        <line x1="200" y1="150" x2="450" y2="300" stroke="white" strokeWidth="1" /><line x1="450" y1="300" x2="700" y2="200" stroke="white" strokeWidth="1" /><line x1="700" y1="200" x2="900" y2="350" stroke="white" strokeWidth="1" /><line x1="450" y1="300" x2="350" y2="550" stroke="white" strokeWidth="1" /><line x1="350" y1="550" x2="600" y2="620" stroke="white" strokeWidth="1" /><line x1="600" y1="620" x2="850" y2="500" stroke="white" strokeWidth="1" /><line x1="900" y1="350" x2="850" y2="500" stroke="white" strokeWidth="1" /><line x1="700" y1="200" x2="600" y2="620" stroke="white" strokeWidth="0.5" /><line x1="100" y1="400" x2="350" y2="550" stroke="white" strokeWidth="1" /><line x1="100" y1="400" x2="200" y2="150" stroke="white" strokeWidth="0.5" /><line x1="1050" y1="200" x2="900" y2="350" stroke="white" strokeWidth="1" /><line x1="1050" y1="200" x2="1100" y2="500" stroke="white" strokeWidth="1" /><line x1="1100" y1="500" x2="850" y2="500" stroke="white" strokeWidth="1" /><line x1="150" y1="680" x2="350" y2="550" stroke="white" strokeWidth="1" /><line x1="150" y1="680" x2="600" y2="620" stroke="white" strokeWidth="0.5" />
        <circle cx="200" cy="150" r="5" fill="white" /><circle cx="450" cy="300" r="7" fill="white" /><circle cx="700" cy="200" r="6" fill="white" /><circle cx="900" cy="350" r="8" fill="white" /><circle cx="350" cy="550" r="6" fill="white" /><circle cx="600" cy="620" r="7" fill="white" /><circle cx="850" cy="500" r="5" fill="white" /><circle cx="100" cy="400" r="4" fill="white" /><circle cx="1050" cy="200" r="5" fill="white" /><circle cx="1100" cy="500" r="6" fill="white" /><circle cx="150" cy="680" r="4" fill="white" />
      </svg>

      <section style={{ position: "relative", zIndex: 1, maxWidth: 740, margin: "0 auto", background: "white", border: "1px solid rgba(34,58,94,0.12)", borderRadius: 16, boxShadow: "0 16px 40px rgba(2,8,23,0.25)", padding: 24 }}>
        <p style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.1em", color: "#34D399", fontWeight: 700, marginBottom: 8 }}>14-day free trial</p>
        <h1 style={{ fontSize: "clamp(30px, 6vw, 42px)", lineHeight: 1.1, color: "#223A5E", marginBottom: 8 }}>Start your free trial</h1>
        <p style={{ color: "#64748b", fontSize: 15, marginBottom: 20 }}>No credit card required · Full access from day one.</p>

        {isSuccess && <div style={{ background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.4)", color: "#047857", borderRadius: 10, padding: 12, marginBottom: 16 }}>Thanks! Your request was sent. We&apos;ll be in touch shortly.</div>}

        <form onSubmit={handleSubmit} style={{ display: "grid", gap: 14 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
            <Field label="First name" required><input required value={form.firstName} onChange={(e: ChangeEvent<HTMLInputElement>) => setForm((p) => ({ ...p, firstName: e.target.value }))} style={INPUT_STYLE} /></Field>
            <Field label="Last name" required><input required value={form.lastName} onChange={(e: ChangeEvent<HTMLInputElement>) => setForm((p) => ({ ...p, lastName: e.target.value }))} style={INPUT_STYLE} /></Field>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
            <Field label="Job title" required><input required value={form.title} onChange={(e: ChangeEvent<HTMLInputElement>) => setForm((p) => ({ ...p, title: e.target.value }))} style={INPUT_STYLE} /></Field>
            <Field label="Company" required><input required value={form.company} onChange={(e: ChangeEvent<HTMLInputElement>) => setForm((p) => ({ ...p, company: e.target.value }))} style={INPUT_STYLE} /></Field>
          </div>
          <Field label="Work email" required><input type="email" required value={form.email} onChange={(e: ChangeEvent<HTMLInputElement>) => setForm((p) => ({ ...p, email: e.target.value }))} style={INPUT_STYLE} /></Field>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
            <Field label="Role" required><select required value={form.role} onChange={(e: ChangeEvent<HTMLSelectElement>) => setForm((p) => ({ ...p, role: e.target.value }))} style={SELECT_STYLE}><option value="" disabled>Select your role</option>{ROLES.map((r) => <option key={r} value={r}>{r}</option>)}</select></Field>
            <Field label="Industry" required><select required value={form.industry} onChange={(e: ChangeEvent<HTMLSelectElement>) => setForm((p) => ({ ...p, industry: e.target.value }))} style={SELECT_STYLE}><option value="" disabled>Select your industry</option>{INDUSTRIES.map((i) => <option key={i} value={i}>{i}</option>)}</select></Field>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
            <Field label="Team size"><select value={form.teamSize} onChange={(e: ChangeEvent<HTMLSelectElement>) => setForm((p) => ({ ...p, teamSize: e.target.value }))} style={SELECT_STYLE}><option value="" disabled>Select team size</option>{TEAM_SIZES.map((s) => <option key={s} value={s}>{s}</option>)}</select></Field>
            <Field label="Conferences per year"><select value={form.confCount} onChange={(e: ChangeEvent<HTMLSelectElement>) => setForm((p) => ({ ...p, confCount: e.target.value }))} style={SELECT_STYLE}><option value="" disabled>Select conference count</option>{CONF_COUNTS.map((c) => <option key={c} value={c}>{c}</option>)}</select></Field>
          </div>
          <button type="submit" disabled={isSubmitting} style={{ marginTop: 6, border: "none", borderRadius: 999, background: isSubmitting ? "#94a3b8" : "#34D399", color: "white", fontSize: 15, fontWeight: 700, padding: "12px 18px", cursor: isSubmitting ? "not-allowed" : "pointer" }}>
            {isSubmitting ? "Submitting..." : "Start free trial"}
          </button>
        </form>
      </section>
    </main>
  );
}
