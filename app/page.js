import Nav from "@/components/layout/Nav";
import Hero from "@/components/home/Hero";
import TrustIntro from "@/components/home/TrustIntro";
import BrandIntro from "@/components/home/BrandIntro";
import SantaSplit from "@/components/home/SantaSplit";
import QuickLinks from "@/components/home/QuickLinks";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <TrustIntro />
      <BrandIntro />
      <SantaSplit />
      <QuickLinks />
      <Footer />
    </>
  );
}
