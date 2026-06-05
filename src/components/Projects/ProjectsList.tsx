"use client";

import { motion } from "framer-motion";
import { useProjectsController } from "@/controllers/useProjectsController";
import { Github, ExternalLink } from "lucide-react";
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

  return (
    <section className={styles.section}>
      <div className="editorial-container">
        <div className={styles.headerContainer}>
          <h2 className={styles.title}>Research & Engineering</h2>
          <p className={styles.subtitle}>
            A log of machine learning implementations, analytical models, and software systems.
          </p>
        </div>

        {/* Controls: Search and Filters */}
        <div className={styles.controls}>
          <div className={styles.filterList}>
            {categoriesList.map((cat) => {
              const isActive = selectedCategory === cat.id;
              const catColors: Record<string, { text: string; bg: string; border: string }> = {
                all: { text: "#333333", bg: "#f0f0f0", border: "#e0e0e0" },
                ml: { text: "#2e634e", bg: "#edf6f2", border: "#cce6da" },
                data: { text: "#b25e22", bg: "#fdf5e2", border: "#f4e0c4" },
                tools: { text: "#2b5c8f", bg: "#ebf3fc", border: "#c5def7" },
                web: { text: "#4a5585", bg: "#f0f2f9", border: "#d6daf0" },
              };
              const activeColor = catColors[cat.id];

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
              placeholder="Search technologies or projects..."
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
            const catColors: Record<string, { text: string; bg: string; border: string }> = {
              all: { text: "#333333", bg: "#f0f0f0", border: "#e0e0e0" },
              ml: { text: "#2e634e", bg: "#edf6f2", border: "#cce6da" },
              data: { text: "#b25e22", bg: "#fdf5e2", border: "#f4e0c4" },
              tools: { text: "#2b5c8f", bg: "#ebf3fc", border: "#c5def7" },
              web: { text: "#4a5585", bg: "#f0f2f9", border: "#d6daf0" },
            };
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
                        background: `linear-gradient(to bottom, ${activeColors.bg} 0%, #ffffff 45px, #ffffff 100%)`,
                        borderColor: activeColors.border,
                      }}
                    >
                      <div className={styles.cardHeader}>
                        {project.isFeatured && (
                          <span 
                            className={styles.featuredIndicator}
                            style={{ color: activeColors.text }}
                          >
                            Featured
                          </span>
                        )}
                        <h4 className={styles.cardTitle}>{project.title}</h4>
                        <p className={styles.cardDesc}>{project.description}</p>
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
                  ))}
                </div>
              </div>
            );
          })
        ) : (
          <div style={{ textAlign: "center", padding: "4rem 0", color: "var(--secondary)" }}>
            No research papers or engineering projects match your query.
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsList;
