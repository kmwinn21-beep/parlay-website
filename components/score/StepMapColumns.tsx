"use client";

import { useState, useEffect, useMemo } from "react";

interface ColumnMapping {
  name: string | null;
  title: string | null;
  company: string | null;
  type: string | null;
}

interface Props {
  rows: Record<string, string>[];
  headers: string[];
  initialMapping: ColumnMapping;
  onNext: (mapping: ColumnMapping, prospectValues: string[]) => void;
}

const NAME_HINTS = ["name", "full name", "attendee name", "fullname", "attendee"];
const TITLE_HINTS = ["title", "job title", "position", "role", "jobtitle"];
const COMPANY_HINTS = ["company", "organization", "employer", "account", "org"];
const TYPE_HINTS = ["type", "registration type", "attendee type", "category", "attendee category", "reg type"];

const PROSPECT_HINTS = ["prospect", "operator", "provider", "attendee", "registrant", "buyer", "customer"];
const NON_PROSPECT_HINTS = ["vendor", "sponsor", "speaker", "exhibitor", "staff", "association", "press", "media", "partner"];

function autoDetect(headers: string[], hints: string[]): string | null {
  const lower = headers.map((h) => h.toLowerCase().trim());
  for (const hint of hints) {
    const idx = lower.findIndex((h) => h === hint);
    if (idx >= 0) return headers[idx];
  }
  for (const hint of hints) {
    const idx = lower.findIndex((h) => h.includes(hint));
    if (idx >= 0) return headers[idx];
  }
  return null;
}

function buildInitialMapping(headers: string[]): ColumnMapping {
  return {
    name: autoDetect(headers, NAME_HINTS),
    title: autoDetect(headers, TITLE_HINTS),
    company: autoDetect(headers, COMPANY_HINTS),
    type: autoDetect(headers, TYPE_HINTS),
  };
}

function isAutoDetected(headers: string[], hints: string[], value: string | null): boolean {
  if (!value) return false;
  const lower = value.toLowerCase().trim();
  return hints.some((h) => lower === h || lower.includes(h));
}

export default function StepMapColumns({ rows, headers, initialMapping, onNext }: Props) {
  const [mapping, setMapping] = useState<ColumnMapping>(() =>
    initialMapping.name ? initialMapping : buildInitialMapping(headers)
  );
  const [selectedProspectValues, setSelectedProspectValues] = useState<Set<string>>(new Set());
  const [initialized, setInitialized] = useState(false);

  // Unique type values
  const typeValues = useMemo(() => {
    if (!mapping.type) return [];
    const vals = new Set<string>();
    rows.forEach((r) => {
      const v = r[mapping.type!]?.trim();
      if (v) vals.add(v);
    });
    return Array.from(vals).sort();
  }, [rows, mapping.type]);

  // Auto-select prospect values on first type column selection
  useEffect(() => {
    if (!mapping.type || initialized) return;
    setInitialized(true);
    const autoSelected = new Set<string>();
    typeValues.forEach((v) => {
      const lower = v.toLowerCase();
      if (PROSPECT_HINTS.some((h) => lower.includes(h))) autoSelected.add(v);
    });
    setSelectedProspectValues(autoSelected);
  }, [typeValues, mapping.type, initialized]);

  // When type column changes, reset
  useEffect(() => {
    setInitialized(false);
    setSelectedProspectValues(new Set());
  }, [mapping.type]);

  const includedCount = useMemo(() => {
    if (!mapping.type || selectedProspectValues.size === 0) return rows.length;
    return rows.filter((r) => selectedProspectValues.has(r[mapping.type!]?.trim())).length;
  }, [rows, mapping, selectedProspectValues]);

  const includedPct = rows.length > 0 ? Math.round((includedCount / rows.length) * 100) : 0;
  const excludedPct = 100 - includedPct;

  const previewRows = rows.slice(0, 5);

  function isProspectRow(r: Record<string, string>) {
    if (!mapping.type || selectedProspectValues.size === 0) return true;
    return selectedProspectValues.has(r[mapping.type]?.trim());
  }

  const fieldDetected = {
    name: isAutoDetected(headers, NAME_HINTS, mapping.name),
    title: isAutoDetected(headers, TITLE_HINTS, mapping.title),
    company: isAutoDetected(headers, COMPANY_HINTS, mapping.company),
    type: isAutoDetected(headers, TYPE_HINTS, mapping.type),
  };

  function handleContinue() {
    onNext(mapping, Array.from(selectedProspectValues));
  }

  const canContinue = !!(mapping.name && mapping.title && mapping.company);

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
          Confirm your column mapping
        </h1>
        <p style={{ fontFamily: "var(--font-inter)", fontSize: 15, color: "#64748b", margin: 0 }}>
          We detected <strong>{rows.length.toLocaleString()}</strong> rows and <strong>{headers.length}</strong> columns. Confirm the mapping below, then tell us which values in your type column represent target prospects.
        </p>
      </div>

      {/* Section A: Map columns */}
      <div
        style={{
          background: "#fff",
          border: "1px solid #e2e8f0",
          borderRadius: 14,
          padding: "24px",
          marginBottom: 16,
        }}
      >
        <h2 style={{ fontFamily: "var(--font-inter)", fontSize: 14, fontWeight: 700, color: "#223A5E", margin: "0 0 20px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
          Map your columns
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 16 }}>
          {(
            [
              { key: "name" as const, label: "Name column", hints: NAME_HINTS },
              { key: "title" as const, label: "Title column", hints: TITLE_HINTS },
              { key: "company" as const, label: "Company column", hints: COMPANY_HINTS },
              { key: "type" as const, label: "Type / Category column", hints: TYPE_HINTS },
            ] as const
          ).map(({ key, label }) => (
            <div key={key}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
                <label
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#475569",
                  }}
                >
                  {label}
                </label>
                {fieldDetected[key] && (
                  <span
                    style={{
                      fontSize: 10,
                      fontFamily: "var(--font-inter)",
                      fontWeight: 600,
                      color: "#0369a1",
                      background: "#e0f2fe",
                      padding: "1px 6px",
                      borderRadius: 20,
                    }}
                  >
                    Auto-detected
                  </span>
                )}
              </div>
              <select
                value={mapping[key] ?? ""}
                onChange={(e) =>
                  setMapping((m) => ({ ...m, [key]: e.target.value || null }))
                }
                style={{
                  width: "100%",
                  fontFamily: "var(--font-inter)",
                  fontSize: 13,
                  color: "#223A5E",
                  background: "#f8fafc",
                  border: `1.5px solid ${mapping[key] ? "#223A5E" : "#e2e8f0"}`,
                  borderRadius: 8,
                  padding: "8px 10px",
                  outline: "none",
                  cursor: "pointer",
                }}
              >
                <option value="">— Select column —</option>
                {headers.map((h) => (
                  <option key={h} value={h}>
                    {h}
                  </option>
                ))}
                {key === "type" && <option value="">— Skip this field —</option>}
              </select>
            </div>
          ))}
        </div>
      </div>

      {/* Section B: Prospect value selection */}
      {mapping.type && typeValues.length > 0 && (
        <div
          style={{
            background: "#fff",
            border: "1px solid #e2e8f0",
            borderRadius: 14,
            padding: "24px",
            marginBottom: 16,
          }}
        >
          <h2 style={{ fontFamily: "var(--font-inter)", fontSize: 14, fontWeight: 700, color: "#223A5E", margin: "0 0 6px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Which values mean Prospect?
          </h2>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: 13, color: "#64748b", margin: "0 0 16px" }}>
            Tap every value that represents a target prospect company
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
            {typeValues.map((v) => {
              const sel = selectedProspectValues.has(v);
              const lower = v.toLowerCase();
              const isNonProspect = NON_PROSPECT_HINTS.some((h) => lower.includes(h));
              return (
                <button
                  key={v}
                  onClick={() => {
                    setSelectedProspectValues((prev) => {
                      const next = new Set(prev);
                      if (sel) { next.delete(v); } else { next.add(v); }
                      return next;
                    });
                  }}
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: 13,
                    fontWeight: 500,
                    padding: "6px 14px",
                    borderRadius: 20,
                    border: `1.5px solid ${sel ? "#223A5E" : isNonProspect ? "#fecaca" : "#e2e8f0"}`,
                    background: sel ? "#223A5E" : isNonProspect ? "#fef2f2" : "#f8fafc",
                    color: sel ? "#fff" : isNonProspect ? "#dc2626" : "#64748b",
                    cursor: "pointer",
                    transition: "all 150ms",
                  }}
                >
                  {v}
                </button>
              );
            })}
          </div>
          {selectedProspectValues.size > 0 && (
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 13,
                color: "#475569",
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
                borderRadius: 8,
                padding: "8px 12px",
                margin: 0,
              }}
            >
              <strong style={{ color: "#223A5E" }}>{selectedProspectValues.size}</strong> of {typeValues.length} values selected —{" "}
              <strong style={{ color: "#166534" }}>{includedCount.toLocaleString()}</strong> companies ({includedPct}%) will be scored. The remaining {excludedPct}% will be excluded from your audience score.
            </p>
          )}
        </div>
      )}

      {/* Section C: Data preview */}
      <div
        style={{
          background: "#fff",
          border: "1px solid #e2e8f0",
          borderRadius: 14,
          padding: "24px",
          marginBottom: 24,
          overflowX: "auto",
        }}
      >
        <h2 style={{ fontFamily: "var(--font-inter)", fontSize: 14, fontWeight: 700, color: "#223A5E", margin: "0 0 16px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
          Data preview (first 5 rows)
        </h2>
        <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 500 }}>
          <thead>
            <tr>
              {(["name", "title", "company", "type"] as const).map((k) => (
                <th
                  key={k}
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#94a3b8",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    textAlign: "left",
                    padding: "0 12px 10px 0",
                    borderBottom: "1px solid #f1f5f9",
                  }}
                >
                  {k === "type" ? "Type (mapped)" : k}
                </th>
              ))}
              <th
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#94a3b8",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  textAlign: "left",
                  padding: "0 0 10px 0",
                  borderBottom: "1px solid #f1f5f9",
                }}
              >
                Scoring
              </th>
            </tr>
          </thead>
          <tbody>
            {previewRows.map((row, i) => {
              const included = isProspectRow(row);
              return (
                <tr key={i}>
                  {(["name", "title", "company", "type"] as const).map((k) => (
                    <td
                      key={k}
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: 13,
                        color: "#475569",
                        padding: "8px 12px 8px 0",
                        borderBottom: "1px solid #f8fafc",
                        maxWidth: 160,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {mapping[k] ? row[mapping[k]!] || "—" : "—"}
                    </td>
                  ))}
                  <td style={{ padding: "8px 0", borderBottom: "1px solid #f8fafc" }}>
                    {included ? (
                      <span
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontSize: 11,
                          fontWeight: 600,
                          color: "#166534",
                          background: "#dcfce7",
                          padding: "2px 8px",
                          borderRadius: 20,
                        }}
                      >
                        Included
                      </span>
                    ) : (
                      <span
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontSize: 11,
                          fontWeight: 600,
                          color: "#94a3b8",
                          background: "#f1f5f9",
                          padding: "2px 8px",
                          borderRadius: 20,
                        }}
                      >
                        Excluded —
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          onClick={handleContinue}
          disabled={!canContinue}
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: 15,
            fontWeight: 600,
            color: canContinue ? "#111827" : "#94a3b8",
            background: canContinue ? "#34D399" : "#e2e8f0",
            border: "none",
            borderRadius: 10,
            padding: "12px 28px",
            cursor: canContinue ? "pointer" : "not-allowed",
            transition: "background 150ms",
          }}
          onMouseEnter={(e) => canContinue && (e.currentTarget.style.background = "#6EE7B7")}
          onMouseLeave={(e) => canContinue && (e.currentTarget.style.background = "#34D399")}
        >
          Continue →
        </button>
      </div>
    </div>
  );
}
