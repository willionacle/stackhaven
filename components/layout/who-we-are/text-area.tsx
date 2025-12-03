import React from "react";

export default function TextArea() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 leading-relaxed text-lg">
      <div>
        <span className="font-semibold bg-linear-to-r from-sky-400 to-sky-500 bg-clip-text text-transparent">
          StackHaven
        </span>{" "}
        was founded by a team driven by a shared commitment to{" "}
        <span className="font-semibold">digital product development</span>.
        Early collaboration and technical exploration naturally evolved into a{" "}
        <span className="font-semibold bg-linear-to-r from-sky-400 to-sky-500 bg-clip-text text-transparent">
          focused mission
        </span>
        : building a studio where concepts become{" "}
        <span className="font-semibold">
          reliable, high-quality software solutions
        </span>
        .
      </div>

      <div>
        We’re{" "}
        <span className="font-semibold">
          developers, designers, and problem-solvers
        </span>{" "}
        who believe that technology should feel{" "}
        <span className="font-semibold">simple, intuitive, and human</span>.
        We’re still early in our journey, but our goal is clear: to build{" "}
        <span className="font-semibold bg-linear-to-r from-sky-400 to-sky-500 bg-clip-text text-transparent">
          meaningful products
        </span>{" "}
        that help people and{" "}
        <span className="font-semibold">empower businesses</span>.
      </div>
    </div>
  );
}
