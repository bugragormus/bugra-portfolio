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
} from "lucide-react";
import { motion } from "framer-motion";

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
  return (
    <div className="min-h-screen py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400">
            About Me
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I&apos;m a software engineer passionate about machine learning,
              data engineering, and mobile/backend systems. Currently pursuing
              my MSc in Artificial Intelligence through the prestigious YLSY
              scholarship program sponsored by the Turkish Government.
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              My academic journey includes a B.Sc. in Software Engineering from
              Kirklareli University, where I completed my thesis on retinal
              disease classification using deep learning techniques.
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              I balance strong engineering skills with a focus on clean
              architecture, practical delivery, and lifelong learning. My goal
              is to build robust, scalable systems that solve real-world
              problems through innovative technology solutions.
            </p>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center mb-6 group-hover:from-indigo-100 group-hover:to-purple-100 dark:group-hover:from-gray-600 dark:group-hover:to-gray-500 transition-colors">
                  <skillGroup.icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-1.5 text-sm bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 text-indigo-700 dark:text-indigo-300 rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Certifications Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center group-hover:from-indigo-100 group-hover:to-purple-100 dark:group-hover:from-gray-600 dark:group-hover:to-gray-500 transition-colors">
                    <cert.icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                          {cert.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">
                          {cert.issuer}
                        </p>
                        <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-700 px-4 py-2 rounded-full">
                          {cert.year}
                        </span>
                      </div>
                    </div>
                    {cert.verificationUrl && (
                      <a
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors text-sm"
                      >
                        <Award className="h-4 w-4 mr-2" />
                        Verify Certificate
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
            Education
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center group-hover:from-indigo-100 group-hover:to-purple-100 dark:group-hover:from-gray-600 dark:group-hover:to-gray-500 transition-colors">
                    <edu.icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                          {edu.degree}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-lg">
                          {edu.school}
                        </p>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-700 px-4 py-2 rounded-full">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
            Work Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center group-hover:from-indigo-100 group-hover:to-purple-100 dark:group-hover:from-gray-600 dark:group-hover:to-gray-500 transition-colors">
                    <experience.icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                          {experience.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-lg">
                          {experience.company}
                        </p>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-700 px-4 py-2 rounded-full">
                        {experience.period}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">
                      {experience.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center group-hover:from-indigo-100 group-hover:to-purple-100 dark:group-hover:from-gray-600 dark:group-hover:to-gray-500 transition-colors">
                    <project.icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-lg">
                          {project.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-sm bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 text-indigo-700 dark:text-indigo-300 rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      <Github className="h-5 w-5 mr-2" />
                      View on GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Fun Facts Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
            Beyond Tech
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center mb-6 group-hover:from-indigo-100 group-hover:to-purple-100 dark:group-hover:from-gray-600 dark:group-hover:to-gray-500 transition-colors">
                  <fact.icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  {fact.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {fact.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
