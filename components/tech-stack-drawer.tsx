"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { Dialog } from "@base-ui/react/dialog";
import { X } from "lucide-react";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { tools } from "@/components/tech-stack-tools";

type TechStackDrawerProps = {
  triggerClassName?: string;
  children: ReactNode;
};

export function TechStackDrawer({
  triggerClassName,
  children,
}: TechStackDrawerProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger className={triggerClassName}>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-60 bg-black/60 transition-opacity duration-300 ease-out motion-reduce:transition-none data-starting-style:opacity-0 data-ending-style:opacity-0" />
        <Dialog.Popup className="fixed inset-y-0 right-0 z-60 flex h-dvh w-full max-w-md flex-col bg-background shadow-md text-foreground outline-none transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none data-starting-style:translate-x-full data-ending-style:translate-x-full">
          <Dialog.Close
            aria-label="Close tech stack"
            className="absolute top-4 right-4 z-10 flex size-9 items-center justify-center rounded-full bg-input text-(--color-surface-muted) transition-colors duration-200 hover:bg-chart-1 hover:text-(--color-background-dark) dark:bg-(--color-surface-dark) dark:text-(--color-muted) dark:hover:bg-chart-5 dark:hover:text-white"
          >
            <X className="size-4" aria-hidden="true" />
          </Dialog.Close>

          {/* Only this area scrolls, so short screens (landscape phones) can
              still reach every tool while the close button stays put. */}
          <div className="flex-1 overflow-y-auto px-6 pt-16 pb-[calc(4rem+env(safe-area-inset-bottom))]">
            {/* min-h-full + justify-center keeps the content vertically
                centered on tall screens, but lets it grow and scroll on
                short ones instead of getting cut off. */}
            <div className="flex min-h-full flex-col justify-center">
              <MotionReveal className="w-full text-center">
                <Dialog.Title className="text-xl font-medium sm:text-2xl">
                  STACK
                </Dialog.Title>

                <Dialog.Description className="mt-1.5 text-xs text-(--color-surface-muted) sm:text-sm dark:text-(--color-muted)">
                  Tools I&apos;m proficient with
                </Dialog.Description>
              </MotionReveal>

              <MotionReveal delay={0.16} className="mt-12 w-full">
                <ul className="grid w-full grid-cols-3 gap-x-8 gap-y-6 sm:grid-cols-4 sm:gap-x-2 sm:gap-y-6">
                  {tools.map((tool) => (
                    <li
                      key={tool.name}
                      className="group flex min-w-0 flex-col items-center"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-chart-4 transition-all duration-200 ease-out group-hover:scale-105 group-hover:bg-chart-5 dark:bg-(--color-surface-dark) dark:group-hover:bg-(--color-surface-strong)">
                        <Image
                          src={tool.icon}
                          alt=""
                          width={28}
                          height={28}
                          loading="eager"
                          className="object-contain"
                        />
                      </div>

                      <span className="mt-2.5 text-center text-xs font-medium text-(--color-surface-muted) sm:text-sm dark:text-(--color-muted)">
                        {tool.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </MotionReveal>
            </div>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
