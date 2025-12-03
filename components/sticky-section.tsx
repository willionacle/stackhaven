"use client";

import {
  PropsWithChildren,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import clsx from "clsx";

interface StickySectionProps {
  title: string;
  className?: string;
  id?: string;
  desc?: ReactNode;
}

export default function StickySection({
  title,
  className,
  desc,
  id,
  children,
}: PropsWithChildren<StickySectionProps>) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Detect visibility
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Detect only when 40% of the section is visible
        if (entry.intersectionRatio > 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: [0, 0.4, 1],
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Update URL hash when active
  useEffect(() => {
    if (isVisible && id) {
      history.replaceState(null, "", `#${id}`);
    }
  }, [isVisible, id]);

  return (
    <section
      ref={sectionRef}
      className={clsx(
        "relative pt-20 lg:pt-32 max-w-[calc(100vw-35px)] lg:max-w-7xl mx-auto",
        className
      )}
      id={id}
    >
      <h2
        className={clsx(
          "sticky top-20 lg:top-20 font-bold md:font-regular px-4 py-2 text-4xl md:text-5xl lg:text-7xl z-[-1] bg-linear-to-b text-center from-neutral-500 to-neutral-100 dark:from-neutral-100 dark:to-[#0a0a0a] md:dark:from-neutral-500 from-0% md:dark:to-[#0a0a0a] to-75% bg-clip-text text-transparent transition-all duration-500",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
        )}
      >
        {title}
      </h2>

      <div className="mt-10">
        <p className="text-center mb-7">{desc}</p>
        {children}
      </div>
    </section>
  );
}
