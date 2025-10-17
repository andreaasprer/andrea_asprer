import { ExternalLink, Github } from 'lucide-react';

export const ProjectCard = ({ project }) => {
  return (
    <div className="flex-shrink-0 w-80 md:w-85 bg-neutral-800 rounded-lg overflow-hidden border border-neutral-700 hover:border-orange-500 transition-all duration-300 group flex flex-col">
      {/* Image Container */}
      <div className="relative h-48 bg-neutral-700 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-500 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-neutral-400 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tags */}
        {project.tags && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, index) => (
              <span 
                key={index}
                className="text-xs px-2 py-1 bg-neutral-700 text-white rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-3 pt-4 border-t border-neutral-700 mt-auto">
          <a 
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-neutral-900 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-neutral-900 transition-all duration-200 font-medium text-sm border border-neutral-700 hover:border-orange-500"
          >
            <Github size={16} />
            GitHub
          </a>
          
          {project.demo && (
            <a 
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-neutral-900 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-neutral-900 transition-all duration-200 font-medium text-sm border border-neutral-700 hover:border-orange-500"
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