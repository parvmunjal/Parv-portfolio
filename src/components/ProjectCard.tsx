
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  className?: string;
  details?: string[];
}

const ProjectCard = ({
  title,
  description,
  technologies,
  image,
  className,
  details = [],
}: ProjectCardProps) => {
  return (
    <div className={cn(
      "bg-white rounded-md overflow-hidden shadow-md transition-all hover:shadow-lg border border-gray-100",
      className
    )}>
      <div className="p-6">
        <h3 className="text-xl font-medium text-navy mb-2">{title}</h3>
        <p className="text-slate mb-4">{description}</p>
        
        {details.length > 0 && (
          <ul className="mb-4 space-y-2">
            {details.map((detail, i) => (
              <li key={i} className="flex items-start">
                <span className="text-highlight mr-2">▹</span>
                <span className="text-slate-600">{detail}</span>
              </li>
            ))}
          </ul>
        )}
        
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech, i) => (
            <span
              key={i}
              className="bg-navy/5 text-navy px-2 py-1 text-xs font-mono rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
