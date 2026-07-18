"use client";

import { useState } from "react";

interface MascotProps {
  className?: string;
  size?: number;
}

export default function Mascot({ className = "", size = 120 }: MascotProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={className}
      style={{
        width: size,
        height: size,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        animation: "float 4s ease-in-out infinite",
        userSelect: "none",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg
        viewBox="0 0 100 100"
        width="100%"
        height="100%"
        style={{ overflow: "visible" }}
      >
        <defs>
          {/* Main body radial gradient */}
          <radialGradient id="qubyGrad" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#e0f2fe" />
            <stop offset="40%" stopColor="#c084fc" />
            <stop offset="100%" stopColor="#6366f1" />
          </radialGradient>
          {/* Cheek glow */}
          <radialGradient id="blushGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f472b6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#f472b6" stopOpacity="0" />
          </radialGradient>
          {/* Shadow beneath body */}
          <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#4f46e5" floodOpacity="0.15" />
          </filter>
        </defs>

        {/* Orbit ring 1 (Background part) */}
        <g
          style={{
            transformOrigin: "50px 50px",
            animation: `spinSlow ${isHovered ? "1.5s" : "6s"} linear infinite`,
            transition: "animation-duration 0.3s ease",
          }}
        >
          <ellipse
            cx="50"
            cy="50"
            rx="45"
            ry="12"
            fill="none"
            stroke="#a5f3fc"
            strokeWidth="2"
            strokeDasharray="4 3"
            transform="rotate(-30 50 50)"
            opacity="0.75"
          />
          <circle cx="95" cy="50" r="4" fill="#38bdf8" />
        </g>

        {/* Orbit ring 2 (Crossed) */}
        <g
          style={{
            transformOrigin: "50px 50px",
            animation: `spinSlow ${isHovered ? "2s" : "8s"} linear infinite reverse`,
            transition: "animation-duration 0.3s ease",
          }}
        >
          <ellipse
            cx="50"
            cy="50"
            rx="42"
            ry="14"
            fill="none"
            stroke="#fed7aa"
            strokeWidth="1.5"
            transform="rotate(45 50 50)"
            opacity="0.6"
          />
          <circle cx="8" cy="50" r="3" fill="#fb923c" />
        </g>

        {/* Quby Body */}
        <circle
          cx="50"
          cy="50"
          r="30"
          fill="url(#qubyGrad)"
          filter="url(#shadow)"
          style={{
            transition: "transform 0.3s ease",
            transform: isHovered ? "scale(1.05)" : "scale(1)",
            transformOrigin: "50px 50px",
          }}
        />

        {/* Face elements (Face moves slightly on hover) */}
        <g
          style={{
            transform: isHovered ? "translate(2px, -1px)" : "translate(0px, 0px)",
            transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {/* Blushing cheeks */}
          <circle cx="38" cy="54" r="6" fill="url(#blushGrad)" />
          <circle cx="62" cy="54" r="6" fill="url(#blushGrad)" />

          {/* Eyes */}
          {isHovered ? (
            // Happy eyes ^ _ ^
            <>
              <path
                d="M 33 50 Q 37 46 41 50"
                fill="none"
                stroke="#1e1b4b"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M 59 50 Q 63 46 67 50"
                fill="none"
                stroke="#1e1b4b"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </>
          ) : (
            // Cute regular eyes • _ •
            <>
              <circle cx="37" cy="49" r="3" fill="#1e1b4b" />
              <circle cx="63" cy="49" r="3" fill="#1e1b4b" />
            </>
          )}

          {/* Cute mouth */}
          <path
            d={isHovered ? "M 46 54 Q 50 58 54 54" : "M 47 55 Q 50 57 53 55"}
            fill="none"
            stroke="#1e1b4b"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Tiny highlight on forehead */}
          <circle cx="42" cy="34" r="2.5" fill="#ffffff" opacity="0.6" />
        </g>

        {/* Little antenna flag */}
        <g
          style={{
            transform: isHovered ? "rotate(10deg)" : "rotate(0deg)",
            transformOrigin: "50px 20px",
            transition: "transform 0.3s ease",
          }}
        >
          <line x1="50" y1="20" x2="50" y2="12" stroke="#1e1b4b" strokeWidth="2.5" />
          <path d="M 50 12 L 62 15 L 50 18 Z" fill="#a855f7" />
        </g>
      </svg>
    </div>
  );
}
