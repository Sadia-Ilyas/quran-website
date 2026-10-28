"use client";
import { CheckCircle2, Languages, Star, Users } from "lucide-react";
import type { Course, Tutor } from "@/types";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export function CourseTabs({ course, tutor }: { course: Course; tutor?: Tutor }) {
  return (
    <Tabs defaultValue="syllabus">
      <TabsList>
        <TabsTrigger value="syllabus">Syllabus</TabsTrigger>
        <TabsTrigger value="outcomes">What you'll learn</TabsTrigger>
        <TabsTrigger value="instructor">Instructor</TabsTrigger>
      </TabsList>

      <TabsContent value="syllabus">
        <Accordion type="single" collapsible defaultValue="m0" className="space-y-3">
          {course.syllabus.map((m, i) => (
            <AccordionItem key={m.title} value={`m${i}`}>
              <AccordionTrigger>
                <span className="flex items-center gap-3"><span className="grid size-8 place-items-center rounded-full bg-primary/10 text-xs font-bold text-primary">{i + 1}</span>{m.title}</span>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 pl-11">
                  {m.topics.map((t) => (<li key={t} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />{t}</li>))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </TabsContent>

      <TabsContent value="outcomes">
        <ul className="grid gap-3 sm:grid-cols-2">
          {course.outcomes.map((o) => (
            <li key={o} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-card">
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" /><span className="text-sm">{o}</span>
            </li>
          ))}
        </ul>
      </TabsContent>

      <TabsContent value="instructor">
        {tutor && (
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8">
            <div className="flex items-center gap-4">
              <span className="grid size-16 place-items-center rounded-full bg-primary font-display text-xl font-semibold text-primary-foreground">{tutor.initials}</span>
              <div>
                <h3 className="text-xl font-semibold">{tutor.name}</h3>
                <p className="text-sm text-muted-foreground">{tutor.title}</p>
              </div>
            </div>
            <p className="mt-5 leading-relaxed text-muted-foreground">{tutor.bio}</p>
            <div className="mt-5 flex flex-wrap gap-4 text-sm">
              <span className="flex items-center gap-1.5"><Star className="size-4 fill-accent text-accent" />{tutor.rating} rating</span>
              <span className="flex items-center gap-1.5"><Users className="size-4 text-primary" />{tutor.students} students</span>
              <span className="flex items-center gap-1.5"><Languages className="size-4 text-primary" />{tutor.languages.join(", ")}</span>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              <Badge variant="outline">{tutor.experienceYears} years teaching</Badge>
              <Badge variant="outline">{tutor.gender} tutor</Badge>
              {tutor.specialties.map((s) => <Badge key={s}>{s}</Badge>)}
            </div>
          </div>
        )}
      </TabsContent>
    </Tabs>
  );
}
