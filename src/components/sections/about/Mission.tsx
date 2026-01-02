"use client";

import Image from "next/image";
import FadeUp from "@/components/motion/FadeUp";

const missions = [
  {
    title: "We Honour Individuality",
    image: "/assets/images/about/mission-1.png",
  },
  {
    title: "We Welcome Collaboration",
    image: "/assets/images/about/mission-2.png",
  },
  {
    title: "We Embrace Authenticity.",
    image: "/assets/images/about/mission-3.png",
  },
];

export default function Mission() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-24">

        {/* Heading */}
        <FadeUp>
          <h2 className="text-[48px] sm:text-[56px] font-semibold text-[var(--color-ink)]">
            Our mission is simple:
          </h2>
        </FadeUp>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {missions.map((item, index) => (
            <FadeUp key={item.title} delay={0.1 + index * 0.05}>
              <div className="overflow-hidden rounded-[8px] bg-[var(--color-brandGreen)]">
                {/* Image */}
                <div className="relative h-[320px] w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Caption */}
                <div className="px-6 py-8 text-center">
                  <p className="text-[24px] font-normal text-white">
                    {item.title}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Result text */}
        <FadeUp delay={0.2}>
          <div className="mt-12 max-w-[820px] space-y-3 text-[24px] text-[var(--color-ink)]/80">
            <p className="font-medium text-[var(--color-ink)]">
              The result?
            </p>

            <p className="italic">
              Interiors that are intentional, purpose driven and people centred.
            </p>

            <p className="font-medium text-[var(--color-ink)]">
              We don’t rush the process.
            </p>

            <p className="font-medium text-[var(--color-ink)]">
              We guide it — thoughtfully, collaboratively, and with care.
            </p>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
