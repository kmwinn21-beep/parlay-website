"use client";

import { useState, useRef, type ReactNode } from "react";

const SLIDE_LABELS = [
  "Batch Card Scan",
  "Floor Note",
  "Floor Notes Dashboard",
  "Assign Note",
  "Log Touchpoint",
];

/* ── Status bar SVGs (unchanged) ────────────────────────────────────────── */
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

/* ── SVG icon components ────────────────────────────────────────────────── */
function IcBell() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#223A5E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 01-3.46 0" />
    </svg>
  );
}
function IcWarning() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="#f59e0b" strokeWidth="2" strokeLinejoin="round" />
      <line x1="12" y1="9" x2="12" y2="13" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
      <line x1="12" y1="17" x2="12.01" y2="17" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
function IcCalendar() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#223A5E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}
function IcCamera({ size = 16, color = "#64748b" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}
function IcPencil({ size = 18, color = "#92400e" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  );
}
function IcTarget({ color = "#059669" }: { color?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}
function IcTrash({ color = "#94a3b8" }: { color?: string }) {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a1 1 0 011-1h4a1 1 0 011 1v2" />
    </svg>
  );
}

/* ── Dashboard header right icons ───────────────────────────────────────── */
function DashboardHeaderRight() {
  return (
    <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
      <span style={{ fontSize: 18, color: "#223A5E", lineHeight: 1 }}>≡</span>
      <IcBell />
      <div style={{ position: "relative", display: "inline-flex" }}>
        <IcWarning />
        <span style={{
          position: "absolute" as const, top: -3, right: -5,
          minWidth: 12, height: 12, borderRadius: 6,
          background: "#ef4444",
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          fontSize: 7, fontWeight: 800, color: "white", lineHeight: 1,
        }}>3</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 1 }}>
        <span style={{ fontSize: 17, fontWeight: 700, color: "#223A5E", lineHeight: 1 }}>+</span>
        <span style={{ fontSize: 8, color: "#94a3b8" }}>▾</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 1, background: "#f1f5f9", border: "1px solid #e2e8f0", borderRadius: 6, padding: "2px 5px" }}>
        <IcCalendar />
        <span style={{ fontSize: 8, color: "#94a3b8" }}>▾</span>
      </div>
    </div>
  );
}

/* ── Phone shell ─────────────────────────────────────────────────────────── */
function PhoneShell({ children, time }: { children: ReactNode; time: string }) {
  return (
    <div style={{
      background: "#f1f5f9",
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
        background: "linear-gradient(to bottom, transparent, #f1f5f9)",
        zIndex: 3, pointerEvents: "none",
      }} />
      {/* Status bar */}
      <div style={{ background: "white", padding: "10px 18px 5px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: "#1e293b" }}>{time}</span>
        <StatusIcons />
      </div>
      {/* App header */}
      <div style={{ background: "white", padding: "5px 16px 10px", borderBottom: "1px solid #e2e8f0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <p style={{ fontSize: 18, fontWeight: 700, color: "#223A5E" }}>Dashboard</p>
        <DashboardHeaderRight />
      </div>
      {/* Body */}
      <div style={{ padding: 10, overflowY: "hidden" }}>
        {children}
      </div>
    </div>
  );
}

/* ── Conference Tracking banner ─────────────────────────────────────────── */
function ConferenceBanner({ dimmed = false }: { dimmed?: boolean }) {
  return (
    <div style={{
      background: "#1e3356",
      borderRadius: 12,
      padding: "14px 16px",
      marginBottom: 10,
      position: "relative",
      overflow: "hidden",
      opacity: dimmed ? 0.5 : 1,
    }}>
      <div style={{
        position: "absolute", right: -12, top: -12,
        width: 80, height: 80, borderRadius: "50%",
        background: "rgba(52,211,153,0.15)",
        pointerEvents: "none",
      }} />
      <p style={{
        fontSize: 20, fontWeight: 700, color: "white",
        fontFamily: "'Playfair Display', Georgia, serif",
      }}>Conference Tracking</p>
      <span style={{ position: "absolute" as const, top: 10, right: 12 }}><IcPencil size={13} color="rgba(255,255,255,0.4)" /></span>
    </div>
  );
}

/* ── Action row (slides 2 & 3) ──────────────────────────────────────────── */
function FloorActionRow() {
  const ACTIONS = [
    { icon: <IcCamera size={20} color="#64748b" />, label: "Scan",        bg: "rgba(148,163,184,0.15)" },
    { icon: <IcPencil size={20} color="#92400e" />, label: "Floor Note",  bg: "rgba(245,158,11,0.12)"  },
    { icon: <IcTarget color="#047857" />,           label: "Touchpoints", bg: "rgba(52,211,153,0.12)"  },
  ];
  return (
    <div style={{ display: "flex", justifyContent: "space-around", background: "white", borderRadius: 14, padding: "10px 8px", marginBottom: 10 }}>
      {ACTIONS.map((a) => (
        <div key={a.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
          <div style={{ width: 44, height: 44, borderRadius: "50%", background: a.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {a.icon}
          </div>
          <span style={{ fontSize: 11, color: "#64748b" }}>{a.label}</span>
        </div>
      ))}
    </div>
  );
}

/* ── Assign pill button (slide 3) ───────────────────────────────────────── */
function AssignBtn() {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 4,
      fontSize: 12, fontWeight: 500, color: "#223A5E",
      background: "white", border: "1px solid #e2e8f0", borderRadius: 20,
      padding: "3px 10px", cursor: "default", flexShrink: 0,
    }}>
      <svg width="11" height="10" viewBox="0 0 11 10" fill="none">
        <path d="M0.5 1.5A.8.8 0 011.3.7h4L9 5 5.3 9.3H1.3A.8.8 0 01.5 8.5z" stroke="#475569" strokeWidth="1" strokeLinejoin="round" />
        <circle cx="3" cy="5" r="0.75" fill="#475569" />
      </svg>
      Assign
    </div>
  );
}

/* ── Select field (slides 4 & 5) ────────────────────────────────────────── */
function SelectField({ label, value, required = false, chevronOnly = false }: {
  label: string; value: string; required?: boolean; chevronOnly?: boolean;
}) {
  return (
    <div style={{ marginBottom: 11 }}>
      <p style={{ fontSize: 10, fontWeight: 700, color: "#64748b", textTransform: "uppercase" as const, letterSpacing: "0.07em", marginBottom: 5 }}>
        {label}{required && <span style={{ color: "#ef4444", marginLeft: 2 }}>*</span>}
      </p>
      <div style={{ border: "1px solid #e2e8f0", borderRadius: 8, padding: "9px 12px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "white" }}>
        <span style={{ fontSize: 13, color: "#1e293b" }}>{value}</span>
        <div style={{ display: "flex", gap: 7, alignItems: "center", color: "#94a3b8" }}>
          {!chevronOnly && <span style={{ fontSize: 14 }}>×</span>}
          <span style={{ fontSize: 12 }}>∨</span>
        </div>
      </div>
    </div>
  );
}

/* ── Slide 1 — Scanned Badge / Card ─────────────────────────────────────── */
const SCANNED_CONTACTS = [
  { name: "Wayne Campbell",  role: "VP of Sales",           company: "Vandelay Industries", phone: "555-201-4483", matchText: "1 match found",  matchColor: "#059669" },
  { name: "Lloyd Christmas", role: "Senior Account Exec",   company: "Sea Bass Inc.",        phone: "937-477-1115", matchText: "2 matches found", matchColor: "#059669" },
  { name: "Happy Gilmore",   role: "Director of Marketing", company: "Subway Tours",         phone: "330-562-9034", matchText: "No match found",  matchColor: "#d97706" },
];

function Slide1() {
  return (
    <div style={{ background: "white", borderRadius: 16, padding: "14px 14px 6px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
        <div>
          <p style={{ fontSize: 17, fontWeight: 700, color: "#223A5E", marginBottom: 2 }}>Scanned Badge / Card</p>
          <p style={{ fontSize: 12, color: "#94a3b8" }}>3 contacts detected</p>
        </div>
        <span style={{ fontSize: 20, color: "#94a3b8", lineHeight: 1 }}>×</span>
      </div>

      {SCANNED_CONTACTS.map((c, i) => (
        <div key={c.name} style={{
          border: "1px solid #e2e8f0", borderRadius: 12, padding: "12px 14px",
          marginBottom: i < SCANNED_CONTACTS.length - 1 ? 10 : 0,
        }}>
          <p style={{ fontSize: 14, fontWeight: 700, color: "#1e293b", marginBottom: 2 }}>{c.name}</p>
          <p style={{ fontSize: 12, color: "#64748b", marginBottom: 1 }}>{c.role}</p>
          <p style={{ fontSize: 12, color: "#64748b", marginBottom: 1 }}>{c.company}</p>
          <p style={{ fontSize: 11, color: "#94a3b8", marginBottom: 7 }}>{c.phone}</p>
          <p style={{ fontSize: 12, fontWeight: 600, color: c.matchColor, marginBottom: 10 }}>{c.matchText}</p>
          <div style={{ display: "flex", gap: 8 }}>
            <button style={{ flex: 1, background: "#223A5E", color: "white", border: "none", borderRadius: 8, padding: "9px", fontSize: 13, fontWeight: 600, cursor: "default" }}>
              Assign Now
            </button>
            <button style={{ flex: 1, background: "white", color: "#223A5E", border: "1.5px solid #223A5E", borderRadius: 8, padding: "9px", fontSize: 13, fontWeight: 600, cursor: "default" }}>
              Assign Later
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Slide 2 — Floor Note modal over dashboard ──────────────────────────── */
function Slide2() {
  return (
    <>
      <ConferenceBanner />
      <FloorActionRow />

      {/* Floor Note modal */}
      <div style={{ background: "white", borderRadius: 16, padding: 16, marginBottom: 10 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 12, marginBottom: 12, borderBottom: "1px solid #f1f5f9" }}>
          <p style={{ fontSize: 16, fontWeight: 700, color: "#223A5E" }}>Floor Note</p>
          <span style={{ fontSize: 19, color: "#94a3b8", lineHeight: 1 }}>×</span>
        </div>
        <div style={{ border: "1px solid #e2e8f0", borderRadius: 10, padding: "10px 12px", marginBottom: 6, minHeight: 80 }}>
          <p style={{ fontSize: 13, color: "#1e293b", lineHeight: 1.6 }}>
            Ran into Ron at the hotel bar last night. He mentioned they&apos;re evaluating new platforms in Q3...
          </p>
        </div>
        <p style={{ fontSize: 10, color: "#94a3b8", marginBottom: 12 }}>⌘+Enter to save</p>
        <div style={{ display: "flex", gap: 8 }}>
          <button style={{ flex: 1, background: "white", color: "#223A5E", border: "1.5px solid #223A5E", borderRadius: 8, padding: "9px", fontSize: 13, fontWeight: 600, cursor: "default" }}>
            Cancel
          </button>
          <button style={{ flex: 1, background: "#223A5E", color: "white", border: "none", borderRadius: 8, padding: "9px", fontSize: 13, fontWeight: 600, cursor: "default" }}>
            Save Note
          </button>
        </div>
      </div>

      {/* Previous note peeking */}
      <div style={{ background: "white", borderRadius: 12, padding: "9px 12px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 5 }}>
          <span style={{ fontSize: 10, color: "#94a3b8" }}>Apr 28, 2026 at 11:...</span>
          <div style={{ display: "flex", gap: 7, alignItems: "center" }}>
            <IcPencil size={13} color="#94a3b8" />
            <AssignBtn />
            <IcTrash />
          </div>
        </div>
        <p style={{ fontSize: 12, color: "#475569", lineHeight: 1.5 }}>Wayne came by the booth. Strong interest in the reporting features...</p>
      </div>
    </>
  );
}

/* ── Slide 3 — Floor Notes Dashboard ───────────────────────────────────── */
function Slide3() {
  return (
    <>
      <ConferenceBanner />
      <FloorActionRow />

      {/* Floor Notes card */}
      <div style={{ background: "white", borderRadius: 14, overflow: "hidden" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "11px 14px", borderBottom: "1px solid #f1f5f9" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 10V12h2L11 5 9 3 2 10z" fill="#475569" />
              <path d="M11.5 4.5 9.5 2.5l1-1a1 1 0 011.4 0l.6.6a1 1 0 010 1.4z" fill="#475569" />
            </svg>
            <span style={{ fontSize: 14, fontWeight: 700, color: "#223A5E" }}>Floor Notes</span>
            <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#223A5E", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: "white" }}>2</span>
            </div>
            <span style={{ fontSize: 15, color: "#94a3b8" }}>∧</span>
          </div>
          <div style={{ display: "flex", gap: 6 }}>
            <div style={{ width: 30, height: 30, borderRadius: 8, border: "1px solid #e2e8f0", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <IcCamera size={15} color="#64748b" />
            </div>
            <div style={{ width: 30, height: 30, borderRadius: 8, border: "1px solid #e2e8f0", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: 16, fontWeight: 700, color: "#475569" }}>+</span>
            </div>
          </div>
        </div>

        {/* Note 1 — Badge */}
        <div style={{ padding: "10px 14px", borderBottom: "1px solid #f1f5f9" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 7 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontSize: 10, color: "#94a3b8" }}>May 7, ...</span>
              <span style={{ fontSize: 10, fontWeight: 600, color: "#3b82f6", background: "rgba(59,130,246,0.1)", borderRadius: 20, padding: "2px 8px", display: "inline-flex", alignItems: "center", gap: 3 }}><IcCamera size={10} color="#3b82f6" /> Badge</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <IcPencil size={13} color="#94a3b8" />
              <AssignBtn />
              <IcTrash />
            </div>
          </div>
          <p style={{ fontSize: 12, color: "#475569", lineHeight: 1.5 }}>
            Name: Wayne Campbell  Title: VP of Sales  Company: Vandelay Industries  Email: wcampbell@vandelay.com  Phone: 555-201-4483
          </p>
        </div>

        {/* Note 2 */}
        <div style={{ padding: "10px 14px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 7 }}>
            <span style={{ fontSize: 10, color: "#94a3b8" }}>May 7, 2026 at 10:...</span>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <IcPencil size={13} color="#94a3b8" />
              <AssignBtn />
              <IcTrash />
            </div>
          </div>
          <p style={{ fontSize: 12, color: "#475569", lineHeight: 1.5 }}>
            Ran into Ron at the hotel bar last night. He mentioned they&apos;re evaluating new platforms in Q3...
          </p>
        </div>
      </div>
    </>
  );
}

/* ── Slide 4 — Assign Note ──────────────────────────────────────────────── */
function Slide4() {
  return (
    <>
      <ConferenceBanner dimmed />
      <div style={{ background: "white", borderRadius: 16, padding: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 12, marginBottom: 12, borderBottom: "1px solid #f1f5f9" }}>
          <p style={{ fontSize: 16, fontWeight: 700, color: "#223A5E" }}>Assign Note</p>
          <span style={{ fontSize: 19, color: "#94a3b8", lineHeight: 1 }}>×</span>
        </div>

        {/* Note preview */}
        <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 8, padding: "10px 12px", marginBottom: 14 }}>
          <p style={{ fontSize: 12, color: "#64748b", lineHeight: 1.5 }}>
            Ran into Ron at the hotel bar last night. He mentioned they&apos;re evaluating new platforms in Q3...
          </p>
        </div>

        <SelectField label="Conference" value="Conference Expo 2026" />
        <SelectField label="Company"    value="Vandelay Industries" />
        <SelectField label="Attendee"   value="Ron Burgundy" />

        <p style={{ fontSize: 11, color: "#94a3b8", lineHeight: 1.5, marginBottom: 14 }}>
          Note will be saved to the selected record(s) and removed from Quick Notes.
        </p>

        <div style={{ display: "flex", gap: 8 }}>
          <button style={{ flex: 1, background: "white", color: "#223A5E", border: "1.5px solid #223A5E", borderRadius: 8, padding: "10px", fontSize: 13, fontWeight: 600, cursor: "default" }}>
            Cancel
          </button>
          <button style={{ flex: 1, background: "#223A5E", color: "white", border: "none", borderRadius: 8, padding: "10px", fontSize: 13, fontWeight: 600, cursor: "default" }}>
            Assign Note
          </button>
        </div>
      </div>
    </>
  );
}

/* ── Slide 5 — Log Touchpoint ───────────────────────────────────────────── */
const TOUCHPOINT_TYPES = [
  "Booth Stop", "Coffee",
  "Dinner",     "Event",
  "Breakfast/Lunch", "Session",
  "Other",
];

function Slide5() {
  return (
    <>
      <ConferenceBanner dimmed />
      <div style={{ background: "white", borderRadius: 16, padding: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 12, marginBottom: 12, borderBottom: "1px solid #f1f5f9" }}>
          <p style={{ fontSize: 16, fontWeight: 700, color: "#223A5E" }}>Log Touchpoint</p>
          <span style={{ fontSize: 19, color: "#94a3b8", lineHeight: 1 }}>×</span>
        </div>

        <SelectField label="Conference" value="Conference Expo 2026" required />
        <SelectField label="Company"    value="Vandelay Industries" />

        {/* Attendee multi-select */}
        <div style={{ marginBottom: 11 }}>
          <p style={{ fontSize: 10, fontWeight: 700, color: "#64748b", textTransform: "uppercase" as const, letterSpacing: "0.07em", marginBottom: 5 }}>
            Attendee <span style={{ color: "#ef4444" }}>*</span>
          </p>
          <div style={{ border: "1px solid #e2e8f0", borderRadius: 8, padding: "9px 12px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "white", marginBottom: 7 }}>
            <span style={{ fontSize: 13, color: "#1e293b" }}>2 attendees selected</span>
            <span style={{ fontSize: 12, color: "#94a3b8" }}>∨</span>
          </div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {["Ron Burgundy", "Wayne Campbell"].map((name) => (
              <span key={name} style={{
                fontSize: 12, color: "#475569",
                background: "#f1f5f9", border: "1px solid #e2e8f0",
                borderRadius: 20, padding: "4px 10px",
                display: "inline-flex", alignItems: "center", gap: 5,
              }}>
                {name} <span style={{ fontSize: 12, color: "#94a3b8" }}>×</span>
              </span>
            ))}
          </div>
        </div>

        {/* Touchpoint type grid */}
        <div style={{ marginBottom: 14 }}>
          <p style={{ fontSize: 10, fontWeight: 700, color: "#64748b", textTransform: "uppercase" as const, letterSpacing: "0.07em", marginBottom: 8 }}>
            Touchpoint Type <span style={{ color: "#ef4444" }}>*</span>
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 7 }}>
            {TOUCHPOINT_TYPES.map((label) => {
              const active = label === "Booth Stop";
              return (
                <button key={label} style={{
                  background: active ? "rgba(59,130,246,0.06)" : "white",
                  color: active ? "#3b82f6" : "#475569",
                  border: active ? "1.5px solid #3b82f6" : "1px solid #e2e8f0",
                  borderRadius: 8, padding: "10px 12px",
                  fontSize: 13, fontWeight: active ? 600 : 400,
                  cursor: "default", textAlign: "left" as const,
                }}>
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        <div style={{ display: "flex", gap: 8 }}>
          <button style={{ flex: 1, background: "white", color: "#223A5E", border: "1.5px solid #223A5E", borderRadius: 8, padding: "10px", fontSize: 13, fontWeight: 600, cursor: "default" }}>
            Cancel
          </button>
          <button style={{ flex: 1, background: "#223A5E", color: "white", border: "none", borderRadius: 8, padding: "10px", fontSize: 13, fontWeight: 600, cursor: "default" }}>
            Log Touchpoint
          </button>
        </div>
      </div>
    </>
  );
}

/* ── Main export ─────────────────────────────────────────────────────────── */
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

  const TIMES = ["3:02", "3:07", "3:10", "3:14", "3:18"];

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
              <PhoneShell time={TIMES[idx]}>
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
