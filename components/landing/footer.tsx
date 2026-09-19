import Link from "next/link";
import { Logo } from "@/components/logo";

const columns = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Changelog"],
  },
  {
    title: "Resources",
    links: ["Documentation", "API", "Community"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Contact"],
  },
];

export function LandingFooter() {
  return (
    <footer className="border-t py-12">
      <div className="container">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Everything you know, one question away.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-medium">{col.title}</p>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Recall AI. All rights reserved.</p>
          <p>Built with Next.js, TypeScript, Tailwind & pgvector.</p>
        </div>
      </div>
    </footer>
  );
}
