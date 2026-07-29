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
    color: "#f43f5e",
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
    color: "#6366f1",
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
      // Start animation when section enters lower third of viewport
      // (i.e., when top of section passes wh * 0.33 from bottom = wh * 0.67 from top)
      const triggerPoint = wh * 1.1;
      const distanceScrolled = triggerPoint - rect.top;
      const total = rect.height * 0.55;
      setScrollProgress(Math.min(1, Math.max(0, distanceScrolled / total)));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Use a ref to track activeHubId so callbacks don't cause re-closure issues
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
            <span className="badge badge-gold">Regional Map</span>
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
              {/* SVG defs for arrowhead markers */}
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="10"
                  markerHeight="8"
                  refX="9"
                  refY="4"
                  orient="auto"
                  markerUnits="userSpaceOnUse"
                >
                  <path d="M 0 0 L 10 4 L 0 8 L 2 4 Z" fill="#f59e0b" />
                </marker>
                <marker
                  id="arrowhead-active"
                  markerWidth="12"
                  markerHeight="10"
                  refX="11"
                  refY="5"
                  orient="auto"
                  markerUnits="userSpaceOnUse"
                >
                  <path d="M 0 0 L 12 5 L 0 10 L 2.5 5 Z" fill="#ffffff" />
                </marker>
              </defs>

              <Geographies geography={GEO_URL}>
                {({ geographies }: { geographies: Array<{ rsmKey: string }> }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      className={styles.stateOutline}
                      tabIndex={-1}
                      style={{
                        default: { outline: "none" },
                        hover: { outline: "none" },
                        pressed: { outline: "none" },
                      }}
                    />
                  ))
                }
              </Geographies>

              {/* Arrow lines with arrowhead tips */}
              {chicagoPt &&
                ARROW_HUB_IDS.map((hubId) => {
                  const hub = HUBS.find((h) => h.id === hubId)!;
                  const fromPt = proj(hub.coords);
                  if (!fromPt) return null;
                  const isHubActive = activeHubId === hubId;

                  const dx = chicagoPt[0] - fromPt[0];
                  const dy = chicagoPt[1] - fromPt[1];
                  const lineLength = Math.sqrt(dx * dx + dy * dy);

                  // Only show arrowhead once line is mostly drawn
                  const showArrow = scrollProgress > 0.85;

                  return (
                    <path
                      key={`arrow-${hubId}`}
                      d={`M ${fromPt[0]} ${fromPt[1]} L ${chicagoPt[0]} ${chicagoPt[1]}`}
                      fill="none"
                      stroke={isHubActive ? "#ffffff" : "#f59e0b"}
                      strokeWidth={isHubActive ? 3 : 2}
                      strokeLinecap="round"
                      strokeDasharray={lineLength}
                      strokeDashoffset={lineLength * (1 - scrollProgress)}
                      markerEnd={showArrow ? `url(#${isHubActive ? "arrowhead-active" : "arrowhead"})` : undefined}
                      pointerEvents="none"
                      style={{ transition: "stroke 0.2s ease, stroke-width 0.2s ease" }}
                    />
                  );
                })}

              {/* Chicago convergence dot */}
              <Marker coordinates={CHICAGO}>
                <circle
                  r={scrollProgress > 0.1 ? 14 * scrollProgress : 0}
                  fill="rgba(244, 63, 94, 0.12)"
                  stroke="#f43f5e"
                  strokeWidth="1.5"
                  strokeDasharray="4 3"
                  pointerEvents="none"
                />
                <circle r="4" fill="#f43f5e" pointerEvents="none" />
              </Marker>

              {/* University nodes — completely stable DOM, no conditional rendering */}
              {HUBS.map((hub) => {
                const isActive = activeHubId === hub.id;

                return (
                  <Marker key={hub.id} coordinates={hub.coords}>
                    {/* Always-present glow ring, controlled via opacity only */}
                    <circle
                      r="12"
                      fill="none"
                      stroke={hub.color}
                      strokeWidth="1.5"
                      opacity={isActive ? 0.8 : 0}
                      pointerEvents="none"
                      style={{ transition: "opacity 0.15s ease" }}
                    />
                    {/* Main colored dot — size never changes */}
                    <circle
                      r={hub.isTarget ? 6 : 5}
                      fill={hub.color}
                      stroke={isActive ? "#ffffff" : "rgba(0,0,0,0.4)"}
                      strokeWidth={isActive ? 2 : 1.5}
                      pointerEvents="none"
                      style={{ transition: "stroke 0.15s ease, stroke-width 0.15s ease" }}
                    />
                    {/* Invisible stable hit circle — largest, on top for pointer events */}
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

          {/* Side panel with fixed min-height to prevent layout shift */}
          <div className={styles.infoSidePanel}>
            <div className={styles.sidebarCardWrapper}>
              {activeHub ? (
                <div className={`${styles.sidebarCard} ${styles.sidebarCardActive}`}>
                  <span className="badge badge-gold">{activeHub.role}</span>
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
