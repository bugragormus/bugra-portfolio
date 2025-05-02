"use client";

import {
  Code,
  Database,
  Cpu,
  Briefcase,
  Award,
  GraduationCap,
  Heart,
  Globe,
  Github,
  Brain,
  LineChart,
  Bot,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  {
    category: "Programming Languages",
    items: [
      "Python (ML & Backend)",
      "C# (.NET Core)",
      "Java",
      "TypeScript",
      "JavaScript",
      "Dart",
    ],
    icon: Code,
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Flutter", "Tailwind", "HTML/CSS"],
    icon: Cpu,
  },
  {
    category: "Backend",
    items: ["Django", ".NET", "Node.js", "FastAPI", "Spring Boot"],
    icon: Database,
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "Supabase", "MongoDB", "Redis", "Firebase"],
    icon: Database,
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "Docker", "CI/CD", "AWS", "Jira", "Agile"],
    icon: Cpu,
  },
];

const certifications = [
  {
    title: "Google Project Management Professional Certificate",
    issuer: "Coursera",
    year: "2023",
    icon: Award,
    verificationUrl:
      "https://www.coursera.org/account/accomplishments/certificate/MGHJMLEB5VD8",
  },
  {
    title: "Flutter Mobile Development Bootcamp",
    issuer: "Google Turkey Game and App Academy",
    year: "2023",
    icon: Award,
    verificationUrl: "https://verified.sertifier.com/en/verify/97300444341715/",
  },
  {
    title: "Foundations of Project Management",
    issuer: "Google Career Certificates",
    year: "2023",
    icon: Award,
    verificationUrl:
      "https://www.coursera.org/account/accomplishments/certificate/QY7TG9JD572K",
  },
  {
    title: "Agile Project Management",
    issuer: "Google Career Certificates",
    year: "2023",
    icon: Award,
    verificationUrl: "https://verified.sertifier.com/en/verify/48677610732600",
  },
  {
    title: "AI Agents Fundamentals",
    issuer: "Hugging Face",
    year: "2023",
    icon: Award,
    verificationUrl:
      "https://www.coursera.org/account/accomplishments/certificate/AJVAM2KPKQQV",
  },
  {
    title: "Data Science Professional Certificate",
    issuer: "Coursera",
    year: "2023",
    icon: Award,
    verificationUrl:
      "https://www.coursera.org/account/accomplishments/certificate/9ELSSX6G6F58",
  },
  {
    title: "Google Project Management Certificate",
    issuer: "Coursera",
    year: "2023",
    icon: Award,
    verificationUrl:
      "https://www.coursera.org/account/accomplishments/certificate/HW98B28VYV4J",
  },
  {
    title: "Flutter Mobile Bootcamp",
    issuer: "Google Turkey",
    year: "2023",
    icon: Award,
    verificationUrl: "https://verified.sertifier.com/en/verify/33177557619774/",
  },
  {
    title: "Project Management Foundations",
    issuer: "Google Career Certificates",
    year: "2023",
    icon: Award,
    verificationUrl:
      "https://www.credly.com/badges/4b36030b-4bf1-4bc7-9065-34d12852fac5/linked_in_profile",
  },
  {
    title: "Agile Project Management",
    issuer: "Google Career Certificates",
    year: "2023",
    icon: Award,
    verificationUrl: "https://verified.sertifier.com/en/verify/80327406821814/",
  },
  {
    title: "AI Agents Fundamentals",
    issuer: "Hugging Face",
    year: "2023",
    icon: Award,
    verificationUrl: "https://verified.sertifier.com/en/verify/47160946073728/",
  },
  {
    title: "HarvardX Data Science Certificate",
    issuer: "Harvard University",
    year: "2023",
    icon: Award,
    verificationUrl:
      "https://www.coursera.org/account/accomplishments/certificate/SHBKU662JA3B",
  },
  {
    title: "Data Science Professional Certificate",
    issuer: "Coursera",
    year: "2023",
    icon: Award,
    verificationUrl:
      "https://www.coursera.org/account/accomplishments/certificate/9ELSSX6G6F58",
  },
];

const education = [
  {
    degree: "MSc in Artificial Intelligence",
    school: "YLSY Government Scholarship Program",
    period: "2024 - Present",
    description:
      "Prestigious Turkish Government Scholarship for AI Studies Abroad",
    icon: GraduationCap,
  },
  {
    degree: "B.Sc. in Software Engineering",
    school: "Kirklareli University",
    period: "2019 - 2023",
    description:
      "GPA: 3.34/4.0\nThesis: Deep Retina — ML for retinal image classification",
    icon: GraduationCap,
  },
];

const experiences = [
  {
    title: "Data Engineer",
    company: "Kale Group",
    period: "2023 - Present",
    description:
      "• Developed and deployed ML models for time-series forecasting and anomaly detection\n• Built ETL pipelines from databases and APIs for data processing\n• Designed and implemented data visualization tools for business insights\n• Created automated data quality checks and monitoring systems",
    icon: Briefcase,
  },
  {
    title: "Software Engineering Intern",
    company: "Vakıfbank",
    period: "2023",
    description:
      "• Built 'FabrieBank' banking system using C# (.NET) and PostgreSQL\n• Implemented layered architecture with optimized SQL queries\n• Developed secure authentication and authorization systems\n• Created automated testing suites for critical banking operations",
    icon: Briefcase,
  },
  {
    title: "Mobile App Developer",
    company: "Google Turkey Game & App Academy",
    period: "2022",
    description:
      "• Built production-grade Flutter apps with Firebase integration\n• Developed REST APIs and implemented best practices\n• Participated in bootcamps and ideathons\n• Earned 6 Agile/Project Management certificates",
    icon: Briefcase,
  },
];

const projects = [
  {
    title: "Deep Retina",
    description: "ML system for retinal image classification",
    tech: ["Python", "TensorFlow", "OpenCV", "Medical Imaging"],
    github: "https://github.com/bugragormus/RetinalImagingML",
    icon: Brain,
  },
  {
    title: "Finance Report",
    description: "Streamlit dashboard for financial data analysis",
    tech: ["Python", "Streamlit", "Pandas", "Plotly"],
    github: "https://github.com/bugragormus/FinanceReport",
    icon: LineChart,
  },
  {
    title: "FabrieBank",
    description: "Banking system with C#/.NET",
    tech: ["C#", ".NET", "PostgreSQL", "Entity Framework"],
    github: "https://github.com/bugragormus/FabrieBank",
    icon: Briefcase,
  },
  {
    title: "StockTracking Bot",
    description: "Telegram bot with Selenium automation",
    tech: ["Python", "Telegram API", "Selenium", "Pandas"],
    github: "https://github.com/bugragormus/StockTrackingBot",
    icon: Bot,
  },
];

const funFacts = [
  {
    title: "Collaborative Development",
    description:
      "Strong foundation in collaborative development, gained through participation in Google-led programs, team-based bootcamps, and rapid prototyping challenges",
    icon: Heart,
  },
  {
    title: "Language Proficiency",
    description: "IELTS Academic Score: 6.5",
    icon: Globe,
  },
  {
    title: "Location",
    description:
      "Based in Çanakkale, Turkey — loves nature and creativity in tech",
    icon: Globe,
  },
];

export default function About() {
  const [activeTab, setActiveTab] = useState("skills");

  const tabs = [
    { id: "skills", label: "Skills", icon: Code },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "certifications", label: "Certifications", icon: Award },
  ];

  return (
    <div className="min-h-screen py-24 bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <Image
                src="/logo.png"
                alt="Bugra Gormus"
                width={180}
                height={180}
                className="rounded-full relative z-10 border-4 border-white dark:border-slate-800 shadow-xl"
              />
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 tracking-tight font-sans py-2"
          >
            About Me
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            A passionate software engineer and data enthusiast with expertise in
            machine learning, web development, and data analysis. I love
            creating innovative solutions and turning complex problems into
            elegant, efficient code.
          </motion.p>
        </motion.div>

        {/* Tabs Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                  : "bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-700"
              }`}
            >
              <tab.icon className="h-5 w-5" />
              <span>{tab.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Skills Section */}
          {activeTab === "skills" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card p-6 rounded-2xl bg-white dark:bg-slate-800/50 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10">
                      <skill.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                      {skill.category}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {skill.items.map((item) => (
                      <li
                        key={item}
                        className="text-gray-600 dark:text-gray-400 flex items-center gap-2"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-indigo-500/50"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Experience Section */}
          {activeTab === "experience" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card p-8 rounded-2xl bg-white dark:bg-slate-800/50 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10">
                      <exp.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">
                        {exp.company} • {exp.period}
                      </p>
                      <div className="prose dark:prose-invert max-w-none">
                        {exp.description.split("\n").map((line, i) => (
                          <p
                            key={i}
                            className="text-gray-600 dark:text-gray-400 mb-2"
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Education Section */}
          {activeTab === "education" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card p-8 rounded-2xl bg-white dark:bg-slate-800/50 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10">
                      <edu.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">
                        {edu.school} • {edu.period}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Certifications Section */}
          {activeTab === "certifications" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card p-6 rounded-2xl bg-white dark:bg-slate-800/50 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10">
                      <cert.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        {cert.title}
                      </h3>
                      <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">
                        {cert.issuer} • {cert.year}
                      </p>
                      {cert.verificationUrl && (
                        <a
                          href={cert.verificationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        >
                          <Award className="h-4 w-4" />
                          <span>Verify Certificate</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
