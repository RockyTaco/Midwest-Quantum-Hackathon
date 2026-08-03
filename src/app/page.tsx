import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin, Users } from "lucide-react";

import { WAITLIST_URL } from "@/lib/links";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Chapters from "@/components/Chapters";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const GATEWAYS = [
  {
    num: "01",
    icon: Users,
    title: "About the Hackathon",
    text: "Co-organized by student chapters at UIUC, UChicago, Purdue, UW-Madison, and UIC to build a united regional quantum community.",
    href: "/about",
    cta: "Read our vision",
    external: false,
  },
  {
    num: "02",
    icon: CalendarDays,
    title: "Sponsorship",
    text: "Connect with top CS, physics, and engineering students. Mentor hackers, sponsor challenge tracks, and recruit quantum talent.",
    href: "/sponsor",
    cta: "Explore partnerships",
    external: false,
  },
  {
    num: "03",
    icon: MapPin,
    title: "Pre-Registration",
    text: "Submit interest early! Pre-registration numbers help demonstrate student demand to sponsors to secure maximum event funding and hardware access.",
    href: WAITLIST_URL,
    cta: "Join the waitlist",
    external: true,
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Chapters />

        {/* Gateway cards */}
        <section className="border-b border-border/60">
          <div className="mx-auto w-full max-w-6xl px-6 py-20 md:py-28">
            <ScrollReveal>
              <div className="mb-10">
                <p className="font-heading text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                  Quick links
                </p>
                <h2 className="mt-2 font-heading text-2xl font-bold tracking-tight">
                  Everything you need to know
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
                {GATEWAYS.map((g, i) => {
                  const Icon = g.icon;
                  const inner = (
                    <div
                      data-reveal
                      data-reveal-delay={String(i + 1) as "1" | "2" | "3"}
                      className="group flex h-full flex-col bg-card p-8 transition-colors hover:bg-muted/20 card-lift"
                    >
                      {/* Icon + number row */}
                      <div className="flex items-center justify-between">
                        <div
                          className="flex size-9 items-center justify-center rounded-lg"
                          style={{
                            background: "oklch(0.58 0.24 258 / 0.1)",
                          }}
                        >
                          <Icon className="size-4" style={{ color: "oklch(0.58 0.24 258)" }} />
                        </div>
                        <span className="font-heading text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/60">
                          {g.num}
                        </span>
                      </div>

                      <h2 className="mt-5 font-heading text-base font-bold leading-snug tracking-tight">
                        {g.title}
                      </h2>
                      <p className="mt-2 flex-1 text-[0.84rem] leading-relaxed text-muted-foreground">
                        {g.text}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-1.5 text-[0.84rem] font-semibold" style={{ color: "oklch(0.58 0.24 258)" }}>
                        {g.cta}
                        <ArrowRight className="size-3.5 transition-transform duration-150 group-hover:translate-x-1" />
                      </span>
                    </div>
                  );

                  return g.external ? (
                    <a
                      key={g.num}
                      href={g.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      {inner}
                    </a>
                  ) : (
                    <Link key={g.num} href={g.href} className="block">
                      {inner}
                    </Link>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Closing CTA band */}
        <section className="relative overflow-hidden">
          {/* Glow */}
          <div
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at 50% 50%, oklch(0.58 0.24 258 / 0.06) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />
          <ScrollReveal>
            <div className="mx-auto w-full max-w-6xl px-6 py-24 md:py-32 text-center">
              <p className="font-heading text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                November 14–15, 2026 · Chicago, IL
              </p>
              <h2 className="mt-4 font-heading text-4xl font-bold tracking-[-0.02em] md:text-5xl">
                Ready to build the future<br className="hidden sm:block" /> of quantum computing?
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-muted-foreground leading-relaxed">
                Free for all Midwest students. Pre-registering early helps us demonstrate student interest to sponsors so we can keep the event 100% free!
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={WAITLIST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-vivid-foreground transition-all"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.58 0.24 258) 0%, oklch(0.52 0.22 268) 100%)",
                    boxShadow: "0 4px 24px oklch(0.58 0.24 258 / 0.3)",
                  }}
                >
                  Pre-register now
                  <ArrowRight className="size-4 transition-transform duration-150 group-hover:translate-x-0.5" />
                </a>
                <Link
                  href="/sponsor"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                >
                  Become a sponsor
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
