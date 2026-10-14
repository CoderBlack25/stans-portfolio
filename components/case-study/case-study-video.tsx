"use client";

import { useState, useRef, useEffect } from "react";
import { Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCaseStudyLightbox } from "./case-study-lightbox";

export type CaseStudyVideoProps = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  enlargeable?: boolean;
};

export function CaseStudyVideo({
  src,
  alt = "Case study video",
  width,
  height,
  className,
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  enlargeable = true,
}: CaseStudyVideoProps) {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { activeMedia, openMedia } = useCaseStudyLightbox();
  const isEnlarged = activeMedia?.src === src;

  // Pause inline video when enlarged modal is active, resume when closed
  useEffect(() => {
    if (!videoRef.current) return;
    if (isEnlarged) {
      videoRef.current.pause();
    } else if (isPlaying) {
      videoRef.current.play().catch(() => {});
    }
  }, [isEnlarged, isPlaying]);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const handleEnlarge = () => {
    if (!enlargeable) return;
    openMedia({
      type: "video",
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
      aria-label={enlargeable ? `View enlarged ${alt}` : undefined}
      className={cn(
        "group/video relative w-full overflow-hidden select-none",
        enlargeable &&
          "cursor-zoom-in rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent)",
        className,
      )}
    >
      <video
        ref={videoRef}
        src={src}
        width={width}
        height={height}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline={playsInline}
        controls={false}
        preload="auto"
        className="h-auto w-full object-cover transition-transform duration-300 ease-out group-hover/video:scale-[1.01]"
      />

      {/* Enlarge Hint Button */}
      {enlargeable && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleEnlarge();
          }}
          aria-label="Enlarge video"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 flex size-8 sm:size-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-all duration-200 hover:bg-black/80 hover:scale-105 active:scale-95 opacity-0 group-hover/video:opacity-100 sm:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <Maximize2 className="size-4" aria-hidden="true" />
        </button>
      )}

      {/* Play / Pause Toggle Button */}
      <button
        type="button"
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause video" : "Play video"}
        className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10 flex size-8 sm:size-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-all duration-200 hover:bg-black/80 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        {isPlaying ? (
          <span aria-hidden="true" className="text-xs font-semibold">
            ❚❚
          </span>
        ) : (
          <span aria-hidden="true" className="text-xs font-semibold">
            ▶
          </span>
        )}
      </button>
    </div>
  );
}

