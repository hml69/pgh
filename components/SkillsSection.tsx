
import React from 'react';
import { SKILLS } from '../constants';

export const SkillsSection: React.FC = () => {
  const categories = ['Frontend', 'Backend', 'DevOps'] as const;

  return (
    <div>
      <div className="mb-12">
        <h3 className="text-3xl font-bold text-white mb-4">Kỹ Năng</h3>
        <div className="h-1 w-20 bg-blue-500 rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <div key={cat} className="glass p-8 rounded-3xl border-white/10 hover:border-white/20 transition-all duration-500">
            <h4 className="text-xl font-semibold text-blue-400 mb-8 border-b border-white/5 pb-4">{cat}</h4>
            <div className="space-y-6">
              {SKILLS.filter(s => s.category === cat).map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-300 font-medium">{skill.name}</span>
                    <span className="text-xs text-slate-500">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 glass p-8 rounded-3xl flex flex-wrap gap-12 items-center justify-around opacity-80">
        <div className="text-center group">
          <div className="text-4xl mb-2 text-white/40 group-hover:text-blue-400 transition-colors">PHP</div>
          <div className="text-xs text-slate-500 uppercase tracking-widest">Mastery</div>
        </div>
        <div className="text-center group">
          <div className="text-4xl mb-2 text-white/40 group-hover:text-blue-400 transition-colors">REACT</div>
          <div className="text-xs text-slate-500 uppercase tracking-widest">Expert</div>
        </div>
        <div className="text-center group">
          <div className="text-4xl mb-2 text-white/40 group-hover:text-blue-400 transition-colors">NGINX</div>
          <div className="text-xs text-slate-500 uppercase tracking-widest">Infrastructure</div>
        </div>
      </div>
    </div>
  );
};
