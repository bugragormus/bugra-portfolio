"use client";

import { motion } from "framer-motion";
import { cvData } from "@/models/cvData";
import { useAboutController } from "@/controllers/useAboutController";
import { ExternalLink } from "lucide-react";
import styles from "./AboutDetails.module.css";

const AboutDetails = () => {
  const { activeTab, tabs, handleTabChange } = useAboutController();

  return (
    <section className={styles.section}>
      <div className="editorial-container">
        <div className={styles.headerContainer}>
          <h2 className={styles.title}>About Me</h2>
          <p className={styles.subtitle}>
            Bridging rigorous software development with advanced artificial intelligence research.
          </p>
        </div>

        <div className={styles.layout}>
          {/* Sidebar Tabs */}
          <aside className={styles.sidebar}>
            {tabs.map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === tab.id;
              const tabColors = {
                skills: { text: "#2e634e", bg: "#edf6f2", border: "#cce6da" },
                experience: { text: "#4a5585", bg: "#f0f2f9", border: "#d6daf0" },
                education: { text: "#2b5c8f", bg: "#ebf3fc", border: "#c5def7" },
                certifications: { text: "#9c652e", bg: "#faf1e6", border: "#f3dec5" },
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
                  {tab.label}
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
      </div>
    </section>
  );
};

export default AboutDetails;
