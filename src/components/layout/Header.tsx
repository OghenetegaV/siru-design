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
    // Header is now relative so the absolute menu stays attached to it
    <header className="relative w-full bg-white text-ink font-medium z-50">
      {/* Full-width nav bar */}
      <nav className="w-full py-2 border-b border-black/5" aria-label="Primary navigation">
        <div className="mx-auto h-full flex items-center justify-between px-6 lg:px-24">
          
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/assets/logo/logo.svg"
              alt="Siru Living"
              width={100}
              height={100}
              className="md:h-[50px] lg:h-[100px]"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-10 lg:gap-24 text-[16px] lg:text-[18px]">
            <li><Link className="hover:text-[var(--color-brand-brown)] transition-colors" href="/about">About</Link></li>
            <li><Link className="hover:text-[var(--color-brand-brown)] transition-colors" href="/services">Services</Link></li>
            {/* <li><Link className="hover:text-[var(--color-brand-brown)] transition-colors" href="/portfolio">Projects</Link></li> */}
            <li><Link className="hover:text-[var(--color-brand-brown)] transition-colors" href="/blog">Journal</Link></li>
            <li><Link className="hover:text-[var(--color-brand-brown)] transition-colors" href="/contact">Contact</Link></li>
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button href="/booking/long-haul">
              Start Your Journey
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden cursor-pointer relative z-50"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            <Hamburger open={open} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU SYSTEM */}
      {open && (
        <>
          {/* 1. Backdrop Overlay: This detects the click outside to close the menu */}
          <div 
            className="fixed inset-0 bg-black/5 z-40 md:hidden"
            onClick={closeMenu}
          />

          {/* 2. Floating Menu: Set to absolute to overlap content */}
          <div 
            id="mobile-menu" 
            className="absolute top-full left-0 w-full bg-white shadow-xl z-50 md:hidden animate-in fade-in slide-in-from-top-2 duration-300"
          >
            <ul className="flex flex-col gap-6 px-6 py-10 text-[18px] border-t border-black/5">
              <li><Link className="hover:text-[var(--color-brand-brown)] block" href="/about" onClick={closeMenu}>About</Link></li>
              <li><Link className="hover:text-[var(--color-brand-brown)] block" href="/services" onClick={closeMenu}>Services</Link></li>
              {/* <li><Link className="hover:text-[var(--color-brand-brown)] block" href="/portfolio" onClick={closeMenu}>Projects</Link></li> */}
              <li><Link className="hover:text-[var(--color-brand-brown)] block" href="/blog" onClick={closeMenu}>Journal</Link></li>
              <li><Link className="hover:text-[var(--color-brand-brown)] block" href="/contact" onClick={closeMenu}>Contact</Link></li>
              <li className="pt-4">
                <Button href="/booking/long-haul" className="w-full justify-center" onClick={closeMenu}>
                  Start Your Journey
                </Button>
              </li>
            </ul>
          </div>
        </>
      )}
    </header>
  );
}