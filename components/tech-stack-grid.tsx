import Image from "next/image";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { tools } from "@/components/tech-stack-tools";

type TechStackGridProps = {
  className?: string;
};

export function TechStackGrid({ className = "" }: TechStackGridProps) {
  return (
    <section
      aria-labelledby="tech-stack-heading"
      className={`bg-background text-foreground flex w-full items-center justify-center px-4 my-30 sm:my-45 sm:px-0 ${className}`}
    >
      <div className="flex w-full max-w-md flex-col items-center">
        <MotionReveal className="w-full text-center">
          <h1
            id="tech-stack-heading"
            className="text-xl font-medium sm:text-2xl"
          >
            STACK
          </h1>

          <p className="mt-1.5 text-xs sm:text-sm text-(--color-surface-muted) dark:text-(--color-muted)">
            Tools I&apos;m proficient with
          </p>
        </MotionReveal>

        <MotionReveal delay={0.16} className="mt-12 w-full">
          <div className="grid w-full grid-cols-3 gap-x-8 gap-y-6 sm:grid-cols-4 sm:gap-x-2 sm:gap-y-6">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="group flex min-w-0 flex-col items-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-chart-4 dark:bg-(--color-surface-dark) transition-all duration-200 ease-out group-hover:scale-105 group-hover:bg-chart-5 dark:group-hover:bg-(--color-surface-strong)">
                  <Image
                    src={tool.icon}
                    alt=""
                    width={28}
                    height={28}
                    priority
                    className="object-contain"
                  />
                </div>

                <span className="mt-2.5 text-center font-medium text-xs sm:text-sm text-(--color-surface-muted) dark:text-(--color-muted)">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
