"use client";

import Link from "next/link";
import Hero from "@/components/Hero/Hero";
import PadokSimulator from "@/components/Lab/PadokSimulator";
import { projectCategories } from "@/models/projectsData";
import { ArrowRight, Github, ExternalLink, Zap, Workflow, Target, Cpu, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useViewMode } from "@/context/ViewModeContext";
import styles from "../components/Projects/ProjectsList.module.css";

export default function Home() {
  const { mode } = useViewMode();

  // Extract featured projects across categories
  const featuredProjects = projectCategories.flatMap((cat) =>
    cat.projects
      .filter((proj) => proj.isFeatured)
      .map((proj) => ({ ...proj, categoryId: cat.id, categoryTitle: cat.title }))
  );

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Live Telemetry */}
      <Hero />

      {/* Featured Research & Systems Overview */}
      <section
        className={`${styles.section} border-t`}
        style={{
          borderColor: "var(--card-border)",
          backgroundColor: "var(--background)",
          padding: "5rem 0",
        }}
      >
        <div className="editorial-container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.5rem" }}>
                <span className="mono-tag" style={{ color: "var(--accent)" }}>
                  Curated Case Studies
                </span>
                <span
                  style={{
                    fontSize: "0.7rem",
                    padding: "0.15rem 0.5rem",
                    borderRadius: "4px",
                    fontFamily: "var(--font-mono)",
                    backgroundColor: mode === "recruiter" ? "var(--accent-light)" : "rgba(88, 166, 255, 0.12)",
                    color: mode === "recruiter" ? "var(--accent)" : "var(--primary)",
                    fontWeight: 600,
                  }}
                >
                  {mode === "recruiter" ? "Recruiter View (Impact & Metrics)" : "Engineer View (System Architectures)"}
                </span>
              </div>
              <h2 className={styles.title} style={{ margin: 0 }}>
                Featured Engineering & Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.8rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                fontWeight: 600,
                color: "var(--primary)",
                borderBottom: "1px solid var(--primary)",
                paddingBottom: "2px",
                transition: "opacity 0.2s",
              }}
            >
              Browse Complete Catalog <ArrowRight size={14} />
            </Link>
          </div>

          <div className={styles.grid}>
            {featuredProjects.map((project, index) => {
              const catColors: Record<string, { text: string; bg: string; border: string }> = {
                all: { text: "#94a3b8", bg: "rgba(148, 163, 184, 0.1)", border: "rgba(148, 163, 184, 0.2)" },
                systems: { text: "#38bdf8", bg: "rgba(56, 189, 248, 0.1)", border: "rgba(56, 189, 248, 0.25)" },
                ml: { text: "#34d399", bg: "rgba(52, 211, 153, 0.1)", border: "rgba(52, 211, 153, 0.25)" },
                data: { text: "#fb923c", bg: "rgba(251, 146, 60, 0.1)", border: "rgba(251, 146, 60, 0.25)" },
                tools: { text: "#818cf8", bg: "rgba(129, 140, 248, 0.1)", border: "rgba(129, 140, 248, 0.25)" },
                web: { text: "#a78bfa", bg: "rgba(167, 139, 250, 0.1)", border: "rgba(167, 139, 250, 0.25)" },
              };
              const activeColors = catColors[project.categoryId] || catColors.all;

              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={styles.card}
                  style={{
                    backgroundColor: "var(--card-bg)",
                    borderColor: activeColors.border,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    {/* Header with Category & Metric */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem", flexWrap: "wrap", gap: "0.5rem" }}>
                      <span
                        className="mono-tag"
                        style={{
                          color: activeColors.text,
                          fontSize: "0.7rem",
                          fontWeight: 600,
                        }}
                      >
                        {project.categoryTitle}
                      </span>

                      {project.metric && (
                        <span
                          style={{
                            fontSize: "0.68rem",
                            fontFamily: "var(--font-mono)",
                            fontWeight: 700,
                            padding: "0.2rem 0.5rem",
                            borderRadius: "4px",
                            backgroundColor: activeColors.bg,
                            border: `1px solid ${activeColors.border}`,
                            color: activeColors.text,
                          }}
                        >
                          {project.metric}
                        </span>
                      )}
                    </div>

                    <h3 className={styles.cardTitle} style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>
                      {project.title}
                    </h3>

                    {/* Mode-Sensitive Pitch */}
                    <div
                      style={{
                        fontSize: "0.88rem",
                        color: "var(--foreground)",
                        lineHeight: 1.55,
                        marginBottom: "1rem",
                      }}
                    >
                      {mode === "recruiter" ? (
                        <div style={{ display: "flex", gap: "0.5rem" }}>
                          <Target size={16} color="var(--accent)" style={{ flexShrink: 0, marginTop: "0.2rem" }} />
                          <p style={{ margin: 0 }}>
                            {project.recruiterPitch || project.description}
                          </p>
                        </div>
                      ) : (
                        <div style={{ display: "flex", gap: "0.5rem" }}>
                          <Workflow size={16} color="var(--primary)" style={{ flexShrink: 0, marginTop: "0.2rem" }} />
                          <p style={{ margin: 0 }}>
                            {project.engineerPitch || project.description}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Architecture Pipeline Badges */}
                    {project.architecture && (
                      <div
                        style={{
                          marginBottom: "1rem",
                          padding: "0.6rem 0.75rem",
                          borderRadius: "6px",
                          backgroundColor: "var(--background)",
                          border: "1px solid var(--card-border)",
                        }}
                      >
                        <span
                          style={{
                            display: "block",
                            fontSize: "0.68rem",
                            fontFamily: "var(--font-mono)",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                            color: "var(--secondary)",
                            marginBottom: "0.4rem",
                          }}
                        >
                          System Flow
                        </span>
                        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.35rem" }}>
                          {project.architecture.map((step, sIdx) => (
                            <span key={step} style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", fontSize: "0.72rem", fontFamily: "var(--font-mono)" }}>
                              <span style={{ padding: "0.15rem 0.4rem", borderRadius: "3px", backgroundColor: "var(--card-bg)", border: "1px solid var(--card-border)", color: "var(--foreground)" }}>
                                {step}
                              </span>
                              {sIdx < project.architecture!.length - 1 && (
                                <span style={{ color: "var(--secondary)" }}>&rarr;</span>
                              )}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div>
                    <div className={styles.tagsContainer}>
                      {project.tags.map((tag) => (
                        <span key={tag} className={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className={styles.links}>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.projectLink}
                        >
                          <Github size={14} /> Code Repo
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.projectLink}
                        >
                          <ExternalLink size={14} /> Live System
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Lab Section */}
      <section
        id="interactive-lab"
        style={{
          borderTop: "1px solid var(--card-border)",
          backgroundColor: "var(--card-bg)",
          padding: "5rem 0",
        }}
      >
        <div className="editorial-container">
          <div style={{ marginBottom: "2rem" }}>
            <span
              className="mono-tag"
              style={{ color: "var(--accent)", display: "block", marginBottom: "0.5rem" }}
            >
              Proof of Craft &bull; Live Model Testing
            </span>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
              <div>
                <h2 style={{ fontSize: "2rem", fontWeight: 800, margin: 0, letterSpacing: "-0.02em" }}>
                  Interactive AI Playground
                </h2>
                <p style={{ color: "var(--secondary)", fontSize: "0.95rem", marginTop: "0.35rem" }}>
                  A live simulation demonstrator based on the <strong>Padok Gazi Derby Analytics</strong> pipeline.
                </p>
              </div>

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.4rem 0.8rem",
                  borderRadius: "999px",
                  backgroundColor: "var(--accent-light)",
                  fontSize: "0.75rem",
                  fontFamily: "var(--font-mono)",
                  color: "var(--accent)",
                  fontWeight: 600,
                }}
              >
                <Zap size={13} /> Real-time Parameter Reactive
              </div>
            </div>
          </div>

          <PadokSimulator />
        </div>
      </section>

      {/* Candidate Value Proposition / Core Pillars */}
      <section
        style={{
          borderTop: "1px solid var(--card-border)",
          backgroundColor: "var(--background)",
          padding: "5rem 0",
        }}
      >
        <div className="editorial-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
            }}
          >
            <div
              style={{
                padding: "2rem",
                borderRadius: "12px",
                backgroundColor: "var(--card-bg)",
                border: "1px solid var(--card-border)",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  backgroundColor: "var(--accent-light)",
                  color: "var(--accent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.25rem",
                }}
              >
                <Target size={20} />
              </div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                Industrial Impact & Production ML
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--secondary)", lineHeight: 1.6 }}>
                Real manufacturing, financial scenario, and sensor pipeline experience at Kale Group. Not just training models in isolated notebooks, but delivering automated ETL, anomaly detection, and accelerating executive reporting cycles by 70%.
              </p>
            </div>

            <div
              style={{
                padding: "2rem",
                borderRadius: "12px",
                backgroundColor: "var(--card-bg)",
                border: "1px solid var(--card-border)",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  backgroundColor: "rgba(56, 189, 248, 0.15)",
                  color: "#38bdf8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.25rem",
                }}
              >
                <Cpu size={20} />
              </div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                Native macOS & Systems Engineering
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--secondary)", lineHeight: 1.6 }}>
                Creator of OnCue: native Swift & SwiftUI application utilizing Apple AVKit for hardware-accelerated 4K 60fps HDR media streaming, concurrent Multi-View decode pipelines, and secure Keychain storage.
              </p>
            </div>

            <div
              style={{
                padding: "2rem",
                borderRadius: "12px",
                backgroundColor: "var(--card-bg)",
                border: "1px solid var(--card-border)",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  backgroundColor: "rgba(167, 139, 250, 0.15)",
                  color: "#a78bfa",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.25rem",
                }}
              >
                <Workflow size={20} />
              </div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                Full-Stack Architecture & Automation
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--secondary)", lineHeight: 1.6 }}>
                Software engineering degree (B.Sc. 3.34 GPA). Proven versatility writing typed Next.js interfaces, enterprise C# .NET backends, relational PostgreSQL schemas with ACID transactions, and automated video generation engines.
              </p>
            </div>
          </div>

          <div
            style={{
              marginTop: "3rem",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              gap: "1.5rem",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/about"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                fontFamily: "var(--font-mono)",
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "var(--primary)",
              }}
            >
              Read Full Background & Skills <ArrowUpRight size={14} />
            </Link>
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                fontFamily: "var(--font-mono)",
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "var(--foreground)",
              }}
            >
              Get In Touch Directly <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
