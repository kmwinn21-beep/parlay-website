import PreConferenceHeroMock from "./PreConferenceHeroMock";

const BULLETS = [
  "Parlay scores the conference itself, evaluating whether the attendee list supports the stated strategy, and flagging misalignment before it costs resources.",
  "Your pipeline goal gets stress-tested against reality. Parlay compares what you need to generate against who is actually attending so expectations are calibrated before the event, not after.",
  "Every target is ranked, with a recommended action and a breakdown of which buyers are in the room.",
  "Required pipeline is modeled by tier with adjustable conversion rates so your team is working toward a number that reflects reality, not optimism.",
];

export default function CardScanSection() {
  return (
    <section className="bg-brand-primary py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-start">
          <div>
            <p className="font-inter text-sm font-semibold tracking-widest uppercase text-brand-teal mb-4">
              Pre-Conference Intelligence
            </p>
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-6">
              Know what the conference can deliver, before anyone boards a plane
            </h2>
            <p className="font-inter text-lg mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              Parlay&apos;s pre-conference review gives revenue leaders and reps a complete intelligence picture before the first session starts.
            </p>
            <ul className="space-y-4">
              {BULLETS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-brand-teal mt-2.5" />
                  <p className="font-inter text-white/80 leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column — Pre-Conference Review mock */}
          <PreConferenceHeroMock />
        </div>
      </div>
    </section>
  );
}
