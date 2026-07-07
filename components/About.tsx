import Image from "next/image";

export default function About() {
  return (
    <section id="technology" className="bg-neutral py-20 md:py-32">
      <div className="section-padding mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="text-label text-secondary mb-4">Technology</p>
          <h2 className="text-h1 mb-6">Engineered to Keep You Moving</h2>
          <div className="space-y-4 text-secondary">
            <p>
              NO FLAT is a high-performance liquid sealant formulated with rubber
              powder and eco-conscious components. Applied inside the tire, it creates
              a protective layer across the inner tread — sealing punctures the moment
              they occur.
            </p>
            <p>
              Born to eliminate the unexpected, our technology works preventively and
              correctively. Whether you are commuting, managing a fleet, or operating
              mission-critical vehicles, NO FLAT delivers the continuity your
              operation demands.
            </p>
            <p>
              Non-toxic, biodegradable, and compatible with TPMS sensors, our formula
              is designed for every tire type — from passenger cars and motorcycles to
              commercial trucks, buses, and heavy equipment.
            </p>
          </div>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80"
            alt="Close-up of tire tread"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
