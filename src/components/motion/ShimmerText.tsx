"use client";

import React from "react";

interface ShimmerTextProps {
  text: string;
  className?: string;
}

export default function ShimmerText({ text, className = "" }: ShimmerTextProps) {
  return (
    <h1 
      className={`
        ${className} 
        inline-block
        bg-gradient-to-r from-[#ffffff]/100 from-0% via-[#a66a3f]/50 via-80% to-[#cc5116]/50 to-100% 
        bg-[length:200%_auto] 
        bg-clip-text 
        text-transparent 
        animate-shimmer
      `}
    >
      {text}
    </h1>
  );
}