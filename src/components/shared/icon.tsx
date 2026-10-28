import {
  Award, Baby, BookOpen, Brain, CalendarDays, CheckCircle2, Clock, Flame, GraduationCap,
  Heart, Languages, LayoutDashboard, Mic, ScrollText, ShieldCheck, Sparkles, TrendingUp,
  UserPlus, Users, Video, type LucideProps,
} from "lucide-react";

export const iconMap = {
  Award, Baby, BookOpen, Brain, CalendarDays, CheckCircle2, Clock, Flame, GraduationCap,
  Heart, Languages, LayoutDashboard, Mic, ScrollText, ShieldCheck, Sparkles, TrendingUp,
  UserPlus, Users, Video,
};

export type IconName = keyof typeof iconMap;

/** Data files store icons as strings so they can cross the server/client boundary. */
export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Component = iconMap[name];
  return <Component {...props} />;
}
