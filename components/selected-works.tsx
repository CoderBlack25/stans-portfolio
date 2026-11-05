import { BinaryDecodeText } from "@/components/ui/binary-decode-text";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SelectedWorkCard } from "@/components/selected-work-card";
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
            <BinaryDecodeText text="Selected Projects" />
          </h2>
          <div
            aria-hidden="true"
            className="h-px flex-1 bg-(--color-muted-light) dark:bg-(--color-surface-muted)"
          />
        </div>

        <div className="max-w-xl space-y-6">
          {featuredWorks.map((work) => (
            <SelectedWorkCard key={work.href} work={work} />
          ))}
        </div>
      </section>
    </MotionReveal>
  );
}
