"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { courses, getCourse } from "@/data/mock-data";
import { timeSlots, trialSchema, type TrialFormValues } from "@/lib/validations";
import { Button } from "@/components/ui/button";
import { Input, Label, Select, Textarea } from "@/components/ui/input";

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <Label>{label}</Label>
      {children}
      {error && <p role="alert" className="mt-1.5 text-xs font-medium text-red-600">{error}</p>}
    </div>
  );
}

/** Static form: validates with Zod, then shows a mock success message. No data is sent anywhere. */
export function TrialForm({ defaultCourseId = "" }: { defaultCourseId?: string }) {
  const [submitted, setSubmitted] = useState<TrialFormValues | null>(null);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<TrialFormValues>({
    resolver: zodResolver(trialSchema),
    defaultValues: { name: "", email: "", whatsapp: "", courseId: defaultCourseId, preferredTime: "", notes: "" },
  });

  const onSubmit = async (values: TrialFormValues) => {
    await new Promise((r) => setTimeout(r, 1000)); // fake network delay
    setSubmitted(values);
  };

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div key="ok" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="py-6 text-center" role="status">
          <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.15, stiffness: 200 }} className="mx-auto grid size-20 place-items-center rounded-full bg-secondary text-primary">
            <CheckCircle2 className="size-10" />
          </motion.span>
          <h3 className="mt-5 font-display text-2xl font-semibold">JazakAllahu khairan, {submitted.name.split(" ")[0]}!</h3>
          <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Your free trial request for <strong className="text-foreground">{getCourse(submitted.courseId)?.title}</strong> has been received. We will message you on WhatsApp at {submitted.whatsapp} within 24 hours.
          </p>
          <p className="mt-4 rounded-xl bg-accent/10 px-4 py-2 text-xs text-accent-foreground">Demo mode: nothing was actually sent.</p>
          <Button variant="outline" className="mt-6" onClick={() => { reset(); setSubmitted(null); }}>Book another trial</Button>
        </motion.div>
      ) : (
        <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
          <Field label="Student name" error={errors.name?.message}>
            <Input placeholder="e.g. Ahmed Raza" autoComplete="name" aria-invalid={!!errors.name} {...register("name")} />
          </Field>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Email" error={errors.email?.message}>
              <Input type="email" placeholder="name@example.com" autoComplete="email" aria-invalid={!!errors.email} {...register("email")} />
            </Field>
            <Field label="WhatsApp number" error={errors.whatsapp?.message}>
              <Input type="tel" placeholder="+44 7700 900123" autoComplete="tel" aria-invalid={!!errors.whatsapp} {...register("whatsapp")} />
            </Field>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Course" error={errors.courseId?.message}>
              <Select aria-invalid={!!errors.courseId} {...register("courseId")}>
                <option value="">Select a course</option>
                {courses.map((c) => <option key={c.id} value={c.id}>{c.title}</option>)}
              </Select>
            </Field>
            <Field label="Preferred time" error={errors.preferredTime?.message}>
              <Select aria-invalid={!!errors.preferredTime} {...register("preferredTime")}>
                <option value="">Select a time</option>
                {timeSlots.map((t) => <option key={t} value={t}>{t}</option>)}
              </Select>
            </Field>
          </div>
          <Field label="Anything we should know? (optional)" error={errors.notes?.message}>
            <Textarea placeholder="Current level, student age, tutor preference…" {...register("notes")} />
          </Field>
          <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (<><Loader2 className="animate-spin" /> Sending request…</>) : (<><Send /> Book my free trial</>)}
          </Button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
