export default function Contact() {
  return (
    <section id="contact" className="bg-neutral py-20 md:py-32">
      <div className="section-padding mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-label text-secondary mb-4">Contact</p>
          <h2 className="text-h1 mb-4">Let&apos;s Start the Conversation</h2>
          <p className="text-secondary">
            Whether you&apos;re interested in NoFlat products, becoming a partner, fleet
            solutions, or government procurement, our team is here to help.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="card border border-secondary/20">
            <p className="text-label text-secondary mb-2">Company</p>
            <p className="font-medium text-primary">Alba Imports LLC</p>
            <p className="mt-1 text-secondary">California, United States</p>
          </div>
          <div className="card border border-secondary/20">
            <p className="text-label text-secondary mb-2">Sales</p>
            <a
              href="mailto:sales@noflatusa.com"
              className="font-medium text-primary hover:underline"
            >
              sales@noflatusa.com
            </a>
          </div>
          <div className="card border border-secondary/20">
            <p className="text-label text-secondary mb-2">Support</p>
            <a
              href="mailto:support@noflatusa.com"
              className="font-medium text-primary hover:underline"
            >
              support@noflatusa.com
            </a>
          </div>
          <div className="card border border-secondary/20">
            <p className="text-label text-secondary mb-2">Business Hours</p>
            <p className="font-medium text-primary">Monday – Friday</p>
            <p className="mt-1 text-secondary">8:00 AM – 5:00 PM (Pacific Time)</p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a href="mailto:sales@noflatusa.com" className="btn-primary">
            Email Sales
          </a>
          <a href="mailto:support@noflatusa.com" className="btn-outline">
            Email Support
          </a>
        </div>

        <p className="mt-6 text-sm text-secondary">
          We typically respond to all inquiries within one business day.
        </p>
      </div>
    </section>
  );
}
