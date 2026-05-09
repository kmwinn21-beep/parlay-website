"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import BundleBuilder from "./BundleBuilder";

// ── Price constants — update here to change everywhere ───────────────────────
const PLAN_PRICES = {
  essentials:   { monthly: 299,  annual: 239  },
  professional: { monthly: 699,  annual: 559  },
  enterprise:   { monthly: 1399, annual: 1119 },
};

const BUNDLE_PRICES: Record<string, { annual: number; monthly: number }> = {
  intelligence: { annual: 399, monthly: 499 },
  floor:        { annual: 239, monthly: 299 },
  collab:       { annual: 159, monthly: 199 },
  revenue:      { annual: 319, monthly: 399 },
  program:      { annual: 239, monthly: 299 },
  org:          { annual: 159, monthly: 199 },
  crm:          { annual: 79,  monthly: 99  },
};

const ENTERPRISE_ANNUAL = PLAN_PRICES.enterprise.annual; // 1119
const CALC_AMBER_THRESHOLD = 900;

// ── Data ─────────────────────────────────────────────────────────────────────
const PLANS_DATA = [
  {
    id: "essentials",
    name: "Essentials",
    desc: "For teams getting started with conference management",
    bullets: [
      "Unlimited conferences, attendees, and companies",
      "Meeting, follow-up, and touchpoint tracking",
      "Pre and post-conference review",
      "Standard notes and notifications",
      "Conference agenda and My Agenda",
    ],
    cta: "Start free trial",
    ctaHref: "/signup?plan=essentials",
    featured: false,
    custom: false,
  },
  {
    id: "professional",
    name: "Professional",
    desc: "For active conference programs that need intelligence",
    bullets: [
      "Everything in Essentials",
      "AI card and badge scanning — single and batch",
      "Full scoring engine: ICP rules, target priority scoring, prospect recommendations",
      "Effectiveness analytics across all five dimensions",
      "Budget tracking, CRM export, and email integration",
      "Floor Notes, team messaging, and rich collaboration tools",
    ],
    cta: "Start free trial",
    ctaHref: "/signup?plan=professional",
    featured: true,
    custom: false,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    desc: "For organizations running a conference program, not just individual conferences",
    bullets: [
      "Everything in Professional",
      "Program Intelligence — cross-conference reporting and annual trends",
      "Configurable scoring benchmarks",
      "Brand customization and white-label",
      "Form builder and lead capture",
      "Role scope configuration matrix",
    ],
    cta: "Start free trial",
    ctaHref: "/signup?plan=enterprise",
    featured: false,
    custom: false,
    secondaryCta: "Talk to us →",
    secondaryHref: "/contact-sales",
  },
  {
    id: "custom",
    name: "Custom",
    desc: "For complex organizations with specific requirements",
    bullets: [
      "Build from six feature bundles — pay for what you need",
      "Native CRM integration and live sync",
      "API access and custom data migration",
      "Multi-team and multi-org architecture",
      "Custom SLA and 99.9% uptime guarantee",
      "Dedicated implementation and onboarding",
    ],
    cta: "Talk to us",
    ctaHref: "/contact-sales",
    featured: false,
    custom: true,
  },
] as const;

const BUNDLES_DATA = [
  {
    id: "intelligence",
    name: "Intelligence Core",
    bullets: [
      "ICP rules engine and company qualification",
      "Target priority scoring (0–100 per company)",
      "AI-powered prospect recommendations",
      "Internal relationship mapping (20% of scoring weight)",
    ],
  },
  {
    id: "floor",
    name: "Floor Capture",
    bullets: [
      "AI card and badge scanning — single and batch",
      "Floor Notes — capture now, assign later",
      "Auto follow-up triggers on touchpoint creation",
    ],
  },
  {
    id: "collab",
    name: "Team Collaboration",
    bullets: [
      "Direct and group messaging",
      "Rich notes with @mentions, comments, and emoji reactions",
    ],
  },
  {
    id: "revenue",
    name: "Revenue Intelligence",
    bullets: [
      "Conference Effectiveness analytics (all 5 tabs)",
      "Budget tracking and ROI modeling",
      "Configurable effectiveness benchmarks",
    ],
  },
  {
    id: "program",
    name: "Program Intelligence",
    bullets: [
      "Cross-conference reporting and annual trends",
      "Rep performance across all conferences",
      "Pipeline attribution by conference",
    ],
    note: "Requires Revenue Intelligence",
  },
  {
    id: "org",
    name: "Org Infrastructure",
    bullets: [
      "Brand customization and white-label",
      "Form builder and lead capture",
      "Role scope configuration matrix",
    ],
  },
  {
    id: "crm",
    name: "CRM Export",
    bullets: [
      "HubSpot and Salesforce import-ready CSV export",
      "Campaign attribution mapping",
      "Company type filtering on export",
    ],
    note: "Available as standalone add-on on any plan",
  },
];

type BoolVal = boolean;
interface FeatureRow {
  feature: string;
  essentials: BoolVal;
  professional: BoolVal;
  enterprise: BoolVal;
  custom: BoolVal;
}
interface FeatureGroup { group: string; rows: FeatureRow[]; }

const FEATURE_GROUPS: FeatureGroup[] = [
  {
    group: "Core Conference Management",
    rows: [
      { feature: "CSV / Excel import", essentials: true, professional: true, enterprise: true, custom: true },
      { feature: "Pre / Post-conference review", essentials: true, professional: true, enterprise: true, custom: true },
      { feature: "Meeting + follow-up tracking", essentials: true, professional: true, enterprise: true, custom: true },
      { feature: "Social event management", essentials: true, professional: true, enterprise: true, custom: true },
      { feature: "Touchpoint logging", essentials: true, professional: true, enterprise: true, custom: true },
      { feature: "Standard notes", essentials: true, professional: true, enterprise: true, custom: true },
      { feature: "Conference agenda + My Agenda", essentials: true, professional: true, enterprise: true, custom: true },
      { feature: "Notifications (all types)", essentials: true, professional: true, enterprise: true, custom: true },
      { feature: "Admin configuration panel", essentials: true, professional: true, enterprise: true, custom: true },
    ],
  },
  {
    group: "Intelligence Core",
    rows: [
      { feature: "ICP rules engine", essentials: false, professional: true, enterprise: true, custom: true },
      { feature: "Target priority scoring", essentials: false, professional: true, enterprise: true, custom: true },
      { feature: "Prospect recommendations", essentials: false, professional: true, enterprise: true, custom: true },
      { feature: "Internal relationship mapping", essentials: false, professional: true, enterprise: true, custom: true },
    ],
  },
  {
    group: "Floor Capture",
    rows: [
      { feature: "AI card + badge scanning (single and batch)", essentials: false, professional: true, enterprise: true, custom: true },
      { feature: "Floor Notes (capture now, assign later)", essentials: false, professional: true, enterprise: true, custom: true },
      { feature: "Auto follow-up triggers", essentials: false, professional: true, enterprise: true, custom: true },
    ],
  },
  {
    group: "Team Collaboration",
    rows: [
      { feature: "Direct + group messaging", essentials: false, professional: true, enterprise: true, custom: true },
      { feature: "Rich notes (@mentions, comments, reactions)", essentials: false, professional: true, enterprise: true, custom: true },
    ],
  },
  {
    group: "Revenue",
    rows: [
      { feature: "Email integration (Google + Microsoft OAuth)", essentials: false, professional: true, enterprise: true, custom: true },
      { feature: "CRM export (HubSpot / Salesforce CSV)", essentials: false, professional: true, enterprise: true, custom: true },
    ],
  },
  {
    group: "Revenue Intelligence",
    rows: [
      { feature: "Effectiveness analytics (5 tabs)", essentials: false, professional: true, enterprise: true, custom: true },
      { feature: "Budget tracking + ROI modeling", essentials: false, professional: true, enterprise: true, custom: true },
      { feature: "Effectiveness benchmarks", essentials: false, professional: true, enterprise: true, custom: true },
    ],
  },
  {
    group: "Program Intelligence",
    rows: [
      { feature: "Cross-conference global reporting", essentials: false, professional: false, enterprise: true, custom: true },
      { feature: "Configurable scoring benchmarks", essentials: false, professional: false, enterprise: true, custom: true },
    ],
  },
  {
    group: "Org Infrastructure",
    rows: [
      { feature: "Brand customization + white-label", essentials: false, professional: false, enterprise: true, custom: true },
      { feature: "Form builder + lead capture", essentials: false, professional: false, enterprise: true, custom: true },
      { feature: "Role scope configuration matrix", essentials: false, professional: false, enterprise: true, custom: true },
    ],
  },
  {
    group: "Custom Only",
    rows: [
      { feature: "Native CRM integration (live sync)", essentials: false, professional: false, enterprise: false, custom: true },
      { feature: "Multi-team / multi-org architecture", essentials: false, professional: false, enterprise: false, custom: true },
      { feature: "API access", essentials: false, professional: false, enterprise: false, custom: true },
      { feature: "Custom SLA + 99.9% uptime guarantee", essentials: false, professional: false, enterprise: false, custom: true },
      { feature: "Custom data migration", essentials: false, professional: false, enterprise: false, custom: true },
    ],
  },
];

const FAQ_ITEMS = [
  {
    q: "Can I upgrade or downgrade between plans?",
    a: "Yes. Upgrades take effect immediately. Downgrades take effect at the next billing cycle. Your data is never affected by a plan change.",
  },
  {
    q: "Do I need to talk to sales to get started?",
    a: "Essentials and Professional are fully self-serve — sign up and start immediately. Enterprise includes a self-serve option with an onboarding call scheduled within 48 hours of signup. Custom requires a scoped conversation before pricing is confirmed.",
  },
  {
    q: "What counts as a conference?",
    a: "Any event you create in Parlay — industry conferences, trade shows, hosted events, roadshows, summits. There are no limits on how many conferences you create or how many attendees you upload per conference.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes — 14 days on any self-serve plan. Your trial is anchored to your next upcoming conference. Upload your attendee list and the platform starts generating intelligence on day one. No credit card required.",
  },
  {
    q: "What is the difference between CRM export and native CRM integration?",
    a: "CRM export (included in Professional) generates formatted CSV files you import manually into HubSpot or Salesforce — contacts, companies, meetings, tasks, and notes, formatted for each platform's import wizard. Native CRM integration (Custom only) is a live two-way sync. If you're unsure which you need, start with the export — most teams find it covers their needs until the program scales.",
  },
  {
    q: "Can we start with Custom bundles and move to Enterprise later?",
    a: "Yes. We apply any bundle payments toward your first Enterprise period on a prorated basis. The bundle calculator on this page will show you in real time when your selection reaches the Enterprise threshold — we're transparent about when the all-inclusive plan makes more financial sense.",
  },
  {
    q: "Why unlimited users on every plan?",
    a: "Parlay's value scales with your conference program — how many events you attend, how much intelligence you generate, and how deeply your team engages with that intelligence. It doesn't scale with headcount. We think per-seat pricing penalizes exactly the teams who get the most value from the platform, so we don't do it.",
  },
];

// ── Shared sub-components ────────────────────────────────────────────────────
function CheckIcon({ onDark = false }: { onDark?: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }} aria-hidden="true">
      <circle cx="8" cy="8" r="7" fill={onDark ? "rgba(52,211,153,0.2)" : "rgba(52,211,153,0.15)"} />
      <path d="M5 8l2 2 4-4" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BillingToggle({ billing, setBilling }: { billing: "monthly" | "annual"; setBilling: (v: "monthly" | "annual") => void }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginBottom: 40 }}>
      <div style={{ display: "inline-flex", background: "rgba(255,255,255,0.1)", borderRadius: 999, padding: 4, gap: 2 }}>
        <button
          onClick={() => setBilling("monthly")}
          style={{
            borderRadius: 999, padding: "8px 20px", fontSize: 14, fontWeight: 500,
            background: billing === "monthly" ? "rgba(255,255,255,0.15)" : "transparent",
            color: billing === "monthly" ? "white" : "rgba(255,255,255,0.45)",
            border: "none", cursor: "pointer",
            boxShadow: billing === "monthly" ? "0 1px 4px rgba(0,0,0,0.2)" : "none",
            transition: "all 150ms",
          }}
        >
          Monthly
        </button>
        <button
          onClick={() => setBilling("annual")}
          style={{
            borderRadius: 999, padding: "8px 20px", fontSize: 14, fontWeight: 500,
            background: billing === "annual" ? "rgba(255,255,255,0.15)" : "transparent",
            color: billing === "annual" ? "white" : "rgba(255,255,255,0.45)",
            border: "none", cursor: "pointer",
            display: "flex", alignItems: "center", gap: 6,
            boxShadow: billing === "annual" ? "0 1px 4px rgba(0,0,0,0.2)" : "none",
            transition: "all 150ms",
          }}
        >
          Annual
          <span style={{
            fontSize: 11, fontWeight: 600,
            background: "rgba(52,211,153,0.2)", color: "#34D399",
            borderRadius: 999, padding: "1px 7px",
          }}>
            Save 20%
          </span>
        </button>
      </div>
    </div>
  );
}

// ── Section 1: Header ────────────────────────────────────────────────────────
function PageHeader({ billing, setBilling }: { billing: "monthly" | "annual"; setBilling: (v: "monthly" | "annual") => void }) {
  return (
    <section className="pt-32 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 14 }}>
            <div style={{ width: 32, height: 1, background: "#34D399" }} />
            <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#34D399" }}>
              Pricing
            </span>
            <div style={{ width: 32, height: 1, background: "#34D399" }} />
          </div>
          <h1 className="font-playfair" style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 700, color: "white", letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 16, maxWidth: 680, margin: "0 auto 16px" }}>
            Find the right plan for your conference program
          </h1>
          <p className="font-inter" style={{ fontSize: 17, color: "rgba(255,255,255,0.7)", maxWidth: 600, margin: "0 auto 36px", lineHeight: 1.7 }}>
            Every plan includes unlimited users, unlimited conferences, and unlimited attendees. The difference is the depth of intelligence your program needs.
          </p>
        </div>
        <BillingToggle billing={billing} setBilling={setBilling} />
      </div>
    </section>
  );
}

// ── Section 2: Plan cards ────────────────────────────────────────────────────
function PlanCards({ billing }: { billing: "monthly" | "annual" }) {
  return (
    <section className="pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div style={{ paddingTop: 20 }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 20, alignItems: "stretch" }}>
            {PLANS_DATA.map((plan) => {
              const price = plan.id === "custom" ? null : PLAN_PRICES[plan.id as keyof typeof PLAN_PRICES];
              const displayPrice = price ? (billing === "annual" ? price.annual : price.monthly) : null;
              const onDark = true; // all cards on dark page bg

              return (
                <div
                  key={plan.id}
                  style={{
                    display: "flex", flexDirection: "column",
                    borderRadius: 14, padding: 28, position: "relative",
                    background: plan.featured ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.06)",
                    border: plan.featured
                      ? "1px solid rgba(52,211,153,0.45)"
                      : "1px solid rgba(255,255,255,0.1)",
                    boxShadow: plan.featured
                      ? "0 0 0 1px rgba(52,211,153,0.15), 0 8px 40px rgba(0,0,0,0.25), 0 0 60px rgba(255,255,255,0.04)"
                      : "none",
                  }}
                >
                  {plan.featured && (
                    <div style={{ position: "absolute", top: -13, left: 0, right: 0, display: "flex", justifyContent: "center" }}>
                      <span style={{ fontSize: 12, fontWeight: 700, background: "#34D399", color: "#064e3b", borderRadius: 999, padding: "3px 12px" }}>
                        Most Popular
                      </span>
                    </div>
                  )}

                  {/* Plan name */}
                  <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: onDark ? "rgba(255,255,255,0.5)" : "#94a3b8", marginBottom: 8 }}>
                    {plan.name}
                  </p>

                  {/* Description */}
                  <p style={{ fontSize: 13, color: onDark ? "rgba(255,255,255,0.55)" : "#64748b", lineHeight: 1.5, marginBottom: 20, minHeight: 40 }}>
                    {plan.desc}
                  </p>

                  {/* Price */}
                  {displayPrice !== null ? (
                    <div style={{ marginBottom: 4 }}>
                      <div style={{ display: "flex", alignItems: "flex-end", gap: 3 }}>
                        <span className="font-playfair" style={{ fontSize: 44, fontWeight: 700, color: onDark ? "#fff" : "#223A5E", lineHeight: 1, letterSpacing: "-0.03em" }}>
                          ${displayPrice}
                        </span>
                        <span style={{ fontSize: 13, color: onDark ? "rgba(255,255,255,0.45)" : "#94a3b8", marginBottom: 6 }}>/mo</span>
                      </div>
                      <p style={{ fontSize: 12, color: onDark ? "rgba(255,255,255,0.35)" : "#94a3b8", marginTop: 4, marginBottom: 20 }}>
                        {billing === "annual" ? "billed annually" : "billed monthly"}
                      </p>
                    </div>
                  ) : (
                    <div style={{ marginBottom: 24 }}>
                      <span className="font-playfair" style={{ fontSize: 32, fontWeight: 700, color: onDark ? "#fff" : "#223A5E", lineHeight: 1 }}>
                        Scoped pricing
                      </span>
                      <p style={{ fontSize: 12, color: onDark ? "rgba(255,255,255,0.35)" : "#94a3b8", marginTop: 8 }}>
                        Contact us to build your bundle
                      </p>
                    </div>
                  )}

                  {/* Divider */}
                  <div style={{ height: 1, background: onDark ? "rgba(255,255,255,0.1)" : "rgba(34,58,94,0.08)", marginBottom: 20 }} />

                  {/* Bullets */}
                  <ul style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24, flex: 1 }}>
                    {plan.bullets.map((b) => (
                      <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                        <CheckIcon onDark={onDark} />
                        <span style={{ fontSize: 13, color: onDark ? "rgba(255,255,255,0.72)" : "#475569", lineHeight: 1.5 }}>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div style={{ marginTop: "auto" }}>
                    <Link
                      href={plan.ctaHref}
                      style={{
                        display: "block", textAlign: "center", fontSize: 14, fontWeight: 600,
                        padding: "11px 0", borderRadius: 9, textDecoration: "none",
                        ...(plan.custom
                          ? { background: "transparent", color: "#fff", border: "1.5px solid rgba(255,255,255,0.3)" }
                          : plan.featured
                            ? { background: "#34D399", color: "#064e3b", border: "none" }
                            : { background: "#34D399", color: "#064e3b", border: "none" }
                        ),
                      }}
                    >
                      {plan.cta}
                    </Link>
                    {"secondaryCta" in plan && (
                      <Link
                        href={(plan as { secondaryHref: string }).secondaryHref}
                        style={{ display: "block", textAlign: "center", fontSize: 13, color: onDark ? "rgba(255,255,255,0.45)" : "#64748b", textDecoration: "none", marginTop: 12, fontWeight: 500 }}
                      >
                        {(plan as { secondaryCta: string }).secondaryCta}
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer note */}
        <div style={{ marginTop: 24, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: "14px 20px", textAlign: "center" }}>
          <p className="font-inter" style={{ fontSize: 13, color: "rgba(255,255,255,0.55)" }}>
            All self-serve plans include a <strong style={{ color: "rgba(255,255,255,0.8)" }}>14-day free trial</strong>. No credit card required to start.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── Section 3: Bundle pricing ─────────────────────────────────────────────────
function BundleSection({ billing }: { billing: "monthly" | "annual" }) {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <BundleBuilder billing={billing} />

      </div>
    </section>
  );
}

// ── Section 4: Feature comparison matrix ─────────────────────────────────────
function ComparisonTable() {
  const [open, setOpen] = useState(false);
  const COLS: Array<keyof FeatureRow> = ["essentials", "professional", "enterprise", "custom"];
  const COL_LABELS = ["Essentials", "Professional", "Enterprise", "Custom"];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <h2 className="font-playfair" style={{ fontSize: "clamp(26px, 3.5vw, 36px)", fontWeight: 700, color: "white", marginBottom: 10 }}>
            Full feature comparison
          </h2>
          <p className="font-inter" style={{ fontSize: 14, color: "rgba(255,255,255,0.5)" }}>
            All plans include unlimited users, conferences, and attendees.
          </p>
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
          <button
            onClick={() => setOpen((o: boolean) => !o)}
            className="font-inter"
            style={{
              background: "none", border: "none", cursor: "pointer",
              fontSize: 15, fontWeight: 500, color: "rgba(255,255,255,0.75)",
              display: "flex", alignItems: "center", gap: 6,
              padding: "8px 0",
              textDecoration: "underline", textUnderlineOffset: 3,
            }}
          >
            {open ? "Hide comparison ↑" : "See full feature comparison ↓"}
          </button>
        </div>

        {open && (
          <div style={{ overflowX: "auto", borderRadius: 12, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 640, fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: "2px solid rgba(255,255,255,0.1)" }}>
                  <th style={{ textAlign: "left", padding: "12px 16px", fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.45)", textTransform: "uppercase", letterSpacing: "0.06em", position: "sticky", left: 0, background: "#223A5E", minWidth: 220 }}>
                    Feature
                  </th>
                  {COL_LABELS.map((label) => (
                    <th key={label} style={{ textAlign: "center", padding: "12px 16px", fontSize: 13, fontWeight: 700, color: "white", minWidth: 120 }}>
                      {label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {FEATURE_GROUPS.map((group) => (
                  <Fragment key={group.group}>
                    <tr>
                      <td
                        colSpan={5}
                        style={{
                          padding: "14px 16px 8px",
                          fontSize: 11, fontWeight: 700, textTransform: "uppercase",
                          letterSpacing: "0.08em", color: "#34D399",
                          background: "rgba(255,255,255,0.05)",
                          borderTop: "1px solid rgba(255,255,255,0.07)",
                          position: "sticky", left: 0,
                        }}
                      >
                        {group.group}
                      </td>
                    </tr>
                    {group.rows.map((row, ri) => {
                      const rowBg = ri % 2 === 0 ? "transparent" : "rgba(255,255,255,0.03)";
                      return (
                        <tr key={row.feature} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", background: rowBg }}>
                          <td style={{ padding: "10px 16px", color: "rgba(255,255,255,0.7)", fontWeight: 400, position: "sticky", left: 0, background: "#223A5E" }}>
                            {row.feature}
                          </td>
                          {COLS.map((col) => (
                            <td key={col} style={{ textAlign: "center", padding: "10px 16px" }}>
                              {row[col] ? (
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ display: "inline-block" }} aria-label="Included">
                                  <circle cx="9" cy="9" r="8" fill="rgba(52,211,153,0.2)" />
                                  <path d="M5.5 9l2.5 2.5 4.5-5" stroke="#34D399" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              ) : (
                                <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 16 }}>—</span>
                              )}
                            </td>
                          ))}
                        </tr>
                      );
                    })}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}

// ── Section 5: FAQ ───────────────────────────────────────────────────────────
function FAQ() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  function toggleItem(i: number) {
    setOpenItems((prev: Set<number>) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i); else next.add(i);
      return next;
    });
  }

  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 14 }}>
            <div style={{ width: 32, height: 1, background: "#34D399" }} />
            <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#34D399" }}>FAQ</span>
            <div style={{ width: 32, height: 1, background: "#34D399" }} />
          </div>
          <h2 className="font-playfair" style={{ fontSize: "clamp(26px, 3.5vw, 36px)", fontWeight: 700, color: "white" }}>
            Common questions
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openItems.has(i);
            return (
              <div key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                <button
                  onClick={() => toggleItem(i)}
                  className="font-inter"
                  style={{
                    width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "20px 0", background: "none", border: "none", cursor: "pointer",
                    textAlign: "left", gap: 16,
                  }}
                >
                  <span style={{ fontSize: 16, fontWeight: 600, color: "white", lineHeight: 1.4 }}>{item.q}</span>
                  <span style={{ fontSize: 18, color: "#34D399", flexShrink: 0, fontWeight: 300, transform: isOpen ? "rotate(45deg)" : "none", transition: "transform 200ms" }}>+</span>
                </button>
                {isOpen && (
                  <p className="font-inter" style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", lineHeight: 1.75, paddingBottom: 20 }}>
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────
export default function PricingPage() {
  const [billing, setBilling] = useState<"monthly" | "annual">("annual");

  return (
    <>
      <PageHeader billing={billing} setBilling={setBilling} />
      <PlanCards billing={billing} />
      <BundleSection billing={billing} />
      <ComparisonTable />
      <FAQ />
    </>
  );
}
