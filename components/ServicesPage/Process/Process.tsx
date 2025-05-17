"use client";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start by understanding your business, goals, and requirements through detailed consultation.",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "Creating a comprehensive strategy and roadmap tailored to your specific needs.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Implementing the solution using modern technologies and best practices.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Thorough testing and deployment, ensuring everything works perfectly.",
  },
];

const Process = () => {
  return (
    <section className="py-16 px-4 bg-[#18181b]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Process
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-black/50 hover:bg-black/70 transition-all duration-300"
            >
              <div className="text-4xl font-bold text-[#F8A01B] mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;