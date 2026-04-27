const BULLETS = [
  "Scan a card, badge, or handwritten notes. Parlay extracts badge and card details instantly",
  "Smart matching finds existing records or creates new ones in one-click. No duplicates, No manual cleanup",
  "Contact is immediately tied to the conference, the rep, and the right company record",
  "Add notes and follow-ups in the same flow. No app switching, no lost context",
];


export default function CardScanSection() {
  return (
    <section className="bg-brand-primary py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="font-inter text-sm font-semibold tracking-widest uppercase text-brand-teal mb-4">
              Field capture
            </p>
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-6">
              From scan, to context, to pipeline
            </h2>
            <p className="font-inter text-lg mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              Conference floors move fast. Parlay&apos;s AI scanning and matching engine
              turns chaotic badge, card, and notes capture into usable pipeline data before the
              conversation is over.
            </p>
            <ul className="space-y-4">
              {BULLETS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-brand-teal mt-2.5" />
                  <p className="font-inter text-white/80 leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column — card scan flow mock */}
          <div>
            {/* Section 1 — Drop zone */}
            <div
              style={{
                border: "1.5px dashed rgba(255,255,255,0.15)",
                borderBottom: "none",
                borderRadius: "10px 10px 0 0",
                background: "rgba(255,255,255,0.03)",
                padding: "20px 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(255,255,255,0.6)"
                strokeWidth="1.5"
                width="32"
                height="32"
                style={{ opacity: 0.35, flexShrink: 0 }}
                aria-hidden="true"
              >
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>
                Drop or click to scan another photo
              </span>
            </div>

            {/* Section 2 — Scanned card */}
            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderTop: "none",
                padding: 16,
              }}
            >
              {/* Header row */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <span style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  Scanned Card
                </span>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 500,
                    color: "#34D399",
                    background: "rgba(52,211,153,0.15)",
                    border: "1px solid rgba(52,211,153,0.3)",
                    borderRadius: 20,
                    padding: "3px 10px",
                  }}
                >
                  Match Found
                </span>
              </div>

              {/* Fields */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {/* Row 1: First + Last name */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                  {[["FIRST NAME", "Harry"], ["LAST NAME", "Dunn"]].map(([label, value]) => (
                    <div key={label}>
                      <p style={{ fontSize: 9, fontWeight: 600, color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 5 }}>
                        {label}
                      </p>
                      <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 7, padding: "9px 11px", fontSize: 13, color: "rgba(255,255,255,0.85)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        {value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Row 2: Title */}
                <div>
                  <p style={{ fontSize: 9, fontWeight: 600, color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 5 }}>
                    TITLE
                  </p>
                  <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 7, padding: "9px 11px", fontSize: 13, color: "rgba(255,255,255,0.85)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    Chief Strategy Officer
                  </div>
                </div>

                {/* Row 3: Company */}
                <div>
                  <p style={{ fontSize: 9, fontWeight: 600, color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 5 }}>
                    COMPANY
                  </p>
                  <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 7, padding: "9px 11px", fontSize: 13, color: "rgba(255,255,255,0.85)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    Mutt Cutts
                  </div>
                </div>

                {/* Row 4: Email + Phone */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                  {[["EMAIL", "harry@muttcutts.com"], ["PHONE", "555555555555"]].map(([label, value]) => (
                    <div key={label}>
                      <p style={{ fontSize: 9, fontWeight: 600, color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 5 }}>
                        {label}
                      </p>
                      <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 7, padding: "9px 11px", fontSize: 13, color: "rgba(255,255,255,0.85)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        {value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 3 — Best match */}
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderTop: "none",
                borderRadius: "0 0 10px 10px",
                padding: 16,
              }}
            >
              <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>
                Best Match
              </p>

              {/* Match result card */}
              <div
                style={{
                  background: "rgba(52,211,153,0.05)",
                  border: "1px solid rgba(52,211,153,0.2)",
                  borderRadius: 8,
                  padding: "12px 14px",
                  marginBottom: 14,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "white" }}>Harry Dunn</span>
                  <span
                    style={{
                      fontSize: 11,
                      color: "rgba(255,255,255,0.6)",
                      background: "rgba(34,58,94,0.5)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: 20,
                      padding: "2px 9px",
                    }}
                  >
                    Email
                  </span>
                </div>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginBottom: 2 }}>Chief Strategy Officer</p>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginBottom: 2 }}>Mutt Cutts</p>
                <p style={{ fontSize: 12, color: "#34D399" }}>harry@muttcutts.com</p>
              </div>

              {/* Action row */}
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <button
                  style={{
                    flex: 1,
                    background: "#223A5E",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: 8,
                    padding: 10,
                    fontSize: 13,
                    fontWeight: 500,
                    color: "white",
                    cursor: "pointer",
                    textAlign: "center",
                  }}
                >
                  Confirm Match
                </button>
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", whiteSpace: "nowrap" }}>
                  Not a match
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
