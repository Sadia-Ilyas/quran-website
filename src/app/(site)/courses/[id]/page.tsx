import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, ChevronRight, Clock, MessageCircle, Signal, Timer } from "lucide-react";
import { courses, getCourse, getTutor } from "@/data/mock-data";
import { siteConfig } from "@/config/site";
import { formatPrice } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CourseCard } from "@/components/courses/course-card";
import { CourseTabs } from "@/components/courses/course-tabs";
import { EnrollDialog } from "@/components/courses/enroll-dialog";
import { Icon } from "@/components/shared/icon";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return courses.map((c) => ({ id: c.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const course = getCourse(id);
  return { title: course?.title ?? "Course", description: course?.tagline };
}

export default async function CourseDetailPage({ params }: Props) {
  const { id } = await params;
  const course = getCourse(id);
  if (!course) notFound();
  const tutor = getTutor(course.tutorId);
  const related = courses.filter((c) => c.id !== course.id).slice(0, 3);

  const facts = [
    { icon: Signal, label: "Level", value: course.level },
    { icon: Clock, label: "Duration", value: course.duration },
    { icon: CalendarDays, label: "Classes per week", value: String(course.sessionsPerWeek) },
    { icon: Timer, label: "Class length", value: course.sessionLength },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-deep text-white">
        <div className="absolute inset-0 bg-islamic-pattern-light" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-deep-foreground/70">
            <Link href="/courses" className="hover:text-accent">Courses</Link><ChevronRight className="size-4" /><span className="text-white">{course.title}</span>
          </nav>
          <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <div className="flex gap-2"><Badge variant="dark">{course.level}</Badge><Badge variant="dark">{course.duration}</Badge></div>
              <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">{course.title}</h1>
              <p className="mt-4 text-lg leading-relaxed text-deep-foreground/80">{course.description}</p>
            </div>
            <div className="flex items-center gap-5 md:flex-col md:items-end">
              <span className="grid size-16 place-items-center rounded-2xl bg-white/10 text-accent ring-1 ring-white/20 md:size-20"><Icon name={course.icon} className="size-8 md:size-10" /></span>
              <p dir="rtl" lang="ar" className="font-arabic text-4xl text-accent md:text-5xl">{course.arabicTitle}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_380px] lg:px-8">
        <div className="min-w-0"><CourseTabs course={course} tutor={tutor} /></div>
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-3xl border border-border bg-card p-7 shadow-soft">
            <p><span className="font-display text-4xl font-semibold text-primary-dark">{formatPrice(course.price)}</span><span className="text-muted-foreground"> / month</span></p>
            <p className="mt-1 text-sm text-muted-foreground">First 30-minute class is free.</p>
            <ul className="mt-6 divide-y divide-border">
              {facts.map((f) => (
                <li key={f.label} className="flex items-center justify-between py-3 text-sm">
                  <span className="flex items-center gap-2.5 text-muted-foreground"><f.icon className="size-4 text-primary" />{f.label}</span>
                  <span className="font-semibold">{f.value}</span>
                </li>
              ))}
            </ul>
            <EnrollDialog courseId={course.id} courseTitle={course.title}>
              <Button size="lg" className="mt-6 w-full">Enroll / Book free trial</Button>
            </EnrollDialog>
            <Button variant="outline" className="mt-3 w-full" asChild>
              <a href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noreferrer"><MessageCircle /> Ask on WhatsApp</a>
            </Button>
          </div>
        </aside>
      </section>

      <section className="bg-muted/60 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold sm:text-3xl">You may also like</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{related.map((c) => <CourseCard key={c.id} course={c} />)}</div>
        </div>
      </section>
    </>
  );
}
