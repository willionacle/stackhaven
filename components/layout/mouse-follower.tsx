"use client";
import { useEffect, useRef } from "react";

export default function MouseFollower({
  size = 60,
  children,
}: {
  size?: number;
  children?: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMove);

    let raf: number;
    const follow = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.12;
      pos.current.y += (target.current.y - pos.current.y) * 0.12;

      if (ref.current) {
        ref.current.style.transform = `translate(${
          pos.current.x - size / 2
        }px, ${pos.current.y - size / 2}px)`;
      }

      raf = requestAnimationFrame(follow);
    };
    follow();

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(raf);
    };
  }, [size]);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed top-0 left-0 z-[-2]"
      style={{ width: size, height: size }}
    >
      {children}
    </div>
  );
}
