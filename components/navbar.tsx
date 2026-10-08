"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PiUser, PiArticleMedium, PiGraduationCap } from "react-icons/pi";
import { IoMenu, IoClose } from "react-icons/io5";
import { useEffect, useState, useCallback } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { ThemeToggle } from "@/components/theme-toggle";

const MotionLink = motion.create(Link);

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
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const navListVariants: Variants = {
    open: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.045,
        delayChildren: shouldReduceMotion ? 0 : 0.03,
      },
    },
    closed: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.03,
        staggerDirection: -1,
      },
    },
  };

  const navItemVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.15 : 0.24,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
    closed: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : -8,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.16,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && mobileMenuOpen) {
        closeMobileMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen, closeMobileMenu]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.nav
        aria-label="Main navigation"
        data-mobile-entry
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className={`text-foreground px-4 py-6 sm:py-10 backdrop-blur-lg sm:px-6 lg:px-8 transition-colors duration-300 ${isScrolled ? "bg-background/85" : "bg-background"}`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link
            href="/"
            aria-label="Stanley Chukwuma home"
            aria-current={pathname === "/" ? "page" : undefined}
            className="shrink-0"
          >
            <p className="text-xs sm:text-sm font-medium">Stanley Chukwuma</p>

            <p className="mt-2 text-xs sm:text-sm leading-none text-(--color-surface-muted) dark:text-(--color-muted)">
              Product Designer & Design Engineer
            </p>
          </Link>

          <div className="hidden items-center gap-3 md:flex">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname.startsWith(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`group inline-flex items-center gap-2 py-2 px-3 rounded-full text-sm transition-colors ${
                    isActive
                      ? "text-foreground font-medium"
                      : "text-(--color-surface-muted) hover:text-(--color-background-dark) dark:text-(--color-muted) dark:hover:text-white"
                  }`}
                >
                  <Icon
                    aria-hidden="true"
                    className="size-4.5 transition-transform duration-200 group-hover:scale-105"
                  />

                  <motion.span
                    whileTap={{ scale: 0.96 }}
                    transition={{ type: "spring", stiffness: 420, damping: 28 }}
                  >
                    {item.label}
                  </motion.span>
                </Link>
              );
            })}

            <div
              aria-hidden="true"
              className="h-6 w-px bg-(--color-muted) dark:bg-(--color-surface-muted)"
            />

            <ThemeToggle />
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />

            <motion.button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={
                mobileMenuOpen ? "Close navigation" : "Open navigation"
              }
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 420, damping: 28 }}
              className="flex size-9 items-center justify-center rounded-full bg-input text-(--color-surface-dark) transition-colors hover:bg-chart-1 hover:text-(--color-background-dark) dark:hover:text-white dark:bg-(--color-surface-dark) dark:text-(--color-muted) dark:hover:bg-(--color-surface-strong)"
            >
              {mobileMenuOpen ? (
                <IoClose aria-hidden="true" className="size-4" />
              ) : (
                <IoMenu aria-hidden="true" className="size-4" />
              )}
            </motion.button>
          </div>
        </div>

        <div
          id="mobile-navigation"
          aria-hidden={!mobileMenuOpen}
          inert={!mobileMenuOpen ? true : undefined}
          className={`overflow-hidden transition-[max-height,opacity] duration-300 md:hidden pt-3 ${mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}
        >
          <div className="mx-auto max-w-[2048px] border-t border-(--color-muted) pt-3 dark:border-(--color-surface-muted)">
            <motion.div
              variants={navListVariants}
              initial="closed"
              animate={mobileMenuOpen ? "open" : "closed"}
              className="flex flex-col gap-0.5"
            >
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname.startsWith(item.href);

                return (
                  <MotionLink
                    key={item.label}
                    href={item.href}
                    onClick={closeMobileMenu}
                    aria-current={isActive ? "page" : undefined}
                    variants={navItemVariants}
                    className={`flex items-center gap-2 py-2 px-3 rounded-full text-xs transition-colors hover:bg-chart-1 hover:text-(--color-background-dark) dark:hover:bg-chart-5 dark:hover:text-white ${
                      isActive
                        ? "font-medium text-foreground"
                        : "text-(--color-surface-muted) dark:text-(--color-muted)"
                    }`}
                  >
                    <Icon aria-hidden="true" className="size-4.5" />

                    <span>{item.label}</span>
                  </MotionLink>
                );
              })}
            </motion.div>
          </div>
        </div>
      </motion.nav>
    </header>
  );
}
