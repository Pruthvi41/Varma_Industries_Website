import { Shield, Award, Clock, IdCardLanyard } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/85 to-navy-dark/70" />
      </div>

      {/* Content */}
      <div className="relative container-custom mx-auto px-4 md:px-8 pt-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange/20 border border-orange/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Shield className="w-4 h-4 text-orange" />
            <span className="text-orange text-sm font-medium">
              ISO 9001:2015 Certified
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-slide-up">
            VARMA INDUSTRIAL
            <span className="block text-accent">ENTERPRISES</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 font-light mb-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Pioneering Steel Structures & Industrial Solutions Since 2006
          </p>

          {/* Subheadline */}
          <p className="text-lg text-primary-foreground/70 mb-8 max-w-2xl animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Delivering excellence in fabrication, construction, and project management
            across Andhra Pradesh & Telangana
          </p>

          {/* CTA Buttons */}
          {/* <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button className="btn-cta text-lg flex items-center gap-2">
              Request a Quote
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" className="btn-outline-light text-lg">
              Explore Our Projects
            </Button>
          </div> */}

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-primary-foreground/10 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <Clock className="w-5 h-5 text-orange" />
                <span className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">19+</span>
              </div>
              <p className="text-primary-foreground/60 text-sm">Years Experience</p>
            </div>
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <Award className="w-5 h-5 text-orange" />
                <span className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">100+</span>
              </div>
              <p className="text-primary-foreground/60 text-sm">Projects Completed</p>
            </div>
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <Award className="w-5 h-5 text-orange" />
                <span className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">10,000</span>
              </div>
              <p className="text-primary-foreground/60 text-sm">MT Total Capacity</p>
            </div>
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <IdCardLanyard className="w-5 h-5 text-orange" />
                <span className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">200+</span>
              </div>
              <p className="text-primary-foreground/60 text-sm">Employees</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
