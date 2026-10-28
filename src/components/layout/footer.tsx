import Link from "next/link";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { courses } from "@/data/mock-data";
import { mainNav, siteConfig } from "@/config/site";
import { Logo } from "./logo";

export function Footer() {
  const { contact } = siteConfig;
  return (
    <footer className="relative overflow-hidden bg-deep text-deep-foreground">
      <div className="absolute inset-0 bg-islamic-pattern-light" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p dir="rtl" lang="ar" className="mb-12 text-center font-arabic text-3xl text-accent sm:text-4xl">
          بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </p>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo light />
            <p className="mt-4 text-sm leading-relaxed text-deep-foreground/70">{siteConfig.description}</p>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-white">Explore</h4>
            <ul className="space-y-2.5 text-sm">
              {mainNav.map((n) => (<li key={n.href}><Link href={n.href} className="text-deep-foreground/70 transition hover:text-accent">{n.label}</Link></li>))}
              <li><Link href="/book-trial" className="text-deep-foreground/70 transition hover:text-accent">Book free trial</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-white">Courses</h4>
            <ul className="space-y-2.5 text-sm">
              {courses.slice(0, 5).map((c) => (<li key={c.id}><Link href={`/courses/${c.id}`} className="text-deep-foreground/70 transition hover:text-accent">{c.title}</Link></li>))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-white">Contact</h4>
            <ul className="space-y-3 text-sm text-deep-foreground/70">
              <li className="flex gap-3"><Mail className="mt-0.5 size-4 shrink-0 text-accent" />{contact.email}</li>
              <li className="flex gap-3"><Phone className="mt-0.5 size-4 shrink-0 text-accent" />{contact.phone}</li>
              <li className="flex gap-3"><MessageCircle className="mt-0.5 size-4 shrink-0 text-accent" />WhatsApp: {contact.whatsapp}</li>
              <li className="flex gap-3"><MapPin className="mt-0.5 size-4 shrink-0 text-accent" />{contact.location}</li>
              <li className="flex gap-3"><Clock className="mt-0.5 size-4 shrink-0 text-accent" />{contact.hours}</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-6 text-xs text-deep-foreground/60 sm:flex-row">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Demo website with mock data. No real bookings are made.</p>
        </div>
      </div>
    </footer>
  );
}
