// components/Footer.js
"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const icons = {
  facebook: <FaFacebookF />,
  twitter: <FaTwitter />,
  linkedin: <FaLinkedinIn />,
  instagram: <FaInstagram />,
};
export default function Footer() {
  const [formData, setFormData] = useState({
    email: "",
  });
  const services = [
    "AI-Powered CRM (Flagship Product)",
    "Custom Software Development",
    "Website Design & Development",
    "Mobile App Development (iOS & Android)",
    "IT Consulting & Strategy",
    "Cloud Solutions",
    "Cybersecurity Services",
    "Data Management & Analytics",
  ];

  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState({ message: "", type: "" });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setFeedback({ message: "", type: "" });
    console.log(formData);
    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_SUBSCRIPTION_TEMPLATE_ID,
        {
          from_email: formData.email,
          message: "Subscription email: " + formData.email,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setFeedback({ message: "Successfully subscribed!", type: "success" });
      setFormData({ email: "" });
    } catch (error) {
      console.log(error);
      setFeedback({
        message: "Failed to send message. Please try again.",
        type: "error",
      });
    } finally {
      setIsSending(false);
    }
  };

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
            <span className="font-bold text-xl">GraamSoft</span>
          </div>
          <p className="text-gray-400 mb-6">
            We provide data-driven insights and innovative solutions to help
            businesses reach their full potential.
          </p>
          <div className="flex space-x-4">
            {["facebook", "twitter", "linkedin", "instagram"].map(
              (platform) => (
                <a
                  key={platform}
                  href="#"
                  className="bg-gray-800 p-2 rounded-full hover:bg-[#FF3E54] transition-colors duration-300"
                >
                  <span className="sr-only">{platform}</span>
                  <div className="w-5 h-5 text-white">{icons[platform]}</div>
                </a>
              )
            )}
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
              <li key={index}>{service}</li>
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
          {/* <a
            href="#"
            className="inline-block bg-[#FF3E54] text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300 mb-8"
          >
            View Openings
          </a> */}

          <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
          <p className="text-gray-400 mb-4">
            Stay updated with our latest news and insights.
          </p>
          <form className="flex" onSubmit={handleSubmit}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
            <br />
            <button
              type="submit"
              disabled={isSending}
              className="bg-[#FF3E54] px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors duration-300"
            >
              {isSending ? "Processing..." : "Subscribe"}
            </button>
          </form>
          {feedback.message && (
            <div
              className={`text-sm font-medium px-4 py-3 my-5 rounded ${
                feedback.type === "success"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {feedback.message}
            </div>
          )}
        </motion.div>
      </div>

      <div className="container mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} GraamSoft. All rights reserved.</p>
      </div>
    </footer>
  );
}
