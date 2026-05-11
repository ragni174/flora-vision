import React from 'react';
import { motion } from 'framer-motion';

export default function TrendyPlants() {
  const sections = [
    {
      id: 1,
      title: "For Your Desks Decorations",
      subtitle: "I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!",
      price: "Rs. 599/-",
      imageSrc: "/assets/desk_plant_1_1778440870559_transparent.png",
      imageWidth: "w-[450px] lg:w-[500px] xl:w-[650px]",
      reversed: false
    },
    {
      id: 2,
      title: "For Your Desks Decorations",
      subtitle: "The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming",
      price: "Rs. 399/-",
      imageSrc: "/assets/desk_plant_2_1778441135642_transparent.png",
      imageWidth: "w-[350px] lg:w-[450px] xl:w-[550px]",
      reversed: true
    }
  ];

  return (
    <section className="py-16 px-6 sm:px-12 lg:px-12 xl:px-20 relative z-10 bg-transparent overflow-hidden">



      <div className="relative z-10 max-w-[1400px] mx-auto">

        {/* Header */}
        <div className="flex justify-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative inline-block"
          >
            <h2 className="text-5xl font-sans font-bold text-white/90 px-8 py-2 soft-glow-text">
              Our Trendy plants
            </h2>
            {/* Top Left Bracket */}
            <div className="absolute -top-3 -left-3 w-10 h-10 border-t-[3px] border-l-[3px] border-[#a3c965] rounded-tl-xl opacity-90"></div>
            {/* Bottom Right Bracket */}
            <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-[3px] border-r-[3px] border-[#a3c965] rounded-br-xl opacity-90"></div>
          </motion.div>
        </div>

        <div className="flex flex-col gap-24 xl:gap-32">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full relative"
            >
              <div className={`atmospheric-box bg-gradient-to-br from-white/[0.05] via-[#0d120d]/70 to-[#0d120d]/90 border border-white/10 rounded-[60px] xl:rounded-[100px] h-[400px] xl:h-[500px] relative flex items-center group hover:-translate-y-4 transition-all duration-700 will-change-transform`}>
                
                {/* Inner Effects Container (to keep glows contained but allow plant to pop out) */}
                <div className="absolute inset-0 overflow-hidden rounded-[60px] xl:rounded-[100px] pointer-events-none">
                  {/* Premium Inner Glow */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

                  {/* Inner ambient glow for the card */}
                  <div className="absolute inset-0 bg-green-500/5 blur-[120px] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>

                  {/* Light leak effect */}
                  <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-green-400/5 rounded-full blur-[80px]"></div>
                </div>

                {/* Plant Image - Massive, breaking out completely */}
                <div className={`absolute -top-32 ${section.reversed ? '-right-4 lg:-right-8' : '-left-4 lg:-left-8'} ${section.imageWidth} drop-shadow-[0_30px_50px_rgba(0,0,0,0.7)] z-20 group-hover:scale-105 transition-transform duration-1000 group-hover:brightness-110`}>
                  <img src={section.imageSrc} alt={section.title} className="w-full h-auto object-contain" />
                  {/* Subtle Glow behind image */}
                  <div className="absolute inset-0 bg-green-500/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-1000 -z-10"></div>
                </div>

                {/* Text Content */}
                <div className={`w-1/2 flex flex-col justify-center px-8 lg:px-16 xl:px-24 z-10 ${section.reversed ? 'text-left' : 'ml-auto'}`}>
                  <h3 className="text-3xl lg:text-4xl xl:text-5xl font-sans font-bold text-white mb-4 xl:mb-6 leading-[1.1] tracking-tight">
                    {section.title}
                  </h3>
                  <p className="text-[15px] text-gray-300 mb-10 leading-relaxed max-w-md font-light">
                    {section.subtitle}
                  </p>
                  <div className="text-[32px] font-sans text-white font-medium mb-12 drop-shadow-md">
                    {section.price}
                  </div>
                  <div className="flex items-center space-x-5">
                    <button className="px-10 py-3.5 rounded-xl border border-white/30 text-white hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-500 text-sm font-semibold tracking-wider">
                      Explore
                    </button>
                    <button className="w-12 h-12 rounded-xl border border-white/30 flex items-center justify-center hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-500 text-white">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Midground Elements */}
        <motion.div 
          animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-[15%] w-20 h-20 blur-[3px] opacity-10 pointer-events-none z-10 -rotate-12"
        >
          <img src="/assets/desk_plant_2_1778441135642_transparent.png" className="w-full h-full object-contain" alt="" />
        </motion.div>

      </div>
    </section>
  );
}
