import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Download, ChevronRight, MousePointer2 } from 'lucide-react';
import { DATA } from '../constants';
import dadImg from '../../public/Prof.png'; 

const Hero = () => {
  const buttonRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Reveal Animation
    gsap.from(".hero-reveal", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "expo.out"
    });

    // Magnetic Button
    const btn = buttonRef.current;
    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = btn.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.3 });
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
    // LARGE PADDING TOP (pt-64) to ensure separation from the large navbar
    <section id="hero" ref={containerRef} className="relative min-h-screen flex items-center pt-48 md:pt-72 pb-32 px-6 md:px-20 overflow-hidden bg-[#050a10]">
      
      {/* Surprise: Moving background text for GOAT effect */}
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[22vw] font-black text-white/[0.01] whitespace-nowrap pointer-events-none uppercase select-none tracking-tighter">
        EXECUTIVE
      </h1>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center relative z-10">
        
        {/* Content Column: Perfectly Distributed Spacing */}
        <div className="flex flex-col space-y-12 md:space-y-16 text-center lg:text-left items-center lg:items-start">
          
          {/* 1. THE BADGE */}
          <div className="hero-reveal inline-flex items-center gap-3 px-6 py-3 bg-accentBlue/5 border border-accentBlue/20 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accentBlue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accentBlue"></span>
            </span>
            <span className="text-accentBlue text-xs font-black uppercase tracking-[0.3em]">
              Strategic Sales Leader
            </span>
          </div>

          {/* 2. THE TITANIC HEADLINE */}
          <div className="hero-reveal space-y-6">
            <h1 className="text-7xl md:text-9xl font-black leading-[0.8] tracking-tighter uppercase">
              {DATA.profile.title.split(' ')[0]} <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentBlue to-white">
                {DATA.profile.title.split(' ').slice(1).join(' ')}
              </span>
            </h1>
          </div>

          {/* 3. THE BIO */}
          <p className="hero-reveal text-white/50 text-lg md:text-2xl max-w-2xl leading-relaxed font-medium">
            I am <span className="text-white font-black">{DATA.profile.name}</span>. {DATA.profile.personalStatement}
          </p>

          {/* 4. THE CALL TO ACTIONS */}
          <div className="hero-reveal flex flex-wrap gap-8 justify-center lg:justify-start items-center pt-6">
            <a 
              href="/Farees-CV.pdf" 
              download="Seyed_Ahamed_Farees_CV.pdf"
              ref={buttonRef}
              className="group relative bg-accentBlue text-black px-12 py-6 rounded-[2rem] font-black text-sm uppercase tracking-widest transition-all shadow-[0_30px_60px_rgba(0,210,255,0.25)] active:scale-95 flex items-center gap-4"
            >
              Download CV <Download size={20} strokeWidth={3} />
            </a>
            
            <a href="#experience" className="flex items-center gap-3 text-sm font-black uppercase tracking-widest hover:text-accentBlue transition-all group">
              Explore Roadmap <ChevronRight size={24} className="group-hover:translate-x-2 transition-transform text-accentBlue" />
            </a>
          </div>
        </div>

        {/* 5. THE EXECUTIVE FRAME (Image) */}
        <div className="hero-reveal relative justify-self-center lg:justify-self-end group">
          <div className="w-72 h-[450px] md:w-[500px] md:h-[680px] rounded-[4rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl p-5 -rotate-3 group-hover:rotate-0 group-hover:scale-[1.03] transition-all duration-1000 shadow-[0_50px_100px_rgba(0,0,0,0.5)] overflow-hidden">
            <div className="w-full h-full rounded-[3.2rem] bg-darkBg overflow-hidden relative border border-white/5">
               <img 
                 src={dadImg} 
                 alt={DATA.profile.name} 
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#050a10] via-transparent to-transparent opacity-90 group-hover:opacity-40 transition-opacity"></div>
            </div>
          </div>
          
          {/* Surprise: Ultra-glow behind image */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-accentBlue/10 blur-[150px] rounded-full group-hover:bg-accentBlue/20 transition-all duration-1000"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;