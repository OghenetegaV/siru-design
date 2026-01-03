"use client";

import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/motion/FadeUp";
// Assuming BLOG_POSTS is exported from a data file
import { BLOG_POSTS } from "@/data/blog-posts"; 

export default function BlogPreview() {
  // We'll take the first 3 posts for the preview
  const featuredPost = BLOG_POSTS[4]; // "The Funk and the Fold"
  const secondaryPosts = [BLOG_POSTS[0], BLOG_POSTS[1]]; // "Design as a Journey" and "Slow Living"

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-24">

        {/* Title */}
        <FadeUp>
          <div className="flex items-end justify-between">
            <h2 className="text-[40px] sm:text-[48px] lg:text-[56px] font-semibold text-[var(--color-ink)]">
              Read our blogs
            </h2>
            <Link 
              href="/blog" 
              className="mb-4 text-[14px] uppercase tracking-widest text-[var(--color-brand-brown)] hover:underline"
            >
              View all posts
            </Link>
          </div>
        </FadeUp>

        {/* Layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-10 lg:gap-12 items-stretch">

          {/* FEATURED POST */}
          <FadeUp delay={0.1}>
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group relative block overflow-hidden rounded-[8px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-brown)] focus-visible:ring-offset-4"
            >
              <div className="relative aspect-[4/3] lg:h-[460px] lg:aspect-auto">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  priority
                />
                <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:bg-black/30" />
              </div>

              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="mb-3 inline-block bg-white/20 backdrop-blur-md px-3 py-1 text-[10px] uppercase tracking-widest text-white rounded-full">
                  {featuredPost.categories[0]}
                </span>
                <h3 className="mb-2 text-[24px] lg:text-[32px] text-white font-medium leading-tight hover:underline">
                  {featuredPost.title}
                </h3>
                <p className="text-[14px] text-white/90 line-clamp-2 max-w-[500px] mb-4">
                  {featuredPost.excerpt}
                </p>
                <p className="text-[12px] text-white/70 uppercase tracking-wider">
                  {featuredPost.date}
                </p>
              </div>
            </Link>
          </FadeUp>

          {/* SECONDARY POSTS */}
          <div className="grid grid-cols-1 gap-6">
            {secondaryPosts.map((post, i) => (
              <FadeUp key={post.id} delay={0.15 + i * 0.1}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="
                    group h-full w-full
                    rounded-[10px]
                    overflow-hidden
                    transition-all duration-300
                    hover:bg-[var(--color-beige)]
                    hover:shadow-[0_12px_30px_rgba(0,0,0,0.04)]
                    active:scale-[0.99]
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-brown)] focus-visible:ring-offset-4
                  "
                >
                  <div className="flex flex-col lg:flex-row-reverse h-full">

                    {/* Image */}
                    <div className="relative h-[200px] lg:h-full lg:w-[240px] flex-shrink-0">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform rounded-[8px] duration-500 group-hover:scale-[1.06]"
                      />
                    </div>

                    {/* Text */}
                    <div className="p-6 flex flex-col justify-center flex-1">
                      <span className="text-[10px] uppercase tracking-widest text-[var(--color-brand-brown)] mb-2">
                        {post.categories.join(" • ")}
                      </span>
                      <h4 className="text-[18px] lg:text-[20px] font-medium leading-snug text-[var(--color-ink)] group-hover:text-[var(--color-brand-brown)] transition-colors">
                        {post.title}
                      </h4>
                      <p className="mt-3 text-[14px] text-[var(--color-ink)]/60 line-clamp-2">
                        {post.excerpt}
                      </p> 
                      <p className="mt-4 text-[11px] text-[var(--color-ink)]/40 uppercase tracking-tighter">
                        {post.date}
                      </p>
                    </div>

                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}