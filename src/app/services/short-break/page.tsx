import ServiceDetail from "@/components/sections/services/ServiceDetail";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Short Break | Extended Design Direction | Siru Design Co",
  description:
    "Short Break — a structured interior design period allowing time to develop, refine, and test your design direction without a full long-haul commitment.",
};

export default function ShortBreakPage() {
  return (
    <ServiceDetail
      breadcrumb="Short Break"
      eyebrow="Short Break"
      title="Extended Design Direction"
      intro="More time to explore. Still a defined journey. Short Break is designed for those who value depth and refinement."
      description="It allows time to develop, refine, and test the design direction over a short, structured period — without committing to full end-to-end long haul service."
      whatFor={[
        "Clients who want more depth than a day",
        "Early concept + initial design development",
        "Projects that need breathing room, not speed",
      ]}
      whatYouGet={[
        "Concept development over an agreed period of time",
        "Refined layouts and material direction",
        "A clear, confident design framework",
      ]}
      duration="Flexible (Short structured period)"
      
      ctaLabel="Start with Short Break"
      cta="If you're looking for a confident design framework with room to evolve, a Short Break is your ideal next step."
      ctaHref="/booking/short-break"
      imageSrc="/assets/images/services/short-break.png"
      imageAlt="Refined interior design concept board by Siru Design Co"
    />
  );
}