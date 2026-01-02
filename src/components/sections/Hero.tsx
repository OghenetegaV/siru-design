"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/motion/FadeUp";
import ImageReveal from "@/components/motion/ImageReveal";

export default function Hero() {
  return (
    <section className="w-full bg-[var(--color-beige)] py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">

        {/* TEXT */}
        <div className="mx-auto max-w-[720px] text-center">
          <FadeUp immediate>
            <h1 className="text-[64px] font-semibold leading-tight text-[var(--color-ink)]">
              People. Place. Space.
            </h1>
          </FadeUp>

          <FadeUp immediate delay={0.1}>
            <p className="mt-6 text-[24px] font-medium leading-relaxed text-[var(--color-ink)]">
              Design that begins with people, responds to place,
              and evolves into meaningful space.
            </p>
          </FadeUp>

          <FadeUp immediate delay={0.1}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href="/services">
                Explore Our Services
              </Button>

              <Button href="/call-to-action" variant="secondary">
                Get Started Today
              </Button>
            </div>
          </FadeUp>
        </div>

        {/* IMAGES */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-[46px]">

          <ImageReveal immediate delay={0.25}>
            <div className="relative h-[360px] lg:h-[460px] rounded-[16px] overflow-hidden">
              <Image
                src="/assets/images/hero/hero-1.png"
                alt="Collaborative interior design process"
                fill
                priority
                className="object-cover"
              />
            </div>
          </ImageReveal>

          <ImageReveal immediate delay={0.35}>
            <div className="relative h-[360px] lg:h-[460px] rounded-[16px] overflow-hidden">
              <Image
                src="/assets/images/hero/hero-2.png"
                alt="Modern kitchen interior design"
                fill
                className="object-cover"
              />
            </div>
          </ImageReveal>

          <ImageReveal immediate delay={0.45}>
            <div className="relative h-[360px] lg:h-[460px] rounded-[16px] overflow-hidden">
              <Image
                src="/assets/images/hero/hero-3.png"
                alt="Refined living room interior"
                fill
                className="object-cover"
              />
            </div>
          </ImageReveal>

        </div>

      </div>
    </section>
  );
}
