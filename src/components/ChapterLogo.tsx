import Image from "next/image";

import { cn } from "@/lib/utils";
import type { Chapter } from "@/lib/chapters";

export default function ChapterLogo({
  chapter,
  size = 44,
  className,
}: {
  chapter: Chapter;
  size?: number;
  className?: string;
}) {
  if (chapter.logo) {
    return (
      <Image
        src={chapter.logo}
        alt={`${chapter.org} logo`}
        width={size}
        height={size}
        className={cn("shrink-0 rounded-md object-contain", className)}
      />
    );
  }

  return (
    <div
      style={{ width: size, height: size }}
      className={cn(
        "flex shrink-0 items-center justify-center rounded-md bg-accent font-heading text-xs font-semibold text-accent-foreground",
        className
      )}
      aria-hidden="true"
    >
      {chapter.monogram}
    </div>
  );
}
