import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-[100] px-6 py-6 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-cardBg/40 backdrop-blur-xl border border-white/10 px-8 py-4 rounded-full shadow-2xl">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-accentBlue rounded-xl flex items-center justify-center font-black text-black text-xl shadow-[0_0_20px_rgba(0,210,255,0.3)] group-hover:rotate-12 transition-transform">
            F
          </div>
          <span className="text-xl font-black tracking-tighter text-white">
            AHAMED FAREES
          </span>
        </div>

        <div className="hidden md:flex gap-10 text-xs font-bold uppercase tracking-[0.2em] text-textGray">
          {["About", "Experience", "Expertise", "Awards", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={item === "About" ? "#hero" : `#${item.toLowerCase()}`}
                className="hover:text-accentBlue transition-all relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accentBlue transition-all group-hover:w-full"></span>
              </a>
            ),
          )}
        </div>

        <button className="bg-white text-black px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-accentBlue hover:scale-105 transition-all shadow-lg">
          Let's Talk
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
