import Section from './Section';
import { portfolioData } from '@/data/portfolio';
import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <Section id="projects" className="bg-gray-900">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 rounded-xl shadow-lg hover:shadow-emerald-900/20 transition-all duration-300 overflow-hidden border border-gray-700 flex flex-col"
          >
            {/* Project Image */}
            <div className="h-48 w-full relative group overflow-hidden bg-gray-900">
               {project.imageUrl && !project.imageUrl.includes('placeholder') ? (
                 <img 
                   src={project.imageUrl} 
                   alt={project.title}
                   className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                 />
               ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-500 bg-gray-900">
                    <span className="text-gray-600">No Image</span>
                </div>
               )}
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-gray-100 mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4 text-sm flex-1">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-medium text-emerald-400 bg-emerald-900/30 rounded-md border border-emerald-800/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-4 border-t border-gray-700 mt-auto">
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium text-gray-400 hover:text-white transition-colors"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
