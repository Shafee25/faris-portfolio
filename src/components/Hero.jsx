import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MousePointer2, Download, ChevronRight } from 'lucide-react';

const Hero = () => {
  const buttonRef = useRef(null);

  // Magnetic Button Effect
  useEffect(() => {
    const btn = buttonRef.current;
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
    <section className="relative min-h-screen flex items-center pt-20 px-6 md:px-20 overflow-hidden">
      {/* Background Text Shadow */}
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.02] whitespace-nowrap pointer-events-none uppercase">
        Executive Manager
      </h1>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accentBlue/10 border border-accentBlue/20 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accentBlue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accentBlue"></span>
            </span>
            <span className="text-accentBlue text-xs font-bold uppercase tracking-widest">Available for Strategic Roles</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black leading-tight tracking-tighter">
            DRIVING <br /> 
            <span className="text-accentBlue">GROWTH</span> THROUGH <br />
            STRATEGY.
          </h1>

          <p className="text-textGray text-lg md:text-xl max-w-lg leading-relaxed">
            I am <span className="text-white font-bold">Seyed Ahamed Farees</span>, an Area Sales Manager with 22 years of record-breaking success in the telecommunications industry.
          </p>

          <div className="flex flex-wrap gap-6 items-center">
            <button 
              ref={buttonRef}
              className="group relative bg-accentBlue text-black px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-[0_20px_40px_rgba(0,210,255,0.2)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Download CV <Download size={18} />
              </span>
            </button>
            
            <a href="#experience" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-accentBlue transition-colors group">
              View Roadmap <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* The Frame for the Image */}
        <div className="relative justify-self-center lg:justify-self-end">
          <div className="w-80 h-[450px] md:w-[450px] md:h-[600px] rounded-[3rem] border-2 border-white/5 bg-cardBg/50 backdrop-blur-3xl p-4 rotate-3 hover:rotate-0 transition-all duration-700">
            <div className="w-full h-full rounded-[2.5rem] bg-darkBg flex items-center justify-center overflow-hidden border border-white/10">
               {/* Placeholder for Photo */}
               <div className="text-white/5 font-black text-9xl">SF</div>
            </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accentBlue/5 blur-[100px] rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;