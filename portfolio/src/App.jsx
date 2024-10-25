import { useState } from "react";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Feature from "./components/Feature";
import Workflow from "./components/WorkFlow";
import Price from "./components/Price";
import Testimonials from "./components/testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-6 px-24">
        <HeroSection />
      </div>
      <Feature />
      <Workflow />
      <Price />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
