"use client";

import { useState, useMemo } from "react";

export type BuyerRole = "decision_maker" | "influencer" | "target_title" | "ignore";

interface NormalizedTitle {
  canonical: string;
  variants: string[];
  count: number;
  role: BuyerRole | null;
  autoClassified: boolean;
}

interface Props {
  rows: Record<string, string>[];
  titleColumn: string | null;
  initialClassifications: Record<string, BuyerRole>;
  onCalculate: (classifications: Record<string, BuyerRole>) => void;
}

const BUYER_ROLES: { value: BuyerRole; label: string }[] = [
  { value: "decision_maker", label: "Decision maker" },
  { value: "influencer", label: "Influencer" },
  { value: "target_title", label: "Target title" },
  { value: "ignore", label: "Ignore" },
];

const DECISION_MAKER_HINTS = ["ceo", "cxo", "chief executive", "owner", "president", "founder", "managing director", "managing partner", "coo", "cfo", "cto", "cmo", "cso", "cpo", "c-suite", "principal"];
const INFLUENCER_HINTS = ["vp ", "vice president", "svp", "evp", "director"];
const TARGET_HINTS = ["manager", "head of"];
const IGNORE_HINTS = ["intern", "assistant", "coordinator", "receptionist"];

function autoClassifyTitle(title: string): BuyerRole | null {
  const lower = title.toLowerCase();
  if (DECISION_MAKER_HINTS.some((h) => lower.includes(h))) return "decision_maker";
  if (INFLUENCER_HINTS.some((h) => lower.includes(h))) return "influencer";
  if (TARGET_HINTS.some((h) => lower.includes(h))) return "target_title";
  if (IGNORE_HINTS.some((h) => lower.includes(h))) return "ignore";
  return null;
}

function normalizeTitle(t: string): string {
  return t
    .replace(/\bchief executive officer\b/gi, "CEO")
    .replace(/\bchief executive\b/gi, "CEO")
    .replace(/\bchief operating officer\b/gi, "COO")
    .replace(/\bchief financial officer\b/gi, "CFO")
    .replace(/\bchief technology officer\b/gi, "CTO")
    .replace(/\bchief marketing officer\b/gi, "CMO")
    .replace(/\bchief revenue officer\b/gi, "CRO")
    .replace(/\bvice president\b/gi, "VP")
    .replace(/\bsenior vice president\b/gi, "SVP")
    .replace(/\bexecutive vice president\b/gi, "EVP")
    .trim();
}

function getCanonical(title: string): string {
  return normalizeTitle(title).toLowerCase().replace(/\s+/g, " ").trim();
}

function buildNormalizedTitles(
  rows: Record<string, string>[],
  titleColumn: string | null,
  initialClassifications: Record<string, BuyerRole>
): NormalizedTitle[] {
  if (!titleColumn) return [];

  const groupMap = new Map<string, { canonical: string; variants: Set<string>; count: number }>();

  rows.forEach((r) => {
    const raw = r[titleColumn]?.trim();
    if (!raw) return;
    const normalized = normalizeTitle(raw);
    const key = getCanonical(raw);
    if (!groupMap.has(key)) {
      groupMap.set(key, { canonical: normalized, variants: new Set(), count: 0 });
    }
    const g = groupMap.get(key)!;
    g.variants.add(raw);
    g.count++;
  });

  return Array.from(groupMap.entries())
    .map(([key, g]) => {
      const autoRole = autoClassifyTitle(g.canonical);
      const existingRole = initialClassifications[key] ?? null;
      return {
        canonical: g.canonical,
        variants: Array.from(g.variants),
        count: g.count,
        role: existingRole ?? autoRole,
        autoClassified: !existingRole && autoRole !== null,
      };
    })
    .sort((a, b) => b.count - a.count);
}

export default function StepMapTitles({ rows, titleColumn, initialClassifications, onCalculate }: Props) {
  const normalized = useMemo(
    () => buildNormalizedTitles(rows, titleColumn, initialClassifications),
    [rows, titleColumn, initialClassifications]
  );

  const [classifications, setClassifications] = useState<Record<string, BuyerRole | null>>(() => {
    const init: Record<string, BuyerRole | null> = {};
    normalized.forEach((t) => { init[getCanonical(t.canonical)] = t.role; });
    return init;
  });

  const [bulkRole, setBulkRole] = useState<BuyerRole>("ignore");
  const [search, setSearch] = useState("");

  const classifiedCount = Object.values(classifications).filter(Boolean).length;
  const unclassifiedCount = normalized.length - classifiedCount;

  function applyBulkToUnclassified() {
    setClassifications((prev) => {
      const next = { ...prev };
      normalized.forEach((t) => {
        const key = getCanonical(t.canonical);
        if (!prev[key]) next[key] = bulkRole;
      });
      return next;
    });
  }

  function handleCalculate() {
    const result: Record<string, BuyerRole> = {};
    normalized.forEach((t) => {
      const key = getCanonical(t.canonical);
      const role = classifications[key];
      if (role) result[key] = role;
    });
    onCalculate(result);
  }

  const filtered = search
    ? normalized.filter((t) => t.canonical.toLowerCase().includes(search.toLowerCase()))
    : normalized;

  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <h1
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(26px, 4vw, 38px)",
            fontWeight: 700,
            color: "#223A5E",
            margin: "0 0 10px",
          }}
        >
          Classify the unique titles
        </h1>
        <p style={{ fontFamily: "var(--font-inter)", fontSize: 15, color: "#64748b", maxWidth: 560, margin: "0 auto", lineHeight: 1.6 }}>
          We found <strong>{normalized.length}</strong> unique titles across your <strong>{rows.length.toLocaleString()}</strong> prospect rows. Assign each a buyer role — this directly affects your Buyer Access score.
        </p>
      </div>

      {/* Bulk action bar */}
      <div
        style={{
          background: "#fff",
          border: "1px solid #e2e8f0",
          borderRadius: 12,
          padding: "14px 16px",
          marginBottom: 16,
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <div>
          <span
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 14,
              color: "#223A5E",
              fontWeight: 600,
            }}
          >
            {classifiedCount} of {normalized.length} titles classified
          </span>
          {unclassifiedCount > 0 && (
            <span style={{ fontFamily: "var(--font-inter)", fontSize: 13, color: "#94a3b8", marginLeft: 8 }}>
              — {unclassifiedCount} remaining
            </span>
          )}
        </div>
        {unclassifiedCount > 0 && (
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontFamily: "var(--font-inter)", fontSize: 13, color: "#64748b" }}>
              Apply to all unclassified:
            </span>
            <select
              value={bulkRole}
              onChange={(e) => setBulkRole(e.target.value as BuyerRole)}
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 13,
                color: "#223A5E",
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
                borderRadius: 6,
                padding: "5px 8px",
                outline: "none",
                cursor: "pointer",
              }}
            >
              {BUYER_ROLES.map((r) => (
                <option key={r.value} value={r.value}>{r.label}</option>
              ))}
            </select>
            <button
              onClick={applyBulkToUnclassified}
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 13,
                fontWeight: 600,
                color: "#223A5E",
                background: "#f0f4f8",
                border: "1px solid #223A5E",
                borderRadius: 6,
                padding: "5px 12px",
                cursor: "pointer",
              }}
            >
              Apply
            </button>
          </div>
        )}
      </div>

      {/* Search */}
      <div style={{ marginBottom: 12 }}>
        <input
          type="text"
          placeholder="Search titles…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            fontFamily: "var(--font-inter)",
            fontSize: 14,
            color: "#223A5E",
            background: "#fff",
            border: "1.5px solid #e2e8f0",
            borderRadius: 8,
            padding: "9px 14px",
            outline: "none",
            boxSizing: "border-box",
          }}
        />
      </div>

      {/* Table */}
      <div
        style={{
          background: "#fff",
          border: "1px solid #e2e8f0",
          borderRadius: 14,
          overflow: "hidden",
          marginBottom: 24,
        }}
      >
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 480 }}>
            <thead>
              <tr style={{ background: "#f8fafc" }}>
                <th style={{ fontFamily: "var(--font-inter)", fontSize: 11, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.08em", textAlign: "left", padding: "10px 16px", borderBottom: "1px solid #e2e8f0" }}>
                  Title
                </th>
                <th style={{ fontFamily: "var(--font-inter)", fontSize: 11, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.08em", textAlign: "center", padding: "10px 12px", borderBottom: "1px solid #e2e8f0", width: 70 }}>
                  Count
                </th>
                <th style={{ fontFamily: "var(--font-inter)", fontSize: 11, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.08em", textAlign: "left", padding: "10px 16px 10px 12px", borderBottom: "1px solid #e2e8f0", width: 180 }}>
                  Buyer role
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((t, i) => {
                const key = getCanonical(t.canonical);
                const role = classifications[key];
                const isClassified = !!role;
                return (
                  <tr
                    key={i}
                    style={{
                      opacity: isClassified ? 1 : 0.55,
                      borderBottom: "1px solid #f8fafc",
                    }}
                  >
                    <td style={{ padding: "10px 16px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{ fontFamily: "var(--font-inter)", fontSize: 14, color: "#223A5E", fontWeight: 500 }}>
                          {t.canonical}
                        </span>
                        {t.autoClassified && role && (
                          <span style={{ fontSize: 10, fontFamily: "var(--font-inter)", fontWeight: 600, color: "#0369a1", background: "#e0f2fe", padding: "1px 6px", borderRadius: 20 }}>
                            Auto
                          </span>
                        )}
                      </div>
                    </td>
                    <td style={{ padding: "10px 12px", textAlign: "center", fontFamily: "var(--font-inter)", fontSize: 13, color: "#64748b" }}>
                      {t.count}
                    </td>
                    <td style={{ padding: "10px 16px 10px 12px" }}>
                      <select
                        value={role ?? ""}
                        onChange={(e) =>
                          setClassifications((prev) => ({
                            ...prev,
                            [key]: (e.target.value as BuyerRole) || null,
                          }))
                        }
                        style={{
                          width: "100%",
                          fontFamily: "var(--font-inter)",
                          fontSize: 13,
                          color: role ? "#223A5E" : "#94a3b8",
                          background: "#f8fafc",
                          border: `1.5px solid ${role ? "#223A5E" : "#e2e8f0"}`,
                          borderRadius: 6,
                          padding: "5px 8px",
                          outline: "none",
                          cursor: "pointer",
                        }}
                      >
                        <option value="">— Unclassified —</option>
                        {BUYER_ROLES.map((r) => (
                          <option key={r.value} value={r.value}>{r.label}</option>
                        ))}
                      </select>
                    </td>
                  </tr>
                );
              })}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={3} style={{ padding: "24px", textAlign: "center", fontFamily: "var(--font-inter)", fontSize: 14, color: "#94a3b8" }}>
                    No titles match your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          onClick={handleCalculate}
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: 15,
            fontWeight: 600,
            color: "#111827",
            background: "#34D399",
            border: "none",
            borderRadius: 10,
            padding: "12px 28px",
            cursor: "pointer",
            transition: "background 150ms",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#6EE7B7")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#34D399")}
        >
          Calculate my score →
        </button>
      </div>
    </div>
  );
}
