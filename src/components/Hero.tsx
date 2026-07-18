import Link from "next/link";
import styles from "./Hero.module.css";
import MidwestMap from "./MidwestMap";
import Mascot from "./Mascot";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.tagline}>
            <span className="badge badge-sage">Autumn 2026</span>
            <span className={styles.fellowshipText}>Midwest Student Chapter</span>
          </div>

          <div className={styles.headerGroup}>
            <h1 className={styles.title}>
              Midwest <br />
              <span className={styles.accentText}>Quantum Hackathon</span>
            </h1>
            <Mascot size={96} className={styles.heroMascot} />
          </div>

          <p className={styles.subtitle}>
            A joint student-led effort co-founded by the{" "}
            <strong>Purdue Quantum Student Org</strong>,{" "}
            <strong>UIUC IQUIST</strong>, and the{" "}
            <strong>Chicago Quantum Exchange</strong>. We are building a
            sustainable cross-university network to connect builders,
            researchers, and sponsors across the Midwest.
          </p>

          <div className={styles.actions}>
            <Link href="/register" className="btn btn-primary">
              Pre-Register Waitlist
            </Link>
            <Link href="/sponsor" className="btn btn-secondary">
              Sponsorship Packages —&gt;
            </Link>
          </div>
        </div>

        {/* Real geographic Midwest map */}
        <div className={styles.graphicsContainer}>
          <MidwestMap />
        </div>
      </div>
    </section>
  );
}
