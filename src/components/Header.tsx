"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    return pathname === path ? styles.activeLink : "";
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""} no-print`}>
      <div className={styles.container}>
        {/* Bra-Ket Logo |MQH⟩ */}
        <Link href="/" className={styles.logo}>
          <span className={styles.logoBracket}>|</span>
          <span className={styles.logoText}>MQH</span>
          <span className={styles.logoBracket}>⟩</span>
          <span className={styles.logoTag}>Midwest</span>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav}>
          <Link href="/" className={`${styles.navLink} ${isActive("/")}`}>Home</Link>
          <Link href="/about" className={`${styles.navLink} ${isActive("/about")}`}>About</Link>
          <Link href="/sponsor" className={`${styles.navLink} ${isActive("/sponsor")}`}>Sponsors</Link>
        </nav>

        <div className={styles.actions}>
          <Link href="/register" className="btn btn-primary">
            Pre-Register
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className={`${styles.mobileToggle} ${mobileMenuOpen ? styles.active : ""}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ""}`}>
        <nav className={styles.mobileNav}>
          <Link href="/" className={isActive("/")} onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="/about" className={isActive("/about")} onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link href="/sponsor" className={isActive("/sponsor")} onClick={() => setMobileMenuOpen(false)}>Sponsors</Link>
          <div className={styles.mobileActions}>
            <Link href="/register" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)}>
              Pre-Register
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
