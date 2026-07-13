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

const Index = () => {
  return (
    <div className="min-h-screen">
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
