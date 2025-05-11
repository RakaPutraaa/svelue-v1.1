import Hero from "@/components/HomePage/Hero/Hero";
import About from "@/components/HomePage/About/About";
import Service from "@/components/HomePage/Service/Service";
import Faq from "@/components/HomePage/Faq/Faq";
import Contact from "@/components/HomePage/Contact/Contact";

export default function HomePage() {
  return (
    <main className="container mx-auto max-w-7xl px-6">
      <Hero />
      <About />
      <Service />
      <Faq />
      <Contact />
    </main>
  );
}
