"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type ViewMode = "recruiter" | "engineer";

interface ViewModeContextType {
  mode: ViewMode;
  setMode: (mode: ViewMode) => void;
  toggleMode: () => void;
}

const ViewModeContext = createContext<ViewModeContextType | undefined>(undefined);

export const ViewModeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setModeState] = useState<ViewMode>("recruiter");

  useEffect(() => {
    const saved = localStorage.getItem("bugra_view_mode") as ViewMode | null;
    if (saved === "recruiter" || saved === "engineer") {
      setModeState(saved);
    }
  }, []);

  const setMode = (newMode: ViewMode) => {
    setModeState(newMode);
    localStorage.setItem("bugra_view_mode", newMode);
  };

  const toggleMode = () => {
    const next = mode === "recruiter" ? "engineer" : "recruiter";
    setMode(next);
  };

  return (
    <ViewModeContext.Provider value={{ mode, setMode, toggleMode }}>
      {children}
    </ViewModeContext.Provider>
  );
};

export const useViewMode = () => {
  const context = useContext(ViewModeContext);
  if (!context) {
    throw new Error("useViewMode must be used within a ViewModeProvider");
  }
  return context;
};
