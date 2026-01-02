"use client";

import Image from "next/image";
import FadeUp from "@/components/motion/FadeUp";

export default function ServicesHero() {
  return (
    <section className="w-full bg-[var(--color-beige)]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-14">
        <div className="mx-auto max-w-[760px]">
          {/* IMAGE (separate, its own block) */}
          <FadeUp>
            <div
              className="
                relative w-full
                h-[170px] sm:h-[200px]
                overflow-hidden rounded-[8px]
              "
            >
              <Image
                src="/assets/images/services/services-hero.png"
                alt="Interior space designed by Siru Living"
                fill
                priority
                className="object-cover"
              />
            </div>
          </FadeUp>

          {/* TEXT CARD (separate container under image) */}
          <FadeUp delay={0.08}>
            <div
              className="
                mt-6
                rounded-[12px]
                px-8 sm:px-12
                py-8
                text-center
              "
            >
              <h1 className="text-[18px] sm:text-[20px] font-semibold text-[var(--color-ink)]">
                Every Great Space Begins with a Journey
              </h1>

              <p className="mt-3 text-[12px] sm:text-[13px] leading-relaxed text-[var(--color-ink)]/70 max-w-[560px] mx-auto">
                Every project starts with intention — needs, a sense of possibility.
                Our services are designed as journeys, offering clarity and confidence
                at every stage.
              </p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
