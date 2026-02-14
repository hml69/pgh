
import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { BackgroundBlobs } from './components/BackgroundBlobs';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Cập nhật danh sách section để bao gồm 'projects'
      const sections = ['home', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-slate-200 relative">
      <BackgroundBlobs />
      <Navbar activeSection={activeSection} />
      
      <main className="container mx-auto px-4 md:px-8 max-w-6xl">
        <section id="home" className="min-h-screen flex items-center justify-center py-20">
          <Hero />
        </section>

        <section id="skills" className="py-24">
          <SkillsSection />
        </section>

        {/* Added ProjectsSection to the layout */}
        <section id="projects" className="py-24">
          <ProjectsSection />
        </section>

        <section id="contact" className="py-24 mb-20">
          <ContactSection />
        </section>
      </main>

      <footer className="py-8 text-center border-t border-white/5 text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Phạm Gia Huy.</p>
      </footer>
    </div>
  );
};

export default App;
