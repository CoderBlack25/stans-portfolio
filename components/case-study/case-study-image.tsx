import Image from "next/image";
import { cn } from "@/lib/utils";

type CaseStudyImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function CaseStudyImage({
  src,
  alt,
  width = 1600,
  height = 1000,
  className,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 800px",
}: CaseStudyImageProps) {
  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        className="h-auto w-full object-cover"
      />
    </div>
  );
}
