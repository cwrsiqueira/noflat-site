import Image from "next/image";

const applications = [
  {
    label: "Passenger",
    title: "Passenger Vehicles",
    description: "Daily commuting and family travel with uninterrupted peace of mind.",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80",
  },
  {
    label: "Government",
    title: "Government & Municipal Fleets",
    description:
      "Mission-ready protection for police, fire, EMS, and municipal service vehicles.",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
  },
  {
    label: "Commercial",
    title: "Commercial & Logistics",
    description:
      "Keep delivery vans, trucks, and logistics fleets on schedule without downtime.",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ec0cdc265c?auto=format&fit=crop&w=800&q=80",
  },
  {
    label: "Powersports",
    title: "Motorcycles & Powersports",
    description: "Off-road confidence and on-road reliability for riders and enthusiasts.",
    image:
      "https://images.unsplash.com/photo-1558981403-c5f9899a28a7?auto=format&fit=crop&w=800&q=80",
  },
  {
    label: "Heavy Duty",
    title: "Heavy Equipment & Agriculture",
    description:
      "Rugged protection for construction, farming, and industrial machinery.",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Applications() {
  return (
    <section id="applications" className="bg-neutral py-20 md:py-32">
      <div className="section-padding mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl md:mb-16">
          <p className="text-label text-secondary mb-4">Applications</p>
          <h2 className="text-h1">Built for Every Sector</h2>
          <p className="mt-4 text-secondary">
            From personal vehicles to government fleets and heavy machinery — one
            solution, every tire.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {applications.map((app) => (
            <article
              key={app.title}
              className="group relative aspect-[4/5] overflow-hidden rounded-lg"
            >
              <Image
                src={app.image}
                alt={app.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <p className="text-label mb-2 text-white/80">{app.label}</p>
                <h3 className="text-h1 text-white">{app.title}</h3>
                <p className="mt-2 text-sm text-white/85">{app.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
