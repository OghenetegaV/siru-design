"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FadeUp from "@/components/motion/FadeUp";

const testimonials = [
  {
    quote:
      "We booked the Short Haul service to sense-check our ideas before committing to a full redesign. It was incredibly good value for money and saved us from making some costly mistakes. The advice was clear, practical, and tailored to how we actually use the space.",
    author: "Private Residential Client",
    avatar: "/assets/images/testimonials/avatar-1.png",
  },
  {
    quote:
      "The Day Trip service was exactly what we needed. Having focused, in-person time with an experienced designer helped us move forward quickly and confidently. We came away with clear direction, actionable next steps, and a space that finally feels considered.",
    author: "Homeowner, London",
    avatar: "/assets/images/testimonials/avatar-2.png",
  },
  {
    quote:
      "Professional, efficient, and refreshingly straightforward. The Short Haul session gave us clarity on layout, finishes, and priorities without any pressure to over-specify. The recommendations were thoughtful and commercially sensible.",
    author: "Small Business Owner",
    avatar: "/assets/images/testimonials/avatar-3.png",
  },
  {
    quote:
      "The Day Trip was excellent value. The designers understood our brief immediately and balanced creativity with practicality. We appreciated the structured approach and the fact that decisions were made collaboratively, not imposed.",
    author: "Property Developer",
    avatar: "/assets/images/testimonials/avatar-4.png",
  },
  {
    quote:
      "We didn’t need a full design service, just expert guidance — and that’s exactly what we got. The Short Haul consultation gave us confidence in our choices and a clear framework to move forward at our own pace.",
    author: "Residential Client",
    avatar: "/assets/images/testimonials/avatar-5.png",
  },
  {
    quote:
      "From the first conversation, the service felt professional and well organised. The Day Trip helped align multiple stakeholders quickly and kept the project moving without unnecessary delays. Clear advice, great service, and strong value for money.",
    author: "Commercial Client",
    avatar: "/assets/images/testimonials/avatar-6.png",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-24">

        {/* Header */}
        <div className="mx-auto max-w-[640px] text-center">
          <FadeUp>
            <span className="inline-block rounded-[8px] border border-[var(--color-brand-brown)] px-4 py-1 text-[12px] font-medium text-[var(--color-brand-brown)]">
              Testimonials
            </span>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2 className="mt-4 text-[56px] font-semibold text-[var(--color-ink)]">
              Our Valued Customers
            </h2>
          </FadeUp>
        </div>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <FadeUp key={index} delay={0.15 + index * 0.05}>
              <motion.div
                whileHover={{
                  // backgroundColor: "#F0F0F0",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative rounded-[16px] bg-[#FBFBFB] p-8 shadow-sm"
              >
                {/* Quote icon container */}
                <span className="absolute top-3 left-3 bg-[#F3F3F3] h-[70px] w-[70px] rounded-full flex items-center justify-center">
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 3,
                      ease: "easeInOut",
                      repeat: Infinity,
                    }}
                  >
                    <Image
                      src="/assets/icons/quote-icon.svg"
                      alt="quotation icon"
                      width={42}
                      height={42}
                    />
                  </motion.div>
                </span>

                {/* Avatar */}
                <div className="absolute top-6 right-6 h-[58px] w-[58px] rounded-full overflow-hidden">
                  <Image
                    src={item.avatar}
                    alt={item.author}
                    width={58}
                    height={58}
                  />
                </div>

                <motion.div
                  whileHover={{ scale: 0.97 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="mt-16"
                >
                  <p className="text-[15px] leading-relaxed text-[var(--color-ink)]/80">
                    {item.quote}
                  </p>

                  <p className="mt-6 text-[16px] font-semibold text-[var(--color-ink)]">
                    – {item.author}
                  </p>
                </motion.div>
              </motion.div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
}
