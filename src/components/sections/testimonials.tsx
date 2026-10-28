import { Star } from "lucide-react";
import { testimonials } from "@/data/mock-data";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-deep py-20 sm:py-28">
      <div className="absolute inset-0 bg-islamic-pattern-light" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal><SectionHeading light title="Families and learners trust us" description="Real stories from students who started where you are today." /></Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <figure className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur transition hover:bg-white/10">
                <div className="flex gap-0.5 text-accent">{Array.from({ length: 5 }).map((_, k) => <Star key={k} className="size-4 fill-current" />)}</div>
                <blockquote className="mt-4 flex-1 leading-relaxed text-deep-foreground">“{t.quote}”</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-full bg-accent font-semibold text-accent-foreground">{t.initials}</span>
                  <span><span className="block text-sm font-semibold text-white">{t.name}</span><span className="text-xs text-deep-foreground/70">{t.role}</span></span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
