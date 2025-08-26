// components/Footer.js
'use client';
import { motion } from 'framer-motion';

export default function Footer() {
  const services = [
    'Web Design/Development',
    'UI/UX Design',
    'Website Migration',
    'App Development',
    'HubSpot Integrations',
    'Email Marketing'
  ];

  return (
    <footer className="bg-gray-900 text-white py-16 px-6 md:px-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-32 h-10 bg-gray-800 rounded flex items-center justify-center mb-6">
            <span className="font-bold text-xl">Graamsft</span>
          </div>
          <p className="text-gray-400 mb-6">
            We provide data-driven insights and innovative solutions to help businesses reach their full potential.
          </p>
          <div className="flex space-x-4">
            {['facebook', 'twitter', 'linkedin', 'instagram'].map((platform) => (
              <a
                key={platform}
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-[#FF3E54] transition-colors duration-300"
              >
                <span className="sr-only">{platform}</span>
                <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Services Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:justify-self-center"
        >
          <h3 className="text-lg font-semibold mb-6">Services</h3>
          <ul className="space-y-3">
            {services.map((service, index) => (
              <li key={index}>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Careers & Subscribe */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold mb-6">Careers</h3>
          <p className="text-gray-400 mb-6">
            Join our team of experts and help us transform businesses.
          </p>
          <a
            href="#"
            className="inline-block bg-[#FF3E54] text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300 mb-8"
          >
            View Openings
          </a>

          <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
          <p className="text-gray-400 mb-4">
            Stay updated with our latest news and insights.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 w-full"
            />
            <button
              type="submit"
              className="bg-[#FF3E54] px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>

      <div className="container mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Graamsft. All rights reserved.</p>
      </div>
    </footer>
  );
}