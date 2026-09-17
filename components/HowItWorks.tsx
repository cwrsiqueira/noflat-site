const steps = [
  {
    number: "01",
    title: "Prepare",
    description:
      "Remove the valve core and completely deflate the tire. Break the bead and separate the tire from the rim, positioning the TPMS sensor opposite the application area.",
  },
  {
    number: "02",
    title: "Install",
    description:
      "Insert the NoFlat dispensing hose through the bead opening and add the recommended amount for the tire size. Reinstall the tire and inflate to manufacturer pressure.",
  },
  {
    number: "03",
    title: "Distribute",
    description:
      "Drive immediately for approximately 6–10 miles at normal road speed to distribute the sealant evenly. Recheck tire pressure after about 10 minutes and adjust if needed.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-surface py-20 md:py-32">
      <div className="section-padding mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl md:mb-16">
          <p className="text-label text-secondary mb-4">How It Works</p>
          <h2 className="text-h1">Professional Installation in Three Steps</h2>
          <p className="mt-4 text-secondary">
            NoFlat is installed through the bead opening — not the valve stem — for
            proper coverage and TPMS-safe application.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {steps.map((step) => (
            <article key={step.number}>
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
