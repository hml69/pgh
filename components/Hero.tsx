
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="text-center md:text-left flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 order-2 md:order-1">
        <h2 className="text-blue-400 font-medium mb-2 tracking-widest uppercase text-sm">Web Developer</h2>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Phạm Gia <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Huy</span>
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
          Đam mê xây dựng các sản phẩm web hiệu quả và tinh tế với PHP, Laravel, Nextjs và React. 
          Luôn tối ưu hóa hạ tầng với Nginx và Apache.
        </p>
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <button 
            onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all shadow-lg shadow-blue-900/20"
          >
            Khám phá Kỹ năng
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 glass hover:bg-white/10 text-white rounded-full font-medium transition-all"
          >
            Liên Hệ
          </button>
        </div>
      </div>
      
      <div className="flex-shrink-0 order-1 md:order-2">
        <div className="relative w-48 h-48 md:w-64 md:h-64">
          <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="relative glass w-full h-full rounded-full p-2 flex items-center justify-center overflow-hidden border-2 border-white/20">
            <img 
              src="/images/avatar.jpg" 
              alt="Huy Phạm Gia" 
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
