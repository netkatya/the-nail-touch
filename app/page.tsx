import About from "@/components/About/About";
import Contacts from "@/components/Contacts/Contacts";
import Footer from "@/components/Footer/Footer";
import Gallery from "@/components/Gallery/Gallery";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Price from "@/components/Price/Price";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import Treatments from "@/components/Treatments/Treatments";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Treatments />
      <Price />
      <Gallery />
      <Contacts />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
