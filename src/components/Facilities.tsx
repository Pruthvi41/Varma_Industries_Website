import { Warehouse, Ruler, Weight, Settings } from "lucide-react";

const facilities = [
  {
    icon: Warehouse,
    value: "160,000",
    unit: "sq.m",
    label: "Total Plant Area",
  },
  {
    icon: Ruler,
    value: "18,000",
    unit: "sq.m",
    label: "Covered Area",
  },
  {
    icon: Weight,
    value: "40,000",
    unit: "tons",
    label: "Storage Capacity",
  },
  {
    icon: Settings,
    value: "250",
    unit: "MT",
    label: "Assembly Capacity",
  },
];

const equipment = [
  "CNC Machines",
  "EOT Cranes (20 MT)",
  "Mobile Cranage (12 MT)",
  "Traveling Cranes",
  "Sawing & Drilling",
  "Plate Processing",
  "Angle Masters",
  "Profiling Machines",
  "Pipe Processing",
  "Shearing Equipment",
  "Sandwich Panel Line",
  "C&Z Purlin Machine",
  "Slitting Line",
  "Roll Forming",
  "Deck Profiling",
  "Light Gauge Steel",
];

const Facilities = () => {
  return (
    <section id="facilities" className="section-padding bg-primary text-primary-foreground">
      <div className="container-custom mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange font-semibold uppercase tracking-wider text-sm">
            Our Capabilities
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Manufacturing Facilities
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Two state-of-the-art manufacturing units equipped with modern machinery 
            and extensive handling facilities.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {facilities.map((item, index) => (
            <div
              key={index}
              className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-6 text-center hover:bg-primary-foreground/10 transition-colors"
            >
              <item.icon className="w-10 h-10 text-orange mx-auto mb-4" />
              <div className="font-heading text-3xl md:text-4xl font-bold mb-1">
                {item.value}
                <span className="text-lg text-primary-foreground/60 ml-1">
                  {item.unit}
                </span>
              </div>
              <p className="text-primary-foreground/60 text-sm">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Equipment Grid */}
        <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-8">
          <h3 className="font-heading text-2xl font-bold mb-6 text-center">
            Equipment & Machinery
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {equipment.map((item, index) => (
              <div
                key={index}
                className="bg-primary-foreground/10 rounded-lg p-3 text-center text-sm hover:bg-orange hover:text-orange-foreground transition-colors cursor-default"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-6">
            <h4 className="font-heading text-xl font-semibold mb-3">
              Raw Material Storage
            </h4>
            <p className="text-primary-foreground/70 text-sm">
              50,000 sq.m dedicated storage area with capacity for up to 40,000 tons 
              of raw materials.
            </p>
          </div>
          <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-6">
            <h4 className="font-heading text-xl font-semibold mb-3">
              Blasting & Painting
            </h4>
            <p className="text-primary-foreground/70 text-sm">
              30,000 sq.m dedicated facility for surface preparation, blasting, 
              and painting operations.
            </p>
          </div>
          <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-6">
            <h4 className="font-heading text-xl font-semibold mb-3">
              Open Yard Assembly
            </h4>
            <p className="text-primary-foreground/70 text-sm">
              Large-scale assembly area with 250 MT capacity for heavy structure 
              fabrication and assembly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
