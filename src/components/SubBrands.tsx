import subBrandOneLogo from "../assets/subbrand-one-logo.jpeg";
import subBrandTwoLogo from "../assets/subbrand-two-logo.jpeg";

const subBrands = [
  {
    logo: subBrandOneLogo,
    name: "VE Enterprises", // replace with actual name
    description: "Distributors of Ador Welding", // replace
  },
  {
    logo: subBrandTwoLogo,
    name: "VE Infra", // replace with actual name
    description: "IBR & NON-IBR components manufacturers", // replace
  },
];

const SubBrands = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            Our Group
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
            Part of the Varma Industrial Enterprises Family
          </h2>
          <p className="text-muted-foreground text-lg mt-3 max-w-2xl mx-auto">
            Together with our associated brands, we deliver end-to-end
            industrial solutions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {subBrands.map((brand, index) => (
            <div
              key={index}
              className="card-steel p-8 flex flex-col items-center text-center hover:border-accent transition-colors"
            >
              <div className="w-32 h-32 mb-6 flex items-center justify-center">
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                {brand.name}
              </h3>
              <p className="text-muted-foreground text-sm">
                {brand.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubBrands;
