"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

type MotionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function MotionReveal({
  children,
  className,
  delay = 0,
}: MotionRevealProps) {
  return (
    <motion.div
      data-mobile-entry
      initial={{
        opacity: 0,
        y: 24,
        clipPath: "inset(0 0 100% 0)",
      }}
      animate={{
        opacity: 1,
        y: 0,
        clipPath: "inset(0 0 0% 0)",
      }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
