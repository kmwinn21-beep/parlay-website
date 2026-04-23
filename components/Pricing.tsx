interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  highlighted: boolean;
  badge?: string;
}

const PLANS: Plan[] = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    description: "For individuals exploring Parlay at their first few events.",
    features: [
      "Up to 25 contacts per event",
      "Business card scanning",
      "Manual follow-up reminders",
      "Conversation notes",
      "1 active event",
    ],
    cta: "Get Started Free",
    href: "https://app.useparlay.app/signup",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    description: "For active networkers who attend multiple events and need automated follow-through.",
    features: [
      "Unlimited contacts",
      "Unlimited events",
      "AI-powered contact enrichment",
      "Automated follow-up sequences",
      "CRM sync (HubSpot & Salesforce)",
      "Email tracking",
      "Priority support",
    ],
    cta: "Start Free Trial",
    href: "https://app.useparlay.app/signup?plan=pro",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Team",
    price: "$79",
    period: "per month",
    description: "For sales and BD teams who need shared intelligence across every event.",
    features: [
      "Everything in Pro",
      "Up to 10 team members",
      "Shared contact database",
      "Team activity feed",
      "Analytics dashboard",
      "Custom integrations",
      "Dedicated onboarding",
    ],
    cta: "Contact Sales",
    href: "https://app.useparlay.app/contact-sales",
    highlighted: false,
  },
];

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="shrink-0"
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="7" fill="#34D399" fillOpacity="0.15" />
      <path
        d="M5 8l2 2 4-4"
        stroke="#34D399"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-inter text-sm font-semibold tracking-widest uppercase text-brand-teal mb-3">
            Pricing
          </p>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-brand-primary mb-4">
            Simple, honest pricing
          </h2>
          <p className="font-inter text-lg text-brand-steel max-w-xl mx-auto">
            Start free. Upgrade when your network — and your results — demand more.
          </p>
        </div>

        {/* Plan cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col h-full ${
                plan.highlighted
                  ? "bg-brand-primary text-white shadow-2xl ring-2 ring-brand-teal scale-[1.02]"
                  : "bg-brand-light border border-gray-200 hover:border-brand-glow hover:shadow-md transition-all duration-200"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="font-inter text-xs font-semibold px-3 py-1 rounded-full bg-brand-teal text-brand-charcoal">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan name */}
              <p
                className={`font-inter text-sm font-semibold tracking-wide uppercase mb-3 ${
                  plan.highlighted ? "text-brand-glow" : "text-brand-secondary"
                }`}
              >
                {plan.name}
              </p>

              {/* Price */}
              <div className="flex items-end gap-1 mb-2">
                <span
                  className={`font-playfair text-5xl font-bold ${
                    plan.highlighted ? "text-white" : "text-brand-primary"
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`font-inter text-sm mb-2 ${
                    plan.highlighted ? "text-white/60" : "text-brand-steel"
                  }`}
                >
                  /{plan.period}
                </span>
              </div>

              <p
                className={`font-inter text-sm leading-relaxed mb-6 ${
                  plan.highlighted ? "text-white/70" : "text-brand-steel"
                }`}
              >
                {plan.description}
              </p>

              {/* CTA */}
              <a
                href={plan.href}
                className={`block text-center font-inter font-semibold py-3 px-6 rounded-lg transition-colors duration-200 mb-8 ${
                  plan.highlighted
                    ? "bg-brand-teal text-brand-charcoal hover:bg-brand-glow"
                    : "bg-brand-primary text-white hover:bg-brand-secondary"
                }`}
              >
                {plan.cta}
              </a>

              {/* Divider */}
              <div
                className={`border-t mb-6 ${
                  plan.highlighted ? "border-white/10" : "border-gray-200"
                }`}
              />

              {/* Features */}
              <ul className="space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckIcon />
                    <span
                      className={`font-inter text-sm ${
                        plan.highlighted ? "text-white/85" : "text-brand-steel"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center font-inter text-sm text-brand-steel/70 mt-10">
          All plans include a 14-day free trial of Pro features. No credit card required.
        </p>
      </div>
    </section>
  );
}
