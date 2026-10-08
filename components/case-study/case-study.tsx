"use client";

import { useState, useRef, type ReactNode } from "react";
//import { CaseStudyGallery, type GalleryImage } from "./case-study-gallery";
import { CaseStudyImage } from "./case-study-image";
import { CaseStudyText, type TextLine } from "./case-study-text";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Pill, type PillProps } from "@/components/ui/pill";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type ProjectMeta = {
  label: string;
  value: string;
  href?: string;
};

export type ProductVertical = {
  description: string;
  pills: PillProps[];
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
    <h2 className="mb-3 text-sm sm:text-base font-medium text-foreground">
      {title}
    </h2>
  );
}

function CaseStudyHeroMedia({
  hero,
}: {
  hero: NonNullable<CaseStudyData["hero"]>;
}) {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  if (hero.type === "video") {
    return (
      <div className="relative group/video">
        <video
          ref={videoRef}
          src={hero.src}
          width={hero.width}
          height={hero.height}
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          preload="auto"
          className="h-auto w-full object-cover"
        />
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause video" : "Play video"}
          className="absolute bottom-4 right-4 z-10 flex size-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-opacity hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          {isPlaying ? (
            <span aria-hidden="true" className="text-xs font-semibold">❚❚</span>
          ) : (
            <span aria-hidden="true" className="text-xs font-semibold">▶</span>
          )}
        </button>
      </div>
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

const projectNavigation = [
  { title: "FairMoney", href: "/works/fairmoney" },
  { title: "Prune Payment", href: "/works/prune" },
  { title: "Clime Payment", href: "/works/clime" },
] as const;

function ProjectNavigation() {
  const pathname = usePathname();
  const currentIndex = projectNavigation.findIndex(
    (project) => project.href === pathname,
  );

  if (currentIndex === -1) return null;

  const previousProject =
    projectNavigation[
      (currentIndex - 1 + projectNavigation.length) % projectNavigation.length
    ];
  const nextProject =
    projectNavigation[(currentIndex + 1) % projectNavigation.length];

  return (
    <nav
      aria-label="Project navigation"
      className="mx-auto mt-16 grid w-full max-w-3xl grid-cols-2 sm:mt-30"
    >
      <Link
        href={previousProject.href}
        className="group flex min-h-16 min-w-0 items-center gap-3 rounded-md px-3 py-3 text-left transition-colors hover:bg-input focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent) dark:hover:bg-(--color-surface-dark) sm:gap-4 sm:px-4"
      >
        <ArrowLeft
          aria-hidden="true"
          className="size-4 shrink-0 text-(--color-muted) transition-transform group-hover:-translate-x-1"
        />
        <span className="min-w-0">
          <span className="block text-[10px] text-(--color-muted)">
            Previous project
          </span>
          <span className="block truncate text-xs sm:text-sm font-medium text-foreground">
            {previousProject.title}
          </span>
        </span>
      </Link>

      <Link
        href={nextProject.href}
        className="group flex min-h-16 min-w-0 items-center justify-end gap-3 rounded-md px-3 py-3 text-right transition-colors hover:bg-input focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent) dark:hover:bg-(--color-surface-dark) sm:gap-4 sm:px-4"
      >
        <span className="min-w-0">
          <span className="block text-[10px] text-(--color-muted)">
            Next project
          </span>
          <span className="block truncate text-xs sm:text-sm font-medium text-foreground">
            {nextProject.title}
          </span>
        </span>
        <ArrowRight
          aria-hidden="true"
          className="size-4 shrink-0 text-(--color-muted) transition-transform group-hover:translate-x-1"
        />
      </Link>
    </nav>
  );
}

export function CaseStudy({ project, className = "" }: CaseStudyProps) {
  return (
    <main
      className={cn(
        "mx-auto w-full max-w-6xl mt-30 sm:mt-45 mb-15 sm:mb-20 px-8",
        className,
      )}
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.5fr_2fr] lg:gap-10">
        {/* Project information */}
        <aside className="lg:sticky lg:top-32 lg:h-fit">
          <MotionReveal offsetY={0} initialScale={1} className="space-y-10">
            <div className="space-y-4">
              <h1 className="text-xl font-medium uppercase text-foreground sm:text-2xl">
                {project.title}
              </h1>

              {project.description &&
                (typeof project.description === "string" ? (
                  <p className="max-w-3xl text-xs sm:text-sm text-(--color-surface-muted) dark:text-(--color-muted)">
                    {project.description}
                  </p>
                ) : (
                  <CaseStudyText
                    lines={project.description}
                    className="max-w-3xl text-xs sm:text-sm leading-6 text-(--color-surface-muted) dark:text-(--color-muted)"
                  />
                ))}
            </div>

            {project.meta && project.meta.length > 0 && (
              <dl className="divide-y divide-(--color-muted) dark:divide-(--color-surface-1) border-y border-(--color-muted) dark:border-(--color-surface-1)">
                {project.meta.map((item) => (
                  <div
                    key={`${item.label}-${item.value}`}
                    className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] gap-6 py-6"
                  >
                    <dt className="text-xs sm:text-sm text-(--color-surface-muted) dark:text-(--color-muted)">
                      {item.label}
                    </dt>

                    <dd className="text-xs sm:text-sm text-foreground">
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className="underline underline-offset-4 hover:text-(--color-accent)"
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
                <p className="text-xs sm:text-sm text-(--color-surface-muted) dark:text-(--color-muted)">
                  {project.productVertical.description}
                </p>
                <ul className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
                  {project.productVertical.pills.map((pill) => (
                    <li key={pill.label}>
                      <Pill {...pill} />
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </MotionReveal>
        </aside>

        {/* Main case-study content */}
        <MotionReveal
          delay={0.16}
          offsetY={0}
          initialScale={1}
          className="min-w-0"
        >
          <article className="min-w-0">
            <div className="mx-auto max-w-3xl space-y-10">
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

            <ProjectNavigation />
          </article>
        </MotionReveal>
      </div>
    </main>
  );
}
