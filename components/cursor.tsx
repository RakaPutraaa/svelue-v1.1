"use client";

import { useMouse } from "@/hooks/use-mouse";

export default function Cursor() {
  const [mouse] = useMouse();

  if (mouse.x === null || mouse.y === null) return null;

  const size = 16;
  const scale = mouse.isHoveringTextOrButton ? 2 : 1;

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference transition-transform duration-75 ease-out"
      style={{
        transform: `translate3d(${mouse.x - size / 2}px, ${mouse.y - size / 2}px, 0)`,
      }}
    >
      <div
        className="bg-white rounded-full transition-transform duration-150 ease-in-out"
        style={{
          width: size,
          height: size,
          transform: `scale(${scale})`,
        }}
      />
    </div>
  );
}
