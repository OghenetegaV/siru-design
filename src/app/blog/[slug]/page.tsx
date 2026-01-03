import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/data/blog-posts";
import FadeUp from "@/components/motion/FadeUp";

interface Props {
  params: { slug: string };
}

// SEO: Dynamically generates the metadata for each post
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Siru Design Co`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="w-full bg-[var(--color-biege)] min-h-screen pt-24 pb-12">
      <article className="max-w-[850px] mx-auto px-6">
        
        {/* Breadcrumb */}
        <FadeUp>
          <div className="flex items-center gap-4">
            <span className="text-[12px] tracking-wide text-[var(--color-brand-brown)] whitespace-nowrap"><span><Link href="/blog" className="text-[12px] tracking-wide text-[var(--color-brand-brown)]  hover:text-[var(--color-brand-brown)] hover:underline transition-colors">Journal</Link></span> / Articles</span>
            <span className="h-px flex-1 bg-[var(--color-brand-brown)]/30" />
          </div>
        </FadeUp>        

        {/* Hero Image - 16:9 Ratio */}
        <div className="relative aspect-[16/9] w-full my-12 overflow-hidden shadow-sm">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Article Header */}
        <header className="mb-10">
          <p className="text-[13px] text-[var(--color-ink)]/50 mb-4 font-medium">
            {post.date}
          </p>
          <h1 className="text-[32px] md:text-[48px] font-bold text-[var(--color-brand-brown)] leading-[1.1] tracking-tight">
            {post.title}
          </h1>
        </header>

        {/* Article Content - Editorial Spacing */}
        <div className="space-y-10">
          {post.content.map((section, idx) => (
            <div key={idx} className="space-y-4">
              {section.heading && (
                <h2 className="text-[24px] md:text-[28px] font-bold text-[var(--color-brand-brown)] mt-6">
                  {section.heading}
                </h2>
              )}
              <p className="text-[17px] md:text-[18px] leading-[1.8] text-[var(--color-ink)]/80 font-light">
                {section.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section - Strictly matching the brown box in design */}
        <section className="mt-20 bg-[var(--color-brand-brown)] p-6 md:p-8 rounded-sm flex flex-col md:flex-row justify-between items-center gap-8 text-white">
          <div className="max-w-md text-center rounded-[8px] md:text-left">
            <h3 className="text-[22px] md:text-[24px] font-bold mb-3">
              Considering your own design journey?
            </h3>
            <p className="text-[16px] text-white/90 leading-relaxed font-light">
              Start with a conversation and let&apos;s explore the right route for your project.
            </p>
          </div>
          <Link 
            href="/contact" 
            className="whitespace-nowrap bg-white text-[var(--color-brand-brown)] px-10 py-4 text-[12px] rounded-[8px] font-bold hover:bg-[#F3EFE9] transition-all duration-300 shadow-lg"
          >
            Start a Journey
          </Link>
        </section>

      </article>
    </main>
  );
}