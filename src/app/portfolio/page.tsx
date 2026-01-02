"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/motion/FadeUp";
import { projects } from "@/data/projects";

const categories = ["All", "Residential", "Commercial"];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="bg-[var(--color-biege)] min-h-screen pt-12 pb-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Header Section */}
        <div className="max-w-2xl mb-16">
          <FadeUp>
            <header>
              <h1 className="text-[44px] md:text-[56px] font-semibold text-[var(--color-ink)] leading-tight">
                Stories in Space
              </h1>
            </header>
          </FadeUp>
          
          <FadeUp delay={0.1}>
            <p className="mt-4 text-[18px] md:text-[20px] text-[var(--color-ink)]/70">
              Thoughtful spaces rooted in place, purpose, and the people who inhabit them.
            </p>
          </FadeUp>
        </div>

        {/* Category Filter */}
        <div className="flex gap-8 mb-12 border-b border-[var(--color-ink)]/10 pb-4 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm uppercase tracking-widest transition-all whitespace-nowrap ${
                activeCategory === cat 
                ? "text-[var(--color-brand-brown)] font-bold border-b-2 border-[var(--color-brand-brown)] pb-3.5 -mb-4" 
                : "text-[var(--color-ink)]/50 hover:text-[var(--color-ink)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {filteredProjects.map((project, index) => (
            <FadeUp key={project.id} delay={0.1 + (index % 2) * 0.1}>
              <Link href={`/portfolio/${project.id}`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-zinc-200 rounded-sm shadow-sm">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  {/* Subtle dark overlay on hover */}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="mt-8 flex justify-between items-start">
                  <div className="space-y-1">
                    <h3 className="text-[24px] md:text-[28px] font-medium text-[var(--color-ink)]">
                      {project.title}
                    </h3>
                    <p className="text-xs md:text-sm text-[var(--color-ink)]/60 uppercase tracking-widest font-medium">
                      {project.location} — {project.category}
                    </p>
                  </div>
                  <div className="pt-2">
                    <span className="text-sm font-semibold uppercase tracking-tighter text-[var(--color-ink)]/40 group-hover:text-[var(--color-brand-brown)] group-hover:translate-x-1 transition-all inline-block">
                      Explore ↗
                    </span>
                  </div>
                </div>
                
                <p className="mt-4 text-[16px] md:text-[17px] leading-relaxed text-[var(--color-ink)]/80 max-w-md line-clamp-2">
                  {project.description}
                </p>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}