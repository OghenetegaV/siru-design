"use client";

import FadeUp from "@/components/motion/FadeUp";
import Button from "@/components/ui/Button";

export default function DayTripBookingPage() {
  const contactEmail = "studio@sirudesign.co";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Extract data from the form
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const location = formData.get("location");
    const focus = formData.get("focus");

    // Construct the email body
    const body = `Hello SiRu Design,\n\nI would like to book a Day Trip session.\n\nDetails:\n- Name: ${name}\n- Email: ${email}\n- Project Location: ${location}\n\nFocus Area:\n${focus}\n\nLooking forward to hearing from you.`;

    // Encode for URL and trigger mailto
    const mailtoUrl = `mailto:${contactEmail}?subject=Day Trip Booking Inquiry - ${name}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoUrl;
  };

  return (
    <main className="w-full bg-[var(--color-beige)]">
      <section className="mx-auto max-w-[1440px] px-6 lg:px-12 py-24">
        <div className="mx-auto max-w-[720px] bg-white rounded-[16px] p-10 sm:p-12 lg:p-14 shadow-sm">
          
          <FadeUp>
            <h1 className="text-[32px] sm:text-[42px] font-semibold text-[var(--color-brand-brown)]">
              Start your Day Trip
            </h1>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="mt-2 text-[22px] text-[var(--color-ink)]/70">
              Tell us about your space so we can map out your design direction.
            </p>
          </FadeUp>

          <div className="mt-6 h-px w-full bg-[var(--color-brand-brown)]/30" />

          <FadeUp delay={0.15}>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-[18px] font-medium text-[var(--color-ink)] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="w-full h-[46px] rounded-[6px] border border-[var(--color-brand-brown)]/40 px-4 text-[14px] focus:outline-none focus:border-[var(--color-brand-brown)]"
                />
              </div>

              <div>
                <label className="block text-[18px] font-medium text-[var(--color-ink)] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@email.com"
                  required
                  className="w-full h-[46px] rounded-[6px] border border-[var(--color-brand-brown)]/40 px-4 text-[14px] focus:outline-none focus:border-[var(--color-brand-brown)]"
                />
              </div>

              <div>
                <label className="block text-[18px] font-medium text-[var(--color-ink)] mb-2">
                  Project Location
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="e.g. South London, UK"
                  className="w-full h-[46px] rounded-[6px] border border-[var(--color-brand-brown)]/40 px-4 text-[14px] focus:outline-none focus:border-[var(--color-brand-brown)]"
                />
              </div>

              <div>
                <label className="block text-[18px] font-medium text-[var(--color-ink)] mb-2">
                  What area of your home are we focusing on?
                </label>
                <textarea
                  name="focus"
                  rows={4}
                  placeholder="Tell us about the room or challenge you'd like to tackle..."
                  className="w-full rounded-[6px] border border-[var(--color-brand-brown)]/40 px-4 py-3 text-[14px] resize-none focus:outline-none focus:border-[var(--color-brand-brown)]"
                />
              </div>

              <div className="pt-2">
                <Button type="submit" className="text-[14px] px-5 py-2 w-full sm:w-auto">
                  Request a Day Trip
                </Button>
              </div>
            </form>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}