import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Syrous Business Banking",
    href: "https://www.behance.net/gallery/198852581/Syreos-Business-Banking",
    description:
      "A business banking platform catering to merchants of all sizes",
    image: "/images/playground/syrous.png",
    alt: "Syrous business banking app displayed on a phone",
    disciplines: ["UI UX Design", "Branding"],
  },
  {
    title: "Qwikserve Logistics",
    href: "https://www.behance.net/gallery/196762453/Qwikserve-Logistics",
    description: "One app for ordering everyday goods and services",
    image: "/images/playground/qwikserve-logistics.png",
    alt: "Qwikserve logistics app displayed on a phone",
    disciplines: ["UI UX Design"],
  },
  {
    title: "Reacher Messaging",
    href: "https://www.behance.net/gallery/196285371/Reacher-Messenger",
    description:
      "A communication platform designed around user control, and privacy",
    image: "/images/playground/reacher-messaging.png",
    alt: "Reacher messaging app displayed on a phone",
    disciplines: ["UI UX Design", "Branding"],
  },
  {
    title: "Patingeo Realty",
    href: "https://www.behance.net/gallery/186783519/Patingeo-Realty",
    description: "Helping people turn their property ambitions into reality",
    image: "/images/playground/patingeo-realty.png",
    alt: "Patingeo realty app displayed on a phone",
    disciplines: ["Branding"],
  },
];

export default function Playground() {
  return (
    <main className="mx-auto flex w-full flex-col items-center gap-16 sm:gap-20 px-8 my-30 sm:my-45 sm:px-0">
      <header className="max-w-md text-center">
        <h1 className="text-xl font-medium sm:text-2xl uppercase">
          Playground
        </h1>
        <p className="mt-1.5 text-xs sm:text-sm text-(--color-surface-muted) dark:text-(--color-muted)">
          As an inquisitive mind, here are other designs and things I had
          dabbled into along the way.
        </p>
      </header>

      <section
        aria-label="Playground projects"
        className="grid w-full max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
      >
        {projects.map((project) => (
          <Link
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="group block rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--color-accent)"
          >
            <article className="min-w-0">
              <div className="relative aspect-square overflow-hidden rounded-md bg-input dark:bg-(--color-surface-dark)">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  loading={
                    project.title === "Syrous Business Banking"
                      ? "eager"
                      : "lazy"
                  }
                  sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 1023px) calc((100vw - 72px) / 2), (max-width: 1191px) calc((100vw - 136px) / 4), 264px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                />
              </div>

              <h2 className="mt-3 text-sm sm:text-base font-medium">
                {project.title}
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-(--color-surface-muted) dark:text-(--color-muted)">
                {project.description}
              </p>
              <ul
                aria-label={`${project.title} disciplines`}
                className="mt-2 flex flex-wrap gap-2"
              >
                {project.disciplines.map((discipline) => (
                  <li
                    key={discipline}
                    className="rounded-full bg-input px-2 py-1.5 text-[10px] text-foreground dark:bg-(--color-surface-dark)"
                  >
                    {discipline}
                  </li>
                ))}
              </ul>
            </article>
          </Link>
        ))}
      </section>
    </main>
  );
}
