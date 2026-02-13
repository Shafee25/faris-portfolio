import React, { useState, useEffect } from 'react';
import { DATA } from '../constants';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'py-1' : 'py-2 md:py-4'}`}>
      <div className={`max-w-7xl mx-auto px-4 md:px-10 transition-all duration-500`}>
        <div className={`flex justify-between items-center bg-cardBg/60 backdrop-blur-2xl border border-white/10 px-5 md:px-8 py-3 md:py-4 rounded-full shadow-2xl transition-all ${scrolled ? 'scale-95 md:scale-100 shadow-accentBlue/5' : ''}`}>
          
          {/* Logo Section */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-accentBlue rounded-xl flex items-center justify-center font-black text-black text-lg md:text-xl shadow-[0_0_20px_rgba(0,210,255,0.3)] group-hover:rotate-12 transition-transform">
              {DATA.profile.firstName[0]}
            </div>
            <div className="flex flex-col">
              <span className="text-sm md:text-xl font-black tracking-tighter text-white leading-none">
                {DATA.profile.name.split(' ').slice(1).join(' ').toUpperCase()}
              </span>
              <span className="text-[8px] font-bold text-accentBlue tracking-[0.2em] uppercase hidden md:block">Senior Executive</span>
            </div>
          </div>
          
          {/* Desktop Links */}
          <div className="hidden lg:flex gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-textGray">
            {['About', 'Experience', 'Expertise', 'Awards'].map((item) => (
              <a key={item} href={item === 'About' ? '#hero' : `#${item.toLowerCase()}`} className="hover:text-accentBlue transition-all relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-accentBlue transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Action Button */}
          <a href="#contact" className="bg-white text-black px-4 md:px-6 py-2 md:py-2.5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-accentBlue hover:scale-105 transition-all shadow-lg">
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;