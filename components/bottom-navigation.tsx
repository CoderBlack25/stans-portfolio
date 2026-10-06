"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { TechStackDrawer } from "@/components/tech-stack-drawer";

const navigationItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Works",
    href: "/works",
  },
  {
    label: "Playground",
    href: "/playground",
  },
] as const;

// Shared by the links and the Stack button so they look identical.
const itemBaseClassName =
  "relative isolate flex min-h-6 w-full items-center justify-center rounded-full px-2 py-3 text-center text-xs sm:text-sm transition-colors duration-200 sm:min-h-8 sm:px-4";

const itemIdleClassName =
  "text-(--color-surface-muted) dark:text-(--color-muted) hover:bg-chart-1 hover:text-(--color-background-dark) dark:hover:bg-chart-5 dark:hover:text-white";

export function BottomNavigation() {
  const pathname = usePathname();

  return (
    <motion.nav
      aria-label="Main navigation"
      data-mobile-entry
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 bottom-4 z-50 px-4 sm:bottom-6"
    >
      <NavigationMenu className="mx-auto w-full max-w-sm rounded-full bg-input p-2 dark:bg-(--color-surface-dark)">
        <NavigationMenuList className="flex w-full items-center justify-between gap-1">
          {navigationItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <NavigationMenuItem key={item.href} className="flex-1">
                <NavigationMenuLink
                  render={<Link href={item.href} />}
                  aria-current={isActive ? "page" : undefined}
                  className={`${itemBaseClassName} ${
                    isActive ? "text-white" : itemIdleClassName
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="bottom-navigation-active-pill"
                      aria-hidden="true"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                      className="absolute inset-0 rounded-full bg-(--color-accent)"
                    />
                  )}
                  <motion.span
                    whileTap={{ scale: 0.96 }}
                    transition={{ type: "spring", stiffness: 420, damping: 28 }}
                    className="relative z-10"
                  >
                    {item.label}
                  </motion.span>
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          })}

          <NavigationMenuItem className="flex-1">
            <TechStackDrawer
              triggerClassName={`${itemBaseClassName} ${itemIdleClassName} cursor-pointer`}
            >
              <motion.span
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 420, damping: 28 }}
                className="relative z-10"
              >
                Stack
              </motion.span>
            </TechStackDrawer>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </motion.nav>
  );
}
