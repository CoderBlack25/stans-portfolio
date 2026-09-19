import Link from "next/link";
import { PiArticleMedium } from "react-icons/pi";

type Article = {
  title: string;
  description: string;
  href: string;
};

const articles: Article[] = [
  {
    title: "How I Reframed Impostor Syndrome into a Motivator for Growth",
    description:
      "Impostor syndrome used to stop me cold. It showed up as self-doubt and the feeling that I wasn’t “good enough.”",
    href: "https://medium.com/@yourusername/how-i-reframed-impostor-syndrome",
  },
  {
    title:
      "Type is a beautiful group of letters, not a group of beautiful letters",
    description:
      "Early in my career I remember a day i was viewing a product designed by top professional on Behance and thinking",
    href: "https://medium.com/@yourusername/type-is-a-beautiful-group-of-letters",
  },
  {
    title: "Keep skipping these resources, if you’d rather stay stuck",
    description:
      "Two weeks ago we shipped an AI feature, and during a quick internal review we realized the screen fell short: the aesthetics didn’t feel “AI,” enough and everything felt static.",
    href: "https://medium.com/@yourusername/keep-skipping-these-resources",
  },
];

function ArticleCard({ article }: { article: Article }) {
  return (
    <li>
      <Link
        href={article.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex gap-3.5 py-6 outline-none sm:gap-4"
        aria-label={`Read "${article.title}" on Medium`}
      >
        <div
          aria-hidden="true"
          className="flex size-21 shrink-0 items-center justify-center rounded-lg bg-input dark:bg-(--color-surface-dark) text-(--color-surface-muted) dark:text-(--color-surface-elevated) transition-colors duration-200 group-hover:bg-chart-1 dark:group-hover:bg-(--color-surface-strong) group-hover:text-black dark:group-hover:text-white"
        >
          <PiArticleMedium className="size-7.5" />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-medium transition-colors duration-200 sm:text-base">
            {article.title}
          </h3>

          <p className="mt-2 line-clamp-2 text-xs text-(--color-surface-muted) dark:text-(--color-muted) sm:text-sm">
            {article.description}
          </p>
        </div>
      </Link>
    </li>
  );
}

export function ArticlesSection() {
  return (
    <section
      aria-labelledby="articles-heading"
      className="mx-auto w-full max-w-xl px-5 sm:px-6 mt-40 sm:mt-45 mb-15 sm:mb-20 bg-background text-foreground"
    >
      <div className="text-center">
        <h2
          id="articles-heading"
          className="text-xl font-medium uppercase sm:text-2xl"
        >
          Articles and Insights
        </h2>

        <p className="mx-auto mt-2 max-w-md text-xs text-(--color-surface-muted) dark:text-(--color-muted) sm:text-sm">
          Thoughts on design process, inclusive UX, design systems, and the
          craft of building products people love.
        </p>

        <Link
          href="https://medium.com/@yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-xs sm:text-sm underline underline-offset-2 transition-colors hover:text-(--color-surface-muted) dark:hover:text-(--color-muted) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111214]"
        >
          Head over to Medium
        </Link>
      </div>

      <ul className="mt-16 divide-y divide-(--color-surface-elevated) dark:divide-(--color-surface-muted) sm:mt-20">
        {articles.map((article) => (
          <ArticleCard key={article.href} article={article} />
        ))}
      </ul>
    </section>
  );
}
