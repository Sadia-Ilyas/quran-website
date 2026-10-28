import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97] [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-soft hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-glow",
        gold: "bg-accent text-accent-foreground shadow-soft hover:-translate-y-0.5 hover:brightness-105",
        outline: "border border-border bg-card text-foreground hover:border-primary hover:text-primary",
        ghost: "text-foreground hover:bg-primary/10 hover:text-primary",
        secondary: "bg-secondary text-primary hover:bg-primary/15",
        light: "bg-white text-deep shadow-soft hover:-translate-y-0.5 hover:bg-white/90",
        glass: "border border-white/25 bg-white/10 text-white backdrop-blur hover:bg-white/20",
      },
      size: { default: "h-11 px-6", sm: "h-9 px-4 text-xs", lg: "h-13 px-8 text-base", icon: "size-10 p-0" },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
