// components/ProjectCard.tsx
type Props = {
  title: string;
  description: string;
  tech: string[];
  github: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  github,
}: Props) {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition bg-white">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
      <div className="flex flex-wrap gap-2 my-2">
        {tech.map((t, i) => (
          <span key={i} className="bg-gray-100 text-xs px-2 py-1 rounded">
            {t}
          </span>
        ))}
      </div>
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 text-sm"
      >
        GitHub →
      </a>
    </div>
  );
}
