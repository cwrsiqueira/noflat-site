import Image from "next/image";

const products = [
  {
    name: "5.3 Gallon Pail",
    status: "Available Now",
    available: true,
    description:
      "Maximum flexibility. Easy to transport, store, and handle for everyday professional use.",
    image: "/images/products/pail.jpg",
  },
  {
    name: "55 Gallon Drum",
    status: "Coming Soon",
    available: false,
    description:
      "Greater efficiency. Reduces refill frequency while supporting higher-volume operations.",
    image: "/images/products/drum.jpg",
  },
  {
    name: "275 Gallon IBC Tote",
    status: "Coming Soon",
    available: false,
    description:
      "Bulk productivity. Optimized for large-scale storage, dispensing, and distribution.",
    image: "/images/products/ibc.jpg",
  },
];

export default function Products() {
  return (
    <section id="products" className="bg-neutral py-20 md:py-32">
      <div className="section-padding mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl md:mb-16">
          <p className="text-label text-secondary mb-4">Products</p>
          <h2 className="text-h1">Packaging Solutions</h2>
          <p className="mt-4 text-secondary">
            NoFlat is currently available in professional packaging designed for commercial
            use, with larger bulk options under development to support fleets, distributors,
            and industrial operations.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="card overflow-hidden border border-secondary/20 p-0"
            >
              <div className="relative aspect-square bg-surface">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-6"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <p
                  className={`text-label mb-2 ${
                    product.available ? "text-tertiary" : "text-secondary"
                  }`}
                >
                  {product.status}
                </p>
                <h3 className="text-h1 mb-3 text-lg">{product.name}</h3>
                <p className="mb-6 text-sm text-secondary">{product.description}</p>
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
