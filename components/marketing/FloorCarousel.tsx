"use client";

import { useState, useRef, type ReactNode } from "react";

const SLIDE_LABELS = [
  "Batch Card Scan",
  "Floor Note",
  "Floor Notes Dashboard",
  "Assign Note",
  "Log Touchpoint",
];

function StatusIcons() {
  return (
    <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
      <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
        <rect x="0" y="7" width="3" height="4" rx="1" fill="#1e293b" />
        <rect x="4.5" y="4.5" width="3" height="6.5" rx="1" fill="#1e293b" />
        <rect x="9" y="2" width="3" height="9" rx="1" fill="#1e293b" />
        <rect x="13.5" y="0" width="1.5" height="11" rx="0.75" fill="#e2e8f0" />
      </svg>
      <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
        <circle cx="7.5" cy="9.5" r="1.5" fill="#1e293b" />
        <path d="M4.5 7.5 Q7.5 4.5 10.5 7.5" stroke="#1e293b" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M2 5 Q7.5 0 13 5" stroke="#1e293b" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
      <svg width="22" height="11" viewBox="0 0 22 11" fill="none">
        <rect x="0.5" y="0.5" width="17" height="10" rx="2.5" stroke="#1e293b" strokeWidth="1" />
        <rect x="18" y="3.5" width="3" height="4" rx="1.5" fill="#1e293b" />
        <rect x="2" y="2" width="12" height="7" rx="1.5" fill="#1e293b" />
      </svg>
    </div>
  );
}

function PhoneShell({
  children,
  time,
  title,
  headerRight,
}: {
  children: ReactNode;
  time: string;
  title: string;
  headerRight?: ReactNode;
}) {
  const defaultHeaderRight = (
    <div style={{ display: "flex", gap: 10, alignItems: "center", color: "#475569" }}>
      <span style={{ fontSize: 18, lineHeight: 1 }}>≡</span>
      <span style={{ fontSize: 15, lineHeight: 1 }}>🔔</span>
      <span style={{ fontSize: 18, fontWeight: 700, lineHeight: 1 }}>+</span>
      <span style={{ fontSize: 15, lineHeight: 1 }}>📅</span>
    </div>
  );

  return (
    <div style={{
      background: "#f8fafc",
      border: "1px solid rgba(34,58,94,0.12)",
      borderRadius: 28,
      overflow: "hidden",
      boxShadow: "0 8px 32px rgba(34,58,94,0.12)",
      position: "relative",
      height: 680,
    }}>
      <div aria-hidden="true" style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        height: 80,
        background: "linear-gradient(to bottom, transparent, #f8fafc)",
        zIndex: 3, pointerEvents: "none",
      }} />
      <div style={{ background: "#f8fafc", padding: "10px 18px 4px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: "#1e293b" }}>{time}</span>
        <StatusIcons />
      </div>
      <div style={{ background: "#f8fafc", padding: "8px 16px 12px", borderBottom: "1px solid #e2e8f0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <p style={{ fontSize: 18, fontWeight: 700, color: "#223A5E", lineHeight: 1.2 }}>{title}</p>
        {headerRight ?? defaultHeaderRight}
      </div>
      <div style={{ background: "#f1f5f9", padding: 12, overflowY: "hidden" }}>
        {children}
      </div>
    </div>
  );
}

/* ── Slide 1 — Batch Card Scan ──────────────────────────────────────────── */
const SCANNED_CONTACTS = [
  { name: "Wayne Campbell",  title: "VP of Sales",           company: "Vandelay Industries", status: "New Contact", color: "#059669", bg: "rgba(52,211,153,0.1)" },
  { name: "Lloyd Christmas", title: "Senior Account Exec",   company: "Sea Bass Inc.",        status: "Matched",     color: "#3b82f6", bg: "rgba(59,130,246,0.1)" },
  { name: "Happy Gilmore",   title: "Director of Marketing", company: "Subway Tours",         status: "New Contact", color: "#059669", bg: "rgba(52,211,153,0.1)" },
];

function Slide1() {
  return (
    <div style={{ background: "white", borderRadius: 14, padding: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
        <span style={{ fontSize: 16, fontWeight: 700, color: "#223A5E" }}>Batch Card Scan</span>
        <span style={{ fontSize: 18, color: "#64748b" }}>✕</span>
      </div>
      <p style={{ fontSize: 11, color: "#94a3b8", marginBottom: 14 }}>3 contacts detected · Conference Expo 2026</p>

      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 14 }}>
        {SCANNED_CONTACTS.map((c) => (
          <div key={c.name} style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 10, padding: "10px 12px", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#1e293b", marginBottom: 2 }}>{c.name}</p>
              <p style={{ fontSize: 11, color: "#64748b", marginBottom: 3 }}>{c.title}</p>
              <p style={{ fontSize: 11, color: "#475569" }}>{c.company}</p>
            </div>
            <span style={{ fontSize: 10, fontWeight: 600, color: c.color, background: c.bg, borderRadius: 20, padding: "3px 10px", flexShrink: 0, marginLeft: 8 }}>
              {c.status}
            </span>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: 8 }}>
        <button style={{ flex: 1, background: "#223A5E", color: "white", borderRadius: 8, padding: "12px", fontSize: 13, fontWeight: 600, border: "none", cursor: "default" }}>
          Import All (3)
        </button>
        <button style={{ flex: 1, background: "transparent", color: "#223A5E", borderRadius: 8, padding: "12px", fontSize: 13, fontWeight: 600, border: "1.5px solid #223A5E", cursor: "default" }}>
          Review First
        </button>
      </div>
    </div>
  );
}

/* ── Shared — action row used by slides 2 and 3 ─────────────────────────── */
function FloorActionRow() {
  const ACTIONS = [
    { emoji: "📷", label: "Scan",       bg: "rgba(148,163,184,0.15)" },
    { emoji: "✏️", label: "Floor Note", bg: "rgba(245,158,11,0.12)"  },
    { emoji: "🎯", label: "Touchpoints",bg: "rgba(52,211,153,0.12)"  },
  ];
  return (
    <div style={{ display: "flex", justifyContent: "space-around", background: "white", borderRadius: 14, padding: "10px 8px", marginBottom: 10 }}>
      {ACTIONS.map((a) => (
        <div key={a.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
          <div style={{ width: 44, height: 44, borderRadius: "50%", background: a.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>
            {a.emoji}
          </div>
          <span style={{ fontSize: 11, color: "#64748b" }}>{a.label}</span>
        </div>
      ))}
    </div>
  );
}

/* ── Slide 2 — Floor Note being entered ────────────────────────────────── */
function Slide2() {
  return (
    <>
      {/* Conference banner */}
      <div style={{ background: "#223A5E", borderRadius: 12, padding: "10px 14px", marginBottom: 10 }}>
        <p style={{ fontSize: 10, fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.08em", color: "rgba(255,255,255,0.5)", marginBottom: 2 }}>Current Conference</p>
        <p style={{ fontSize: 15, fontWeight: 700, color: "white" }}>Conference Expo 2026</p>
        <p style={{ fontSize: 11, color: "rgba(255,255,255,0.45)" }}>Mar 30 – Apr 1 · Nashville, TN</p>
      </div>

      {/* Action row */}
      <FloorActionRow />

      {/* New Floor Note form */}
      <div style={{ background: "white", borderRadius: 14, padding: 14 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
          <span style={{ fontSize: 15, fontWeight: 700, color: "#223A5E" }}>New Floor Note</span>
          <span style={{ fontSize: 18, color: "#64748b" }}>✕</span>
        </div>
        <p style={{ fontSize: 11, color: "#94a3b8", marginBottom: 10 }}>Not yet assigned to a record</p>

        <div style={{ background: "#f8fafc", border: "1.5px solid #223A5E", borderRadius: 10, padding: 10, marginBottom: 10, minHeight: 100 }}>
          <p style={{ fontSize: 12, color: "#1e293b", lineHeight: 1.6, marginBottom: 4 }}>
            Ran into Ron at the hotel bar last night. He mentioned they&apos;re evaluating new platforms in Q3. Said their current tool &quot;gets the job done but barely.&quot; Worth a follow-up before we leave.
          </p>
          <span style={{ display: "inline-block", width: 2, height: 14, background: "#223A5E", verticalAlign: "middle" }} />
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
          <span style={{ fontSize: 11, color: "#64748b" }}>Conference:</span>
          <span style={{ fontSize: 11, fontWeight: 600, color: "#223A5E", background: "rgba(34,58,94,0.08)", border: "1px solid rgba(34,58,94,0.15)", borderRadius: 20, padding: "3px 10px" }}>
            Conference Expo 2026
          </span>
        </div>

        <button style={{ width: "100%", background: "#34D399", color: "#111827", borderRadius: 8, padding: "10px", fontSize: 13, fontWeight: 700, border: "none", cursor: "default", marginBottom: 6 }}>
          Save Note
        </button>
        <p style={{ textAlign: "center", fontSize: 11, color: "#94a3b8" }}>Assign to a record later</p>
      </div>
    </>
  );
}

/* ── Slide 3 — Floor Notes Dashboard ───────────────────────────────────── */
function Slide3() {
  return (
    <>
      {/* Conference banner */}
      <div style={{ background: "#223A5E", borderRadius: 12, padding: "10px 14px", marginBottom: 10 }}>
        <p style={{ fontSize: 10, fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.08em", color: "rgba(255,255,255,0.5)", marginBottom: 2 }}>Current Conference</p>
        <p style={{ fontSize: 15, fontWeight: 700, color: "white" }}>Conference Expo 2026</p>
        <p style={{ fontSize: 11, color: "rgba(255,255,255,0.45)" }}>Mar 30 – Apr 1 · Nashville, TN</p>
      </div>

      {/* Action row */}
      <FloorActionRow />

      {/* Floor Notes card */}
      <div style={{ background: "white", borderRadius: 14, padding: 14 }}>
        {/* Card header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ fontSize: 15 }}>✏️</span>
            <span style={{ fontSize: 14, fontWeight: 700, color: "#1e293b" }}>Floor Notes</span>
            <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#223A5E", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: "white" }}>2</span>
            </div>
            <span style={{ fontSize: 14, color: "#94a3b8", marginLeft: 2 }}>∧</span>
          </div>
          <div style={{ width: 28, height: 28, borderRadius: 6, background: "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center", cursor: "default" }}>
            <span style={{ fontSize: 14 }}>📷</span>
          </div>
        </div>

        {/* Note 1 — has Badge pill */}
        <div style={{ background: "#f8fafc", border: "1px solid rgba(245,158,11,0.3)", borderLeft: "3px solid #f59e0b", borderRadius: 8, padding: "10px 12px", marginBottom: 8 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
            <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
              <span style={{ fontSize: 10, fontWeight: 600, color: "#b45309", background: "rgba(245,158,11,0.1)", borderRadius: 20, padding: "2px 8px" }}>Unassigned</span>
              <span style={{ fontSize: 10, fontWeight: 600, color: "#475569", background: "#e2e8f0", borderRadius: 20, padding: "2px 8px" }}>📷 Badge</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0, marginLeft: 6 }}>
              <span style={{ fontSize: 13, color: "#94a3b8" }}>✏</span>
              <button style={{ fontSize: 11, fontWeight: 600, color: "#223A5E", background: "rgba(34,58,94,0.07)", border: "1px solid rgba(34,58,94,0.15)", borderRadius: 6, padding: "2px 8px", cursor: "default" }}>🏷️ Assign</button>
              <span style={{ fontSize: 13, color: "#94a3b8" }}>🗑</span>
            </div>
          </div>
          <p style={{ fontSize: 12, color: "#475569", lineHeight: 1.5, marginBottom: 4 }}>Ran into Ron at the hotel bar last night. He mentioned they&apos;re evaluating new platforms in Q3...</p>
          <span style={{ fontSize: 10, color: "#94a3b8" }}>3:12 PM</span>
        </div>

        {/* Note 2 */}
        <div style={{ background: "#f8fafc", border: "1px solid rgba(245,158,11,0.3)", borderLeft: "3px solid #f59e0b", borderRadius: 8, padding: "10px 12px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
            <span style={{ fontSize: 10, fontWeight: 600, color: "#b45309", background: "rgba(245,158,11,0.1)", borderRadius: 20, padding: "2px 8px" }}>Unassigned</span>
            <div style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0, marginLeft: 6 }}>
              <span style={{ fontSize: 13, color: "#94a3b8" }}>✏</span>
              <button style={{ fontSize: 11, fontWeight: 600, color: "#223A5E", background: "rgba(34,58,94,0.07)", border: "1px solid rgba(34,58,94,0.15)", borderRadius: 6, padding: "2px 8px", cursor: "default" }}>🏷️ Assign</button>
              <span style={{ fontSize: 13, color: "#94a3b8" }}>🗑</span>
            </div>
          </div>
          <p style={{ fontSize: 12, color: "#475569", lineHeight: 1.5, marginBottom: 4 }}>Booth conversation with Wayne — strong interest in the reporting features. Budget confirmed for next year...</p>
          <span style={{ fontSize: 10, color: "#94a3b8" }}>1:47 PM</span>
        </div>
      </div>
    </>
  );
}

/* ── Slide 4 — Assign Note ──────────────────────────────────────────────── */
function Slide4() {
  return (
    <div style={{ background: "white", borderRadius: 14, padding: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
        <span style={{ fontSize: 16, fontWeight: 700, color: "#223A5E" }}>Assign Note</span>
        <span style={{ fontSize: 18, color: "#64748b" }}>✕</span>
      </div>
      <p style={{ fontSize: 11, color: "#94a3b8", marginBottom: 14 }}>Link this note to a conference record</p>

      <div style={{ background: "#f8fafc", borderLeft: "3px solid #f59e0b", border: "1px solid #e2e8f0", borderRadius: 8, padding: "10px 12px", marginBottom: 16 }}>
        <p style={{ fontSize: 12, color: "#475569", lineHeight: 1.5 }}>Ran into Ron at the hotel bar last night. He mentioned they&apos;re evaluating new platforms in Q3...</p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 16 }}>
        {[
          { label: "Conference", value: "Conference Expo 2026" },
          { label: "Company",    value: "Vandelay Industries" },
          { label: "Attendee",   value: "Ron Burgundy" },
        ].map((field) => (
          <div key={field.label}>
            <p style={{ fontSize: 10, color: "#94a3b8", textTransform: "uppercase" as const, letterSpacing: "0.05em", marginBottom: 4 }}>{field.label}</p>
            <div style={{ background: "#f8fafc", border: "1.5px solid #223A5E", borderRadius: 8, padding: "10px 12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: "#1e293b" }}>{field.value}</span>
              <span style={{ fontSize: 12, color: "#94a3b8" }}>⌄</span>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: 8 }}>
        <button style={{ flex: 1, background: "#223A5E", color: "white", borderRadius: 8, padding: "12px", fontSize: 13, fontWeight: 600, border: "none", cursor: "default" }}>
          Assign Note
        </button>
        <button style={{ flex: 1, background: "transparent", color: "#64748b", borderRadius: 8, padding: "12px", fontSize: 13, fontWeight: 600, border: "1px solid #e2e8f0", cursor: "default" }}>
          Cancel
        </button>
      </div>
    </div>
  );
}

/* ── Slide 5 — Log Touchpoint ───────────────────────────────────────────── */
const TOUCHPOINT_TYPES = [
  "Booth Stop", "Coffee", "Meeting", "Demo",
  "Event", "Email", "Call", "Other",
];

function Slide5() {
  return (
    <div style={{ background: "white", borderRadius: 14, padding: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
        <span style={{ fontSize: 16, fontWeight: 700, color: "#223A5E" }}>Log Touchpoint</span>
        <span style={{ fontSize: 18, color: "#64748b" }}>✕</span>
      </div>
      <p style={{ fontSize: 11, color: "#94a3b8", marginBottom: 14 }}>Conference Expo 2026 · Vandelay Industries</p>

      <p style={{ fontSize: 10, color: "#94a3b8", textTransform: "uppercase" as const, letterSpacing: "0.05em", marginBottom: 8 }}>Attendees</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: "white", background: "#223A5E", borderRadius: 20, padding: "5px 12px" }}>Ron Burgundy</span>
        <span style={{ fontSize: 12, fontWeight: 500, color: "#475569", background: "#f1f5f9", border: "1px solid #e2e8f0", borderRadius: 20, padding: "5px 12px" }}>Wayne Campbell</span>
        <span style={{ fontSize: 12, fontWeight: 500, color: "#3b82f6", background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.25)", borderRadius: 20, padding: "5px 12px" }}>+ Add</span>
      </div>

      <p style={{ fontSize: 10, color: "#94a3b8", textTransform: "uppercase" as const, letterSpacing: "0.05em", marginBottom: 8 }}>Touchpoint Type</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 16 }}>
        {TOUCHPOINT_TYPES.map((label) => {
          const active = label === "Booth Stop";
          return (
            <button
              key={label}
              style={{
                background: active ? "#223A5E" : "white",
                color: active ? "white" : "#475569",
                border: active ? "none" : "1px solid #e2e8f0",
                borderRadius: 10,
                padding: "10px 12px",
                fontSize: 13,
                fontWeight: active ? 700 : 500,
                cursor: "default",
                textAlign: "left" as const,
              }}
            >
              {label}
            </button>
          );
        })}
      </div>

      <button style={{ width: "100%", background: "#34D399", color: "#111827", borderRadius: 8, padding: "12px", fontSize: 14, fontWeight: 700, border: "none", cursor: "default" }}>
        Log Touchpoint
      </button>
    </div>
  );
}

/* ── Main export ────────────────────────────────────────────────────────── */
export default function FloorCarousel() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);

  function move(delta: number) {
    setCurrent((prev) => Math.max(0, Math.min(SLIDE_LABELS.length - 1, prev + delta)));
  }

  const slides = [
    <Slide1 key="s1" />,
    <Slide2 key="s2" />,
    <Slide3 key="s3" />,
    <Slide4 key="s4" />,
    <Slide5 key="s5" />,
  ];

  const TIMES  = ["3:02", "3:07", "3:10", "3:14", "3:18"];
  const TITLES = ["Card Scan", "Floor Notes", "Floor Notes", "Assign Note", "Log Touchpoint"];

  return (
    <div style={{ position: "relative", maxWidth: 480 }}>
      <div style={{ overflow: "hidden" }}>
        <div
          style={{
            display: "flex",
            transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            transform: `translateX(-${current * 100}%)`,
          }}
          onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
          onTouchEnd={(e) => {
            const delta = e.changedTouches[0].clientX - touchStartX.current;
            if (Math.abs(delta) > 40) move(delta < 0 ? 1 : -1);
          }}
        >
          {slides.map((slide, idx) => (
            <div key={idx} style={{ flexShrink: 0, width: "100%" }}>
              <PhoneShell
                time={TIMES[idx]}
                title={TITLES[idx]}
                headerRight={<span style={{ fontSize: 18, color: "#475569" }}>✕</span>}
              >
                {slide}
              </PhoneShell>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 12, marginTop: 16 }}>
        <button
          onClick={() => move(-1)}
          disabled={current === 0}
          style={{ width: 36, height: 36, borderRadius: "50%", background: "#223A5E", color: "white", border: "none", opacity: current === 0 ? 0.3 : 1, cursor: current === 0 ? "not-allowed" : "pointer", fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center" }}
        >←</button>
        {SLIDE_LABELS.map((_, idx) => (
          <div
            key={idx}
            onClick={() => setCurrent(idx)}
            style={{ width: idx === current ? 20 : 8, height: 8, borderRadius: 4, background: idx === current ? "#223A5E" : "#e2e8f0", transition: "all 0.3s ease", cursor: "pointer" }}
          />
        ))}
        <button
          onClick={() => move(1)}
          disabled={current === SLIDE_LABELS.length - 1}
          style={{ width: 36, height: 36, borderRadius: "50%", background: "#223A5E", color: "white", border: "none", opacity: current === SLIDE_LABELS.length - 1 ? 0.3 : 1, cursor: current === SLIDE_LABELS.length - 1 ? "not-allowed" : "pointer", fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center" }}
        >→</button>
      </div>
      <p style={{ textAlign: "center", fontSize: 11, color: "#94a3b8", marginTop: 8 }}>
        {SLIDE_LABELS[current]}
      </p>
    </div>
  );
}
