const steps = [
  {
    number: "01",
    title: "Inject",
    description:
      "The sealant is injected through the valve stem in approximately 15 minutes. For vehicles with TPMS sensors, manual application between the tire and rim is recommended.",
  },
  {
    number: "02",
    title: "Distribute",
    description:
      "Drive 6–10 miles at moderate speed to evenly distribute the gel across the inner tread, forming a continuous protective layer.",
  },
  {
    number: "03",
    title: "Protect",
    description:
      "The inner coating seals punctures automatically when air pressure pushes the gel into the opening — no roadside repair needed.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-surface py-20 md:py-32">
      <div className="section-padding mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl md:mb-16">
          <p className="text-label text-secondary mb-4">How It Works</p>
          <h2 className="text-h1">Three Steps to Total Protection</h2>
        </div>

        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {steps.map((step) => (
            <article key={step.number} className="relative">
              <span className="text-label text-secondary mb-4 block">{step.number}</span>
              <h3 className="text-h1 mb-4">{step.title}</h3>
              <p className="text-secondary">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
