"use client";
import type { ReactNode } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { TrialForm } from "./trial-form";

export function EnrollDialog({ courseId, courseTitle, children }: { courseId: string; courseTitle: string; children: ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogTitle>Book your free trial</DialogTitle>
        <DialogDescription>Join a free 30-minute live class for {courseTitle}. No payment needed.</DialogDescription>
        <div className="mt-6"><TrialForm defaultCourseId={courseId} /></div>
      </DialogContent>
    </Dialog>
  );
}
