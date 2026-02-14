
import React from 'react';
import { PROJECTS } from '../constants';

export const ProjectsSection: React.FC = () => {
  return (
    <div>
      <div className="mb-12">
        <h3 className="text-3xl font-bold text-white mb-4">Dự Án Tiêu Biểu</h3>
        <div className="h-1 w-20 bg-blue-500 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, idx) => (
          <div 
            key={idx} 
            className="group relative overflow-hidden glass rounded-3xl p-6 hover:translate-y-[-8px] transition-all duration-500 border-white/5"
          >
            <div className="w-full h-48 mb-6 rounded-2xl overflow-hidden glass border-white/10">
              <img 
                src={project.images} 
                alt={project.title}
                className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700"
              />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map(tag => (
                <span key={tag} className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 bg-white/5 rounded-full text-blue-300">
                  {tag}
                </span>
              ))}
            </div>
            <a 
              href={project.link} 
              className="text-sm font-medium text-white flex items-center gap-2 hover:text-blue-400 transition-colors"
            >
              Xem chi tiết 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
