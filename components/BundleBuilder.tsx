"use client";

import { useState } from "react";

// ── Constants ─────────────────────────────────────────────────────────────────
const ESSENTIALS_PRICE = { annual: 239, monthly: 299 };
const ENTERPRISE_PRICE = { annual: 1119, monthly: 1399 };

const BLOCK_HEIGHT = 72;
const BLOCK_GAP = 4;
// 1 base + 7 bundle slots = 8 total → 8×72 + 7×4 = 604px
const CONTAINER_HEIGHT = 8 * BLOCK_HEIGHT + 7 * BLOCK_GAP;

const BUNDLES = [
  { id: "intelligence", name: "Intelligence Core",    annual: 399, monthly: 499 },
  { id: "floor",        name: "Floor Capture",        annual: 239, monthly: 299 },
  { id: "collab",       name: "Team Collaboration",   annual: 159, monthly: 199 },
  { id: "revenue",      name: "Revenue Intelligence", annual: 319, monthly: 399 },
  { id: "program",      name: "Program Intelligence", annual: 239, monthly: 299, requires: "revenue" as const },
  { id: "org",          name: "Org Infrastructure",   annual: 159, monthly: 199 },
  { id: "crm",          name: "CRM Export",           annual: 79,  monthly: 99  },
] as const;

type BundleId = typeof BUNDLES[number]["id"];
type Mode = "build" | "modify";
type Billing = "annual" | "monthly";

// ── Helpers ────────────────────────────────────────────────────────────────────
function bp(id: BundleId, billing: Billing): number {
  const b = BUNDLES.find((x) => x.id === id)!;
  return b[billing];
}

function inPlan(id: BundleId, mode: Mode, selected: Set<string>): boolean {
  return mode === "build" ? selected.has(id) : !selected.has(id);
}

// ── Mode toggle ───────────────────────────────────────────────────────────────
function ModeToggle({ mode, onSwitch }: { mode: Mode; onSwitch: (m: Mode) => void }) {
  return (
    <div
      role="radiogroup"
      aria-label="Calculator mode"
      style={{
        display: "inline-flex",
        background: "#f1f5f9",
        borderRadius: 10,
        padding: 3,
        gap: 2,
        marginBottom: 18,
      }}
    >
      {(["build", "modify"] as Mode[]).map((m) => {
        const active = mode === m;
        return (
          <button
            key={m}
            role="radio"
            aria-checked={active}
            onClick={() => onSwitch(m)}
            style={{
              fontSize: 12,
              fontWeight: active ? 600 : 400,
              color: active ? "#223A5E" : "#94a3b8",
              background: active ? "white" : "transparent",
              border: "none",
              borderRadius: 7,
              padding: "7px 16px",
              cursor: "pointer",
              boxShadow: active ? "0 1px 3px rgba(34,58,94,0.12)" : "none",
              transition: "all 150ms",
              whiteSpace: "nowrap",
            }}
          >
            {m === "build" ? "Build from Essentials" : "Modify from Enterprise"}
          </button>
        );
      })}
    </div>
  );
}

// ── Running total ─────────────────────────────────────────────────────────────
function RunningTotal({
  mode,
  planTotal,
  enterpriseTotal,
  billing,
}: {
  mode: Mode;
  planTotal: number;
  enterpriseTotal: number;
  billing: Billing;
}) {
  const diff = enterpriseTotal - planTotal;
  const suffix = billing === "annual" ? "/mo annual" : "/mo";

  const col3Label = mode === "build"
    ? (diff > 0 ? "to Enterprise" : "vs Enterprise")
    : "monthly savings";
  const col3Value = Math.abs(diff);
  const col3Color = diff <= 0 ? "#059669" : "#64748b";

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr auto 1fr",
        alignItems: "center",
        background: "#f8fafc",
        border: "1px solid rgba(34,58,94,0.1)",
        borderRadius: 12,
        padding: "14px 16px",
        marginBottom: 16,
      }}
    >
      <div>
        <p style={{ fontSize: 10, color: "#94a3b8", marginBottom: 3, lineHeight: 1 }}>
          {mode === "build" ? "Your plan" : "Modified plan"}
        </p>
        <p style={{ fontSize: 22, fontWeight: 700, color: "#223A5E", lineHeight: 1, letterSpacing: "-0.02em" }}>
          ${planTotal}
        </p>
        <p style={{ fontSize: 10, color: "#94a3b8", marginTop: 2 }}>{suffix}</p>
      </div>

      <div style={{ width: 1, height: 36, background: "rgba(34,58,94,0.1)", margin: "0 10px" }} />

      <div>
        <p style={{ fontSize: 10, color: "#94a3b8", marginBottom: 3, lineHeight: 1 }}>Enterprise</p>
        <p style={{ fontSize: 22, fontWeight: 700, color: "#223A5E", lineHeight: 1, letterSpacing: "-0.02em" }}>
          ${enterpriseTotal}
        </p>
        <p style={{ fontSize: 10, color: "#94a3b8", marginTop: 2 }}>{suffix}</p>
      </div>

      <div style={{ width: 1, height: 36, background: "rgba(34,58,94,0.1)", margin: "0 10px" }} />

      <div>
        <p style={{ fontSize: 10, color: "#94a3b8", marginBottom: 3, lineHeight: 1 }}>{col3Label}</p>
        <p style={{ fontSize: 22, fontWeight: 700, color: col3Color, lineHeight: 1, letterSpacing: "-0.02em" }}>
          ${col3Value}
        </p>
        <p style={{ fontSize: 10, color: "#94a3b8", marginTop: 2 }}>{suffix}</p>
      </div>
    </div>
  );
}

// ── Plan container ────────────────────────────────────────────────────────────
interface Block {
  key: string;
  type: "filled" | "ghost" | "poi";
  label: string;
  sublabel?: string;
  color?: string;
  height?: number;
}

function PlanContainer({ blocks }: { blocks: Block[] }) {
  return (
    <div style={{ height: CONTAINER_HEIGHT, display: "flex", flexDirection: "column", gap: BLOCK_GAP, overflow: "hidden" }}>
      {blocks.map((block) => {
        if (block.type === "ghost") {
          return (
            <div
              key={block.key}
              style={{
                height: BLOCK_HEIGHT,
                flexShrink: 0,
                borderRadius: 8,
                border: "1.5px dashed rgba(34,58,94,0.15)",
                display: "flex",
                alignItems: "center",
                paddingLeft: 16,
              }}
            >
              <span style={{ fontSize: 11, color: "rgba(34,58,94,0.3)", fontStyle: "italic" }}>{block.label}</span>
            </div>
          );
        }

        if (block.type === "poi") {
          return (
            <div
              key="poi"
              style={{
                height: block.height,
                flexShrink: 0,
                borderRadius: 8,
                border: "1.5px dashed #34D399",
                background: "rgba(52,211,153,0.04)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 4,
                padding: "0 20px",
                textAlign: "center",
              }}
            >
              <span style={{ fontSize: 13, fontWeight: 700, color: "#059669" }}>Point of Indifference</span>
              <span style={{ fontSize: 11, color: "#64748b", lineHeight: 1.4 }}>{block.label}</span>
            </div>
          );
        }

        // filled
        return (
          <div
            key={block.key}
            style={{
              height: BLOCK_HEIGHT,
              flexShrink: 0,
              borderRadius: 8,
              background: block.color ?? "#223A5E",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 16px",
            }}
          >
            <span style={{ fontSize: 13, fontWeight: 600, color: "white" }}>{block.label}</span>
            {block.sublabel && (
              <span style={{ fontSize: 11, color: "rgba(255,255,255,0.6)" }}>{block.sublabel}</span>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ── Bundle row ────────────────────────────────────────────────────────────────
function BundleRow({
  bundle,
  active,
  mode,
  billing,
  onToggle,
  disabled,
}: {
  bundle: typeof BUNDLES[number];
  active: boolean;
  mode: Mode;
  billing: Billing;
  onToggle: () => void;
  disabled: boolean;
}) {
  const price = bundle[billing];

  const btnLabel = mode === "build"
    ? (active ? "Remove" : "Add")
    : (active ? "Remove" : "Restore");

  const btnColor = active ? "#ef4444" : "#059669";
  const btnBg    = active ? "rgba(239,68,68,0.07)" : "rgba(5,150,105,0.07)";
  const btnBorder = active ? "rgba(239,68,68,0.25)" : "rgba(5,150,105,0.25)";

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "11px 14px",
        borderRadius: 10,
        border: `1.5px solid ${active && mode === "build" ? "#34D399" : "rgba(34,58,94,0.1)"}`,
        background: active && mode === "build" ? "rgba(52,211,153,0.04)" : "white",
        opacity: disabled ? 0.4 : 1,
        transition: "border-color 150ms, background 150ms, opacity 150ms",
      }}
    >
      <div
        style={{
          width: 7,
          height: 7,
          borderRadius: "50%",
          flexShrink: 0,
          background: active ? "#34D399" : "rgba(34,58,94,0.18)",
          transition: "background 150ms",
        }}
      />

      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{ fontSize: 13, fontWeight: 600, color: "#223A5E", marginBottom: 0, lineHeight: 1.3 }}>
          {bundle.name}
        </p>
        {"requires" in bundle && (
          <p style={{ fontSize: 10, color: "#94a3b8", fontStyle: "italic", marginTop: 1 }}>
            Requires Revenue Intelligence
          </p>
        )}
      </div>

      <span style={{ fontSize: 12, fontWeight: 600, color: "#64748b", flexShrink: 0 }}>
        +${price}/mo
      </span>

      <button
        onClick={disabled ? undefined : onToggle}
        disabled={disabled}
        style={{
          fontSize: 11,
          fontWeight: 600,
          color: btnColor,
          background: btnBg,
          border: `1px solid ${btnBorder}`,
          borderRadius: 6,
          padding: "5px 11px",
          cursor: disabled ? "default" : "pointer",
          flexShrink: 0,
          transition: "all 150ms",
          whiteSpace: "nowrap",
        }}
      >
        {btnLabel}
      </button>
    </div>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────
export default function BundleBuilder({ billing }: { billing: "monthly" | "annual" }) {
  const [mode, setMode] = useState<Mode>("build");
  const [selected, setSelected] = useState<Set<string>>(new Set());

  function toggle(id: string) {
    setSelected((prev: Set<string>) => {
      const next = new Set(prev);
      if (mode === "build") {
        if (next.has(id)) {
          next.delete(id);
          if (id === "revenue") next.delete("program"); // auto-remove dependent
        } else {
          next.add(id);
          if (id === "program") next.add("revenue"); // auto-add dependency
        }
      } else {
        // modify: selected = removed bundles
        if (next.has(id)) {
          next.delete(id); // restore
        } else {
          next.add(id); // remove from Enterprise
          if (id === "revenue") next.add("program"); // removing RI forces removing PI
        }
      }
      return next;
    });
  }

  function switchMode(m: Mode) {
    setMode(m);
    // Preserve selected set — semantics flip automatically
  }

  // ── Compute plan total ──────────────────────────────────────────────────────
  const enterpriseTotal = ENTERPRISE_PRICE[billing];
  let planTotal: number;

  if (mode === "build") {
    planTotal = ESSENTIALS_PRICE[billing];
    selected.forEach((id: string) => {
      const b = BUNDLES.find((x) => x.id === id);
      if (b) planTotal += b[billing];
    });
  } else {
    planTotal = enterpriseTotal;
    selected.forEach((id: string) => {
      const b = BUNDLES.find((x) => x.id === id);
      if (b) planTotal -= b[billing];
    });
  }

  // ── Build plan container blocks ─────────────────────────────────────────────
  const poiThreshold = Math.round(enterpriseTotal * 0.88);
  const blocks: Block[] = [];

  if (mode === "build") {
    blocks.push({
      key: "base",
      type: "filled",
      label: "Essentials",
      sublabel: `$${ESSENTIALS_PRICE[billing]}/mo`,
      color: "#2ECC8E",
    });

    BUNDLES.filter((b) => selected.has(b.id)).forEach((b) => {
      blocks.push({
        key: b.id,
        type: "filled",
        label: b.name,
        sublabel: `+$${b[billing]}/mo`,
        color: "#223A5E",
      });
    });

    const ghostBundles = BUNDLES.filter((b) => !selected.has(b.id));
    const ghostCount = ghostBundles.length;

    if (planTotal >= poiThreshold && ghostCount > 0) {
      const poiH = ghostCount * BLOCK_HEIGHT + Math.max(0, ghostCount - 1) * BLOCK_GAP;
      const diff = enterpriseTotal - planTotal;
      const names = ghostBundles.map((b) => b.name).join(", ");
      blocks.push({
        key: "poi",
        type: "poi",
        label: diff > 0
          ? `Enterprise adds ${names} for $${diff}/mo more`
          : `Enterprise includes ${names} — you're past the break-even point`,
        height: poiH,
      });
    } else {
      ghostBundles.forEach((b) => {
        blocks.push({ key: `ghost-${b.id}`, type: "ghost", label: b.name });
      });
    }
  } else {
    // modify mode
    blocks.push({
      key: "base",
      type: "filled",
      label: "Enterprise",
      sublabel: `$${enterpriseTotal}/mo`,
      color: "#1B3A5C",
    });

    BUNDLES.filter((b) => !selected.has(b.id)).forEach((b) => {
      blocks.push({
        key: b.id,
        type: "filled",
        label: b.name,
        sublabel: `+$${b[billing]}/mo`,
        color: "#2D4E78",
      });
    });

    BUNDLES.filter((b) => selected.has(b.id)).forEach((b) => {
      blocks.push({ key: `ghost-${b.id}`, type: "ghost", label: b.name });
    });
  }

  return (
    <div
      style={{
        background: "white",
        border: "1px solid rgba(34,58,94,0.12)",
        borderRadius: 16,
        padding: "32px 36px",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-5" style={{ gap: 36 }}>

        {/* Left: mode toggle + running total + plan container */}
        <div className="lg:col-span-2">
          <ModeToggle mode={mode} onSwitch={switchMode} />
          <RunningTotal
            mode={mode}
            planTotal={planTotal}
            enterpriseTotal={enterpriseTotal}
            billing={billing}
          />
          <div className="hidden lg:block">
            <p style={{
              fontSize: 10,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "#94a3b8",
              marginBottom: 8,
            }}>
              Your plan
            </p>
            <PlanContainer blocks={blocks} />
          </div>
        </div>

        {/* Right: bundle list */}
        <div className="lg:col-span-3">
          <p style={{
            fontSize: 10,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "#94a3b8",
            marginBottom: 12,
          }}>
            {mode === "build" ? "Add feature bundles" : "Remove feature bundles"}
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {BUNDLES.map((bundle) => {
              const active = inPlan(bundle.id as BundleId, mode, selected);

              let disabled = false;
              if (bundle.id === "program") {
                // build: can't add program unless revenue is already added
                if (mode === "build" && !selected.has("revenue")) disabled = true;
                // modify: can't restore program if revenue is removed
                if (mode === "modify" && selected.has("revenue")) disabled = true;
              }

              return (
                <BundleRow
                  key={bundle.id}
                  bundle={bundle}
                  active={active}
                  mode={mode}
                  billing={billing}
                  onToggle={() => toggle(bundle.id)}
                  disabled={disabled}
                />
              );
            })}
          </div>

          {/* Dependency note */}
          <p style={{
            fontSize: 11,
            color: "#94a3b8",
            marginTop: 14,
            lineHeight: 1.5,
          }}>
            Program Intelligence requires Revenue Intelligence. Adding one adds the other; removing Revenue Intelligence removes both.
          </p>
        </div>

      </div>
    </div>
  );
}
