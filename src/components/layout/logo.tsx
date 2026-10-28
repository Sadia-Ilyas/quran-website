import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { IslamicStar } from "@/components/shared/islamic-star";

export function Logo({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <Link href="/" className={cn("group flex items-center gap-2.5", className)} aria-label={siteConfig.name}>
      <span className={cn("grid size-10 place-items-center rounded-xl transition-transform duration-500 group-hover:rotate-45", light ? "bg-white/10 text-accent ring-1 ring-white/20" : "bg-primary text-primary-foreground shadow-soft")}>
        <IslamicStar className="size-7" />
      </span>
      <span className={cn("font-display text-lg font-semibold leading-none", light ? "text-white" : "text-foreground")}>
        {siteConfig.name}
      </span>
    </Link>
  );
}
