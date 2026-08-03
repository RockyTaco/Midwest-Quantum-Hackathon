export interface Chapter {
  university: string;
  org: string;
  /** Path to a logo in /public, if one is available. */
  logo?: string;
  /** Fallback initials shown when no logo file exists. */
  monogram: string;
  website?: string;
}

export const CHAPTERS: Chapter[] = [
  {
    university: "University of Illinois Urbana-Champaign",
    org: "SIGQuantum @ UIUC",
    logo: "/logo.png",
    monogram: "UIUC",
    website: "https://sigquantum.com",
  },
  {
    university: "Purdue University",
    org: "Quantum Student Organization (QSO) of Purdue",
    logo: "/images/qso_logo.png",
    monogram: "QSO",
    website: "https://qsopurdue.org",
  },
  {
    university: "University of Chicago",
    org: "Chicago Student Quantum Group",
    monogram: "UC",
  },
  {
    university: "University of Illinois Chicago",
    org: "UIC Quantum Chapter",
    monogram: "UIC",
  },
  {
    university: "University of Wisconsin–Madison",
    org: "Wisconsin Quantum Student Club",
    monogram: "UW",
  },
];
