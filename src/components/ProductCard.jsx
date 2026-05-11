import React from 'react';
import { motion } from 'framer-motion';
import LazyImage from './LazyImage';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }
  })
};

export default function ProductCard({ product, delay }) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      custom={delay}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -12, transition: { type: 'spring', stiffness: 280, damping: 20 } }}
      className="relative mt-20 sm:mt-24 group flex flex-col h-full cursor-pointer"
    >
      {/* Background Card */}
      <div className="atmospheric-box bg-[#1d241d]/30 border border-white/5 rounded-[40px] sm:rounded-[60px] pt-32 sm:pt-40 lg:pt-48 pb-6 sm:pb-8 px-6 sm:px-8 w-full shadow-[0_40px_100px_rgba(0,0,0,0.3)] group-hover:bg-[#222a22]/40 transition-colors duration-500 flex-grow flex flex-col relative z-10 will-change-transform">

        {/* Inner Glow */}
        <div className="absolute inset-0 overflow-hidden rounded-[40px] sm:rounded-[60px] pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-tr from-green-500/5 via-transparent to-white/5"></div>
          <div className="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/5 transition-colors duration-700 rounded-[40px] sm:rounded-[60px]"></div>
        </div>

        <h3 className="text-[18px] sm:text-[22px] font-sans font-medium text-white mb-2 sm:mb-3 relative z-10">
          {product.name}
        </h3>
        <p className="text-[12px] sm:text-[13px] text-gray-400 leading-relaxed font-light mb-6 flex-grow relative z-10">
          {product.desc}
        </p>

        <div className="flex justify-between items-end mt-auto relative z-10">
          <div className="text-[18px] sm:text-[22px] font-sans text-gray-200">{product.price}</div>
          <motion.button
            whileHover={{ scale: 1.12, backgroundColor: '#fff', color: '#000' }}
            whileTap={{ scale: 0.93 }}
            transition={{ type: 'spring', stiffness: 400, damping: 18 }}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg border border-white/20 flex items-center justify-center text-white"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Plant image — skeleton + lifts on card hover */}
      <div className="absolute -top-20 sm:-top-28 left-1/2 -translate-x-1/2 w-[75%] sm:w-[85%] drop-shadow-[0_40px_40px_rgba(0,0,0,0.6)] group-hover:-translate-y-5 group-hover:scale-105 transition-transform duration-700 pointer-events-none z-20 flex justify-center">
        <LazyImage
          src={product.image}
          alt={product.name}
          className="w-full h-auto object-contain max-h-[200px] sm:max-h-[260px] object-bottom"
          wrapperClassName="w-full flex justify-center"
          skeletonClassName="!rounded-2xl"
        />
      </div>
    </motion.div>
  );
}
