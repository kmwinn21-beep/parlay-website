"use client";

import { useState } from "react";

type Priority = "high" | "med" | "ignore";

type FuncKey =
  | "Sales / Revenue"
  | "Marketing"
  | "Operations"
  | "Finance / Accounting"
  | "HR / People"
  | "Technology / IT"
  | "Clinical / Care";

type SeniorKey =
  | "C-Suite / Owner"
  | "VP / SVP / EVP"
  | "Director"
  | "Manager"
  | "Individual Contributor"
  | "Associate / Entry Level";

export interface ICPConfig {
  functions: Partial<Record<FuncKey, Priority>>;
  seniority: Partial<Record<SeniorKey, Priority>>;
}

interface Props {
  initial: ICPConfig;
  onNext: (config: ICPConfig) => void;
}

const FUNCTIONS: FuncKey[] = [
  "Sales / Revenue",
  "Marketing",
  "Operations",
  "Finance / Accounting",
  "HR / People",
  "Technology / IT",
  "Clinical / Care",
];

const SENIORITY: SeniorKey[] = [
  "C-Suite / Owner",
  "VP / SVP / EVP",
  "Director",
  "Manager",
  "Individual Contributor",
  "Associate / Entry Level",
];

const PRIORITIES: { value: Priority; label: string }[] = [
  { value: "high", label: "High" },
  { value: "med", label: "Med" },
  { value: "ignore", label: "Ignore" },
];

function PriorityRow<K extends string>({
  label,
  value,
  onChange,
}: {
  label: K;
  value: Priority | undefined;
  onChange: (v: Priority) => void;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 0",
        borderBottom: "1px solid #f1f5f9",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: 14,
          color: "#475569",
          fontWeight: 500,
        }}
      >
        {label}
      </span>
      <div style={{ display: "flex", gap: 4 }}>
        {PRIORITIES.map((p) => {
          const active = value === p.value;
          return (
            <button
              key={p.value}
              onClick={() => onChange(p.value)}
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 12,
                fontWeight: 600,
                padding: "5px 12px",
                borderRadius: 6,
                border: "1.5px solid",
                borderColor: active
                  ? p.value === "high"
                    ? "#223A5E"
                    : p.value === "med"
                    ? "#3A506B"
                    : "#94a3b8"
                  : "#e2e8f0",
                background: active
                  ? p.value === "high"
                    ? "#223A5E"
                    : p.value === "med"
                    ? "#3A506B"
                    : "#64748b"
                  : "#fff",
                color: active ? "#fff" : "#94a3b8",
                cursor: "pointer",
                transition: "all 150ms",
              }}
            >
              {p.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function StepDefineICP({ initial, onNext }: Props) {
  const [functions, setFunctions] = useState<Partial<Record<FuncKey, Priority>>>(initial.functions);
  const [seniority, setSeniority] = useState<Partial<Record<SeniorKey, Priority>>>(initial.seniority);
  const [validationError, setValidationError] = useState<string | null>(null);

  function hasAnyHighOrMed(map: Partial<Record<string, Priority>>) {
    return Object.values(map).some((v) => v === "high" || v === "med");
  }

  function handleContinue() {
    if (!hasAnyHighOrMed(functions)) {
      setValidationError("Select at least one High or Med priority in Job function.");
      return;
    }
    if (!hasAnyHighOrMed(seniority)) {
      setValidationError("Select at least one High or Med priority in Seniority.");
      return;
    }
    setValidationError(null);
    onNext({ functions, seniority });
  }

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
          Who are you trying to reach?
        </h1>
        <p style={{ fontFamily: "var(--font-inter)", fontSize: 15, color: "#64748b", maxWidth: 520, margin: "0 auto", lineHeight: 1.6 }}>
          Set your function and seniority priorities. We already know your prospect companies from the column you mapped — now tell us which roles matter most within those companies.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 16,
          marginBottom: 24,
        }}
      >
        {/* Card 1: Job function */}
        <div
          style={{
            background: "#fff",
            border: "1px solid #e2e8f0",
            borderRadius: 14,
            padding: "20px 20px 8px",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 14,
              fontWeight: 700,
              color: "#223A5E",
              margin: "0 0 4px",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            Job function priority
          </h2>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: 12, color: "#94a3b8", margin: "0 0 12px" }}>
            Which functions are you targeting?
          </p>
          {FUNCTIONS.map((f) => (
            <PriorityRow
              key={f}
              label={f}
              value={functions[f]}
              onChange={(v) => setFunctions((prev) => ({ ...prev, [f]: v }))}
            />
          ))}
        </div>

        {/* Card 2: Seniority */}
        <div
          style={{
            background: "#fff",
            border: "1px solid #e2e8f0",
            borderRadius: 14,
            padding: "20px 20px 8px",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 14,
              fontWeight: 700,
              color: "#223A5E",
              margin: "0 0 4px",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            Seniority priority
          </h2>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: 12, color: "#94a3b8", margin: "0 0 12px" }}>
            Which seniority levels matter most?
          </p>
          {SENIORITY.map((s) => (
            <PriorityRow
              key={s}
              label={s}
              value={seniority[s]}
              onChange={(v) => setSeniority((prev) => ({ ...prev, [s]: v }))}
            />
          ))}
        </div>
      </div>

      {validationError && (
        <div
          style={{
            marginBottom: 16,
            padding: "10px 16px",
            background: "#fef2f2",
            border: "1px solid #fecaca",
            borderRadius: 8,
            fontFamily: "var(--font-inter)",
            fontSize: 13,
            color: "#dc2626",
          }}
        >
          {validationError}
        </div>
      )}

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          onClick={handleContinue}
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
          Continue →
        </button>
      </div>
    </div>
  );
}
