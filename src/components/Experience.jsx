import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { DATA } from '../constants';

const Experience = () => {
  return (
    <section id="experience" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-24 text-center">
        <h2 className="text-accentBlue font-black tracking-[0.4em] uppercase text-xs mb-4">Professional Roadmap</h2>
        <h3 className="text-5xl md:text-7xl font-black">CAREER JOURNEY</h3>
      </div>

      <div className="space-y-20 relative">
        {/* Central vertical line for desktop */}
        <div className="absolute left-8 md:left-1/2 top-0 w-[1px] h-full bg-white/5 md:-translate-x-1/2"></div>

        {DATA.experience.map((job, index) => (
          <div key={index} className={`relative flex flex-col md:flex-row items-start gap-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
            
            {/* Timeline Circle */}
            <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-accentBlue border-4 border-darkBg z-10 md:-translate-x-1/2 shadow-[0_0_15px_#00d2ff]"></div>

            <div className="w-full md:w-[45%] group">
              <div className="bg-cardBg/30 border border-white/5 p-8 md:p-10 rounded-[3rem] hover:bg-cardBg/60 hover:border-accentBlue/30 transition-all duration-500">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3 text-accentBlue">
                    <Briefcase size={20} />
                    <span className="font-black uppercase tracking-widest text-[10px]">{job.company}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
                    <Calendar size={14} className="text-textGray" />
                    <span className="text-[10px] font-bold text-textGray uppercase">{job.period}</span>
                  </div>
                </div>
                
                <h4 className="text-2xl md:text-3xl font-black mb-4 uppercase tracking-tighter">{job.role}</h4>
                <div className="flex items-center gap-2 text-textGray text-xs mb-6 italic">
                  <MapPin size={14} /> {job.location}
                </div>
                
                <p className="text-textGray text-sm md:text-base leading-relaxed mb-8">{job.desc}</p>
                
                <div className="flex flex-col gap-3">
                  {job.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-accentBlue mt-1 flex-shrink-0" />
                      <span className="text-xs font-medium text-white/80">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="hidden md:block w-[45%]"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;