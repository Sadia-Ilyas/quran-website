import { steps } from "@/data/mock-data";
import { Icon } from "@/components/shared/icon";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

export function HowItWorks() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal><SectionHeading title="Start in three simple steps" /></Reveal>
        <ol className="relative mt-16 grid gap-10 md:grid-cols-3">
          <div className="absolute left-[16%] right-[16%] top-8 hidden border-t-2 border-dashed border-primary/30 md:block" aria-hidden />
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.12}>
              <li className="relative text-center">
                <span className="relative mx-auto grid size-16 place-items-center rounded-full bg-primary text-primary-foreground shadow-glow ring-8 ring-background"><Icon name={s.icon} className="size-7" /></span>
                <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
