import React from 'react';
import { motion } from 'framer-motion';

export default function ProductCard({ product, delay }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className="relative mt-20 sm:mt-24 group flex flex-col h-full"
    >
      {/* Background Card */}
      <div className="atmospheric-box bg-[#1d241d]/30 border border-white/5 rounded-[40px] sm:rounded-[60px] pt-32 sm:pt-40 lg:pt-48 pb-6 sm:pb-8 px-6 sm:px-8 w-full shadow-[0_40px_100px_rgba(0,0,0,0.3)] group-hover:-translate-y-2 group-hover:bg-[#222a22]/40 transition-all duration-500 flex-grow flex flex-col relative z-10 will-change-transform">
        
        {/* Inner Glow Layer */}
        <div className="absolute inset-0 overflow-hidden rounded-[40px] sm:rounded-[60px] pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-tr from-green-500/5 via-transparent to-white/5"></div>
        </div>
        
        {/* Title */}
        <h3 className="text-[18px] sm:text-[22px] font-sans font-medium text-white mb-2 sm:mb-3">
          {product.name}
        </h3>
        
        {/* Description */}
        <p className="text-[12px] sm:text-[13px] text-gray-400 leading-relaxed font-light mb-6 flex-grow">
          {product.desc}
        </p>
        
        {/* Price and Action */}
        <div className="flex justify-between items-end mt-auto">
          <div className="text-[18px] sm:text-[22px] font-sans text-gray-200">
            {product.price}
          </div>
          <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors text-white">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
          </button>
        </div>
      </div>
      
      {/* Plant overlapping the top */}
      <div className="absolute -top-20 sm:-top-28 left-1/2 -translate-x-1/2 w-[75%] sm:w-[85%] drop-shadow-[0_40px_40px_rgba(0,0,0,0.6)] group-hover:-translate-y-6 group-hover:scale-105 transition-all duration-700 pointer-events-none z-20 flex justify-center">
        <img src={product.image} alt={product.name} className="w-full h-auto object-contain max-h-[200px] sm:max-h-[260px] object-bottom" />
      </div>
    </motion.div>
  );
}

