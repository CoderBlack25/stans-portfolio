"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

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
  {
    label: "Stack",
    href: "/stack",
  },
] as const;

export function BottomNavigation() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Main navigation"
      className="fixed inset-x-0 bottom-4 z-50 px-4 sm:bottom-6"
    >
      <NavigationMenu
        className="
          mx-auto
          w-full
          max-w-sm
          rounded-full
          bg-neutral-200
          p-2
          shadow-2xl
          shadow-black/10
          dark:bg-(--color-surface-dark)
        "
      >
        <NavigationMenuList
          className="
            flex
            w-full
            items-center
            justify-between
            gap-1
          "
        >
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
                  className={`
                    flex
                    min-h-6
                    w-full
                    items-center
                    justify-center
                    rounded-full
                    px-2
                    text-center
                    text-xs
                    transition-colors
                    duration-200
                    sm:min-h-8
                    sm:px-4
                    sm:text-sm
                    ${
                      isActive
                        ? "bg-(--color-accent) text-white hover:bg-violet-700"
                        : "text-black/65 dark:text-(--color-muted) hover:bg-neutral-600 hover:text-white"
                    }
                  `}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
