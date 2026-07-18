import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./Sponsor.module.css";

interface Package {
  name: string;
  price: string;
  badge: string;
  badgeClass: string;
  description: string;
  perks: string[];
}

export default function SponsorPage() {
  const packages: Package[] = [
    {
      name: "Coherence",
      price: "$1,500",
      badge: "Associate",
      badgeClass: "badge-gray",
      description: "Establish your brand presence and gain access to the collective talent pool.",
      perks: [
        "Digital resume database access",
        "Company logo featured on website & slide decks",
        "Distribution of corporate flyers/stickers",
        "Slack community channel branding",
      ],
    },
    {
      name: "Superposition",
      price: "$3,000",
      badge: "Silver Partner",
      badgeClass: "badge-sage",
      description: "Engage deeply with participants, lead technical workshops, and judge challenges.",
      perks: [
        "All Coherence perks included",
        "Shared physical recruiting table at UIUC or Chicago hub",
        "15-minute technical talk/demo slot",
        "Corporate representative judging seats",
        "Co-branded challenge track prompt",
      ],
    },
    {
      name: "Entanglement",
      price: "$5,000",
      badge: "Gold Partner",
      badgeClass: "badge-purple",
      description: "Command the main stage, design signature challenges, and host exclusive interviews.",
      perks: [
        "All Superposition perks included",
        "Dedicated physical recruiting table at UIUC & Chicago hubs",
        "10-minute keynote presentation slot",
        "Custom signature award category",
        "Early/pre-event resume book access",
        "Post-event recruitment follow-up database",
      ],
    },
  ];

  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Intro */}
        <section className={styles.intro}>
          <div className={styles.container}>
            <span className="badge badge-purple">Sponsors & Partners</span>
            <h1 className={styles.pageTitle}>Support Regional Quantum Innovation</h1>
            <p className={styles.pageSubtitle}>
              Partner with the Midwest Quantum Alliance to recruit top-tier CS and Physics students, 
              sponsor targeted research challenges, and build a lasting regional quantum pipeline.
            </p>
          </div>
        </section>

        {/* Tiers Grid */}
        <section className={styles.packages}>
          <div className={styles.container}>
            <div className={styles.grid}>
              {packages.map((pkg, idx) => (
                <div key={idx} className={`${styles.card} editorial-panel`}>
                  <div className={styles.cardHeader}>
                    <span className={`badge ${pkg.badgeClass}`}>{pkg.badge}</span>
                    <h3 className={styles.pkgName}>{pkg.name}</h3>
                    <div className={styles.pkgPrice}>{pkg.price}</div>
                  </div>
                  <p className={styles.pkgDesc}>{pkg.description}</p>
                  
                  <div className={styles.divider}></div>
                  
                  <h4 className={styles.perkTitle}>Included Benefits</h4>
                  <ul className={styles.perkList}>
                    {pkg.perks.map((perk, pIdx) => (
                      <li key={pIdx} className={styles.perkItem}>
                        <span className={styles.bullet}>▪</span> {perk}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Budget Allocation Info */}
        <section className={styles.budget}>
          <div className={styles.container}>
            <div className={styles.budgetWrapper}>
              <h2 className={styles.sectionTitle}>Where Your Funding Goes</h2>
              <p className={styles.sectionDesc}>
                We are committed to full operational transparency. Sponsoring funds are directly utilized to remove 
                participation barriers for students across the Midwest.
              </p>
              
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Allocation</th>
                    <th>Percentage</th>
                    <th>Impact Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Student Travel & Transit</strong></td>
                    <td>25%</td>
                    <td>Fuel and rental stipends for shuttle vans linking Purdue, Chicago, and Urbana campuses.</td>
                  </tr>
                  <tr>
                    <td><strong>Catering & Meals</strong></td>
                    <td>45%</td>
                    <td>Keeping hackers fueled with breakfasts, lunches, dinners, coffee, and midnight pizza.</td>
                  </tr>
                  <tr>
                    <td><strong>Student Prize Pools</strong></td>
                    <td>20%</td>
                    <td>Cash rewards and research seed grants for top projects in each challenge track.</td>
                  </tr>
                  <tr>
                    <td><strong>Operations & Swag</strong></td>
                    <td>10%</td>
                    <td>Workspace materials, name badges, student t-shirts, and printing costs.</td>
                  </tr>
                </tbody>
              </table>
              
              <div className={styles.contactBlock}>
                <p>Ready to collaborate or need a custom package?</p>
                <a href="mailto:sponsors@mqh.org" className="btn btn-primary">
                  Email Sponsoring Board
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
