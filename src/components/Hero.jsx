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

    // Magnetic Button Effect for Desktop
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
    // ID Fixed for Navbar. 
    // pt-44 on mobile ensures content starts safely below the floating navbar.
    <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-44 md:pt-48 pb-20 px-6 md:px-20 overflow-hidden">
      
      {/* Background Large Name Shadow */}
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-black text-white/[0.02] whitespace-nowrap pointer-events-none uppercase select-none">
        {DATA.profile.firstName}
      </h1>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Text Content Area */}
        <div className="flex flex-col space-y-8 text-center lg:text-left items-center lg:items-start">
          
          {/* THE BADGE: Fixed with mt-20 to clear the mobile navbar */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accentBlue/10 border border-accentBlue/20 rounded-full mt-20 lg:mt-0 transition-all hover:bg-accentBlue/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accentBlue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accentBlue"></span>
            </span>
            <span className="text-accentBlue text-[10px] font-black uppercase tracking-[0.2em] pointer-events-none">
              Strategic Sales Leader
            </span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black leading-[0.85] tracking-tighter uppercase">
            {DATA.profile.title.split(' ')[0]} <br /> 
            <span className="text-accentBlue">{DATA.profile.title.split(' ').slice(1).join(' ')}</span>
          </h1>

          <p className="text-textGray text-base md:text-xl max-w-lg leading-relaxed font-medium">
            I am <span className="text-white font-bold">{DATA.profile.name}</span>. {DATA.profile.personalStatement}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-6 justify-center lg:justify-start items-center pt-4">
            <a 
              href="/Farees-CV.pdf" 
              download="Seyed_Ahamed_Farees_CV.pdf"
              ref={buttonRef}
              className="group relative bg-accentBlue text-black px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-widest transition-all shadow-[0_20px_40px_rgba(0,210,255,0.2)] active:scale-95 flex items-center gap-3"
            >
              Download CV <Download size={18} />
            </a>
            
            <a href="#experience" className="flex items-center gap-2 text-[10px] md:text-xs font-black uppercase tracking-widest hover:text-accentBlue transition-colors group py-2">
              View Journey <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform text-accentBlue" />
            </a>
          </div>
        </div>

        {/* Executive Image Container */}
        <div className="relative justify-self-center lg:justify-self-end group mt-10 lg:mt-0">
          <div className="w-64 h-[380px] md:w-[420px] md:h-[580px] rounded-[3rem] border border-white/10 bg-cardBg/40 backdrop-blur-3xl p-3 -rotate-2 group-hover:rotate-0 group-hover:scale-[1.02] transition-all duration-700 shadow-2xl">
            <div className="w-full h-full rounded-[2.5rem] bg-darkBg overflow-hidden relative border border-white/5">
               <img 
                 src={dadImg} 
                 alt={DATA.profile.name} 
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
               />
               {/* Elegant Gradient Overlay */}
               <div className="absolute inset-0 bg-gradient-to-t from-darkBg via-transparent to-transparent opacity-90 group-hover:opacity-60 transition-opacity"></div>
            </div>
          </div>
          
          {/* Ambient Background Glow behind image */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accentBlue/10 blur-[120px] rounded-full group-hover:bg-accentBlue/20 transition-colors duration-700"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;