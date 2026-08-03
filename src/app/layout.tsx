import type { Metadata } from "next";
import { Montserrat, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Midwest Quantum Hackathon 2026 | MQH",
  description:
    "A student-led quantum computing hackathon organized by student chapters across five Midwest universities, hosted in Chicago on November 14–15, 2026.",
  keywords: [
    "quantum computing",
    "hackathon",
    "Purdue",
    "UIUC",
    "UChicago",
    "UIC",
    "UW-Madison",
    "midwest",
  ],
  authors: [{ name: "Midwest Quantum Hackathon Organizers" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${ibmPlexSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
