"use client";

import Image, { type StaticImageData } from "next/image";
import { Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCaseStudyLightbox } from "./case-study-lightbox";

export type CaseStudyImageProps = {
  src: StaticImageData;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  enlargeable?: boolean;
};

export function CaseStudyImage({
  src,
  alt,
  width = 1600,
  height = 1000,
  className,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 800px",
  enlargeable = true,
}: CaseStudyImageProps) {
  const { openMedia } = useCaseStudyLightbox();

  const handleEnlarge = () => {
    if (!enlargeable) return;
    openMedia({
      type: "image",
      src,
      alt,
      width,
      height,
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!enlargeable) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleEnlarge();
    }
  };

  return (
    <div
      role={enlargeable ? "button" : undefined}
      tabIndex={enlargeable ? 0 : undefined}
      onClick={handleEnlarge}
      onKeyDown={handleKeyDown}
      aria-label={enlargeable ? `View enlarged ${alt || "image"}` : undefined}
      className={cn(
        "group/image relative w-full overflow-hidden select-none",
        enlargeable &&
          "cursor-zoom-in rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent)",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        className="h-auto w-full object-cover transition-transform duration-300 ease-out group-hover/image:scale-[1.01]"
      />
      {enlargeable && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-3 right-3 sm:top-4 sm:right-4 z-10 flex size-8 sm:size-9 items-center justify-center rounded-full bg-black/60 text-white opacity-0 backdrop-blur-sm transition-all duration-200 group-hover/image:opacity-100 group-hover/image:scale-100 scale-90"
        >
          <Maximize2 className="size-4" />
        </div>
      )}
    </div>
  );
}
