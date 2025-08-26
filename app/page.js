
import About from './components/About.js';
import Blog from './components/Blog.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import Hero from './components/Hero.js';
import Process from './components/Process.js';
import Services from './components/Services.js';
import Team from './components/Team.js';
import Testimonials from './components/Testimonials.js';
import WhatWeDo from './components/WhatWeDo.js';
export default function Home() {
  return (
    <>
  <Header />
  <Hero />
  <About />
      <Process />
      <WhatWeDo />
      <Services />
      <Team />
      <Testimonials />
      <Contact />
      <Blog />
      <Footer />
  </>
  
  )
 }