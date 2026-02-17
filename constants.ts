
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
    images:'/images/thanbaitet.png',
    title: 'Thần Bài Tết',
    description: 'Thần Bài Tết - Ứng dụng tính điểm trò chơi sát phạt nhau miễn phí',
    tags: ['Vite'],
    link: 'https://thanbaitet.vercel.app/'
  },
  {
    images:'/images/tuimulixi.png',
    title: 'Túi Mù Lì Xì',
    description: 'Túi Mù Lì Xì - Mở túi nhận lộc - Đón Tết May Mắn',
    tags: ['Vite'],
    link: 'https://tuimulixi.vercel.app/'
  }
];
