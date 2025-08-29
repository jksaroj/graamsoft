"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Services({ data }) {
  const { Services, Service_list, Core_services } = data;

  return (
    <section id="Services" className="py-20 px-6 md:px-12 bg-white">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4"
        >
          <div className="smallTitle"> \ Services \ </div>
        </motion.h2>
        <p className="text-gray-600">- {Services.service_tagline}</p>
        <p className="text-gray-600">- {Services.service_header}</p>
        <p className="text-gray-600">- {Services.paragraph}</p>
        <br />
        {/* Animated Service List */}
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 list-decimal list-disc list-inside mb-12"
        >
          {Service_list.map((item, index) => (
            <motion.li
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-gray-700 text-lg"
            >
              {`${index + 1}. ${item.text}`}
            </motion.li>
          ))}
        </motion.ul>

        {/* Animated Core Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Core_services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative bg-[#f7f7f7] p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-left text-left"
            >
              {/* Dynamic Number */}
              <span className="absolute top-4 right-4 text-5xl font-bold text-gray-200">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Icon Box */}
              <div className="w-16 h-16 flex items-center justify-center bg-white rounded-xl mb-6">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={50}
                  height={50}
                  className="h-auto object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                {service.title}
              </h3>

              {/* Red Divider */}
              <div className="flex items-center space-x-2 mb-4">
                <span className="w-16 h-1 bg-red-500 rounded"></span>
                <span className="w-6 h-1 bg-red-500 rounded"></span>
              </div>

              {/* Description */}
              <p className="text-gray-600">{service.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
