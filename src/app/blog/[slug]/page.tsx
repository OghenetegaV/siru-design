import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Mock data to match your screenshot content
const postData = {
  title: "Design as a Journey: Why Every Space Deserves Intention",
  date: "12th October 2025",
  image: "/assets/images/blog/journey-hero.jpg",
  content: [
    {
      text: "Great design doesn't begin with finishes, furniture, or floor plans. It begins with intention.",
    },
    {
      text: "At Siru Design Co, we approach interiors the same way we approach travel — with curiosity, care, and respect for context. Every project starts with a reason for the journey: a need to gather, to rest, to create, or to grow. Our role is to understand that purpose before shaping the space around it.",
    },
    {
      heading: "Starting with People",
      text: "People sit at the heart of every space we design. How a room is used, how it feels at different times of day, and how it supports the lives unfolding within it are far more important than trends or aesthetics alone. By listening closely to our clients — whether developers, brands, or private homeowners — we uncover the stories, habits, and ambitions that inform meaningful design decisions.",
    },
    {
      heading: "Understanding Place",
      text: "No space exists in isolation. Its location, history, climate, and surrounding architecture all influence how it should be experienced. Working across the UK and Africa has reinforced the importance of context-led design. Rather than applying a single style everywhere, we respond thoughtfully to place — allowing materials, proportions, and layouts to feel grounded and authentic without being overt or presumptive.",
    },
    {
      heading: "Designing the Journey, Not Just the Destination",
      text: "While the finished space matters, the journey to get there matters just as much. A well-guided design process brings clarity, confidence, and ease. It allows for collaboration, reflection, and considered decision-making — ensuring that the final outcome feels intentional rather than rushed. This is why our services are structured as journeys. From focused consultations to full end-to-end design, each route is designed to meet clients where they are and guide them forward with care.",
    },
    {
      heading: "Spaces That Last",
      text: "When design is approached with intention, the result is more than a beautiful interior. It's a space that works, adapts, and continues to feel relevant over time. Thoughtful journeys lead to meaningful spaces — and that's the destination we always aim for.",
    },
  ],
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // In a real static app, you'd find by slug. For now, we show the screenshot content.
  if (!postData) notFound();

  return (
    <main className="w-full bg-white min-h-screen pt-32 pb-24">
      <article className="max-w-[850px] mx-auto px-6">
        
        {/* Breadcrumbs */}
        <nav className="flex gap-2 text-[12px] uppercase tracking-widest text-[#332D31]/40 mb-8">
          <Link href="/blog" className="hover:text-[#A67C52]">Blog</Link>
          <span>/</span>
          <span className="text-[#332D31]">Articles</span>
        </nav>

        {/* Hero Image */}
        <div className="relative aspect-[16/9] w-full mb-12 overflow-hidden shadow-sm">
          <Image
            src={postData.image}
            alt={postData.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Article Header */}
        <header className="mb-10">
          <p className="text-[14px] text-[#332D31]/60 mb-4">{postData.date}</p>
          <h1 className="text-[32px] md:text-[48px] font-bold text-[#A67C52] leading-[1.15]">
            {postData.title}
          </h1>
        </header>

        {/* Article Body */}
        <div className="space-y-8">
          {postData.content.map((section, idx) => (
            <div key={idx} className="space-y-4">
              {section.heading && (
                <h2 className="text-[24px] font-bold text-[#A67C52]">
                  {section.heading}
                </h2>
              )}
              <p className="text-[17px] leading-[1.8] text-[#332D31]/80 font-light">
                {section.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section - Strictly matching the brown box in design */}
        <section className="mt-20 bg-[#A67C52] p-10 md:p-14 rounded-sm flex flex-col md:flex-row justify-between items-center gap-8 text-white">
          <div className="max-w-md">
            <h3 className="text-[22px] font-bold mb-3">
              Considering your own design journey?
            </h3>
            <p className="text-[16px] text-white/90">
              Start with a conversation and let&apos;s explore the right route for your project.
            </p>
          </div>
          <Link 
            href="/contact" 
            className="whitespace-nowrap bg-white text-[#A67C52] px-8 py-3 text-[12px] font-bold uppercase tracking-widest hover:bg-[#F3EFE9] transition-colors"
          >
            Get In Touch
          </Link>
        </section>

      </article>
    </main>
  );
}