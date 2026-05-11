import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header 
      variants={{
        visible: { y: 0 },
        hidden: { y: -120 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-[1000] font-hand py-6 lg:py-8"
    >
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12 flex items-center justify-between relative z-10">
        <div className="flex items-center space-x-3 cursor-pointer group">
          <div className="text-3xl filter drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform duration-300">
            🪴
          </div>
          <span className="text-2xl font-bold text-gray-200 tracking-tight">
            FloraVision.
          </span>
        </div>
        
        <nav className="hidden lg:flex space-x-12 text-lg tracking-wider">
          <a href="#" className="text-white hover:text-green-400 hover:soft-glow-text hover:scale-105 transition-all duration-300">Home</a>
          <a href="#" className="text-white hover:text-green-400 hover:soft-glow-text hover:scale-105 transition-all duration-300 flex items-center group">
            Plants Types 
            <svg className="w-3 h-3 ml-2 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7"></path></svg>
          </a>
          <a href="#" className="text-white hover:text-green-400 hover:soft-glow-text hover:scale-105 transition-all duration-300">More</a>
          <a href="#" className="text-white hover:text-green-400 hover:soft-glow-text hover:scale-105 transition-all duration-300">Contact</a>
        </nav>
        
        <div className="flex items-center space-x-8 text-white">
          <button className="hover:text-green-400 transition-colors duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </button>
          <button className="hover:text-green-400 transition-colors duration-300 relative">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.8)]"></span>
          </button>
          <button className="hover:text-green-400 transition-colors duration-300 lg:hidden">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </div>
    </motion.header>
  );
}
