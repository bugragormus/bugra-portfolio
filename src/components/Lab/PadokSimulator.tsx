"use client";

import { useState, useId } from "react";
import { motion } from "framer-motion";
import { Sparkles, Sliders, ExternalLink, RefreshCw, Trophy, Activity, Info } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

interface Candidate {
  id: string;
  name: string;
  jockey: string;
  sire: string;
  baseForm: number; // 0-100
  jockeyRating: number; // 0-100
  sireStamina: number; // 0-100
  trackAffinityTurf: number; // 0-100
  trackAffinityMud: number; // 0-100
}

const CANDIDATES: Candidate[] = [
  {
    id: "c1",
    name: "Burgas Star",
    jockey: "Ahmet Çelik",
    sire: "King David",
    baseForm: 92,
    jockeyRating: 95,
    sireStamina: 90,
    trackAffinityTurf: 96,
    trackAffinityMud: 75,
  },
  {
    id: "c2",
    name: "Anatolian Peak",
    jockey: "Gökhan Kocakaya",
    sire: "Native Khan",
    baseForm: 88,
    jockeyRating: 93,
    sireStamina: 94,
    trackAffinityTurf: 89,
    trackAffinityMud: 91,
  },
  {
    id: "c3",
    name: "Aegean Flash",
    jockey: "Özcan Yıldırım",
    sire: "Torok",
    baseForm: 85,
    jockeyRating: 88,
    sireStamina: 84,
    trackAffinityTurf: 86,
    trackAffinityMud: 70,
  },
  {
    id: "c4",
    name: "Northern Tempest",
    jockey: "Halis Karataş",
    sire: "Mendip",
    baseForm: 89,
    jockeyRating: 97,
    sireStamina: 87,
    trackAffinityTurf: 92,
    trackAffinityMud: 84,
  },
];

export default function PadokSimulator() {
  const { t } = useLanguage();
  const [jockeyWeight, setJockeyWeight] = useState(35);
  const [bloodlineWeight, setBloodlineWeight] = useState(30);
  const [formWeight, setFormWeight] = useState(35);
  const [trackCondition, setTrackCondition] = useState<"turf" | "mud">("turf");
  const [isExplaining, setIsExplaining] = useState(false);
  const jockeySliderId = useId();
  const bloodlineSliderId = useId();
  const formSliderId = useId();

  // Compute normalized scores
  const totalWeight = jockeyWeight + bloodlineWeight + formWeight || 1;
  const nwJockey = jockeyWeight / totalWeight;
  const nwBloodline = bloodlineWeight / totalWeight;
  const nwForm = formWeight / totalWeight;

  const scoredCandidates = CANDIDATES.map((cand) => {
    const trackFactor =
      trackCondition === "turf"
        ? cand.trackAffinityTurf / 100
        : cand.trackAffinityMud / 100;

    const rawScore =
      (cand.jockeyRating * nwJockey +
        cand.sireStamina * nwBloodline +
        cand.baseForm * nwForm) *
      trackFactor;

    return {
      ...cand,
      score: Math.round(rawScore * 10) / 10,
      jockeyContribution: Math.round(cand.jockeyRating * nwJockey * trackFactor * 10) / 10,
      bloodlineContribution: Math.round(cand.sireStamina * nwBloodline * trackFactor * 10) / 10,
      formContribution: Math.round(cand.baseForm * nwForm * trackFactor * 10) / 10,
    };
  }).sort((a, b) => b.score - a.score);

  const topCandidate = scoredCandidates[0];

  const handleReset = () => {
    setJockeyWeight(35);
    setBloodlineWeight(30);
    setFormWeight(35);
    setTrackCondition("turf");
  };

  return (
    <div
      style={{
        border: "1px solid var(--card-border)",
        borderRadius: "16px",
        backgroundColor: "var(--card-bg)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
        overflow: "hidden",
      }}
    >
      {/* Top Banner */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
          padding: "1.25rem 1.75rem",
          borderBottom: "1px solid var(--card-border)",
          backgroundColor: "rgba(61, 90, 128, 0.04)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "8px",
              backgroundColor: "var(--primary)",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Sparkles size={18} />
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "var(--primary)",
                  fontWeight: 600,
                }}
              >
                Interactive Lab
              </span>
              <span
                style={{
                  fontSize: "0.7rem",
                  padding: "0.15rem 0.5rem",
                  borderRadius: "999px",
                  backgroundColor: "rgba(94, 140, 124, 0.15)",
                  color: "var(--accent)",
                  fontWeight: 600,
                }}
              >
                Live Simulation
              </span>
            </div>
            <h3 style={{ fontSize: "1.1rem", margin: 0, fontWeight: 700 }}>
              Padok — Gazi Derby Feature Weight Playground
            </h3>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <button
            onClick={() => setIsExplaining(!isExplaining)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.35rem",
              fontSize: "0.8rem",
              fontWeight: 500,
              padding: "0.45rem 0.85rem",
              borderRadius: "6px",
              border: "1px solid var(--card-border)",
              backgroundColor: isExplaining ? "var(--accent-light)" : "var(--card-bg)",
              cursor: "pointer",
              color: isExplaining ? "var(--accent)" : "var(--foreground)",
              transition: "all 0.2s ease",
            }}
          >
            <Info size={14} /> {isExplaining ? t("labExplainHide") : t("labExplainShow")}
          </button>
          <a
            href="https://github.com/bugragormus/Padok"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.35rem",
              fontSize: "0.8rem",
              fontWeight: 600,
              padding: "0.45rem 0.85rem",
              borderRadius: "6px",
              backgroundColor: "var(--primary)",
              color: "#ffffff",
              border: "1px solid var(--primary)",
              boxShadow: "0 2px 8px rgba(88, 166, 255, 0.25)",
              transition: "all 0.2s ease",
            }}
          >
            {t("labPadokRepo")} <ExternalLink size={12} />
          </a>
        </div>
      </div>

      {/* Explainer Accordion */}
      {isExplaining && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          style={{
            padding: "1rem 1.75rem",
            backgroundColor: "rgba(94, 140, 124, 0.08)",
            borderBottom: "1px solid var(--card-border)",
            fontSize: "0.85rem",
            lineHeight: 1.5,
            color: "var(--foreground)",
          }}
        >
          <strong>About this pipeline:</strong> Padok automates official Turkish Jockey Club (TJK) data ingestion, parses historic pace indices, normalizes schemas into SQLite, and computes explainable multi-variable weights. This widget lets you interactively adjust the model&apos;s feature weights and observe the real-time ranking adjustments.
        </motion.div>
      )}

      {/* Simulator Body */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
          padding: "1.75rem",
        }}
      >
        {/* Controls Column */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "var(--secondary)",
                fontWeight: 600,
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
              }}
            >
              <Sliders size={14} /> {t("labHyperparameters")}
            </span>
            <button
              onClick={handleReset}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.25rem",
                fontSize: "0.75rem",
                color: "var(--secondary)",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              <RefreshCw size={12} /> {t("labReset")}
            </button>
          </div>

          {/* Slider 1: Jockey */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", marginBottom: "0.35rem" }}>
              <label htmlFor={jockeySliderId} style={{ fontWeight: 600, cursor: "pointer" }}>{t("labJockeyWeight")}</label>
              <span style={{ fontFamily: "var(--font-mono)", color: "var(--primary)" }}>
                {jockeyWeight}%
              </span>
            </div>
            <input
              id={jockeySliderId}
              type="range"
              min="5"
              max="60"
              value={jockeyWeight}
              onChange={(e) => setJockeyWeight(Number(e.target.value))}
              aria-label="Jockey Impact Weight"
              style={{ width: "100%", accentColor: "var(--primary)", cursor: "pointer" }}
            />
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.7rem", color: "var(--secondary)" }}>
              <span>Low (5%)</span>
              <span>High (60%)</span>
            </div>
          </div>

          {/* Slider 2: Sire */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", marginBottom: "0.35rem" }}>
              <label htmlFor={bloodlineSliderId} style={{ fontWeight: 600, cursor: "pointer" }}>{t("labSireWeight")}</label>
              <span style={{ fontFamily: "var(--font-mono)", color: "var(--accent)" }}>
                {bloodlineWeight}%
              </span>
            </div>
            <input
              id={bloodlineSliderId}
              type="range"
              min="5"
              max="60"
              value={bloodlineWeight}
              onChange={(e) => setBloodlineWeight(Number(e.target.value))}
              aria-label="Sire Bloodline & Stamina"
              style={{ width: "100%", accentColor: "var(--accent)", cursor: "pointer" }}
            />
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.7rem", color: "var(--secondary)" }}>
              <span>Sprint Pedigree</span>
              <span>Classic Stamina</span>
            </div>
          </div>

          {/* Slider 3: Recent Form */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", marginBottom: "0.35rem" }}>
              <label htmlFor={formSliderId} style={{ fontWeight: 600, cursor: "pointer" }}>{t("labFormWeight")}</label>
              <span style={{ fontFamily: "var(--font-mono)", color: "#b25e22" }}>
                {formWeight}%
              </span>
            </div>
            <input
              id={formSliderId}
              type="range"
              min="5"
              max="60"
              value={formWeight}
              onChange={(e) => setFormWeight(Number(e.target.value))}
              aria-label="Recent Form & Pace Momentum"
              style={{ width: "100%", accentColor: "#b25e22", cursor: "pointer" }}
            />
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.7rem", color: "var(--secondary)" }}>
              <span>Historical Bias</span>
              <span>Current Form Bias</span>
            </div>
          </div>

          {/* Track Condition Toggle */}
          <div>
            <span style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.5rem" }}>
              {t("labTrackCondition")}
            </span>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.5rem",
                padding: "0.25rem",
                backgroundColor: "var(--background)",
                borderRadius: "8px",
                border: "1px solid var(--card-border)",
              }}
            >
              <button
                type="button"
                onClick={() => setTrackCondition("turf")}
                style={{
                  padding: "0.45rem",
                  borderRadius: "6px",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                  backgroundColor: trackCondition === "turf" ? "var(--card-bg)" : "transparent",
                  color: trackCondition === "turf" ? "var(--accent)" : "var(--secondary)",
                  boxShadow: trackCondition === "turf" ? "0 2px 6px rgba(0,0,0,0.3)" : "none",
                  transition: "all 0.2s",
                }}
              >
                {t("labTurf")}
              </button>
              <button
                type="button"
                onClick={() => setTrackCondition("mud")}
                style={{
                  padding: "0.45rem",
                  borderRadius: "6px",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                  backgroundColor: trackCondition === "mud" ? "var(--card-bg)" : "transparent",
                  color: trackCondition === "mud" ? "#b25e22" : "var(--secondary)",
                  boxShadow: trackCondition === "mud" ? "0 2px 6px rgba(0,0,0,0.3)" : "none",
                  transition: "all 0.2s",
                }}
              >
                {t("labMud")}
              </button>
            </div>
          </div>
        </div>

        {/* Live Scored Output Column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.85rem",
            backgroundColor: "var(--background)",
            padding: "1.25rem",
            borderRadius: "12px",
            border: "1px solid var(--card-border)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "var(--secondary)",
                fontWeight: 600,
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
              }}
            >
              <Activity size={14} /> {t("labStandings")}
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                color: "var(--secondary)",
              }}
            >
              {t("labCalculated")}
            </span>
          </div>

          {/* Top Prediction Banner */}
          <div
            style={{
              padding: "0.75rem 1rem",
              borderRadius: "8px",
              backgroundColor: "rgba(94, 140, 124, 0.12)",
              border: "1px solid rgba(94, 140, 124, 0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Trophy size={18} color="var(--accent)" />
              <div>
                <span style={{ fontSize: "0.7rem", color: "var(--accent)", fontWeight: 600, textTransform: "uppercase" }}>
                  {t("labTopPick")}
                </span>
                <div style={{ fontWeight: 700, fontSize: "0.95rem" }}>{topCandidate.name}</div>
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  color: "var(--accent)",
                }}
              >
                {topCandidate.score}
              </div>
              <span style={{ fontSize: "0.65rem", color: "var(--secondary)" }}>{t("labNormalizedIndex")}</span>
            </div>
          </div>

          {/* Candidate list */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {scoredCandidates.map((c, idx) => (
              <div
                key={c.id}
                style={{
                  padding: "0.6rem 0.8rem",
                  borderRadius: "8px",
                  backgroundColor: "var(--card-bg)",
                  border: idx === 0 ? "1px solid var(--accent)" : "1px solid var(--card-border)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.35rem",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        width: "18px",
                        color: idx === 0 ? "var(--accent)" : "var(--secondary)",
                      }}
                    >
                      #{idx + 1}
                    </span>
                    <span style={{ fontWeight: 600, fontSize: "0.85rem" }}>{c.name}</span>
                    <span style={{ fontSize: "0.75rem", color: "var(--secondary)" }}>
                      ({c.jockey})
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      color: idx === 0 ? "var(--accent)" : "var(--foreground)",
                    }}
                  >
                    {c.score}
                  </span>
                </div>

                {/* Mini stacked contribution bar */}
                <div
                  style={{
                    height: "5px",
                    width: "100%",
                    borderRadius: "3px",
                    backgroundColor: "var(--card-border)",
                    display: "flex",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${(c.jockeyContribution / (c.score || 1)) * 100}%`,
                      backgroundColor: "var(--primary)",
                    }}
                    title={`Jockey: ${c.jockeyContribution}`}
                  />
                  <div
                    style={{
                      width: `${(c.bloodlineContribution / (c.score || 1)) * 100}%`,
                      backgroundColor: "var(--accent)",
                    }}
                    title={`Bloodline: ${c.bloodlineContribution}`}
                  />
                  <div
                    style={{
                      width: `${(c.formContribution / (c.score || 1)) * 100}%`,
                      backgroundColor: "#b25e22",
                    }}
                    title={`Form: ${c.formContribution}`}
                  />
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "0.7rem",
              color: "var(--secondary)",
              paddingTop: "0.5rem",
              borderTop: "1px dashed var(--card-border)",
            }}
          >
            <div style={{ display: "flex", gap: "0.75rem" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "2px", backgroundColor: "var(--primary)" }} /> Jockey
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "2px", backgroundColor: "var(--accent)" }} /> Pedigree
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "2px", backgroundColor: "#b25e22" }} /> Form
              </span>
            </div>
            <Link
              href="/projects"
              style={{
                color: "var(--primary)",
                fontWeight: 600,
                textDecoration: "underline",
              }}
            >
              {t("labSeeFull")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
