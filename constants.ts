
import { Skill, Project } from './types';

export const SKILLS: Skill[] = [
  { name: 'PHP', category: 'Backend', level: 36 },
  { name: 'Laravel', category: 'Backend', level: 36 },
  { name: 'React', category: 'Frontend', level: 36 },
  { name: 'Next.js', category: 'Frontend', level: 36 },
  { name: 'Nginx', category: 'DevOps', level: 36 },
  { name: 'Apache', category: 'DevOps', level: 36 },
];

// Added PROJECTS constant as required by ProjectsSection.tsx
export const PROJECTS: Project[] = [
  {
    images:'/images/matmatinhban.png',
    title: 'Mật mã Tình Bạn',
    description: 'Mật mã Tình Bạn - Hệ thống mã hóa Emoji chính xác 100%. Bảo mật tuyệt đối giữa những người bạn.',
    tags: ['Next.js'],
    link: 'https://matmatinhban.vercel.app/'
  },
  {
    images:'/images/thanbaitet.png',
    title: 'Thần Bài Tết',
    description: 'Thần Bài Tết - Ứng dụng tính điểm trò chơi sát phạt nhau miễn phí',
    tags: ['React'],
    link: 'https://thanbaitet.vercel.app/'
  },
  {
    images:'/images/tuimulixi.png',
    title: 'Túi Mù Lì Xì',
    description: 'Túi Mù Lì Xì - Mở túi nhận lộc - Đón Tết May Mắn',
    tags: ['React'],
    link: 'https://tuimulixi.vercel.app/'
  }
];
