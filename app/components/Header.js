"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    "Home",
    "About",
    "WhatWeDo",
    "Services",
    "Testimonials",
    "Contact",
  ];

  return (
    <header
      className={`sticky top-0 w-full z-50 bg-white transition-colors duration-300  py-4 px-6 md:px-12 
        ${isScrolled ? "shadow-md" : ""}`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className=" rounded flex items-center justify-center">
          <Image
            src="/images/logo.svg"
            alt="10go"
            width={200}
            height={60}
            className="object-cover"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 list-none">
          {menuItems.map((item) => (
            <li
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-gray-600 hover:text-white visited:text-white duration-300 cursor-pointer hover:bg-[#0e1f51] p-2 rounded"
            >
              {item}
            </li>
          ))}
          {/* <button
            className="bg-[#FF3E54] text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
          >
            Get Started
          </button> */}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white p-4 mt-4 shadow-lg rounded-lg">
          <nav className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                {item}
              </a>
            ))}
            {/* <button
              className="bg-[#FF3E54] text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300 w-full"
            >
              Get Started
            </button> */}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
