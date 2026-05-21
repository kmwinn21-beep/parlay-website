"use client";

import { useState } from "react";

type FileOption = "A" | "B";

interface Props {
  onConfirm: (option: FileOption | "skip") => void;
}

function downloadTemplate() {
  // Lazy import xlsx only when needed
  import("xlsx").then((XLSX) => {
    const wb = XLSX.utils.book_new();
    const data = [
      ["Full Name", "Job Title", "Company", "Type"],
      ["Jane Smith", "VP of Sales", "Acme Corp", "Prospect"],
      ["Tom Baker", "Marketing Manager", "Baker Solutions", "Vendor"],
      ["Sarah Chen", "Keynote Speaker", "Speaker Bureau", "Speaker"],
    ];
    const ws = XLSX.utils.aoa_to_sheet(data);
    ws["!cols"] = [{ wch: 22 }, { wch: 24 }, { wch: 22 }, { wch: 12 }];
    XLSX.utils.book_append_sheet(wb, ws, "Attendees");
    XLSX.writeFile(wb, "Parlay_Attendee_Template.xlsx");
  });
}

export default function PreUploadModal({ onConfirm }: Props) {
  const [selected, setSelected] = useState<FileOption>("A");

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: "rgba(17,28,46,0.72)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: 16,
          width: "100%",
          maxWidth: 560,
          boxShadow: "0 24px 48px rgba(17,28,46,0.18)",
          overflow: "hidden",
          // Mobile: align to bottom
        }}
      >
        {/* Header */}
        <div
          style={{
            background: "linear-gradient(135deg, #223A5E 0%, #1a2f4d 100%)",
            padding: "28px 28px 24px",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: 22,
              fontWeight: 700,
              color: "#fff",
              margin: 0,
              lineHeight: 1.3,
            }}
          >
            Does your file include non-prospects?
          </h2>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 14,
              color: "rgba(255,255,255,0.7)",
              marginTop: 8,
              marginBottom: 0,
              lineHeight: 1.6,
            }}
          >
            Conference lists often mix your target prospects with vendors, sponsors, speakers, and staff. Separating them gives you a more accurate score.
          </p>
        </div>

        {/* Options */}
        <div style={{ padding: "20px 28px", display: "flex", flexDirection: "column", gap: 12 }}>
          {/* Option A */}
          <button
            onClick={() => setSelected("A")}
            style={{
              textAlign: "left",
              border: `2px solid ${selected === "A" ? "#223A5E" : "#e2e8f0"}`,
              borderRadius: 12,
              padding: "16px",
              background: selected === "A" ? "#f0f4f8" : "#fff",
              cursor: "pointer",
              transition: "all 150ms",
              outline: "none",
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
              <div
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: "50%",
                  border: `2px solid ${selected === "A" ? "#223A5E" : "#cbd5e1"}`,
                  background: selected === "A" ? "#223A5E" : "transparent",
                  flexShrink: 0,
                  marginTop: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {selected === "A" && (
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#fff" }} />
                )}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <span
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontWeight: 600,
                      fontSize: 14,
                      color: "#223A5E",
                    }}
                  >
                    My file already has a column I can use
                  </span>
                  <span
                    style={{
                      fontSize: 11,
                      fontFamily: "var(--font-inter)",
                      fontWeight: 600,
                      color: "#166534",
                      background: "#dcfce7",
                      padding: "2px 8px",
                      borderRadius: 20,
                    }}
                  >
                    Most accurate score
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: 13,
                    color: "#64748b",
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  Many conference exports include a Registration Type, Attendee Category, or similar column that already separates your prospects from vendors and sponsors. You can also add your own &apos;Type&apos; column. Either way, we&apos;ll map it in the next step.
                </p>
              </div>
            </div>
          </button>

          {/* Template download strip (only when A selected) */}
          {selected === "A" && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
                borderRadius: 10,
                padding: "12px 16px",
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  background: "#dcfce7",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="2" y="2" width="14" height="14" rx="3" fill="#34D399" fillOpacity="0.3" />
                  <path d="M9 5v6M6.5 8.5L9 11l2.5-2.5" stroke="#166534" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5.5 13.5h7" stroke="#166534" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: "var(--font-inter)", fontSize: 13, fontWeight: 600, color: "#223A5E" }}>
                  Parlay_Attendee_Template.xlsx
                </div>
                <div style={{ fontFamily: "var(--font-inter)", fontSize: 12, color: "#64748b" }}>
                  Don&apos;t have one? Pre-formatted with a Type column included.
                </div>
              </div>
              <button
                onClick={(e) => { e.stopPropagation(); downloadTemplate(); }}
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#223A5E",
                  background: "#fff",
                  border: "1px solid #223A5E",
                  borderRadius: 8,
                  padding: "6px 12px",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                Download
              </button>
            </div>
          )}

          {/* Option B */}
          <button
            onClick={() => setSelected("B")}
            style={{
              textAlign: "left",
              border: `2px solid ${selected === "B" ? "#223A5E" : "#e2e8f0"}`,
              borderRadius: 12,
              padding: "16px",
              background: selected === "B" ? "#f0f4f8" : "#fff",
              cursor: "pointer",
              transition: "all 150ms",
              outline: "none",
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
              <div
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: "50%",
                  border: `2px solid ${selected === "B" ? "#223A5E" : "#cbd5e1"}`,
                  background: selected === "B" ? "#223A5E" : "transparent",
                  flexShrink: 0,
                  marginTop: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {selected === "B" && (
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#fff" }} />
                )}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <span
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontWeight: 600,
                      fontSize: 14,
                      color: "#223A5E",
                    }}
                  >
                    Score without separating company types
                  </span>
                  <span
                    style={{
                      fontSize: 11,
                      fontFamily: "var(--font-inter)",
                      fontWeight: 600,
                      color: "#92400e",
                      background: "#fef3c7",
                      padding: "2px 8px",
                      borderRadius: 20,
                    }}
                  >
                    Quicker, less precise
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: 13,
                    color: "#64748b",
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  We&apos;ll score everyone on the list based on title and function only. If the list includes vendors, sponsors, or speakers, your ICP density will appear lower than it actually is among your real targets.
                </p>
              </div>
            </div>
          </button>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 28px 24px",
            borderTop: "1px solid #f1f5f9",
          }}
        >
          <button
            onClick={() => onConfirm("skip")}
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 13,
              color: "#64748b",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px 0",
              textDecoration: "underline",
              textUnderlineOffset: 3,
            }}
          >
            Skip — upload as-is
          </button>
          <button
            onClick={() => onConfirm(selected)}
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 14,
              fontWeight: 600,
              color: "#111827",
              background: "#34D399",
              border: "none",
              borderRadius: 10,
              padding: "10px 20px",
              cursor: "pointer",
              transition: "background 150ms",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#6EE7B7")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#34D399")}
          >
            Got it — upload my file →
          </button>
        </div>
      </div>
    </div>
  );
}
