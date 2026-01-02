"use client";

import Image from "next/image";
import FadeUp from "@/components/motion/FadeUp";
import Button from "@/components/ui/Button";

export default function ServicesCTA() {
  return (
    <section className="w-full bg-[var(--color-beige)]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 pb-24">

        <FadeUp>
          <div
            className="
              bg-white
              rounded-[8px]
              px-8 py-10
              sm:px-12 sm:py-12
              grid grid-cols-1 md:grid-cols-[1.8fr_1fr]
              gap-10
              items-center
            "
          >
            {/* LEFT — Text (≈65%) */}
            <div>
              <h2 className="text-[24px] sm:text-[28px] font-semibold text-[var(--color-ink)]">
                Not sure which journey is right?
              </h2>

              <p className="mt-3 text-[18px] leading-relaxed text-[var(--color-ink)]/70">
                Many clients begin with a Short Haul or Day Trip before deciding
                on a longer journey. We’ll help you choose the route that fits.
              </p>

              <div className="mt-6">
                <Button
                  href="/contact"
                  className="text-[14px] px-5 py-2"
                >
                  Help Me Choose My Journey
                </Button>
              </div>
            </div>

            {/* RIGHT — Image (≈35%) */}
            <div className="flex justify-end">
              <div className="relative w-full max-w-[280px] aspect-[4/3] rounded-[12px] overflow-hidden">
                <Image
                  src="/assets/images/services/services-cta.png"
                  alt="Design consultation at Siru Living studio"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 35vw"
                />
              </div>
            </div>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
