import { features } from "@/data/mock-data";
import { Icon } from "@/components/shared/icon";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

export function Features() {
  return (
    <section id="features" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading title="Everything a serious Quran student needs" description="A structured learning path, real teachers and a schedule that works around your life." />
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.08}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-soft">
                <div className="absolute -right-10 -top-10 size-32 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-[2.2]" aria-hidden />
                <span className="relative grid size-13 place-items-center rounded-2xl bg-secondary text-primary transition-all duration-500 group-hover:rotate-6 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon name={f.icon} className="size-6" />
                </span>
                <h3 className="relative mt-5 text-xl font-semibold">{f.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
