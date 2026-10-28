import type { Metadata } from "next";
import { CalendarCheck, HeartHandshake, MessagesSquare, ShieldCheck } from "lucide-react";
import { TrialForm } from "@/components/courses/trial-form";
import { Reveal } from "@/components/shared/reveal";

export const metadata: Metadata = { title: "Book a free trial" };

const perks = [
  { icon: CalendarCheck, title: "30 minutes, completely free", text: "A live class with a real tutor, not a recorded demo." },
  { icon: MessagesSquare, title: "Level assessment", text: "We listen to your recitation and suggest the right course." },
  { icon: HeartHandshake, title: "Pick your tutor", text: "Request a male or female tutor and your preferred time." },
  { icon: ShieldCheck, title: "No commitment", text: "No card needed. Decide after the class." },
];

export default function BookTrialPage() {
  return (
    <section className="relative overflow-hidden bg-hero">
      <div className="absolute inset-0 bg-islamic-pattern [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-start lg:px-8">
        <Reveal>
          <h1 className="text-4xl font-semibold sm:text-5xl">Book your free trial class</h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">Tell us a little about the student. We'll confirm a time on WhatsApp within 24 hours.</p>
          <ul className="mt-10 space-y-6">
            {perks.map((p) => (
              <li key={p.title} className="flex gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-secondary text-primary"><p.icon className="size-5" /></span>
                <div><h3 className="font-sans text-base font-semibold">{p.title}</h3><p className="mt-0.5 text-sm text-muted-foreground">{p.text}</p></div>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-9"><TrialForm /></div>
        </Reveal>
      </div>
    </section>
  );
}
