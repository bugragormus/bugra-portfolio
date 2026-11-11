"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FileText,
  ArrowRight,
  Sparkles,
  MapPin,
  Clock,
  TrendingUp,
  Database,
  Cpu,
  Layers
} from "lucide-react";
import { useViewMode } from "@/context/ViewModeContext";
import styles from "./Hero.module.css";

const Hero = () => {
  const { mode } = useViewMode();
  const [luganoTime, setLuganoTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat("en-GB", {
          timeZone: "Europe/Zurich",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(new Date());
        setLuganoTime(timeStr);
      } catch {
        setLuganoTime("14:00 CET");
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={`${styles.gridBg} bg-grid-pattern`}></div>
      <div className={styles.content}>
        {/* Live Telemetry Bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.6rem 1.25rem",
            padding: "0.45rem 0.85rem",
            borderRadius: "8px",
            backgroundColor: "var(--card-bg)",
            border: "1px solid var(--card-border)",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            width: "fit-content",
            fontSize: "0.75rem",
            fontFamily: "var(--font-mono)",
            color: "var(--secondary)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "var(--accent)",
                boxShadow: "0 0 0 2px rgba(63, 185, 80, 0.25)",
              }}
            />
            <span style={{ fontWeight: 600, color: "var(--foreground)" }}>
              Available for SWE & Data Science roles
            </span>
          </div>

          <span style={{ color: "var(--card-border)" }}>|</span>

          <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
            <MapPin size={12} color="var(--primary)" />
            <span>Lugano, Switzerland</span>
          </div>

          <span style={{ color: "var(--card-border)" }}>|</span>

          <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
            <Clock size={12} color="var(--accent)" />
            <span>{luganoTime ? `${luganoTime} CET` : "Lugano (CET)"}</span>
          </div>
        </motion.div>

        {/* Logo and Meta Header */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "0.5rem" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className={styles.logoContainer}
          >
            <Image
              src="/logo-small.png"
              alt="Buğra Görmüş Logo"
              width={80}
              height={80}
              className={styles.heroLogo}
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}
          >
            <div className={styles.metaHeader}>
              <span>Software Engineer &bull; Data Scientist</span>
            </div>
            <span
              style={{
                fontSize: "0.75rem",
                fontFamily: "var(--font-mono)",
                color: "var(--secondary)",
              }}
            >
              Native macOS &bull; Industrial ML &bull; Cloud Architectures
            </span>
          </motion.div>
        </div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className={styles.title}
        >
          Buğra Görmüş
          <span className={styles.serifDetail}>
            {mode === "recruiter"
              ? "Turning complex data & code into business velocity."
              : "Bridging predictive models & high-performance systems."}
          </span>
        </motion.h1>

        {/* Dynamic Pitch Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={styles.description}
        >
          {mode === "recruiter" ? (
            <>
              Software Engineer & Data Scientist with proven industrial experience deploying machine learning systems at <strong>Kale Group</strong> (cutting financial reporting cycles by 70%) and engineering native macOS applications (<strong>OnCue in Swift/AVKit</strong>). Specialized in reliable automated ETL pipelines, time-series forecasting, and scalable backend services.
            </>
          ) : (
            <>
              Designing production-grade machine learning pipelines, time-series anomaly detection, and native systems. Comfortable operating across low-level frameworks (<strong>Swift/AVKit on macOS</strong>), enterprise backends (<strong>C# .NET, PostgreSQL</strong>), and data pipelines (<strong>Python, Scikit-learn, TensorFlow</strong>).
            </>
          )}
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className={styles.ctas}
        >
          <Link href="/projects" className={styles.btnPrimary}>
            <span>View Case Studies & Repos</span>
            <ArrowRight size={14} style={{ display: "inline", marginLeft: "0.4rem" }} />
          </Link>

          <a
            href="/CV_Bugra_Gormus.pdf"
            download="Bugra_Gormus_CV.pdf"
            className={styles.btnSecondary}
            style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
          >
            <FileText size={14} />
            <span>Download CV (PDF)</span>
          </a>

          <a
            href="#interactive-lab"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              fontSize: "0.8rem",
              fontFamily: "var(--font-mono)",
              fontWeight: 600,
              padding: "0.85rem 1.25rem",
              borderRadius: "4px",
              color: "var(--accent)",
              border: "1px solid var(--accent)",
              backgroundColor: "var(--accent-light)",
              transition: "all 0.2s",
            }}
          >
            <Sparkles size={14} />
            <span>Interactive Model Lab</span>
          </a>
        </motion.div>

        {/* Impact Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            marginTop: "2.5rem",
            paddingTop: "1.75rem",
            borderTop: "1px solid var(--card-border)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem",
          }}
        >
          <div className={styles.statItem}>
            <span className={styles.statLabel} style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem" }}>
              <TrendingUp size={12} color="var(--accent)" /> Production Velocity
            </span>
            <span className={styles.statValue}>-70% Reporting Latency</span>
            <span style={{ fontSize: "0.75rem", color: "var(--secondary)" }}>
              Automated factory IoT & financial pipelines @ Kale Group
            </span>
          </div>

          <div className={styles.statItem}>
            <span className={styles.statLabel} style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem" }}>
              <Cpu size={12} color="var(--primary)" /> Native Systems
            </span>
            <span className={styles.statValue}>OnCue for macOS (Swift)</span>
            <span style={{ fontSize: "0.75rem", color: "var(--secondary)" }}>
              Hardware 4K 60fps HDR, Apple AVKit, Multi-View streaming
            </span>
          </div>

          <div className={styles.statItem}>
            <span className={styles.statLabel} style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem" }}>
              <Database size={12} color="var(--accent)" /> Continuous Data Ingestion
            </span>
            <span className={styles.statValue}>100k+ Records Ingested</span>
            <span style={{ fontSize: "0.75rem", color: "var(--secondary)" }}>
              Daily GitHub Actions CI/CD ETL on Padok Analytics
            </span>
          </div>

          <div className={styles.statItem}>
            <span className={styles.statLabel} style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem" }}>
              <Layers size={12} color="var(--foreground)" /> Versatile Core
            </span>
            <span className={styles.statValue}>Swift &bull; Python &bull; C# .NET</span>
            <span style={{ fontSize: "0.75rem", color: "var(--secondary)" }}>
              PostgreSQL, Next.js, and automated media pipelines
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
