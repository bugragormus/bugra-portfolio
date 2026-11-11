"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  FileText,
  Briefcase,
  Terminal,
  Mail,
  Copy,
  ExternalLink,
  Sparkles,
  ToggleLeft,
  ToggleRight,
  X,
  Code,
  GraduationCap,
  Globe
} from "lucide-react";
import { useViewMode } from "@/context/ViewModeContext";
import { useLanguage } from "@/context/LanguageContext";

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);
  const router = useRouter();
  const { mode, toggleMode } = useViewMode();
  const { language, toggleLanguage } = useLanguage();

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    setQuery("");
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("bugra.gormus@hotmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const actions = [
    {
      id: "toggle-lang",
      title: language === "en" ? "Türkçe Dilini Seç (Switch to Turkish)" : "Switch to English (İngilizceye Geç)",
      category: "Localization",
      icon: Globe,
      action: () => {
        toggleLanguage();
        close();
      },
    },
    {
      id: "view-mode",
      title: `Switch View Mode (Currently: ${mode === "recruiter" ? "Recruiter" : "Engineer"})`,
      category: "Perspective",
      icon: mode === "recruiter" ? ToggleLeft : ToggleRight,
      action: () => {
        toggleMode();
        close();
      },
    },
    {
      id: "download-cv",
      title: "Download CV (PDF)",
      category: "Documents",
      icon: FileText,
      action: () => {
        window.open("/CV_Bugra_Gormus.pdf", "_blank");
        close();
      },
    },
    {
      id: "copy-email",
      title: copied ? "Email Copied to Clipboard!" : "Copy Email: bugra.gormus@hotmail.com",
      category: "Contact",
      icon: Copy,
      action: handleCopyEmail,
    },
    {
      id: "nav-projects",
      title: "Explore Projects & Research Papers",
      category: "Navigation",
      icon: Code,
      action: () => {
        router.push("/projects");
        close();
      },
    },
    {
      id: "nav-about",
      title: "About Buğra & Academic Journey (USI Lugano, YLSY)",
      category: "Navigation",
      icon: GraduationCap,
      action: () => {
        router.push("/about");
        close();
      },
    },
    {
      id: "nav-contact",
      title: "Direct Contact Form",
      category: "Navigation",
      icon: Mail,
      action: () => {
        router.push("/contact");
        close();
      },
    },
    {
      id: "proj-padok",
      title: "Open Padok — Gazi Derby Analytics (GitHub)",
      category: "Featured Projects",
      icon: Sparkles,
      action: () => {
        window.open("https://github.com/bugragormus/Padok", "_blank");
        close();
      },
    },
    {
      id: "proj-retinal",
      title: "Open Retinal Imaging ML (GitHub)",
      category: "Featured Projects",
      icon: Briefcase,
      action: () => {
        window.open("https://github.com/bugragormus/RetinalImagingML", "_blank");
        close();
      },
    },
    {
      id: "ext-linkedin",
      title: "Visit LinkedIn Profile",
      category: "Social",
      icon: ExternalLink,
      action: () => {
        window.open("https://linkedin.com/in/bugragormus", "_blank");
        close();
      },
    },
    {
      id: "ext-github",
      title: "Visit GitHub Organization / Repos",
      category: "Social",
      icon: ExternalLink,
      action: () => {
        window.open("https://github.com/bugragormus", "_blank");
        close();
      },
    },
  ];

  const filtered = actions.filter((act) =>
    act.title.toLowerCase().includes(query.toLowerCase()) ||
    act.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {/* Small Floating / Header button */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open Command Palette"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          padding: "0.35rem 0.65rem",
          borderRadius: "8px",
          border: "1px solid var(--card-border)",
          backgroundColor: "var(--card-bg)",
          fontSize: "0.75rem",
          fontFamily: "var(--font-mono)",
          color: "var(--foreground)",
          cursor: "pointer",
          backdropFilter: "blur(8px)",
          transition: "all 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "var(--primary)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "var(--card-border)";
        }}
      >
        <Terminal size={13} color="var(--primary)" />
        <span className="hidden sm:inline" style={{ fontWeight: 500 }}>
          Command Menu
        </span>
        <span
          style={{
            padding: "0.1rem 0.35rem",
            borderRadius: "4px",
            backgroundColor: "var(--background)",
            border: "1px solid var(--card-border)",
            fontSize: "0.68rem",
            color: "var(--secondary)",
            fontWeight: 600,
          }}
        >
          ⌘K
        </span>
      </button>

      {/* Modal Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              paddingTop: "12vh",
              backgroundColor: "rgba(45, 50, 56, 0.4)",
              backdropFilter: "blur(6px)",
            }}
            onClick={close}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.15 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: "90%",
                maxWidth: "580px",
                backgroundColor: "var(--card-bg)",
                borderRadius: "14px",
                border: "1px solid var(--card-border)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Search input bar */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.9rem 1.25rem",
                  borderBottom: "1px solid var(--card-border)",
                }}
              >
                <Search size={18} color="var(--secondary)" />
                <input
                  type="text"
                  placeholder="Type a command or search..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  autoFocus
                  style={{
                    flex: 1,
                    border: "none",
                    outline: "none",
                    fontSize: "0.95rem",
                    fontFamily: "var(--font-sans)",
                    backgroundColor: "transparent",
                    color: "var(--foreground)",
                  }}
                />
                <button
                  onClick={close}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "var(--secondary)",
                  }}
                >
                  <X size={16} />
                </button>
              </div>

              {/* Action List */}
              <div
                style={{
                  maxHeight: "360px",
                  overflowY: "auto",
                  padding: "0.5rem",
                }}
              >
                {filtered.length > 0 ? (
                  filtered.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={item.action}
                        style={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "0.65rem 0.85rem",
                          borderRadius: "8px",
                          border: "none",
                          backgroundColor: "transparent",
                          cursor: "pointer",
                          textAlign: "left",
                          transition: "background-color 0.15s",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.backgroundColor = "var(--background)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.backgroundColor = "transparent")
                        }
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                          <div
                            style={{
                              width: "28px",
                              height: "28px",
                              borderRadius: "6px",
                              backgroundColor: "rgba(88, 166, 255, 0.15)",
                              color: "var(--primary)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Icon size={15} />
                          </div>
                          <div>
                            <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--foreground)" }}>
                              {item.title}
                            </div>
                            <span style={{ fontSize: "0.7rem", color: "var(--secondary)" }}>
                              {item.category}
                            </span>
                          </div>
                        </div>
                        <span
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.65rem",
                            color: "var(--secondary)",
                          }}
                        >
                          ↵ Jump
                        </span>
                      </button>
                    );
                  })
                ) : (
                  <div style={{ padding: "2rem", textAlign: "center", color: "var(--secondary)", fontSize: "0.85rem" }}>
                    No matching action found for &quot;{query}&quot;
                  </div>
                )}
              </div>

              {/* Bottom status bar */}
              <div
                style={{
                  padding: "0.6rem 1.25rem",
                  backgroundColor: "var(--background)",
                  borderTop: "1px solid var(--card-border)",
                  fontSize: "0.7rem",
                  fontFamily: "var(--font-mono)",
                  color: "var(--secondary)",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>Navigation & Perspective Tools</span>
                <span>ESC to close</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
