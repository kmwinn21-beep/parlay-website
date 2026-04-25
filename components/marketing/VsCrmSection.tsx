const CRM_QUESTIONS = [
  "Who is the account owner?",
  "What stage is the deal in?",
  "When was last activity?",
];

const PARLAY_ANSWERS = [
  "Which reps should prioritize which companies—and why?",
  "Did relationship depth actually improve at this conference?",
  "Which reps converted conversations into follow-through?",
  "Where are the ghosted accounts and coverage gaps?",
];

export default function VsCrmSection() {
  return (
    <section className="bg-brand-light py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="font-inter text-sm font-semibold tracking-widest uppercase text-brand-teal mb-4">
          Why not just use your CRM
        </p>

        <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-brand-primary mb-6 max-w-4xl">
          CRMs show pipeline state. Parlay enables conference execution.
        </h2>

        <p className="font-inter text-lg text-brand-steel mb-12 max-w-3xl">
          A CRM shows you who owns the account, deal stage, & last activity. Parlay shows what your team should do
          before, during, and after every conference, and whether it actually worked.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-slate-200 p-8">
            <p className="font-inter text-xs font-semibold tracking-widest uppercase text-brand-steel mb-6">
              Your CRM asks
            </p>
            <div className="space-y-3">
              {CRM_QUESTIONS.map((q) => (
                <div key={q} className="px-4 py-3 border border-slate-200 rounded-lg">
                  <p className="font-inter text-brand-primary">{q}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-brand-primary rounded-xl p-8">
            <p className="font-inter text-xs font-semibold tracking-widest uppercase text-brand-teal mb-6">
              Parlay answers
            </p>
            <div className="space-y-3">
              {PARLAY_ANSWERS.map((q) => (
                <div key={q} className="px-4 py-3 border border-white/[0.08] rounded-lg">
                  <p className="font-inter text-white/85 leading-relaxed">{q}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
