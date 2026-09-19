"use client";

import { PiSun, PiMoon } from "react-icons/pi";
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
        size-9
        items-center
        justify-center
        rounded-full
        bg-input
        text-(--color-surface-dark)
        transition-colors
        hover:bg-chart-1
        hover:text-(--color-background-dark)
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-black/30
        dark:bg-(--color-surface-dark)
        dark:text-(--color-muted)
        dark:hover:bg-(--color-surface-strong)
        dark:hover:text-white
      "
    >
      <PiSun
        aria-hidden="true"
        className="
          size-4
          stroke-[1.5]
          rotate-0
          scale-0
          transition-all
          dark:-rotate-90
          dark:scale-100
        "
      />

      <PiMoon
        aria-hidden="true"
        className="
          absolute
          size-4
          stroke-[1.5]
          rotate-90
          scale-100
          transition-all
          dark:rotate-0
          dark:scale-0
        "
      />
    </button>
  );
}
