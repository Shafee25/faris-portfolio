import React from 'react';
import { Target, TrendingUp, Users, MapPin } from 'lucide-react';

const Expertise = () => {
  const skills = [
    {
      title: "Strategic Territory Management",
      icon: <MapPin size={40} />,
      desc: "Expertise in managing complex distribution networks across Ampara, Batticaloa, and Trincomalee districts."
    },
    {
      title: "Revenue & P&L Ownership",
      icon: <TrendingUp size={40} />,
      desc: "Full ownership of P&L to achieve consistent revenue growth and gross profit streams."
    },
    {
      title: "Leadership & Mentoring",
      icon: <Users size={40} />,
      desc: "Leading teams through appraisals, one-to-ones, and high-performance training programs."
    },
    {
      title: "Market Development",
      icon: <Target size={40} />,
      desc: "Devising innovative strategies for market share expansion and retail channel optimization."
    }
  ];

  return (
    <section id="expertise" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-accentBlue font-black tracking-[0.3em] uppercase text-sm mb-4">Core Expertise</h2>
          <h3 className="text-5xl md:text-6xl font-bold leading-tight text-white">
            Managerial <br /> Prowess.
          </h3>
        </div>
        <p className="text-textGray text-lg border-l border-accentBlue/20 pl-8">
          Leveraging two decades of experience to navigate the hardest markets and transform them into profit centers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="group relative overflow-hidden bg-cardBg/30 border border-white/5 p-10 rounded-[3rem] hover:bg-cardBg/60 transition-all"
          >
            {/* Hover Glow Effect */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-accentBlue/10 blur-[60px] group-hover:bg-accentBlue/20 transition-all rounded-full"></div>
            
            <div className="relative z-10">
              <div className="text-accentBlue mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform inline-block">
                {skill.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4">{skill.title}</h4>
              <p className="text-textGray leading-relaxed">{skill.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;