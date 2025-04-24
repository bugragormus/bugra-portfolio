import { Code, Database, Cpu } from "lucide-react";

const skills = [
  {
    category: "Programming Languages",
    items: ["Python", "JavaScript", "TypeScript", "Java", "C#", "Dart"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Flutter", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Django", "Spring Boot", ".NET", "FastAPI"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase"],
  },
  {
    category: "Tools & Others",
    items: ["Git", "Docker", "AWS", "CI/CD", "Agile", "Jira"],
  },
];

const experiences = [
  {
    title: "Data Engineer",
    company: "Kale Group",
    period: "2023 - Present",
    description:
      "Developing and deploying ML models for forecasting & anomaly detection. Building data pipelines for preprocessing and visualization.",
  },
  {
    title: "Software Engineering Intern",
    company: "Vakifbank",
    period: "2022",
    description:
      "Developed a banking application using C# and PostgreSQL with layered architecture.",
  },
  {
    title: "Mobile App Developer",
    company: "Google Turkey Game & App Academy",
    period: "2021",
    description:
      "Developed several mobile applications using Flutter and Dart, integrated with Firebase services.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a Software Engineer with a strong background in mobile
            development, data engineering, and backend systems. I graduated from
            Kirklareli University with a B.Sc. in Software Engineering (GPA:
            3.34/4).
            <br />
            <br />
            I'm passionate about clean code, practical problem solving, and
            continuous learning in software and data.
          </p>
        </div>

        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-4">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
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
          <h2 className="text-3xl font-bold text-center mb-12">
            Work Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">
                      {experience.title}
                    </h3>
                    <p className="text-gray-600">{experience.company}</p>
                  </div>
                  <span className="text-sm text-gray-500">
                    {experience.period}
                  </span>
                </div>
                <p className="text-gray-600">{experience.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
