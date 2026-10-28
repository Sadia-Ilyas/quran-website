import { z } from "zod";

export const timeSlots = [
  "Morning (6 AM – 12 PM)",
  "Afternoon (12 PM – 5 PM)",
  "Evening (5 PM – 9 PM)",
  "Late night (9 PM – 12 AM)",
] as const;

export const trialSchema = z.object({
  name: z.string().trim().min(2, "Please enter the student's full name."),
  email: z.string().trim().email("Enter a valid email, like name@example.com."),
  whatsapp: z
    .string()
    .trim()
    .regex(/^\+?[0-9\s-]{7,16}$/, "Enter a WhatsApp number with country code, like +44 7700 900123."),
  courseId: z.string().min(1, "Choose a course."),
  preferredTime: z.string().min(1, "Choose a preferred time."),
  notes: z.string().max(300, "Keep notes under 300 characters.").optional(),
});

export type TrialFormValues = z.infer<typeof trialSchema>;
