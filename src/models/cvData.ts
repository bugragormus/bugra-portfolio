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
    bio: "Passionate data scientist currently pursuing an MSc in Artificial Intelligence in Switzerland. Experienced in designing predictive models, time-series forecasting, and building scalable automated pipelines to extract value from complex datasets.",
    email: "bugra.gormus@hotmail.com",
    phone: "+41 76 740 04 20",
    location: "Lugano, Switzerland",
    github: "https://github.com/bugragormus",
    linkedin: "https://linkedin.com/in/bugragormus",
    website: "https://www.bugragormus.tech",
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
        "Bachelor Thesis (Deep Retina): Developed machine learning models for eye disease detection from medical images.",
        "Preprocessed retinal images, built and trained classification models, and optimized network architecture for high accuracy."
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
      title: "Analytical Approach",
      description: "Approaches software engineering from a mathematical and scientific angle, ensuring data-driven designs."
    },
    {
      title: "Collaborative Mindset",
      description: "Strong foundation in collaborative development, refined through team bootcamps and rapid prototyping programs."
    },
    {
      title: "Language Fluency",
      description: "Bilingual in Turkish and English (IELTS Academic 6.5+ / 7.0 equivalent framework)."
    }
  ] as FunFact[]
};
