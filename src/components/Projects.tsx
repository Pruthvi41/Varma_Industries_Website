import { ExternalLink } from "lucide-react";
import completedProjectImg from "@/assets/completed-project.jpg";

const projects = [
  {
    client: "Oil Refineries",
    type: "Refinery Extensions & Modifications",
    scope: "Steel structures, piping systems, storage tanks",
  },
  {
    client: "Power Plants",
    type: "Boiler Erections & Modifications",
    scope: "Heavy fabrication, erection works, piping",
  },
  {
    client: "Water Utilities",
    type: "Industrial Water Pipelines",
    scope: "Pipeline fabrication, installation, testing",
  },
  {
    client: "Port Authorities",
    type: "Bulk Terminal Erections",
    scope: "Marine structures, jetties, loading systems",
  },
  {
    client: "Manufacturing",
    type: "Industrial Warehouses",
    scope: "Pre-engineered buildings, steel frames",
  },
  {
    client: "Energy Sector",
    type: "Tower Fabrications",
    scope: "Transmission towers, structural steel",
  },
];

const milestones = [
  { year: "2006", event: "Company Founded" },
  { year: "2010", event: "ISO 9001 Certification" },
  { year: "2014", event: "Second Manufacturing Unit" },
  { year: "2018", event: "Major Refinery Project" },
  { year: "2022", event: "Expanded to 160K sq.m" },
  { year: "2024", event: "500+ Projects Milestone" },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container-custom mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            Our Track Record
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Projects & Milestones
          </h2>
          <p className="text-muted-foreground text-lg">
            A proven track record of delivering complex industrial projects 
            across multiple sectors.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Projects Table */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
              Major Project Types
            </h3>
            <div className="card-steel overflow-hidden">
              <div className="bg-primary text-primary-foreground p-4 grid grid-cols-3 gap-4 font-semibold text-sm">
                <span>Sector</span>
                <span>Project Type</span>
                <span>Scope</span>
              </div>
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`p-4 grid grid-cols-3 gap-4 text-sm ${
                    index % 2 === 0 ? "bg-card" : "bg-secondary/30"
                  } hover:bg-accent/5 transition-colors`}
                >
                  <span className="font-medium text-foreground">
                    {project.client}
                  </span>
                  <span className="text-muted-foreground">{project.type}</span>
                  <span className="text-muted-foreground text-xs">
                    {project.scope}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
              Company Milestones
            </h3>
            <div className="relative pl-8 border-l-2 border-accent/30">
              {milestones.map((milestone, index) => (
                <div key={index} className="mb-8 relative">
                  <div className="absolute -left-[41px] w-4 h-4 bg-accent rounded-full border-4 border-background" />
                  <span className="text-accent font-heading font-bold text-lg">
                    {milestone.year}
                  </span>
                  <p className="text-foreground font-medium">
                    {milestone.event}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Project Image */}
        <div className="relative rounded-lg overflow-hidden shadow-xl group">
          <img
            src={completedProjectImg}
            alt="Completed Steel Structure Project"
            className="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy/40 to-transparent flex items-end">
            <div className="p-8 md:p-12 w-full">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <span className="bg-orange text-orange-foreground px-3 py-1 rounded text-sm font-medium mb-3 inline-block">
                    Featured Project
                  </span>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground">
                    Industrial Steel Structure Complex
                  </h3>
                  <p className="text-primary-foreground/70 mt-2">
                    Large-scale fabrication and erection for manufacturing facility
                  </p>
                </div>
                <a
                  href="#contact"
                  className="flex items-center gap-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground px-6 py-3 rounded-lg transition-colors"
                >
                  View Details <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
