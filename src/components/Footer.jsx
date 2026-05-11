import React from 'react';

export default function Footer() {
  return (
    <footer className="relative pt-24 pb-12 px-6 sm:px-12 lg:px-24 z-10 font-sans overflow-hidden">
      {/* Footer Ambient Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d120d] to-transparent -z-10"></div>
      
      <div className="max-w-[1400px] mx-auto">
        <div className="atmospheric-box bg-[#1d241d]/20 border border-white/5 rounded-[60px] p-12 lg:p-20 shadow-[0_-20px_100px_rgba(0,0,0,0.3)] grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 relative overflow-hidden">
          
          {/* Inner Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-green-500/5 via-transparent to-white/5 pointer-events-none"></div>

          {/* Left Column - Branding and Socials */}
          <div className="col-span-1 md:col-span-5 flex flex-col justify-between z-10">
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <span className="text-4xl filter drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">🪴</span>
                <span className="text-3xl font-bold text-white/90 tracking-tight soft-glow-text">
                  FloraVision.
                </span>
              </div>
              <p className="text-white/60 font-light max-w-md leading-relaxed text-[16px]">
                "From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment."
              </p>
            </div>
            
            <div className="flex space-x-8 mt-16 font-bold text-white/40 tracking-wider">
               <a href="#" className="hover:text-green-400 hover:soft-glow-text transition-all duration-300">FB</a>
               <a href="#" className="hover:text-green-400 hover:soft-glow-text transition-all duration-300">TW</a>
               <a href="#" className="hover:text-green-400 hover:soft-glow-text transition-all duration-300">LI</a>
            </div>
          </div>
          
          {/* Middle Column - Quick Links */}
          <div className="col-span-1 md:col-span-3 lg:col-span-3 z-10">
            <h4 className="text-white/90 text-lg font-bold mb-10 tracking-wide soft-glow-text">Quick Link's</h4>
            <ul className="space-y-6">
              {['Home', 'Type\'s Of plant\'s', 'Contact', 'Privacy'].map(link => (
                <li key={link}>
                  <a href="#" className="text-white/60 hover:text-green-400 hover:soft-glow-text transition-all duration-300 text-[15px] font-light">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Newsletter */}
          <div className="col-span-1 md:col-span-4 lg:col-span-4 flex flex-col justify-between z-10">
            <div>
              <h4 className="text-white/90 text-lg font-bold mb-10 tracking-wide soft-glow-text">For Every Update.</h4>
              <div className="flex items-center border border-white/10 rounded-2xl overflow-hidden bg-white/5 p-1.5 backdrop-blur-md group hover:border-white/20 transition-all duration-500 shadow-inner">
                <input 
                  type="email" 
                  placeholder="Enter Email" 
                  className="bg-transparent px-5 py-3 w-full text-white/80 outline-none placeholder:text-white/30 text-[15px] font-light" 
                />
                <button className="bg-white/90 text-black px-8 py-3 rounded-xl font-bold hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-500 text-[13px] tracking-widest">
                  SUBSCRIBE
                </button>
              </div>
            </div>
            
            <div className="mt-20 text-right md:text-left lg:text-right">
              <p className="text-white/30 text-[14px] font-light tracking-widest">
                FloraVision &copy; ALL RIGHTS RESERVED
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
