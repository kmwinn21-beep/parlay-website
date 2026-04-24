const STEPS = [
  {
    num: "01",
    title: "Plan",
    body: "Know who to prioritize before you board the plane. ICP coverage, relationship gaps, meeting assignments, rep workload.",
  },
  {
    num: "02",
    title: "Execute",
    body: "Capture contacts, log conversations, scan cards, assign ownership. One command center for your whole team.",
  },
  {
    num: "03",
    title: "Score",
    body: "Relationship health scores and rep performance metrics tell you what actually moved and what didn't.",
  },
  {
    num: "04",
    title: "Improve",
    body: "Every conference adds to long-term relationship trajectories. Your team compounds the advantage across every event cycle.",
  },
];

export default function SolutionLoopSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="font-inter text-sm font-semibold tracking-widest uppercase text-brand-teal mb-4">
          The fix
        </p>

        <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-brand-primary mb-6 max-w-4xl">
          A system built for the conference floor—not retrofitted from account software
        </h2>

        <p className="font-inter text-lg text-brand-steel mb-10 max-w-3xl">
          Parlay treats conferences as a repeatable revenue operating loop. Not one-off
          activities attached to a CRM record.
        </p>

        <blockquote className="border-l-[3px] border-brand-teal pl-4 mb-16 max-w-2xl">
          <p className="font-inter text-brand-primary font-medium">
            "For event-heavy sales orgs, that's a real strategic advantage over standard
            CRM workflows."
          </p>
        </blockquote>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-slate-200">
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              className={`py-8 ${i === 0 ? "lg:pr-6" : i === STEPS.length - 1 ? "lg:pl-6" : "lg:px-6"}`}
            >
              <p
                className="font-playfair text-6xl font-bold leading-none mb-4"
                style={{ color: "rgba(34,58,94,0.10)" }}
                aria-hidden="true"
              >
                {step.num}
              </p>
              <h3 className="font-playfair text-xl font-bold text-brand-primary mb-3">
                {step.title}
              </h3>
              <p className="font-inter text-brand-steel leading-relaxed text-sm">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
