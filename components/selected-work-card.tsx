"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { works } from "@/data/works";

const MotionLink = motion.create(Link);
type Work = (typeof works)[number];

const imageVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.04,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const detailsVariants: Variants = {
  rest: { y: 0 },
  hover: {
    y: -2,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function SelectedWorkCard({ work }: { work: Work }) {
  const [canHover, setCanHover] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const updateCanHover = () => setCanHover(mediaQuery.matches);

    updateCanHover();
    mediaQuery.addEventListener("change", updateCanHover);
    return () => mediaQuery.removeEventListener("change", updateCanHover);
  }, []);

  const hoverEnabled = canHover && !shouldReduceMotion;

  return (
    <MotionLink
      href={work.href}
      initial="rest"
      whileHover={hoverEnabled ? "hover" : undefined}
      variants={{
        rest: { y: 0, scale: 1 },
        hover: {
          y: -4,
          scale: 1.01,
          transition: {
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1] as const,
          },
        },
      }}
      className="group block overflow-hidden rounded-lg border border-(--color-muted-light) bg-(--color-surface-light) dark:border-(--color-surface-4) dark:bg-(--color-surface-dark)"
    >
      <div className="relative aspect-527/310 w-full overflow-hidden rounded-t-lg">
        <motion.div
          variants={hoverEnabled ? imageVariants : undefined}
          className="absolute inset-0"
        >
          <Image
            src={work.featuredSrc}
            alt=""
            fill
            sizes="(max-width: 591px) calc(100vw - 64px), 527px"
            placeholder="blur"
            className="object-cover"
          />
        </motion.div>
      </div>

      <motion.div
        variants={hoverEnabled ? detailsVariants : undefined}
        className="flex items-start justify-between gap-4 p-4"
      >
        <div className="min-w-0 space-y-1.5">
          <h3 className="text-sm font-medium text-(--color-surface-1) dark:text-white">
            {work.title}
          </h3>
          <p className="text-xs text-(--color-muted-dark) dark:text-(--color-muted)">
            {work.description}
          </p>
        </div>

        <span className="shrink-0 rounded-full border border-(--color-muted-light) px-2 py-1 text-[10px] leading-none text-(--color-surface-muted) dark:border-(--color-surface-4) dark:text-white">
          {work.year}
        </span>
      </motion.div>
    </MotionLink>
  );
}
