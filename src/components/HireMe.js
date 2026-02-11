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
          className={"fill-dark/80 animate-spin-slow dark:fill-light/80"}
        />

        <Link
          href="mailto:mdrashedahmed.work@gmail.com"
          className="flex items-center justify-center
absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark
text-light shadow-soft border border-solid border-dark/20 w-20 h-20 rounded-full
font-semibold hover:bg-primary hover:text-dark transition-colors

dark:bg-light dark:text-dark hover:dark:bg-primaryDark hover:dark:text-dark
                  hover:dark:border-light/30
md:w-12 md:h-12 md:text-[10px]

"
        >
          Let’s Talk
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
