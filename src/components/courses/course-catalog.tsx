"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { courses } from "@/data/mock-data";
import type { Level } from "@/types";
import { cn } from "@/lib/utils";
import { CourseCard } from "./course-card";

const filters: ("All" | Level)[] = ["All", "Beginner", "Intermediate", "Advanced"];

export function CourseCatalog() {
  const [level, setLevel] = useState<"All" | Level>("All");
  const visible = courses.filter((c) => level === "All" || c.level === level);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label="Filter by level">
        {filters.map((f) => (
          <button key={f} role="tab" aria-selected={level === f} onClick={() => setLevel(f)}
            className={cn("rounded-full border px-5 py-2 text-sm font-semibold transition-all", level === f ? "border-primary bg-primary text-primary-foreground shadow-soft" : "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary")}>
            {f}
          </button>
        ))}
      </div>
      <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((c) => (
            <motion.div key={c.id} layout initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.94 }} transition={{ duration: 0.3 }}>
              <CourseCard course={c} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
