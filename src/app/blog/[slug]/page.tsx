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
            <nav className="flex items-center gap-2 text-[12px] tracking-wide text-[var(--color-brand-brown)]  font-medium">
              <Link 
                href="/blog" 
                className="hover:opacity-70 hover:underline transition-opacity"
              >
                Journal
              </Link>
              <span>/</span>
              <span>Article</span>
            </nav>
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

        {/* Fixed Callout */}
        <FadeUp delay={0.35}>
          <div className="mt-20 rounded-[8px] bg-[var(--color-brand-brown)] px-10 py-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-8">

              {/* Text */}
              <div className="max-w-[640px]">
                <h3 className="text-[22px] font-semibold text-white">
                  Considering your own design journey?
                </h3>
                <p className="mt-2 text-[16px] text-white/90">
                  Start with a conversation and let’s explore the right route for your project.
                </p>
              </div>

              {/* Button */}
              <a
                href="/call-to-action"
                className="
                  inline-flex
                  items-center
                  whitespace-nowrap
                  rounded-[6px]
                  bg-white
                  px-6
                  py-2.5
                  text-[14px]
                  font-medium
                  text-[var(--color-brand-brown)]
                  transition-opacity
                  hover:opacity-85
                "
              >
                Start a Journey
              </a>
            </div>
          </div>
        </FadeUp>

      </article>
    </main>
  );
}