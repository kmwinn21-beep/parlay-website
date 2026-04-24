const PILLARS = [
  {
    num: "01",
    title: "Instant card capture",
    body: "Point your phone at any business card or badge. AI extracts name, company, role, and contact details in seconds—no typing, no lost cards.",
  },
  {
    num: "02",
    title: "Ownership, not chaos",
    body: "Every interaction is tied to the right rep, company, and conference. No duplication. No overlap. No one claiming a relationship they didn't build.",
  },
  {
    num: "03",
    title: "Follow-through built in",
    body: "Notes become follow-ups. Forms create records and assign tasks. Your team leaves with clear next steps—not a cleanup project.",
  },
  {
    num: "04",
    title: "Pre-conference intelligence",
    body: "A planning cockpit—not just reporting. ICP coverage, relationship gaps, meeting assignments—all surfaced before the conference opens.",
  },
  {
    num: "05",
    title: "Relationship health scoring",
    body: "Depth scores built from meetings, outcomes, notes, social attendance, and follow-up completion. Ghost penalties applied when contacts go dark.",
  },
  {
    num: "06",
    title: "Multi-conference continuity",
    body: "Relationship trajectory builds across every conference—not just the last touch. Momentum compounds. Starting from scratch stops.",
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
          Six things Parlay does that your CRM doesn&apos;t
        </h2>

        <p className="font-inter text-lg text-brand-steel mb-12 max-w-2xl">
          Built conference-native. Not an add-on. Not a workaround.
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
