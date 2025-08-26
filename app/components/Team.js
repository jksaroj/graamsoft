// components/Team.js
'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Team() {
  const teamMembers = [
    {
      name: 'John Smith',
      role: 'CEO',
      image: '/images/t.jpg'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      image: '/images/t.jpg'
    },
    {
      name: 'Michael Brown',
      role: 'CFO',
      image: '/images/t.jpg'
    },
    {
      name: 'Emily Davis',
      role: 'COO',
       image: '/images/t.jpg'
    }
  ];

  return (
    <section id="team" className="py-20 px-6 md:px-12 bg-[#f7f7f7]">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4"
        >
          <div class="smallTitle"> \ Team \ </div>
          Our Leaders
        </motion.h2>
        {/* <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-600 text-center max-w-2xl mx-auto mb-16"
        >
          Meet the experienced professionals leading our company to success.
        </motion.p> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-blue-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}