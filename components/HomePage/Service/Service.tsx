"use client";

import CardServices from "@/components/Ui/CardServices";

const services = [
  {
    id: "web-dev",
    title: "Web Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: "/images/app-development.png",
  },
  {
    id: "video-edit",
    title: "Video Editing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: "/images/editing.png",
  },
  {
    id: "media-mgmt",
    title: "Media Management",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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