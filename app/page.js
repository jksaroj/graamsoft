// app/page.tsx

import About from "./components/About.js";
// import Blog from "./components/Blog.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Hero from "./components/Hero.js";
// import Process from "./components/Process.js";
import Services from "./components/Services.js";
// import Team from "./components/Team.js";
import Testimonials from "./components/Testimonials.js";
import WhatWeDo from "./components/WhatWeDo.js";
import jsonData from "./content/data.json";
export default function Home() {
  return (
    <>
      <Header />
      <Hero data={jsonData.Header} />
      <About data={jsonData.About} />
      {/* <Process /> */}
      <WhatWeDo data={jsonData.WhatWeDo} />
      <Services
        data={{
          Services: jsonData.Services,
          Service_list: jsonData.Service_list,
          Core_services: jsonData.Core_services,
        }}
      />

      {/* <Team /> */}
      <Testimonials data={jsonData.Testimonials} />
      <Contact data={jsonData.Contact} />
      {/* <Blog /> */}
      <Footer data={jsonData.Services} />
    </>
  );
}
