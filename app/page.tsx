import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChoose from "@/components/WhyChoose";
import Applications from "@/components/Applications";
import HowItWorks from "@/components/HowItWorks";
import Products from "@/components/Products";
import Partners from "@/components/Partners";
import GovTrust from "@/components/GovTrust";
import Resources from "@/components/Resources";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <WhyChoose />
        <Applications />
        <HowItWorks />
        <Products />
        <Partners />
        <GovTrust />
        <Resources />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
