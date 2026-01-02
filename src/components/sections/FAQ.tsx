"use client";

import { useState } from "react";
import FadeUp from "@/components/motion/FadeUp";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "What does an interior designer actually do?",
    answer:
      "Think of us as your design guide. We help you navigate ideas, possibilities, and practical decisions — translating your brief into a clear concept and steering the project from first inspiration through to delivery, without losing sight of where you're heading. We can be a great addition in helping you avoid making costly mistakes.",
  },
  {
    question: "Do I need to commit to the full journey, or can I start small?",
    answer:
      "You can absolutely start small. Some clients join us for a short stretch of the journey — an initial consultation or design direction — while others prefer a full end-to-end service. We’ll help you choose the right route based on your needs.",
  },
  {
    question: "How involved do I need to be along the way?",
    answer:
      "That’s entirely up to you. We’ll set the pace and guide the process, checking in at key milestones. Whether you want to be hands-on at every stop or simply arrive at a well-considered destination, we adapt to your style.",
  },
  {
    question: "How do you manage budget and costs during the journey?",
    answer:
      "We plan ahead and design with intention. By setting clear parameters early and making informed choices along the way, we help keep the project on course — balancing ambition, quality, and budget at every stage.",
  },
  {
    question: "Will you work with my existing team or consultants?",
    answer:
      "Yes. Every good journey works better with the right travelling companions. We collaborate closely with architects, contractors, and project teams to ensure the design direction is understood, aligned, and carried through smoothly.",
  },
  {
    question: "How long does an interior design project take?",
    answer:
      "Every journey has its own timeline. Smaller projects may move quickly, while more complex spaces take time to unfold. We’ll map out a clear programme from the start so you know what’s coming next and when.",
  },
  {
    question: "How do we get started?",
    answer:
      "It begins with a conversation. We’ll talk through your space, your goals, and where you’d like to end up — then suggest the best first step to set the journey in motion.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-[var(--color-beige)]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-28">

        {/* Header */}
        <FadeUp>
          <h2 className="text-[56px] font-semibold text-[var(--color-ink)]">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-[22px] text-[var(--color-ink)]/70">
            Answers to the questions we’re most often asked.
          </p>
        </FadeUp>

        {/* Layout */}
        <div className="relative mt-20 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] items-start">

          {/* LEFT – Questions */}
          <div className="relative z-10 lg:-mr-16">
            <div className="rounded-[16px] bg-white p-6 shadow-sm">
              <ul className="space-y-2">
                {faqs.map((item, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <li key={item.question}>
                      <button
                        onClick={() => setActiveIndex(index)}
                        className={`
                          w-full flex items-center justify-between gap-4
                          px-4 py-4 rounded-[10px] text-left
                          transition-colors duration-300
                          ${
                            isActive
                              ? "bg-[var(--color-beige)]"
                              : "hover:bg-[var(--color-beige)]/60"
                          }
                        `}
                      >
                        <div className="flex items-center gap-4">
                          {/* Dot — now 16px */}
                          <span
                            className={`
                              h-4 w-4 rounded-full
                              ${
                                isActive
                                  ? "bg-[var(--color-brand-brown)]"
                                  : "bg-[var(--color-ink)]/20"
                              }
                            `}
                          />

                          {/* Question text — 16px */}
                          <span
                            className={`
                              text-[16px]
                              ${
                                isActive
                                  ? "text-[var(--color-ink)] font-medium"
                                  : "text-[var(--color-ink)]/70"
                              }
                            `}
                          >
                            {item.question}
                          </span>
                        </div>

                        <span
                        className={`
                            flex h-[22px] w-[22px] items-center justify-center
                            transition-transform
                            ${
                            isActive
                                ? "rotate-90 text-[var(--color-brand-brown)]"
                                : "text-[var(--color-ink)]/40"
                            }
                        `}
                        >
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-full w-full"
                        >
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* RIGHT – Answer */}
          <FadeUp delay={0.1}>
            <div className="relative bg-[#FAF8F6] rounded-[16px] p-12 lg:p-16 min-h-[600px] -top-10 flex items-center justify-center border border-[rgba(0,0,0,0.1)]">

              <div className="flex gap-8 max-w-[720px] w-full items-center">

                {/* Accent line */}
                <span className="w-[6px] self-stretch bg-[var(--color-brand-brown)]/60 ml-5" />

                {/* Answer content */}
                <div className="flex-1">
                  <h3 className="text-[24px] font-semibold text-[var(--color-ink)]">
                    {faqs[activeIndex].question}
                  </h3>

                  <p className="mt-4 text-[16px] leading-relaxed text-[var(--color-ink)]/80">
                    {faqs[activeIndex].answer}
                  </p>
                </div>

              </div>
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
