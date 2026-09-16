import Link from "next/link";

const footerLinks = [
  {
    label: "Email",
    href: "mailto:hello@example.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/yourusername",
  },
  {
    label: "Twitter (X)",
    href: "https://x.com/yourusername",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yourusername",
  },
  {
    label: "Medium",
    href: "https://medium.com/@yourusername",
  },
] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-black dark:bg-(--color-background-dark) dark:text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col xl:flex-row justify-between gap-6 sm:gap-8 xl:gap-10 px-4 sm:px-6 xl:px-0 py-6 sm:py-10 border-t border-t-(--color-muted)">
        {/* Footer identity */}
        <div className="flex flex-col gap-2">
          <p className="text-sm sm:text-base font-medium">Stanley Chukwuma</p>

          <p className="text-xs sm:text-sm text-black/65 dark:text-(--color-muted)">
            © {currentYear} Stanley Chukwuma. All rights reserved
          </p>
        </div>

        {/* Footer navigation */}
        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap items-center gap-x-8 gap-y-3 xl:justify-end xl:gap-x-9"
        >
          {footerLinks.map((link) => {
            const isExternal = link.href.startsWith("http");

            return (
              <Link
                key={link.label}
                href={link.href}
                {...(isExternal
                  ? {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }
                  : {})}
                className="text-xs sm:text-sm font-medium text-black/65 dark:text-(--color-muted) underline decoration-black/65 dark:decoration-(--color-muted) underline-offset-4 transition-colors hover:text-black dark:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </footer>
  );
}
