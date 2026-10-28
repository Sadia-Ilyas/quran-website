# Noor Quran Academy: Static Frontend

A fully static, responsive Quran academy website built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS v4**, **shadcn/ui-style components (Radix)**, **Framer Motion** and **Lucide icons**.

There is no backend, database, authentication or API. All data is mock data in `src/data/mock-data.ts`. Forms validate with React Hook Form + Zod and then show a fake success message.

---

## 1. Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (all pages are pre-rendered static HTML)
npm run typecheck  # TypeScript check
```

Requires Node.js 18.18 or newer (Node 20+ recommended).

## 2. Deploy on Vercel + connect your domain

1. Push this folder to a GitHub repository.
2. On vercel.com choose **Add New → Project**, import the repo and click **Deploy**. No environment variables or settings are needed (Framework preset: Next.js is detected automatically).
3. Open **Project → Settings → Domains**, add your domain and follow the DNS records Vercel shows (usually an `A` record for the root and a `CNAME` for `www`).

## 3. Change the look in ONE file: `src/app/globals.css`

The top of this file is the theme. Edit the `:root` values and the whole site updates:

| Variable | What it controls |
| --- | --- |
| `--primary`, `--primary-dark` | Emerald brand colour (buttons, links, highlights) |
| `--accent` | Gold accent (stars, badges, highlights) |
| `--background`, `--foreground` | Page background and main text |
| `--deep`, `--deep-foreground` | Dark green sections: footer, testimonials, dashboard sidebar |
| `--card`, `--muted`, `--border` | Cards, soft panels, borders |
| `--radius` | How rounded everything is |

The same file also holds shadows, animation keyframes and the decorative utilities `bg-islamic-pattern`, `bg-hero` and `text-gradient`. Fonts are set in `src/app/layout.tsx` (Plus Jakarta Sans for body, Playfair Display for headings, Amiri for Arabic).

> Note: the geometric pattern SVG in `globals.css` has the emerald colour (`%23059669`) written inside it. If you change `--primary` to a different hue, update that value too.

## 4. Editing content

| To change… | Edit |
| --- | --- |
| Site name, contact details, navbar links | `src/config/site.ts` |
| Courses, tutors, features, FAQ, testimonials, stats, dashboard data | `src/data/mock-data.ts` |
| TypeScript types for all of the above | `src/types/index.ts` |
| Form validation rules and time slots | `src/lib/validations.ts` |

Add a course by adding one object to the `courses` array. Its page at `/courses/<id>`, its card and its form option appear automatically.

## 5. Pages (routes)

| URL | File | Notes |
| --- | --- | --- |
| `/` | `src/app/(site)/page.tsx` | Landing page, made of section components |
| `/courses` | `src/app/(site)/courses/page.tsx` | Catalog with level filter |
| `/courses/[id]` | `src/app/(site)/courses/[id]/page.tsx` | Detail page, statically generated for every course |
| `/book-trial` | `src/app/(site)/book-trial/page.tsx` | Free trial form |
| `/dashboard` | `src/app/dashboard/page.tsx` | Student portal mock |

`(site)` is a **route group**. It does not appear in the URL; it lets the public pages share the navbar and footer (`(site)/layout.tsx`) while the dashboard has its own full-screen layout.

## 6. Folder structure

```
src/
├── app/
│   ├── globals.css          ← THE THEME FILE
│   ├── layout.tsx           root layout: fonts, metadata
│   ├── not-found.tsx        404 page
│   ├── (site)/              public pages with navbar + footer
│   └── dashboard/           student portal
├── components/
│   ├── ui/                  base components (shadcn-style): button, card, badge, input, accordion, dialog, tabs, progress
│   ├── layout/              logo, navbar, footer
│   ├── sections/            landing page sections: hero, features, courses-section, how-it-works, testimonials, faq, cta-band
│   ├── courses/             course-card, course-catalog, course-tabs, enroll-dialog, trial-form
│   ├── dashboard/           dashboard-shell (sidebar + view switching), views (the 4 screens)
│   └── shared/              icon map, reveal animation, count-up, islamic-star, section-heading
├── config/site.ts           site name, contact, navigation
├── data/mock-data.ts        all mock data
├── lib/                     utils (cn helper), validations (Zod)
└── types/index.ts           shared TypeScript types
```

## 7. Component guide

**Base components (`components/ui`)**: Small building blocks styled only with theme variables.
- `Button`: variants `default`, `gold`, `outline`, `ghost`, `secondary`, `light`, `glass`; sizes `sm`, `default`, `lg`, `icon`. Use `asChild` to turn a `Link` into a button.
- `Card`, `Badge`, `Input` / `Textarea` / `Select` / `Label`: form and layout primitives.
- `Accordion`, `Dialog`, `Tabs`: built on Radix UI, so they are keyboard accessible.
- `Progress`: animated bar that fills when scrolled into view.

**Landing sections (`components/sections`)**
- `Hero`: headline, CTAs, count-up stats and a live-class card whose Arabic verse (Surah Al-Alaq 96:1) highlights each word in turn with its Tajweed rule. This is the main animated moment of the site.
- `Features`: six feature cards that tint and rotate their icon on hover.
- `CoursesSection`: the courses marked `featured: true`.
- `HowItWorks`, `Testimonials`, `Faq`, `CtaBand`: the rest of the page.

**Courses**
- `CourseCard`: used on the home page, catalog and detail page.
- `CourseCatalog`: client component with animated level filter.
- `CourseTabs`: syllabus accordion, learning outcomes and instructor profile.
- `TrialForm`: React Hook Form + Zod. Shows field errors, a fake 1-second "sending" state and an animated success message. Nothing is sent anywhere.
- `EnrollDialog`: wraps `TrialForm` in a modal, opened from the course detail page.

**Dashboard**
- `DashboardShell`: sidebar on desktop, scrollable pill menu on mobile. Switches between four views with a transition.
- `views.tsx`: Overview (upcoming class banner, stat cards, course progress, attendance chart), My classes (tabs), Schedule (weekly grid), Progress (30-juz tracker and achievements).

**Shared**
- `Icon`: icons are stored as strings in the data file (e.g. `"BookOpen"`) and resolved here. To use a new icon, import it in `icon.tsx` and add it to `iconMap`.
- `Reveal`: scroll-fade wrapper, used on section headers and card grids. Respects "reduce motion" settings.
- `CountUp`, `IslamicStar`, `SectionHeading`.

## 8. Server vs client components

Most pages are server components (fast, static). Files starting with `"use client"` need browser interactivity: navbar, hero, forms, tabs, accordions, dialogs, dashboard, animations. Data passed from server to client components is plain objects only (which is why icons are strings).

## 9. Adding a backend later

The UI is ready for it. Replace the fake delay in `TrialForm.onSubmit` with a `fetch("/api/trial", …)` or a Server Action; swap `src/data/mock-data.ts` for API or database calls; and add real auth in front of `/dashboard`.
