import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={`${styles.footer} no-print`}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoBracket}>[</span>
              <span className={styles.logoText}>MQH</span>
              <span className={styles.logoBracket}>]</span>
            </Link>
            <p className={styles.brandText}>
              A joint student-led hackathon co-founded by Purdue QSO, UIUC IQUIST, and the Chicago Quantum Exchange. 
              Connecting builders, researchers, and sponsors across the Midwest.
            </p>
          </div>

          <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>Navigation</h4>
            <Link href="/" className={styles.link}>Home</Link>
            <Link href="/about" className={styles.link}>About MQH</Link>
            <Link href="/sponsor" className={styles.link}>Sponsorship Packages</Link>
            <Link href="/register" className={styles.link}>Pre-Register Form</Link>
          </div>

          <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>Cooperating Representatives</h4>
            <span className={styles.partnerText}>Purdue Quantum Student Org</span>
            <span className={styles.partnerText}>UIUC IQUIST Institute</span>
            <span className={styles.partnerText}>Chicago Quantum Exchange</span>
            <span className={styles.partnerText}>UIC Chicago Quantum Chapter</span>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            &copy; 2026 Midwest Quantum Hackathon. All rights reserved. 
            Organized independently by student groups and academic representatives.
          </p>
          <div className={styles.status}>
            <span className={styles.statusDot}></span>
            Pre-Planning Phase | Autumn 2026
          </div>
        </div>
      </div>
    </footer>
  );
}
