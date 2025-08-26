// components/WhatWeDo.js
'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function WhatWeDo() {
  return (
    <section className="py-20 px-6 md:px-12 bg-[#f7f7f7]">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-lg overflow-hidden shadow-xl order-2 md:order-1"
        > <Image
        src="/images/profile-placeholder.jpg"
        alt="Business Team"
        width={600}
        height={400}
        className="w-full h-auto object-cover"
      />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6 order-1 md:order-2"
        >
          <div class="smallTitle"> \ What We Do \ </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            We Develop Product That People Love to Use
          </h2>
          <p className="text-gray-600">
            Our user-centered design approach ensures that we create products that are not only functional but also
            delightful to use. We focus on solving real problems for real people.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#FF3E54] text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300"
          >
            View More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}