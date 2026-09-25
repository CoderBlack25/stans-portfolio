import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type TextPart = {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  color?: string;
  className?: string;
};

export type TextLine = {
  // Use `text` when the entire line has the same styling.

  text?: string;

  //  Use `parts` when different portions of the same line
  //  need different styling.

  parts?: TextPart[];

  // Styles the entire line.

  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  color?: string;

  // Allows arbitrary Tailwind classes on an individual line.

  className?: string;

  // Allows a custom React element when necessary.

  content?: ReactNode;
};

type CaseStudyTextProps = {
  lines: TextLine[];
  className?: string;
};

function TextPartRenderer({ part }: { part: TextPart }) {
  return (
    <span
      className={cn(
        part.bold ? "font-medium" : "",
        part.italic ? "italic" : "",
        part.underline ? "underline" : "",
        part.color ?? "",
        part.className ?? "",
      )}
    >
      {part.text}
    </span>
  );
}

function TextLineRenderer({ line }: { line: TextLine }) {
  if (line.content) {
    return <>{line.content}</>;
  }

  const className = cn(
    line.bold && "font-medium",
    line.italic && "italic",
    line.underline && "underline",
    line.color,
    line.className,
  );

  if (line.parts?.length) {
    return (
      <p className={className}>
        {line.parts.map((part, index) => (
          <TextPartRenderer key={`${part.text}-${index}`} part={part} />
        ))}
      </p>
    );
  }

  return <p className={className}>{line.text}</p>;
}

export function CaseStudyText({ lines, className = "" }: CaseStudyTextProps) {
  return (
    <div
      className={cn("space-y-2 text-sm leading-7 text-foreground", className)}
    >
      {lines.map((line, index) => (
        <TextLineRenderer key={index} line={line} />
      ))}
    </div>
  );
}
