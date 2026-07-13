import { useState } from "react";
import {
  Shield,
  CheckCircle2,
  Users,
  Clock,
  FileText,
  X,
} from "lucide-react";

const certifications = [
  {
    icon: Shield,
    title: "ISO 9001:2015",
    description: "Quality Management System certified organization",
    pdf: "/certificates/iso-9001-2015.pdf", // place file in public/certificates/
  },
  // Add more certifications here as they're available, e.g.:
  // {
  //   icon: FileCheck,
  //   title: "Third-Party Testing",
  //   description: "Weld testing by internationally recognized agencies",
  //   pdf: "/certificates/third-party-testing.pdf",
  // },
];

// const sops = [
//   "Operations",
//   "Finance",
//   "Human Resources",
//   "Engineering",
//   "Plant & Machinery",
//   "Information Technology",
//   "Planning",
//   "Contracts",
//   "HSE (Health, Safety & Environment)",
//   "QA/QC",
//   "Internal Audit",
// ];

// Matches Tailwind's default `md` breakpoint (768px) used elsewhere in this project
const MOBILE_BREAKPOINT = 768;

const isMobileViewport = () =>
  typeof window !== "undefined" && window.innerWidth < MOBILE_BREAKPOINT;

const Quality = () => {
  const [activePdf, setActivePdf] = useState<{ title: string; pdf: string } | null>(
    null
  );

  const handleViewCertificate = (cert: { title: string; pdf: string }) => {
    if (isMobileViewport()) {
      // Mobile: open directly in a new tab (iframes render PDFs unreliably on mobile browsers)
      window.open(cert.pdf, "_blank", "noopener,noreferrer");
    } else {
      // Desktop: open in-page modal
      setActivePdf(cert);
    }
  };

  return (
    <section id="quality" className="section-padding bg-secondary/30">
      <div className="container-custom mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            Our Commitment
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Quality & Certifications
          </h2>
          <p className="text-muted-foreground text-lg">
            Committed to delivering globally acceptable quality standards with 
            100% customer satisfaction.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Certifications */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
              Certifications & Standards
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="card-steel p-6 flex items-start gap-4 hover:border-accent transition-colors"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <cert.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-heading text-lg font-semibold text-foreground mb-1">
                      {cert.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-3">
                      {cert.description}
                    </p>
                    <button
                      onClick={() => handleViewCertificate(cert)}
                      className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:underline"
                    >
                      <FileText className="w-4 h-4" />
                      View Certificate
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Quality Promise */}
            <div className="mt-8 bg-accent/10 border border-accent/20 rounded-lg p-6">
              <h4 className="font-heading text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                Our Quality Promise
              </h4>
              <ul className="space-y-3">
                {[
                  "Strict adherence to client specifications",
                  "In-house engineering and quality control",
                  "100% customer satisfaction guarantee",
                  "Timely project delivery",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-foreground"
                  >
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Management & SOPs */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
              Management Excellence
            </h3>

            {/* Management Team */}
            <div className="card-steel p-6 mb-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-semibold text-foreground">
                    Experienced Leadership
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Young, dynamic management with domain expertise
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-semibold text-foreground">
                    Timely Decisions
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    State-of-the-art systems for efficient project execution
                  </p>
                </div>
              </div>
            </div>

            {/* SOPs */}
            {/* <h4 className="font-heading text-lg font-semibold text-foreground mb-4">
              Standard Operating Procedures
            </h4>
            <div className="card-steel p-6">
              <div className="flex flex-wrap gap-2">
                {sops.map((sop, index) => (
                  <span
                    key={index}
                    className="bg-secondary text-secondary-foreground text-sm px-4 py-2 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                  >
                    {sop}
                  </span>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* PDF Modal (desktop only — mobile opens a new tab instead) */}
      {activePdf && (
        <div
          className="fixed inset-0 z-50 bg-navy-dark/80 flex items-center justify-center p-4"
          onClick={() => setActivePdf(null)}
        >
          <div
            className="bg-background rounded-lg shadow-xl w-full max-w-3xl h-[85vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h3 className="font-heading font-semibold text-foreground">
                {activePdf.title}
              </h3>
              <div className="flex items-center gap-3">
                {/* <a
                  href={activePdf.pdf}
                  download
                  className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:underline"
                >
                  <Download className="w-4 h-4" />
                  Download
                </a> */}
                <button
                  onClick={() => setActivePdf(null)}
                  aria-label="Close"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* PDF Preview */}
            <div className="flex-1">
              <iframe
                src={activePdf.pdf}
                title={activePdf.title}
                className="w-full h-full rounded-b-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Quality;
