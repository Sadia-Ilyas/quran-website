import type { NavItem } from "@/types";

export const siteConfig = {
  name: "Noor Quran Academy",
  description:
    "Learn Quran online with certified expert tutors. One-to-one live classes in Nazra, Hifz, Tajweed and Arabic, at times that fit your life.",
  contact: {
    email: "hello@noorquran.academy",
    phone: "+1 (555) 010-2030",
    whatsapp: "+1 555 010 2030",
    location: "Online, worldwide",
    hours: "Classes run 24/7 across all time zones",
  },
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Why us", href: "/#features" },
  { label: "FAQ", href: "/#faq" },
  { label: "Student portal", href: "/dashboard" },
];
