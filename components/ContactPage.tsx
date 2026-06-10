"use client";

import { useState } from "react";
import Link from "next/link";

// ── Form types ─────────────────────────────────────────────────

interface FormFields {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  topic: string;
  message: string;
}

type FieldErrors = Partial<Record<keyof FormFields, string>>;

const EMPTY: FormFields = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  topic: "",
  message: "",
};

function validate(fields: FormFields): FieldErrors {
  const errs: FieldErrors = {};
  if (!fields.firstName.trim()) errs.firstName = "This field is required";
  if (!fields.lastName.trim()) errs.lastName = "This field is required";
  if (!fields.email.trim()) {
    errs.email = "This field is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errs.email = "Please enter a valid email address";
  }
  if (!fields.company.trim()) errs.company = "This field is required";
  if (!fields.topic) errs.topic = "This field is required";
  return errs;
}

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">

      {/* Hero */}
      <div className="text-center mb-16">
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#6EE7B7",
            marginBottom: 16,
          }}
        >
          Get in touch
        </p>
        <h1
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(28px, 5vw, 48px)",
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1.2,
            maxWidth: 640,
            margin: "0 auto 16px",
          }}
        >
          Questions, partnerships, or just curious what Parlay can do for your program.
        </h1>
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: 16,
            color: "rgba(255,255,255,0.6)",
            margin: 0,
          }}
        >
          We respond to all inquiries within one business day.
        </p>
      </div>

      {/* Two-column layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 40,
          alignItems: "start",
        }}
      >
        {/* Left — Form placeholder (filled in Section 3) */}
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

        {/* Right — Side panel */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 16,
              padding: "36px",
            }}
          >
            {/* Contact info */}
            <div style={{ marginBottom: 28 }}>
              <ContactRow
                icon={<EmailIcon />}
                label="Email"
                value="hello@useparlay.app"
                href="mailto:hello@useparlay.app"
              />
              <ContactRow
                icon={<LinkedInIcon />}
                label="LinkedIn"
                value="linkedin.com/company/useparlay"
                href="https://linkedin.com/company/useparlay"
              />
            </div>

            <Divider />

            {/* Skip the form */}
            <div style={{ padding: "28px 0" }}>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.4)",
                  marginBottom: 8,
                }}
              >
                Skip the form
              </p>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 14,
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.6,
                  marginBottom: 20,
                }}
              >
                Request a live walkthrough or explore Parlay on your own.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <PanelLink href="/demo" label="Request a demo" />
                <PanelLink href="https://www.useparlay.app/?demo=true" label="Self guided demo" />
              </div>
            </div>

            <Divider />

            {/* Response time */}
            <div style={{ paddingTop: 28 }}>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.4)",
                  marginBottom: 8,
                }}
              >
                Response time
              </p>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 14,
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                We respond to all inquiries within one business day. For urgent matters, reach us directly on{" "}
                <a
                  href="https://www.linkedin.com/company/useparlay"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#6EE7B7", textDecoration: "underline", textUnderlineOffset: 3 }}
                >
                  LinkedIn <LinkedInInline />
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Sub-components ──────────────────────────────────────────────

function FormSection() {
  const [fields, setFields] = useState<FormFields>(EMPTY);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  function set(key: keyof FormFields) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setFields((f) => ({ ...f, [key]: e.target.value }));
      if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
    };
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
      const res = await fetch("https://formspree.io/f/mnjynedp", {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: fields.firstName,
          lastName: fields.lastName,
          email: fields.email,
          company: fields.company,
          topic: fields.topic,
          message: fields.message,
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

  // ── Success state ─────────────────────────────────────────────
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
          Message sent
        </h2>
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: 15,
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.6,
            margin: "0 0 28px",
          }}
        >
          Thanks for reaching out. We&apos;ll get back to you within one business day.
        </p>
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: 14,
            color: "#6EE7B7",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
          onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
        >
          ← Back to useparlay.app
        </Link>
      </div>
    );
  }

  // ── Form ──────────────────────────────────────────────────────
  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* First + Last name row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ marginBottom: 16 }}>
        <Field
          label="First name"
          error={errors.firstName}
        >
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
      <Field label="Work email" error={errors.email} style={{ marginBottom: 16 }}>
        <input
          type="email"
          value={fields.email}
          onChange={set("email")}
          style={inputStyle(!!errors.email)}
        />
      </Field>

      {/* Company */}
      <Field label="Company" error={errors.company} style={{ marginBottom: 16 }}>
        <input
          type="text"
          value={fields.company}
          onChange={set("company")}
          style={inputStyle(!!errors.company)}
        />
      </Field>

      {/* Topic */}
      <Field label="What can we help with?" error={errors.topic} style={{ marginBottom: 16 }}>
        <select
          value={fields.topic}
          onChange={set("topic")}
          style={{
            ...inputStyle(!!errors.topic),
            color: fields.topic ? "#fff" : "rgba(255,255,255,0.35)",
          }}
        >
          <option value="" disabled hidden style={{ color: "#223A5E" }}>Select a topic</option>
          <option value="Product question" style={{ color: "#223A5E" }}>Product question</option>
          <option value="Pricing & plans" style={{ color: "#223A5E" }}>Pricing &amp; plans</option>
          <option value="Enterprise inquiry" style={{ color: "#223A5E" }}>Enterprise inquiry</option>
          <option value="Partnership" style={{ color: "#223A5E" }}>Partnership</option>
          <option value="Press" style={{ color: "#223A5E" }}>Press</option>
          <option value="Other" style={{ color: "#223A5E" }}>Other</option>
        </select>
      </Field>

      {/* Message */}
      <Field label="Message" style={{ marginBottom: 24 }}>
        <textarea
          rows={4}
          value={fields.message}
          onChange={set("message")}
          placeholder="Tell us what you're working on..."
          style={{
            ...inputStyle(false),
            resize: "vertical",
            minHeight: 100,
          }}
        />
      </Field>

      {/* Submit error */}
      {submitError && (
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: 13,
            color: "#E24B4A",
            marginBottom: 16,
            lineHeight: 1.5,
          }}
        >
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
        {submitting ? "Sending..." : "Send message"}
      </button>

      <p
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: 12,
          color: "rgba(255,255,255,0.35)",
          textAlign: "center",
          margin: 0,
        }}
      >
        We&apos;ll get back to you within one business day.
      </p>
    </form>
  );
}

// ── Field wrapper ─────────────────────────────────────────────

function Field({
  label,
  error,
  children,
  style,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div style={style}>
      <label
        style={{
          display: "block",
          fontFamily: "var(--font-inter)",
          fontSize: 12,
          fontWeight: 600,
          color: "rgba(255,255,255,0.6)",
          letterSpacing: "0.06em",
          marginBottom: 6,
          textTransform: "uppercase",
        }}
      >
        {label}
      </label>
      {children}
      {error && (
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: 12,
            color: "#E24B4A",
            margin: "5px 0 0",
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
}

// ── Shared input style ─────────────────────────────────────────

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

function Divider() {
  return (
    <div
      style={{
        height: 1,
        background: "rgba(255,255,255,0.1)",
      }}
    />
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        marginBottom: 20,
      }}
    >
      <div
        style={{
          width: 38,
          height: 38,
          borderRadius: 10,
          background: "rgba(110,231,183,0.12)",
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
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.4)",
            margin: "0 0 2px",
          }}
        >
          {label}
        </p>
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: 14,
            color: "#6EE7B7",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
          onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
        >
          {value}
        </a>
      </div>
    </div>
  );
}

function PanelLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      style={{
        fontFamily: "var(--font-inter)",
        fontSize: 14,
        fontWeight: 600,
        color: "#6EE7B7",
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        gap: 6,
        transition: "opacity 150ms",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
    >
      {label}
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="#6EE7B7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}

// ── Icons ──────────────────────────────────────────────────────

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M2 4h14v10H2V4z" stroke="#6EE7B7" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M2 4l7 6 7-6" stroke="#6EE7B7" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="14" height="14" rx="3" stroke="#6EE7B7" strokeWidth="1.4" />
      <path d="M5.5 7.5v5M5.5 5.5v.01" stroke="#6EE7B7" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M8.5 7.5v5M8.5 10a2 2 0 0 1 4 0v2.5" stroke="#6EE7B7" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LinkedInInline() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
      style={{ display: "inline", verticalAlign: "middle", marginLeft: 2 }}
    >
      <rect x="2" y="2" width="14" height="14" rx="3" stroke="#6EE7B7" strokeWidth="1.4" />
      <path d="M5.5 7.5v5M5.5 5.5v.01" stroke="#6EE7B7" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M8.5 7.5v5M8.5 10a2 2 0 0 1 4 0v2.5" stroke="#6EE7B7" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
