import React, { useState, useEffect } from 'react';
import { DATA } from '../constants';
import { Menu, ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Reduced py-8 to py-4 for a much better laptop fit
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'py-2' : 'py-4 md:py-6'}`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Slimmer pill height: py-3 instead of py-5 */}
        <div className={`flex justify-between items-center bg-white/[0.03] backdrop-blur-xl border border-white/10 px-6 md:px-8 py-3 md:py-4 rounded-full shadow-xl transition-all duration-500 ${scrolled ? 'border-accentBlue/20 bg-darkBg/80' : ''}`}>
          
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-9 h-9 md:w-10 md:h-10 bg-accentBlue rounded-xl flex items-center justify-center font-black text-black text-lg md:text-xl shadow-[0_0_20px_rgba(0,210,255,0.3)]">
              {DATA.profile.firstName[0]}
            </div>
            <div className="flex flex-col">
              <span className="text-base md:text-lg font-black tracking-tighter text-white leading-tight uppercase">
                {DATA.profile.name.split(' ').slice(1).join(' ')}
              </span>
              <span className="text-[8px] font-black text-accentBlue tracking-[0.2em] uppercase opacity-70">Senior Executive</span>
            </div>
          </div>
          
          <div className="hidden lg:flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-white/50">
            {['About', 'Experience', 'Expertise', 'Awards'].map((item) => (
              <a key={item} href={item === 'About' ? '#hero' : `#${item.toLowerCase()}`} className="hover:text-accentBlue transition-all">
                {item}
              </a>
            ))}
          </div>

          <a href="#contact" className="hidden md:flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-accentBlue transition-all">
            Let's Talk <ArrowUpRight size={14} />
          </a>
          
          <div className="md:hidden text-white"><Menu size={24} /></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;