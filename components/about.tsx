import Link from "next/link";
import { Button } from "@/components/ui/button";

type Experience = {
  company: string;
  role: string;
  period: string;
};

type Capability = {
  number: string;
  label: string;
};

const experiences: Experience[] = [
  {
    company: "FailMoney MFB",
    role: "Senior Product Designer",
    period: "2023 - Present",
  },
  {
    company: "Clime Payment LTD",
    role: "Senior Product Designer",
    period: "2026",
  },
  {
    company: "Prune Payment LTD",
    role: "Senior Product Designer",
    period: "2024 - 2025",
  },
  {
    company: "Payforce MFB",
    role: "Product Designer",
    period: "2022 - 2023",
  },
];

const capabilities: Capability[] = [
  { number: "01", label: "Product strategy" },
  { number: "02", label: "Research & insights" },
  { number: "03", label: "UX & Interaction" },
  { number: "04", label: "Design systems" },
  { number: "05", label: "Prototyping & UI" },
  { number: "06", label: "Engineering collab" },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="shrink-0 text-xs uppercase text-black/65 dark:text-(--color-muted) sm:text-sm">
        {children}
      </span>

      <div className="h-[0.5px] flex-1 bg-(--color-surface-muted)" />
    </div>
  );
}

export function About() {
  return (
    <section
      id="about"
      className="mx-auto w-full max-w-xl bg-white dark:bg-(--color-background-dark) px-4 mt-40 sm:mt-45 mb-15 sm:mb-20 text-neutral-950 dark:text-white sm:px-6"
    >
      <div className="flex flex-col gap-16 sm:gap-20 py-4">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-5">
            <h1 className="text-2xl sm:text-3xl font-medium leading-snug">
              I DESIGN PRODUCTS THAT MAKE COMPLEX THINGS FEEL SIMPLE.
            </h1>

            <div className="flex flex-col gap-5 text-xs sm:text-sm text-black/65 dark:text-(--color-muted)">
              <p>
                I&apos;m a Senior Product Designer who loves figuring out how
                things work, finding the messy parts, and turning them into
                experiences people can actually understand and use.
              </p>

              <p>
                Over the past 5+ years, I&apos;ve worked across fintech, SaaS,
                e-commerce, logistics, and AI-powered products, designing
                everything from financial workflows and complex B2B systems to
                consumer experiences used by millions of people.
              </p>

              <p>
                I care about more than making interfaces look good. I like
                getting close to the problem, understanding the business,
                talking to users, questioning assumptions, and working with
                engineers to turn ideas into products that actually ship.
              </p>
            </div>
          </div>

          <blockquote className="rounded-2xl bg-neutral-200 dark:bg-(--color-surface-dark) p-4 text-xs text-black/65 dark:text-(--color-muted) sm:text-sm">
            <p>
              &ldquo;The best products I&apos;ve worked on weren&apos;t
              necessarily the ones with the simplest underlying systems. They
              were the ones that made those systems feel simple to the people
              using them.
            </p>

            <p className="mt-5">
              That&apos;s usually what I&apos;m trying to do: understand the
              complexity, then hide the right amount of it.&rdquo;
            </p>
          </blockquote>

          <div className="flex flex-col gap-3 pt-1 sm:flex-row">
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
              className="rounded-lg bg-neutral-200 text-xs sm:text-sm text-black/65 transition-colors hover:bg-neutral-300 hover:text-black dark:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800 dark:focus-visible:ring-offset-black"
            >
              Download Resume
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-7">
          <SectionLabel>Experiences</SectionLabel>

          <div className="flex flex-col gap-5">
            {experiences.map((experience) => (
              <div
                key={`${experience.company}-${experience.period}`}
                className="grid grid-cols-1 gap-1 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-4"
              >
                <div className="flex min-w-0 flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
                  <span className="truncate text-xs sm:text-sm">
                    {experience.company}
                  </span>

                  <span className="text-xs sm:text-sm text-black/65 dark:text-(--color-muted)">
                    {experience.role}
                  </span>

                  <div className="h-[0.5px] flex-1 bg-(--color-surface-muted)" />
                </div>

                <span className="text-xs sm:text-sm sm:text-right">
                  {experience.period}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-7">
          <SectionLabel>Capabilities</SectionLabel>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-4">
              <h2 className="text-xl sm:text-2xl font-medium leading-snug">
                I WORK ACROSS THE WHOLE PRODUCT.
              </h2>

              <p className="text-xs sm:text-sm text-black/65 dark:text-(--color-muted)">
                I&apos;m comfortable moving between the big picture and the
                details, defining what should be built, mapping the experience,
                designing the interface, building prototypes, and working with
                developers to make sure the final product holds together.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 xl:grid-cols-2">
              {capabilities.map((capability) => (
                <div
                  key={capability.number}
                  className="flex h-12 items-center gap-3 rounded-full bg-neutral-200 dark:bg-(--color-surface-dark) px-4 py-3"
                >
                  <span className="shrink-0 text-xs sm:text-sm text-black/65 dark:text-(--color-muted)">
                    {capability.number}
                  </span>

                  <span className="min-w-0 text-xs sm:text-sm">
                    {capability.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-7">
          <SectionLabel>Beyond the work</SectionLabel>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-medium leading-snug">
              I&apos;M MORE THAN JUST A DESIGNER
            </h2>

            <div className="flex flex-col gap-5 text-xs sm:text-sm text-black/65 dark:text-(--color-muted)">
              <p>
                I&apos;m naturally curious, so I&apos;m usually learning
                something, building something, or going down an unnecessary
                rabbit hole about how something works.
              </p>

              <p>
                I like good documentaries, How to videos, technology, building
                stuff, and conversations that make me rethink something I
                thought I understood. And occasionally, I still make things just
                because I can.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
