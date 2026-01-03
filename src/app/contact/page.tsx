"use client";

// import Image from "next/image";
import FadeUp from "@/components/motion/FadeUp";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  const adminEmail = "info@sirudesign.co";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const body = `Hello SiRu Design,\n\nYou have received a new general inquiry.\n\nFrom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    const mailtoUrl = `mailto:${adminEmail}?subject=General Inquiry - ${name}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <main
      className="w-full bg-[var(--color-beige)] relative pt-6 md:pt-12"
      aria-labelledby="contact-heading"
    >
      {/* Decorative chair image */}
      {/* <div className="pointer-events-none absolute bottom-0 left-0 z-0 hidden sm:block">
        <Image
          src="/assets/images/contact/contact-us-image.png"
          alt=""
          width={420}
          height={420}
          className="w-[260px] sm:w-[340px] lg:w-[420px]"
        />
      </div> */}

      <section className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="relative z-10 pb-20">
          <header className="w-full text-center">
            <FadeUp>
              <h1
                id="contact-heading"
                className="text-[40px] sm:text-[48px] lg:text-[56px] font-semibold text-[var(--color-ink)]"
              >
                Get in touch
              </h1>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="mt-4 text-[18px] sm:text-[20px] leading-relaxed text-[var(--color-ink)]/80 max-w-[720px] mx-auto">
                Whether you’re at the beginning of your journey or ready to move
                forward, we’d love to hear about your project.
              </p>
            </FadeUp>
          </header>

          <div className="mx-auto mt-8 h-px w-full bg-[var(--color-brand-brown)]/30" />

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 items-start">
            {/* LEFT — Context */}
            <FadeUp>
              <aside className="space-y-10 max-w-[520px]">
                <div>
                  <h2 className="text-[22px] font-semibold text-[var(--color-ink)]">
                    Contact details
                  </h2>

                  <div className="mt-4 space-y-4 text-[18px] text-[var(--color-ink)]/80">
                    <p>
                      <strong>Email:</strong><br />
                      <a href={`mailto:${adminEmail}`} className="underline underline-offset-4">
                        {adminEmail}
                      </a>
                    </p>
                    <p>
                      <strong>Phone:</strong><br />
                      +44 7958 243 633
                    </p>
                    <p>
                      <strong>Studio:</strong><br />
                      23 Nine Elms Avenue, PO BOX. UB8 3TJ<br />
                      London & Remote
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-[22px] font-semibold text-[var(--color-ink)]">
                    What happens next?
                  </h2>
                  <ol className="mt-4 space-y-3 text-[18px] text-[var(--color-ink)]/80 list-decimal list-inside">
                    <li>We review your message.</li>
                    <li>We recommend the best journey for you.</li>
                    <li>We arrange a discovery call if appropriate.</li>
                  </ol>
                </div>
              </aside>
            </FadeUp>

            {/* RIGHT — Form */}
            <FadeUp delay={0.1}>
              <form
                className="bg-white rounded-[16px] p-8 sm:p-10 lg:p-12 space-y-6"
                aria-label="Contact form"
                onSubmit={handleSubmit}
              >
                <div>
                  <label htmlFor="name" className="block text-[16px] font-medium text-[var(--color-ink)] mb-2">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full h-[52px] rounded-[8px] border border-[var(--color-brand-brown)]/40 px-4 text-[16px] focus:outline-none focus:border-[var(--color-brand-brown)]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[16px] font-medium text-[var(--color-ink)] mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full h-[52px] rounded-[8px] border border-[var(--color-brand-brown)]/40 px-4 text-[16px] focus:outline-none focus:border-[var(--color-brand-brown)]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[16px] font-medium text-[var(--color-ink)] mb-2">
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full rounded-[8px] border border-[var(--color-brand-brown)]/40 px-4 py-3 text-[16px] resize-none focus:outline-none focus:border-[var(--color-brand-brown)]"
                  />
                </div>

                <div className="pt-2">
                  <Button type="submit">Send message</Button>
                </div>
              </form>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* SEO schema updated with info@ address */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Siru Design Co",
            url: "https://sirudesign.co",
            address: {
              "@type": "PostalAddress",
              streetAddress: "23 Nine Elms Avenue",
              postOfficeBoxNumber: "UB8 3TJ",
              addressLocality: "London",
              addressCountry: "UK"
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+44 7958 243 633",
              email: "info@sirudesign.co",
              contactType: "customer support",
            },
          }),
        }}
      />
    </main>
  );
}