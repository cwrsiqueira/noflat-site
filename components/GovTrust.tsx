import Image from "next/image";

const stats = [
  { value: "6mm", label: "Max puncture seal (passenger)" },
  { value: "20%", label: "Longer tire life" },
  { value: "3%", label: "Potential fuel savings" },
];

const bullets = [
  "Reduced vehicle downtime and roadside emergencies",
  "Operational continuity for mission-critical fleets",
  "Predictable maintenance costs and fewer tire replacements",
  "Enhanced safety for drivers, passengers, and the public",
];

export default function GovTrust() {
  return (
    <section className="relative flex min-h-[80vh] items-center md:min-h-screen">
      <Image
        src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1920&q=80"
        alt="City street with fleet vehicles"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="section-padding relative z-10 mx-auto w-full max-w-7xl py-32">
        <p className="text-label mb-4 text-white/80">Government & Fleet</p>
        <h2 className="text-display max-w-2xl text-white">
          Built for Mission-Critical Fleets
        </h2>
        <p className="mt-6 max-w-xl text-white/90">
          When every minute off the road matters, NO FLAT delivers the reliability
          government agencies and fleet operators need to stay operational.
        </p>

        <ul className="mt-8 max-w-xl space-y-3">
          {bullets.map((item) => (
            <li key={item} className="flex items-start gap-3 text-white/90">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-display text-white">{stat.value}</p>
              <p className="text-label mt-2 text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
