import Link from "next/link";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import type { Course } from "@/types";
import { formatPrice } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/shared/icon";

export function CourseCard({ course }: { course: Course }) {
  return (
    <Link href={`/courses/${course.id}`} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-soft">
      <div className="relative overflow-hidden bg-deep p-6 text-white">
        <div className="absolute inset-0 bg-islamic-pattern-light transition-transform duration-700 group-hover:scale-110" aria-hidden />
        <div className="relative flex items-start justify-between">
          <span className="grid size-12 place-items-center rounded-xl bg-white/10 text-accent ring-1 ring-white/20"><Icon name={course.icon} className="size-6" /></span>
          <Badge variant="dark">{course.level}</Badge>
        </div>
        <p dir="rtl" lang="ar" className="relative mt-6 font-arabic text-3xl text-accent">{course.arabicTitle}</p>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold">{course.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{course.tagline}</p>
        <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5"><Clock className="size-3.5 text-primary" />{course.duration}</span>
          <span className="flex items-center gap-1.5"><CalendarDays className="size-3.5 text-primary" />{course.sessionsPerWeek} classes/week</span>
        </div>
        <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
          <p><span className="font-display text-2xl font-semibold text-primary-dark">{formatPrice(course.price)}</span><span className="text-xs text-muted-foreground"> / month</span></p>
          <span className="flex items-center gap-1 text-sm font-semibold text-primary transition-all group-hover:gap-2">View <ArrowRight className="size-4" /></span>
        </div>
      </div>
    </Link>
  );
}
