import { useState } from "react";
import { Code, Briefcase, GraduationCap, Award } from "lucide-react";

export type AboutTab = "skills" | "experience" | "education" | "certifications";

export interface TabItem {
  id: AboutTab;
  label: string;
  icon: typeof Code;
}

export const useAboutController = (initialTab: AboutTab = "skills") => {
  const [activeTab, setActiveTab] = useState<AboutTab>(initialTab);

  const tabs: TabItem[] = [
    { id: "skills", label: "Core Skills", icon: Code },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "certifications", label: "Certifications", icon: Award },
  ];

  const handleTabChange = (tabId: AboutTab) => {
    setActiveTab(tabId);
  };

  return {
    activeTab,
    tabs,
    handleTabChange,
  };
};
export type UseAboutControllerReturn = ReturnType<typeof useAboutController>;
