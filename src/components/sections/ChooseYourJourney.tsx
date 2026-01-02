"use client";

import Image from "next/image";
import FadeUp from "@/components/motion/FadeUp";
import Button from "../ui/Button";

const journeys = [
  {
    title: "Short Haul",
    subtitle: "A focused design boost",
    image: "/assets/images/journey/short-haul.png",
    description:
      "Short Haul is a light-touch design consultation service designed to help you find your bearings. Ideal if you're stuck, starting out, or simply want to sense-check ideas without long-term commitment.",
    href: "/services/short-haul",
  },
  {
    title: "Day Trip",
    subtitle: "Our most popular journey",
    image: "/assets/images/journey/day-trip.png",
    description:
      "Day Trip is a one-day design intensive that delivers clarity, structure, and tangible progress — fast. It’s for clients who want confident decisions without committing to a full long-haul journey.",
    href: "/services/day-trip",
  },
  {
    title: "Short Break",
    subtitle: "Extended Design Direction",
    image: "/assets/images/journey/short-break.png", 
    description:
      "Allows time to develop, refine, and test the design direction over a short, structured period — without committing to full end-to-end long haul service. Ideal for early concept development.",
    href: "/services/short-break",
  },
  {
    title: "Long Haul",
    subtitle: "Fully guided interior design journey",
    image: "/assets/images/journey/long-haul.png",
    description:
      "For projects that need depth, coordination, and long-term thinking. Long Haul offers a complete end-to-end interior design service for those seeking full guidance.",
    href: "/services/long-haul",
  },
];

export default function ChooseYourJourney() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-24">

        {/* Section header */}
        <div className="mx-auto max-w-[720px] text-center">
          <FadeUp>
            <h2 className="text-[44px] md:text-[56px] font-semibold text-[var(--color-ink)] leading-tight">
              Choose Your Journey
            </h2>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="mt-4 text-[18px] md:text-[22px] text-[var(--color-ink)]/80">
              Whether you&apos;re seeking clarity, momentum, or full guidance,
              there&apos;s a journey designed to support you.
            </p>
          </FadeUp>
        </div>

        {/* Cards Grid - Adjusted to grid-cols-4 for desktop */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-y-0">

          {journeys.map((item, index) => (
            <FadeUp key={item.title} delay={0.15 + index * 0.1}>
              <div className="relative px-4 md:px-6 h-full">

                {/* Vertical divider (visible on lg screens only for the 4-column layout) */}
                {index !== 0 && (
                  <span className="hidden lg:block absolute left-0 top-0 h-full w-px bg-[var(--color-ink)]/10" />
                )}

                <div className="flex flex-col items-center text-center h-full">

                  {/* Title */}
                  <h3 className="text-[32px] xl:text-[40px] font-semibold text-[var(--color-ink)] leading-tight">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-[16px] xl:text-[18px] text-[var(--color-ink)]/70 min-h-[54px] flex items-center">
                    {item.subtitle}
                  </p>

                  {/* Image */}
                  <div className="relative mt-6 h-[200px] w-full rounded-[16px] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Description */}
                  <p className="mt-6 text-[16px] xl:text-[17px] leading-relaxed text-[var(--color-ink)]/80 flex-grow">
                    {item.description}
                  </p>

                  {/* CTA */}
                  <div className="mt-8">
                    <Button href={item.href} variant="secondary">
                      Learn More
                    </Button>
                  </div>

                </div>
              </div>
            </FadeUp>
          ))}

        </div>

      </div>
    </section>
  );
}