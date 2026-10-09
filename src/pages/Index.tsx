import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SubBrands from "../components/SubBrands";
import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Facilities from "../components/Facilities";
import Quality from "../components/Quality";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { ScrollProgress, useScrollReveal } from "../components/Motion";

const Index = () => {
  useScrollReveal();
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <SubBrands />
      <About />
      <Services />
      <Projects />
      <Facilities />
      <Quality />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
