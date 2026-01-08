import About from "@/components/About/About";
import Contacts from "@/components/Contacts/Contacts";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Treatments from "@/components/Treatments/Treatments";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Treatments />
      <Contacts />
      <Footer />
    </main>
  );
}
