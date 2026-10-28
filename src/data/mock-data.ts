import type {
  ClassSession, Course, DashboardStat, EnrolledCourse, FaqItem, Feature, ScheduleDay,
  Stat, Step, Testimonial, Tutor,
} from "@/types";

/* ------------------------------ Tutors ------------------------------ */
export const tutors: Tutor[] = [
  {
    id: "abdullah-rahman", name: "Ustadh Abdullah Rahman", title: "Tajweed & Qira'at specialist",
    gender: "Male", initials: "AR", experienceYears: 12, rating: 4.9, students: 420,
    specialties: ["Tajweed", "Hifz", "Qira'at"], languages: ["English", "Urdu", "Arabic"],
    bio: "Holds an Ijazah in Hafs 'an 'Asim and has taught students from age 7 to 70. Known for patient, step-by-step correction of makharij.",
  },
  {
    id: "maryam-siddiqui", name: "Ustadha Maryam Siddiqui", title: "Nazra & kids' Quran teacher",
    gender: "Female", initials: "MS", experienceYears: 9, rating: 4.9, students: 310,
    specialties: ["Noorani Qaida", "Nazra", "Kids"], languages: ["English", "Urdu"],
    bio: "A gentle, encouraging teacher who makes first Quran lessons joyful for children and for adults who are starting late.",
  },
  {
    id: "yusuf-hashimi", name: "Sheikh Yusuf Al-Hashimi", title: "Arabic language & Tafseer",
    gender: "Male", initials: "YH", experienceYears: 15, rating: 4.8, students: 275,
    specialties: ["Arabic Grammar", "Tafseer", "Vocabulary"], languages: ["English", "Arabic"],
    bio: "Graduate of a traditional Arabic institute with 15 years of teaching. Turns grammar rules into patterns you can actually use.",
  },
  {
    id: "aisha-khan", name: "Ustadha Aisha Khan", title: "Hifz mentor",
    gender: "Female", initials: "AK", experienceYears: 8, rating: 5.0, students: 190,
    specialties: ["Hifz", "Muraja'ah", "Tajweed"], languages: ["English", "Urdu", "Arabic"],
    bio: "Hafiza with Ijazah who builds personal memorization plans around each student's schedule and revision rhythm.",
  },
];

export const getTutor = (id: string) => tutors.find((t) => t.id === id);

/* ------------------------------ Courses ----------------------------- */
export const courses: Course[] = [
  {
    id: "nazra-quran", title: "Nazra Quran", arabicTitle: "ناظرة القرآن",
    tagline: "Read the Quran fluently, with confidence.",
    description: "Start from Arabic letters and build to smooth, correct recitation of the full Quran. Ideal for beginners and adults who never learned to read.",
    level: "Beginner", duration: "6 months", sessionsPerWeek: 3, sessionLength: "30 min", price: 29,
    icon: "BookOpen", tutorId: "maryam-siddiqui", featured: true,
    syllabus: [
      { title: "Arabic letters & sounds", topics: ["Recognising all 28 letters", "Short vowels (harakat)", "Joining letters in words"] },
      { title: "Noorani Qaida", topics: ["Tanween and long vowels", "Sukoon and shaddah", "Reading short phrases"] },
      { title: "Reading Juz Amma", topics: ["Short surahs, slowly", "Stopping and starting rules", "Weekly reading check"] },
      { title: "Fluent recitation", topics: ["Reading from Surah Al-Baqarah", "Pace and rhythm", "Final recitation review"] },
    ],
    outcomes: ["Read the Quran independently", "Recognise and pronounce every letter correctly", "Follow basic stopping rules", "Recite with steady rhythm"],
  },
  {
    id: "hifz-ul-quran", title: "Hifz-ul-Quran", arabicTitle: "حفظ القرآن",
    tagline: "Memorize with a plan that fits your life.",
    description: "A personal memorization programme with daily revision, weekly tests and a mentor who keeps you consistent, from your first surah to a full Hifz.",
    level: "Intermediate", duration: "12–36 months", sessionsPerWeek: 5, sessionLength: "45 min", price: 49,
    icon: "Brain", tutorId: "aisha-khan", featured: true,
    syllabus: [
      { title: "Foundation & assessment", topics: ["Level and pace assessment", "Choosing your starting juz", "Setting daily goals"] },
      { title: "Sabaq, Sabqi, Manzil", topics: ["New lesson method", "Recent revision cycle", "Long-term revision cycle"] },
      { title: "Strengthening retention", topics: ["Linking verses", "Similar-verse (mutashabihat) drills", "Monthly oral tests"] },
      { title: "Completion & Ijazah path", topics: ["Full-juz recitation", "Review of weak areas", "Guidance toward Ijazah"] },
    ],
    outcomes: ["Memorize new verses every week", "Keep old lessons fresh with a revision cycle", "Recite from memory with correct Tajweed", "Stay consistent with a personal schedule"],
  },
  {
    id: "tajweed-rules", title: "Tajweed Rules", arabicTitle: "أحكام التجويد",
    tagline: "Recite the way it was revealed.",
    description: "Learn makharij, sifat and the rules of noon sakinah, meem sakinah and madd, applied live to your own recitation.",
    level: "Intermediate", duration: "4 months", sessionsPerWeek: 3, sessionLength: "40 min", price: 35,
    icon: "Mic", tutorId: "abdullah-rahman", featured: true,
    syllabus: [
      { title: "Makharij al-huruf", topics: ["Articulation points", "Heavy vs light letters", "Common pronunciation mistakes"] },
      { title: "Noon & meem rules", topics: ["Izhar, idgham, iqlab, ikhfa", "Ghunnah", "Meem sakinah rules"] },
      { title: "Madd & qalqalah", topics: ["Natural and extended madd", "Qalqalah", "Counting beats"] },
      { title: "Applied recitation", topics: ["Live correction on Juz 30", "Waqf and ibtida", "Final assessment"] },
    ],
    outcomes: ["Pronounce every letter from its correct point", "Apply Tajweed rules while reading", "Spot and fix your own mistakes", "Recite with melody and control"],
  },
  {
    id: "arabic-grammar", title: "Arabic Grammar", arabicTitle: "قواعد اللغة العربية",
    tagline: "Understand what you recite.",
    description: "Learn the grammar and vocabulary that unlock the Quran's meaning, using verses you already know as your examples.",
    level: "Advanced", duration: "8 months", sessionsPerWeek: 2, sessionLength: "45 min", price: 39,
    icon: "Languages", tutorId: "yusuf-hashimi", featured: true,
    syllabus: [
      { title: "Words & sentences", topics: ["Nouns, verbs and particles", "Nominal vs verbal sentence", "Common Quranic vocabulary"] },
      { title: "Cases & endings", topics: ["Marfu', mansub, majrur", "Idafah construction", "Adjective agreement"] },
      { title: "Verb forms", topics: ["Past, present, command", "Roots and patterns", "Derived forms I–X overview"] },
      { title: "Reading verses", topics: ["Parsing short surahs", "Translating phrase by phrase", "Final comprehension test"] },
    ],
    outcomes: ["Break down simple Quranic sentences", "Recognise roots and verb forms", "Build a core Quranic vocabulary", "Read translations with more insight"],
  },
  {
    id: "quran-for-kids", title: "Quran for Kids", arabicTitle: "القرآن للأطفال",
    tagline: "Playful lessons children look forward to.",
    description: "Short, interactive sessions for ages 5–12 with stories, games and gentle correction, led by patient teachers.",
    level: "Beginner", duration: "6 months", sessionsPerWeek: 3, sessionLength: "30 min", price: 29,
    icon: "Baby", tutorId: "maryam-siddiqui",
    syllabus: [
      { title: "Letters through play", topics: ["Letter songs and games", "Writing letters", "Sound matching"] },
      { title: "First words", topics: ["Blending letters", "Short du'as", "Daily reading habit"] },
      { title: "First surahs", topics: ["Al-Fatihah and short surahs", "Recitation with rhythm", "Meaning in simple stories"] },
      { title: "Showcase", topics: ["Recitation for parents", "Progress certificate", "Next-step plan"] },
    ],
    outcomes: ["Read simple Arabic words", "Memorize short surahs and du'as", "Build a love of Quran time", "Share monthly progress with parents"],
  },
  {
    id: "tafseer-essentials", title: "Tafseer Essentials", arabicTitle: "تفسير القرآن",
    tagline: "Reflect on the meaning, verse by verse.",
    description: "A guided journey through the meanings and context of selected surahs, based on classical sources and explained in clear English.",
    level: "Advanced", duration: "6 months", sessionsPerWeek: 2, sessionLength: "45 min", price: 45,
    icon: "ScrollText", tutorId: "yusuf-hashimi",
    syllabus: [
      { title: "How to read tafseer", topics: ["Sources and methodology", "Context of revelation", "Makki and Madani themes"] },
      { title: "Surah Al-Fatihah & Juz 30", topics: ["Verse meanings", "Lessons and reflections", "Daily application"] },
      { title: "Stories of the prophets", topics: ["Key accounts in the Quran", "Themes and lessons", "Discussion sessions"] },
      { title: "Living by the Quran", topics: ["Character and ethics", "Reflection journal", "Final presentation"] },
    ],
    outcomes: ["Explain the meaning of selected surahs", "Understand context and themes", "Apply lessons to daily life", "Keep a reflection journal"],
  },
];

export const getCourse = (id: string) => courses.find((c) => c.id === id);

/* --------------------------- Landing content ------------------------- */
export const features: Feature[] = [
  { title: "Tajweed mastery", icon: "Mic", description: "Live correction of makharij and rules, so every letter is recited as it should be." },
  { title: "1-on-1 classes", icon: "Video", description: "Private video lessons with your own tutor. Every minute is spent on your recitation." },
  { title: "Flexible timings", icon: "Clock", description: "Pick slots that suit your time zone, and reschedule with 4 hours' notice." },
  { title: "Male & female tutors", icon: "GraduationCap", description: "Choose a qualified tutor you are comfortable with, for you or your children." },
  { title: "Clear progress reports", icon: "TrendingUp", description: "See attendance, lessons completed and next goals in your student portal." },
  { title: "Free 30-minute trial", icon: "Heart", description: "Meet a tutor, check your level and see if we are a fit before you pay anything." },
];

export const steps: Step[] = [
  { title: "Book a free trial", icon: "UserPlus", description: "Tell us your course and preferred time. It takes under a minute." },
  { title: "Meet your tutor", icon: "Video", description: "We assess your level in a relaxed 30-minute live class." },
  { title: "Learn and track progress", icon: "TrendingUp", description: "Attend regular lessons and follow your progress in the portal." },
];

export const stats: Stat[] = [
  { label: "Students taught", value: 2500, suffix: "+" },
  { label: "Certified tutors", value: 60, suffix: "+" },
  { label: "Countries", value: 40, suffix: "+" },
  { label: "Average rating", value: 4.9, decimals: 1 },
];

export const testimonials: Testimonial[] = [
  { name: "Sarah M.", role: "Parent of two, London", initials: "SM", quote: "My children now ask when their next class is. Their tutor is patient and the weekly reports keep us informed." },
  { name: "Omar H.", role: "Adult learner, Toronto", initials: "OH", quote: "I started at 34 with no Arabic. Six months later I read the Quran on my own. The Tajweed corrections made the difference." },
  { name: "Fatima R.", role: "Hifz student, Dubai", initials: "FR", quote: "The revision plan kept me consistent while working full time. I finished my fifth juz this month." },
];

export const faqs: FaqItem[] = [
  { question: "How does the free trial work?", answer: "Book a 30-minute live class with a tutor. They check your current level, answer your questions and suggest a plan. There is no payment and no commitment." },
  { question: "Are the tutors qualified?", answer: "Yes. Every tutor holds an Ijazah or equivalent certification, passes a recitation test and a teaching demo, and is reviewed regularly." },
  { question: "Can I choose a male or female tutor?", answer: "Yes. Sisters and children can request a female tutor, and you can switch tutors at any time." },
  { question: "What do I need to join a class?", answer: "A laptop, tablet or phone with a stable internet connection. Classes run on a standard video platform, so there is nothing complicated to install." },
  { question: "What if I miss a class?", answer: "Reschedule with at least 4 hours' notice and the class is not lost. Each missed session can be recovered within the same month." },
  { question: "What age groups do you teach?", answer: "We teach children from age 5, teenagers and adults, with lessons adapted to each age group." },
];

/* ------------------------------ Dashboard ---------------------------- */
export const student = { name: "Ahmed Raza", firstName: "Ahmed", initials: "AR", plan: "Premium · 5 days/week" };

export const dashboardStats: DashboardStat[] = [
  { label: "Attendance", value: 94, suffix: "%", hint: "+3% vs last month", icon: "CheckCircle2" },
  { label: "Classes completed", value: 48, hint: "6 this month", icon: "Video" },
  { label: "Day streak", value: 12, hint: "Your best is 21", icon: "Flame" },
  { label: "Pages memorized", value: 86, hint: "4 new this week", icon: "BookOpen" },
];

export const enrolledCourses: EnrolledCourse[] = [
  { courseId: "hifz-ul-quran", progress: 38, nextLesson: "Surah Al-Mulk, verses 11–20", completedLessons: 19, totalLessons: 50 },
  { courseId: "tajweed-rules", progress: 72, nextLesson: "Rules of Qalqalah", completedLessons: 26, totalLessons: 36 },
  { courseId: "arabic-grammar", progress: 21, nextLesson: "Nominal sentences", completedLessons: 7, totalLessons: 32 },
];

export const weeklyAttendance = [
  { week: "W1", value: 80 }, { week: "W2", value: 100 }, { week: "W3", value: 90 }, { week: "W4", value: 100 },
  { week: "W5", value: 70 }, { week: "W6", value: 100 }, { week: "W7", value: 95 }, { week: "W8", value: 100 },
];

export const upcomingClass = {
  title: "Tajweed Level 2: Makharij review", tutor: "Ustadh Abdullah Rahman", time: "Today, 6:30 PM", startsIn: "Starts in 25 min",
};

export const classSessions: ClassSession[] = [
  { id: "c1", title: "Tajweed: Makharij review", tutor: "Ustadh Abdullah Rahman", date: "Today", time: "6:30 PM", duration: "40 min", status: "upcoming" },
  { id: "c2", title: "Hifz: New lesson (Al-Mulk 11–20)", tutor: "Ustadha Aisha Khan", date: "Tomorrow", time: "5:00 PM", duration: "45 min", status: "upcoming" },
  { id: "c3", title: "Arabic Grammar: Nominal sentences", tutor: "Sheikh Yusuf Al-Hashimi", date: "Fri, 30 Oct", time: "7:00 PM", duration: "45 min", status: "upcoming" },
  { id: "c4", title: "Hifz: Revision (Juz 29)", tutor: "Ustadha Aisha Khan", date: "Mon, 26 Oct", time: "5:00 PM", duration: "45 min", status: "completed", note: "Excellent flow. Review verses 6–9 once more." },
  { id: "c5", title: "Tajweed: Madd rules", tutor: "Ustadh Abdullah Rahman", date: "Sun, 25 Oct", time: "6:30 PM", duration: "40 min", status: "completed", note: "Madd muttasil counted correctly." },
  { id: "c6", title: "Arabic Grammar: Verb tenses", tutor: "Sheikh Yusuf Al-Hashimi", date: "Fri, 23 Oct", time: "7:00 PM", duration: "45 min", status: "completed", note: "Practise the exercise set 4." },
];

export const weekSchedule: ScheduleDay[] = [
  { day: "Mon", slots: [{ time: "5:00 PM", title: "Hifz: Revision", tutor: "Ustadha Aisha" }] },
  { day: "Tue", isToday: true, slots: [{ time: "6:30 PM", title: "Tajweed: Makharij", tutor: "Ustadh Abdullah" }] },
  { day: "Wed", slots: [{ time: "5:00 PM", title: "Hifz: New lesson", tutor: "Ustadha Aisha" }] },
  { day: "Thu", slots: [{ time: "6:30 PM", title: "Tajweed: Practice", tutor: "Ustadh Abdullah" }] },
  { day: "Fri", slots: [{ time: "7:00 PM", title: "Arabic Grammar", tutor: "Sheikh Yusuf" }, { time: "8:00 PM", title: "Hifz: Revision", tutor: "Ustadha Aisha" }] },
  { day: "Sat", slots: [] },
  { day: "Sun", slots: [{ time: "6:30 PM", title: "Tajweed: Madd", tutor: "Ustadh Abdullah" }] },
];

export const juzProgress = { completed: 8, current: 9 };
export const achievements = [
  { title: "7-day streak", detail: "Attended 7 classes in a row" },
  { title: "Juz 8 complete", detail: "Finished memorizing Juz 8" },
  { title: "Perfect Tajweed week", detail: "No corrections on makharij" },
];
