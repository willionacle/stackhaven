"use client";

import Image from "next/image";
import Middle from "./middle";
import Logo from "@/public/images/logo.svg";
import { ModeToggle } from "./mode-toggle";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Hamburger from "@/components/hamburger-menu";
export default function Header() {
  const [active, setActive] = useState(false);
  const [isExpand, setIsExpand] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const triggerY = 10;

      if (window.scrollY > triggerY) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <div
        className={clsx(
          "flex max-w-[calc(100%-15px)] lg:max-w-7xl items-center transition-all left-1/2 -translate-x-1/2 top-0 rounded-md z-20 duration-500 ease-in-out border border-neutral-800/0 justify-between p-2 fixed w-full",
          active &&
            "border max-w-[calc(100%-35px)] lg:px-1  lg:max-w-7xl lg:pl-2 border-neutral-800/10 dark:border-neutral-800/50 bg-white/50 dark:bg-neutral-800/50 backdrop-blur-lg rounded-full! top-3 py-1"
        )}
      >
        <a href="#hero">
          <div className="flex items-center gap-2">
            <Image
              src={Logo}
              alt="shadcn-logo"
              className="w-9 h-9 transition-all duration-300"
            />
            {!active && (
              <h2 className="text-lg font-bold dark:text-white">StackHaven</h2>
            )}
          </div>
        </a>
        <div className="hidden lg:block">
          <Middle active={active} />
        </div>
        <div className="flex items-center gap-4">
          <Hamburger onClick={setIsExpand} isExpand={isExpand} />
          <ModeToggle />
        </div>
      </div>
      {isExpand && (
        <div className="max-w-[calc(100%-15px)] h-fit left-1/2 -translate-x-1/2 block lg:hidden fixed w-full z-30 top-3">
          <Middle active={active} onClick={() => setIsExpand(false)} />
        </div>
      )}
    </div>
  );
}
