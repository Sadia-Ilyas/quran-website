import type { IconName } from "@/components/shared/icon";

export type Level = "Beginner" | "Intermediate" | "Advanced";

export interface NavItem { label: string; href: string }

export interface Tutor {
  id: string;
  name: string;
  title: string;
  gender: "Male" | "Female";
  initials: string;
  experienceYears: number;
  rating: number;
  students: number;
  specialties: string[];
  languages: string[];
  bio: string;
}

export interface SyllabusModule { title: string; topics: string[] }

export interface Course {
  id: string;
  title: string;
  arabicTitle: string;
  tagline: string;
  description: string;
  level: Level;
  duration: string;
  sessionsPerWeek: number;
  sessionLength: string;
  price: number; // USD per month
  icon: IconName;
  tutorId: string;
  syllabus: SyllabusModule[];
  outcomes: string[];
  featured?: boolean;
}

export interface Feature { title: string; description: string; icon: IconName }
export interface Step { title: string; description: string; icon: IconName }
export interface FaqItem { question: string; answer: string }
export interface Testimonial { name: string; role: string; quote: string; initials: string }
export interface Stat { label: string; value: number; suffix?: string; decimals?: number }

/* ----- Dashboard ----- */
export interface DashboardStat { label: string; value: number; suffix?: string; hint: string; icon: IconName }
export interface EnrolledCourse {
  courseId: string; progress: number; nextLesson: string; completedLessons: number; totalLessons: number;
}
export interface ClassSession {
  id: string; title: string; tutor: string; date: string; time: string; duration: string;
  status: "upcoming" | "completed"; note?: string;
}
export interface ScheduleSlot { time: string; title: string; tutor: string }
export interface ScheduleDay { day: string; isToday?: boolean; slots: ScheduleSlot[] }
