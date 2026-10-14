"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useRef,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { X } from "lucide-react";

export type CaseStudyMediaItem = {
  type: "image" | "video";
  src: string;
  alt?: string;
  width?: number;
  height?: number;
};

type CaseStudyLightboxContextType = {
  activeMedia: CaseStudyMediaItem | null;
  openMedia: (item: CaseStudyMediaItem) => void;
  closeMedia: () => void;
};

const CaseStudyLightboxContext = createContext<CaseStudyLightboxContextType>({
  activeMedia: null,
  openMedia: () => {},
  closeMedia: () => {},
});

export function useCaseStudyLightbox() {
  return useContext(CaseStudyLightboxContext);
}

export function CaseStudyLightboxModal() {
  const { activeMedia, closeMedia } = useCaseStudyLightbox();
  const [mounted, setMounted] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Save previous active element and trap focus when opened
  useEffect(() => {
    if (activeMedia) {
      previousActiveElement.current = document.activeElement as HTMLElement | null;
      // Focus close button on next tick
      const timer = setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    } else if (previousActiveElement.current) {
      previousActiveElement.current.focus();
      previousActiveElement.current = null;
    }
  }, [activeMedia]);

  // Handle Escape key
  useEffect(() => {
    if (!activeMedia) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeMedia();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeMedia, closeMedia]);

  // Lock scroll with compensation for scrollbar width to prevent layout shift
  useEffect(() => {
    if (!activeMedia) return;

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [activeMedia]);

  // Auto-play enlarged video
  useEffect(() => {
    if (activeMedia?.type === "video" && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Fallback to muted playback if browser policy requires it
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.play().catch(() => {});
        }
      });
    }
  }, [activeMedia]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {activeMedia && (
        <motion.div
          key="case-study-lightbox-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label={activeMedia.alt || "Enlarged media view"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0.15 : 0.24,
            ease: "easeOut",
          }}
          onClick={closeMedia}
          className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md"
        >
          {/* Close button */}
          <button
            ref={closeButtonRef}
            type="button"
            onClick={closeMedia}
            aria-label="Close enlarged view"
            className="fixed top-[max(1rem,env(safe-area-inset-top))] right-[max(1rem,env(safe-area-inset-right))] sm:top-6 sm:right-6 z-120 flex size-10 sm:size-11 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md border border-white/15 shadow-xl transition-all duration-200 hover:bg-black/80 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <X className="size-5" aria-hidden="true" />
          </button>

          {/* Media Content */}
          <motion.div
            key="case-study-lightbox-content"
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, scale: 0.94, y: 12 }
            }
            animate={
              shouldReduceMotion
                ? { opacity: 1 }
                : { opacity: 1, scale: 1, y: 0 }
            }
            exit={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, scale: 0.94, y: 12 }
            }
            transition={{
              duration: shouldReduceMotion ? 0.15 : 0.28,
              ease: [0.16, 1, 0.3, 1],
            }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex flex-col items-center justify-center max-h-full max-w-full select-none"
          >
            {activeMedia.type === "video" ? (
              <video
                key={activeMedia.src}
                ref={videoRef}
                src={activeMedia.src}
                controls
                autoPlay
                playsInline
                preload="auto"
                className="max-h-[82dvh] max-w-[94vw] sm:max-h-[86dvh] sm:max-w-[88vw] h-auto w-auto object-contain rounded-lg shadow-2xl bg-black/80 focus:outline-none"
              />
            ) : (
              <Image
                src={activeMedia.src}
                alt={activeMedia.alt || "Enlarged view"}
                width={activeMedia.width ?? 1920}
                height={activeMedia.height ?? 1080}
                unoptimized
                priority
                draggable={false}
                className="max-h-[82dvh] max-w-[94vw] sm:max-h-[86dvh] sm:max-w-[88vw] h-auto w-auto object-contain rounded-lg shadow-2xl"
              />
            )}

            {activeMedia.alt && (
              <p className="mt-3 max-w-2xl px-4 text-center text-xs sm:text-sm text-neutral-300 dark:text-neutral-400">
                {activeMedia.alt}
              </p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

export function CaseStudyLightboxProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [activeMedia, setActiveMedia] = useState<CaseStudyMediaItem | null>(null);

  const openMedia = useCallback((item: CaseStudyMediaItem) => {
    setActiveMedia(item);
  }, []);

  const closeMedia = useCallback(() => {
    setActiveMedia(null);
  }, []);

  return (
    <CaseStudyLightboxContext.Provider
      value={{ activeMedia, openMedia, closeMedia }}
    >
      {children}
      <CaseStudyLightboxModal />
    </CaseStudyLightboxContext.Provider>
  );
}

