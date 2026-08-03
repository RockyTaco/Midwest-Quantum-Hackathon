"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  /**
   * Each direct child receives a staggered transition-delay.
   * Set to true to enable child staggering.
   */
  stagger?: boolean;
  /** Delay index (1–6) applied to this element itself */
  delay?: 1 | 2 | 3 | 4 | 5 | 6;
}

/**
 * Wraps children in a div that fades + slides up when it enters the viewport.
 * Children with `data-reveal` on them will individually animate when visible.
 */
export default function ScrollReveal({
  children,
  className,
  stagger = false,
  delay,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Collect this element + any nested [data-reveal] children
    const targets: Element[] = [el];
    el.querySelectorAll("[data-reveal]").forEach((t) => targets.push(t));

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          targets.forEach((t) => t.classList.add("is-visible"));
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal
      data-reveal-delay={delay}
      className={cn(className)}
    >
      {children}
    </div>
  );
}
