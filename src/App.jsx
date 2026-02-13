import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Expertise from './components/Expertise';
import EducationAwards from './components/EducationAwards';
import Personal from './components/Personal';
import Footer from './components/Footer';
import ContactFloating from './components/ContactFloating';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const cursorRef = useRef(null);

  useEffect(() => {
    // 1. GOAT Feature: Smooth Scroll (Lenis)
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 2. GOAT Feature: Custom Spotlight Cursor
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power3.out"
      });
    };
    window.addEventListener('mousemove', moveCursor);

    // 3. Reveal Animations
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      gsap.fromTo(section, 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, y: 0, duration: 1.2,
          scrollTrigger: { trigger: section, start: "top 80%" }
        }
      );
    });

    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div className="min-h-screen bg-darkBg text-white selection:bg-accentBlue selection:text-black cursor-none">
      
      {/* Surprise: Custom Cursor Component */}
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 border-2 border-accentBlue rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{ transform: 'translate(-50%, -50%)' }}
      ></div>

      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(0,210,255,0.05),transparent_50%)]"></div>
      </div>

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Experience />
        <Expertise />
        <EducationAwards />
        <Personal />
      </main>
      <Footer />
      <div className="md:hidden"><ContactFloating /></div>
    </div>
  );
}

export default App;