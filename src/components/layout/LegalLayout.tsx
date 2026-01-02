import React from "react";

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <section className="bg-[var(--color-beige)] min-h-screen py-24 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-16 shadow-sm rounded-sm">
        <h1 className="text-[40px] font-semibold text-[var(--color-ink)] leading-tight mb-2">
          {title}
        </h1>
        <p className="text-sm text-[var(--color-ink)]/50 mb-12 uppercase tracking-widest">
          Last Updated: {lastUpdated}
        </p>
        
        <div className="prose prose-slate max-w-none 
          prose-h2:text-2xl prose-h2:font-semibold prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-[var(--color-ink)]
          prose-p:text-[16px] prose-p:leading-relaxed prose-p:text-[var(--color-ink)]/80 prose-p:mb-6
          prose-li:text-[var(--color-ink)]/80 prose-li:mb-2 prose-strong:text-[var(--color-ink)]">
          {children}
        </div>
      </div>
    </section>
  );
}