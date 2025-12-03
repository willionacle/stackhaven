import StickySection from "@/components/sticky-section";
import AnimatedBg from "./animated-bg";
import Cards from "./cards";

export default function WhatWeDo() {
  return (
    <StickySection
      title="What We Do?"
      desc={
        <>
          {" "}
          We design and build modern digital products — from web apps to mobile
          apps and startup MVPs.
          <br /> Our goal is to create experiences that feel fast, intuitive,
          and reliable.
        </>
      }
      id="services"
    >
      <AnimatedBg />
      <Cards />
    </StickySection>
  );
}
