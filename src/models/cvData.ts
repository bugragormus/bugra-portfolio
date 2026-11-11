import { Code, Database, GraduationCap, Briefcase, Award } from "lucide-react";

export interface SkillCategory {
  category: string;
  items: string[];
  icon: typeof Code;
}

export interface WorkExperience {
  title: string;
  company: string;
  period: string;
  location: string;
  bulletPoints: string[];
  icon: typeof Briefcase;
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  description: string;
  bulletPoints?: string[];
  icon: typeof GraduationCap;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  verificationUrl: string | null;
  icon: typeof Award;
}

export interface FunFact {
  title: string;
  description: string;
}

export const cvData = {
  personal: {
    name: "Buğra Görmüş",
    title: "Data Scientist",
    bio: "Data Scientist & Machine Learning Engineer specializing in time-series forecasting, anomaly detection, and automated data pipelines. Experienced in structuring complex industrial datasets (ERP, IoT sensors, relational databases) and delivering high-impact business intelligence platforms. Combines strong software engineering fundamentals with mathematical modeling to build reliable, explainable, and scalable end-to-end analytical solutions.",
    email: "bugra.gormus@hotmail.com",
    phone: "+41 76 740 04 20",
    location: "Lugano, Switzerland",
    github: "https://github.com/bugragormus",
    linkedin: "https://linkedin.com/in/bugragormus",
    website: "https://bugragormus.dev",
  },
  skills: [
    {
      category: "Data Science & ML",
      items: [
        "Python (Scikit-learn, TensorFlow)",
        "Deep Learning & Computer Vision",
        "Time-Series & Anomaly Detection",
        "Statistical Analytics & Modeling"
      ],
      icon: Code,
    },
    {
      category: "Data Engineering & SQL",
      items: [
        "SQL (PostgreSQL, SQLite)",
        "Supabase & DB Optimization",
        "ETL Pipelines & Ingestion",
        "Data Warehousing Concepts"
      ],
      icon: Database,
    },
    {
      category: "Software Engineering",
      items: [
        "C# (.NET Core Backend)",
        "FastAPI & REST APIs",
        "Next.js (React, TypeScript)",
        "Git & CI/CD Workflows"
      ],
      icon: Code,
    }
  ] as SkillCategory[],
  experience: [
    {
      title: "Data Scientist & Software Developer",
      company: "Kale Group",
      period: "Feb 2025 – Sep 2025",
      location: "Turkey",
      bulletPoints: [
        "Designed and deployed an AI-powered production tracking and reporting system on the local factory network, enabling real-time monitoring across the entire value chain (manufacturing → sales).",
        "Developed and optimized machine learning models for time series forecasting, anomaly detection, and predictive analytics using Python, scikit-learn, and SQL, improving forecast accuracy and reducing production risks.",
        "Processed and structured large-scale datasets from ERP systems, relational databases, and IoT sensors, building automated ETL pipelines for reliable data flows.",
        "Built a SQL-based financial analysis and scenario simulation platform, accelerating monthly reporting by 70% and supporting strategic decision-making in finance.",
        "Designed interactive dashboards and visualization interfaces to provide managers with actionable insights, reducing manual reporting effort.",
        "Collaborated with finance, operations, and R&D teams to integrate AI-driven insights into workflows, enhancing efficiency, cost control, and sales planning.",
        "Led digital transformation initiatives by advising departments on automation, advanced analytics, and AI adoption, contributing to company-wide data-driven culture."
      ],
      icon: Briefcase,
    },
    {
      title: "Software Developer Intern",
      company: "Türkiye Vakıflar Bankası T.A.O.",
      period: "July 2023 – Sep 2023",
      location: "Turkey",
      bulletPoints: [
        "Collaborated with the software development team to design and develop banking applications.",
        "Built 'FabrieBank,' a banking system developed with C# (.NET) and PostgreSQL, following layered architecture design principles.",
        "Applied banking business logic and transaction workflows in application development.",
        "Wrote clean, efficient, and maintainable code for various banking software modules.",
        "Developed and optimized SQL queries for PostgreSQL databases, enhancing application performance and data integrity."
      ],
      icon: Briefcase,
    }
  ] as WorkExperience[],
  education: [
    {
      degree: "MSc in Artificial Intelligence",
      school: "USI (Università della Svizzera italiana)",
      period: "Sep 2025 – June 2027",
      description: "Currently pursuing a Master's degree in Artificial Intelligence at USI Lugano, specializing in advanced machine learning, NLP, and neural networks. Funded as a YLSY Scholarship Recipient, sponsored by the Republic of Turkey as the sole selected candidate for graduate studies abroad in this category.",
      icon: GraduationCap,
    },
    {
      degree: "B.Sc. in Software Engineering",
      school: "Kırklareli University",
      period: "Sep 2020 – July 2024",
      description: "Graduated with CGPA: 3.34/4.",
      bulletPoints: [
        "Bachelor Thesis: RetinalVision-XAI — Comparative Deep Learning Benchmark & Explainable Diagnosis across 4,127 Fundus Scans.",
        "Benchmarked 6 architectures (InceptionV3, ResNet-SVM, Custom CNN, Random Forest); achieved 93.25% accuracy and engineered Grad-CAM interpretability heatmaps."
      ],
      icon: GraduationCap,
    },
    {
      degree: "Science High School Diploma",
      school: "Çan Science High School",
      period: "Sep 2014 – June 2018",
      description: "Diploma Grade: 86.10/100",
      icon: GraduationCap,
    }
  ] as Education[],
  certifications: [
    {
      title: "Google Project Management Professional Certificate",
      issuer: "Coursera",
      year: "2023",
      verificationUrl: "https://www.credly.com/badges/4b36030b-4bf1-4bc7-9065-34d12852fac5/linked_in_profile",
      icon: Award,
    },
    {
      title: "AI Agents Fundamentals",
      issuer: "Hugging Face",
      year: "2025",
      verificationUrl: null,
      icon: Award,
    },
    {
      title: "Flutter Mobile Development Bootcamp",
      issuer: "Google Academy",
      year: "2023",
      verificationUrl: null,
      icon: Award,
    },
    {
      title: "HarvardX Data Science Course",
      issuer: "Harvard University",
      year: "2023",
      verificationUrl: null,
      icon: Award,
    }
  ] as Certification[],
  funFacts: [
    {
      title: "YLSY National Fellow",
      description: "Sole candidate selected nationwide by the Turkish Ministry of National Education for graduate AI studies abroad at USI Lugano."
    },
    {
      title: "Alpine Life & Lugano",
      description: "Based in Ticino, Switzerland. When not training models or optimizing SQL queries, you'll find me hiking Monte Brè and exploring Swiss trails."
    },
    {
      title: "Domain Curiosity",
      description: "Believes the best data science happens when paired with deep domain curiosity — from ceramic manufacturing IoT to Turkish Derby racing analytics."
    }
  ] as FunFact[]
};
