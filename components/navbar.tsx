"use client";

import Link from "next/link";
import { BookOpen, GraduationCap, Menu, UserRound, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

const navigationItems = [
  {
    label: "About",
    href: "/#about",
    icon: UserRound,
  },
  {
    label: "Journal",
    href: "/journal",
    icon: BookOpen,
  },
  {
    label: "Mentorship",
    href: "/mentorship",
    icon: GraduationCap,
  },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        aria-label="Main navigation"
        className="
          border-b
          border-black/10
          bg-white/90
          px-4
          py-3
          backdrop-blur-xl
          dark:border-white/10
          dark:bg-black/90
          sm:px-6
          lg:px-8
        "
      >
        <div className="mx-auto flex max-w-[2048px] items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            aria-label="Stanley Chukwuma home"
            className="shrink-0"
          >
            <p
              className="
                text-sm
                font-semibold
                leading-none
                tracking-tight
                text-black
                dark:text-white
                sm:text-base
              "
            >
              Stanley Chukwuma
            </p>

            <p
              className="
                mt-1
                font-mono
                text-[10px]
                font-medium
                leading-none
                tracking-[0.08em]
                text-black/55
                dark:text-white/55
                sm:text-xs
              "
            >
              Product Designer & Design Engineer
            </p>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-2 md:flex">
            {navigationItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="
                    group
                    inline-flex
                    h-12
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-black/5
                    bg-black/4
                    px-5
                    text-sm
                    font-medium
                    text-black/60
                    transition-colors
                    hover:bg-black/8
                    hover:text-black
                    dark:border-white/5
                    dark:bg-white/5
                    dark:text-white/60
                    dark:hover:bg-white/10
                    dark:hover:text-white
                  "
                >
                  <Icon
                    aria-hidden="true"
                    className="
                      size-4.5
                      stroke-[1.6]
                      transition-transform
                      duration-200
                      group-hover:scale-105
                    "
                  />

                  <span>{item.label}</span>
                </Link>
              );
            })}

            <ThemeToggle />
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />

            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={
                mobileMenuOpen ? "Close navigation" : "Open navigation"
              }
              className="
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
                dark:border-white/10
                dark:bg-white/5
                dark:text-white/70
                dark:hover:bg-white/10
              "
            >
              {mobileMenuOpen ? (
                <X aria-hidden="true" className="size-5 stroke-[1.5]" />
              ) : (
                <Menu aria-hidden="true" className="size-5 stroke-[1.5]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-navigation"
          className={`
            overflow-hidden
            transition-[max-height,opacity]
            duration-300
            md:hidden
            ${mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div className="mx-auto max-w-[2048px] border-t border-black/10 pt-3 dark:border-white/10">
            <div className="flex flex-col gap-1 pb-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      px-4
                      py-3
                      text-sm
                      font-medium
                      text-black/65
                      transition-colors
                      hover:bg-black/5
                      hover:text-black
                      dark:text-white/65
                      dark:hover:bg-white/6
                      dark:hover:text-white
                    "
                  >
                    <Icon
                      aria-hidden="true"
                      className="size-4.5 stroke-[1.6]"
                    />

                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
