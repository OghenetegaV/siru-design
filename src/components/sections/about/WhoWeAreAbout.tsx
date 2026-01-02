import Image from "next/image";
import FadeUp from "@/components/motion/FadeUp";

export default function AboutPage() {
  return (
    <main className="w-full bg-[var(--color-beige)]">
      <section className="mx-auto max-w-[1440px] px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-start">

          {/* LEFT — Images */}
          <div
            className="
              grid gap-8
              sm:grid-cols-2
              lg:grid-cols-[auto_1fr]
              items-center
              justify-center
            "
          >
            {/* Portraits column */}
            <div className="flex flex-col gap-6 items-center lg:items-start">
              <FadeUp>
                <Image
                  src="/assets/images/about/about-portrait-1.png"
                  alt="Founder portrait outdoors"
                  width={300}
                  height={420}
                  className="rounded-[12px]"
                />
              </FadeUp>

              <FadeUp delay={0.1}>
                <Image
                  src="/assets/images/about/about-interior.png"
                  alt="Interior styling vignette"
                  width={300}
                  height={420}
                  className="rounded-[12px]"
                />
              </FadeUp>
            </div>

            {/* Second portrait — centered beside on desktop, stacked on mobile */}
            <FadeUp delay={0.2}>
              <div className="flex justify-center lg:justify-center">
                <Image
                  src="/assets/images/about/about-portrait-2.png"
                  alt="Founder portrait close-up"
                  width={300}
                  height={420}
                  className="rounded-[12px]"
                />
              </div>
            </FadeUp>
          </div>

          {/* RIGHT — Text column */}
          <div className="max-w-[640px] mx-auto lg:mx-0">
            <FadeUp>
              <h1 className="text-[40px] sm:text-[48px] lg:text-[56px] font-semibold text-[var(--color-ink)] text-center lg:text-right">
                Who are we?
              </h1>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="mt-6 text-[18px] sm:text-[19px] lg:text-[20px] leading-relaxed text-[var(--color-ink)]/80 text-left lg:text-justify">
                SiRu Design is a proudly women-led, culturally conscious,
                multi-disciplinary design studio working across architecture,
                interiors, furniture design and integrated art.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="mt-5 text-[18px] sm:text-[19px] lg:text-[20px] leading-relaxed text-[var(--color-ink)]/80">
                Founded by Sian and Ruth, who met early in their careers designing
                and delivering kitchens for a major Swedish retailer. After
                following separate paths across the design industry, they reunited
                to bring together their combined experience, insight, and values
                into one studio.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p className="mt-5 text-[18px] sm:text-[19px] lg:text-[20px] leading-relaxed text-[var(--color-ink)]/80">
                At our core, we are a collective of diverse thinkers who value
                community and collaboration. We stay closely connected to what’s
                happening across the landscape of interiors, both culturally and
                socially — allowing us to create work that feels relevant,
                considered, and human.
              </p>
            </FadeUp>
          </div>

        </div>
      </section>
    </main>
  );
}
