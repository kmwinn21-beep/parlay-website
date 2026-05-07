const PILLARS = [
  {
    num: "01",
    title: "The data leaders need starts on the conference floor",
    body: "AI card/badge scanning extracts names, titles, companies, emails, and phone numbers instantly. Every scan creates an automatic follow-up task, feeds directly into relationship health scores, rep performance analytics, and conference effectiveness calculations. Leaders see the intelligence. Reps just do their job.",
  },
  {
    num: "02",
    title: "Ownership and accountability, not chaos",
    body: "Every interaction is tied to the right rep, company, and conference. Rep overlap is visible. Ghost penalties apply when someone was in the room and didn't engage. The accountability is automatic.",
  },
  {
    num: "03",
    title: "Follow-through built in",
    body: "Notes become follow-ups. Touchpoints auto-create tasks. Forms capture leads and assign ownership. Your team leaves every conference with clear next steps, and leaders can see exactly who is following through and who isn't.",
  },
  {
    num: "04",
    title: "Conference Effectiveness. Four scores, one verdict",
    body: "After every conference, Parlay scores Sales Execution, Audience & Messaging, Cost Efficiency, and overall Conference Effectiveness. Each 0–100. Each calibrated by the conference strategy type and ranked against the others. For the first time, your event coordinator, VP of Sales, and CMO share one performance verdict.",
  },
  {
    num: "05",
    title: "Multi-conference relationship memory",
    body: "Relationship trajectories build across every conference your team attends. Your team walks into next year's events knowing the full history of who engaged, what happened, and where momentum stalled. The competitive advantage compounds instead of resetting.",
  },
  {
    num: "06",
    title: "Know what the conference can realistically deliver,before you go",
    body: "Parlay scores each conference before you attend, evaluating whether the attendee list supports your strategy, whether your pipeline goal is achievable given who\u2019s in the room, and whether the right buyers are actually there. If the strategy doesn't match the opportunity, Parlay flags it before anyone books a flight.",
  },
];

export default function FeaturePillarsSection() {
  return (
    <section id="features" className="bg-brand-light py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="font-inter text-sm font-semibold tracking-widest uppercase text-brand-teal mb-4">
          Core capabilities
        </p>

        <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-brand-primary mb-6">
          Built for the leaders who own conference strategy. Powered by the reps who execute it.
        </h2>

        <p className="font-inter text-lg text-brand-steel mb-12 max-w-2xl">
          The scoring engines give revenue leaders unprecedented visibility. The rep tools are what make the data trustworthy.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.num}
              className="bg-white rounded-lg border border-slate-200 p-7"
            >
              <p className="font-inter text-sm font-semibold tracking-widest uppercase text-brand-teal mb-3">
                {pillar.num}
              </p>
              <h3 className="font-playfair text-xl font-bold text-brand-primary mb-3">
                {pillar.title}
              </h3>
              <p className="font-inter text-brand-steel leading-relaxed text-sm">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
