"use client";

import { motion } from "framer-motion";
import { cvData } from "@/models/cvData";
import { useAboutController } from "@/controllers/useAboutController";
import { useLanguage } from "@/context/LanguageContext";
import { ExternalLink } from "lucide-react";
import styles from "./AboutDetails.module.css";

const AboutDetails = () => {
  const { activeTab, tabs, handleTabChange } = useAboutController();
  const { t } = useLanguage();

  const tabLabels: Record<string, string> = {
    skills: t("tabSkills"),
    experience: t("tabExperience"),
    education: t("tabEducation"),
    certifications: t("tabCertifications"),
  };

  return (
    <section className={styles.section}>
      <div className="editorial-container">
        <div className={styles.headerContainer}>
          <h2 className={styles.title}>{t("aboutTitle")}</h2>
          <p className={styles.subtitle}>
            {t("aboutSubtitle")}
          </p>
        </div>

        <div className={styles.layout}>
          {/* Sidebar Tabs */}
          <aside className={styles.sidebar}>
            {tabs.map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === tab.id;
              const tabColors = {
                skills: { text: "#34d399", bg: "rgba(52, 211, 153, 0.12)", border: "rgba(52, 211, 153, 0.3)" },
                experience: { text: "#38bdf8", bg: "rgba(56, 189, 248, 0.12)", border: "rgba(56, 189, 248, 0.3)" },
                education: { text: "#a78bfa", bg: "rgba(167, 139, 250, 0.12)", border: "rgba(167, 139, 250, 0.3)" },
                certifications: { text: "#fb923c", bg: "rgba(251, 146, 60, 0.12)", border: "rgba(251, 146, 60, 0.3)" },
              };
              const activeColor = tabColors[tab.id];

              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`${styles.tabBtn} ${isActive ? styles.activeTabBtn : ""}`}
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
                  <TabIcon 
                    size={14} 
                    className={styles.tabIcon} 
                    style={{ color: isActive ? activeColor.text : "var(--secondary)" }}
                  />
                  {tabLabels[tab.id] || tab.label}
                </button>
              );
            })}
          </aside>

          {/* Tab Content Panels */}
          <main className={styles.content}>
            {activeTab === "skills" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className={styles.skillsGrid}
              >
                {cvData.skills.map((skillCat) => {
                  const CategoryIcon = skillCat.icon;
                  return (
                    <div key={skillCat.category} className={styles.skillCard}>
                      <h3 className={styles.skillCategoryTitle}>
                        <CategoryIcon size={18} className={styles.skillIcon} />
                        {skillCat.category}
                      </h3>
                      <ul className={styles.skillList}>
                        {skillCat.items.map((item) => (
                          <li key={item} className={styles.skillItem}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </motion.div>
            )}

            {activeTab === "experience" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className={styles.timeline}
              >
                {cvData.experience.map((exp, index) => (
                  <div key={index} className={styles.timelineItem}>
                    <div className={styles.timelineHeader}>
                      <span className={styles.timelinePeriod}>{exp.period}</span>
                      <h3 className={styles.timelineTitle}>{exp.title}</h3>
                      <span className={styles.timelineSub}>
                        {exp.company} &bull; {exp.location}
                      </span>
                    </div>
                    <div className={styles.timelineBody}>
                      <ul className={styles.bulletList}>
                        {exp.bulletPoints.map((bp, i) => (
                          <li key={i} className={styles.bulletItem}>
                            {bp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === "education" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className={styles.timeline}
              >
                {cvData.education.map((edu, index) => (
                  <div key={index} className={styles.timelineItem}>
                    <div className={styles.timelineHeader}>
                      <span className={styles.timelinePeriod}>{edu.period}</span>
                      <h3 className={styles.timelineTitle}>{edu.degree}</h3>
                      <span className={styles.timelineSub}>{edu.school}</span>
                    </div>
                    <div className={styles.timelineBody}>
                      <p>{edu.description}</p>
                      {edu.bulletPoints && (
                        <ul className={styles.bulletList}>
                          {edu.bulletPoints.map((bp, i) => (
                            <li key={i} className={styles.bulletItem}>
                              {bp}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === "certifications" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className={styles.certsGrid}
              >
                {cvData.certifications.map((cert, index) => (
                  <div key={index} className={styles.certCard}>
                    <div className={styles.certMeta}>
                      <span className={styles.certYear}>{cert.year}</span>
                      <h3 className={styles.certTitle}>{cert.title}</h3>
                      <span className={styles.certIssuer}>{cert.issuer}</span>
                    </div>
                    {cert.verificationUrl && (
                      <a
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.certLink}
                      >
                        Verify <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                ))}
              </motion.div>
            )}

          </main>
        </div>

        {/* Personal Highlights & Working Philosophy */}
        <div
          style={{
            marginTop: "4rem",
            paddingTop: "2.5rem",
            borderTop: "1px solid var(--card-border)",
          }}
        >
          <div style={{ marginBottom: "1.5rem" }}>
            <span className="mono-tag" style={{ color: "var(--accent)", display: "block", marginBottom: "0.25rem" }}>
              {t("beyondResume")}
            </span>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 700 }}>
              {t("perspectiveTitle")}
            </h3>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {cvData.funFacts.map((fact, idx) => (
              <div
                key={idx}
                style={{
                  padding: "1.5rem",
                  borderRadius: "10px",
                  backgroundColor: "var(--card-bg)",
                  border: "1px solid var(--card-border)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.02)",
                }}
              >
                <h4 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.5rem", color: "var(--foreground)" }}>
                  {fact.title}
                </h4>
                <p style={{ fontSize: "0.85rem", color: "var(--secondary)", lineHeight: 1.6 }}>
                  {fact.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDetails;
