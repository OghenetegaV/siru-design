"use client";

import FadeUp from "@/components/motion/FadeUp";
import Button from "@/components/ui/Button";

/**
 * Short Haul Booking Page
 * Destination: studio@sirudesign.co
 */

export default function ShortHaulBookingPage() {
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
    const body = `Hello SiRu Design,\n\nI would like to book a Short Haul session.\n\nClient Details:\n- Name: ${name}\n- Email: ${email}\n- Project Location: ${location}\n\nSession Focus:\n${focus}\n\nLooking forward to the session.`;

    // Encode for URL and trigger mailto
    const mailtoUrl = `mailto:${contactEmail}?subject=Short Haul Booking Inquiry - ${name}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoUrl;
  };

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
              Share a few details so we can prepare for your design session.
            </p>
          </FadeUp>

          {/* Divider */}
          <div className="mt-6 h-px w-full bg-[var(--color-brand-brown)]/30" />

          {/* Form */}
          <FadeUp delay={0.15}>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>

              {/* Full Name */}
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

              {/* Email */}
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

              {/* Location */}
              <div>
                <label className="block text-[18px] font-medium text-[var(--color-ink)] mb-2">
                  Project Location
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="e.g. London, UK"
                  className="w-full h-[46px] rounded-[6px] border border-[var(--color-brand-brown)]/40 px-4 text-[14px] focus:outline-none focus:border-[var(--color-brand-brown)]"
                />
              </div>

              {/* Focus */}
              <div>
                <label className="block text-[18px] font-medium text-[var(--color-ink)] mb-2">
                  Your focus
                </label>
                <textarea
                  name="focus"
                  rows={4}
                  placeholder="What do you need clarity on right now? (e.g., floor plans, color palette, kitchen layout)"
                  className="w-full rounded-[6px] border border-[var(--color-brand-brown)]/40 px-4 py-3 text-[14px] resize-none focus:outline-none focus:border-[var(--color-brand-brown)]"
                />
              </div>

              {/* Submit */}
              <div className="pt-2">
                <Button type="submit" className="text-[14px] px-5 py-2 w-full sm:w-auto">
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