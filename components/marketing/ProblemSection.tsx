const PROBLEMS = [
  "Marketing has attribution models. Sales has pipeline reporting. Conferences have a debrief meeting where everyone agrees it went well.",
  "Travel, sponsorships, booth fees, dinners, hotels. The invoice is precise to the dollar. The results? Depends on who you ask.",
  "The conference floor has no operating system. Reps improvise. Contacts get lost. Overlap happens. Nobody knows until a week later.",
  "A conference can create pipeline, strengthen relationships, surface market signals, and support customers; sometimes all in the same conversation. Spreadsheets and business cards were never built to capture any of it.",
  "Sales wants pipeline. Marketing wants brand. Customer success wants face time. Everyone attends the same conference and measures a completely different thing.",
  "The most expensive part of a conference isn&lsquo;t the sponsorship fee. It&lsquo;s the pipeline that was almost created.",
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
          The only major revenue investment without a dedicated measurement system.
        </h2>

        <p className="font-inter text-lg text-white/50 mb-12 max-w-2xl">
          Revenue leaders track every click, every deal stage, and every rep activity down to the minute. But a $60,000 conference gets measured by how reps felt the dinners went.
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
            It's not a people problem. There&apos;s just never been a system built to catch any of it. 
          </p>
        </div>
      </div>
    </section>
  );
}
