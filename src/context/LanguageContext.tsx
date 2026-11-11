"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "tr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    home: "Home",
    projects: "Projects",
    about: "About",
    contact: "Contact",
    recruiterView: "Recruiter View",
    engineerView: "Engineer View",
    commandMenu: "Command Menu",
    switchPerspective: "Switch Perspective",

    // Hero
    availableBadge: "Available for SWE & Data Science roles",
    locationLugano: "Lugano, Switzerland",
    roleTitle: "Software Engineer • Data Scientist",
    roleSubtitle: "Native macOS • Industrial ML • Cloud Architectures",
    heroHeadlineRecruiter: "Turning complex data & code into business velocity.",
    heroHeadlineEngineer: "Bridging predictive models & high-performance systems.",
    heroDescRecruiter:
      "Software Engineer & Data Scientist with proven industrial experience deploying machine learning systems at Kale Group (cutting financial reporting cycles by 70%) and engineering native macOS applications (OnCue in Swift/AVKit). Specialized in reliable automated ETL pipelines, time-series forecasting, and scalable backend services.",
    heroDescEngineer:
      "Designing production-grade machine learning pipelines, time-series anomaly detection, and native systems. Comfortable operating across low-level frameworks (Swift/AVKit on macOS), enterprise backends (C# .NET, PostgreSQL), and data pipelines (Python, Scikit-learn, TensorFlow).",
    btnViewProjects: "View Case Studies & Repos",
    btnDownloadCV: "Download CV (PDF)",
    btnTryLab: "Interactive Model Lab",

    // Hero Stats
    statImpactLabel: "Production Velocity",
    statImpactVal: "-70% Reporting Latency",
    statImpactDesc: "Automated factory IoT & financial pipelines @ Kale Group",
    statNativeLabel: "Native Systems",
    statNativeVal: "OnCue for macOS (Swift)",
    statNativeDesc: "Hardware 4K 60fps HDR, Apple AVKit, Multi-View streaming",
    statETLLabel: "Continuous Ingestion",
    statETLVal: "100k+ Records Ingested",
    statETLDesc: "Daily GitHub Actions CI/CD ETL on Padok Analytics",
    statVersatileLabel: "Versatile Core",
    statVersatileVal: "Swift • Python • C# .NET",
    statVersatileDesc: "PostgreSQL, Next.js, and automated media pipelines",

    // Featured Projects
    curatedStudies: "Curated Case Studies",
    modeNoticeRecruiter: "Recruiter View (Impact & Metrics)",
    modeNoticeEngineer: "Engineer View (System Architectures)",
    featuredTitle: "Featured Engineering & Projects",
    browseAll: "Browse Complete Catalog",
    codeRepo: "Code Repo",
    liveSystem: "Live System",
    systemFlow: "System Flow",

    // Lab
    labTag: "Proof of Craft • Live Model Testing",
    labTitle: "Interactive AI Playground",
    labDesc: "A live simulation demonstrator based on the Padok Gazi Derby Analytics pipeline.",
    labReactive: "Real-time Parameter Reactive",
    labExplainHide: "Hide Mechanics",
    labExplainShow: "Explain Model",
    labPadokRepo: "Repo",
    labHyperparameters: "Hyperparameter Tuning",
    labReset: "Reset",
    labJockeyWeight: "Jockey Impact Weight",
    labSireWeight: "Sire Bloodline & Stamina",
    labFormWeight: "Recent Form & Pace Momentum",
    labTrackCondition: "Track Surface Condition",
    labTurf: "🌿 Normal Turf (Çim)",
    labMud: "🌧️ Heavy Mud (Çamur)",
    labStandings: "Backtested Standings",
    labCalculated: "Live Calculated",
    labTopPick: "Model Top Pick",
    labNormalizedIndex: "Normalized Index",
    labSeeFull: "See Full Model",

    // Core Pillars
    pillar1Title: "Industrial Impact & Production ML",
    pillar1Desc:
      "Real manufacturing, financial scenario, and sensor pipeline experience at Kale Group. Delivering automated ETL, anomaly detection, and accelerating executive reporting cycles by 70%.",
    pillar2Title: "Native macOS & Systems Engineering",
    pillar2Desc:
      "Creator of OnCue: native Swift & SwiftUI application utilizing Apple AVKit for hardware-accelerated 4K 60fps HDR media streaming, concurrent Multi-View decode pipelines, and secure Keychain storage.",
    pillar3Title: "Full-Stack Architecture & Automation",
    pillar3Desc:
      "Software engineering degree (B.Sc. 3.34 GPA). Proven versatility writing typed Next.js interfaces, enterprise C# .NET backends, relational PostgreSQL schemas with ACID transactions, and automated video generation engines.",
    readFullJourney: "Read Full Background & Skills",
    getInTouch: "Get In Touch Directly",

    // Contact
    contactTitle: "Let's Connect",
    contactSubtitle: "Have an open role, research idea, or data engineering challenge? I'd love to hear from you.",
    sendAMessage: "Send a Message",
    fullName: "Full Name",
    emailAddress: "Email Address",
    messageText: "Message Text",
    sendingBtn: "Sending message...",
    sendBtn: "Send Message",
    directChannels: "Direct Channels",
    cvTitle: "Curriculum Vitae",
    cvText: "Review a comprehensive record of academic background, machine learning publications, and software systems experience.",

    // Projects Page
    projectsCatalogTag: "Technical Portfolio & Production Repos",
    projectsPageTitle: "Engineered Systems & Case Studies",
    projectsPageSubtitle:
      "From low-level native macOS media streaming to industrial machine learning and automated video synthesis.",
    searchPlaceholder: "Search technologies, frameworks, or systems...",
    noProjectsMatch: "No engineering systems match your query.",

    // About Page
    aboutTitle: "About Me",
    aboutSubtitle: "Bridging rigorous software development with advanced artificial intelligence research.",
    tabSkills: "Core Skills",
    tabExperience: "Experience",
    tabEducation: "Education",
    tabCertifications: "Certifications",
    beyondResume: "Beyond The Technical Resume",
    perspectiveTitle: "Perspective & Research Philosophy",
  },
  tr: {
    // Nav
    home: "Ana Sayfa",
    projects: "Projeler",
    about: "Hakkımda",
    contact: "İletişim",
    recruiterView: "İK Modu",
    engineerView: "Mühendis Modu",
    commandMenu: "Komut Menüsü",
    switchPerspective: "Bakış Açısı Değiştir",

    // Hero
    availableBadge: "Yazılım & Veri Bilimi rollerine açık",
    locationLugano: "Lugano, İsviçre",
    roleTitle: "Yazılım Mühendisi • Veri Bilimci",
    roleSubtitle: "Native macOS • Endüstriyel YZ • Bulut Mimarileri",
    heroHeadlineRecruiter: "Karmaşık veri ve yazılımı somut iş etkisine dönüştürme.",
    heroHeadlineEngineer: "Tahminleme modelleri ile yüksek performanslı sistemleri birleştirme.",
    heroDescRecruiter:
      "Kale Group'ta makine öğrenmesi sistemleri kurarak finansal raporlama sürelerini %70 hızlandıran ve Swift/AVKit ile native macOS uygulamaları geliştiren (OnCue) Yazılım Mühendisi ve Veri Bilimci. Otomatik ETL boru hatları, zaman serisi tahminleme ve ölçeklenebilir backend mimarilerinde uzman.",
    heroDescEngineer:
      "Üretime hazır makine öğrenmesi akışları, zaman serisi anomali tespiti ve native sistemler geliştirme. Düşük seviyeli sistemlerden (macOS üzerinde Swift/AVKit), kurumsal backend'lere (C# .NET, PostgreSQL) ve veri hatlarına (Python, Scikit-learn, TensorFlow) kadar geniş yelpazede mühendislik.",
    btnViewProjects: "Projeleri ve Repoları İncele",
    btnDownloadCV: "CV İndir (PDF)",
    btnTryLab: "İnteraktif Model Laboratuvarı",

    // Hero Stats
    statImpactLabel: "Üretim İvmesi",
    statImpactVal: "%70 Raporlama Hızı",
    statImpactDesc: "Kale Group fabrika IoT & finansal veri boru hatları",
    statNativeLabel: "Native Sistemler",
    statNativeVal: "OnCue macOS (Swift)",
    statNativeDesc: "Donanım hızlandırmalı 4K 60fps HDR, Apple AVKit, Multi-View",
    statETLLabel: "Sürekli Veri Akışı",
    statETLVal: "100k+ Veri İşlendi",
    statETLDesc: "Padok Analitik üzerinde günlük GitHub Actions CI/CD ETL'i",
    statVersatileLabel: "Geniş Yetkinlik",
    statVersatileVal: "Swift • Python • C# .NET",
    statVersatileDesc: "PostgreSQL, Next.js ve uçtan uca otomatik medya pipeline'ı",

    // Featured Projects
    curatedStudies: "Seçilmiş Vaka Analizleri",
    modeNoticeRecruiter: "İK Modu (İş Etkisi & Metrikler)",
    modeNoticeEngineer: "Mühendis Modu (Sistem Mimarileri)",
    featuredTitle: "Öne Çıkan Sistemler & Projeler",
    browseAll: "Tüm Projeleri Keşfet",
    codeRepo: "Kaynak Kod",
    liveSystem: "Canlı Sistem",
    systemFlow: "Sistem Akışı",

    // Lab
    labTag: "Uygulamalı Gösteri • Canlı Model Testi",
    labTitle: "İnteraktif Yapay Zeka Laboratuvarı",
    labDesc: "Padok Gazi Koşusu Analitik motoru üzerine kurulu gerçek zamanlı simülatör.",
    labReactive: "Gerçek Zamanlı Parametrik Hesaplama",
    labExplainHide: "Mantığı Gizle",
    labExplainShow: "Modeli İncele",
    labPadokRepo: "Repo",
    labHyperparameters: "Hiperparametre Ayarı",
    labReset: "Sıfırla",
    labJockeyWeight: "Jokey Etki Ağırlığı",
    labSireWeight: "Pedigri & Dayanıklılık",
    labFormWeight: "Güncel Form & Tempo Momentumu",
    labTrackCondition: "Pist Durumu",
    labTurf: "🌿 Normal Çim",
    labMud: "🌧️ Ağır Çamur",
    labStandings: "Geriye Dönük Test Sıralaması",
    labCalculated: "Canlı Hesaplandı",
    labTopPick: "Modelin 1. Tercihi",
    labNormalizedIndex: "Normalize İndeks",
    labSeeFull: "Tüm Modeli Gör",

    // Core Pillars
    pillar1Title: "Endüstriyel Etki & Üretim Düzeyi YZ",
    pillar1Desc:
      "Kale Group'ta fabrika ağı ve finans senaryoları üzerinde gerçek üretim tecrübesi. Otomatik ETL boru hatları, anomali tespiti ve aylık raporlama sürelerinde %70 hızlanma.",
    pillar2Title: "Native macOS & Sistem Mühendisliği",
    pillar2Desc:
      "OnCue projesinin yaratıcısı: Apple AVKit ile donanım hızlandırmalı 4K 60fps HDR akışı, eşzamanlı Multi-View çözücü hatları ve Keychain güvenliği sağlayan native Swift & SwiftUI mimarisi.",
    pillar3Title: "Full-Stack Mimari & Otomasyon",
    pillar3Desc:
      "Yazılım Mühendisliği lisans derecesi (3.34 GANO). Tip güvenli Next.js arayüzleri, kurumsal C# .NET servisleri, ACID garantili PostgreSQL veritabanları ve otomatik video üretim motorları.",
    readFullJourney: "Tüm Geçmiş & Yetkinlikler",
    getInTouch: "Doğrudan İletişime Geç",

    // Contact
    contactTitle: "İletişime Geçin",
    contactSubtitle: "Açık bir pozisyon, araştırma konusu veya veri mühendisliği projeniz mi var? Görüşmekten mutluluk duyarım.",
    sendAMessage: "Mesaj Gönderin",
    fullName: "Adınız Soyadınız",
    emailAddress: "E-posta Adresiniz",
    messageText: "Mesajınız",
    sendingBtn: "Gönderiliyor...",
    sendBtn: "Mesajı Gönder",
    directChannels: "Doğrudan Kanallar",
    cvTitle: "Özgeçmiş (CV)",
    cvText: "Akademik geçmiş, makine öğrenmesi projeleri ve yazılım sistemleri tecrübelerini detaylıca inceleyin.",

    // Projects Page
    projectsCatalogTag: "Teknik Portfolyo & Üretim Repoları",
    projectsPageTitle: "Geliştirilen Sistemler & Vaka Analizleri",
    projectsPageSubtitle:
      "Düşük seviyeli native macOS medya akışından endüstriyel yapay zekaya ve otomatik video sentezine.",
    searchPlaceholder: "Teknoloji, framework veya sistem ara...",
    noProjectsMatch: "Aramanızla eşleşen bir mühendislik sistemi bulunamadı.",

    // About Page
    aboutTitle: "Hakkımda",
    aboutSubtitle: "Disiplinli yazılım geliştirmeyi ileri düzey yapay zeka araştırmalarıyla buluşturuyorum.",
    tabSkills: "Temel Yetkinlikler",
    tabExperience: "İş Deneyimi",
    tabEducation: "Eğitim",
    tabCertifications: "Sertifikalar",
    beyondResume: "Teknik Özgeçmişin Ötesinde",
    perspectiveTitle: "Çalışma Tarzı & Mühendislik Felsefesi",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("bugra_lang") as Language | null;
    if (saved === "en" || saved === "tr") {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("bugra_lang", lang);
  };

  const toggleLanguage = () => {
    const next = language === "en" ? "tr" : "en";
    setLanguage(next);
  };

  const t = (key: string): string => {
    return translations[language][key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
