import Link from "next/link";

import { WAITLIST_URL } from "@/lib/links";
import Logo from "@/components/Logo";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/sponsor", label: "Sponsors" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          {/* Brand */}
          <div>
            <Logo className="h-4" />
            <p className="mt-2 max-w-xs text-xs leading-relaxed text-muted-foreground">
              Midwest Quantum Hackathon<br />
              November 14–15, 2026 · Chicago, IL
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {NAV.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={WAITLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Pre-Register
            </a>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border/60 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] text-muted-foreground/70">
            © 2026 Midwest Quantum Hackathon. Organized by student organizations.
          </p>
          <p className="text-[11px] text-muted-foreground/70">
            Site built by{" "}
            <a
              href="https://ryanymanley.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground/90 underline decoration-muted-foreground/40 underline-offset-2 hover:text-vivid"
            >
              Ryan Manley
            </a>{" "}
            , 
            {" "}
            <a
              href="https://www.linkedin.com/in/rohitmandapati/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground/90 underline decoration-muted-foreground/40 underline-offset-2 hover:text-vivid"
            >
              Rohit Mandapati
            </a>{" "}
            &amp;{" "}
            <a
              href="https://www.linkedin.com/in/river-chen"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground/90 underline decoration-muted-foreground/40 underline-offset-2 hover:text-vivid"
            >
              River Chen
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
