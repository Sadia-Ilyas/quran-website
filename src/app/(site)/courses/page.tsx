import type { Metadata } from "next";
import { CourseCatalog } from "@/components/courses/course-catalog";
import { SectionHeading } from "@/components/shared/section-heading";

export const metadata: Metadata = { title: "Courses" };

export default function CoursesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero py-16 sm:py-20">
        <div className="absolute inset-0 bg-islamic-pattern [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Choose your course" description="Every course includes live one-to-one lessons, homework feedback and a progress report." />
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-24 pt-6 sm:px-6 lg:px-8">
        <CourseCatalog />
      </section>
    </>
  );
}
