import React from 'react';
import { motion } from 'framer-motion';
import LazyImage from './LazyImage';
import ParallaxImage from './ParallaxImage';
import FadeUp from './FadeUp';

export default function Hero() {
  return (
    <section className="relative pt-32 sm:pt-40 pb-16 px-6 sm:px-12 lg:px-12 xl:px-20 flex items-center overflow-hidden bg-transparent font-sans">

      <div className="max-w-[1400px] mx-auto w-full relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">

        {/* Left Content */}
        <div className="relative z-20 w-full lg:w-1/2 flex flex-col pointer-events-none text-center lg:text-left items-center lg:items-start">

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl lg:text-[70px] xl:text-[90px] font-bold leading-[1.1] tracking-tight text-white/90 soft-glow-text"
          >
            Earth's Exhale
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-[14px] sm:text-[15px] text-white/70 font-light max-w-[420px] leading-[1.6]"
          >
            "Earth Exhale" symbolizes the purity and vitality of the Earth's natural
            environment and its essential role in sustaining life.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 mt-10 pointer-events-auto"
          >
            <motion.button
              whileHover={{ y: -3, boxShadow: '0 0 40px rgba(255,255,255,0.25)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              className="px-6 sm:px-8 py-3 rounded-xl border border-white/40 text-white bg-transparent hover:bg-white hover:text-black transition-colors duration-400 text-[14px] sm:text-[15px] font-normal"
            >
              Buy Now
            </motion.button>

            <button className="flex items-center space-x-3 group">
              <motion.div
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/40 flex items-center justify-center bg-transparent group-hover:bg-white group-hover:text-black group-hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-colors duration-400 text-white"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </motion.div>
              <span className="text-[14px] sm:text-[15px] text-gray-300 group-hover:text-white transition-colors">Live Demo..</span>
            </button>
          </motion.div>

          {/* Testimonial card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.65, ease: 'easeOut' }}
            whileHover={{ y: -6, backgroundColor: 'rgba(255,255,255,0.08)' }}
            className="hidden md:block mt-16 lg:mt-24 backdrop-blur-3xl bg-white/5 border border-white/10 p-6 rounded-[32px] w-[300px] xl:w-[340px] shadow-[0_40px_100px_rgba(0,0,0,0.4)] transition-colors duration-500 pointer-events-auto group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-green-500/5 via-transparent to-white/5 pointer-events-none"></div>
            <div className="relative z-10 text-left">
              <div className="flex items-center space-x-4 mb-5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex items-center justify-center shadow-inner shrink-0 border border-white/10">
                  <LazyImage src="https://i.pravatar.cc/150?img=5" alt="Ronnie Hamill" className="w-full h-full object-cover" skeletonClassName="!rounded-full" />
                </div>
                <div>
                  <h4 className="text-gray-200 text-[14px] sm:text-[15px] font-medium tracking-wide">Ronnie Hamill</h4>
                  <div className="flex text-yellow-400 text-xs mt-1 drop-shadow-[0_0_8px_rgba(250,204,21,0.6)]">★★★★★</div>
                </div>
              </div>
              <p className="text-[12px] sm:text-[13px] text-gray-300 leading-relaxed font-light">
                I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Product Card */}
        <div className="relative z-30 mt-12 sm:mt-20 lg:mt-0 w-full lg:w-1/2 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.4, ease: 'easeOut' }}
            whileHover={{ y: -14, transition: { type: 'spring', stiffness: 260, damping: 22 } }}
            className="atmospheric-box bg-[#1d241d]/30 border border-white/10 w-full max-w-[340px] xl:max-w-[380px] h-[400px] sm:h-[440px] xl:h-[480px] rounded-[40px] sm:rounded-[48px] p-6 xl:p-8 flex flex-col justify-end shadow-[0_60px_120px_rgba(0,0,0,0.5)] hover:bg-[#1d241d]/50 transition-colors duration-700 pointer-events-auto group relative"
          >
            <div className="absolute inset-0 overflow-hidden rounded-[40px] sm:rounded-[48px] pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-green-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-green-400/10 rounded-full blur-[80px]"></div>
            </div>

            {/* Plant image — parallax drift on scroll */}
            <div className="absolute -top-16 sm:-top-20 left-1/2 -translate-x-1/2 w-[240px] sm:w-[280px] xl:w-[320px] pointer-events-none z-20">
              <ParallaxImage
                src="/assets/aglaonema_transparent.png"
                alt="Aglaonema Plant"
                strength={0.12}
                className="w-full h-auto object-bottom drop-shadow-[0_30px_50px_rgba(0,0,0,0.7)] filter brightness-110 contrast-105 group-hover:scale-105 transition-transform duration-700"
                wrapperClassName="w-full"
                skeletonClassName="!rounded-2xl min-h-[200px]"
              />
              <div className="absolute inset-0 bg-green-500/20 blur-[60px] opacity-0 group-hover:opacity-40 transition-opacity duration-1000 -z-10"></div>
            </div>

            <div className="mt-auto">
              <p className="text-[12px] sm:text-[13px] text-gray-300 mb-1 font-light">Indoor Plant</p>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl sm:text-3xl font-sans text-gray-200">Aglaonema plant</h3>
                <svg className="w-5 h-5 text-gray-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </div>

              <motion.button
                whileHover={{ y: -2, backgroundColor: 'rgba(255,255,255,1)', color: '#000' }}
                whileTap={{ scale: 0.97 }}
                className="w-max px-8 sm:px-10 py-2.5 sm:py-3 rounded-xl border border-white/30 text-gray-200 bg-transparent transition-colors duration-400 text-[14px] sm:text-[15px] font-normal mb-6 sm:mb-8"
              >
                Buy Now
              </motion.button>

              <div className="flex justify-center items-center space-x-1.5">
                <div className="w-4 h-1.5 bg-white rounded-full shadow-[0_0_12px_rgba(255,255,255,0.8)]"></div>
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating midground decorations */}
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-[5%] sm:left-[10%] w-16 sm:w-24 h-16 sm:h-24 blur-[2px] opacity-20 pointer-events-none z-10"
        >
          <img src="/assets/aglaonema_transparent.png" className="w-full h-full object-contain" alt="" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 30, 0], x: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-1/4 right-[2%] sm:right-[5%] w-20 sm:w-32 h-20 sm:h-32 blur-[4px] opacity-15 pointer-events-none z-10 rotate-45"
        >
          <img src="/assets/top_seller_2_1778441327955_transparent.png" className="w-full h-full object-contain" alt="" />
        </motion.div>
      </div>
    </section>
  );
}
