import { Metadata } from "next";

import Contact from "@/components/HomePage/Contact/Contact";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch with Svelue",
  description:
    "Reach out to the Svelue team for website services, branding, and creative solutions. Fast response and professional results for your business.",
};

export default function ContactPage() {
  return (
    <main className="container mx-auto max-w-7xl px-6">
      <Contact />
    </main>
  );
}
