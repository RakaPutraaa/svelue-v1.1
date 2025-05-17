/* eslint-disable padding-line-between-statements */
"use client";
import YellowGlassButton from "../../Ui/YellowGlassButton";

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-64px)] flex items-center justify-center text-white px-4">
      <div className="text-center max-w-2xl">
        <h2 className="text-4xl sm:text-6xl font-bold leading-tight">
          Creative Solutions For <br /> Modern
          <span
            className="text-[#030C4D] px-1 rounded"
            style={{ backgroundColor: "#F8A01B" }}
          >
            Businesses
          </span>
        </h2>
        <p className="mt-6 text-base sm:text-xl leading-tight">
          We increase revenue and ensure sustainable long-term growth for your
          business through powerful Webflow websites.
        </p>
        <YellowGlassButton className="mt-6 text-[#030C4D]">
          Get Started
        </YellowGlassButton>
        {/* Slogan */}
        <div className="flex items-center justify-center mt-8">
          <div
            className="h-px w-10  mr-4"
            style={{ backgroundColor: "#F8A01B" }}
          />
          <span className="text-white text-sm tracking-widest font-semibold uppercase">
            SVELUE | PARTNER DIGITAL BISNIS ANDA
          </span>
          <div
            className="h-px w-10 ml-4"
            style={{ backgroundColor: "#F8A01B" }}
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
