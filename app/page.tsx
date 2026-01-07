import About from "@/components/About/About";
import Contacts from "@/components/Contacts/Contacts";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Contacts />
    </main>
  );
}
