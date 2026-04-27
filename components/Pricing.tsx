"use client";

import Link from "next/link";
import { useState } from "react";

const PLANS = {
  solo:         { monthly: 49,  annual: 39  },
  starter:      { monthly: 149, annual: 119 },
  professional: { monthly: 399, annual: 319 },
};

const STARTER_FEATURES = [
  { text: "Up to 3 user seats", bold: true },
  { text: "Unlimited events & contacts" },
  { text: "AI card scan & badge capture" },
  { text: "Meeting logging & follow-ups" },
  { text: "Shared company & contact database" },
  { text: "Rep assignment & ownership tracking" },
  { text: "Relationship health scores" },
  { text: "Pre & post-conference review" },
  { text: "Attendee list import (CSV)" },
  { text: "ICP configuration" },
  { text: "Priority email support" },
];

const PRO_FEATURES = [
  { text: "Up to 10 user seats", bold: true },
  { text: "AI prospect recommendations", bold: true },
  { text: "Full team analytics dashboard" },
  { text: "Rep performance & coverage reporting" },
  { text: "Social event management & RSVPs" },
  { text: "Custom form builder" },
  { text: "Conference target tiering (Tier 1/2/3)" },
  { text: "Priority support (24hr response)" },
];

const ENTERPRISE_FEATURES = [
  { text: "Unlimited users", bold: true },
  { text: "Custom domain" },
  { text: "Full white-label branding" },
  { text: "SSO / SAML authentication" },
  { text: "Dedicated CSM & onboarding" },
  { text: "Historical data migration" },
  { text: "99.9% uptime SLA" },
  { text: "Same-day support response" },
];

const SOLO_PILLS = [
  "AI card scan & badge capture",
  "Unlimited events & contacts",
  "Meeting logs & follow-ups",
  "Relationship health scores",
  "Pre & post-conference review",
  "Attendee list import (CSV)",
];

function CheckIcon({ onDark = false }: { onDark?: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }} aria-hidden="true">
      <circle cx="8" cy="8" r="7" fill={onDark ? "rgba(52,211,153,0.2)" : "rgba(52,211,153,0.15)"} />
      <path d="M5 8l2 2 4-4" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FeatureList({
  features,
  onDark = false,
}: {
  features: { text: string; bold?: boolean }[];
  onDark?: boolean;
}) {
  return (
    <ul style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {features.map((f) => (
        <li key={f.text} style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <CheckIcon onDark={onDark} />
          <span
            style={{
              fontSize: 13,
              fontWeight: f.bold ? 600 : 400,
              color: onDark
                ? f.bold ? "#fff" : "rgba(255,255,255,0.72)"
                : f.bold ? "#223A5E" : "#475569",
            }}
          >
            {f.text}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  return (
    <>
      {/* ═══ BLOCK 1: PRICING GRID ═══ */}
      <section id="pricing" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 14 }}>
              <div style={{ width: 32, height: 1, background: "#34D399" }} />
              <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#34D399" }}>
                Pricing
              </span>
              <div style={{ width: 32, height: 1, background: "#34D399" }} />
            </div>
            <h2
              className="font-playfair"
              style={{ fontSize: 44, fontWeight: 700, color: "#223A5E", letterSpacing: "-0.01em", marginBottom: 14 }}
            >
              Simple, transparent pricing.
            </h2>
            <p style={{ fontSize: 16, color: "#64748b", maxWidth: 540, margin: "0 auto", lineHeight: 1.65 }}>
              No conference caps. No per-event fees. Pay for your team size — and run unlimited events on every plan.
            </p>
          </div>

          {/* Billing toggle */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 40 }}>
            <div style={{ display: "inline-flex", background: "#f1f5f9", borderRadius: 999, padding: 4, gap: 2 }}>
              <button
                onClick={() => setBilling("monthly")}
                style={{
                  borderRadius: 999, padding: "8px 20px", fontSize: 14, fontWeight: 500,
                  background: billing === "monthly" ? "#fff" : "transparent",
                  color: billing === "monthly" ? "#223A5E" : "#64748b",
                  border: "none", cursor: "pointer",
                  boxShadow: billing === "monthly" ? "0 1px 4px rgba(0,0,0,0.1)" : "none",
                  transition: "all 150ms",
                }}
              >
                Monthly
              </button>
              <button
                onClick={() => setBilling("annual")}
                style={{
                  borderRadius: 999, padding: "8px 20px", fontSize: 14, fontWeight: 500,
                  background: billing === "annual" ? "#fff" : "transparent",
                  color: billing === "annual" ? "#223A5E" : "#64748b",
                  border: "none", cursor: "pointer",
                  display: "flex", alignItems: "center", gap: 6,
                  boxShadow: billing === "annual" ? "0 1px 4px rgba(0,0,0,0.1)" : "none",
                  transition: "all 150ms",
                }}
              >
                Annual
                <span style={{
                  fontSize: 11, fontWeight: 600,
                  background: "rgba(52,211,153,0.15)",
                  color: "#059669",
                  borderRadius: 999, padding: "1px 7px",
                }}>
                  Save 20%
                </span>
              </button>
            </div>
          </div>

          {/* 3-column card grid — paddingTop reserves space for the badge */}
          <div style={{ paddingTop: 20, marginBottom: 20 }}>
          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ gap: 20, alignItems: "stretch" }}
          >
            {/* ── Starter ── */}
            <div style={{
              display: "flex", flexDirection: "column",
              borderRadius: 14, padding: 28, position: "relative",
              border: "1px solid rgba(34,58,94,0.12)", background: "#fff",
            }}>
              {/* Label */}
              <p style={{ fontSize: 16, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#94a3b8", minHeight: 28, display: "flex", alignItems: "center", marginBottom: 14 }}>
                Starter
              </p>
              {/* Price */}
              <div style={{ display: "flex", alignItems: "flex-end", gap: 4, minHeight: 72 }}>
                <span className="font-playfair" style={{ fontSize: 52, fontWeight: 700, color: "#223A5E", lineHeight: 1 }}>
                  ${billing === "monthly" ? PLANS.starter.monthly : PLANS.starter.annual}
                </span>
                <span style={{ fontSize: 13, color: "#94a3b8", marginBottom: 6 }}>/mo</span>
                {billing === "annual" && (
                  <span style={{ fontSize: 12, color: "#cbd5e1", marginBottom: 6, textDecoration: "line-through" }}>
                    ${PLANS.starter.monthly}
                  </span>
                )}
              </div>
              {/* Subtitle — separated from price with its own row */}
              <div style={{ minHeight: 52, paddingTop: 10, marginBottom: 16 }}>
                <p style={{ fontSize: 14, color: "#94a3b8" }}>Up to 3 users · unlimited events</p>
              </div>
              {/* Description */}
              <div style={{ minHeight: 88, marginBottom: 20 }}>
                <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.65 }}>
                  For small teams who want shared visibility and accountability across every conference they attend.
                </p>
              </div>
              <Link
                href="/signup?plan=starter"
                style={{
                  display: "block", textAlign: "center",
                  fontSize: 14, fontWeight: 600,
                  padding: "11px 0", borderRadius: 9,
                  background: "#fff", color: "#223A5E",
                  border: "1.5px solid #223A5E",
                  textDecoration: "none", marginBottom: 24,
                }}
              >
                Start Free Trial
              </Link>
              <p style={{ fontSize: 11, fontWeight: 600, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.05em", minHeight: 28, display: "flex", alignItems: "center", marginBottom: 12 }}>
                What&apos;s included
              </p>
              <FeatureList features={STARTER_FEATURES} />
              <p style={{ fontSize: 12, color: "#94a3b8", marginTop: "auto", paddingTop: 16 }}>Additional seats: $49/user/mo</p>
            </div>

            {/* ── Professional (featured) ── */}
            <div style={{
              display: "flex", flexDirection: "column",
              borderRadius: 14, padding: 28,
              position: "relative", background: "#223A5E",
            }}>
              <div style={{ position: "absolute", top: -13, left: 0, right: 0, display: "flex", justifyContent: "center" }}>
                <span style={{
                  fontSize: 16, fontWeight: 700,
                  background: "#34D399", color: "#064e3b",
                  borderRadius: 999, padding: "4px 14px",
                }}>
                  Most Popular
                </span>
              </div>
              {/* Label */}
              <p style={{ fontSize: 16, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,1)", minHeight: 28, display: "flex", alignItems: "center", marginBottom: 14 }}>
                Professional
              </p>
              {/* Price */}
              <div style={{ display: "flex", alignItems: "flex-end", gap: 4, minHeight: 72 }}>
                <span className="font-playfair" style={{ fontSize: 52, fontWeight: 700, color: "#fff", lineHeight: 1 }}>
                  ${billing === "monthly" ? PLANS.professional.monthly : PLANS.professional.annual}
                </span>
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginBottom: 6 }}>/mo</span>
                {billing === "annual" && (
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,0.28)", marginBottom: 6, textDecoration: "line-through" }}>
                    ${PLANS.professional.monthly}
                  </span>
                )}
              </div>
              {/* Subtitle */}
              <div style={{ minHeight: 52, paddingTop: 10, marginBottom: 16 }}>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)" }}>Up to 10 users · unlimited events</p>
              </div>
              {/* Description */}
              <div style={{ minHeight: 88, marginBottom: 20 }}>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.65 }}>
                  For active conference teams who need intelligence, coordination, and accountability across every event.
                </p>
              </div>
              <Link
                href="/signup?plan=professional"
                style={{
                  display: "block", textAlign: "center",
                  fontSize: 14, fontWeight: 600,
                  padding: "11px 0", borderRadius: 9,
                  background: "#34D399", color: "#064e3b",
                  textDecoration: "none", marginBottom: 24,
                }}
              >
                Start Free Trial →
              </Link>
              <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.38)", textTransform: "uppercase", letterSpacing: "0.05em", minHeight: 28, display: "flex", alignItems: "center", marginBottom: 12 }}>
                Everything in Starter, plus
              </p>
              <FeatureList features={PRO_FEATURES} onDark />
              <div style={{ marginTop: "auto", paddingTop: 16 }}>
                <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: 8, padding: "8px 12px" }}>
                  <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>Additional seats: $49/user/mo</p>
                </div>
              </div>
            </div>

            {/* ── Enterprise ── */}
            <div style={{
              display: "flex", flexDirection: "column",
              borderRadius: 14, padding: 28, position: "relative",
              border: "1px solid rgba(34,58,94,0.12)", background: "#fff",
            }}>
              {/* Label */}
              <p style={{ fontSize: 14, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#94a3b8", minHeight: 28, display: "flex", alignItems: "center", marginBottom: 14 }}>
                Enterprise
              </p>
              {/* Price */}
              <div style={{ display: "flex", alignItems: "flex-end", minHeight: 72 }}>
                <span className="font-playfair" style={{ fontSize: 38, fontWeight: 700, color: "#223A5E", lineHeight: 1 }}>
                  Custom
                </span>
              </div>
              {/* Subtitle — 2 lines to match Enterprise's pricing note */}
              <div style={{ minHeight: 52, paddingTop: 10, marginBottom: 16 }}>
                <p style={{ fontSize: 12, color: "#94a3b8" }}>contact us for pricing</p>
                <p style={{ fontSize: 14, color: "#94a3b8", marginTop: 4 }}>25+ users · unlimited everything</p>
              </div>
              {/* Description */}
              <div style={{ minHeight: 88, marginBottom: 20 }}>
                <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.65 }}>
                  For large organizations with multiple conference programs, multiple teams, and enterprise compliance needs.
                </p>
              </div>
              <Link
                href="/contact-sales"
                style={{
                  display: "block", textAlign: "center",
                  fontSize: 14, fontWeight: 600,
                  padding: "11px 0", borderRadius: 9,
                  background: "#223A5E", color: "#fff",
                  textDecoration: "none", marginBottom: 24,
                }}
              >
                Talk to Sales
              </Link>
              <p style={{ fontSize: 11, fontWeight: 600, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.05em", minHeight: 28, display: "flex", alignItems: "center", marginBottom: 12 }}>
                Everything in Professional, plus
              </p>
              <FeatureList features={ENTERPRISE_FEATURES} />
            </div>
          </div>
          </div>

          {/* Solo banner */}
          <div
            className="grid grid-cols-1 md:grid-cols-[1fr_auto]"
            style={{
              background: "#fff",
              border: "1px solid rgba(34,58,94,0.12)",
              borderRadius: 14,
              padding: "24px 32px",
              gap: 32,
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            {/* Left */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", marginBottom: 8 }}>
                <span style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "#94a3b8" }}>Solo</span>
                <span className="font-playfair" style={{ fontSize: 22, fontWeight: 700, color: "#223A5E" }}>
                  ${billing === "monthly" ? PLANS.solo.monthly : PLANS.solo.annual}
                </span>
                <span style={{ fontSize: 13, color: "#94a3b8" }}>/month</span>
                {billing === "annual" && (
                  <span style={{ fontSize: 12, color: "#cbd5e1", textDecoration: "line-through" }}>
                    ${PLANS.solo.monthly}
                  </span>
                )}
                <span style={{
                  fontSize: 12, fontWeight: 500,
                  background: "rgba(34,58,94,0.07)", color: "#475569",
                  borderRadius: 999, padding: "3px 10px",
                  border: "1px solid rgba(34,58,94,0.1)",
                }}>
                  1 user · unlimited events
                </span>
              </div>
              <p style={{ fontSize: 13, color: "#64748b", maxWidth: 540, lineHeight: 1.65, marginBottom: 14 }}>
                For the individual sales rep who attends conferences on their own. Every feature from the full system — card scan, meeting logs, relationship scores, pre &amp; post-conference review — built for one person.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 20px" }}>
                {SOLO_PILLS.map((pill) => (
                  <div key={pill} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <CheckIcon />
                    <span style={{ fontSize: 12, color: "#475569" }}>{pill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", flexShrink: 0 }}>
              <Link
                href="/signup?plan=solo"
                style={{
                  fontSize: 14, fontWeight: 600,
                  padding: "11px 22px", borderRadius: 9,
                  background: "#fff", color: "#223A5E",
                  border: "1.5px solid #223A5E",
                  textDecoration: "none",
                  whiteSpace: "nowrap", marginBottom: 8,
                }}
              >
                Start Free Trial
              </Link>
              <p style={{ fontSize: 12, color: "#94a3b8" }}>14-day trial · no credit card needed</p>
            </div>
          </div>

          {/* Footer note */}
          <div style={{
            background: "#f8fafc",
            border: "1px solid rgba(34,58,94,0.08)",
            borderRadius: 10,
            padding: "14px 20px",
            textAlign: "center",
          }}>
            <p style={{ fontSize: 13, color: "#64748b" }}>
              All plans include a <strong>14-day free trial</strong> tied to your next upcoming conference. Annual billing saves 20% across all tiers. No credit card required to start.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ BLOCK 2: FREE TRIAL CTA ═══ */}
      <section style={{ background: "#223A5E" }} className="py-24">
        <div style={{ maxWidth: 820, margin: "0 auto", padding: "0 32px", textAlign: "center" }}>

          {/* Eyebrow */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ width: 28, height: 1, background: "rgba(52,211,153,0.5)" }} />
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(52,211,153,0.7)" }}>
              Start free today
            </span>
            <div style={{ width: 28, height: 1, background: "rgba(52,211,153,0.5)" }} />
          </div>

          {/* H2 */}
          <h2
            className="font-playfair"
            style={{ fontSize: 36, fontWeight: 700, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.28, marginBottom: 16 }}
          >
            Your next conference is in{" "}
            {/* TODO: wire to dynamic conference countdown */}
            <span style={{ color: "#34D399" }}>X days.</span>
            <br />
            Don&apos;t walk in blind again.
          </h2>

          {/* Body */}
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.58)", maxWidth: 560, margin: "0 auto 32px", lineHeight: 1.7 }}>
            Start a free 14-day trial built around your next upcoming event. Upload your attendee list, assign your reps, build your target list, and walk in with a plan. Your trial stays active 7 days after your conference ends!
          </p>

          {/* Upload highlight box */}
          <div style={{
            border: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(255,255,255,0.04)",
            borderRadius: 12,
            padding: "20px 24px",
            textAlign: "left",
            marginBottom: 32,
          }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
              <div style={{
                width: 42, height: 42, borderRadius: 10,
                background: "rgba(52,211,153,0.12)",
                border: "1px solid rgba(52,211,153,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M10 13V7m0 0L7.5 9.5M10 7l2.5 2.5" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4 14v1a2 2 0 002 2h8a2 2 0 002-2v-1" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 17, fontWeight: 600, color: "#fff", marginBottom: 8 }}>
                  Upload up to 3 past conference lists to hit the ground running
                </p>
                <p style={{ fontSize: 14.5, color: "rgba(255,255,255,0.55)", lineHeight: 1.65, marginBottom: 14 }}>
                  See multi-conference relationship tracking work immediately — not after months of use. Upload CSV attendee lists from previous events and Parlay builds your relationship history on day one: health scores, prior touchpoint mapping, ICP scoring, and overlap analysis before you even attend your next event.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {["CSV upload", "Instant relationship history", "ICP matching", "Prior overlap detection"].map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: 11, fontWeight: 500,
                        background: "rgba(52,211,153,0.1)",
                        color: "#34D399",
                        border: "1px solid rgba(52,211,153,0.2)",
                        borderRadius: 999, padding: "3px 10px",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA buttons */}
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 20 }}>
            <Link
              href="/signup"
              style={{
                fontSize: 15, fontWeight: 600,
                padding: "13px 28px", borderRadius: 10,
                background: "#34D399", color: "#064e3b",
                textDecoration: "none",
              }}
            >
              Start my free trial →
            </Link>
            <Link
              href="/demo"
              style={{
                fontSize: 15, fontWeight: 600,
                padding: "13px 28px", borderRadius: 10,
                background: "transparent", color: "#fff",
                border: "1.5px solid rgba(255,255,255,0.3)",
                textDecoration: "none",
              }}
            >
              Book a demo
            </Link>
          </div>

          {/* Footnote */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, flexWrap: "wrap" }}>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.33)" }}>🔒</span>
            <span style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.33)" }}>Full access from day one</span>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.18)" }}>·</span>
            <span style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.33)" }}>Cancel anytime</span>
          </div>
        </div>
      </section>
    </>
  );
}
