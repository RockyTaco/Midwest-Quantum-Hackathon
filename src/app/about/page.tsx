import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./AboutPage.module.css";

interface UniversityOrg {
  name: string;
  acronym: string;
  orgName: string;
  badgeClass: string;
  iconPath?: string;
  websiteUrl?: string;
  description: string;
}

export default function AboutPage() {
  const studentOrgs: UniversityOrg[] = [
    {
      name: "Purdue University",
      acronym: "Purdue (QSO)",
      orgName: "Quantum Student Organization (QSO)",
      badgeClass: "badge-gold",
      iconPath: "/images/qso_logo.png",
      websiteUrl: "https://qsopurdue.org",
      description:
        "Established 2023. Purdue's student-run quantum organization dedicated to learning, algorithm crash courses, and hands-on hardware control projects.",
    },
    {
      name: "University of Illinois Urbana-Champaign",
      acronym: "UIUC",
      orgName: "Illinois Student Quantum Club",
      badgeClass: "badge-emerald",
      description:
        "Student-led quantum computing interest group at UIUC organizing regional workshop tracks and student hackathon teams.",
    },
    {
      name: "University of Chicago",
      acronym: "UChicago",
      orgName: "Chicago Student Quantum Group",
      badgeClass: "badge-crimson",
      description:
        "Student quantum community connecting undergraduate and graduate researchers across Chicago.",
    },
    {
      name: "University of Illinois Chicago",
      acronym: "UIC",
      orgName: "UIC Quantum Chapter",
      badgeClass: "badge-cyan",
      description:
        "Student chapter expanding quantum education, peer mentoring, and developer workshops across UIC.",
    },
    {
      name: "Purdue University Northwest",
      acronym: "Purdue NW",
      orgName: "Purdue NW Quantum Chapter",
      badgeClass: "badge-gold",
      description:
        "Student quantum chapter connecting builders across Northwest Indiana along the Chicagoland corridor.",
    },
    {
      name: "University of Wisconsin–Madison",
      acronym: "UW-Madison",
      orgName: "Wisconsin Quantum Student Club",
      badgeClass: "badge-cyan",
      description:
        "Student-led club focusing on quantum simulation algorithms, logic, and benchmarking projects.",
    },
  ];

  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Intro */}
        <section className={styles.intro}>
          <div className={styles.container}>
            <span className="badge badge-gold">Student-Led Initiative</span>
            <h1 className={styles.pageTitle}>About |MQH⟩</h1>
            <p className={styles.pageSubtitle}>
              The Midwest Quantum Hackathon is organized entirely by student organizations across six
              regional universities. Our goal is to build a long-term Midwest quantum builder
              community — by students, for students.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className={styles.missionSection}>
          <div className={styles.container}>
            <div className={styles.missionGrid}>
              <div className={styles.missionCard}>
                <span className="badge badge-emerald">Our Mission</span>
                <h2 className={styles.missionTitle}>Why MQH Exists</h2>
                <p className={styles.missionBody}>
                  Quantum computing is growing rapidly, but most student exposure stops at theory.
                  MQH bridges that gap by giving undergrads and graduate students across the Midwest
                  a space to build, collaborate, and learn from each other — not just listen to
                  lectures.
                </p>
                <p className={styles.missionBody}>
                  We believe the strongest quantum workforce will emerge from students who have
                  actually written circuits, debugged hardware interfaces, and solved open-ended
                  problems together. MQH is where that starts.
                </p>
              </div>

              <div className={styles.missionCard}>
                <span className="badge badge-cyan">Our Vision</span>
                <h2 className={styles.missionTitle}>What We&apos;re Building</h2>
                <p className={styles.missionBody}>
                  A recurring, student-organized event that becomes the default meeting point for
                  Midwest quantum students. Not a conference. Not a career fair. A hackathon — where
                  the emphasis is on building things that work.
                </p>
                <p className={styles.missionBody}>
                  Over time, we want to establish a network of student quantum orgs that share
                  resources, co-develop workshops, and make it easy for any Midwest student to get
                  involved in quantum regardless of their university&apos;s existing infrastructure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className={styles.expectSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className="badge badge-gold">The Event</span>
              <h2 className={styles.sectionTitle}>What to Expect</h2>
              <p className={styles.sectionLead}>
                A weekend-long hackathon bringing together student builders from across the Midwest.
              </p>
            </div>

            <div className={styles.expectGrid}>
              <div className={styles.expectCard}>
                <span className={styles.expectNum}>01</span>
                <h3 className={styles.expectCardTitle}>Challenge Tracks</h3>
                <p className={styles.expectCardBody}>
                  Multiple challenge tracks designed by student orgs and sponsors — covering quantum
                  algorithms, error correction, quantum machine learning, and hardware pulse
                  programming.
                </p>
              </div>
              <div className={styles.expectCard}>
                <span className={styles.expectNum}>02</span>
                <h3 className={styles.expectCardTitle}>Workshops & Crash Courses</h3>
                <p className={styles.expectCardBody}>
                  Hands-on sessions for all experience levels. Learn to write your first quantum
                  circuit, or dive into advanced topics like variational algorithms and noise
                  mitigation.
                </p>
              </div>
              <div className={styles.expectCard}>
                <span className={styles.expectNum}>03</span>
                <h3 className={styles.expectCardTitle}>Cross-Campus Teams</h3>
                <p className={styles.expectCardBody}>
                  Form teams across university boundaries. Meet students from other schools, combine
                  complementary skills, and build something together over the weekend.
                </p>
              </div>
              <div className={styles.expectCard}>
                <span className={styles.expectNum}>04</span>
                <h3 className={styles.expectCardTitle}>Demos & Judging</h3>
                <p className={styles.expectCardBody}>
                  Present your project to judges from academia and industry. Prizes awarded across
                  categories including technical depth, creativity, and real-world applicability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Participating Student Orgs */}
        <section className={styles.coalition}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className="badge badge-emerald">Student Chapters</span>
              <h2 className={styles.sectionTitle}>Participating Student Organizations</h2>
              <p className={styles.sectionLead}>
                The student-run chapters co-founding MQH. Each org brings its own community,
                expertise, and energy to the event.
              </p>
            </div>

            <div className={styles.uniGrid}>
              {studentOrgs.map((org, idx) => (
                <div key={idx} className={styles.uniCard}>
                  <div className={styles.uniHeader}>
                    <div className={styles.iconWrapper}>
                      {org.iconPath ? (
                        <img
                          src={org.iconPath}
                          alt={`${org.name} Logo`}
                          className={styles.uniIconImage}
                        />
                      ) : (
                        <span className={`badge ${org.badgeClass}`}>{org.acronym}</span>
                      )}
                    </div>
                    <div>
                      <h3 className={styles.uniName}>{org.name}</h3>
                      <span className={styles.uniLab}>{org.orgName}</span>
                    </div>
                  </div>

                  <p className={styles.uniDesc}>{org.description}</p>

                  {org.websiteUrl && (
                    <div className={styles.websiteLinkWrapper}>
                      <a
                        href={org.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.websiteLink}
                      >
                        Visit {org.websiteUrl.replace("https://", "")} ↗
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ / Quick Facts */}
        <section className={styles.faqSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className="badge badge-cyan">Details</span>
              <h2 className={styles.sectionTitle}>Quick Facts</h2>
            </div>

            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h4 className={styles.faqQuestion}>When is MQH?</h4>
                <p className={styles.faqAnswer}>
                  Autumn 2026. Exact dates to be announced once venue logistics are confirmed.
                  Pre-register to receive updates.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h4 className={styles.faqQuestion}>Where will it be held?</h4>
                <p className={styles.faqAnswer}>
                  Chicago, Illinois. The central location makes it accessible to all participating
                  Midwest universities within driving distance.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h4 className={styles.faqQuestion}>Who can participate?</h4>
                <p className={styles.faqAnswer}>
                  Any undergraduate or graduate student at a Midwest university. No prior quantum
                  computing experience is required — workshops will cover fundamentals.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h4 className={styles.faqQuestion}>Is there a cost?</h4>
                <p className={styles.faqAnswer}>
                  We aim to make MQH free for all students. Sponsorship funds are used to subsidize
                  travel, meals, and event operations. Student travel stipends may be available.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h4 className={styles.faqQuestion}>How are teams formed?</h4>
                <p className={styles.faqAnswer}>
                  You can register with a team or be matched with other students at the event. We
                  encourage cross-campus teams — it&apos;s part of what makes MQH different.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h4 className={styles.faqQuestion}>Want your university involved?</h4>
                <p className={styles.faqAnswer}>
                  If your school has a quantum computing student org and you want to co-organize or
                  participate, reach out — we&apos;re actively expanding the coalition.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
