import styles from "./Universities.module.css";

interface University {
  name: string;
  acronym: string;
  lab: string;
  focus: string;
  description: string;
}

export default function Universities() {
  const universities: University[] = [
    {
      name: "Purdue University",
      acronym: "Purdue",
      lab: "Quantum Student Org (QSO)",
      focus: "Student Crash Courses & Hardware Tracks",
      description: "Purdue's premier student-led organization dedicated to quantum information science and engineering, fostering an inclusive community to learn and program quantum technologies.",
    },
    {
      name: "University of Illinois Urbana-Champaign",
      acronym: "UIUC",
      lab: "IQUIST Research Institute",
      focus: "Primary Venue Host & Seed Funding",
      description: "The Illinois Quantum Information Science and Technology Center, a multidisciplinary research hub at UIUC accelerating quantum science, education, and regional research partnerships.",
    },
    {
      name: "University of Chicago",
      acronym: "UChicago",
      lab: "Chicago Quantum Exchange (CQE)",
      focus: "Industry Connection & Alumni Networking",
      description: "An intellectual hub based at the University of Chicago that connects academic, industrial, and government partners to advance quantum science and engineering across the Midwest.",
    },
    {
      name: "Northwestern University",
      acronym: "Northwestern",
      lab: "Center for Molecular Quantum Transducers",
      focus: "Hybrid Quantum Devices Track",
      description: "A collaborative research center at Northwestern focused on chemistry, materials science, and quantum science to develop molecular quantum devices.",
    },
    {
      name: "University of Wisconsin–Madison",
      acronym: "UW-Madison",
      lab: "Wisconsin Quantum Institute (WQI)",
      focus: "Qubit Simulation & Logic Tracks",
      description: "An institute promoting research and education in quantum computing, sensing, and communication, utilizing UW-Madison's deep history in physical sciences.",
    },
    {
      name: "University of Michigan",
      acronym: "U-M",
      lab: "Michigan Quantum Science & Tech",
      focus: "Quantum Cryptography & Security",
      description: "A university-wide community coordinating research, education, and partnership opportunities across departments and laboratories at the University of Michigan.",
    },
  ];

  return (
    <section id="coalition" className={styles.universities}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className="badge">Hackathon</span>
          <h2 className={styles.title}>Organizers & Partnering Universities</h2>
          <p className={styles.lead}>
            A joint-organized regional hackathon led by leading research universities to build a regional quantum community. 
            Students from all majors and campuses are welcome.
          </p>
        </div>

        <div className={styles.grid}>
          {universities.map((uni, idx) => (
            <div key={idx} className={`${styles.card} glass-panel`}>
              <div className={styles.cardHeader}>
                <div className={styles.acronymCircle}>
                  <span>{uni.acronym.substring(0, 2).toUpperCase()}</span>
                </div>
                <div>
                  <h3 className={styles.uniName}>{uni.name}</h3>
                  <span className={styles.labText}>{uni.lab}</span>
                </div>
              </div>
              <p className={styles.cardDescription}>{uni.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
