import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

/**
 * MQℏ wordmark logo — pure SVG, inherits text color via currentColor.
 * The Q uses a Theta (Θ) hybrid: circle + horizontal bar.
 * The H uses an hbar (ℏ) hybrid: standard H with an angled crossbar on the left stem.
 * The vivid dot is hardcoded to the brand accent.
 */
export default function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Midwest Quantum Hackathon — home"
      className={cn(
        "group inline-flex shrink-0 items-center text-foreground transition-opacity hover:opacity-80",
        className
      )}
    >
      {/* 80×22 viewport gives generous stroke room */}
      <svg
        viewBox="0 0 84 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-[18px] w-auto"
        aria-hidden="true"
      >
        {/* ── M ── */}
        <path
          d="M1 20V2L10.5 12L20 2V20"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* ── Q (Theta hybrid) ── */}
        {/* outer circle */}
        <circle
          cx="34"
          cy="11"
          r="8.5"
          stroke="currentColor"
          strokeWidth="2.2"
        />
        {/* theta bar (horizontal line through centre) */}
        <line
          x1="27.5"
          y1="11"
          x2="40.5"
          y2="11"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        {/* Q tail */}
        <line
          x1="39.5"
          y1="17"
          x2="45.5"
          y2="22"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />

        {/* ── H (hbar hybrid) ── */}
        {/* left stem */}
        <line x1="52" y1="2" x2="52" y2="20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        {/* right stem */}
        <line x1="64" y1="2" x2="64" y2="20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        {/* crossbar */}
        <line x1="52" y1="11" x2="64" y2="11" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        {/* ℏ slash — short diagonal across top of left stem */}
        <line
          x1="47.5"
          y1="7"
          x2="56.5"
          y2="2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* ── Vivid accent dot ── */}
        <circle cx="71" cy="19" r="2.8" fill="oklch(0.58 0.24 258)" />
      </svg>
    </Link>
  );
}
