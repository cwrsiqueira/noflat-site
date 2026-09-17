import Logo from "@/components/Logo";
import { navLinks } from "@/lib/nav";

export default function Footer() {
  return (
    <footer className="border-t border-secondary/20 bg-primary py-12 text-white">
      <div className="section-padding mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row">
          <div>
            <Logo variant="footer" />
            <dl className="mt-6 space-y-2 text-sm text-white/70">
              <div>
                <dt className="sr-only">Company</dt>
                <dd>Alba Imports LLC · California, United States</dd>
              </div>
              <div>
                <dt className="sr-only">Sales</dt>
                <dd>
                  <a href="mailto:sales@noflatusa.com" className="hover:text-white">
                    sales@noflatusa.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Support</dt>
                <dd>
                  <a href="mailto:support@noflatusa.com" className="hover:text-white">
                    support@noflatusa.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Hours</dt>
                <dd>Mon–Fri 8:00 AM – 5:00 PM (PT)</dd>
              </div>
            </dl>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-label text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8">
          <p className="text-sm text-white/60">
            &copy; {new Date().getFullYear()} NO FLAT Tire Protection. Distributed by Alba
            Imports LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
