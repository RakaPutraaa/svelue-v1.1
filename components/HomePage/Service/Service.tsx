"use client";

import CardServices from "@/components/Ui/CardServices";

const services = [
  {
    title: "Web Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: "/images/app-development.png",
  },
  {
    title: "Video Editing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: "/images/editing.png",
  },
  {
    title: "Media Management",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: "/images/media.png",
  },
];

const Service = () => {
  return (
    <section className="bg-black py-12 px-4">
      <div className="text-center text-white text-3xl md:text-4xl font-bold mb-10">
        <h1>Our Services</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {services.map((service, index) => (
          <CardServices
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default Service;
