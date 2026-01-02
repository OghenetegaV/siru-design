"use client";

import Link from "next/link";
import {
  Instagram,
  Linkedin,
  MessageCircle,
  Facebook,
  Mail,
  Newspaper,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[var(--color-ink)] text-white">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16">

        {/* Grid Container */}
        <div className="relative grid grid-cols-1 lg:grid-cols-[1.35fr_1fr_1fr_1fr] gap-12 lg:gap-0 text-center lg:text-left">

          {/* Column 1 (wider) */}
          <div className="lg:pr-12">
            <h3 className="text-[32px] font-medium text-white/90">
              Siru Design Co
            </h3>

            {/* Horizontal divider */}
            <div className="mx-auto lg:mx-0 mt-6 h-px w-full bg-[var(--color-brand-brown)]/30" />

            <p className="mt-6 text-[20px] leading-relaxed text-white/65 max-w-[360px] mx-auto lg:mx-0">
              Thoughtful interior design guided by people, place, and purpose.
            </p>

            <p className="mt-5 text-[16px] italic leading-relaxed text-white/55 max-w-[380px] mx-auto lg:mx-0">
              Design is a journey — here we help guide it with insight, clarity,
              and careful decisions.
            </p>
          </div>

          {/* Vertical divider 1 */}
          <div
            className="hidden lg:block absolute top-0 h-full w-px bg-[var(--color-brand-brown)]/20"
            style={{ left: "31.03%" }}
          />

          {/* Column 2 */}
          <div className="lg:px-12">
            <h4 className="text-[20px] font-medium text-white/80">
              Explore
            </h4>

            <ul className="mt-6 space-y-4 text-[16px] text-white/60">
              <li><Link href="/" className="hover:text-white/85">Home</Link></li>
              <li><Link href="/about" className="hover:text-white/85">About</Link></li>
              <li><Link href="/services" className="hover:text-white/85">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-white/85">Projects</Link></li>
              <li><Link href="/blog" className="hover:text-white/85">Journal</Link></li>
              <li><Link href="/contact" className="hover:text-white/85">Contact</Link></li>
            </ul>
          </div>

          {/* Vertical divider 2 */}
          <div
            className="hidden lg:block absolute top-0 h-full w-px bg-[var(--color-brand-brown)]/20"
            style={{ left: "54.02%" }}
          />

          {/* Column 3 */}
          <div className="lg:px-12">
            <h4 className="text-[20px] font-medium text-white/80">
              Start Your Journey
            </h4>

            <ul className="mt-6 space-y-4 text-[16px] text-white/60">
              <li><Link href="/contact" className="hover:text-white/85">Book a Discovery Call</Link></li>
              <li><Link href="/services/day-trip" className="hover:text-white/85">Get a Day Trip</Link></li>
              <li><Link href="/services/short-haul" className="hover:text-white/85">Short Haul</Link></li>
              <li><Link href="/services/day-trip" className="hover:text-white/85">Day Trip</Link></li>
              <li><Link href="/services/long-haul" className="hover:text-white/85">Long Haul</Link></li>
            </ul>
          </div>

          {/* Vertical divider 3 */}
          <div
            className="hidden lg:block absolute top-0 h-full w-px bg-[var(--color-brand-brown)]/20"
            style={{ left: "77.01%" }}
          />

          {/* Column 4 */}
{/* Column 4 - Connect */}
          <div className="lg:pl-12 flex flex-col items-center lg:items-start">
            <h4 className="text-[20px] font-medium text-white/80">
              Connect
            </h4>

            <ul className="mt-6 space-y-4 text-[16px] text-white/60 w-full">
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center lg:justify-start gap-3 hover:text-white/85 transition-colors"
                >
                  <Instagram className="h-4 w-4 opacity-70" />
                  <span>Instagram</span>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center justify-center lg:justify-start gap-3 hover:text-white/85 transition-colors"
                >
                  <Linkedin className="h-4 w-4 opacity-70" />
                  <span>LinkedIn</span>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center justify-center lg:justify-start gap-3 hover:text-white/85 transition-colors"
                >
                  <MessageCircle className="h-4 w-4 opacity-70" />
                  <span>WhatsApp</span>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center justify-center lg:justify-start gap-3 hover:text-white/85 transition-colors"
                >
                  <Facebook className="h-4 w-4 opacity-70" />
                  <span>Facebook</span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:hello@sirudesign.co"
                  className="flex items-center justify-center lg:justify-start gap-3 hover:text-white/85 transition-colors"
                >
                  <Mail className="h-4 w-4 opacity-70" />
                  <span>Email</span>
                </a>
              </li>

              <li>
                <a
                  href="/newsletter"
                  className="flex items-center justify-center lg:justify-start gap-3 hover:text-white/85 transition-colors"
                >
                  <Newspaper className="h-4 w-4 opacity-70" />
                  <span>Newsletter Signup</span>
                </a>
              </li>
            </ul>
          </div>          
        </div> 

        {/* Bottom copyright */}
        <div className="mt-16 text-center text-[13px] text-white/45">
          <span>© {new Date().getFullYear()} Siru Design Co. All rights reserved. </span>
          <span><a href="/legal/privacy-policy" className="hover:underline hover:text-white/85">Privacy Policy. </a></span>
          <span><a href="/legal/terms-of-service" className="hover:underline hover:text-white/85">Terms of Service. </a></span>
        </div>

      </div>
    </footer>
  );
}