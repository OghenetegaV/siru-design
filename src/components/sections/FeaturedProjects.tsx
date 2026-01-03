"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import FadeUp from "@/components/motion/FadeUp";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  "/assets/images/projects/project-5.png",
  "/assets/images/projects/project-2.png",
  "/assets/images/projects/project-3.png",
  "/assets/images/projects/project-4.png",
  "/assets/images/projects/project-1.png",
  "/assets/images/projects/project-6.png",
];

export default function FeaturedProjects() {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let offset = 0;
    const slideWidth = 426; // 400px image + 26px gap
    const speed = 0.35; 
    let animationFrame: number;

    const animate = () => {
      if (!pausedRef.current) {
        offset -= speed;

        if (Math.abs(offset) >= slideWidth) {
          offset = 0;
          track.appendChild(track.firstElementChild as HTMLElement);
        }

        track.style.transform = `translateX(${offset}px)`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const handlePrev = () => {
    const track = trackRef.current;
    if (!track) return;
    track.prepend(track.lastElementChild as HTMLElement);
  };

  const handleNext = () => {
    const track = trackRef.current;
    if (!track) return;
    track.appendChild(track.firstElementChild as HTMLElement);
  };

  return (
    <section className="w-full bg-[var(--color-beige)] overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-12">

        {/* Header */}
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <FadeUp>
            <div>
              <h2 className="text-[40px] sm:text-[48px] lg:text-[56px] font-semibold text-[var(--color-ink)]">
                Featured Projects
              </h2>
              <p className="text-[18px] md:text-[22px] text-[var(--color-ink)]/70">
                Check out some of our projects
              </p>
            </div>
          </FadeUp>
        </div>

        {/* Slider Area */}
        <div
          className="relative mt-10"
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
        >
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex gap-6 will-change-transform"
            >
              {[...projects, ...projects].map((src, i) => (
                <div
                  key={`${src}-${i}`}
                  className="relative h-[360px] w-[400px] flex-shrink-0 rounded-[16px] overflow-hidden"
                >
                  <Image
                    src={src}
                    alt="Featured interior project"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Positioned Underneath */}
          <div className="flex justify-between items-center mt-8 px-2">
            <button 
              onClick={handlePrev}
              className="p-3 rounded-full border border-[var(--color-ink)]/20 hover:bg-white transition-colors text-[var(--color-ink)]"
              aria-label="Previous project"
            >
              <ChevronLeft size={28} />
            </button>
            
            <button 
              onClick={handleNext}
              className="p-3 rounded-full border border-[var(--color-ink)]/20 hover:bg-white transition-colors text-[var(--color-ink)]"
              aria-label="Next project"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}