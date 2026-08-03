import { ExternalLink } from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChapterLogo from "@/components/ChapterLogo";
import { Badge } from "@/components/ui/badge";
import ScrollReveal from "@/components/ScrollReveal";
import { CHAPTERS } from "@/lib/chapters";

const EXPECT = [
  {
    num: "01",
    title: "Challenge \'Quests\'",
    body: "Multiple tracks designed by student organizations and sponsors, covering quantum algorithms, error correction, quantum machine learning, and pulse programming.",
  },
  {
    num: "02",
    title: "Workshops & Crash Courses",
    body: "Hands-on sessions for all experience levels. Write your first quantum circuit or dive into variational algorithms and noise mitigation.",
  },
  {
    num: "03",
    title: "Mentorship",
    body: "Guidance from experienced students, researchers, and industry mentors throughout the weekend to help every team build and present something real.",
  },
  {
    num: "04",
    title: "Demos & Judging",
    body: "Present to judges from academia and industry. Prizes awarded for technical depth, creativity, and real-world applicability.",
  },
];

const FAQ = [
  {
    q: "When is MQH?",
    a: "November 14–15, 2026 in Chicago. Pre-register to receive venue details, schedule information, and logistics updates.",
  },
  {
    q: "Where will it be held?",
    a: "University of Illinois Chicago (UIC) campus on Chicago's Near West Side — centrally located and easily accessible for universities across the Midwest.",
  },
  {
    q: "Who can participate?",
    a: "Any undergraduate or graduate student at a Midwest university. No prior quantum experience required; dedicated workshops cover key fundamentals.",
  },
  {
    q: "Is there a cost?",
    a: "No. MQH is 100% free for all participating students. Sponsorship funding covers meals, venue operations, and prize pools.",
  },
  {
    q: "How are teams formed?",
    a: "Register with a team or join our team-matching sessions at the event. Solo hackers are welcome.",
  },
  {
    q: "Want your university involved?",
    a: "If your school has a quantum computing student organization and you want to co-organize or bring a delegation, reach out. We are actively expanding.",
  },
];

export default function AboutPage() {
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
                  Student-led initiative
                </Badge>
              </div>
              <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
                About the Midwest Quantum Hackathon
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                MQH is organized entirely by student organizations at leading universities across the Midwest. Our mission is to establish a dedicated quantum-focused hackathon for undergraduates in the Midwest, ultimately supporting quantum workforce development initiatives by fostering a collaborative and technically competent community.
              </p>
            </div>
          </div>
        </section>

        {/* What to expect */}
        <section className="border-b border-border/60">
          <div className="mx-auto w-full max-w-6xl px-6 py-20 md:py-24">
            <ScrollReveal>
              <h2 className="font-heading text-3xl font-bold tracking-tight">
                What to expect
              </h2>
              <p className="mt-3 text-muted-foreground">
                A weekend-long hackathon bringing together student builders from across the Midwest.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
                {EXPECT.map((item, i) => (
                  <div
                    key={item.num}
                    data-reveal
                    data-reveal-delay={String(i + 1) as "1"|"2"|"3"|"4"}
                    className="bg-card p-6"
                  >
                    <p className="font-heading text-[11px] font-semibold uppercase tracking-widest text-vivid">
                      {item.num}
                    </p>
                    <h3 className="mt-3 font-heading text-sm font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Organizing chapters */}
        <section className="border-b border-border/60">
          <div className="mx-auto w-full max-w-6xl px-6 py-20 md:py-24">
            <ScrollReveal>
              <h2 className="font-heading text-3xl font-bold tracking-tight">
                Organizing chapters
              </h2>
              <p className="mt-3 text-muted-foreground">
                The student-run chapters co-organizing MQH.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
                {CHAPTERS.map((chapter, i) => {
                  const inner = (
                    <div
                      data-reveal
                      data-reveal-delay={String(Math.min(i + 1, 6)) as "1"|"2"|"3"|"4"|"5"|"6"}
                      className="group flex h-full items-center gap-4 bg-card p-6 transition-colors hover:bg-muted/40 card-lift"
                    >
                      <ChapterLogo chapter={chapter} size={44} />
                      <div className="min-w-0 flex-1">
                        <h3 className="font-heading text-sm font-semibold leading-snug text-foreground">
                          {chapter.university}
                        </h3>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {chapter.org}
                        </p>
                      </div>
                      {chapter.website && (
                        <ExternalLink className="size-3.5 shrink-0 text-muted-foreground/40 transition-colors group-hover:text-vivid" />
                      )}
                    </div>
                  );

                  return chapter.website ? (
                    <a
                      key={chapter.org}
                      href={chapter.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div key={chapter.org}>{inner}</div>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* FAQs */}
        <section>
          <div className="mx-auto w-full max-w-6xl px-6 py-20 md:py-24">
            <ScrollReveal>
              <h2 className="font-heading text-3xl font-bold tracking-tight">
                FAQs
              </h2>

              <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
                {FAQ.map((item, i) => (
                  <div
                    key={item.q}
                    data-reveal
                    data-reveal-delay={String(Math.min(i + 1, 6)) as "1"|"2"|"3"|"4"|"5"|"6"}
                    className="bg-card p-6"
                  >
                    <h3 className="font-heading text-sm font-semibold text-foreground">
                      {item.q}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.a}
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
