import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

/* Wraps all public pages with the navbar and footer. The dashboard has its own layout. */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
