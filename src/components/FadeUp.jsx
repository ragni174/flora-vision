import React from 'react';
import { motion } from 'framer-motion';

/**
 * FadeUp — wraps any children in a scroll-triggered fade-up animation.
 * 
 * Props:
 *  delay       — stagger delay in seconds (default 0)
 *  distance    — how many px to slide up from (default 40)
 *  duration    — animation duration in seconds (default 0.75)
 *  className   — forwarded to the wrapper div
 *  as          — element type, default 'div'
 */
export default function FadeUp({
  children,
  delay = 0,
  distance = 40,
  duration = 0.75,
  className = '',
  as: Tag = 'div',
  ...rest
}) {
  const MotionTag = motion[Tag] || motion.div;

  return (
    <MotionTag
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
