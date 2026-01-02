"use client";

import React from "react";

interface BlurRevealProps {
  text: string;
  delay?: number;
  className?: string;
}

export default function BlurReveal({ text, delay = 0, className = "" }: BlurRevealProps) {
  // Split text by spaces
  const words = text.split(" ");

  return (
    <h1 className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block opacity-0 animate-fade-in-blur"
          style={{ 
            // This staggers the entry: 0.3s, 0.6s, 0.9s etc.
            animationDelay: `${delay + (i * 0.3)}s`,
            marginRight: '0.25em' 
          }}
        >
          {word}
        </span>
      ))}
    </h1>
  );
}