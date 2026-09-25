import Link from "next/link";
import Image from "next/image";
import OptimizedTiltCard from "@/components/ui/optimized-tilt-card";

export interface WorksFolderProps {
  href: string;
  title: string;
  description: string;
  src: string;
  width: number;
  height: number;
  alt?: string;
  className?: string;
}

const WorksFolder = ({
  href,
  title,
  description,
  src,
  width,
  height,
  alt = "",
  className = "",
}: WorksFolderProps) => {
  return (
    <OptimizedTiltCard className={`mx-auto max-w-xs rounded-lg ${className}`}>
      <Link
        href={href}
        className="group block bg-background text-foreground hover:text-white"
      >
        <div className="rounded-t-lg bg-input dark:bg-(--color-surface-dark) px-6 pt-6 transition-colors duration-300 ease-out group-hover:bg-(--color-accent)">
          <div className="flex flex-col gap-2">
            <h2 className="font-medium uppercase">{title}</h2>

            <p className="max-w-xs text-xs">{description}</p>
          </div>

          <div className="my-6 h-[0.5px] bg-(--color-muted) dark:bg-(--color-surface-2) transition-colors duration-300 ease-out group-hover:bg-(--color-accent-light)" />

          <div className="mx-4 h-4 rounded-t-lg bg-(--chart-6) dark:bg-(--color-surface-3) transition-colors duration-300 ease-out group-hover:bg-(--color-accent-soft)" />

          <div className="h-6 rounded-t-lg bg-chart-1 dark:bg-(--color-surface-4) transition-colors duration-300 ease-out group-hover:bg-(--color-accent-lighter)" />
        </div>

        <div className="rounded-lg relative -top-2">
          <Image
            src={src}
            width={width}
            height={height}
            loading="eager"
            sizes="(max-width: 768px) 100vw, 33vw"
            alt={alt}
            className="w-full"
          />
        </div>
      </Link>
    </OptimizedTiltCard>
  );
};

export default WorksFolder;
