const STEPS = [
  {
    num: "01",
    title: "Plan",
    body: "Before the conference, Parlay's scoring engine has already ranked every attendee 0–100 and identified your ICP targets. Every rep walks in knowing exactly who to engage and why — not a gut feeling. A score.",
  },
  {
    num: "02",
    title: "Execute",
    body: "AI card and badge scanning. Touchpoint logging. Meeting notes. Real-time rep visibility. Simple enough to use on the floor, structured enough to feed the analytics. The data enters the system without anyone thinking about it.",
  },
  {
    num: "03",
    title: "Score",
    body: "Four scoring engines evaluate what happened. Relationship health scores update. The Conference Effectiveness Score calculates across Sales Execution, Audience Quality, and Cost Efficiency. Leadership has the full picture within hours of the last session.",
  },
  {
    num: "04",
    title: "Improve",
    body: "Relationship trajectories build. Efficiency rankings accumulate. Your conference calendar starts to optimize itself — based on data from every event you've ever attended, not instinct about which ones felt good.",
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
          A closed-loop intelligence system for conference revenue
        </h2>

        <p className="font-inter text-lg text-brand-steel mb-10 max-w-3xl">
          Parlay runs four scoring engines across the full conference lifecycle. The intelligence is what leaders buy. The ease of use is what makes the data real.
        </p>

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
