"use client";

import { Accordion, AccordionItem } from "@heroui/react";

export default function Faq() {
  const faqItems = [
    {
      id: "faq-1",
      title: "What services does Svelue offer?",
      content:
        "Svelue offers a wide range of digital services including website development (company profile, e-commerce, portfolio, etc.), graphic design (logos, posters, banners), and visual documentation such as photography and video editing. All services can be tailored to meet the needs of small to medium-sized businesses.",
    },
    {
      id: "faq-2",
      title: "Can I consult with your team before making an order?",
      content:
        "Absolutely! We highly recommend a consultation first so we can better understand your needs. Reach out to us on WhatsApp at +62 851-4103-4756, and our team will guide you from ideas to execution.",
    },
    {
      id: "faq-3",
      title: "How long does it take to complete a project?",
      content:
        "The project duration depends on the type and complexity of the service. For simple websites or designs, it usually takes 3–7 working days. For larger projects, we will provide a clear timeline during the consultation to ensure transparency and efficient delivery.",
    },
  ];

  return (
    <section className="bg-black py-12 px-4">
      <div className="text-center text-white text-3xl md:text-4xl font-bold mb-10">
        <h2>Frequently Asked Questions</h2>
      </div>
      <div className="max-w-xl mx-auto">
        <Accordion variant="shadow">
          {faqItems.map((item) => (
            <AccordionItem
              key={item.id}
              aria-label={item.title}
              title={item.title}
            >
              {item.content}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
