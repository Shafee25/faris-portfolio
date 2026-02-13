import React from "react";
import { Linkedin, Mail, MapPin, ArrowUpCircle } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-cardBg/30 pt-24 pb-12 px-6 overflow-hidden">
      {/* Visual Background Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-accentBlue/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accentBlue rounded-xl flex items-center justify-center font-black text-black text-xl">
                F
              </div>
              <span className="text-2xl font-black tracking-tighter">
                FAREES
              </span>
            </div>
            <p className="text-textGray text-sm leading-relaxed max-w-xs">
              Over two decades of excellence in strategic sales management and
              territory expansion across Sri Lanka.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">
              Contact Information
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:adsmsfaris@gmail.com"
                className="flex items-center gap-3 text-textGray hover:text-accentBlue transition-colors group"
              >
                <Mail size={18} className="group-hover:scale-110" />
                <span>adsmsfaris@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-textGray">
                <MapPin size={18} className="mt-1" />
                <span className="text-sm">
                  No 31B, OPA Road, Addalaichenai, Ampara.
                </span>
              </div>
            </div>
          </div>

          {/* Socials & Action */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">
              Connect Professionaly
            </h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/ahamed-farees-48706823b/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-accentBlue hover:text-black transition-all"
              >
                <Linkedin size={20} />
              </a>
              <button
                onClick={scrollToTop}
                className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-white hover:text-black transition-all"
              >
                <ArrowUpCircle size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 text-[10px] font-bold text-textGray uppercase tracking-[0.3em]">
          <p>© 2024 Seyed Ahamed Farees. All Rights Reserved.</p>
          <p className="mt-4 md:mt-0">Built for Strategic Impact</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
