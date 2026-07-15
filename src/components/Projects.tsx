import { useMemo } from "react";
import { MapPin } from "lucide-react";

const clients = [
  { name: "Adani Wilmar Ltd / AWL Agri Business Ltd", location: "Kakinada", sector: "Oil & Gas Refineries" },
  { name: "Navbharat Limited", location: "Jangareddy Gudem", sector: "Oil & Gas Refineries" },
  { name: "Kalesuwari Refineries Oils Pvt Ltd", location: "Kakinada", sector: "Oil & Gas Refineries" },
  { name: "Agarwal Industries", location: "Kakinada", sector: "Oil & Gas Refineries" },
  { name: "Ruchi Soya Industries / Patanjali Foods Ltd", location: "IDA Peddapuram", sector: "Oil & Gas Refineries" },
  { name: "Sonthosimatha Oil Refineries Pvt Ltd", location: "Kakinada", sector: "Oil & Gas Refineries" },
  { name: "3F Oil Palm Pvt Ltd", location: "Ayyavaram", sector: "Oil & Gas Refineries" },
  { name: "AAK South East India Pvt Ltd / Arani Oils", location: "Kakinada", sector: "Oil & Gas Refineries" },
  { name: "Deepak Nexgen Feeds Pvt Ltd", location: "Hanuman Jn", sector: "Industrial Manufacturing" },
  { name: "Godrej Agrovet Limited", location: "Seethanagaram / Pothepalli", sector: "Industrial Manufacturing" },
  { name: "Avanti Feeds Limited / Avanti Frozen Foods Ltd", location: "AP", sector: "Industrial Manufacturing" },
  { name: "Sandhya Aqua Exports Pvt Ltd", location: "Ponnada", sector: "Industrial Manufacturing" },
  { name: "Devi Sea Foods Ltd", location: "Jagampeta", sector: "Industrial Manufacturing" },
  { name: "Neospark Drugs and Chemicals Pvt Ltd", location: "Telangana", sector: "Industrial Manufacturing" },
  { name: "Veer Petroleums Pvt Ltd", location: "Balabhadrapuram", sector: "Industrial Manufacturing" },
  { name: "KBK Biotech Pvt Ltd", location: "Medapadu", sector: "Industrial Manufacturing" },
  { name: "Platinum Distilleries Pvt Ltd", location: "Hyderabad", sector: "Industrial Manufacturing" },
  { name: "Sanvira Industries Ltd", location: "Atchutapuram, Visakhapatnam", sector: "Industrial Manufacturing" },
  { name: "Siriman Chemicals Ltd", location: "Atchutapuram, Visakhapatnam", sector: "Industrial Manufacturing" },
  { name: "RHI Magnesita India Limited", location: "Anakapalli", sector: "Industrial Manufacturing" },
  { name: "Rujul Chemicals Pvt Ltd", location: "Atchutapuram", sector: "Industrial Manufacturing" },
  { name: "Vishnu Chemicals Limited", location: "Atchutapuram", sector: "Industrial Manufacturing" },
  { name: "Reliance Bio Energy Limited", location: "IDA Peddapuram", sector: "Power & Energy" },
  { name: "Sembmarine Kakinada Ltd", location: "Kakinada", sector: "Marine & Offshore" },
  { name: "Pattabi Agro Foods Pvt Ltd", location: "IDA Peddapuram", sector: "Industrial Manufacturing" },
  { name: "SRMT Mall", location: "Kakinada", sector: "Urban Infrastructure" },
  { name: "KSR Infra Projects", location: "Kakinada", sector: "Urban Infrastructure" },
];

const milestones = [
  { year: "2006", event: "Company Established" },
  { year: "2015", event: "ISO 9001:2015 Certified" },
  { year: "2024", event: "100+ Projects Completed" },
];

/**
 * Computes sector distribution percentages from the client list.
 * - Automatically picks up any new sector string added to `clients`
 *   (no need to maintain a separate hardcoded list).
 * - Uses the largest remainder method so percentages always sum to 100%,
 *   even when the number of sectors or clients changes.
 * - Sorted by client count descending (largest sector first).
 */
function computeSectorDistribution(clientList: typeof clients) {
  const total = clientList.length;
  if (total === 0) return [];

  const counts = clientList.reduce<Record<string, number>>((acc, client) => {
    acc[client.sector] = (acc[client.sector] || 0) + 1;
    return acc;
  }, {});

  const raw = Object.entries(counts).map(([sector, count]) => ({
    sector,
    count,
    exact: (count / total) * 100,
  }));

  const floored = raw.map((r) => {
    const flooredPct = Math.floor(r.exact * 10) / 10;
    return {
      sector: r.sector,
      count: r.count,
      percentage: flooredPct,
      remainder: r.exact - flooredPct,
    };
  });

  const currentTotal = floored.reduce((sum, r) => sum + r.percentage, 0);
  const pointsToDistribute = Math.round((100 - currentTotal) * 10);

  const byRemainderDesc = [...floored].sort((a, b) => b.remainder - a.remainder);
  for (let i = 0; i < pointsToDistribute; i++) {
    byRemainderDesc[i % byRemainderDesc.length].percentage += 0.1;
  }

  return floored
    .sort((a, b) => b.count - a.count)
    .map((r) => ({
      sector: r.sector,
      count: r.count,
      percentage: Math.round(r.percentage * 10) / 10,
    }));
}

const Projects = () => {
  // Recomputes whenever `clients` changes (add/remove/re-sector a company,
  // including brand-new sector names not seen before).
  const sectorDistribution = useMemo(() => computeSectorDistribution(clients), []);

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container-custom mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            Our Track Record
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Project Portfolio
          </h2>
          <p className="text-muted-foreground text-lg">
            Successfully worked with {clients.length}+ clients across diverse industries in
            Andhra Pradesh & Telangana.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Sector Distribution */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
              Sector Distribution
            </h3>
            <div className="space-y-4">
              {sectorDistribution.map((item) => (
                <div key={item.sector}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-foreground font-medium">{item.sector}</span>
                    <span className="text-accent font-semibold">
                      {item.percentage % 1 === 0 ? item.percentage : item.percentage.toFixed(1)}%
                    </span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div
                      className="bg-accent rounded-full h-2 transition-all duration-500"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Timeline */}
            <h3 className="font-heading text-2xl font-bold text-foreground mb-6 mt-10">
              Milestones
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

          {/* Clients Table */}
          <div className="lg:col-span-2">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
              Our Clients
            </h3>
            <div className="card-steel overflow-hidden max-h-[600px] overflow-y-auto">
              <div className="hidden sm:grid bg-primary text-primary-foreground p-4 grid-cols-12 gap-4 font-semibold text-sm sticky top-0 z-10">
                <span className="col-span-1">#</span>
                <span className="col-span-5">Client</span>
                <span className="col-span-3">Location</span>
                <span className="col-span-3">Sector</span>
              </div>
              {clients.map((client, index) => (
                <div
                  key={index}
                  className={`p-4 text-sm ${index % 2 === 0 ? "bg-card" : "bg-secondary/30"
                    } hover:bg-accent/5 transition-colors
        flex flex-col gap-1
        sm:grid sm:grid-cols-12 sm:gap-4 sm:items-start`}
                >
                  <span className="sm:col-span-1 text-muted-foreground font-medium">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="sm:col-span-5 font-medium text-foreground break-words">
                    {client.name}
                  </span>
                  <span className="sm:col-span-3 text-muted-foreground flex items-center gap-1">
                    <MapPin className="w-3 h-3 flex-shrink-0" />
                    {client.location}
                  </span>
                  <span className="sm:col-span-3 text-muted-foreground text-xs">
                    <span className="sm:hidden font-medium text-foreground/70 mr-1">
                      Sector:
                    </span>
                    {client.sector}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Project Image */}
        {/* <div className="relative rounded-lg overflow-hidden shadow-xl group">
          <img
            src={completedProjectImg}
            alt="SRMT Mall Kakinada - Complex Steel Structure Project"
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
                    SRMT Mall, Kakinada
                  </h3>
                  <p className="text-primary-foreground/70 mt-2">
                    One of the most complex steel structures in the region — 700×700mm box sections
                    with aluminium façade, lifts, escalators & gaming zone
                  </p>
                </div>
                <a href="#contact"
                  className="flex items-center gap-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground px-6 py-3 rounded-lg transition-colors"
                >
                  Get in Touch <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;