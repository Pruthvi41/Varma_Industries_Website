import { CheckCircle, Users, Target, Zap } from "lucide-react";
import fabricationImg from "@/assets/fabrication.jpg";

const About = () => {
  const highlights = [
    {
      icon: Users,
      title: "Expert Team",
      description: "200+ young, experienced professionals with domain expertise",
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
              Pioneering Steel Construction Since 2006
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Since 2006, Varma Industrial Enterprises has been pioneering steel structure 
              construction, building on a legacy of innovation in ferro concrete advantages 
              and industrial material refinement. We have created new applications and 
              construction methods that form the foundation of our successful company history.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Through pipeline construction and large-scale industrial projects, we have 
              established ourselves as one of Andhra Pradesh &amp; Telangana&apos;s leading 
              construction groups, continuously expanding our solution-oriented business model. 
              Our team of 200+ employees and skilled staff drives this growth on the ground, 
              every day.
            </p>
            <blockquote className="border-l-4 border-accent pl-4 mb-8 italic text-muted-foreground">
              &ldquo;In this competence alliance, VIE follows the successful strategy of TEAMS WORK. 
              Because success comes from working together.&rdquo;
              <span className="block mt-2 not-italic font-semibold text-foreground text-sm">
                — Mr. S.R.K.S. Ravi Varma, Managing Partner
              </span>
            </blockquote>

            {/* Checkmarks */}
            <div className="space-y-3 mb-8">
              {[
                "ISO 9001:2015 Certified Organization",
                "200+ Skilled Employees & Staff",
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
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                <span className="bg-orange text-orange-foreground px-4 py-2 rounded font-semibold text-sm">
                  19+ Years of Excellence
                </span>
                <span className="bg-accent text-accent-foreground px-4 py-2 rounded font-semibold text-sm">
                  200+ Employees
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