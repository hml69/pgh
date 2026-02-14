
import React from 'react';

export const BackgroundBlobs: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      <div className="liquid-blob w-96 h-96 bg-blue-600/20 top-[-10%] left-[-5%]"></div>
      <div className="liquid-blob w-[500px] h-[500px] bg-indigo-600/10 top-[20%] right-[-10%] delay-700"></div>
      <div className="liquid-blob w-80 h-80 bg-teal-600/20 bottom-[-5%] left-[20%] delay-1000"></div>
      <div className="liquid-blob w-[600px] h-[600px] bg-purple-600/10 bottom-[10%] right-[10%] delay-500"></div>
    </div>
  );
};
