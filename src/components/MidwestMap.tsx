"use client";

import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from "react-simple-maps";
import styles from "./Hero.module.css";

// Public TopoJSON of US states (Natural Earth / Census simplified)
const GEO_URL = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

// FIPS codes for Midwest states to display
const MIDWEST_FIPS = new Set([
  "17", // Illinois
  "18", // Indiana
  "19", // Iowa
  "26", // Michigan
  "27", // Minnesota
  "29", // Missouri
  "39", // Ohio
  "55", // Wisconsin
]);

type Coord = [number, number];

interface Hub {
  id: string;
  name: string;
  sub?: string;
  coords: Coord;
  primary: boolean;
  track: string;
  desc: string;
}

// University hubs data with tracks and descriptions
const HUBS: Hub[] = [
  {
    id: "madison",
    name: "UW-Madison",
    coords: [-89.4012, 43.0731],
    primary: false,
    track: "Qubit Simulation & Logic Tracks",
    desc: "Wisconsin Quantum Institute (WQI). Lead hub for emulation and simulator benchmark challenges.",
  },
  {
    id: "chicago",
    name: "Chicago Hub",
    sub: "UChicago · NU · UIC",
    coords: [-87.6298, 41.8781],
    primary: true,
    track: "CQE Industry & Alumni Networks",
    desc: "Chicago Quantum Exchange. Join recruiting panels and network with top quantum venture startups.",
  },
  {
    id: "michigan",
    name: "U-Michigan",
    coords: [-83.7382, 42.2808],
    primary: false,
    track: "Cryptography & Security",
    desc: "Michigan Quantum Science & Tech. Focus area for post-quantum crypto and networks.",
  },
  {
    id: "purdue",
    name: "Purdue",
    coords: [-86.9081, 40.4237],
    primary: false,
    track: "Hardware & Student Crash Courses",
    desc: "Quantum Student Org (QSO). Focus on hands-on qubit controllers and hardware pulse modeling.",
  },
  {
    id: "uiuc",
    name: "UIUC / IQUIST",
    coords: [-88.2272, 40.1020],
    primary: true,
    track: "Primary Venue & Seed Funding",
    desc: "Illinois Quantum Information Science and Technology Center. The host venue and incubator hub.",
  },
];

// Network connection pairs associated by Hub IDs
const CONNECTIONS = [
  { from: "madison", to: "chicago" },
  { from: "chicago", to: "michigan" },
  { from: "chicago", to: "purdue" },
  { from: "chicago", to: "uiuc" },
  { from: "purdue", to: "uiuc" },
];

export default function MidwestMap() {
  const [activeHubId, setActiveHubId] = useState<string | null>(null);

  const activeHub = HUBS.find((h) => h.id === activeHubId) || null;

  // Helper to resolve coordinates by Hub ID
  const getCoords = (id: string): Coord => {
    return HUBS.find((h) => h.id === id)?.coords || [0, 0];
  };

  return (
    <div className={styles.quantumGrid}>
      <ComposableMap
        projection="geoAlbersUsa"
        projectionConfig={{ scale: 2200, center: [-89.5, 42.5] }}
        width={400}
        height={300}
        style={{ width: "100%", height: "auto" }}
      >
        {/* State borders */}
        <Geographies geography={GEO_URL}>
          {({ geographies }: { geographies: Array<{ rsmKey: string; id: string }> }) =>
            geographies
              .filter((geo) => MIDWEST_FIPS.has(geo.id))
              .map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  className={styles.stateOutline}
                  style={{
                    default: { outline: "none" },
                    hover: { outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              ))
          }
        </Geographies>

        {/* Network connections */}
        {CONNECTIONS.map((conn, i) => {
          const isHighlighted =
            activeHubId &&
            (conn.from === activeHubId || conn.to === activeHubId);
          return (
            <Line
              key={i}
              from={getCoords(conn.from)}
              to={getCoords(conn.to)}
              className={`${styles.mapConnection} ${
                isHighlighted ? styles.mapConnectionActive : ""
              }`}
            />
          );
        })}

        {/* University hub pins */}
        {HUBS.map((hub) => {
          const isActive = activeHubId === hub.id;
          let circleClass = hub.primary ? styles.hubDotPrimary : styles.hubDot;
          if (isActive) {
            circleClass = hub.primary ? styles.hubDotPrimaryActive : styles.hubDotActive;
          }

          return (
            <Marker
              key={hub.id}
              coordinates={hub.coords}
              onMouseEnter={() => setActiveHubId(hub.id)}
              onMouseLeave={() => setActiveHubId(null)}
            >
              <circle
                r={hub.primary ? 5.5 : 4}
                className={circleClass}
                style={{ transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)" }}
              />
              <text
                textAnchor="middle"
                y={hub.primary ? -10 : -8}
                className={hub.primary ? styles.hubTextPrimary : styles.hubText}
              >
                {hub.name}
              </text>
              {hub.sub && (
                <text textAnchor="middle" y={4} className={styles.hubSubText}>
                  {hub.sub}
                </text>
              )}
            </Marker>
          );
        })}
      </ComposableMap>

      {/* Info Card Details */}
      {activeHub ? (
        <div
          className={`${styles.detailCard} ${
            activeHub.primary ? styles.detailCardPrimary : ""
          }`}
        >
          <span className={styles.detailTrack}>{activeHub.track}</span>
          <h4 className={styles.detailTitle}>{activeHub.name}</h4>
          <p className={styles.detailDesc}>{activeHub.desc}</p>
        </div>
      ) : (
        <div className={styles.detailCardPlaceholder}>
          Hover over university nodes on the map to explore regional tracks and opportunities!
        </div>
      )}
    </div>
  );
}
