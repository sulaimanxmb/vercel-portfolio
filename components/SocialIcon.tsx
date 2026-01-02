import { Github, Linkedin, Twitter, Mail, Globe } from 'lucide-react';

interface SocialIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function SocialIcon({ name, className, size = 24 }: SocialIconProps) {
  switch (name.toLowerCase()) {
    case 'github':
      return <Github className={className} size={size} />;
    case 'linkedin':
      return <Linkedin className={className} size={size} />;
    case 'twitter':
      return <Twitter className={className} size={size} />;
    case 'email':
      return <Mail className={className} size={size} />;
    case 'website':
      return <Globe className={className} size={size} />;
    default:
      return <Globe className={className} size={size} />;
  }
}
