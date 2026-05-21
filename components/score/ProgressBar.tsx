"use client";

interface Props {
  currentStep: number;
  skipStep2: boolean;
}

const STEPS = [
  { num: 1, label: "Upload" },
  { num: 2, label: "Map columns" },
  { num: 3, label: "Define ICP" },
  { num: 4, label: "Map titles" },
  { num: 5, label: "Your score" },
];

export default function ProgressBar({ currentStep, skipStep2 }: Props) {
  function getState(num: number) {
    if (skipStep2 && num === 2) return "skipped";
    if (num < currentStep) return "done";
    if (num === currentStep) return "active";
    return "upcoming";
  }

  return (
    <div
      style={{
        position: "sticky",
        top: 64,
        zIndex: 40,
        background: "#fff",
        borderBottom: "1px solid #e2e8f0",
        boxShadow: "0 1px 3px rgba(34,58,94,0.06)",
      }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "0 16px",
          overflowX: "auto",
          scrollbarWidth: "none",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            padding: "12px 0",
            whiteSpace: "nowrap",
          }}
        >
          {STEPS.map((step, i) => {
            const state = getState(step.num);
            const isSkipped = state === "skipped";
            const isDone = state === "done";
            const isActive = state === "active";

            return (
              <div key={step.num} style={{ display: "flex", alignItems: "center", gap: 4 }}>
                {i > 0 && (
                  <div
                    style={{
                      width: 24,
                      height: 2,
                      borderRadius: 1,
                      background: isDone || isActive ? "#223A5E" : "#e2e8f0",
                      opacity: isSkipped ? 0.3 : 1,
                      flexShrink: 0,
                    }}
                  />
                )}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "6px 12px",
                    borderRadius: 20,
                    fontSize: 13,
                    fontFamily: "var(--font-inter)",
                    fontWeight: isActive ? 600 : 500,
                    transition: "all 200ms",
                    background: isActive ? "#223A5E" : isDone ? "#f0fdf4" : "#f8fafc",
                    color: isActive ? "#fff" : isDone ? "#166534" : isSkipped ? "#94a3b8" : "#64748b",
                    opacity: isSkipped ? 0.5 : 1,
                    border: isActive ? "none" : isDone ? "1px solid #bbf7d0" : "1px solid #e2e8f0",
                  }}
                >
                  <span
                    style={{
                      width: 18,
                      height: 18,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 10,
                      fontWeight: 700,
                      background: isActive ? "rgba(255,255,255,0.2)" : isDone ? "#34D399" : "#e2e8f0",
                      color: isActive ? "#fff" : isDone ? "#fff" : "#64748b",
                      flexShrink: 0,
                    }}
                  >
                    {isDone ? (
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : (
                      step.num
                    )}
                  </span>
                  {step.label}
                  {isSkipped && (
                    <span style={{ fontSize: 10, color: "#94a3b8", fontStyle: "italic" }}>
                      skipped
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
