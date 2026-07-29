"use client";

import { useState } from "react";
import styles from "./PreRegisterForm.module.css";

interface FormData {
  name: string;
  email: string;
  university: string;
  otherUniversity: string;
  experience: string;
  comments: string;
}

export default function PreRegisterForm() {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    university: "",
    otherUniversity: "",
    experience: "",
    comments: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Partial<FormData> = {};

    if (currentStep === 1) {
      if (!formData.name.trim()) newErrors.name = "Name is required";
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      }
      if (!formData.university) newErrors.university = "Please select your university";
      if (formData.university === "Other" && !formData.otherUniversity.trim()) {
        newErrors.otherUniversity = "Please specify your university name";
      }
    }

    if (currentStep === 2) {
      if (!formData.experience) newErrors.experience = "Please select your experience level";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    setStep((prev) => prev - 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(2)) {
      const registrations = JSON.parse(localStorage.getItem("mqh_registrations") || "[]");
      registrations.push({
        ...formData,
        date: new Date().toISOString(),
      });
      localStorage.setItem("mqh_registrations", JSON.stringify(registrations));
      
      setStep(3); // Success Screen
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      university: "",
      otherUniversity: "",
      experience: "",
      comments: "",
    });
    setStep(1);
    setErrors({});
  };

  return (
    <div className={styles.formWrapper}>
      <div className={styles.formCard}>
        {step < 3 && (
          <div className={styles.progressContainer}>
            <div className={styles.progressHeader}>
              <span className={styles.stepTitle}>
                Step {step} of 2: {step === 1 ? "Basic Details" : "Quantum Background"}
              </span>
              <span className={styles.progressPercent}>{step === 1 ? "50%" : "100%"}</span>
            </div>
            <div className={styles.progressBarBg}>
              <div className={styles.progressBar} style={{ width: step === 1 ? "50%" : "100%" }}></div>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className={styles.form}>
          {step === 1 && (
            <div className={styles.stepContent}>
              <h3 className={styles.stepHeader}>Pre-Register Interest</h3>
              <p className={styles.stepDesc}>
                Demonstrate early interest to secure regional van travel stipends and priority signup status.
              </p>

              <div className={styles.inputGroup}>
                <label htmlFor="name" className={styles.label}>Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Richard Feynman"
                  className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
                />
                {errors.name && <span className={styles.errorText}>{errors.name}</span>}
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="email" className={styles.label}>Academic Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. student@purdue.edu"
                  className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                />
                {errors.email && <span className={styles.errorText}>{errors.email}</span>}
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="university" className={styles.label}>University / Chapter Affiliation</label>
                <select
                  id="university"
                  name="university"
                  value={formData.university}
                  onChange={handleChange}
                  className={`${styles.select} ${errors.university ? styles.inputError : ""}`}
                >
                  <option value="">-- Select Campus --</option>
                  <option value="Purdue University">Purdue University (QSO)</option>
                  <option value="UIUC">University of Illinois Urbana-Champaign (IQUIST)</option>
                  <option value="UChicago">University of Chicago (CQE)</option>
                  <option value="UIC">University of Illinois Chicago (UIC)</option>
                  <option value="Purdue NW">Purdue University Northwest (Purdue NW)</option>
                  <option value="UW-Madison">University of Wisconsin-Madison (WQI)</option>
                  <option value="University of Michigan">University of Michigan</option>
                  <option value="Other">Other / Independent</option>
                </select>
                {errors.university && <span className={styles.errorText}>{errors.university}</span>}
              </div>

              {formData.university === "Other" && (
                <div className={styles.inputGroup}>
                  <label htmlFor="otherUniversity" className={styles.label}>Specify University</label>
                  <input
                    type="text"
                    id="otherUniversity"
                    name="otherUniversity"
                    value={formData.otherUniversity}
                    onChange={handleChange}
                    placeholder="Enter school name"
                    className={`${styles.input} ${errors.otherUniversity ? styles.inputError : ""}`}
                  />
                  {errors.otherUniversity && <span className={styles.errorText}>{errors.otherUniversity}</span>}
                </div>
              )}

              <div className={styles.actions}>
                <button type="button" className="btn btn-primary" onClick={handleNext}>
                  Continue →
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className={styles.stepContent}>
              <h3 className={styles.stepHeader}>Quantum Background</h3>
              <p className={styles.stepDesc}>
                Help us plan introductory crash courses and allocate mentors based on experience.
              </p>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Experience Level</label>
                <div className={styles.radioGrid}>
                  {[
                    { val: "beginner", title: "Beginner", desc: "No prior coding history / curious about quantum science" },
                    { val: "intermediate", title: "Intermediate", desc: "Know superposition/entanglement & basic Qiskit/Cirq" },
                    { val: "advanced", title: "Advanced", desc: "Understand QEC, pulse control, or quantum algorithms" },
                  ].map((item) => (
                    <label
                      key={item.val}
                      className={`${styles.radioLabel} ${formData.experience === item.val ? styles.radioSelected : ""}`}
                    >
                      <input
                        type="radio"
                        name="experience"
                        value={item.val}
                        checked={formData.experience === item.val}
                        onChange={handleChange}
                        className={styles.hiddenRadio}
                      />
                      <div>
                        <span className={styles.radioTitle}>{item.title}</span>
                        <span className={styles.radioDesc}>{item.desc}</span>
                      </div>
                    </label>
                  ))}
                </div>
                {errors.experience && <span className={styles.errorText}>{errors.experience}</span>}
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="comments" className={styles.label}>Interests & Comments (Optional)</label>
                <textarea
                  id="comments"
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  placeholder="What do you hope to learn or build? Mention any travel grant needs..."
                  className={styles.textarea}
                  rows={4}
                />
              </div>

              <div className={styles.actionsDouble}>
                <button type="button" className="btn btn-secondary" onClick={handlePrev}>
                  Back
                </button>
                <button type="submit" className="btn btn-primary">
                  Submit Waitlist Request
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className={`${styles.successContent} ${styles.fadeIn}`}>
              <div className={styles.successIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent-emerald)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h3 className={styles.stepHeader}>Interest Submitted!</h3>
              <p className={styles.successDesc}>
                Thank you, <strong>{formData.name}</strong>! We&apos;ve added you to the MQH 2026 interest waitlist.
              </p>
              <p className={styles.successSubtext}>
                We will send logistics notices and qBraid platform setup invitations to
                <strong> {formData.email}</strong> as we align on final autumn details.
              </p>
              
              <div className={styles.successActions}>
                <button type="button" className="btn btn-secondary" onClick={handleReset}>
                  Register Another
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
