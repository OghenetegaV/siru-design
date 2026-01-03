"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import FadeUp from "@/components/motion/FadeUp";
import Button from "@/components/ui/Button";

const steps = [
  {
    text: "We review your project details.",
    icon: "/assets/icons/search-icon.svg",
  },
  {
    text: "We recommend the best journey for you.",
    icon: "/assets/icons/location-icon.svg",
  },
  {
    text: "We arrange a discovery call.",
    icon: "/assets/icons/phone-icon.svg",
  },
];

export default function StartYourJourney() {
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: ""
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const adminEmail = "info@sirudesign.co";
    const subject = encodeURIComponent(`Start Your Journey: ${formData.name}`);
    
    // Updated body with the short intro
    const body = encodeURIComponent(
      `Hi, I would like to start my journey with Siru Design Co.\n\n` +
      `Here are my details:\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Project Description:\n${formData.description}`
    );

    window.location.href = `mailto:${adminEmail}?subject=${subject}&body=${body}`;
    
    setTimeout(() => {
      router.push("/");
    }, 500);
  };

  return (
    <section className="w-full bg-[var(--color-beige)]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-28">

        <div className="relative grid grid-cols-1 lg:grid-cols-2 bg-white rounded-[16px] overflow-hidden">

          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-px bg-[var(--color-brand-brown)]/50" />

          <div className="p-10 lg:p-14 flex flex-col justify-between">
            <div>
              <FadeUp>
                <h2 className="text-[40px] sm:text-[48px] lg:text-[56px] font-semibold text-[var(--color-ink)]">
                  Start Your Journey
                </h2>
              </FadeUp>

              <FadeUp>
                <div className="mt-4 h-px w-full bg-[var(--color-brand-brown)]/50" />
              </FadeUp>

              <FadeUp delay={0.1}>
                <p className="mt-6 text-[18px] md:text-[22px] leading-relaxed text-[var(--color-ink)]/80 max-w-[420px]">
                  Tell us about your project, and we’ll guide you towards the
                  most suitable next step.
                </p>
              </FadeUp>

              <FadeUp delay={0.2}>
                <div className="mt-6 h-px w-full bg-[var(--color-brand-brown)]/50" />
              </FadeUp>

              <FadeUp delay={0.2}>
                <div className="mt-10">
                  <h3 className="text-[18px] md:text-[22px] font-semibold text-[var(--color-ink)]">
                    What happens next?
                  </h3>

                  <ul className="mt-6 space-y-4 text-[18px] md:text-[22px] text-[var(--color-ink)]/80">
                    {steps.map((step, index) => (
                      <li key={index} className="flex items-start gap-4">
                        <Image
                          src={step.icon}
                          alt=""
                          width={22}
                          height={22}
                          className="mt-[4px] flex-shrink-0"
                        />
                        <span>
                          <span className=" mr-2">{index + 1}.</span>
                          {step.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            </div>
          </div>

          <FadeUp delay={0.15}>
            <form
              onSubmit={handleSubmit}
              className="p-10 lg:p-14 flex flex-col gap-6"
              aria-label="Start your journey form"
            >
              <div>
                <label className="block text-[18px] md:text-[22px] font-medium text-[var(--color-ink)] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full rounded-[8px] border border-[var(--color-brand-brown)]/50 px-4 py-3 text-[16px] focus:outline-none focus:ring-1 focus:ring-[var(--color-brand-brown)]"
                />
              </div>

              <div>
                <label className="block text-[18px] md:text-[22px] font-medium text-[var(--color-ink)] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full rounded-[8px] border border-[var(--color-brand-brown)]/50 px-4 py-3 text-[16px] focus:outline-none focus:ring-1 focus:ring-[var(--color-brand-brown)]"
                />
              </div>

              <div>
                <label className="block text-[18px] md:text-[22px] font-medium text-[var(--color-ink)] mb-2">
                  Brief Description
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="w-full rounded-[8px] border border-[var(--color-brand-brown)]/50 px-4 py-3 text-[16px] resize-none focus:outline-none focus:ring-1 focus:ring-[var(--color-brand-brown)]"
                />
              </div>

              <div className="pt-4">
                <Button type="submit">
                  Submit Enquiry
                </Button>
              </div>
            </form>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}