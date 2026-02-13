import React from 'react';
import { Phone, Mail, FileText, Send } from 'lucide-react';

const ContactFloating = () => {
  return (
    <div className="fixed bottom-6 left-0 w-full z-[100] px-6">
      <div className="max-w-md mx-auto bg-white/10 backdrop-blur-3xl border border-white/20 p-2 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-between">
        
        {/* Phone Call */}
        <a href="tel:+94755841123" className="flex-1 flex flex-col items-center gap-1 py-2 text-white/50 hover:text-accentBlue transition-colors">
          <Phone size={20} />
          <span className="text-[8px] font-black uppercase">Call</span>
        </a>

        {/* CV Download (Mobile Quick Access) */}
        <a href="/Farees-CV.pdf" download className="flex-1 flex flex-col items-center gap-1 py-2 text-white/50 hover:text-accentBlue transition-colors border-x border-white/10">
          <FileText size={20} />
          <span className="text-[8px] font-black uppercase">Resume</span>
        </a>

        {/* Message / WhatsApp */}
        <a href="#contact" className="flex-1 flex flex-col items-center gap-1 py-2 text-white/50 hover:text-accentBlue transition-colors">
          <Send size={20} />
          <span className="text-[8px] font-black uppercase">Enquire</span>
        </a>

        {/* Primary Action Button */}
        <a href="mailto:adsmsfaris@gmail.com" className="bg-accentBlue text-black h-12 w-12 rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-transform">
          <Mail size={22} strokeWidth={3} />
        </a>
      </div>
    </div>
  );
};

export default ContactFloating;