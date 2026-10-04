"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

type MotionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  offsetY?: number;
  initialScale?: number;
  /**
   * When false, the element stays in its hidden state.
   * When it flips to true, the reveal plays (including `delay`).
   * Defaults to true so existing usages behave exactly as before.
   */
  ready?: boolean;
};

// Start: fully clipped from the bottom, so the content wipes in downward.
const HIDDEN_CLIP = "inset(0% 0% 100% 0%)";

// End: clip region is larger than the element so hover effects can overflow.
const REVEALED_CLIP = "inset(-20% -20% -20% -20%)";

export function MotionReveal({
  children,
  className,
  delay = 0,
  offsetY = 24,
  initialScale = 1,
  ready = true,
}: MotionRevealProps) {
  const hidden = {
    opacity: 0,
    y: offsetY,
    scale: initialScale,
    clipPath: HIDDEN_CLIP,
  };

  const revealed = {
    opacity: 1,
    y: 0,
    scale: 1,
    clipPath: REVEALED_CLIP,
  };

  return (
    <motion.div
      data-mobile-entry
      initial={hidden}
      // While not ready, animate targets the same values as initial,
      // so nothing moves. Once ready flips, the full reveal plays.
      animate={ready ? revealed : hidden}
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
