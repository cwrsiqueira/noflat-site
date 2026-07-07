import Logo from "@/components/Logo";

const footerLinks = [
  { href: "#technology", label: "Technology" },
  { href: "#applications", label: "Applications" },
  { href: "#products", label: "Products" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-secondary/20 bg-primary py-12 text-white">
      <div className="section-padding mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <Logo variant="footer" />

          <nav className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
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

        <div className="mt-8 border-t border-white/10 pt-8">
          <p className="text-sm text-white/60">
            &copy; {new Date().getFullYear()} NO FLAT Tire Protection. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
