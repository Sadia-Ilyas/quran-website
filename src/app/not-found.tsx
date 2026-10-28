import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-hero px-4 text-center">
      <div>
        <p dir="rtl" lang="ar" className="font-arabic text-6xl text-accent">٤٠٤</p>
        <h1 className="mt-4 text-4xl font-semibold">We couldn't find that page</h1>
        <p className="mt-3 text-muted-foreground">The link may be broken or the page may have moved.</p>
        <Button asChild className="mt-8"><Link href="/">Back to home</Link></Button>
      </div>
    </main>
  );
}
