// components/Testimonials.js
"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Testimonials({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsToShow = 3; // ✅ show 3 at a time

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + cardsToShow >= data.length ? 0 : prevIndex + cardsToShow
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - cardsToShow < 0
        ? Math.max(0, data.length - cardsToShow)
        : prevIndex - cardsToShow
    );
  };

  // ✅ slice 3 cards
  const visibleTestimonials = data.slice(
    currentIndex,
    currentIndex + cardsToShow
  );

  return (
    <section id="Testimonials" className="py-20 px-6 md:px-12 bg-white">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-2"
        >
          Testimonials
        </motion.h2>

        <div className="container mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="grid gap-6 md:grid-cols-3"
            >
              {visibleTestimonials.map((d, index) => (
                <div
                  key={index}
                  className="bg-white p-6 md:p-8 rounded-xl shadow-md text-center"
                >
                  {/* <div className="relative w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden">
                    <Image
                      src={d.avatar}
                      alt={d.name}
                      fill
                      className="object-cover"
                    />
                  </div> */}
                  <p className="text-gray-600 text-lg italic mb-6">{d.text}</p>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {d.name}
                  </h3>
                  <p className="text-blue-600">{d.company}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
