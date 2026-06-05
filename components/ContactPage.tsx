"use client";

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
  return (
    <div>
      <p
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: 16,
          color: "rgba(255,255,255,0.4)",
          textAlign: "center",
          padding: "48px 0",
        }}
      >
        Form coming in Section 3
      </p>
    </div>
  );
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
