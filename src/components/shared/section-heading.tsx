import { cn } from "@/lib/utils";
import { IslamicStar } from "./islamic-star";

export function SectionHeading({ title, description, align = "center", light = false, className }: {
  title: string; description?: string; align?: "center" | "left"; light?: boolean; className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      <IslamicStar className={cn("mb-4 size-9", align === "center" && "mx-auto", light ? "text-accent" : "text-accent")} />
      <h2 className={cn("text-3xl font-semibold sm:text-4xl", light && "text-white")}>{title}</h2>
      {description && <p className={cn("mt-4 text-base leading-relaxed sm:text-lg", light ? "text-deep-foreground/80" : "text-muted-foreground")}>{description}</p>}
    </div>
  );
}
