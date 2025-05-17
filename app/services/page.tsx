import Hero from "@/components/ServicesPage/Hero/Hero";
import Services from "@/components/ServicesPage/Services/Services";
import Process from "@/components/ServicesPage/Process/Process";
import Contact from "@/components/HomePage/Contact/Contact";

export default function ServicesPage() {
  return (
    <main className="container mx-auto max-w-7xl px-6">
      <Hero />
      <Services />
      <Process />
      <Contact />
    </main>
  );
}
