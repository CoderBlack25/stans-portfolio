import WorksFolder from "@/components/works-folder";

const works = [
  {
    href: "/works/fairmoney",
    title: "Fairmoney Micro Finance",
    description:
      "Business Banking system that gives businesses access to tools, funding and support to scale",
    src: "/images/works/fairmoney.png",
    width: 1200,
    height: 800,
  },
  {
    href: "/works/prune",
    title: "Prune Payment",
    description:
      "Fintech platform for international money transfers and remittances, plus business payouts, virtual accounts, & SaaS offerings",
    src: "/images/works/prune.png",
    width: 1200,
    height: 800,
  },
  {
    href: "/works/clime",
    title: "Clime Payment Ltd",
    description:
      "Remittance-focused fintech enabling fast, low/no-fee GBP-to-Naira transfers (personal and business) to Nigeria",
    src: "/images/works/clime.png",
    width: 1200,
    height: 800,
  },
];

export default function Works() {
  return (
    <main className="mx-auto w-full max-w-5xl my-40 sm:my-45 flex flex-col items-center">
      <div className="text-center mb-10 sm:mb-20 px-10">
        <h1
          id="tech-stack-heading"
          className="text-xl font-medium sm:text-2xl uppercase"
        >
          Selected Works
        </h1>

        <p className="mt-1.5 text-xs sm:text-sm text-(--color-surface-muted) dark:text-(--color-muted) max-w-md">
          A small selection of my work since 2021. Currently, I'm a senior
          product designer at FairMoney Micro Finance Bank
        </p>
      </div>

      <section className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {works.map((work) => (
          <WorksFolder key={work.href} {...work} />
        ))}
      </section>
    </main>
  );
}
