import Image from "next/image";

export default function About() {
  return (
    <section id="technology" className="bg-neutral py-20 md:py-32">
      <div className="section-padding mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="text-label text-secondary mb-4">Technology</p>
          <h2 className="text-h1 mb-6">Advanced Protection. Simple Performance.</h2>
          <div className="space-y-4 text-secondary">
            <p>
              NoFlat is an advanced water-based tire sealant designed to provide continuous
              puncture protection from the inside out. The formula remains inside the tire,
              automatically sealing punctures as they occur to help maintain tire pressure
              and keep vehicles moving.
            </p>
            <p>
              Designed for passenger vehicles, commercial fleets, trailers, and heavy-duty
              equipment, NoFlat helps reduce downtime, lower maintenance costs, and keep
              operations running with confidence.
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
