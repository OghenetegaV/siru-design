"use client";

import FadeUp from "@/components/motion/FadeUp";
import Button from "@/components/ui/Button";

const journeys = [
  {
    eyebrow: "A focused design boost",
    title: "Short Haul",
    description:
      "Quick, focused advice for those seeking clarity or help with a specific challenge.",
    points: [
      "Launching into a new project",
      "Overcoming a design obstacle",
      "Expert input on key decisions",
    ],
    href: "/services/short-haul",
  },
  {
    eyebrow: "Designer for a Day",
    title: "Day Trip",
    description:
      "A full day of tailored guidance and hands-on design support.",
    points: [
      "In-depth advice and insights",
      "Tangible progress in one day",
      "A balance of strategy and direction",
    ],
    href: "/services/day-trip",
  },
  {
    eyebrow: "Extended Design Direction",
    title: "Short Break",
    description:
      "Develop and refine your design direction over a structured period without the full commitment.",
    points: [
      "Early concept development",
      "Initial design refinement",
      "Projects that need breathing room",
    ],
    href: "/services/short-break",
  },
  {
    eyebrow: "A fully guided design journey",
    title: "Long Haul",
    description:
      "Comprehensive design for those seeking a complete, end-to-end service.",
    points: [
      "Ground-up interior design",
      "Full project management",
      "Detailed, thoughtful delivery",
    ],
    href: "/services/long-haul",
  },
];

export default function ServicesJourney() {
  return (
    <section
      className="w-full bg-[var(--color-beige)]"
      aria-labelledby="services-journey-heading"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 pb-24">

        {/* Section header */}
        <FadeUp>
          <h2
            id="services-journey-heading"
            className="text-center text-[20px] font-semibold tracking-wide text-[#f17d1e] underline"
          >
            Choose Your Journey
          </h2>
        </FadeUp>

        {/* Cards - Updated to 4 columns on large screens */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {journeys.map((item, index) => (
            <FadeUp key={item.title} delay={index * 0.08}>
              <article
                className="
                  h-full
                  bg-white
                  rounded-[8px]
                  p-8
                  flex flex-col
                  shadow-sm
                  transition-shadow hover:shadow-md
                "
              >
                {/* Content Area */}
                <div className="flex-grow">
                  <p className="text-[12px] tracking-wide text-center text-[var(--color-ink)] opacity-70">
                    {item.eyebrow}
                  </p>

                  <h3 className="mt-2 text-[22px] text-center font-semibold text-[var(--color-ink)]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-ink)]/90 min-h-[60px]">
                    {item.description}
                  </p>

                  <div className="mt-6">
                    <p className="text-[14px] font-semibold text-[var(--color-ink)] uppercase tracking-tight">
                      What it’s for
                    </p>

                    <ul className="mt-3 space-y-2 text-[14px] text-[var(--color-ink)]/80 list-disc list-inside">
                      {item.points.map((point) => (
                        <li key={point} className="leading-snug">{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Button Area - Stays at bottom due to flex-grow above */}
                <div className="mt-10 text-center">
                  <Button href={item.href} variant="secondary" className="text-[14px] px-5 py-2 w-full sm:w-auto">
                    Start Your Journey
                  </Button>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
}