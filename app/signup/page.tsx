"use client";

import { Suspense, useState, useRef, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

// ─── Plan types & constants ──────────────────────────────────────────────────

type Plan = "solo" | "starter" | "professional" | "enterprise";
const VALID_PLANS: Plan[] = ["solo", "starter", "professional", "enterprise"];
const BANNER_H = 36;
const NAV_H = 56;

interface PlanMeta { label: string; price: string; seats: string; popular?: boolean; }
const PLAN_META: Record<Plan, PlanMeta> = {
  solo:         { label: "Solo",         price: "$49/mo",  seats: "1 user" },
  starter:      { label: "Starter",      price: "$149/mo", seats: "Up to 3 users" },
  professional: { label: "Professional", price: "$399/mo", seats: "Up to 10 users", popular: true },
  enterprise:   { label: "Enterprise",   price: "Custom",  seats: "25+ users" },
};

const TRIAL_FEATURES = [
  "AI card scan & badge capture",
  "Meeting logs & follow-ups",
  "Pre & post-conference review",
  "Attendee list import (CSV)",
  "Relationship health scores",
  "Full access from day one",
];

// ─── Carousel constants ──────────────────────────────────────────────────────

const SLIDE_LABELS = ["Company Details", "Meetings & Follow-ups", "Custom Form Builder", "Touchpoint Map"];
const TOUCHPOINT_CONFERENCES = [
  { label: "SHN Build", pills: [{ text: "Dinner", count: 1, color: "#ef4444" }, { text: "Coffee", count: 1, color: "#f59e0b" }] },
  { label: "ASHA",      pills: [{ text: "Booth Stop", count: 1, color: "#3b82f6" }, { text: "Event", count: 1, color: "#7c3aed" }] },
  { label: "SL 100",    pills: [{ text: "Booth Stop", count: 1, color: "#3b82f6" }, { text: "Coffee", count: 1, color: "#f59e0b" }, { text: "Event", count: 1, color: "#7c3aed" }] },
  { label: "Expo 2026", pills: [{ text: "Booth Stop", count: 1, color: "#3b82f6" }, { text: "Coffee", count: 1, color: "#f59e0b" }] },
];

// ─── Shared icons ────────────────────────────────────────────────────────────

function CheckIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }} aria-hidden="true">
      <circle cx="8" cy="8" r="7" fill="rgba(52,211,153,0.2)" />
      <path d="M5 8l2 2 4-4" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

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

// ─── Phone shell wrapper ─────────────────────────────────────────────────────

function PhoneShell({ children, time, title, headerRight }: {
  children: ReactNode; time: string; title: string; headerRight?: ReactNode;
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
      background: "#f8fafc", border: "1px solid rgba(34,58,94,0.12)",
      borderRadius: 28, overflow: "hidden",
      boxShadow: "0 8px 32px rgba(34,58,94,0.12)",
      position: "relative", height: 520,
    }}>
      <div aria-hidden="true" style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 80,
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

// ─── Carousel slides ─────────────────────────────────────────────────────────

function Slide1() {
  return (
    <>
      <div style={{ background: "white", borderRadius: 14, padding: 16, marginBottom: 10 }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 52, height: 52, borderRadius: 12, background: "#34D399", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontSize: 22, fontWeight: 700, color: "white" }}>A</span>
            </div>
            <span style={{ fontSize: 18, fontWeight: 700, color: "#223A5E", lineHeight: 1.1 }}>Globadyn International</span>
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
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 12 }}>
          <span style={{ fontSize: 11, color: "#34D399", border: "1px solid #34D399", borderRadius: 20, padding: "3px 10px" }}>Operator</span>
          <span style={{ fontSize: 11, color: "#64748b", background: "#f1f5f9", border: "1px solid #e2e8f0", borderRadius: 20, padding: "3px 10px" }}>3 attendees</span>
          <span style={{ fontSize: 11, color: "#059669", background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.3)", borderRadius: 20, padding: "3px 10px" }}>👤 KW</span>
        </div>
        <div style={{ height: 1, background: "#e2e8f0", marginBottom: 12 }} />
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

function Slide2() {
  return (
    <>
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
      <div style={{ background: "white", borderRadius: 14, padding: 14 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <span style={{ fontSize: 14, fontWeight: 700, color: "#1e293b" }}>Follow Ups (2 pending)</span>
          <span style={{ fontSize: 11, color: "#3b82f6" }}>✅ Follow Up</span>
        </div>
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
          <p style={{ fontSize: 10, color: "#94a3b8" }}>Expo 2026 · Mar 30, 2026 · 🗒 1</p>
        </div>
        <div style={{ background: "rgba(52,211,153,0.04)", borderRadius: 8, padding: "8px 10px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: "#1e293b" }}>Jamie Floyd</span>
              <span style={{ fontSize: 10, color: "#059669", background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.3)", borderRadius: 20, padding: "2px 8px" }}>👤 KW</span>
            </div>
            <span style={{ fontSize: 11, color: "white", background: "#34D399", borderRadius: 6, padding: "2px 8px" }}>✓ Done</span>
          </div>
          <p style={{ fontSize: 11, color: "#64748b", marginBottom: 4 }}>Dlr. Sales Support · Globadyn</p>
          <p style={{ fontSize: 10, color: "#94a3b8" }}>SHN Build · Nov 5, 2025 · 🗒 0</p>
        </div>
      </div>
    </>
  );
}

function Slide3() {
  return (
    <div style={{ background: "white", borderRadius: 14, padding: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
        <span style={{ fontSize: 15, fontWeight: 700, color: "#223A5E", lineHeight: 1.2, flex: 1 }}>Edit Fields — Custom Form Builder</span>
        <span style={{ fontSize: 18, color: "#64748b", marginLeft: 8, flexShrink: 0 }}>✕</span>
      </div>
      <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 10, padding: "10px 12px", display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
        <span style={{ fontSize: 14, color: "#94a3b8" }}>⇕</span>
        <span style={{ fontSize: 13, fontWeight: 600, color: "#1e293b", flex: 1 }}>Email Address</span>
        <span style={{ fontSize: 10, color: "#64748b", background: "#f1f5f9", border: "1px solid #e2e8f0", borderRadius: 20, padding: "2px 8px" }}>Text</span>
        <span style={{ fontSize: 10, color: "#3b82f6", background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.25)", borderRadius: 20, padding: "2px 8px" }}>Template</span>
      </div>
      <div style={{ border: "1.5px solid #223A5E", borderRadius: 14, padding: 14, marginBottom: 12 }}>
        <p style={{ fontSize: 14, fontWeight: 700, color: "#223A5E", marginBottom: 12 }}>New Field</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 10 }}>
          <div>
            <p style={{ fontSize: 10, color: "#94a3b8", marginBottom: 4 }}>Field Type</p>
            <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 8, padding: "8px 10px", display: "flex", justifyContent: "space-between" }}>
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
        <div style={{ marginBottom: 10 }}>
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

function Slide4() {
  return (
    <div style={{ background: "white", borderRadius: 14, padding: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 12, borderBottom: "1px solid #e2e8f0", marginBottom: 14 }}>
        <span style={{ fontSize: 14, color: "#1e293b" }}>Total Touchpoints</span>
        <span style={{ fontSize: 20, fontWeight: 700, color: "#223A5E" }}>9</span>
      </div>
      {TOUCHPOINT_CONFERENCES.map((section) => (
        <div key={section.label} style={{ marginBottom: 14 }}>
          <p style={{ fontSize: 10, textTransform: "uppercase", color: "#94a3b8", letterSpacing: "0.05em", fontWeight: 600, marginBottom: 8 }}>{section.label}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {section.pills.map((pill) => (
              <span key={pill.text} style={{ fontSize: 13, fontWeight: 700, padding: "8px 14px", borderRadius: 10, border: `2px solid ${pill.color}`, color: pill.color, display: "inline-flex", alignItems: "center", gap: 6 }}>
                {pill.text} <span style={{ fontWeight: 400 }}>{pill.count}</span>
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Carousel widget (self-contained state) ──────────────────────────────────

function CarouselWidget() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);

  function move(delta: number) {
    setCurrent((prev) => Math.max(0, Math.min(SLIDE_LABELS.length - 1, prev + delta)));
  }

  const slides = [<Slide1 key="s1" />, <Slide2 key="s2" />, <Slide3 key="s3" />, <Slide4 key="s4" />];

  return (
    <div style={{ width: "100%" }}>
      <div style={{ overflow: "hidden" }}>
        <div
          style={{ display: "flex", transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1)", transform: `translateX(-${current * 100}%)` }}
          onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
          onTouchEnd={(e) => { const d = e.changedTouches[0].clientX - touchStartX.current; if (Math.abs(d) > 40) move(d < 0 ? 1 : -1); }}
        >
          {slides.map((slide, idx) => (
            <div key={idx} style={{ flexShrink: 0, width: "100%" }}>
              <PhoneShell
                time={["3:05","3:06","3:14","3:10"][idx]}
                title={["Company Details","Company Details","Conference Details","Touchpoint Map"][idx]}
                headerRight={idx === 3 ? <span style={{ fontSize: 18, color: "#475569" }}>✕</span> : undefined}
              >
                {slide}
              </PhoneShell>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 12, marginTop: 14 }}>
        <button onClick={() => move(-1)} disabled={current === 0} style={{ width: 36, height: 36, borderRadius: "50%", background: "#223A5E", color: "white", border: "none", opacity: current === 0 ? 0.3 : 1, cursor: current === 0 ? "not-allowed" : "pointer", fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>←</button>
        {SLIDE_LABELS.map((_, idx) => (
          <div key={idx} onClick={() => setCurrent(idx)} style={{ width: idx === current ? 20 : 8, height: 8, borderRadius: 4, background: idx === current ? "#223A5E" : "#e2e8f0", transition: "all 0.3s ease", cursor: "pointer" }} />
        ))}
        <button onClick={() => move(1)} disabled={current === SLIDE_LABELS.length - 1} style={{ width: 36, height: 36, borderRadius: "50%", background: "#223A5E", color: "white", border: "none", opacity: current === SLIDE_LABELS.length - 1 ? 0.3 : 1, cursor: current === SLIDE_LABELS.length - 1 ? "not-allowed" : "pointer", fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>→</button>
      </div>
      <p style={{ textAlign: "center", fontSize: 11, color: "#94a3b8", marginTop: 6 }}>{SLIDE_LABELS[current]}</p>
    </div>
  );
}

// ─── Main signup component ───────────────────────────────────────────────────

function SignupInner() {
  const searchParams = useSearchParams();
  const rawPlan = searchParams.get("plan") as Plan | null;
  const initialPlan: Plan = rawPlan && VALID_PLANS.includes(rawPlan) ? rawPlan : "professional";
  const [selectedPlan, setSelectedPlan] = useState<Plan>(initialPlan);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selected = Array.from(e.target.files ?? []).slice(0, 3);
    setUploadedFiles(selected);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const data = new FormData(e.currentTarget);
    data.set("plan", selectedPlan);
    try {
      const res = await fetch("https://formspree.io/f/maqlwynq", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="signup-root" style={{ height: "100vh", overflow: "hidden", background: "#f8fafc" }}>
      <style>{`
        @media (max-width: 767px) {
          .signup-root { height: auto !important; overflow: visible !important; }
          .signup-main { position: static !important; height: auto !important; overflow: visible !important; flex-direction: column !important; }
          .ctx-panel    { width: 100% !important; padding: 28px 20px !important; }
          .form-panel   { overflow: visible !important; overflow-y: visible !important; padding: 24px 20px 40px !important; }
          .plan-grid    { grid-template-columns: 1fr 1fr !important; }
          .signup-bottom-row { flex-direction: column !important; gap: 24px !important; }
          .carousel-col { display: none !important; }
          .name-grid    { grid-template-columns: 1fr !important; }
          .nav-signin   { display: none !important; }
          .banner-full  { display: none !important; }
          .banner-short { display: flex !important; }
        }
        @media (min-width: 768px) {
          .banner-short { display: none !important; }
        }
      `}</style>
      {/* Fixed green trial banner */}
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 60,
        height: BANNER_H, background: "#34D399",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        {/* Full text on desktop, shortened on mobile */}
        <span className="banner-full" style={{ fontSize: 13, fontWeight: 600, color: "#064e3b" }}>
          14-day free trial · No credit card required · Full access from day one
        </span>
        <span className="banner-short" style={{ fontSize: 13, fontWeight: 600, color: "#064e3b", alignItems: "center", justifyContent: "center" }}>
          14-day free trial · No credit card required
        </span>
      </div>

      {/* Fixed navy nav */}
      <nav style={{
        position: "fixed", top: BANNER_H, left: 0, right: 0, zIndex: 50,
        height: NAV_H, background: "#223A5E",
        display: "flex", alignItems: "center",
        paddingLeft: 32, paddingRight: 32,
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}>
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <Image src="/ParlayLogoWhite_Green.png" alt="Parlay" width={100} height={32} priority />
        </Link>
        <span className="nav-signin" style={{ marginLeft: "auto", fontSize: 13, color: "rgba(255,255,255,0.5)" }}>
          Already have an account?{" "}
          <a href="https://work.useparlay.app" style={{ color: "#34D399", textDecoration: "none", fontWeight: 500 }}>Sign in</a>
        </span>
      </nav>

      {/* Fixed main area */}
      <div className="signup-main" style={{
        position: "fixed",
        top: BANNER_H + NAV_H, left: 0, right: 0, bottom: 0,
        display: "flex",
        overflow: "hidden",
      }}>
        {/* Left panel — ctx-panel */}
        <div className="ctx-panel" style={{
          width: "38%",
          background: "#1e3354",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          paddingTop: 40,
          paddingLeft: 48,
          paddingRight: 48,
          paddingBottom: 40,
        }}>
          {/* Eyebrow — aligned with step indicator via matching paddingTop: 40 */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 32 }}>
            <div style={{ width: 24, height: 2, background: "#34D399" }} />
            <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#34D399" }}>
              14-day free trial
            </span>
          </div>
          <h2 className="font-playfair" style={{ fontSize: 28, fontWeight: 700, color: "#fff", lineHeight: 1.3, marginBottom: 12 }}>
            Start your free trial
          </h2>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: 32 }}>
            Build your conference playbook before your next event. Upload your attendee list, assign your team, and walk in with a plan on day one.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 40 }}>
            {TRIAL_FEATURES.map((f) => (
              <div key={f} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <CheckIcon />
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.72)" }}>{f}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "rgba(52,211,153,0.08)", border: "1px solid rgba(52,211,153,0.2)", borderRadius: 10, padding: "16px 18px" }}>
            <p style={{ fontSize: 13, fontWeight: 600, color: "#34D399", marginBottom: 6 }}>Upload up to 3 past conference lists</p>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>
              Instantly build your relationship history and ICP scores before your first event.
            </p>
          </div>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", marginTop: "auto", paddingTop: 24 }}>
            No credit card required · Cancel anytime · Full access from day one
          </p>
        </div>

        {/* Right panel — form-panel */}
        <div className="form-panel" style={{
          flex: 1,
          overflow: "hidden",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          background: "#fff",
          paddingTop: 40,
          paddingLeft: 48,
          paddingRight: 48,
        }}>
          {/* ── Full-width top: step indicator, heading, plan selector ── */}
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 36, flexWrap: "wrap" }}>
            {[
              { label: "Your account", active: true },
              { label: "Your conference", active: false },
              { label: "Import history", active: false },
            ].map((s, i) => (
              <span key={s.label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                {i > 0 && <span style={{ width: 16, height: 1, background: "rgba(34,58,94,0.2)", display: "inline-block" }} />}
                <span style={{ fontSize: 12, fontWeight: s.active ? 600 : 400, color: s.active ? "#223A5E" : "rgba(34,58,94,0.4)" }}>
                  {s.label}
                </span>
              </span>
            ))}
          </div>

          <h1 className="font-playfair" style={{ fontSize: 24, fontWeight: 700, color: "#223A5E", marginBottom: 6 }}>
            Create your account
          </h1>
          <p style={{ fontSize: 14, color: "#64748b", marginBottom: 28 }}>
            Choose a plan, then set up your account. Change plans anytime.
          </p>

          <p style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "#94a3b8", marginBottom: 10 }}>
            Select a plan
          </p>
          <div className="plan-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 10, marginBottom: 32 }}>
            {VALID_PLANS.map((plan) => {
              const meta = PLAN_META[plan];
              const isSel = selectedPlan === plan;
              return (
                <div
                  key={plan}
                  className={`plan-card${isSel ? " sel" : ""}`}
                  onClick={() => setSelectedPlan(plan)}
                  style={{
                    border: isSel ? "2px solid #223A5E" : "1.5px solid rgba(34,58,94,0.15)",
                    background: isSel ? "rgba(34,58,94,0.06)" : "#fff",
                    borderRadius: 10, padding: "14px 16px",
                    cursor: "pointer", position: "relative",
                    transition: "border-color 120ms, background 120ms",
                    userSelect: "none",
                  }}
                >
                  {meta.popular && (
                    <span style={{ position: "absolute", top: -10, right: 10, fontSize: 10, fontWeight: 700, background: "#34D399", color: "#064e3b", borderRadius: 999, padding: "2px 8px" }}>
                      Popular
                    </span>
                  )}
                  <p style={{ fontSize: 13, fontWeight: 600, color: isSel ? "#223A5E" : "#475569", marginBottom: 2 }}>{meta.label}</p>
                  <p style={{ fontSize: 15, fontWeight: 700, color: isSel ? "#223A5E" : "#334155", marginBottom: 2 }}>{meta.price}</p>
                  <p style={{ fontSize: 11, color: "#94a3b8" }}>{meta.seats}</p>
                </div>
              );
            })}
          </div>

          {/* ── Bottom row: form fields (left) + carousel (right) ── */}
          <div className="signup-bottom-row" style={{ display: "flex", flexDirection: "row", gap: 40, alignItems: "flex-start", paddingBottom: 48 }}>

            {/* Form fields column */}
            {status === "success" ? (
              <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12, padding: "40px 0" }}>
                <div style={{ width: 52, height: 52, borderRadius: "50%", background: "rgba(52,211,153,0.15)", border: "2px solid #34D399", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 13l4 4L19 7" stroke="#34D399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p style={{ fontSize: 18, fontWeight: 700, color: "#223A5E" }}>You&apos;re on the list!</p>
                <p style={{ fontSize: 14, color: "#64748b", textAlign: "center", maxWidth: 300 }}>
                  We received your signup for the <strong>{PLAN_META[selectedPlan].label}</strong> plan. We&apos;ll be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
                <input type="hidden" name="plan" value={selectedPlan} />
                <input type="hidden" name="_subject" value={`New free trial signup — ${PLAN_META[selectedPlan].label}`} />
                <div className="name-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "#374151", marginBottom: 6 }}>First name</label>
                    <input required name="first_name" type="text" placeholder="Jane" style={{ width: "100%", boxSizing: "border-box", border: "1.5px solid #e2e8f0", borderRadius: 8, padding: "9px 12px", fontSize: 14, color: "#111827", outline: "none" }} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "#374151", marginBottom: 6 }}>Last name</label>
                    <input required name="last_name" type="text" placeholder="Smith" style={{ width: "100%", boxSizing: "border-box", border: "1.5px solid #e2e8f0", borderRadius: 8, padding: "9px 12px", fontSize: 14, color: "#111827", outline: "none" }} />
                  </div>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "#374151", marginBottom: 6 }}>Work email</label>
                  <input required name="email" type="email" placeholder="jane@company.com" style={{ width: "100%", boxSizing: "border-box", border: "1.5px solid #e2e8f0", borderRadius: 8, padding: "9px 12px", fontSize: 14, color: "#111827", outline: "none" }} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "#374151", marginBottom: 6 }}>Company name</label>
                  <input required name="company" type="text" placeholder="Acme Corp" style={{ width: "100%", boxSizing: "border-box", border: "1.5px solid #e2e8f0", borderRadius: 8, padding: "9px 12px", fontSize: 14, color: "#111827", outline: "none" }} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "#374151", marginBottom: 6 }}>Password</label>
                  <input required name="password" type="password" placeholder="Min. 8 characters" minLength={8} style={{ width: "100%", boxSizing: "border-box", border: "1.5px solid #e2e8f0", borderRadius: 8, padding: "9px 12px", fontSize: 14, color: "#111827", outline: "none" }} />
                </div>
                <div
                  onClick={() => fileInputRef.current?.click()}
                  style={{ border: `1.5px dashed ${uploadedFiles.length > 0 ? "#34D399" : "rgba(34,58,94,0.2)"}`, borderRadius: 10, padding: "18px 20px", textAlign: "center", background: uploadedFiles.length > 0 ? "rgba(52,211,153,0.04)" : "#f8fafc", cursor: "pointer", transition: "border-color 150ms, background 150ms" }}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    name="conference_lists"
                    accept=".csv"
                    multiple
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                  <div style={{ marginBottom: 8, display: "flex", justifyContent: "center" }}>
                    <div style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <path d="M10 13V7m0 0L7.5 9.5M10 7l2.5 2.5" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4 14v1a2 2 0 002 2h8a2 2 0 002-2v-1" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>
                  {uploadedFiles.length > 0 ? (
                    <div>
                      <p style={{ fontSize: 13, fontWeight: 500, color: "#059669", marginBottom: 6 }}>
                        {uploadedFiles.length} file{uploadedFiles.length > 1 ? "s" : ""} selected
                      </p>
                      {uploadedFiles.map((f) => (
                        <p key={f.name} style={{ fontSize: 12, color: "#475569", marginBottom: 2 }}>{f.name}</p>
                      ))}
                      <p style={{ fontSize: 11, color: "#94a3b8", marginTop: 4 }}>Click to change</p>
                    </div>
                  ) : (
                    <div>
                      <p style={{ fontSize: 13, fontWeight: 500, color: "#334155", marginBottom: 4 }}>Upload past conference lists (optional)</p>
                      <p style={{ fontSize: 12, color: "#94a3b8" }}>CSV files · Up to 3 events · Build your relationship history instantly</p>
                    </div>
                  )}
                </div>
                {status === "error" && (
                  <p style={{ fontSize: 13, color: "#ef4444", textAlign: "center" }}>
                    Something went wrong — please try again or email us directly.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  style={{ width: "100%", padding: "12px 24px", borderRadius: 9, background: "#223A5E", color: "#fff", fontSize: 15, fontWeight: 600, border: "none", cursor: status === "submitting" ? "not-allowed" : "pointer", opacity: status === "submitting" ? 0.7 : 1, marginTop: 4 }}
                >
                  {status === "submitting" ? "Submitting…" : "Create account & start trial →"}
                </button>
                <p style={{ fontSize: 12, color: "#94a3b8", textAlign: "center" }}>
                  By continuing, you agree to our{" "}
                  <Link href="/terms" style={{ color: "#223A5E", textDecoration: "none" }}>Terms</Link>
                  {" "}and{" "}
                  <Link href="/privacy" style={{ color: "#223A5E", textDecoration: "none" }}>Privacy Policy</Link>.
                </p>
              </form>
            )}

            {/* Carousel column — sticky so it stays visible while form scrolls */}
            <div className="carousel-col" style={{ flex: 1, minWidth: 260, position: "sticky", top: 0, alignSelf: "flex-start" }}>
              <CarouselWidget />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SignupPage() {
  return (
    <Suspense fallback={null}>
      <SignupInner />
    </Suspense>
  );
}
