import type { Metadata } from "next";
import { Lora, Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Midwest Quantum Hackathon 2026 | MQH",
  description: "A collaborative student-led initiative co-organized by Purdue QSO, UIUC IQUIST, and Chicago Quantum Exchange.",
  keywords: ["quantum computing", "hackathon", "Purdue", "UIUC", "IQUIST", "UChicago", "CQE", "UIC", "midwest", "quantum physics", "qBraid", "coding"],
  authors: [{ name: "Midwest Quantum Hackathon Organizers" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${inter.variable} ${spaceMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
