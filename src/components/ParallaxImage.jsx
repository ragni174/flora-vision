import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import LazyImage from './LazyImage';

/**
 * ParallaxImage — an image that drifts vertically as the user scrolls past it.
 * Automatically reduces the effect on mobile to prevent jarring motion.
 *
 * Props:
 *  src, alt          — standard img attributes
 *  strength          — float, 0–1.  How much the image shifts relative to its container.
 *                      0.15 = subtle (good default for decorative shots)
 *                      0.3  = strong (good for full-bleed hero images)
 *  className         — forwarded to the <img>
 *  wrapperClassName  — classes on the clipping wrapper
 *  skeletonClassName — passed to LazyImage
 *  ...rest           — any other img props
 */
export default function ParallaxImage({
  src,
  alt,
  strength = 0.15,
  className = '',
  wrapperClassName = '',
  skeletonClassName = '',
  ...rest
}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Reduce parallax on narrow screens so it doesn't look broken on mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const shift = isMobile ? strength * 0.25 : strength;
  const px = Math.round(shift * 160); // max travel in px

  const y = useTransform(scrollYProgress, [0, 1], [`${-px}px`, `${px}px`]);

  return (
    // Outer wrapper clips the image overflow so the parallax never shows gaps
    <div ref={ref} className={`overflow-hidden ${wrapperClassName}`}>
      <motion.div style={{ y }} className="will-change-transform">
        <LazyImage
          src={src}
          alt={alt}
          // Slightly over-size the image so the parallax travel stays within bounds
          className={className}
          skeletonClassName={skeletonClassName}
          {...rest}
        />
      </motion.div>
    </div>
  );
}
