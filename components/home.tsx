"use client";

import Image from "next/image";
import Link from "next/link";
import { LiaPenNibSolid } from "react-icons/lia";
import { PiBriefcase, PiBinoculars } from "react-icons/pi";
import { FiArrowUpRight } from "react-icons/fi";
import { Button } from "@/components/ui/button";

type AboutItem = {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  content: React.ReactNode;
};

type SocialLink = {
  label: string;
  href: string;
  external?: boolean;
};

const aboutItems: AboutItem[] = [
  {
    id: "design-tools",
    icon: LiaPenNibSolid,
    content: (
      <>
        Proficient with design tools like Adobe Illustrator, Photoshop, Rive{" "}
        <span className="italic text-(--color-surface-muted) dark:text-(--color-muted)">
          & More
        </span>
      </>
    ),
  },
  {
    id: "current-work",
    icon: PiBriefcase,
    content: (
      <>
        <span className="text-(--color-surface-muted) dark:text-(--color-muted)">
          Currently Building{" "}
        </span>
        @ Fairmoney Digital Payment Platform
      </>
    ),
  },
  {
    id: "creative-exploration",
    icon: PiBinoculars,
    content: (
      <>
        Exploring my creative desires -{" "}
        <span className="italic text-(--color-surface-muted) dark:text-(--color-muted)">
          Learning, Building Digital and Physical products
        </span>
      </>
    ),
  },
];

const socialLinks: SocialLink[] = [
  {
    label: "Email",
    href: "mailto:hello@example.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/yourusername",
    external: true,
  },
  {
    label: "Twitter (X)",
    href: "https://x.com/yourusername",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yourusername",
    external: true,
  },
  {
    label: "Medium",
    href: "https://medium.com/@yourusername",
    external: true,
  },
];

function ExternalLinkIcon() {
  return (
    <FiArrowUpRight
      aria-hidden="true"
      className="ml-1 inline-block h-4 w-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
    />
  );
}

function SocialLinks() {
  return (
    <nav aria-label="Social links" className="flex flex-wrap gap-x-6 gap-y-4">
      {socialLinks.map((link) => {
        const isExternal = link.external;

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
            className="group inline-flex items-center text-xs sm:text-sm underline decoration-1 underline-offset-4 transition-colors hover:text-primary"
          >
            {link.label}
            {isExternal && <ExternalLinkIcon />}
          </Link>
        );
      })}
    </nav>
  );
}

const date = new Date();
const year = date.getFullYear();

export default function Home() {
  return (
    <main className="bg-background text-foreground transition-colors duration-300">
      <div className="mx-auto w-full max-w-xl px-4 sm:px-0 my-40 sm:my-45">
        <section
          aria-labelledby="hero-heading"
          className="flex flex-col sm:flex-row items-center sm:items-start gap-8"
        >
          <Image
            src="/images/home/profile-image.png"
            alt="Portrait of Stanley Chukwuma"
            width={180}
            height={180}
            priority
            className="object-cover object-center grayscale"
          />

          <div className="flex min-w-0 flex-col gap-3 text-center sm:text-left">
            <h1
              id="hero-heading"
              className="max-w-5xl text-2xl sm:text-3xl font-medium uppercase"
            >
              Product Designer &amp; Design Engineer
            </h1>

            <p className="text-(--color-surface-muted) dark:text-(--color-muted) text-xs sm:text-sm max-w-sm">
              I help startups and enterprise businesses turn{" "}
              <span className="text-foreground">complex ideas</span> into{" "}
              <span className="text-foreground">
                simple, scalable digital products.
              </span>{" "}
              With{" "}
              <span className="text-foreground">5 years of experience,</span>{" "}
              I&apos;ve designed across{" "}
              <span className="text-foreground">
                AI, B2B SaaS, fintech, digital banking, lending, healthcare,
              </span>{" "}
              and{" "}
              <span className="text-foreground">emerging technologies.</span>
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4 mt-2">
              <Button
                nativeButton={false}
                render={<Link href="mailto:example@gmail.com" />}
                size="lg"
                className="rounded-lg bg-(--color-accent) text-xs sm:text-sm text-white transition-colors hover:bg-(--color-accent-hover) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-black"
              >
                Let&apos;s Talk
              </Button>

              <Button
                nativeButton={false}
                render={<Link href="/resume.pdf" download />}
                size="lg"
                className="rounded-lg bg-input text-xs sm:text-sm text-foreground transition-colors hover:bg-chart-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:bg-(--color-surface-dark) dark:hover:bg-(--color-surface-strong) dark:focus-visible:ring-offset-black"
              >
                Download Resume
              </Button>
            </div>
          </div>
        </section>

        <section aria-labelledby="about-heading" className="mt-12">
          <div className="flex items-center gap-5">
            <h2
              id="about-heading"
              className="shrink-0 text-xs sm:text-sm uppercase text-(--color-surface-muted) dark:text-(--color-muted)"
            >
              More About Me
            </h2>

            <div
              aria-hidden="true"
              className="h-[0.5px] flex-1 bg-(--color-surface-elevated) dark:bg-(--color-surface-muted)"
            />
          </div>

          <ul className="mt-8 space-y-4 sm:mt-10">
            {aboutItems.map((item) => {
              const Icon = item.icon;

              return (
                <li
                  key={item.id}
                  className="flex items-center gap-2 text-xs sm:text-sm"
                >
                  <Icon
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0 stroke-[1.5]"
                  />

                  <span className="min-w-0">{item.content}</span>
                </li>
              );
            })}
          </ul>
        </section>

        <footer
          id="contact"
          className="flex flex-col gap-6 mt-10 sm:mt-12 rounded-lg bg-input p-6 dark:bg-(--color-surface-dark)"
        >
          <SocialLinks />

          <p className="text-xs sm:text-sm text-(--color-surface-muted) dark:text-(--color-muted)">
            Last Update: January 12, 2026, 3:34 PM (GMT +2)
          </p>

          <p className="text-xs sm:text-sm">
            ©{year} Stanley Chukwuma. All rights reserved
          </p>
        </footer>
      </div>
    </main>
  );
}
