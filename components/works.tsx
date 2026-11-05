import WorksFolder from "@/components/works-folder";
import { DecryptText } from "@/components/ui/decrypt-text";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { works } from "@/data/works";

export default function Works() {
  return (
    <main className="mx-auto w-full max-w-6xl my-30 sm:my-45 flex flex-col items-center">
      <MotionReveal className="text-center mb-10 sm:mb-20 px-10">
        <h1
          id="works-heading"
          className="text-xl font-medium sm:text-2xl uppercase text-(--color-surface-1) dark:text-white"
        >
          <DecryptText text="Selected Works" />
        </h1>

        <p className="mt-1.5 text-xs sm:text-sm text-(--color-muted-dark) dark:text-(--color-muted) max-w-md">
          A small selection of my work since 2021. Currently, I'm a senior
          product designer at FairMoney Micro Finance Bank
        </p>
      </MotionReveal>

      <MotionReveal delay={0.16} className="w-full">
        <section
          aria-labelledby="works-heading"
          className="grid gap-10 sm:grid-cols-2 px-8 lg:grid-cols-3"
        >
          {works.map((work) => (
            <WorksFolder key={work.href} {...work} />
          ))}
        </section>
      </MotionReveal>
    </main>
  );
}
