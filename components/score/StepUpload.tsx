"use client";

import { useState, useRef, useCallback } from "react";

interface Props {
  onParsed: (rows: Record<string, string>[], headers: string[], filename: string) => void;
}

export default function StepUpload({ onParsed }: Props) {
  const [dragging, setDragging] = useState(false);
  const [parsed, setParsed] = useState<{ filename: string; rows: number; cols: number } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const processFile = useCallback(async (file: File) => {
    setError(null);
    setLoading(true);
    try {
      const XLSX = await import("xlsx");
      const buffer = await file.arrayBuffer();
      const wb = XLSX.read(buffer, { type: "array" });
      if (!wb.SheetNames.length) {
        setError("No sheets found in the file. Please check your file and try again.");
        setLoading(false);
        return;
      }
      const ws = wb.Sheets[wb.SheetNames[0]];
      if (!ws) {
        setError("Couldn't read the first sheet. Please check your file and try again.");
        setLoading(false);
        return;
      }
      const raw: unknown[][] = XLSX.utils.sheet_to_json(ws, { header: 1, defval: "" });
      if (!raw || raw.length < 2) {
        setError("File appears empty or has no data rows. Please check your file and try again.");
        setLoading(false);
        return;
      }
      if (!Array.isArray(raw[0])) {
        setError("Couldn't read the header row. Make sure the first row contains column names.");
        setLoading(false);
        return;
      }
      const headers = (raw[0] as string[]).map(String).filter(Boolean);
      const rows: Record<string, string>[] = [];
      for (let i = 1; i < raw.length; i++) {
        const row = raw[i] as unknown[];
        const obj: Record<string, string> = {};
        headers.forEach((h, idx) => { obj[h] = String(row[idx] ?? ""); });
        // Skip completely empty rows
        if (headers.some((h) => obj[h]?.trim())) rows.push(obj);
      }
      if (rows.length === 0) {
        setError("No data rows found. Make sure your file has data below the header row.");
        setLoading(false);
        return;
      }
      setParsed({ filename: file.name, rows: rows.length, cols: headers.length });
      onParsed(rows, headers, file.name);
    } catch {
      setError("Couldn't parse the file. Make sure it's a valid .csv, .xlsx, or .xls file.");
    }
    setLoading(false);
  }, [onParsed]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) processFile(file);
  }, [processFile]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) processFile(file);
  }, [processFile]);

  return (
    <div>
      {/* Eyebrow */}
      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <span
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#34D399",
          }}
        >
          Conference audience scoring
        </span>
        <h1
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(28px, 5vw, 42px)",
            fontWeight: 700,
            color: "#223A5E",
            margin: "12px 0 8px",
            lineHeight: 1.2,
          }}
        >
          Upload your attendee list
        </h1>
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: 16,
            color: "#64748b",
            maxWidth: 520,
            margin: "0 auto",
            lineHeight: 1.6,
          }}
        >
          Drop in the attendee export from your conference platform. CSV or Excel, with at least Name, Title, and Company columns.
        </p>
      </div>

      {/* Upload zone */}
      <div
        onDragEnter={(e) => { e.preventDefault(); setDragging(true); }}
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        onClick={() => !parsed && inputRef.current?.click()}
        style={{
          border: `2px dashed ${dragging ? "#223A5E" : parsed ? "#34D399" : "#cbd5e1"}`,
          borderRadius: 16,
          padding: "48px 32px",
          textAlign: "center",
          background: dragging ? "#f0f4f8" : parsed ? "#f0fdf4" : "#fafbfc",
          cursor: parsed ? "default" : "pointer",
          transition: "all 200ms",
          position: "relative",
        }}
      >
        <input
          ref={inputRef}
          type="file"
          accept=".csv,.xlsx,.xls"
          onChange={handleChange}
          style={{ position: "absolute", opacity: 0, width: 1, height: 1, pointerEvents: "none" }}
          aria-hidden="true"
        />

        {loading ? (
          <div>
            <div
              style={{
                width: 40,
                height: 40,
                border: "3px solid #e2e8f0",
                borderTopColor: "#223A5E",
                borderRadius: "50%",
                animation: "spin 0.8s linear infinite",
                margin: "0 auto 16px",
              }}
            />
            <p style={{ fontFamily: "var(--font-inter)", fontSize: 14, color: "#64748b" }}>
              Parsing file…
            </p>
          </div>
        ) : parsed ? (
          <div>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                background: "#dcfce7",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px",
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12l5 5L19 7" stroke="#166534" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p style={{ fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: 16, color: "#166534", margin: "0 0 4px" }}>
              {parsed.filename}
            </p>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: 14, color: "#64748b", margin: 0 }}>
              {parsed.rows.toLocaleString()} rows · {parsed.cols} columns detected
            </p>
            <button
              onClick={(e) => { e.stopPropagation(); setParsed(null); inputRef.current?.click(); }}
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 12,
                color: "#64748b",
                background: "none",
                border: "none",
                cursor: "pointer",
                marginTop: 12,
                textDecoration: "underline",
                textUnderlineOffset: 3,
              }}
            >
              Choose a different file
            </button>
          </div>
        ) : (
          <div>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                background: "#f1f5f9",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px",
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="#475569" strokeWidth="1.5" strokeLinejoin="round" />
                <polyline points="14 2 14 8 20 8" stroke="#475569" strokeWidth="1.5" strokeLinejoin="round" />
                <line x1="12" y1="11" x2="12" y2="17" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" />
                <polyline points="9.5 14.5 12 12 14.5 14.5" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p style={{ fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: 16, color: "#223A5E", margin: "0 0 4px" }}>
              Drag and drop your file here
            </p>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: 14, color: "#94a3b8", margin: "0 0 16px" }}>
              or
            </p>
            <button
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 14,
                fontWeight: 600,
                color: "#223A5E",
                background: "#fff",
                border: "1.5px solid #223A5E",
                borderRadius: 8,
                padding: "8px 20px",
                cursor: "pointer",
              }}
            >
              Choose file
            </button>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: 12, color: "#94a3b8", marginTop: 12 }}>
              .csv, .xlsx, .xls
            </p>
          </div>
        )}
      </div>

      {/* Error */}
      {error && (
        <div
          style={{
            marginTop: 12,
            padding: "12px 16px",
            background: "#fef2f2",
            border: "1px solid #fecaca",
            borderRadius: 8,
            fontFamily: "var(--font-inter)",
            fontSize: 13,
            color: "#dc2626",
          }}
        >
          {error}
        </div>
      )}

      {/* Privacy strip */}
      <div
        style={{
          marginTop: 16,
          padding: "12px 16px",
          background: "#f0fdf4",
          border: "1px solid #bbf7d0",
          borderRadius: 10,
          display: "flex",
          alignItems: "flex-start",
          gap: 10,
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
          <path d="M8 1.5L2 4v4c0 3.31 2.61 6.41 6 7 3.39-.59 6-3.69 6-7V4L8 1.5z" fill="#34D399" fillOpacity="0.3" stroke="#166534" strokeWidth="1" strokeLinejoin="round" />
          <path d="M5.5 8l2 2 3-3" stroke="#166834" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: 12,
            color: "#166534",
            margin: 0,
            lineHeight: 1.6,
          }}
        >
          <strong>Your data stays private.</strong> Uploaded lists are processed in your session only and are never stored, shared, or used for any purpose outside generating your score. No account required to continue.
        </p>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
