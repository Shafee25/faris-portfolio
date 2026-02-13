import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const jobs = [
    {
      company: "Dialog Axiata",
      role: "Area Sales Manager",
      period: "2024 June - Present",
      desc: "Overseeing Airtel Business Kalmunai Territory. Monitoring zone performance and motivating Team Managers in the East Zone.",
      highlights: ["Managed overall zone performance", "Leadership of TMs in East Zone"]
    },
    {
      company: "Bharti Airtel PVT Ltd",
      role: "Area Sales Manager",
      period: "2021 Dec - 2024 June",
      desc: "Appointed as Ampara and Batticaloa district ASM. Full ownership of P&L to achieve revenue growth.",
      highlights: ["Number one District Manager 2023", "Promoted to Sales Manager 2024"]
    },
    {
      company: "Hutchison Lanka",
      role: "Area Sales Manager",
      period: "2014 Jan - 2021 Nov",
      desc: "Managed distribution networks. Developed business from 7 million up to 14 million within two years.",
      highlights: ["100% Revenue Growth in 2 years", "Restructured distribution network"]
    }
  ];

  return (
    <section id="experience" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-20 text-center">
        <h2 className="text-accentBlue font-black tracking-[0.3em] uppercase text-sm mb-4">Professional Roadmap</h2>
        <h3 className="text-5xl md:text-7xl font-bold">Career Journey</h3>
      </div>

      <div className="space-y-12">
        {jobs.map((job, index) => (
          <div key={index} className="group relative bg-cardBg/30 border border-white/5 p-8 md:p-12 rounded-[3rem] hover:bg-cardBg/50 transition-all">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div>
                <div className="flex items-center gap-3 text-accentBlue mb-2">
                  <Briefcase size={20} />
                  <span className="font-bold uppercase tracking-widest text-sm">{job.company}</span>
                </div>
                <h4 className="text-3xl md:text-4xl font-bold">{job.role}</h4>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 w-fit">
                <Calendar size={16} className="text-textGray" />
                <span className="text-sm font-medium text-textGray">{job.period}</span>
              </div>
            </div>
            
            <p className="text-textGray text-lg max-w-3xl mb-8 leading-relaxed">{job.desc}</p>
            
            <div className="flex flex-wrap gap-3">
              {job.highlights.map((h, i) => (
                <span key={i} className="bg-accentBlue/10 text-accentBlue border border-accentBlue/20 px-4 py-1.5 rounded-lg text-sm font-bold">
                  ✓ {h}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;