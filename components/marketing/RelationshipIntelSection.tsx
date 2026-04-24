const CONFERENCES = [
  { name: "NIC Spring '23", pct: 38, score: 38, barColor: "bg-orange-400", textColor: "text-orange-400" },
  { name: "NIC Fall '23",   pct: 61, score: 61, barColor: "bg-amber-400",  textColor: "text-amber-400" },
  { name: "Argentum '24",   pct: 78, score: 78, barColor: "bg-brand-teal", textColor: "text-brand-teal" },
  { name: "NIC Fall '24",   pct: 91, score: 91, barColor: "bg-brand-teal", textColor: "text-brand-teal" },
];

const BULLETS = [
  {
    title: "Conference-by-conference relationship trajectory",
    sub: "Not 'last activity'—a full history of how the relationship has moved",
  },
  {
    title: "Health scores built from real behavioral signals",
    sub: "Meetings, outcomes, notes, social attendance, follow-up completion, touchpoints",
  },
  {
    title: "Ghost penalties for attendance without engagement",
    sub: "If your team was in the room and didn't engage, the score reflects it",
  },
  {
    title: "Compounding relationship memory across event cycles",
    sub: "Your team builds momentum instead of starting from scratch every conference",
  },
];

export default function RelationshipIntelSection() {
  return (
    <section className="bg-brand-light py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <p className="font-inter text-sm font-semibold text-brand-primary mb-5">
                National Health Investors — relationship trajectory
              </p>
              <div className="space-y-4">
                {CONFERENCES.map((c) => (
                  <div key={c.name} className="flex items-center gap-4">
                    <span
                      className="font-inter text-xs text-brand-steel flex-shrink-0"
                      style={{ minWidth: "88px" }}
                    >
                      {c.name}
                    </span>
                    <div className="flex-1 h-1 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${c.barColor}`}
                        style={{ width: `${c.pct}%` }}
                      />
                    </div>
                    <span
                      className={`font-inter text-xs font-semibold flex-shrink-0 text-right ${c.textColor}`}
                      style={{ minWidth: "28px" }}
                    >
                      {c.score}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="rounded-xl border border-brand-teal/30 p-6"
              style={{ background: "rgba(52,211,153,0.08)" }}
            >
              <p className="font-inter text-sm font-semibold text-brand-teal mb-3">
                Relationship health · Strong · 4 conferences
              </p>
              <p className="font-inter text-brand-steel text-sm leading-relaxed">
                Meeting held at each event. Follow-ups completed. Pilot conversation
                active. Trajectory is up—no starting from scratch.
              </p>
            </div>
          </div>

          <div>
            <p className="font-inter text-sm font-semibold tracking-widest uppercase text-brand-teal mb-4">
              Relationship intelligence
            </p>
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-brand-primary mb-6">
              Relationships don&apos;t reset after the conference
            </h2>
            <p className="font-inter text-lg text-brand-steel mb-10 leading-relaxed">
              Every interaction rolls into company-level context that builds across every
              conference your team attends—not just the last touch.
            </p>
            <ul className="space-y-6">
              {BULLETS.map((b) => (
                <li key={b.title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-brand-primary mt-1.5" />
                  <div>
                    <p className="font-inter text-brand-primary font-semibold leading-snug mb-1">
                      {b.title}
                    </p>
                    <p className="font-inter text-brand-steel text-sm leading-relaxed">{b.sub}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
