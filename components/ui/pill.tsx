import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

export type PillProps = {
  label: string;
  backgroundColor: CSSProperties["backgroundColor"];
  textColor: CSSProperties["color"];
  className?: string;
};

export function Pill({
  label,
  backgroundColor,
  textColor,
  className,
}: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex h-12 shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding px-4 text-xs font-medium whitespace-nowrap select-none sm:text-sm",
        className,
      )}
      style={{ backgroundColor, color: textColor }}
    >
      {label}
    </span>
  );
}
