import { Building2, Pipette, Wrench, Anchor, Factory, Cog } from "lucide-react";
import pipelineImg from "@/assets/pipeline.jpg";

const services = [
  {
    icon: Building2,
    title: "Steel Structures",
    description:
      "Industrial steel structures, fabrication, and erection works for warehouses, factories, and commercial buildings.",
    features: ["Fabrication", "Erection", "Design Support"],
  },
  {
    icon: Pipette,
    title: "Pipeline Construction",
    description:
      "Oil & gas pipelines, industrial water pipelines, steam/process piping for refineries and power plants.",
    features: ["Oil & Gas", "Water Grids", "Process Piping"],
  },
  {
    icon: Wrench,
    title: "Custom Fabrication",
    description:
      "Power projects including boiler erections, storage tanks, and specialized industrial equipment.",
    features: ["Boiler Erections", "Storage Tanks", "Equipment"],
  },
  {
    icon: Anchor,
    title: "Ports & Marine",
    description:
      "Offshore applications, ship building support, jetties, and marine infrastructure projects.",
    features: ["Offshore", "Jetties", "Marine Works"],
  },
  {
    icon: Factory,
    title: "Urban Infrastructure",
    description:
      "Urban development projects, bulk terminals, and large-scale infrastructure installations.",
    features: ["Terminals", "Infrastructure", "Development"],
  },
  {
    icon: Cog,
    title: "CS Pipes & Tubulars",
    description:
      "Carbon steel pipes for raw water pipelines, structural proposals, and specialized applications.",
    features: ["Raw Water", "Structural", "Specialized"],
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container-custom mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            Our Divisions & Services
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Comprehensive Industrial Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From steel structures to pipeline construction, we deliver end-to-end 
            solutions for diverse industrial needs.
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

        {/* Feature Image */}
        <div className="relative rounded-lg overflow-hidden shadow-xl">
          <img
            src={pipelineImg}
            alt="Pipeline Construction Project"
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy/60 to-transparent flex items-center">
            <div className="p-8 md:p-12 max-w-xl">
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Power & Energy Sector Expertise
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                Specialized in oil refineries, power plants, and energy infrastructure 
                with a track record of successful large-scale projects.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center text-orange font-semibold hover:gap-3 gap-2 transition-all"
              >
                Discuss Your Project →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
