// components/Hero.js
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero({ data }) {
  return (
    <section className=" py-25 px-6 md:px-12 flex justify-center items-center overflow-hidden">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <Image
            src="/images/bg1.png"
            alt="bg"
            width={200}
            height={200}
            className="object-cover absolute   top-20 -left-32"
          />

          {/* <div className="text-4xl md:text-5xl font-bold text-gray-800">
            <div className="smallTitle"> \ We Are Here \ </div>
          </div> */}
          <p className="h2">{data.tagline}</p>
          <p>{data.homepaheSubheading}</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#FF3E54] text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300"
          >
            View More
          </motion.button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative  rounded-full overflow-hidden border-8 border-white shadow-xl">
            <Image
              src="/images/hero.png"
              alt="Business Professional"
              width={600}
              height={600}
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
