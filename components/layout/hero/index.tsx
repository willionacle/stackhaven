"use client";
import { Button } from "@/components/ui/button";
import AnimatedBg from "./animated-bg";
import DeviceElements from "./device-elements";
import TextArea from "./text-area";

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-dvh flex justify-center gap-10 flex-col pt-10 lg:pt-[200px] max-w-full lg:max-w-7xl mx-auto"
    >
      <TextArea />
      <AnimatedBg />
      <div className="flex mx-auto flex-wrap justify-center gap-2 z-10 ">
        <Button className="rounded-full uppercase min-w-[162px] dark:bg-neutral-50">
          <a href="#projects" className="px-8 lg:px-4">
            View Our Work
          </a>
        </Button>
        <Button className="rounded-full uppercase min-w-[162px] bg-neutral-50/ backdrop-blur-sm text-black dark:text-white border hover:text-white dark:hover:bg-white dark:hover:text-neutral-900 hover:bg-neutral-950">
          <a href="#contact" className="px-8 lg:px-4">
            Start a Project
          </a>
        </Button>
      </div>
      <DeviceElements />
    </section>
  );
}
