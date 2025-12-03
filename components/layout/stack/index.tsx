import StickySection from "@/components/sticky-section";
import LogoMarquee from "./logo-marquee";
import Logos from "./logos";
import FloatingDotGrid from "../hero/animated-bg";

export default function Stack() {
  return (
    <StickySection
      title="Tech Stack"
      desc={
        <>
          The tools and technologies that power our development process and help{" "}
          <br /> us build meaningful experiences.
        </>
      }
      id="tech-stack"
    >
      <FloatingDotGrid />
      <div className="overflow-hidden relative rounded-md">
        <div className="w-[120px] lg:w-[300px] h-full absolute left-0 top-0 bg-linear-to-r from-white to-neutral-100/0 dark:from-neutral-950 dark:to-neutral-950/0 z-10"></div>
        <Logos />
        <div className="w-[120px] lg:w-[300px] h-full absolute right-0 top-0 bg-linear-to-l from-white to-neutral-100/0 dark:from-neutral-950 dark:to-neutral-950/0 z-10"></div>
      </div>
    </StickySection>
  );
}
