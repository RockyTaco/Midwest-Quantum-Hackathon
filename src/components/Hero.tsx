import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.tagline}>
            <span className="badge badge-gold">Autumn 2026</span>
            <span className={styles.taglineText}>Midwest Student Chapters</span>
          </div>

          <h1 className={styles.title}>
            Midwest <br />
            <span className={styles.accentText}>Quantum Hackathon</span>
          </h1>

          <p className={styles.subtitle}>
            Founded by student orgs from <strong>Purdue University</strong>,{" "}
            <strong>UIUC</strong>, <strong>University of Chicago</strong>,{" "}
            <strong>UW-Madison</strong>, <strong>Purdue NW</strong>, and <strong>UIC</strong>.
          </p>

          <div className={styles.actions}>
            <Link href="/register" className="btn btn-primary">
              Pre-Register Waitlist
            </Link>
            <Link href="/about" className="btn btn-secondary">
              Learn about us →
            </Link>
          </div>
        </div>

        {/* Right side simple callout panel */}
        <div className={styles.heroSidePanel}>
          <span className="badge badge-emerald">Chicago Convergence</span>
          <h3 className={styles.panelTitle}>Cross-Campus Collaboration</h3>
          <p className={styles.panelBody}>
            Connecting student builders across Illinois, Indiana, and Wisconsin. 
            Participating student chapters are extending their pathways to converge in Chicago for autumn 2026.
          </p>
          <div className={styles.panelStats}>
            <div className={styles.statItem}>
              <span className={styles.statVal}>6</span>
              <span className={styles.statLabel}>Student Chapters</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statVal}>100%</span>
              <span className={styles.statLabel}>Student-Led</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
