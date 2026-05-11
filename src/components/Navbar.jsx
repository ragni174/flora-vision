import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Plants Types", href: "#", hasDropdown: true },
    { name: "More", href: "#" },
    { name: "Contact", href: "#" }
  ];

  return (
    <>
      <motion.header 
        variants={{
          visible: { y: 0 },
          hidden: { y: -120 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 w-full z-[1000] font-hand py-4 lg:py-8"
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between relative z-10">
          <div className="flex items-center space-x-3 cursor-pointer group">
            <div className="text-2xl sm:text-3xl filter drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform duration-300">
              🪴
            </div>
            <span className="text-xl sm:text-2xl font-bold text-gray-200 tracking-tight">
              FloraVision.
            </span>
          </div>
          
          <nav className="hidden lg:flex space-x-12 text-lg tracking-wider">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-white hover:text-green-400 hover:soft-glow-text hover:scale-105 transition-all duration-300 flex items-center group"
              >
                {link.name}
                {link.hasDropdown && (
                  <svg className="w-3 h-3 ml-2 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7"></path></svg>
                )}
              </a>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4 sm:space-x-8 text-white">
            <button className="hover:text-green-400 transition-colors duration-300">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </button>
            <button className="hover:text-green-400 transition-colors duration-300 relative">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.8)]"></span>
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="hover:text-green-400 transition-colors duration-300 lg:hidden z-50 relative"
            >
              <div className="w-7 h-7 flex flex-col justify-center items-center gap-1.5">
                <motion.span 
                  animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  className="w-full h-0.5 bg-current rounded-full transition-transform"
                />
                <motion.span 
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-full h-0.5 bg-current rounded-full transition-opacity"
                />
                <motion.span 
                  animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  className="w-full h-0.5 bg-current rounded-full transition-transform"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[900] lg:hidden"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-[#0f140f]/95 backdrop-blur-2xl"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu Content */}
            <div className="relative h-full flex flex-col justify-center px-8 sm:px-12">
              <nav className="flex flex-col space-y-8">
                {navLinks.map((link, i) => (
                  <motion.a
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-4xl sm:text-5xl font-hand font-bold text-white hover:text-green-400 transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-20 pt-8 border-t border-white/10"
              >
                <p className="text-gray-400 font-sans text-sm tracking-widest uppercase">Contact Us</p>
                <p className="text-white font-sans text-xl mt-2">hello@floravision.com</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

