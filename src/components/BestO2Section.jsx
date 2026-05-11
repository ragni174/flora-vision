import React from 'react';
import { motion } from 'framer-motion';

export default function BestO2Section() {
  return (
    <section className="py-16 px-6 sm:px-12 lg:px-20 relative z-10 bg-transparent">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <div className="flex justify-center mb-24 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative inline-block"
          >
            <h2 className="text-4xl font-sans font-bold text-white/90 px-4 py-2 soft-glow-text">
              Our Best o2
            </h2>
            {/* Top Right Bracket */}
            <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-green-500 rounded-tr-lg opacity-70"></div>
            {/* Bottom Left Bracket */}
            <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-green-500 rounded-bl-lg opacity-70"></div>
          </motion.div>
        </div>

        {/* Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative atmospheric-box bg-[#171c17]/30 border border-white/10 rounded-[100px] flex flex-col md:flex-row items-center p-12 md:p-16 shadow-[0_60px_150px_rgba(0,0,0,0.3)] hover:-translate-y-4 transition-all duration-700 group will-change-transform"
        >
          {/* Inner Effects Layer */}
          <div className="absolute inset-0 overflow-hidden rounded-[100px] pointer-events-none">
            {/* Soft Inner Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-green-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>
            
            {/* Atmospheric light leak */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-green-400/5 rounded-full blur-[100px]"></div>
          </div>
          {/* Plant Image breaking out - Properly adjusted */}
          <div className="w-full md:w-1/2 relative flex justify-center md:-ml-32 lg:-ml-40 mt-[-180px] md:mt-0 z-20 pointer-events-none">
            <img 
              src="/assets/desk_plant_1_1778440870559_transparent.png" 
              alt="Premium Plant" 
              className="w-[110%] max-w-[500px] h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)] group-hover:scale-105 transition-transform duration-1000 group-hover:brightness-110 will-change-transform"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-left mt-12 md:mt-0 md:pl-12 z-10">
            <h3 className="text-2xl lg:text-3xl font-sans font-bold text-white mb-8 leading-snug">
              We Have Small And Best O2 Plants Collection's
            </h3>
            
            <p className="text-[15px] text-gray-300 mb-6 leading-relaxed font-light">
              Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.
            </p>
            
            <p className="text-[15px] text-gray-300 mb-10 leading-relaxed font-light">
              Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.
            </p>
            
            <div className="flex items-center justify-between mt-auto">
              <button className="px-10 py-3 rounded-md border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 text-sm font-medium bg-transparent">
                Explore
              </button>
              
              {/* Pagination controls inside card */}
              <div className="flex items-center space-x-6 text-white/70">
                <button className="hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                </button>
                <span className="text-xs font-semibold tracking-widest text-white">01/04</span>
                <button className="hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Global Pagination Dots */}
        <div className="flex justify-center items-center space-x-2 mt-16">
          <div className="w-5 h-1.5 bg-white rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
        </div>

      </div>
    </section>
  );
}
