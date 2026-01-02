import Section from './Section';
import { portfolioData } from '@/data/portfolio';

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <Section id="skills">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">Technical Skills</h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill}
            className="px-6 py-3 bg-gray-800 border border-gray-700 rounded-lg shadow-sm hover:shadow-emerald-900/20 hover:border-emerald-500/50 transition-all duration-300"
          >
            <span className="font-medium text-gray-200">{skill}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
