import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <span className="badge">Our Purpose</span>
            <h2 className={styles.title}>More than a Hackathon: An Ecosystem</h2>
            <p className={styles.paragraph}>
              Quantum United Midwest (QUM) is designed to solve the biggest flaw of typical hackathons: 
              participants joining for a weekend and leaving without long-term value. 
              We are building a sustainable pipeline connecting student builders with state-of-the-art research 
              environments, global collaborations, and industry pioneers.
            </p>
            
            <div className={styles.highlights}>
              <div className={styles.highlightItem}>
                <div className={styles.highlightDot}></div>
                <div>
                  <h4>1:1 Mentorship</h4>
                  <p>Work directly with professors, postdocs, and researchers from IQUIST and CQE, as well as Purdue QSO mentors.</p>
                </div>
              </div>
              
              <div className={styles.highlightItem}>
                <div className={styles.highlightDot}></div>
                <div>
                  <h4>Industry Alumni Pipelines</h4>
                  <p>Engage with alumni who are now leading quantum engineering at Google Quantum AI, IBM, Infleqtion, and qBraid.</p>
                </div>
              </div>

              <div className={styles.highlightItem}>
                <div className={styles.highlightDot}></div>
                <div>
                  <h4>Follow-on Support</h4>
                  <p>Top projects receive cloud compute credits, lab incubation access, and mentoring to publish papers or launch startups.</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.cardsColumn}>
            <div className={`${styles.card} glass-panel`}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--superposition-cyan)" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3>Thai-Midwest Quantum Fellowship</h3>
              </div>
              <p>
                In partnership with the Chicago Quantum Exchange and Thai academic institutions, we are proud to offer 
                dedicated travel grants and research exchange opportunities. Expanding international collaborations, 
                this fellowship bridges talent from the Midwest and Southeast Asia to advance global quantum capacity.
              </p>
            </div>

            <div className={`${styles.card} glass-panel`}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--entanglement-purple)" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                    <line x1="6" y1="6" x2="6.01" y2="6"></line>
                    <line x1="6" y1="18" x2="6.01" y2="18"></line>
                  </svg>
                </div>
                <h3>Hardware Sandbox via qBraid</h3>
              </div>
              <p>
                Skip the complex software setups. All participants receive free premium access to the qBraid platform. 
                Write code once and run it across IBM Quantum Systems, Rigetti QPUs, and AWS Bracket simulator layers 
                with pre-configured SDK environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
