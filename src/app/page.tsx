import Link from "next/link";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MidwestMap from "@/components/MidwestMap";
import Footer from "@/components/Footer";
import styles from "./Home.module.css";

export default function Home() {
  const partners = [
    { name: "Purdue University", dept: "Quantum Student Org (QSO)" },
    { name: "UIUC", dept: "Illinois Student Quantum Club" },
    { name: "University of Chicago", dept: "Chicago Student Quantum Group" },
    { name: "UIC", dept: "UIC Quantum Chapter" },
    { name: "Purdue Northwest", dept: "PNW Quantum Group" },
    { name: "UW-Madison", dept: "Wisconsin Quantum Student Club" },
  ];

  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Main Hero Banner */}
        <Hero />

        {/* Scroll-Driven Midwest Map Convergence to Chicago */}
        <MidwestMap />

        {/* Cooperating Universities Bar */}
        <section className={styles.partnersSection}>
          <div className={styles.container}>
            <p className={styles.partnersTitle}>Participating Midwest Student Organizations</p>
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

        {/* Gateway Cards */}
        <section className={styles.gateways}>
          <div className={styles.container}>
            <div className={styles.gatewayGrid}>
              <div className={styles.gatewayCol}>
                <span className={styles.colNum}>[ 01 ]</span>
                <h3 className={styles.cardTitle}>About the Hackathon</h3>
                <p className={styles.cardText}>
                  Founded by student orgs from Purdue University, UIUC, UChicago, UW-Madison, Purdue NW, and UIC 
                  to build a regional student quantum network.
                </p>
                <Link href="/about" className={styles.cardLink}>
                  Read student vision →
                </Link>
              </div>

              <div className={styles.gatewayCol}>
                <span className={styles.colNum}>[ 02 ]</span>
                <h3 className={styles.cardTitle}>Sponsorship Interest</h3>
                <p className={styles.cardText}>
                  Explore options for corporate partners and companies interested in supporting student hackers, 
                  workshops, and recruitment.
                </p>
                <Link href="/sponsor" className={styles.cardLink}>
                  Sponsorship interest →
                </Link>
              </div>

              <div className={styles.gatewayCol}>
                <span className={styles.colNum}>[ 03 ]</span>
                <h3 className={styles.cardTitle}>Pre-Registration</h3>
                <p className={styles.cardText}>
                  Are you a student in the Midwest? Submit your name to demonstrate early interest and receive 
                  logistics updates for general signups.
                </p>
                <Link href="/register" className={styles.cardLink}>
                  Open waitlist form →
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
