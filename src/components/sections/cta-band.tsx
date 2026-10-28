import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IslamicStar } from "@/components/shared/islamic-star";
import { Reveal } from "@/components/shared/reveal";

export function CtaBand() {
  return (
    <section className="px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-primary-dark via-primary to-deep px-6 py-16 text-center text-white shadow-glow sm:px-12">
          <div className="absolute inset-0 bg-islamic-pattern-light" aria-hidden />
          <IslamicStar className="absolute -right-16 -top-16 size-64 animate-spin-slow text-white/15" />
          <IslamicStar className="absolute -bottom-20 -left-20 size-72 animate-spin-slow text-white/10 [animation-direction:reverse]" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-3xl font-semibold sm:text-4xl">Take the first step with your first free class</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/85">Meet your tutor, check your level and get a personal learning plan. No payment and no commitment.</p>
            <Button asChild variant="gold" size="lg" className="mt-8"><Link href="/book-trial">Book free trial <ArrowRight /></Link></Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
