"use client";

import Image from "next/image";
import FadeUp from "@/components/motion/FadeUp";
import Button from "@/components/ui/Button";

type ServiceDetailProps = {
  breadcrumb: string;
  eyebrow: string;
  title: string;
  intro: string;
  description: string;
  whatFor: string[];
  whatYouGet: string[];
  duration: string;
  cta: string;
  ctaLabel: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt: string;
};

export default function ServiceDetail({
  breadcrumb,
  eyebrow,
  title,
  intro,
  description,
  whatFor,
  whatYouGet,
  duration,
  cta,
  ctaLabel,
  ctaHref,
  imageSrc,
  imageAlt,
}: ServiceDetailProps) {
  return (
    <section className="w-full bg-[var(--color-beige)]">
      <div className="mx-auto max-w-[1027px] px-6 lg:px-12 py-20">

        {/* Breadcrumb */}
        <FadeUp>
          <div className="flex items-center gap-4">
            <span className="text-[12px] tracking-wide text-[var(--color-brand-brown)] whitespace-nowrap">
              {breadcrumb}
            </span>
            <span className="h-px flex-1 bg-[var(--color-brand-brown)]/30" />
          </div>
        </FadeUp>

        {/* Layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] items-stretch lg:min-h-[780px]">

          {/* LEFT */}
          <FadeUp>
            <div className="max-w-[520px] flex flex-col h-full">

              <p className="text-[18px] tracking-[0.25em] text-[var(--color-brand-brown)] uppercase">
                {eyebrow}
              </p>

              <h1 className="mt-3 pr-6 text-[36px] font-semibold text-[var(--color-ink)]">
                {title}
              </h1>

              <p className="mt-4 pr-6 text-[18px] text-[var(--color-ink)]">
                {intro}
              </p>

              <div className="mt-8 ml-6 bg-white p-6">
                <p className="text-[18px] leading-relaxed text-[var(--color-ink)]/80">
                  {description}
                </p>
              </div>

              <div className="mt-10 pr-6">
                <h3 className="text-[18px] font-medium text-[var(--color-ink)]">
                  What it’s for
                </h3>
                <ul className="mt-4 space-y-2 text-[18px] list-disc list-inside">
                  {whatFor.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pr-6">
                <h3 className="text-[18px] font-medium text-[var(--color-ink)]">
                  What you’ll get
                </h3>
                <ul className="mt-4 space-y-2 text-[18px] list-disc list-inside">
                  {whatYouGet.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

            </div>
          </FadeUp>

          {/* RIGHT */}
          <FadeUp delay={0.1}>
            <div className="flex flex-col h-full">

              <div className="relative flex-1 w-full mb-6">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover object-[50%_65%]"
                  priority
                />
              </div>

              <div className="relative pt-6 text-center">
                <p className="text-[18px] px-6">
                  <span className="font-bold">Duration:</span> {duration}
                </p>

                <div className="mx-auto my-6 h-px w-[70%] bg-[var(--color-brand-brown)]/30" />

                <p className="text-[18px] px-6">{cta}</p>

                <div className="mt-4">
                  <Button href={ctaHref} className="text-[14px] px-5 py-2">
                    {ctaLabel}
                  </Button>
                </div>

                <div className="absolute left-0 top-0 h-full w-px bg-[var(--color-brand-brown)]/30" />
              </div>

            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
