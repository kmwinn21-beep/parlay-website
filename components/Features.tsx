function IconCardScan() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="4" y="9" width="24" height="16" rx="2" stroke="#34D399" strokeWidth="2" />
      <line x1="4" y1="14" x2="28" y2="14" stroke="#34D399" strokeWidth="1.5" />
      <circle cx="9" cy="19" r="1.5" fill="#34D399" />
      <rect x="13" y="18" width="8" height="1.5" rx="0.75" fill="#34D399" />
      <rect x="13" y="21" width="5" height="1.5" rx="0.75" fill="#34D399" />
      <path d="M2 6V4h3" stroke="#6EE7B7" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M30 6V4h-3" stroke="#6EE7B7" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M2 26v2h3" stroke="#6EE7B7" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M30 26v2h-3" stroke="#6EE7B7" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconNetwork() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="4" fill="#34D399" />
      <circle cx="6" cy="8" r="3" stroke="#34D399" strokeWidth="1.5" />
      <circle cx="26" cy="8" r="3" stroke="#34D399" strokeWidth="1.5" />
      <circle cx="6" cy="24" r="3" stroke="#34D399" strokeWidth="1.5" />
      <circle cx="26" cy="24" r="3" stroke="#34D399" strokeWidth="1.5" />
      <line x1="12.2" y1="13.6" x2="8.5" y2="10.2" stroke="#6EE7B7" strokeWidth="1.5" />
      <line x1="19.8" y1="13.6" x2="23.5" y2="10.2" stroke="#6EE7B7" strokeWidth="1.5" />
      <line x1="12.2" y1="18.4" x2="8.5" y2="21.8" stroke="#6EE7B7" strokeWidth="1.5" />
      <line x1="19.8" y1="18.4" x2="23.5" y2="21.8" stroke="#6EE7B7" strokeWidth="1.5" />
    </svg>
  );
}

function IconReminder() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="11" stroke="#34D399" strokeWidth="2" />
      <path d="M16 9v7l4 4" stroke="#34D399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 5l2 2M25 5l-2 2" stroke="#6EE7B7" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconContext() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M6 8C6 6.9 6.9 6 8 6h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H18l-4 4-4-4H8c-1.1 0-2-.9-2-2V8z"
        stroke="#34D399"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <line x1="11" y1="12" x2="21" y2="12" stroke="#6EE7B7" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="11" y1="16" x2="18" y2="16" stroke="#6EE7B7" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FEATURES: Feature[] = [
  {
    icon: <IconCardScan />,
    title: "Instant Card Capture",
    description:
      "Point your phone at any business card or event badge. Parlay extracts name, company, role, and contact details in seconds — no manual typing.",
  },
  {
    icon: <IconNetwork />,
    title: "Relationship Mapping",
    description:
      "Visualize your growing network as a live graph. See who you met where, how connections overlap, and which relationships need attention.",
  },
  {
    icon: <IconReminder />,
    title: "Follow-Up Automation",
    description:
      "Set follow-up reminders the moment you scan a card. Parlay surfaces the right contacts at the right time so nothing slips through the cracks.",
  },
  {
    icon: <IconContext />,
    title: "Conversation Context",
    description:
      "Log topics, notes, and shared interests right after each conversation. When you reconnect, you'll remember exactly what matters to them.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-brand-light py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-inter text-sm font-semibold tracking-widest uppercase text-brand-teal mb-3">
            Features
          </p>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-brand-primary mb-4">
            Built for the conference floor
          </h2>
          <p className="font-inter text-lg text-brand-steel max-w-2xl mx-auto">
            Every feature is designed around the reality of in-person events — fast, frictionless, and built to survive a crowded conference hall.
          </p>
        </div>

        {/* 2×2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:border-brand-glow transition-all duration-200 group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-brand-primary/5 group-hover:bg-brand-primary/10 transition-colors duration-200 mb-5">
                {feature.icon}
              </div>
              <h3 className="font-playfair text-xl font-bold text-brand-primary mb-3">
                {feature.title}
              </h3>
              <p className="font-inter text-brand-steel leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
