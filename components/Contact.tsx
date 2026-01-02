import Section from './Section';
import { portfolioData } from '@/data/portfolio';
import { Mail } from 'lucide-react';

export default function Contact() {
  const { personalInfo } = portfolioData;

  return (
    <Section id="contact" className="bg-gray-900 text-white">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
        <p className="text-gray-300 mb-10 text-lg">
          I'm currently looking for new opportunities. Whether you have a question or just want to
          say hi, I'll try my best to get back to you!
        </p>
        <a
          href={`mailto:${personalInfo.email}`}
          className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-emerald-600 rounded-full hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-900/20"
        >
          <Mail className="mr-3" size={20} />
          Say Hello
        </a>
      </div>
    </Section>
  );
}
