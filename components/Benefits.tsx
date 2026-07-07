const benefits = [
  {
    title: "Instant Seal",
    description:
      "Seals punctures up to 6mm on passenger vehicles and up to 8mm on commercial tires — immediately after the object is removed.",
  },
  {
    title: "Fuel Efficiency",
    description:
      "Maintains optimal tire pressure and balance, contributing to up to 3% savings in fuel consumption.",
  },
  {
    title: "Extended Tire Life",
    description:
      "Reduces heat buildup and uneven wear, extending tire lifespan by up to 20%.",
  },
  {
    title: "Fast Application",
    description:
      "Applied in approximately 15 minutes through the valve stem — no dismounting required.",
  },
  {
    title: "Eco-Safe Formula",
    description:
      "Non-toxic, biodegradable, and safe for tires, wheels, and TPMS sensors.",
  },
];

export default function Benefits() {
  return (
    <section className="bg-surface py-20 md:py-32">
      <div className="section-padding mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl md:mb-16">
          <p className="text-label text-secondary mb-4">Benefits</p>
          <h2 className="text-h1">Protection That Pays for Itself</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="card border border-secondary/20"
            >
              <h3 className="text-h1 mb-3 text-base md:text-lg">{benefit.title}</h3>
              <p className="text-secondary">{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
