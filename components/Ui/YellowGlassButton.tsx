/* eslint-disable prettier/prettier */
"use client";

import { Button } from "@heroui/button";
import { ButtonProps } from "@heroui/button";

const YellowGlassButton = ({
  children,
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <Button
      {...props}
      className={`bg-[#F8A01B] text-black backdrop-blur-md bg-opacity-70 shadow-lg px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition border border-white/20 ${className}`}
    >
      {children}
    </Button>
  );
};

export default YellowGlassButton;
