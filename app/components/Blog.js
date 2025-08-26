// components/Blog.js
'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Blog() {
  const blogPosts = [
    {
      title: '5 Strategies for Business Growth in 2023',
      author: 'Jane Doe',
      date: 'May 15, 2023',
      image: '/images/b1.jpg',
      excerpt: 'Discover the most effective strategies to grow your business in the current market landscape.'
    },
    {
      title: 'The Importance of Data-Driven Decision Making',
      author: 'John Smith',
      date: 'April 28, 2023',
      image: '/images/b1.jpg',
      excerpt: 'Learn how leveraging data can transform your business decisions and drive better results.'
    },
    {
      title: 'How to Improve Customer Engagement',
      author: 'Sarah Johnson',
      date: 'April 10, 2023',
      image: '/images/b1.jpg',
      excerpt: 'Practical tips to enhance your customer engagement and build lasting relationships.'
    }
  ];

  return (
    <section id="blog" className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4"
        > 
          <div className='smallTitle mb-4'>\  Blog \</div>
          <h2> Latest From Our Blog</h2>
        </motion.h2>
        {/* <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-600 text-center max-w-2xl mx-auto mb-16"
        >
          Stay updated with the latest insights and trends in business growth and development.
        </motion.p> */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative p-6  ">
                {/* <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover w-full "
                /> */}
                 <Image
              src={post.image}
              alt="bg"
              width={200}
              height={200}
              className="object-cover w-full "
            />
              </div>
              <div className="p-6 pt-0">
                <h3 className="text-xl font-semibold text-[#FF3E54] mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-medium">{post.author}</span>
                  <span className="text-gray-500 text-sm">{post.date}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}