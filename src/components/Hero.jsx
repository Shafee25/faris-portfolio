import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Download, ChevronRight } from 'lucide-react';
import { DATA } from '../constants';
import dadImg from '../../public/Prof.png'; 

const Hero = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    // Reveal Animation
    gsap.from(".hero-reveal", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power2.out"
    });

    const btn = buttonRef.current;
    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = btn.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      gsap.to(btn, { x: x * 0.2, y: y * 0.2, duration: 0.3 });
    };
    const onMouseLeave = () => gsap.to(btn, { x: 0, y: 0, duration: 0.3 });
    
    btn.addEventListener('mousemove', onMouseMove);
    btn.addEventListener('mouseleave', onMouseLeave);
    return () => {
      btn.removeEventListener('mousemove', onMouseMove);
      btn.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    // Balanced Spacing: pt-32 (mobile) and pt-36 (laptop/desktop)
    <section id="hero" className="relative min-h-screen flex items-center pt-32 md:pt-36 pb-20 px-6 md:px-20 overflow-hidden bg-darkBg">
      
      {/* Background Watermark - Subtleized */}
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.01] whitespace-nowrap pointer-events-none uppercase tracking-tighter">
        STRATEGY
      </h1>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        
        {/* Content Column: Spacing reduced from 16 to 8/10 for better Laptop fit */}
        <div className="flex flex-col space-y-8 md:space-y-10 text-center lg:text-left items-center lg:items-start">
          
          {/* 1. THE BADGE */}
          <div className="hero-reveal inline-flex items-center gap-2.5 px-5 py-2 bg-accentBlue/5 border border-accentBlue/20 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accentBlue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accentBlue"></span>
            </span>
            <span className="text-accentBlue text-[10px] font-black uppercase tracking-[0.25em]">
              Strategic Sales Leader
            </span>
          </div>

          {/* 2. THE TITANIC HEADLINE (Scales better: 6xl on laptop, 8xl on large desktop) */}
          <div className="hero-reveal">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter uppercase">
              {DATA.profile.title.split(' ')[0]} <br /> 
              <span className="text-accentBlue">
                {DATA.profile.title.split(' ').slice(1).join(' ')}
              </span>
            </h1>
          </div>

          {/* 3. THE BIO (Text size reduced to xl/2xl) */}
          <p className="hero-reveal text-white/50 text-base md:text-xl max-w-lg leading-relaxed font-medium">
            I am <span className="text-white font-black">{DATA.profile.name}</span>. {DATA.profile.personalStatement}
          </p>

          {/* 4. THE CALL TO ACTIONS */}
          <div className="hero-reveal flex flex-wrap gap-6 justify-center lg:justify-start items-center pt-2">
            <a 
              href="/Farees-CV.pdf" 
              download="Seyed_Ahamed_Farees_CV.pdf"
              ref={buttonRef}
              className="group relative bg-accentBlue text-black px-8 py-4 md:px-10 md:py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all shadow-lg active:scale-95 flex items-center gap-3"
            >
              Download CV <Download size={16} strokeWidth={3} />
            </a>
            
            <a href="#experience" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest hover:text-accentBlue transition-all group">
              View Roadmap <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform text-accentBlue" />
            </a>
          </div>
        </div>

        {/* 5. THE EXECUTIVE IMAGE (Size reduced for Laptop height) */}
        <div className="hero-reveal relative justify-self-center lg:justify-self-end group">
          <div className="w-64 h-[400px] md:w-[380px] md:h-[550px] lg:w-[420px] lg:h-[600px] rounded-[3rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl p-4 -rotate-2 group-hover:rotate-0 group-hover:scale-[1.02] transition-all duration-700 shadow-2xl">
            <div className="w-full h-full rounded-[2.5rem] bg-darkBg overflow-hidden relative border border-white/5">
               <img 
                 src={dadImg} 
                 alt={DATA.profile.name} 
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-darkBg via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>
            </div>
          </div>
          
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-accentBlue/10 blur-[100px] rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;