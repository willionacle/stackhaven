"use client";
import { useMemo } from "react";
import Image from "next/image";
import clsx from "clsx";

interface Props {
  logos: { src: any; alt: string }[];
  speed?: number;
  direction?: "left" | "right";
  width?: number;
}

export default function LogoMarquee({
  logos,
  speed = 25,
  direction = "left",
}: Props) {
  const duration = useMemo(() => {
    return (logos.length * 200) / speed;
  }, [logos, speed]);

  return (
    <div
      className={clsx(
        "flex gap-6 marquee-pause",
        direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
      )}
      style={{
        animationDuration: `${duration}s`,
      }}
    >
      {[
        ...logos,
        ...logos,
        ...logos,
        ...logos,
        ...logos,
        ...logos,
        ...logos,
        ...logos,
        ...logos,
        ...logos,
        ...logos,
        ...logos,
        ...logos,
        ...logos,
        ...logos,
        ...logos,
        ...logos,
        ...logos,
        ...logos,
        ...logos,
        ...logos,
        ...logos,
        ...logos,
        ...logos,
      ].map((logo, idx) => (
        <div className="flex items-center group justify-between min-w-[230px] rounded-lg dark:bg-neutral-900/30 backdrop-blur-xs p-4  border darker:border/50">
          <span className="whitespace-nowrap text-sm group-hover:text-white transition-all dark:text-white/80">
            {logo.alt}
          </span>
          <Image
            key={idx}
            src={logo.src}
            alt={logo.alt}
            className="object-contain brightness-0 dark:brightness-100 object-right opacity-70 hover:opacity-100 transition-all h-[25px] w-[60px] group-hover:grayscale-0"
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
}
