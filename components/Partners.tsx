export default function Partners() {
  return (
    <section id="partner" className="bg-surface py-20 md:py-32">
      <div className="section-padding mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl md:mb-16">
          <p className="text-label text-secondary mb-4">Partners</p>
          <h2 className="text-h1">Grow with NoFlat</h2>
          <p className="mt-4 text-secondary">
            Join our network of partners and bring advanced tire protection technology to
            your customers. Whether you&apos;re expanding your product portfolio or looking
            for a private label solution, we&apos;re here to help your business grow.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <article className="card border border-secondary/20">
            <h3 className="text-h1 mb-4 text-lg">Become a Dealer</h3>
            <p className="text-secondary">
              Become an authorized NoFlat dealer and offer advanced tire protection
              solutions backed by marketing, technical resources, and dependable supply.
            </p>
          </article>
          <article className="card border border-secondary/20">
            <h3 className="text-h1 mb-4 text-lg">Fleet Solutions</h3>
            <p className="text-secondary">
              Discover how NoFlat can help reduce downtime, lower maintenance costs, and
              improve operational efficiency across your fleet.
            </p>
          </article>
        </div>

        <div className="mt-12 border border-secondary/20 bg-neutral p-8 md:p-10">
          <h3 className="text-h1 mb-3 text-lg">Looking for Distribution Opportunities?</h3>
          <p className="mb-6 max-w-2xl text-secondary">
            Contact our sales team to discuss regional distribution opportunities.
          </p>
          <a href="#contact" className="btn-primary">
            Contact Sales
          </a>
        </div>
      </div>
    </section>
  );
}
