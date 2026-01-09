import About from "@/components/About/About";
import Contacts from "@/components/Contacts/Contacts";
import Footer from "@/components/Footer/Footer";
import Gallery from "@/components/Gallery/Gallery";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Price from "@/components/Price/Price";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Price />
      <Gallery />
      <Contacts />
      <Footer />
    </main>
  );
}
