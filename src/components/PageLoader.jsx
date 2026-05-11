import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Hide loader after assets have had time to begin loading
    const timer = setTimeout(() => setVisible(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] bg-[#0b0f0b] flex flex-col items-center justify-center"
        >
          {/* Ambient glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-900/20 rounded-full blur-[120px]" />
          </div>

          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 1.05, opacity: 0, y: -10 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col items-center gap-5"
          >
            {/* Logo */}
            <motion.div
              animate={{ rotate: [0, -8, 8, -4, 4, 0] }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="text-6xl filter drop-shadow-[0_0_20px_rgba(74,222,128,0.4)]"
            >
              🪴
            </motion.div>

            {/* Brand name */}
            <motion.p
              initial={{ opacity: 0, letterSpacing: '0.3em' }}
              animate={{ opacity: 1, letterSpacing: '0.5em' }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-white/70 font-hand text-lg uppercase tracking-[0.5em]"
            >
              FloraVision
            </motion.p>

            {/* Loading bar */}
            <div className="w-40 h-[2px] bg-white/10 rounded-full overflow-hidden mt-2">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="h-full bg-gradient-to-r from-green-500/80 to-green-300/60 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
