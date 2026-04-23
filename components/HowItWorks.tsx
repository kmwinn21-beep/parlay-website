const STEPS = [
  {
    number: "01",
    title: "Scan",
    description:
      "Open Parlay at any conference or networking event. Point your camera at a business card, badge, or QR code. Contact details are captured and stored instantly — no typing, no business card pile at home.",
    detail: "Works offline. Syncs when you have signal.",
  },
  {
    number: "02",
    title: "Connect",
    description:
      "Parlay enriches the contact with LinkedIn profile, job history, and mutual connections. Log your conversation topics, shared interests, and any follow-up promises while they're fresh in your mind.",
    detail: "Smart deduplication catches repeat encounters.",
  },
  {
    number: "03",
    title: "Follow Through",
    description:
      "Parlay surfaces the right follow-ups at the right time. Send personalized outreach, track email replies, and move contacts through your pipeline — from first scan to closed deal.",
    detail: "Integrates with HubSpot, Salesforce, and Gmail.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-inter text-sm font-semibold tracking-widest uppercase text-brand-teal mb-3">
            How It Works
          </p>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-brand-primary mb-4">
            Three steps to a stronger network
          </h2>
          <p className="font-inter text-lg text-brand-steel max-w-2xl mx-auto">
            From the moment you meet someone to the moment they become a customer — Parlay is with you at every step.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line — desktop */}
          <div
            className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-teal/30 to-transparent"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
            {STEPS.map((step, i) => (
              <div key={step.number} className="flex flex-col items-center lg:items-start text-center lg:text-left">
                {/* Number bubble */}
                <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary text-white font-playfair text-2xl font-bold mb-6 shrink-0 z-10">
                  {step.number}
                  {/* Teal accent dot */}
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-brand-teal" aria-hidden="true" />
                </div>

                <h3 className="font-playfair text-2xl font-bold text-brand-primary mb-3">
                  {step.title}
                </h3>
                <p className="font-inter text-brand-steel leading-relaxed mb-4">
                  {step.description}
                </p>
                <p className="font-inter text-sm font-medium text-brand-teal">
                  {step.detail}
                </p>

                {/* Mobile step connector */}
                {i < STEPS.length - 1 && (
                  <div
                    className="lg:hidden mt-8 w-px h-12 bg-gradient-to-b from-brand-teal/40 to-transparent mx-auto"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Demo placeholder */}
        <div id="demo" className="mt-20 scroll-mt-20" />
      </div>
    </section>
  );
}
