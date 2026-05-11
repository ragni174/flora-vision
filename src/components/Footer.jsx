import React from 'react';
import { motion } from 'framer-motion';
import FadeUp from './FadeUp';

export default function Footer() {
  return (
    <footer className="relative pt-24 pb-12 px-6 sm:px-12 lg:px-24 z-10 font-sans overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d120d] to-transparent -z-10"></div>

      <div className="max-w-[1400px] mx-auto">
        <FadeUp>
          <div className="atmospheric-box bg-[#1d241d]/20 border border-white/5 rounded-[40px] sm:rounded-[60px] p-8 sm:p-12 lg:p-20 shadow-[0_-20px_100px_rgba(0,0,0,0.3)] grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 lg:gap-20 relative overflow-hidden">

            {/* Inner Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-green-500/5 via-transparent to-white/5 pointer-events-none"></div>

            {/* Left — Brand */}
            <div className="col-span-1 md:col-span-5 flex flex-col justify-between z-10">
              <div>
                <div className="flex items-center space-x-3 mb-6 sm:mb-8">
                  <span className="text-3xl sm:text-4xl filter drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">🪴</span>
                  <span className="text-2xl sm:text-3xl font-bold text-white/90 tracking-tight soft-glow-text">FloraVision.</span>
                </div>
                <p className="text-white/60 font-light max-w-md leading-relaxed text-[14px] sm:text-[16px]">
                  "From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment."
                </p>
              </div>

              <div className="flex space-x-6 sm:space-x-8 mt-10 sm:mt-16 font-bold text-white/40 tracking-wider">
                {['FB', 'TW', 'LI'].map(s => (
                  <motion.a
                    key={s}
                    href="#"
                    whileHover={{ y: -4, color: '#4ade80' }}
                    transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                    className="transition-colors duration-300"
                  >{s}</motion.a>
                ))}
              </div>
            </div>

            {/* Middle — Links */}
            <div className="col-span-1 md:col-span-3 z-10">
              <h4 className="text-white/90 text-base sm:text-lg font-bold mb-6 sm:mb-10 tracking-wide soft-glow-text">Quick Link's</h4>
              <ul className="space-y-4 sm:space-y-6">
                {["Home", "Type's Of plant's", "Contact", "Privacy"].map(link => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 6, color: '#4ade80' }}
                      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                      className="text-white/60 text-[14px] sm:text-[15px] font-light block transition-colors duration-300"
                    >{link}</motion.a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — Newsletter */}
            <div className="col-span-1 md:col-span-4 flex flex-col justify-between z-10">
              <div>
                <h4 className="text-white/90 text-base sm:text-lg font-bold mb-6 sm:mb-10 tracking-wide soft-glow-text">For Every Update.</h4>
                <div className="flex items-center border border-white/10 rounded-2xl overflow-hidden bg-white/5 p-1.5 backdrop-blur-md group hover:border-white/20 transition-all duration-500 shadow-inner">
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="bg-transparent px-4 sm:px-5 py-2.5 sm:py-3 w-full text-white/80 outline-none placeholder:text-white/30 text-[14px] sm:text-[15px] font-light"
                  />
                  <motion.button
                    whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                    className="bg-white/90 text-black px-5 sm:px-8 py-2.5 sm:py-3 rounded-xl font-bold hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-400 text-[12px] sm:text-[13px] tracking-widest shrink-0"
                  >
                    SUBSCRIBE
                  </motion.button>
                </div>
              </div>

              <div className="mt-12 sm:mt-20 text-right md:text-left lg:text-right">
                <p className="text-white/30 text-[12px] sm:text-[14px] font-light tracking-widest">
                  FloraVision &copy; ALL RIGHTS RESERVED
                </p>
              </div>
            </div>

          </div>
        </FadeUp>
      </div>
    </footer>
  );
}
