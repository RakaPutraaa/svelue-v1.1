import Hero from "@/components/AboutPage/Hero/Hero";
import Service from "@/components/HomePage/Service/Service";
import About from "@/components/HomePage/About/About";
import Values from "@/components/AboutPage/Values/Values";

export default function ContactPage() {
  return (
    <main className="container mx-auto max-w-7xl px-6">
      <Hero />
      <About />
      <Service />
      <Values />
    </main>
  );
}
