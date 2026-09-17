const features = [
  {
    title: "Continuous Protection",
    description:
      "Remains inside the tire to help protect against future punctures.",
    icon: (
      <svg viewBox="0 0 40 40" className="h-10 w-10" fill="none" aria-hidden>
        <path
          d="M20 4L8 9v9c0 8.5 5.2 14.8 12 16.5 6.8-1.7 12-8 12-16.5V9L20 4z"
          stroke="#E82127"
          strokeWidth="2"
          fill="#F4F4F4"
        />
        <path d="M20 14v8M16 18h8" stroke="#171A20" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Instant Sealing",
    description: "Automatically seals punctures as they occur.",
    icon: (
      <svg viewBox="0 0 40 40" className="h-10 w-10" fill="none" aria-hidden>
        <path
          d="M22 4L10 22h8l-2 14 14-20h-8L22 4z"
          fill="#E8A317"
          stroke="#171A20"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Water-Based Formula",
    description: "Ammonia-free, non-corrosive, and easy to clean.",
    icon: (
      <svg viewBox="0 0 40 40" className="h-10 w-10" fill="none" aria-hidden>
        <path
          d="M20 6C20 6 10 18 10 24a10 10 0 0020 0c0-6-10-18-10-18z"
          fill="#3B82C4"
          stroke="#171A20"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    title: "TPMS Compatible",
    description: "Designed to work with properly installed TPMS sensors.",
    icon: (
      <svg viewBox="0 0 40 40" className="h-10 w-10" fill="none" aria-hidden>
        <circle cx="20" cy="26" r="4" fill="#5C5E62" />
        <path
          d="M12 20a11 11 0 0116 0M8 15a16 16 0 0124 0"
          stroke="#5C5E62"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path d="M20 30v4" stroke="#171A20" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Fleet Ready",
    description:
      "Ideal for passenger vehicles, fleets, trailers, and heavy equipment.",
    icon: (
      <svg viewBox="0 0 40 40" className="h-10 w-10" fill="none" aria-hidden>
        <rect x="4" y="14" width="20" height="12" rx="1" fill="#2F9E44" stroke="#171A20" strokeWidth="1.5" />
        <path d="M24 18h6l4 5v3H24V18z" fill="#2F9E44" stroke="#171A20" strokeWidth="1.5" />
        <circle cx="10" cy="28" r="3" fill="#171A20" />
        <circle cx="30" cy="28" r="3" fill="#171A20" />
      </svg>
    ),
  },
  {
    title: "Reduced Environmental Impact",
    description: "Helps extend tire life and reduce unnecessary waste.",
    icon: (
      <svg viewBox="0 0 40 40" className="h-10 w-10" fill="none" aria-hidden>
        <circle cx="20" cy="20" r="14" fill="#3B82C4" stroke="#171A20" strokeWidth="1.5" />
        <ellipse cx="20" cy="20" rx="6" ry="14" stroke="#171A20" strokeWidth="1.5" fill="none" />
        <path d="M6 20h28M8 12h24M8 28h24" stroke="#171A20" strokeWidth="1" />
        <path
          d="M12 10c2 4 2 16 0 20M28 10c-2 4-2 16 0 20"
          stroke="#2F9E44"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    ),
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-surface py-20 md:py-32">
      <div className="section-padding mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl md:mb-16">
          <p className="text-label text-secondary mb-4">Advantages</p>
          <h2 className="text-h1">Why Professionals Choose NoFlat</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="card border border-secondary/20">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="mb-3 text-lg font-medium text-primary">{feature.title}</h3>
              <p className="text-secondary">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
