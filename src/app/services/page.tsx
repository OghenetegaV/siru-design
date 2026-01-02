import { Metadata } from "next";
import ServicesHero from "@/components/sections/services/ServicesHero";
import ServicesJourney from "@/components/sections/services/ServicesJourney";
import ServicesCTA from "@/components/sections/services/ServicesCTA";

export const metadata: Metadata = {
  title: "Interior Design Services | Siru Living",
  description:
    "Discover Siru Living’s interior design services — from focused consultations to full design journeys, rooted in people, place, and purpose.",
  keywords: [
    "interior design services",
    "residential interior design",
    "commercial interior design",
    "design consultation",
    "interior designer London",
    "Siru Living services",
  ],
  openGraph: {
    title: "Interior Design Services | Siru Living",
    description:
      "Every great space begins with a journey. Explore Siru Living’s interior design services.",
    url: "https://siruliving.com/services",
    siteName: "Siru Living",
    images: [
      {
        url: "/assets/images/services/services-hero.png",
        width: 1200,
        height: 630,
        alt: "Interior design services by Siru Living",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Design Services | Siru Living",
    description:
      "Explore interior design services crafted with intention, clarity, and care.",
    images: ["/assets/images/services/services-hero.png"],
  },
  alternates: {
    canonical: "https://siruliving.com/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="w-full bg-[var(--color-beige)]">
      <ServicesHero />
      <ServicesJourney />
      <ServicesCTA />

    </main>
  );
}
