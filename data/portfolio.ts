export interface SocialLink {
  platform: string;
  url: string;
  icon: string; 
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  duration: string;
  description: string;
  technologies: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string; 
  technologies: string[];
  demoUrl?: string;
  repoUrl?: string;
}

export interface PortfolioData {
  personalInfo: {
    name: string;
    role: string;
    tagline: string;
    about: string;
    email: string;
    socials: SocialLink[];
  };
  skills: string[];
  experiences: Experience[];
  projects: Project[];
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Mohammed Sulaiman Eksambi",
    role: "DevOps and Cybersecurity Aspirant",
    tagline: "",
    about:
      "I am a passionate learner and aspiring professional in the fields of Cloud Management and cybersecurity.",
    email: "sulaimaneksambi@gmail.com",
    socials: [
      { platform: "GitHub", url: "https://github.com/sulaimanxmb", icon: "Github" },
      { platform: "LinkedIn", url: "https://www.linkedin.com/in/mohammed-sulaiman-eksambi/", icon: "Linkedin" },
    ],
  },
  skills: [
    "Linux",
    "Python",
    "Data Structures",
    "AWS",
    "Networking",
    "Docker",
    "Git",
    "CI/CD",
    "Ai-assisted Development",
    "Cloud Management",
    "Bug Bounty",
    "Penetration Testing",
  ],
  experiences: [
    {
      id: 1,
      company: "N/A",
      role: "N/A",
      duration: "Present",
      description:
        "Currently focusing on personal projects, certifications, and learning in DevOps and Cybersecurity.",
      technologies: [],
    },
  ],
  projects: [
    {
      id: 1,
      title: "Technical Blog",
      description:
        "This is my static blog built with quatrz which auto-syncs with my obsidian vault hosted via Github Pages, It contains my personal notes and writings on Topics which I usually work on as I love documenting my learning.",
      imageUrl: "/blog.png", 
      technologies: ["Github Actions", "Documentation", "Communication", "Writing"],
      demoUrl: "https://sulaimanxmb.github.io/Notes/",
      repoUrl: "https://github.com/sulaimanxmb/Notes",
    },
    {
      id: 2,
      title: "Persistent and Encrypted C2",
      description:
        "This is my C2 build to understand how real backdoor's work, It supports persistence, encyption, upload and download functionalities etc.",
      imageUrl: "/backdoor.png",
      technologies: ["Python", "C/C++", "Targeted Attacks", "Encryption"],
      repoUrl: "https://github.com/sulaimanxmb/Backdoor",
    },
    {
      id: 3,
      title: "HoneyPot",
      description:
        "This is my Cowrie honeypot with a custom website dashboard to see commands executed by attackers in real-time, I built this to understand attacker methodologies and techniques hosted via docker containers.",
      imageUrl: "/honeypot.png",
      technologies: ["Docker", "Cybersecurity", "Log parsing"],
      repoUrl: "https://github.com/sulaimanxmb/HoneyPot",
    },
  ],
};
