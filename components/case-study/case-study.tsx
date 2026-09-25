"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
//import { CaseStudyGallery, type GalleryImage } from "./case-study-gallery";
import { CaseStudyImage } from "./case-study-image";
import { CaseStudyText, type TextLine } from "./case-study-text";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export type ProjectMeta = {
  label: string;
  value: string;
  href?: string;
};

export type ProductVertical = {
  description: string;
  items: {
    label: string;
    href?: string;
    disabled?: boolean;
  }[];
};

export type CaseStudySection =
  | {
      type: "text";
      id?: string;
      title?: string;
      lines: TextLine[];
      className?: string;
    }
  | {
      type: "image";
      id?: string;
      src: string;
      alt: string;
      width?: number;
      height?: number;
      className?: string;
      priority?: boolean;
    }
  // | {
  //     type: "gallery";
  //     id?: string;
  //     images: GalleryImage[];
  //     columns?: 1 | 2 | 3;
  //     className?: string;
  //   }
  | {
      type: "text-image";
      id?: string;
      title?: string;
      lines: TextLine[];
      image: {
        src: string;
        alt: string;
        width?: number;
        height?: number;
      };
      imagePosition?: "top" | "bottom";
      className?: string;
    }
  | {
      type: "custom";
      id?: string;
      content: ReactNode;
      className?: string;
    }
  | {
      type: "spacer";
      id?: string;
      size?: "sm" | "md" | "lg" | "xl";
    };

export type CaseStudyData = {
  title: string;
  description?: string | TextLine[];
  meta?: ProjectMeta[];
  productVertical?: ProductVertical;
  heroIntro?: {
    title?: string;
    lines: TextLine[];
  };
  hero?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    type?: "image" | "video";
  };
  sections: CaseStudySection[];
};

type CaseStudyProps = {
  project: CaseStudyData;
  className?: string;
};

function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="mb-5 text-base font-semibold tracking-tight text-foreground">
      {title}
    </h2>
  );
}

function CaseStudyHeroMedia({
  hero,
}: {
  hero: NonNullable<CaseStudyData["hero"]>;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || hero.type !== "video") return;

    const start = 1;
    const end = 12;

    const handleTimeUpdate = () => {
      if (video.currentTime >= end) {
        video.currentTime = start;
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [hero.type]);

  if (hero.type === "video") {
    return (
      <video
        ref={videoRef}
        src={hero.src}
        autoPlay
        muted
        playsInline
        controls={false}
        preload="auto"
        className="h-auto w-full object-cover"
      />
    );
  }

  return (
    <CaseStudyImage
      src={hero.src}
      alt={hero.alt}
      width={hero.width}
      height={hero.height}
      priority
    />
  );
}

function renderSection(section: CaseStudySection) {
  switch (section.type) {
    case "text":
      return (
        <section key={section.id} className={section.className}>
          {section.title && <SectionTitle title={section.title} />}

          <CaseStudyText lines={section.lines} />
        </section>
      );

    case "image":
      return (
        <section key={section.id} className={section.className}>
          <CaseStudyImage
            src={section.src}
            alt={section.alt}
            width={section.width}
            height={section.height}
            priority={section.priority}
          />
        </section>
      );

    // case "gallery":
    //   return (
    //     <section key={section.id} className={section.className}>
    //       <CaseStudyGallery images={section.images} columns={section.columns} />
    //     </section>
    //   );

    case "text-image":
      return (
        <section
          key={section.id}
          className={cn("space-y-8", section.className ?? "")}
        >
          {section.title && <SectionTitle title={section.title} />}

          {section.imagePosition !== "top" && (
            <CaseStudyText lines={section.lines} />
          )}

          {section.imagePosition === "top" && (
            <CaseStudyImage
              src={section.image.src}
              alt={section.image.alt}
              width={section.image.width}
              height={section.image.height}
            />
          )}

          {section.imagePosition !== "top" && (
            <CaseStudyImage
              src={section.image.src}
              alt={section.image.alt}
              width={section.image.width}
              height={section.image.height}
            />
          )}

          {section.imagePosition === "top" && (
            <CaseStudyText lines={section.lines} />
          )}
        </section>
      );

    case "custom":
      return (
        <section key={section.id} className={section.className}>
          {section.content}
        </section>
      );

    case "spacer":
      return (
        <div
          key={section.id}
          aria-hidden="true"
          className={
            {
              sm: "h-8",
              md: "h-16",
              lg: "h-24",
              xl: "h-40",
            }[section.size ?? "md"]
          }
        />
      );

    default:
      return null;
  }
}

export function CaseStudy({ project, className = "" }: CaseStudyProps) {
  return (
    <main
      className={cn(
        "mx-auto w-full max-w-6xl mt-40 sm:mt-45 mb-15 sm:mb-20 px-4",
        className,
      )}
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.5fr_2fr] lg:gap-10">
        {/* Project information */}
        <aside className="lg:sticky lg:top-32 lg:h-fit">
          <div className="space-y-10">
            <div className="space-y-4">
              <h1 className="text-xl font-medium uppercase text-foreground sm:text-2xl">
                {project.title}
              </h1>

              {project.description &&
                (typeof project.description === "string" ? (
                  <p className="max-w-3xl text-xs text-(--color-muted) sm:text-sm">
                    {project.description}
                  </p>
                ) : (
                  <CaseStudyText
                    lines={project.description}
                    className="max-w-3xl text-xs leading-6 text-(--color-muted) sm:text-sm"
                  />
                ))}
            </div>

            {project.meta && project.meta.length > 0 && (
              <dl className="divide-y divide-border border-y border-border">
                {project.meta.map((item) => (
                  <div
                    key={`${item.label}-${item.value}`}
                    className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] gap-6 py-6"
                  >
                    <dt className="text-xs text-(--color-muted) sm:text-sm">
                      {item.label}
                    </dt>

                    <dd className="text-xs text-foreground sm:text-sm">
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className="underline underline-offset-4"
                        >
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            )}

            {project.productVertical && (
              <section className="space-y-5">
                <h2 className="text-xs sm:text-sm uppercase text-foreground">
                  Product Vertical
                </h2>
                <p className="text-xs text-(--color-muted) sm:text-sm">
                  {project.productVertical.description}
                </p>
                <ul className="space-y-6 pt-2">
                  {project.productVertical.items.map((item, index) => (
                    <li key={`${item.label}-${index}`}>
                      {item.disabled ? (
                        <span className="inline-flex items-center gap-3 text-xs text-(--color-muted) sm:text-sm">
                          {item.label}
                          <span className="rounded-full bg-(--color-surface-1) px-2 py-1 text-xs text-(--color-muted) sm:text-sm">
                            Coming soon
                          </span>
                        </span>
                      ) : (
                        <Link
                          href={item.href ?? "#"}
                          className={cn(
                            buttonVariants({ variant: "default", size: "lg" }),
                            "rounded-lg bg-(--color-accent) text-xs text-white hover:bg-(--color-accent-hover) sm:text-sm",
                          )}
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </aside>

        {/* Main case-study content */}
        <article className="min-w-0">
          <div className="mx-auto max-w-3xl space-y-16">
            {project.heroIntro && (
              <header className="space-y-3">
                {project.heroIntro.title && (
                  <h2 className="text-sm font-medium text-foreground sm:text-base">
                    {project.heroIntro.title}
                  </h2>
                )}
                <CaseStudyText lines={project.heroIntro.lines} />
              </header>
            )}

            {project.hero && <CaseStudyHeroMedia hero={project.hero} />}

            {project.sections.map(renderSection)}
          </div>
        </article>
      </div>
    </main>
  );
}
