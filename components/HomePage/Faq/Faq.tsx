"use client";

import { Accordion, AccordionItem } from "@heroui/react";

export default function Faq() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  const faqItems = [
    {
      id: "faq-1",
      title: "Accordion 1",
      content: defaultContent
    },
    {
      id: "faq-2", 
      title: "Accordion 2",
      content: defaultContent
    },
    {
      id: "faq-3",
      title: "Accordion 3", 
      content: defaultContent
    }
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