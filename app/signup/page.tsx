"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

type Plan = "solo" | "starter" | "professional" | "enterprise";

const VALID_PLANS: Plan[] = ["solo", "starter", "professional", "enterprise"];

const BANNER_H = 36;
const NAV_H = 56;

interface PlanMeta {
  label: string;
  price: string;
  seats: string;
  popular?: boolean;
}

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

function CheckIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }} aria-hidden="true">
      <circle cx="8" cy="8" r="7" fill="rgba(52,211,153,0.2)" />
      <path d="M5 8l2 2 4-4" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SignupInner() {
  const searchParams = useSearchParams();
  const rawPlan = searchParams.get("plan") as Plan | null;
  const initialPlan: Plan = rawPlan && VALID_PLANS.includes(rawPlan) ? rawPlan : "professional";
  const [selectedPlan, setSelectedPlan] = useState<Plan>(initialPlan);

  return (
    <div style={{ height: "100vh", overflow: "hidden", background: "#f8fafc" }}>
      {/* Fixed green trial banner */}
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 60,
        height: BANNER_H, background: "#34D399",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: "#064e3b" }}>
          14-day free trial · No credit card required · Full access from day one
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
        <span style={{ marginLeft: "auto", fontSize: 13, color: "rgba(255,255,255,0.5)" }}>
          Already have an account?{" "}
          <a href="https://app.useparlay.app" style={{ color: "#34D399", textDecoration: "none", fontWeight: 500 }}>
            Sign in
          </a>
        </span>
      </nav>

      {/* Fixed main area — two-column split */}
      <div style={{
        position: "fixed",
        top: BANNER_H + NAV_H,
        left: 0, right: 0, bottom: 0,
        display: "flex",
        overflow: "hidden",
      }}>
        {/* Left panel — ctx-panel */}
        <div
          className="ctx-panel"
          style={{
            width: "40%",
            background: "#1e3354",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            paddingTop: 40,
            paddingLeft: 48,
            paddingRight: 48,
            paddingBottom: 40,
          }}
        >
          {/* Eyebrow — vertically aligned with step indicator in right panel */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 32 }}>
            <div style={{ width: 24, height: 2, background: "#34D399" }} />
            <span style={{
              fontSize: 12, fontWeight: 600,
              letterSpacing: "0.1em", textTransform: "uppercase",
              color: "#34D399",
            }}>
              14-day free trial
            </span>
          </div>

          <h2
            className="font-playfair"
            style={{ fontSize: 28, fontWeight: 700, color: "#fff", lineHeight: 1.3, marginBottom: 12 }}
          >
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

          <div style={{
            background: "rgba(52,211,153,0.08)",
            border: "1px solid rgba(52,211,153,0.2)",
            borderRadius: 10,
            padding: "16px 18px",
          }}>
            <p style={{ fontSize: 13, fontWeight: 600, color: "#34D399", marginBottom: 6 }}>
              Upload up to 3 past conference lists
            </p>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>
              Instantly build your relationship history and ICP scores before your first event.
            </p>
          </div>

          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", marginTop: "auto", paddingTop: 24 }}>
            No credit card required · Cancel anytime · Full access from day one
          </p>
        </div>

        {/* Right panel — form-panel */}
        <div
          className="form-panel"
          style={{
            flex: 1,
            overflow: "hidden",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            paddingTop: 40,
            paddingLeft: 56,
            paddingRight: 56,
            paddingBottom: 48,
            background: "#fff",
          }}
        >
          {/* Step indicator — aligned with eyebrow in left panel via matching paddingTop: 40 */}
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 36, flexWrap: "wrap" }}>
            {[
              { label: "Your account", active: true },
              { label: "Your conference", active: false },
              { label: "Import history", active: false },
            ].map((s, i) => (
              <span key={s.label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                {i > 0 && (
                  <span style={{
                    width: 16, height: 1,
                    background: "rgba(34,58,94,0.2)",
                    display: "inline-block",
                  }} />
                )}
                <span style={{
                  fontSize: 12,
                  fontWeight: s.active ? 600 : 400,
                  color: s.active ? "#223A5E" : "rgba(34,58,94,0.4)",
                }}>
                  {s.label}
                </span>
              </span>
            ))}
          </div>

          <h1
            className="font-playfair"
            style={{ fontSize: 24, fontWeight: 700, color: "#223A5E", marginBottom: 6 }}
          >
            Create your account
          </h1>
          <p style={{ fontSize: 14, color: "#64748b", marginBottom: 28 }}>
            Choose a plan, then set up your account. Change plans anytime.
          </p>

          {/* Plan selector — 2×2 grid */}
          <p style={{
            fontSize: 12, fontWeight: 600,
            textTransform: "uppercase", letterSpacing: "0.06em",
            color: "#94a3b8", marginBottom: 10,
          }}>
            Select a plan
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 28 }}>
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
                    borderRadius: 10,
                    padding: "14px 16px",
                    cursor: "pointer",
                    position: "relative",
                    transition: "border-color 120ms, background 120ms",
                    userSelect: "none",
                  }}
                >
                  {meta.popular && (
                    <span style={{
                      position: "absolute", top: -10, right: 10,
                      fontSize: 10, fontWeight: 700,
                      background: "#34D399", color: "#064e3b",
                      borderRadius: 999, padding: "2px 8px",
                    }}>
                      Popular
                    </span>
                  )}
                  <p style={{
                    fontSize: 13, fontWeight: 600,
                    color: isSel ? "#223A5E" : "#475569",
                    marginBottom: 2,
                  }}>
                    {meta.label}
                  </p>
                  <p style={{
                    fontSize: 15, fontWeight: 700,
                    color: isSel ? "#223A5E" : "#334155",
                    marginBottom: 2,
                  }}>
                    {meta.price}
                  </p>
                  <p style={{ fontSize: 11, color: "#94a3b8" }}>{meta.seats}</p>
                </div>
              );
            })}
          </div>

          {/* Account form */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 480 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div>
                <label style={{
                  display: "block", fontSize: 13, fontWeight: 500,
                  color: "#374151", marginBottom: 6,
                }}>
                  First name
                </label>
                <input
                  type="text"
                  placeholder="Jane"
                  style={{
                    width: "100%", boxSizing: "border-box",
                    border: "1.5px solid #e2e8f0", borderRadius: 8,
                    padding: "9px 12px", fontSize: 14, color: "#111827",
                    outline: "none",
                  }}
                />
              </div>
              <div>
                <label style={{
                  display: "block", fontSize: 13, fontWeight: 500,
                  color: "#374151", marginBottom: 6,
                }}>
                  Last name
                </label>
                <input
                  type="text"
                  placeholder="Smith"
                  style={{
                    width: "100%", boxSizing: "border-box",
                    border: "1.5px solid #e2e8f0", borderRadius: 8,
                    padding: "9px 12px", fontSize: 14, color: "#111827",
                    outline: "none",
                  }}
                />
              </div>
            </div>

            <div>
              <label style={{
                display: "block", fontSize: 13, fontWeight: 500,
                color: "#374151", marginBottom: 6,
              }}>
                Work email
              </label>
              <input
                type="email"
                placeholder="jane@company.com"
                style={{
                  width: "100%", boxSizing: "border-box",
                  border: "1.5px solid #e2e8f0", borderRadius: 8,
                  padding: "9px 12px", fontSize: 14, color: "#111827",
                  outline: "none",
                }}
              />
            </div>

            <div>
              <label style={{
                display: "block", fontSize: 13, fontWeight: 500,
                color: "#374151", marginBottom: 6,
              }}>
                Company name
              </label>
              <input
                type="text"
                placeholder="Acme Corp"
                style={{
                  width: "100%", boxSizing: "border-box",
                  border: "1.5px solid #e2e8f0", borderRadius: 8,
                  padding: "9px 12px", fontSize: 14, color: "#111827",
                  outline: "none",
                }}
              />
            </div>

            <div>
              <label style={{
                display: "block", fontSize: 13, fontWeight: 500,
                color: "#374151", marginBottom: 6,
              }}>
                Password
              </label>
              <input
                type="password"
                placeholder="Min. 8 characters"
                style={{
                  width: "100%", boxSizing: "border-box",
                  border: "1.5px solid #e2e8f0", borderRadius: 8,
                  padding: "9px 12px", fontSize: 14, color: "#111827",
                  outline: "none",
                }}
              />
            </div>

            {/* Upload zone */}
            <div style={{
              border: "1.5px dashed rgba(34,58,94,0.2)",
              borderRadius: 10,
              padding: "18px 20px",
              textAlign: "center",
              background: "#f8fafc",
            }}>
              <div style={{ marginBottom: 8, display: "flex", justifyContent: "center" }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 8,
                  background: "rgba(52,211,153,0.1)",
                  border: "1px solid rgba(52,211,153,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M10 13V7m0 0L7.5 9.5M10 7l2.5 2.5" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 14v1a2 2 0 002 2h8a2 2 0 002-2v-1" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
              <p style={{ fontSize: 13, fontWeight: 500, color: "#334155", marginBottom: 4 }}>
                Upload past conference lists (optional)
              </p>
              <p style={{ fontSize: 12, color: "#94a3b8" }}>
                CSV files · Up to 3 events · Build your relationship history instantly
              </p>
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "12px 24px",
                borderRadius: 9,
                background: "#223A5E",
                color: "#fff",
                fontSize: 15, fontWeight: 600,
                border: "none", cursor: "pointer",
                marginTop: 4,
              }}
            >
              Create account &amp; start trial →
            </button>

            <p style={{ fontSize: 12, color: "#94a3b8", textAlign: "center" }}>
              By continuing, you agree to our{" "}
              <Link href="/terms" style={{ color: "#223A5E", textDecoration: "none" }}>Terms</Link>
              {" "}and{" "}
              <Link href="/privacy" style={{ color: "#223A5E", textDecoration: "none" }}>Privacy Policy</Link>.
            </p>
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
