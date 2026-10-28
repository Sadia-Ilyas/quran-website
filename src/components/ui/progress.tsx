"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/** Animated progress bar: fills from 0 when it scrolls into view. */
export function Progress({ value, className }: { value: number; className?: string }) {
  return (
    <div
      role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100}
      className={cn("h-2.5 w-full overflow-hidden rounded-full bg-muted", className)}
    >
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}
