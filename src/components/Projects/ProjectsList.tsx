"use client";

import { motion } from "framer-motion";
import { useProjectsController } from "@/controllers/useProjectsController";
import { useViewMode } from "@/context/ViewModeContext";
import { Github, ExternalLink, Target, Workflow, Sparkles } from "lucide-react";
import styles from "./ProjectsList.module.css";

const ProjectsList = () => {
  const {
    selectedCategory,
    searchQuery,
    filteredCategories,
    handleCategoryChange,
    handleSearchChange,
    categoriesList,
  } = useProjectsController();
  const { mode } = useViewMode();

  const catColors: Record<string, { text: string; bg: string; border: string }> = {
    all: { text: "#94a3b8", bg: "rgba(148, 163, 184, 0.1)", border: "rgba(148, 163, 184, 0.2)" },
    systems: { text: "#38bdf8", bg: "rgba(56, 189, 248, 0.1)", border: "rgba(56, 189, 248, 0.25)" },
    ml: { text: "#34d399", bg: "rgba(52, 211, 153, 0.1)", border: "rgba(52, 211, 153, 0.25)" },
    data: { text: "#fb923c", bg: "rgba(251, 146, 60, 0.1)", border: "rgba(251, 146, 60, 0.25)" },
    tools: { text: "#818cf8", bg: "rgba(129, 140, 248, 0.1)", border: "rgba(129, 140, 248, 0.25)" },
    web: { text: "#a78bfa", bg: "rgba(167, 139, 250, 0.1)", border: "rgba(167, 139, 250, 0.25)" },
  };

  return (
    <section className={styles.section}>
      <div className="editorial-container">
        <div className={styles.headerContainer}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.4rem" }}>
            <span className="mono-tag" style={{ color: "var(--accent)" }}>
              Technical Portfolio & Production Repos
            </span>
            <span
              style={{
                fontSize: "0.7rem",
                fontFamily: "var(--font-mono)",
                padding: "0.15rem 0.5rem",
                borderRadius: "4px",
                backgroundColor: mode === "recruiter" ? "var(--accent-light)" : "rgba(88, 166, 255, 0.12)",
                color: mode === "recruiter" ? "var(--accent)" : "var(--primary)",
                fontWeight: 600,
              }}
            >
              Mode: {mode === "recruiter" ? "Recruiter (Impact Focus)" : "Engineer (Architecture Focus)"}
            </span>
          </div>
          <h2 className={styles.title}>Engineered Systems & Case Studies</h2>
          <p className={styles.subtitle}>
            From low-level native macOS media streaming to industrial machine learning and automated video synthesis.
          </p>
        </div>

        {/* Controls: Search and Filters */}
        <div className={styles.controls}>
          <div className={styles.filterList}>
            {categoriesList.map((cat) => {
              const isActive = selectedCategory === cat.id;
              const activeColor = catColors[cat.id] || catColors.all;

              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`${styles.filterBtn} ${
                    isActive ? styles.activeFilterBtn : ""
                  }`}
                  style={
                    isActive
                      ? {
                          color: activeColor.text,
                          backgroundColor: activeColor.bg,
                          borderColor: activeColor.border,
                        }
                      : {}
                  }
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          <div className={styles.searchWrapper}>
            <input
              type="text"
              placeholder="Search technologies, frameworks, or systems..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className={styles.searchInput}
            />
          </div>
        </div>

        {/* Projects Categorized */}
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category) => {
            const CategoryIcon = category.icon;
            const activeColors = catColors[category.id] || catColors.all;

            return (
              <div key={category.id} className={styles.categoryBlock}>
                <div className={styles.categoryHeader}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0.4rem",
                      borderRadius: "4px",
                      backgroundColor: activeColors.bg,
                      border: `1px solid ${activeColors.border}`,
                      color: activeColors.text,
                    }}
                  >
                    <CategoryIcon size={16} />
                  </div>
                  <h3 className={styles.categoryTitle}>{category.title}</h3>
                </div>

                <div className={styles.grid}>
                  {category.projects.map((project, projIndex) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: projIndex * 0.05 }}
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
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.6rem", flexWrap: "wrap", gap: "0.5rem" }}>
                          {project.isFeatured ? (
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.25rem",
                                fontSize: "0.68rem",
                                fontFamily: "var(--font-mono)",
                                fontWeight: 700,
                                textTransform: "uppercase",
                                color: activeColors.text,
                              }}
                            >
                              <Sparkles size={11} /> Featured
                            </span>
                          ) : (
                            <span />
                          )}

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

                        <h4 className={styles.cardTitle} style={{ marginBottom: "0.75rem" }}>{project.title}</h4>

                        {/* Mode Sensitive Pitch */}
                        <div style={{ fontSize: "0.88rem", lineHeight: 1.55, marginBottom: "1rem" }}>
                          {mode === "recruiter" ? (
                            <div style={{ display: "flex", gap: "0.5rem" }}>
                              <Target size={15} color="var(--accent)" style={{ flexShrink: 0, marginTop: "0.2rem" }} />
                              <p style={{ margin: 0, color: "var(--foreground)" }}>
                                {project.recruiterPitch || project.description}
                              </p>
                            </div>
                          ) : (
                            <div style={{ display: "flex", gap: "0.5rem" }}>
                              <Workflow size={15} color="var(--primary)" style={{ flexShrink: 0, marginTop: "0.2rem" }} />
                              <p style={{ margin: 0, color: "var(--foreground)" }}>
                                {project.engineerPitch || project.description}
                              </p>
                            </div>
                          )}
                        </div>

                        {/* Architecture Pipeline Steps */}
                        {project.architecture && (
                          <div
                            style={{
                              marginBottom: "1rem",
                              padding: "0.5rem 0.65rem",
                              borderRadius: "6px",
                              backgroundColor: "var(--background)",
                              border: "1px solid var(--card-border)",
                            }}
                          >
                            <span
                              style={{
                                display: "block",
                                fontSize: "0.65rem",
                                fontFamily: "var(--font-mono)",
                                textTransform: "uppercase",
                                letterSpacing: "0.05em",
                                color: "var(--secondary)",
                                marginBottom: "0.3rem",
                              }}
                            >
                              Architecture Pipeline
                            </span>
                            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.3rem" }}>
                              {project.architecture.map((step, sIdx) => (
                                <span key={step} style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem", fontSize: "0.7rem", fontFamily: "var(--font-mono)" }}>
                                  <span style={{ padding: "0.1rem 0.35rem", borderRadius: "3px", backgroundColor: "var(--card-bg)", border: "1px solid var(--card-border)", color: "var(--foreground)" }}>
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
                  ))}
                </div>
              </div>
            );
          })
        ) : (
          <div style={{ textAlign: "center", padding: "4rem 0", color: "var(--secondary)" }}>
            No engineering systems match your query.
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsList;
