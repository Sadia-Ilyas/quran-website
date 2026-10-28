"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, PlayCircle, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IslamicStar } from "@/components/shared/islamic-star";
import { CountUp } from "@/components/shared/count-up";
import { stats } from "@/data/mock-data";
import { cn } from "@/lib/utils";

/* Surah Al-Alaq 96:1, split by word. `rule` colours each word like a Tajweed mushaf. */
const ayah = [
  { text: "ٱقْرَأْ", rule: "Qalqalah", color: "text-sky-600" },
  { text: "بِٱسْمِ", rule: "Lam shamsiyyah", color: "text-slate-700" },
  { text: "رَبِّكَ", rule: "Ghunnah", color: "text-primary" },
  { text: "ٱلَّذِى", rule: "Idgham", color: "text-amber-600" },
  { text: "خَلَقَ", rule: "Qalqalah", color: "text-sky-600" },
];

function LiveClassCard() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % ayah.length), 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-md">
      <IslamicStar className="absolute left-1/2 top-1/2 -z-10 size-[135%] -translate-x-1/2 -translate-y-1/2 animate-spin-slow text-primary/25" />
      <div className="rounded-3xl border border-border bg-card p-6 shadow-glow sm:p-7">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-full bg-primary font-semibold text-primary-foreground">AR</span>
            <div>
              <p className="text-sm font-semibold">Ustadh Abdullah</p>
              <p className="text-xs text-muted-foreground">Tajweed, live 1-on-1</p>
            </div>
          </div>
          <span className="flex items-center gap-2 rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600">
            <span className="size-2 animate-pulse rounded-full bg-red-500" /> Live
          </span>
        </div>

        <div dir="rtl" lang="ar" className="mt-6 flex flex-wrap justify-center gap-x-3 gap-y-2 rounded-2xl bg-secondary/60 px-4 py-7 font-arabic text-4xl leading-[1.9] sm:text-5xl">
          {ayah.map((w, i) => (
            <span key={w.text} className={cn("relative rounded-lg px-1.5 transition-all duration-500", w.color, i === active && "scale-110 bg-accent/25")}>
              {w.text}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between rounded-xl bg-muted px-4 py-2.5 text-sm">
          <span className="text-muted-foreground">Rule in focus</span>
          <motion.span key={active} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="font-semibold text-primary-dark">
            {ayah[active].rule}
          </motion.span>
        </div>
      </div>

      <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute -right-2 -top-5 flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-2.5 shadow-card sm:-right-8">
        <Star className="size-4 fill-accent text-accent" /><span className="text-sm font-semibold">4.9 rating</span>
      </motion.div>
      <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-5 -left-2 flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-2.5 shadow-card sm:-left-8">
        <BadgeCheck className="size-5 text-primary" /><span className="text-sm font-semibold">Ijazah-certified</span>
      </motion.div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero">
      <div className="absolute inset-0 bg-islamic-pattern [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 pb-20 pt-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8 lg:pb-28 lg:pt-16">
        <div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-wrap gap-2">
            <Badge><BadgeCheck className="size-3.5" /> Ijazah-certified tutors</Badge>
            <Badge variant="gold">Free 30-minute trial</Badge>
            <Badge variant="outline">Ages 5 to 70+</Badge>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-6 text-balance text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl">
            Learn Quran Online with{" "}
            <span className="text-gradient">Certified Expert Tutors</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Private live classes in Nazra, Hifz, Tajweed and Arabic. Pick a tutor you are comfortable with, choose your own timings, and recite with confidence.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg"><Link href="/book-trial">Book free trial <ArrowRight /></Link></Button>
            <Button asChild size="lg" variant="outline"><Link href="/courses"><PlayCircle /> View courses</Link></Button>
          </motion.div>

          <motion.dl initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }} className="mt-12 grid max-w-xl grid-cols-2 gap-x-6 gap-y-6 border-t border-border pt-8 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dd className="font-display text-3xl font-semibold text-primary-dark"><CountUp to={s.value} suffix={s.suffix} decimals={s.decimals} /></dd>
                <dt className="mt-1 text-xs text-muted-foreground">{s.label}</dt>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.25 }} className="px-3">
          <LiveClassCard />
        </motion.div>
      </div>
    </section>
  );
}
