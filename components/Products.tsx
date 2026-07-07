import Image from "next/image";

const products = [
  {
    name: "Passenger Sealant",
    volume: "700ml – 1.2L",
    application: "Cars, SUVs, crossovers",
    details: "Available in 4-pack kits for complete vehicle coverage.",
    image:
      "https://images.unsplash.com/photo-1632823471565-1ecdf7230f91?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Motorcycle Sealant",
    volume: "400ml – 800ml",
    application: "Motorcycles, ATVs, scooters",
    details: "Single-application pouches sized for two-wheel vehicles.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Commercial Sealant",
    volume: "900ml – 1.2L",
    application: "Trucks, buses, fleet vehicles",
    details: "Heavy-duty formula for commercial and municipal fleets.",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ec0cdc265c?auto=format&fit=crop&w=600&q=80",
  },
];

export default function Products() {
  return (
    <section id="products" className="bg-neutral py-20 md:py-32">
      <div className="section-padding mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl md:mb-16">
          <p className="text-label text-secondary mb-4">Product Line</p>
          <h2 className="text-h1">Solutions for Every Vehicle</h2>
          <p className="mt-4 text-secondary">
            Professional-grade sealant formulations tailored to your fleet — contact us
            for volume pricing and distribution inquiries.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product) => (
            <article key={product.name} className="card overflow-hidden border border-secondary/20 p-0">
              <div className="relative aspect-[16/10]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-h1 mb-2 text-lg">{product.name}</h3>
                <dl className="mb-4 space-y-2 text-sm text-secondary">
                  <div>
                    <dt className="text-label inline text-secondary">Volume</dt>
                    <dd className="mt-1">{product.volume}</dd>
                  </div>
                  <div>
                    <dt className="text-label inline text-secondary">Application</dt>
                    <dd className="mt-1">{product.application}</dd>
                  </div>
                </dl>
                <p className="mb-6 text-sm text-secondary">{product.details}</p>
                <a href="#contact" className="btn-outline">
                  Learn More
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
