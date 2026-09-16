import type { ReactNode } from "react";

type TechTool = {
  name: string;
  shortName: string;
  icon?: ReactNode;
  iconClassName?: string;
};

type TechStackGridProps = {
  tools?: TechTool[];
  className?: string;
};

function ToolMark({
  shortName,
  className = "",
}: {
  shortName: string;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`flex h-12 w-12 items-center justify-center rounded-xl bg-[#191a1d] text-sm font-semibold tracking-tight text-white shadow-[0_0_0_1px_rgba(255,255,255,0.025)] ${className}`}
    >
      {shortName}
    </span>
  );
}

const defaultTools: TechTool[] = [
  { name: "Figma", shortName: "F", iconClassName: "text-[#f24e1e]" },
  { name: "Photoshop", shortName: "Ps", iconClassName: "text-[#31a8ff]" },
  { name: "Illustrator", shortName: "Ai", iconClassName: "text-[#ff9a00]" },
  { name: "Protopie", shortName: "P", iconClassName: "text-[#ff7b72]" },

  { name: "Rive", shortName: "R", iconClassName: "text-white" },
  { name: "Spline", shortName: "S", iconClassName: "text-[#c084fc]" },
  { name: "Framer", shortName: "F", iconClassName: "text-white" },
  { name: "Cursor", shortName: "C", iconClassName: "text-white" },

  { name: "Claude", shortName: "✳", iconClassName: "text-[#ff8a65]" },
  { name: "V0", shortName: "v0", iconClassName: "text-white" },
  { name: "ChatGPT", shortName: "◉", iconClassName: "text-white" },
  { name: "Lovable", shortName: "L", iconClassName: "text-[#ff6b9d]" },

  { name: "After Effect", shortName: "Ae", iconClassName: "text-[#a78bfa]" },
  { name: "Supernova", shortName: "✣", iconClassName: "text-white" },
  { name: "Maze", shortName: "〰", iconClassName: "text-white" },
  { name: "Voiceflow", shortName: "V", iconClassName: "text-white" },

  { name: "Jitter", shortName: "◆", iconClassName: "text-[#60a5fa]" },
  { name: "Rotato", shortName: "◔", iconClassName: "text-[#d8b4fe]" },
  { name: "Premiere", shortName: "Pr", iconClassName: "text-[#a78bfa]" },
  { name: "Davinci", shortName: "●", iconClassName: "text-white" },

  { name: "Botpress", shortName: "✣", iconClassName: "text-white" },
  { name: "Jira", shortName: "●", iconClassName: "text-white" },
  { name: "Linear", shortName: "▨", iconClassName: "text-[#818cf8]" },
  { name: "Webflow", shortName: "W", iconClassName: "text-white" },
];

export function TechStackGrid({
  tools = defaultTools,
  className = "",
}: TechStackGridProps) {
  return (
    <section
      aria-labelledby="tech-stack-heading"
      className={`flex w-full items-center justify-center px-5 py-40 sm:py-45 sm:px-8 lg:px-12 ${className}`}
    >
      <div className="flex w-full max-w-xl flex-col items-center">
        <div className="text-center">
          <h1
            id="tech-stack-heading"
            className="text-xl font-medium text-neutral-950 dark:text-white sm:text-2xl"
          >
            STACK
          </h1>

          <p className="mt-1.5 text-xs sm:text-sm text-black/65 dark:text-(--color-muted)">
            Tools I&apos;m proficient with are as follows:
          </p>
        </div>

        <div className="mt-12 grid w-full grid-cols-3 gap-x-8 gap-y-6 sm:grid-cols-4 sm:gap-x-2 sm:gap-y-6">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="group flex min-w-0 flex-col items-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-(--color-surface-dark) transition-all duration-200 ease-out group-hover:scale-105 group-hover:bg-[#1d1e22]">
                {tool.icon ?? (
                  <ToolMark
                    shortName={tool.shortName}
                    className={tool.iconClassName}
                  />
                )}
              </div>

              <span className="mt-2.5 text-center font-medium text-xs sm:text-sm text-black/65 dark:text-[#9F9F9F]">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
