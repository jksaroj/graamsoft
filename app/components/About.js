// components/About.js
'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-12 bg-[#F7F7F7]">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-lg overflow-hidden shadow-xl"
        >
          <Image
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
          className="space-y-6"
        >
           <div className='smallTitle'> \ We Are Here \ </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            One of the Fastest Way to Business Growth
          </h2>
          <p className="text-gray-600">
            Our proven strategies and innovative approaches have helped countless businesses achieve remarkable growth.
            We combine data analytics with industry expertise to deliver actionable insights that drive results.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#FF3E54] text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300"
          >
            Get Instant Professional Advice
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}