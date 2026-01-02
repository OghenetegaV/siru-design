"use client";

import FadeUp from "@/components/motion/FadeUp";
import Button from "@/components/ui/Button";

export default function MailingList() {
  return (
    <section
      className="w-full"
      style={{ backgroundColor: "var(--color-brandGreen)" }}
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-24">

        {/* Text */}
        <FadeUp>
          <h2 className="text-[40px] sm:text-[56px] font-semibold text-white">
            Join our mailing list
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p className="mt-4 text-[18px] sm:text-[22px] text-white/80">
            Receive considered design thoughts, project stories, and
            behind-the-scenes updates from the studio.
          </p>
        </FadeUp>

        {/* FORM */}
        <FadeUp delay={0.2}>
          <form
            className="
              mt-10
              grid grid-cols-1
              sm:grid-cols-[1fr_auto]
              gap-4
              w-full
            "
            aria-label="Mailing list signup"
          >
            {/* Input */}
            <div className="relative w-full">
              <span className="absolute left-4 top-1/2 pr-4 -translate-y-1/2 text-[var(--color-ink)]/40 text-[24px]">
                ✉
              </span>

              <input
                type="email"
                required
                placeholder="johnmalawi@gmail.com"
                className="
                  w-full h-[60px]
                  bg-white
                  border border-[var(--color-brand-brown)]/40
                  pl-11 pr-4
                  text-[18px] sm:text-[20px]
                  text-[var(--color-ink)]
                  placeholder:text-[var(--color-ink)]/40
                  focus:outline-none
                  focus:border-[var(--color-brand-brown)]
                "
              />
            </div>

            {/* Button */}
            <Button
              type="submit"
              className="
                h-[60px]
                px-10
                bg-[var(--color-ink)]
                text-white
                text-[18px] sm:text-[20px]
                hover:opacity-90
                rounded-none
              "
            >
              Submit
            </Button>
          </form>
        </FadeUp>

      </div>
    </section>
  );
}
