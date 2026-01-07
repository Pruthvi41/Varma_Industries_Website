import { Linkedin, Twitter, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Facilities", href: "#facilities" },
    { name: "Quality", href: "#quality" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Steel Structures",
    "Pipeline Construction",
    "Custom Fabrication",
    "Ports & Marine",
    "Urban Infrastructure",
    "CS Pipes & Tubulars",
  ];

  return (
    <footer className="bg-navy-dark text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="font-heading text-2xl font-bold mb-4">
              VARMA INDUSTRIAL
            </h3>
            <p className="text-primary-foreground/60 text-sm mb-6 leading-relaxed">
              Pioneering steel structures and industrial solutions since 2006. 
              ISO 9001:2015 certified organization delivering excellence across 
              Andhra Pradesh & Telangana.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {[Linkedin, Twitter, Facebook, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-orange hover:text-orange-foreground transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/60 hover:text-orange text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-primary-foreground/60 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/60 text-sm">
                  Andhra Pradesh & Telangana, India
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/60 text-sm">
                  +91 98765 43210
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/60 text-sm">
                  info@varmaenterprises.com
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom mx-auto px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © {currentYear} VARMA INDUSTRIAL ENTERPRISES. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
