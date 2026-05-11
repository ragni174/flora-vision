import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrendyPlants from './components/TrendyPlants';
import TopSellingPlants from './components/TopSellingPlants';
import CustomerReview from './components/CustomerReview';
import BestO2Section from './components/BestO2Section';
import Footer from './components/Footer';

function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax transforms
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const fgY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const ghostY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      ref={containerRef} 
      className="min-h-screen bg-[#0f140f] text-white selection:bg-green-500/30 overflow-x-hidden"
    >
      
      {/* Cinematic Background Layer System (BACKGROUND) */}
      <motion.div style={{ y: bgY }} className="fixed inset-0 z-0 overflow-hidden pointer-events-none will-change-transform">
        {/* Base Gradient Glows */}
        <div className="absolute top-0 left-1/4 w-[1200px] h-[1200px] bg-green-950/20 rounded-full blur-[200px] -translate-y-1/2 opacity-70"></div>
        <div className="absolute bottom-0 right-1/4 w-[1200px] h-[1200px] bg-emerald-950/15 rounded-full blur-[220px] translate-y-1/2 opacity-60"></div>
        
        {/* Floating Atmospheric Blobs */}
        <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-green-500/5 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-[30%] left-[5%] w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[130px] animate-pulse" style={{ animationDelay: '2s' }}></div>

        {/* Global Soft Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(15,20,15,0.6)_100%)]"></div>
        
        {/* Far Background "Ghost" Plants (Super Blurred) */}
        <motion.div style={{ y: ghostY }} className="absolute top-1/4 -left-20 w-96 h-96 opacity-10 blur-[60px] rotate-45 will-change-transform">
          <img src="/assets/aglaonema_transparent.png" className="w-full h-full object-contain grayscale" alt="" />
        </motion.div>
        <motion.div style={{ y: ghostY }} className="absolute bottom-1/4 -right-20 w-96 h-96 opacity-10 blur-[80px] -rotate-12 will-change-transform">
          <img src="/assets/top_seller_2_1778441327955_transparent.png" className="w-full h-full object-contain grayscale" alt="" />
        </motion.div>

        {/* Grain/Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </motion.div>

      {/* FOREGROUND LAYER (Above everything) */}
      <motion.div style={{ y: fgY }} className="fixed inset-0 z-[100] pointer-events-none overflow-hidden will-change-transform">
        {/* Large, out-of-focus foreground leaves */}
        <div className="absolute -top-20 -left-20 w-[500px] h-[500px] blur-[30px] opacity-20 rotate-[30deg] scale-150">
          <img src="/assets/aglaonema_transparent.png" className="w-full h-full object-contain" alt="" />
        </div>
        <div className="absolute -bottom-40 -right-20 w-[600px] h-[600px] blur-[40px] opacity-15 -rotate-[20deg] scale-125">
          <img src="/assets/desk_plant_1_1778440870559_transparent.png" className="w-full h-full object-contain" alt="" />
        </div>
      </motion.div>

      <Navbar />
      
      <main className="relative z-10">
        {/* Combined Hero & Trendy Background Section */}
        <div className="relative">
          {/* THE COMBINED IMAGE BACKGROUND */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/assets/hero_trendy_bg.jpg" 
              alt="Background" 
              className="w-full h-full object-cover opacity-60 mix-blend-lighten"
            />
            {/* Deep Cinematic Vignette & Blending Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0f140f] via-transparent to-[#0f140f] opacity-80"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0f140f_100%)] opacity-40"></div>
            
            {/* Soft Bottom Transition for blending into the next section */}
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#0f140f] to-transparent z-20"></div>
          </div>
          
          <div className="relative z-10">
            <Hero />
            <TrendyPlants />
          </div>
        </div>

        <TopSellingPlants />
        <CustomerReview />
        <BestO2Section />
      </main>

      <Footer />
    </motion.div>
  );
}

export default App;
