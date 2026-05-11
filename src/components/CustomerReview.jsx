import React from 'react';
import { motion } from 'framer-motion';

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
        <div className="flex justify-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative inline-block"
          >
            <h2 className="text-4xl lg:text-5xl font-sans font-bold text-white px-6 py-2">
              Customer Review
            </h2>
            {/* Top Right Bracket */}
            <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-[#a3c965] rounded-tr-lg opacity-80"></div>
            {/* Bottom Left Bracket */}
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-[#a3c965] rounded-bl-lg opacity-80"></div>
          </motion.div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 items-start">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative atmospheric-box bg-[#1d241d]/30 border border-white/5 rounded-[60px] p-10 pt-16 shadow-[0_40px_80px_rgba(0,0,0,0.4)] group hover:-translate-y-2 transition-all duration-500"
            >
              {/* Inner Glow Container */}
              <div className="absolute inset-0 overflow-hidden rounded-[60px] pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-tr from-green-500/5 via-transparent to-white/5 opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
              {/* Floating Badge */}
              <div className={`absolute -top-6 ${review.badgePos === 'right' ? 'right-10' : 'left-10'} z-20`}>
                {review.badgeContent}
              </div>

              {/* Reviewer Info */}
              <div className="flex items-center space-x-5 mb-8">
                <div className="w-16 h-16 rounded-full overflow-hidden border border-white/10 shadow-lg shrink-0">
                  <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-xl font-sans font-bold text-white tracking-wide">{review.name}</h4>
                  <div className="flex text-[#eab308] text-[13px] mt-1 space-x-1">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span className="text-white/30">★</span>
                  </div>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-gray-300 leading-relaxed font-light text-[15px]">
                {review.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
