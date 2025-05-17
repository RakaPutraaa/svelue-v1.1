/* eslint-disable react/jsx-sort-props */
"use client";

import Image from "next/image";

export default function About() {
  return (
    <section className="py-16 px-4 md:px-20">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-white">
            Young Minds, Big Impact
          </h2>
          <p className="text-white text-lg leading-relaxed">
            At Svelue, we are a collective of passionate university students in
            Bali with a shared mission to help empower local entrepreneurs and
            growing businesses. Our journey began with a simple{" "}
            <span className="inline-block bg-[#F8A01B] text-[#030C4D] px-2 py-1 rounded whitespace-nowrap">
              goal: to support small businesses
            </span>{" "}
            by providing them with modern digital solutions that are effective,
            affordable, and tailored to their needs.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <Image
            src="/images/team-photo.jpg"
            alt="Svelue Team"
            width={800}
            height={600}
            className="rounded-2xl w-full h-auto object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
