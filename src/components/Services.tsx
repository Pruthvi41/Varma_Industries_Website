import { Building2, Pipette, Wrench, Anchor, Factory, SquareDashedKanban, Toolbox } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

// Add your actual project images here — import each one at the top,
// then add an entry below with a short caption.
import img1 from "../assets/img-1.jpeg";
import img2 from "../assets/img-2.jpeg";
import img3 from "../assets/img-3.jpeg";
import img4 from "../assets/img-4.jpeg";
import img5 from "../assets/img-5.jpeg";
import img6 from "../assets/img-6.jpeg";
import img7 from "../assets/img-7.jpeg";
import img8 from "../assets/img-8.jpeg";
import img9 from "../assets/img-9.jpeg";
import img10 from "../assets/img-10.jpeg";
import img11 from "../assets/img-11.jpeg";
import img12 from "../assets/img-12.jpeg";
import img13 from "../assets/img-13.jpeg";
import img14 from "../assets/img-14.jpeg";
import img15 from "../assets/img-15.jpeg";
import img16 from "../assets/img-16.jpeg";
import img17 from "../assets/img-17.jpeg";
import img18 from "../assets/img-18.jpeg";
import img19 from "../assets/img-19.jpeg";


const projectImages = [
  { src: img1, caption: "Steel Structure Fabrication" },
  { src: img2, caption: "Steel Structure Fabrication" },
  { src: img3, caption: "Steel Structure Fabrication" },
  { src: img4, caption: "Steel Structure Fabrication" },
  { src: img5, caption: "Steel Structure Fabrication" },
  { src: img6, caption: "Steel Structure Fabrication" },
  { src: img7, caption: "Steel Structure Fabrication" },
  { src: img8, caption: "Steel Structure Fabrication" },
  { src: img9, caption: "Steel Structure Fabrication" },
  { src: img10, caption: "Steel Structure Fabrication" },
  { src: img11, caption: "Steel Structure Fabrication" },
  { src: img12, caption: "Steel Structure Fabrication" },
  { src: img13, caption: "Steel Structure Fabrication" },
  { src: img14, caption: "Steel Structure Fabrication" },
  { src: img15, caption: "Steel Structure Fabrication" },
  { src: img16, caption: "Steel Structure Fabrication" },
  { src: img17, caption: "Steel Structure Fabrication" },
  { src: img18, caption: "Steel Structure Fabrication" },
  { src: img19, caption: "Steel Structure Fabrication" },
  // Add more entries in the matching category as you add more images
];

const services = [
  {
    icon: Building2,
    title: "Steel Structures Fabrication & Erections",
    description:
      "Heavy, medium & light structure production, Tanks, Pipelines, heavy & light equipments PEB structures, built-up sections. 5,000 MT annual capacity.",
    features: ["Heavy Structures", "PEB", "Built-Up Sections"],
  },
  {
    icon: Pipette,
    title: "Industrial & Oil Gas Pipelines",
    description:
      "Refinery infrastructure, petrochemical plants, pipeline networks with 75,000 Meters pipeline per year.",
    features: ["Oil & Gas", "Petrochemical", "75,000 Meters per year"],
  },
  {
    icon: Wrench,
    title: "Construction Works",
    description:
      "Industrial construction, plant erection, structural installations. Complete turnkey solutions.",
    features: ["Plant Erection", "Structural", "Turnkey"],
  },
  {
    icon: Anchor,
    title: "Ship Building & Marine",
    description:
      "Vessel fabrication, marine structure construction, ship maintenance. Platform fabrication, pontoons & barges.",
    features: ["Vessels", "Pontoons", "Deep Water"],
  },
  {
    icon: Factory,
    title: "Urban & Infrastructure Projects",
    description:
      "Commercial complexes, malls, public infrastructure development. Smart city ready solutions.",
    features: ["Malls", "Commercial", "Smart City"],
  },
  {
    icon: SquareDashedKanban,
    title: "Boilers and Chimneys",
    description:
      "IBR & NON-IBR components manufacturers, Pipe Liners & Repairs, Government approved steam boiler erections, MS & SS engineering equipments manufacturers.",
    features: ["Pipe Liners", "IBR & NON-IBR", "MS & SS engineering"],
  },
  {
    icon: Toolbox,
    title: "Welding Products",
    description:
      "Premium welding rods, welding machines, cutting equipment, and complete welder safety accessories (PPE, cables, and consumables).",
    features: ["Rods", "Cables", "Cutting Equipment"],
  },
];

const Services = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.8;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };
  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container-custom mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            Our Divisions & Services
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Comprehensive Industrial Services
          </h2>
          <p className="text-muted-foreground text-lg">
            From steel structures to pipeline construction, we deliver end-to-end
            services for diverse industrial needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-steel p-6 group hover:border-accent transition-all duration-300"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="w-full px-4 sm:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">
              Our Work
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
              Project Gallery
            </h2>
            <p className="text-muted-foreground text-lg">
              A look at our completed steel structures, pipelines, industrial and boiler
              projects.
            </p>
          </div>

          {/* Gallery */}
          <div className="relative">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center rounded-full bg-background shadow-lg border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center rounded-full bg-background shadow-lg border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <div
              ref={scrollRef}
              className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-accent/40 [&::-webkit-scrollbar-thumb]:rounded-full"
            >
              {projectImages.map((project, index) => (
                <div
                  key={index}
                  className="snap-start flex-shrink-0 w-[85%] sm:w-[60%] md:w-[45%] lg:w-[32%] rounded-lg overflow-hidden shadow-xl group relative"
                >
                  <img
                    src={project.src}
                    alt={project.caption}
                    className="w-full h-64 sm:h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
