"use client";

import { useState } from "react";

const QUOTES = [
  "Think of what the quantum talent of the Midwest could build together!",
  "You guys should totally join the waitlist.",
  "Sponsoring MQH is a pretty smart move.",
  "Five university chapters, one united community.",
  "Free for all students. Zero cost, all access.",
  "Let's converge in Chicago.",
  "Nov 14–15 in Chicago. See you there!",
  "Am I alive or dead? Only one way to observe!",
  "I was in two boxes at once until you clicked me.",
  "Entangled with coffee, correlated with clean code.",
  "Decoherence is my worst enemy.",
  "Hadamard gate goes spin spin spin!",
  "Zero, one, or both? Yes.",
];

export default function MascotBubble() {
  const [index, setIndex] = useState(0);
  const [pop, setPop] = useState(false);

  const handleClick = () => {
    setPop(true);
    setIndex((prev) => (prev + 1) % QUOTES.length);
    setTimeout(() => setPop(false), 180);
  };

  return (
    <div
      onClick={handleClick}
      className="group relative flex cursor-pointer select-none items-center justify-end gap-4 transition-transform active:scale-[0.98]"
      title="Click to cycle thoughts!"
    >
      {/* Speech Bubble — Basic, clean, no tags/counter, wide width */}
      <div
        className={`relative w-[260px] sm:w-[330px] shrink-0 rounded-2xl border border-border bg-card px-6 py-4 shadow-md transition-all duration-200 ${
          pop ? "scale-95 opacity-75" : "scale-100 opacity-100"
        } group-hover:border-vivid/50 group-hover:shadow-lg`}
      >
        <p className="text-sm font-medium leading-relaxed text-foreground">
          &ldquo;{QUOTES[index]}&rdquo;
        </p>
        {/*
        <p className="mt-2 text-right text-xs font-semibold text-vivid">
          — Qubi
        </p>
        */}
        {/* Bubble Tail pointing RIGHT toward the cat */}
        <div className="absolute -right-2 top-1/2 size-3.5 -translate-y-1/2 rotate-45 border-t border-r border-border bg-card group-hover:border-vivid/50" />
      </div>

      {/* Cat Mascot — Fixed/Anchored on the right */}
      <img
        src="/cat_blob_atom.png"
        alt="Quantum Cat Mascot"
        className="w-44 sm:w-52 md:w-60 lg:w-64 shrink-0 object-contain pointer-events-none transition-transform duration-200 group-hover:scale-[1.02]"
      />
    </div>
  );
}
