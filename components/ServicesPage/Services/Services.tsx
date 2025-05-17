"use client";

const services = [
  {
    title: "Web Development",
    description:
      "Custom website development using modern technologies like Next.js, React, and Laravel. We create responsive, fast, and SEO-friendly websites.",
    features: [
      "Custom Website Development",
      "E-commerce Solutions",
      "Web Applications",
      "CMS Integration",
      "Website Maintenance",
    ],
  },
  {
    title: "Video Editing",
    description:
      "Professional video editing services for your marketing needs, social media content, and corporate presentations.",
    features: [
      "Social Media Content",
      "Marketing Videos",
      "Corporate Videos",
      "Motion Graphics",
      "Video Optimization",
    ],
  },
  {
    title: "Media Management",
    description:
      "Comprehensive social media management to boost your brand's online presence and engagement.",
    features: [
      "Social Media Strategy",
      "Content Creation",
      "Community Management",
      "Analytics & Reporting",
      "Brand Development",
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
                <li key={featureIndex} className="flex items-center text-gray-300">
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