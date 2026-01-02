import { portfolioData } from '@/data/portfolio';
import { ArrowRight, Download } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  const { personalInfo } = portfolioData;

  return (
    <section className="pt-32 pb-16 md:pt-48 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-100 mb-6">
              Hi, I'm <span className="text-emerald-400">{personalInfo.name}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 font-medium mb-6">
              {personalInfo.role}
            </h2>
            <p className="text-lg text-gray-400 mb-10 max-w-lg mx-auto md:mx-0">
              {personalInfo.tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 transition-colors cursor-pointer"
              >
                View Work
                <ArrowRight className="ml-2 -mr-1" size={20} />
              </a>
              <a
                href="/resume.pdf"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-700 text-base font-medium rounded-md text-gray-300 bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                Download Resume
                <Download className="ml-2 -mr-1" size={20} />
              </a>
            </div>
          </div>
          {/* Optional: Add an image/avatar here later */}
        </div>
      </div>
    </section>
  );
}
