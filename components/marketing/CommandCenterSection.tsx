const CHECKLIST = [
  "Pre-conference planning cockpit with ICP targeting and coverage gaps",
  "Attendees, companies, meetings, and social events",
  "Notes, follow-ups, and rep ownership",
  "Post-conference review with relationship shifts and action items",
  "Real-time visibility across your full team",
];

const ATTENDEES = [
  { initials: "CB", name: "Cameron Bell", company: "NHI", status: "Meeting held", statusClass: "text-brand-teal bg-brand-teal/10" },
  { initials: "SO", name: "Sarah Okonkwo", company: "Sunrise", status: "Follow-up due", statusClass: "text-amber-400 bg-amber-400/10" },
  { initials: "LP", name: "Linda Park", company: "CareTrust", status: "Touchpoint", statusClass: "text-white bg-brand-secondary/60" },
  { initials: "GH", name: "Greg Hollis", company: "Brookdale", status: "No engagement", statusClass: "text-white/40" },
  { initials: "JM", name: "James Mullen", company: "Sabra", status: "New contact", statusClass: "text-brand-teal bg-brand-teal/10" },
];

const TABS = ["Attendees", "Meetings", "Follow-ups", "Social", "Insights"];

export default function CommandCenterSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <p className="font-inter text-sm font-semibold tracking-widest uppercase text-brand-teal mb-4">
              Conference command center
            </p>
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-brand-primary mb-6">
              Everything your team does at a conference, in one place
            </h2>
            <p className="font-inter text-lg text-brand-steel mb-8 leading-relaxed">
              One view. Every person, every meeting, every note. Your whole team on the
              same page—in real time, across every conference you run.
            </p>
            <ul className="space-y-4 mb-8">
              {CHECKLIST.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-teal flex items-center justify-center mt-0.5">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
                      <path
                        d="M1 4L3.5 6.5L9 1"
                        stroke="#111827"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="font-inter text-brand-steel leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
            <p className="font-inter text-brand-steel italic">
              No spreadsheets. No scattered notes. No guessing.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden border border-white/10" style={{ background: "#0f2035" }}>
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <p className="font-inter text-white font-semibold text-sm">NIC Spring 2026</p>
              <span
                className="font-inter text-xs text-brand-teal px-2.5 py-1 rounded-full"
                style={{ background: "rgba(52,211,153,0.15)" }}
              >
                9 reps · live
              </span>
            </div>

            <div className="flex gap-5 px-5 pt-3 pb-0 border-b border-white/10 overflow-x-auto">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  className={`font-inter text-xs whitespace-nowrap pb-3 ${
                    tab === "Attendees"
                      ? "text-brand-teal border-b-2 border-brand-teal"
                      : "text-white/50"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="divide-y divide-white/[0.06]">
              {ATTENDEES.map((a) => (
                <div key={a.name} className="flex items-center justify-between px-5 py-3.5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-secondary flex items-center justify-center flex-shrink-0">
                      <span className="font-inter text-xs text-white font-semibold">{a.initials}</span>
                    </div>
                    <div>
                      <p className="font-inter text-white text-sm font-medium">{a.name}</p>
                      <p className="font-inter text-white/40 text-xs">{a.company}</p>
                    </div>
                  </div>
                  <span className={`font-inter text-xs px-2.5 py-1 rounded-full ${a.statusClass}`}>
                    {a.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
