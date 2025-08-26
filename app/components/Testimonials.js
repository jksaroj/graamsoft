// components/Testimonials.js
'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Robert Williams',
      company: 'Tech Innovations Inc.',
      text: 'Working with Graamsft has transformed our business. Their insights helped us increase revenue by 40% in just six months.',
      avatar: '/testimonial-1.jpg'
    },
    {
      name: 'Jennifer Lopez',
      company: 'Global Solutions Ltd.',
      text: 'The team at Graamsft truly understands business growth. Their strategies are innovative and effective.',
      avatar: '/testimonial-2.jpg'
    },
    {
      name: 'David Chen',
      company: 'NextGen Technologies',
      text: 'We were impressed by their data-driven approach. The results speak for themselves - our customer engagement has doubled.',
      avatar: '/testimonial-3.jpg'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 px-6 md:px-12 bg-white">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16"
        >
          Testimonials
        </motion.h2>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 md:p-12 rounded-xl shadow-md text-center"
            >
              <div className="relative w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-gray-600 text-lg italic mb-6">
                "{testimonials[currentIndex].text}"
              </p>
              <h3 className="text-xl font-semibold text-gray-800">
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-blue-600">
                {testimonials[currentIndex].company}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}