"use client";

import FadeUp from "@/components/motion/FadeUp";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="min-h-screen w-full bg-[var(--color-beige)] flex items-center">
      <section className="mx-auto max-w-[1440px] px-6 lg:px-12 w-full">

        <div className="mx-auto max-w-[720px] text-center">

          <FadeUp>
            <span className="inline-block mb-6 rounded-[8px] border border-[var(--color-brand-brown)]/40 px-4 py-1 text-[12px] tracking-wide text-[var(--color-brand-brown)]">
              Coming Soon
            </span>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="text-[40px] sm:text-[48px] lg:text-[56px] font-semibold text-[var(--color-ink)]">
              This page is
              <br />
              still in progress
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="mt-6 text-[18px] sm:text-[20px] leading-relaxed text-[var(--color-ink)]/80">
              We&apos;re currently working on this section of the site.
              Check back soon or return to the homepage.
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="mt-10 flex justify-center gap-4">
              <Button href="/">Back to home</Button>
              <Button href="/contact" variant="secondary">
                Get in touch
              </Button>
            </div>
          </FadeUp>

        </div>
      </section>
    </main>
  );
}
