import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function TextArea() {
  return (
    <div className="text-center z-10">
      <TypeAnimation
        sequence={["<Great/> ideas", 3000, "deserve to be <built/>.", 3000]}
        wrapper="span"
        speed={20}
        repeat={Infinity}
        className="uppercase font-extrabold text-4xl lg:text-7xl whitespace-pre-line"
      />
      <p className="dark:text-neutral-400">
        A small team of developers driven by design, performance, and clean
        engineering.
        <br /> From MVPs to full-scale apps — we turn ideas into real products.
      </p>
    </div>
  );
}
