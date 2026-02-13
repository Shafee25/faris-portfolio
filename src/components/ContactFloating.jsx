import React from 'react';
import { Phone, Mail, Linkedin } from 'lucide-react';

const ContactFloating = () => {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-md">
      <div className="bg-white text-black p-4 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-between">
        <div className="flex items-center gap-3 pl-2">
          <div className="w-10 h-10 bg-darkBg rounded-full flex items-center justify-center text-white">
            <Phone size={18} />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-50">Quick Connect</p>
            <p className="text-xs font-black">+94 75 5841 123</p>
          </div>
        </div>
        
        <div className="flex gap-2">
          <a href="mailto:adsmsfaris@gmail.com" className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center hover:bg-accentBlue transition-colors">
            <Mail size={20} />
          </a>
          <a href="#" className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center hover:bg-accentBlue transition-colors">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactFloating;