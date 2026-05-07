import PreConferenceHeroMock from "./PreConferenceHeroMock";

const BULLETS = [
  "Scan a business card or badge. Parlay extracts name, title, company, email, and phone instantly — no typing, no lost cards",
  "Smart matching finds existing records or creates new ones in one click. No duplicates, no manual cleanup",
  "The contact is immediately tied to the conference, the rep, and the right company record",
  "Every scan feeds directly into relationship health scores, rep performance analytics, and the conference effectiveness calculation",
];

export default function CardScanSection() {
  return (
    <section className="bg-brand-primary py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-start">
          <div>
            <p className="font-inter text-sm font-semibold tracking-widest uppercase text-brand-teal mb-4">
              Field capture
            </p>
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-6">
              The data leaders need starts with the rep on the floor
            </h2>
            <p className="font-inter text-lg mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              Conference floors move fast. Parlay&apos;s AI scanning and matching engine turns chaotic badge and card capture into structured data instantly — and every scan feeds the scoring engines that leaders rely on after the conference.
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
