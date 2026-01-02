"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Hamburger from "@/components/ui/Hamburger";
import Button from "@/components/ui/Button";

export default function Header() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="w-full bg-white text-ink font-medium">
      {/* Full-width nav bar */}
      <nav className="w-full h-[120px]" aria-label="Primary navigation">
        {/* Inner container */}
        <div className="mx-auto h-full flex items-center justify-between px-6 lg:px-24">
          
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src="/assets/logo/logo.svg"
            alt="Siru Living"
            width={180}
            height={50}
            className="h-[40px] lg:h-[80px] w-auto"
            priority
          />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-10 lg:gap-24 text-[16px] lg:text-[18px]">
            <li><Link className="hover:text-[var(--color-brand-brown)]" href="/about">About</Link></li>
            <li><Link className="hover:text-[var(--color-brand-brown)]" href="/services">Services</Link></li>
            <li><Link className="hover:text-[var(--color-brand-brown)]" href="/portfolio">Portfolio</Link></li>
            <li><Link className="hover:text-[var(--color-brand-brown)]" href="/blog">Blog</Link></li>
            <li><Link className="hover:text-[var(--color-brand-brown)]" href="/contact">Contact</Link></li>
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button href="/call-to-action">
              Start Your Journey
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            <Hamburger open={open} />
          </button>

        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div id="mobile-menu" className="md:hidden bg-white border-t">
          <ul className="flex flex-col gap-6 px-6 py-8 text-[18px]">
            <li><Link className="hover:text-[var(--color-brand-brown)]" href="/about" onClick={closeMenu}>About</Link></li>
            <li><Link className="hover:text-[var(--color-brand-brown)]" href="/services" onClick={closeMenu}>Services</Link></li>
            <li><Link className="hover:text-[var(--color-brand-brown)]" href="/portfolio" onClick={closeMenu}>Portfolio</Link></li>
            <li><Link className="hover:text-[var(--color-brand-brown)]" href="/blog" onClick={closeMenu}>Blog</Link></li>
            <li><Link className="hover:text-[var(--color-brand-brown)]" href="/contact" onClick={closeMenu}>Contact</Link></li>
            <li className="pt-2">
              <Button href="/call-to-action" className="w-full" onClick={closeMenu}>
                Start Your Journey
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
