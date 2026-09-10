import { ExternalLink, Github } from "lucide-react";

interface Project {
  image: string;
  title: string;
  description: string;
  tags?: string[];
  github: string;
  demo?: string;
}

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="flex-shrink-0 w-80 mt-5 md:w-85 bg-surface rounded-md overflow-hidden border border-border hover:border-border-hover hover:shadow-[0_0_10px_2px] hover:shadow-accent/20 transition-all duration-300 group flex flex-col">
      {/* Image Container */}
      <div className="relative h-48 bg-surface-muted overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-elevated/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
          {project.title}
        </h3>

        <p className="text-muted text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tags */}
        {project.tags && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 bg-surface-muted text-foreground rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-3 pt-4 border-t border-border mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-surface-elevated text-accent rounded-lg hover:bg-accent hover:text-surface-elevated transition-all duration-200 font-medium text-sm border border-border hover:border-accent"
          >
            <Github size={16} />
            GitHub
          </a>

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-surface-elevated text-accent rounded-lg hover:bg-accent hover:text-surface-elevated transition-all duration-200 font-medium text-sm border border-border hover:border-accent"
            >
              <ExternalLink size={16} />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
