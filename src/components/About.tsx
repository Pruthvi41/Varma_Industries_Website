import { useState } from "react";
import { CheckCircle, Users, Target, Zap, ChevronDown, ChevronUp } from "lucide-react";
import fabricationImg from "@/assets/fabrication.jpg";

const About = () => {
  const [expanded, setExpanded] = useState(false);

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
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Through pipeline construction and large-scale industrial projects, we have
              established ourselves as one of Andhra Pradesh &amp; Telangana&apos;s leading
              construction groups, continuously expanding our solution-oriented business model.
              Our team of 200+ employees and skilled staff drives this growth on the ground,
              every day.
            </p>

            {/* Expandable additional content */}
            <div
              className={`overflow-hidden transition-all duration-500 ${expanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                }`}
            >
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our two manufacturing units span a combined 7 acres, with 4 acres of covered
                production area, equipped with CNC machines, EOT cranes, plate processing,
                and pipe processing lines. This infrastructure supports an annual capacity of
                5,000 MT in steel structure fabrication and 75,000 meters of pipeline
                construction, backed by standard operating procedures across Operations,
                Engineering, QA/QC, HSE, and Internal Audit functions.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Quality remains central to our operations — every weld is third-party tested
                by internationally recognized agencies, and our processes are certified to
                ISO 9001:2015 standards. This commitment extends across our client base,
                spanning oil & gas refineries, industrial manufacturing, power & energy,
                marine & offshore, and urban infrastructure sectors across the region.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Beyond core fabrication and construction, the Varma Industrial Enterprises
                group extends into distribution and specialized manufacturing through our
                associated brands, reflecting our commitment to serving the full spectrum of
                industrial and infrastructure needs.
              </p>
            </div>
            {/* View More toggle */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all mb-4"
            >
              {expanded ? "View Less" : "View More"}
              {expanded ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>

            <blockquote className="border-l-4 border-accent pl-4 mb-8 italic text-muted-foreground">
              &ldquo;In this competence alliance, VIE follows the successful strategy of TEAMS WORK.
              Because success comes from working together.&rdquo;
              <span className="block mt-2 not-italic font-semibold text-foreground text-sm">
                — Mr. S.R.K.S. Ravi Varma, Managing Partner
              </span>
            </blockquote>

            {/* Checkmarks */}
            <div className="space-y-3 mb-6">
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
