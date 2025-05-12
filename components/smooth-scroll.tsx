"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Durasi animasi scroll
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Fungsi easing untuk smooth scroll
      lerp: 0.1, // Linear interpolation untuk smooth scroll
    });

    function raf(time: number) {
      lenis.raf(time); // Render frame untuk Lenis
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Bersihkan saat komponen di-unmount
    };
  }, []);

  return null;
}
