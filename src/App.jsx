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
import Contact from './components/Contact';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const cursorRef = useRef(null);

  useEffect(() => {
    // Scroll Progress Logic
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const progressBar = document.getElementById("scroll-progress");
      if (progressBar) {
        progressBar.style.width = scrolled + "%";
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // 1. GOAT Feature: Smooth Scroll (Lenis)
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 2. GOAT Feature: Custom Spotlight Cursor
    const moveCursor = (e) => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.5,
          ease: "power3.out"
        });
      }
    };
    window.addEventListener('mousemove', moveCursor);

    // 3. Reveal Animations for Sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      gsap.fromTo(section,
        { opacity: 0, y: 50 },
        {
          opacity: 1, 
          y: 0, 
          duration: 1.2,
          scrollTrigger: { 
            trigger: section, 
            start: "top 85%",
            toggleActions: "play none none reverse" 
          }
        }
      );
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* GOAT Surprise: Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] z-[120] bg-white/5">
        <div 
          className="h-full bg-accentBlue shadow-[0_0_15px_#00d2ff] transition-all duration-150"
          id="scroll-progress"
          style={{ width: '0%' }}
        ></div>
      </div>

      <div className="min-h-screen bg-darkBg text-white selection:bg-accentBlue selection:text-black cursor-none overflow-x-hidden">
        
        {/* Custom Spotlight Cursor (Hidden on mobile) */}
        <div 
          ref={cursorRef}
          className="fixed top-0 left-0 w-8 h-8 border-2 border-accentBlue rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
          style={{ transform: 'translate(-50%, -50%)' }}
        ></div>

        {/* Global Ambient Background Glow */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,210,255,0.03),transparent_80%)]"></div>
        </div>

        <Navbar />
        
        <main className="relative z-10">
          <Hero />
          <Experience />
          <Expertise />
          <EducationAwards />
          <Personal />
          <Contact />
        </main>

        <Footer />
        
        {/* Floating Mobile Contact (Shown only on small screens) */}
        <div className="md:hidden">
          <ContactFloating />
        </div>
      </div>
    </>
  );
}

export default App;