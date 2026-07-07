"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-surface py-20 md:py-32">
      <div className="section-padding mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="text-label text-secondary mb-4">Contact</p>
            <h2 className="text-h1 mb-6">Get in Touch</h2>
            <p className="mb-8 text-secondary">
              Interested in NO FLAT for your fleet or organization? Reach out for
              pricing, distribution, or partnership inquiries.
            </p>

            <dl className="space-y-4 text-secondary">
              <div>
                <dt className="text-label text-secondary">Email</dt>
                <dd className="mt-1">
                  <a
                    href="mailto:contact@noflattire.com"
                    className="text-primary hover:underline"
                  >
                    contact@noflattire.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-label text-secondary">Phone</dt>
                <dd className="mt-1">+1 (555) 000-0000</dd>
              </div>
              <div>
                <dt className="text-label text-secondary">Location</dt>
                <dd className="mt-1">United States</dd>
              </div>
            </dl>
          </div>

          <div>
            {submitted ? (
              <div className="card border border-secondary/20 py-12 text-center">
                <p className="text-h1 mb-2">Thank you!</p>
                <p className="text-secondary">
                  We&apos;ve received your message and will be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="text-label text-secondary mb-2 block">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-md border border-secondary/30 bg-neutral px-4 py-3 text-primary outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-label text-secondary mb-2 block">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-md border border-secondary/30 bg-neutral px-4 py-3 text-primary outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="organization"
                    className="text-label text-secondary mb-2 block"
                  >
                    Organization
                  </label>
                  <input
                    id="organization"
                    name="organization"
                    type="text"
                    className="w-full rounded-md border border-secondary/30 bg-neutral px-4 py-3 text-primary outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-label text-secondary mb-2 block">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full resize-none rounded-md border border-secondary/30 bg-neutral px-4 py-3 text-primary outline-none focus:border-primary"
                  />
                </div>
                <button type="submit" className="btn-primary w-full sm:w-auto">
                  Contact Us
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
