import React from 'react';
import { GraduationCap, Award, Star } from 'lucide-react';
import { DATA } from '../constants';

const EducationAwards = () => {
  return (
    <section id="awards" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
        
        {/* Education Timeline */}
        <div className="space-y-12">
          <div className="flex items-center gap-4 mb-16">
            <div className="p-4 bg-accentBlue/10 rounded-2xl text-accentBlue">
              <GraduationCap size={32} />
            </div>
            <div>
              <h2 className="text-accentBlue font-black tracking-widest text-[10px] uppercase">Academic</h2>
              <h3 className="text-4xl font-black uppercase tracking-tighter">Education</h3>
            </div>
          </div>

          <div className="space-y-12 relative border-l border-white/5 pl-10 ml-4">
            {DATA.education.map((edu, index) => (
              <div key={index} className="relative group">
                {/* Timeline Glow Dot */}
                <div className="absolute -left-[45px] top-2 w-2.5 h-2.5 rounded-full bg-accentBlue shadow-[0_0_15px_#00d2ff] group-hover:scale-150 transition-transform"></div>
                
                <span className="text-accentBlue font-black text-[10px] tracking-[0.2em] uppercase">{edu.year}</span>
                <h4 className="text-xl font-black mt-2 leading-tight uppercase group-hover:text-accentBlue transition-colors">
                  {edu.degree}
                </h4>
                <p className="text-textGray mt-2 text-xs font-bold tracking-wider">{edu.institution}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Awards Grid */}
        <div className="space-y-12">
          <div className="flex items-center gap-4 mb-16">
            <div className="p-4 bg-accentBlue/10 rounded-2xl text-accentBlue">
              <Award size={32} />
            </div>
            <div>
              <h2 className="text-accentBlue font-black tracking-widest text-[10px] uppercase">Merit</h2>
              <h3 className="text-4xl font-black uppercase tracking-tighter">Recognition</h3>
            </div>
          </div>

          <div className="grid gap-6">
            {DATA.certificationsAwards.map((item, index) => (
              <div key={index} className="group relative p-8 bg-cardBg/20 border border-white/5 rounded-[2.5rem] hover:bg-cardBg/50 hover:border-accentBlue/30 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-accentBlue text-black p-2 rounded-xl group-hover:rotate-12 transition-transform">
                    <Star size={18} fill="currentColor" />
                  </div>
                  <span className="text-[10px] font-black text-textGray uppercase tracking-[0.2em]">{item.year}</span>
                </div>
                <h4 className="text-lg font-black uppercase tracking-tight mb-1">{item.title}</h4>
                <p className="text-accentBlue text-[10px] font-black uppercase tracking-widest">{item.provider}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default EducationAwards;