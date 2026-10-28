import { cn } from "@/lib/utils";

/** Rub el Hizb style 8-point star. Colour follows `currentColor`. */
export function IslamicStar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.6" className={cn(className)} aria-hidden>
      <rect x="18" y="18" width="64" height="64" />
      <rect x="18" y="18" width="64" height="64" transform="rotate(45 50 50)" />
      <circle cx="50" cy="50" r="30" strokeDasharray="1.5 2.5" />
      <circle cx="50" cy="50" r="12" />
      <circle cx="50" cy="50" r="46" />
    </svg>
  );
}
