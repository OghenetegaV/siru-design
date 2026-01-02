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
      href:"/services/short-haul",
  },
  {
    title: "Designer for a Day",
    subtitle: "Our most popular journey",
    image: "/assets/images/journey/designer-for-a-day.png",
    description:
      "Day Trip is a one-day design intensive that delivers clarity, structure, and tangible progress — fast. It’s for clients who want confident decisions without committing to a full long-haul journey.",
      href:"/services/day-trip",
  },
  {
    title: "Long Haul",
    subtitle: "Fully guided interior design journey",
    image: "/assets/images/journey/long-haul.png",
    description:
      "For projects that need depth, coordination, and long-term thinking. Long Haul offers a complete end-to-end interior design service.",
      href:"/services/long-haul",
  },
];

export default function ChooseYourJourney() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-24">

        {/* Section header */}
        <div className="mx-auto max-w-[720px] text-center">
          <FadeUp>
            <h2 className="text-[56px] font-semibold text-[var(--color-ink)]">
              Choose Your Journey
            </h2>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="mt-4 text-[22px] text-[var(--color-ink)]/80">
              Whether you&apos;re seeking clarity, momentum, or full guidance,
              there&apos;s a journey designed to support you.
            </p>
          </FadeUp>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">

          {journeys.map((item, index) => (
            <FadeUp key={item.title} delay={0.15 + index * 0.1}>
              <div className="relative px-6 md:px-10">

                {/* Vertical divider (desktop only) */}
                {index !== 0 && (
                  <span className="hidden md:block absolute left-0 top-0 h-full w-px bg-[var(--color-ink)]/10" />
                )}

                <div className="flex flex-col items-center text-center">

                  {/* Title */}
                  <h3 className="text-[40px] font-semibold text-[var(--color-ink)]">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-[18px] text-[var(--color-ink)]/70">
                    {item.subtitle}
                  </p>

                  {/* Image */}
                  <div className="relative mt-6 h-[220px] w-full rounded-[16px] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Description */}
                  <p className="mt-6 text-[18px] leading-relaxed text-[var(--color-ink)]/80">
                    {item.description}
                  </p>

                  {/* CTA */}
                    <div className="mt-6">
                    <Button href={item.href}variant="secondary">
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
