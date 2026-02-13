import React from 'react';
import { 
  TrendingUp, Users, Target, MapPin, 
  Award, Briefcase, GraduationCap, Mail,
  Phone, User
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#050a10] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#050a10]/90 backdrop-blur-md border-b border-white/5 px-6 md:px-20 py-5 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#00d2ff] rounded-lg flex items-center justify-center font-bold text-black text-xl">F</div>
          <span className="text-xl font-bold tracking-tighter uppercase">Farees</span>
        </div>
        <button className="bg-[#00d2ff] text-black px-6 py-2 rounded-full font-bold text-sm">
          HIRE ME
        </button>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 md:px-20 lg:px-40 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <h2 className="text-[#00d2ff] font-bold tracking-widest text-sm uppercase">Professional Portfolio</h2>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            I'm Area Manager <br />
            <span className="text-[#00d2ff]">Seyed Ahamed Farees</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            A target-oriented leader with 22 years of experience in Sales & Marketing. 
            Currently driving profitability at Dialog Axiata.
          </p>
        </div>

        <div className="flex-1 relative">
          <div className="w-72 h-72 md:w-[400px] md:h-[500px] bg-[#0a1622] border border-white/10 rounded-[2rem] flex items-center justify-center">
             <User size={100} className="text-gray-600" />
          </div>
        </div>
      </section>

      {/* 4. Managerial Expertise (The "Services" equivalent) */}
      <section id="services" className="py-20 px-6 md:px-20 lg:px-40">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="fade-in">
            <h2 className="text-accentBlue font-bold tracking-widest text-sm uppercase mb-2">Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-bold">Key Responsibilities</h3>
          </div>
          <p className="text-textGray max-w-md fade-in">
            Specialized in driving telecommunications growth through strategic territory management and team leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              title: "Territory Management", 
              desc: "Managing distribution networks and retail channels in Ampara, Batticaloa, and Trincomalee.",
              icon: <MapPin className="text-accentBlue" size={32} />
            },
            { 
              title: "Team Leadership", 
              desc: "Conducting appraisals, one-to-ones, and mentoring teams to achieve revenue targets.",
              icon: <Users className="text-accentBlue" size={32} />
            },
            { 
              title: "P&L Ownership", 
              desc: "Full ownership of Profit & Loss to achieve revenue growth and gross profit streams.",
              icon: <TrendingUp className="text-accentBlue" size={32} />
            },
            { 
              title: "Sales Strategy", 
              desc: "Developing sales budgets and executing strategies to increase market share.",
              icon: <Target className="text-accentBlue" size={32} />
            }
          ].map((item, index) => (
            <div key={index} className="fade-in p-8 bg-cardBg border border-white/5 rounded-3xl hover:border-accentBlue/50 transition-all group">
              <div className="mb-6 p-4 bg-darkBg w-fit rounded-2xl group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{item.title}</h4>
              <p className="text-textGray text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Education & Skills (The split section) */}
      <section id="skills" className="py-20 px-6 md:px-20 lg:px-40 bg-white/5 rounded-[3rem] mx-4 md:mx-10 lg:mx-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Education Side */}
          <div className="fade-in">
            <h3 className="text-3xl font-bold mb-10 flex items-center gap-4">
              <GraduationCap className="text-accentBlue" /> My Education
            </h3>
            <div className="space-y-10">
              {[
                { year: "2018 - 2019", degree: "National Diploma in Sales Management", inst: "SLIM, Sri Lanka" },
                { year: "2016", degree: "Diploma in Marketing", inst: "Indian Institute" },
                { year: "2001", degree: "Diploma in Microsoft Office", inst: "Islahathul Islam" }
              ].map((edu, i) => (
                <div key={i} className="relative pl-8 border-l border-accentBlue/30">
                  <div className="absolute w-3 h-3 bg-accentBlue rounded-full -left-[6.5px] top-1 shadow-[0_0_10px_#00d2ff]"></div>
                  <span className="text-accentBlue text-sm font-bold">{edu.year}</span>
                  <h4 className="text-xl font-bold mt-1">{edu.degree}</h4>
                  <p className="text-textGray text-sm">{edu.inst}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Side (Progress Bars) */}
          <div className="fade-in">
            <h3 className="text-3xl font-bold mb-10 flex items-center gap-4">
              <Award className="text-accentBlue" /> Professional Skills
            </h3>
            <div className="space-y-6">
              {[
                { skill: "Territory Management", level: "95%" },
                { skill: "Team Leadership", level: "90%" },
                { skill: "FMCG / Telecom Knowledge", level: "98%" },
                { skill: "Sales Strategy & Marketing", level: "92%" },
                { skill: "Decision Making", level: "85%" }
              ].map((s, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-2 text-sm font-medium">
                    <span>{s.skill}</span>
                    <span className="text-accentBlue">{s.level}</span>
                  </div>
                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-accentBlue rounded-full transition-all duration-1000" 
                      style={{ width: s.level }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default App;