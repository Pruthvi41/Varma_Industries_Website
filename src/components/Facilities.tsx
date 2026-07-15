import { Warehouse, Ruler, Weight, Settings } from "lucide-react";

const facilities = [
  {
    icon: Warehouse,
    value: "7",
    unit: "Acres",
    label: "Total Plant Area",
  },
  {
    icon: Ruler,
    value: "4",
    unit: "Acres",
    label: "Covered Area",
  },
  {
    icon: Weight,
    value: "5000",
    unit: "MT",
    label: "Steel Structure Capacity/yr",
  },
  {
    icon: Settings,
    value: "75,000",
    unit: "Mtrs",
    label: "Pipeline Capacity/yr",
  },
];

const equipment = [
  "CNC Machines",
  "EOT Cranes (20 MT)",
  "Mobile Cranage (12 MT)",
  "Cranes",
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
            Manufacturing Facilities & Machinery
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-12">
          <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-6">
            <h4 className="font-heading text-xl font-semibold mb-4">
              Unit I — Primary Manufacturing
            </h4>
            <ul className="space-y-2 text-primary-foreground/70 text-sm">
              <li>Plant Area: 30,000 sq.m | Covered: 15,000 sq.m</li>
              <li>EOT Cranes: 1 × 10 MT</li>
              <li>Open Yard Assembly: up to 1,000 MT</li>
            </ul>
          </div>
          <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-6">
            <h4 className="font-heading text-xl font-semibold mb-4">
              Unit II
            </h4>
            <ul className="space-y-2 text-primary-foreground/70 text-sm">
              <li>Plant Area: 9,500 sq.m | Covered: 7,200 sq.m</li>
              <li>EOT Cranes: 2 × 20 MT</li>
              <li>Open Yard Assembly: up to 200 MT</li>
            </ul>
          </div>
          <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-6">
            <h4 className="font-heading text-xl font-semibold mb-4">
              Material Handling equipment
            </h4>
            <ul className="space-y-2 text-primary-foreground/70 text-sm">
              <li>Plant Area: 30,000 sq.m | Covered: 15,000 sq.m</li>
              <li>EOT Cranes: 1 × 10 MT</li>
              <li>Open Yard Assembly: up to 1,000 MT</li>
            </ul>
          </div>
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
      </div>
    </section>
  );
};

export default Facilities;
