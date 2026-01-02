import "./globals.css";
import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-bricolage",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sirudesign.co"),

  title: {
    default: "Siru Design Co | Interior Design Studio",
    template: "%s | Siru Design Co",
  },

  description:
    "Siru Design Co is a women-led interior design studio creating thoughtful, people-centred spaces rooted in place, purpose, and cultural context.",

  applicationName: "Siru Design Co",

  keywords: [
    "interior design studio",
    "London interior designers",
    "residential interior design",
    "commercial interior design",
    "women led design studio",
    "bespoke interiors",
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
    canonical: "/",
  },

  icons: {
    icon: "/icon.png",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://sirudesign.co",
    siteName: "Siru Design Co",
    title: "Siru Design Co | Interior Design Studio",
    description:
      "Thoughtful interior design guided by people, place, and purpose.",
    images: [
      {
        url: "/assets/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Siru Design Co interior design studio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Siru Design Co | Interior Design Studio",
    description:
      "Thoughtful, people-centred interior design rooted in place and purpose.",
    images: ["/assets/images/og-image.jpg"],
  },

  category: "Interior Design",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={bricolage.variable}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
