
export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'DevOps';
  level: number; // 1-100
}

export interface Project {
  images: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
}
