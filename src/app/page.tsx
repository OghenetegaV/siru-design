import type { Metadata } from "next";

import Hero from "@/components/sections/Hero";
import WhoWeAre from "@/components/sections/WhoWeAre";
import ChooseYourJourney from "@/components/sections/ChooseYourJourney";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Testimonials from "@/components/sections/Testimonials";
import StartYourJourney from "@/components/sections/StartYourJourney";
import BlogPreview from "@/components/sections/BlogPreview";
import MailingList from "@/components/sections/MailingList";
import FAQ from "@/components/sections/FAQ";

/* ----------------------------------------
   SEO METADATA — HOME PAGE
----------------------------------------- */
export const metadata: Metadata = {
  title: {
    default: "Siru Design Co | Thoughtful Interior Design Studio",
    template: "%s | Siru Design Co",
  },

  description:
    "Siru Design Co is a women-led interior design studio creating thoughtful, human-centred spaces rooted in people, place, and purpose. Architecture, interiors, furniture, and integrated art.",

  keywords: [
    "interior design studio",
    "interior designer London",
    "women-led design studio",
    "residential interior design",
    "commercial interior design",
    "furniture design studio",
    "architecture and interiors",
    "Siru Design Co",
  ],

  authors: [{ name: "Siru Design Co" }],
  creator: "Siru Design Co",
  publisher: "Siru Design Co",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://sirudesign.co",
  },

  openGraph: {
    type: "website",
    url: "https://sirudesign.co",
    title: "Siru Design Co | Thoughtful Interior Design Studio",
    description:
      "A women-led interior design studio creating meaningful spaces rooted in people, place, and purpose.",
    siteName: "Siru Design Co",
    images: [
      {
        url: "/assets/images/og-image.jpg", // must live in /public
        width: 1200,
        height: 630,
        alt: "Siru Design Co interior design studio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Siru Design Co | Thoughtful Interior Design Studio",
    description:
      "Women-led interior design studio crafting meaningful spaces across architecture, interiors, and furniture.",
    images: ["/assets/images/og-image.jpg"],
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-touch-icon.png",
  },

  metadataBase: new URL("https://sirudesign.co"),
};

/* ----------------------------------------
   PAGE
----------------------------------------- */
export default function HomePage() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <ChooseYourJourney />
      <FeaturedProjects />
      <Testimonials />
      <StartYourJourney />
      <BlogPreview />
      <MailingList />
      <FAQ />
    </>
  );
}
