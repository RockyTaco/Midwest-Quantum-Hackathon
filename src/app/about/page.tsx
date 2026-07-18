import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./AboutPage.module.css";

interface University {
  name: string;
  acronym: string;
  lab: string;
  focus: string;
  description: string;
  icon: React.ReactNode;
}

export default function AboutPage() {
  const universities: University[] = [
    {
      name: "Purdue University",
      acronym: "PU",
      lab: "Quantum Student Org (QSO)",
      focus: "Student Onboarding & Algorithm Crash Courses",
      icon: (
        <img src="/images/qso_logo.png" alt="Purdue QSO Logo" className={styles.uniIconImage} />
      ),
      description: "Purdue's premier student-led organization dedicated to quantum information science and engineering, fostering an inclusive community to learn and program quantum technologies.",
    },
    {
      name: "University of Illinois Urbana-Champaign",
      acronym: "UIUC",
      lab: "IQUIST Research Institute",
      focus: "Primary Venue Host & Seed Funding",
      icon: (
        <img src="/images/uiuc_logo.svg" alt="UIUC Block I Logo" className={styles.uniIconImage} />
      ),
      description: "The Illinois Quantum Information Science and Technology Center, a multidisciplinary research hub at UIUC accelerating quantum science, education, and regional research partnerships.",
    },
    {
      name: "University of Chicago",
      acronym: "UC",
      lab: "Chicago Quantum Exchange (CQE)",
      focus: "Industry Connection & Alumni Networking",
      icon: (
        <img src="/images/cqe_logo.png" alt="CQE Logo" className={styles.uniIconImage} />
      ),
      description: "An intellectual hub based at the University of Chicago that connects academic, industrial, and government partners to advance quantum science and engineering across the Midwest.",
    },
    {
      name: "University of Illinois Chicago",
      acronym: "UIC",
      lab: "Chicago Quantum Chapter",
      focus: "Urban Outreach & Hybrid Architectures",
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className={styles.uniIcon}>
          <rect x="2" y="2" width="36" height="36" rx="4" fill="var(--pastel-cool-bg)" stroke="var(--border-slate)" strokeWidth="1.5" />
          <line x1="6" y1="14" x2="34" y2="14" stroke="var(--border-slate)" strokeWidth="1.5" />
          <line x1="6" y1="26" x2="34" y2="26" stroke="var(--border-slate)" strokeWidth="1.5" />
          <line x1="20" y1="14" x2="20" y2="26" stroke="var(--border-slate)" strokeWidth="1.5" />
          <circle cx="20" cy="14" r="3" fill="var(--pastel-cool-text)" stroke="var(--border-slate)" strokeWidth="1" />
          <circle cx="20" cy="26" r="5" fill="#ffffff" stroke="var(--border-slate)" strokeWidth="1.5" />
          <line x1="17" y1="26" x2="23" y2="26" stroke="var(--border-slate)" strokeWidth="1.5" />
          <line x1="20" y1="23" x2="20" y2="29" stroke="var(--border-slate)" strokeWidth="1.5" />
        </svg>
      ),
      description: "A student-led quantum computing and research group at UIC expanding quantum access, education, and career development across diverse urban student populations.",
    },
    {
      name: "Northwestern University",
      acronym: "NU",
      lab: "Center for Molecular Quantum Transducers",
      focus: "Molecular Devices & Materials Track",
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className={styles.uniIcon}>
          <rect x="2" y="2" width="36" height="36" rx="4" fill="var(--pastel-lavender-bg)" stroke="var(--border-slate)" strokeWidth="1.5" />
          <polygon points="20,8 30,14 30,26 20,32 10,26 10,14" fill="none" stroke="var(--border-slate)" strokeWidth="1.5" />
          <polygon points="20,12 27,16 27,24 20,28 13,24 13,16" fill="none" stroke="var(--pastel-lavender-text)" strokeWidth="1" strokeDasharray="2 2" />
        </svg>
      ),
      description: "A collaborative research center at Northwestern focused on chemistry, materials science, and quantum science to develop molecular quantum devices.",
    },
    {
      name: "University of Wisconsin–Madison",
      acronym: "UW",
      lab: "Wisconsin Quantum Institute (WQI)",
      focus: "Qubit Simulation & Logic Tracks",
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className={styles.uniIcon}>
          <rect x="2" y="2" width="36" height="36" rx="4" fill="var(--pastel-sage-bg)" stroke="var(--border-slate)" strokeWidth="1.5" />
          <rect x="12" y="12" width="16" height="16" fill="none" stroke="var(--border-slate)" strokeWidth="1.5" />
          <line x1="12" y1="20" x2="28" y2="20" stroke="var(--pastel-sage-text)" strokeWidth="1" />
          <line x1="20" y1="12" x2="20" y2="28" stroke="var(--pastel-sage-text)" strokeWidth="1" />
          <line x1="20" y1="4" x2="20" y2="12" stroke="var(--border-slate)" strokeWidth="1.5" />
          <line x1="20" y1="28" x2="20" y2="36" stroke="var(--border-slate)" strokeWidth="1.5" />
          <line x1="4" y1="20" x2="12" y2="20" stroke="var(--border-slate)" strokeWidth="1.5" />
          <line x1="28" y1="20" x2="36" y2="20" stroke="var(--border-slate)" strokeWidth="1.5" />
        </svg>
      ),
      description: "An institute promoting research and education in quantum computing, sensing, and communication, utilizing UW-Madison's deep history in physical sciences.",
    },
    {
      name: "University of Michigan",
      acronym: "UM",
      lab: "Michigan Quantum Science & Tech",
      focus: "Quantum Cryptography & Security",
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className={styles.uniIcon}>
          <rect x="2" y="2" width="36" height="36" rx="4" fill="var(--pastel-peach-bg)" stroke="var(--border-slate)" strokeWidth="1.5" />
          <path d="M 14,18 L 14,13 A 6,6 0 0,1 26,13 L 26,18" fill="none" stroke="var(--border-slate)" strokeWidth="1.5" />
          <rect x="10" y="18" width="20" height="14" rx="2" fill="none" stroke="var(--border-slate)" strokeWidth="1.5" />
          <circle cx="20" cy="23" r="2.5" fill="var(--pastel-peach-text)" stroke="var(--border-slate)" strokeWidth="1" />
          <line x1="20" y1="25.5" x2="20" y2="29" stroke="var(--border-slate)" strokeWidth="1.5" />
        </svg>
      ),
      description: "A university-wide community coordinating research, education, and partnership opportunities across departments and laboratories at the University of Michigan.",
    },
  ];

  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Intro Banner */}
        <section className={styles.intro}>
          <div className={styles.container}>
            <span className="badge badge-sage">Our Vision</span>
            <h1 className={styles.pageTitle}>More than a Hackathon: An Ecosystem</h1>
            <p className={styles.pageSubtitle}>
              The Midwest Quantum Hackathon (MQH) is designed to solve a core challenge in student tech hackathons: 
              participants building projects over a single weekend and walking away without continuous engagement. 
              We are constructing a sustainable pipeline connecting students with regional research networks, 
              local mentors, and computing credits.
            </p>
          </div>
        </section>

        {/* Highlight Grid (Typographic split lines) */}
        <section className={styles.highlights}>
          <div className={styles.container}>
            <div className={styles.highlightGrid}>
              <div className={styles.highlightCol}>
                <span className={styles.colNum}>[ 01 ]</span>
                <h3 className={styles.highlightTitle}>1:1 Faculty Mentorship</h3>
                <p className={styles.highlightText}>
                  Teams work directly with graduate researchers, postdocs, and professors from UIUC IQUIST and the Chicago Quantum Exchange, 
                  as well as student mentors from the Purdue Quantum Student Org (QSO). Gain guidance to turn a hack project into a publishable paper.
                </p>
              </div>

              <div className={styles.highlightCol}>
                <span className={styles.colNum}>[ 02 ]</span>
                <h3 className={styles.highlightTitle}>Continuous Incubation</h3>
                <p className={styles.highlightText}>
                  MQH helps transition student projects into active research pipelines. Winning teams receive local 
                  workspace grants, follow-on cloud credits, and direct guidance from university quantum directors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Organizers and Partner Universities */}
        <section className={styles.coalition}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className="badge badge-lavender">Organizers & Partners</span>
              <h2 className={styles.sectionTitle}>Organizers & Partnering Universities</h2>
              <p className={styles.sectionLead}>
                The Midwest Quantum Hackathon is a joint-organized event co-founded by student groups and research centers 
                from leading regional universities.
              </p>
            </div>

            <div className={styles.uniGrid}>
              {universities.map((uni, idx) => (
                <div key={idx} className={`${styles.uniCard} card-panel`}>
                  <div className={styles.uniHeader}>
                    <div className={styles.iconWrapper}>
                      {uni.icon}
                    </div>
                    <div>
                      <h3 className={styles.uniName}>{uni.name}</h3>
                      <span className={styles.uniLab}>{uni.lab}</span>
                    </div>
                  </div>
                  <p className={styles.uniDesc}>{uni.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
