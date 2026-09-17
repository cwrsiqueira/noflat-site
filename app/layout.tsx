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
  title: "NO FLAT | Professional Tire Sealant",
  description:
    "Water-based tire sealant for fleets, government agencies, and professional operators. Continuous puncture protection from Alba Imports LLC.",
  keywords: [
    "tire sealant",
    "fleet tire protection",
    "government fleet",
    "TPMS compatible sealant",
    "professional tire protection",
  ],
  openGraph: {
    title: "NO FLAT | Professional Tire Sealant",
    description:
      "Water-based tire sealant for fleets, government agencies, and professional operators.",
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
