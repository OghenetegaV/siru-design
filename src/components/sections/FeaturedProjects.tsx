"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import FadeUp from "@/components/motion/FadeUp";
import Button from "@/components/ui/Button";

const projects = [
  "/assets/images/projects/project-1.png",
  "/assets/images/projects/project-2.png",
  "/assets/images/projects/project-3.png",
  "/assets/images/projects/project-1.png",
  "/assets/images/projects/project-2.png",
  "/assets/images/projects/project-3.png",
];

export default function FeaturedProjects() {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let offset = 0;
    const slideWidth = 426; // 400px image + 26px gap
    const speed = 0.35; // lower = slower, smoother
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

  return (
    <section className="w-full bg-[var(--color-beige)] overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-24">

        {/* Header */}
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <FadeUp>
            <div>
              <h2 className="text-[56px] font-semibold text-[var(--color-ink)]">
                Featured Projects
              </h2>
              <p className="mt-2 text-[18px] text-[var(--color-ink)]/70">
                Check out some of our projects
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <Button href="/portfolio">
              View Portfolio
            </Button>
          </FadeUp>
        </div>

        {/* Slider */}
        <div
          className="relative mt-16 overflow-hidden"
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
        >
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

      </div>
    </section>
  );
}
