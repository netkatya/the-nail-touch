import About from "@/components/About/About";
import Contacts from "@/components/Contacts/Contacts";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Contacts />
      <Footer />
    </main>
  );
}
