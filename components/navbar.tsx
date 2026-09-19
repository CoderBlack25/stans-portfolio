"use client";

import Link from "next/link";
import { PiUser, PiArticleMedium, PiGraduationCap } from "react-icons/pi";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

const navigationItems = [
  {
    label: "About",
    href: "/about",
    icon: PiUser,
  },
  {
    label: "Journal",
    href: "/journal",
    icon: PiArticleMedium,
  },
  {
    label: "Mentorship",
    href: "/mentorship",
    icon: PiGraduationCap,
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
        className="bg-background text-foreground px-4 py-6 sm:py-10 backdrop-blur-xl sm:px-6 lg:px-8"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link
            href="/"
            aria-label="Stanley Chukwuma home"
            className="shrink-0"
          >
            <p className="text-sm leading-none sm:text-base">
              Stanley Chukwuma
            </p>

            <p className="mt-2 text-xs leading-none text-(--color-surface-muted) dark:text-(--color-muted) sm:text-sm">
              Product Designer & Design Engineer
            </p>
          </Link>

          <div className="hidden items-center gap-3 md:flex">
            {navigationItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group inline-flex items-center gap-2 py-2 px-3 rounded-full text-sm text-(--color-surface-muted) transition-colors hover:bg-chart-1 hover:text-(--color-background-dark) dark:text-(--color-muted) dark:hover:bg-chart-5 dark:hover:text-white"
                >
                  <Icon
                    aria-hidden="true"
                    className="size-4.5 stroke-[1.6] transition-transform duration-200 group-hover:scale-105"
                  />

                  <span>{item.label}</span>
                </Link>
              );
            })}

            <div
              aria-hidden="true"
              className="h-6 w-px bg-(--color-surface-elevated) dark:bg-(--color-surface-muted)"
            />

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
              className="flex size-9 items-center justify-center rounded-full bg-input text-(--color-surface-dark) transition-colors hover:bg-chart-1 hover:text-(--color-background-dark) dark:hover:text-white dark:bg-(--color-surface-dark) dark:text-(--color-muted) dark:hover:bg-(--color-surface-strong)"
            >
              {mobileMenuOpen ? (
                <IoClose aria-hidden="true" className="size-4 stroke-[1.5]" />
              ) : (
                <IoMenu aria-hidden="true" className="size-4 stroke-[1.5]" />
              )}
            </button>
          </div>
        </div>

        <div
          id="mobile-navigation"
          className={`overflow-hidden transition-[max-height,opacity] duration-300 md:hidden pt-3 ${mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="mx-auto max-w-[2048px] border-t border-(--color-surface-elevated) pt-3 dark:border-(--color-surface-muted)">
            <div className="flex flex-col gap-0.5">
              {navigationItems.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="flex items-center gap-2 py-2 px-3 rounded-full text-xs text-(--color-surface-muted) transition-colors hover:bg-chart-1 hover:text-(--color-background-dark) dark:text-(--color-muted) dark:hover:bg-chart-5 dark:hover:text-white"
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
