import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[70%] mx-auto flex flex-col items-center justify-between md:w-[90%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="w-full rounded-2xl glass-dark p-6"
      >
        <h3 className="font-bold text-2xl text-light sm:text-xl xs:text-lg">{type}</h3>
        <span className="font-medium text-light/40 xs:text-sm">
          {time} | {place}
        </span>
        <p className="mt-3 font-medium w-full md:text-sm text-justify text-light/55">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-24">
      <div className="grid grid-cols-12 gap-10 items-end mb-10">
        <div className="col-span-4 lg:col-span-12">
          <p className="text-xs uppercase tracking-[0.35em] text-electric/60">
            Foundations
          </p>
          <h2 className="font-bold text-5xl mt-4 text-light md:text-4xl">Education</h2>
        </div>
        <div className="col-span-8 lg:col-span-12">
          <p className="text-base text-light/45 leading-relaxed">
            Academic grounding in software engineering, web systems, and user-centered design.
          </p>
        </div>
      </div>

      <div ref={ref} className="w-[82%] mx-auto relative lg:w-[95%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[2px] h-full bg-electric/30 origin-top
          md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
              type="Bachelor of Science in Software Engineering"
              time="2015-2021"
              place="American International University - Bangladesh (AIUB)"
              info="CGPA: 3.55 / 4.00. Focused on software engineering fundamentals, web engineering, and HCI with practical project experience in full-stack development."
            />
        </ul>
      </div>
    </div>
  );
};

export default Education;
