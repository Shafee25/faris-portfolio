import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Download, ChevronRight } from 'lucide-react';
import { DATA } from '../constants';
import dadImg from '../../public/Prof.png';

const Hero = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const btn = buttonRef.current;
    if (!btn) return;

    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = btn.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.3 });
    };

    const onMouseLeave = () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.3 });
    };

    btn.addEventListener('mousemove', onMouseMove);
    btn.addEventListener('mouseleave', onMouseLeave);
    return () => {
      btn.removeEventListener('mousemove', onMouseMove);
      btn.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    // Added id="hero" here for Navbar linking
    <section id="hero" className="relative min-h-screen flex items-center pt-40 md:pt-48 px-6 md:px-20 overflow-hidden">
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.02] whitespace-nowrap pointer-events-none uppercase">
        {DATA.profile.firstName}
      </h1>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accentBlue/10 border border-accentBlue/20 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accentBlue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accentBlue"></span>
            </span>
            <span className="text-accentBlue text-[10px] font-black uppercase tracking-[0.2em]">Strategic Sales Leader</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase">
            {DATA.profile.title.split(' ')[0]} <br /> 
            <span className="text-accentBlue">{DATA.profile.title.split(' ').slice(1).join(' ')}</span>
          </h1>

          <p className="text-textGray text-lg md:text-xl max-w-lg leading-relaxed mx-auto lg:mx-0">
            I am <span className="text-white font-bold">{DATA.profile.name}</span>. {DATA.profile.personalStatement}
          </p>

          <div className="flex flex-wrap gap-6 justify-center lg:justify-start items-center">
            {/* Download Link Setup */}
            <a 
              href="/Farees-CV.pdf" 
              download="Seyed_Ahamed_Farees_CV.pdf"
              ref={buttonRef}
              className="group relative bg-accentBlue text-black px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-[0_20px_40px_rgba(0,210,255,0.2)] flex items-center gap-2"
            >
              Download CV <Download size={18} />
            </a>
            
            <a href="#experience" className="flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:text-accentBlue transition-colors group">
              View Journey <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        <div className="relative justify-self-center lg:justify-self-end group">
          <div className="w-72 h-[400px] md:w-[420px] md:h-[580px] rounded-[3rem] border border-white/10 bg-cardBg/40 backdrop-blur-3xl p-3 -rotate-2 group-hover:rotate-0 group-hover:scale-[1.02] transition-all duration-700">
            <div className="w-full h-full rounded-[2.5rem] bg-darkBg overflow-hidden relative">
               <img 
                 src={dadImg} 
                 alt={DATA.profile.name} 
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-darkBg via-transparent to-transparent opacity-80"></div>
            </div>
          </div>
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accentBlue/20 blur-[120px] rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;