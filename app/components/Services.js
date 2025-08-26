// components/Services.js
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Services() {
  const services = [
    {
      title: 'Web Design/Development',
      icon: '/images/p1.svg',
      description: 'Custom websites and web applications built with modern technologies.'
    },
    {
      title: 'UI/UX Design',
      icon: '/images/p1.svg',
      description: 'User-centered design that creates seamless and engaging experiences.'
    },
    {
      title: 'Website Migration',
      icon: '/images/p1.svg',
      description: 'Smooth transition of your website to new platforms with zero downtime.'
    },
    {
      title: 'App Development',
      icon: '/images/p1.svg',
      description: 'Native and cross-platform mobile applications for iOS and Android.'
    },
    {
      title: 'HubSpot Integrations',
      icon: '/images/p1.svg',
      description: 'Seamless integration of HubSpot with your existing systems and workflows.'
    },
    {
      title: 'Email Marketing',
      icon: '/images/p1.svg',
      description: 'Targeted email campaigns that drive engagement and conversions.'
    }
  ];

  return (
    <section id="services" className="py-20 px-6 md:px-12 bg-white">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4"
        >
          <div className='smallTitle'> \ Services \ </div>
          <h2> Our Expertice</h2>
        </motion.h2>
        {/* <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-600 text-center max-w-2xl mx-auto mb-16"
        >
          We offer a comprehensive range of services to help your business thrive in the digital landscape.
        </motion.p> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#f7f7f7] p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-left text-left"
            >
              <span className="absolute top-4 right-4 text-5xl font-bold text-gray-200">01</span>

{/* Icon Box */}
<div className="w-16 h-16 flex items-center justify-center bg-white rounded-xl mb-6">
<Image
            src={service.icon}
            alt="Business Team"
            width={50}
            height={50}
            className="h-auto object-cover"
          />
</div>

{/* Title */}
<h3 className="text-xl font-bold text-blue-900 mb-3">{service.title}</h3>

{/* Red Divider */}
<div className="flex items-center space-x-2 mb-4">
  <span className="w-16 h-1 bg-red-500 rounded"></span>
  <span className="w-6 h-1 bg-red-500 rounded"></span>
</div>

{/* Description */}
<p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}