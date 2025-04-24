import { Code, Database, Cpu, Briefcase } from "lucide-react";

const skills = [
  {
    category: "Programming Languages",
    items: ["Python", "JavaScript", "TypeScript", "Java", "C#", "Dart"],
    icon: Code,
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Flutter", "HTML5", "CSS3", "Tailwind CSS"],
    icon: Cpu,
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Django", "Spring Boot", ".NET", "FastAPI"],
    icon: Database,
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase"],
    icon: Database,
  },
  {
    category: "Tools & Others",
    items: ["Git", "Docker", "AWS", "CI/CD", "Agile", "Jira"],
    icon: Cpu,
  },
];

const experiences = [
  {
    title: "Data Engineer",
    company: "Kale Group",
    period: "2023 - Present",
    description:
      "Developing and deploying ML models for forecasting & anomaly detection. Building data pipelines for preprocessing and visualization.",
    icon: Briefcase,
  },
  {
    title: "Software Engineering Intern",
    company: "Vakifbank",
    period: "2022",
    description:
      "Developed a banking application using C# and PostgreSQL with layered architecture.",
    icon: Briefcase,
  },
  {
    title: "Mobile App Developer",
    company: "Google Turkey Game & App Academy",
    period: "2021",
    description:
      "Developed several mobile applications using Flutter and Dart, integrated with Firebase services.",
    icon: Briefcase,
  },
];

export default function About() {
  return (
    <div className="min-h-screen py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
            About Me
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              I&apos;m a Software Engineer with a strong background in mobile
              development, data engineering, and backend systems. I graduated
              from Kirklareli University with a B.Sc. in Software Engineering
              (GPA: 3.34/4).
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              I&apos;m passionate about clean code, practical problem solving,
              and continuous learning in software and data.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center mb-6 group-hover:from-indigo-100 group-hover:to-purple-100 transition-colors">
                  <skillGroup.icon className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-1.5 text-sm bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Work Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center group-hover:from-indigo-100 group-hover:to-purple-100 transition-colors">
                    <experience.icon className="h-8 w-8 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-800">
                          {experience.title}
                        </h3>
                        <p className="text-gray-600 text-lg">
                          {experience.company}
                        </p>
                      </div>
                      <span className="text-sm text-gray-500 bg-gray-50 px-4 py-2 rounded-full">
                        {experience.period}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {experience.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
