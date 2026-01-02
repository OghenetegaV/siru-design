import ServiceDetail from "@/components/sections/services/ServiceDetail";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Day Trip | Designer for a Day | Siru Design Co",
  description:
    "Designer for a Day — an immersive one-day interior design experience offering clarity, structure, and confident decision-making without a long-term commitment.",
};

export default function DayTripPage() {
  return (
    <ServiceDetail
      breadcrumb="Services / Day Trip"
      eyebrow="Day Trip"
      title="Designer for a Day"
      intro="Day Trip is our most popular journey — where momentum happens. Think of it as a direct flight to design clarity."
      description="Day Trip is a one-day design intensive that delivers clarity, structure, and tangible progress. It’s for clients who want confident decisions without committing to a full long-haul journey (yet)."
      whatFor={[
        "Moving a project out of limbo",
        "Aligning stakeholders or households",
        "Unlocking a clear design direction in one day",
      ]}
      whatYouGet={[
        "Pre-session preparation and agenda",
        "A full day of focused design time",
        "Layouts, concepts, sketches, and decisions",
        "A post-day summary to carry forward",
      ]}
      duration="1 day"
      
      ctaLabel="Start with Day Trip"
      cta="If you’re ready to move forward without the long wait, a Day Trip is the smartest route."
      ctaHref="/call-to-action/day-trip"
      imageSrc="/assets/images/services/day-trip.png"
      imageAlt="Interior design session outcome from Siru Design Co Day Trip service"
    />
  );
}
