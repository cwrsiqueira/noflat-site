import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[80vh] items-center md:min-h-screen">
      <Image
        src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80"
        alt="Commercial logistics warehouse and fleet operations"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="section-padding relative z-10 mx-auto w-full max-w-7xl py-32">
        <p className="text-label mb-4 text-white/80">Professional Tire Protection</p>
        <h1 className="text-display max-w-3xl text-white">Never Stop Moving.</h1>
        <p className="mt-6 max-w-xl text-base text-white/90 md:text-lg">
          Water-based tire sealant for fleets, government agencies, and professional
          operators — reducing downtime and keeping mission-critical vehicles on the road.
        </p>
        <a href="#contact" className="btn-primary mt-10 inline-block">
          Request a Quote
        </a>
      </div>
    </section>
  );
}
