import React from 'react';
import { motion } from 'framer-motion';
import LazyImage from './LazyImage';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function CustomerReview() {
  const reviews = [
    {
      id: 1,
      name: "Shelly Russel",
      text: "Just got my hands on some absolutely awesome plants, and I couldn't be happier!",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
    {
      id: 2,
      name: "Lula Rolfson",
      text: "Each one has its own unique charm and personality, and they've already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.",
      avatar: "https://i.pravatar.cc/150?img=9",
    },
    {
      id: 3,
      name: "Carol Huels",
      text: "It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!",
      avatar: "https://i.pravatar.cc/150?img=32",
    }
  ];

  return (
    <section className="py-16 px-6 sm:px-12 lg:px-20 relative z-10 bg-transparent">
      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <div className="flex justify-center mb-12 sm:mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative inline-block"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-white px-6 py-2 text-center">
              Customer Review
            </h2>
            <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-[#a3c965] rounded-tr-lg opacity-80"></div>
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-[#a3c965] rounded-bl-lg opacity-80"></div>
          </motion.div>
        </div>

        {/* Staggered Reviews Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              variants={cardVariants}
              className="relative atmospheric-box bg-[#1d241d]/30 border border-white/5 rounded-[40px] sm:rounded-[60px] p-7 sm:p-10 pt-14 sm:pt-16 shadow-[0_40px_80px_rgba(0,0,0,0.4)] group hover:-translate-y-2 transition-all duration-500"
            >
              {/* Inner Glow */}
              <div className="absolute inset-0 overflow-hidden rounded-[40px] sm:rounded-[60px] pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-tr from-green-500/5 via-transparent to-white/5 opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>

              {/* Reviewer Info */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border border-white/10 shadow-lg shrink-0">
                  <LazyImage
                    src={review.avatar}
                    alt={review.name}
                    className="w-full h-full object-cover"
                    skeletonClassName="!rounded-full"
                  />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-sans font-bold text-white tracking-wide">{review.name}</h4>
                  <div className="flex text-[#eab308] text-[13px] mt-1 space-x-0.5">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span className="text-white/30">★</span>
                  </div>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-gray-300 leading-relaxed font-light text-[13px] sm:text-[15px]">
                {review.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
