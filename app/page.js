import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Portfolio from "@/components/Portfolio/Portfolio";
import Stacks from "@/components/Skills/Stacks";

export default function Home() {
  return (
    <main className="uk-position-relative">
      <Navbar />
      <Hero />
      <Stacks />
      <Portfolio />
      <Contact />
    </main>
  );
}
