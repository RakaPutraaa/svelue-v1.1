"use client";

const services = [
  {
    title: "Web Development",
    description:
      "Custom website development using modern technologies like Next.js, React, and Laravel. We create responsive, fast, and SEO-friendly websites.",
    features: ["Custom Website Development", "Website Maintenance"],
  },
  {
    title: "UI/UX",
    description:
      "Great design starts with great experience. We craft user-friendly interfaces that make your brand easy to love and hard to forget.",
    features: [
      "User Research",
      "Wireframing & Prototyping",
      "UI Design Systems",
      "UX Audits",
      "Mobile & Web Interface Design",
    ],
  },
  {
    title: "Graphic Design",
    description:
      "From logos to visuals that pop, our creative designs help your brand stand out and leave a lasting impression.",
    features: [
      "Logo Design",
      "Branding Assets",
      "Social Media Graphics",
      "Marketing Materials",
    ],
  },
  {
    title: "Video & Photo",
    description:
      "Capture your brand’s story with high-quality visuals — perfect for promotions, social media, and everything in between.",
    features: [
      "Product Photography",
      "Promotional Videos",
      "Social Media Content",
      "Video Editing",
      "Event Documentation",
    ],
  },
];

const Services = () => {
  return (
    <section className="py-16 px-4">
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#18181b] p-8 rounded-xl hover:transform hover:-translate-y-2 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-4 text-[#F8A01B]">
              {service.title}
            </h3>
            <p className="text-gray-300 mb-6">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((feature, featureIndex) => (
                <li
                  key={featureIndex}
                  className="flex items-center text-gray-300"
                >
                  <span className="mr-2 text-[#F8A01B]">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
