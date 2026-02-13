import React from 'react';
import { Palmtree, Trophy, Languages, Globe2, Heart } from 'lucide-react';

const Personal = () => {
  const languages = [
    { name: "Tamil", level: "Native", icon: <Globe2 size={18} /> },
    { name: "English", level: "Fluent", icon: <Globe2 size={18} /> },
    { name: "Sinhala", level: "Advanced", icon: <Globe2 size={18} /> }
  ];

  const interests = [
    { name: "Cricket", icon: <Trophy size={24} />, desc: "Competitive play & team strategy" },
    { name: "Wildlife Safari", icon: <Palmtree size={24} />, desc: "Exploring nature & photography" }
  ];

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Languages Section */}
        <div>
          <h2 className="text-accentBlue font-black tracking-[0.3em] uppercase text-xs mb-4">Communication</h2>
          <h3 className="text-4xl font-bold mb-10 flex items-center gap-3">
            <Languages className="text-accentBlue" /> Languages
          </h3>
          <div className="space-y-4">
            {languages.map((lang, i) => (
              <div key={i} className="flex items-center justify-between p-6 bg-cardBg/20 border border-white/5 rounded-2xl hover:border-accentBlue/20 transition-all group">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-accentBlue/10 rounded-lg text-accentBlue group-hover:bg-accentBlue group-hover:text-black transition-all">
                    {lang.icon}
                  </div>
                  <span className="text-xl font-bold">{lang.name}</span>
                </div>
                <span className="text-sm font-black uppercase tracking-widest text-textGray bg-white/5 px-4 py-1 rounded-full">
                  {lang.level}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Interests Section */}
        <div>
          <h2 className="text-accentBlue font-black tracking-[0.3em] uppercase text-xs mb-4">Lifestyle</h2>
          <h3 className="text-4xl font-bold mb-10 flex items-center gap-3">
            <Heart className="text-accentBlue" /> Interests
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {interests.map((item, i) => (
              <div key={i} className="p-8 bg-cardBg/30 border border-white/5 rounded-[2.5rem] hover:scale-105 transition-all">
                <div className="text-accentBlue mb-4">{item.icon}</div>
                <h4 className="text-xl font-bold mb-2">{item.name}</h4>
                <p className="text-textGray text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Personal;