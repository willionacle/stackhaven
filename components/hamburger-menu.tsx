"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { Button } from "./ui/button";

export default function Hamburger({
  onClick,
}: {
  onClick?: (dat: boolean) => void;
}) {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    onClick?.(open);
  }, [open]);

  return (
    // <button
    //   onClick={toggle}
    //   aria-label="Toggle Menu"
    //   className="relative w-8 h-8 flex flex-col justify-center items-center group"
    // >
    <Button
      onClick={toggle}
      variant="ghost"
      size="icon"
      className="rounded-full cursor-pointer block lg:hidden relative"
    >
      {/* Top Line */}
      <span
        className={clsx(
          "absolute h-0.5 w-5 bg-current rounded transition-all duration-300",
          open ? "rotate-45 translate-y-0.5" : "-translate-y-2"
        )}
      />
      {/* Middle Line */}
      <span
        className={clsx(
          "absolute h-0.5 w-5 bg-current rounded transition-all duration-300",
          open ? "opacity-0" : "opacity-100"
        )}
      />
      {/* Bottom Line */}
      <span
        className={clsx(
          "absolute h-0.5 w-5 bg-current rounded transition-all duration-300",
          open ? "-rotate-45 -translate-y-0.5" : "translate-y-2"
        )}
      />
    </Button>
  );
}
