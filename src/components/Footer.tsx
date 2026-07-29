import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={`${styles.footer} no-print`}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoBracket}>|</span>
              <span className={styles.logoText}>MQH</span>
              <span className={styles.logoBracket}>⟩</span>
            </Link>
            <p className={styles.brandText}>
              Founded by student orgs from Purdue University, UIUC, University of Chicago, 
              UW-Madison, Purdue NW, and UIC. Connecting student builders across the Midwest.
            </p>
          </div>

          <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>Navigation</h4>
            <Link href="/" className={styles.link}>Home</Link>
            <Link href="/about" className={styles.link}>About MQH</Link>
            <Link href="/sponsor" className={styles.link}>Sponsorship Interest</Link>
            <Link href="/register" className={styles.link}>Pre-Register Waitlist</Link>
          </div>

          <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>Participating Student Orgs</h4>
            <span className={styles.partnerText}>Purdue Quantum Student Org (QSO)</span>
            <span className={styles.partnerText}>UIUC Student Quantum Chapter</span>
            <span className={styles.partnerText}>UChicago Student Quantum Group</span>
            <span className={styles.partnerText}>UW-Madison Quantum Club</span>
            <span className={styles.partnerText}>Purdue NW & UIC Student Chapters</span>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            &copy; 2026 Midwest Quantum Hackathon. Organized by student organizations.
          </p>
          <div className={styles.status}>
            <span className={styles.statusDot}></span>
            Student-Led Initiative | Autumn 2026
          </div>
        </div>
      </div>
    </footer>
  );
}
