import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import Applications from "@/components/Applications";
import HowItWorks from "@/components/HowItWorks";
import Products from "@/components/Products";
import GovTrust from "@/components/GovTrust";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Benefits />
        <Applications />
        <HowItWorks />
        <Products />
        <GovTrust />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
