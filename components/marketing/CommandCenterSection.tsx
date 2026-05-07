import FloorCarousel from "./FloorCarousel";

const CHECKLIST = [
  "Scan a single card or a stack of ten. Parlay parses every contact in one shot. Matching existing attendees, flagging new ones, and automatically creating records with the right company and conference association.",
  "Floor Notes let reps jot down notes in the moment, without stopping to find a record. The note is saved, timestamped, and ready to assign to the right record when there's a break in the action",
  "Assigning a Floor Note automatically creates a follow-up task and the system handles the accountability structure in the background",
  "Badge and card scans work the same way. Scan now, assign later. When the rep is ready, the same matching workflow activates",
  "Every touchpoint, note, and scan, feeds directly into the conference effectiveness metrics that leaders see after the event",
];

export default function CommandCenterSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left column */}
          <div>
            <p className="font-inter text-sm font-semibold tracking-widest uppercase text-brand-teal mb-4">
              BUILT FOR THE FLOOR
            </p>
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-brand-primary mb-6">
              Capture everything. Assign it when you have a minute.
            </h2>
            <p className="font-inter text-lg text-brand-steel mb-8 leading-relaxed">
              Most tools assume reps have time to stop and log between conversations. Parlay is built around how conferences actually work; fast, overlapping, and unstructured. Capture first. Assign later. Nothing gets lost.
            </p>
            <ul className="space-y-4 mb-8">
              {CHECKLIST.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-teal flex items-center justify-center mt-0.5">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
                      <path d="M1 4L3.5 6.5L9 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="font-inter text-brand-steel leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
            <p className="font-inter text-brand-steel italic">
              Parlay fits the rep&apos;s reality on the floor making the data actionable, not questionable.
            </p>
          </div>

          {/* Right column — carousel */}
          <div>
            <FloorCarousel />
          </div>

        </div>
      </div>
    </section>
  );
}
