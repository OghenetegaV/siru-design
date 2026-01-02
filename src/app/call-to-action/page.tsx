"use client";

import FadeUp from "@/components/motion/FadeUp";
import Button from "@/components/ui/Button";

export default function ShortHaulBookingPage() {
  return (
    <main className="w-full bg-[var(--color-beige)]">
      <section className="mx-auto max-w-[1440px] px-6 lg:px-12 py-24">

        <div className="mx-auto max-w-[720px] bg-white rounded-[16px] p-10 sm:p-12 lg:p-14 shadow-sm">

          {/* Header */}
          <FadeUp>
            <h1 className="text-[32px] sm:text-[42px] font-semibold text-[var(--color-brand-brown)]">
              Start your Short Haul
            </h1>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="mt-2 text-[22px] text-[var(--color-ink)]/70">
              Share a few details so we can prepare for your session.
            </p>
          </FadeUp>

          {/* Divider */}
          <div className="mt-6 h-px w-full bg-[var(--color-brand-brown)]/30" />

          {/* Form */}
          <FadeUp delay={0.15}>
            <form className="mt-8 space-y-6" aria-label="Short Haul booking form">

              {/* Full Name */}
              <div>
                <label className="block text-[18px] font-medium text-[var(--color-ink)] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  required
                  className="
                    w-full h-[46px]
                    rounded-[6px]
                    border border-[var(--color-brand-brown)]/40
                    px-4 text-[14px]
                    focus:outline-none
                    focus:border-[var(--color-brand-brown)]
                  "
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-[18px] font-medium text-[var(--color-ink)] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@email.com"
                  required
                  className="
                    w-full h-[46px]
                    rounded-[6px]
                    border border-[var(--color-brand-brown)]/40
                    px-4 text-[14px]
                    focus:outline-none
                    focus:border-[var(--color-brand-brown)]
                  "
                />
              </div>

              {/* Location */}
              <div>
                <label className="block text-[18px] font-medium text-[var(--color-ink)] mb-2">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="Los Angeles, USA"
                  className="
                    w-full h-[46px]
                    rounded-[6px]
                    border border-[var(--color-brand-brown)]/40
                    px-4 text-[14px]
                    focus:outline-none
                    focus:border-[var(--color-brand-brown)]
                  "
                />
              </div>

              {/* Focus */}
              <div>
                <label className="block text-[18px] font-medium text-[var(--color-ink)] mb-2">
                  Your focus
                </label>
                <textarea
                  rows={4}
                  placeholder="What do you need clarity on right now?"
                  className="
                    w-full
                    rounded-[6px]
                    border border-[var(--color-brand-brown)]/40
                    px-4 py-3 text-[14px]
                    resize-none
                    focus:outline-none
                    focus:border-[var(--color-brand-brown)]
                  "
                />
              </div>

              {/* Submit */}
              <div className="pt-2">
                <Button type="submit" className="text-[14px] px-5 py-2">
                  Book a session
                </Button>
              </div>

            </form>
          </FadeUp>

        </div>
      </section>
    </main>
  );
}
