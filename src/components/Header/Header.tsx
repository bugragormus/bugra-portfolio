"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, UserCheck, Cpu } from "lucide-react";
import CommandPalette from "@/components/CommandPalette/CommandPalette";
import { useViewMode } from "@/context/ViewModeContext";
import styles from "./Header.module.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { mode, toggleMode } = useViewMode();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* Logo & Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
          <Link href="/" className={styles.logo} aria-label="Buğra Görmüş Portfolio Home">
            <Image
              src="/logo-small.png"
              alt="Buğra Görmüş Logo"
              width={38}
              height={38}
              className={styles.logoImage}
              priority
            />
          </Link>
          <div className="hidden sm:flex flex-col">
            <span style={{ fontSize: "0.9rem", fontWeight: 700, letterSpacing: "-0.01em", lineHeight: 1.2 }}>
              Buğra Görmüş
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.68rem",
                color: "var(--secondary)",
                letterSpacing: "0.02em",
              }}
            >
              AI & Data Systems
            </span>
          </div>
        </div>

        {/* Center / Right Nav Items */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {/* Desktop Navigation */}
          <nav className={styles.nav}>
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`${styles.navLink} ${isActive ? styles.activeLink : ""}`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Perspective View Switcher */}
          <button
            onClick={toggleMode}
            title={`Current perspective: ${mode === "recruiter" ? "Recruiter" : "Engineer"} (Click to switch)`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.35rem 0.75rem",
              borderRadius: "8px",
              border: mode === "recruiter" ? "1px solid rgba(63, 185, 80, 0.35)" : "1px solid rgba(88, 166, 255, 0.35)",
              backgroundColor: mode === "recruiter" ? "var(--accent-light)" : "rgba(88, 166, 255, 0.12)",
              color: mode === "recruiter" ? "var(--accent)" : "var(--primary)",
              fontSize: "0.74rem",
              fontFamily: "var(--font-mono)",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            {mode === "recruiter" ? (
              <>
                <UserCheck size={13} />
                <span>Recruiter View</span>
              </>
            ) : (
              <>
                <Cpu size={13} />
                <span>Engineer View</span>
              </>
            )}
          </button>

          {/* Command Palette Trigger */}
          <CommandPalette />

          {/* Mobile Menu Button */}
          <button
            className={styles.mobileMenuBtn}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className={styles.mobileMenu}>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`${styles.mobileNavLink} ${
                  isActive ? styles.mobileNavLinkActive : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}
          <div style={{ paddingTop: "0.5rem", borderTop: "1px solid var(--card-border)" }}>
            <button
              onClick={() => {
                toggleMode();
                setIsMobileMenuOpen(false);
              }}
              style={{
                width: "100%",
                padding: "0.6rem 1rem",
                borderRadius: "8px",
                border: "1px solid var(--card-border)",
                backgroundColor: "var(--card-bg)",
                color: "var(--foreground)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: "0.85rem",
                cursor: "pointer",
              }}
            >
              <span>Switch Perspective:</span>
              <strong style={{ color: mode === "recruiter" ? "var(--accent)" : "var(--primary)" }}>
                {mode === "recruiter" ? "Recruiter" : "Engineer"}
              </strong>
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
