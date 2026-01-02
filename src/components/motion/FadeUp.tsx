"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  immediate?: boolean;
}

export default function FadeUp({
  children,
  delay = 0,
  immediate = false,
}: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={immediate ? { opacity: 1, y: 0 } : undefined}
      whileInView={
        immediate ? undefined : { opacity: 1, y: 0 }
      }
      viewport={
        immediate
          ? undefined
          : { once: true, margin: "-120px" }
      }
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
