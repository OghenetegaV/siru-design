"use client";

import { motion } from "framer-motion";

interface ImageRevealProps {
  children: React.ReactNode;
  delay?: number;
  immediate?: boolean;
}

export default function ImageReveal({
  children,
  delay = 0,
  immediate = false,
}: ImageRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={immediate ? { opacity: 1, y: 0 } : undefined}
      whileInView={
        immediate ? undefined : { opacity: 1, y: 0 }
      }
      viewport={
        immediate
          ? undefined
          : { once: true, amount: 0.25 }
      }
      transition={{
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1],
        delay,
      }}
      whileHover={{
        y: -6,
        scale: 1.025,
        transition: {
          duration: 0.4,
          ease: "easeOut",
        },
      }}
    >
      {children}
    </motion.div>
  );
}
