import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Expertise from './components/Expertise';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Reveal animation for all sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      gsap.fromTo(section, 
        { opacity: 0, y: 100 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.5, 
          ease: "expo.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          }
        }
      );
    });
  }, []);

  return (
    <div className="min-h-screen bg-darkBg text-white selection:bg-accentBlue selection:text-black scroll-smooth">
      {/* Dynamic Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,210,255,0.03),transparent_50%)]"></div>
      </div>

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Experience />
        <Expertise />
      </main>

      <footer className="py-20 border-t border-white/5 text-center text-textGray text-sm">
        <p>© 2024 S.A. Farees Portfolio • Senior Area Sales Manager</p>
      </footer>
    </div>
  );
}

export default App;