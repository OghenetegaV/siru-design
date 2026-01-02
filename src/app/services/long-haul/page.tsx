import ServiceDetail from "@/components/sections/services/ServiceDetail";
import type { Metadata } from "next";
import FadeUp from "@/components/motion/FadeUp";

export const metadata: Metadata = {
  title: "Long Haul | Full Interior Design Journey | Siru Design Co",
  description:
    "A fully guided interior design journey for clients seeking depth, coordination, and long-term thinking. From first idea to final delivery.",
};

export default function LongHaulPage() {
  return (
    <>
      {/* Main service section */}
      <ServiceDetail
        breadcrumb="Services / Long Haul"
        eyebrow="Long Haul"
        title="A Fully Guided Design Journey"
        intro="For projects that need depth, coordination, and long-term thinking, Long Haul offers a complete end-to-end interior design service."
        description="We guide the journey from first idea to final arrival — protecting the design intent, managing complexity, and delivering spaces that work beautifully in real life."
        whatFor={[
          "Full residential or commercial projects",
          "Clients who want a trusted design partner",
          "Projects where detail, coordination, and quality matter",
        ]}
        whatYouGet={[
          "Concept through completion",
          "Full design development and coordination",
          "Ongoing guidance during delivery",
          "A considered, cohesive outcome",
        ]}
        duration="Investment tailored to scope and scale"
        cta="If you’re planning a longer journey, we’ll guide every step."
        ctaLabel="Start your journey"
        ctaHref="/call-to-action/long-haul"
        imageSrc="/assets/images/services/long-haul.png"
        imageAlt="Completed contemporary interior design project by Siru Design Co"
      />

      {/* Bottom section — Long Haul only */}
      <section className="w-full bg-[var(--color-beige)]">
        <div className="mx-auto max-w-[1027px] px-6 lg:px-12 pb-20">
          <FadeUp>
            <h3 className="text-[18px] font-medium text-[var(--color-ink)]">
              Why Clients Choose This
            </h3>

            <p className="mt-4 max-w-[720px] text-[18px] leading-relaxed text-[var(--color-ink)]/80">
              Because the value isn’t just in the design — it’s in the confidence,
              clarity, and reduced risk throughout the journey.
            </p>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
