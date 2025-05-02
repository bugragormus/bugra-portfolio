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
  Brain,
  LineChart,
  Bot,
  Github,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  {
    category: "Programming Languages",
    items: ["Python (ML & Backend)", "C# (.NET Core)", "JavaScript", "Dart"],
    icon: Code,
  },
  {
    category: "Frontend",
    items: ["Next.js", "Flutter", "Tailwind", "HTML/CSS"],
    icon: Cpu,
  },
  {
    category: "Backend",
    items: [".NET", "FastAPI", "RestAPI", "Node.js"],
    icon: Database,
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "Supabase", "MongoDB", "Firebase"],
    icon: Database,
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "Docker", "CI/CD", "AWS", "Jira", "Agile", "Scrum"],
    icon: Cpu,
  },
];

const certifications = [
  {
    title: "Project Management Fundamentals",
    issuer: "Google Career Certificates",
    year: "Jan 2023",
    icon: Award,
    verificationUrl:
      "https://www.coursera.org/account/accomplishments/records/MGHJMLEB5VD8",
  },
  {
    title: "Starting the Project: Stepping Into the Project Successfully",
    issuer: "Google Career Certificates",
    year: "Mar 2023",
    icon: Award,
    verificationUrl:
      "https://www.coursera.org/account/accomplishments/certificate/AJVAM2KPKQQV",
  },
  {
    title: "Google Game and App Academy App Jam Participation Certificate",
    issuer: "Google Game & App Academy",
    year: "Apr 2023",
    icon: Award,
    verificationUrl: "https://verified.sertifier.com/en/verify/48677610732600/",
  },
  {
    title: "Project Planning: Put It All Together",
    issuer: "Google Career Certificates",
    year: "May 2023",
    icon: Award,
    verificationUrl:
      "https://www.coursera.org/account/accomplishments/certificate/QY7TG9JD572K",
  },
  {
    title: "Project Execution: Running the Project",
    issuer: "Google Career Certificates",
    year: "May 2023",
    icon: Award,
    verificationUrl:
      "https://www.coursera.org/account/accomplishments/certificate/MGHJMLEB5VD8",
  },
  {
    title: "Google Game and App Academy: App Development with Flutter",
    issuer: "Google Game & App Academy",
    year: "May 2023",
    icon: Award,
    verificationUrl: "https://verified.sertifier.com/en/verify/97300444341715/",
  },
  {
    title: "Agile Project Management",
    issuer: "Google Career Certificates",
    year: "July 2023",
    icon: Award,
    verificationUrl:
      "https://www.coursera.org/account/accomplishments/certificate/HW98B28VYV4J",
  },
  {
    title: "Graduation Project: Applying Project Management in the Real World",
    issuer: "Google Career Certificates",
    year: "July 2023",
    icon: Award,
    verificationUrl:
      "https://www.coursera.org/account/accomplishments/certificate/SHBKU662JA3B",
  },
  {
    title: "Google Project Management Certification",
    issuer: "Google Career Certificates",
    year: "July 2023",
    icon: Award,
    verificationUrl:
      "https://www.credly.com/badges/4b36030b-4bf1-4bc7-9065-34d12852fac5/linked_in_profile",
  },
  {
    title: "Google Game and App Academy: Technology Entrepreneurship",
    issuer: "Google Game & App Academy",
    year: "Aug 2023",
    icon: Award,
    verificationUrl: "https://verified.sertifier.com/en/verify/80327406821814/",
  },
  {
    title: "Google Game and App Academy: Application Development with Flutter",
    issuer: "Google Game & App Academy",
    year: "Aug 2023",
    icon: Award,
    verificationUrl: "https://verified.sertifier.com/en/verify/33177557619774/",
  },
  {
    title: "AI Agents Fundamentals",
    issuer: "Hugging Face",
    year: "Mar 2025",
    icon: Award,
    verificationUrl:
      "https://cdn-lfs-us-1.hf.co/repos/f2/34/f2344151f60f6027c436821dc61cf3f27a46435de57df8df50ad02b5acca7c07/94dce033c12e74cc8e613c353d35abf0e1f1503bdd6c92852b1f5fc74487d592?response-content-disposition=inline%3B+filename*%3DUTF-8%27%272025-03-04.png%3B+filename%3D%222025-03-04.png%22%3B&response-content-type=image%2Fpng&Expires=1746178476&Policy=eyJTdGF0ZW1lbnQiOlt7IkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc0NjE3ODQ3Nn19LCJSZXNvdXJjZSI6Imh0dHBzOi8vY2RuLWxmcy11cy0xLmhmLmNvL3JlcG9zL2YyLzM0L2YyMzQ0MTUxZjYwZjYwMjdjNDM2ODIxZGM2MWNmM2YyN2E0NjQzNWRlNTdkZjhkZjUwYWQwMmI1YWNjYTdjMDcvOTRkY2UwMzNjMTJlNzRjYzhlNjEzYzM1M2QzNWFiZjBlMWYxNTAzYmRkNmM5Mjg1MmIxZjVmYzc0NDg3ZDU5Mj9yZXNwb25zZS1jb250ZW50LWRpc3Bvc2l0aW9uPSomcmVzcG9uc2UtY29udGVudC10eXBlPSoifV19&Signature=H79%7E9x8moY2VOHitAbTj7z2GLMp8xTsna3bKReKIggHFhlPvm28PRH3Kj8JBSSEcMRW7BVZx2HbyJIBWvP6eRb5E4TY-xzp8DSIEbfFKPi8zgOpJy2pVp4%7EhmRAX3uLjSTcZ3u4U%7E44rvZxuKgBDZx1EaWAy8F15Nq5cRtwG0r96OJz2V-jUDrQdXx-bCy-4s6Qbgt6n%7ERRffATat%7EM8r0iFvhnhxu8zBOYncoskusvevHnfKD68vlKUxB6amCwrPuVQJdDOriLaEJGEpU9pLch1TW0h9yto6ypaeB6R5foFKVmCkykrXLZRqcVNQUQjq1nM1cJFs1E%7EbP7T7m8mqw__&Key-Pair-Id=K24J24Z295AEI9",
  },
  {
    title: "HarvardX Data Science Certificate",
    issuer: "Harvard University",
    year: "2023",
    icon: Award,
    verificationUrl: null,
  },
];

const education = [
  {
    degree: "MSc in Artificial Intelligence",
    school: "YLSY Government Scholarship Program",
    period: "2025",
    description:
      "Sponsored by the Republic of Turkey as the sole selected candidate for graduate studies abroad.",
    icon: GraduationCap,
  },
  {
    degree: "B.Sc. in Software Engineering",
    school: "Kirklareli University",
    period: "Sep 2020 - July 2024",
    description:
      "• GPA: 3.34/4.0\n• Bachelor Thesis (Deep Retina): Developed machine learning models for eye disease detection from medical images.\n• Preprocessed retinal images and trained classification models.\n• Evaluated model performance and optimized for higher accuracy",
    icon: GraduationCap,
  },
  {
    degree: "Science High School Diploma",
    school: "Çan Science High School",
    period: "Sep 2014 - June 2018",
    description: "Diploma Grade: 86.10/100",
    icon: GraduationCap,
  },
];

const experiences = [
  {
    title: "Data Engineer",
    company: "Kale Group",
    period: "Feb 2025 - Present",
    description:
      "• Developed and deployed ML models for time-series forecasting and anomaly detection\n• Built ETL pipelines from relational databases and external APIs for data processing\n• Designed and implemented data visualization tools to support strategic business insights\n• Created automated data preprocessing, quality checks, and monitoring systems\n• Collaborated with cross-functional R&D and business teams to deploy data-driven solutions",
    icon: Briefcase,
  },
  {
    title: "Software Engineering Intern",
    company: "Türkiye Vakıflar Bankası T.A.O.",
    period: "July 2023 - Sep 2023‌",
    description:
      "• Collaborated with the software development team to design and develop banking applications.\n• Built FabrieBank, a banking system developed with C# (.NET) and PostgreSQL, following layered architecture design principles\n• Applied banking business logic and transaction workflows in application development.\n• Wrote clean, efficient, and maintainable code for various banking software modules.\n• Developed and optimized SQL queries for PostgreSQL databases, enhancing application performance and data integrity",
    icon: Briefcase,
  },
  {
    title: "Mobile App Developer Intern",
    company: "Google Turkey Game & App Academy",
    period: "Nov 2022 - June 2023",
    description:
      "• Completed intensive Flutter and Dart training, specializing in mobile UI/UX and API integration\n• Earned 6 certificates through Google's Project Management program, focusing on agile methodologies and risk management\n• Built mobile apps integrating RESTful APIs and Firebase services, delivering production-ready solutions\n• Participated in Ideathon, Game Jam, and Bootcamp events, developing rapid prototypes with cross-functional teams",
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
    { id: "projects", label: "Projects", icon: Code },
    { id: "fun-facts", label: "Fun Facts", icon: Heart },
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

          {/* Projects Section */}
          {activeTab === "projects" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card p-6 rounded-2xl bg-white dark:bg-slate-800/50 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10">
                      <project.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
                  >
                    <Github className="h-5 w-5" />
                    View on GitHub
                  </a>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Fun Facts Section */}
          {activeTab === "fun-facts" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {funFacts.map((fact, index) => (
                <motion.div
                  key={fact.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card p-6 rounded-2xl bg-white dark:bg-slate-800/50 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10">
                      <fact.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                      {fact.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    {fact.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
