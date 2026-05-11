import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

export default function TopSellingPlants() {
  const products = [
    {
      id: 1,
      name: "Aglaonema plant",
      desc: "The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care",
      price: "Rs. 300/-",
      image: '/assets/aglaonema_transparent.png',
      delay: 0
    },
    {
      id: 2,
      name: "Plantain Lilies",
      desc: "Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,",
      price: "Rs. 380/-",
      image: '/assets/desk_plant_1_1778440870559_transparent.png',
      delay: 0.1,


    },
    {
      id: 3,
      name: "Cactus",
      desc: "It is known for their ability to thrive in arid environments",
      price: "Rs. 259/-",
      image: '/assets/top_seller_2_1778441327955_transparent.png',
      delay: 0.2
    },
    {
      id: 4,
      name: "Swiss cheese Plant",
      desc: "It is a popular tropical houseplant known for its distinctive, perforated leaves",
      price: "Rs. 400/-",
      image: '/assets/top_seller_3_1778441443087_transparent.png',
      delay: 0
    },
    {
      id: 5,
      name: "Sansevieria plant",
      desc: "It is a popular indoor plant admired for its striking appearance and low-maintenance nature.",
      price: "Rs. 450/-",
      image: '/assets/desk_plant_2_1778441135642_transparent.png',
      delay: 0.1
    },
    {
      id: 6,
      name: "Agave plant",
      desc: "The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.",
      price: "Rs. 359/-",
      image: '/assets/aglaonema_transparent.png', // Reusing asset for placeholder
      delay: 0.2
    }
  ];

  return (
    <section className="py-16 px-6 sm:px-12 lg:px-12 xl:px-20 bg-transparent relative z-10">
      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <div className="flex justify-center mb-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative inline-block"
          >
            <h2 className="text-4xl lg:text-5xl font-sans font-bold text-white px-6 py-2">
              Our Top Selling Plants
            </h2>
            {/* Top Right Bracket */}
            <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-[#a3c965] rounded-tr-lg opacity-80"></div>
            {/* Bottom Left Bracket */}
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-[#a3c965] rounded-bl-lg opacity-80"></div>
          </motion.div>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 xl:gap-x-12 gap-y-16">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} delay={product.delay} />
          ))}
        </div>
      </div>
    </section>
  );
}
