import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * LazyImage — drops in a shimmer skeleton while the image loads,
 * then crossfades to the real image once it's ready.
 *
 * Props:
 *  src, alt           — standard img props
 *  className          — classes applied to the <img>
 *  skeletonClassName  — extra classes on the skeleton (e.g. specific rounded corners)
 *  wrapperClassName   — classes on the outer wrapper div
 *  ...rest            — any other img attributes
 */
export default function LazyImage({
  src,
  alt,
  className = '',
  skeletonClassName = '',
  wrapperClassName = '',
  ...rest
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative ${wrapperClassName}`}>
      {/* Skeleton shimmer — exits once image is loaded */}
      <AnimatePresence>
        {!loaded && (
          <motion.div
            key="skeleton"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`absolute inset-0 skeleton-shimmer rounded-inherit ${skeletonClassName}`}
          />
        )}
      </AnimatePresence>

      {/* The actual image — fades in on load */}
      <motion.img
        src={src}
        alt={alt}
        className={className}
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        onLoad={() => setLoaded(true)}
        {...rest}
      />
    </div>
  );
}
