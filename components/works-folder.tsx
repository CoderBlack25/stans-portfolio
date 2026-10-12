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
      <Link href={href} className="group block">
        <div className="rounded-t-lg bg-(--color-surface-light) dark:bg-(--color-surface-dark) px-4 pt-4 transition-colors duration-300 ease-out group-hover:bg-(--color-accent)">
          <div className="flex flex-col gap-2">
            <h2 className="text-sm sm:text-base font-medium uppercase  text-(--color-surface-1) dark:text-white group-hover:text-white">
              {title}
            </h2>

            <p className="max-w-xs text-xs sm:text-sm text-(--color-muted-dark) dark:text-(--color-muted) group-hover:text-white">
              {description}
            </p>
          </div>

          <div className="my-6 h-px bg-(--color-muted-light) dark:bg-(--color-surface-2) transition-colors duration-300 ease-out group-hover:bg-(--color-accent-light)" />

          <div className="mx-4 h-4 rounded-t-lg bg-(--color-muted-lighter) dark:bg-(--color-surface-3) transition-colors duration-300 ease-out group-hover:bg-(--color-accent-soft)" />

          <div className="h-6 rounded-t-lg bg-(--color-border-light) dark:bg-(--color-surface-4) transition-colors duration-300 ease-out group-hover:bg-(--color-accent-lighter)" />
        </div>

        <div className="rounded-lg relative -top-2">
          <Image
            src={src}
            width={width}
            height={height}
            loading="eager"
            priority
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
