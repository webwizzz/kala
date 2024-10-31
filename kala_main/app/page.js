"use client";

import React, { useEffect, useRef } from 'react'
import About from './components/About'
import Eyes from './components/Eyes'
import Features from './components/Features'
import Footer from './components/Footer'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import Navbar from './components/Navbar'
import LocomotiveScroll from 'locomotive-scroll';

function Page() {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const locomotiveScroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });

      return () => {
        locomotiveScroll.destroy(); // Clean up on component unmount
      };
    }
  }, []);

  return (
    <div ref={scrollRef} className="w-full min-h-screen bg-[#f5e9da]">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Features />
      <Footer />
    </div>
  );
}

export default Page;
