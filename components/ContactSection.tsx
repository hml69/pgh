
import React from 'react';

export const ContactSection: React.FC = () => {
  const contacts = [
    {
      label: 'Email',
      value: 'huy55555dn@gmail.com',
      link: 'mailto:huy55555dn@gmail.com',
      color: 'blue',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      label: 'Facebook',
      value: 'fb.com/phamgiahuy.vn',
      link: 'https://www.facebook.com/phamgiahuy.vn',
      color: 'indigo',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      )
    },
    {
      label: 'Telegram',
      value: '@phamgiahuy_vn',
      link: 'https://t.me/phamgiahuy_vn',
      color: 'teal',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
        </svg>
      )
    }
  ];

  const getColorClasses = (color: string) => {
    switch(color) {
      case 'indigo': return 'bg-indigo-500/20 text-indigo-400';
      case 'teal': return 'bg-teal-500/20 text-teal-400';
      default: return 'bg-blue-500/20 text-blue-400';
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h3 className="text-3xl font-bold text-white mb-4">Kết Nối Với Mình</h3>
        <p className="text-slate-400">Bạn có ý tưởng hay cần hỗ trợ kỹ thuật? Đừng ngần ngại liên hệ nhé.</p>
        <div className="h-1 w-20 bg-blue-500 rounded-full mx-auto mt-6"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contacts.map((contact, idx) => (
          <a 
            key={idx}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="glass p-8 rounded-3xl flex flex-col items-center gap-6 hover:bg-white/5 transition-all duration-500 group border-white/5"
          >
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${getColorClasses(contact.color)} group-hover:scale-110 transition-transform duration-500`}>
              {contact.icon}
            </div>
            <div className="text-center">
              <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">{contact.label}</p>
              <p className="text-white font-medium">{contact.value}</p>
            </div>
            <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-blue-400 text-sm">Truy cập →</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
