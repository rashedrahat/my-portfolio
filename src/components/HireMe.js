import Link from "next/link";
import React from "react";
import { CircularText } from "./Icons";

const HireMe = () => {
  return (
    <div
      className="fixed left-4 bottom-4
    flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-2 md:bottom-auto md:absolute
    sm:right-0
    "
    >
      <div className="w-40 h-auto flex items-center justify-center relative md:w-24">
        <CircularText
          className={"fill-light/50 animate-spin-slow"}
        />

        <Link
          href="mailto:mdrashedahmed.work@gmail.com"
          className="flex items-center justify-center text-center text-[11px] leading-tight
            absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
            bg-primary text-dark w-20 h-20 rounded-full font-bold
            shadow-glow hover:bg-electric hover:text-light btn-glow transition-all
            md:w-12 md:h-12 md:text-[9px]"
        >
          Let’s Talk
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
