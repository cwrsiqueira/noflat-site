import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://noflattire.com"),
  title: "NO FLAT | Tire Protection Sealant",
  description:
    "Professional-grade tire sealant for passenger, fleet, and government vehicles. Instant puncture sealing, extended tire life, fuel efficiency.",
  keywords: [
    "tire sealant",
    "flat tire prevention",
    "fleet tire protection",
    "government fleet",
    "tire protection",
  ],
  openGraph: {
    title: "NO FLAT | Tire Protection Sealant",
    description:
      "Professional-grade tire sealant for passenger, fleet, and government vehicles.",
    type: "website",
    images: ["/logo_fundo_transparente.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
