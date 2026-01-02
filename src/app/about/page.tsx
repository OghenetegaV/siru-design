import BrandManifesto from "@/components/sections/about/BrandManifesto";
import Mission from "@/components/sections/about/Mission";
import WhoWeAreAbout from "@/components/sections/about/WhoWeAreAbout";

export const metadata = {
  title: "About Us | Siru Design Co",
  description:
    "Learn more about Siru Design Co — a women-led interior design studio guided by people, place, and purpose.",
};

export default function AboutPage() {
  return (
    <main>
      <WhoWeAreAbout />
      <Mission />
      <BrandManifesto />
    </main>
  );
}
