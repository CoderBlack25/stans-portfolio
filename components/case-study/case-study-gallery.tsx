import { CaseStudyImage } from "./case-study-image";
import { cn } from "@/lib/utils";

export type GalleryImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type CaseStudyGalleryProps = {
  images: GalleryImage[];
  columns?: 1 | 2 | 3;
  className?: string;
};

export function CaseStudyGallery({
  images,
  columns = 1,
  className,
}: CaseStudyGalleryProps) {
  const columnClass = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  }[columns];

  return (
    <div className={cn("grid gap-4", columnClass, className)}>
      {images.map((image, index) => (
        <CaseStudyImage
          key={`${image.src}-${index}`}
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
      ))}
    </div>
  );
}
