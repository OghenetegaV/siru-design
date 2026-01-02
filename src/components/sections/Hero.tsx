"use client";

import { useEffect, useRef } from "react";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/motion/FadeUp";
import BlurReveal from "../motion/BlurReveal";
import ShimmerText from "../motion/ShimmerText";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Attempt playback on mount
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        console.log("Autoplay blocked (likely Low Power Mode)");
      });
    }
  }, []);

  return (
    <section 
      className="relative w-full h-[85vh] min-h-[640px] overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/images/hero-fallback.jpg')" }} // The "Static" Fallback
    >
      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/assets/images/hero-fallback.jpg" // Shown while loading or if blocked
      >
        <source src="/assets/video/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-[760px] text-center text-white">
        <ShimmerText 
            text="People. Place. Space." 
            className="text-[44px] sm:text-[56px] lg:text-[64px] font-semibold leading-tight pb-2"
          />

          <FadeUp immediate delay={0.1}>
            <p className="mt-6 text-[18px] sm:text-[22px] leading-relaxed text-white/90">
              Design that begins with people, responds to place,
              and evolves into meaningful space.
            </p>
          </FadeUp>

          <FadeUp immediate delay={0.2}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href="/services">
                Explore Our Services
              </Button>
              <Button href="/call-to-action" variant="secondary">
                Get Started Today
              </Button>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}