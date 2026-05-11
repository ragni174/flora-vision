import React from 'react';
import { motion } from 'framer-motion';
import LazyImage from './LazyImage';
import ParallaxImage from './ParallaxImage';
import FadeUp from './FadeUp';

export default function TrendyPlants() {
  const sections = [
    {
      id: 1,
      title: "For Your Desks Decorations",
      subtitle: "I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!",
      price: "Rs. 599/-",
      imageSrc: "/assets/desk_plant_1_1778440870559_transparent.png",
      lgImageWidth: "lg:w-[500px] xl:w-[650px]",
      reversed: false
    },
    {
      id: 2,
      title: "For Your Desks Decorations",
      subtitle: "The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming",
      price: "Rs. 399/-",
      imageSrc: "/assets/desk_plant_2_1778441135642_transparent.png",
      lgImageWidth: "lg:w-[450px] xl:w-[550px]",
      reversed: true
    }
  ];

  return (
    <section className="py-16 px-6 sm:px-12 lg:px-12 xl:px-20 relative z-10 bg-transparent overflow-hidden">

      <div className="relative z-10 max-w-[1400px] mx-auto">

        {/* Header */}
        <FadeUp className="flex justify-center mb-12 lg:mb-16 relative">
          <div className="relative inline-block">
            <h2 className="text-3xl sm:text-5xl font-sans font-bold text-white/90 px-4 sm:px-8 py-2 soft-glow-text text-center">
              Our Trendy plants
            </h2>
            <div className="absolute -top-3 -left-3 w-8 sm:w-10 h-8 sm:h-10 border-t-[3px] border-l-[3px] border-[#a3c965] rounded-tl-xl opacity-90"></div>
            <div className="absolute -bottom-3 -right-3 w-8 sm:w-10 h-8 sm:h-10 border-b-[3px] border-r-[3px] border-[#a3c965] rounded-br-xl opacity-90"></div>
          </div>
        </FadeUp>

        <div className="flex flex-col gap-8 lg:gap-40 mt-8 lg:mt-20">
          {sections.map((section, i) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full relative"
            >

              {/* ====== MOBILE / TABLET CARD ====== */}
              <motion.div
                whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, damping: 22 } }}
                className="lg:hidden atmospheric-box bg-gradient-to-br from-white/[0.05] via-[#0d120d]/70 to-[#0d120d]/90 border border-white/10 rounded-[32px] sm:rounded-[48px] overflow-hidden group cursor-pointer"
              >
                {/* Plant image — parallax on mobile too (subtle) */}
                <div className="flex justify-center pt-8 pb-2">
                  <ParallaxImage
                    src={section.imageSrc}
                    alt={section.title}
                    strength={0.08}
                    className="max-w-[240px] h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
                    wrapperClassName="w-[52%] sm:w-[42%]"
                    skeletonClassName="!rounded-2xl min-h-[180px]"
                  />
                </div>

                {/* Text */}
                <FadeUp delay={0.1} className="px-6 sm:px-10 pb-8 text-center">
                  <h3 className="text-xl sm:text-2xl font-sans font-bold text-white mb-3 leading-[1.1] tracking-tight">{section.title}</h3>
                  <p className="text-[13px] sm:text-[14px] text-gray-300 mb-5 leading-relaxed font-light max-w-sm mx-auto">{section.subtitle}</p>
                  <div className="text-[26px] sm:text-[30px] font-sans text-white font-medium mb-6 drop-shadow-md">{section.price}</div>
                  <div className="flex items-center justify-center space-x-4">
                    <motion.button
                      whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}
                      className="px-7 py-2.5 rounded-xl border border-white/30 text-white hover:bg-white hover:text-black transition-colors duration-400 text-sm font-semibold tracking-wider"
                    >Explore</motion.button>
                    <motion.button
                      whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}
                      className="w-11 h-11 rounded-xl border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-400 text-white"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                    </motion.button>
                  </div>
                </FadeUp>
              </motion.div>

              {/* ====== DESKTOP CARD — Breakout Design ====== */}
              <motion.div
                whileHover={{ y: -12, transition: { type: 'spring', stiffness: 220, damping: 22 } }}
                className="hidden lg:flex atmospheric-box bg-gradient-to-br from-white/[0.05] via-[#0d120d]/70 to-[#0d120d]/90 border border-white/10 rounded-[60px] xl:rounded-[100px] h-[400px] xl:h-[500px] relative items-center group cursor-pointer will-change-transform"
              >
                {/* Inner Glow */}
                <div className="absolute inset-0 overflow-hidden rounded-[60px] xl:rounded-[100px] pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                  <div className="absolute inset-0 bg-green-500/5 blur-[120px] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>

                {/* Plant Image — Breakout + Parallax */}
                <div className={`absolute -top-32 ${section.reversed ? '-right-8' : '-left-8'} ${section.lgImageWidth} z-20`}>
                  <ParallaxImage
                    src={section.imageSrc}
                    alt={section.title}
                    strength={0.18}
                    className="w-full h-auto object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.7)] group-hover:brightness-110 transition-[filter] duration-700"
                    wrapperClassName="w-full"
                    skeletonClassName="!rounded-3xl min-h-[280px]"
                  />
                  <div className="absolute inset-0 bg-green-500/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-1000 -z-10"></div>
                </div>

                {/* Text Content */}
                <div className={`w-1/2 flex flex-col justify-center px-16 xl:px-24 z-10 ${section.reversed ? 'text-left' : 'ml-auto'}`}>
                  <FadeUp delay={i * 0.1}>
                    <h3 className="text-4xl xl:text-5xl font-sans font-bold text-white mb-6 leading-[1.1] tracking-tight">{section.title}</h3>
                    <p className="text-[15px] text-gray-300 mb-10 leading-relaxed max-w-md font-light">{section.subtitle}</p>
                    <div className="text-[32px] font-sans text-white font-medium mb-12 drop-shadow-md">{section.price}</div>
                    <div className="flex items-center space-x-5">
                      <motion.button
                        whileHover={{ y: -3, boxShadow: '0 0 20px rgba(255,255,255,0.2)' }} whileTap={{ scale: 0.97 }}
                        className="px-10 py-3.5 rounded-xl border border-white/30 text-white hover:bg-white hover:text-black transition-colors duration-400 text-sm font-semibold tracking-wider"
                      >Explore</motion.button>
                      <motion.button
                        whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}
                        className="w-12 h-12 rounded-xl border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-400 text-white"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                      </motion.button>
                    </div>
                  </FadeUp>
                </div>
              </motion.div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
