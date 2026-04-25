const PROBLEMS = [
  "The team travels to different conferences, not knowing who talked to who",
  "Notes are scattered across memory, phones, and spreadsheets that no one checks",
  "Follow-ups fall through the cracks",
  "Multiple reps chase the same company",
  "The deal goes to whoever moves first; not who built the relationship",
];

export default function ProblemSection() {
  return (
    <section className="bg-brand-primary py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-brand-teal" aria-hidden="true" />
          <p className="font-inter text-lg font-semibold tracking-widest uppercase text-brand-teal">
            The real problem
          </p>
        </div>

        <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-6 max-w-3xl">
          Conferences create more problems than pipeline.
        </h2>

        <p className="font-inter text-lg text-white/50 mb-12 max-w-2xl">
          You spend thousands to show up. Your team has great conversations. And then...
        </p>

        <div className="space-y-3 mb-12">
          {PROBLEMS.map((problem) => (
            <div
              key={problem}
              className="flex items-start gap-4 p-5 rounded-lg border border-white/[0.08] bg-white/[0.04]"
            >
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center mt-0.5">
                <div className="w-2 h-2 rounded-full bg-red-400" />
              </div>
              <p className="font-inter text-white/75 leading-relaxed">{problem}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="font-inter text-white/40 italic">
            Momentum fades when the conference ends and the cylce starts again with the next one 
          </p>
        </div>
      </div>
    </section>
  );
}
