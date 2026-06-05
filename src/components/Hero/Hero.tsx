"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`${styles.gridBg} bg-grid-pattern`}></div>
      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className={styles.logoContainer}
        >
          <Image
            src="/logo-small.png"
            alt="Buğra Görmüş Logo"
            width={90}
            height={90}
            className={styles.heroLogo}
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.metaHeader}
        >
          Data Scientist
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className={styles.title}
        >
          Buğra Görmüş
          <span className={styles.serifDetail}>Data, Intelligence, Architecture.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.description}
        >
          Currently pursuing a Master of Science in Artificial Intelligence at the{" "}
          <strong>Università della Svizzera italiana (USI)</strong> in Lugano, Switzerland.
          Focusing on designing advanced machine learning architectures, statistical model
          forecasting, and robust data workflows to solve complex industrial issues.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={styles.ctas}
        >
          <Link href="/projects" className={styles.btnPrimary}>
            Research & Projects
          </Link>
          <Link href="/contact" className={styles.btnSecondary}>
            Get In Touch
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, delay: 0.4 }}
          className={styles.dataGridPreview}
        >
          <div className={styles.statItem}>
            <span className={styles.statLabel}>Program</span>
            <span className={styles.statValue}>MSc in AI</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statLabel}>Funding</span>
            <span className={styles.statValue}>YLSY Scholar</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statLabel}>Location</span>
            <span className={styles.statValue}>Lugano, CH</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
