export type Locale = "id" | "en";

export type HeroContent = {
  greeting: string;
  name: string;
  role: string;
  tagline: string;
  primaryCta: string;
  secondaryCta: string;
};

export type ProfileContent = {
  title: string;
  description: string;
  highlights: string[];
};

export type Project = {
  title: string;
  summary: string;
  stack: string[];
  link: string;
  image: string;
};

export type ProjectsContent = {
  title: string;
  description: string;
  projectCta: string;
  items: Project[];
};

export type ContactLink = {
  label: string;
  value: string;
  href: string;
};

export type ContactContent = {
  title: string;
  description: string;
  links: ContactLink[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  description: string;
  techStack: string[];
};

export type ExperienceContent = {
  title: string;
  items: ExperienceItem[];
};

export type PortfolioContent = {
  hero: HeroContent;
  profile: ProfileContent;
  experience: ExperienceContent;
  projects: ProjectsContent;
  contact: ContactContent;
};
