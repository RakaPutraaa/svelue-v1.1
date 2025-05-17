"use client";

import YellowGlassButton from "@/components/Ui/YellowGlassButton";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="py-16 px-4 bg-[#18181b]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-gray-300 text-lg mb-8">
          Let's work together to bring your digital vision to life. Our team is ready
          to help you succeed in the digital world.
        </p>
        <YellowGlassButton as={Link} href="/contact">
          Get Started Today
        </YellowGlassButton>
      </div>
    </section>
  );
};

export default CTA;