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
        <span className="italic text-black/65 dark:text-(--color-muted)">
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
        <span className="text-black/65 dark:text-(--color-muted)">
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
        <span className="italic text-black/65 dark:text-(--color-muted)">
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
            className="group inline-flex items-center text-xs sm:text-sm text-neutral-800 underline decoration-1 underline-offset-4 transition-colors hover:text-black/65 dark:text-white dark:hover:text-neutral-400"
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
    <main className="bg-white text-neutral-950 transition-colors duration-300 dark:bg-(--color-background-dark) dark:text-white">
      <div className="mx-auto w-full max-w-xl px-4 sm:px-0 py-40 sm:py-45">
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
              className="max-w-5xl text-3xl sm:text-[32px] font-medium uppercase leading-snug"
            >
              Product Designer &amp;
              <br />
              Design Engineer
            </h1>

            <p className="text-neutral-500 dark:text-(--color-muted) text-xs sm:text-sm max-w-sm">
              I help startups and enterprise businesses turn{" "}
              <span className="text-neutral-950 dark:text-white">
                complex ideas
              </span>{" "}
              into{" "}
              <span className="text-neutral-950 dark:text-white">
                simple, scalable digital products.
              </span>{" "}
              With{" "}
              <span className="text-neutral-950 dark:text-white">
                5 years of experience,
              </span>{" "}
              I&apos;ve designed across{" "}
              <span className="text-neutral-950 dark:text-white">
                AI, B2B SaaS, fintech, digital banking, lending, healthcare,
              </span>{" "}
              and{" "}
              <span className="text-neutral-950 dark:text-white">
                emerging technologies.
              </span>
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4 mt-2">
              <Button
                nativeButton={false}
                render={<Link href="mailto:example@gmail.com" />}
                size="lg"
                className="rounded-lg bg-(--color-accent) text-xs sm:text-sm text-white transition-colors hover:bg-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-black"
              >
                Let&apos;s Talk
              </Button>

              <Button
                nativeButton={false}
                render={<Link href="/resume.pdf" download />}
                size="lg"
                className="rounded-lg bg-(--color-surface-dark) text-xs sm:text-sm text-white transition-colors hover:bg-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800 dark:focus-visible:ring-offset-black"
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
              className="shrink-0 text-xs sm:text-sm uppercase text-black/65 dark:text-(--color-muted)"
            >
              More About Me
            </h2>

            <div
              aria-hidden="true"
              className="h-[0.5px] flex-1 bg-neutral-300 dark:bg-[#343438]"
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
          className="flex flex-col gap-6 mt-10 sm:mt-12 rounded-lg bg-neutral-200 p-6 dark:bg-(--color-surface-dark)"
        >
          <SocialLinks />

          <p className="text-xs sm:text-sm text-black/65 dark:text-(--color-muted)">
            Last Update: January 12, 2026, 3:34 PM (GMT +2)
          </p>

          <p className="text-xs sm:text-sm text-neutral-800 dark:text-white">
            ©{year} Stanley Chukwuma. All rights reserved
          </p>
        </footer>
      </div>
    </main>
  );
}
