type PillType = "icp" | "neutral" | "scheduled";

const PARLAY_ANSWERS = [
  "Which reps should prioritize which companies—and why?",
  "Did relationship depth actually improve at this conference?",
  "Which reps converted conversations into follow-through?",
  "Where are the ghosted accounts and coverage gaps?",
];

const PILL_STYLES: Record<PillType, object> = {
  icp:       { background: "rgba(52,211,153,0.1)",  color: "#059669", border: "1px solid rgba(52,211,153,0.3)"   },
  neutral:   { background: "#f1f5f9",               color: "#475569", border: "1px solid #e2e8f0"                },
  scheduled: { background: "rgba(59,130,246,0.08)", color: "#3b82f6", border: "1px solid rgba(59,130,246,0.25)" },
};

function Pill({ label, type }: { label: string; type: PillType }) {
  return (
    <span style={{ ...(PILL_STYLES[type] as React.CSSProperties), fontSize: 9, fontWeight: 500, borderRadius: 20, padding: "2px 7px", whiteSpace: "nowrap" }}>
      {label}
    </span>
  );
}

const ENGAGEMENT_BARS = [
  { label: "Newly Engaged",   pct: 20,  color: "#34D399", value: "52 (44 ICP)"   },
  { label: "Re-engagements",  pct: 1,   color: "#3b82f6", value: "2 (2 ICP)"     },
  { label: "Still Unengaged", pct: 100, color: "#f59e0b", value: "489 (286 ICP)" },
];

const PCR_TABS = ["Summary", "Meetings", "Follow-ups", "Relationships", "Contacts Captured"];

interface ContactData {
  name: string;
  delta: string | null;
  title: string;
  company: string;
  rep: string | null;
  firstSeen: string | null;
  pills: [string, PillType][];
}

const DESKTOP_CONTACTS: ContactData[] = [
  { name: "Mary Swanson",  delta: "↑+45 pts", title: "Chief Investment Officer", company: "iGot Worms Services", rep: "Lloyd Christmas", firstSeen: null,                 pills: [["ICP","icp"],["C-Suite","neutral"],["Operator","neutral"]] },
  { name: "Fletcher Reed", delta: "↑+12 pts", title: "CEO",                      company: "Acme Brick",          rep: "Ashley Behm",     firstSeen: "ASHA Annual Meeting", pills: [["ICP","icp"],["C-Suite","neutral"],["Operator","neutral"],["Scheduled","scheduled"]] },
  { name: "Bruce Nolan",   delta: null,        title: "President & CEO",          company: "Heavenly, Inc.",      rep: "Morgan Freeman",  firstSeen: "SL 100 2026",         pills: [["ICP","icp"],["C-Suite","neutral"],["Operator","neutral"]] },
];

const MOBILE_CONTACTS: ContactData[] = [
  { name: "Mary Swanson",  delta: "↑+45 pts", title: "Chief Investment Officer", company: "iGot Worms Services", rep: "Lloyd Christmas", firstSeen: null,                 pills: [["ICP","icp"],["C-Suite","neutral"],["Operator","neutral"]] },
  { name: "Fletcher Reed", delta: "↑+12 pts", title: "CEO",                      company: "Acme Brick",          rep: "Ashley Behm",     firstSeen: "ASHA Annual Meeting", pills: [["ICP","icp"],["C-Suite","neutral"],["Operator","neutral"],["Scheduled","scheduled"]] },
  { name: "Bruce Nolan",   delta: null,        title: "President & CEO",          company: "Heavenly, Inc.",      rep: "Morgan Freeman",  firstSeen: null,                  pills: [["ICP","icp"],["C-Suite","neutral"],["Operator","neutral"]] },
  { name: "Dick Harper",   delta: null,        title: "Senior Vice President",    company: "Globadyn",            rep: null,              firstSeen: null,                  pills: [["ICP","icp"],["VP/SVP","neutral"]] },
];

function ContactCard({ contact, truncate }: { contact: ContactData; truncate?: boolean }) {
  return (
    <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 8, padding: "10px 12px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 2 }}>
        <span style={{ fontSize: 12, fontWeight: 700, color: "#223A5E", overflow: truncate ? "hidden" : undefined, textOverflow: truncate ? "ellipsis" : undefined, whiteSpace: truncate ? "nowrap" : undefined }}>
          {contact.name}
        </span>
        {contact.delta && <span style={{ fontSize: 10, color: "#34D399", flexShrink: 0, marginLeft: 4 }}>{contact.delta}</span>}
      </div>
      <p style={{ fontSize: 11, color: "#64748b", marginBottom: 1, overflow: truncate ? "hidden" : undefined, textOverflow: truncate ? "ellipsis" : undefined, whiteSpace: truncate ? "nowrap" : undefined }}>
        {contact.title}
      </p>
      <p style={{ fontSize: 10, color: "#94a3b8", marginBottom: 6, overflow: truncate ? "hidden" : undefined, textOverflow: truncate ? "ellipsis" : undefined, whiteSpace: truncate ? "nowrap" : undefined }}>
        {contact.company}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: contact.rep || contact.firstSeen ? 6 : 0 }}>
        {contact.pills.map(([label, type]) => <Pill key={label} label={label} type={type} />)}
      </div>
      {contact.rep && (
        <span style={{ fontSize: 9, color: "#94a3b8", background: "#f1f5f9", border: "1px solid #e2e8f0", borderRadius: 20, padding: "2px 8px", display: "inline-flex", alignItems: "center", gap: 4 }}>
          <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#94a3b8", display: "inline-block", flexShrink: 0 }} />
          {contact.rep}
        </span>
      )}
      {contact.firstSeen && (
        <p style={{ fontSize: 9, color: "#94a3b8", marginTop: 4 }}>First seen at {contact.firstSeen}</p>
      )}
    </div>
  );
}

function ChromeBar() {
  return (
    <div style={{ background: "#f8fafc", padding: "10px 14px", display: "flex", alignItems: "center", gap: 6, borderBottom: "1px solid #e2e8f0" }}>
      <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ef4444", flexShrink: 0 }} />
      <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#f59e0b", flexShrink: 0 }} />
      <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#34D399", flexShrink: 0 }} />
    </div>
  );
}

function PcrHeader() {
  return (
    <div style={{ background: "#34D399", padding: "12px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div>
        <p style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(4,78,59,0.65)", marginBottom: 3 }}>
          POST-CONFERENCE REVIEW
        </p>
        <p style={{ fontSize: 14, fontWeight: 700, color: "#064e3b" }}>Conference Expo 2026</p>
      </div>
      <div style={{ display: "flex", gap: 10, color: "rgba(4,78,59,0.4)", fontSize: 14 }}>
        <span>∧</span>
        <span>✕</span>
      </div>
    </div>
  );
}

function TabNav() {
  return (
    <div
      style={{
        display: "flex",
        gap: 16,
        padding: "0 16px",
        borderBottom: "1px solid #e2e8f0",
        overflowX: "auto",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      } as React.CSSProperties}
    >
      {PCR_TABS.map((tab) => (
        <span
          key={tab}
          style={{
            fontSize: 12,
            fontWeight: tab === "Contacts Captured" ? 600 : 400,
            color: tab === "Contacts Captured" ? "#34D399" : "#94a3b8",
            padding: "10px 0",
            borderBottom: tab === "Contacts Captured" ? "2px solid #34D399" : "2px solid transparent",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          {tab}
        </span>
      ))}
    </div>
  );
}

function EngagementBreakdown() {
  return (
    <>
      <p style={{ fontSize: 10, fontWeight: 600, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>
        Engagement Breakdown
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
        {ENGAGEMENT_BARS.map((row) => (
          <div key={row.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 11, color: "#64748b", minWidth: 80 }}>{row.label}</span>
            <div style={{ flex: 1, height: 6, background: "#e2e8f0", borderRadius: 3, overflow: "hidden" }}>
              <div style={{ width: `${row.pct}%`, height: "100%", background: row.color, borderRadius: 3 }} />
            </div>
            <span style={{ fontSize: 11, color: "#64748b", minWidth: 72, textAlign: "right" }}>{row.value}</span>
          </div>
        ))}
      </div>
      <p style={{ fontSize: 9, color: "#94a3b8", marginTop: 6 }}>
        Lighter section within each bar represents ICP contacts
      </p>
    </>
  );
}

const CARD_STYLE = {
  background: "white",
  border: "1px solid rgba(34,58,94,0.1)",
  borderRadius: "12px 12px 0 0",
  boxShadow: "0 4px 24px rgba(34,58,94,0.1)",
  overflow: "hidden",
};

export default function VsCrmSection() {
  return (
    <section className="bg-brand-light py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="font-inter text-sm font-semibold tracking-widest uppercase text-brand-teal mb-4">
          Why not just use your CRM
        </p>

        <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-brand-primary mb-6 max-w-4xl">
          CRMs show pipeline state. Parlay enables conference execution.
        </h2>

        <p className="font-inter text-lg text-brand-steel mb-12 max-w-3xl">
          A CRM shows you who owns the account, deal stage, & last activity. Parlay shows what your team should do
          before, during, and after every conference, and whether it actually worked.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-6">
          {/* Left — Parlay Answers */}
          <div className="bg-brand-primary rounded-xl p-8">
            <p className="font-inter text-xs font-semibold tracking-widest uppercase text-brand-teal mb-6">
              Parlay answers
            </p>
            <div className="space-y-3">
              {PARLAY_ANSWERS.map((q) => (
                <div key={q} className="px-4 py-3 border border-white/[0.08] rounded-lg">
                  <p className="font-inter text-white/85 leading-relaxed">{q}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Post-conference review mock */}
          <div>

            {/* Desktop version */}
            <div className="hidden md:block">
              <div style={{ position: "relative" }}>
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute", bottom: 0, left: 0, right: 0,
                    height: 90,
                    background: "linear-gradient(to bottom, transparent, #F1F5F9)",
                    zIndex: 3, pointerEvents: "none",
                  }}
                />
                <div style={CARD_STYLE}>
                  <ChromeBar />
                  <PcrHeader />
                  <TabNav />

                  {/* Stat pills row */}
                  <div style={{ display: "flex", borderBottom: "1px solid #e2e8f0" }}>
                    {[
                      { value: "9",   label: "Reps"           },
                      { value: "26",  label: "Meetings Held"  },
                      { value: "35",  label: "Follow-ups"     },
                      { value: "77%", label: "Follow-up Rate" },
                      { value: "2",   label: "Form Subs"      },
                      { value: "61%", label: "ICP Capture"    },
                    ].map((stat, idx, arr) => (
                      <div
                        key={stat.label}
                        style={{
                          flex: 1, textAlign: "center", padding: "10px 6px",
                          borderRight: idx < arr.length - 1 ? "1px solid #e2e8f0" : "none",
                        }}
                      >
                        <p style={{ fontSize: 16, fontWeight: 700, color: "#223A5E", lineHeight: 1 }}>{stat.value}</p>
                        <p style={{ fontSize: 9, color: "#94a3b8", marginTop: 3 }}>{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Metrics row */}
                  <div style={{ display: "flex", gap: 20, padding: "14px 16px", borderBottom: "1px solid #e2e8f0" }}>
                    {[
                      { value: "54",  label: "Total Captured",   color: "#223A5E" },
                      { value: "52",  label: "Newly Engaged",    color: "#34D399" },
                      { value: "2",   label: "Re-engagements",   color: "#223A5E" },
                      { value: "489", label: "Still Unengaged",  color: "#f59e0b" },
                      { value: "332", label: "ICP Contacts",     color: "#34D399" },
                    ].map((stat) => (
                      <div key={stat.label}>
                        <p style={{ fontSize: 20, fontWeight: 700, color: stat.color, lineHeight: 1 }}>{stat.value}</p>
                        <p style={{ fontSize: 10, color: "#94a3b8", marginTop: 3 }}>{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Engagement breakdown */}
                  <div style={{ padding: "14px 16px", borderBottom: "1px solid #e2e8f0" }}>
                    <EngagementBreakdown />
                  </div>

                  {/* Contacts label */}
                  <p style={{ fontSize: 10, textTransform: "uppercase", color: "#94a3b8", letterSpacing: "0.05em", textAlign: "center", padding: "10px 16px 6px" }}>
                    NEWLY ENGAGED (52)
                  </p>

                  {/* 3-column contact grid */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, padding: "0 16px 16px" }}>
                    {DESKTOP_CONTACTS.map((c) => (
                      <ContactCard key={c.name} contact={c} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile version */}
            <div className="block md:hidden">
              <div style={{ position: "relative" }}>
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute", bottom: 0, left: 0, right: 0,
                    height: 100,
                    background: "linear-gradient(to bottom, transparent, #F1F5F9)",
                    zIndex: 3, pointerEvents: "none",
                  }}
                />
                <div style={CARD_STYLE}>
                  <ChromeBar />
                  <PcrHeader />
                  <TabNav />

                  {/* 2×2 metric grid */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, padding: 14 }}>
                    {[
                      { value: "54",  label: "Total Captured",  color: "#223A5E" },
                      { value: "52",  label: "Newly Engaged",   color: "#34D399" },
                      { value: "2",   label: "Re-engagements",  color: "#223A5E" },
                      { value: "332", label: "ICP Contacts",    color: "#34D399" },
                    ].map((stat) => (
                      <div key={stat.label} style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 10, padding: 14 }}>
                        <p style={{ fontSize: 28, fontWeight: 700, color: stat.color, lineHeight: 1 }}>{stat.value}</p>
                        <p style={{ fontSize: 11, color: "#64748b", marginTop: 4 }}>{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Engagement breakdown card */}
                  <div style={{ margin: "0 14px 14px", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 10, padding: "12px 14px" }}>
                    <EngagementBreakdown />
                  </div>

                  {/* Contacts label */}
                  <p style={{ fontSize: 10, textTransform: "uppercase", color: "#94a3b8", letterSpacing: "0.05em", textAlign: "center", padding: "4px 14px 8px" }}>
                    NEWLY ENGAGED (52)
                  </p>

                  {/* 2-column contact grid */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, padding: "0 14px 14px" }}>
                    {MOBILE_CONTACTS.map((c) => (
                      <ContactCard key={c.name} contact={c} truncate />
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
