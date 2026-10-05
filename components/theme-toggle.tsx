"use client";

import { useCallback, useRef, type MouseEvent } from "react";
import { flushSync } from "react-dom";
import { useTheme } from "next-themes";
import { PiSun, PiMoon } from "react-icons/pi";

const REVEAL_DURATION_MS = 1000;
const REVEAL_EASING = "cubic-bezier(0.22, 1, 0.36, 1)";

/**
 * Temporarily turns off CSS transitions on everything except the toggle
 * button (and its children). Without this, every element with a
 * transition-colors class would visibly fade during the reveal instead of
 * switching cleanly. Returns a function that removes the override.
 */
function suppressTransitions(): () => void {
  const style = document.createElement("style");
  style.setAttribute("data-theme-switch-style", "");
  style.textContent = `
    *:not([data-theme-toggle], [data-theme-toggle] *),
    *:not([data-theme-toggle], [data-theme-toggle] *)::before,
    *:not([data-theme-toggle], [data-theme-toggle] *)::after {
      transition: none !important;
    }
  `;
  document.head.appendChild(style);

  return () => style.remove();
}

export function ThemeToggle() {
  const { setTheme } = useTheme();

  // Guards against rapid clicks starting a second transition mid-animation.
  const isSwitchingRef = useRef(false);

  const toggleTheme = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      if (isSwitchingRef.current) return;

      const root = document.documentElement;

      // Read the real applied class so this also works when the theme is
      // "system" and the OS decided which mode is active.
      const nextTheme = root.classList.contains("dark") ? "light" : "dark";

      // flushSync makes React (and next-themes) update the DOM class
      // synchronously. View transitions need the DOM to be in its final
      // state by the time the update callback finishes.
      const applyTheme = () => {
        flushSync(() => setTheme(nextTheme));
      };

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const supportsViewTransitions =
        typeof document.startViewTransition === "function";

      isSwitchingRef.current = true;
      const restoreTransitions = suppressTransitions();

      // Fallback: no View Transitions API, or the user prefers less motion.
      // The theme swaps instantly and only the icon animates.
      if (!supportsViewTransitions || prefersReducedMotion) {
        try {
          applyTheme();
        } finally {
          // Two frames: the first style recalculation has to happen while
          // the override is still in place, otherwise transitions kick in.
          requestAnimationFrame(() =>
            requestAnimationFrame(() => {
              restoreTransitions();
              isSwitchingRef.current = false;
            }),
          );
        }
        return;
      }

      // The circle grows from the center of the button...
      const rect = event.currentTarget.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      // ...and needs to reach the farthest viewport corner to cover the page.
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y),
      );

      // Scopes the ::view-transition CSS in globals.css to theme changes only.
      root.setAttribute("data-theme-transition", "");

      const cleanup = () => {
        root.removeAttribute("data-theme-transition");
        restoreTransitions();
        isSwitchingRef.current = false;
      };

      try {
        const transition = document.startViewTransition(applyTheme);

        // ready resolves once the pseudo-elements exist, which is the
        // earliest point we can animate them.
        transition.ready
          .then(() => {
            root.animate(
              {
                clipPath: [
                  `circle(0px at ${x}px ${y}px)`,
                  `circle(${endRadius}px at ${x}px ${y}px)`,
                ],
              },
              {
                duration: REVEAL_DURATION_MS,
                easing: REVEAL_EASING,
                pseudoElement: "::view-transition-new(root)",
              },
            );
          })
          .catch(() => {
            // The transition was skipped (for example, the tab was hidden).
            // The theme still changes, there's just no animation.
          });

        // Swallow rejections so a skipped transition doesn't log an
        // unhandled promise error, then always clean up.
        transition.updateCallbackDone.catch(() => {});
        transition.finished.catch(() => {}).then(cleanup);
      } catch (error) {
        console.error("Theme transition failed, switching without it:", error);
        try {
          applyTheme();
        } finally {
          cleanup();
        }
      }
    },
    [setTheme],
  );

  return (
    <button
      type="button"
      onClick={toggleTheme}
      // Marks the button as exempt from transition suppression (see above).
      data-theme-toggle=""
      aria-label="Change theme"
      title="Change theme"
      className="relative flex size-9 items-center justify-center overflow-hidden rounded-full bg-input text-(--color-surface-dark) transition-colors hover:bg-chart-1 hover:text-(--color-background-dark) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 dark:bg-(--color-surface-dark) dark:text-(--color-muted) dark:hover:bg-(--color-surface-strong) dark:hover:text-white"
    >
      {/*
        Both icons are always mounted and stacked in the same spot, so there is
        no layout shift and no hydration flash. The "dark" class that
        next-themes sets before first paint decides which one is visible.
        Tailwind v4 uses the individual `scale` and `rotate` properties, so
        those are what we transition (not `transform`).
      */}
      <PiSun
        aria-hidden="true"
        className="absolute inset-0 m-auto size-4 stroke-[1.5] -rotate-90 scale-0 opacity-0 transition-[opacity,scale,rotate] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none dark:rotate-0 dark:scale-100 dark:opacity-100"
      />

      <PiMoon
        aria-hidden="true"
        className="absolute inset-0 m-auto size-4 stroke-[1.5] rotate-0 scale-100 opacity-100 transition-[opacity,scale,rotate] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none dark:rotate-90 dark:scale-0 dark:opacity-0"
      />
    </button>
  );
}
