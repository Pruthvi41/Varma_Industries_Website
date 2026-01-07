import { CheckCircle, Users, Target, Zap } from "lucide-react";
import fabricationImg from "@/assets/fabrication.jpg";

const About = () => {
  const highlights = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Young, experienced professionals with domain expertise",
    },
    {
      icon: Target,
      title: "Solution-Oriented",
      description: "Focused on delivering tailored solutions for every project",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Leveraging ferro concrete and modern construction methods",
    },
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">
              About Us
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
              Building India&apos;s Industrial Future Since 2006
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Founded in 2006, VARMA INDUSTRIAL ENTERPRISES has played a pioneering role 
              in steel structure construction across Andhra Pradesh and Telangana. We have 
              grown to become one of the region&apos;s leading construction groups, recognized 
              for our commitment to quality and innovation.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our expertise spans urban development, oil refineries, pipeline projects, 
              and tunneling. With a focus on teamwork and solution-oriented business 
              expansion, we continue to set new standards in the industry.
            </p>

            {/* Checkmarks */}
            <div className="space-y-3 mb-8">
              {[
                "ISO 9001:2015 Certified Organization",
                "State-of-the-art Manufacturing Facilities",
                "100% Customer Satisfaction Commitment",
                "Third-party Tested Quality Welds",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image & Highlights */}
          <div className="space-y-6">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img
                src={fabricationImg}
                alt="VIE Manufacturing Facility"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="bg-orange text-orange-foreground px-4 py-2 rounded font-semibold text-sm">
                  18+ Years of Excellence
                </span>
              </div>
            </div>

            {/* Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="card-steel p-4 text-center hover:border-accent transition-colors"
                >
                  <item.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                  <h4 className="font-heading font-semibold text-foreground mb-1">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-xs">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
