"use client";

import FadeUp from "@/components/motion/FadeUp";
import Button from "@/components/ui/Button";

/**
 * Long Haul (Bespoke) Booking Page
 * Destination: studio@sirudesign.co
 */

export default function LongHaulBookingPage() {
  const contactEmail = "studio@sirudesign.co";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const projectType = formData.get("projectType");
    const location = formData.get("location");
    const details = formData.get("details");

    // Construct the email body for a full bespoke project
    const body = `Hello SiRu Design,\n\nI am interested in the Long Haul (Bespoke) service.\n\nProject Details:\n- Name: ${name}\n- Email: ${email}\n- Project Type: ${projectType}\n- Location: ${location}\n\nProject Brief / Notes:\n${details}\n\nI would like to schedule an initial conversation to discuss this further.`;

    const mailtoUrl = `mailto:${contactEmail}?subject=Long Haul Project Inquiry - ${name}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoUrl;
  };

  return (
    <main className="w-full bg-[var(--color-beige)]">
      <section className="mx-auto max-w-[1440px] px-6 lg:px-12 py-24">
        <div className="mx-auto max-w-[720px] bg-white rounded-[16px] p-10 sm:p-12 lg:p-14 shadow-sm">

          {/* Header */}
          <FadeUp>
            <h1 className="text-[32px] sm:text-[42px] font-semibold text-[var(--color-brand-brown)]">
              The Long Haul
            </h1>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="mt-2 text-[22px] text-[var(--color-ink)]/70">
              For full-scale transformations and bespoke design journeys.
            </p>
          </FadeUp>

          {/* Divider */}
          <div className="mt-6 h-px w-full bg-[var(--color-brand-brown)]/30" />

          {/* Form */}
          <FadeUp delay={0.15}>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Project Type Selection */}
                <div>
                  <label className="block text-[18px] font-medium text-[var(--color-ink)] mb-2">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    className="w-full h-[46px] rounded-[6px] border border-[var(--color-brand-brown)]/40 px-4 text-[14px] focus:outline-none focus:border-[var(--color-brand-brown)] bg-white"
                  >
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial / Hospitality</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-[18px] font-medium text-[var(--color-ink)] mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    placeholder="City, Country"
                    className="w-full h-[46px] rounded-[6px] border border-[var(--color-brand-brown)]/40 px-4 text-[14px] focus:outline-none focus:border-[var(--color-brand-brown)]"
                  />
                </div>
              </div>

              {/* Project Brief */}
              <div>
                <label className="block text-[18px] font-medium text-[var(--color-ink)] mb-2">
                  Project Brief
                </label>
                <textarea
                  name="details"
                  rows={6}
                  placeholder="Tell us about the scope of the project, your timeline, and what you hope to achieve."
                  className="w-full rounded-[6px] border border-[var(--color-brand-brown)]/40 px-4 py-3 text-[14px] resize-none focus:outline-none focus:border-[var(--color-brand-brown)]"
                />
              </div>

              {/* Submit */}
              <div className="pt-2">
                <Button type="submit" className="text-[14px] px-5 py-2 w-full sm:w-auto">
                  Enquire About Long Haul
                </Button>
              </div>

            </form>
          </FadeUp>

        </div>
      </section>
    </main>
  );
}