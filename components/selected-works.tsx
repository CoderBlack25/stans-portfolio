import Image from "next/image";
import Link from "next/link";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { works } from "@/data/works";

const featuredWorks = works.filter((work) => work.featured);

export function SelectedWorks() {
  return (
    <MotionReveal delay={0.32} offsetY={0}>
      <section aria-labelledby="selected-works-heading" className="space-y-6">
        <div className="flex items-center gap-2">
          <h2
            id="selected-works-heading"
            className="shrink-0 text-xs sm:text-sm uppercase text-(--color-surface-muted) dark:text-(--color-muted)"
          >
            Selected Projects
          </h2>
          <div
            aria-hidden="true"
            className="h-px flex-1 bg-(--color-muted-light) dark:bg-(--color-surface-muted)"
          />
        </div>

        <div className="max-w-xl space-y-6">
          {featuredWorks.map((work) => (
            <Link
              key={work.href}
              href={work.href}
              className="group block overflow-hidden rounded-lg border border-(--color-muted-light) bg-(--color-surface-light) dark:border-(--color-surface-4) dark:bg-(--color-surface-dark)"
            >
              <div className="relative aspect-527/310 w-full overflow-hidden rounded-t-lg">
                <Image
                  src={work.featuredSrc}
                  alt=""
                  fill
                  sizes="(max-width: 591px) calc(100vw - 64px), 527px"
                  placeholder="blur"
                  className="object-cover"
                />
              </div>

              <div className="flex items-start justify-between gap-4 p-4">
                <div className="min-w-0 space-y-1.5">
                  <h3 className="text-sm font-medium text-(--color-surface-1) dark:text-white">
                    {work.title}
                  </h3>
                  <p className="text-xs text-(--color-muted-dark) dark:text-(--color-muted)">
                    {work.description}
                  </p>
                </div>

                <span className="shrink-0 rounded-full border border-(--color-muted-light) px-2 py-1 text-[10px] leading-none text-(--color-surface-muted) dark:border-(--color-surface-4) dark:text-white">
                  {work.year}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </MotionReveal>
  );
}
