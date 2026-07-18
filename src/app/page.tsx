import Link from "next/link";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import SuperpositionWidget from "@/components/SuperpositionWidget";
import styles from "./Home.module.css";

export default function Home() {
  const partners = [
    { name: "Purdue University", dept: "Quantum Student Org (QSO)" },
    { name: "UIUC", dept: "IQUIST" },
    { name: "University of Chicago", dept: "CQE" },
    { name: "UIC", dept: "Chicago Quantum chapter" },
    { name: "Northwestern University", dept: "Molecular Transducers Center" },
    { name: "UW-Madison", dept: "Wisconsin Quantum Institute" },
    { name: "University of Michigan", dept: "MQI" },
  ];

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Hero />

        {/* Minimalist Partner Cloud */}
        <section className={styles.partnersSection}>
          <div className={styles.container}>
            <p className={styles.partnersTitle}>Cooperating Midwest Hackathon Organizers & Partners</p>
            <div className={styles.partnersGrid}>
              {partners.map((partner, idx) => (
                <div key={idx} className={styles.partnerBadge}>
                  <span className={styles.partnerName}>{partner.name}</span>
                  <span className={styles.partnerDept}>{partner.dept}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Qubit Sandbox Section */}
        <section className={styles.sandboxSection}>
          <div className={styles.container}>
            <div className={styles.sandboxGrid}>
              <div className={styles.sandboxIntro}>
                <span className="badge badge-lavender">Interactive Physics</span>
                <h2 className={styles.sandboxTitle}>Explore Quantum Superposition</h2>
                <p className={styles.sandboxText}>
                  Quantum computers don&apos;t just program with classical bits of 0 and 1. They operate in a superposition of states,
                  described mathematically as \(|\psi\rangle = \alpha|0\rangle + \beta|1\rangle\).
                </p>
                <p className={styles.sandboxText}>
                  Use our live qubit emulator to adjust the collapse probabilities, and then click to measure!
                  This same underlying physics runs on our partner platforms like <strong>qBraid</strong> and <strong>IBM Quantum</strong> QPUs.
                </p>
              </div>
              <div className={styles.sandboxWidgetContainer}>
                <SuperpositionWidget />
              </div>
            </div>
          </div>
        </section>

        {/* Multi-page Gateway Links (Clean Line-Divided Layout) */}
        <section className={styles.gateways}>
          <div className={styles.container}>
            <div className={styles.gatewayGrid}>
              <div className={styles.gatewayCol}>
                <span className={styles.colNum}>[ 01 ]</span>
                <h3 className={styles.cardTitle}>About the Hackathon</h3>
                <p className={styles.cardText}>
                  Learn more about how Purdue QSO, UIUC IQUIST, and the Chicago Quantum Exchange are joint-organizing this 
                  regional event.
                </p>
                <Link href="/about" className={styles.cardLink}>
                  Hackathon details —&gt;
                </Link>
              </div>

              <div className={styles.gatewayCol}>
                <span className={styles.colNum}>[ 02 ]</span>
                <h3 className={styles.cardTitle}>Sponsorship Tiers</h3>
                <p className={styles.cardText}>
                  Access the formal sponsorship packages detailing tiers (Coherence, Superposition, Entanglement) and 
                  participant recruitment perks.
                </p>
                <Link href="/sponsor" className={styles.cardLink}>
                  Sponsorship packages —&gt;
                </Link>
              </div>

              <div className={styles.gatewayCol}>
                <span className={styles.colNum}>[ 03 ]</span>
                <h3 className={styles.cardTitle}>Pre-Registration</h3>
                <p className={styles.cardText}>
                  Are you a student in the Midwest? Submit your name to demonstrate early interest and secure priority waitlist 
                  status for general signups.
                </p>
                <Link href="/register" className={styles.cardLink}>
                  Open waitlist form —&gt;
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
