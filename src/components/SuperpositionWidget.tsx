"use client";

import { useState } from "react";
import styles from "./SuperpositionWidget.module.css";

type QubitState = "superposition" | "measuring" | "collapsed-0" | "collapsed-1";

export default function SuperpositionWidget() {
  const [probZero, setProbZero] = useState<number>(50); // probability of collapsing to |0⟩
  const [qubitState, setQubitState] = useState<QubitState>("superposition");
  const [resultMsg, setResultMsg] = useState<string>("State: Initial Superposition |ψ⟩");

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (qubitState === "measuring") return; // block updates during measurement
    const value = parseInt(e.target.value, 10);
    setProbZero(value);
    if (qubitState !== "superposition") {
      setQubitState("superposition");
      setResultMsg("Superposition reset! Ready to measure.");
    }
  };

  const handleMeasure = () => {
    if (qubitState === "measuring") return;

    setQubitState("measuring");
    setResultMsg("Measuring... wave function collapsing...");

    setTimeout(() => {
      const roll = Math.random() * 100;
      if (roll <= probZero) {
        setQubitState("collapsed-0");
        setResultMsg("Collapsed to |0⟩! Coherence achieved! (Spin Up)");
      } else {
        setQubitState("collapsed-1");
        setResultMsg("Collapsed to |1⟩! Entanglement ended! (Spin Down)");
      }
    }, 1000);
  };

  const handleReset = () => {
    setQubitState("superposition");
    setResultMsg("State: Back in Superposition |ψ⟩");
  };

  // Determine classes based on state
  let qubitClass = `${styles.qubit} ${styles.superpositionState}`;
  if (qubitState === "measuring") {
    qubitClass = `${styles.qubit} ${styles.measuringState}`;
  } else if (qubitState === "collapsed-0") {
    qubitClass = `${styles.qubit} ${styles.collapsedZero}`;
  } else if (qubitState === "collapsed-1") {
    qubitClass = `${styles.qubit} ${styles.collapsedOne}`;
  }

  return (
    <div className={`${styles.card} glass-panel`}>
      <h3 className={styles.title}>Qubit Sandbox</h3>
      <p className={styles.description}>
        Adjust the slider to alter the probability of collapsing to \(|0\rangle\). Click &quot;Measure&quot; to trigger collapse!
      </p>

      <div className={styles.sandbox}>
        {/* Orbital decoration */}
        <div className={`${styles.orbit} ${qubitState === "measuring" ? styles.orbitSpinning : ""}`}></div>
        
        {/* Interactive Qubit Bubble */}
        <div className={styles.qubitContainer} onClick={qubitState === "superposition" ? handleMeasure : undefined}>
          <div className={qubitClass}>
            {qubitState === "superposition" && "|ψ⟩"}
            {qubitState === "measuring" && "❓"}
            {qubitState === "collapsed-0" && "•‿•"}
            {qubitState === "collapsed-1" && "•◡<"}
          </div>
        </div>

        {/* Dynamic State Info */}
        <div 
          className={styles.resultText}
          style={{
            color: qubitState === "collapsed-0" ? "var(--success)" : qubitState === "collapsed-1" ? "var(--entanglement-purple)" : "inherit"
          }}
        >
          {resultMsg}
        </div>
      </div>

      {/* Controls: Probability Slider */}
      <div className={styles.controls}>
        <div className={styles.sliderLabel}>
          <span>State Probability</span>
          <span>{probZero}% |0⟩</span>
        </div>
        <div className={styles.sliderContainer}>
          <input
            type="range"
            min="0"
            max="100"
            value={probZero}
            onChange={handleSliderChange}
            disabled={qubitState === "measuring"}
            className={styles.slider}
          />
        </div>
        <div className={styles.probabilities}>
          <span className={styles.probZero}>P(|0⟩) = {probZero}%</span>
          <span className={styles.probOne}>P(|1⟩) = {100 - probZero}%</span>
        </div>
      </div>

      {/* Action Buttons */}
      {qubitState === "superposition" || qubitState === "measuring" ? (
        <button
          onClick={handleMeasure}
          disabled={qubitState === "measuring"}
          className="btn btn-primary"
          style={{ width: "100%" }}
        >
          {qubitState === "measuring" ? "Collapsing..." : "Measure Qubit"}
        </button>
      ) : (
        <button
          onClick={handleReset}
          className="btn btn-secondary"
          style={{ width: "100%" }}
        >
          Reset Superposition
        </button>
      )}
    </div>
  );
}
