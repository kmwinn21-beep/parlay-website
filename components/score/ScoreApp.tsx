"use client";

import { useState } from "react";
import PreUploadModal from "./PreUploadModal";
import ProgressBar from "./ProgressBar";
import StepUpload from "./StepUpload";
import StepMapColumns from "./StepMapColumns";
import StepDefineICP, { type ICPConfig } from "./StepDefineICP";
import StepMapTitles, { type BuyerRole } from "./StepMapTitles";
import StepResults from "./StepResults";

type FileOption = "A" | "B" | "skip";

interface ColumnMapping {
  name: string | null;
  title: string | null;
  company: string | null;
  type: string | null;
}

export default function ScoreApp() {
  // Pre-upload modal
  const [fileOption, setFileOption] = useState<FileOption | null>(null);

  // Step tracking (1–5)
  const [step, setStep] = useState(1);

  // File data
  const [rows, setRows] = useState<Record<string, string>[]>([]);
  const [headers, setHeaders] = useState<string[]>([]);
  const [filename, setFilename] = useState("");
  const [fileParsed, setFileParsed] = useState(false);

  // Column mapping
  const [columnMapping, setColumnMapping] = useState<ColumnMapping>({
    name: null, title: null, company: null, type: null,
  });
  const [prospectValues, setProspectValues] = useState<string[]>([]);

  // ICP config
  const [icpConfig, setIcpConfig] = useState<ICPConfig>({ functions: {}, seniority: {} });

  // Title classifications
  const [titleClassifications, setTitleClassifications] = useState<Record<string, BuyerRole>>({});

  const skipStep2 = fileOption === "B" || fileOption === "skip";

  function handleModalConfirm(option: FileOption) {
    setFileOption(option);
  }

  function handleFileParsed(
    parsedRows: Record<string, string>[],
    parsedHeaders: string[],
    parsedFilename: string
  ) {
    setRows(parsedRows);
    setHeaders(parsedHeaders);
    setFilename(parsedFilename);
    setFileParsed(true);
  }

  function handleStep1Continue() {
    setStep(skipStep2 ? 3 : 2);
  }

  function handleStep2Next(mapping: ColumnMapping, selected: string[]) {
    setColumnMapping(mapping);
    setProspectValues(selected);
    setStep(3);
  }

  function handleStep3Next(config: ICPConfig) {
    setIcpConfig(config);
    setStep(4);
  }

  function handleStep4Calculate(classifications: Record<string, BuyerRole>) {
    setTitleClassifications(classifications);
    setStep(5);
  }

  function goBack() {
    if (step === 2) setStep(1);
    else if (step === 3) setStep(skipStep2 ? 1 : 2);
    else if (step === 4) setStep(3);
    else if (step === 5) setStep(4);
  }

  const conferenceName = filename.replace(/\.[^/.]+$/, "") || "Your Conference";

  return (
    <div>
      {/* Pre-upload modal */}
      {fileOption === null && (
        <PreUploadModal onConfirm={handleModalConfirm} />
      )}

      {/* Progress bar */}
      {fileOption !== null && (
        <ProgressBar currentStep={step} skipStep2={skipStep2} />
      )}

      {/* Step content */}
      {fileOption !== null && (
        <div
          style={{
            maxWidth: 860,
            margin: "0 auto",
            padding: "48px 16px 80px",
          }}
        >
          {/* Back button */}
          {step > 1 && step < 5 && (
            <button
              onClick={goBack}
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 13,
                color: "#64748b",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0 0 24px",
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M9 11L5 7l4-4" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back
            </button>
          )}

          {step === 1 && (
            <>
              <StepUpload onParsed={handleFileParsed} />
              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 24 }}>
                <button
                  onClick={handleStep1Continue}
                  disabled={!fileParsed}
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: 15,
                    fontWeight: 600,
                    color: fileParsed ? "#111827" : "#94a3b8",
                    background: fileParsed ? "#34D399" : "#e2e8f0",
                    border: "none",
                    borderRadius: 10,
                    padding: "12px 28px",
                    cursor: fileParsed ? "pointer" : "not-allowed",
                    transition: "background 150ms",
                  }}
                  onMouseEnter={(e) => fileParsed && (e.currentTarget.style.background = "#6EE7B7")}
                  onMouseLeave={(e) => fileParsed && (e.currentTarget.style.background = "#34D399")}
                >
                  Continue →
                </button>
              </div>
            </>
          )}

          {step === 2 && !skipStep2 && (
            <StepMapColumns
              rows={rows}
              headers={headers}
              initialMapping={columnMapping}
              onNext={handleStep2Next}
            />
          )}

          {step === 3 && (
            <StepDefineICP initial={icpConfig} onNext={handleStep3Next} />
          )}

          {step === 4 && (
            <StepMapTitles
              rows={rows}
              titleColumn={columnMapping.title}
              initialClassifications={titleClassifications}
              onCalculate={handleStep4Calculate}
            />
          )}

          {step === 5 && (
            <StepResults
              rows={rows}
              columnMapping={columnMapping}
              prospectValues={prospectValues}
              icpConfig={icpConfig}
              titleClassifications={titleClassifications}
              conferenceName={conferenceName}
              skipTypeFilter={skipStep2}
            />
          )}
        </div>
      )}
    </div>
  );
}
