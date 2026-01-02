import { portfolioData } from '@/data/portfolio';
import SocialIcon from './SocialIcon';

export default function Footer() {
  const { personalInfo } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-6">
            {personalInfo.socials.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-emerald-400 transition-colors"
                aria-label={social.platform}
              >
                <SocialIcon name={social.icon} size={24} />
              </a>
            ))}
          </div>
          <p className="text-gray-600 text-sm">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
