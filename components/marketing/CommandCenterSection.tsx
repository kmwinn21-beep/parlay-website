"use client";

import { useState, useRef, type ReactNode } from "react";

const CHECKLIST = [
  "Scan a single card or a stack of ten. Parlay parses every contact in one shot. Matching existing attendees, flagging new ones, and automaticallycreating records with the right company and conference association.",
  "Floor Notes let reps jot down notes in the moment, without stopping to find a record. The note is saved, timestamped, and ready to assign to the right record when there's a break in the action",
  "Assigning a Floor Note automatically creates a follow-up task and the system handles the accountability structure in the background",
  "Badge and card scans work the same way. Scan now, assign later. When the rep is ready, the same matching workflow activates",
  "Every touchpoint, note, and scan, feeds directly into the conference effectiveness metrics that leaders see after the event",
];

const SLIDE_LABELS = [
  "Company Details",
  "Meetings & Follow-ups",
  "Custom Form Builder",
  "Touchpoint Map",
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
    <div
      style={{
        background: "#f8fafc",
        border: "1px solid rgba(34,58,94,0.12)",
        borderRadius: 28,
        overflow: "hidden",
        boxShadow: "0 8px 32px rgba(34,58,94,0.12)",
        position: "relative",
        height: 560,
      }}
    >
      {/* Fade overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          height: 80,
          background: "linear-gradient(to bottom, transparent, #f8fafc)",
          zIndex: 3, pointerEvents: "none",
        }}
      />
      {/* Status bar */}
      <div style={{ background: "#f8fafc", padding: "10px 18px 4px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: "#1e293b" }}>{time}</span>
        <StatusIcons />
      </div>
      {/* App header */}
      <div style={{ background: "#f8fafc", padding: "8px 16px 12px", borderBottom: "1px solid #e2e8f0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <p style={{ fontSize: 18, fontWeight: 700, color: "#223A5E", lineHeight: 1.2 }}>{title}</p>
        {headerRight ?? defaultHeaderRight}
      </div>
      {/* Screen body */}
      <div style={{ background: "#f1f5f9", padding: 12, overflowY: "hidden" }}>
        {children}
      </div>
    </div>
  );
}

/* ── Slide 1 ── Company Details ─────────────────────────────────────────── */
function Slide1() {
  return (
    <>
      {/* Company card */}
      <div style={{ background: "white", borderRadius: 14, padding: 16, marginBottom: 10 }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 52, height: 52, borderRadius: 12, background: "#34D399", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontSize: 22, fontWeight: 700, color: "white" }}>A</span>
            </div>
            <span style={{ fontSize: 20, fontWeight: 700, color: "#223A5E", lineHeight: 1.1 }}>Globadyn International</span>
          </div>
          <div style={{ display: "flex", gap: 6, alignItems: "center", flexShrink: 0, marginLeft: 8 }}>
            <div style={{ width: 36, height: 36, borderRadius: 8, border: "1.5px solid #223A5E", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: 14 }}>✏</span>
            </div>
            <div style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(52,211,153,0.15)", border: "1.5px solid #34D399", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: 10, color: "#059669" }}>✓</span>
            </div>
          </div>
        </div>
        {/* Pills */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 12 }}>
          <span style={{ fontSize: 11, color: "#34D399", border: "1px solid #34D399", borderRadius: 20, padding: "3px 10px" }}>Operator</span>
          <span style={{ fontSize: 11, color: "#64748b", background: "#f1f5f9", border: "1px solid #e2e8f0", borderRadius: 20, padding: "3px 10px" }}>3 attendees</span>
          <span style={{ fontSize: 11, color: "#059669", background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.3)", borderRadius: 20, padding: "3px 10px" }}>👤 KW</span>
        </div>
        <div style={{ height: 1, background: "#e2e8f0", marginBottom: 12 }} />
        {/* Field grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 12px" }}>
          <div>
            <p style={{ fontSize: 10, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 2 }}>Website</p>
            <span style={{ fontSize: 12, color: "#3b82f6" }}>↗ globadyn.com</span>
          </div>
          <div>
            <p style={{ fontSize: 10, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 2 }}>Added</p>
            <span style={{ fontSize: 12, color: "#1e293b" }}>4/2/2026</span>
          </div>
          <div>
            <p style={{ fontSize: 10, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 2 }}>Status</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span style={{ fontSize: 11, color: "#b45309", background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.25)", borderRadius: 20, padding: "2px 8px", display: "inline-block" }}>Nurturing</span>
              <span style={{ fontSize: 11, color: "#ef4444", background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.25)", borderRadius: 20, padding: "2px 8px", display: "inline-block" }}>Priority – KW</span>
            </div>
          </div>
          <div>
            <p style={{ fontSize: 10, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 2 }}>WSE</p>
            <span style={{ fontSize: 12, color: "#1e293b" }}>⛺ 1,266</span>
          </div>
          <div>
            <p style={{ fontSize: 10, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 2 }}>Services</p>
            <span style={{ fontSize: 11, color: "#64748b", background: "#f1f5f9", border: "1px solid #e2e8f0", borderRadius: 20, padding: "2px 8px", display: "inline-block" }}>Consulting</span>
          </div>
          <div>
            <p style={{ fontSize: 10, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 2 }}>ICP</p>
            <span style={{ fontSize: 12, color: "#059669", fontWeight: 500 }}>✓ Yes</span>
          </div>
        </div>
      </div>

      {/* Pinned Notes */}
      <div style={{ background: "white", borderRadius: 14, borderLeft: "4px solid #34D399", padding: 14 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: "#1e293b" }}>📌 Pinned Notes (1)</span>
          <span style={{ fontSize: 14, color: "#94a3b8" }}>∨</span>
        </div>
        <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 10, padding: "10px 12px" }}>
          <div style={{ display: "flex", gap: 6, marginBottom: 6 }}>
            <span style={{ fontSize: 10, color: "white", background: "#223A5E", borderRadius: 20, padding: "2px 8px" }}>👤 KW</span>
            <span style={{ fontSize: 10, color: "#64748b", background: "#f1f5f9", border: "1px solid #e2e8f0", borderRadius: 20, padding: "2px 8px" }}>NIC Spring 2026</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8, flexWrap: "wrap" }}>
            <span style={{ fontSize: 10, color: "#059669", background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.3)", borderRadius: 20, padding: "2px 8px" }}>Frank Baskum</span>
            <span style={{ fontSize: 10, color: "#94a3b8" }}>Apr 25, 2026 at 3:00 PM</span>
          </div>
          <p style={{ fontSize: 12, color: "#475569", lineHeight: 1.5 }}>
            Super busy but we&apos;re still on their radar. Now just isn&apos;t the right time to fully engage
          </p>
        </div>
      </div>
    </>
  );
}

/* ── Slides 2–4 placeholders (filled in next batches) ─────────────────── */
function Slide2() {
  return (
    <>
      {/* Meetings card */}
      <div style={{ background: "white", borderRadius: 14, padding: 14, marginBottom: 10 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <span style={{ fontSize: 14, fontWeight: 700, color: "#1e293b" }}>Meetings (1)</span>
          <span style={{ fontSize: 11, color: "#3b82f6" }}>📅 Schedule</span>
        </div>
        <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 10, padding: "10px 12px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#1e293b" }}>Jack McCallister</span>
            <div style={{ display: "flex", gap: 8 }}>
              <span style={{ color: "#94a3b8", fontSize: 14 }}>ℹ</span>
              <span style={{ color: "#94a3b8", fontSize: 14 }}>✏</span>
            </div>
          </div>
          <p style={{ fontSize: 11, color: "#64748b", marginBottom: 4 }}>Founding Principal &amp; CEO</p>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4, flexWrap: "wrap" }}>
            <span style={{ fontSize: 11, color: "#475569" }}>Mar 30, 2026 at 7:08 AM</span>
            <span style={{ fontSize: 10, color: "#64748b", background: "#f1f5f9", border: "1px solid #e2e8f0", borderRadius: 20, padding: "2px 7px" }}>Pre-Scheduled</span>
          </div>
          <p style={{ fontSize: 11, color: "#94a3b8", marginBottom: 8 }}>Expo 2026</p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 11, color: "#059669", background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.3)", borderRadius: 20, padding: "3px 10px" }}>Held ∨</span>
            <span style={{ fontSize: 10, color: "#059669", background: "rgba(52,211,153,0.15)", borderRadius: 20, padding: "2px 8px" }}>KW</span>
          </div>
        </div>
      </div>

      {/* Follow Ups card */}
      <div style={{ background: "white", borderRadius: 14, padding: 14 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <span style={{ fontSize: 14, fontWeight: 700, color: "#1e293b" }}>Follow Ups (2 pending)</span>
          <span style={{ fontSize: 11, color: "#3b82f6" }}>✅ Follow Up</span>
        </div>

        {/* Row 1 */}
        <div style={{ borderBottom: "1px solid rgba(34,58,94,0.06)", paddingBottom: 10, marginBottom: 10 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: "#1e293b" }}>Jane Smith</span>
              <span style={{ fontSize: 10, color: "#b45309", background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.25)", borderRadius: 20, padding: "2px 8px" }}>👤 CA</span>
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 11, color: "#64748b", border: "1px solid #e2e8f0", borderRadius: 6, padding: "2px 8px" }}>Done</span>
              <span style={{ fontSize: 12, color: "#94a3b8" }}>🗑</span>
            </div>
          </div>
          <p style={{ fontSize: 11, color: "#64748b", marginBottom: 4 }}>Chief Financial Officer · Globadyn</p>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 3, flexWrap: "wrap" }}>
            <span style={{ fontSize: 10, color: "white", background: "#223A5E", borderRadius: 20, padding: "2px 8px", fontWeight: 500 }}>Event</span>
            <span style={{ fontSize: 10, color: "#64748b" }}>Auto-created from touchpoint: Event</span>
          </div>
          <p style={{ fontSize: 10, color: "#94a3b8" }}>Expo 2026 · Mar 30, 2026 · 🗒 1</p>
        </div>

        {/* Row 2 */}
        <div style={{ borderBottom: "1px solid rgba(34,58,94,0.06)", paddingBottom: 10, marginBottom: 10 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: "#1e293b" }}>Jack McCallister</span>
              <span style={{ fontSize: 10, color: "#059669", background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.3)", borderRadius: 20, padding: "2px 8px" }}>👤 KW</span>
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 11, color: "#64748b", border: "1px solid #e2e8f0", borderRadius: 6, padding: "2px 8px" }}>Done</span>
              <span style={{ fontSize: 12, color: "#94a3b8" }}>🗑</span>
            </div>
          </div>
          <p style={{ fontSize: 11, color: "#64748b", marginBottom: 4 }}>Founding Principal &amp; CEO · Globadyn</p>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 3, flexWrap: "wrap" }}>
            <span style={{ fontSize: 10, color: "white", background: "#223A5E", borderRadius: 20, padding: "2px 8px", fontWeight: 500 }}>Coffee</span>
            <span style={{ fontSize: 10, color: "#64748b" }}>Auto-created from touchpoint: Coffee</span>
          </div>
          <p style={{ fontSize: 10, color: "#94a3b8" }}>Expo 2026 · Mar 30, 2026 · 🗒 2</p>
        </div>

        {/* Row 3 — completed */}
        <div style={{ background: "rgba(52,211,153,0.04)", borderRadius: 8, padding: "8px 10px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: "#1e293b" }}>Jamie Floyd</span>
              <span style={{ fontSize: 10, color: "#059669", background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.3)", borderRadius: 20, padding: "2px 8px" }}>👤 KW</span>
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 11, color: "white", background: "#34D399", borderRadius: 6, padding: "2px 8px" }}>✓ Done</span>
              <span style={{ fontSize: 12, color: "#94a3b8" }}>🗑</span>
            </div>
          </div>
          <p style={{ fontSize: 11, color: "#64748b", marginBottom: 4 }}>Dlr. Sales Support · Globadyn</p>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 3, flexWrap: "wrap" }}>
            <span style={{ fontSize: 10, color: "white", background: "#223A5E", borderRadius: 20, padding: "2px 8px", fontWeight: 500 }}>Event</span>
            <span style={{ fontSize: 10, color: "#64748b" }}>Auto-created from touchpoint: Event</span>
          </div>
          <p style={{ fontSize: 10, color: "#94a3b8" }}>SHN Build · Nov 5, 2025 · 🗒 0</p>
        </div>
      </div>
    </>
  );
}
function Slide3() {
  return (
    <div style={{ background: "white", borderRadius: 14, padding: 16 }}>
      {/* Title row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
        <span style={{ fontSize: 16, fontWeight: 700, color: "#223A5E", lineHeight: 1.2, flex: 1 }}>Edit Fields — Custom Form Builder</span>
        <span style={{ fontSize: 18, color: "#64748b", marginLeft: 8, flexShrink: 0 }}>✕</span>
      </div>

      {/* Existing field row */}
      <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 10, padding: "10px 12px", display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
        <span style={{ fontSize: 14, color: "#94a3b8" }}>⇕</span>
        <span style={{ fontSize: 13, fontWeight: 600, color: "#1e293b", flex: 1 }}>Email Address</span>
        <span style={{ fontSize: 10, color: "#64748b", background: "#f1f5f9", border: "1px solid #e2e8f0", borderRadius: 20, padding: "2px 8px" }}>Text (Single Line)</span>
        <span style={{ fontSize: 10, color: "#3b82f6", background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.25)", borderRadius: 20, padding: "2px 8px" }}>Template</span>
        <span style={{ fontSize: 12, color: "#94a3b8" }}>✏</span>
        <span style={{ fontSize: 12, color: "#94a3b8" }}>🗑</span>
      </div>

      {/* New Field card */}
      <div style={{ border: "1.5px solid #223A5E", borderRadius: 14, padding: 14, marginBottom: 12 }}>
        <p style={{ fontSize: 14, fontWeight: 700, color: "#223A5E", marginBottom: 12 }}>New Field</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 10 }}>
          <div>
            <p style={{ fontSize: 10, color: "#94a3b8", marginBottom: 4 }}>Field Type</p>
            <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 8, padding: "8px 10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 12, color: "#1e293b" }}>Dropdown</span>
              <span style={{ fontSize: 10, color: "#94a3b8" }}>⇕</span>
            </div>
          </div>
          <div>
            <p style={{ fontSize: 10, color: "#94a3b8", marginBottom: 4 }}>Label</p>
            <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 8, padding: "8px 10px" }}>
              <span style={{ fontSize: 12, color: "#1e293b" }}>Product</span>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: 10 }}>
          <p style={{ fontSize: 10, color: "#94a3b8", marginBottom: 4 }}>Placeholder</p>
          <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 8, padding: "8px 10px" }}>
            <span style={{ fontSize: 12, color: "#94a3b8" }}>What piqued your interest?</span>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
          <div style={{ width: 16, height: 16, borderRadius: 4, border: "1.5px solid #e2e8f0", background: "white", flexShrink: 0 }} />
          <span style={{ fontSize: 12, color: "#1e293b" }}>Required</span>
        </div>

        <div style={{ marginBottom: 10 }}>
          <p style={{ fontSize: 10, color: "#94a3b8", marginBottom: 4 }}>Options Source</p>
          <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 8, padding: "8px 10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 12, color: "#1e293b" }}>Custom options (enter below)</span>
            <span style={{ fontSize: 10, color: "#94a3b8" }}>⇕</span>
          </div>
        </div>

        <div style={{ marginBottom: 12 }}>
          <p style={{ fontSize: 10, color: "#94a3b8", marginBottom: 4 }}>Options</p>
          <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 8, padding: "8px 10px", marginBottom: 6 }}>
            <span style={{ fontSize: 12, color: "#1e293b" }}>Product / Service</span>
          </div>
          <span style={{ fontSize: 12, color: "#3b82f6" }}>+ Add option</span>
        </div>

        <div style={{ display: "flex", gap: 8 }}>
          <button style={{ flex: 1, background: "#223A5E", color: "white", borderRadius: 8, padding: "10px", fontSize: 13, fontWeight: 600, border: "none", cursor: "default" }}>Add Field</button>
          <button style={{ flex: 1, background: "transparent", color: "#223A5E", borderRadius: 8, padding: "10px", fontSize: 13, fontWeight: 600, border: "1.5px solid #223A5E", cursor: "default" }}>Cancel</button>
        </div>
      </div>

      <button style={{ width: "100%", background: "#223A5E", color: "white", borderRadius: 8, padding: "12px", fontSize: 14, fontWeight: 700, border: "none", cursor: "default" }}>Done</button>
    </div>
  );
}
const TOUCHPOINT_CONFERENCES = [
  { label: "SHN Build",  pills: [{ text: "Dinner",     count: 1, color: "#ef4444" }, { text: "Coffee",     count: 1, color: "#f59e0b" }] },
  { label: "ASHA",       pills: [{ text: "Booth Stop", count: 1, color: "#3b82f6" }, { text: "Event",      count: 1, color: "#7c3aed" }] },
  { label: "SL 100",     pills: [{ text: "Booth Stop", count: 1, color: "#3b82f6" }, { text: "Coffee",     count: 1, color: "#f59e0b" }, { text: "Event", count: 1, color: "#7c3aed" }] },
  { label: "Expo 2026",  pills: [{ text: "Booth Stop", count: 1, color: "#3b82f6" }, { text: "Coffee",     count: 1, color: "#f59e0b" }] },
];

function Slide4() {
  return (
    <div style={{ background: "white", borderRadius: 14, padding: 16 }}>
      {/* Total row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 12, borderBottom: "1px solid #e2e8f0", marginBottom: 14 }}>
        <span style={{ fontSize: 14, color: "#1e293b" }}>Total Touchpoints</span>
        <span style={{ fontSize: 20, fontWeight: 700, color: "#223A5E" }}>9</span>
      </div>

      {TOUCHPOINT_CONFERENCES.map((section) => (
        <div key={section.label} style={{ marginBottom: 14 }}>
          <p style={{ fontSize: 10, textTransform: "uppercase", color: "#94a3b8", letterSpacing: "0.05em", fontWeight: 600, marginBottom: 8 }}>{section.label}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {section.pills.map((pill) => (
              <span
                key={pill.text}
                style={{ fontSize: 13, fontWeight: 700, padding: "8px 14px", borderRadius: 10, border: `2px solid ${pill.color}`, color: pill.color, display: "inline-flex", alignItems: "center", gap: 6 }}
              >
                {pill.text} <span style={{ fontWeight: 400 }}>{pill.count}</span>
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Main section ─────────────────────────────────────────────────────── */
export default function CommandCenterSection() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);

  function move(delta: number) {
    setCurrent((prev) => Math.max(0, Math.min(SLIDE_LABELS.length - 1, prev + delta)));
  }

  const slides = [<Slide1 key="s1" />, <Slide2 key="s2" />, <Slide3 key="s3" />, <Slide4 key="s4" />];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left column — unchanged */}
          <div>
            <p className="font-inter text-sm font-semibold tracking-widest uppercase text-brand-teal mb-4">
              BUILT FOR THE FLOOR
            </p>
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-brand-primary mb-6">
              Capture everything. Assign it when you have a minute.
            </h2>
            <p className="font-inter text-lg text-brand-steel mb-8 leading-relaxed">
              Most tools assume reps have time to stop and log between conversations. Parlay is built around how conferences actually work; fast, overlapping, and unstructured. Capture first. Assign later. Nothing gets lost.
            </p>
            <ul className="space-y-4 mb-8">
              {CHECKLIST.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-teal flex items-center justify-center mt-0.5">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
                      <path d="M1 4L3.5 6.5L9 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="font-inter text-brand-steel leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
            <p className="font-inter text-brand-steel italic">
              Parlay fits the rep&apos;s reality on the floor making the data actionable, not questionable.
            </p>
          </div>

          {/* Right column — carousel */}
          <div>
            <div style={{ position: "relative", maxWidth: 480 }}>
              {/* Track */}
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
                        time={["3:05", "3:06", "3:14", "3:10"][idx]}
                        title={["Company Details", "Company Details", "Conference Details", "Touchpoint Map"][idx]}
                        headerRight={idx === 3 ? <span style={{ fontSize: 18, color: "#475569" }}>✕</span> : undefined}
                      >
                        {slide}
                      </PhoneShell>
                    </div>
                  ))}
                </div>
              </div>

              {/* Controls */}
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
          </div>

        </div>
      </div>
    </section>
  );
}
