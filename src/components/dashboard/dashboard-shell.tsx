"use client";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, CalendarDays, LayoutDashboard, TrendingUp, Video, type LucideIcon } from "lucide-react";
import { student } from "@/data/mock-data";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/layout/logo";
import { IslamicStar } from "@/components/shared/islamic-star";
import { ClassesView, OverviewView, ProgressView, ScheduleView } from "./views";

type ViewId = "overview" | "classes" | "schedule" | "progress";

const nav: { id: ViewId; label: string; icon: LucideIcon }[] = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "classes", label: "My classes", icon: Video },
  { id: "schedule", label: "Schedule", icon: CalendarDays },
  { id: "progress", label: "Progress", icon: TrendingUp },
];

const views: Record<ViewId, ReactNode> = {
  overview: <OverviewView />, classes: <ClassesView />, schedule: <ScheduleView />, progress: <ProgressView />,
};

export function DashboardShell() {
  const [view, setView] = useState<ViewId>("overview");

  return (
    <div className="min-h-screen bg-muted/50 lg:flex">
      {/* Desktop sidebar */}
      <aside className="relative hidden w-72 shrink-0 flex-col overflow-hidden bg-deep p-6 text-deep-foreground lg:sticky lg:top-0 lg:flex lg:h-screen">
        <div className="absolute inset-0 bg-islamic-pattern-light" aria-hidden />
        <IslamicStar className="absolute -bottom-24 -left-24 size-72 animate-spin-slow text-white/10" />
        <div className="relative flex h-full flex-col">
          <Logo light />
          <nav className="mt-10 space-y-1.5" aria-label="Student portal">
            {nav.map((n) => (
              <button key={n.id} onClick={() => setView(n.id)} aria-current={view === n.id ? "page" : undefined}
                className={cn("relative flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition", view === n.id ? "text-white" : "text-deep-foreground/70 hover:bg-white/5 hover:text-white")}>
                {view === n.id && <motion.span layoutId="nav-active" className="absolute inset-0 rounded-xl bg-white/10 ring-1 ring-white/15" />}
                <n.icon className="relative size-5" /><span className="relative">{n.label}</span>
              </button>
            ))}
          </nav>
          <div className="mt-auto space-y-4">
            <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
              <span className="grid size-11 place-items-center rounded-full bg-accent font-semibold text-accent-foreground">{student.initials}</span>
              <div className="min-w-0"><p className="truncate text-sm font-semibold text-white">{student.name}</p><p className="truncate text-xs text-deep-foreground/70">{student.plan}</p></div>
            </div>
            <Link href="/" className="flex items-center gap-2 px-2 text-sm text-deep-foreground/70 transition hover:text-accent"><ArrowLeft className="size-4" /> Back to website</Link>
          </div>
        </div>
      </aside>

      {/* Mobile top bar */}
      <div className="sticky top-0 z-30 bg-deep px-4 pb-3 pt-4 lg:hidden">
        <div className="flex items-center justify-between">
          <Logo light />
          <Link href="/" className="text-xs text-deep-foreground/70">Back to site</Link>
        </div>
        <nav className="-mx-1 mt-3 flex gap-2 overflow-x-auto px-1 pb-1" aria-label="Student portal">
          {nav.map((n) => (
            <button key={n.id} onClick={() => setView(n.id)} aria-current={view === n.id ? "page" : undefined}
              className={cn("flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition", view === n.id ? "bg-white text-deep" : "bg-white/10 text-deep-foreground")}>
              <n.icon className="size-4" />{n.label}
            </button>
          ))}
        </nav>
      </div>

      <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-10">
        <AnimatePresence mode="wait">
          <motion.div key={view} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }}>
            {views[view]}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
