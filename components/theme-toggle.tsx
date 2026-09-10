"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains("dark");

    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Change theme"
      title="Change theme"
      className="
        relative
        flex
        size-12
        items-center
        justify-center
        rounded-full
        border
        border-black/10
        bg-black/4
        text-black/70
        transition-colors
        hover:bg-black/8
        hover:text-black
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-black/30
        dark:border-white/10
        dark:bg-white/5
        dark:text-white/70
        dark:hover:bg-white/10
        dark:hover:text-white
        dark:focus-visible:ring-white/30
      "
    >
      {/* Sun icon is visible in dark mode */}
      <Sun
        aria-hidden="true"
        className="
          size-5
          stroke-[1.5]
          rotate-0
          scale-100
          transition-all
          dark:-rotate-90
          dark:scale-0
        "
      />

      {/* Moon icon is visible in light mode */}
      <Moon
        aria-hidden="true"
        className="
          absolute
          size-5
          stroke-[1.5]
          rotate-90
          scale-0
          transition-all
          dark:rotate-0
          dark:scale-100
        "
      />
    </button>
  );
}
