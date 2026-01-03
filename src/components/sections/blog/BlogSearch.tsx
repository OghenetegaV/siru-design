"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/data/blog-posts";

export default function BlogSearch({ allPosts }: { allPosts: BlogPost[] }) {
  const [query, setQuery] = useState("");

  const filteredPosts = allPosts.filter((post) =>
    post.title.toLowerCase().includes(query.toLowerCase())
  );

  const recentEntries = allPosts.slice(0, 3);

  return (
    <div className="flex flex-col lg:flex-row gap-12">
      {/* Main Blog Feed - Order 1, 2, 3, 4 */}
      <div className="flex-1 space-y-12">
        {filteredPosts.map((post) => (
          <article key={post.id} className="bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] group transition-all">
            <Link href={`/blog/${post.slug}`}>
              <div className="relative aspect-[16/10] w-full mb-6 overflow-hidden">
                <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="space-y-3">
                <p className="text-[12px] text-[#312D3C]/40 italic">{post.date}</p>
                {/* Brand Brown: #A66A3F */}
                <h2 className="text-[24px] font-serif font-bold text-[#A66A3F] leading-tight group-hover:opacity-80">
                  {post.title}
                </h2>
                <p className="text-[14px] text-[#312D3C]/70 line-clamp-2 font-light">
                  {post.excerpt}
                </p>
                <div className="pt-2">
                  <span className="text-[11px] font-bold uppercase tracking-widest border-b border-[#A66A3F] text-[#A66A3F] pb-1">
                    Read More
                  </span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {/* Sidebar - Mobile Top / Desktop Right */}
      <aside className="w-full lg:w-[320px] order-first lg:order-last space-y-8">
        <div className="bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-[#F2EEE9]/50 border-none px-10 py-3 text-[14px] outline-none focus:ring-1 focus:ring-[#A66A3F]"
            />
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
        </div>

        <div className="bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hidden lg:block sticky top-32">
          <h3 className="text-[14px] font-bold text-[#312D3C] mb-6">Recent posts</h3>
          <div className="space-y-6">
            {recentEntries.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="flex gap-4 group/item">
                <div className="relative w-16 h-12 flex-shrink-0 overflow-hidden bg-[#F2EEE9]">
                  <Image src={post.image} alt="" fill className="object-cover" />
                </div>
                <div>
                  <p className="text-[10px] opacity-40 uppercase mb-1">{post.date}</p>
                  <h4 className="text-[12px] font-bold leading-snug text-[#312D3C] group-hover/item:text-[#A66A3F] transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}