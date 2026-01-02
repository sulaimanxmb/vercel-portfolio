import Section from './Section';
import { portfolioData } from '@/data/portfolio';

export default function Experience() {
  const { experiences } = portfolioData;

  return (
    <Section id="experience">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">Work Experience</h2>
      <div className="max-w-3xl mx-auto space-y-12">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative pl-8 border-l-2 border-emerald-100">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-emerald-600 ring-4 ring-white" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-xl font-bold text-gray-100">{exp.role}</h3>
              <span className="text-sm font-medium text-emerald-400 bg-emerald-900/30 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0 border border-emerald-800/50">
                {exp.duration}
              </span>
            </div>
            <h4 className="text-lg font-medium text-gray-300 mb-4">{exp.company}</h4>
            <p className="text-gray-400 mb-4 leading-relaxed">{exp.description}</p>
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
