import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

// Local static data for stability
const posts = [
  {
    id: "1",
    title: "Design as a Journey: Why Every Space Deserves Intention",
    slug: "design-as-a-journey",
    excerpt: "Exploring the philosophy behind our 'People. Place. Space.' framework and how it shapes every project we touch.",
    publishedAt: "2025-12-20",
    image: "/assets/images/blog/journey.jpg",
  },
  {
    id: "2",
    title: "The Art of Slow Living: Stillness in the City",
    slug: "art-of-slow-living",
    excerpt: "How we use tactile materials and natural light to create sanctuaries in the heart of London.",
    publishedAt: "2025-11-15",
    image: "/assets/images/blog/slow-living.jpg",
  },
  {
    id: "3",
    title: "Sourcing with Soul: A Guide to London Vintage",
    slug: "sourcing-vintage",
    excerpt: "A curated list of our favorite hidden corners for finding furniture with history and character.",
    publishedAt: "2025-10-28",
    image: "/assets/images/blog/vintage.jpg",
  }
];

export const metadata: Metadata = {
  title: "Blogs | Siru Design Co",
  description: "Perspectives on interiors, culture, and the spaces we shape.",
};

export default function BlogIndexPage() {
  const recentPosts = posts.slice(0, 3);

  return (
    <main className="w-full bg-[#F3EFE9] min-h-screen pt-24 md:pt-32 pb-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Page Title */}
        <header className="mb-12 text-center md:text-left">
          <h1 className="text-[40px] font-bold text-[#332D31] mb-2">Blogs</h1>
          <p className="text-[16px] text-[#332D31]/80 italic">
            Perspectives on interiors, culture, and the spaces we shape.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Sidebar - Positioned FIRST on mobile, RIGHT on desktop */}
          <aside className="w-full lg:w-[350px] space-y-8 order-first lg:order-last">
            {/* Search Box */}
            <div className="bg-white p-6 shadow-sm">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search articles" 
                  className="w-full bg-[#F3EFE9] border-none px-10 py-3 text-[14px] focus:ring-1 focus:ring-[#A67C52] outline-none"
                />
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#332D31]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Recent Posts Widget - Hidden on mobile to keep search prominent, or keep it visible */}
            <div className="bg-white p-6 shadow-sm hidden md:block">
              <h3 className="text-[16px] font-bold text-[#332D31] mb-6">Recent posts</h3>
              <div className="space-y-6">
                {recentPosts.map((recent) => (
                  <Link key={recent.id} href={`/blog/${recent.slug}`} className="flex gap-4 group">
                    <div className="relative w-20 h-16 flex-shrink-0">
                      <Image 
                        src={recent.image} 
                        alt={recent.title} 
                        fill 
                        className="object-cover" 
                      />
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] text-[#332D31]/50 uppercase">
                        {new Date(recent.publishedAt).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </p>
                      <h4 className="text-[13px] font-bold text-[#332D31] leading-snug group-hover:text-[#A67C52] transition-colors line-clamp-2">
                        {recent.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content: Post Feed */}
          <div className="flex-1 space-y-8 lg:space-y-12">
            {posts.map((post) => (
              <article key={post.id} className="bg-white p-6 shadow-sm">
                <div className="relative aspect-[16/10] w-full mb-6">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-3">
                  <p className="text-[12px] text-[#A67C52] font-medium">
                    {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                  <h2 className="text-[22px] font-bold text-[#A67C52] leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-[14px] text-[#332D31]/70 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-block text-[12px] font-bold text-[#A67C52] uppercase tracking-wider border-b border-[#A67C52] pb-0.5 mt-2 hover:opacity-70 transition-opacity"
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