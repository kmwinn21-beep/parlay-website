const BULLETS = [
  "Scan a card or badge — AI extracts name, title, company, and email instantly",
  "Smart matching finds existing records or creates new ones—no duplicates, no manual cleanup",
  "Contact is immediately tied to the conference, the rep, and the right company record",
  "Add notes and follow-ups in the same flow—no app switching, no lost context",
];

const RECORD_FIELDS = [
  ["Name", "James Mullen"],
  ["Title", "President & CEO"],
  ["Company", "Sabra Health Care REIT"],
  ["Type", "Capital · ICP"],
  ["Owned by", "Your Rep"],
];

export default function CardScanSection() {
  return (
    <section className="bg-brand-primary py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="font-inter text-sm font-semibold tracking-widest uppercase text-brand-teal mb-4">
              Field capture
            </p>
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-6">
              From badge scan to pipeline record in seconds
            </h2>
            <p className="font-inter text-lg mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              Conference floors move fast. Parlay&apos;s AI card scan and matching engine
              turns chaotic badge and card capture into usable pipeline data before the
              conversation is over.
            </p>
            <ul className="space-y-4">
              {BULLETS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-brand-teal mt-2.5" />
                  <p className="font-inter text-white/80 leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <div
              className="rounded-xl border border-white/10 p-5"
              style={{ background: "#0f2035" }}
            >
              <p className="font-inter text-xs text-white/40 uppercase tracking-widest mb-3">
                Card scanned
              </p>
              <p className="font-inter text-white font-semibold text-lg">James Mullen</p>
              <p className="font-inter text-sm mt-1" style={{ color: "rgba(255,255,255,0.55)" }}>
                President &amp; CEO · Sabra Health Care REIT
              </p>
            </div>

            <div className="flex items-center gap-3 px-2">
              <div className="flex-1 h-px bg-white/20" />
              <p className="font-inter text-xs text-brand-teal tracking-wide whitespace-nowrap">
                AI extraction + matching
              </p>
              <div className="flex-1 h-px bg-white/20" />
            </div>

            <div className="rounded-xl border border-brand-teal/30 p-5" style={{ background: "rgba(52,211,153,0.10)" }}>
              <p className="font-inter text-xs text-brand-teal uppercase tracking-widest mb-4">
                Record created · NIC Spring 2026
              </p>
              <div className="space-y-2.5">
                {RECORD_FIELDS.map(([key, val]) => (
                  <div key={key} className="flex justify-between items-center">
                    <span className="font-inter text-white/40 text-sm">{key}</span>
                    <span className="font-inter text-white text-sm font-medium">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
