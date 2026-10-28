"use client";
import { motion } from "framer-motion";
import { CalendarDays, Clock, Video } from "lucide-react";
import {
  achievements, classSessions, dashboardStats, enrolledCourses, getCourse, getTutor,
  juzProgress, student, upcomingClass, weekSchedule, weeklyAttendance,
} from "@/data/mock-data";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CountUp } from "@/components/shared/count-up";
import { Icon } from "@/components/shared/icon";
import type { ClassSession } from "@/types";

function PageTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <header>
      <h1 className="text-3xl font-semibold sm:text-4xl">{title}</h1>
      <p className="mt-1.5 text-muted-foreground">{subtitle}</p>
    </header>
  );
}

/* --------------------------------- Overview -------------------------------- */
function UpcomingBanner() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-deep via-primary-dark to-primary p-6 text-white shadow-glow sm:p-8">
      <div className="absolute inset-0 bg-islamic-pattern-light" aria-hidden />
      <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
            <span className="size-2 animate-pulse-ring rounded-full bg-emerald-300" /> {upcomingClass.startsIn}
          </span>
          <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">{upcomingClass.title}</h2>
          <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-white/80">
            <span className="flex items-center gap-1.5"><Clock className="size-4" />{upcomingClass.time}</span>
            <span>with {upcomingClass.tutor}</span>
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild><Button variant="gold" size="lg"><Video /> Join class</Button></DialogTrigger>
          <DialogContent>
            <DialogTitle>Demo mode</DialogTitle>
            <DialogDescription>In the live product, this button opens your video classroom. This static demo has no live classes yet.</DialogDescription>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export function OverviewView() {
  return (
    <div className="space-y-8">
      <PageTitle title={`Assalamu alaikum, ${student.firstName}`} subtitle="Here's how your learning is going this week." />
      <UpcomingBanner />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((s) => (
          <Card key={s.label} className="p-5 transition hover:-translate-y-1 hover:shadow-soft">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">{s.label}</p>
              <span className="grid size-10 place-items-center rounded-xl bg-secondary text-primary"><Icon name={s.icon} className="size-5" /></span>
            </div>
            <p className="mt-3 font-display text-4xl font-semibold"><CountUp to={s.value} suffix={s.suffix} /></p>
            <p className="mt-1 text-xs text-primary-dark">{s.hint}</p>
          </Card>
        ))}
      </div>
      <div className="grid gap-6 xl:grid-cols-3">
        <Card className="p-6 xl:col-span-2">
          <h2 className="text-xl font-semibold">Enrolled courses</h2>
          <div className="mt-6 space-y-6">
            {enrolledCourses.map((e) => {
              const course = getCourse(e.courseId);
              return (
                <div key={e.courseId}>
                  <div className="mb-2 flex items-end justify-between gap-4">
                    <div><p className="font-semibold">{course?.title}</p><p className="text-xs text-muted-foreground">Next: {e.nextLesson}</p></div>
                    <span className="text-sm font-semibold text-primary-dark">{e.progress}%</span>
                  </div>
                  <Progress value={e.progress} />
                  <p className="mt-1.5 text-xs text-muted-foreground">{e.completedLessons} of {e.totalLessons} lessons completed</p>
                </div>
              );
            })}
          </div>
        </Card>
        <Card className="p-6">
          <h2 className="text-xl font-semibold">Attendance, last 8 weeks</h2>
          <div className="mt-6 flex h-44 items-end gap-2">
            {weeklyAttendance.map((w, i) => (
              <div key={w.week} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                <motion.div initial={{ height: 0 }} whileInView={{ height: `${w.value}%` }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.06 }}
                  className={cn("w-full rounded-t-lg", w.value === 100 ? "bg-primary" : "bg-primary/45")} title={`${w.value}%`} />
                <span className="text-[10px] text-muted-foreground">{w.week}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

/* ---------------------------------- Classes -------------------------------- */
function ClassRow({ c }: { c: ClassSession }) {
  const done = c.status === "completed";
  return (
    <Card className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-4">
        <span className={cn("grid size-12 shrink-0 place-items-center rounded-xl", done ? "bg-muted text-muted-foreground" : "bg-secondary text-primary")}><Video className="size-5" /></span>
        <div>
          <p className="font-semibold">{c.title}</p>
          <p className="text-sm text-muted-foreground">{c.tutor} · {c.date}, {c.time} · {c.duration}</p>
          {c.note && <p className="mt-1.5 text-xs text-primary-dark">Tutor note: {c.note}</p>}
        </div>
      </div>
      <Badge variant={done ? "outline" : "default"} className="self-start sm:self-center">{done ? "Completed" : "Upcoming"}</Badge>
    </Card>
  );
}

export function ClassesView() {
  return (
    <div className="space-y-8">
      <PageTitle title="My classes" subtitle="Your upcoming lessons and recent sessions." />
      <Tabs defaultValue="upcoming">
        <TabsList><TabsTrigger value="upcoming">Upcoming</TabsTrigger><TabsTrigger value="completed">Completed</TabsTrigger></TabsList>
        {(["upcoming", "completed"] as const).map((s) => (
          <TabsContent key={s} value={s} className="space-y-3">
            {classSessions.filter((c) => c.status === s).map((c) => <ClassRow key={c.id} c={c} />)}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

/* --------------------------------- Schedule -------------------------------- */
export function ScheduleView() {
  return (
    <div className="space-y-8">
      <PageTitle title="Weekly schedule" subtitle="Your regular class times. Reschedule with 4 hours' notice." />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {weekSchedule.map((d) => (
          <Card key={d.day} className={cn("p-5", d.isToday && "border-primary ring-4 ring-primary/10")}>
            <div className="flex items-center justify-between">
              <h2 className="font-sans text-lg font-semibold">{d.day}</h2>
              {d.isToday && <Badge>Today</Badge>}
            </div>
            <div className="mt-4 space-y-3">
              {d.slots.length === 0 && <p className="flex items-center gap-2 text-sm text-muted-foreground"><CalendarDays className="size-4" /> Rest day</p>}
              {d.slots.map((s) => (
                <div key={s.time + s.title} className="rounded-xl bg-muted px-3 py-2.5">
                  <p className="text-xs font-semibold text-primary-dark">{s.time}</p>
                  <p className="text-sm font-medium">{s.title}</p>
                  <p className="text-xs text-muted-foreground">{s.tutor}</p>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

/* --------------------------------- Progress -------------------------------- */
export function ProgressView() {
  return (
    <div className="space-y-8">
      <PageTitle title="Your progress" subtitle={`${juzProgress.completed} of 30 juz memorized. Currently on Juz ${juzProgress.current}.`} />
      <Card className="p-6">
        <h2 className="text-xl font-semibold">Hifz journey</h2>
        <div className="mt-5 grid grid-cols-5 gap-2 sm:grid-cols-10">
          {Array.from({ length: 30 }, (_, i) => i + 1).map((n) => {
            const done = n <= juzProgress.completed;
            const current = n === juzProgress.current;
            return (
              <motion.div key={n} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: n * 0.015 }}
                className={cn("grid aspect-square place-items-center rounded-xl text-sm font-semibold", done && "bg-primary text-primary-foreground", current && "animate-pulse-ring border-2 border-accent bg-accent/15 text-accent-foreground", !done && !current && "bg-muted text-muted-foreground")}
                title={done ? `Juz ${n}: memorized` : current ? `Juz ${n}: in progress` : `Juz ${n}`}>
                {n}
              </motion.div>
            );
          })}
        </div>
        <div className="mt-4 flex flex-wrap gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5"><span className="size-3 rounded bg-primary" />Memorized</span>
          <span className="flex items-center gap-1.5"><span className="size-3 rounded border-2 border-accent bg-accent/15" />In progress</span>
          <span className="flex items-center gap-1.5"><span className="size-3 rounded bg-muted" />Upcoming</span>
        </div>
      </Card>
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="p-6">
          <h2 className="text-xl font-semibold">Course progress</h2>
          <div className="mt-5 space-y-5">
            {enrolledCourses.map((e) => {
              const course = getCourse(e.courseId);
              const tutor = course && getTutor(course.tutorId);
              return (
                <div key={e.courseId} className="rounded-xl bg-muted/70 p-4">
                  <div className="flex justify-between gap-3"><p className="font-semibold">{course?.title}</p><span className="font-semibold text-primary-dark">{e.progress}%</span></div>
                  <p className="mb-3 text-xs text-muted-foreground">Tutor: {tutor?.name}</p>
                  <Progress value={e.progress} />
                </div>
              );
            })}
          </div>
        </Card>
        <Card className="p-6">
          <h2 className="text-xl font-semibold">Recent achievements</h2>
          <ul className="mt-5 space-y-4">
            {achievements.map((a) => (
              <li key={a.title} className="flex items-center gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-accent/20 text-accent-foreground"><Icon name="Award" className="size-6" /></span>
                <div><p className="font-semibold">{a.title}</p><p className="text-sm text-muted-foreground">{a.detail}</p></div>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}
