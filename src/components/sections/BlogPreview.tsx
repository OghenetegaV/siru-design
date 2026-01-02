"use client";

import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/motion/FadeUp";

const posts = {
  featured: {
    title: "Riding the tide of innovation and inspiration",
    category: "Editorial",
    date: "Sep 8, 2024",
    image: "/assets/images/blog/blog-featured.png",
    href: "/blog/riding-the-tide",
  },
  secondary: [
    {
      title: "The effects of geopolitical shifts on global security",
      category: "World News",
      date: "Sep 8, 2024",
      image: "/assets/images/blog/blog-1.png",
      href: "/blog/geopolitical-shifts",
    },
    {
      title: "Affect the integrity and future of professional sports",
      category: "Sports",
      date: "Sep 8, 2024",
      image: "/assets/images/blog/blog-2.png",
      href: "/blog/future-of-sports",
    },
  ],
};

export default function BlogPreview() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-24">

        {/* Title */}
        <FadeUp>
          <h2 className="text-[40px] sm:text-[48px] lg:text-[56px] font-semibold text-[var(--color-ink)]">
            Read our blogs
          </h2>
        </FadeUp>

        {/* Layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-10 lg:gap-12 items-stretch">

          {/* FEATURED POST */}
          <FadeUp delay={0.1}>
            <Link
              href={posts.featured.href}
              className="group relative block overflow-hidden rounded-[8px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-brown)] focus-visible:ring-offset-4"
            >
              <div className="relative aspect-[4/3] lg:h-[460px] lg:aspect-auto">
                <Image
                  src={posts.featured.image}
                  alt={posts.featured.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  priority
                />
                <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:bg-black/15" />
              </div>

              {/* Play icon */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="h-[46px] w-[46px] rounded-full bg-white/35 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <div className="ml-[2px] h-0 w-0 border-y-[7px] border-y-transparent border-l-[11px] border-l-white" />
                </div>
              </div>

              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="mb-1 text-[20px] lg:text-[22px] underline text-white tracking-wide">
                  {posts.featured.title}
                </h3>
                <p className="text-[12px] text-white/80">
                  {posts.featured.category} — {posts.featured.date}
                </p>
              </div>
            </Link>
          </FadeUp>

          {/* SECONDARY POSTS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:grid-rows-2 gap-6">
            {posts.secondary.map((post, i) => (
              <FadeUp key={post.title} delay={0.15 + i * 0.1}>
                <Link
                  href={post.href}
                  className="
                    group h-full w-full
                    rounded-[10px]
                    overflow-hidden
                    transition-all duration-300
                    hover:bg-[var(--color-beige)]
                    hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)]
                    active:scale-[0.99]
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-brown)] focus-visible:ring-offset-4
                  "
                >
                  {/* Responsive layout */}
                  <div className="flex flex-col lg:flex-row-reverse h-full">

                    {/* Image */}
                    <div className="relative h-[180px] lg:h-full lg:w-[270px] flex-shrink-0">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.06] rounded-[8px]"
                      />
                    </div>

                    {/* Text */}
                    <div className="p-4 lg:p-5 flex flex-col justify-center">
                      <h4 className="text-[16px] lg:text-[18px] font-medium leading-snug text-[var(--color-ink)] group-hover:underline">
                        {post.title}
                      </h4>
                      <p className="mt-2 text-[12px] text-[var(--color-ink)]/60">
                        {post.category} — {post.date}
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
