import Section from './Section';
import { portfolioData } from '@/data/portfolio';

export default function About() {
  const { personalInfo } = portfolioData;

  return (
    <Section id="about" className="bg-gray-800/50">
      <div className="max-w-3xl mx-auto text-center md:text-left">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">About Me</h2>
        <p className="text-lg text-gray-300 leading-relaxed text-center">
          {personalInfo.about}
        </p>
      </div>
    </Section>
  );
}
