// components/Process.js
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Process() {
  const steps = [
    {
      title: 'Research',
      icon: '/images/p1.svg',
      description: 'We conduct thorough market research and analysis to understand your industry landscape.'
    },
    {
      title: 'Design',
      icon: '/images/p2.svg',
      description: 'Our designers create intuitive and engaging user experiences tailored to your audience.'
    },
    {
      title: 'Develop',
      icon: '/images/p3.svg',
      description: 'Our developers build robust, scalable solutions using the latest technologies.'
    },
    {
      title: 'Test',
      icon: '/images/p4.svg',
      description: 'We rigorously test all solutions to ensure quality, performance, and security.'
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16"
        >
           <div className='smallTitle'> \ Planning \ </div>
         <h2> Our Process</h2>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#f7f7f7] p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-left text-left"
            >
            
              {/* <Image
            src={step.icon}
            alt="Business Team"
            width={50}
            height={50}
            className="h-auto object-cover"
          />
              <h3 className="text-xl font-semibold text-gray-800 mb-2"></h3>
              <p className="text-gray-600">{step.description}</p> */}
               {/* Step Number (top-right) */}
  <span className="absolute top-4 right-4 text-5xl font-bold text-gray-200">01</span>

{/* Icon Box */}
<div className="w-16 h-16 flex items-center justify-center bg-white rounded-xl mb-6">
<Image
            src={step.icon}
            alt="Business Team"
            width={50}
            height={50}
            className="h-auto object-cover"
          />
</div>

{/* Title */}
<h3 className="text-xl font-bold text-blue-900 mb-3">{step.title}</h3>

{/* Red Divider */}
<div className="flex items-center space-x-2 mb-4">
  <span className="w-16 h-1 bg-red-500 rounded"></span>
  <span className="w-6 h-1 bg-red-500 rounded"></span>
</div>

{/* Description */}
<p className="text-gray-600">{step.description}</p>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}