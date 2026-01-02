import ServiceDetail from "@/components/sections/services/ServiceDetail";

export default function ShortHaulPage() {
  return (
    <ServiceDetail
      breadcrumb="Services / Short Haul"
      eyebrow="Short Haul"
      title="A focused Design Boost"
      intro="Sometimes you don’t need a full journey — just clarity, reassurance, and expert direction."
      description="Short Haul is a light-touch design consultation service designed to help you find your bearings. Ideal if you’re stuck, starting out, or simply want to sense-check ideas, without long-term commitment."
      whatFor={[
        "Early-stage ideas or problem spaces",
        "Quick design reviews or layout advice",
        "Confidence before making key decisions",
      ]}
      whatYouGet={[
        "A focused, time-capped design session",
        "Strategic guidance tailored to you",
        "Clear next steps — no overwhelm",
      ]}
      duration="60–90 minutes"
      ctaLabel="Start with Short Haul"
      cta="Not sure where to begin?"
      ctaHref="/call-to-action"
      imageSrc="/assets/images/services/short-haul.png"
      imageAlt="Interior styled living space"
    />
  );
}
