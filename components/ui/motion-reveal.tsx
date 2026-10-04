"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

type MotionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  offsetY?: number;
  initialScale?: number;
};

// Start: fully clipped from the bottom, so the content wipes in downward.
// Use explicit percentages on all four sides so Motion can interpolate them.
const HIDDEN_CLIP = "inset(0% 0% 100% 0%)";

// End: the clip region is larger than the element on every side.
// The old end value was "inset(0 0 0% 0)", which kept clipping to the exact
// box forever and cut off anything that scaled or tilted past its edges.
// Negative insets grow the visible region, so hover effects can overflow freely.
const REVEALED_CLIP = "inset(-20% -20% -20% -20%)";

export function MotionReveal({
  children,
  className,
  delay = 0,
  offsetY = 24,
  initialScale = 1,
}: MotionRevealProps) {
  return (
    <motion.div
      data-mobile-entry
      initial={{
        opacity: 0,
        y: offsetY,
        scale: initialScale,
        clipPath: HIDDEN_CLIP,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        clipPath: REVEALED_CLIP,
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
