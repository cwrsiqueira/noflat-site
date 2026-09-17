const credentials = [
  { label: "Distributed by", value: "Alba Imports LLC" },
  { label: "Status", value: "SAM.gov Registered" },
  { label: "CAGE / NCAGE", value: "21H26" },
  { label: "UEI", value: "MPCSSU99PPS9" },
];

const markets = [
  "Police Departments",
  "Fire Departments",
  "Public Works",
  "School Districts",
  "Transit Agencies",
  "Municipal Fleets",
  "Bulk Procurement",
];

const packaging = [
  { name: "5.3 Gallon Pail", status: "Available" },
  { name: "55 Gallon Drum", status: "Coming Soon" },
  { name: "275 Gallon IBC Tote", status: "Coming Soon" },
];

export default function GovTrust() {
  return (
    <section id="government" className="bg-neutral py-20 md:py-32">
      <div className="section-padding mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl md:mb-16">
          <p className="text-label text-secondary mb-4">Government</p>
          <h2 className="text-h1 mb-4">Procurement Ready Tire Protection</h2>
          <p className="text-secondary">
            NoFlat supports federal, state, and local agencies with professional tire
            protection solutions, procurement documentation, and responsive support for
            fleet operations.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-h1 mb-6 text-lg">Trusted Government Supplier</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {credentials.map((item) => (
              <div key={item.label} className="card border border-secondary/20">
                <p className="text-label text-secondary mb-2">{item.label}</p>
                <p className="font-medium text-primary">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-h1 mb-3 text-lg">Procurement Documentation</h3>
          <p className="mb-6 max-w-2xl text-secondary">
            Professional documentation prepared to support public-sector purchasing and
            procurement requirements.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="card border border-secondary/20">
              <h4 className="mb-2 text-lg font-medium">Capability Statement</h4>
              <p className="mb-4 text-sm text-secondary">
                Company overview, capabilities, and procurement readiness.
              </p>
              <span className="text-label text-secondary">Coming Soon</span>
            </article>
            <article className="card border border-secondary/20">
              <h4 className="mb-2 text-lg font-medium">Product Brochure</h4>
              <p className="mb-4 text-sm text-secondary">
                Product technology, applications, packaging, and benefits.
              </p>
              <span className="text-label text-secondary">Coming Soon</span>
            </article>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-h1 mb-6 text-lg">Technical Documents</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="card border border-secondary/20">
              <h4 className="mb-2 text-lg font-medium">Technical Data Sheet (TDS)</h4>
              <p className="mb-4 text-sm text-secondary">
                Technical specifications and performance information.
              </p>
              <span className="text-label text-secondary">Coming Soon</span>
            </article>
            <article className="card border border-secondary/20">
              <h4 className="mb-2 text-lg font-medium">Safety Data Sheet (SDS)</h4>
              <p className="mb-4 text-sm text-secondary">
                Safety, handling, storage, transportation, and regulatory information.
              </p>
              <span className="text-label text-secondary">Available Upon Request</span>
            </article>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-h1 mb-3 text-lg">Government Markets</h3>
          <p className="mb-6 max-w-2xl text-secondary">
            Professional packaging solutions designed to support agencies and fleet
            operations of every size.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {markets.map((market) => (
              <div
                key={market}
                className="border border-secondary/20 bg-surface px-5 py-4 text-primary"
              >
                {market}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-h1 mb-6 text-lg">Available Packaging</h3>
          <ul className="space-y-3">
            {packaging.map((item) => (
              <li key={item.name} className="flex items-center gap-3 text-secondary">
                <span className="h-1.5 w-1.5 rounded-full bg-tertiary" />
                <span className="text-primary">{item.name}</span>
                <span className="text-label text-secondary">({item.status})</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border border-secondary/20 bg-surface p-8 md:p-10">
          <h3 className="text-h1 mb-3 text-lg">Need Procurement Assistance?</h3>
          <p className="mb-6 max-w-2xl text-secondary">
            Whether you&apos;re requesting technical documentation, product information, or
            a government quotation, our Government Sales Team is ready to assist throughout
            the purchasing process.
          </p>
          <a href="#contact" className="btn-primary">
            Contact Government Sales
          </a>
        </div>
      </div>
    </section>
  );
}
