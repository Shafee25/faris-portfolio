import React, { useState, useEffect } from 'react';
import { DATA } from '../constants';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-700 ease-in-out ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className={`flex justify-between items-center bg-white/[0.03] backdrop-blur-2xl border border-white/10 px-8 py-5 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 ${scrolled ? 'border-accentBlue/20 shadow-accentBlue/5' : ''}`}>
          
          {/* Logo Section - Large & Bold */}
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-12 h-12 bg-accentBlue rounded-2xl flex items-center justify-center font-black text-black text-2xl shadow-[0_0_30px_rgba(0,210,255,0.4)] group-hover:rotate-[10deg] transition-transform duration-500">
              {DATA.profile.firstName[0]}
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter text-white leading-tight">
                {DATA.profile.name.split(' ').slice(1).join(' ').toUpperCase()}
              </span>
              <span className="text-[10px] font-black text-accentBlue tracking-[0.3em] uppercase opacity-80">Senior Executive</span>
            </div>
          </div>
          
          {/* Desktop Links - Spaced perfectly */}
          <div className="hidden lg:flex gap-12 text-[11px] font-black uppercase tracking-[0.25em] text-white/50">
            {['About', 'Experience', 'Expertise', 'Awards'].map((item) => (
              <a key={item} href={item === 'About' ? '#hero' : `#${item.toLowerCase()}`} className="hover:text-accentBlue transition-all relative group">
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-accentBlue transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Luxury CTA Button */}
          <a href="#contact" className="hidden md:flex items-center gap-2 bg-white text-black px-8 py-3.5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-accentBlue hover:scale-105 transition-all shadow-xl active:scale-95">
            Let's Talk <ArrowUpRight size={16} />
          </a>
          
          {/* Mobile Menu Icon */}
          <div className="md:hidden text-white">
            <Menu size={28} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;