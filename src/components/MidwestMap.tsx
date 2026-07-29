"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { geoAlbers } from "d3-geo";
import styles from "./MidwestMap.module.css";

const GEO_URL = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const PROJECTION_CONFIG = {
  rotate: [87.8, 0, 0] as [number, number, number],
  center: [0, 41.8781] as [number, number],
  scale: 5800,
};

const W = 700;
const H = 500;

// High-contrast, harmonious cool state fills & crisp border colors by FIPS code
const STATE_STYLES: Record<string, { fill: string; stroke: string }> = {
  "17": { fill: "#151e3a", stroke: "#38bdf8" }, // Illinois (Chicago Convergence Core)
  "18": { fill: "#12172b", stroke: "#8b5cf6" }, // Indiana (Purdue & Purdue NW)
  "55": { fill: "#191638", stroke: "#a855f7" }, // Wisconsin (UW-Madison)
  "26": { fill: "#0f1f3d", stroke: "#3b82f6" }, // Michigan
  "19": { fill: "#111b32", stroke: "#6366f1" }, // Iowa
  "29": { fill: "#171833", stroke: "#8b5cf6" }, // Missouri
  "39": { fill: "#0e2036", stroke: "#06b6d4" }, // Ohio
  "21": { fill: "#131b32", stroke: "#3b82f6" }, // Kentucky
  "27": { fill: "#191736", stroke: "#c084fc" }, // Minnesota
};

interface Hub {
  id: string;
  name: string;
  acronym: string;
  lab: string;
  coords: [number, number];
  isTarget: boolean;
  color: string;
  role: string;
  desc: string;
}

const HUBS: Hub[] = [
  {
    id: "uchicago",
    name: "University of Chicago",
    acronym: "UChicago",
    lab: "Chicago Student Quantum Group",
    coords: [-87.5997, 41.7886],
    isTarget: true,
    color: "#3b82f6",
    role: "Chicago Convergence Hub",
    desc: "Connecting student builders across academic and research institutes in the Chicago area.",
  },
  {
    id: "uic",
    name: "University of Illinois Chicago",
    acronym: "UIC",
    lab: "UIC Quantum Chapter",
    coords: [-87.6481, 41.8708],
    isTarget: true,
    color: "#38bdf8",
    role: "Chicago Convergence Hub",
    desc: "Student quantum chapter expanding hardware access and quantum education across Chicago.",
  },
  {
    id: "uiuc",
    name: "UIUC",
    acronym: "UIUC",
    lab: "Illinois Student Quantum Club",
    coords: [-88.2272, 40.102],
    isTarget: false,
    color: "#10b981",
    role: "Central Illinois Chapter",
    desc: "UIUC student builders organizing student tracks and collaborative hackathon challenges.",
  },
  {
    id: "purdue",
    name: "Purdue University",
    acronym: "Purdue (QSO)",
    lab: "Quantum Student Organization (QSO)",
    coords: [-86.9212, 40.4237],
    isTarget: false,
    color: "#f59e0b",
    role: "Flagship Student Org",
    desc: "Purdue QSO — established 2023 — organizing algorithm crash courses and hardware pulse control tracks.",
  },
  {
    id: "purduenw",
    name: "Purdue University Northwest",
    acronym: "Purdue NW",
    lab: "Purdue NW Quantum Chapter",
    coords: [-87.4725, 41.5834],
    isTarget: false,
    color: "#fbbf24",
    role: "Northwest Indiana Chapter",
    desc: "Expanding student quantum projects across Northwest Indiana along the Chicagoland corridor.",
  },
  {
    id: "uwmadison",
    name: "UW-Madison",
    acronym: "UW-Madison",
    lab: "Wisconsin Quantum Student Club",
    coords: [-89.4012, 43.0731],
    isTarget: false,
    color: "#a855f7",
    role: "Wisconsin Chapter",
    desc: "UW-Madison student group focusing on quantum simulation algorithms, logic, and benchmarking.",
  },
];

const CHICAGO: [number, number] = [-87.6298, 41.8781];
const ARROW_HUB_IDS = ["uiuc", "purdue", "purduenw", "uwmadison"];

function buildProjection() {
  return geoAlbers()
    .rotate(PROJECTION_CONFIG.rotate)
    .center(PROJECTION_CONFIG.center)
    .scale(PROJECTION_CONFIG.scale)
    .translate([W / 2, H / 2]);
}

export default function MidwestMap() {
  const [activeHubId, setActiveHubId] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const activeRef = useRef<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const wh = window.innerHeight;

      // Start animation higher up on the page (when map section top reaches 55% of viewport height)
      const triggerPoint = wh * 0.55;
      const distanceScrolled = triggerPoint - rect.top;
      const total = rect.height * 0.6;

      setScrollProgress(Math.min(1, Math.max(0, distanceScrolled / total)));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleEnter = useCallback((id: string) => {
    activeRef.current = id;
    setActiveHubId(id);
  }, []);

  const handleLeave = useCallback(() => {
    activeRef.current = null;
    setActiveHubId(null);
  }, []);

  const activeHub = HUBS.find((h) => h.id === activeHubId) ?? null;

  // Pre-compute projected pixel coordinates
  const proj = buildProjection();
  const chicagoPt = proj(CHICAGO);

  return (
    <section ref={sectionRef} className={styles.mapSection} id="map">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.kicker}>
            <span className="badge badge-purple">Regional Map</span>
          </div>
          <h2 className={styles.title}>Midwest Student Chapter Convergence</h2>
          <p className={styles.subtitle}>
            Student orgs from Illinois, Indiana, and Wisconsin converging on Chicago.
          </p>
        </div>

        <div className={styles.mapWrapper}>
          <div className={styles.mapCanvas}>
            <ComposableMap
              projection="geoAlbers"
              projectionConfig={PROJECTION_CONFIG}
              width={W}
              height={H}
              style={{ width: "100%", height: "100%" }}
            >
              {/* High contrast state outlines with unique fills & crisp borders */}
              <Geographies geography={GEO_URL}>
                {({ geographies }: { geographies: Array<{ rsmKey: string; id?: string }> }) =>
                  geographies.map((geo) => {
                    const styleConfig = STATE_STYLES[geo.id || ""] || {
                      fill: "#0d1324",
                      stroke: "rgba(168, 85, 247, 0.22)",
                    };

                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={styleConfig.fill}
                        stroke={styleConfig.stroke}
                        strokeWidth="1.2px"
                        strokeLinejoin="round"
                        tabIndex={-1}
                        pointerEvents="none"
                        style={{
                          default: { outline: "none" },
                          hover: { outline: "none" },
                          pressed: { outline: "none" },
                        }}
                      />
                    );
                  })
                }
              </Geographies>

              {/* Dynamic Extending Arrows with Cool Indigo/Cyan/Purple Accent Highlights */}
              {chicagoPt &&
                ARROW_HUB_IDS.map((hubId) => {
                  const hub = HUBS.find((h) => h.id === hubId)!;
                  const fromPt = proj(hub.coords);
                  if (!fromPt) return null;
                  const isHubActive = activeHubId === hubId;

                  const dx = chicagoPt[0] - fromPt[0];
                  const dy = chicagoPt[1] - fromPt[1];
                  const angle = Math.atan2(dy, dx) * (180 / Math.PI);

                  // Calculate current extending tip coordinates
                  const tipX = fromPt[0] + dx * scrollProgress;
                  const tipY = fromPt[1] + dy * scrollProgress;

                  const strokeColor = isHubActive ? "#38bdf8" : "#8b5cf6";
                  const strokeWidth = isHubActive ? 3.5 : 2.5;

                  return (
                    <g key={`arrow-${hubId}`} pointerEvents="none">
                      {/* Extending line from university node to current tip */}
                      {scrollProgress > 0.01 && (
                        <line
                          x1={fromPt[0]}
                          y1={fromPt[1]}
                          x2={tipX}
                          y2={tipY}
                          stroke={strokeColor}
                          strokeWidth={strokeWidth}
                          strokeLinecap="round"
                          style={{ transition: "stroke 0.2s ease, stroke-width 0.2s ease" }}
                        />
                      )}

                      {/* Arrowhead (>) riding at extending tip */}
                      {scrollProgress > 0.05 && (
                        <g transform={`translate(${tipX}, ${tipY}) rotate(${angle})`}>
                          <path
                            d="M -7 -5 L 3 0 L -7 5"
                            fill="none"
                            stroke={strokeColor}
                            strokeWidth={strokeWidth}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{ transition: "stroke 0.2s ease, stroke-width 0.2s ease" }}
                          />
                        </g>
                      )}
                    </g>
                  );
                })}

              {/* Chicago convergence target zone with cool purple-blue glow */}
              <Marker coordinates={CHICAGO}>
                <circle
                  r={scrollProgress > 0.1 ? 16 * scrollProgress : 0}
                  fill="rgba(168, 85, 247, 0.15)"
                  stroke="#a855f7"
                  strokeWidth="1.5"
                  strokeDasharray="4 3"
                  pointerEvents="none"
                />
                <circle r="4.5" fill="#38bdf8" pointerEvents="none" />
              </Marker>

              {/* University nodes — completely stable DOM */}
              {HUBS.map((hub) => {
                const isActive = activeHubId === hub.id;

                return (
                  <Marker key={hub.id} coordinates={hub.coords}>
                    {/* Always-present glow ring */}
                    <circle
                      r="12"
                      fill="none"
                      stroke={hub.color}
                      strokeWidth="1.5"
                      opacity={isActive ? 0.85 : 0}
                      pointerEvents="none"
                      style={{ transition: "opacity 0.15s ease" }}
                    />
                    {/* Main colored dot */}
                    <circle
                      r={hub.isTarget ? 6 : 5}
                      fill={hub.color}
                      stroke={isActive ? "#ffffff" : "rgba(0,0,0,0.4)"}
                      strokeWidth={isActive ? 2 : 1.5}
                      pointerEvents="none"
                      style={{ transition: "stroke 0.15s ease, stroke-width 0.15s ease" }}
                    />
                    {/* Invisible stable hit circle */}
                    <circle
                      r="20"
                      fill="transparent"
                      stroke="none"
                      style={{ cursor: "pointer" }}
                      onMouseEnter={() => handleEnter(hub.id)}
                      onMouseLeave={handleLeave}
                    />
                  </Marker>
                );
              })}
            </ComposableMap>
          </div>

          {/* Side panel */}
          <div className={styles.infoSidePanel}>
            <div className={styles.sidebarCardWrapper}>
              {activeHub ? (
                <div className={`${styles.sidebarCard} ${styles.sidebarCardActive}`}>
                  <span className="badge badge-purple">{activeHub.role}</span>
                  <h3 className={styles.sidebarCardTitle}>{activeHub.name}</h3>
                  <span className={styles.sidebarCardLab}>{activeHub.lab}</span>
                  <p className={styles.sidebarCardDesc}>{activeHub.desc}</p>
                </div>
              ) : (
                <div className={styles.sidebarCardPlaceholder}>
                  <p>Hover over a dot on the map to view the student organization.</p>
                </div>
              )}
            </div>

            <div className={styles.uniList}>
              <span className="mono-label" style={{ marginBottom: "0.25rem" }}>
                Participating Student Orgs
              </span>
              {HUBS.map((hub) => {
                const isSelected = activeHubId === hub.id;
                return (
                  <div
                    key={hub.id}
                    className={`${styles.uniListItem} ${isSelected ? styles.uniListItemSelected : ""}`}
                    onMouseEnter={() => handleEnter(hub.id)}
                    onMouseLeave={handleLeave}
                  >
                    <div className={styles.uniListLeft}>
                      <span className={styles.uniDotBadge} style={{ backgroundColor: hub.color }} />
                      <span className={styles.uniName}>{hub.name}</span>
                    </div>
                    <span className={styles.uniAcronym}>{hub.acronym}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
