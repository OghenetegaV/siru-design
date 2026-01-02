"use client";

import Image from "next/image";
import FadeUp from "@/components/motion/FadeUp";

export default function BrandManifesto() {
  return (
    <section
      className="w-full"
      style={{ backgroundColor: "var(--color-brandGreen)" }}
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-28">

        <FadeUp>
          <div className="w-full text-white">

            {/* Quote icon */}
            <div className="mb-12">
              <Image
                src="/assets/icons/quote-icon.svg"
                alt="Quote icon"
                width={95}
                height={95}
                className="opacity-70"
              />
            </div>

            {/* Manifesto text */}
            <div className="space-y-5 text-[24px] italic leading-relaxed text-white/85">
              <p className="italic">
                We approach design, the way we approach travel — with curiosity,
                intention, and respect for context.
              </p>

              <p>
                Inspired by a love of global journeys, cultures, and places, our
                work is rooted in the belief that great spaces are not just
                designed, but experienced.
              </p>

              <p>
                Whether working with developers, brands, or private clients, we
                balance creativity with commercial understanding — delivering
                interiors that are both emotionally engaging and operationally
                sound.
              </p>

              <p>
                We don’t believe in one-size-fits-all solutions.
              </p>

              <p>
                We believe in considered design journeys that lead to meaningful,
                lasting destinations.
              </p>
            </div>

            {/* Attribution */}
            <p className="mt-12 text-[32px] italic font-medium text-white/90">
              Brand Manifesto – Design Philosophy
            </p>

          </div>
        </FadeUp>

      </div>
    </section>
  );
}
