"use client";

import FadeUp from "@/components/motion/FadeUp";
import Button from "@/components/ui/Button";

/**
 * Short Break Booking Page
 * Destination: studio@sirudesign.co
 */

export default function ShortBreakBookingPage() {
  const contactEmail = "studio@sirudesign.co";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const location = formData.get("location");
    const focus = formData.get("focus");

    // Construct the email body specific to Short Break
    const body = `Hello SiRu Design,\n\nI would like to book a Short Break session.\n\nClient Details:\n- Name: ${name}\n- Email: ${email}\n- Project Location: ${location}\n\nWhat I need help with:\n${focus}\n\nTalk soon!`;

    const mailtoUrl = `mailto:${contactEmail}?subject=Short Break Inquiry - ${name}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoUrl;
  };

  return (
    <main className="w-full bg-[var(--color-beige)]">
      <section className="mx-auto max-w-[1440px] px-6 lg:px-12 py-24">
        <div className="mx-auto max-w-[720px] bg-white rounded-[16px] p-10 sm:p-12 lg:p-14 shadow-sm">

          {/* Header */}
          <FadeUp>
            <h1 className="text-[32px] sm:text-[42px] font-semibold text-[var(--color-brand-brown)]">
              Take a Short Break
            </h1>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="mt-2 text-[22px] text-[var(--color-ink)]/70">
              A quick design refresh or a second opinion. Share your details below.
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
                  placeholder="Your name"
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
                  placeholder="email@example.com"
                  required
                  className="w-full h-[46px] rounded-[6px] border border-[var(--color-brand-brown)]/40 px-4 text-[14px] focus:outline-none focus:border-[var(--color-brand-brown)]"
                />
              </div>

              {/* Location */}
              <div>
                <label className="block text-[18px] font-medium text-[var(--color-ink)] mb-2">
                  Location
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
                  What’s on your mind?
                </label>
                <textarea
                  name="focus"
                  rows={4}
                  placeholder="Tell us about the specific design hurdle you want to clear."
                  className="w-full rounded-[6px] border border-[var(--color-brand-brown)]/40 px-4 py-3 text-[14px] resize-none focus:outline-none focus:border-[var(--color-brand-brown)]"
                />
              </div>

              {/* Submit */}
              <div className="pt-2">
                <Button type="submit" className="text-[14px] px-5 py-2 w-full sm:w-auto">
                  Book a Short Break
                </Button>
              </div>

            </form>
          </FadeUp>

        </div>
      </section>
    </main>
  );
}