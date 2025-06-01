/* eslint-disable react/jsx-sort-props */
"use client";

import CardServices from "@/components/Ui/CardServices";

const services = [
  {
    id: "web-dev",
    title: "Web Development",
    description:
      "We build fast, responsive, and modern websites that match your business goals.",
    icon: "/images/app-development.png",
  },
  {
    id: "uiux",
    title: "UI/UX",
    description:
      "Great design starts with great experience. We craft user-friendly interfaces.",
    icon: "/images/web-design.png",
  },
  {
    id: "graphic design",
    title: "Graphic Design",
    description:
      "From logos to visuals that pop, our creative designs help your brand stand out.",
    icon: "/images/curve.png",
  },
  {
    id: "media-mgmt",
    title: "Video & Photo",
    description: "Capture your brand’s story with high-quality visuals.",
    icon: "/images/media.png",
  },
];

const Service = () => {
  return (
    <section className="bg-black py-12 px-4">
      <div className="text-center text-white text-3xl md:text-4xl font-bold mb-10">
        <h2>Our Services</h2>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {services.map((service) => (
          <CardServices
            key={service.id}
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
