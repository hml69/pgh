
import { Skill, Project } from './types';

export const SKILLS: Skill[] = [
  { name: 'PHP', category: 'Backend', level: 36 },
  { name: 'Laravel', category: 'Backend', level: 36 },
  { name: 'React', category: 'Frontend', level: 36 },
  { name: 'Next.js', category: 'Frontend', level: 36 },
  { name: 'Vite', category: 'Frontend', level: 36 },
  { name: 'Nginx', category: 'DevOps', level: 36 },
  { name: 'Apache', category: 'DevOps', level: 36 },
];

// Added PROJECTS constant as required by ProjectsSection.tsx
export const PROJECTS: Project[] = [
  {
    images:'/images/domixi.webp',
    title: 'Demo',
    description: 'Cảm ơn anh Độ Mixi',
    tags: ['PHP', 'Laravel', 'React', 'MySQL'],
    link: '#'
  }
];
