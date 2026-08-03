import { Check } from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const TIERS = [
  {
    name: "Qubit",
    badge: "Starter",
    price: "$500",
    description: "Establish your brand presence and reach Midwest quantum talent.",
    perks: [
      "Logo on website, signage, and event t-shirts",
      "Resume book access",
      "Discord community shoutout",
    ],
    accent: "border-border text-muted-foreground",
  },
  {
    name: "Bell",
    badge: "Partner",
    price: "$1,500",
    description: "Engage directly with participants and lead a technical session.",
    perks: [
      "All Qubit perks included",
      "Dedicated sponsor table at the venue",
      "Workshop or challenge-problem slot",
      "Seat on the judging panel",
    ],
    accent: "border-vivid/40 bg-vivid/5 text-vivid",
  },
  {
    name: "GHZ",
    badge: "Title sponsor",
    price: "$3,000",
    description: "Anchor the event with top billing and the deepest student access.",
    perks: [
      "All Bell perks included",
      "Spotlight at opening & closing ceremonies",
      "Custom award category",
      "Early + post-event resume book access",
    ],
    accent: "border-transparent bg-vivid text-vivid-foreground",
  },
] as const;

const BUDGET = [
  {
    allocation: "Catering & Meals",
    percentage: "30%",
    impact: "Breakfasts, lunches, dinners, and coffee throughout the weekend.",
  },
  {
    allocation: "Student Prizes",
    percentage: "40%",
    impact: "Awards and grants for top teams in each quest.",
  },
  {
    allocation: "Operations",
    percentage: "30%",
    impact: "T-shirts, badges, workspace materials, and venue logistics.",
  },
];

export default function SponsorPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="border-b border-border/60">
          <div className="mx-auto w-full max-w-6xl px-6 py-20 md:py-24">
            <div className="hero-animate max-w-3xl">
              <div>
                <Badge variant="accent" className="mb-6">
                  Sponsors & partners
                </Badge>
              </div>
              <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
                Support regional quantum innovation
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Partner with MQH to connect with top CS, physics, and engineering
                students and help build a lasting Midwest quantum talent pipeline.
              </p>
            </div>
          </div>
        </section>

        {/* Package */}
        <section className="border-b border-border/60">
          <div className="mx-auto w-full max-w-6xl px-6 py-20 md:py-24">
            <ScrollReveal>
              <div data-reveal className="max-w-2xl">
                <h2 className="font-heading text-3xl font-bold tracking-tight">
                  Sponsorship package
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Three tiers, one goal: connect your team with the Midwest&apos;s
                  top quantum talent. 100% of funding goes directly to the student organizing team.
                </p>
              </div>

              <div className="mt-12 grid gap-6 lg:grid-cols-3">
                {TIERS.map((tier, i) => (
                  <div
                    key={tier.name}
                    data-reveal
                    data-reveal-delay={String(i + 1) as "1" | "2" | "3"}
                    className="flex flex-col rounded-xl border border-border bg-card p-7 card-lift"
                  >
                    <Badge variant="outline" className={tier.accent}>
                      {tier.badge}
                    </Badge>
                    <h3 className="mt-5 font-heading text-2xl font-bold tracking-tight">
                      {tier.name}
                    </h3>
                    <p className="mt-2 font-heading text-4xl font-bold text-vivid">
                      {tier.price}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {tier.description}
                    </p>

                    <div className="mt-6 border-t border-border/60 pt-6">
                      <p className="font-heading text-[11px] font-semibold uppercase tracking-widest text-foreground">
                        Included benefits
                      </p>
                      <ul className="mt-4 space-y-3">
                        {tier.perks.map((perk) => (
                          <li key={perk} className="flex items-start gap-2.5 text-sm">
                            <Check className="mt-0.5 size-4 shrink-0 text-vivid" />
                            <span className="leading-relaxed text-foreground">{perk}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              {/* Hardware & Platform Callout */}
              <div
                data-reveal
                data-reveal-delay="4"
                className="mt-8 flex flex-col items-start gap-6 rounded-xl border border-border/80 bg-muted/40 p-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-heading text-xs font-semibold uppercase tracking-wider text-vivid">
                    Hardware & Platform Partners
                  </p>
                  <p className="mt-1.5 max-w-xl text-xs text-muted-foreground leading-relaxed">
                    Interested in providing QPU time or demonstrating your stack? Partners can offer processing credits to hackers, host dedicated tech talks/workshops, or sponsor custom challenge tracks around their platform.
                  </p>
                </div>
                <Button asChild size="lg" className="shrink-0">
                  <a href="mailto:riveryc2@illinois.edu">
                    Get in touch
                  </a>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Budget */}
        <section>
          <div className="mx-auto w-full max-w-6xl px-6 py-20 md:py-24">
            <ScrollReveal>
              <h2 className="font-heading text-3xl font-bold tracking-tight">
                Where funding goes
              </h2>
              <p className="mt-4 max-w-xl text-muted-foreground leading-relaxed">
                Every dollar goes directly toward removing participation barriers
                for students across the Midwest.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
                {BUDGET.map((row, i) => (
                  <div
                    key={row.allocation}
                    data-reveal
                    data-reveal-delay={String(i + 1) as "1"|"2"|"3"}
                    className="bg-card p-7"
                  >
                    <p className="font-heading text-4xl font-bold text-vivid">
                      {row.percentage}
                    </p>
                    <p className="mt-2 font-heading text-sm font-semibold text-foreground">
                      {row.allocation}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {row.impact}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
