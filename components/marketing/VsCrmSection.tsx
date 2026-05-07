import EffectivenessSummaryMock from "./EffectivenessSummaryMock";

const PARLAY_ANSWERS = [
  "Did our team prioritize the right companies at this conference — or did they burn floor time on low-value accounts?",
  "Which ICP companies attended and walked away without a single interaction from our team?",
  "Is the relationship with our key accounts actually stronger than it was six months ago?",
  "Which rep is converting conference conversations into pipeline — and which one is just collecting business cards?",
  "Which conferences should we invest more in next year, and which should we cut?",
];

export default function VsCrmSection() {
  return (
    <section className="bg-brand-light py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="font-inter text-sm font-semibold tracking-widest uppercase text-brand-teal mb-4">
          Why not just use your CRM
        </p>

        <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-brand-primary mb-6 max-w-4xl">
          Your CRM tells you what happened. Parlay tells you what it meant.
        </h2>

        <p className="font-inter text-lg text-brand-steel mb-12 max-w-3xl">
          A CRM records activity. It doesn&apos;t evaluate it. It can&apos;t tell you whether your team engaged the right companies, whether the relationships are actually deepening, or whether the $60,000 you spent on that conference generated enough pipeline to justify going back. Parlay was built to answer the questions your CRM never will.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-6">
          {/* Left — Parlay Answers */}
          <div className="bg-brand-primary rounded-xl p-8">
            <p className="font-inter text-xs font-semibold tracking-widest uppercase text-brand-teal mb-6">
              Parlay answers these questions
            </p>
            <div className="space-y-3">
              {PARLAY_ANSWERS.map((q) => (
                <div key={q} className="px-4 py-3 border border-white/[0.08] rounded-lg">
                  <p className="font-inter text-white/85 leading-relaxed">{q}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Conference Effectiveness Summary mock */}
          <div>
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
              <EffectivenessSummaryMock />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
