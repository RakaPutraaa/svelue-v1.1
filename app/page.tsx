import { Metadata } from "next";

import Hero from "@/components/HomePage/Hero/Hero";
import About from "@/components/HomePage/About/About";
import Service from "@/components/HomePage/Service/Service";
import Faq from "@/components/HomePage/Faq/Faq";
import Contact from "@/components/HomePage/Contact/Contact";
import TechStack from "@/components/HomePage/TechStack/TechStack";

export const metadata: Metadata = {
  title: "Svelue - Website Maker & Branding Services in Bali",
  description:
    "Svelue is a creative digital team based in Bali, offering affordable website creation, branding, logo design, and digital solutions for small businesses and startups.",
};

export default function HomePage() {
  return (
    <main className="container mx-auto max-w-7xl px-6">
      <Hero />
      <About />
      <TechStack />
      <Service />
      <Faq />
      <Contact />
    </main>
  );
}
