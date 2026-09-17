import Image from "next/image";

const applications = [
  {
    label: "Government",
    title: "Government & Municipal Fleets",
    subheading: "Operational Efficiency & Mission-Critical Continuity",
    description:
      "Keep emergency vehicles, law enforcement, and public works moving without interruption. NO FLAT drastically reduces fleet downtime and unexpected maintenance costs, ensuring municipal and state services meet their operational goals. Formulated to comply with rigorous public procurement standards and institutional fleet requirements.",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=900&q=80",
  },
  {
    label: "Service",
    title: "Auto Shops & Service Centers",
    subheading: "High-Margin Revenue & Fast Service Turnaround",
    description:
      "Boost your shop's profitability per square foot by offering NO FLAT tire protection as a premium add-on service during routine maintenance, alignments, or tire changes. Whether utilizing a quick professional installation or a seamless bead-seat application for TPMS-equipped vehicles using our provided professional pump system, the process is remarkably fast. With no complex teardowns required, it delivers high-volume turnover and strong customer retention for your business.",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=900&q=80",
  },
  {
    label: "Commercial",
    title: "Commercial & Logistics",
    subheading: "Supply Chain Protection & Bottom-Line Savings",
    description:
      "In logistics, every minute of downtime cuts directly into your profits. Shield your delivery vans, trucks, and transport fleets from roadside delays and towing expenses. NO FLAT stabilizes tire pressure to improve fuel economy by up to 3% and extends overall tire lifespan by up to 20%, keeping your operations on schedule.",
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=900&q=80",
  },
];

export default function Applications() {
  return (
    <section id="applications" className="bg-neutral py-20 md:py-32">
      <div className="section-padding mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl md:mb-16">
          <p className="text-label text-secondary mb-4">Application</p>
          <h2 className="text-h1">Built for Professional Operations</h2>
          <p className="mt-4 text-secondary">
            Focused solutions for government fleets, service centers, and commercial
            logistics — one technology, every tire that keeps business moving.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {applications.map((app) => (
            <article
              key={app.title}
              className="group overflow-hidden rounded-lg border border-secondary/15 bg-surface"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={app.image}
                  alt={app.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/35" />
                <p className="text-label absolute bottom-4 left-4 text-white/85">{app.label}</p>
              </div>
              <div className="p-6">
                <h3 className="text-h1 mb-2 text-lg md:text-xl">{app.title}</h3>
                <p className="mb-3 text-sm font-medium text-primary">{app.subheading}</p>
                <p className="text-sm text-secondary">{app.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
