import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BLOG_POSTS } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Journals | Siru Design Co",
  description: "Perspectives on interiors, culture, and the spaces we shape.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  // Sort posts by date (newest first)
  const sortedPosts = [...BLOG_POSTS].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  const recentPosts = sortedPosts.slice(0, 3);

  return (
    <main className="w-full bg-[#F3EFE9] min-h-screen pt-12 md:pt-24 pb-12 px-6">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Page Title & Intro */}
        <header className="mb-12 md:mb-16">
          <h1 className="text-[44px] md:text-[56px] font-bold text-[var(--color-ink)] mb-2">
            Journals
          </h1>
          <p className="text-[18px] md:text-[20px] text-[var(--color-ink)]/80 font-light max-w-xl">
            Perspectives on interiors, culture, and the spaces we shape.
          </p>
        </header>

        {/* Main Grid Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          
          {/* SIDEBAR 
            UX: order-first on mobile, order-last (right side) on lg screens 
          */}
          <aside className="w-full lg:w-[350px] space-y-8 order-first lg:order-last">
            
            {/* Search Component */}
            <div className="bg-white p-6 shadow-sm border border-black/5">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search articles" 
                  className="w-full bg-[#F3EFE9] border-none px-10 py-3 text-[14px] focus:ring-1 focus:ring-[var(--color-brand-brown)] outline-none text-[var(--color-ink)]"
                />
                <svg 
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-ink)]/40" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Recent Posts Widget - hidden on smallest screens to prioritize feed */}
            <div className="bg-white p-6 shadow-sm border border-black/5 hidden md:block">
              <h3 className="text-[18px] font-medium text-black mb-6">
                Recent posts
              </h3>
              <div className="space-y-6">
                {recentPosts.map((recent) => (
                  <Link key={recent.id} href={`/blog/${recent.slug}`} className="flex gap-4 group">
                    <div className="relative w-20 h-16 flex-shrink-0 overflow-hidden">
                      <Image 
                        src={recent.image} 
                        alt={recent.title} 
                        fill 
                        className="object-cover transition-transform duration-500 group-hover:scale-110" 
                      />
                    </div>
                    <div className="space-y-2">
                      <p className="text-[12px] text-[var(--color-ink)] font-normal">
                        {recent.date}
                      </p>
                      <h4 className="text-[14px] font-bold text-[var(--color-brand-brown)] leading-snug group-hover:text-[var(--color-ink)] transition-colors line-clamp-2">
                        {recent.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          {/* MAIN FEED 
            Displays the vertical stack of articles
          */}
          <div className="flex-1 space-y-10 lg:space-y-16">
            {sortedPosts.map((post) => (
              <article key={post.id} className="bg-white p-6 md:p-10 shadow-sm border border-black/5 group">
                {/* Clickable Image */}
                <Link href={`/blog/${post.slug}`} className="block overflow-hidden mb-8">
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 800px"
                      className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                    />
                  </div>
                </Link>

                <div className="space-y-2">
                  <p className="text-[14px] font-normal tracking-widest">
                    {post.date}
                  </p>
                  
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-[24px] md:text-[32px] font-semibold text-[var(--color-brand-brown)] leading-relaxed tracking-normal hover:opacity-80 transition-opacity">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="text-[16px] md:text-[18px] text-[var(--color-ink)] leading-relaxed font-light line-clamp-3">
                    {post.excerpt}
                  </p>

                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-block text-[12px] font-bold text-[var(--color-brand-brown)] uppercase tracking-[0.2em] border-b-2 border-[var(--color-brand-brown)] pb-1 mt-4 hover:text-[var(--color-ink)] hover:border-[var(--color-ink)] transition-all"
                  >
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </main>
  );
}