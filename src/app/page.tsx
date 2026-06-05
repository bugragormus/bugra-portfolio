"use client";

import Link from "next/link";
import Hero from "@/components/Hero/Hero";
import { projectCategories } from "@/models/projectsData";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import styles from "../components/Projects/ProjectsList.module.css";

export default function Home() {
  // Extract only featured projects across categories
  const featuredProjects = projectCategories.flatMap((cat) =>
    cat.projects
      .filter((proj) => proj.isFeatured)
      .map((proj) => ({ ...proj, categoryId: cat.id, categoryTitle: cat.title }))
  );

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Featured Research & Systems Overview */}
      <section className={`${styles.section} border-t`} style={{ borderColor: "var(--card-border)", backgroundColor: "var(--card-bg)", padding: "6rem 0" }}>
        <div className="editorial-container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="mono-tag" style={{ color: "var(--accent)", display: "block", marginBottom: "0.5rem" }}>
                Selected Implementations
              </span>
              <h2 className={styles.title} style={{ margin: 0 }}>
                Featured Projects
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
                color: "var(--foreground)",
                borderBottom: "1px solid var(--foreground)",
                paddingBottom: "2px"
              }}
            >
              All Research Papers & Engineering <ArrowRight size={14} />
            </Link>
          </div>

          <div className={styles.grid}>
            {featuredProjects.map((project, index) => {
              const catColors: Record<string, { text: string; bg: string; border: string }> = {
                all: { text: "#333333", bg: "#f0f0f0", border: "#e0e0e0" },
                ml: { text: "#2e634e", bg: "#edf6f2", border: "#cce6da" },
                data: { text: "#b25e22", bg: "#fdf5e2", border: "#f4e0c4" },
                tools: { text: "#2b5c8f", bg: "#ebf3fc", border: "#c5def7" },
                web: { text: "#4a5585", bg: "#f0f2f9", border: "#d6daf0" },
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
                    background: `linear-gradient(to bottom, ${activeColors.bg} 0%, #ffffff 45px, #ffffff 100%)`,
                    borderColor: activeColors.border,
                  }}
                >
                  <div className={styles.cardHeader}>
                    <span className="mono-tag" style={{ color: activeColors.text, fontSize: "0.65rem", display: "block", marginBottom: "0.5rem" }}>
                      {project.categoryTitle}
                    </span>
                    <h3 className={styles.cardTitle} style={{ fontSize: "1.25rem" }}>{project.title}</h3>
                    <p className={styles.cardDesc} style={{ fontSize: "0.9rem" }}>{project.description}</p>
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
                        <Github size={14} /> Code
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projectLink}
                      >
                        <ExternalLink size={14} /> Live Demo
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
    </div>
  );
}
