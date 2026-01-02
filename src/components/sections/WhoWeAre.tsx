"use client";

import Image from "next/image";
import FadeUp from "@/components/motion/FadeUp";

export default function WhoWeAre() {
  return (
    <section
      className="w-full"
      style={{ backgroundColor: "var(--color-brandGreen)" }}
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-8 lg:gap-12 items-center">

          {/* Text */}
          <div>
            <FadeUp>
              <h2 className="text-[56px] font-semibold leading-tight text-white">
                Who are we?
              </h2>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="mt-6 text-[22px] leading-relaxed text-white/90 text-justify">
                SiRu Design is a proudly women-led, culturally conscious,
                multi-disciplinary design studio working across architecture,
                interiors, furniture design and integrated art.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="mt-4 text-[22px] leading-relaxed text-white/90 text-justify">
                Founded by Sian and Ruth, who met early in their careers designing
                and delivering kitchens for a major Swedish retailer. After
                following separate paths across the design industry, they reunited
                to bring together their combined experience, insight, and values
                into one studio.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="mt-8">
                <a
                  href="/about"
                  className="inline-flex items-center rounded-[8px] bg-white/90 px-6 py-3 text-[14px] font-medium text- transition-opacity hover:opacity-80"
                >
                  Read Our Story
                </a>
              </div>
            </FadeUp>
          </div>

          {/* Image */}
          <FadeUp delay={0.15}>
            <div className="relative h-[420px] w-full max-w-[520px] rounded-[16px] overflow-hidden">
              <Image
                src="/assets/images/about/about-1.png"
                alt="Interior detail reflecting Siru Living design approach"
                fill
                className="object-cover"
              />
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
