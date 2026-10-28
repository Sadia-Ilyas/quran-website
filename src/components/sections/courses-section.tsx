import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { courses } from "@/data/mock-data";
import { Button } from "@/components/ui/button";
import { CourseCard } from "@/components/courses/course-card";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

export function CoursesSection() {
  const featured = courses.filter((c) => c.featured);
  return (
    <section className="relative bg-muted/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal><SectionHeading title="Courses for every stage of your journey" description="From your first letters to a complete Hifz, choose the path that matches your level." /></Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {featured.map((c, i) => (<Reveal key={c.id} delay={i * 0.08} className="h-full"><CourseCard course={c} /></Reveal>))}
        </div>
        <Reveal className="mt-12 text-center"><Button asChild variant="outline" size="lg"><Link href="/courses">See all courses <ArrowRight /></Link></Button></Reveal>
      </div>
    </section>
  );
}
