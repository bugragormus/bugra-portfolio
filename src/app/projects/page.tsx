// app/projects/page.tsx

import ProjectCard from "../../../components/ProjectCard";

const projects = [
  {
    title: "FabrieBank",
    description:
      "A banking app developed during internship at Vakifbank. Built with C# and PostgreSQL using layered architecture.",
    tech: ["C#", "PostgreSQL", ".NET"],
    github: "https://github.com/bugragormus",
  },
  {
    title: "Flutter Mobile Apps",
    description:
      "Several mobile applications built during Google Turkey Game & App Academy with Flutter and Dart.",
    tech: ["Flutter", "Dart", "Firebase"],
    github: "https://github.com/bugragormus",
  },
  {
    title: "ML Pipelines at Kale Group",
    description:
      "Developed and deployed ML models for forecasting & anomaly detection. Built data pipelines for preprocessing and visualization.",
    tech: ["Python", "scikit-learn", "Pandas"],
    github: "https://github.com/bugragormus",
  },
];

export default function ProjectsPage() {
  return (
    <main className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </main>
  );
}
