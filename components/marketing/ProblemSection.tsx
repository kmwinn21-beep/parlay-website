const PROBLEMS = [
  "Your team attends 12 conferences a year. You can't rank them by ROI. You're making next year's calendar decisions on instinct.",
  "You know your team had \"a lot of good conversations\" at the last event. You have no idea if relationship depth actually improved.",
  "2,300 attendees were at the last conference. Your team engaged 54. You don't know if those were the right 54.",
  "Three reps touched the same company at the same event. No one knew. No one does.",
  "Your event coordinator is asking which conferences to book for next year. You're going to base that decision on vibes.",
  "Your CRM has \"source: conference\" on 80 contacts from Q1. That's the full extent of your conference attribution.",
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
          Conferences - the only major revenue investment without a dedicated measurement system.
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
            Momentum fades when the conference ends and then cylce restarts with the next one 
          </p>
        </div>
      </div>
    </section>
  );
}
