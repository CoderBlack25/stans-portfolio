import { CaseStudyImage } from "./case-study-image";
import { CaseStudyVideo } from "./case-study-video";
import { type StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

export type GalleryItem = {
  src: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
  type?: "image" | "video";
};

export type GalleryImage = GalleryItem;

type CaseStudyGalleryProps = {
  images: GalleryItem[];
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
      {images.map((item, index) =>
        item.type === "video" ? (
          <CaseStudyVideo
            key={`${item.src}-${index}`}
            src={item.src as string}
            alt={item.alt}
            width={item.width}
            height={item.height}
          />
        ) : (
          <CaseStudyImage
            key={`${item.src}-${index}`}
            src={item.src as StaticImageData}
            alt={item.alt}
            width={item.width}
            height={item.height}
          />
        ),
      )}
    </div>
  );
}
