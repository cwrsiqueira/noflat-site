import Link from "next/link";

const dosageRows = [
  { type: "Passenger Vehicles", size: "13–15 in", qty: "23.7 fl oz" },
  { type: "Passenger Vehicles", size: "16–18 in", qty: "33.8 fl oz" },
  { type: "Passenger Vehicles", size: "19–23 in", qty: "43.9 fl oz" },
  { type: "Commercial / Large Tires", size: "Large Tires", qty: "54–68 fl oz" },
];

const installSteps = [
  "Remove the valve core and completely deflate the tire.",
  "Break the bead and separate the tire from the rim.",
  "Ensure the TPMS sensor is positioned on the opposite side of the application area.",
  "Insert the NoFlat dispensing hose through the bead opening.",
  "Add the recommended amount of NoFlat according to the tire size.",
  "Reinstall the tire onto the rim and inflate it to the manufacturer's recommended pressure.",
  "Drive immediately for approximately 6–10 miles at normal road speed to distribute the sealant evenly inside the tire.",
  "Stop after approximately 10 minutes and verify the tire pressure. Adjust to the manufacturer's recommended pressure if necessary.",
];

export default function Resources() {
  return (
    <section id="resources" className="bg-surface py-20 md:py-32">
      <div className="section-padding mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl md:mb-16">
          <p className="text-label text-secondary mb-4">Resources</p>
          <h2 className="text-h1">Helpful Resources</h2>
          <p className="mt-4 text-secondary">
            Find installation instructions, application guidance, and answers to the most
            common questions about NoFlat products.
          </p>
        </div>

        <div className="mb-16 grid gap-6 md:grid-cols-2">
          <article className="card border border-secondary/20">
            <h3 className="text-h1 mb-3 text-lg">Installation & Dosage Guide</h3>
            <p className="mb-6 text-sm text-secondary">
              Step-by-step installation instructions, recommended application volumes, and
              best practices for professional use.
            </p>
            <a
              href="/docs/installation-dosage-guide.pdf"
              className="btn-outline"
              download
            >
              Download PDF
            </a>
          </article>
          <article className="card border border-secondary/20">
            <h3 className="text-h1 mb-3 text-lg">Frequently Asked Questions</h3>
            <p className="mb-6 text-sm text-secondary">
              Find answers to common questions about installation, compatibility, storage,
              maintenance, and product performance.
            </p>
            <Link href="/faq" className="btn-outline">
              View FAQ
            </Link>
          </article>
        </div>

        <div className="mb-16">
          <h3 className="text-h1 mb-6 text-lg">Professional Installation Instructions</h3>
          <ol className="space-y-3">
            {installSteps.map((step, index) => (
              <li key={step} className="flex gap-4 text-secondary">
                <span className="text-label shrink-0 text-primary">{String(index + 1).padStart(2, "0")}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h3 className="text-h1 mb-6 text-lg">Recommended Quantity</h3>
          <div className="overflow-x-auto border border-secondary/20">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="bg-neutral">
                <tr>
                  <th className="text-label px-4 py-3 font-medium text-secondary">
                    Vehicle Type
                  </th>
                  <th className="text-label px-4 py-3 font-medium text-secondary">
                    Wheel Size
                  </th>
                  <th className="text-label px-4 py-3 font-medium text-secondary">
                    Recommended Quantity
                  </th>
                </tr>
              </thead>
              <tbody>
                {dosageRows.map((row) => (
                  <tr key={`${row.type}-${row.size}`} className="border-t border-secondary/15">
                    <td className="px-4 py-3 text-primary">{row.type}</td>
                    <td className="px-4 py-3 text-secondary">{row.size}</td>
                    <td className="px-4 py-3 text-secondary">{row.qty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-secondary">
            Use only the recommended quantity. Do not install in tires with structural
            damage or sidewall cuts. Always follow the tire and vehicle manufacturer&apos;s
            service recommendations.
          </p>
        </div>
      </div>
    </section>
  );
}
